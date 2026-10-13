import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/prodejna")({
  head: () => ({
    meta: [
      { title: "Prodejna Ostrava – AS-FISH" },
      { name: "description", content: "Kamenná prodejna rybářských potřeb na Nádražní v Ostravě. Otevírací doba, kontakt, nonstop box." },
      { property: "og:title", content: "Prodejna Ostrava – AS-FISH" },
      { property: "og:description", content: "Osobní odběr zdarma a nonstop výdejní box." },
    ],
  }),
  component: Store,
});

function Store() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-display text-5xl">Prodejna Ostrava</h1>
          <p className="mt-4 text-muted-foreground">Fyzický sklad a prodejna na Nádražní ulici. Poradíme se sestavou, vyzvednete ještě dnes.</p>
          <div className="mt-6 space-y-1">
            <div><b>Adresa:</b> Nádražní, Ostrava</div>
            <div><b>Telefon:</b> +420 000 000 000</div>
            <div><b>E-mail:</b> info@as-fish.cz</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="font-display text-2xl mb-3">Otevírací doba</h2>
          <dl className="grid grid-cols-2 gap-y-1 text-sm">
            <dt>Po–Pá</dt><dd>9:00–17:00</dd>
            <dt>Sobota</dt><dd>8:00–12:00</dd>
            <dt>Neděle</dt><dd>zavřeno</dd>
            <dt>Výdejní box</dt><dd className="text-accent font-semibold">nonstop</dd>
          </dl>
        </div>
      </div>
    </Layout>
  );
}
