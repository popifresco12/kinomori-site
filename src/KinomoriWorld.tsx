import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "./i18n/I18nContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

/* ------------------------------------------------------------------ */
/*  Kinomori — viaje scrollytelling con imágenes generadas             */
/*  Cada capítulo muestra su escena fotográfica con crossfade suave.   */
/*  Los textos se resuelven desde el diccionario i18n (scenes.N.*).    */
/* ------------------------------------------------------------------ */

/** Datos estructurales de cada escena; el texto vive en i18n. */
const SCENES = [
  { img: "scenes/scene01-cocina.webp", cta: undefined as { to: string } | undefined },
  { img: "scenes/scene02-cocina-detalle.webp", cta: { to: "/menu" } },
  { img: "scenes/scene03-tea-room.webp", cta: undefined },
  { img: "scenes/scene04-matcha.webp", cta: { to: "/te" } },
  { img: "scenes/scene05-productos.webp", cta: { to: "/productos" } },
  { img: "scenes/scene06-te-products.webp", cta: undefined },
  { img: "scenes/scene07-surf.webp", cta: undefined },
  { img: "scenes/scene08-workshops.webp", cta: { to: "/workshops" } },
  { img: "scenes/scene09-local.webp", cta: undefined },
];

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export function KinomoriWorld() {
  const { t } = useI18n();
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
    <main className="journey-track" aria-label={t("ui.journeyAria")}>
      <section className="journey-shell">
        {/* Fondo: video por capítulo si existe; si no, imagen estática */}
        <div className="kage-stage" aria-hidden="true">
          {SCENES.map((scene, index) => {
            const isVideo = scene.img.endsWith(".mp4");
            const useVideo = isVideo && videoOk[index] !== false;
            return (
              <div
                key={index}
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
            <span className="journey-brand-kinomori">Kinomori</span>
            <span className="journey-brand-kanji">木の森</span>
          </div>
          <div className="journey-meta">
            <span>
              Tamraght · {t("nav.menu")} · {t("nav.tea")} · {t("nav.shop")}
            </span>
            <span>{t("ui.scrollHint")}</span>
          </div>
          <LanguageSwitcher compact />
        </header>

        <div className="journey-copy-layer">
          {SCENES.map((scene, index) => (
            <article
              className={`journey-copy ${active === index ? "is-active" : ""}`}
              key={index}
              aria-hidden={active !== index}
            >
              <div className="journey-kicker">{t(`scenes.${index}.kicker`)}</div>
              <h1 className="journey-title">{t(`scenes.${index}.title`)}</h1>
              <p className="journey-body">{t(`scenes.${index}.body`)}</p>
              <span className="journey-note">{t(`scenes.${index}.note`)}</span>
              {scene.cta && (
                <Link
                  to={scene.cta.to}
                  className="journey-restart journey-cta"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t(`scenes.${index}.ctaLabel`)} →
                </Link>
              )}
              {index === SCENES.length - 1 && (
                <button
                  className="journey-restart"
                  type="button"
                  onClick={() => jumpTo(0)}
                >
                  {t("ui.restart")}
                </button>
              )}
            </article>
          ))}
        </div>

        <nav className="journey-rail" aria-label={t("ui.chapters")}>
          {SCENES.map((_scene, index) => (
            <button
              className={`journey-dot ${active === index ? "is-active" : ""}`}
              type="button"
              key={index}
              onClick={() => jumpTo(index)}
              aria-label={`${t("ui.gotoChapter")}: ${t(`scenes.${index}.label`)}`}
              aria-current={active === index ? "step" : undefined}
            >
              <span className="journey-dot-label">{t(`scenes.${index}.label`)}</span>
            </button>
          ))}
        </nav>

        <footer className="journey-footer">
          <div className="journey-scroll">
            <i aria-hidden="true" />
            <span>{t("ui.scrollCamera")}</span>
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
