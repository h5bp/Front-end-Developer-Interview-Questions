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
* How do you go about testing your JavaScript?
* AMD vs. CommonJS?
* Which JavaScript libraries have you used? 
* Have you ever looked at the source code of the libraries/frameworks you use?
* What's a hashtable?
* What are `undefined` and `undeclared` variables? 
* What is a closure, and how/why would you use one? 
	* Your favorite pattern used to create them? argyle (Only applicable to IIFEs)  
* What's a typical use case for anonymous functions? 
* Explain the "JavaScript module pattern" and when you'd use it. 
	* Bonus points for mentioning clean namespacing. 
	* What if your modules are namespace-less?  
* How do you organize your code? (module pattern, classical inheritance?) 
* What's the difference between host objects and native objects? 
* Difference between: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* What's the difference between `.call` and `.apply`? 
* explain `Function.prototype.bind`? 
* When do you optimize your code? 
* Can you explain how inheritance works in JavaScript?   
* When would you use `document.write()`?
	* Most generated ads still utilize `document.write()` although its use is frowned upon
* What's the difference between feature detection, feature inference, and using the UA string 
* Explain AJAX in as much detail as possible 
* Explain how JSONP works (and how it's not really AJAX) 
* Have you ever used JavaScript templating?
	* If so, what libraries have you used? (Mustache.js, Handlebars etc.) 
* Explain "hoisting".
* Describe event bubbling. 
* What's the difference between an "attribute" and a "property"? 
* Why is extending built in JavaScript objects not a good idea? 
* Why is extending built ins a good idea? 
* Difference between document load event and document ready event? 
* What is the difference between `==` and `===`? 
* Explain how you would get a query string parameter from the browser window's URL. 
* Explain the same-origin policy with regards to JavaScript. 
* Describe inheritance patterns in JavaScript. 
* Make this work: 
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Describe a strategy for memoization (avoiding calculation repetition) in JavaScript. 
* Why is it called a Ternary expression, what does the word "Ternary" indicate? 
* What is the arity of a function?  
* What is `"use strict";`? what are the advantages and disadvantages to using it?

### JS-Code Examples:

```javascript
~~3.14
```
Question: What value is returned from the above statement? 
**Answer: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Question: What value is returned from the above statement? 
**Answer: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Question: What is the value of window.foo? 
**Answer: "bar"** 
only if window.foo was falsey otherwise it will retain its value.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Question: What is the outcome of the two alerts above? 
**Answer: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Question: What is the value of foo.length? 
**Answer: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Question: What is the value of foo.length? 
**Answer: `undefined`

### jQuery-Specific Questions:

* Explain "chaining". 
* Explain "deferreds".
* What are some jQuery specific optimizations you can implement?
* What does `.end()` do? 
* How, and why, would you namespace a bound event handler? 
* Name 4 different values you can pass to the jQuery method.
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* What is the effects (or fx) queue? 
* What is the difference between `.get()`, `[]`, and `.eq()`? 
* What is the difference between `.bind()`, `.live()`, and `.delegate()`? 
* What is the difference between `$` and `$.fn`? Or just what is `$.fn`.
* Optimize this selector: 
```javascript
$(".foo div#bar:eq(0)")
```
* Difference between 'delegate()' and 'live()'? 


### CSS-Specific Questions:

* Describe what a "reset" CSS file does and how it's useful. 
* Describe Floats and how they work. 
* What are the various clearing techniques and which is appropriate for what context? 
* Explain CSS sprites, and how you would implement them on a page or site. 
* What are your favourite image replacement techniques and which do you use when? 
* CSS property hacks, conditionally included .css files, or... something else? 
* How do you serve your pages for feature-constrained browsers? 
	* What techniques/processes do you use?  
* What are the different ways to visually hide content (and make it available only for screen readers)? 
* Have you ever used a grid system, and if so, what do you prefer? 
* Have you used or implemented media queries or mobile specific layouts/CSS? 
* Any familiarity with styling SVG? 
* How do you optimize your webpages for print? 
* What are some of the "gotchas" for writing efficient CSS? 
* Do you use CSS preprocessors? (SASS, Compass, Stylus, LESS) 
	* If so, describe what you like and dislike about the CSS preprocessors you have used. 
* How would you implement a web design comp that uses non-standard fonts? 
	* Webfonts (font services like: Google Webfonts, Typekit etc.)
* Explain how a browser determines what elements match a CSS selector?  

### Optional fun Questions:

* What's the coolest thing you've ever coded, what are you most proud of?
* Do you know the HTML5 gang sign? 
* Are you now, or have you ever been, on a boat. 
* What are your favorite parts about the developer tools you use?
* Do you have any pet projects? What kind? 
* Explain the significance of "cornify". 
* On a piece of paper, write down the letters A B C D E vertically. Now put these in descending order without writing one line of code. 
	* Wait and see if they turn the paper upside down
* Pirate or Ninja? 
	* Bonus if it's a combo and a good reason was given (+2 for zombie monkey pirate ninjas) 
* If not Web Development, what would you be doing? 
* Where in the world is Carmen Sandiego?
	* Hint: their answer is always wrong 
* What's your favorite feature of Internet Explorer?
* Complete this sentence: Brendan Eich and Doug Crockford are the __________ of javascript.
* jQuery: a great library or the greatest library? Discuss.
* http://www.w3schools.com/ or http://w3fools.com/
