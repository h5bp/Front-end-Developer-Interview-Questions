# Interjú kérdések front-end fejlesztoknek

@version 2.0.0

This repo contains a number of front-end interview questions that can be used when vetting potential candidates. It is by no means recommended to use every single question here on the same candidate (that would take hours). Choosing a few items from this list should help you vet the intended skills you require.

[Rebecca Murphey](http://rmurphey.com/)'s [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) is also a great resource to read up on before you head into an interview. 

**Note:** Keep in mind that many of these questions are open ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would.

#### Original Contributors

The majority of the questions were plucked from an [oksoclap](http://oksoclap.com/) thread created originally by [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) and contributed to by the following individuals:

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

### Általános kérdések:

* Milyen verziókovetoket használtál már (Git, SVN stb.)?
* Mi a számodra legelonyosebb fejlesztoi kornyezet? (Operációs rendszer, Szerkeszto, Bongeszo, Kellekek, stb)
* Részletezd hogyan készítesz el egy weboldalt!
* Can you describe the difference between progressive enhancement and graceful degradation?
	* Bonus points for describing feature detection
* Explain what "Semantic HTML" means.
* What browser do you primarily develop in and what developer tools do you use?
* How would you optimize a websites assets/resources?
	* Looking for a number of solutions which can include:
		* File concatenation
		* File minification
		* CDN Hosted
		* Caching
		* stb
* Why is it better to serve site assets from multiple domains?
	* How many resources will a browser download from a given domain at a time?
* Name 3 ways to decrease page load. (perceived or actual load time)
(* Ha bekerulsz egy projektbe és ott tabokat használnak de te szókozokkel dolgoztal eddig, mit teszel?)
* If you jumped on a project and they used tabs and you used spaces, what would you do?
	* Suggest the project utilize something like EditorConfig (http://editorconfig.org)
	* Conform to the conventions (stay consistant)
	* `issue :retab! command`
* Készíts egy egyszeru slideshow oldalt
	* Bónusz pont ha nem szukseges hozzá JS.
* Milyen eszkozokkel teszteled a kódod teljesítményét?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* stb
* Ha idén elsajátíthatnál egy technológiát, mi lenne az?
* Explain the importance of standards and standards bodies.
* Mi a FOUC? Hogyan kerulod el a FOUC-et?

### HTML specifikus kérdések:

* Mi a `doctype` feladata és hány fajtáját tudod megnevezni? 
* Mi a kulonbseg a `standard` és a `quirks` módok kozott?
* Nevezd meg az XHTML oldalak korlátait? 
	* Are there any problems with serving pages as `application/xhtml+xml`?  
* How do you serve a page with content in multiple languages? 
	* What kind of things must you be wary of when design or developing for multilingual sites?
* Használhatsz XHTML szintaxist HTML5-be?
* Hogyan használsz XML-t HTML5-ben?
* Mire valók a `data-` attribútumok? 
* What are the content models in HTML4 and are they different in HTML5? 
* Consider HTML5 as an open web platform. What are the building blocks of HTML5? 
* Mi a kulonbség a `cookie` a `sessionStorage` és a `localStorage` kozott.

### JS specifikus kérdések:

* Mit jelent az `event delegation`
* Magyarázd el hogyan mukodik a `this` a JavaScript-ben
* Explain how prototypal inheritance works
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
* Mi a kulonbség az kovetkezo kódok kozott: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Mi a kulonbseg a `.call` es az `.apply` kozott?
* Magyarázzd el mire jo a `Function.prototype.bind`? 
* Mikor szoktad optimalizálni a kódodat?
* Can you explain how inheritance works in JavaScript? 
* Mikor használod a `document.write()` funkciót?
	* Most generated ads still utilize `document.write()` although its use is frowned upon
* What's the difference between feature detection, feature inference, and using the UA string 
* Explain AJAX in as much detail as possible 
* Explain how JSONP works (and how it's not really AJAX) 
* Használtál már JavaScript template rendszert?
	* Ha igen mit? (Mustache.js, Handlebars, stb) 
* Explain "hoisting".
* Describe event bubbling. 
* What's the difference between an "attribute" and a "property"? 
* Why is extending built in JavaScript objects not a good idea? 
* Why is extending built ins a good idea? 
* Mi a kulonbség a document load és a document ready kozott?
* Mi a kulonbseg `==` és `===` kozott?
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

### JS példakkódok:

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
Kérdés: What is the value of window.foo? 
**Válasz: "bar"** 
only if window.foo was falsey otherwise it will retain its value.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Kérdés: What is the outcome of the two alerts above? 
**Válasz: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Kérdés: What is the value of foo.length? 
**Válasz: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Kérdés: What is the value of foo.length? 
**Válasz: `undefined`

### jQuery-Specific Questions:

* Mit jelent a `chaining`.
* Mit jelent a `deferreds`.
* What are some jQuery specific optimizations you can implement?
* Mire használhatjuk az `.end()` funkciót? 
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


### CSS specifikus kérdések:

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
* Kalóz vagy Ninja?
	* Bonus if it's a combo and a good reason was given (+2 for zombie monkey pirate ninjas) 
* If not Web Development, what would you be doing? 
* Where in the world is Carmen Sandiego?
	* Hint: their answer is always wrong 
* Mit szeretsz a legjobban az Internet Explorerben?
* Complete this sentence: Brendan Eich and Doug Crockford are the __________ of javascript.
* jQuery: a great library or the greatest library? Discuss.
* http://www.w3schools.com/ vagy http://w3fools.com/