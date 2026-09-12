import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /menu — el restaurante (platos reales servidos en la casa)         */
/* ------------------------------------------------------------------ */

interface Dish {
  name: string;
  cat: "main" | "starter";
  price: number;
  /** Ruta dentro de /public (ej. "media/dish-nasi-goreng.webp"). Sin foto → placeholder */
  image?: string;
}

/** Platos reales servidos en el restaurante (del registro de comandas).
 *  Modo tarjeta: cada plato se muestra como tarjeta con nombre, categoría y precio. */
const RESTAURANT_MENU: Dish[] = [
  { name: "Nasi Goreng", cat: "main", price: 56, image: "media/product-nasi-goreng-kit.webp" },
  { name: "Peanut Noodles", cat: "main", price: 63 },
  { name: "Dumpling Beef", cat: "starter", price: 62 },
  { name: "Dumpling Veg", cat: "starter", price: 58 },
  { name: "Mee Siam", cat: "main", price: 52 },
  { name: "Eggplant Lover", cat: "main", price: 62 },
  { name: "Zhajiang Noodles", cat: "main", price: 57 },
  { name: "Dan Dan Noodles", cat: "main", price: 57, image: "media/product-dan-dan-noodles.webp" },
  { name: "Korean BBQ Bowl", cat: "main", price: 65 },
  { name: "Biang Biang Mian", cat: "main", price: 79 },
  { name: "Pho", cat: "main", price: 80 },
  { name: "Kung Pao", cat: "main", price: 64 },
];

export function MenuPage() {
  const { t } = useI18n();

  return (
    <SiteLayout title={t("nav.menu")} kicker={t("ui.menuKicker")}>
      <p className="page-intro">{t("ui.menuIntro")}</p>

      <section className="menu-section">
        <h2 className="menu-section-title">{t("ui.restaurantMenu")}</h2>
        <p className="menu-section-note">{t("ui.restaurantMenuNote")}</p>

        <div className="card-grid">
          {RESTAURANT_MENU.map((dish) => (
            <div className="card" key={dish.name}>
              <div className={dish.image ? "card-media" : "card-media card-media--empty"}>
                {dish.image ? (
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                ) : (
                  <span>{dish.name}</span>
                )}
                <span className="card-cat">{t(`ui.dishCats.${dish.cat}`)}</span>
              </div>
              <div className="card-body">
                <h2 className="card-name">{dish.name}</h2>
                <div className="card-foot">
                  <span className="card-price">
                    {dish.price} {t("ui.mad")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
