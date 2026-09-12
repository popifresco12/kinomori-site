import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /menu — la carta real del restaurante                              */
/*  Orden y nombres tomados de la carta de Kinomori (sep 2026):        */
/*  Dumplings → Rice → Noodle & Pho → Drinks                           */
/* ------------------------------------------------------------------ */

interface Dish {
  name: string;
  /** Precio tal y como figura en la carta; admite dos (veg / pollo) */
  price: string;
  desc?: string;
  /** Ruta dentro de /public (ej. "media/dish-nasi-goreng.webp"). Sin foto → placeholder */
  image?: string;
  spicy?: boolean;
}

interface MenuSection {
  id: "dumplings" | "rice" | "noodles" | "drinks";
  note?: string;
  items: Dish[];
}

const MENU: MenuSection[] = [
  {
    id: "dumplings",
    note: "6 pieces · Crispy / Sichuan Spicy / Soup",
    items: [
      { name: "Beef Filling", price: "65", desc: "Beef, onion, carrot" },
      { name: "Veggie Filling", price: "60", desc: "Zucchini, carrot, egg, onion, sesame" },
    ],
  },
  {
    id: "rice",
    items: [
      {
        name: "Nasi Goreng",
        price: "65 / 70",
        desc: "Indonesian fried rice with seasonal veggies (chicken) and fried egg on top",
      },
      {
        name: "Korean Bibimbap",
        price: "70 / 80",
        desc: "Rice with sesame oil, Korean Gochujang sauce, seasonal veggies (chicken) and fried egg on top",
        spicy: true,
        image: "media/dish-korean-bibimbap.webp",
      },
      {
        name: "Thai Green Curry",
        price: "70 / 80",
        desc: "Eggplant, long beans, carrot, zucchini (chicken), coconut cream and half boiled egg",
        spicy: true,
        image: "media/dish-thai-green-curry.webp",
      },
      {
        name: "Hainan Chicken",
        price: "80",
        desc: "Extra tender chicken thigh with ginger leek, caramel soy sauce, cucumber and boiled egg",
        image: "media/dish-hainan-chicken.webp",
      },
      {
        name: "Thai Kra Pao Beef Rice",
        price: "75",
        desc: "Beef, basil, mint, chili, red pepper, long beans and fried egg on top",
        spicy: true,
      },
      {
        name: "KungPao Chicken",
        price: "75",
        desc: "Stir-fried chicken with sweet & sour sauce, peanuts, carrot, cucumber and spring onion",
      },
    ],
  },
  {
    id: "noodles",
    items: [
      {
        name: "Mie Goreng",
        price: "65 / 70",
        desc: "Indonesian fried noodle with egg & veggies (chicken)",
      },
      {
        name: "Sichuan Dandan Noodle",
        price: "75",
        desc: "Sichuan chili beef sauce, chives, boiled egg and peanut",
        spicy: true,
      },
      {
        name: "Beijing ZhaJiang Noodle",
        price: "75",
        desc: "Fried soybean beef sauce, fresh veggies and boiled egg",
        image: "media/dish-beijing-zhajiang.webp",
      },
      {
        name: "Thai Yum Sen Mee Gai",
        price: "75",
        desc: "Cold thin rice noodle tossed with chicken, fresh herbs, veggies, lime and Thai dressing",
        spicy: true,
      },
      {
        name: "Vietnamese Pho Ga",
        price: "75",
        desc: "Traditional chicken broth with wide rice noodle, chicken, herbs and chili · Soup or Dry",
      },
      {
        name: "Peanut Sauce Chill Noodle",
        price: "65",
        desc: "Secret peanut sauce, chicken (optional), cucumber, boiled egg and peanuts",
        image: "media/dish-peanut-sauce-chill-noodle.webp",
      },
    ],
  },
  {
    id: "drinks",
    items: [
      { name: "Cold Brew Oolong Tea", price: "20" },
      { name: "Homemade VC Lemonnade", price: "25" },
      { name: "Fresh Orange Juice", price: "25" },
      { name: "Warm Pot Black Tea", price: "25" },
      { name: "Bottle of Water", price: "10 / 20" },
      { name: "Coca Cola", price: "20" },
      { name: "Sparkling Water", price: "15" },
    ],
  },
];

export function MenuPage() {
  const { t } = useI18n();

  return (
    <SiteLayout title={t("nav.menu")} kicker={t("ui.menuKicker")}>
      <p className="page-intro">{t("ui.menuIntro")}</p>

      {MENU.map((section) => (
        <section className="menu-section" key={section.id}>
          <h2 className="menu-section-title">{t(`ui.dishCats.${section.id}`)}</h2>
          {section.note && <p className="menu-section-note">{section.note}</p>}

          <div className="card-grid">
            {section.items.map((dish) => (
              <div className="card" key={dish.name}>
                <div className={dish.image ? "card-media" : "card-media card-media--empty"}>
                  {dish.image ? (
                    <img src={dish.image} alt={dish.name} loading="lazy" />
                  ) : (
                    <span>{dish.name}</span>
                  )}
                </div>
                <div className="card-body">
                  <h3 className="card-name">
                    {dish.name}
                    {dish.spicy && <span aria-label="spicy"> 🌶</span>}
                  </h3>
                  {dish.desc && <p className="card-short">{dish.desc}</p>}
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
      ))}
    </SiteLayout>
  );
}
