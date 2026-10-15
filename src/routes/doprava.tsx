import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta, type LegalBlock } from "@/components/LegalPage";

export const Route = createFileRoute("/doprava")({
  head: () => meta("Doprava", "Ceník dopravy PPL po České republice, na Slovensko a do Rakouska, Německa a Polska."),
  component: () => <LegalPage title="Doprava" blocks={BLOCKS} />,
});

// Text dodaný majitelem. Neupravovat bez souhlasu majitele.
const BLOCKS: LegalBlock[] = [
  {
    h: "Cena dopravy PPL po území ČR - balík do 30kg a délky jedné strany 120cm !!! :",
    ul: [
      "PPL Dobírkový balík 1ks nákup zboží do 5000 Kč za 160 Kč",
      "PPL Dobírkový balík 1ks nákup zboží nad 5001 Kč za 50 Kč",
      "PPL Bezdobírkový balík (převodem) 1ks nákup zboží do 5000 Kč za 110 Kč",
      "PPL Bezdobírkový balík (převodem) 1ks nákup zboží nad 5001 Kč za 0 Kč *",
    ],
    p: [
      "* Cena 0 Kč je pouze v případě, že se zboží vleze do 1 balíku !! V případě vícekusové zásilky vám bude za každý 2,3,4.. balík účtovaná cena 100 Kč",
      "Pokud je délka balíku nad 120cm, nebo váha přesáhne 30kg, bude vám navíc účtován příplatek dopravného ve výši +150 Kč k vašemu dopravnému v objednávce .",
      "V případě, že budete mít 2 a více balíku z důvodu vyšší hmotnosti, nebo zboží nepůjde zabalit do 1 balíku, bude vám dopravné za každý balík účtován zvlášť a doběrečné pouze 1 x. Toto platí pro balíky rozesílané po ČR.",
      "UPOZORNĚNÍ - u zboží, kde je uvedeno \"Přeprava zdarma\", toto platí pouze pro zásilky po České republice !!!",
    ],
  },
  {
    h: "Cena dopravy PPL na Slovensko - balík do 30kg:",
    ul: [
      "Dobírkový balík 1ks nákup zboží do 5000 Kč za 300 Kč",
      "Dobírkový balík 1ks nákup zboží nad 5001 Kč za 200 Kč",
      "Bezdobírkový balík (převodem) 1ks nákup zboží do 6000 Kč za 260 Kč",
      "Bezdobírkový balík (převodem) 1ks nákup zboží nad 6001 Kč za 160 Kč",
    ],
    p: [
      "V případě, že budete mít 2 a více balíku z důvodu vyšší hmotnosti, nebo zboží nepůjde zabalit do 1 balíku, bude vám dopravné za každý balík účtováno zvlášť a doběrečné pouze 1 x. Toto platí pro balíky rozesílané na Slovensku",
    ],
  },
  {
    h: "Transport Österreich / Zahlung per Banküberweisung",
    ul: [
      "bis 2kg - Preis 500 CZK",
      "bis 5kg - Preis 700 CZK",
      "bis 10kg - Preis 800 CZK",
      "bis 20kg - Preis 1000 CZK",
      "bis 30kg - Preis 1200 CZK",
    ],
  },
  {
    h: "Transport Deutschland / Zahlung per Banküberweisung",
    ul: [
      "bis 2kg - Preis 300 CZK",
      "bis 5kg - Preis 350 CZK",
      "bis 10kg - Preis 400 CZK",
      "bis 20 kg - Preis 500 CZK",
      "bis 30 kg - Preis 600 CZK",
    ],
  },
  {
    h: "Transport Polska / płatność przelewem",
    ul: [
      "do 2kg - cena 300 CZK",
      "do 5kg - cena 350 CZK",
      "do 10kg - cena 400 CZK",
      "do 20kg - cena 500 CZK",
      "do 30 kg - cena 600 CZK",
    ],
  },
];
