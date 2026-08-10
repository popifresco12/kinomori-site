#!/usr/bin/env python3
"""Prueba: generar 1 imagen con grok-imagine-image usando las credenciales OAuth de Hermes."""
import sys, os, json, base64, io

sys.path.insert(0, r"C:\Users\carlo\AppData\Local\hermes\hermes-agent")
os.environ.setdefault("HERMES_HOME", r"C:\Users\carlo\AppData\Local\hermes")

import requests
from tools.xai_http import resolve_xai_http_credentials

def main():
    creds = resolve_xai_http_credentials()
    api_key = creds.get("api_key", "")
    base_url = creds.get("base_url", "https://api.x.ai/v1")
    source = creds.get("provider", "?")
    if not api_key:
        print("ERROR: sin credenciales xAI")
        return 1
    print(f"Credenciales OK | source: {source} | key: {api_key[:10]}...")

    url = f"{base_url.rstrip('/')}/images/generations"
    payload = {
        "model": "grok-imagine-image",
        "prompt": (
            "Wabi-sabi warm still life photograph: a handmade ceramic bowl with "
            "steaming noodles on a worn dark wooden table, soft golden-hour light "
            "filtering through leaves casting organic shadows on a stucco wall, "
            "earthy beige and terracotta tones, rough tactile textures, intimate "
            "artisan atmosphere, slow-living mood, no text, no people"
        ),
        "n": 1,
        "response_format": "b64_json",
        "aspect_ratio": "3:4",
        "resolution": "1k",
    }
    print(f"POST {url}")
    r = requests.post(url, headers={"Authorization": f"Bearer {api_key}"}, json=payload, timeout=180)
    print(f"HTTP {r.status_code}")
    if r.status_code != 200:
        print("Respuesta:", r.text[:800])
        return 1
    data = r.json()
    items = data.get("data", [])
    if not items:
        print("Sin data. Respuesta:", json.dumps(data)[:500])
        return 1
    b64 = items[0].get("b64_json")
    if b64:
        raw = base64.b64decode(b64)
        out = r"C:\Users\carlo\kinomori-site\public\media\test-grok.png"
        with open(out, "wb") as f:
            f.write(raw)
        print(f"OK imagen guardada: {out} ({len(raw)//1024} KB)")
    else:
        print("Sin b64; respuesta:", json.dumps(data)[:500])
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
