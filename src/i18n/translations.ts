/* ------------------------------------------------------------------ */
/*  i18n — Kinomori. Idioma principal: English.                        */
/*  Cada idioma tiene las mismas claves; t() resuelve con fallback.    */
/* ------------------------------------------------------------------ */

export type Lang = "en" | "fr" | "es" | "zh" | "ja";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "zh", label: "中", flag: "🇨🇳" },
  { code: "ja", label: "日", flag: "🇯🇵" },
];

export const DEFAULT_LANG: Lang = "en";
export const LANG_STORAGE_KEY = "kinomori-lang";

type Dict = {
  nav: { journey: string; menu: string; tea: string; shop: string; workshops: string };
  footer: { tagline: string };
  back: string;
  ui: {
    productNotFoundTitle: string;
    productNotFoundBody: string;
    seeAllProducts: string;
    workshopNotFoundTitle: string;
    workshopNotFoundBody: string;
    seeAllWorkshops: string;
    noCartYet: string;
    youMayAlsoLike: string;
    otherWorkshops: string;
    whatIncludes: string;
    joinUs: string;
    writeUs: string;
    moreInfo: string;
    seeMore: string;
    perPerson: string;
    shopKicker: string;
    menuKicker: string;
    teaKicker: string;
    workshopsKicker: string;
    scrollHint: string;
    restart: string;
    scrollCamera: string;
    chapters: string;
    journeyAria: string;
    gotoChapter: string;
    shopIntro: string;
    menuIntro: string;
    teaIntro: string;
    workshopsIntro: string;
    categories: { cocina: string; te: string; complementos: string; objetos: string; ropa: string };
    levels: { iniciación: string; intermedio: string; avanzado: string };
    restaurantMenu: string;
    restaurantMenuNote: string;
    homeKits: string;
    homeKitsNote: string;
    dishCats: { dumplings: string; rice: string; noodles: string; drinks: string };
    mad: string;
  };
  scenes: {
    label: string;
    kicker: string;
    title: string;
    body: string;
    note: string;
    ctaLabel: string;
  }[];
  products: Record<
    string,
    {
      name: string;
      short: string;
      description: string[];
      details: { label: string; value: string }[];
    }
  >;
  workshops: Record<
    string,
    {
      name: string;
      short: string;
      description: string[];
      includes: string[];
      upcoming: string;
    }
  >;
};

