import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta, type LegalBlock } from "@/components/LegalPage";
import { SELLER } from "@/lib/vop";

export const Route = createFileRoute("/odstoupeni-od-smlouvy")({
  head: () => meta("Odstoupení od smlouvy", "Poučení o právu odstoupit od smlouvy do 14 dnů a vzorový formulář ke stažení či vytištění."),
  component: Withdrawal,
});

const BLOCKS: LegalBlock[] = [
  { h: "Poučení", p: [
    "Spotřebitel má právo odstoupit od kupní smlouvy bez udání důvodu do 14 dnů od převzetí zboží. Je-li objednáno více druhů zboží nebo je zboží dodáno po částech, lhůta běží od převzetí poslední dodávky.",
    `Odstoupení zašlete na adresu ${SELLER.address} nebo na e-mail ${SELLER.email}. Můžete použít formulář níže, není to ale povinné. Stačí odeslat odstoupení v této lhůtě.`,
    "Zboží vraťte do 14 dnů od odstoupení, nepoškozené a nepoužité, včetně obalu a dokumentace. Náklady na vrácení zboží nese kupující. Peníze vrátíme do 14 dnů od odstoupení, stejným způsobem, jakým jsme je přijali, nejdříve však po vrácení zboží nebo prokázání jeho odeslání.",
    "Od smlouvy nelze odstoupit například u zboží upraveného podle přání kupujícího, zboží podléhajícího rychlé zkáze, zboží nenávratně smíseného s jiným zbožím a zboží v uzavřeném obalu, které bylo vyňato z obalu a z hygienických důvodů nelze vrátit (§ 1837 občanského zákoníku).",
  ] },
];

function Withdrawal() {
  return (
    <LegalPage title="Odstoupení od smlouvy" lead="Příloha obchodních podmínek (čl. 12.4)." blocks={BLOCKS}>
      <section className="rounded-lg border bg-card p-6 print:border-0 print:p-0">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="font-display text-2xl">Vzorový formulář pro odstoupení od smlouvy</h2>
          <button type="button" onClick={() => window.print()} className="print:hidden rounded-md border px-3 py-1.5 text-sm hover:bg-brand-soft">Vytisknout</button>
        </div>
        <p className="mb-3">(Vyplňte tento formulář a zašlete jej zpět pouze v případě, že chcete odstoupit od smlouvy.)</p>
        <p className="mb-3"><b>Adresát:</b> {SELLER.name}, {SELLER.address}, e-mail: {SELLER.email}</p>
        <p className="mb-4">Oznamuji, že tímto odstupuji od smlouvy o nákupu tohoto zboží:</p>
        <dl className="space-y-3">
          {["Zboží (název, množství)", "Číslo objednávky / faktury", "Datum objednání / datum obdržení", "Jméno a příjmení spotřebitele", "Adresa spotřebitele", "Číslo účtu pro vrácení peněz", "Datum", "Podpis spotřebitele (pouze pokud je formulář zasílán v listinné podobě)"].map((l) => (
            <div key={l} className="grid sm:grid-cols-[16rem_1fr] gap-2 items-end">
              <dt>{l}:</dt><dd className="border-b border-foreground/40 h-6" />
            </div>
          ))}
        </dl>
      </section>
    </LegalPage>
  );
}
