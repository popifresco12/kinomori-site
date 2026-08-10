"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    label: "Origen",
    kicker: "01 · El comienzo",
    title: "Antes de ser plato.",
    body: "En los mercados de Asia, el vapor se eleva sobre el wok y el jengibre espera su turno. El sabor empieza con fuego, agua y la memoria de generaciones.",
    note: "Mercado · Amanecer",
    still: "media/stills/01-origen.webp",
  },
  {
    label: "El viaje",
    kicker: "02 · Hacia el sur",
    title: "Un largo camino hasta el Atlántico.",
    body: "De los fogones de Asia a la costa africana: la técnica viaja en barco, entre especias y la promesa de un mar nuevo.",
    note: "Mediterráneo · Atlántico",
    still: "media/stills/02-viaje.webp",
  },
  {
    label: "Tamraght",
    kicker: "03 · El pueblo de las olas",
    title: "Entre montañas y océano.",
    body: "Tamraght, a un suspiro de Taghazout: un pueblo de surf donde el ritmo lo marcan las olas, no los tagines.",
    note: "Costa · Atlas al fondo",
    still: "media/stills/03-tamraght.webp",
  },
  {
    label: "Los fuegos",
    kicker: "04 · Fuego y vapor",
    title: "El wok canta en Marruecos.",
    body: "Nasi goreng salta sobre la llama, los dumplings crujen y la salsa sichuan despierta los sentidos. La cocina asiática encuentra su casa en la costa.",
    note: "Wok · Dumplings",
    still: "media/stills/04-fuegos.webp",
  },
  {
    label: "La fusión",
    kicker: "05 · Dos mares, un plato",
    title: "El Atlántico entra en la receta.",
    body: "Judías verdes, ternera, sésamo y chile: el Thai beef rice y los dan dan noodles se encuentran con el pescado fresco del océano.",
    note: "Arroz · Noodles",
    still: "media/stills/05-fusion.webp",
  },
  {
    label: "La mesa",
    kicker: "06 · La primera noche",
    title: "Toda la costa, en una mesa.",
    body: "Surfistas, locales y viajeros comparten el mee siam, el miso negro y los dumplings de verduras. El plato se vacía, la noche se llena.",
    note: "Mesa compartida",
    still: "media/stills/06-mesa.webp",
  },
];

const clips = [
  "media/video/01-origen-to-viaje.mp4",
  "media/video/02-viaje-to-tamraght.mp4",
  "media/video/03-tamraght-to-fuegos.mp4",
  "media/video/04-fuegos-to-fusion.mp4",
  "media/video/05-fusion-to-mesa.mp4",
];

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export function TeaJourney() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const current = useRef(clips.map(() => 0));
  const targets = useRef(clips.map(() => 0));
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let disposed = false;
    const urls: string[] = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reduceMotion) {
      Promise.all(
        clips.map(async (clip, index) => {
          const response = await fetch(clip);
          if (!response.ok) throw new Error(`Unable to load ${clip}`);
          const url = URL.createObjectURL(await response.blob());
          urls.push(url);
          const video = videoRefs.current[index];
          if (video && !disposed) {
            video.src = url;
            video.load();
          }
        }),
      )
        .then(() => !disposed && setReady(true))
        .catch(() => !disposed && setReady(true));
    } else {
      setReady(true);
    }

    const read = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll) : 0;
      const exact = progress * clips.length;
      const segment = Math.min(clips.length - 1, Math.floor(exact));
      const local =
        segment === clips.length - 1 ? clamp(exact - segment) : exact - segment;

      targets.current = targets.current.map((_, index) => {
        if (index < segment) return 1;
        if (index === segment) return local;
        return 0;
      });

      const fade = clamp((local - 0.9) / 0.1);
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        let opacity = 0;
        if (index === segment) opacity = 1 - fade;
        if (index === segment + 1) opacity = fade;
        video.style.opacity = String(opacity);
      });

      const nextActive = Math.min(scenes.length - 1, Math.round(exact));
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
      document.documentElement.style.setProperty(
        "--journey-progress",
        progress.toFixed(4),
      );
    };

    let rafId = 0;
    const animate = () => {
      videoRefs.current.forEach((video, index) => {
        if (!video || !Number.isFinite(video.duration) || video.seeking) return;
        const desired = targets.current[index];
        current.current[index] += (desired - current.current[index]) * 0.16;
        const time = clamp(current.current[index], 0, 0.998) * video.duration;
        if (Math.abs(video.currentTime - time) > 0.012) {
          try {
            video.currentTime = time;
          } catch {
            // The still poster remains visible until the browser can seek.
          }
        }
      });
      rafId = requestAnimationFrame(animate);
    };

    read();
    animate();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const jumpTo = (index: number) => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: (index / (scenes.length - 1)) * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <main className="journey-track" aria-label="El viaje de Kinomori a Marruecos">
      <section className="journey-shell">
        <div className="journey-stage" aria-hidden="true">
          <img className="journey-poster" src={scenes[active].still} alt="" />
          {clips.map((clip, index) => (
            <video
              key={clip}
              ref={(node) => {
                videoRefs.current[index] = node;
              }}
              className="journey-film"
              muted
              playsInline
              preload={index < 2 ? "auto" : "metadata"}
              poster={scenes[index].still}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="journey-shade" aria-hidden="true" />

        <header className="journey-topbar">
          <div className="journey-brand">
            <span className="journey-brand-mark" aria-hidden="true" />
            <span>Kinomori</span>
          </div>
          <div className="journey-meta">
            <span>Tamraght · Cocina asiática</span>
            <span>{ready ? "Desliza despacio" : "Preparando el viaje…"}</span>
          </div>
        </header>

        <div className="journey-copy-layer">
          {scenes.map((scene, index) => (
            <article
              className={`journey-copy ${active === index ? "is-active" : ""}`}
              key={scene.label}
              aria-hidden={active !== index}
            >
              <div className="journey-kicker">{scene.kicker}</div>
              <h1 className="journey-title">{scene.title}</h1>
              <p className="journey-body">{scene.body}</p>
              <span className="journey-note">{scene.note}</span>
              {index === scenes.length - 1 && (
                <button
                  className="journey-restart"
                  type="button"
                  onClick={() => jumpTo(0)}
                >
                  Volver a empezar
                </button>
              )}
            </article>
          ))}
        </div>

        <nav className="journey-rail" aria-label="Capítulos del viaje">
          {scenes.map((scene, index) => (
            <button
              className={`journey-dot ${active === index ? "is-active" : ""}`}
              type="button"
              key={scene.label}
              onClick={() => jumpTo(index)}
              aria-label={`Ir al capítulo: ${scene.label}`}
              aria-current={active === index ? "step" : undefined}
            >
              <span className="journey-dot-label">{scene.label}</span>
            </button>
          ))}
        </nav>

        <footer className="journey-footer">
          <div className="journey-scroll">
            <i aria-hidden="true" />
            <span>El scroll controla la cámara</span>
          </div>
          <div className="journey-progress" aria-hidden="true" />
          <span>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(scenes.length).padStart(2, "0")}
          </span>
        </footer>
      </section>
    </main>
  );
}