const en: Dict = {
  nav: { journey: "The journey", menu: "Menu", tea: "Tea", shop: "Shop", workshops: "Workshops" },
  footer: { tagline: "Asian kitchen, tea and craft" },
  back: "Back to the journey",
  ui: {
    productNotFoundTitle: "Product not found",
    productNotFoundBody: "We couldn't find that product.",
    seeAllProducts: "See all products →",
    workshopNotFoundTitle: "Workshop not found",
    workshopNotFoundBody: "We couldn't find that workshop.",
    seeAllWorkshops: "See all workshops →",
    noCartYet: "No cart yet — write to us to reserve it",
    youMayAlsoLike: "You may also like",
    otherWorkshops: "Other workshops",
    whatIncludes: "What's included",
    joinUs: "Joining us?",
    writeUs: "Write to us →",
    moreInfo: "More info →",
    seeMore: "See more →",
    perPerson: "per person",
    shopKicker: "Objects · Made to last",
    menuKicker: "The kitchen · The fires",
    teaKicker: "The tea room · The pause",
    workshopsKicker: "Learn with your hands",
    shopIntro:
      "Objects that keep time: handmade craft, clothing and teapots. Price and details on each page — the cart is coming soon.",
    menuIntro:
      "Kinomori's dishes, for your kitchen. Ingredients, technique and the exact house recipe.",
    teaIntro:
      "Hand-whisked matcha and oolongs that open infusion after infusion. Kinomori tea, to take home.",
    workshopsIntro:
      "Workshops at the Tamraght house: wok, dough, tea and fire. Limited spots — book by writing to us.",
    categories: { cocina: "Kitchen", te: "Tea", complementos: "Accessories", objetos: "Objects", ropa: "Clothing" },
    levels: { iniciación: "Beginner", intermedio: "Intermediate", avanzado: "Advanced" },
    scrollHint: "Scroll and travel",
    restart: "Start over",
    scrollCamera: "The scroll moves the camera",
    chapters: "Chapters of the journey",
    journeyAria: "Kinomori: from forest to coast",
    gotoChapter: "Go to chapter",
    restaurantMenu: "The restaurant",
    restaurantMenuNote: "What we serve at the house — from the actual kitchen log.",
    homeKits: "Cook it at home",
    homeKitsNote: "The same dishes, as kits to cook in your kitchen.",
    dishCats: { dumplings: "Dumplings", rice: "Rice", noodles: "Noodle & Pho", drinks: "Drinks" },
    mad: "MAD",
  },
  scenes: [
    {
      label: "The Kitchen",
      kicker: "01 · The fires",
      title: "The wok sings in Tamraght.",
      body: "Everything begins at the stove: a small pan, steam rising, a headband and a steady hand. Asian cooking finds its home on the Moroccan coast — nasi goreng, dumplings, the rhythm of the flame.",
      note: "Fire · Steam · Sesame",
      ctaLabel: "",
    },
    {
      label: "The Dishes",
      kicker: "02 · From the hand to the bowl",
      title: "Dumplings, wok, and the exact moment.",
      body: "Dumplings that crackle, rice that jumps over the flame, peanut noodles stirred by hand. Each dish is cooked when it's ordered — never before, never after.",
      note: "Nasi Goreng · Dumplings · Peanut Noodles",
      ctaLabel: "See the menu",
    },
    {
      label: "The Tea Room",
      kicker: "03 · The pause",
      title: "One cup, and the world stops.",
      body: "A quiet room, iron teapot, the first infusion of oolong. Here there's no rush: just water, ceramics and the moment. Tea is served, and it's also taken home.",
      note: "Oolong · Ceramics · Silence",
      ctaLabel: "",
    },
    {
      label: "Matcha",
      kicker: "04 · Stone-ground",
      title: "Green, whisked, alive.",
      body: "Stone-milled matcha, whisked in a chawan until it foams. We serve it ceremonial — usucha or koicha — and we sell the powder so you can keep the ritual at home.",
      note: "Ceremonial · Usucha · Koicha",
      ctaLabel: "See the tea",
    },
    {
      label: "The Jewels",
      kicker: "05 · Small things",
      title: "Objects that keep time.",
      body: "Pendants, earrings, rings, bracelets — hand-finished pieces laid out on linen. Small things, chosen slowly, made to be worn every day.",
      note: "Hand-made · Linen · Everyday",
      ctaLabel: "See the shop",
    },
    {
      label: "Tea & Objects",
      kicker: "06 · To take home",
      title: "The forest, in a packet.",
      body: "Loose-leaf oolong, ceremonial matcha, iron teapots. The same tea we pour in the room, dried and packed to travel with you.",
      note: "Oolong · Matcha · Iron teapots",
      ctaLabel: "",
    },
    {
      label: "The Coast",
      kicker: "07 · Between mountains and ocean",
      title: "Tamraght, village of waves.",
      body: "A breath away from Taghazout: surf at sunset, golden light on the stucco. Between sessions — a bowl of noodles, a cup of tea, a pause.",
      note: "Surf · Golden hour · Coast",
      ctaLabel: "",
    },
    {
      label: "Workshops",
      kicker: "08 · Learning",
      title: "The forest is learned with the hands.",
      body: "Wok classes, tea ceremony, hand-made dumplings and scented argan oil. We don't come to watch: we come to get our hands dirty and take the technique home.",
      note: "Cooking · Tea · Argan oil",
      ctaLabel: "See workshops",
    },
    {
      label: "The Village",
      kicker: "09 · Kinomori",
      title: "Where the forest meets the Atlantic.",
      body: "Alleys, lanterns, the smell of toasted sesame mixing with sea air. Kinomori: a corner where the forest took root between the mountains and the waves.",
      note: "Wabi-sabi · What lasts",
      ctaLabel: "",
    },
  ],
  products: {
    "nasi-goreng-kit": {
      name: "Nasi Goreng · Home Kit",
      short: "The fried rice we serve at the house, with its sambal paste and the exact spices.",
      description: [
        "Our nasi goreng as a kit: all the dry ingredients and the sambal paste we use in the wok, with the house recipe step by step.",
        "Enough for 2-3 generous portions. You only need day-old rice, eggs and whatever you have in the fridge.",
      ],
      details: [
        { label: "Servings", value: "2-3 people" },
        { label: "Difficulty", value: "Easy" },
        { label: "Time", value: "25 min" },
        { label: "Allergens", value: "Soy, sesame, egg" },
      ],
    },
    "dan-dan-noodles": {
      name: "Dan Dan Noodles",
      short: "Sichuan's spicy noodles, with their peanut and chilli sauce.",
      description: [
        "Our dan dan noodles recipe: fresh noodles, sesame and peanut sauce, Sichuan chilli and the minced pork topping.",
        "Includes the noodles, the spice mix and the assembly guide. For 2 people.",
      ],
      details: [
        { label: "Servings", value: "2 people" },
        { label: "Difficulty", value: "Medium" },
        { label: "Time", value: "30 min" },
        { label: "Allergens", value: "Soy, sesame, peanut, gluten" },
      ],
    },
    "miso-negro-salmón": {
      name: "Black Miso · Salmon",
      short: "Black miso glaze for salmon or roasted vegetables.",
      description: [
        "The black miso we use to glaze the salmon: long-fermented, sweet and deep.",
        "A 250g jar that yields 4-6 glazes. Keeps for months in the fridge.",
      ],
      details: [
        { label: "Content", value: "250 g" },
        { label: "Difficulty", value: "Easy" },
        { label: "Time", value: "20 min" },
        { label: "Allergens", value: "Soy" },
      ],
    },
    "matcha-ceremonial": {
      name: "Ceremonial Matcha",
      short: "Early-harvest matcha, stone-milled, for usucha and koicha.",
      description: [
        "Ceremonial matcha from the first harvest: bright green, sweet, no bitterness.",
        "Comes in a 40g tin with whisking instructions (usucha and koicha) and the Kinomori touch.",
      ],
      details: [
        { label: "Content", value: "40 g" },
        { label: "Origin", value: "Uji, Japan" },
        { label: "Harvest", value: "First (ichibancha)" },
        { label: "Format", value: "Usucha / Koicha" },
      ],
    },
    "te-oolong-tieguanyin": {
      name: "Oolong Tea · Tieguanyin",
      short: "Floral oolong from Anxi, with that orchid aroma that hooks you.",
      description: [
        "Tieguanyin from Anxi, softly roasted: floral, buttery, with a sweet finish.",
        "100g bag. Can be re-infused 5-6 times.",
      ],
      details: [
        { label: "Content", value: "100 g" },
        { label: "Origin", value: "Anxi, China" },
        { label: "Infusions", value: "5-6" },
        { label: "Roast", value: "Light" },
      ],
    },
    "pulsera-zen": {
      name: "Zen Bracelet · Stone & rope",
      short: "Handmade with natural stone and a hand-tied knot. No two alike.",
      description: [
        "Each bracelet is made by hand at the house: natural stone, cotton rope and a Japanese knot.",
        "Sizes S/M/L. Want it custom? Write to us.",
      ],
      details: [
        { label: "Material", value: "Natural stone + cotton" },
        { label: "Sizes", value: "S / M / L" },
        { label: "Handmade", value: "Yes, in Tamraght" },
      ],
    },
    "colgante-zen": {
      name: "Zen Pendant",
      short: "A hand-finished pendant, laid on linen.",
      description: [
        "Stone, cord and a knot — small enough to be quiet, strong enough to be worn every day.",
        "Hand-finished, each piece is unique.",
      ],
      details: [
        { label: "Material", value: "Natural stone" },
        { label: "Cord", value: "Waxed cotton" },
        { label: "Care", value: "Avoid water" },
      ],
    },
    "pendientes-zen": {
      name: "Zen Earrings",
      short: "Small earrings, made to be worn daily.",
      description: [
        "Light, minimal, comfortable for every day. Finished by hand with natural materials.",
        "Sold as a pair.",
      ],
      details: [
        { label: "Material", value: "Natural stone" },
        { label: "Fastening", value: "Stainless steel" },
        { label: "Care", value: "Avoid water" },
      ],
    },
    "anillo-zen": {
      name: "Zen Ring",
      short: "A ring with the calm of the forest.",
      description: [
        "A simple band, finished by hand. The imperfection is the point — wabi-sabi.",
        "Adjustable size.",
      ],
      details: [
        { label: "Material", value: "Natural stone" },
        { label: "Size", value: "Adjustable" },
        { label: "Care", value: "Avoid water" },
      ],
    },

    "camiseta-kinomori": {
      name: "Kinomori Tee",
      short: "Organic cotton, the Kinomori kanji on the chest.",
      description: [
        "180g organic cotton tee, regular fit, embroidered kanji.",
        "Available in black, sand and forest green. Sizes XS-XXL.",
      ],
      details: [
        { label: "Material", value: "Organic cotton 180 g" },
        { label: "Colours", value: "Black / Sand / Green" },
        { label: "Sizes", value: "XS – XXL" },
      ],
    },
    "tetera-hierro": {
      name: "Iron Teapot · Tetsubin",
      short: "0.8L tetsubin: better water, better tea.",
      description: [
        "Cast-iron teapot with enamelled interior, 0.8L. Holds heat and rounds out the water.",
        "Includes a stainless steel infuser basket.",
      ],
      details: [
        { label: "Capacity", value: "0.8 L" },
        { label: "Material", value: "Cast iron" },
        { label: "Interior", value: "Enamelled" },
      ],
    },
  },
  workshops: {
    "wok-desde-cero": {
      name: "The Wok from Scratch",
      short: "Learn the wok the way we do it at the house: high heat, ingredients in order, no fear.",
      description: [
        "A hands-on workshop where we set up the wok, prep yesterday's rice and cook three classics: nasi goreng, stir-fried vegetables and noodles.",
        "You take home the technique (not just the recipe): the order of ingredients, heat control and how to know when it's done.",
        "Maximum 6 people. All ingredients and a cup of tea included.",
      ],
      includes: [
        "3 dishes cooked by you",
        "Printed recipe guide",
        "Ingredients and wok included",
        "House tea tasting",
      ],
      upcoming: "Next date to be confirmed",
    },
    "ceremonia-te": {
      name: "Tea Ceremony",
      short: "An afternoon of matcha, attention and silence. In the hands of our tea.",
      description: [
        "An introduction to the Japanese tea ceremony: whisking matcha (usucha), posture, breathing and the order of the room.",
        "No experience needed. Just come curious and wear comfortable clothes.",
      ],
      includes: [
        "Ceremonial matcha included",
        "Bowl and whisk to practise",
        "History and rites explained",
        "Tea to take away",
      ],
      upcoming: "Saturdays, 5:00 pm",
    },
    "dumplings-a-mano": {
      name: "Hand-made Dumplings",
      short: "Dough, folds and steam: Kinomori's dumplings, made by you.",
      description: [
        "We make the dough from scratch, two fillings (pork and vegetables) and learn the classic folds. At the end, we steam and pan-fry them.",
        "You take home the dough and any dumplings left over.",
      ],
      includes: [
        "Dough and fillings included",
        "Folding techniques",
        "Steaming and pan-frying",
        "Recipes to repeat at home",
      ],
      upcoming: "Next date to be confirmed",
    },
    "ramen-casero": {
      name: "Homemade Ramen",
      short: "12-hour broth, chashu, ajitama and noodles: the full ramen.",
      description: [
        "The most complete workshop: tori paitan broth, pork chashu, marinated egg and fresh hand-made noodles.",
        "We eat the ramen together at the end. Bring your best appetite.",
      ],
      includes: [
        "Broth from scratch (12 h)",
        "Chashu and ajitama",
        "Fresh hand-made noodles",
        "Final meal included",
      ],
      upcoming: "Next date to be confirmed",
    },
  },
};

