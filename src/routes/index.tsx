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
      { name: "description", content: "Kaprařina a method feeder od rybářů z Ostravy. Osobní odběr v Ostravě, Z-Box od 69 Kč." },
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

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">{eyebrow}</p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight">{title}</h2>
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden text-hero-foreground">
        <img src={hero} alt="Kaprové pruty u jezera za úsvitu" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.04_250/90%)] via-[oklch(0.12_0.04_250/65%)] to-[oklch(0.12_0.04_250/20%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-28 lg:py-32">
          <p className="inline-flex items-center rounded-full border border-hero-foreground/25 bg-hero-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] mb-6 backdrop-blur-sm">AS-FISH / Ostrava</p>
          <h1 className="font-display font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight max-w-2xl">Rybářské potřeby.<br /><span className="text-accent">Od rybářů pro rybáře.</span></h1>
          <p className="mt-6 max-w-lg text-base sm:text-lg text-hero-muted leading-relaxed">Vybavení, které sami bereme k vodě. Kaprařina a method feeder se zázemím v Ostravě.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-6 rounded-full shadow-none"><Link to="/katalog">Procházet katalog<ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 rounded-full bg-transparent text-hero-foreground border-hero-foreground/40 hover:bg-hero-foreground/10 hover:text-hero-foreground"><Link to="/prodejna">Naše prodejna</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Podle vody" title="Kam dnes míříte?" />
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {WATERS.map((w) => (
            <Link key={w} to="/katalog" search={{ voda: w }} className="group rounded-xl border bg-card p-6 hover:border-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all">
              <div className="font-display text-xl sm:text-2xl font-semibold">{w}</div>
              <div className="text-sm text-muted-foreground mt-2 group-hover:text-accent transition-colors">Vybraná výbava →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHead eyebrow="Nejlépe hodnocené" title="6 věcí, za které dáme ruku do ohně" />
        <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3">
          {[...PRODUCTS].sort((a, b) => b.score - a.score).slice(0, 6).map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border bg-card p-6 sm:p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">Osobní odběr</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight">Fyzický sklad a prodejna v Ostravě na Nádražní</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">U každého produktu vidíte přesný počet kusů na prodejně. Osobní odběr zdarma ještě týž den, nonstop výdejní box.</p>
            <Button asChild variant="outline" className="mt-6 rounded-full"><Link to="/prodejna">Otevírací doba a kontakt<ArrowRight /></Link></Button>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[["0 Kč", "osobní odběr"], ["od 69 Kč", "Z-Box"], ["14:00", "expedice dnes"]].map(([a, b]) => (
              <div key={b} className="rounded-xl bg-background/60 border p-4 sm:p-5"><div className="font-display font-bold text-2xl sm:text-3xl text-accent">{a}</div><div className="mt-1 text-xs text-muted-foreground">{b}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHead eyebrow="Reference" title="Co říkají rybáři, kteří s námi jezdí k vodě" />
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {REVIEWS.map((r) => (
            <blockquote key={r.a} className="rounded-xl border bg-card p-6 flex flex-col">
              <div className="text-accent tracking-widest">★★★★★</div>
              <p className="mt-3 leading-relaxed">„{r.t}“</p>
              <footer className="mt-auto pt-4 text-sm text-muted-foreground">{r.a}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </Layout>
  );
}
