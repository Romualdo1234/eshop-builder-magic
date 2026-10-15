# AS-FISH — roadmapa rozvoje e-shopu

Vychází ze strategického auditu as-fish.cz. Rozpočty, cílové hodnoty KPI a časové horizonty jsou **návrhy z auditu**, ne ověřené ceny ani garantované výsledky. Dnešní web je ukázkové MVP (katalog, košík, pokladna bez ostrých plateb), ne ostrý prodejní systém.

## Zásady (platí pro každou fázi)

- **Držet brand.** Originální modré logo prodejny (modrá cedule, kapr v kruhu, bílý kurzívní nápis „Rybářské potřeby“), modrá jako hlavní barva a tón „od rybářů pro rybáře“. Název AS-FISH a doména as-fish.cz se nemění. Logo a favicon jsou v `public/`.
- **Doprava zdarma se nepoužívá.** Doprava je placená dle způsobu doručení (Z-Box 69 Kč, Balíkovna 79 Kč, PPL 119 Kč). Zdarma je jen osobní odběr na prodejně. Pokud se to později změní, vrací se jako samostatné rozhodnutí podle marží.
- **Žádné slib bez pokrytí.** Skladovost, otevírací doba, adresa a podmínky dopravy se zveřejňují až po ověření majitelem.
- **Prioritní pořadí:** skutečná data → spolehlivý nákup → poradenství a konfigurátor → zákaznické služby → vlastní výroba.

## Stav dnes

Hotovo:
- [x] Web na Vercelu (TanStack Start), responzivní, modrý design podle loga prodejny.
- [x] Úvodní stránka (hero, rozcestník „Kam dnes míříte?“, 6 doporučených produktů, prodejna, recenze).
- [x] Katalog s filtry, košík, pokladna (ukázková).
- [x] Detail produktu ve třech vrstvách: verdikt nad ohybem, text „Jak to funguje u vody“, tabulka parametrů a časté otázky (zatím plně vyplněný jen naviják Big Pit 5000; ostatní produkty mají základní parametry). Přidána strukturovaná data Product.
- [x] Doprava: osobní odběr, Z-Box, Balíkovna, PPL; platby: převod, dobírka (karta se zatím nenabízí – shodně s obchodními podmínkami).

Chybí pro ostrý provoz:
- [x] Katalog rozšířen na ukázkových 45 produktů ve všech kategoriích z auditu, bez fotek (značková dlaždice).
- [ ] Skutečný katalog, ceny, fotografie a skladové stavy (ukázková data nahradit skutečným feedem).
- [ ] Skutečné platby, objednávky v databázi, potvrzovací e-maily.
- [x] Obchodní podmínky, reklamační řád, odstoupení od smlouvy a zásady ochrany osobních údajů (texty ke kontrole právníkem).
- [ ] Cookie lišta se souhlasem.
- [ ] Ověřené recenze, ověřená adresa, otevírací doba a telefon.

## Klíčové rozhodnutí: platforma

Audit doporučuje **nestavět vlastní e-shop od nuly, ale použít Upgates** (české platby, dopravci, feedy, účetnictví v ceně) a vlastní vzhled udělat v jejich Designeru nebo jako front nad jejich API. Odhad z auditu: zhruba 65 000 Kč a 3 250 Kč měsíčně proti 480 000 Kč a 15 000 Kč měsíčně u vlastního řešení.

Možnosti, o kterých se rozhodne **před fází 2**:
1. **Upgates + tento web jako designový prototyp** (doporučení auditu). Vzhled, texty a struktura se přenesou do šablony.
2. **Upgates jako backend + tento web jako vlastní front** přes REST API. Víc práce, plná kontrola nad vzhledem.
3. **Vlastní backend** (databáze, platby, doprava na míru). Jen pokud to majitel vědomě chce, audit ho nedoporučuje.

## Fáze 1 — dny 0–30: data a čistka

Cíl: mít ověřená data, na kterých jde postavit ostrý obchod.
- [ ] Paretova analýza sortimentu (80/20), vyřadit neprodejné položky a prázdné kategorie.
- [ ] Ověřit sklad na prodejně, ceny, značky (Mikbaits, Nikl, Jet Fish, LK Baits, Mivardi, CC Moore).
- [ ] Potvrdit adresu, otevírací dobu, telefon a skutečné ceny dopravců.
- [ ] Rozhodnout o platformě (viz výše).
- [ ] Připravit mapu přesměrování starých URL na nové (301).
- [ ] Odstranit zbytky starého webu (rozbité odkazy, „VÝPRODEJ !!!“ v názvech, příplatek za nadrozměr).
- [ ] Nasnímat vlastní fotografie prodejny, skladu a top produktů.

