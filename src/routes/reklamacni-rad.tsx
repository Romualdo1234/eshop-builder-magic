import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, meta, type LegalBlock } from "@/components/LegalPage";
import { SELLER } from "@/lib/vop";

export const Route = createFileRoute("/reklamacni-rad")({
  head: () => meta("Reklamační řád", "Jak uplatnit reklamaci zboží zakoupeného v AS-FISH: lhůty, místo, postup vyřízení."),
  component: () => <LegalPage title="Reklamační řád" lead="Doplňuje obchodní podmínky (čl. 7). Řídí se občanským zákoníkem a zákonem č. 634/1992 Sb., o ochraně spotřebitele." blocks={BLOCKS} />,
});

const BLOCKS: LegalBlock[] = [
  { h: "1. Odpovědnost za vady", p: [
    "Prodávající odpovídá kupujícímu, že zboží při převzetí nemá vady. Vada, která se projeví do šesti měsíců od převzetí, se považuje za vadu existující již při převzetí.",
    "Zákonná záruční doba u spotřebního zboží je 24 měsíců od převzetí. Delší záruka výrobce, je-li poskytnuta, je uvedena v záručním listu nebo u zboží.",
  ] },
  { h: "2. Na co se záruka nevztahuje", ul: [
    "na opotřebení zboží způsobené jeho obvyklým užíváním,",
    "na vady, pro které byla ujednána nižší cena,",
    "u použitého zboží na vadu odpovídající míře dosavadního používání,",
    "na poškození způsobené nesprávným používáním, neodbornou úpravou nebo mechanickým poškozením kupujícím.",
  ] },
  { h: "3. Kde reklamaci uplatnit", p: [
    `Reklamaci lze uplatnit osobně v prodejně: ${SELLER.address}, nebo zásilkou na stejnou adresu. Dotazy k reklamaci: ${SELLER.email}, ${SELLER.phone}.`,
    "Při zasílání zboží doporučujeme pečlivé zabalení a přiložení kopie dokladu o koupi a popisu vady. Zásilky na dobírku nepřijímáme.",
  ] },
  { h: "4. Postup vyřízení", ul: [
    "Prodávající vydá kupujícímu potvrzení o tom, kdy reklamaci uplatnil, co je jejím obsahem a jaký způsob vyřízení kupující požaduje.",
    "Reklamaci včetně odstranění vady vyřídí prodávající bez zbytečného odkladu, nejpozději do 30 dnů od uplatnění, pokud se strany nedohodnou na delší lhůtě.",
    "O vyřízení reklamace prodávající kupujícího informuje a vydá mu písemné potvrzení o datu a způsobu vyřízení, případně o zamítnutí s odůvodněním.",
    "Při zamítnutí reklamace může kupující požádat o odborné posouzení vady. Náklady posouzení a s tím související náklady nese prodávající, pokud je reklamace oprávněná.",
  ] },
  { h: "5. Práva kupujícího", p: [
    "Je-li vada podstatným porušením smlouvy, má kupující právo na odstranění vady (oprava nebo dodání nové věci), na přiměřenou slevu nebo na odstoupení od smlouvy. Není-li vada podstatným porušením smlouvy, má kupující právo na odstranění vady nebo na přiměřenou slevu.",
    "Opakuje-li se vada po opravě, projeví-li se vada vícekrát nebo je-li větší počet vad, má kupující právo na slevu nebo na odstoupení od smlouvy.",
  ] },
  { h: "6. Mimosoudní řešení sporů", p: [
    "Nedojde-li ke shodě, může se spotřebitel obrátit na Českou obchodní inspekci, Štěpánská 567/15, 120 00 Praha 2, www.coi.cz (subjekt mimosoudního řešení spotřebitelských sporů).",
  ] },
];
