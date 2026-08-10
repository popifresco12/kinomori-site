import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";

/* ------------------------------------------------------------------ */
/*  /productos/:slug — ficha individual de un producto                 */
/* ------------------------------------------------------------------ */

const CATEGORY_LABEL: Record<string, string> = {
  cocina: "Cocina",
  te: "Té",
  complementos: "Complementos",
  ropa: "Ropa",
};

export function ProductoDetallePage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <SiteLayout title="Producto no encontrado">
        <p className="page-intro">
          No hemos encontrado ese producto.{" "}
          <Link to="/productos" className="page-link">
            Ver todos los productos →
          </Link>
        </p>
      </SiteLayout>
    );
  }

  const otros = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <SiteLayout
      title={product.name}
      kicker={`${CATEGORY_LABEL[product.category]} · ${product.price} ${product.currency}`}
    >
      <article className="detail">
        <div className="detail-media">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">
          <p className="detail-short">{product.short}</p>

          {product.description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="detail-text">
              {paragraph}
            </p>
          ))}

          <div className="detail-price">
            <span className="detail-price-amount">
              {product.price} {product.currency}
            </span>
            <span className="detail-price-note">
              Sin carrito por ahora — escríbenos para reservarlo
            </span>
          </div>

          <dl className="detail-specs">
            {product.details.map((d) => (
              <div className="detail-spec" key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      <section className="detail-others">
        <h2 className="detail-others-title">También te puede gustar</h2>
        <div className="card-grid card-grid--mini">
          {otros.map((other) => (
            <Link key={other.slug} to={`/productos/${other.slug}`} className="card">
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
