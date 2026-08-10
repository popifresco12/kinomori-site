#!/usr/bin/env python3
"""Genera clips de video (grok-imagine-video) para las 6 escenas Kinomori.
Fixes: image como {url: dataURI}, polling /v1/videos/{id}, IPv4 forzado."""
import json, base64, os, subprocess, sys, time

OUT_DIR = r"C:\Users\carlo\kinomori-site\downloads"

with open(r"C:\Users\carlo\AppData\Local\hermes\auth.json", encoding="utf-8") as f:
    auth = json.load(f)
TOKEN = auth["credential_pool"]["xai-oauth"][0]["access_token"]

API = "https://api.x.ai/v1"

SCENES = [
    ("scene01-market", "Slow cinematic push-in on the wok: steam rises gently, flames flicker under the pan, ginger and red chilies in sharp focus on the wooden table, paper lanterns glowing softly in the blurred background. Gentle ambient market sounds, soft sizzling, no music, no text."),
    ("scene02-ship", "Slow dolly across the deck of the traditional ship: burlap spice sacks in foreground, warm lantern light swaying, ocean waves gently rolling with golden sunset reflections, seabirds crossing the sky. Calm sea sounds, creaking wood, no music, no text."),
    ("scene03-tamraght", "Slow pan across the surf village at golden hour: surfers walking with boards toward the beach, waves rolling in, white and terracotta buildings on the hillside, Atlas mountains hazy in the distance. Ocean waves and distant village sounds, no music, no text."),
    ("scene04-wok", "Dramatic slow push-in on the wok over roaring flame: fried rice arcing through the air as the chef tosses it, fire and steam glow, bamboo steamer with dumplings beside, spice jars blurred behind. Sizzling and fire crackling sounds, no music, no text."),
    ("scene05-fusion", "Slow tilt and push-in on the table spread: Thai beef rice and dan dan noodles steaming in ceramic bowls, fresh fish on banana leaf, sesame and chili scattered, warm restaurant light with bokeh lanterns behind. Soft ambient restaurant sounds, no music, no text."),
    ("scene06-table", "Slow pull-back from the feast: the long shared table with surfers, locals and travelers laughing, passing dumplings and noodles, warm string lights and full moon over the ocean behind. Joyful chatter and clinking sounds, no music, no text."),
]

def submit(name, prompt):
    img_path = os.path.join(OUT_DIR, f"{name}.png")
    with open(img_path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode()
    req = {
        "model": "grok-imagine-video",
        "prompt": prompt,
        "image": {"url": f"data:image/png;base64,{b64}"},
        "duration": 8,
        "aspect_ratio": "16:9",
        "resolution": "720p",
    }
    req_path = os.path.join(OUT_DIR, f"_vreq_{name}.json")
    resp_path = os.path.join(OUT_DIR, f"_vresp_{name}.json")
    with open(req_path, "w", encoding="utf-8") as f:
        json.dump(req, f)
    r = subprocess.run(
        ["curl", "-4", "-s", "-m", "120", "-X", "POST", f"{API}/videos/generations",
         "-H", f"Authorization: Bearer {TOKEN}", "-H", "Content-Type: application/json",
         "--data-binary", f"@{req_path}", "-o", resp_path],
        capture_output=True, text=True, timeout=140,
    )
    try:
        with open(resp_path, encoding="utf-8") as f:
            data = json.load(f)
        rid = data.get("request_id")
        if rid:
            print(f"[{name}] submit OK request_id={rid}")
            return rid
        print(f"[{name}] submit API: {str(data)[:250]}")
    except Exception as e:
        print(f"[{name}] submit ERROR: {e}")
    return None

def poll(rid, name, max_wait=1200):
    t0 = time.time()
    while time.time() - t0 < max_wait:
        r = subprocess.run(
            ["curl", "-4", "-s", "-m", "40", f"{API}/videos/{rid}",
             "-H", f"Authorization: Bearer {TOKEN}"],
            capture_output=True, text=True, timeout=45,
        )
        out = r.stdout.strip()
        if out:
            try:
                d = json.loads(out)
                status = d.get("status")
                if status == "done":
                    url = d.get("video", {}).get("url")
                    print(f"[{name}] DONE -> {url[:90]}")
                    return url
                elif status in ("failed", "expired"):
                    print(f"[{name}] {status}: {str(d)[:250]}")
                    return None
                else:
                    print(f"[{name}] {status} ({int(time.time()-t0)}s)...")
            except Exception as e:
                print(f"[{name}] poll parse: {e}")
        time.sleep(20)
    print(f"[{name}] TIMEOUT")
    return None

def download(url, name):
    out = os.path.join(OUT_DIR, f"{name}.mp4")
    r = subprocess.run(["curl", "-4", "-s", "-m", "180", "-L", url, "-o", out],
                       capture_output=True, text=True, timeout=200)
    if os.path.exists(out) and os.path.getsize(out) > 10000:
        print(f"[{name}] descargado {os.path.getsize(out)} bytes")
        return out
    print(f"[{name}] descarga fallo ({os.path.getsize(out) if os.path.exists(out) else 0})")
    return None

if __name__ == "__main__":
    targets = sys.argv[1:] or [s[0] for s in SCENES]
    results = {}
    for name, prompt in SCENES:
        if name not in targets:
            continue
        rid = submit(name, prompt)
        if not rid:
            results[name] = None
            continue
        url = poll(rid, name)
        results[name] = download(url, name) if url else None
    print("=== RESUMEN ===")
    for k, v in results.items():
        print(f"  {k}: {v or 'FALLO'}")
