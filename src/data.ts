/* ------------------------------------------------------------------ */
/*  Datos de prueba — Kinomori (sustituir por contenido real)          */
/* ------------------------------------------------------------------ */

export interface Product {
  slug: string;
  name: string;
  category: "cocina" | "te" | "complementos" | "ropa";
  price: number;
  currency: string;
  short: string;
  description: string[];
  details: { label: string; value: string }[];
  image: string;
  featured?: boolean;
}

export interface Workshop {
  slug: string;
  name: string;
  level: "iniciación" | "intermedio" | "avanzado";
  duration: string;
  price: number;
  currency: string;
  short: string;
  description: string[];
  includes: string[];
  image: string;
  upcoming?: string;
}

export const products: Product[] = [
  {
    slug: "nasi-goreng-kit",
    name: "Nasi Goreng · Kit para casa",
    category: "cocina",
    price: 14,
    currency: "€",
    short: "El arroz frito que servimos en el local, con su pasta de sambal y las especias exactas.",
    description: [
      "Nuestro nasi goreng en formato kit: todos los ingredientes secos y la pasta de sambal que usamos en el wok, con la receta paso a paso de la casa.",
      "Alcanza para 2-3 raciones generosas. Solo necesitas arroz del día anterior, huevos y lo que tengas en la nevera.",
    ],
    details: [
      { label: "Raciones", value: "2-3 personas" },
      { label: "Dificultad", value: "Fácil" },
      { label: "Tiempo", value: "25 min" },
      { label: "Alérgenos", value: "Soja, sésamo, huevo" },
    ],
    image: "media/product-nasi-goreng-kit.webp",
    featured: true,
  },
  {
    slug: "dan-dan-noodles",
    name: "Dan Dan Noodles",
    category: "cocina",
    price: 12,
    currency: "€",
    short: "Los noodles picantes de Sichuan, con su salsa de cacahuete y chile.",
    description: [
      "La receta de nuestros dan dan noodles: fideos frescos, salsa de sésamo y cacahuete, chile de Sichuan y el topping de cerdo picado.",
      "Incluye los fideos, la mezcla de especias y la guía de montaje. Para 2 personas.",
    ],
    details: [
      { label: "Raciones", value: "2 personas" },
      { label: "Dificultad", value: "Media" },
      { label: "Tiempo", value: "30 min" },
      { label: "Alérgenos", value: "Soja, sésamo, cacahuete, gluten" },
    ],
    image: "media/product-dan-dan-noodles.webp",
    featured: true,
  },
  {
    slug: "miso-negro-salmón",
    name: "Miso Negro · Salmón",
    category: "cocina",
    price: 18,
    currency: "€",
    short: "La salsa de miso negro para glasear salmón o verduras al horno.",
    description: [
      "El miso negro que usamos para glasear el salmón: fermentado largo, dulce y profundo.",
      "Un tarro de 250g que rinde para 4-6 glaseados. Se conserva meses en la nevera.",
    ],
    details: [
      { label: "Contenido", value: "250 g" },
      { label: "Dificultad", value: "Fácil" },
      { label: "Tiempo", value: "20 min" },
      { label: "Alérgenos", value: "Soja" },
    ],
    image: "media/product-miso-negro.webp",
  },
  {
    slug: "matcha-ceremonial",
    name: "Matcha Ceremonial",
    category: "te",
    price: 22,
    currency: "€",
    short: "Matcha de cosecha temprana, molido en piedra, para usucha y koicha.",
    description: [
      "Matcha ceremonial de la primera cosecha: verde brillante, dulce, sin amargor.",
      "Viene en lata de 40g con las instrucciones de batido (usucha y koicha) y el toque de Kinomori.",
    ],
    details: [
      { label: "Contenido", value: "40 g" },
      { label: "Origen", value: "Uji, Japón" },
      { label: "Cosecha", value: "Primera (ichibancha)" },
      { label: "Formato", value: "Usucha / Koicha" },
    ],
    image: "media/product-matcha-ceremonial.webp",
    featured: true,
  },
  {
    slug: "te-oolong-tieguanyin",
    name: "Té Oolong · Tieguanyin",
    category: "te",
    price: 16,
    currency: "€",
    short: "Oolong floral de Anxi, con ese aroma a orquídea que engancha.",
    description: [
      "Tieguanyin de Anxi, tostado suave: floral, mantecoso, con un retrogusto dulce.",
      "Bolsa de 100g. Se puede re-infusionar 5-6 veces.",
    ],
    details: [
      { label: "Contenido", value: "100 g" },
      { label: "Origen", value: "Anxi, China" },
      { label: "Infusiones", value: "5-6" },
      { label: "Tostado", value: "Suave" },
    ],
    image: "media/product-te-oolong.webp",
  },
  {
    slug: "pulsera-zen",
    name: "Pulsera Zen · Piedra y soga",
    category: "complementos",
    price: 9,
    currency: "€",
    short: "Hecha a mano con piedra natural y nudo artesanal. Ninguna igual.",
    description: [
      "Cada pulsera se hace a mano en el local: piedra natural, soga de algodón y nudo japonés.",
      "Tallas S/M/L. Si la quieres a medida, escríbenos.",
    ],
    details: [
      { label: "Material", value: "Piedra natural + algodón" },
      { label: "Tallas", value: "S / M / L" },
      { label: "Hecho a mano", value: "Sí, en Tamraght" },
    ],
    image: "media/product-pulsera-zen.webp",
  },
  {
    slug: "camiseta-kinomori",
    name: "Camiseta Kinomori",
    category: "ropa",
    price: 20,
    currency: "€",
    short: "Algodón orgánico, el kanji de Kinomori en el pecho.",
    description: [
      "Camiseta de algodón orgánico 180g, corte regular, kanji bordado.",
      "Disponible en negro, arena y verde bosque. Tallas XS-XXL.",
    ],
    details: [
      { label: "Material", value: "Algodón orgánico 180 g" },
      { label: "Colores", value: "Negro / Arena / Verde" },
      { label: "Tallas", value: "XS – XXL" },
    ],
    image: "media/product-camiseta-kinomori.webp",
  },
  {
    slug: "tetera-hierro",
    name: "Tetera de hierro · Tetsubin",
    category: "te",
    price: 48,
    currency: "€",
    short: "Tetsubin de 0.8L: el agua sabe mejor, el té también.",
    description: [
      "Tetera de hierro fundido con interior esmaltado, 0.8L. Mantiene el calor y redondea el agua.",
      "Incluye cesto de infusión de acero inoxidable.",
    ],
    details: [
      { label: "Capacidad", value: "0.8 L" },
      { label: "Material", value: "Hierro fundido" },
      { label: "Interior", value: "Esmaltado" },
    ],
    image: "media/product-tetera-hierro.webp",
  },
];

