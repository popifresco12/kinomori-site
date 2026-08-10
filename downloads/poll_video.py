#!/usr/bin/env python3
"""Polling de jobs de video de xAI (grok-imagine-video)."""
import json, os, subprocess, sys, time, urllib.request

with open(r"C:\Users\carlo\AppData\Local\hermes\auth.json", encoding="utf-8") as f:
    auth = json.load(f)
TOKEN = auth["credential_pool"]["xai-oauth"][0]["access_token"]

def poll(rid, max_wait=600):
    t0 = time.time()
    while time.time() - t0 < max_wait:
        # probar GET con varios paths
        for path in [f"/v1/videos/generations/{rid}", f"/v1/videos/generations/{rid}/result"]:
            r = subprocess.run(
                ["curl", "-s", "-m", "30", f"https://api.x.ai{path}",
                 "-H", f"Authorization: Bearer {TOKEN}"],
                capture_output=True, text=True, timeout=35,
            )
            out = r.stdout.strip()
            if out:
                try:
                    d = json.loads(out)
                    print(f"[{path}] status={d.get('status')} keys={list(d.keys())[:8]}")
                    if d.get("status") in ("completed", "failed", "error"):
                        return d
                    if "video" in str(d.get("data", "")) or d.get("video_url") or d.get("url"):
                        return d
                except Exception as e:
                    print(f"[{path}] raw: {out[:200]}")
        time.sleep(15)
    return None

if __name__ == "__main__":
    rid = sys.argv[1] if len(sys.argv) > 1 else "7a29202d-d6de-9a62-9092-97ed4411e92d"
    print(f"Polling {rid}...")
    res = poll(rid)
    print("=== RESULTADO ===")
    print(json.dumps(res, indent=2)[:1200] if res else "sin resultado en el tiempo maximo")
