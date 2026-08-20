import { Link } from "react-router-dom";
import { products } from "../data";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /menu — el restaurante (platos reales) + kits para casa            */
/* ------------------------------------------------------------------ */

/** Platos reales servidos en el restaurante (del registro de comandas). */
const RESTAURANT_MENU = [
  { name: "Nasi Goreng", cat: "main", price: 56 },
  { name: "Peanut Noodles", cat: "main", price: 63 },
  { name: "Dumpling Beef", cat: "starter", price: 62 },
  { name: "Dumpling Veg", cat: "starter", price: 58 },
  { name: "Mee Siam", cat: "main", price: 52 },
  { name: "Eggplant Lover", cat: "main", price: 62 },
  { name: "Zhajiang Noodles", cat: "main", price: 57 },
  { name: "Dan Dan Noodles", cat: "main", price: 57 },
  { name: "Korean BBQ Bowl", cat: "main", price: 65 },
  { name: "Biang Biang Mian", cat: "main", price: 79 },
  { name: "Pho", cat: "main", price: 80 },
  { name: "Kung Pao", cat: "main", price: 64 },
];

export function MenuPage() {
  const { t } = useI18n();
  const menu = products.filter((p) => p.category === "cocina");

  return (
    <SiteLayout title={t("nav.menu")} kicker={t("ui.menuKicker")}>
      <p className="page-intro">{t("ui.menuIntro")}</p>

      <section className="menu-section">
        <h2 className="menu-section-title">{t("ui.restaurantMenu")}</h2>
        <p className="menu-section-note">{t("ui.restaurantMenuNote")}</p>
        <div className="menu-list">
          {RESTAURANT_MENU.map((dish) => (
            <div className="menu-row" key={dish.name}>
              <div className="menu-row-info">
                <span className="menu-row-name">{dish.name}</span>
                <span className="menu-row-cat">
                  {t(`ui.dishCats.${dish.cat}`)}
                </span>
              </div>
              <span className="menu-row-price">
                {dish.price} {t("ui.mad")}
              </span>
            </div>
          ))}
        </div>
      </section>

      <h2 className="menu-section-title">{t("ui.homeKits")}</h2>
      <p className="menu-section-note">{t("ui.homeKitsNote")}</p>

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
