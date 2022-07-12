---
title: Intervju vprašanja za front-end programerja
layout: layouts/page.njk
permalink: /translations/slovenian/index.html
---

# Intervju vprašanja za front-end programerja

@verzija 1.0

**Obvestilo:** Ta repositorij vsebuje vrsto front-end vprašanj, ki se lahko uporabijo za preverjanje potencialnih kandidatov. Ni priporočljivo, da se vsa vprašanja uporabijo za vsakega kandidata (to bi trajalo ure). Izberite nekaj vprašanj, ki vam bodo pomagala preveriti kandidata za znanja, ki jih potrebujete.

Mnogo teh vprašanj je odprtega tipa in lahko pripeljejo do zanimivih diskusij, ki vam bodo o kandidatih sporočili več, kot pa navaden kratek odgovor.
 
#### Originalni Avtorji

**Obvestilo:** večino teh vprašanj je bilo pobranih iz foruma, ustvarjenega in vzdrževanega od nasljednjih ljudi:

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

### Splošna vprašanja:

* Ali uporabljaš Twitter?
	* Če ja, katerim osebam slediš?
* Ali uporabljaš GitHub?
	* Če ja, katerim repositorijem slediš?
* Katere bloge spremljaš?
* Katere programe za hranjenje verzij si uporabljal/a (Git, SVN, ...)?
* Katero okolje najraje uporabljaš za razvoj? (OS, editor, brskalnik, orodja, …)
* Lahko opišeš tvoj potek dela, ko kreiraš novo spletno stran?
* Lahko opišeš razliko med "progressive enhancement" in "graceful degradation"?
	* bonus točke za opis "feature detection"-a
* Razloži pojem "Semantic HTML".
* V katerem brskalniku primarno razvijaš in katera orodja uporabljaš?
* Kako bi optimiziral/a nalaganje spletne strani (s stališča zahtevanih datotek)?
	* Iščemo več rešitev, ki med drugimi vklučujejo tudi:
		* Združevanje datotek
		* Minifikacija datotek
		* CDN gostovanje
		* Caching
		* ...
* Zakaj je bolje statične vsebine servirati z večih domen?
	* Koliko različnih datotek bo brskalnik prenesel iz ene domene na enkrat?
