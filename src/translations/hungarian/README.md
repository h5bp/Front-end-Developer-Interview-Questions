---
title: Interjú kérdések front-end fejlesztőknek
layout: layouts/page.njk
permalink: /translations/hungarian/index.html
---

# Interjú kérdések front-end fejlesztőknek

Ebben a gyűjteményben összeválogattuk a legjobb front-end fejlesztő interjú kérdéseket. Ellenben nem tanácsoljuk az összes kérdés egyidejű feltevését, hiszen ez órákat venne igénybe de egy válogatott kérdéssorral megkönnyíthetjük a potenciális jelentkezők szelektálását.

[Rebecca Murphey](http://rmurphey.com/), [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) cikke is hasznos alapja lehet egy interjúnak.

**Megjegyzés:** Ne feledd, hogy a kérdések többsége érdekes beszélgetésé alakulhat, ami többet elárulhat az emberről mintha csak egyszerű válaszokat adna.

## <a name='toc'>Tartalom</a>

  1. [Eredeti közreműködők](#contributors)
  1. [Általános kérdések](#general)
  1. [HTML kérdések:](#html)
  1. [CSS kérdések](#css)
  1. [JS kérdések](#js)
  1. [jQuery kérdések](#jquery)
  1. [Példakódok](#jscode)
  1. [Választható és vicces kérdések](#fun)
  1. [További referenciák](#references)

#### [[⬆]](#toc) <a name='contributors'>Eredeti közreműködők:</a>

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
* [@iansym](http://twitter.com)

#### [[⬆]](#toc) <a name='general'>Általános kérdések:</a>

* Tanultál valami újat a héten/tegnap és ha igen, mit?
* Mi számodra a legérdekesebb és izgalmasabb a kódolás során?
* Milyen UI, biztonsági, teljesítménybeli, SEO, karbantarthatósági és technológiai szempontokat tartasz szem elött fejlesztés közben?
* Mi a számodra legelőnyösebb fejlesztői környezet? (operációs rendszer, szerkesztő, böngésző, fejlesztői eszközök, stb.)
* Részletezd a munkafolyamatot, hogyan készítesz el egy weboldalt.
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
* Nevezz meg 3 lehetőséget az oldalletöltés időtartámanak csökkentésére. (előtöltött vagy aktuális töltési idő)
* Ha beszállsz egy projektbe, és ők tabot használnak te pedig szókozt a kód rendezésénél, mit teszel?
  * Tanácsolod, hogy használjatok valami technológiát, pl. [EditorConfig](http://editorconfig.org)
  * Elfogadod (vagy tartózkodsz)
  * `issue :retab! command`
* Készíts egy egyszerű slideshow oldalt.
  * Bónusz pont ha nem szükséges hozzá JavaScript.
* Milyen eszközökkel teszteled a kódod teljesítményét? ()
  * Profiler
  * [JSPerf](http://jsperf.com/)
  * [Dromaeo](http://dromaeo.com/)
* Ha idén elsajátíthatnál egy technológiát, mi lenne az?
* Ismertesd a sztandardok fontosságát.
* Mi a FOUC? Hogyan kerulöd el a FOUC-et?
* Magyarázt el legjobb tudásod szerint mi történik a böngészőben attól kezdve hogy beírod az oldal url-jét, addig hogy az betöltődött a képernyőn.
* Magyarázd el mi az ARIA és a képernyőolvasók, és hogy tudsz egy weboldalt hozzáférhetővé tenni hátrányos helyzetben élők számára.

#### [[⬆]](#toc) <a name='html'>HTML kérdések:</a>

* Mi a `doctype` feladata és hány fajtáját tudod megnevezni?
* Mi a különbség a `standard` és a `quirks` módok között?
* Nevezd meg az XHTML oldalak korlátait?
  * Van bármi akadálya annak, hogy egy oldalt `application/xhtml+xml`-ként szolgáljon ki?
* Hogyan készítesz fel egy weboldalt többnyelvű tartalom megjelenítésére?
  * Mikre kell figyelni egy többnyelvű oldal tervezése és fejlesztése során?
* Mire valók a `data-` attribútumok?
* Tegyük fel, hogy a HTML5 egy nyílt webes felület. Mik az építőelemei?
* Mi a különbség a `cookie` a `sessionStorage` és a `localStorage` között.
* El tudod mondani mi a különbség a `GET` és a `POST` között?
* Mi a különbség a `<script>`, `<script async>` és `<script defer>` között.


#### [[⬆]](#toc) <a name='css'>CSS kérdések:</a>

* Mire való a "reset" CSS fájl és mennyire hasznos?
* Hogyan működik a CSS `float`?
* Milyen `clear` technikákat ismersz és melyik milyen környezetben a megfelelő?
* Magyarázd el a CSS sprites működését és, hogy hogyan alkalmazod egy weboldalon?
* Mi a kedvenc képpel helyettesítő (image replacement) technikád és mit használsz mire?
* CSS hackek, böngésző függő CSS fájlok, vagy.... valami más?
* Hogyan jelenítesz meg oldalakat korlátozott böngészőkben?
  * Milyen technológiákat/folyamatokat használsz?
* Milyen módon tudsz tartalmakat vizuálisan elrejteni (és csak screen olvasók számára elérhetővé tenni)?
* Használtál már "grid system"-et? Ha igen nevezz meg párat.
* Használtál már "media query"-ket vagy mobil specifikus layoutokat/CSS-eket?
* Jártas vagy az SVG használatában?
* Hogyan alakítasz egy weboldalt nyomtatóbaráttá?
* Mik a legjobb "ötletek" a hatékony CSS kód írásához?
* Használsz CSS előfeldolgozó technilógiát? ([SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Stylus](http://learnboost.github.io/stylus/), [LESS](http://lesscss.org/))
  * Ha igen mit szeretsz és mit nem szeretsz bennük?
* Hogyan valósítasz meg egy olyan dizájn kompozíciót, ami nem a szabványos betűtípusokat tartalmazza?
  * Webfontok ([Google Webfonts](https://www.google.com/fonts/), [Typekit](https://typekit.com/), stb.)
* Miként határozza meg a böngésző a megfelelő CSS szelektort?
* Hogyan értelmezed a "box model"-t és hogyan alkalmazod a böngészőkben?
* Mit csinál a `* { box-sizing: border-box; }`? Mik az előnyei?
* Sorold fel a display tulajdonság annyi értékét amennyit tudsz.
* Mi a különbség az `inline` és az `inline-block` között?
* Mi a különbség a `relative` , `fixed`, `absolute` és statikusan pozicionált elemek között?
* A 'C' feloldása a CSS-ben a cascading (lépcsőzetes). Hogy van a prioritás meghatározva a stílusok közt (néhány példával)? Hogy használhatod ezt a rendszert a saját előnyödre?
* Használtál már CSS keretrendszert? (Bootstrap, PureCSS, Foundation stb.)
* Ha igen, melyiket? Ha tehetnéd, hogy változtatnád/fejlesztenéd tovább?
* Foglalkoztál már az új CSS Flexbox és Grid specifikációkkal?
* Miben más a reszponzív design és az adaptív design?
* Dolgoztál már retina grafikával? Ha igen, milyen teknikákat használtál?

#### [[⬆]](#toc) <a name='js'>JS kérdések:</a>

* Mit jelent az `event delegation`?
* Magyarázd el hogyan működik a `this` a JavaScript-ben.
* Hogyan működik a protokol öröklés (prototypal inheritance)?
* Hogyan teszteled a JavaScript kódodat?
* AMD vs. CommonJS?
* Mi a hashtábla?
* Miért nem működik a következő kód IIFE-ként? `function foo(){ }();`
  * Mit kell megváltoztatni, hogy működjön?
* Mit jelent az `undefined` és az `undeclared` változó?
  * Miként ellenőrzöd ezeket?
* Mi a "closure", milyen formáit ismered és hogyan használod azokat?
* Hogyan néz ki egy anoním funkció?
* Magyarázd el a JavaScript modul sablont és, hogy mikor használjuk.
  * Bónusz pont, ha említi a tiszta "namespace"-ket.
  * Mi történik akkor, ha a modul "namespace" mentes?
* Miként rendszerezed a kódodat? (module pattern, classical inheritance)
* Mi a különbség hoszt objektum és natív objektum között?
* Mi a különbség az következő kódok között:
`function Person(){}`, `var person = Person()` és `var person = new Person()` 
* Mi a különbség a `.call` és az `.apply` között?
* Magyarázd el mire jó a `Function.prototype.bind`?
* Mikor szoktad optimalizálni a kódodat?
* Magyarázd el hogyan működik az öröklődés szabálya a JavaScript-ben?
* Mikor használod a `document.write()` funkciót?
  * A legtöbb generált hírdetésben még mindig használják annak ellenére, hogy nem ajánlatos.
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
* Készíts egy ciklust ami 100-ig számol, minden 3-al osztható számnál kiírja hogy "fizz", minden 5-el osztható számnál kiírja hogy "buzz", és minden 3-al és 5-el is osztható számnál kiírja hogy "fizzbuzz"
* Általánosságban miért jó ötlet a weboldal global scope-ját érintetlenül hagyni?

#### [[⬆]](#toc) <a name='jquery'>jQuery kérdések:</a>

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

#### [[⬆]](#toc) <a name='jscode'>Példakódok:</a>

```javascript
modulo(12, 5) // 2
```

*Kérdés: Készítsd el a modulo funkció, hogy a fenti példa eredménye 2 legyen.*

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Kérdés: Milyen értékkel tér vissza a fenti állítás?*

**Válasz: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Kérdés: Mi az értéke a `window.foo`-nak?*

**Válasz: "bar"** *(de csak ha a `window.foo` hamis egyébként megtartja az értékét.)*

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```

*Kérdés: Mi a fenti két alert-nek a kimenete?*

**Válasz: "Hello World" és ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Kérdés: Mi a `foo.length` értéke?*

**Válasz: `2`**

#### [[⬆]](#toc) <a name='fun'>Választható és vicces kérdések:</a>

* Mi a legjobb dolog, amit eddig kódoltál? Mire vagy a legbüszkébb?
* Mi a kedvenced az általad használt fejlesztői eszközökben?
* Van dédelgetett projekted? Ha igen, milyen?
* Mit szeretsz a legjobban az Internet Explorerben?

#### [[⬆]](#toc) <a name='references'>További referenciák:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
