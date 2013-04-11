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
* Miert jobb az eszközöket több domainnek kiszolgálni egyszerre?
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
* Explain the importance of standards and standards bodies.
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
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Mi a különbség a `cookie` a `sessionStorage` és a `localStorage` között.

### JS specifikus kérdések:

* Mit jelent az `event delegation`?
* Magyarázd el hogyan működik a `this` a JavaScript-ben.
* Explain how prototypal inheritance works.
* Hogyan teszteled a JavaScript kódodat?
* AMD vs. CommonJS?
* Melyik JavaScript library-ket használtad már?
* Próbáltad már értelmezni az általad használt library/keretrendszer forrását?
* Mi a "hashtable"?
* Mit jelent az `undefined` és az `undeclared` változó?
* What is a closure, and how/why would you use one?
	* Your favorite pattern used to create them? argyle (Only applicable to IIFEs)
* Hogyan néz ki egy anoním funkció?
* Explain the "JavaScript module pattern" and when you'd use it.
	* Bonus points for mentioning clean namespacing.
	* What if your modules are namespace-less?
* Miként rendszerezed a kódodat? (module pattern, classical inheritance)
* What's the difference between host objects and native objects?
* Mi a különbség az következő kódok között:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Mi a különbség a `.call` és az `.apply` között?
* Magyarázd el mire jó a `Function.prototype.bind`?
* Mikor szoktad optimalizálni a kódodat?
* Magyarázd el hogyan működik az öröklődés szabálya a JavaScript-ben?
* Mikor használod a `document.write()` funkciót?
	* Most generated ads still utilize `document.write()` although its use is frowned upon
* What's the difference between feature detection, feature inference, and using the UA string.
* Magyarázd meg az AJAX működését a lehető legrészletesebben.
* Magyarázd el, hogyan működik a JSONP (és miért nem AJAX valójában)
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
* Explain the same-origin policy with regards to JavaScript.
* Ismertesd a JavaScript öröklési mintáját.
* Javítsd ki az alábbi példát:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Describe a strategy for memorization (avoiding calculation repetition) in JavaScript.
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
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
* How, and why, would you namespace a bound event handler?
* Nevezz meg 4 különböző értéket, ami átadható egy jQuery folyamatnak.
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Mit jelent az effektek (var fx) sorba állítas?
* Mi a különbség `.get()`, `[]`, és `.eq()` között? 
* Mi a különbség `.bind()`, `.live()`, és `.delegate()` között? 
* Mi a különbség `$` és `$.fn` között? Vagy mit jelent a `$.fn`.
* Optimalizáld a alábbi selector-t: 
```javascript
$(".foo div#bar:eq(0)")
```
* Mi a különbség `delegate()` és `live()` között? 

### CSS specifikus kérdések:

* Mire való a "reset" CSS fájl és mennyire hasznos?
* Hogyan működik a CSS `float`?
* What are the various clearing techniques and which is appropriate for what context? 
* Magyarázd el a CSS sprites működését és, hogy hogyan alkalmazod egy weboldalon?
* What are your favourite image replacement techniques and which do you use when? 
* CSS property hacks, conditionally included .css files, or... something else? 
* How do you serve your pages for feature-constrained browsers? 
	* What techniques/processes do you use?  
* Milyen módon lehet tartalmakat vizuálisan elrejteni? (és csak screen olvasók számára elérhetővé tenni)
* Használtál már grid rendszer? Ha igen nevezz meg párat. ([960 Grid System](http://960.gs/), [Foundation](http://foundation.zurb.com/), [Twitter Bootstrap](http://twitter.github.io/bootstrap/))
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Jártas vay az SVG használatában?
* Hogyan alakítasz egy weboldalt nyomtatóbaráttá?
* What are some of the "gotchas" for writing efficient CSS? 
* Használsz CSS előfeldolgozó technilógiát? ([SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Stylus](http://learnboost.github.io/stylus/), [LESS](http://lesscss.org/))
	* Ha igen mit szeretsz és mit nem szeretsz bennuk?
* Hogyan valósítasz meg egy olyan dizájn kompozíciót, ami nem a szabványos betűtípusokat tartalmazza?
	* Webfontok ([Google Webfonts](https://www.google.com/fonts/), [Typekit](https://typekit.com/), stb.)
* Miként határozza meg a böngésző a megfelelő CSS selector-t?

### Választható és vicces kérdések:

* Mi a legjobb dolog, amit eddig kódoltál? Mire vagy a legbüszkébb?
* Ismered a HTML5 banda jelét?
* Are you now, or have you ever been, on a boat.
* Mi a kedvenced az általad használt fejlesztői eszközökben?
* Do you have any pet projects? What kind?
* Ismertesd a "cornify" jelentőségét. [Cornify](http://www.cornify.com/)
* Egy darab papirra írd le az A B C D E betűket függőlegesen. Now put these in descending order without writing one line of code.
	* Wait and see if they turn the paper upside down
* Kalóz vagy Ninja?
	* Bónusz pont, ha mindketto és jó indokot adott rá (+2 ha zombi majom kalóz ninják)
* Ha nem fejlesztesz, mi mást szoktál csinálni?
* Hol lehet vajon Carmen Sandiego?
	* Tipp: nincs rá helyes válasz
* Mit szeretsz a legjobban az Internet Explorerben?
* Fejezd be a mondatot: Brendan Eich és Doug Crockford a JavaScript __________.
* jQuery: egy jó library vagy a legjobb library? Vitassátok meg.
* [W3School](http://www.w3schools.com/) vagy [W3Fools](http://w3fools.com/)