Výstup: čistý produktový feed a seznam přesměrování. Odhad z auditu: 25 000–45 000 Kč.

## Fáze 2 — dny 30–90: ostrý obchod

Cíl: bezpečně dokončená a zaplacená objednávka od výběru až po doručení.
- [ ] Napojit objednávky, platby (karta, Apple Pay, Google Pay, převod), dopravce (Zásilkovna, Balíkovna, PPL), potvrzovací e-maily.
- [ ] Jednostránková pokladna, výběr varianty bez poznámek v objednávce.
- [ ] Nová plochá struktura kategorií: Kaprařina, Feeder, Přívlač, Sumcařina, Bait Lab, Podle situace, Výprodej (značka a parametry jako filtr, ne složka).
- [ ] Obsah pro top 100 produktů: „Pro koho je / není“, doporučené použití, kompatibilita.
- [ ] Právní dokumenty, cookies, analytika (GA4, Sklik, Meta).
- [ ] SEO: ploché URL, title a meta popisy, strukturovaná data Product, Offer, LocalBusiness.
- [ ] Měkké spuštění pro stávající zákazníky a test celé cesty nákupu.

Výstup: první skutečné objednávky. KPI z auditu: konverze +35 %, opuštění košíku −20 %. Odhad: 60 000–110 000 Kč.

## Fáze 3 — měsíce 3–6: výprava a místní odběr

Cíl: rychlejší sestavení výbavy a výhoda prodejny v Ostravě.
- [ ] Revírní konfigurátor „Řekni nám, kam jdeš na ryby“ (ryba a technika → voda a sezóna → čas a rozpočet → sestava, s tlačítkem „Už mám doma“).
- [ ] Tematické balíčky (např. Říční proud Odra, Studená voda, Víkendový restart).
- [ ] Automatické e-maily: opuštěný košík, doplnění spotřeby, zboží opět skladem.
- [ ] Nonstop výdejní box u prodejny, až po potvrzení reálného provozu a nákladů.
- [ ] Chytřejší vyhledávání (překlepy, hovorové výrazy, synonyma).

KPI z auditu: 15 % objednávek přes konfigurátor. Odhad: 45 000–85 000 Kč.

## Fáze 4 — měsíce 6–12: opakované nákupy

Cíl: zákazníci se vracejí a doplňují výbavu.
- [ ] Fishing Garage (profil vybavení, hlídání kompatibility, předvyplněný košík na doplnění).
- [ ] AS-Match garance kompatibility (výměna a doprava na náš účet, jen po definování pravidel).
- [ ] AS Klub se členskými výhodami místo čistě bodového systému.
- [ ] Odborný rádce nad skladem (AI jen z produktů, které opravdu máme).
- [ ] Videa z revírů a obsah (taktika, montáže, testy).

KPI z auditu: opakované nákupy +25 %. Odhad: 35 000–60 000 Kč.

## Fáze 5 — měsíce 12–24: vlastní produkty

Cíl: ověřená nabídka s vlastní marží.
- [ ] Nejdřív zhodnotit ekonomiku, provoz a legislativu Bait Labu (čerstvé boilies, rolování na zakázku).
- [ ] Vlastní terminální bižuterie s vysokou marží.

KPI z auditu: podíl vlastních produktů > 30 % obratu. Odhad: 80 000–150 000 Kč.

## Sledované metriky

Měsíčně: obrat a marže, průměrná objednávka (audit odhaduje cíl z 1 100 na 1 850 Kč), konverzní poměr, opuštění košíku, počet hledání bez výsledku, čas od objednání do expedice (cíl pod 4 hodiny v pracovní dny), vratky a reklamace, spokojenost na Zboží.cz a Heurece.

## Otevřené otázky pro majitele

1. Která platforma (Upgates, Upgates + vlastní front, vlastní backend)?
2. Skutečné ceny dopravců a zda se někdy vrátí hranice dopravy zdarma.
3. Jak se bude udržovat sklad (ručně, napojení kasy, import od dodavatelů)?
4. Má smysl nonstop box a kdo ho bude obsluhovat?
5. Které značky a produkty tvoří Paretovo jádro sortimentu?