const fr: Dict = {
  nav: { journey: "Le voyage", menu: "Menu", tea: "Thé", shop: "Boutique", workshops: "Ateliers" },
  footer: { tagline: "Cuisine asiatique, thé et artisanat" },
  back: "Retour au voyage",
  ui: {
    productNotFoundTitle: "Produit introuvable",
    productNotFoundBody: "Nous n'avons pas trouvé ce produit.",
    seeAllProducts: "Voir tous les produits →",
    workshopNotFoundTitle: "Atelier introuvable",
    workshopNotFoundBody: "Nous n'avons pas trouvé cet atelier.",
    seeAllWorkshops: "Voir tous les ateliers →",
    noCartYet: "Pas encore de panier — écrivez-nous pour le réserver",
    youMayAlsoLike: "Vous aimerez aussi",
    otherWorkshops: "Autres ateliers",
    whatIncludes: "Ce qui est inclus",
    joinUs: "Vous vous lancez ?",
    writeUs: "Écrivez-nous →",
    moreInfo: "Plus d'infos →",
    seeMore: "Voir plus →",
    perPerson: "par personne",
    shopKicker: "Objets · Faits pour durer",
    menuKicker: "La cuisine · Les feux",
    teaKicker: "La salle de thé · La pause",
    workshopsKicker: "Apprendre avec les mains",
    shopIntro:
      "Des objets qui gardent le temps : artisanat fait main, vêtements et théières. Prix et détails sur chaque page — le panier arrive bientôt.",
    menuIntro:
      "Les plats de Kinomori, pour votre cuisine. Ingrédients, technique et la recette exacte de la maison.",
    teaIntro:
      "Matcha fouetté à la main et oolongs qui s'ouvrent infusion après infusion. Le thé de Kinomori, à emporter.",
    workshopsIntro:
      "Ateliers à la maison de Tamraght : wok, pâte, thé et feu. Places limitées — réservez en nous écrivant.",
    categories: { cocina: "Cuisine", te: "Thé", complementos: "Accessoires", objetos: "Objets", ropa: "Vêtements" },
    levels: { iniciación: "Débutant", intermedio: "Intermédiaire", avanzado: "Avancé" },
    scrollHint: "Faites défiler et voyagez",
    restart: "Recommencer",
    scrollCamera: "Le défilement déplace la caméra",
    chapters: "Chapitres du voyage",
    journeyAria: "Kinomori : de la forêt à la côte",
    gotoChapter: "Aller au chapitre",
    restaurantMenu: "Le restaurant",
    restaurantMenuNote: "Ce que nous servons à la maison — d'après le registre réel de la cuisine.",
    homeKits: "Cuisinez à la maison",
    homeKitsNote: "Les mêmes plats, en kits à cuisiner chez vous.",
    dishCats: { dumplings: "Raviolis", rice: "Riz", noodles: "Nouilles & Pho", drinks: "Boissons" },
    mad: "MAD",
  },
  scenes: [
    {
      label: "La Cuisine",
      kicker: "01 · Les feux",
      title: "Le wok chante à Tamraght.",
      body: "Tout commence au fourneau : une petite poêle, la vapeur, un bandeau et une main sûre. La cuisine asiatique trouve sa maison sur la côte marocaine — nasi goreng, dumplings, le rythme de la flamme.",
      note: "Feu · Vapeur · Sésame",
      ctaLabel: "",
    },
    {
      label: "Les Plats",
      kicker: "02 · De la main au bol",
      title: "Dumplings, wok, et l'instant exact.",
      body: "Des dumplings qui craquent, du riz qui saute au-dessus de la flamme, des nouilles aux cacahuètes tournées à la main. Chaque plat est cuit à la commande — jamais avant, jamais après.",
      note: "Nasi Goreng · Dumplings · Nouilles",
      ctaLabel: "Voir le menu",
    },
    {
      label: "La Salle de Thé",
      kicker: "03 · La pause",
      title: "Une tasse, et le monde s'arrête.",
      body: "Une pièce calme, une théière en fonte, la première infusion d'oolong. Ici, pas de hâte : juste l'eau, la céramique et l'instant. Le thé se sert, et il s'emporte aussi.",
      note: "Oolong · Céramique · Silence",
      ctaLabel: "",
    },
    {
      label: "Matcha",
      kicker: "04 · Pierre moulue",
      title: "Vert, fouetté, vivant.",
      body: "Matcha moulu sur pierre, fouetté dans un chawan jusqu'à ce qu'il mousse. Nous le servons en cérémonie — usucha ou koicha — et nous vendons la poudre pour garder le rituel à la maison.",
      note: "Cérémonial · Usucha · Koicha",
      ctaLabel: "Voir le thé",
    },
    {
      label: "Les Bijoux",
      kicker: "05 · Les petites choses",
      title: "Des objets qui gardent le temps.",
      body: "Pendentifs, boucles d'oreilles, bagues, bracelets — des pièces finies à la main, posées sur le lin. De petites choses, choisies lentement, faites pour être portées chaque jour.",
      note: "Fait main · Lin · Quotidien",
      ctaLabel: "Voir la boutique",
    },
    {
      label: "Thé & Objets",
      kicker: "06 · À emporter",
      title: "La forêt, dans un sachet.",
      body: "Oolong en vrac, matcha cérémonial, théières en fonte. Le même thé que nous versons dans la salle, séché et emballé pour voyager avec vous.",
      note: "Oolong · Matcha · Théières",
      ctaLabel: "",
    },
    {
      label: "La Côte",
      kicker: "07 · Entre montagnes et océan",
      title: "Tamraght, village des vagues.",
      body: "À un souffle de Taghazout : le surf au coucher du soleil, la lumière dorée sur le stuc. Entre deux sessions — un bol de nouilles, une tasse de thé, une pause.",
      note: "Surf · Heure dorée · Côte",
      ctaLabel: "",
    },
    {
      label: "Ateliers",
      kicker: "08 · Apprendre",
      title: "La forêt s'apprend avec les mains.",
      body: "Cours de wok, cérémonie du thé, dumplings faits main et huile d'argan parfumée. On ne vient pas pour regarder : on vient se salir les mains et ramener la technique à la maison.",
      note: "Cuisine · Thé · Huile d'argan",
      ctaLabel: "Voir les ateliers",
    },
    {
      label: "Le Village",
      kicker: "09 · Kinomori",
      title: "Là où la forêt rencontre l'Atlantique.",
      body: "Ruelles, lanternes, l'odeur du sésame grillé mêlée à l'air marin. Kinomori : un coin où la forêt a pris racine entre les montagnes et les vagues.",
      note: "Wabi-sabi · Ce qui dure",
      ctaLabel: "",
    },
  ],
  products: {
    "nasi-goreng-kit": {
      name: "Nasi Goreng · Kit Maison",
      short: "Le riz frit que nous servons à la maison, avec sa pâte de sambal et les épices exactes.",
      description: [
        "Notre nasi goreng en kit : tous les ingrédients secs et la pâte de sambal que nous utilisons au wok, avec la recette de la maison pas à pas.",
        "De quoi faire 2-3 portions généreuses. Il vous faut juste du riz de la veille, des œufs et ce que vous avez dans le frigo.",
      ],
      details: [
        { label: "Portions", value: "2-3 personnes" },
        { label: "Difficulté", value: "Facile" },
        { label: "Temps", value: "25 min" },
        { label: "Allergènes", value: "Soja, sésame, œuf" },
      ],
    },
    "dan-dan-noodles": {
      name: "Dan Dan Noodles",
      short: "Les nouilles épicées du Sichuan, avec leur sauce cacahuète et piment.",
      description: [
        "Notre recette de dan dan noodles : nouilles fraîches, sauce sésame et cacahuète, piment du Sichuan et le topping de porc haché.",
        "Comprend les nouilles, le mélange d'épices et le guide de montage. Pour 2 personnes.",
      ],
      details: [
        { label: "Portions", value: "2 personnes" },
        { label: "Difficulté", value: "Moyenne" },
        { label: "Temps", value: "30 min" },
        { label: "Allergènes", value: "Soja, sésame, cacahuète, gluten" },
      ],
    },
    "miso-negro-salmón": {
      name: "Miso Noir · Saumon",
      short: "Le miso noir pour glacer le saumon ou les légumes rôtis.",
      description: [
        "Le miso noir que nous utilisons pour glacer le saumon : longue fermentation, doux et profond.",
        "Un pot de 250 g qui donne 4-6 glaçages. Se conserve des mois au frigo.",
      ],
      details: [
        { label: "Contenu", value: "250 g" },
        { label: "Difficulté", value: "Facile" },
        { label: "Temps", value: "20 min" },
        { label: "Allergènes", value: "Soja" },
      ],
    },
    "matcha-ceremonial": {
      name: "Matcha Cérémonial",
      short: "Matcha de première récolte, moulu sur pierre, pour usucha et koicha.",
      description: [
        "Matcha cérémonial de la première récolte : vert vif, doux, sans amertume.",
        "Livré dans une boîte de 40 g avec les instructions de fouettage (usucha et koicha) et la touche Kinomori.",
      ],
      details: [
        { label: "Contenu", value: "40 g" },
        { label: "Origine", value: "Uji, Japon" },
        { label: "Récolte", value: "Première (ichibancha)" },
        { label: "Format", value: "Usucha / Koicha" },
      ],
    },
    "te-oolong-tieguanyin": {
      name: "Thé Oolong · Tieguanyin",
      short: "Oolong floral d'Anxi, avec ce parfum d'orchidée qui accroche.",
      description: [
        "Tieguanyin d'Anxi, torréfaction douce : floral, beurré, avec une finale sucrée.",
        "Sachet de 100 g. Peut être ré-infusé 5-6 fois.",
      ],
      details: [
        { label: "Contenu", value: "100 g" },
        { label: "Origine", value: "Anxi, Chine" },
        { label: "Infusions", value: "5-6" },
        { label: "Torréfaction", value: "Douce" },
      ],
    },
    "pulsera-zen": {
      name: "Bracelet Zen · Pierre & corde",
      short: "Fait main avec pierre naturelle et nœud artisanal. Aucun n'est identique.",
      description: [
        "Chaque bracelet est fait main à la maison : pierre naturelle, corde de coton et nœud japonais.",
        "Tailles S/M/L. Vous le voulez sur mesure ? Écrivez-nous.",
      ],
      details: [
        { label: "Matière", value: "Pierre naturelle + coton" },
        { label: "Tailles", value: "S / M / L" },
        { label: "Fait main", value: "Oui, à Tamraght" },
      ],
    },
    "colgante-zen": {
      name: "Pendentif Zen",
      short: "Un pendentif fini à la main, posé sur le lin.",
      description: [
        "Pierre, cordon et un nœud — assez petit pour être discret, assez solide pour être porté chaque jour.",
        "Fini à la main, chaque pièce est unique.",
      ],
      details: [
        { label: "Matière", value: "Pierre naturelle" },
        { label: "Cordon", value: "Coton ciré" },
        { label: "Entretien", value: "Éviter l'eau" },
      ],
    },
    "pendientes-zen": {
      name: "Boucles d'oreilles Zen",
      short: "De petites boucles, faites pour le quotidien.",
      description: [
        "Légères, minimalistes, confortables au quotidien. Finies à la main avec des matériaux naturels.",
        "Vendues par paire.",
      ],
      details: [
        { label: "Matière", value: "Pierre naturelle" },
        { label: "Fermoir", value: "Acier inoxydable" },
        { label: "Entretien", value: "Éviter l'eau" },
      ],
    },
    "anillo-zen": {
      name: "Bague Zen",
      short: "Une bague avec le calme de la forêt.",
      description: [
        "Un anneau simple, fini à la main. L'imperfection est le propos — wabi-sabi.",
        "Taille ajustable.",
      ],
      details: [
        { label: "Matière", value: "Pierre naturelle" },
        { label: "Taille", value: "Ajustable" },
        { label: "Entretien", value: "Éviter l'eau" },
      ],
    },

    "camiseta-kinomori": {
      name: "Tee-shirt Kinomori",
      short: "Coton bio, le kanji de Kinomori sur la poitrine.",
      description: [
        "Tee-shirt en coton bio 180 g, coupe régulière, kanji brodé.",
        "Disponible en noir, sable et vert forêt. Tailles XS-XXL.",
      ],
      details: [
        { label: "Matière", value: "Coton bio 180 g" },
        { label: "Couleurs", value: "Noir / Sable / Vert" },
        { label: "Tailles", value: "XS – XXL" },
      ],
    },
    "tetera-hierro": {
      name: "Théière en fonte · Tetsubin",
      short: "Tetsubin de 0,8 L : une meilleure eau, un meilleur thé.",
      description: [
        "Théière en fonte émaillée à l'intérieur, 0,8 L. Garde la chaleur et adoucit l'eau.",
        "Comprend un panier à infusion en inox.",
      ],
      details: [
        { label: "Capacité", value: "0,8 L" },
        { label: "Matière", value: "Fonte" },
        { label: "Intérieur", value: "Émaillé" },
      ],
    },
  },
  workshops: {
    "wok-desde-cero": {
      name: "Le Wok de A à Z",
      short: "Apprenez le wok comme chez nous : feu vif, ingrédients dans l'ordre, sans peur.",
      description: [
        "Un atelier pratique où l'on monte le wok, prépare le riz de la veille et cuisine trois classiques : nasi goreng, légumes sautés et nouilles.",
        "Vous repartez avec la technique (pas seulement la recette) : l'ordre des ingrédients, le contrôle du feu et comment savoir quand c'est prêt.",
        "Maximum 6 personnes. Tous les ingrédients et une tasse de thé inclus.",
      ],
      includes: [
        "3 plats cuisinés par vous",
        "Guide imprimé des recettes",
        "Ingrédients et wok inclus",
        "Dégustation du thé de la maison",
      ],
      upcoming: "Prochaine date à confirmer",
    },
    "ceremonia-te": {
      name: "Cérémonie du Thé",
      short: "Un après-midi de matcha, d'attention et de silence. Entre les mains de notre thé.",
      description: [
        "Une introduction à la cérémonie du thé japonaise : le fouettage du matcha (usucha), la posture, la respiration et l'ordre de la salle.",
        "Aucune expérience requise. Venez curieux, en vêtements confortables.",
      ],
      includes: [
        "Matcha cérémonial inclus",
        "Bol et fouet pour pratiquer",
        "Histoire et rites expliqués",
        "Thé à emporter",
      ],
      upcoming: "Samedis, 17 h",
    },
    "dumplings-a-mano": {
      name: "Dumplings Faits Main",
      short: "Pâte, plis et vapeur : les dumplings de Kinomori, faits par vous.",
      description: [
        "Nous faisons la pâte de zéro, deux farces (porc et légumes) et apprenons les plis classiques. À la fin, on les cuit à la vapeur et à la poêle.",
        "Vous repartez avec la pâte et les dumplings restants.",
      ],
      includes: [
        "Pâte et farces incluses",
        "Techniques de pliage",
        "Cuisson vapeur et poêle",
        "Recettes à refaire à la maison",
      ],
      upcoming: "Prochaine date à confirmer",
    },
    "ramen-casero": {
      name: "Ramen Maison",
      short: "Bouillon de 12 heures, chashu, ajitama et nouilles : le ramen complet.",
      description: [
        "L'atelier le plus complet : bouillon tori paitan, chashu de porc, œuf mariné et nouilles fraîches faites main.",
        "On mange le ramen ensemble à la fin. Venez avec un gros appétit.",
      ],
      includes: [
        "Bouillon de zéro (12 h)",
        "Chashu et ajitama",
        "Nouilles fraîches faites main",
        "Repas final inclus",
      ],
      upcoming: "Prochaine date à confirmer",
    },
  },
};

