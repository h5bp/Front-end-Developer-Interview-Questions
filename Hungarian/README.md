# Interjú kérdések front-end fejlesztőknek

@version 2.0.0

This repo contains a number of front-end interview questions that can be used when vetting potential candidates. It is by no means recommended to use every single question here on the same candidate (that would take hours). Choosing a few items from this list should help you vet the intended skills you require.

[Rebecca Murphey](http://rmurphey.com/) [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) cikke is hasznos alapja lehet egy interjúnak. 

**Megjegyzés:** Ne feledd, hogy a kérdések többsége érdekes beszélgetésé alakúlhat, ami többet elárúlhat az emberről mint ha csak egyszerű válaszokat adna.

#### Eredeti közreműködők

The majority of the questions were plucked from an [oksoclap](http://oksoclap.com/) thread created originally by [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) and contributed to by the following individuals:

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
* Mi a számodra legelőnyösebb fejlesztői környezet? (Operációs rendszer, szerkesztő, böngésző, fejlesztői eszközök, stb.)
* Részletezd hogyan készítesz el egy weboldalt.
* Can you describe the difference between progressive enhancement and graceful degradation?
	* Bonus points for describing feature detection.
* Magyarázd el mit jelent a "szemantikus HTML".
* Milyen böngészőt és milyen eszközöket használsz a fejlesztéshez?
* How would you optimize a websites assets/resources?
	* Looking for a number of solutions which can include:
		* File concatenation
		* File minification
		* CDN Hosted
		* Caching
		* stb
* Why is it better to serve site assets from multiple domains?
	* How many resources will a browser download from a given domain at a time?
* Nevezz meg 3 lehetoseget az oldalletoltes idotartamanak csokkentésére. (perceived or actual load time)
* If you jumped on a project and they used tabs and you used spaces, what would you do?
* Ha beszállsz egy projectbe, és ők tabot használnak te pedig szókozt a kód rendezésénél, mit teszel?
	* Suggest the project utilize something like [EditorConfig](http://editorconfig.org)
	* Conform to the conventions (stay consistant)
	* `issue :retab! command`
* Készíts egy egyszerű slideshow oldalt.
	* Bónusz pont ha nem szükséges hozzá JS.
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
* What are the content models in HTML4 and are they different in HTML5?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Mi a különbség a `cookie` a `sessionStorage` és a `localStorage` között.

### JS specifikus kérdések:

* Mit jelent az `event delegation`?
* Magyarázd el hogyan működik a `this` a JavaScript-ben.
* Explain how prototypal inheritance works.
* Hogyan teszteled a JavaScript kódodat?
* AMD vs. CommonJS?
* Melyik JS library-ket használtad már?
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
* Mi a különbség az következő kódok között:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Mi a különbség a `.call` és az `.apply` között?
* Magyarázd el mire jo a `Function.prototype.bind`?
* Mikor szoktad optimalizálni a kódodat?
* Magyarázd el hogyan működik az öröklődés szabálya a JavaScriptben?
* Mikor használod a `document.write()` funkciót?
	* Most generated ads still utilize `document.write()` although its use is frowned upon
* What's the difference between feature detection, feature inference, and using the UA string.
* Magyarázd meg az AJAX működését a leheto legrészletesebben.
* Explain how JSONP works (and how it's not really AJAX)
* Használtál már JavaScript template rendszert?
	* Ha igen mit? (Mustache.js, Handlebars, stb.)
* Mit jelent a "hoisting"?
* Describe event bubbling.
* Mi a különbség az "attribute" és a "property" között?
* Why is extending built in JavaScript objects not a good idea?
* Why is extending built ins a good idea?
* Mi a különbség a "document load" és a "document ready" között?
* Mi a különbség `==` és `===` között?
* Explain how you would get a query string parameter from the browser window's URL.
* Explain the same-origin policy with regards to JavaScript.
* Ismertesd a JS öröklési mintáját.
* Javítsd ki az alábbi példát:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Describe a strategy for memorization (avoiding calculation repetition) in JavaScript.
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is the arity of a function?
* What is `"use strict";`? what are the advantages and disadvantages to using it?

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
* What are some jQuery specific optimizations you can implement?
* Mire használhatjuk az `.end()` funkciót? 
* How, and why, would you namespace a bound event handler? 
* Name 4 different values you can pass to the jQuery method.
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* What is the effects (or fx) queue? 
* Mi a különbség `.get()`, `[]`, és `.eq()` között? 
* Mi a különbség `.bind()`, `.live()`, és `.delegate()` között? 
* Mi a különbség `$` és `$.fn` között? Vagy mit jelent a `$.fn`.
* Optimize this selector: 
```javascript
$(".foo div#bar:eq(0)")
```
* Mi a különbség `delegate()` és `live()` között? 

### CSS specifikus kérdések:

* Describe what a "reset" CSS file does and how it's useful. 
* Describe Floats and how they work. 
* What are the various clearing techniques and which is appropriate for what context? 
* Magyarázd el a CSS sprites működését és, hogy hogyan alkalmazod a weboldalon?
* What are your favourite image replacement techniques and which do you use when? 
* CSS property hacks, conditionally included .css files, or... something else? 
* How do you serve your pages for feature-constrained browsers? 
	* What techniques/processes do you use?  
* What are the different ways to visually hide content (and make it available only for screen readers)? 
* Have you ever used a grid system, and if so, what do you prefer? 
* Használtál már grid rendszer, ha igen nevezz meg párat. ([960 Grid System](http://960.gs/), [Foundation](http://foundation.zurb.com/), [Twitter Bootsrtap](http://twitter.github.io/bootstrap/))
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Any familiarity with styling SVG?
* Hogyan alakítod a weboldalad nyomtatóbaráttá?
* What are some of the "gotchas" for writing efficient CSS? 
* Do you use CSS preprocessors? (SASS, Compass, Stylus, LESS) 
	* If so, describe what you like and dislike about the CSS preprocessors you have used. 
* How would you implement a web design comp that uses non-standard fonts? 
	* Webfonts (font services like: Google Webfonts, Typekit etc.)
* Explain how a browser determines what elements match a CSS selector?  

### Választható és vicces kérdések:

* Mi a legjobb dolog, amit eddig kódoltál? Mire vagy a legbuszkébb?
* Do you know the HTML5 gang sign? 
* Are you now, or have you ever been, on a boat. 
* What are your favorite parts about the developer tools you use?
* Do you have any pet projects? What kind? 
* Explain the significance of "cornify". 
* On a piece of paper, write down the letters A B C D E vertically. Now put these in descending order without writing one line of code. 
	* Wait and see if they turn the paper upside down
* Kalóz vagy Ninja?
	* Bónusz, ha mindketto és jó indokot adott rá (+2 ha zombie majom kalóz ninják) 
* Ha nem fejlesztesz, mi mást szoktál csinálni?
* Hol lehet vajon Carmen Sandiego?
	* Tipp: nincs rá helyes válasz
* Mit szeretsz a legjobban az Internet Explorerben?
* Fejezd be a mondatot: Brendan Eich és Doug Crockford a JavaScript __________.
* jQuery: a great library or the greatest library? Discuss.
* [W3School](http://www.w3schools.com/) vagy [W3Fools](http://w3fools.com/)