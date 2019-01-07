---
title: Fragen im Bewerbungsgespräch für Frontend-Entwickler
layout: layouts/page.njk
permalink: /translations/german/index.html
---

# Fragen im Bewerbungsgespräch für Frontend-Entwickler

@version 2.0.0

Dieses Repo enthält einige Fragen, die zur Einschätzung von geeigneten Frontend-Entwicklern innerhalb eines Bewerbungsgesprächs verwendet werden können. Es ist auf keinen Fall ratsam, einem Bewerber jede einzelne Frage zu stellen (das würde Stunden dauern). Es mag hilfreich sein, eine handvoll passender Fragen aus dieser Liste auszuwählen, um die Fähigkeiten abzuklopfen, die für den Job wichtig sind.

[Rebecca Murphey](http://rmurphey.com/)'s [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) (Englisch) ist ebenso eine nützliche Quelle zur Vorbereitung auf ein Bewerbungsgespräch. 

**Anmerkung:** Beachte bitte, dass viele dieser Fragen so offen gehalten sind, dass sie interessante Diskussionen auslösen können, in deren Verlauf du viel mehr über die Fähigkeiten eines Bewerbers erfahren kannst, als in kurzen, direkten Antworten.

#### Initiatoren und Mitwirkende

Ein Großteil der Fragen wurden aus einer Diskussion bei [oksoclap](http://oksoclap.com/) entnommen, die von [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) angestoßen wurde, und an der später folgende Personen beteiligt waren:

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
* [@darcy_clarke](http://twitter.com/darcy) - http://darcyclarke.me
* [@iansym](http://twitter.com)

### Allgemeine Fragen:

* Welche Versionsverwaltung hast du bisher verwendet (Git, SVN, etc.)? 
* Wie sieht deine bevorzugte Entwicklungsumgebung aus? (Betriebssystem, Editor, Browser, Werkzeuge, etc.) 
* Beschreibe bitte deinen Arbeitsablauf, wenn du eine Website entwickelst.
* Kannst du den Unterschied zwischen Progressive Enhancement und Graceful Degradation beschreiben?
	* Extra-Punkte für die Beschreibung von Feature Detection
* Beschreibe bitte, was »Semantisches HTML« bedeutet.
* In welchem Browser entwickelst du vornehmlich und welche Entwicklerwerkzeuge verwendest du dabei?
* Wie würdest du die Ressourcen einer Website im Hinblick auf Performance optimieren?
	* Verschiedene Lösungsansätze könnten sein:
		* Zusammenfassen von Dateien
		* Minifizierung
		* Nutzung von CDN
		* Caching
		* etc.
* Warum ist es sinnvoll, Ressourcen über mehr als eine Domain abzufragen?
	* Wie viele Quellen kann ein Browser von einer Domain parallel empfangen?
* Benenne drei Umstände, die das Laden einer Seite verlangsamen können (hinsichtlich der Wahrnehmung oder der tatsächlichen Ladezeit).
* Wie verhältst du dich, wenn du in ein neues Projekt kommst, in dem Tabs verwendet werden und du aber Leerzeichen verwendest?
	* Vorschlagen, dass für das Projekt sowas wie EditorConfig (http://editorconfig.org) verwendet werden soll.
	* Sich an die Vorgaben des Projekts halten.
	* `issue :retab! command`
* Entwickle eine simple Slideshow-Seite.
	* Bonuspunkte, wenn sie kein JS verwendet.
* Welche Werkzeuge nutzt du zum Testen der Performance deines Codes?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* etc.
* Wenn du eine Technologie in diesem Jahr meistern könntest, welche wäre das?
* Erkläre die Bedeutung von Standards und Standardisierungsorganisationen?
* Was ist FOUC? Wie vermeidest du FOUC?

### HTML-spezifische Fragen:

* Was tut ein `doctype` und wie viele von ihnen kannst du benennen?
* Was ist der Unterschied zwischen Standards-Modus und Quirks-Modus?
* Welche Einschränkungen gibt es beim Ausliefern von XHTML-Seiten?
	* Gibt es Probleme, wenn Seiten als `application/xhtml+xml` ausgeliefert werden?
* Wie lieferst du eine Seite mit Inhalten in verschiedenen Sprachen aus?
	* Vor welchen Dingen solltest du dich hüten, wenn du mehrsprachige Websites designst oder entwickelst?
* Darf man XHTML-Syntax in HTML5 verwenden?
* Wie verwendet man XML in HTML5?
* Wofür sind `data-`-Attribute nützlich?
* Was sind die Inhaltsmodelle in HTML4 und sind sie unterschiedlich in HTML5?
* Stelle dir HTML5 als eine offene Internetplattform vor. Was sind die Basiskomponenten von HTML5?
* Beschreibe die Unterschiede zwischen Cookies, sessionStorage und localStorage.

### JS-spezifische Fragen:

* Erkläre Event Delegation
* Erkläre, wie `this` in JavaScript funktioniert.
* Erkläre, wie prototypische Vererbung funktioniert.
* Wie gehst du vor beim Testen von JavaScript?
* AMD vs. CommonJS?
* Welche JavaScript-Bibliotheken hast du bisher benutzt?
* Hast du jemals den Sourcecode von Bibliotheken/Frameworks angeschaut, die du benutzt?
* Was ist ein hashtable?
* Was sind `undefined` und `undeclared` Variablen?
* Was ist eine Closure und wie/warum würdest du eine verwenden?
	* Dein bevorzugtes Pattern, um sie zu generieren? Argyle (Nur geeignet für IIFEs).
* Was ist ein typischer Anwendungsfall für anonymous functions?
* Erkläre das »JavaScript Module Pattern« und wann du es verwenden würdest.
	* Bonuspunkte, wenn sauberes Namespacing genannt wird.
	* Und wenn deine Module ohne Namespace sind?
* Wie organisierst du deinen Code? (Module Pattern, klassische Vererbung?)
* Was ist der Unterschied zwischen host objects und native objects?
* Unterschied zwischen:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Worin unterscheiden sich `.call` und `.apply`?
* Erkläre `Function.prototype.bind`.
* Wann optimierst du deinen Code?
* Kannst du erklären, wie Vererbung in JavaScript funktioniert?
* Wann verwendet man `document.write()`?
	* Die meisten Werbebanner verwenden noch `document.write()`, obwohl es verpönt ist.
* Was sind die Unterschiede zwischen Feature Detection, Feature Inference und Verwendung des UA-Strings?
* Erkläre AJAX so detailiert wie möglich.
* Erkläre wie JSONP funktioniert (und warum es nicht wirklich AJAX ist).
* Hast du schonmal JavaScript-Templating verwendet?
	* Wenn ja, welche Bibliotheken hast du verwendet (Mustache, Handlebars, etc.)?
* Erkläre »Hoisting«.
* Erkläre Event Bubbling.
* Was ist der Unterschied zwischen einem »Attribut« und einer »Property«?
* Warum ist es nicht sinnvoll, JavaScript-eigene Objekte zu erweitern?
* Warum ist es sinnvoll, Kernfunktionen zu erweitern?
* Unterschied zwischen document load event und document ready event?
* Was ist der Unterschied zwischen `==` und `===`? 
* Erkläre, wie du einen Query-String-Parameter aus der URL des Browserfensters abfragst.
* Erkläre die same-origin policy und in welcher Form sie JavaScript betrifft.
* Erkläre Vererbungsmuster in JavaScript.
* Bringe dies zum Laufen:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Beschreibe eine Strategie für Memoization (Vermeidung von Berechnungsschleifen) in JavaScript.
* Warum heißt es »Ternary expression« und worauf deutet das Wort »Ternary« hin?
* Was ist die Stelligkeit (Arity) einer Funktion?
* Was ist `"use strict";`? Was sind die Vor- und Nachteile bei der Verwendung?

### JS-Codebeispiele:

```javascript
~~3.14
```
Frage: Welcher Wert wird zurückgegeben?
**Antwort: 3** 

```javascript
"Draußen nur Kännchen".split("").reverse().join("");
```
Frage: Welcher Wert wird zurückgegeben?
**Antwort: "nehcnnäK run neßuarD"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Frage: Welchen Wert hat window.foo? 
**Antwort: "bar"** 
nur wenn window.foo false war, andernfalls behält es seinen Wert.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Frage: Was ist das Ergebnis der beiden alerts oben? 
**Antwort: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Frage: Welchen Wert hat foo.length? 
**Antwort: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Frage: Welchen Wert hat foo.length? 
**Antwort: `undefined`

### jQuery-spezifische Fragen:

* Erkläre »Chaining«.
* Erkläre »Deferreds«.
* Was sind ein paar jQuery-spezifische Optimierungen, die man vornehmen kann?
* Was macht `.end()`?
* Wie und warum würdest du einen Namespace für einen gebundenen Event handler verwenden?
* Benenne 4 verschiedene Werte, die man einer jQuery-Methode übergeben kann.
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Was ist die effects (oder fx) queue?
* Was ist der Unterschied zwischen `.get()`, `[]` und `.eq()`? 
* Was ist der Unterschied zwischen `.bind()`, `.live()`, und `.delegate()`?
* Was ist der Unterschied zwischen `$` und `$.fn`? Was ist überhaupt `$.fn`?
* Optimiere diesen Selektor:
```javascript
$(".foo div#bar:eq(0)")
```
* Unterschied zwischen 'delegate()' und 'live()'? 

### CSS-spezifische Fragen:

* Erkläre was ein »Reset«-CSS macht und wofür es nützlich ist.
* Beschreibe Floats und wie sie funktionieren.
* Was sind die verschiedenen Clear-Methoden und welche ist geeignet für welchen Kontext?
* Erkläre CSS-Sprites und wie du sie auf einer Seite oder Website implementieren würdest.
* Was sind deine bevorzugten Image-Replacement-Techniken und wann benutzt du welche davon?
* CSS-Hacks, per conditional eingebundene .css-Ressourcen oder… was sonst?
* Wie lieferst du Seiten für funktional beschränkte Browser aus?
	* Welche Techniken/Prozesse verwendest du dafür?
* Was sind die verschiedenen Möglichkeiten, um Inhalte visuell auszublenden (und für Screenreader zugänglich zu machen)?
* Hast du schonmal ein Grid-System verwendet, und wenn ja, welches bevorzugst du?
* Hast du media queries oder mobile-spezifische Layouts/CSS verwendet/entwickelt?
* Bist du mit dem Styling von SVG vertraut?
* Wie optimierst du Websites für den Druck?
* Was sind ein paar Kniffe, um effizientes CSS zu schreiben?
* Verwendest du CSS-Präprozessoren (Sass, Compass, Stylus, LESS)?
	* Wenn ja, beschreibe bitte, was du an den verwendeten magst oder nicht magst.
* Wie würdest du ein Webdesign umsetzen, das Nicht-Standard-Schriften verwendet?
	* Webfonts (Dienste wie Google Webfonts, Typekit, etc.)
* Erkläre wie ein Browser entscheidet, welche Elemente von einem CSS-Selektor erfasst werden.

### Optionale Spaßfragen:

* Was ist das großartigste, was du je entwickelt hast, und worauf bist du am meisten stolz?
* Kennst du das Zeichen der HTML5-Gang?
* Bist du gerade oder warst du jemals auf einem Boot?
* Was sind die besten Eigenschaften der Entwicklerwerkzeuge, die du benutzt?
* Hast du irgendwelche Freizeitprojekte? Welcher Art?
* Erkläre die Bedeutung von »cornify«.
* Schreibe auf einen Zettel die Buchstaben A B C D E von oben nach unten. Jetzt sortiere diese in umgekehrter Abfolge, ohne eine Zeile Code zu schreiben.
	* Warte einen Moment und schaue, ob sie den Zettel umdrehen.
* Pirat oder Ninja?
	* Bonuspunkt, wenn es eine Kombi ist und begründet werden kann (+2 für Zombieaffenpiratenninja).
* Wenn nicht Web-Entwicklung, was würdest du dann tun?
* Wo ist Carmen Sandiego?
	* Tipp: Die Antwort ist immer falsch.
* Was ist deine Lieblingsfunktion des Internet Explorers?
* Ergänze diesen Satz: Brendan Eich und Doug Crockford sind die __________ von JavaScript.
* jQuery: Eine großartige Bibliothek oder die großartigste Bibliothek von allen? Diskutiere.
* http://www.w3schools.com/ oder http://w3fools.com/