const es: Dict = {
  nav: { journey: "El viaje", menu: "Menú", tea: "Té", shop: "Tienda", workshops: "Workshops" },
  footer: { tagline: "Cocina asiática, té y taller" },
  back: "Volver al viaje",
  ui: {
    productNotFoundTitle: "Producto no encontrado",
    productNotFoundBody: "No hemos encontrado ese producto.",
    seeAllProducts: "Ver todos los productos →",
    workshopNotFoundTitle: "Workshop no encontrado",
    workshopNotFoundBody: "No hemos encontrado ese taller.",
    seeAllWorkshops: "Ver todos los workshops →",
    noCartYet: "Sin carrito por ahora — escríbenos para reservarlo",
    youMayAlsoLike: "También te puede gustar",
    otherWorkshops: "Otros workshops",
    whatIncludes: "Qué incluye",
    joinUs: "¿Te apuntas?",
    writeUs: "Escríbenos →",
    moreInfo: "Más info →",
    seeMore: "Ver más →",
    perPerson: "por persona",
    shopKicker: "Objetos · Hechos para durar",
    menuKicker: "La cocina · Los fuegos",
    teaKicker: "La sala de té · La pausa",
    workshopsKicker: "Aprende con las manos",
    shopIntro:
      "Objetos que guardan tiempo: artesanía, ropa y teteras hechas a mano. Precio y detalles en cada página — el carrito llegará más adelante.",
    menuIntro:
      "Los platos de Kinomori, para llevar a tu cocina. Ingredientes, técnica y la receta exacta de la casa.",
    teaIntro:
      "Matcha batido a mano y oolongs que se abren infusión a infusión. El té de Kinomori, para llevar a casa.",
    workshopsIntro:
      "Talleres en el local de Tamraght: wok, masa, té y fuego. Plazas limitadas — reserva escribiéndonos.",
    categories: { cocina: "Cocina", te: "Té", complementos: "Complementos", objetos: "Objetos", ropa: "Ropa" },
    levels: { iniciación: "Iniciación", intermedio: "Intermedio", avanzado: "Avanzado" },
    scrollHint: "Desliza y viaja",
    restart: "Volver a empezar",
    scrollCamera: "El scroll mueve la cámara",
    chapters: "Capítulos del viaje",
    journeyAria: "Kinomori: del bosque a la costa",
    gotoChapter: "Ir al capítulo",
    restaurantMenu: "El restaurante",
    restaurantMenuNote: "Lo que servimos en la casa — del registro real de la cocina.",
    homeKits: "Cocina en casa",
    homeKitsNote: "Los mismos platos, en kits para cocinar en tu cocina.",
    dishCats: { dumplings: "Dumplings", rice: "Arroz", noodles: "Fideos & Pho", drinks: "Bebidas" },
    mad: "MAD",
  },
  scenes: [
    {
      label: "La Cocina",
      kicker: "01 · Los fuegos",
      title: "El wok canta en Tamraght.",
      body: "Todo empieza en el fogón: una sartén pequeña, el vapor, una diadema y una mano firme. La cocina asiática encuentra su casa en la costa marroquí — nasi goreng, dumplings, el ritmo de la llama.",
      note: "Fuego · Vapor · Sésamo",
      ctaLabel: "",
    },
    {
      label: "Los Platos",
      kicker: "02 · De la mano al bol",
      title: "Dumplings, wok y el momento exacto.",
      body: "Dumplings que crujen, arroz que salta sobre la llama, fideos de cacahuete removidos a mano. Cada plato se cocina al pedirlo — nunca antes, nunca después.",
      note: "Nasi Goreng · Dumplings · Fideos",
      ctaLabel: "Ver el menú",
    },
    {
      label: "La Sala de Té",
      kicker: "03 · La pausa",
      title: "Una taza, y el mundo se detiene.",
      body: "Una sala tranquila, la tetera de hierro, la primera infusión de oolong. Aquí no hay prisa: solo agua, cerámica y el momento. El té se sirve, y también se lleva a casa.",
      note: "Oolong · Cerámica · Silencio",
      ctaLabel: "",
    },
    {
      label: "Matcha",
      kicker: "04 · Molido a la piedra",
      title: "Verde, batido, vivo.",
      body: "Matcha molido a la piedra, batido en un chawan hasta que espuma. Lo servimos ceremonial — usucha o koicha — y vendemos el polvo para que lleves el ritual a casa.",
      note: "Ceremonial · Usucha · Koicha",
      ctaLabel: "Ver el té",
    },
    {
      label: "Las Joyas",
      kicker: "05 · Las cosas pequeñas",
      title: "Objetos que guardan el tiempo.",
      body: "Colgantes, pendientes, anillos, pulseras — piezas terminadas a mano, sobre lino. Cosas pequeñas, elegidas despacio, hechas para llevarse cada día.",
      note: "Hecho a mano · Lino · Cotidiano",
      ctaLabel: "Ver la tienda",
    },
    {
      label: "Té y Objetos",
      kicker: "06 · Para llevar",
      title: "El bosque, en un paquete.",
      body: "Oolong a granel, matcha ceremonial, teteras de hierro. El mismo té que servimos en la sala, secado y empaquetado para viajar contigo.",
      note: "Oolong · Matcha · Teteras",
      ctaLabel: "",
    },
    {
      label: "La Costa",
      kicker: "07 · Entre montañas y océano",
      title: "Tamraght, pueblo de olas.",
      body: "A un suspiro de Taghazout: surf al atardecer, luz dorada sobre el estuco. Entre sesiones — un bol de fideos, una taza de té, una pausa.",
      note: "Surf · Hora dorada · Costa",
      ctaLabel: "",
    },
    {
      label: "Talleres",
      kicker: "08 · Aprender",
      title: "El bosque se aprende con las manos.",
      body: "Clases de wok, ceremonia del té, dumplings hechos a mano y aceite de argán perfumado. No venimos a mirar: venimos a ensuciarnos las manos y llevarnos la técnica a casa.",
      note: "Cocina · Té · Aceite de argán",
      ctaLabel: "Ver talleres",
    },
    {
      label: "El Pueblo",
      kicker: "09 · Kinomori",
      title: "Donde el bosque encuentra el Atlántico.",
      body: "Callejones, faroles, el olor del sésamo tostado mezclado con el aire del mar. Kinomori: un rincón donde el bosque echó raíces entre las montañas y las olas.",
      note: "Wabi-sabi · Lo que dura",
      ctaLabel: "",
    },
  ],
  products: {
    "nasi-goreng-kit": {
      name: "Nasi Goreng · Kit para casa",
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
    },
    "dan-dan-noodles": {
      name: "Dan Dan Noodles",
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
    },
    "miso-negro-salmón": {
      name: "Miso Negro · Salmón",
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
    },
    "matcha-ceremonial": {
      name: "Matcha Ceremonial",
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
    },
    "te-oolong-tieguanyin": {
      name: "Té Oolong · Tieguanyin",
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
    },
    "pulsera-zen": {
      name: "Pulsera Zen · Piedra y soga",
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
    },
    "colgante-zen": {
      name: "Colgante Zen",
      short: "Un colgante terminado a mano, sobre lino.",
      description: [
        "Piedra, cuerda y un nudo — pequeño para ser discreto, firme para llevarlo cada día.",
        "Terminado a mano, cada pieza es única.",
      ],
      details: [
        { label: "Material", value: "Piedra natural" },
        { label: "Cuerda", value: "Algodón encerado" },
        { label: "Cuidado", value: "Evitar agua" },
      ],
    },
    "pendientes-zen": {
      name: "Pendientes Zen",
      short: "Pendientes pequeños, hechos para el día a día.",
      description: [
        "Ligeros, minimalistas, cómodos para cada día. Terminados a mano con materiales naturales.",
        "Se venden por par.",
      ],
      details: [
        { label: "Material", value: "Piedra natural" },
        { label: "Cierre", value: "Acero inoxidable" },
        { label: "Cuidado", value: "Evitar agua" },
      ],
    },
    "anillo-zen": {
      name: "Anillo Zen",
      short: "Un anillo con la calma del bosque.",
      description: [
        "Una banda sencilla, terminada a mano. La imperfección es el punto — wabi-sabi.",
        "Talla ajustable.",
      ],
      details: [
        { label: "Material", value: "Piedra natural" },
        { label: "Talla", value: "Ajustable" },
        { label: "Cuidado", value: "Evitar agua" },
      ],
    },

    "camiseta-kinomori": {
      name: "Camiseta Kinomori",
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
    },
    "tetera-hierro": {
      name: "Tetera de hierro · Tetsubin",
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
    },
  },
  workshops: {
    "wok-desde-cero": {
      name: "El Wok desde Cero",
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
      upcoming: "Próxima fecha por confirmar",
    },
    "ceremonia-te": {
      name: "Ceremonia del Té",
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
      upcoming: "Sábados, 17:00",
    },
    "dumplings-a-mano": {
      name: "Dumplings a Mano",
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
      upcoming: "Próxima fecha por confirmar",
    },
    "ramen-casero": {
      name: "Ramen Casero",
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
      upcoming: "Próxima fecha por confirmar",
    },
  },
};

