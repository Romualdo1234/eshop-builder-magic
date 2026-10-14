import { Link } from "@tanstack/react-router";
import { ProductImage } from "@/components/ProductImage";
import { type Product, formatCZK, minPrice, totalStock } from "@/lib/shop";

export function ProductCard({ p }: { p: Product }) {
  const stock = totalStock(p);
  return (
    <Link to="/produkt/$slug" params={{ slug: p.slug }} className="group rounded-xl border bg-card overflow-hidden flex flex-col hover:border-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all">
      <div className="relative aspect-square overflow-hidden">
        <ProductImage p={p} className="h-full w-full group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.brand} · {p.category}</div>
        <div className="font-semibold leading-snug">{p.name}</div>
        <div className="mt-auto pt-3 flex items-end justify-between">
          <span className="text-lg font-bold">od {formatCZK(minPrice(p))}</span>
          <span className={stock > 0 ? "text-xs text-success" : "text-xs text-muted-foreground"}>
            {stock > 0 ? "Skladem v Ostravě" : "Na dotaz"}
          </span>
        </div>
      </div>
    </Link>
  );
}
