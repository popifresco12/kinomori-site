import { Link, useParams } from "react-router-dom";
import { workshops } from "../data";
import { SiteLayout } from "./SiteLayout";

/* ------------------------------------------------------------------ */
/*  /workshops/:slug — ficha individual de un taller                   */
/* ------------------------------------------------------------------ */

const LEVEL_LABEL: Record<string, string> = {
  iniciación: "Iniciación",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

export function WorkshopDetallePage() {
  const { slug } = useParams();
  const workshop = workshops.find((w) => w.slug === slug);

  if (!workshop) {
    return (
      <SiteLayout title="Workshop no encontrado">
        <p className="page-intro">
          No hemos encontrado ese taller.{" "}
          <Link to="/workshops" className="page-link">
            Ver todos los workshops →
          </Link>
        </p>
      </SiteLayout>
    );
  }

  const otros = workshops.filter((w) => w.slug !== workshop.slug).slice(0, 3);

  return (
    <SiteLayout
      title={workshop.name}
      kicker={`${LEVEL_LABEL[workshop.level]} · ${workshop.duration} · ${workshop.price} ${workshop.currency}`}
    >
      <article className="detail">
        <div className="detail-media">
          <img src={workshop.image} alt={workshop.name} />
        </div>

        <div className="detail-content">
          <p className="detail-short">{workshop.short}</p>

          {workshop.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="detail-text">
              {paragraph}
            </p>
          ))}

          {workshop.upcoming && (
            <div className="detail-price">
              <span className="detail-price-amount">{workshop.upcoming}</span>
              <span className="detail-price-note">
                {workshop.price} {workshop.currency} por persona
              </span>
            </div>
          )}

          <h3 className="detail-includes-title">Qué incluye</h3>
          <ul className="detail-includes">
            {workshop.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="detail-book">
            ¿Te apuntas?{" "}
            <a className="page-link" href="mailto:hola@kinomori.example">
              Escríbenos →
            </a>
          </p>
        </div>
      </article>

      <section className="detail-others">
        <h2 className="detail-others-title">Otros workshops</h2>
        <div className="card-grid card-grid--mini">
          {otros.map((other) => (
            <Link
              key={other.slug}
              to={`/workshops/${other.slug}`}
              className="card"
            >
              <div className="card-media">
                <img src={other.image} alt={other.name} loading="lazy" />
              </div>
              <div className="card-body">
                <h3 className="card-name">{other.name}</h3>
                <div className="card-foot">
                  <span className="card-price">
                    {other.price} {other.currency}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
