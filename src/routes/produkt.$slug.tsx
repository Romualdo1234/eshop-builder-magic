import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  complementsFor, formatCZK, getProduct, minPrice, pricePerMeter, shippingPrice, totalStock, unitSavingPercent,
  type Product, type Variant,
} from "@/lib/shop";

const availability = (stock: number) => (stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock");
const perMeter = (n: number) => `${n.toFixed(2).replace(".", ",")} Kč/m`;

function jsonLd(p: Product) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: p.name,
    productGroupID: p.slug,
    brand: { "@type": "Brand", name: p.brand },
    category: p.category,
    hasVariant: p.variants.map((v) => ({
      "@type": "Product",
      name: `${p.name} – ${v.label}`,
      sku: `${p.slug}-${v.id}`,
      brand: { "@type": "Brand", name: p.brand },
      offers: { "@type": "Offer", priceCurrency: "CZK", price: v.price, availability: availability(v.stock) },
    })),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CZK",
      lowPrice: minPrice(p),
      availability: availability(totalStock(p)),
    },
  });
}

export const Route = createFileRoute("/produkt/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug, name: p.name, brand: p.brand };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} – ${loaderData.brand} | AS-FISH` },
          { name: "description", content: `${loaderData.name} od ${loaderData.brand}. Skladem v Ostravě, expedice dnes.` },
          { property: "og:title", content: `${loaderData.name} | AS-FISH` },
          { property: "og:description", content: `${loaderData.brand} – skladem v Ostravě.` },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Produkt nenalezen | AS-FISH" }, { name: "robots", content: "noindex" }],
    scripts: loaderData ? [{ type: "application/ld+json", children: jsonLd(getProduct(loaderData.slug)!) }] : [],
  }),
  component: ProductPage,
});