export const workshops: Workshop[] = [
  {
    slug: "wok-desde-cero",
    name: "El Wok desde Cero",
    level: "iniciación",
    duration: "3 horas",
    price: 45,
    currency: "€",
    short: "Aprende el wok como lo hacemos en el local: fuego alto, ingredientes en orden, sin miedo.",
    description: [
      "Un taller práctico donde montamos el wok, preparamos el arroz del día anterior y cocinamos tres platos clásicos: nasi goreng, verduras salteadas y noodles.",
      "Te llevas la técnica (no solo la receta): el orden de los ingredientes, el control del fuego y cómo saber cuándo está listo.",
      "Máximo 6 personas. Incluye todos los ingredientes y una copa de té.",
    ],
    includes: [
      "3 platos cocinados por ti",
      "Guía impresa con las recetas",
      "Ingredientes y wok incluidos",
      "Cata de té de la casa",
    ],
    image: "media/workshop-wok-desde-cero.webp",
    upcoming: "Próxima fecha por confirmar",
  },
  {
    slug: "ceremonia-te",
    name: "Ceremonia del Té",
    level: "iniciación",
    duration: "2 horas",
    price: 35,
    currency: "€",
    short: "Una tarde de matcha, atención y silencio. De la mano de nuestro té.",
    description: [
      "Una introducción a la ceremonia del té japonesa: el batido del matcha (usucha), la postura, la respiración y el orden de la sala.",
      "No hace falta experiencia. Solo venir con curiosidad y ropa cómoda.",
    ],
    includes: [
      "Matcha ceremonial incluido",
      "Cuenco y batidor para practicar",
      "Historia y ritos explicados",
      "Té para llevar",
    ],
    image: "media/workshop-ceremonia-te.webp",
    upcoming: "Sábados, 17:00",
  },
  {
    slug: "dumplings-a-mano",
    name: "Dumplings a Mano",
    level: "intermedio",
    duration: "3.5 horas",
    price: 55,
    currency: "€",
    short: "Masa, doblez y vapor: los dumplings de Kinomori, hechos por ti.",
    description: [
      "Hacemos la masa desde cero, dos rellenos (cerdo y verduras) y aprendemos los dobleces clásicos. Al final, los cocinamos al vapor y al sartén.",
      "Te llevas la masa y los dumplings que sobren.",
    ],
    includes: [
      "Masa y rellenos incluidos",
      "Técnicas de doblez",
      "Cocción al vapor y a la plancha",
      "Recetas para repetir en casa",
    ],
    image: "media/workshop-dumplings-a-mano.webp",
    upcoming: "Próxima fecha por confirmar",
  },
  {
    slug: "ramen-casero",
    name: "Ramen Casero",
    level: "avanzado",
    duration: "5 horas",
    price: 75,
    currency: "€",
    short: "Caldo de 12 horas, chashu, ajitama y noodles: el ramen completo.",
    description: [
      "El taller más completo: caldo tori paitan, chashu de cerdo, huevo marinado y noodles frescos hechos a mano.",
      "Comemos el ramen juntos al final. Lleva tu mejor hambre.",
    ],
    includes: [
      "Caldo desde cero (12 h)",
      "Chashu y ajitama",
      "Noodles frescos a mano",
      "Comida final incluida",
    ],
    image: "media/workshop-ramen-casero.webp",
    upcoming: "Próxima fecha por confirmar",
  },
];
