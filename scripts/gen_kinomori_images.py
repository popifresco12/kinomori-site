#!/usr/bin/env python3
"""Genera imágenes grok-imagine para productos y workshops de Kinomori (estilo wabi-sabi cálido)."""
import sys, os, json, base64, time

sys.path.insert(0, r"C:\Users\carlo\AppData\Local\hermes\hermes-agent")
os.environ.setdefault("HERMES_HOME", r"C:\Users\carlo\AppData\Local\hermes")

import requests
from tools.xai_http import resolve_xai_http_credentials

OUT_DIR = r"C:\Users\carlo\kinomori-site\public\media"

# Estilo base común — wabi-sabi cálido (de las refs de SylviaSend)
STYLE = (
    "wabi-sabi warm still life photograph, earthy beige and terracotta tones, "
    "soft golden-hour light filtering through leaves casting organic shadows on a "
    "stucco wall, rough tactile textures, handmade artisan ceramics and worn dark "
    "wood, intimate slow-living atmosphere, no text, no people, photorealistic, "
    "cinematic soft focus, high detail"
)

JOBS = [
    # ---- PRODUCTOS (8) ----
    ("product-nasi-goreng-kit", "3:4",
     "A rustic ceramic bowl of Indonesian nasi goreng fried rice with a small "
     "glass jar of sambal chili paste beside it on a worn dark wooden table, "
     "steam rising, chopsticks resting on the bowl rim."),
    ("product-dan-dan-noodles", "3:4",
     "A handmade ceramic bowl of dan dan noodles with spicy red chili oil, "
     "peanut sauce and minced pork topping, chopsticks lifting noodles, on a "
     "weathered wooden table with a small chili garnish."),
    ("product-miso-negro", "3:4",
     "An open glass jar of dark black miso paste with a wooden spoon, on a "
     "worn dark wooden table, a small piece of glazed salmon beside it, soft "
     "warm window light."),
    ("product-matcha-ceremonial", "3:4",
     "A small tin of ceremonial matcha powder with a bamboo chashaku scoop and "
     "a whisked bowl of bright green matcha tea, on rustic dark wood, steam "
     "rising gently."),
    ("product-te-oolong", "3:4",
     "A small ceramic cup of golden oolong tea with loose tieguanyin leaves "
     "scattered on a worn wooden table, a simple tea strainer, warm afternoon "
     "light with leaf shadows."),
    ("product-pulsera-zen", "3:4",
     "A handmade bracelet of natural stone beads and cotton rope with a "
     "Japanese knot, resting on a piece of raw linen cloth on dark wood, warm "
     "side light, artisan craft atmosphere."),
    ("product-camiseta-kinomori", "3:4",
     "A folded organic cotton t-shirt in forest green with a small embroidered "
     "kanji character on the chest, lying on a wooden bench, soft warm light "
     "and plant shadows, minimalist."),
    ("product-tetera-hierro", "3:4",
     "A cast iron tetsubin teapot with enameled interior and a small steel "
     "infuser basket, on a rustic wooden tray, steam rising from the spout, "
     "warm golden light."),
    # ---- WORKSHOPS (4) ----
    ("workshop-wok-desde-cero", "3:4",
     "A high-heat wok with vegetables and noodles tossing in flames over a "
     "gas burner in a rustic kitchen, motion and fire, warm dramatic light, "
     "steam and sparks, hands with a spatula."),
    ("workshop-ceremonia-te", "3:4",
     "A Japanese tea ceremony setting: ceramic matcha bowl, bamboo whisk "
     "(chasen), tea scoop and a small iron kettle on a dark wooden table, "
     "soft light, serene and meditative atmosphere."),
    ("workshop-dumplings-a-mano", "3:4",
     "Hands folding handmade dumplings on a floured wooden board, pleated "
     "dumplings lined up, flour dust in warm light, bamboo steamer nearby, "
     "artisan kitchen mood."),
    ("workshop-ramen-casero", "3:4",
     "A rich bowl of homemade ramen with chashu pork, soft-boiled ajitama egg "
     "and fresh noodles, steam rising, on a dark wooden counter in a warm "
     "rustic kitchen, chopsticks lifting noodles."),
]


def gen_image(api_key, base_url, name, prompt, aspect="3:4"):
    url = f"{base_url.rstrip('/')}/images/generations"
    payload = {
        "model": "grok-imagine-image",
        "prompt": f"{prompt} {STYLE}",
        "n": 1,
        "response_format": "b64_json",
        "aspect_ratio": aspect,
        "resolution": "1k",
    }
    r = requests.post(
        url, headers={"Authorization": f"Bearer {api_key}"}, json=payload, timeout=240
    )
    if r.status_code != 200:
        raise RuntimeError(f"HTTP {r.status_code}: {r.text[:400]}")
    items = r.json().get("data", [])
    if not items or not items[0].get("b64_json"):
        raise RuntimeError(f"Sin b64 en respuesta: {json.dumps(r.json())[:400]}")
    raw = base64.b64decode(items[0]["b64_json"])
    out = os.path.join(OUT_DIR, f"{name}.png")
    with open(out, "wb") as f:
        f.write(raw)
    return out, len(raw)


def main():
    creds = resolve_xai_http_credentials()
    api_key = creds.get("api_key", "")
    base_url = creds.get("base_url", "https://api.x.ai/v1")
    if not api_key:
        print("ERROR: sin credenciales xAI")
        return 1

    only = sys.argv[1:] if len(sys.argv) > 1 else None
    ok, fail = 0, 0
    for name, aspect, prompt in JOBS:
        if only and name not in only:
            continue
        try:
            out, size = gen_image(api_key, base_url, name, prompt, aspect)
            print(f"OK  {name}  ({size//1024} KB) -> {os.path.basename(out)}")
            ok += 1
        except Exception as e:
            print(f"FAIL {name}: {e}")
            fail += 1
        time.sleep(2)  # respetar rate limits
    print(f"\n=== {ok} ok, {fail} fail ===")
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