function VariantRow({ p, x, selected, onSelect }: { p: Product; x: Variant; selected: boolean; onSelect: () => void }) {
  const unit = pricePerMeter(p, x);
  const saving = unitSavingPercent(p, x);
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`w-full min-h-12 grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-0.5 rounded-lg border px-4 py-3 text-left transition-colors ${selected ? "border-accent bg-accent/15 border-2" : "hover:border-accent/60"} ${x.stock === 0 ? "opacity-60" : ""}`}
    >
      <span className="font-semibold text-base">{x.label}</span>
      <span className="text-lg font-bold tabular-nums text-right">{formatCZK(x.price)}</span>
      <span className={`text-sm ${x.stock > 0 ? "text-success" : "text-muted-foreground"}`}>
        {x.stock > 0 ? `● Skladem v Ostravě: ${x.stock} ks` : "○ Vyprodáno"}
      </span>
      {unit !== undefined && (
        <span className="text-sm text-muted-foreground tabular-nums text-right">
          {perMeter(unit)}{saving !== undefined && <b className="ml-2 text-success">ušetříte {saving} %</b>}
        </span>
      )}
    </button>
  );
}

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const p = getProduct(slug)!;
  const [vid, setVid] = useState(p.variants.find((v) => v.stock > 0)?.id ?? p.variants[0]!.id);
  const [qty, setQty] = useState(1);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(true);
  const ctaRef = useRef<HTMLDivElement>(null);
  const v = p.variants.find((x) => x.id === vid)!;
  const { add } = useCart();
  const matched = p.matchSlug ? getProduct(p.matchSlug) : undefined;
  const related = complementsFor(p);
  const specs = p.specs ?? [
    { label: "Značka", value: p.brand },
    { label: "Kategorie", value: p.category },
    { label: p.variantName, value: p.variants.map((x) => x.label).join(" · ") },
    { label: "Vhodné vody", value: p.water.join(", ") },
  ];

  // Mobilní lišta se ukáže, až hlavní tlačítko odjede z obrazovky.
  useEffect(() => {
    const el = ctaRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setCtaVisible(e!.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, [slug]);

  const addToCart = () => {
    add(p.slug, v.id, qty);
    toast.success("Přidáno do košíku", { action: { label: "Košík", onClick: () => (window.location.href = "/kosik") } });
  };

  return (
    <Layout>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-8 sm:py-10 pb-24 md:pb-10">
        <nav aria-label="Drobečková navigace" className="text-sm text-muted-foreground flex flex-wrap items-center gap-x-2">
          <Link to="/katalog" className="hover:text-foreground">Katalog</Link>
          <span aria-hidden>›</span>
          <Link to="/katalog" search={{ kategorie: p.category }} className="hover:text-foreground">{p.category}</Link>
          <span aria-hidden>›</span>
          <span className="text-foreground">{p.name}</span>
        </nav>
        <div className="mt-5 grid md:grid-cols-[45fr_55fr] gap-8 md:gap-10">
          <ProductImage p={p} className="rounded-lg border w-full aspect-square" />
          <div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">{p.brand} · SKU {p.slug.toUpperCase().slice(0, 10)}-{v.id}</div>
            <h1 className="font-display text-3xl md:text-4xl mt-1">{p.name}</h1>
            <div className="mt-5 text-4xl font-bold tabular-nums">{formatCZK(v.price)}</div>
            {pricePerMeter(p, v) !== undefined && (
              <div className="mt-1 text-sm text-muted-foreground tabular-nums">{perMeter(pricePerMeter(p, v)!)}</div>
            )}

            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{p.variantName}</div>
              <div role="radiogroup" aria-label={p.variantName} className="grid gap-2">
                {p.variants.map((x) => (
                  <VariantRow key={x.id} p={p} x={x} selected={x.id === vid} onSelect={() => setVid(x.id)} />
                ))}
              </div>
            </div>

            <div ref={ctaRef} className="mt-6 flex gap-3">
              <div className="flex items-center rounded-md border">
                <button className="px-4 min-h-[52px]" aria-label="Méně kusů" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span className="w-8 text-center tabular-nums">{qty}</span>
                <button className="px-4 min-h-[52px]" aria-label="Více kusů" onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button disabled={v.stock === 0} onClick={addToCart}
                className="flex-1 min-h-[52px] rounded-md bg-accent text-accent-foreground font-bold text-base disabled:opacity-40">
                Do košíku · {formatCZK(v.price * qty)}
              </button>
            </div>
            <div className={`mt-3 text-base font-semibold ${v.stock > 0 ? "text-success" : "text-muted-foreground"}`}>
              {v.stock > 0 ? `● Skladem v Ostravě: ${v.stock} ks · Expedujeme dnes do 14:00 · Odběr dnes do 17:00` : "○ Momentálně vyprodáno – naskladníme do 5 dnů"}
            </div>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>Osobní odběr v Ostravě zdarma · PPL po ČR od {formatCZK(shippingPrice("ppl-cz", 0, "transfer"))}, převodem nad 5 000 Kč zdarma</li>
              <li>Platba převodem nebo dobírkou</li>
            </ul>

            <div className="mt-8 rounded-lg border border-l-4 border-l-accent bg-card p-5 space-y-2 text-base">
              <div className="font-display text-2xl">Verdikt AS-FISH</div>
              <p><b>Pro koho je:</b> {p.forWho}</p>
              <p><b>Pro koho není:</b> {p.notFor}</p>
              <p><b>Doporučené použití:</b> {p.usage}</p>
              {p.match && (
                <p className="text-accent"><b>AS-Match:</b> {matched ? <Link to="/produkt/$slug" params={{ slug: matched.slug }} className="underline underline-offset-4">{p.match}</Link> : p.match}</p>
              )}
            </div>
          </div>
        </div>
        {(p.story || specs.length > 0 || p.faq) && (
          <section className={`mt-14 grid gap-10 ${p.story || p.faq ? "lg:grid-cols-[1fr_1.2fr]" : "max-w-3xl"}`}>
            {(p.story || p.faq) && <div>
              {p.story && (
                <>
                  <h2 className="font-display text-3xl mb-4">Jak to funguje u vody</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">{p.story.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}</div>
                </>
              )}
              {p.faq && (
                <div className={p.story ? "mt-10" : ""}>
                  <h2 className="font-display text-3xl mb-2">Časté otázky</h2>
                  <Accordion type="single" collapsible>
                    {p.faq.map((f, i) => (
                      <AccordionItem key={f.q} value={`f${i}`}>
                        <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>}
            <div>
              <h2 className="font-display text-3xl mb-4">Parametry</h2>
              <dl className="rounded-xl border bg-card divide-y">
                {specs.map((s) => (
                  <div key={s.label} className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 px-4 py-3 text-base">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd><span className="font-semibold">{s.value}</span>{"meaning" in s && s.meaning && <span className="block text-sm text-muted-foreground mt-0.5">{s.meaning}</span>}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-3xl mb-4">{matched ? "Sedí k tomu (AS-Match)" : "Doplňky k tomuto produktu"}</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
          </section>
        )}
      </div>

      {!ctaVisible && (
        <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="flex-1 min-h-12 min-w-0 rounded-md border px-3 text-left text-sm leading-tight">
                <span className="block truncate font-semibold">{v.label} ▴</span>
                <span className="block tabular-nums text-muted-foreground">{formatCZK(v.price)}</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">{p.variantName}</SheetTitle>
              </SheetHeader>
              <div role="radiogroup" aria-label={p.variantName} className="grid gap-2 mt-4 pb-4">
                {p.variants.map((x) => (
                  <VariantRow key={x.id} p={p} x={x} selected={x.id === vid} onSelect={() => { setVid(x.id); setSheetOpen(false); }} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <button disabled={v.stock === 0} onClick={addToCart}
            className="flex-1 min-h-12 rounded-md bg-accent text-accent-foreground font-bold disabled:opacity-40">
            Do košíku
          </button>
        </div>
      )}
    </Layout>
  );
}
