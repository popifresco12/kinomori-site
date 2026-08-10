import { Link } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";

/* ------------------------------------------------------------------ */
/*  /te — tés y matchas (solo categoría té)                            */
/* ------------------------------------------------------------------ */

export function TePage() {
  const teas = products.filter((p) => p.category === "te");

  return (
    <SiteLayout title="Té" kicker="La sala de té · La pausa">
      <p className="page-intro">
        Matcha batido a mano y oolongs que se abren infusión a infusión.
        El té de Kinomori, para llevar a casa.
      </p>

      <div className="card-grid">
        {teas.map((product) => (
          <Link
            key={product.slug}
            to={`/productos/${product.slug}`}
            className="card"
          >
            <div className="card-media">
              <img src={product.image} alt={product.name} loading="lazy" />
              <span className="card-cat">Té</span>
            </div>
            <div className="card-body">
              <h2 className="card-name">{product.name}</h2>
              <p className="card-short">{product.short}</p>
              <div className="card-foot">
                <span className="card-price">
                  {product.price} {product.currency}
                </span>
                <span className="card-cta">Ver más →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SiteLayout>
  );
}
