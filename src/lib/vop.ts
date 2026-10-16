// Obchodní podmínky AS-FISH (znění dodané majitelem). Právní text neupravovat bez souhlasu majitele.
export type VopItem = { n: string; text: string; sub?: { n: string; text: string }[]; list?: string[] };
export type VopSection = { title: string; items: VopItem[] };

export const SELLER = {
  name: "AS-fish s.r.o. (AS-FISH.CZ)",
  legalName: "AS-fish s.r.o.",
  street: "Nadražní 923/118",
  zip: "702 00",
  city: "Ostrava",
  address: "Nadražní 923/118, Ostrava, 702 00",
  ico: "23343133",
  icoDisplay: "233 43 133",
  dic: "CZ23343133",
  email: "asfishostrava@gmail.com",
  phone: "+420 732 181 849",
  account: "2750020836/0600 (Moneta Money Bank, Ostrava)",
  accountNumber: "2750020836/0600",
  bank: "Moneta Money Bank Ostrava",
  iban: "CZ69 0600 0000 0002 7502 0836",
  swift: "AGBACZPP",
  web: "www.as-fish.cz",
};

export const VOP_INTRO =
  "Nákup a prodej zboží prostřednictvím on-line obchodu umístěného na internetové adrese www.as-fish.cz.";

