import { Link } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";

/* ------------------------------------------------------------------ */
/*  /menu — los platos de la casa (solo cocina)                        */
/* ------------------------------------------------------------------ */

export function MenuPage() {
  const menu = products.filter((p) => p.category === "cocina");

  return (
    <SiteLayout title="Menú" kicker="La cocina · Los fuegos">
      <p className="page-intro">
        Los platos de Kinomori, para llevar a tu cocina. Ingredientes,
        técnica y la receta exacta de la casa.
      </p>

      <div className="card-grid">
        {menu.map((product) => (
          <Link
            key={product.slug}
            to={`/productos/${product.slug}`}
            className="card"
          >
            <div className="card-media">
              <img src={product.image} alt={product.name} loading="lazy" />
              <span className="card-cat">Cocina</span>
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
