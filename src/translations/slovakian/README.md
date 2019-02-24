---
title: Otázky k pohovoru; front-end vývojár
layout: layouts/page.njk
permalink: /translations/slovakian/index.html
---

# Otázky k pohovoru: front-end vývojár

Tento repozitár obsahuje rad otázok, ktoré môžete položiť pri pohovore kandidátovi na pozíciu front-end vývojár a overiť si tak jeho znalosti v tomto odbore. Nie je zamýšľané položiť všetky tieto otázky (ich korektné zodpovedanie by trvalo hodiny), bohato postačí len určitú časť vyhovujúcu vašim potrebám.

Za prečítanie stojí tiež [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) (anglicky) od [Rebecci Murphey](http://rmurphey.com/).
 
**Poznámka:** Majte na pamäti, že tieto otázky majú viesť skôr k diskusii na danú tému a prezradiť tak niečo viac o schopnostiach daného vývojára, než aby boli zodpovedané jedným slovom alebo vetou.

## <a name='toc'>Obsah</a>

1. [Pôvodní prispievatelia](#contributors)
1. [Všeobecné otázky](#general)
1. [HTML otázky](#html)
1. [CSS otázky](#css)
1. [JS otázky](#js)
1. [jQuery otázky](#jquery)
1. [Otázky z kódu](#jscode)
1. [Zábavné otázky](#fun)
1. [Ďalšie zaujímave referencie](#references)

#### [[⬆]](#toc) <a name='contributors'>Pôvodní prispievatelia:</a>

Väčšina otázok bola prevzatá z [oksoclap](http://oksoclap.com/) pôvodne vytvoreného [Paulom Irishom](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) a následne doplnená týmito osobami:

* [@bentruyman](http://twitter.com/bentruyman) - http://bentruyman.com
* [@cowboy](http://twitter.com/cowboy) - http://benalman.com
* [@ajpiano](http://ajpiano) - http://ajpiano.com
* [@SlexAxton](http://twitter.com/slexaxton) - http://alexsexton.com
* [@boazsender](http://twitter.com/boazsender) - http://boazsender.com
* [@miketaylr](http://twitter.com/miketaylr) - http://miketaylr.com
* [@vladikoff](http://twitter.com/vladikoff) - http://vladfilippov.com
* [@gf3](http://twitter.com/gf3) - http://gf3.ca
* [@jon_neal](http://twitter.com/jon_neal) - http://twitter.com/jon_neal
* [@wookiehangover](http://twitter.com/wookiehangover) - http://wookiehangover.com
* [@iansym](http://twitter.com/iansym) - http://twitter.com/iansym

#### [[⬆]](#toc) <a name='general'>Všeobecné otázky:</a>

* Čo ste sa naučili včera/minulý týždeň nové?
* Čo vás vzrušuje alebo zaujíma na kódovaní?
* Povedzte niečo o vašom obľúbenom vývojovom prostredí (operačný systém, editor, prehliadač, nástroje, ...).
* Opíšte ako postupujete pri vytváraní novej webovej stránky.
* Dokážete vysvetliť rozdiel medzi pozvoľným degradovaním (graceful degradation) a postupným vylepšovaním (progressive enhancement)?
  * Body navyše za opis detekcie pokročilej funkcionality
* Vysvetlite pojem "sémantické HTML".
* Ako by ste optimalizovali zdroje (obrázky, JS, CSS, ...) webovej stránky?
  * K dispozícii je celý rad optimalizácií napr.:
    * spájanie súborov
    * minifikácia súborov
    * CDN hosťovanie
    * caching, ...
* Prečo je lepšie posielať zdroje webovej stránky z viacerých domén?
  * Koľko súborov môže z danej domény sťahovať prehliadač naraz?
* Vymenujte tri spôsoby ako znížiť dobu nahrávania webovej stránky (vnímanú alebo skutočnú dobu nahrávania).
* Ak nastúpite do projektu, kde sa namiesto odsadzovania tabulátormi používajú medzery, čo urobíte?
  * Navrhnutie, že projekt by mohol využívať niečo ako EditorConfig (http://editorconfig.org)
  * Prispôsobenie sa konvencii (ale zostať konzistentný).
  * `issue :retab ! command`
* Napíšte jednoduchú stránku so slideshow.
  * Body navyše pokiaľ nepoužíva JS.
* Aké nástroje používate pre testovanie rýchlosti vášho kódu?
  * Profiler, JSPerf, Dromaeo
* Ak by ste sa chcel/chcela tento rok naučiť jednu novú technológiu, ktorá by to bola?
* Vysvetlite dôležitosť štandardov a štandardizačných orgánov.
* Čo to je FOUC? Ako je možné sa vyhnúť FOUC?

#### [[⬆]](#toc) <a name='html'>HTML otázky:</a>

* Čo robí `doctype`?
* Aký je rozdiel medzi štandardným a tkz. quirks módom?
* Aké sú obmedzenia pri poskytovaní XHTML stránok?
  * Existuje nejaký problém pri poskytovaní stránok ako `application/xhtml+xml`?
* Ako poskytujete stránku s viacjazyčným obsahom?
  * Na čo všetko si musíte dať pozor pri vytváraní viacjazyčnej stránky?
* K čomu sú dobré atribúty `data-`?
* Uvažujte o HTML5 ako o otvorenej platorme. Aké sú základné stavebné kamene HTML5?
* Opíšte rozdiel medzi cookies, sessionStorage a localStorage.

#### [[⬆]](#toc) <a name='css'>CSS otázky: </a>

* Opíšte čo robí a na čo je dobrý "reset" CSS súbor.
* Opíšte obtekanie (floats) a ako funguje.
* Popíšte rôzne techniky pre zastavenie obtekania (clear fixing) a povedzte, ktoré sa hodia v ktorom kontexte.
* Vysvetlite, čo to sú CSS sprites a ako by ste ich implementovali.
* Aká je vaša obľúbená technika pre nahrádzanie obrázkov a ktorú a kedy používate?
* CSS property hacks, podmienené vkladanie .css súborov alebo niečo ďalšie?
* Ako poskytujete stránky pre funkcionálne/vlastnosťami obmedzený prehliadač?
  * Akú techniku​/proces používate?
* Aké sú spôsoby pre zneviditeľnie obsahu (a zachovanie jeho dostupnosti pre čítačky)?
* Použili ste niekedy grid systém a ak áno, ktorý uprednostňujete?
* Použili ste niekedy mediálne selektory (media query) alebo špecifický layout/CSS pre mobilné zariadenia?
* Máte nejaké skúsenosti so štýlovaním SVG?
* Ako optimalizujete stránky pre tlač?
* Aké sú zásady pre písanie efektívneho CSS?
* Aké sú výhody/nevýhody použítia CSS preprocesorov (SASS, Compass, Stylus, LESS)?
  * Popíšte, čo sa Vám na CSS preprocesoroch, ktoré ste použili, páči/nepáči.
* Ako by ste implementovali návrh webovej stránky, ktorá používa neštandardné rezy písma?
  * Webfonts (služby typu: Google Webfonts, Typekit, ...)
* Vysvetlite ako prehliadač určuje, ktorý element zodpovedá CSS selektoru.
* Vysvetlite vaše chápanie box modelu a ako poviete pomocou CSS prehliadaču, aby váš layout vykreslil v odlišnom box modele


#### [[⬆]](#toc) <a name='js'>JS otázky:</a>

* Vysvetlite delegáciu udalostí.
* Vysvetlite ako funguje `this` v JavaScripte.
* Vysvetlite ako funguje prototypová dedičnosť.
* Ako testujete JavaScript?
* AMD vs. CommonJS?
* Čo je hashovacia tabuľka?
* Vysvetlite, prečo nasledujúce volanie nebude fungovať ako IIFE : `function foo(){ }();`.
  * Čo musíte zmeniť, aby volanie zafungovalo ako IIFE?
* Vysvetlite rozdiel medzi premennou, ktorá je `null`, `undefined` alebo `undeclared`?
  * Akým spôsobom by ste overili tieto jednotlivé stavy?
* Čo to je "closure" a ako/prečo by sme ich mali používať?
* Aké je typické využitie pre anonymné funkcie?
* Vysvetlite "JavaScript module pattern" a kedy by ste ho mali použiť.
  * Body navyše za zmienku o čistých menných priestoroch.
  * Čo ak sú vaše moduly bez menného priestora?
* Ako organizujete váš kód? (module pattern, klasická dedičnosť?)
* Aký je rozdiel medzi natívnymi a hostiteľskými objektami?
* Rozdiel medzi:
```javascript
function Person(){}
var person = Person()
var person = new Person()
```
* Aký je rozdiel medzi `.call` a `.apply`?
* Aký je rozdiel medzi `undefined` a `null`?
* Vysvetlite `Function.prototype.bind`.
* Kedy optimalizujete váš kód?
* Vysvetlite, ako funguje dedičnosť v JavaScripte.
* Kedy by ste použili `document.write()`?
  * Väčšina generovaných reklám stále používa tento prístup aj napriek tomu, že je to dlhodobo odsudzované.
* Aký je rozdiel medzi detekciou vlastností, odvodením vlastností a použitím UA reťazca?
* Vysvetlite AJAX čo najpodrobnejšie to ide.
* Vysvetlite, ako funguje JSONP (a prečo to nie je naozajstný AJAX).
* Použili ste niekedy JavaScriptové šablóny?
  * Ak áno, ktoré knižnice ste použili (mustache.js, Handlebars, ...)?
* Vysvetlite "hoisting".
* Vysvetlite prebublávanie udalostí.
* Aký je rozdiel medzi atribútom (attribute) a vlastnosťou (property)?
* Prečo nie je dobrý nápad rozširovať natívne JavaScriptové objekty?
* Prečo je dobrý nápad rozširovať natívne JavaScriptové objekty?
* Aký je rozdiel medzi udalosťami "document load" a "document ready"?
* Aký je rozdiel medzi `==` a `===`?
* Vysvetlite, akým spôsobom získate parameter z URL zadaného v okne prehliadača.
* Vysvetlite JavaScriptové pravidlo rovnakého pôvodu (same-origin policy).
* Opíšte prístupy dedenia v JavaScripte.
* Nasledujúci kód upravte tak, aby fungoval:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Opíšte stratégiu pre memorizáciu (odstránenie opakovaných výpočtov) v JavaScripte.
* Prečo sa hovorí ternárny operátor, čo označuje slovo ternárny?
* Čo je označované ako "arita" funkcie?
* Čo znamená `"use strict";`? Aké sú výhody a nevýhody použitia?

#### [[⬆]](#toc) <a name='jquery'>jQuery otázky:</a>

* Vysvetlite reťazenie (chaining).
* Vysvetlite odkladanie (deferreds).
* Aké poznáte a viete implementovať optimalizácie špeciálne pre jQuery?
* Čo robí `.end()`?
* Ako a prečo by ste váš "event handler" zaopatrili menným priestorom?
* Vymenujte štyri rôzne typy hodnôt, ktoré môžete odovzdať ako vstupný parameter metód v jQuery.
  * selektor (reťazec), HTML (reťazec), callback (funkcia), HTMLElement, object, polia, polia elementu, jQuery Object, ...
* Čo to je fronta efektov (alebo fx front)?
* Aký je rozdiel medzi `.get()`, `[]` a `.eq()`?
* Aký je rozdiel medzi `.bind()`, `.live()` a `.delegate()`?
* Aký je rozdiel medzi `$` a `$.fn`? Alebo len, čo je `$.fn`?
* Zoptimalizujte tento selektor :
```javascript
$(".foo div#bar:eq(0)");
```
* Aký je rozdiel medzi `.delegate()` a `.live()`?

#### [[⬆]](#toc) <a name='jscode'>Otázky z kódu:</a>

```javascript
modulo(12, 5) // 2
```
*Otázka: Implementujte funkciu modulo tak, aby splnila zadanie.*

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Otázka: Akú hodnotu vráti uvedený výraz?*

**Odpoveď:" goh angasal a m'i"**

```javascript
(window.foo || (window.foo = "bar"));
```
*Otázka: Akú hodnotu má window.foo?*

**Odpoveď: "bar"** *(iba ak window.foo bolo false, inak vráti svojou hodnotu)*

```javascript
var foo = "Hello";

(function() {
    var bar = "World";
    alert(foo + bar);
})();

alert(foo + bar);
```
*Otázka: Čo zobrazia uvedené dva alerty?*

**Odpoveď: "Hello World" a ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Otázka: Aká je hodnota `foo.length`?*

**Odpoveď: `2`**

#### [[⬆]](#toc) <a name='fun'>Zábavné otázky:</a>

* Aká je najúžasnejšia vec, ktorú ste kedy nakódovali, alebo na ktorú ste najviac pyšní?
* Aké sú vaše obľúbené časti vývojárskych nástrojov, ktoré používate?
* Máte nejaký vlastný hobby projekt?
* Aká je Vaša obľúbená vlastnosť Internet Exploreru?

#### [[⬆]](#toc) <a name='references'>Ďalšie zaujímavé referencie:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
