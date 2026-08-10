import { Link } from "react-router-dom";
import { workshops } from "../data";
import { SiteLayout } from "./SiteLayout";

/* ------------------------------------------------------------------ */
/*  /workshops — listado de talleres                                   */
/* ------------------------------------------------------------------ */

const LEVEL_LABEL: Record<string, string> = {
  iniciación: "Iniciación",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

export function WorkshopsPage() {
  return (
    <SiteLayout title="Workshops" kicker="Aprende con las manos">
      <p className="page-intro">
        Talleres en el local de Tamraght: wok, masa, té y fuego. Plazas
        limitadas — reserva escribiéndonos.
      </p>

      <div className="card-grid">
        {workshops.map((workshop) => (
          <Link
            key={workshop.slug}
            to={`/workshops/${workshop.slug}`}
            className="card"
          >
            <div className="card-media">
              <img src={workshop.image} alt={workshop.name} loading="lazy" />
              <span className="card-cat">
                {LEVEL_LABEL[workshop.level]} · {workshop.duration}
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-name">{workshop.name}</h2>
              <p className="card-short">{workshop.short}</p>
              <div className="card-foot">
                <span className="card-price">
                  {workshop.price} {workshop.currency}
                </span>
                <span className="card-cta">Más info →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SiteLayout>
  );
}
