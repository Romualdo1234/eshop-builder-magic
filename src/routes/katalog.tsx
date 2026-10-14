import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, WATERS, minPrice, totalStock } from "@/lib/shop";

type Search = { kategorie?: string | undefined; znacka?: string | undefined; voda?: string | undefined; skladem?: boolean | undefined; razeni?: string | undefined };

export const Route = createFileRoute("/katalog")({
  validateSearch: (s: { kategorie?: unknown; znacka?: unknown; voda?: unknown; skladem?: unknown; razeni?: unknown }): Search => ({
    kategorie: typeof s.kategorie === "string" ? s.kategorie : undefined,
    znacka: typeof s.znacka === "string" ? s.znacka : undefined,
    voda: typeof s.voda === "string" ? s.voda : undefined,
    skladem: s.skladem === true || s.skladem === "true" ? true : undefined,
    razeni: typeof s.razeni === "string" ? s.razeni : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Katalog – AS-FISH" },
      { name: "description", content: "Boilies, pruty, navijáky a method feeder s filtry podle značky, revíru a skladovosti." },
      { property: "og:title", content: "Katalog – AS-FISH" },
      { property: "og:description", content: "Filtrujte napříč značkami podle revíru a dostupnosti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalog,
});

const CATS = Array.from(new Set(PRODUCTS.map((p) => p.category)));
const BRANDS = Array.from(new Set(PRODUCTS.map((p) => p.brand)));

function Chip({ active, children, search }: { active: boolean; children: string; search: (p: Search) => Search }) {
  return (
    <Link to="/katalog" search={search} className={`rounded-full border px-3 py-1 text-sm ${active ? "bg-accent text-accent-foreground border-accent" : "hover:border-accent"}`}>
      {children}
    </Link>
  );
}

function Catalog() {
  const s = Route.useSearch();
  let list = PRODUCTS.filter((p) =>
    (!s.kategorie || p.category === s.kategorie) && (!s.znacka || p.brand === s.znacka) &&
    (!s.voda || p.water.includes(s.voda)) && (!s.skladem || totalStock(p) > 0));
  if (s.razeni === "cena") list = [...list].sort((a, b) => minPrice(a) - minPrice(b));
  else list = [...list].sort((a, b) => b.score - a.score);

  const group = (label: string, key: keyof Search, values: string[]) => (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
      <div className="flex flex-wrap gap-2">
        <Chip active={!s[key]} search={(p) => ({ ...p, [key]: undefined })}>Vše</Chip>
        {values.map((v) => <Chip key={v} active={s[key] === v} search={(p) => ({ ...p, [key]: v })}>{v}</Chip>)}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-5xl mb-6">Katalog</h1>
        <div className="grid gap-4 rounded-lg border bg-card p-4 mb-8">
          {group("Kategorie", "kategorie", CATS)}
          {group("Revír", "voda", WATERS)}
          {group("Značka", "znacka", BRANDS)}
          <div className="flex flex-wrap gap-2">
            <Chip active={!!s.skladem} search={(p) => ({ ...p, skladem: p.skladem ? undefined : true })}>Jen skladem</Chip>
            <Chip active={s.razeni !== "cena"} search={(p) => ({ ...p, razeni: undefined })}>Řadit: AS-SCORE</Chip>
            <Chip active={s.razeni === "cena"} search={(p) => ({ ...p, razeni: "cena" })}>Řadit: cena</Chip>
          </div>
        </div>
        <div className="text-sm text-muted-foreground mb-4">{list.length} produktů</div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {list.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
        {list.length === 0 && <p className="text-muted-foreground">Nic nenalezeno – zkuste uvolnit filtry.</p>}
      </div>
    </Layout>
  );
}
