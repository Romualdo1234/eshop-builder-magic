export const CATEGORIES = [
  "Boilies", "Pelety a partikly", "Dipy a boostery", "Pruty", "Navijáky", "Feeder", "Vlasce", "Bižuterie",
  "Olova", "Podložky a podběráky", "Bivaky a vybavení", "Přívlač", "Sumcařina", "Bait Lab",
] as const;
export type Category = (typeof CATEGORIES)[number];

/** Ikona (lucide) pro dlaždici bez fotky. */
export const CATEGORY_ICON: Record<Category, string> = {
  "Boilies": "Target", "Pelety a partikly": "Wheat", "Dipy a boostery": "Droplets", "Pruty": "Fish", "Navijáky": "Disc3",
  "Feeder": "Package", "Vlasce": "Cable", "Bižuterie": "Anchor", "Olova": "Weight", "Podložky a podběráky": "Package",
  "Bivaky a vybavení": "Tent", "Přívlač": "Fish", "Sumcařina": "Anchor", "Bait Lab": "FlaskConical",
};

export type Variant = { id: string; label: string; price: number; stock: number };
export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  /** fotka produktu; dokud chybí, zobrazí se značková dlaždice */
  image?: string;
  rating?: number;
  reviews?: number;
  variantName: string;
  variants: Variant[];
  forWho: string;
  notFor: string;
  usage: string;
  match?: string;
  /** slug produktu, který garantovaně sedí k tomuto (AS-Match) */
  matchSlug?: string;
  /** kurátorský text střední délky: jak produkt funguje v praxi */
  story?: string[];
  /** technická data: parametr, hodnota, praktický význam */
  specs?: { label: string; value: string; meaning?: string }[];
  faq?: { q: string; a: string }[];
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

const v = (id: string, label: string, price: number, stock: number): Variant => ({ id, label, price, stock });

