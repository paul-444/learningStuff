export const contactInfo = {
  phoneDisplay: "0744 123 456",
  phoneRaw: "+40744123456",
  whatsappUrl: "https://wa.me/40744123456",
  email: "comenzi@atelierlumina.ro",
  address: "Str. Arhitecturii 18, București",
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceFrom: number;
  dimensions: string;
  materials: string;
  delivery: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "canapele-coltare",
    name: "Canapele & colțare",
    description: "Confort premium pentru livinguri contemporane.",
    coverImage: "/images/placeholder-furniture.svg",
  },
  {
    slug: "mese-scaune",
    name: "Mese & scaune",
    description: "Piese elegante pentru dining și socializare.",
    coverImage: "/images/placeholder-furniture.svg",
  },
  {
    slug: "dormitor",
    name: "Dormitor",
    description: "Pat, noptiere și comode cu design rafinat.",
    coverImage: "/images/placeholder-furniture.svg",
  },
  {
    slug: "birou-home-office",
    name: "Birou & home office",
    description: "Mobilier ergonomic pentru productivitate zilnică.",
    coverImage: "/images/placeholder-furniture.svg",
  },
];

export const products: Product[] = [
  {
    slug: "canapea-modulara-aeris",
    categorySlug: "canapele-coltare",
    name: "Canapea modulară Aeris",
    shortDescription: "Configurație flexibilă, textil premium rezistent.",
    longDescription:
      "Canapeaua modulară Aeris este gândită pentru spații de zi ample, cu linii curate și șezut generos. Structura internă din lemn stratificat și spuma cu densitate ridicată oferă stabilitate și confort pe termen lung.",
    priceFrom: 8900,
    dimensions: "320 x 180 x 78 cm",
    materials: "Textil premium, lemn stratificat, picioare metalice satinate",
    delivery: "Livrare în 4-6 săptămâni, montaj inclus în București și Ilfov",
    image: "/images/placeholder-furniture.svg",
  },
  {
    slug: "coltar-luna",
    categorySlug: "canapele-coltare",
    name: "Colțar Luna",
    shortDescription: "Profil jos, design aerisit, ideal pentru interioare moderne.",
    longDescription:
      "Modelul Luna combină o estetică minimalistă cu un nivel ridicat de confort. Include tetiere reglabile și opțiuni de tapiterie personalizată în paletar extins.",
    priceFrom: 9600,
    dimensions: "295 x 210 x 82 cm",
    materials: "Catifea tehnică, inserții din lemn natur, bază metalică",
    delivery: "Livrare în 5-7 săptămâni, montaj inclus",
    image: "/images/placeholder-furniture.svg",
  },
  {
    slug: "masa-dining-origo",
    categorySlug: "mese-scaune",
    name: "Masă dining Origo",
    shortDescription: "Blat ceramic și bază sculpturală.",
    longDescription:
      "Masa Origo aduce un accent arhitectural în zona de dining. Blatul ceramic rezistent la zgârieturi este potrivit pentru utilizare intensivă, iar baza centrală oferă libertate de poziționare a scaunelor.",
    priceFrom: 7400,
    dimensions: "240 x 105 x 75 cm",
    materials: "Ceramică sinterizată, oțel vopsit electrostatic",
    delivery: "Livrare în 3-5 săptămâni",
    image: "/images/placeholder-furniture.svg",
  },
  {
    slug: "scaun-velour-nova",
    categorySlug: "mese-scaune",
    name: "Scaun Velour Nova",
    shortDescription: "Scaun tapițat, ergonomie și eleganță discretă.",
    longDescription:
      "Nova este conceput pentru sesiuni lungi la masă, având spătar curbat și suport lombar confortabil. Tapițeria este ușor de întreținut și disponibilă în nuanțe neutre.",
    priceFrom: 1450,
    dimensions: "54 x 60 x 84 cm",
    materials: "Textil velour, structură metalică, burete HR",
    delivery: "Livrare în 2-4 săptămâni",
    image: "/images/placeholder-furniture.svg",
  },
  {
    slug: "pat-king-serena",
    categorySlug: "dormitor",
    name: "Pat king Serena",
    shortDescription: "Tablie amplă, proporții echilibrate, finisaje premium.",
    longDescription:
      "Patul Serena este creat pentru un dormitor sofisticat. Tăblia moale, cu textură plăcută la atingere, completează structura solidă și oferă un punct focal elegant.",
    priceFrom: 11200,
    dimensions: "210 x 225 x 110 cm",
    materials: "Lemn masiv, textil premium, elemente decorative metalice",
    delivery: "Livrare în 4-6 săptămâni",
    image: "/images/placeholder-furniture.svg",
  },
  {
    slug: "comoda-aurum",
    categorySlug: "dormitor",
    name: "Comodă Aurum",
    shortDescription: "Spațiu de depozitare generos și finisaj mat satinat.",
    longDescription:
      "Comoda Aurum include sertare cu sistem soft-close și fronturi bine proporționate. Designul păstrează un echilibru între funcționalitate și expresie estetică.",
    priceFrom: 5200,
    dimensions: "180 x 48 x 82 cm",
    materials: "MDF vopsit, furnir natural, feronerie premium",
    delivery: "Livrare în 3-5 săptămâni",
    image: "/images/placeholder-furniture.svg",
  },
  {
    slug: "birou-atelier-pro",
    categorySlug: "birou-home-office",
    name: "Birou Atelier Pro",
    shortDescription: "Suprafață extinsă pentru lucru și management cabluri.",
    longDescription:
      "Atelier Pro este un birou premium pentru spații de lucru elegante. Include canal de cabluri integrat și structură stabilă pentru echipamente multiple.",
    priceFrom: 6800,
    dimensions: "190 x 80 x 75 cm",
    materials: "Lemn stratificat, furnir stejar, oțel",
    delivery: "Livrare în 3-4 săptămâni",
    image: "/images/placeholder-furniture.svg",
  },
  {
    slug: "biblioteca-arc",
    categorySlug: "birou-home-office",
    name: "Bibliotecă Arc",
    shortDescription: "Compartimentare verticală cu accente arhitecturale.",
    longDescription:
      "Biblioteca Arc este ideală pentru birouri și livinguri contemporane. Modulele variate permit organizarea documentelor, cărților și obiectelor decorative.",
    priceFrom: 7900,
    dimensions: "260 x 38 x 220 cm",
    materials: "MDF premium, polițe laminate, structură metalică",
    delivery: "Livrare în 4-6 săptămâni",
    image: "/images/placeholder-furniture.svg",
  },
];

export const featuredProducts = products.slice(0, 4);

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((product) => product.categorySlug === categorySlug);
