#JOB INTERVIEW QUESTIONNAIRE

@version 1.0
 
##Contributors

@bentruyman (http://bentruyman.com/), @roger_raymond (http://twitter.com/iansym), @ajpiano (http://ajpiano.com/), @paul_irish (http://paulirish.com/), @SlexAxton (http://alexsexton.com/), @boazsender (http://boazsender.com/), @miketaylr (http://miketaylr.com/), @vladikoff (http://vladfilippov.com/), @gf3 (http://gf3.ca/), @jon_neal (http://twitter.com/jon_neal), @wookiehangover (http://wookiehangover.com/) and @darcy_clarke (http://darcyclarke.me)

## General Questions:

* Êtes-vous sur Twitter ? 
	* Si oui, qui suivez-vous ?
* Êtes-vous sur GitHub ?  
	* Si oui, donnez quelques exemples de dépôt que vous suivez.
* A quel blog êtes vous abonnez?  
* Quel logiciel de gestion de versions avez-vous déjà utilisé ? (Git, SVN etc.)
* Quel est votre environnement de développement préféré ? (OS, Editor, Browsers, Tools etc.)
* Pouvez-vous décrire votre workflow lorsque vous créez une page web ? 
* Pouvez-vous décrire la différence entre amélioration progressive et dégradation progressive ? 
	* Un point bonus si vous décrivez des méthodes de détections
* Expliquez ce que le terme "sémantique HTML" signifie. 
* Quel naviguateur et outils de débogage web utilisez-vous ?
* Comment optimisez vous les performances de vos page web (assets/resources) ?
	* Énumérez quelques solutions comme :
		* La concaténation des fichiers
		* La minification des fichiers
		* L'utilisation d'un Content Delivery Network (CDN)
		* La mise en cache
		* etc.
* Pourquoi est-il préférable de disposer ses assets sur des domaines différents ? 
	* Combien de ressources différentes un navigateur peut télécharger à partir d'un même domaine à un instant T ? 
* Donnez 3 façons qui permettent de réduire le temps de chargement d'une page. (perçu ou réel) 
* Si vous démarrez sur un projet existant, que votre prédécesseur a utilisé des tabulations pour indenter son code et que vous utilisez des espaces, que faites-vous ?
	* Proposez d'utiliser quelque chose comme EditorConfig (http://editorconfig.org)
	* Rester fidèle aux conventions
	* `issue :retab! command`
* Développez un simple slideshow
	* Un point bonus si vous le faites sans JS  
* Quel outils utilisez vous pour tester la performance de votre code ?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* etc.
* If you could master one technology this year, what would it be? 
* Si vous pouviez maitriser parfaitement une technologie cette année, laquelle serait-ce ?
* Expliquez l'importance des standards et des organisations gérant les standards.

## HTML-Specific Questions:

* What's a `doctype` do, and how many can you name? 
* What's the difference between standards mode and quirks mode? 
* What are the limitations when serving XHTML pages? 
	* Are there any problems with serving pages as `application/xhtml+xml`?  
* How do you serve a page with content in multiple languages? 
	* What kind of things must you be wary of when design or developing for multilingual sites?
* Can you use XHTML syntax in HTML5? 
* How do you use XML in HTML5? 
* What are `data-` attributes good for? 
* What are the content models in HTML4 and are they different in HTML5? 
* Consider HTML5 as an open web platform. What are the building blocks of HTML5? 
* Describe the difference between cookies, sessionStorage and localStorage. 

## JS-Specific Questions

* Which JavaScript libraries have you used? 
* How is JavaScript different from Java? 
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
* What is FOUC? How do you avoid FOUC?
* Describe event bubbling. 
* What's the difference between an "attribute" and a "property"? 
* Why is extending built in JavaScript objects not a good idea? 
* Why is extending built ins a good idea? 
* Difference between document load event and document ready event? 
* What is the difference between `==` and `===`? 
* Explain how you would get a query string parameter from the browser window's URL. 
* Explain the same-origin policy with regards to JavaScript. 
* Explain event delegation. 
* Describe inheritance patterns in JavaScript. 
* Make this work: 
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Describe a strategy for memoization (avoiding calculation repetition) in JavaScript. 
* Why is it called a Ternary statement, what does the word "Ternary" indicate? 
* What is the arity of a function?  

## JS-Code Examples:

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


## jQuery-Specific Questions:

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

## CSS-Specific Questions:

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

## Optional fun Questions:

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
