import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { SELLER } from "@/lib/vop";

export const Route = createFileRoute("/prodejna")({
  head: () => ({
    meta: [
      { title: "Prodejna Ostrava – AS-FISH" },
      { name: "description", content: "Kamenná prodejna rybářských potřeb na Nádražní v Ostravě. Otevírací doba, kontakt, nonstop box." },
      { property: "og:title", content: "Prodejna Ostrava – AS-FISH" },
      { property: "og:description", content: "Osobní odběr zdarma a nonstop výdejní box." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Store,
});

const card = "rounded-lg border bg-card p-6";
const cardTitle = "font-display text-2xl mb-4";
const row = "grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-2 text-sm";
const label = "text-muted-foreground";

function Store() {
  const tel = SELLER.phone.replace(/\s/g, "");
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-2xl">
          <h1 className="font-display text-5xl">Prodejna Ostrava</h1>
          <p className="mt-4 text-muted-foreground">Fyzický sklad a prodejna na Nádražní ulici. Poradíme se sestavou, vyzvednete ještě dnes.</p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <section className={card} aria-labelledby="k-kontakt">
            <h2 id="k-kontakt" className={cardTitle}>Kontakt</h2>
            <dl className={row}>
              <dt className={label}>Adresa</dt><dd>{SELLER.street}<br />{SELLER.zip} {SELLER.city}</dd>
              <dt className={label}>Telefon</dt><dd><a className="text-accent" href={`tel:${tel}`}>{SELLER.phone}</a></dd>
              <dt className={label}>E-mail</dt><dd><a className="text-accent break-all" href={`mailto:${SELLER.email}`}>{SELLER.email}</a></dd>
            </dl>
          </section>

          <section className={card} aria-labelledby="k-doba">
            <h2 id="k-doba" className={cardTitle}>Otevírací doba</h2>
            <dl className={row}>
              <dt className={label}>Po–Pá</dt><dd>9:00–17:00</dd>
              <dt className={label}>Sobota</dt><dd>8:00–12:00</dd>
              <dt className={label}>Neděle</dt><dd>zavřeno</dd>
              <dt className={label}>Výdejní box</dt><dd className="text-accent font-semibold">nonstop</dd>
            </dl>
          </section>

          <section className={card} aria-labelledby="k-firma">
            <h2 id="k-firma" className={cardTitle}>Fakturační údaje</h2>
            <dl className={row}>
              <dt className={label}>Firma</dt><dd>{SELLER.legalName}<br />{SELLER.street}, {SELLER.zip} {SELLER.city}</dd>
              <dt className={label}>IČ</dt><dd>{SELLER.icoDisplay}</dd>
              <dt className={label}>DIČ</dt><dd>{SELLER.dic}</dd>
              <dt className={label}>Účet</dt><dd>{SELLER.accountNumber}<br /><span className="text-muted-foreground">{SELLER.bank}</span></dd>
              <dt className={label}>IBAN</dt><dd>{SELLER.iban.split(" ").slice(0, 3).join(" ")}<br />{SELLER.iban.split(" ").slice(3).join(" ")}</dd>
              <dt className={label}>SWIFT</dt><dd>{SELLER.swift}</dd>
            </dl>
          </section>
        </div>

        <div className="mt-10 max-w-3xl">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}
