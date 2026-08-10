/* ------------------------------------------------------------------ */
/*  Datos de Kinomori — los campos de texto son CLAVES i18n            */
/*  (resueltas por useI18n().t()). Los datos estructurales se quedan.  */
/* ------------------------------------------------------------------ */

export interface Product {
  slug: string;
  /** Clave i18n → products.<slug>.name */
  name: string;
  category: "cocina" | "te" | "complementos" | "ropa" | "objetos";
  price: number;
  currency: string;
  /** Clave i18n → products.<slug>.short */
  short: string;
  /** Claves i18n → products.<slug>.description.N */
  description: string[];
  /** Claves i18n → products.<slug>.details.N.{label,value} */
  details: { label: string; value: string }[];
  image: string;
  featured?: boolean;
}

export interface Workshop {
  slug: string;
  /** Clave i18n → workshops.<slug>.name */
  name: string;
  level: "iniciación" | "intermedio" | "avanzado";
  duration: string;
  price: number;
  currency: string;
  /** Clave i18n → workshops.<slug>.short */
  short: string;
  /** Claves i18n → workshops.<slug>.description.N */
  description: string[];
  /** Claves i18n → workshops.<slug>.includes.N */
  includes: string[];
  image: string;
  /** Clave i18n → workshops.<slug>.upcoming */
  upcoming?: string;
}

export const products: Product[] = [
  {
    slug: "nasi-goreng-kit",
    name: "products.nasi-goreng-kit.name",
    category: "cocina",
    price: 14,
    currency: "€",
    short: "products.nasi-goreng-kit.short",
    description: [
      "products.nasi-goreng-kit.description.0",
      "products.nasi-goreng-kit.description.1",
    ],
    details: [
      { label: "products.nasi-goreng-kit.details.0.label", value: "products.nasi-goreng-kit.details.0.value" },
      { label: "products.nasi-goreng-kit.details.1.label", value: "products.nasi-goreng-kit.details.1.value" },
      { label: "products.nasi-goreng-kit.details.2.label", value: "products.nasi-goreng-kit.details.2.value" },
      { label: "products.nasi-goreng-kit.details.3.label", value: "products.nasi-goreng-kit.details.3.value" },
    ],
    image: "media/product-nasi-goreng-kit.webp",
    featured: true,
  },
  {
    slug: "dan-dan-noodles",
    name: "products.dan-dan-noodles.name",
    category: "cocina",
    price: 12,
    currency: "€",
    short: "products.dan-dan-noodles.short",
    description: [
      "products.dan-dan-noodles.description.0",
      "products.dan-dan-noodles.description.1",
    ],
    details: [
      { label: "products.dan-dan-noodles.details.0.label", value: "products.dan-dan-noodles.details.0.value" },
      { label: "products.dan-dan-noodles.details.1.label", value: "products.dan-dan-noodles.details.1.value" },
      { label: "products.dan-dan-noodles.details.2.label", value: "products.dan-dan-noodles.details.2.value" },
      { label: "products.dan-dan-noodles.details.3.label", value: "products.dan-dan-noodles.details.3.value" },
    ],
    image: "media/product-dan-dan-noodles.webp",
    featured: true,
  },
  {
    slug: "miso-negro-salmón",
    name: "products.miso-negro-salmón.name",
    category: "cocina",
    price: 18,
    currency: "€",
    short: "products.miso-negro-salmón.short",
    description: [
      "products.miso-negro-salmón.description.0",
      "products.miso-negro-salmón.description.1",
    ],
    details: [
      { label: "products.miso-negro-salmón.details.0.label", value: "products.miso-negro-salmón.details.0.value" },
      { label: "products.miso-negro-salmón.details.1.label", value: "products.miso-negro-salmón.details.1.value" },
      { label: "products.miso-negro-salmón.details.2.label", value: "products.miso-negro-salmón.details.2.value" },
      { label: "products.miso-negro-salmón.details.3.label", value: "products.miso-negro-salmón.details.3.value" },
    ],
    image: "media/product-miso-negro.webp",
  },
  {
    slug: "matcha-ceremonial",
    name: "products.matcha-ceremonial.name",
    category: "te",
    price: 22,
    currency: "€",
    short: "products.matcha-ceremonial.short",
    description: [
      "products.matcha-ceremonial.description.0",
      "products.matcha-ceremonial.description.1",
    ],
    details: [
      { label: "products.matcha-ceremonial.details.0.label", value: "products.matcha-ceremonial.details.0.value" },
      { label: "products.matcha-ceremonial.details.1.label", value: "products.matcha-ceremonial.details.1.value" },
      { label: "products.matcha-ceremonial.details.2.label", value: "products.matcha-ceremonial.details.2.value" },
      { label: "products.matcha-ceremonial.details.3.label", value: "products.matcha-ceremonial.details.3.value" },
    ],
    image: "media/product-matcha-ceremonial.webp",
    featured: true,
  },
  {
    slug: "te-oolong-tieguanyin",
    name: "products.te-oolong-tieguanyin.name",
    category: "te",
    price: 16,
    currency: "€",
    short: "products.te-oolong-tieguanyin.short",
    description: [
      "products.te-oolong-tieguanyin.description.0",
      "products.te-oolong-tieguanyin.description.1",
    ],
    details: [
      { label: "products.te-oolong-tieguanyin.details.0.label", value: "products.te-oolong-tieguanyin.details.0.value" },
      { label: "products.te-oolong-tieguanyin.details.1.label", value: "products.te-oolong-tieguanyin.details.1.value" },
      { label: "products.te-oolong-tieguanyin.details.2.label", value: "products.te-oolong-tieguanyin.details.2.value" },
      { label: "products.te-oolong-tieguanyin.details.3.label", value: "products.te-oolong-tieguanyin.details.3.value" },
    ],
    image: "media/product-te-oolong.webp",
  },
  {
    slug: "pulsera-zen",
    name: "products.pulsera-zen.name",
    category: "complementos",
    price: 9,
    currency: "€",
    short: "products.pulsera-zen.short",
    description: [
      "products.pulsera-zen.description.0",
      "products.pulsera-zen.description.1",
    ],
    details: [
      { label: "products.pulsera-zen.details.0.label", value: "products.pulsera-zen.details.0.value" },
      { label: "products.pulsera-zen.details.1.label", value: "products.pulsera-zen.details.1.value" },
      { label: "products.pulsera-zen.details.2.label", value: "products.pulsera-zen.details.2.value" },
    ],
    image: "media/product-pulsera-zen.webp",
  },
  {
    slug: "camiseta-kinomori",
    name: "products.camiseta-kinomori.name",
    category: "ropa",
    price: 20,
    currency: "€",
    short: "products.camiseta-kinomori.short",
    description: [
      "products.camiseta-kinomori.description.0",
      "products.camiseta-kinomori.description.1",
    ],
    details: [
      { label: "products.camiseta-kinomori.details.0.label", value: "products.camiseta-kinomori.details.0.value" },
      { label: "products.camiseta-kinomori.details.1.label", value: "products.camiseta-kinomori.details.1.value" },
      { label: "products.camiseta-kinomori.details.2.label", value: "products.camiseta-kinomori.details.2.value" },
    ],
    image: "media/product-camiseta-kinomori.webp",
  },
  {
    slug: "tetera-hierro",
    name: "products.tetera-hierro.name",
    category: "objetos",
    price: 48,
    currency: "€",
    short: "products.tetera-hierro.short",
    description: [
      "products.tetera-hierro.description.0",
      "products.tetera-hierro.description.1",
    ],
    details: [
      { label: "products.tetera-hierro.details.0.label", value: "products.tetera-hierro.details.0.value" },
      { label: "products.tetera-hierro.details.1.label", value: "products.tetera-hierro.details.1.value" },
      { label: "products.tetera-hierro.details.2.label", value: "products.tetera-hierro.details.2.value" },
    ],
    image: "media/product-tetera-hierro.webp",
  },
];

