import { Link } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /productos — tienda: objetos, complementos y ropa                  */
/*  (los platos van en /menu, los tés y matchas en /te)                */
/* ------------------------------------------------------------------ */

const SHOP_CATEGORIES = ["complementos", "objetos", "ropa"];

export function ProductosPage() {
  const { t } = useI18n();
  const shop = products.filter((p) => SHOP_CATEGORIES.includes(p.category));

  return (
    <SiteLayout title={t("nav.shop")} kicker={t("ui.shopKicker") || "Objetos · Hechos para durar"}>
      <p className="page-intro">{t("ui.shopIntro")}</p>

      <div className="card-grid">
        {shop.map((product) => (
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
