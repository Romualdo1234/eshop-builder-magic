import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/Layout";
import { useCart } from "@/lib/cart";
import { PAYMENTS, SHIPPING, formatCZK, shippingPrice } from "@/lib/shop";

export const Route = createFileRoute("/pokladna")({
  head: () => ({
    meta: [
      { title: "Pokladna – AS-FISH" },
      { name: "description", content: "Dokončení objednávky na jedné stránce." },
      { property: "og:title", content: "Pokladna – AS-FISH" },
      { property: "og:description", content: "Rychlý checkout s Z-Boxem, Balíkovnou i osobním odběrem." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [ship, setShip] = useState("zbox");
  const [pay, setPay] = useState("card");
  const [done, setDone] = useState<string | null>(null);
  const shipCost = shippingPrice(ship);
  const payCost = PAYMENTS.find((p) => p.id === pay)!.price;
  const total = subtotal + shipCost + payCost;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(`AS${Date.now().toString().slice(-6)}`);
    clear();
  };

  if (done) return (
    <Layout><div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-5xl">Děkujeme!</h1>
      <p className="mt-4 text-muted-foreground">Objednávka <b className="text-foreground">{done}</b> byla přijata. Potvrzení vám přijde e-mailem.</p>
      <Link to="/" className="inline-block mt-8 rounded-md bg-accent text-accent-foreground px-6 py-3 font-bold">Zpět do obchodu</Link>
    </div></Layout>
  );

  if (items.length === 0) return (
    <Layout><div className="mx-auto max-w-xl px-4 py-24 text-center text-muted-foreground">Košík je prázdný. <Link to="/katalog" className="text-accent">Do katalogu →</Link></div></Layout>
  );

  const input = "w-full rounded-md border bg-input px-3 py-2";
  const opt = (active: boolean) => `flex items-center gap-3 rounded-md border p-3 cursor-pointer ${active ? "border-accent bg-accent/10" : ""}`;

  return (
    <Layout>
      <form onSubmit={submit} className="mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-[1fr_340px] gap-8">
        <div className="space-y-8">
          <h1 className="font-display text-5xl">Pokladna</h1>
          <section className="space-y-3">
            <h2 className="font-display text-2xl">1. Kontakt</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Jméno a příjmení" className={input} />
              <input required type="tel" placeholder="Telefon" className={input} />
              <input required type="email" placeholder="E-mail" className={`${input} sm:col-span-2`} />
              {ship === "ppl" && <input required placeholder="Ulice, město, PSČ" className={`${input} sm:col-span-2`} />}
            </div>
          </section>
          <section className="space-y-2">
            <h2 className="font-display text-2xl">2. Doprava</h2>
            {SHIPPING.map((s) => (
              <label key={s.id} className={opt(ship === s.id)}>
                <input type="radio" name="ship" checked={ship === s.id} onChange={() => setShip(s.id)} />
                <div className="flex-1"><div className="font-semibold">{s.label}</div><div className="text-xs text-muted-foreground">{s.note}</div></div>
                <b>{shippingPrice(s.id) === 0 ? "Zdarma" : formatCZK(s.price)}</b>
              </label>
            ))}
          </section>
          <section className="space-y-2">
            <h2 className="font-display text-2xl">3. Platba</h2>
            {PAYMENTS.map((p) => (
              <label key={p.id} className={opt(pay === p.id)}>
                <input type="radio" name="pay" checked={pay === p.id} onChange={() => setPay(p.id)} />
                <div className="flex-1 font-semibold">{p.label}</div>
                <b>{p.price === 0 ? "Zdarma" : formatCZK(p.price)}</b>
              </label>
            ))}
          </section>
        </div>
        <aside className="space-y-4 md:sticky md:top-24 self-start">
          <div className="rounded-lg border bg-card p-5 space-y-2 text-sm">
            <div className="flex justify-between"><span>Zboží</span><span>{formatCZK(subtotal)}</span></div>
            <div className="flex justify-between"><span>Doprava</span><span>{shipCost ? formatCZK(shipCost) : "Zdarma"}</span></div>
            {payCost > 0 && <div className="flex justify-between"><span>Dobírka</span><span>{formatCZK(payCost)}</span></div>}
            <div className="flex justify-between border-t pt-3 text-xl font-bold"><span>Celkem</span><span>{formatCZK(total)}</span></div>
            <label className="flex items-start gap-2 pt-2 text-xs text-muted-foreground cursor-pointer">
              <input type="checkbox" required className="mt-0.5" />
              <span>Souhlasím s <Link to="/obchodni-podminky" target="_blank" className="text-accent underline">obchodními podmínkami</Link>.</span>
            </label>
            <button type="submit" className="w-full mt-3 rounded-md bg-accent text-accent-foreground py-3 font-bold">Objednat a zaplatit</button>
            <p className="text-xs text-muted-foreground">Ukázková pokladna – platba zatím neprobíhá.</p>
          </div>
        </aside>
      </form>
    </Layout>
  );
}
