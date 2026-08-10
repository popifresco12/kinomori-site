#!/usr/bin/env python3
"""Genera las 5 escenas restantes del viaje Kinomori con grok-imagine-image.
Usa curl via subprocess (evita el bug IPv6 de urllib)."""
import json, base64, os, subprocess, sys, time

OUT_DIR = r"C:\Users\carlo\kinomori-site\downloads"

# Token OAuth xAI
with open(r"C:\Users\carlo\AppData\Local\hermes\auth.json", encoding="utf-8") as f:
    auth = json.load(f)
TOKEN = auth["credential_pool"]["xai-oauth"][0]["access_token"]

SCENES = [
    ("scene02-ship", "A traditional Asian cargo ship crossing the sea at dusk, from Asia toward the African coast. Spice sacks, rope, wooden deck, warm lantern light on deck, deep blue ocean with golden sunset reflections, distant horizon. Cinematic, film grain, editorial photography, atmospheric, high detail."),
    ("scene03-tamraght", "Tamraght surf village on the Moroccan Atlantic coast, near Taghazout. White and terracotta buildings on a hillside, palm trees, surfers walking with boards toward a beach with rolling waves, Atlas mountains in the far background under a warm sunset sky. Cinematic, editorial photography, high detail."),
    ("scene04-wok", "A large dark metal wok over a roaring open flame in a Moroccan coastal kitchen at night. Nasi goreng rice flying in the air as it is tossed, steam and fire glow, dumplings in a bamboo steamer beside, sichuan chili oil, warm amber light against cool blue night. Cinematic close-up, film grain, high detail, dramatic."),
    ("scene05-fusion", "Thai beef rice and dan dan noodles being plated on ceramic dishes, with fresh Atlantic ocean fish, green beans, sesame seeds and red chili on a rustic wooden table. Asian and Moroccan culinary fusion, warm restaurant light, shallow depth of field, editorial food photography, high detail."),
    ("scene06-table", "A long shared dinner table on a Moroccan rooftop at night. Surfers, locals and travelers sharing mee siam, black miso and vegetable dumplings, hands reaching for dishes, warm string lights overhead, ocean and moon in the background. Joyful, cinematic, editorial photography, high detail."),
]

def gen_image(name, prompt):
    req = json.dumps({"model": "grok-imagine-image-quality", "prompt": prompt, "n": 1, "response_format": "b64_json"})
    req_path = os.path.join(OUT_DIR, f"_req_{name}.json")
    resp_path = os.path.join(OUT_DIR, f"_resp_{name}.json")
    with open(req_path, "w", encoding="utf-8") as f:
        f.write(req)
    r = subprocess.run(
        ["curl", "-s", "-m", "300", "-X", "POST", "https://api.x.ai/v1/images/generations",
         "-H", f"Authorization: Bearer {TOKEN}", "-H", "Content-Type: application/json",
         "--data-binary", f"@{req_path}", "-o", resp_path],
        capture_output=True, text=True, timeout=320,
    )
    try:
        with open(resp_path, encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"[{name}] ERROR parse: {e}")
        return False
    if "data" in data and data["data"]:
        b64 = data["data"][0]["b64_json"]
        out = os.path.join(OUT_DIR, f"{name}.png")
        with open(out, "wb") as f:
            f.write(base64.b64decode(b64))
        print(f"[{name}] OK {os.path.getsize(out)} bytes")
        return True
    else:
        print(f"[{name}] API: {str(data)[:300]}")
        return False

for name, prompt in SCENES:
    gen_image(name, prompt)
    time.sleep(2)

print("=== FIN ===")
