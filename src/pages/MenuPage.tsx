import { Link } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /menu — los platos de la casa (solo cocina)                        */
/* ------------------------------------------------------------------ */

export function MenuPage() {
  const { t } = useI18n();
  const menu = products.filter((p) => p.category === "cocina");

  return (
    <SiteLayout title={t("nav.menu")} kicker={t("ui.menuKicker")}>
      <p className="page-intro">{t("ui.menuIntro")}</p>

      <div className="card-grid">
        {menu.map((product) => (
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
