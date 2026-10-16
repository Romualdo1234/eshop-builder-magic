import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ShoppingBag } from "lucide-react";
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
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-4 sm:gap-8">
          <Link to="/" aria-label="AS-FISH – úvodní stránka" className="flex items-center gap-3 shrink-0">
            <img src={LOGO_SRC} alt="AS-FISH – rybářské potřeby" width={900} height={307} className="h-10 w-auto sm:h-11" />
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
        <nav aria-label="Patička" className="mx-auto max-w-6xl px-4 py-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <Link to="/obchodni-podminky" className="hover:text-accent transition-colors">Obchodní podmínky</Link>
          <Link to="/ochrana-osobnich-udaju" className="hover:text-accent transition-colors">Ochrana osobních údajů</Link>
          <Link to="/doprava" className="hover:text-accent transition-colors">Doprava</Link>
        </nav>
      </footer>
    </div>
  );
}