const zh: Dict = {
  nav: { journey: "旅程", menu: "菜单", tea: "茶", shop: "商店", workshops: "工作坊" },
  footer: { tagline: "亚洲料理、茶与手工艺" },
  back: "返回旅程",
  ui: {
    productNotFoundTitle: "未找到产品",
    productNotFoundBody: "我们没有找到该产品。",
    seeAllProducts: "查看所有产品 →",
    workshopNotFoundTitle: "未找到工作坊",
    workshopNotFoundBody: "我们没有找到该工作坊。",
    seeAllWorkshops: "查看所有工作坊 →",
    noCartYet: "暂无购物车 — 写信给我们预订",
    youMayAlsoLike: "你可能也喜欢",
    otherWorkshops: "其他工作坊",
    whatIncludes: "包含内容",
    joinUs: "要参加吗？",
    writeUs: "联系我们 →",
    moreInfo: "了解更多 →",
    seeMore: "查看更多 →",
    perPerson: "每人",
    shopKicker: "器物 · 为长久而作",
    menuKicker: "厨房 · 火焰",
    teaKicker: "茶室 · 停顿",
    workshopsKicker: "用双手去学",
    shopIntro: "承载时光的物品：手作工艺品、服饰与铁壶。每页均有价格与详情 — 购物车即将上线。",
    menuIntro: "Kinomori 的菜肴，带回你的厨房。食材、技法与家传秘方。",
    teaIntro: "手打抹茶与一泡一泡绽放的乌龙茶。把 Kinomori 的茶带回家。",
    workshopsIntro: "塔姆拉赫特店内工作坊：炒锅、面团、茶与火。名额有限 — 写信预订。",
    categories: { cocina: "厨房", te: "茶", complementos: "配饰", objetos: "器物", ropa: "服饰" },
    levels: { iniciación: "入门", intermedio: "中级", avanzado: "高级" },
    scrollHint: "滑动屏幕，开始旅程",
    restart: "重新开始",
    scrollCamera: "滑动控制镜头",
    chapters: "旅程章节",
    journeyAria: "Kinomori：从森林到海岸",
    gotoChapter: "前往章节",
    restaurantMenu: "餐厅",
    restaurantMenuNote: "我们在店里供应的菜肴——来自真实的厨房记录。",
    homeKits: "在家烹饪",
    homeKitsNote: "同样的菜肴，做成套件，在家烹饪。",
    dishCats: { dumplings: "饺子", rice: "米饭", noodles: "面条 & 河粉", drinks: "饮品" },
    mad: "MAD",
  },
  scenes: [
    {
      label: "厨房",
      kicker: "01 · 灶火",
      title: "炒锅在塔姆拉赫特歌唱。",
      body: "一切从灶台开始：一口小锅、升腾的蒸汽、一条发带和一双稳的手。亚洲料理在摩洛哥海岸找到了家——印尼炒饭、饺子、火焰的节奏。",
      note: "火 · 蒸汽 · 芝麻",
      ctaLabel: "",
    },
    {
      label: "菜肴",
      kicker: "02 · 从手到碗",
      title: "饺子、炒锅与恰好的时刻。",
      body: "滋滋作响的饺子、在火焰上跳跃的米饭、手工搅拌的花生面。每一道菜都是现点现做——不早一刻，也不晚一刻。",
      note: "印尼炒饭 · 饺子 · 花生面",
      ctaLabel: "查看菜单",
    },
    {
      label: "茶室",
      kicker: "03 · 停顿",
      title: "一杯茶，世界就此安静。",
      body: "安静的茶室、铁壶、乌龙的第一泡。这里没有匆忙：只有水、陶器和当下。茶在这里供应，也可以带回家。",
      note: "乌龙 · 陶器 · 宁静",
      ctaLabel: "",
    },
    {
      label: "抹茶",
      kicker: "04 · 石磨",
      title: "绿色、打泡、鲜活。",
      body: "石磨抹茶，在茶碗中打至起泡。我们以茶道方式供应——薄茶或浓茶——也出售茶粉，让你把仪式带回家。",
      note: "茶道 · 薄茶 · 浓茶",
      ctaLabel: "查看茶",
    },
    {
      label: "首饰",
      kicker: "05 · 小物",
      title: "留住时间的物件。",
      body: "吊坠、耳环、戒指、手链——手工完成的物件，铺在亚麻布上。小小的东西，慢慢挑选，为每天佩戴而做。",
      note: "手工 · 亚麻 · 日常",
      ctaLabel: "查看商店",
    },
    {
      label: "茶与器物",
      kicker: "06 · 带回家",
      title: "把森林装进一包。",
      body: "散装乌龙、茶道抹茶、铁壶。与茶室里冲泡的是同一种茶，烘干包装，随你远行。",
      note: "乌龙 · 抹茶 · 铁壶",
      ctaLabel: "",
    },
    {
      label: "海岸",
      kicker: "07 · 山海之间",
      title: "塔姆拉赫特，浪花之村。",
      body: "距塔哈佐特一步之遥：日落时分的冲浪，金色光线落在灰泥墙上。浪与浪之间——一碗面、一杯茶、一次停顿。",
      note: "冲浪 · 金色时刻 · 海岸",
      ctaLabel: "",
    },
    {
      label: "工作坊",
      kicker: "08 · 学习",
      title: "用双手学习森林。",
      body: "炒锅课程、茶道、手工饺子和香薰摩洛哥坚果油。我们不是来旁观的：我们动手，然后把技艺带回家。",
      note: "烹饪 · 茶 · 坚果油",
      ctaLabel: "查看工作坊",
    },
    {
      label: "村庄",
      kicker: "09 · Kinomori",
      title: "森林与大海交汇之处。",
      body: "小巷、灯笼、烤芝麻的香气与海风交织。Kinomori：一个在山与浪之间扎根的角落。",
      note: "侘寂 · 长久之物",
      ctaLabel: "",
    },
  ],
  products: {
    "nasi-goreng-kit": {
      name: "纳西炒饭 · 居家套装",
      short: "我们店里供应的炒饭，配参巴酱与精确香料。",
      description: [
        "我们的纳西炒饭套装：我们在炒锅中使用的所有干料与参巴酱，附家传步骤食谱。",
        "足够 2-3 人份。你只需隔夜米饭、鸡蛋和冰箱里现有的食材。",
      ],
      details: [
        { label: "份量", value: "2-3 人" },
        { label: "难度", value: "简单" },
        { label: "时间", value: "25 分钟" },
        { label: "过敏原", value: "大豆、芝麻、鸡蛋" },
      ],
    },
    "dan-dan-noodles": {
      name: "担担面",
      short: "四川辣面，配花生辣椒酱。",
      description: [
        "我们的担担面食谱：新鲜面条、芝麻花生酱、四川辣椒与肉末浇头。",
        "包含面条、香料混合与组装指南。2 人份。",
      ],
      details: [
        { label: "份量", value: "2 人" },
        { label: "难度", value: "中等" },
        { label: "时间", value: "30 分钟" },
        { label: "过敏原", value: "大豆、芝麻、花生、麸质" },
      ],
    },
    "miso-negro-salmón": {
      name: "黑味噌 · 三文鱼",
      short: "用于给三文鱼或烤蔬菜上釉的黑味噌酱。",
      description: [
        "我们用来给三文鱼上釉的黑味噌：长发酵，甘甜而深邃。",
        "250 克一罐，可做 4-6 次上釉。冰箱可保存数月。",
      ],
      details: [
        { label: "含量", value: "250 克" },
        { label: "难度", value: "简单" },
        { label: "时间", value: "20 分钟" },
        { label: "过敏原", value: "大豆" },
      ],
    },
    "matcha-ceremonial": {
      name: "仪式级抹茶",
      short: "早采抹茶，石磨碾制，适合薄茶与浓茶。",
      description: [
        "头采仪式级抹茶：鲜绿、甘甜、无苦涩。",
        "40 克罐装，附点茶说明（薄茶与浓茶）与 Kinomori 之韵。",
      ],
      details: [
        { label: "含量", value: "40 克" },
        { label: "产地", value: "日本宇治" },
        { label: "采收", value: "头采（一番茶）" },
        { label: "用法", value: "薄茶 / 浓茶" },
      ],
    },
    "te-oolong-tieguanyin": {
      name: "铁观音乌龙茶",
      short: "安溪花香乌龙，那令人上瘾的兰花香。",
      description: [
        "安溪铁观音，轻焙：花香、醇厚、回甘清甜。",
        "100 克袋装。可冲泡 5-6 次。",
      ],
      details: [
        { label: "含量", value: "100 克" },
        { label: "产地", value: "中国安溪" },
        { label: "冲泡次数", value: "5-6 次" },
        { label: "焙火", value: "轻焙" },
      ],
    },
    "pulsera-zen": {
      name: "禅意手链 · 石与绳",
      short: "天然石与手工绳结，独一无二。",
      description: [
        "每条手链都在店里手工制作：天然石、棉绳与日式绳结。",
        "S/M/L 码。想要定制？联系我们。",
      ],
      details: [
        { label: "材质", value: "天然石 + 棉" },
        { label: "尺码", value: "S / M / L" },
        { label: "手工制作", value: "是，塔姆拉赫特" },
      ],
    },
    "colgante-zen": {
      name: "禅意吊坠",
      short: "手工完成的吊坠，铺在亚麻布上。",
      description: [
        "石头、绳结——小到安静，牢固到可以每天佩戴。",
        "手工完成，每一件都独一无二。",
      ],
      details: [
        { label: "材质", value: "天然石" },
        { label: "绳", value: "蜡棉绳" },
        { label: "保养", value: "避免沾水" },
      ],
    },
    "pendientes-zen": {
      name: "禅意耳环",
      short: "小巧的耳环，为日常佩戴而做。",
      description: [
        "轻盈、简约、日常舒适。以天然材料手工完成。",
        "成对出售。",
      ],
      details: [
        { label: "材质", value: "天然石" },
        { label: "耳针", value: "不锈钢" },
        { label: "保养", value: "避免沾水" },
      ],
    },
    "anillo-zen": {
      name: "禅意戒指",
      short: "一枚带着森林宁静的戒指。",
      description: [
        "简约的戒环，手工完成。不完美才是重点——侘寂。",
        "尺寸可调。",
      ],
      details: [
        { label: "材质", value: "天然石" },
        { label: "尺寸", value: "可调节" },
        { label: "保养", value: "避免沾水" },
      ],
    },

    "camiseta-kinomori": {
      name: "Kinomori T 恤",
      short: "有机棉，胸前绣有 Kinomori 汉字。",
      description: [
        "180 克有机棉 T 恤，常规版型，刺绣汉字。",
        "黑色、沙色与森林绿可选。XS-XXL 码。",
      ],
      details: [
        { label: "材质", value: "有机棉 180 克" },
        { label: "颜色", value: "黑 / 沙 / 绿" },
        { label: "尺码", value: "XS – XXL" },
      ],
    },
    "tetera-hierro": {
      name: "铸铁壶 · 铁瓶",
      short: "0.8 升铁瓶：水更甘，茶更香。",
      description: [
        "内壁搪瓷的铸铁壶，0.8 升。保温且软化水质。",
        "附不锈钢滤茶网。",
      ],
      details: [
        { label: "容量", value: "0.8 升" },
        { label: "材质", value: "铸铁" },
        { label: "内壁", value: "搪瓷" },
      ],
    },
  },
  workshops: {
    "wok-desde-cero": {
      name: "从零学炒锅",
      short: "像我们店里那样学炒锅：大火、食材有序、无所畏惧。",
      description: [
        "实操工作坊：架起炒锅、准备隔夜米饭，烹制三道经典：纳西炒饭、炒时蔬与面条。",
        "你带走的是技法（不只是食谱）：食材顺序、火候控制与如何判断火候刚好。",
        "最多 6 人。含全部食材与一杯茶。",
      ],
      includes: [
        "亲手烹制 3 道菜",
        "纸质食谱指南",
        "含食材与炒锅",
        "店内茶叶品鉴",
      ],
      upcoming: "日期待定",
    },
    "ceremonia-te": {
      name: "茶道体验",
      short: "一个抹茶、专注与静默的午后。由我们的茶引领。",
      description: [
        "日本茶道入门：点抹茶（薄茶）、仪态、呼吸与茶室秩序。",
        "无需经验。带着好奇与舒适衣物前来即可。",
      ],
      includes: [
        "含仪式级抹茶",
        "练习用茶碗与茶筅",
        "讲解历史与仪式",
        "可带走的茶",
      ],
      upcoming: "每周六 17:00",
    },
    "dumplings-a-mano": {
      name: "手工饺子",
      short: "面团、褶子与蒸汽：由你亲手制作的 Kinomori 饺子。",
      description: [
        "从零和面，两种馅料（猪肉与蔬菜），学习经典褶法。最后蒸煎并用。",
        "可带走剩余的面团与饺子。",
      ],
      includes: [
        "含面团与馅料",
        "褶法技巧",
        "蒸制与煎制",
        "可在家复刻的食谱",
      ],
      upcoming: "日期待定",
    },
    "ramen-casero": {
      name: "自制拉面",
      short: "12 小时高汤、叉烧、溏心蛋与面条：完整拉面。",
      description: [
        "最完整的工作坊：鸡汤白汤、猪叉烧、卤蛋与新鲜手擀面。",
        "最后一起享用拉面。请带上最好的胃口。",
      ],
      includes: [
        "从零熬汤（12 小时）",
        "叉烧与溏心蛋",
        "新鲜手擀面",
        "含最后餐食",
      ],
      upcoming: "日期待定",
    },
  },
};

