---
title: Front-end interview vragen
layout: layouts/page.njk
permalink: /translations/dutch/index.html
---

# Front-end interview vragen

@version 2.0.0

Deze repo bevat een aantal front-end interview vragen die je kunnen helpen om ervaren kandidaten te vinden. Het is uiteraard niet aangeraden om elke vraag aan een sollicitant te stellen (dat zou ook uren in beslag nemen). Maar als je er een paar gebruikt is het mogelijk om het gewenste skillniveau te vinden dat je zoekt.

[Rebecca Murphey](http://rmurphey.com/)'s [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) is ook een geweldige bron om je in te lezen voordat je aan een interview begint.

**Let op:** Houd er rekening mee dat deze vragen meestal een open einde hebben en dat zou kunnen leiden tot interessante discussies die je meer over de persoon zelf kan vertellen dan een standaard antwoord.

#### Originele Bijdragers

De meerderheid van deze vragen is geplukt uit een [oksoclap](http://oksoclap.com/) thread origineel gemaakt door [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) en aan bijgedragen door de volgende individuen:

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
* [@darcy](http://twitter.com/darcy) - http://darcyclarke.me
* [@iansym](http://twitter.com/iansym)

### Algemene Vragen:

* Praat over je favoriete ontwikkelomgeving. (OS, Editor, Browsers, Tools etc.) 
* Kan je jouw workflow beschrijven als je een nieuwe web pagina maakt? 
* Kan je het verschil beschrijven tussen progressieve verbeteringen en gracieuse degradatie? 
	* Bonus punten voor het beschrijven van feature detection 
* Leg uit wat "Semantische HTML" betekent. 
* Hoe zou je website assets/resources optimaliseren?
	* Kijk naar een aantal oplossingen zoals:
		* Bestands concatenatie
		* Betands minificatie
		* Content Delivery Network
		* Caching
		* etc.
* Waarom is het beter om website resources van meerdere domeinen te laden? 
	* Hoeveel resources kan een browser tegelijkertijd downloaden van een domein? 
* Noem 3 manieren om pagina laadtijd te verminderen. (waargenomen of gemeten tijd) 
* Als je op een project kwam te werken waar ze tabs gebruiken en jij gebruikt spaties, wat zou je doen? 
	* Suggereren dat het project misschien iets als [EditorConfig] (http://editorconfig.org) kan gebruiken. 
	* Je aanpassen aan de conventie (consistent blijven)
	* `issue :retab! command`
* Schrijf een simpele slideshow pagina 
	* Bonus punten als het geen JS gebruikt.  
* Welke tools gebruik je om je je code performance te testen?
	* Profiler, JSPerf, Dromaeo
* Als je dit jaar één techniek zou willen beheersen, wat zou het zijn? 
* Kan je de verschillen tussen Long-Polling, Websockets en SSE benoemen?
* Leg het belang uit van standaards en standaards organisaties.
* Wat is FOUC? Hoe voorkom je FOUC?  

### HTML-Specifieke Vragen:

* Wat doet een `doctype`?
* Wat is het verschil tussen standaard modus en quirks modus? 
* Wat zijn de beperkingen als je XHTML pagina's serveert? 
	* Zijn er problemen als je ze serveert als `application/xhtml+xml`?  
* Hoe serveer je een pagina met content in meerdere talen? 
	* Wat voor dingen moet je voor op passen als je designt of ontwikkelt voor meertalige sites?
* Waar zijn `data-` attributen goed voor? 
* Stel je HTML5 voor als een open web platform. Wat zijn dan de bouwstenen van HTML5? 
* Beschrijf het verschil tussen cookies, sessionStorage en localStorage. 

### JS-Specifieke Vragen:

* Beschrijf event delegatie
* Leg uit hoe `this` werkt in JavaScript
* Leg uit prototypal inheritance werkt
* Hoe kan je je JavaScript testen?
* AMD vs. CommonJS?
* Wat is een hashtable?
* Wat zijn `undefined` en `undeclared` variabelen? 
* Wat is een closure, en hoe/waarom zou je het gebruiken? 
	* Je favoriete pattern om deze te gebruiken? argyle (Alleen toepasbaar bij IIFEs)  
* Wat is een typische use case voor anonieme functies? 
* Leg de "JavaScript module pattern" uit wanneer je het zou gebruiken. 
	* Bonus punten voor het noemen van clean namespacing. 
	* Wat als je modules namespace-loos zijn?  
* Hoe organiseer je je code? (module pattern, classical inheritance?) 
* Wat is het verschild tussen host objects en native objects? 
* Verschil tussen: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Wat is het verschil tussen `.call` en `.apply`? 
* Leg uit `Function.prototype.bind`? 
* Wanneer optimaliseer je je code? 
* Kan je uitleggen hoe overerving werkt in JavaScript?   
* Wanneer zou je `document.write()` gebruiken?
	* Veel ads gebruiken nog steeds `document.write()` ookal wordt dit meestal afgekeurd
* Wat is het verschil tussen feature detection, feature inference en het gebruiken van een UA string 
* Leg AJAX zo gedetailleerd mogelijk uit 
* Leg uit hoe JSONP werkt (en hoe het niet echt AJAX is) 
* Heb je ooit JavaScript templating gebruikt?
	* Zo ja, welke libraries heb je gebruikt? (Mustache.js, Handlebars etc.) 
* Leg "hoisting" uit.
* Beschrijf event bubbling. 
* Wat is het verschil tussen een "attribuut" en een "property"? 
* Waarom is het uitbreiden van built-in JavaScript objects geen goed idee? 
* Waarom is het uitbreiden van built ins een goed idee? 
* Wat is het verschil tussen document load en document ready? 
* Wat is het verschil tussen `==` en `===`? 
* Leg uit hoe je een query string parameter uit een browsers window URL kan halen. 
* Leg de same-origin policy met betrekking tot JavaScript uit. 
* Beschrijf overerving patronen in JavaScript. 
* Maak dit werkend: 
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Beschrijf een strategie voor memoization (ontwijken van berekening repetitie) in JavaScript. 
* Waarom heet het een Ternary expression, waar doelt het woord "Ternary" op? 
* Wat is de ariteit van een functie?  
* Wat is `"use strict";`? Wat zijn de voor- en nadelen om dit te gebruiken?

### JS-Code Voorbeelden:

```javascript
~~3.14
```
Vraag: Welke waarde wordt terug gegeven bij de bovenstaande code? 
**Antwoord: 3** 

```javascript
"ik hou van lasagna".split("").reverse().join("");
```
Vraag: Welke waarde wordt terug gegeven bij de bovenstaande code? 
**Antwoord: "angasal nav uoh ki"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Vraag: What is the value of window.foo? 
**Antwoord: "bar"** 
Alleen als window.foo falsy was, anders leverde het zijn waarde op.

```javascript
var foo = "Hallo"; (function() { var bar = " Wereld"; alert(foo + bar); })(); alert(foo + bar);
```
Vraag: Wat is de uitkomst van de twee alerts? 
**Antwoord: "Hallo Wereld" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Vraag: Wat is de waarde van foo.length? 
**Antwoord: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Vraag: Wat is de waarde van foo.length? 
**Antwoord: `undefined`

### jQuery-Specifieke Vragen:

* Leg "chaining" uit. 
* Leg "deferreds" uit.
* Wat zijn een paar jQuery specifieke optimalisaties die jij kan implementeren?
* Wat doet `.end()`? 
* Hoe en waarom zou je een bound event handler namespacen? 
* Noem 4 verschillende waardes die je aan een jQuery methode kan geven.
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Wat is de effecten (fx) queue? 
* Wat is het verschil tussen `.get()`, `[]`, en `.eq()`? 
* Wat is het verschil tussen `.bind()`, `.live()`, en `.delegate()`? 
* Wat is het verschil tussen `$` en `$.fn`? Of sowieso, wat is `$.fn`.
* Optimaliseer deze selector: 
```javascript
$(".foo div#bar:eq(0)")
```
* Wat is het verschil tussen 'delegate()' en 'live()'? 


### CSS-Specifieke Vragen:

* Beschrijf wat een "reset" CSS bestand doet en hoe dit bruikbaar is. 
* Beschrijf Floats en hoe ze werken. 
* Wat zijn de verschillende clearing technieken en welke is toepasselijk voor welke context? 
* Leg CSS sprites uit en hoe je ze kan implementeren op een pagina. 
* Wat zijn jouw favoriete image replacement technieken en welke gebruik je wanneer? 
* CSS property hacks, conditionele ingeladen .css files, of... iets anders? 
* Hoe serveer je je pagina's voor feature-constrained browsers? 
	* Welke technieken/processen gebruik je?  
* Wat zijn de verschillende manieren om content visueel te verbergen (en het alleen zichtbaar te houden voor screenreaders)? 
* Heb je ooit een grid-systeem gebruikt en zo ja, wat is je voorkeur? 
* Heb je ooit media queries of mobiel specifieke layouts/CSS gebruikt of geïmplementeerd? 
* Ben je bekend met SVG styling? 
* Hoe optimaliseer je je pagina's voor printen? 
* Wat zijn sommige van de "gotchas" voor het schrijven van efficiënte CSS? 
* Wat zijn de voor- en nadelen van CSS preprocessors? (SASS, Compass, Stylus, LESS) 
	* Wat vind je wel en niet fijn aan diegene die jij hebt gebruikt. 
* Hoe zou je een website design implementeren dat gebruik maakt van non-standard fonts? 
	* Webfonts (font services zoals: Google Webfonts, Typekit etc.)
* Leg uit hoe een browser beslists welke elementen hij moet matchen met een CSS selector?  

### Optionele Losse Vragen:

* Wat is het coolste dat je ooit gemaakt hebt. Waar ben je trots op?
* Wat zijn de favoriete dingen van de ontwikkeltools die je gebruikt?
* Heb je hobbyprojecten? Zo ja, wat voor? 
* Wat is je favoriete feature van Internet Explorer?
