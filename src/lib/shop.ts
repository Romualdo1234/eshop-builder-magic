import boilies from "@/assets/p-boilies.jpg";
import rod from "@/assets/p-rod.jpg";
import feeder from "@/assets/p-feeder.jpg";

export type Variant = { id: string; label: string; price: number; stock: number };
export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: "Boilies" | "Pruty" | "Navijáky" | "Feeder" | "Vlasce" | "Bižuterie";
  image: string;
  score: number;
  rating: number;
  reviews: number;
  variantName: string;
  variants: Variant[];
  forWho: string;
  notFor: string;
  usage: string;
  match?: string;
  water: string[];
};

export type ShippingMethod = { id: string; label: string; note: string; price: number };
export const SHIPPING: ShippingMethod[] = [
  { id: "pickup", label: "Osobní odběr – Ostrava, Nádražní", note: "Připraveno ještě dnes", price: 0 },
  { id: "zbox", label: "Zásilkovna Z-Box", note: "Doručení zítra", price: 69 },
  { id: "balikovna", label: "Balíkovna", note: "Doručení zítra", price: 79 },
  { id: "ppl", label: "PPL na adresu", note: "1–2 pracovní dny", price: 119 },
];

export function shippingPrice(methodId: string, _subtotal: number = 0): number {
  const m = SHIPPING.find((s) => s.id === methodId);
  if (!m) return 0;
  return m.price;
}

export const PAYMENTS = [
  { id: "card", label: "Kartou / Apple Pay / Google Pay", price: 0 },
  { id: "transfer", label: "Bankovní převod", price: 0 },
  { id: "cod", label: "Dobírka", price: 39 },
];

export const formatCZK = (n: number) =>
  new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(n);

export const WATERS = ["Řeka", "Přehrada", "Komerční revír", "Method feeder"];

