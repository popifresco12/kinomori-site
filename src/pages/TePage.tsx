import { Link } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /te — tés y matchas (solo categoría té)                            */
/* ------------------------------------------------------------------ */

export function TePage() {
  const { t } = useI18n();
  const teas = products.filter((p) => p.category === "te");

  return (
    <SiteLayout title={t("nav.tea")} kicker={t("ui.teaKicker")}>
      <p className="page-intro">{t("ui.teaIntro")}</p>

      <div className="card-grid">
        {teas.map((product) => (
          <Link
            key={product.slug}
            to={`/productos/${product.slug}`}
            className="card"
          >
            <div className="card-media">
              <img src={product.image} alt={t(product.name)} loading="lazy" />
              <span className="card-cat">{t(`ui.categories.${product.category}`)}</span>
            </div>
            <div className="card-body">
              <h2 className="card-name">{t(product.name)}</h2>
              <p className="card-short">{t(product.short)}</p>
              <div className="card-foot">
                <span className="card-price">
                  {product.price} {product.currency}
                </span>
                <span className="card-cta">{t("ui.seeMore")}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SiteLayout>
  );
}
