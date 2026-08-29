import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";
import { CONTACT_EMAIL } from "../contact";

/* ------------------------------------------------------------------ */
/*  /productos/:slug — ficha individual de un producto                 */
/* ------------------------------------------------------------------ */

function productSubject(productName: string) {
  return encodeURIComponent(`Reserve: ${productName}`);
}

export function ProductoDetallePage() {
  const { slug } = useParams();
  const { t } = useI18n();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <SiteLayout title={t("ui.productNotFoundTitle")}>
        <p className="page-intro">
          {t("ui.productNotFoundBody")}{" "}
          <Link to="/productos" className="page-link">
            {t("ui.seeAllProducts")}
          </Link>
        </p>
      </SiteLayout>
    );
  }

  const otros = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <SiteLayout
      title={t(product.name)}
      kicker={`${t(`ui.categories.${product.category}`)} · ${product.price} ${product.currency}`}
    >
      <article className="detail">
        <div className="detail-media">
          <img src={product.image} alt={t(product.name)} />
        </div>

        <div className="detail-content">
          <p className="detail-short">{t(product.short)}</p>

          {product.description.map((paragraph) => (
            <p key={paragraph} className="detail-text">
              {t(paragraph)}
            </p>
          ))}

          <div className="detail-price">
            <span className="detail-price-amount">
              {product.price} {product.currency}
            </span>
            <span className="detail-price-note">{t("ui.noCartYet")}</span>
          </div>

          <a
            className="detail-reserve"
            href={`mailto:${CONTACT_EMAIL}?subject=${productSubject(t(product.name))}`}
          >
            {t("ui.writeUs")}
          </a>

          <dl className="detail-specs">
            {product.details.map((d) => (
              <div className="detail-spec" key={d.label}>
                <dt>{t(d.label)}</dt>
                <dd>{t(d.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      <section className="detail-others">
        <h2 className="detail-others-title">{t("ui.youMayAlsoLike")}</h2>
        <div className="card-grid card-grid--mini">
          {otros.map((other) => (
            <Link key={other.slug} to={`/productos/${other.slug}`} className="card">
              <div className="card-media">
                <img src={other.image} alt={t(other.name)} loading="lazy" />
              </div>
              <div className="card-body">
                <h3 className="card-name">{t(other.name)}</h3>
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