export const PRODUCTS: Product[] = [
  {
    slug: "mikbaits-big-boilies", name: "Krmné boilies BiG Halibut-Oliheň", brand: "Mikbaits", category: "Boilies", image: boilies,
    score: 9.2, rating: 4.9, reviews: 128, variantName: "Průměr / balení",
    variants: [
      { id: "16-1", label: "16 mm · 1 kg", price: 289, stock: 14 },
      { id: "20-1", label: "20 mm · 1 kg", price: 289, stock: 9 },
      { id: "20-5", label: "20 mm · 5 kg", price: 1190, stock: 4 },
      { id: "24-5", label: "24 mm · 5 kg", price: 1190, stock: 0 },
    ],
    forWho: "Víkendové výpravy, kde potřebujete rychlý potravní signál.",
    notFor: "Dlouhodobé masivní zakrmování na velkých řekách.",
    usage: "Voda 10–22 °C, bahnité i štěrkové dno.", water: ["Přehrada", "Komerční revír"],
  },
  {
    slug: "nikl-krill-boilies", name: "Boilies Krill & Spice", brand: "Nikl", category: "Boilies", image: boilies,
    score: 8.9, rating: 4.8, reviews: 76, variantName: "Průměr / balení",
    variants: [
      { id: "18-1", label: "18 mm · 1 kg", price: 319, stock: 11 },
      { id: "24-3", label: "24 mm · 3 kg", price: 849, stock: 6 },
    ],
    forWho: "Řeky a proudné vody – kulička drží tvar až 48 h.",
    notFor: "Krátké lovy na komerčkách, kde rozhoduje rychlý rozpad.",
    usage: "Celoročně, nejlépe na jaře a na podzim.", water: ["Řeka", "Přehrada"],
  },
  {
    slug: "carp-special-380", name: "Kaprový prut Carp Special 3,60 m", brand: "Mivardi", category: "Pruty", image: rod,
    score: 8.8, rating: 4.7, reviews: 42, variantName: "Testová křivka",
    variants: [
      { id: "3", label: "3,00 lb", price: 1890, stock: 5 },
      { id: "35", label: "3,50 lb", price: 1990, stock: 3 },
    ],
    forWho: "Hody na 80–120 m na přehradách a pískovnách.",
    notFor: "Lov z lodě na malých vodách.",
    usage: "Olovo 90–140 g.", match: "Naviják Big Pit 5000 + vlasec 0,31 mm", water: ["Přehrada", "Řeka"],
  },
  {
    slug: "big-pit-5000", name: "Naviják Big Pit 5000 QD", brand: "Mivardi", category: "Navijáky", image: rod,
    score: 9.0, rating: 4.8, reviews: 58, variantName: "Velikost",
    variants: [
      { id: "5000", label: "5000", price: 2290, stock: 7 },
      { id: "6000", label: "6000", price: 2490, stock: 2 },
    ],
    forWho: "Vyvážení k prutům 3,60 m / 3–3,5 lb.",
    notFor: "Feederové a plavané lovy.",
    usage: "Návin 300 m / 0,35 mm.", match: "Prut Carp Special 3,60 m", water: ["Přehrada", "Řeka"],
  },
  {
    slug: "method-feeder-set", name: "Method feeder krmítka – sada 3 ks", brand: "Jet Fish", category: "Feeder", image: feeder,
    score: 8.7, rating: 4.6, reviews: 93, variantName: "Gramáž",
    variants: [
      { id: "20", label: "20 g", price: 149, stock: 22 },
      { id: "30", label: "30 g", price: 149, stock: 18 },
      { id: "45", label: "45 g", price: 169, stock: 8 },
    ],
    forWho: "Rychlý lov na komerčních revírech.",
    notFor: "Silný proud – zvolte těžší krmítko.",
    usage: "S mikropeletami 2 mm.", water: ["Method feeder", "Komerční revír"],
  },
  {
    slug: "method-pellets-2mm", name: "Mikropelety Method 2 mm", brand: "CC Moore", category: "Feeder", image: feeder,
    score: 8.6, rating: 4.7, reviews: 61, variantName: "Příchuť",
    variants: [
      { id: "halibut", label: "Halibut", price: 129, stock: 30 },
      { id: "jahoda", label: "Jahoda", price: 129, stock: 12 },
      { id: "scopex", label: "Scopex", price: 129, stock: 0 },
    ],
    forWho: "Method feeder v teplejší vodě.",
    notFor: "Studená voda pod 8 °C.",
    usage: "Navlhčit 1 min, nechat odstát 10 min.", water: ["Method feeder", "Komerční revír"],
  },
  {
    slug: "fluoro-shock", name: "Šokový fluorocarbon 0,50 mm", brand: "LK Baits", category: "Vlasce", image: rod,
    score: 9.1, rating: 4.9, reviews: 37, variantName: "Návin",
    variants: [
      { id: "50", label: "50 m", price: 359, stock: 9 },
      { id: "100", label: "100 m", price: 629, stock: 4 },
    ],
    forWho: "Kamenité dno a mušle.",
    notFor: "Jemné feederové montáže.",
    usage: "5–7 otáček kolem cívky.", water: ["Řeka", "Přehrada"],
  },
  {
    slug: "hooks-wide-gape", name: "Háčky Wide Gape Teflon", brand: "Mivardi", category: "Bižuterie", image: feeder,
    score: 8.5, rating: 4.6, reviews: 104, variantName: "Velikost",
    variants: [
      { id: "4", label: "Vel. 4", price: 119, stock: 25 },
      { id: "6", label: "Vel. 6", price: 119, stock: 19 },
      { id: "8", label: "Vel. 8", price: 119, stock: 3 },
    ],
    forWho: "Univerzální kaprové montáže.",
    notFor: "Lov dravců.",
    usage: "Balení 10 ks.", water: ["Řeka", "Přehrada", "Komerční revír"],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const minPrice = (p: Product) => Math.min(...p.variants.map((v) => v.price));
export const totalStock = (p: Product) => p.variants.reduce((a, v) => a + v.stock, 0);
