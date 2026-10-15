import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductImage } from "@/components/ProductImage";
import { Layout } from "@/components/Layout";
import { useCart } from "@/lib/cart";
import { formatCZK, getProduct } from "@/lib/shop";

export const Route = createFileRoute("/kosik")({
  head: () => ({
    meta: [
      { title: "Košík – AS-FISH" },
      { name: "description", content: "Váš nákupní košík AS-FISH." },
      { property: "og:title", content: "Košík – AS-FISH" },
      { property: "og:description", content: "PPL po ČR od 110 Kč, osobní odběr v Ostravě zdarma." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, setQty, subtotal } = useCart();
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="font-display text-5xl mb-6">Košík</h1>
        {items.length === 0 ? (
          <div className="text-muted-foreground">Košík je prázdný. <Link to="/katalog" className="text-accent">Do katalogu →</Link></div>
        ) : (
          <div className="space-y-6">
            <div className="divide-y rounded-lg border bg-card">
              {items.map((i) => {
                const p = getProduct(i.slug); const v = p?.variants.find((x) => x.id === i.variantId);
                if (!p || !v) return null;
                return (
                  <div key={i.slug + i.variantId} className="flex items-center gap-4 p-4">
                    <ProductImage p={p} compact className="h-16 w-16 shrink-0 rounded" />
                    <div className="flex-1">
                      <Link to="/produkt/$slug" params={{ slug: p.slug }} className="font-semibold">{p.name}</Link>
                      <div className="text-sm text-muted-foreground">{v.label}</div>
                    </div>
                    <div className="flex items-center rounded-md border">
                      <button className="px-3 py-1" onClick={() => setQty(i.slug, i.variantId, i.qty - 1)}>−</button>
                      <span className="w-8 text-center">{i.qty}</span>
                      <button className="px-3 py-1" onClick={() => setQty(i.slug, i.variantId, i.qty + 1)}>+</button>
                    </div>
                    <div className="w-24 text-right font-bold">{formatCZK(v.price * i.qty)}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl">Mezisoučet: <b>{formatCZK(subtotal)}</b></div>
              <Link to="/pokladna" className="rounded-md bg-accent text-accent-foreground px-8 py-3 font-bold">K pokladně</Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