* Naštej 3 načine za zmanjšanje "page load time"-a. (dejanski ali zaznavan "load time").
* Če bi se pridružil/a projektu, kjer uporabljajo "tab"-e, ti pa uporabljaš presledke, kaj bi storil/a?
	* Predlog da se uporabi nekaj takega kot je EditorConfig (http://editorconfig.org)
	* Se prilagodi
	* `issue :retab! command`
* Ustvari preprosto prezentacijsko stran (slide-show).
	* Bonus točke, če ne uporablja JS.
* Katera orodja uporabljaš za testiranje performančnosti kode?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* ...
* Če bi to leto lahko popolnoma osvojil/a novo tehnologijo, katera bi to bila?
* Razloži pomembnost standardov in organov za nadzorovanje standardov.
* Kaj je FOUC? Kako se izogneš FOUC-u?

### HTML vprašanja:

* Kaj naredi `doctype` in koliko različtih lahko našteješ?
* Kaj je razlika med "standards mode" in "quirks mode"?
* Kaj so omejitve pri serviranju XHTML strani?
	* Ali so kakšni problemi pri servviranju strani z `application/xhtml+xml`?
* Kako serviraš stran z vsebino v večih jezikih?
	* Na katere stvari moraš paziti ko dizajniraš ali programiraš večjezično stran?
* Ali lahko uporabljaš XHTML sintakso v HTML5?
* Kako uporabljaš XML v HTML5?
* Zakaj lahko uporabimo `data-` atribute?
* Kaj so "content models" v HTML4 in ali so različni v HTML5?
* Predpostavi da je HTML5 odprta spletna platforma. Kaj so gradniki HTML5?
* Opiši razliko med "cookies", "sessionStorage" in "localStorage".

### JavaScript vprašanja:

* Katere JavaScript knjižnice si že uporabljal/a?
* Si kdaj gledal/a izvorno kodo knjižnic/ogrodij, ki si jih uporabljal/a?
* Razlika med Java in JavaScript?
* Kaj je "hashtable"?
* Kaj sta `undefined` in `undeclared` spremenljivki?
* Kaj je "closure", in zakaj/kako bi jo uporabil/a?
* Tipičen primer uporabe anonimnih funkcij?
* Razloži "JavaScript module pattern" in kdaj bi ga uporabil/a.
	* Bonus točke če omeni "clean namespacing".
* Kako organiziraš svojo kodo? (module pattern, classical inheritance?)
* Razlika med "host object" in "native object"?
* Razlika med:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Razlika med `.call` in `.apply`?
* Razloži `Function.prototype.bind`?
* Kdaj optimiziraš kodo?
* Ali lahko razložiš dedovanje v JavaScript-u?
* Kdaj bi uporabil/a `document.write()`?
* Razlika med zaznavanjem funkcionalnosti, sklepanjem o funkcionalnosti in uporabljanjem UA niza.
* Razloži AJAX s čim več detajli.
* Razloži kako deluje JSONP (in zakaj to ni res AJAX).
* Si že kdaj uporabil/a JavaScript "templates"-e?
	* Če ja, katere knjižnice si uporabil/a? (Mustache.js, Handlebars etc.)
* Razloži "hoisting".
* Opiši "event bubbling".
* Razlika med "attribute" in "property"?
* Zakaj je razširjanje vgrajenih JS objektov slaba ideja?
* Zakaj je razširjanje vgrajenih JS objektov dobra ideja?
* Razlika med "document load" in "document ready"?
* Razlika med `==` in `===`? 
* Kako bi dobil URL GET parameter?
* Razloži "same-origin policy".
* Razloži "event delegation".
* Razloži različne načine doseganja dedovanja.
* Napiši kodo za "duplicator()" funkcijo:
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Opiši strategijo za pomnenje (izogibanje ponovnemu računanju).
* Od kod ime "Ternary statement", kaj označuje beseda "Ternary"?
* Kaj je "arity" funkcije?
* Kaj je `"use strict";`? Prednosti/slabosti?

### JavaScript koda primeri:

```javascript
~~3.14
```
Vprašanje: Kaj je vrednost zgornjega stavka? 
**Odgovor: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Vprašanje: Kaj je vrednost zgornjega stavka? 
**Odgovor: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Vprašanje: Kaj je vrednost window.foo? 
**Odgovor: "bar"** 
samo če je bil window.foo "lažen", drugače bo ohranil svojo vrednost.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Vprašanje: Kaj je rezultat zgornjih dveh alert-ov? 
**Odgovor: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Vprašanje: Kaj je vrednost od foo.length? 
**Odgovor: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Vprašanje: Kaj je vrednost od foo.length? 
**Answer: `undefined`

```javascript
foo = foo||bar
```
Vprašanje: Kako bi lahko drugače napisal/a zgornji stavek?
*Odgovor: if(!foo) foo = bar

```javascript
foo>>1
```
Vprašanje: Kako bi lahko drugače napisal/a zgornji stavek?
**Odgovor: Math.floor(foo/2)

```javascript
foo|0
foo+.5|0
```
Vprašanje: Kako bi lahko drugače napisal/a zgornji stavek?
**Odgovor: parseInt(foo) & Math.round(foo)

```javascript
function foo(bar1, bar2, bar3){}
```
Vprašanje: Kako dobiti število paremetrov podanih v funkcijo?
**Odgovor: foo.length // 3 za ta primer


### jQuery vprašanja:

* Razloži "chaining".
* Razloži "deferreds".
* Naštej nekaj, za jQuery specifičnih, optimizacij.
* Kaj naredi `.end()`?
* Kako, in zakaj, bi uporabil/a "namespace"-e za "event handler"-je?
* Naštej 4 različne vrednosti, ki jih lahko podaš jQuery funkciji.
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object, ...
* Kaj je "effects" vrsta (oz. fx)?
* Razlika med `.get()`, `[]`, in `.eq()`?
* Razlika med `.bind()`, `.live()`, in `.delegate()`?
* Razlika med `$` in `$.fn`? Oz. kaj je `$.fn`?
* Optimiziraj naslednji selektor: 
```javascript
$(".foo div#bar:eq(0)")
```
* Razlika med 'delegate()' in 'live()'?


### CSS vprašanja:

* Opiši namen CSS "reset" datoteke in zakaj je uporabna.
* Opiši "float"-e in kako delujejo.
* Opiši različne "clearing" tehnike.
* Razloži CSS "sprite"-e in kako bi jih implementiral/a.
* Tvoje najljubše tehnike za zamenjavo slik?
* CSS hacki, pogojno vključene .css datoteke ali kaj drugega?
* Kako serviraš strani brskalnikom ki imajo omejen nabor funkcionalnosti?
	* Katere tehnike/procese uporabljaš?
* Na katere načine lahko vizualno skriješ vsebino (tako da je navoljo samo "screen reader"-jem)?
* Si že kdaj uporabil/a "grid" sistem. Če ja, kateri ti je najljubši?
* Si že implementiral/a "media queries" ali za mobilnike specifičen HTML/CSS?
* Imaš kaj izkušenj s CSSjem v navezi s SVGjem?
* Kako optimizeraš strani za tiskanje?
* Naštej nekaj pasti pri pisanju efektivnega CSSja.
* Ali uporabljaš CSS pred-procesor (sass, compass, Stylus, LESS)?
	* Če ja, opiši kaj ti je/ni všeč.
* Kako bi implementiral/a spletno stran, ki uporablja nestandardno tipografijo?
	* Webfonts (google webfonts, typekit, …)
* Razloži kako brskalnik ugotovi kateri element pripada kateremu CSS selektorju.

### Opcijska zabavna vprašanja:

* Kaj je najbolj "cool" stvar, ki si jo sprogramiral/a? Na kaj si najbolj ponosen/a?
* Poznaš znak (logo) za HTML5?
* Ali si trenutno, oz. si kdaj bil/a, na ladji?
* Najljubše stvari tvojih razvojnih orodij?
* Imaš kak zasebni projekt? Kakšen?
* Razloži pomembnost "cornify".
* Na list papirja napiši vertikalno črke A B C D E . Sedaj pa jih postavi v spuščajoči vrstni red, brez da napišeš vrstico kode.
	* Počakaj če bo obrnil/a list papirja na glavo
* Pirat ali Ninja?
	* Bonus točke če je kombiniran/a in je dal/a dober razlog (+2 za zombi opica pirat ninja)
* Če nebi bil/a web-developer, kaj bi počel/a?
* Najljubša lastnost Internet Explorerja?
* Dokončaj naslednji stavek: Brendan Eich in Doug Crockford sta __________ javascript-a.
* jQuery: dobra ali najboljša knjižnica? Debata.
* http://www.w3schools.com/ ali http://w3fools.com/
