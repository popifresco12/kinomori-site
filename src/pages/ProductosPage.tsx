import { Link } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";

/* ------------------------------------------------------------------ */
/*  /productos — grid con todos los productos y sus precios            */
/* ------------------------------------------------------------------ */

const CATEGORY_LABEL: Record<string, string> = {
  cocina: "Cocina",
  te: "Té",
  complementos: "Complementos",
  ropa: "Ropa",
};

export function ProductosPage() {
  return (
    <SiteLayout title="Productos" kicker="Tienda · Sin carrito, sin prisas">
      <p className="page-intro">
        Los sabores y objetos de Kinomori, para llevarte un poco de la casa.
        Precio y detalles en cada página — el carrito llegará más adelante.
      </p>

      <div className="card-grid">
        {products.map((product) => (
          <Link
            key={product.slug}
            to={`/productos/${product.slug}`}
            className="card"
          >
            <div className="card-media">
              <img src={product.image} alt={product.name} loading="lazy" />
              <span className="card-cat">{CATEGORY_LABEL[product.category]}</span>
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
