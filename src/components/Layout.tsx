import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useCart } from "@/lib/cart";
import { FREE_SHIPPING_LIMIT, formatCZK } from "@/lib/shop";

export function Layout({ children }: { children: ReactNode }) {
  const { count, subtotal } = useCart();
  const left = FREE_SHIPPING_LIMIT - subtotal;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-accent text-accent-foreground text-center text-sm py-2 px-4 font-medium">
        {left > 0 ? `Doprava zdarma od ${formatCZK(FREE_SHIPPING_LIMIT)} · Objednejte do 14:00, expedujeme dnes` : "Máte dopravu zdarma 🎣"}
      </div>
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-6">
          <Link to="/" className="font-display text-2xl tracking-wide">AS<span className="text-accent">·</span>FISH</Link>
          <nav className="hidden md:flex gap-5 text-sm text-muted-foreground">
            <Link to="/katalog" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>Katalog</Link>
            <Link to="/katalog" search={{ voda: "Method feeder" }} className="hover:text-foreground">Feeder</Link>
            <Link to="/prodejna" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>Prodejna Ostrava</Link>
          </nav>
          <Link to="/kosik" className="ml-auto inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
            Košík <span className="rounded-full bg-accent text-accent-foreground px-2 text-xs">{count}</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-card mt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
          <div>
            <div className="font-display text-xl text-foreground mb-2">AS·FISH</div>
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
