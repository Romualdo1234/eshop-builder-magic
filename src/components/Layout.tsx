import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MapPin, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-horizontal.png.asset.json";
import { useCart } from "@/lib/cart";

export function Layout({ children }: { children: ReactNode }) {
  const { count } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b border-brand-border bg-brand-surface text-brand-ink">
        <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:py-4">
          <Link to="/" aria-label="AS-FISH – úvodní stránka" className="flex min-w-0 items-center gap-4 w-fit">
            <img src={logo.url} alt="Rybářské potřeby" width={1536} height={768} className="h-14 w-28 object-contain sm:h-20 sm:w-40 shrink-0" />
            <div className="hidden sm:block min-w-0 border-l border-brand-border pl-4">
              <div className="font-display text-2xl font-bold">AS-FISH</div>
              <div className="text-sm text-brand-muted">Váš rybářský obchod v Ostravě</div>
            </div>
          </Link>
          <div className="flex items-center gap-5 shrink-0">
            <Button asChild variant="link" className="hidden lg:inline-flex text-brand-muted"><Link to="/prodejna"><MapPin />Prodejna Ostrava<ArrowUpRight /></Link></Button>
            <Button asChild className="h-11 shadow-none"><Link to="/kosik"><ShoppingBag /><span>Košík</span><span className="min-w-5 text-center border-l border-primary-foreground/30 pl-2">{count}</span></Link></Button>
          </div>
        </div>
        <div className="border-t border-brand-border">
          <nav aria-label="Hlavní navigace" className="mx-auto max-w-6xl px-4 flex items-center gap-2 sm:gap-5 overflow-x-auto py-2">
            <Button asChild variant="ghost" className="text-brand-ink hover:bg-brand-soft hover:text-primary"><Link to="/katalog" activeProps={{ className: "text-primary" }}>Katalog</Link></Button>
            <Button asChild variant="ghost" className="text-brand-ink hover:bg-brand-soft hover:text-primary"><Link to="/katalog" search={{ kategorie: "Boilies" }}>Boilies</Link></Button>
            <Button asChild variant="ghost" className="text-brand-ink hover:bg-brand-soft hover:text-primary"><Link to="/katalog" search={{ voda: "Method feeder" }}>Feeder</Link></Button>
            <Button asChild variant="ghost" className="text-brand-ink hover:bg-brand-soft hover:text-primary"><Link to="/prodejna">Prodejna</Link></Button>
            <span className="hidden md:block ml-auto text-xs text-brand-muted whitespace-nowrap">Kaprařina & method feeder</span>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-card mt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
          <div>
            <img src={logo.url} alt="AS-FISH – Rybářské potřeby" width={1536} height={768} className="w-40 h-20 object-contain mb-3" />
            Rybářské potřeby z Ostravy. Testujeme výbavu přímo na revírech.
          </div>
          <div>
            <div className="text-foreground font-semibold mb-2">Prodejna</div>
            Nádražní, Ostrava<br />Po–Pá 9–17, So 8–12<br />Nonstop výdejní box
          </div>
          <div>
            <div className="text-foreground font-semibold mb-2">Hodnocení</div>
            Zboží.cz 100 % spokojenost · Heureka 96 %<br />Platby: karta, Apple Pay, Google Pay, převod
          </div>
        </div>
      </footer>
    </div>
  );
}
