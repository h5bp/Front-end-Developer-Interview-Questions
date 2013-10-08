# Interjú kérdések front-end fejlesztőknek

@version 2.0.0

Ebben a gyűjteményben összeválogattuk a legjobb front-end fejlesztő interjú kérdéseket. Ellenben nem tanácsoljuk az összes kérdés egyidejű feltevését, hiszen ez órákat venne igénybe de egy válogatott kérdéssorral megkönnyíthetjük a potenciális jelentkezők szelektálását.

[Rebecca Murphey](http://rmurphey.com/), [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) cikke is hasznos alapja lehet egy interjúnak.

**Megjegyzés:** Ne feledd, hogy a kérdések többsége érdekes beszélgetésé alakulhat, ami többet elárulhat az emberről mintha csak egyszerű válaszokat adna.

A magyar fordítást [Czeglédy Tibor](http://github.com/microtroll) készítette az eredeti angol szöveg alapján.

#### Eredeti közreműködők

A kérdések többsége egy [oksoclap](http://oksoclap.com/) beszélgetés alapján készült, amit [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) kezdeményezett az alábbi közreműködőkkel:

* [@bentruyman](http://twitter.com/bentruyman) - [http://bentruyman.com](http://bentruyman.com)
* [@cowboy](http://twitter.com/cowboy) - [http://benalman.com](http://benalman.com)
* [@ajpiano](http://ajpiano) - [http://ajpiano.com](http://ajpiano.com)
* [@SlexAxton](http://twitter.com/slexaxton) - [http://alexsexton.com](http://alexsexton.com)
* [@boazsender](http://twitter.com/boazsender) - [http://boazsender.com](http://boazsender.com)
* [@miketaylr](http://twitter.com/miketaylr) - [http://miketaylr.com](http://miketaylr.com)
* [@vladikoff](http://twitter.com/vladikoff) - [http://vladfilippov.com](http://vladfilippov.com)
* [@gf3](http://twitter.com/gf3) - [http://gf3.ca](http://gf3.ca)
* [@jon_neal](http://twitter.com/jon_neal) - [http://twitter.com/jon_neal](http://twitter.com/jon_neal)
* [@wookiehangover](http://twitter.com/wookiehangover) - [http://wookiehangover.com](http://wookiehangover.com)
* [@darcy_clarke](http://twitter.com/darcy) - [http://darcyclarke.me](http://darcyclarke.me)
* [@iansym](http://twitter.com)

### Általános kérdések:

* Milyen verziókövetőket használtál már? (Git, SVN, stb.)
* Mi a számodra legelőnyösebb fejlesztői környezet? (operációs rendszer, szerkesztő, böngésző, fejlesztői eszközök, stb.)
* Részletezd hogyan készítesz el egy weboldalt.
* Mi a különbség a fokozatos javítása és a között, hogy a weboldalt folyamatosan optimalizálod régebbi és egyszerűbb felületekre is?
	* Bónusz pont a funkció működésének tesztelése adott eszközön.
* Magyarázd el mit jelent a "szemantikus HTML".
* Milyen böngészőt és milyen eszközöket használsz a fejlesztéshez?
* Hogyan optimalizálod egy weboldal forrásait/eszközeit?
	* Keress több megoldást, amik tartalmazzák az alábbiakat:
		* Fájl egyesítés
		* Fájl minimalizálás
		* CDN hoszting
		* Cachelés
		* stb.
* Miert jobb az eszközöket egyszerre több domainnek is kiszolgálni?
	* Hány lekérdezés futhat a böngészőben egyidejűleg az adott domain irányába?
* Nevezz meg 3 lehetőséget az oldalletöltés időtartámanak csökkentésére. (előtöltött vagy aktiális töltési idő)
* Ha beszállsz egy projektbe, és ők tabot használnak te pedig szókozt a kód rendezésénél, mit teszel?
	* Tanácsolod, hogy használjatok valami technológiát, pl. [EditorConfig](http://editorconfig.org)
	* Elfogadod (vagy tartózkodsz)
	* `issue :retab! command`
* Készíts egy egyszerű slideshow oldalt.
	* Bónusz pont ha nem szükséges hozzá JavaScript.
* Milyen eszközökkel teszteled a kódod teljesítményét?
	* [JSPerf](http://jsperf.com/)
	* [Dromaeo](http://dromaeo.com/)
	* stb.
* Ha idén elsajátíthatnál egy technológiát, mi lenne az?
* Ismertesd a sztandardok fontosságát.
* Mi a FOUC? Hogyan kerulöd el a FOUC-et?

### HTML specifikus kérdések:

* Mi a `doctype` feladata és hány fajtáját tudod megnevezni?
* Mi a különbség a `standard` és a `quirks` módok között?
* Nevezd meg az XHTML oldalak korlátait?
	* Van bármi akadálya annak, hogy egy oldalt `application/xhtml+xml`-ként szolgáljon ki?
* Hogyan készítesz fel egy weboldalt többnyelvű tartalom megjelenítésére?
	* Mikre kell figyelni egy többnyelvű oldal tervezése és fejlesztése során?
* Használhatsz XHTML szintaxist HTML5-be?
* Hogyan használsz XML-t HTML5-ben?
* Mire valók a `data-` attribútumok?
* Mik tartoznak bele a HTML4 tartalmi modelljébe és miként különbözik ez a HTML5-ben?
* Tegyük fel, hogy a HTML5 egy nyílt webes felület. Mik az építőelemei?
* Mi a különbség a `cookie` a `sessionStorage` és a `localStorage` között.

### JS specifikus kérdések:

* Mit jelent az `event delegation`?
* Magyarázd el hogyan működik a `this` a JavaScript-ben.
* Hogyan működik a protokol öröklés (prototypal inheritance)?
* Hogyan teszteled a JavaScript kódodat?
* AMD vs. CommonJS?
* Melyik JavaScript library-ket használtad már?
* Próbáltad már értelmezni az általad használt library/keretrendszer forrását?
* Mi a "hashtable"?
* Mit jelent az `undefined` és az `undeclared` változó?
* Mi a lezárás, milyen formáit ismered és hogyan használod azokat?
	* Kedvenc mintád? "argyle" (kizárólag IIFE-re alkalmazható)
* Hogyan néz ki egy anoním funkció?
* Magyarázd el a JavaScript modul sablont és, hogy mikor használjuk.
	* Bónusz pont, ha említi a tiszta namespace-ket.
	* Mi történik akkor, ha a modul namespace mentes?
* Miként rendszerezed a kódodat? (module pattern, classical inheritance)
* Mi a különbség hoszt objektum és natív objektum között?
* Mi a különbség az következő kódok között:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Mi a különbség a `.call` és az `.apply` között?
* Magyarázd el mire jó a `Function.prototype.bind`?
* Mikor szoktad optimalizálni a kódodat?
* Magyarázd el hogyan működik az öröklődés szabálya a JavaScript-ben?
* Mikor használod a `document.write()` funkciót?
	* A generált hírdetés még mindig használják annak ellenére, hogy nem ajánlatos.
* Mi a különbség a "feature" észlelés (detection), "feature" következtetés (inference) és az UA sztring használata között?
* Magyarázd meg az AJAX működését a lehető legrészletesebben.
* Magyarázd el, hogyan működik a JSONP (és miért nem AJAX valójában).
* Használtál már JavaScript template rendszert?
	* Ha igen mit? (Mustache.js, Handlebars, stb.)
* Mit jelent a "hoisting"?
* Mit jelent az `event bubbling`?
* Mi a különbség az "attribute" és a "property" között?
* Miért nem jó ötlet kiegészíteni a beépített JavaScript objektumokat?
* Miért jó ötlet kiegészíteni a bepített funkciókat?
* Mi a különbség a "document load" és a "document ready" között?
* Mi a különbség `==` és `===` között?
* Hogyan olvasol be egy paramétert a böngésző ablak URL-ből?
* Mit jelent a "same-origin" szabály a JavaScript-bet?
* Ismertesd a JavaScript öröklési mintáját.
* Javítsd ki az alábbi példát:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* írj le egy memorizáló stratégiát (ismétlődő kalkulációk nélkül) JavaScriptben.
* Mit nevezünk "Ternary" kifejezésnek? Mire utal a "Ternary" szó?
* Mennyi attribútumot lehet átadni egy funkciónak?
* Mi a `"use strict";`, mik az előnyei és a hátrányai?

### JS példakódok:

```javascript
~~3.14
```
Kérdés: Mi a kimente a fenti példának?
**Válasz: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Kérdés: Milyen értékkel tér vissza a fenti állítás?
**Válasz: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Kérdés: Mi az értéke a `window.foo`-nak?
**Válasz: "bar"** de csak ha a `window.foo` hamis egyébként megtartja az értékét.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Kérdés: Mi a fenti két alert-nek a kimenete?
**Válasz: "Hello World" és ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Kérdés: Mi a `foo.length` értéke?
**Válasz: 2**

```javascript
var foo = {};
foo.bar = 'hello';
```
Kérdés: Mi a `foo.length` értéke?
**Válasz: undefined**

### jQuery specifikus kérdések:

* Mit jelent a `chaining`?
* Mit jelent a `deferreds`?
* Milyen jQuery specifikus optimalizálást ismersz?
* Mire használhatjuk az `.end()` funkciót?
* Hogyan neveznél el egy kapcsolt esemény kezelőt (bound event handler) és miért?
* Nevezz meg 4 különböző értéket, ami átadható egy jQuery folyamatnak.
	* Szelektor (sztring), HTML (sztring), Callback (funkció), HTMLElement, objektum, tömb, elemb tömb, jQuery objektum, stb.
* Mit jelent az effektek (vagy fx) sorba állítas?
* Mi a különbség `.get()`, `[]`, és `.eq()` között?
* Mi a különbség `.bind()`, `.live()`, és `.delegate()` között?
* Mi a különbség `$` és `$.fn` között? Vagy mit jelent a `$.fn`?
* Optimalizáld a alábbi szelektort:
```javascript
$(".foo div#bar:eq(0)")
```
* Mi a különbség `delegate()` és `live()` között?

### CSS specifikus kérdések:

* Mire való a "reset" CSS fájl és mennyire hasznos?
* Hogyan működik a CSS `float`?
* Milyen `clear` technikákat ismersz és melyik milyen környezetben a megfelelő?
* Magyarázd el a CSS sprites működését és, hogy hogyan alkalmazod egy weboldalon?
* Mi a kedvenc képpel helyettesítő (image replacement) technikád és mit használsz mire?
* CSS hackek, böngésző függő CSS fájlok, vagy.... valami más?
* Hogyan jelenítesz meg oldalakat korlátozott böngészőkben?
	* Milyen technológiákat/folyamatokat használsz?
* Milyen módon tudsz tartalmakat vizuálisan elrejteni (és csak screen olvasók számára elérhetővé tenni)?
* Használtál már rács rendszert (grid system)? Ha igen nevezz meg párat. ([960 Grid System](http://960.gs/), [Foundation](http://foundation.zurb.com/), [Twitter Bootstrap](http://twitter.github.io/bootstrap/))
* Használtál már "media query"-ket vagy mobil specifikus layoutokat/CSS-eket?
* Jártas vagy az SVG használatában?
* Hogyan alakítasz egy weboldalt nyomtatóbaráttá?
* Mik a legjobb "ötletek" a hatékony CSS kód írásához?
* Használsz CSS előfeldolgozó technilógiát? ([SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Stylus](http://learnboost.github.io/stylus/), [LESS](http://lesscss.org/))
	* Ha igen mit szeretsz és mit nem szeretsz bennük?
* Hogyan valósítasz meg egy olyan dizájn kompozíciót, ami nem a szabványos betűtípusokat tartalmazza?
	* Webfontok ([Google Webfonts](https://www.google.com/fonts/), [Typekit](https://typekit.com/), stb.)
* Miként határozza meg a böngésző a megfelelő CSS szelektort?

### Választható és vicces kérdések:

* Mi a legjobb dolog, amit eddig kódoltál? Mire vagy a legbüszkébb?
* Ismered a HTML5 banda jelét?
* Vagy, vagy voltál már hajón?
* Mi a kedvenced az általad használt fejlesztői eszközökben?
* Van bármilyen állatos projekted? Ha igen milyen?
* Ismertesd a "cornify" jelentőségét. [Cornify](http://www.cornify.com/)
* Egy darab papirra írd le az A B C D E betűket függőlegesen. Most rendezzd át oket csökkenő sorrendbe egyetlen sor kóddal.
	* Várj és figyelj, megfordítják-e a papírt, hogy fejjel lefelé legyen.
* Kalóz vagy Ninja?
	* Bónusz pont, ha mindkettő és jó indokot adott rá (+2 ha zombi majom kalóz ninják)
* Ha nem fejlesztesz, mi mást szoktál csinálni?
* Hol lehet vajon Carmen Sandiego?
	* Megoldás: nincs rá helyes válasz
* Mit szeretsz a legjobban az Internet Explorerben?
* Fejezd be a mondatot: Brendan Eich és Doug Crockford a JavaScript __________.
* jQuery: egy jó library vagy a legjobb library? Vitassátok meg.
* [W3School](http://www.w3schools.com/) vagy [W3Fools](http://w3fools.com/)
