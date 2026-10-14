import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, WATERS } from "@/lib/shop";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AS-FISH – rybářské potřeby z Ostravy" },
      { name: "description", content: "Kaprařina a method feeder od rybářů z Ostravy. Doprava zdarma od 1 499 Kč, Z-Box od 69 Kč." },
      { property: "og:title", content: "AS-FISH – rybářské potřeby z Ostravy" },
      { property: "og:description", content: "Nekupujte zbytečnosti. Vyrazte k vodě s vybavením, které funguje." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const REVIEWS = [
  { t: "Objednal jsem ráno, večer jsem měl boilies v Z-Boxu. Super.", a: "Petr, kaprař – Žermanice" },
  { t: "Poradili mi celou feederovou sestavu, nic zbytečného.", a: "Jana, method feeder – Hlučín" },
  { t: "Konečně vidím, co je skladem na prodejně.", a: "Martin, řeka Odra" },
];

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden text-hero-foreground">
        <img src={hero} alt="Kaprové pruty u jezera za úsvitu" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-14">
          <p className="font-semibold text-sm uppercase mb-4">AS-FISH / Ostrava</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-2xl">Rybářské potřeby.<br />Od rybářů pro rybáře.</h1>
          <p className="mt-5 max-w-lg text-base sm:text-lg text-hero-muted">Vybavení, které sami bereme k vodě.<br />Kaprařina a method feeder se zázemím v Ostravě.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 shadow-none"><Link to="/katalog">Procházet katalog<ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 bg-transparent text-hero-foreground border-hero-foreground/40 hover:bg-hero-foreground/10 hover:text-hero-foreground"><Link to="/prodejna">Naše prodejna</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl mb-6">Kam dnes míříte?</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {WATERS.map((w) => (
            <Link key={w} to="/katalog" search={{ voda: w }} className="rounded-lg border bg-card p-6 hover:border-accent transition-colors">
              <div className="font-display text-2xl">{w}</div>
              <div className="text-sm text-muted-foreground mt-1">Vybraná výbava →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="font-display text-4xl mb-6">6 věcí, za které dáme ruku do ohně</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {[...PRODUCTS].sort((a, b) => b.score - a.score).slice(0, 6).map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-4xl">Fyzický sklad a prodejna v Ostravě na Nádražní</h2>
          <p className="mt-4 text-muted-foreground">U každého produktu vidíte přesný počet kusů na prodejně. Osobní odběr zdarma ještě týž den, nonstop výdejní box.</p>
          <Link to="/prodejna" className="inline-block mt-6 text-accent font-semibold">Otevírací doba a kontakt →</Link>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[["1 499 Kč", "doprava zdarma"], ["69 Kč", "Z-Box"], ["14:00", "expedice dnes"]].map(([a, b]) => (
            <div key={b} className="rounded-lg bg-card border p-5"><div className="font-display text-3xl text-accent">{a}</div><div className="text-xs text-muted-foreground">{b}</div></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="font-display text-4xl mb-6">Co říkají rybáři, kteří s námi jezdí k vodě</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <blockquote key={r.a} className="rounded-lg border bg-card p-6">
              <div className="text-accent">★★★★★</div>
              <p className="mt-2">„{r.t}“</p>
              <footer className="mt-3 text-sm text-muted-foreground">{r.a}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </Layout>
  );
}
