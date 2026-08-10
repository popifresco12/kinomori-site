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
  },
  scenes: [
    {
      label: "The Forest",
      kicker: "01 · Kinomori",
      title: "Everything starts in a forest.",
      body: "Kinomori means «forest». That's where it all comes from: wood that ages, ceramics that crack with use, tea that opens in the cup. The beauty of the imperfect, of what breathes with time.",
      note: "Wabi-sabi · What lasts",
      ctaLabel: "",
    },
    {
      label: "The Journey",
      kicker: "02 · Heading south",
      title: "Tea, spices and hands that travel.",
      body: "From the markets of Asia to the Atlantic: green tea, iron teapots, the gesture of the wok. Techniques travel by boat, but patience — the tea's, the wood's — travels slower.",
      note: "Asia · Atlantic",
      ctaLabel: "",
    },
    {
      label: "Tamraght",
      kicker: "03 · The village of waves",
      title: "Between mountains and ocean.",
      body: "Tamraght, a breath away from Taghazout: a surf village where waves set the rhythm and golden light falls on the stucco. Here, on the coast, the forest takes root.",
      note: "Coast · Atlas in the background",
      ctaLabel: "",
    },
    {
      label: "Kitchen",
      kicker: "04 · The fires",
      title: "The wok sings in Morocco.",
      body: "Nasi goreng leaps over the flame, dumplings crackle and chilli wakes the senses. Asian cooking finds its home on the coast, without forgetting where it came from.",
      note: "Fire · Steam · Sesame",
      ctaLabel: "See the menu",
    },
    {
      label: "Tea Room",
      kicker: "05 · The pause",
      title: "One cup, and the world stops.",
      body: "Hand-whisked matcha, oolong opening on the third infusion. In the tea room there's no rush: just the water, the ceramics and the moment. Tea is served, and it's also taken home.",
      note: "Matcha · Oolong · Silence",
      ctaLabel: "See the tea",
    },
    {
      label: "Shopping",
      kicker: "06 · The hands",
      title: "Objects that keep time.",
      body: "Hand-knotted bracelets, organic cotton clothing, cast-iron teapots. Each piece carries the mark of a hand: imperfect, unique, made to last.",
      note: "Craft · Clothing · Teapots",
      ctaLabel: "See the shop",
    },
    {
      label: "Workshops",
      kicker: "07 · Learning",
      title: "The forest is learned with the hands.",
      body: "Wok classes, tea ceremony, hand-made dumplings and scented argan oil. We don't come to watch: we come to get our hands dirty and take the technique home.",
      note: "Cooking · Tea · Argan oil",
      ctaLabel: "See workshops",
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
  },
  scenes: [
    {
      label: "La Forêt",
      kicker: "01 · Kinomori",
      title: "Tout commence dans une forêt.",
      body: "Kinomori signifie « forêt ». C'est de là que tout vient : le bois qui vieillit, la céramique qui se fissure à l'usage, le thé qui s'ouvre dans la tasse. La beauté de l'imparfait, de ce qui respire avec le temps.",
      note: "Wabi-sabi · Ce qui dure",
      ctaLabel: "",
    },
    {
      label: "Le Voyage",
      kicker: "02 · Vers le sud",
      title: "Thé, épices et mains qui voyagent.",
      body: "Des marchés d'Asie à l'Atlantique : le thé vert, le fer des théières, le geste du wok. Les techniques voyagent en bateau, mais la patience — celle du thé, celle du bois — voyage plus lentement.",
      note: "Asie · Atlantique",
      ctaLabel: "",
    },
    {
      label: "Tamraght",
      kicker: "03 · Le village des vagues",
      title: "Entre montagnes et océan.",
      body: "Tamraght, à un souffle de Taghazout : un village de surf où les vagues donnent le rythme et la lumière dorée tombe sur le stuc. Ici, sur la côte, la forêt prend racine.",
      note: "Côte · L'Atlas au fond",
      ctaLabel: "",
    },
    {
      label: "Cuisine",
      kicker: "04 · Les feux",
      title: "Le wok chante au Maroc.",
      body: "Le nasi goreng saute au-dessus de la flamme, les dumplings craquent et le piment réveille les sens. La cuisine asiatique trouve sa maison sur la côte, sans oublier d'où elle vient.",
      note: "Feu · Vapeur · Sésame",
      ctaLabel: "Voir le menu",
    },
    {
      label: "Salle de Thé",
      kicker: "05 · La pause",
      title: "Une tasse, et le monde s'arrête.",
      body: "Matcha fouetté à la main, oolong qui s'ouvre à la troisième infusion. Dans la salle de thé, pas de hâte : juste l'eau, la céramique et l'instant. Le thé se sert, et il s'emporte aussi.",
      note: "Matcha · Oolong · Silence",
      ctaLabel: "Voir le thé",
    },
    {
      label: "Boutique",
      kicker: "06 · Les mains",
      title: "Des objets qui gardent le temps.",
      body: "Bracelets noués à la main, vêtements en coton bio, théières en fonte. Chaque pièce porte la marque d'une main : imparfaite, unique, faite pour durer.",
      note: "Artisanat · Vêtements · Théières",
      ctaLabel: "Voir la boutique",
    },
    {
      label: "Ateliers",
      kicker: "07 · Apprendre",
      title: "La forêt s'apprend avec les mains.",
      body: "Cours de wok, cérémonie du thé, dumplings faits main et huile d'argan parfumée. On ne vient pas pour regarder : on vient se salir les mains et ramener la technique à la maison.",
      note: "Cuisine · Thé · Huile d'argan",
      ctaLabel: "Voir les ateliers",
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
  },
  scenes: [
    {
      label: "El bosque",
      kicker: "01 · 木森 Kinomori",
      title: "Todo empieza en un bosque.",
      body: "Kinomori significa «bosque». De ahí viene todo: la madera que envejece, la cerámica que se agrieta con el uso, el té que se abre en la taza. La belleza de lo imperfecto, de lo que respira con el tiempo.",
      note: "Wabi-sabi · Lo que perdura",
      ctaLabel: "",
    },
    {
      label: "El viaje",
      kicker: "02 · Hacia el sur",
      title: "Té, especias y manos que viajan.",
      body: "De los mercados de Asia al Atlántico: el té verde, el hierro de las teteras, el gesto del wok. Las técnicas viajan en barco, pero la paciencia —la del té, la de la madera— viaja más lento.",
      note: "Asia · Atlántico",
      ctaLabel: "",
    },
    {
      label: "Tamraght",
      kicker: "03 · El pueblo de las olas",
      title: "Entre montañas y océano.",
      body: "Tamraght, a un suspiro de Taghazout: un pueblo de surf donde el ritmo lo marcan las olas y la luz cae dorada sobre el estuco. Aquí, en la costa, el bosque echa raíces.",
      note: "Costa · Atlas al fondo",
      ctaLabel: "",
    },
    {
      label: "Kitchen",
      kicker: "04 · Los fuegos",
      title: "El wok canta en Marruecos.",
      body: "Nasi goreng salta sobre la llama, los dumplings crujen y el chile despierta los sentidos. La cocina asiática encuentra su casa en la costa, sin olvidar de dónde vino.",
      note: "Fuego · Vapor · Sésamo",
      ctaLabel: "Ver menú",
    },
    {
      label: "Tea Room",
      kicker: "05 · La pausa",
      title: "Una taza, y el mundo se detiene.",
      body: "Matcha batido a mano, oolong que se abre en la tercera infusión. En la sala del té no hay prisa: solo el agua, la cerámica y el momento. El té se sirve y también se lleva a casa.",
      note: "Matcha · Oolong · Silencio",
      ctaLabel: "Ver el té",
    },
    {
      label: "Shopping",
      kicker: "06 · Las manos",
      title: "Objetos que guardan tiempo.",
      body: "Pulseras anudadas a mano, ropa de algodón orgánico, teteras de hierro fundido. Cada pieza lleva la marca de una mano: imperfecta, única, hecha para durar.",
      note: "Artesanía · Ropa · Teteras",
      ctaLabel: "Ver la tienda",
    },
    {
      label: "Workshops",
      kicker: "07 · Aprender",
      title: "El bosque se aprende con las manos.",
      body: "Clases de wok, ceremonia del té, dumplings a mano y aceite de argán con aroma. No venimos a mirar: venimos a ensuciarnos las manos y llevarnos la técnica a casa.",
      note: "Cocina · Té · Argan oil",
      ctaLabel: "Ver workshops",
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
  },
  scenes: [
    {
      label: "森林",
      kicker: "01 · 木森 Kinomori",
      title: "一切始于森林。",
      body: "Kinomori 意为「森林」。一切皆源于此：随岁月老去的木材、因使用而龟裂的陶器、在杯中舒展的茶。不完美之美，随时间呼吸之物。",
      note: "侘寂 · 恒久之物",
      ctaLabel: "",
    },
    {
      label: "旅程",
      kicker: "02 · 向南而行",
      title: "茶、香料与远行的手。",
      body: "从亚洲的市集到大西洋：绿茶、铁壶、炒锅的姿态。技艺乘船远行，而耐心——茶的耐心、木的耐心——走得更慢。",
      note: "亚洲 · 大西洋",
      ctaLabel: "",
    },
    {
      label: "塔姆拉赫特",
      kicker: "03 · 海浪之村",
      title: "山与海之间。",
      body: "塔姆拉赫特，距塔加祖特一息之遥：一个冲浪小村，海浪定下节奏，金色阳光落在灰泥墙上。在这里，在海边，森林扎根。",
      note: "海岸 · 远方的阿特拉斯山",
      ctaLabel: "",
    },
    {
      label: "厨房",
      kicker: "04 · 火焰",
      title: "炒锅在摩洛哥歌唱。",
      body: "纳西炒饭在火焰上翻腾，饺子滋滋作响，辣椒唤醒感官。亚洲料理在海岸安家，却不忘来处。",
      note: "火 · 蒸汽 · 芝麻",
      ctaLabel: "查看菜单",
    },
    {
      label: "茶室",
      kicker: "05 · 停顿",
      title: "一杯茶，世界静止。",
      body: "手打抹茶，第三泡才绽放的乌龙。茶室里没有匆忙：只有水、陶器与此刻。茶可堂饮，亦可带回家。",
      note: "抹茶 · 乌龙 · 静默",
      ctaLabel: "查看茶品",
    },
    {
      label: "商店",
      kicker: "06 · 双手",
      title: "承载时光的物品。",
      body: "手工编织的手链、有机棉服饰、铸铁茶壶。每一件都留有手的印记：不完美、独一无二、为长久而作。",
      note: "手工艺 · 服饰 · 茶壶",
      ctaLabel: "查看商店",
    },
    {
      label: "工作坊",
      kicker: "07 · 学习",
      title: "森林，用双手去学。",
      body: "炒锅课程、茶道、手工饺子与芬芳的阿甘油。我们不是来观看的：我们是来弄脏双手，把技艺带回家。",
      note: "烹饪 · 茶 · 阿甘油",
      ctaLabel: "查看工作坊",
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
  },
  scenes: [
    {
      label: "森",
      kicker: "01 · 木森 Kinomori",
      title: "すべては森から始まる。",
      body: "Kinomori は「森」を意味する。すべてはそこから来る：歳を重ねる木、使うほどにひび割れる陶器、杯の中で開く茶。不完全の美、時間とともに呼吸するもの。",
      note: "侘び寂び · 永く残るもの",
      ctaLabel: "",
    },
    {
      label: "旅路",
      kicker: "02 · 南へ",
      title: "茶、香辛料、そして旅する手。",
      body: "アジアの市場から大西洋へ：緑茶、鉄瓶の鉄、鍋の所作。技は船で旅をするが、忍耐は——茶の忍耐、木の忍耐——よりゆっくりと旅をする。",
      note: "アジア · 大西洋",
      ctaLabel: "",
    },
    {
      label: "タムラフト",
      kicker: "03 · 波の村",
      title: "山と海のあいだに。",
      body: "タガズートのすぐそば、タムラフト：波がリズムを刻むサーフの村。金色の光が漆喰に落ちる。ここ、海岸で、森は根を下ろす。",
      note: "海岸 · 遠くにアトラス山脈",
      ctaLabel: "",
    },
    {
      label: "キッチン",
      kicker: "04 · 火",
      title: "鍋がモロッコで歌う。",
      body: "ナシゴレンが炎の上で跳ね、餃子がはじけ、唐辛子が五感を目覚めさせる。アジアの料理は海岸に家を見つける。来た道を忘れずに。",
      note: "火 · 蒸気 · ごま",
      ctaLabel: "メニューを見る",
    },
    {
      label: "茶室",
      kicker: "05 · ひと休み",
      title: "一杯で、世界が止まる。",
      body: "手で点てる抹茶、三煎目に開く烏龍茶。茶室に焦りはない：ただ水と、陶器と、その瞬間。茶は供され、また家にも届く。",
      note: "抹茶 · 烏龍茶 · 静けさ",
      ctaLabel: "お茶を見る",
    },
    {
      label: "ショップ",
      kicker: "06 · 手",
      title: "時を宿すもの。",
      body: "手で結んだブレスレット、オーガニックコットンの衣類、鋳鉄の鉄瓶。それぞれに手の跡がある：不完全で、唯一無二で、長く使えるように。",
      note: "手仕事 · 衣類 · 鉄瓶",
      ctaLabel: "ショップを見る",
    },
    {
      label: "ワークショップ",
      kicker: "07 · 学ぶ",
      title: "森は手で学ぶもの。",
      body: "鍋の教室、茶道、手作り餃子、香るアルガンオイル。私たちは見に来るのではない：手を汚し、技を家に持ち帰るために来る。",
      note: "料理 · 茶 · アルガンオイル",
      ctaLabel: "ワークショップを見る",
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
