import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
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

function Store() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-display text-5xl">Prodejna Ostrava</h1>
          <p className="mt-4 text-muted-foreground">Fyzický sklad a prodejna na Nádražní ulici. Poradíme se sestavou, vyzvednete ještě dnes.</p>
          <div className="mt-6 space-y-1">
            <div><b>Adresa:</b> {SELLER.street}, {SELLER.zip} {SELLER.city}</div>
            <div><b>Telefon:</b> <a className="text-accent" href={`tel:${SELLER.phone.replace(/\s/g, "")}`}>{SELLER.phone}</a></div>
            <div><b>E-mail:</b> <a className="text-accent" href={`mailto:${SELLER.email}`}>{SELLER.email}</a></div>
          </div>
          <h2 className="font-display text-2xl mt-10 mb-3">Fakturační a korespondenční adresa</h2>
          <div className="space-y-1 text-sm">
            <div className="font-semibold">{SELLER.legalName}</div>
            <div>AS-FISH.CZ</div>
            <div>{SELLER.street}, {SELLER.zip} {SELLER.city}</div>
            <div className="pt-2"><b>IČ:</b> {SELLER.icoDisplay}</div>
            <div><b>DIČ:</b> {SELLER.dic}</div>
          </div>
          <h2 className="font-display text-2xl mt-10 mb-3">Bankovní spojení</h2>
          <div className="space-y-1 text-sm">
            <div><b>Číslo účtu:</b> {SELLER.accountNumber}, {SELLER.bank}</div>
            <div><b>IBAN:</b> {SELLER.iban}</div>
            <div><b>SWIFT:</b> {SELLER.swift}</div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">V případě jakýchkoliv dotazů k prezentovaným výrobkům nás neváhejte kontaktovat telefonicky na výše uvedeném čísle nebo e-mailem. Děkujeme.</p>
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
