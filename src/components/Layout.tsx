import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

// Originální modré logo prodejny je v /public, aby se vždy načetlo (Vercel i jinde).
const LOGO_SRC = "/logo-horizontal.png";

const NAV = [
  { label: "Katalog", to: "/katalog" as const },
  { label: "Boilies", to: "/katalog" as const, search: { kategorie: "Boilies" } },
  { label: "Feeder", to: "/katalog" as const, search: { voda: "Method feeder" } },
  { label: "Prodejna", to: "/prodejna" as const },
];

export function Layout({ children }: { children: ReactNode }) {
  const { count } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b border-brand-border bg-brand-surface/95 backdrop-blur text-brand-ink">
        <div className="mx-auto max-w-6xl px-4 h-16 sm:h-20 flex items-center gap-4 sm:gap-8">
          <Link to="/" aria-label="AS-FISH – úvodní stránka" className="flex items-center gap-3 shrink-0">
            <img src={LOGO_SRC} alt="AS-FISH – rybářské potřeby" width={900} height={307} className="h-10 w-auto sm:h-14" />
            <span className="hidden md:block font-display text-2xl font-bold tracking-tight">AS-FISH</span>
          </Link>

          <nav aria-label="Hlavní navigace" className="hidden md:flex items-center gap-1 flex-1">
            {NAV.map((n) => (
              <Button key={n.label} asChild variant="ghost" className="text-base font-medium text-brand-ink hover:bg-brand-soft hover:text-accent">
                <Link to={n.to} search={n.search as never}>{n.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            <Button asChild variant="link" className="hidden lg:inline-flex text-brand-muted hover:text-brand-ink">
              <Link to="/prodejna"><MapPin />Prodejna Ostrava</Link>
            </Button>
            <Button asChild className="h-10 sm:h-11 px-4 shadow-none rounded-full">
              <Link to="/kosik"><ShoppingBag /><span>Košík</span><span className="min-w-5 text-center border-l border-primary-foreground/30 pl-2">{count}</span></Link>
            </Button>
          </div>
        </div>

        <nav aria-label="Hlavní navigace (mobil)" className="md:hidden border-t border-brand-border">
          <div className="mx-auto max-w-6xl px-2 flex items-center overflow-x-auto">
            {NAV.map((n) => (
              <Button key={n.label} asChild variant="ghost" className="text-brand-ink hover:bg-brand-soft hover:text-accent">
                <Link to={n.to} search={n.search as never}>{n.label}</Link>
              </Button>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-brand-border bg-brand-surface mt-20 text-brand-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4 text-sm">
          <div className="md:col-span-1">
            <img src={LOGO_SRC} alt="AS-FISH – rybářské potřeby" width={900} height={307} className="h-16 w-auto mb-4" />
            <p className="leading-relaxed">Rybářské potřeby z Ostravy. Výbavu testujeme přímo na revírech.</p>
          </div>
          <div>
            <div className="text-brand-ink font-semibold mb-3">Prodejna</div>
            <p className="leading-relaxed">Nádražní, Ostrava<br />Po–Pá 9–17, So 8–12<br />Nonstop výdejní box</p>
          </div>
          <div>
            <div className="text-brand-ink font-semibold mb-3">Nakupujte</div>
            <ul className="space-y-1.5">
              <li><Link to="/katalog" className="hover:text-accent transition-colors">Katalog</Link></li>
              <li><Link to="/kosik" className="hover:text-accent transition-colors">Košík</Link></li>
              <li><Link to="/prodejna" className="hover:text-accent transition-colors">Prodejna a kontakt</Link></li>
              <li><Link to="/obchodni-podminky" className="hover:text-accent transition-colors">Obchodní podmínky</Link></li>
              <li><Link to="/reklamacni-rad" className="hover:text-accent transition-colors">Reklamační řád</Link></li>
              <li><Link to="/odstoupeni-od-smlouvy" className="hover:text-accent transition-colors">Odstoupení od smlouvy</Link></li>
              <li><Link to="/ochrana-osobnich-udaju" className="hover:text-accent transition-colors">Ochrana osobních údajů</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-brand-ink font-semibold mb-3">Hodnocení a platby</div>
            <p className="leading-relaxed">Zboží.cz 100 % spokojenost<br />Heureka 96 %<br />Převodem, dobírkou nebo hotově v prodejně</p>
          </div>
        </div>
        <div className="border-t border-brand-border">
          <div className="mx-auto max-w-6xl px-4 py-4 text-xs flex flex-wrap gap-x-4 gap-y-1 justify-between">
            <span>© {new Date().getFullYear()} AS-FISH · Ostrava</span>
            <Link to="/obchodni-podminky" className="hover:text-accent transition-colors">Obchodní podmínky</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
