import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta, type LegalBlock } from "@/components/LegalPage";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  head: () => meta("Zásady zpracování osobních údajů", "Zásady zpracování osobních údajů v e-shopu AS-FISH.CZ podle nařízení GDPR."),
  component: () => (
    <LegalPage
      title="Zásady zpracování osobních údajů"
      lead="Poučení o zpracování osobních údajů dle Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR)"
      blocks={BLOCKS}
    />
  ),
});

// Text dodaný majitelem. Neupravovat bez souhlasu majitele.
const BLOCKS: LegalBlock[] = [
  {
    h: "Správce údajů:",
    p: [
      "AS-fish s.r.o.",
      "Ostrava 702 00 Nadražní 923/118",
      "IČ: 23343133",
      "DIČ: CZ23343133",
      "Email: asfishostrava@gmail.com",
      "Tel.: +420 732 181 849",
    ],
  },
  {
    h: "K jakému účelu údaje zpracováváme:",
    p: [
      "Osobní údaje mohou být zpracovány pro účely nabídky zboží anebo služeb a pro účely plnění smlouvy, respektive objednávky. V případě uzavření smlouvy budou osobní údaje dále zpracovávány v rozsahu stanoveném smlouvou a dle zvláštních právních předpisů, zejména v oblasti účetnictví a archivnictví. Právním titulem zpracování osobních údajů je také oprávněný zájem správce kontaktovat vás jakožto subjekt údajů za účelem zaslání aktuálních informací o činnosti správce (newsletter). Dále je pak právním titulem zpracování osobních údajů plnění smlouvy respektive objednávky a samozřejmě také právní předpisy v oblasti účetnictví a archivnictví. V případě, že vyplníte své registrační údaje, budete uvedení v databázi bez časového omezení pro snadný nákup v budoucnosti. V případě, že budete chtít vaši registraci smazat, ozvěte se.",
    ],
  },
  {
    h: "Zdroje údajů:",
    p: ["Osobní údaje jsou získávány od subjektu údajů při jednání o uzavření smlouvy."],
  },
  {
    h: "Kategorie údajů, které budeme zpracovávat:",
    p: [
      "Pro účely plnění smlouvy bude správce zpracovávat jméno a příjmení, adresní, identifikační a kontaktní údaje. U podnikající fyzické osoby rovněž IČO a DIČ, u osoby bez přiděleného DIČ rovněž rodné číslo. Pro účely zasílání aktuálních informací o činnosti správce (newsletter) bude zpracovávána pouze e-mailová adresa.",
    ],
  },
  {
    h: "Komu vaše údaje předáme:",
    p: [
      "Osobní údaje mohou být poskytnuty při plnění smlouvy třetí osobě – subdodavateli, obchodnímu zástupci, účetní společnosti apod. Údaje však mohou být poskytnuty rovněž orgánu veřejné moci na základě požadavku vyplývajícího ze zvláštního právního předpisu, například finančnímu úřadu nebo obchodní inspekci v rámci výkonu kontrolní činnosti.",
      "Údaje subjektů údajů mohou být uloženy v datacentrech společnosti SEZNAM.CZ v rámci poskytování e-mailové služby a ATOMER.COM v rámci hostingu pro webové stránky, případně rovněž i u jiného poskytovatele obdobných služeb. Provoz těchto služeb je v souladu s evropskými standardy ochrany osobních údajů.",
      "Vaše údaje mohou být předány smluvním obchodním zástupcům, kteří pro nás vyřizují objednávky.",
    ],
  },
  {
    h: "Doba, po kterou budou vaše osobní údaje uloženy:",
    p: [
      "Osobní údaje budou uloženy u správce po dobu plnění smlouvy a po skončení smlouvy pak po dobu nezbytně vyžadovanou zvláštními právními předpisy, zejména v oblasti účetnictví a archivnictví. E-mailová adresa pro účely oprávněného zájmu správce - zasílání aktuálních informací o činnosti správce (newsletter) - bude zpracovávána po dobu neomezenou, dokud subjekt údajů nevyjádří svůj nesouhlas se zasíláním nabídek nebo dokud nedojde k uplatnění jeho práv popsaných níže, např. k uplatnění práva na výmaz.",
    ],
  },
  {
    h: "Poučení o vašich právech podle GDPR:",
    p: [
      "Subjekt údajů může požádat správce o přístup k údajům, může žádat jejich opravu nebo výmaz. Subjekt údajů může správce požádat o omezení zpracování osobních údajů, má právo vznést námitku proti zpracování osobních údajů a má právo na přenositelnost údajů. Pokud bude zpracování osobních údajů založeno na souhlasu, má subjekt údajů právo souhlas odvolat kdykoli, aniž je tím dotčena zákonnost zpracování založená na souhlasu uděleném před jeho odvoláním.",
      "Subjekt údajů může podat stížnost k dozorovému úřadu – Úřadu pro ochranu osobních údajů.",
      "Poskytnutí údajů subjektem údajů pro účely smlouvy je smluvním požadavkem. Při neposkytnutí údajů nemůže dojít k jejímu uzavření.",
      "Správce neprovádí automatizované rozhodování a profilování.",
      "Ostrava",
    ],
  },
];
