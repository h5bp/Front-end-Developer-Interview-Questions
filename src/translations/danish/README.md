---
title: Front-end Job Interview Spørgsmål
layout: layouts/page.njk
permalink: /translations/danish/index.html
---

# Front-end Job Interview Spørgsmål

@version 1.0

**Bemærk:** Dette arkiv indeholder et udvalg af spørgsmål, der kan bruges til samtale til stillingen som front-end udvikler. Det kan på ingen måde anbefales at bruge hver eneste spørgsmål på samme kandidat da det ville tage flere timer.

Husk på, at mange af disse spørgsmål er åbne og kan føre til interessante diskussioner, der fortæller dig mere om personens evner end et klart svar ville.

#### Originale bidragydere

**Bemærk:** Størstedelen af spørgsmålene blev plukket fra en tråd skabt og bidraget af følgende personer:

* @bentruyman (http://bentruyman.com)
* @cowboy (http://benalman.com)
* @roger_raymond (http://twitter.com/iansym)
* @ajpiano (http://ajpiano.com)
* @paul_irish (http://paulirish.com)
* @SlexAxton (http://alexsexton.com)
* @boazsender (http://boazsender.com)
* @miketaylr (http://miketaylr.com)
* @vladikoff (http://vladfilippov.com)
* @gf3 (http://gf3.ca)
* @jon_neal (http://twitter.com/jon_neal)
* @wookiehangover (http://wookiehangover.com)
* @darcy_clarke (http://darcyclarke.me)
* @tairraos (http://xiaole.happylive.org)

### Generelle spørgsmål:

* Er du på Twitter?
   * Hvis ja, hvem følger du?
* Er du på GitHub?
   * Hvis ja, hvilke repoer følger du?
* Hvilke blogs følger du?
* Hvilke version kontrolsystemer har du brugt (Git, SVN osv.)?
* Hvad er dit foretrukne udviklingsmiljø? (OS, Editor, Browsere, Tools osv.)
* Kan du beskrive din arbejdsgang, når du bygger en webside?
* Kan du beskrive forskellen mellem 'progressive enhancement' og 'graceful degradation'?
   * Bonuspoint beskrive 'feature detection'
* Forklar hvad "Semantisk HTML" betyder.
* Hvilken browser udvikler du primært i og hvad hvilke udviklingsværktøjer bruger du?
* Hvordan vil du optimere et websites ressourcer?
   * Du leder efter en række løsninger, som kan omfatte:
       * Fil sammenkædning (File concatenation)
       * Fil minification
       * CDN Hosted
       * Caching
       * Osv.
* Hvorfor er det bedre at have flere domæner som man serverer sit website fra?
   * Hvor mange ressourcer vil en browser hente ad gangen fra et givent domæne?
* Navn 3 måder at mindske et websites belastning. (formodet eller faktisk lade tid)
* Hvis du hoppede på et projekt, og de brugte tabulering og du brugte mellemrum, hvad ville du gøre?
   * Foreslå projektet at benytte noget lignende EditorConfig (http://editorconfig.org)
   * Følge konventioner (være consistent)
   * 'Indføre :retab! kommandoen'
* Skriv et simpelt billed slideshow side
   * Bonuspoint, hvis det ikke bruger JS.
* Hvilke værktøjer bruger du til at teste din kode effektivitet?
   * JSPerf (http://jsperf.com/)
   * Dromaeo (http://dromaeo.com/)
   * Osv.
* Hvis du kunne mestre en teknologi i år, hvad ville det så være?
* Forklare vigtigheden af standarder.
* Hvad er FOUC? Hvordan undgår man FOUC?

### HTML-specifikke spørgsmål:

* Hvad er et `doctype` gøre, og hvor mange kan du nævne?
* Hvad er forskellen mellem `standards mode` og `quirks mode`?
* Hvilke Begrænsninger er der med XHTML-sider?
   * Er der nogen problemer med at serverer sider som `application/xhtml+xml`?
* Hvordan du serverer man en side med indhold på flere sprog?
   * Hvilken slags ting skal du være opmærksom på, når der skal designes eller udviklings til flersprogede sites?
* Kan du bruge XHTML syntaks i HTML5?    
* Hvordan bruger du XML i HTML5?
* Hvad er `data-` attributter godt for?
* Hvad er indholds modeller i HTML4 og er de anderledes i HTML5?
* Tænk på HTML5 som en åben web-platform. Hvad er byggestenene i HTML5?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Beskriv forskellen mellem cookies, sessionStorage og localStorage.

### JS-specifikke spørgsmål

* Hvilke JavaScript-biblioteker har du brugt?
* Har du nogensinde kigget på kildekoden til bibliotekerne eller frameworks som du bruger?
* Hvordan er JavaScript forskellig fra Java?
* Hvad er en Hashtable?
* Hvad er `undefined` og `undeclared` variabler?
* Hvad er en closure, og hvordan/hvorfor ville du bruge en?
   * Din yndlings mønster bruges til at skabe dem? argyle (Gælder kun for IIFEs)
* En typisk eksempel på brug af anonyme funktioner?
* Forklare "JavaScript module pattern", og hvornår du skal bruge det.
   * Bonuspoint for at nævne ren namespacing.
   * Hvad hvis dine moduler er uden namespace?
* Hvordan tilrettelægger du din kode? (module pattern, classical inheritance?)
* Hvad er forskellen mellem 'host objects' og 'native objects'?
* Forskel mellem:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Hvad er forskellen mellem `.call` og `.apply`?
* Forklare `Function.prototype.bind`?
* Hvornår skal du optimere din kode?
* Kan du forklare, hvordan arv(inheritance) virker i JavaScript?
* Hvornår vil du bruge `document.write()`?
   * De fleste annoncer stadig genereres ved brug af `document.write()` selvom dets anvendelse er ildeset.
* Hvad er forskellen mellem `feature detection`, `feature inference`, og brug af UA string
* Forklar AJAX så udførligt som muligt.
* Forklare hvordan JSONP virker (og hvordan det egentlig ikke er AJAX)
* Har du nogensinde brugt JavaScript templating?
   * Hvis ja, hvilke biblioteker har du brugt (Mustache.js, Handlebars osv.)
* Forklare "hoisting".
* Forklare "event bubbling".
* Hvad er forskellen mellem en "attribute" og en "property"?
* Hvorfor er det ikke en god idé Udvide indbygget JavaScript-objekter?
* Hvorfor er Udvidelse af ins en god idé?
* Forskel mellem document load event og document ready event?
* Hvad er forskellen mellem `==` og `===`?
* Forklar, hvordan du ville få en query string parameter fra browservinduets URL.
* Forklare den samme oprindelse politik med hensyn til JavaScript.
* Forklare event delegation.
* Beskrive arv mønstre(inheritance patterns) i JavaScript.
* Få det til at virke:
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Beskrive en strategi for memoization (undgå beregning gentagelser) i JavaScript.
* Hvorfor hedder det en Ternary erklæring, hvad betyder ordet "Ternary"?
* Hvad er arity af en funktion?
* Hvad er `"use strict";`? hvad er fordelene og ulemperne ved at bruge det?

### JS-kode eksempler:

```javascript
~~3.14
```
Spørgsmål: Hvilken værdi er returneret fra ovenstående?
**Svar: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Spørgsmål: Hvilken værdi er returneret fra ovenstående?
**Svar: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Spørgsmål: Hvad er værdien af window.foo?
**Svar: "bar"**
Hvis window.foo er falsk ellers vil det bevare sin værdi.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Spørgsmål: Hvad er resultatet af de to ovennævnte alerts?
** Svar: "Hello World" & ReferenceError: bar er ikke defineret **

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Spørgsmål: Hvad er værdien af foo.length?
**Svar: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Spørgsmål: Hvad er værdien af foo.length?
**Svar: `undefined`

```javascript
foo = foo||bar
```
Spørgsmål: Hvad betyder?
**Svar: if(!foo) foo = bar

```javascript
foo>>1
```
Spørgsmål: Hvad betyder?
**Svar: Math.floor(foo/2)

```javascript
foo|0
foo+.5|0
```
Spørgsmål: Hvad betyder?
**Svar: parseInt(foo) & Math.round(foo)

```javascript
function foo(bar1, bar2, bar3){}
```
Spørgsmål: Hvordan får man antallet af parametre?
**Svar: foo.length //dette eksempel er 3


### jQuery-specifikke spørgsmål:

* Forklar "kæde"(chaining).
* Forklar "deferreds".
* Nævn nogle jQuery specifikke optimeringer du kan implementere?
* Hvad betyder `.end()` gøre?
* Hvordan og hvorfor, ville du namespace en bundet event handler?
* Navn 4 forskellige værdier, du kan give en jQuery metoden.
   * Selector (string), HTML (string), Callback (funktion), HTMLElement, objekt, array, element array, jQuery objekt osv.
* Hvad er effects (eller fx) queue?
* Hvad er forskellen mellem `.get()`, `[]`, og `.eq()`?
* Hvad er forskellen mellem `.bind()`, `.live()`, og `.delegate()`?
* Hvad er forskellen mellem `$` og `$.fn`? Eller hvad er `$.fn`.
* Optimer denne selector:
```javascript
$(".foo div#bar:eq(0)")
```
* Forskel mellem `delegate()` og `live()`?


### CSS-specifikke spørgsmål:

* Beskriv hvad en "reset" CSS-fil laver, og hvordan den nyttigt.
* Beskrive Floats og hvordan de virker.
* Hvilken clearing teknikker findes der og hvilke er passende for hvilken sammenhæng?
* Forklar CSS sprites, og hvordan du vil indføre dem på en side eller et websted.
* Hvad er din yndlings billed udskiftning(image replacement) teknik og som bruger du?
* CSS property hacks, konditionel inkluderet. css filer, eller ... noget andet?
* Hvordan serverer du dine sider for funktionen begrænset browsere?
   * Hvilke teknikker/processer bruger du?
* Hvilke forskellige måder findes der for at visuelt skjule indhold (og gør det kun tilgængelig for skærmlæsere)?
* Har du nogensinde brugt et grid system, og hvis ja, hvad foretrækker du?
* Har du brugt eller implementeret media queries eller mobile specifikke layouts/CSS?
* Noget kendskab til styling af SVG?
* Hvordan optimerer du dine websider til tryk?
* Hvad skal der til for at skrive effektiv CSS?
* Bruger du CSS præprocessorer? (SASS, Compass, Stylus, LESS)
   * Hvis ja, beskriv, hvad du kan lide og ikke lide ved CSS præprocessorer som du har brugt.
* Hvordan vil du implementere en web-design, der ikke bruger standard skrifttyper?
   * Webfonts (skrifttype tjenester som: Google Webfonts, Typekit osv.)
* Forklare hvordan en browser afgør, hvilke elementer matcher en CSS selector?

### Valgfri sjove spørgsmål:

* Hvad er den fedeste ting, du nogensinde har kodet, hvad er du mest stolt af?
* Kender du HTML5 bandetegn?
* Er du nu, eller har du nogensinde været på en båd.
* Hvad er dine foretrukne dele om de udviklere værktøjer som du bruger?
* Har du nogen hygge projekter? Hvilken slags?
* Forklare betydningen af ​​"cornify".
* På et stykke papir, skriv ned bogstaverne A B C D E lodret. Nu sæt dem i faldende rækkefølge uden at skrive én linje kode.
   * Vent og se, om de vender papiret på hovedet
* Pirate eller Ninja?
   * Bonus hvis det er en kombination og en god grund blev givet (+2 for zombie abe pirat ninjas)
* Hvad ville du gøre, hvis ikke Webudvikling?
* Hvor i verden er Carmen Sandiego?
* Where in the world is Carmen Sandiego?
   * Tip: deres svar er altid forkert
* Hvad er dit foretrukne funktion i Internet Explorer?
* Færdiggør denne sætning: Brendan Eich og Doug Crockford er __________ af javascript.
* JQuery: et godt bibliotek eller den bedste bibliotek? Diskuter.
* http://www.w3schools.com/ eller http://w3fools.com/
