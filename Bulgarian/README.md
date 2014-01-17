#Въпроси за интервю за front-end разработчици

Това репозитори съдържа въпроси от интервюта на front-end разработчици, които могат да бъдат използвани за отсяване на потенциални кандидати. Не препоръчваме използването на всеки въпрос за всеки кандидат (това би отнело часове). Избирането на няколко въпроса от списъка би могло да помогне да се проверят търсените умения у кандидатите.

Статията [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) на [Rebecca Murphey](http://rmurphey.com/) също е чудесен ресурс за четене преди провеждането на интервю.

**Бележка:** Имайте предвид, че много от тези въпроси могат да породят интересни дискусии и да ви помогнат по-добре да проверите познанията и начина на мислене на кандидата, отколкото ако получавате директен отговор.

## <a name='toc'>Съдържание</a>

  1. [Участници в проекта](#contributors)
  1. [Общи въпроси](#general)
  1. [HTML въпроси](#html)
  1. [CSS въпроси](#css)
  1. [JS въпроси](#js)
  1. [jQuery въпроси](#jquery)
  1. [Въпроси, свързани с програмиране](#jscode)
  1. [Забавни въпроси](#fun)
  1. [Допълнителни ресурси](#references)

####[[⬆]](#toc) <a name='contributors'>Участници в проекта:</a>

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
* [@iansym](http://twitter.com/iansym) - http://twitter.com/iansym

####[[⬆]](#toc) <a name='general'>Общи въпроси:</a>

* What did you learn yesterday/this week?
* What excites or interests you about coding?
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
* Talk about your preferred development environment. (OS, Editor, Browsers, Tools etc.)
* Can you describe your workflow when you create a web page?
* Can you describe the difference between progressive enhancement and graceful degradation?
  * Bonus points for describing feature detection
* Explain what "Semantic HTML" means.
* How would you optimize a websites assets/resources?
  * Looking for a number of solutions which can include:
    * File concatenation
    * File minification
    * CDN Hosted
    * Caching
    * etc.
* Why is it better to serve site assets from multiple domains?
  * How many resources will a browser download from a given domain at a time?
* Name 3 ways to decrease page load. (perceived or actual load time)
* If you jumped on a project and they used tabs and you used spaces, what would you do?
  * Suggest the project utilize something like EditorConfig (http://editorconfig.org)
  * Conform to the conventions (stay consistent)
  * `issue :retab! command`
* Write a simple slideshow page
  * Bonus points if it does not use JS.
* What tools do you use to test your code's performance?
  * Profiler, JSPerf, Dromaeo
* If you could master one technology this year, what would it be?
* What are the differences between Long-Polling, Websockets and SSE?
* Explain the importance of standards and standards bodies.
* What is FOUC? How do you avoid FOUC?

####[[⬆]](#toc) <a name='html'>HTML въпроси:</a>

* What's a `doctype` do?
* What's the difference between standards mode and quirks mode?
* What are the limitations when serving XHTML pages?
  * Are there any problems with serving pages as `application/xhtml+xml`?
* How do you serve a page with content in multiple languages?
  * What kind of things must you be wary of when design or developing for multilingual sites?
* What are `data-` attributes good for?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Describe the difference between cookies, sessionStorage and localStorage.

####[[⬆]](#toc) <a name='css'>CSS въпроси:</a>

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
* What are the advantages/disadvantages of using CSS preprocessors? (SASS, Compass, Stylus, LESS)
  * If so, describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
  * Webfonts (font services like: Google Webfonts, Typekit etc.)
* Explain how a browser determines what elements match a CSS selector?
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

####[[⬆]](#toc) <a name='js'>JS въпроси:</a>

* Explain event delegation
* Explain how `this` works in JavaScript
* Explain how prototypal inheritance works
* How do you go about testing your JavaScript?
* AMD vs. CommonJS?
* What's a hashtable?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`. 
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* What's a typical use case for anonymous functions?
* Explain the "JavaScript module pattern" and when you'd use it.
  * Bonus points for mentioning clean namespacing.
  * What if your modules are namespace-less?
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
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

####[[⬆]](#toc) <a name='jquery'>jQuery въпроси:</a>

* Обяснете "chaining".
* Обяснете "deferreds".
* Какви специфични за jQuery оптимизации, можете да направите?
* Какво прави `.end()`?
* Как и защо бихте сложили bound event handler в namespace?
* Назовете 4 различни типа стойности, които можете да подадете на jQuery метод.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Какво е effects (или fx) queue?
* Каква е разликата между `.get()`, `[]`, и `.eq()`?
* Каква е разликата между `.bind()`, `.live()`, и `.delegate()`?
* Каква е разликата между `$` и `$.fn`? Или просто: Какво е `$.fn`?
* Оптимизирайте този селектор:
```javascript
$(".foo div#bar:eq(0)")
```

####[[⬆]](#toc) <a name='jscode'>Въпроси, свързани с програмиране:</a>


```javascript
modulo(12, 5) // 2
```
*Въпрос: Имплементирайте функцията modulo която отговаря на горното условие (да връща 2 при аргументи 12 и 5)*


```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Въпрос: Каква стойност ще върне горният израз?*

**Отговор: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Въпрос: Каква е стойността на `window.foo`?*

**Отговор: "bar", ако `window.foo` има стойност `false`, иначе стойността на `window.foo`)**

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Въпрос: Какво ще изкарат двете alert функции от горния код?*

**Отговор: "Hello World" и ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Въпрос: Каква е стойността на `foo.length`?*

**Отговор: `2`**

####[[⬆]](#toc) <a name='fun'>Забавни въпроси:</a>

* Кое е най-якото нещо, което сте писали и от което сте най-горд?
* Кое най-много ви допада в инструментите за разработчици, които използвате?
* Разработвате ли някакви проекти като хоби? Какви?
* Какво най-много ви харесва в Internet Explorer?

####[[⬆]](#toc) <a name='references'>Допълнителни ресурси:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
