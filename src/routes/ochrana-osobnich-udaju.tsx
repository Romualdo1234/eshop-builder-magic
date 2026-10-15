import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta, type LegalBlock } from "@/components/LegalPage";
import { SELLER } from "@/lib/vop";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  head: () => meta("Ochrana osobních údajů", "Zásady zpracování osobních údajů v e-shopu AS-FISH.CZ podle nařízení GDPR."),
  component: () => <LegalPage title="Ochrana osobních údajů" lead="Informace o zpracování osobních údajů podle nařízení (EU) 2016/679 (GDPR) a zákona č. 110/2019 Sb." blocks={BLOCKS} />,
});

const BLOCKS: LegalBlock[] = [
  { h: "1. Správce údajů", p: [`${SELLER.name}, IČO ${SELLER.ico}, ${SELLER.address}. Kontakt: ${SELLER.email}, ${SELLER.phone}.`] },
  { h: "2. Jaké údaje zpracováváme", ul: [
    "identifikační a kontaktní údaje: jméno, příjmení, e-mail, telefon, doručovací a fakturační adresa, u firem IČO a DIČ,",
    "údaje o objednávkách, platbách a reklamacích,",
    "technické údaje a cookies při používání webu.",
  ] },
  { h: "3. Účely a právní základ", ul: [
    "plnění kupní smlouvy a vyřízení objednávky, doručení, reklamace (plnění smlouvy),",
    "vedení účetnictví a daňových dokladů (plnění právní povinnosti),",
    "zasílání obchodních sdělení stávajícím zákazníkům o podobném zboží (oprávněný zájem, odmítnout lze kdykoli) a ostatním pouze na základě souhlasu,",
    "ochrana právních nároků (oprávněný zájem),",
    "analytické a marketingové cookies pouze na základě souhlasu.",
  ] },
  { h: "4. Doba uložení", ul: [
    "údaje o objednávce a smlouvě po dobu promlčecí lhůty, zpravidla 3 roky od ukončení plnění,",
    "daňové doklady po dobu stanovenou zákonem, zpravidla 10 let,",
    "údaje zpracovávané na základě souhlasu do jeho odvolání, nejdéle 3 roky.",
  ] },
  { h: "5. Příjemci údajů", p: [
    "Údaje předáváme jen v nezbytném rozsahu dopravcům (např. PPL), poskytovateli účetních a IT služeb a službě Hodnocení Zboží.cz, která rozesílá dotazníky spokojenosti. Proti zaslání dotazníku lze vznést námitku v košíku nebo v e-mailu s dotazníkem. Údaje nepředáváme mimo EU, pokud to není nezbytné a zabezpečené podle GDPR.",
  ] },
  { h: "6. Vaše práva", ul: [
    "právo na přístup k údajům a na jejich opravu,",
    "právo na výmaz, omezení zpracování a přenositelnost,",
    "právo vznést námitku proti zpracování z oprávněného zájmu a proti přímému marketingu,",
    "právo kdykoli odvolat souhlas (odvolání nemá vliv na zákonnost dřívějšího zpracování),",
    "právo podat stížnost u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, www.uoou.cz.",
  ] },
  { h: "7. Cookies", p: [
    "Nezbytné cookies (košík, základní funkce webu) používáme bez souhlasu. Ostatní cookies, například analytické a marketingové, ukládáme pouze po vašem souhlasu, který můžete kdykoli změnit nebo odvolat v nastavení prohlížeče.",
  ] },
];
