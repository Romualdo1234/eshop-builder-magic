import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PRODUCTS, formatCZK, getProduct, minPrice, totalStock, type Product } from "@/lib/shop";

function jsonLd(p: Product) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    brand: { "@type": "Brand", name: p.brand },
    category: p.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CZK",
      lowPrice: minPrice(p),
      availability: totalStock(p) > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
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

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const p = getProduct(slug)!;
  const [vid, setVid] = useState(p.variants.find((v) => v.stock > 0)?.id ?? p.variants[0]!.id);
  const [qty, setQty] = useState(1);
  const v = p.variants.find((x) => x.id === vid)!;
  const { add } = useCart();
  const matched = p.matchSlug ? getProduct(p.matchSlug) : undefined;
  const related = [
    ...(matched ? [matched] : []),
    ...PRODUCTS.filter((x) => x.slug !== p.slug && x.slug !== matched?.slug && x.water.some((w) => p.water.includes(w))),
  ].slice(0, 4);
  const specs = p.specs ?? [
    { label: "Značka", value: p.brand },
    { label: "Kategorie", value: p.category },
    { label: p.variantName, value: p.variants.map((x) => x.label).join(" · ") },
    { label: "Vhodné vody", value: p.water.join(", ") },
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link to="/katalog" className="text-sm text-muted-foreground">← Katalog</Link>
        <div className="mt-4 grid md:grid-cols-2 gap-10">
          <ProductImage p={p} className="rounded-lg border w-full aspect-square" />
          <div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">{p.brand} · SKU {p.slug.toUpperCase().slice(0, 10)}-{v.id}</div>
            <h1 className="font-display text-4xl md:text-5xl mt-1">{p.name}</h1>
            <div className="mt-2 flex gap-3 text-sm empty:hidden">
              {p.score !== undefined && <span className="rounded bg-accent text-accent-foreground font-bold px-2">AS-SCORE {p.score}/10</span>}
            </div>
            <div className="mt-6 text-4xl font-bold">{formatCZK(v.price)}</div>
            <div className={`mt-2 text-sm font-semibold ${v.stock > 0 ? "text-success" : "text-muted-foreground"}`}>
              {v.stock > 0 ? `● Skladem v Ostravě: ${v.stock} ks · Expedujeme dnes do 14:00 · Odběr dnes do 17:00` : "○ Momentálně vyprodáno – naskladníme do 5 dnů"}
            </div>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{p.variantName}</div>
              <div className="flex flex-wrap gap-2">
                {p.variants.map((x) => (
                  <button key={x.id} onClick={() => setVid(x.id)} className={`rounded-md border px-4 py-2 text-sm ${x.id === vid ? "border-accent bg-accent/15" : ""} ${x.stock === 0 ? "opacity-50" : ""}`}>
                    {x.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <div className="flex items-center rounded-md border">
                <button className="px-3 py-2" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span className="w-8 text-center">{qty}</span>
                <button className="px-3 py-2" onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button disabled={v.stock === 0} onClick={() => { add(p.slug, v.id, qty); toast.success("Přidáno do košíku", { action: { label: "Košík", onClick: () => (window.location.href = "/kosik") } }); }}
                className="flex-1 rounded-md bg-accent text-accent-foreground font-bold py-3 disabled:opacity-40">
                Do košíku
              </button>
            </div>
            <div className="mt-8 rounded-lg border bg-card p-5 space-y-2 text-sm">
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
          <section className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
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
            </div>
            <div>
              <h2 className="font-display text-3xl mb-4">Parametry</h2>
              <dl className="rounded-xl border bg-card divide-y">
                {specs.map((s) => (
                  <div key={s.label} className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 px-4 py-3 text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd><span className="font-semibold">{s.value}</span>{"meaning" in s && s.meaning && <span className="block text-muted-foreground mt-0.5">{s.meaning}</span>}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-3xl mb-4">{matched ? "Sedí k tomu (AS-Match)" : "Sedí k tomu"}</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
          </section>
        )}
      </div>
    </Layout>
  );
}
