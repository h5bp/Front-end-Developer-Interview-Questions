#Front-end Job Interview Fragen

@version 2.0.0

Dieses Repository beinhaltet ein paar Front-end Fragen die für potentielle Kandidaten verwendet werden können. Es sollten natürlich nicht alle Fragen gestellt werden, dass würde Stunden dauern. 

[Rebecca Murphey](http://rmurphey.com/)'s [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) ist übrigens auch eine gute Ressource die man gelesen haben sollte bevor man in ein Interview geht.

**Notiz:** Es ist zu beachten das viele dieser Fragen zu interessanten Diskussionen führen können, die mehr über die Fertigkeiten einer Person aussagen, als eine einfach Antwort.

#### Ursprüngliche Autoren

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

* Welche Versionskontrollsysteme haben Sie bereits benutzt? (Git, SVN, etc.)
* Welche Entwicklungsumgebung bevorzugen Sie? (OS, Editor, Browser, Tools etc.)
* Können Sie Ihren Arbeitsablauf beschreiben wenn Sie eine Website erstellen?
* Können Sie den Unterschied zwischen Progressive Enhancement und Graceful Degradation erklären?
  * Bonuspunkte wenn "Feature Detection" beschrieben werden kann
* Erklären Sie was "Semantisches HTML" bedeutet
* Welchen Browser nutzen Sie hauptsächlich zum Entwickeln und welche Entwicklertools benutzen Sie dazu?
* Wie würden Sie Website Assets optimieren?
	* Antworten könnten sein:
		* File concatenation
		* File minification
		* CDN Hosted
		* Caching
		* etc.
* Warum ist es besser Assets einer Website von verschiedenen domains zu serven?
  * Wie viele Ressourcen läd ein Browser von einer Domain zur gleichen Zeit?
* Nennen Sie 3 Wege die Ladezeit einer Website zu verkürzen.
* Wenn Sie in einem Projekt starten und alle Anderen haben Tabs benutzt, während Sie Spaces benutzen... was würden Sie tun?
  * Vorschlagen das Projekt mit einer EditorConfig (http://editorconfig.org) zu versehen
  * Sich den Konventionen anzupassen, um konsistent zu bleiben
* Entwickeln Sie eine einfache Slideshow-Seite
  * Bonuspunkte wenn kein JS verwendet wird.
* Welche Tools nutzen Sie, um die Performance ihres Codes zu testen?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* etc.
* Wenn Sie Jahr dieses eine Technologie meistern könnten, welche würde das sein?
* Warum sind Standards wichtig?
* Was ist ein FOUC und wie können Sie ihn vermeiden?

### HTML-spezifische Fragen:

* Was ist ein `doctype` und wie viele können Sie aufzählen?
* Was ist der Unterschied zwischen Standards und Quirks Mode?
* Wo sind die Grenzen beim Ausliefern von XHTML-Seiten?
  * Gibt es irgendwelche Probleme Seiten als `application/xhtml+xml`?
* Wie liefert man eine Seite mit Inhalt in mehreren Sprachen aus?
  * Worauf muss man achten wenn man eine Website entwickelt und/oder designed, die in verschiedenen Sprachen ausgeliefert werden soll?
* Kann man XHTML-Syntax in HTML5 verwenden?
* Wie benutzt man XML in HTML5?
* Wofür sind `data-`-Attribute gut?
* Was sind die Content Models in HTML4 und unterscheiden sie sich in HTML5?
* Beschreiben Sie den Unterschied zwischen Cookies, SessionStorage und LocalStorage.

### JS-Spezifische Fragen

* Erklären Sie Event Delegation.
* Erklären Sie wie `this` in JavaScript funktioniert.
* Wie funktioniert prototypische Vererbung in JavaScript?
* Wie testen Sie Ihren JavaScript Code?
* AMD vs. CommonJS?
* Welche JavaScript Libraries haben Sie bereits genutzt?
* Haben Sie sich jemals den Source Code der Libraries angesehen?
* Hast ist ein Hashtable?
* Was sind undefinierte und undeklarierte Variablen?
* Was ist ein Closure und warum/wie würde Sie ein benutzen?
* Was ist Ihr Lieblingsmuster diese zu erstellen?
* Was ist ein typischer Anwendungsfall für anonyme Funktionen?
* Erkären Sie das "JavaScript Module Pattern" und wann würden Sie es nutzen?
	* Bonuspunkte wenn sauberes Namespacing erwähnt wird.
  * Was wenn Ihre Module keinen Namespace haben?
  * Wie organisieren Sie ihren Code? (Module Pattern, klassische Vererbung)
* Was ist der Unterschied zwischen host Objects und native Objects?
* Underschied zwischen: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Was ist der Unterschied zwischen `.call` und `.apply`?
* Erklären Sie `Function.prototype.bind`? 
* Wann optimieren Sie ihren Code? 
* Können Sie erklären Wie Vererbung in JavaScript funktioniert?
* Wann würden Sie `document.write()` verwenden?
  * Die meisten Werbe-Ads benutzen immer noch document.write()
* Was ist der Unterschied zwischen Feature Detection, Feature Inference und die Benutzung des UA-Strings?
* Eklären Sie AJAX so detailliert wie möglich.
* Erklären Sie wie JSONP funktioniert und warum es eigentlich kein richtiges AJAX ist
* Haben Sie jemals JavaScript Templating verwendet?
	* Wenn ja, welche Libraries haben Sie benutzt? (Mustache, Handlebars etc.) 
* Erklären Sie "hoisting".
* Erklären Sie Event Bubbling. 
* Was ist der Unterschied zwischen einem Attribut und einer Property? 
* Warum ist das Erweitern von built-in Objects in JavaScript keine gute Idee? 
* Warum ist das Erweitern von built-ins eine gute Idee?
* Unterschied zwischen document.load Event und document.ready Event? 
* Was ist der Unterschied zwischen `==` und `===`? 
* Erklären Sie wie Sie den Query String Parameter aus der Browser URL ermitteln können.
* Erkären Sie die Same-Origin Policy in Beziehung zu JavaScript.
* Erklären Sie Vererbungsmuser in JavaScript.
* Lösen Sie folgendes Problem: 
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Erklären Sie eine Strategie für Memoization in JavaScript.
* Warum heißt es "Ternary Expression" und was soll das Wort "Ternary" ausdrücken?
* Was is die Stelligkeit eine Funktion? 
* Was ist "use strict"? Was sind die Vor- und Nachteile es zu benutzen?

### JS-Code Beispiele:

```javascript
~~3.14
```
Frage: Welcher Wert wird zurück gegeben? 
**Antwort: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Frage: Welcher Wert wird zurück gegeben?
**Antwort: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Frage: Welchen Wert hat window.foo?
**Antwort: "bar"** 
Nur wenn window.foo einen falsey Wert hatte andernfalls wird es den eigentlichen Wert zurück geben.
```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Frage: Was steht in den beiden Alerts?
**Antwort: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Question: Welchen Wert hat foo.length?
**Antwort: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Frage: Welchen Wert hat foo.length?
**Antwort: `undefined`

### jQuery-Spezifische Fragen:

* Erklären Sie "chaining". 
* Erklären Sie "deferreds".
* Was sind jQuery-spezifische Optimierungen die Sie implementieren können?
* Was macht `.end()`? 
* Wie und warum würden Sie einen gebundenen Event Handler namespacen?
* Nennen Sie 4 verschiedene Werte die Sie der jQuery Methode übergeben können.
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Was ist die effects (oder fx) queue? 
* Was ist der Unterschied zwischen `.get()`, `[]`, and `.eq()`? 
* Was ist der Unterschied zwischen `.bind()`, `.live()`, und `.delegate()`? 
* Was ist der Underschied zwischen `$` und `$.fn`? Oder was ist `$.fn`?
* Optimieren Sie diesen Selektor: 
```javascript
$(".foo div#bar:eq(0)")
```
* Was ist der Unterschied zwischen 'delegate()' und 'live()'? 


### CSS-Spezifische Fragen:

* Erklären Sie was ein "reset" CSS File macht und was warum es nützlich ist.
* Erkären Sie Floats und wie sie funktionieren.
* Erkären Sie CSS Sprites. Wie würden Sie sie in einer Seite einbauen?
* Was sind Ihre Lieblings-Image-Replacement-Techniken und wann nutzen Sie welche?
* Wie liefern Sie Seiten für feature-gezwungene Browser aus?
	* Welche Techniken nutzen Sie?
* Welche Wege gibt es um Inhalte visuell verschwinden zu lassen (aber erreichbar für Screen Reader?)
* Haben Sie jemals ein Grid System benutzt, wenn ja welches bevorzugen Sie? 
* Haben Sie schon mal mobile-spezifisches CSS implementiert?
* Haben Sie Erfahrungen in SVG-Styling? 
* Wie optimieren Sie Ihre Seite für Drucker? 
* Nennen Sie einige "Gotchas" wenn man effizientes CSS schreiben möchte.
* Wie benutzen Sie CSS Preprocessors? (SASS, Compass, Stylus, LESS) 
	* Was mögen Sie und was nicht, an diesen. 
* Wie implementieren Sie ein Webdesign welches keine Standard Fonts verwendet?
	* Webfonts (font services wie: Google Webfonts, Typekit etc.)
* Erkären Sie wie ein Browser ermittelt, welche Element auf einen CSS-Selektor matchen.
 
### Optionale Fun Fragen:

* Was ist das coolste was Sie je entwickelt haben? Wo sind Sie besonders stolz drauf?
* Kennen Sie das HTML5 Gang Zeichen? 
* Sind Sie jemals auf einem Boot gewesen? 
* Welche Developer Tools nutzen Sie am liebsten?
* Haben Sie irgendwelche Haustiere? 
* Schreiben Sie auf einem Blatt Papier die Buchstaben A B C D E vertikal auf. Sortieren Sie diese nun nach absteigender Reihenfolge ohne eine Zeile Code zu schreiben. 
	* Warten und schauen ob der Kandidat das Blatt umdreht.
* Pirat oder Ninja? 
	* Bonus wenn es eine Kombination ist und ein guter Grund genannt wurde. (+2 für zombie monkey pirate ninjas) 
* Was würden Sie machen, wenn es keine Webentwicklung wäre? 
* Wo ist Carmen Sandiego?
	* Hint: Die Antwort wird immer falsch sein. 
* Was ist Ihr Lieblings-Feature vom Internet Explorer?
* Vervollständigen Sie diesen Satz: Brendan Eich and Doug Crockford are the __________ of javascript.
* jQuery: a great library or the greatest library? Discuss.
* http://www.w3schools.com/ or http://w3fools.com/
