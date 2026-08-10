import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Kinomori — viaje scrollytelling con imágenes generadas             */
/*  Cada capítulo muestra su escena fotográfica con crossfade suave.   */
/* ------------------------------------------------------------------ */

const SCENES = [
  {
    label: "El bosque",
    kicker: "01 · 木森 Kinomori",
    title: "Todo empieza en un bosque.",
    body: "Kinomori significa «bosque». De ahí viene todo: la madera que envejece, la cerámica que se agrieta con el uso, el té que se abre en la taza. La belleza de lo imperfecto, de lo que respira con el tiempo.",
    note: "Wabi-sabi · Lo que perdura",
    img: "scenes/scene01-market.mp4",
  },
  {
    label: "El viaje",
    kicker: "02 · Hacia el sur",
    title: "Té, especias y manos que viajan.",
    body: "De los mercados de Asia al Atlántico: el té verde, el hierro de las teteras, el gesto del wok. Las técnicas viajan en barco, pero la paciencia —la del té, la de la madera— viaja más lento.",
    note: "Asia · Atlántico",
    img: "scenes/scene02-ship.mp4",
  },
  {
    label: "Tamraght",
    kicker: "03 · El pueblo de las olas",
    title: "Entre montañas y océano.",
    body: "Tamraght, a un suspiro de Taghazout: un pueblo de surf donde el ritmo lo marcan las olas y la luz cae dorada sobre el estuco. Aquí, en la costa, el bosque echa raíces.",
    note: "Costa · Atlas al fondo",
    img: "scenes/scene03-tamraght.mp4",
  },
  {
    label: "Kitchen",
    kicker: "04 · Los fuegos",
    title: "El wok canta en Marruecos.",
    body: "Nasi goreng salta sobre la llama, los dumplings crujen y el chile despierta los sentidos. La cocina asiática encuentra su casa en la costa, sin olvidar de dónde vino.",
    note: "Fuego · Vapor · Sésamo",
    img: "scenes/scene04-wok.mp4",
    cta: { to: "/productos", label: "Ver productos" },
  },
  {
    label: "Tea Room",
    kicker: "05 · La pausa",
    title: "Una taza, y el mundo se detiene.",
    body: "Matcha batido a mano, oolong que se abre en la tercera infusión. En la sala del té no hay prisa: solo el agua, la cerámica y el momento. El té se sirve y también se lleva a casa.",
    note: "Matcha · Oolong · Silencio",
    img: "media/workshop-ceremonia-te.webp",
    cta: { to: "/productos", label: "Ver el té" },
  },
  {
    label: "Shopping",
    kicker: "06 · Las manos",
    title: "Objetos que guardan tiempo.",
    body: "Pulseras anudadas a mano, ropa de algodón orgánico, teteras de hierro fundido. Cada pieza lleva la marca de una mano: imperfecta, única, hecha para durar.",
    note: "Artesanía · Ropa · Teteras",
    img: "media/product-pulsera-zen.webp",
    cta: { to: "/productos", label: "Ver la tienda" },
  },
  {
    label: "Workshops",
    kicker: "07 · Aprender",
    title: "El bosque se aprende con las manos.",
    body: "Clases de wok, ceremonia del té, dumplings a mano y aceite de argán con aroma. No venimos a mirar: venimos a ensuciarnos las manos y llevarnos la técnica a casa.",
    note: "Cocina · Té · Argan oil",
    img: "media/workshop-wok-desde-cero.webp",
    cta: { to: "/workshops", label: "Ver workshops" },
  },
];

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export function KinomoriWorld() {
  const [active, setActive] = useState(0);
  const [videoOk, setVideoOk] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const read = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll) : 0;
      const next = Math.min(SCENES.length - 1, Math.round(progress * (SCENES.length - 1)));
      setActive((prev) => (prev === next ? prev : next));
    };
    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  /* Reproducir solo el video del capítulo activo; pausar el resto */
  useEffect(() => {
    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>(".kage-film-video")
    );
    videos.forEach((v, i) => {
      if (i === active) {
        const p = v.play();
        if (p) p.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const jumpTo = (index: number) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: (index / (SCENES.length - 1)) * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <main className="journey-track" aria-label="Kinomori: del bosque a la costa">
      <section className="journey-shell">
        {/* Fondo: video por capítulo si existe; si no, imagen estática */}
        <div className="kage-stage" aria-hidden="true">
          {SCENES.map((scene, index) => {
            const isVideo = scene.img.endsWith(".mp4");
            const useVideo = isVideo && videoOk[index] !== false;
            return (
              <div
                key={scene.label}
                className={`kage-film-wrap ${active === index ? "is-active" : ""}`}
              >
                {/* Imagen base (siempre disponible) */}
                <img
                  className="kage-film kage-film-img"
                  src={scene.img.replace(/\.mp4$/, ".png")}
                  alt=""
                  draggable={false}
                />
                {/* Video si existe */}
                {useVideo && (
                  <video
                    className="kage-film kage-film-video"
                    src={scene.img}
                    muted
                    loop
                    playsInline
                    preload={index < 2 ? "auto" : "none"}
                    onError={() => setVideoOk((p) => ({ ...p, [index]: false }))}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="journey-shade" aria-hidden="true" />

        <header className="journey-topbar">
          <div className="journey-brand">
            <span className="journey-brand-mark" aria-hidden="true" />
            <span>Kinomori</span>
          </div>
          <div className="journey-meta">
            <span>Tamraght · Kitchen · Té · Tienda</span>
            <span>Desliza y viaja</span>
          </div>
        </header>

        <div className="journey-copy-layer">
          {SCENES.map((scene, index) => (
            <article
              className={`journey-copy ${active === index ? "is-active" : ""}`}
              key={scene.label}
              aria-hidden={active !== index}
            >
              <div className="journey-kicker">{scene.kicker}</div>
              <h1 className="journey-title">{scene.title}</h1>
              <p className="journey-body">{scene.body}</p>
              <span className="journey-note">{scene.note}</span>
              {scene.cta && (
                <Link
                  to={scene.cta.to}
                  className="journey-restart journey-cta"
                  onClick={(e) => e.stopPropagation()}
                >
                  {scene.cta.label} →
                </Link>
              )}
              {index === SCENES.length - 1 && (
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
          {SCENES.map((scene, index) => (
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
            <span>El scroll mueve la cámara</span>
          </div>
          <div className="journey-progress" aria-hidden="true" />
          <span>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(SCENES.length).padStart(2, "0")}
          </span>
        </footer>
      </section>
    </main>
  );
}