export const PRODUCTS: Product[] = [
  {
    slug: "mikbaits-big-boilies", name: "Krmné boilies BiG Halibut-Oliheň", brand: "Mikbaits", category: "Boilies",
    rating: 4.9, reviews: 128, variantName: "Průměr / balení",
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
    slug: "nikl-krill-boilies", name: "Boilies Krill & Spice", brand: "Nikl", category: "Boilies",
    rating: 4.8, reviews: 76, variantName: "Průměr / balení",
    variants: [
      { id: "18-1", label: "18 mm · 1 kg", price: 319, stock: 11 },
      { id: "24-3", label: "24 mm · 3 kg", price: 849, stock: 6 },
    ],
    forWho: "Řeky a proudné vody – kulička drží tvar až 48 h.",
    notFor: "Krátké lovy na komerčkách, kde rozhoduje rychlý rozpad.",
    usage: "Celoročně, nejlépe na jaře a na podzim.", water: ["Řeka", "Přehrada"],
  },
  {
    slug: "carp-special-380", name: "Kaprový prut Carp Special 3,60 m", brand: "Mivardi", category: "Pruty",
    rating: 4.7, reviews: 42, variantName: "Testová křivka",
    variants: [
      { id: "3", label: "3,00 lb", price: 1890, stock: 5 },
      { id: "35", label: "3,50 lb", price: 1990, stock: 3 },
    ],
    forWho: "Hody na 80–120 m na přehradách a pískovnách.",
    notFor: "Lov z lodě na malých vodách.",
    usage: "Olovo 90–140 g.", match: "Naviják Big Pit 5000 + vlasec 0,31 mm", matchSlug: "big-pit-5000", water: ["Přehrada", "Řeka"],
  },
  {
    slug: "big-pit-5000", name: "Naviják Big Pit 5000 QD", brand: "Mivardi", category: "Navijáky",
    rating: 4.8, reviews: 58, variantName: "Velikost",
    variants: [
      { id: "5000", label: "5000", price: 2290, stock: 7 },
      { id: "6000", label: "6000", price: 2490, stock: 2 },
    ],
    forWho: "Vyvážení k prutům 3,60 m / 3–3,5 lb.",
    notFor: "Feederové a plavané lovy.",
    usage: "Návin 300 m / 0,35 mm.", match: "Prut Carp Special 3,60 m", matchSlug: "carp-special-380", water: ["Přehrada", "Řeka"],
    // Texty a parametry převzaté z návrhu produktové karty. Před ostrým provozem je ověřit podle datového listu výrobce.
    story: [
      "Naviják pro kapraře, kteří chtějí odhozový potenciál velkých kaprových speciálů, ale nechtějí zbytečně zatěžovat prut masivním tělem klasických velkokapacitních modelů. Těsný chod převodů pomáhá při stahování těžkých olov z hloubky.",
      "Široká cívka s kónicky zkosenou hranou snižuje tření vlasce při náhozu. Rychlá přední brzda Quick Drag (QD) umožní přejít z uvolněné cívky do kontrolované brzdy během půl otáčky matice, což se hodí hned po záseku, když ryba míří k překážkám.",
    ],
    specs: [
      { label: "Velikost", value: "5000", meaning: "Vyvážení s děleným prutem 3,00–3,60 m." },
      { label: "Kapacita cívky", value: "0,30 mm / 410 m · 0,35 mm / 300 m · 0,40 mm / 230 m", meaning: "Univerzální profil pro daleký nához i střední vyvážku." },
      { label: "Převodový poměr", value: "4,6 : 1", meaning: "Silový převod, šetří ozubení při tahu." },
      { label: "Návin na otáčku", value: "92 cm", meaning: "Rychlé stažení sestavy ze vzdálenosti přes 100 m." },
      { label: "Hmotnost", value: "485 g", meaning: "Nižší setrvačnost a menší únava při opakovaném nahazování." },
      { label: "Ložiska", value: "6 kuličkových + 1 jednocestné válečkové", meaning: "Plynulý chod a okamžitá uzávěrka zpětného chodu." },
      { label: "Přední brzda", value: "Karbon-teflonová Quick Drag (QD)", meaning: "Regulace brzdy v rozsahu půl otáčky." },
      { label: "Maximální brzdná síla", value: "12 kg", meaning: "Rezerva pro zastavení úniku ryby k vázkám." },
    ],
    faq: [
      { q: "Obsahuje balení náhradní cívku?", a: "Základní balení zahrnuje jednu kovovou cívku s odhozovým profilem. Hlubší cívku s větší kapacitou lze doobjednat mezi kompatibilním příslušenstvím." },
      { q: "Jak zvolit mezi velikostmi 5000 a 6000?", a: "Obě velikosti mají stejné tělo i převody. Velikost 6000 má hlubší cívku s kapacitou 420 m vlasce 0,35 mm a hodí se na zavážení nástrah člunem na rozlehlých vodách." },
    ],
  },
  {
    slug: "method-feeder-set", name: "Method feeder krmítka – sada 3 ks", brand: "Jet Fish", category: "Feeder",
    rating: 4.6, reviews: 93, variantName: "Gramáž",
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
    slug: "method-pellets-2mm", name: "Mikropelety Method 2 mm", brand: "CC Moore", category: "Feeder",
    rating: 4.7, reviews: 61, variantName: "Příchuť",
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
    slug: "fluoro-shock", name: "Šokový fluorocarbon 0,50 mm", brand: "LK Baits", category: "Vlasce",
    rating: 4.9, reviews: 37, variantName: "Návin",
    variants: [
      { id: "50", label: "50 m", price: 359, stock: 9 },
      { id: "100", label: "100 m", price: 629, stock: 4 },
    ],
    forWho: "Kamenité dno a mušle.",
    notFor: "Jemné feederové montáže.",
    usage: "5–7 otáček kolem cívky.", water: ["Řeka", "Přehrada"],
  },
  {
    slug: "hooks-wide-gape", name: "Háčky Wide Gape Teflon", brand: "Mivardi", category: "Bižuterie",
    rating: 4.6, reviews: 104, variantName: "Velikost",
    variants: [
      { id: "4", label: "Vel. 4", price: 119, stock: 25 },
      { id: "6", label: "Vel. 6", price: 119, stock: 19 },
      { id: "8", label: "Vel. 8", price: 119, stock: 3 },
    ],
    forWho: "Univerzální kaprové montáže.",
    notFor: "Lov dravců.",
    usage: "Balení 10 ks.", water: ["Řeka", "Přehrada", "Komerční revír"],
  },

  // ── Rozšíření katalogu: UKÁZKOVÁ data (ceny, sklad, názvy). Před ostrým provozem nahradit skutečným feedem. ──
  ...([
    ["mikbaits-boilies-jahoda", "Rozpustné boilies Jahoda–Ananas", "Mikbaits", "Boilies", "Průměr / balení", [v("16-1", "16 mm · 1 kg", 259, 12), v("20-1", "20 mm · 1 kg", 259, 8), v("20-5", "20 mm · 5 kg", 1090, 3)], "Rychlý potravní signál v teplé vodě, komerční revíry.", "Dlouhé zakrmování na řece, kulička se rychle rozpadá.", "Voda nad 12 °C, zakrmit 1–2 kg před lovem.", ["Komerční revír", "Přehrada"]],
    ["nikl-popup-olihen", "Plovoucí boilies Pop-Up Oliheň", "Nikl", "Boilies", "Průměr", [v("12", "12 mm · 80 g", 129, 20), v("16", "16 mm · 80 g", 129, 15), v("20", "20 mm · 80 g", 139, 0)], "Chytací nástraha nad dnem, přes drobné nečistoty a řasy.", "Silný proud, kde se nástraha nedrží na místě.", "Na vlasu s kratším návazcem.", ["Přehrada", "Komerční revír"]],
    ["lk-wafters-jatra", "Vyvážené boilies Wafters Játra", "LK Baits", "Boilies", "Průměr", [v("14", "14 mm · 100 g", 149, 18), v("18", "18 mm · 100 g", 149, 10)], "Jemná prezentace na tvrdším dně a při opatrných rybách.", "Hluboká bahnitá dna.", "Vyvážit s háčkem, hodí se k PVA.", ["Přehrada", "Řeka"]],
    ["jetfish-pelety-halibut", "Pelety Halibut", "Jet Fish", "Pelety a partikly", "Průměr / balení", [v("4-1", "4 mm · 1 kg", 119, 25), v("8-1", "8 mm · 1 kg", 129, 14), v("8-5", "8 mm · 5 kg", 549, 6)], "Zakrmení pod nohy i do PVA sáčků.", "Voda pod 8 °C, pelety se nestačí rozpouštět.", "Namočit a nechat odstát před nasazením.", ["Komerční revír", "Method feeder", "Přehrada"]],
    ["jetfish-kukurice", "Kukuřice sterilovaná", "Jet Fish", "Pelety a partikly", "Balení", [v("1", "1 kg", 59, 30), v("3", "3 kg", 159, 12)], "Univerzální partikl k zakrmení a jako nástraha.", "Revíry, kde je partikl zakázaný.", "Slít nálev a zalít esencí.", ["Přehrada", "Řeka", "Komerční revír"]],
    ["mikbaits-tygri-orech", "Tygří ořech sterilovaný", "Mikbaits", "Pelety a partikly", "Balení", [v("1", "1 kg", 139, 9)], "Výběrové zakrmení pro větší ryby, drží se déle.", "Revíry, kde je tygří ořech zakázaný.", "Nasazovat do vlasu i krmit v menším množství.", ["Přehrada", "Řeka"]],
    ["ccmoore-booster-krab", "Booster Krab–Ančovička", "CC Moore", "Dipy a boostery", "Objem", [v("250", "250 ml", 189, 16), v("500", "500 ml", 329, 7)], "Zvýraznění boilies a pelet v kalné nebo studenější vodě.", "Jako jediné krmení, je to přísada.", "Nalít na boilies, nechat 12 hodin.", ["Přehrada", "Komerční revír"]],
    ["nikl-dip-halibut", "Dip Halibut", "Nikl", "Dipy a boostery", "Objem", [v("100", "100 ml", 99, 20)], "Rychlé zatraktivnění nástrahy těsně před nahozením.", "Dlouhé uskladnění namočených boilies.", "Namočit nástrahu na několik minut.", ["Přehrada", "Řeka", "Komerční revír"]],
    ["mikbaits-esence-olihen", "Esence Oliheň", "Mikbaits", "Dipy a boostery", "Objem", [v("50", "50 ml", 79, 11)], "Dochucení vlastních směsí a partiklů.", "Přímé dávkování bez ředění.", "Pár kapek na kilo směsi.", ["Přehrada", "Řeka"]],
    ["mivardi-heavy-carp-390", "Kaprový prut Heavy Carp 3,90 m", "Mivardi", "Pruty", "Testová křivka", [v("35", "3,50 lb", 2390, 4), v("40", "4,00 lb", 2490, 2)], "Daleké nahazování a těžší olova na velkých vodách.", "Lov z lodě nebo na malých vodách.", "Olovo 100–170 g.", ["Přehrada", "Řeka"]],
    ["mivardi-method-master-360", "Feederový prut Method Master 3,60 m", "Mivardi", "Pruty", "Výkon", [v("60", "do 60 g", 1790, 6), v("90", "do 90 g", 1890, 5), v("120", "do 120 g", 1990, 0)], "Method feeder na komerčních revírech a klidných vodách.", "Těžký proud a krmítka nad zadaný výkon.", "Vždy volit podle váhy krmítka.", ["Method feeder", "Komerční revír"]],
    ["mivardi-spin-240", "Přívlačový prut Spin 2,40 m", "Mivardi", "Pruty", "Hmotnost nástrahy", [v("25", "5–25 g", 1290, 4), v("40", "10–40 g", 1390, 3)], "Lov okouna, candáta a štiky na menších a středních vodách.", "Těžké nástrahy a lov sumců.", "Pro gumové nástrahy i třpytky.", ["Řeka", "Přehrada"]],
    ["mivardi-cat-270", "Sumcový prut Cat 2,70 m", "Mivardi", "Pruty", "Hmotnost", [v("300", "do 300 g", 2190, 2)], "Silové lovy sumců z člunu i břehu.", "Lov kaprů a jemné techniky.", "S robustním navijákem a pevným vlascem.", ["Řeka", "Přehrada"]],
    ["mivardi-worx-4000", "Naviják WorX 4000 FD", "Mivardi", "Navijáky", "Velikost", [v("4000", "4000", 1590, 8), v("5000", "5000", 1690, 5)], "Kaprové lovy na střední vzdálenost s přední brzdou.", "Jemný feeder a lehká přívlač.", "Návin podle velikosti cívky.", ["Přehrada", "Řeka", "Komerční revír"]],
    ["mivardi-feeder-3000", "Naviják Feeder FD 3000", "Mivardi", "Navijáky", "Velikost", [v("3000", "3000", 1290, 6)], "Method feeder a plavaná na komerčních vodách.", "Těžká kaprařina a daleké nahazování.", "Sladit s feederovým prutem do 90 g.", ["Method feeder", "Komerční revír"]],
    ["mivardi-spin-2500", "Naviják Spin 2500", "Mivardi", "Navijáky", "Velikost", [v("2500", "2500", 990, 9), v("3000", "3000", 1090, 4)], "Lehká a střední přívlač.", "Kaprařina a sumcařina.", "S pletenkou 0,10–0,14 mm.", ["Řeka", "Přehrada"]],
    ["jetfish-method-forma", "Forma na method krmítka", "Jet Fish", "Feeder", "Velikost", [v("s", "Malá", 99, 15), v("m", "Střední", 109, 12)], "Rychlé a rovnoměrné plnění method krmítek.", "Jiné typy krmítek.", "Vlhčená směs, silně stlačit.", ["Method feeder", "Komerční revír"]],
    ["jetfish-navazce-method", "Návazce method na trnu", "Jet Fish", "Feeder", "Hák", [v("8", "Hák 8 · 10 cm", 79, 20), v("10", "Hák 10 · 10 cm", 79, 14)], "Hotové návazce pro drobné pelety a dumbells.", "Silné ryby a těžká kaprařina.", "Sladit velikost háku s nástrahou.", ["Method feeder", "Komerční revír"]],
    ["mivardi-carp-line-035", "Kmenový vlasec Carp Line 0,35 mm", "Mivardi", "Vlasce", "Návin", [v("300", "300 m", 349, 12), v("600", "600 m", 649, 6), v("1200", "1200 m", 1190, 3)], "Univerzální vlasec pro kaprové navijáky.", "Jemný feeder a přívlač.", "Cívka 5000: ideální návin 300 m.", ["Přehrada", "Řeka"]],
    ["mivardi-pletenka-012", "Pletenka Feeder 0,12 mm", "Mivardi", "Vlasce", "Návin", [v("150", "150 m", 399, 7)], "Citlivý feeder a lehká přívlač.", "Kamenitá dna bez šoku.", "Pro špičku na feederovém prutu.", ["Method feeder", "Řeka"]],
    ["lk-hadicky-rovnatka", "Rovnátka a hadičky – sada", "LK Baits", "Bižuterie", "Balení", [v("1", "Sada", 89, 25)], "Základní koncová montáž na boilies.", "Feeder a přívlač.", "Hadičku zkrátit podle montáže.", ["Přehrada", "Řeka"]],
    ["mivardi-navazce-wide-gape", "Hotové návazce Wide Gape (3 ks)", "Mivardi", "Bižuterie", "Velikost", [v("4", "Vel. 4", 149, 14), v("6", "Vel. 6", 149, 10)], "Rychlá výměna během lovu.", "Dravci.", "Použít s fluorocarbonem.", ["Přehrada", "Řeka", "Komerční revír"]],
    ["nikl-pva-puncocha", "PVA punčocha", "Nikl", "Bižuterie", "Délka", [v("25", "25 m", 119, 10)], "Rychle rozpustné balení směsi na háček.", "Vlhké prostředí před nahozením.", "Plnit suchou směsí.", ["Přehrada", "Komerční revír"]],
    ["mivardi-olovo-flat-pear", "Olovo Flat Pear", "Mivardi", "Olova", "Hmotnost", [v("100", "100 g", 69, 30), v("120", "120 g", 79, 25), v("140", "140 g", 89, 12)], "Plochý tvar drží na dně v proudu.", "Hluboká bahnitá dna.", "S klipem a hadičkou.", ["Řeka", "Přehrada"]],
    ["mivardi-olovo-klip", "Odpadávací olovo na klipu", "Mivardi", "Olova", "Hmotnost", [v("90", "90 g", 79, 18)], "Bezpečnější lov s uvolněním olova při záseku.", "Montáže bez klipu.", "Sladit s hadičkou a šoku.", ["Přehrada", "Řeka"]],
    ["mivardi-podlozka", "Podložka vaničková s krytem", "Mivardi", "Podložky a podběráky", "Typ", [v("1", "Standard", 1290, 3)], "Šetrné vyndání a váha ryby.", "Přenášení nad 80 kg výbavy.", "Navlhčit před položením ryby.", ["Přehrada", "Řeka", "Komerční revír"]],
    ["mivardi-podberak-42", "Podběrák kaprový 42\" 2dílný", "Mivardi", "Podložky a podběráky", "Velikost", [v("42", "42\"", 1090, 4)], "Bezpečné podebrání větších ryb.", "Lov do 1 kg ryb a malé revíry.", "Pro kaprové a amurové lovy.", ["Přehrada", "Řeka"]],
    ["mivardi-vazici-sak", "Vážicí sak", "Mivardi", "Podložky a podběráky", "Velikost", [v("1", "120 × 50 cm", 449, 8)], "Bezpečné vážení a krátké uchování ryby.", "Delší držení ryb.", "Vážit s digitální váhou.", ["Přehrada", "Řeka"]],
    ["mivardi-bivak-night-camp", "Bivak Night Camp 2 os.", "Mivardi", "Bivaky a vybavení", "Provedení", [v("2", "2 osoby", 6990, 1)], "Vícedenní výpravy na přehradách a pískovnách.", "Rychlé krátké lovy.", "Na objednávku, na prodejně jen vzorek.", ["Přehrada", "Řeka"]],
    ["mivardi-kreslo-comfort", "Rybářské křeslo Comfort", "Mivardi", "Bivaky a vybavení", "Typ", [v("1", "Standard", 1990, 3)], "Pohodlné sezení při delším lovu.", "Přenos pěšky na delší vzdálenost.", "Nosnost podle štítku výrobce.", ["Přehrada", "Řeka", "Komerční revír"]],
    ["mivardi-celovka-cervena", "Čelovka s červeným světlem", "Mivardi", "Bivaky a vybavení", "Typ", [v("1", "Standard", 399, 9)], "Noční lov a manipulace s výbavou.", "Dlouhá expedice bez náhradních baterií.", "Červené světlo neruší ryby.", ["Přehrada", "Řeka", "Komerční revír"]],
    ["mivardi-ripper-12", "Gumový ripper 12 cm (5 ks)", "Mivardi", "Přívlač", "Barva", [v("perla", "Perlová", 129, 12), v("zelena", "Zelená", 129, 9), v("okoun", "Okoun", 129, 7)], "Lov okouna, candáta a štiky.", "Kamenitá dna bez ochranné montáže.", "Na jigovou hlavičku 10–14 g.", ["Řeka", "Přehrada"]],
    ["mivardi-trpytka-18", "Třpytka Spoon 18 g", "Mivardi", "Přívlač", "Hmotnost", [v("18", "18 g", 99, 14)], "Lov na delších vzdálenostech.", "Úzké řeky s mnoha překážkami.", "Rovnoměrné navíjení.", ["Řeka", "Přehrada"]],
    ["mivardi-jig-hlavicky", "Jigové hlavičky (5 ks)", "Mivardi", "Přívlač", "Hmotnost", [v("10", "10 g", 89, 18), v("14", "14 g", 89, 11)], "Základ pro gumové nástrahy.", "Lov v hustých travinách bez ochrany.", "Hmotnost zvolit podle hloubky a proudu.", ["Řeka", "Přehrada"]],
    ["mivardi-klonk-80", "Sumcový klonk", "Mivardi", "Sumcařina", "Hmotnost", [v("80", "80 g", 249, 6)], "Přilákání sumců klopením na hladině.", "Lov v silném proudu.", "Zvuk vyzkoušet na malých ranních lovech.", ["Řeka", "Přehrada"]],
    ["mivardi-navazec-sumec", "Sumcový návazec 150 kg", "Mivardi", "Sumcařina", "Délka", [v("1", "1 m", 199, 5)], "Pevná koncová montáž pro velké ryby.", "Jemná přívlač a feeder.", "Kontrolovat před každým lovem.", ["Řeka", "Přehrada"]],
    ["nikl-boilie-mix-rybi", "Boilie mix rybí", "Nikl", "Bait Lab", "Balení", [v("1", "1 kg", 139, 10), v("5", "5 kg", 599, 3)], "Domácí výroba boilies.", "Začátečníci bez vybavení na rolování.", "Poměr vajec a tekutých složek dle návodu.", ["Přehrada", "Řeka"]],
    ["mivardi-rollball-20", "Rollball", "Mivardi", "Bait Lab", "Průměr", [v("20", "20 mm", 349, 3)], "Ruční rolování boilies doma.", "Velké objemy na každý týden.", "Zbytky těsta po rolování zabalit.", ["Přehrada", "Řeka"]],
    ["ccmoore-aminokomplex", "Aminokomplex tekutý", "CC Moore", "Bait Lab", "Objem", [v("500", "500 ml", 289, 5)], "Zlepšení atraktivity vlastních směsí.", "Přímé použití bez ředění.", "Dávkování podle návodu výrobce.", ["Přehrada", "Řeka"]],
  ] as const).map(([slug, name, brand, category, variantName, variants, forWho, notFor, usage, water]) => ({
    slug, name, brand, category, variantName, variants: [...variants], forWho, notFor, usage, water: [...water],
  }) as Product),
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const minPrice = (p: Product) => Math.min(...p.variants.map((v) => v.price));
export const totalStock = (p: Product) => p.variants.reduce((a, v) => a + v.stock, 0);