export const VOP: VopSection[] = [
  {
    title: "Úvodní ustanovení",
    items: [
      { n: "1.1", text: "Tyto obchodní podmínky (dále jen „obchodní podmínky“) obchodní společnosti AS-FISH, se sídlem Nadražní 923/118, identifikační číslo 23343133, zapsané v obchodním rejstříku vedeném: Živnostenský list vydaný Úřadem města Ostrava č.j.: 92/637556/1732/BM (dále jen „prodávající“) upravují v souladu s ustanovením § 1751 odst. 1 zákona č. 89/2012 Sb., občanský zákoník (dále jen „občanský zákoník“) vzájemná práva a povinnosti smluvních stran vzniklé v souvislosti nebo na základě kupní smlouvy (dále jen „kupní smlouva“) uzavírané mezi prodávajícím a jinou fyzickou osobou (dále jen „kupující“) prostřednictvím internetového obchodu prodávajícího. Internetový obchod je prodávajícím provozován na webové stránce umístěné na internetové adrese www.as-fish.cz (dále jen „webová stránka“), a to prostřednictvím rozhraní webové stránky (dále jen „webové rozhraní obchodu“)." },
      { n: "1.2", text: "Obchodní podmínky se nevztahují na případy, kdy osoba, která má v úmyslu nakoupit zboží od prodávajícího, je právnickou osobou či osobou, jež jedná při objednávání zboží v rámci své podnikatelské činnosti nebo v rámci svého samostatného výkonu povolání." },
      { n: "1.3", text: "Ustanovení odchylná od obchodních podmínek je možné sjednat v kupní smlouvě. Odchylná ujednání v kupní smlouvě mají přednost před ustanoveními obchodních podmínek." },
      { n: "1.4", text: "Ustanovení obchodních podmínek jsou nedílnou součástí kupní smlouvy. Kupní smlouva a obchodní podmínky jsou vyhotoveny v českém jazyce. Kupní smlouvu lze uzavřít v českém jazyce." },
      { n: "1.5", text: "Znění obchodních podmínek může prodávající měnit či doplňovat. Tímto ustanovením nejsou dotčena práva a povinnosti vzniklá po dobu účinnosti předchozího znění obchodních podmínek." },
    ],
  },
  {
    title: "Uživatelský účet",
    items: [
      { n: "2.1", text: "Na základě registrace kupujícího provedené na webové stránce může kupující přistupovat do svého uživatelského rozhraní. Ze svého uživatelského rozhraní může kupující provádět objednávání zboží (dále jen „uživatelský účet“). V případě, že to webové rozhraní obchodu umožňuje, může kupující provádět objednávání zboží též bez registrace přímo z webového rozhraní obchodu." },
      { n: "2.2", text: "Při registraci na webové stránce a při objednávání zboží je kupující povinen uvádět správně a pravdivě všechny údaje. Údaje uvedené v uživatelském účtu je kupující při jakékoliv jejich změně povinen aktualizovat. Údaje uvedené kupujícím v uživatelském účtu a při objednávání zboží jsou prodávajícím považovány za správné." },
      { n: "2.3", text: "Přístup k uživatelskému účtu je zabezpečen uživatelským jménem a heslem. Kupující je povinen zachovávat mlčenlivost ohledně informací nezbytných k přístupu do jeho uživatelského účtu." },
      { n: "2.4", text: "Kupující není oprávněn umožnit využívání uživatelského účtu třetím osobám." },
      { n: "2.5", text: "Prodávající může zrušit uživatelský účet, a to zejména v případě, kdy kupující svůj uživatelský účet déle než 24 měsíců nevyužívá, či v případě, kdy kupující poruší své povinnosti z kupní smlouvy (včetně obchodních podmínek)." },
      { n: "2.6", text: "Kupující bere na vědomí, že uživatelský účet nemusí být dostupný nepřetržitě, a to zejména s ohledem na nutnou údržbu hardwarového a softwarového vybavení prodávajícího, popř. nutnou údržbu hardwarového a softwarového vybavení třetích osob." },
    ],
  },
  {
    title: "Uzavření kupní smlouvy",
    items: [
      { n: "3.1", text: "Veškerá prezentace zboží umístěná ve webovém rozhraní obchodu je informativního charakteru a prodávající není povinen uzavřít kupní smlouvu ohledně tohoto zboží. Ustanovení § 1732 odst. 2 občanského zákoníku se nepoužije." },
      { n: "3.2", text: "Webové rozhraní obchodu obsahuje informace o zboží, a to včetně uvedení cen jednotlivého zboží a nákladů za navrácení zboží, jestliže toto zboží ze své podstaty nemůže být navráceno obvyklou poštovní cestou. Ceny zboží jsou uvedeny včetně daně z přidané hodnoty a všech souvisejících poplatků. Ceny zboží zůstávají v platnosti po dobu, kdy jsou zobrazovány ve webovém rozhraní obchodu. Tímto ustanovením není omezena možnost prodávajícího uzavřít kupní smlouvu za individuálně sjednaných podmínek." },
      { n: "3.3", text: "Webové rozhraní obchodu obsahuje také informace o nákladech spojených s balením a dodáním zboží. Informace o nákladech spojených s balením a dodáním zboží uvedené ve webovém rozhraní obchodu platí pouze v případech, kdy je zboží doručováno v rámci území České republiky." },
      { n: "3.4", text: "Pro objednání zboží vyplní kupující objednávkový formulář ve webovém rozhraní obchodu. Objednávkový formulář obsahuje zejména informace o:", sub: [
        { n: "3.4.1", text: "objednávaném zboží (objednávané zboží „vloží“ kupující do elektronického nákupního košíku webového rozhraní obchodu)," },
        { n: "3.4.2", text: "způsobu úhrady kupní ceny zboží, údaje o požadovaném způsobu doručení objednávaného zboží a" },
        { n: "3.4.3", text: "informace o nákladech spojených s dodáním zboží (dále společně jen jako „objednávka“)." },
      ] },
      { n: "3.5", text: "Před zasláním objednávky prodávajícímu je kupujícímu umožněno zkontrolovat a měnit údaje, které do objednávky kupující vložil, a to i s ohledem na možnost kupujícího zjišťovat a opravovat chyby vzniklé při zadávání dat do objednávky. Objednávku odešle kupující prodávajícímu kliknutím na tlačítko „Odeslat objednávku“. Údaje uvedené v objednávce jsou prodávajícím považovány za správné. Prodávající neprodleně po obdržení objednávky toto obdržení kupujícímu potvrdí elektronickou poštou, a to na adresu elektronické pošty kupujícího uvedenou v uživatelském účtu či v objednávce (dále jen „elektronická adresa kupujícího“)." },
      { n: "3.6", text: "Prodávající je vždy oprávněn v závislosti na charakteru objednávky (množství zboží, výše kupní ceny, předpokládané náklady na dopravu) požádat kupujícího o dodatečné potvrzení objednávky (například písemně či telefonicky)." },
      { n: "3.7", text: "Smluvní vztah mezi prodávajícím a kupujícím vzniká doručením přijetí objednávky (akceptací), jež je prodávajícím zasláno kupujícímu elektronickou poštou, a to na adresu elektronické pošty kupujícího." },
      { n: "3.8", text: "Kupující souhlasí s použitím komunikačních prostředků na dálku při uzavírání kupní smlouvy. Náklady vzniklé kupujícímu při použití komunikačních prostředků na dálku v souvislosti s uzavřením kupní smlouvy (náklady na internetové připojení, náklady na telefonní hovory) si hradí kupující sám, přičemž tyto náklady se neliší od základní sazby." },
    ],
  },
  {
    title: "Cena zboží a platební podmínky",
    items: [
      { n: "4.1", text: "Cenu zboží a případné náklady spojené s dodáním zboží dle kupní smlouvy může kupující uhradit prodávajícímu následujícími způsoby:", list: [
        "v hotovosti ve výdejním místě prodávajícího na adrese: Nadražní 923/118,",
        "v hotovosti na dobírku v místě určeném kupujícím v objednávce: uvedená adresa odběratele/kupujícího,",
        "bezhotovostně převodem na účet prodávajícího č. 2750020836/0600, vedený u společnosti Moneta Money Bank v Ostravě (dále jen „účet prodávajícího“),",
        "bezhotovostně prostřednictvím platebního systému: QR kód uvedený na faktuře,",
        "bezhotovostně platební kartou: NE,",
        "prostřednictvím úvěru poskytnutého třetí osobou.",
      ] },
      { n: "4.2", text: "Společně s kupní cenou je kupující povinen zaplatit prodávajícímu také náklady spojené s balením a dodáním zboží ve smluvené výši. Není-li uvedeno výslovně jinak, rozumí se dále kupní cenou i náklady spojené s dodáním zboží." },
      { n: "4.3", text: "Prodávající nepožaduje od kupujícího zálohu či jinou obdobnou platbu. Tímto není dotčeno ustanovení čl. 4.6 obchodních podmínek ohledně povinnosti uhradit kupní cenu zboží předem." },
      { n: "4.4", text: "V případě platby v hotovosti či v případě platby na dobírku je kupní cena splatná při převzetí zboží. V případě bezhotovostní platby je kupní cena splatná do 7 dnů od uzavření kupní smlouvy." },
      { n: "4.5", text: "V případě bezhotovostní platby je kupující povinen uhrazovat kupní cenu zboží společně s uvedením variabilního symbolu platby. V případě bezhotovostní platby je závazek kupujícího uhradit kupní cenu splněn okamžikem připsání příslušné částky na účet prodávajícího." },
      { n: "4.6", text: "Prodávající je oprávněn, zejména v případě, že ze strany kupujícího nedojde k dodatečnému potvrzení objednávky (čl. 3.6), požadovat uhrazení celé kupní ceny ještě před odesláním zboží kupujícímu. Ustanovení § 2119 odst. 1 občanského zákoníku se nepoužije." },
      { n: "4.7", text: "Případné slevy z ceny zboží poskytnuté prodávajícím kupujícímu nelze vzájemně kombinovat." },
      { n: "4.8", text: "Je-li to v obchodním styku obvyklé nebo je-li tak stanoveno obecně závaznými právními předpisy, vystaví prodávající ohledně plateb prováděných na základě kupní smlouvy kupujícímu daňový doklad – fakturu. Prodávající je plátcem daně z přidané hodnoty. Daňový doklad – fakturu vystaví prodávající kupujícímu po uhrazení ceny zboží a zašle jej v elektronické podobě na elektronickou adresu kupujícího." },
      { n: "4.9", text: "Je-li u některého zboží (položky) uvedena podezřele nízká cena (nejedná-li se o výprodej apod. – většinou je to u zboží uvedeno), jedná se většinou o chybu při jejím zadávání a prodávající může a má právo tuto položku z objednávky vyjmout – vymazat. Proto prosím, než tuto položku vložíte do košíku a odešlete objednávku, předem se informujte, jestli je cena správná a nejedná-li se o chybně uvedenou cenu u dané položky." },
    ],
  },
  {
    title: "Odstoupení od kupní smlouvy",
    items: [
      { n: "5.1", text: "Kupující bere na vědomí, že dle ustanovení § 1837 občanského zákoníku nelze mimo jiné odstoupit od kupní smlouvy o dodávce zboží, které bylo upraveno podle přání kupujícího nebo pro jeho osobu, od kupní smlouvy o dodávce zboží, které podléhá rychlé zkáze, jakož i zboží, které bylo po dodání nenávratně smíseno s jiným zbožím, od kupní smlouvy o dodávce zboží v uzavřeném obalu, které spotřebitel z obalu vyňal a z hygienických důvodů jej není možné vrátit, a od kupní smlouvy o dodávce zvukové nebo obrazové nahrávky nebo počítačového programu, pokud porušil jejich původní obal." },
      { n: "5.2", text: "Nejedná-li se o případ uvedený v čl. 5.1 obchodních podmínek či o jiný případ, kdy nelze od kupní smlouvy odstoupit, má kupující v souladu s ustanovením § 1829 odst. 1 občanského zákoníku právo od kupní smlouvy odstoupit, a to do čtrnácti (14) dnů od převzetí zboží, přičemž v případě, že předmětem kupní smlouvy je několik druhů zboží nebo dodání několika částí, běží tato lhůta ode dne převzetí poslední dodávky zboží. Odstoupení od kupní smlouvy musí být prodávajícímu odesláno ve lhůtě uvedené v předchozí větě. Pro odstoupení od kupní smlouvy může kupující využít vzorový formulář poskytovaný prodávajícím, jenž tvoří přílohu obchodních podmínek. Odstoupení od kupní smlouvy může kupující zasílat mimo jiné na adresu provozovny prodávajícího či na adresu elektronické pošty prodávajícího." },
      { n: "5.3", text: "V případě odstoupení od kupní smlouvy dle čl. 5.2 obchodních podmínek se kupní smlouva od počátku ruší. Zboží musí být prodávajícímu vráceno do čtrnácti (14) dnů od odstoupení od smlouvy prodávajícímu. Odstoupí-li kupující od kupní smlouvy, nese kupující náklady spojené s navrácením zboží prodávajícímu, a to i v tom případě, kdy zboží nemůže být vráceno pro svou povahu obvyklou poštovní cestou." },
      { n: "5.4", text: "V případě odstoupení od smlouvy dle čl. 5.2 obchodních podmínek vrátí prodávající peněžní prostředky přijaté od kupujícího do čtrnácti (14) dnů od odstoupení od kupní smlouvy kupujícím, a to stejným způsobem, jakým je prodávající od kupujícího přijal. Prodávající je taktéž oprávněn vrátit plnění poskytnuté kupujícím již při vrácení zboží kupujícím či jiným způsobem, pokud s tím kupující bude souhlasit a nevzniknou tím kupujícímu další náklady. Odstoupí-li kupující od kupní smlouvy, prodávající není povinen vrátit přijaté peněžní prostředky kupujícímu dříve, než mu kupující zboží vrátí nebo prokáže, že zboží prodávajícímu odeslal." },
      { n: "5.5", text: "Nárok na úhradu škody vzniklé na zboží je prodávající oprávněn jednostranně započíst proti nároku kupujícího na vrácení kupní ceny." },
      { n: "5.6", text: "V případech, kdy má kupující v souladu s ustanovením § 1829 odst. 1 občanského zákoníku právo od kupní smlouvy odstoupit, je prodávající také oprávněn kdykoliv od kupní smlouvy odstoupit, a to až do doby převzetí zboží kupujícím. V takovém případě vrátí prodávající kupujícímu kupní cenu bez zbytečného odkladu, a to bezhotovostně na účet určený kupujícím." },
      { n: "5.7", text: "Je-li společně se zbožím poskytnut kupujícímu dárek, je darovací smlouva mezi prodávajícím a kupujícím uzavřena s rozvazovací podmínkou, že dojde-li k odstoupení od kupní smlouvy kupujícím, pozbývá darovací smlouva ohledně takového dárku účinnosti a kupující je povinen spolu se zbožím prodávajícímu vrátit i poskytnutý dárek." },
      { n: "5.8", text: "Kupující je povinen vrátit zboží v neporušeném – nepoškozeném stavu včetně neporušeného – nepoškozeného obalu, veškeré dokumentace, visaček, návodů na použití atd.! Pokud bude zboží použito, prodávající má právo odečíst částku 20 až 50 % z původní ceny zboží!" },
    ],
  },
  {
    title: "Přeprava a dodání zboží",
    items: [
      { n: "6.1", text: "V případě, že je způsob dopravy smluven na základě zvláštního požadavku kupujícího, nese kupující riziko a případné dodatečné náklady spojené s tímto způsobem dopravy." },
      { n: "6.2", text: "Je-li prodávající podle kupní smlouvy povinen dodat zboží na místo určené kupujícím v objednávce, je kupující povinen převzít zboží při dodání." },
      { n: "6.3", text: "V případě, že je z důvodů na straně kupujícího nutno zboží doručovat opakovaně nebo jiným způsobem, než bylo uvedeno v objednávce, je kupující povinen uhradit náklady spojené s opakovaným doručováním zboží, resp. náklady spojené s jiným způsobem doručení." },
      { n: "6.4", text: "Při převzetí zboží od přepravce je kupující povinen zkontrolovat neporušenost obalů zboží a v případě jakýchkoliv závad toto neprodleně oznámit přepravci. V případě shledání porušení obalu svědčícího o neoprávněném vniknutí do zásilky nemusí kupující zásilku od přepravce převzít." },
      { n: "6.5", text: "Další práva a povinnosti stran při přepravě zboží mohou upravit zvláštní dodací podmínky prodávajícího, jsou-li prodávajícím vydány." },
    ],
  },
  {
    title: "Práva z vadného plnění",
    items: [
      { n: "7.1", text: "Práva a povinnosti smluvních stran ohledně práv z vadného plnění se řídí příslušnými obecně závaznými právními předpisy (zejména ustanoveními § 1914 až 1925, § 2099 až 2117 a § 2161 až 2174 občanského zákoníku a zákonem č. 634/1992 Sb., o ochraně spotřebitele, ve znění pozdějších předpisů)." },
      { n: "7.2", text: "Prodávající odpovídá kupujícímu, že zboží při převzetí nemá vady. Zejména prodávající odpovídá kupujícímu, že v době, kdy kupující zboží převzal:", sub: [
        { n: "7.2.1", text: "má zboží vlastnosti, které si strany ujednaly, a chybí-li ujednání, má takové vlastnosti, které prodávající nebo výrobce popsal nebo které kupující očekával s ohledem na povahu zboží a na základě reklamy jimi prováděné," },
        { n: "7.2.2", text: "se zboží hodí k účelu, který pro jeho použití prodávající uvádí nebo ke kterému se zboží tohoto druhu obvykle používá," },
        { n: "7.2.3", text: "zboží odpovídá jakostí nebo provedením smluvenému vzorku nebo předloze, byla-li jakost nebo provedení určeno podle smluveného vzorku nebo předlohy," },
        { n: "7.2.4", text: "je zboží v odpovídajícím množství, míře nebo hmotnosti a" },
        { n: "7.2.5", text: "zboží vyhovuje požadavkům právních předpisů." },
      ] },
      { n: "7.3", text: "Ustanovení uvedená v čl. 7.2 obchodních podmínek se nepoužijí u zboží prodávaného za nižší cenu na vadu, pro kterou byla nižší cena ujednána, na opotřebení zboží způsobené jeho obvyklým užíváním, u použitého zboží na vadu odpovídající míře používání nebo opotřebení, kterou zboží mělo při převzetí kupujícím, nebo vyplývá-li to z povahy zboží." },
      { n: "7.4", text: "Projeví-li se vada v průběhu šesti měsíců od převzetí, má se za to, že zboží bylo vadné již při převzetí. Kupující je oprávněn uplatnit právo z vady, která se vyskytne u spotřebního zboží v době dvaceti čtyř měsíců od převzetí." },
      { n: "7.5", text: "Práva z vadného plnění uplatňuje kupující u prodávajícího na adrese jeho provozovny, v níž je přijetí reklamace možné s ohledem na sortiment prodávaného zboží, případně i v sídle nebo místě podnikání." },
      { n: "7.6", text: "Další práva a povinnosti stran související s odpovědností prodávajícího za vady může upravit reklamační řád prodávajícího." },
    ],
  },
  {
    title: "Další práva a povinnosti smluvních stran",
    items: [
      { n: "8.1", text: "Kupující nabývá vlastnictví ke zboží zaplacením celé kupní ceny zboží." },
      { n: "8.2", text: "Prodávající není ve vztahu ke kupujícímu vázán žádnými kodexy chování ve smyslu ustanovení § 1826 odst. 1 písm. e) občanského zákoníku." },
      { n: "8.3", text: "K mimosoudnímu řešení spotřebitelských sporů z kupní smlouvy je příslušná Česká obchodní inspekce, se sídlem Štěpánská 567/15, 120 00 Praha 2, IČ: 000 20 869, internetová adresa: http://www.coi.cz." },
      { n: "8.4", text: "Prodávající je oprávněn k prodeji zboží na základě živnostenského oprávnění. Živnostenskou kontrolu provádí v rámci své působnosti příslušný živnostenský úřad. Dozor nad oblastí ochrany osobních údajů vykonává Úřad pro ochranu osobních údajů. Česká obchodní inspekce vykonává ve vymezeném rozsahu mimo jiné dozor nad dodržováním zákona č. 634/1992 Sb., o ochraně spotřebitele, ve znění pozdějších předpisů." },
      { n: "8.5", text: "Kupující tímto přebírá na sebe nebezpečí změny okolností ve smyslu § 1765 odst. 2 občanského zákoníku." },
    ],
  },
  {
    title: "Ochrana osobních údajů",
    items: [
      { n: "9.1", text: "Ochrana osobních údajů kupujícího, který je fyzickou osobou, je poskytována zákonem č. 101/2000 Sb., o ochraně osobních údajů, ve znění pozdějších předpisů." },
      { n: "9.2", text: "Kupující souhlasí se zpracováním těchto svých osobních údajů: jméno a příjmení, adresa bydliště, identifikační číslo, daňové identifikační číslo, adresa elektronické pošty, telefonní číslo (dále společně vše jen jako „osobní údaje“)." },
      { n: "9.3", text: "Kupující souhlasí se zpracováním osobních údajů prodávajícím, a to pro účely realizace práv a povinností z kupní smlouvy a pro účely vedení uživatelského účtu. Nezvolí-li kupující jinou možnost, souhlasí se zpracováním osobních údajů prodávajícím také pro účely zasílání informací a obchodních sdělení kupujícímu. Souhlas se zpracováním osobních údajů v celém rozsahu dle tohoto článku není podmínkou, která by sama o sobě znemožňovala uzavření kupní smlouvy." },
      { n: "9.4", text: "Kupující bere na vědomí, že je povinen své osobní údaje (při registraci, ve svém uživatelském účtu, při objednávce provedené z webového rozhraní obchodu) uvádět správně a pravdivě a že je povinen bez zbytečného odkladu informovat prodávajícího o změně ve svých osobních údajích." },
      { n: "9.5", text: "Zpracováním osobních údajů kupujícího může prodávající pověřit třetí osobu, jakožto zpracovatele. Kromě osob dopravujících zboží nebudou osobní údaje prodávajícím bez předchozího souhlasu kupujícího předávány třetím osobám." },
      { n: "9.6", text: "Osobní údaje budou zpracovávány po dobu neurčitou. Osobní údaje budou zpracovávány v elektronické podobě automatizovaným způsobem nebo v tištěné podobě neautomatizovaným způsobem." },
      { n: "9.7", text: "Kupující potvrzuje, že poskytnuté osobní údaje jsou přesné a že byl poučen o tom, že se jedná o dobrovolné poskytnutí osobních údajů." },
      { n: "9.8", text: "V případě, že by se kupující domníval, že prodávající nebo zpracovatel (čl. 9.5) provádí zpracování jeho osobních údajů, které je v rozporu s ochranou soukromého a osobního života kupujícího nebo v rozporu se zákonem, zejména jsou-li osobní údaje nepřesné s ohledem na účel jejich zpracování, může:", sub: [
        { n: "9.8.1", text: "požádat prodávajícího nebo zpracovatele o vysvětlení," },
        { n: "9.8.2", text: "požadovat, aby prodávající nebo zpracovatel odstranil takto vzniklý stav." },
      ] },
      { n: "9.9", text: "Požádá-li kupující o informaci o zpracování svých osobních údajů, je mu prodávající povinen tuto informaci předat. Prodávající má právo za poskytnutí informace podle předchozí věty požadovat přiměřenou úhradu nepřevyšující náklady nezbytné na poskytnutí informace." },
    ],
  },
  {
    title: "Zasílání obchodních sdělení a ukládání cookies",
    items: [
      { n: "10.1", text: "Kupující souhlasí se zasíláním informací souvisejících se zbožím, službami nebo podnikem prodávajícího na elektronickou adresu kupujícího a dále souhlasí se zasíláním obchodních sdělení prodávajícím na elektronickou adresu kupujícího." },
      { n: "10.2", text: "Kupující souhlasí s ukládáním tzv. cookies na jeho počítač. V případě, že je nákup na webové stránce možné provést a závazky prodávajícího z kupní smlouvy plnit, aniž by docházelo k ukládání tzv. cookies na počítač kupujícího, může kupující souhlas podle předchozí věty kdykoliv odvolat." },
    ],
  },
  {
    title: "Doručování",
    items: [{ n: "11.1", text: "Kupujícímu může být doručováno na elektronickou adresu kupujícího." }],
  },
  {
    title: "Závěrečná ustanovení",
    items: [
      { n: "12.1", text: "Pokud vztah založený kupní smlouvou obsahuje mezinárodní (zahraniční) prvek, pak strany sjednávají, že vztah se řídí českým právem. Tímto nejsou dotčena práva spotřebitele vyplývající z obecně závazných právních předpisů." },
      { n: "12.2", text: "Je-li některé ustanovení obchodních podmínek neplatné nebo neúčinné, nebo se takovým stane, namísto neplatných ustanovení nastoupí ustanovení, jehož smysl se neplatnému ustanovení co nejvíce přibližuje. Neplatností nebo neúčinností jednoho ustanovení není dotknutá platnost ostatních ustanovení." },
      { n: "12.3", text: "Kupní smlouva včetně obchodních podmínek je archivována prodávajícím v elektronické podobě a není přístupná." },
      { n: "12.4", text: "Přílohu obchodních podmínek tvoří vzorový formulář pro odstoupení od kupní smlouvy." },
      { n: "12.5", text: "Kontaktní údaje prodávajícího: adresa pro doručování: Nadražní 923/118, Ostrava; adresa elektronické pošty: asfishostrava@gmail.com; telefon: +420 732 181 849." },
      { n: "12.6", text: "Na základě zákona č. 480/2004 Sb., o některých službách informační společnosti a o změně některých zákonů, ve znění pozdějších předpisů, Vám můžeme jako našemu zákazníkovi zasílat marketingová sdělení týkající se našich služeb či informací o naší společnosti. Součástí toho mohou být i emailové dotazníky spokojenosti s nákupem u nás, k jejich rozesílce využíváme službu Hodnocení Zboží.cz, které předáme Váš email a informace o konkrétním nákupu. Proti zasílání emailových dotazníků prostřednictvím služby Zboží.cz můžete kdykoliv vyjádřit námitku, buď přímo v nákupním košíku nebo kliknutím na odkaz v doručeném emailu s dotazníkem." },
    ],
  },
];
