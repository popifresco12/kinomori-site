#!/usr/bin/env python3
"""Regenera escenas 1, 4 y 6 en 16:9 (horizontal). La 6 sin manos ni caras."""
import json, base64, os, subprocess, sys

OUT_DIR = r"C:\Users\carlo\kinomori-site\downloads"

with open(r"C:\Users\carlo\AppData\Local\hermes\auth.json", encoding="utf-8") as f:
    auth = json.load(f)
TOKEN = auth["credential_pool"]["xai-oauth"][0]["access_token"]

# Prompts forzando 16:9 landscape. Scene06: sin manos ni primeros planos de caras.
SCENES = [
    ("scene01-market",
     "Wide 16:9 landscape cinematic photo, horizontal composition. Traditional East Asian night market at dawn: a large dark metal wok over an open flame, steam rising, fresh ginger root and red chilies on a worn wooden market table, paper lanterns glowing, deep indigo and warm amber palette, film grain, editorial photography. Horizontal 16:9 widescreen framing, no text."),
    ("scene04-wok",
     "Wide 16:9 landscape cinematic photo, horizontal composition. Dramatic cooking scene: a large wok over a roaring flame with fried rice arcing through the air, fire and steam glow, bamboo steamer with dumplings beside, spice jars blurred in background, warm amber light against cool blue night. Horizontal 16:9 widescreen framing, no text."),
    ("scene06-table",
     "Wide 16:9 landscape cinematic photo, horizontal composition. A long shared dinner table on a Moroccan rooftop at night seen from a distance: dishes of mee siam, black miso and vegetable dumplings on the table, warm string lights, full moon over the ocean behind, empty chairs and no people close to camera, no hands visible, no close-up faces, people only as tiny distant silhouettes far in the background. Joyful warm atmosphere. Horizontal 16:9 widescreen framing, no text."),
]

def gen(name, prompt):
    req = {"model": "grok-imagine-image-quality", "prompt": prompt, "n": 1, "response_format": "b64_json"}
    req_path = os.path.join(OUT_DIR, f"_rq_{name}.json")
    resp_path = os.path.join(OUT_DIR, f"_rs_{name}.json")
    with open(req_path, "w", encoding="utf-8") as f:
        json.dump(req, f)
    r = subprocess.run(
        ["curl", "-4", "-s", "-m", "240", "-X", "POST", "https://api.x.ai/v1/images/generations",
         "-H", f"Authorization: Bearer {TOKEN}", "-H", "Content-Type: application/json",
         "--data-binary", f"@{req_path}", "-o", resp_path],
        capture_output=True, text=True, timeout=260,
    )
    try:
        with open(resp_path, encoding="utf-8") as f:
            data = json.load(f)
        if "data" in data and data["data"]:
            b64 = data["data"][0]["b64_json"]
            out = os.path.join(OUT_DIR, f"{name}.png")
            with open(out, "wb") as f:
                f.write(base64.b64decode(b64))
            print(f"[{name}] OK {os.path.getsize(out)} bytes")
            return True
        print(f"[{name}] API: {str(data)[:250]}")
    except Exception as e:
        print(f"[{name}] ERROR: {e}")
    return False

if __name__ == "__main__":
    for name, prompt in SCENES:
        gen(name, prompt)
    print("=== FIN ===")