export const workshops: Workshop[] = [
  {
    slug: "wok-desde-cero",
    name: "workshops.wok-desde-cero.name",
    level: "iniciación",
    duration: "3 horas",
    price: 45,
    currency: "€",
    short: "workshops.wok-desde-cero.short",
    description: [
      "workshops.wok-desde-cero.description.0",
      "workshops.wok-desde-cero.description.1",
      "workshops.wok-desde-cero.description.2",
    ],
    includes: [
      "workshops.wok-desde-cero.includes.0",
      "workshops.wok-desde-cero.includes.1",
      "workshops.wok-desde-cero.includes.2",
      "workshops.wok-desde-cero.includes.3",
    ],
    image: "media/workshop-wok-desde-cero.webp",
    upcoming: "workshops.wok-desde-cero.upcoming",
  },
  {
    slug: "ceremonia-te",
    name: "workshops.ceremonia-te.name",
    level: "iniciación",
    duration: "2 horas",
    price: 35,
    currency: "€",
    short: "workshops.ceremonia-te.short",
    description: [
      "workshops.ceremonia-te.description.0",
      "workshops.ceremonia-te.description.1",
    ],
    includes: [
      "workshops.ceremonia-te.includes.0",
      "workshops.ceremonia-te.includes.1",
      "workshops.ceremonia-te.includes.2",
      "workshops.ceremonia-te.includes.3",
    ],
    image: "media/workshop-ceremonia-te.webp",
    upcoming: "workshops.ceremonia-te.upcoming",
  },
  {
    slug: "dumplings-a-mano",
    name: "workshops.dumplings-a-mano.name",
    level: "intermedio",
    duration: "3.5 horas",
    price: 55,
    currency: "€",
    short: "workshops.dumplings-a-mano.short",
    description: [
      "workshops.dumplings-a-mano.description.0",
      "workshops.dumplings-a-mano.description.1",
    ],
    includes: [
      "workshops.dumplings-a-mano.includes.0",
      "workshops.dumplings-a-mano.includes.1",
      "workshops.dumplings-a-mano.includes.2",
      "workshops.dumplings-a-mano.includes.3",
    ],
    image: "media/workshop-dumplings-a-mano.webp",
    upcoming: "workshops.dumplings-a-mano.upcoming",
  },
  {
    slug: "ramen-casero",
    name: "workshops.ramen-casero.name",
    level: "avanzado",
    duration: "5 horas",
    price: 75,
    currency: "€",
    short: "workshops.ramen-casero.short",
    description: [
      "workshops.ramen-casero.description.0",
      "workshops.ramen-casero.description.1",
    ],
    includes: [
      "workshops.ramen-casero.includes.0",
      "workshops.ramen-casero.includes.1",
      "workshops.ramen-casero.includes.2",
      "workshops.ramen-casero.includes.3",
    ],
    image: "media/workshop-ramen-casero.webp",
    upcoming: "workshops.ramen-casero.upcoming",
  },
];