const ja: Dict = {
  nav: { journey: "旅路", menu: "メニュー", tea: "茶", shop: "ショップ", workshops: "ワークショップ" },
  footer: { tagline: "アジア料理、茶、そして手仕事" },
  back: "旅路に戻る",
  ui: {
    productNotFoundTitle: "商品が見つかりません",
    productNotFoundBody: "その商品は見つかりませんでした。",
    seeAllProducts: "すべての商品を見る →",
    workshopNotFoundTitle: "ワークショップが見つかりません",
    workshopNotFoundBody: "そのワークショップは見つかりませんでした。",
    seeAllWorkshops: "すべてのワークショップを見る →",
    noCartYet: "カートはまだありません — ご予約はお問い合わせください",
    youMayAlsoLike: "こちらもおすすめ",
    otherWorkshops: "その他のワークショップ",
    whatIncludes: "含まれるもの",
    joinUs: "参加しますか？",
    writeUs: "お問い合わせ →",
    moreInfo: "詳しく見る →",
    seeMore: "続きを見る →",
    perPerson: "お一人様",
    shopKicker: "器物 · 長く使えるもの",
    menuKicker: "キッチン · 火",
    teaKicker: "茶室 · ひと休み",
    workshopsKicker: "手で学ぶ",
    shopIntro: "時を宿すもの：手仕事の雑貨、衣類、鉄瓶。価格と詳細は各ページに — カートは近日公開。",
    menuIntro: "Kinomori の料理を、あなたの台所へ。食材、技法、そして店の正確なレシピ。",
    teaIntro: "手で点てる抹茶、何煎も開いていく烏龍茶。Kinomori の茶を、お家へ。",
    workshopsIntro: "タムラフトの店でのワークショップ：鍋、生地、茶、火。定員あり — お問い合わせでご予約を。",
    categories: { cocina: "料理", te: "茶", complementos: "アクセサリー", objetos: "器物", ropa: "衣類" },
    levels: { iniciación: "初級", intermedio: "中級", avanzado: "上級" },
    scrollHint: "スクロールして旅へ",
    restart: "最初から",
    scrollCamera: "スクロールでカメラが動く",
    chapters: "旅の章",
    journeyAria: "Kinomori：森から海岸へ",
    gotoChapter: "章へ移動",
    restaurantMenu: "レストラン",
    restaurantMenuNote: "店で提供している料理——実際の厨房記録から。",
    homeKits: "家で作る",
    homeKitsNote: "同じ料理をキットにして、ご自宅で。",
    dishCats: { dumplings: "餃子", rice: "ご飯", noodles: "麺 & フォー", drinks: "飲み物" },
    mad: "MAD",
  },
  scenes: [
    {
      label: "厨房",
      kicker: "01 · 火",
      title: "タムラクトで鉄鍋が歌う。",
      body: "すべてはコンロから始まる：小さなフライパン、立ち上る湯気、ヘアバンド、そして確かな手。アジアの料理がモロッコの海岸に根づく——ナシゴレン、点心、炎のリズム。",
      note: "火 · 湯気 · ごま",
      ctaLabel: "",
    },
    {
      label: "料理",
      kicker: "02 · 手から器へ",
      title: "点心、鉄鍋、ちょうどいい瞬間。",
      body: "パチパチと音を立てる点心、炎の上で跳ねるご飯、手で混ぜるピーナッツ麺。すべての料理は注文を受けてから調理される——早すぎず、遅すぎず。",
      note: "ナシゴレン · 点心 · ピーナッツ麺",
      ctaLabel: "メニューを見る",
    },
    {
      label: "茶室",
      kicker: "03 · 間",
      title: "一杯で、世界が止まる。",
      body: "静かな部屋、鉄の急須、烏龍茶の一番茶。ここには急ぎがない：ただ水と陶器と、いまだけがある。お茶はここで飲み、持ち帰ることもできる。",
      note: "烏龍茶 · 陶器 · 静けさ",
      ctaLabel: "",
    },
    {
      label: "抹茶",
      kicker: "04 · 石臼挽き",
      title: "緑、点てる、生きている。",
      body: "石臼で挽いた抹茶を、茶碗で泡立つまで点てる。薄茶も濃茶も、茶道のままお出しし、粉も販売している——儀式を家に持ち帰れるように。",
      note: "茶道 · 薄茶 · 濃茶",
      ctaLabel: "お茶を見る",
    },
    {
      label: "ジュエリー",
      kicker: "05 · 小さなもの",
      title: "時間を留めるもの。",
      body: "ペンダント、イヤリング、指輪、ブレスレット——手で仕上げた品々をリネンの上に。小さく、ゆっくり選び、毎日身につけるために。",
      note: "手作り · リネン · 日常",
      ctaLabel: "ショップを見る",
    },
    {
      label: "茶と器",
      kicker: "06 · 持ち帰る",
      title: "森を、ひとつの包みに。",
      body: "葉のままの烏龍茶、茶道の抹茶、鉄の急須。茶室で淹れるのと同じお茶を、乾燥させて包み、あなたと旅させる。",
      note: "烏龍茶 · 抹茶 · 鉄の急須",
      ctaLabel: "",
    },
    {
      label: "海岸",
      kicker: "07 · 山と海のあいだ",
      title: "タムラクト、波の村。",
      body: "タガズートのすぐそば：夕日のサーフィン、漆喰に落ちる金色の光。セッションの合間に——麺の丼、一杯のお茶、ひとときの間。",
      note: "サーフィン · ゴールデンアワー · 海岸",
      ctaLabel: "",
    },
    {
      label: "ワークショップ",
      kicker: "08 · 学ぶ",
      title: "森は手で学ぶ。",
      body: "鉄鍋の教室、茶道、手作りの点心、香るアルガンオイル。見に来るのではない：手を汚し、技術を家に持ち帰るのだ。",
      note: "料理 · 茶 · アルガンオイル",
      ctaLabel: "ワークショップを見る",
    },
    {
      label: "村",
      kicker: "09 · Kinomori",
      title: "森が大西洋と出会う場所。",
      body: "路地、提灯、海風に混ざるごまの香ばしさ。Kinomori——山と波のあいだに根づいた、小さな場所。",
      note: "侘び寂び · 長く残るもの",
      ctaLabel: "",
    },
  ],
  products: {
    "nasi-goreng-kit": {
      name: "ナシゴレン · ホームキット",
      short: "店で出す炒飯を、サンバルペーストと正確なスパイスとともに。",
      description: [
        "ナシゴレンのキット：鍋で使う乾物とサンバルペーストすべて、店のレシピをステップごとに。",
        "たっぷり2〜3人分。前日のご飯、卵、冷蔵庫にあるものでOK。",
      ],
      details: [
        { label: "人数", value: "2〜3人" },
        { label: "難易度", value: "簡単" },
        { label: "時間", value: "25分" },
        { label: "アレルギー", value: "大豆、ごま、卵" },
      ],
    },
    "dan-dan-noodles": {
      name: "担々麺",
      short: "四川の辛麺、ピーナッツと唐辛子のソースで。",
      description: [
        "当店の担々麺レシピ：生麺、ごまピーナッツソース、四川唐辛子、豚ひき肉のトッピング。",
        "麺、スパイスミックス、組み立てガイド付き。2人分。",
      ],
      details: [
        { label: "人数", value: "2人" },
        { label: "難易度", value: "中級" },
        { label: "時間", value: "30分" },
        { label: "アレルギー", value: "大豆、ごま、ピーナッツ、グルテン" },
      ],
    },
    "miso-negro-salmón": {
      name: "黒味噌 · サーモン",
      short: "サーモンや焼き野菜のグレーズに。",
      description: [
        "サーモンのグレーズに使う黒味噌：長期発酵、甘く深い。",
        "250g瓶で4〜6回分。冷蔵庫で数ヶ月もちます。",
      ],
      details: [
        { label: "内容量", value: "250 g" },
        { label: "難易度", value: "簡単" },
        { label: "時間", value: "20分" },
        { label: "アレルギー", value: "大豆" },
      ],
    },
    "matcha-ceremonial": {
      name: " ceremonial 抹茶",
      short: "早摘みの石臼挽き抹茶、薄茶・濃茶に。",
      description: [
        "一番摘みの ceremonial 抹茶：鮮やかな緑、甘く、苦味なし。",
        "40g缶、点て方（薄茶・濃茶）と Kinomori のこだわり付き。",
      ],
      details: [
        { label: "内容量", value: "40 g" },
        { label: "産地", value: "京都・宇治" },
        { label: "摘み", value: "一番茶" },
        { label: "形式", value: "薄茶 / 濃茶" },
      ],
    },
    "te-oolong-tieguanyin": {
      name: "烏龍茶 · 鉄観音",
      short: "安渓の花のような烏龍茶、クセになる蘭の香り。",
      description: [
        "安渓の鉄観音、軽焙煎：花のように、バターのように、甘い余韻。",
        "100g袋。5〜6煎楽しめます。",
      ],
      details: [
        { label: "内容量", value: "100 g" },
        { label: "産地", value: "中国・安渓" },
        { label: "煎数", value: "5〜6煎" },
        { label: "焙煎", value: "軽め" },
      ],
    },
    "pulsera-zen": {
      name: "禅ブレスレット · 石と紐",
      short: "天然石と手結びの紐で、ひとつとして同じものはない。",
      description: [
        "店で一つずつ手作り：天然石、コットン紐、和結び。",
        "サイズ S/M/L。オーダーメイド希望はお問い合わせを。",
      ],
      details: [
        { label: "素材", value: "天然石 + コットン" },
        { label: "サイズ", value: "S / M / L" },
        { label: "手作り", value: "はい、タムラフトにて" },
      ],
    },
    "colgante-zen": {
      name: "禅のペンダント",
      short: "手仕上げのペンダント、リネンの上に。",
      description: [
        "石と紐と結び目——静かで、毎日身につけられる強さ。",
        "手仕上げ、一点もの。",
      ],
      details: [
        { label: "素材", value: "天然石" },
        { label: "紐", value: "ワックスコットン" },
        { label: "お手入れ", value: "水を避ける" },
      ],
    },
    "pendientes-zen": {
      name: "禅のイヤリング",
      short: "毎日使える小さなイヤリング。",
      description: [
        "軽く、ミニマルで、毎日快適。天然素材で手仕上げ。",
        "ペアでの販売。",
      ],
      details: [
        { label: "素材", value: "天然石" },
        { label: "ピアス", value: "ステンレス" },
        { label: "お手入れ", value: "水を避ける" },
      ],
    },
    "anillo-zen": {
      name: "禅のリング",
      short: "森の静けさを持つリング。",
      description: [
        "シンプルなバンド、手仕上げ。不完全さこそが魅力——侘び寂び。",
        "サイズ調整可能。",
      ],
      details: [
        { label: "素材", value: "天然石" },
        { label: "サイズ", value: "調整可能" },
        { label: "お手入れ", value: "水を避ける" },
      ],
    },

    "camiseta-kinomori": {
      name: "Kinomori Tシャツ",
      short: "オーガニックコットン、胸に Kinomori の漢字。",
      description: [
        "180gオーガニックコットン、レギュラーフィット、刺繍の漢字。",
        "ブラック、サンド、フォレストグリーン。サイズ XS-XXL。",
      ],
      details: [
        { label: "素材", value: "オーガニックコットン 180 g" },
        { label: "カラー", value: "黒 / 砂 / 緑" },
        { label: "サイズ", value: "XS – XXL" },
      ],
    },
    "tetera-hierro": {
      name: "鉄瓶",
      short: "0.8Lの鉄瓶：水がおいしくなり、茶もおいしくなる。",
      description: [
        "内側ホーローの鋳鉄製鉄瓶、0.8L。保温に優れ、水を丸くする。",
        "ステンレス茶こし付き。",
      ],
      details: [
        { label: "容量", value: "0.8 L" },
        { label: "素材", value: "鋳鉄" },
        { label: "内側", value: "ホーロー" },
      ],
    },
  },
  workshops: {
    "wok-desde-cero": {
      name: "鍋をゼロから",
      short: "店と同じやり方で鍋を学ぶ：強火、正しい順番、恐れずに。",
      description: [
        "実践的なワークショップ：鍋をセットし、前日のご飯を準備し、ナシゴレン、炒め野菜、麺の3品を調理します。",
        "持ち帰るのはレシピだけでなく技術：食材の順番、火加減、出来上がりの見極め。",
        "最大6名。食材とお茶一杯付き。",
      ],
      includes: [
        "自分で調理する3品",
        "印刷レシピガイド",
        "食材と鍋込み",
        "店のお茶の試飲",
      ],
      upcoming: "次回日程は調整中",
    },
    "ceremonia-te": {
      name: "茶道体験",
      short: "抹茶と、集中と、静けさの午後。私たちのお茶とともに。",
      description: [
        "日本茶道への入門：抹茶（薄茶）の点て方、姿勢、呼吸、そして茶室の作法。",
        "経験は不要。好奇心と動きやすい服装でお越しください。",
      ],
      includes: [
        "ceremonial 抹茶付き",
        "練習用の茶碗と茶筅",
        "歴史と作法の解説",
        "お持ち帰り用のお茶",
      ],
      upcoming: "毎週土曜 17:00",
    },
    "dumplings-a-mano": {
      name: "手作り餃子",
      short: "皮、ひだ、蒸気：Kinomori の餃子を、あなたの手で。",
      description: [
        "皮をゼロから作り、2種の餡（豚と野菜）、定番のひだを学びます。最後に蒸しと焼きで仕上げます。",
        "余った皮と餃子はお持ち帰り。",
      ],
      includes: [
        "皮と餡込み",
        "ひだの技術",
        "蒸しと焼き",
        "家で再現できるレシピ",
      ],
      upcoming: "次回日程は調整中",
    },
    "ramen-casero": {
      name: "自家製ラーメン",
      short: "12時間のスープ、チャーシュー、味玉、麺：完全なラーメン。",
      description: [
        "最も充実したワークショップ：鶏白湯スープ、豚チャーシュー、味付け卵、手打ち生麺。",
        "最後にみんなでラーメンを食べます。お腹を空かせてお越しください。",
      ],
      includes: [
        "スープをゼロから（12時間）",
        "チャーシューと味玉",
        "手打ち生麺",
        "最後の食事込み",
      ],
      upcoming: "次回日程は調整中",
    },
  },
};

export const translations: Record<Lang, Dict> = { en, fr, es, zh, ja };
