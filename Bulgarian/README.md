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

* Какво научихте вчера / тази седмица?
* Какво ви привлича в писането на код?
* Какви неща свързани с потребителския интерфейс, сигурността, бързодействието, SEO, поддръжката или технологиите взимате предвид, когато създавате веб приложения или сайтове?
* Разкажете за предпочитаната среда за разработка. (операционна система, редактор, браузър, инструменти и т.н.)
* Можете ли да обясните последователността от действия, които извършвате, когато създавате уеб страници?
* Можете ли да обясните разликите между progressive enhancement и graceful degradation?
  * Бонус точки за обяснението на feature detection (определяне на това, какво поддържа браузъра и какво не)
* Обяснете какво означава "Semantic HTML".
* Как бихте оптимизирали зареждането на ресурси за дадена уеб страница?
  * Има различни техники, които решават този проблем. Сред тях са:
    * Събиране на няколко файла заедно
    * Минифициране на файловете (премахване на празни места, махане на коментари и т.н.)
    * Използване на CDN за доставяне на ресурсите
    * Кеширане
    * и т.н.
* Защо е добра идея да сайтовете да свалят ресурсите от няколко различни домейна?
  * По колко ресурса едновременно свалят браузърите от даден домейн?
* Назовете 3 начина да намалите скоростта на зареждане на дадена страница. (забележимата или реалната скорост на зареждане)
* Ако се присъедините към проект, който използва табулации, а вие използвате разстояния за отстъп, какво ще направите?
  * Предложете EditorConfig (http://editorconfig.org) или подобен проект
  * Използвайте конвенцията на проекта
  * `Използвайте :retab! командата`
* Реализирайте примерно слайд-шоу
  * Бонус точки, ако не използвате JS.
* Какви инструменти използвате за да тествате бързодействието на вашия код?
  * Profiler, JSPerf, Dromaeo
* Ако можете да научите много добре 1 технология тази година, каква ще е тя?
* Каква е разликата между Long-Polling, Websockets и SSE?
* Обяснете важността на стандартите и организациите за стандартизация.
* Какво е FOUC? Как се справяте с FOUC?

####[[⬆]](#toc) <a name='html'>HTML въпроси:</a>

* Какво прави `doctype`?
* Каква е разликат между standards mode и quirks mode?
* Какви са ограниченията при XHTML страниците?
  * Има ли проблеми при обработката на страници с `application/xhtml+xml`?
* Как връщате страници със съдържание на няколко езика?
  * Какви неща трябва да се имат предвид, когато правите дизайн или разработвате многоезични страници?
* За какво служат HTML атрибутите, които започват с `data-`?
* Представете си HTML5 като отворена уеб платформа. Кои са градивните елементи на HTML5?
* Обяснете разликата между бисквитки, sessionStorage и localStorage.

####[[⬆]](#toc) <a name='css'>CSS въпроси:</a>

* Обяснете както е "reset" CSS файл и за какво е необходим.
* Обяснете плаващите елементи (floats) и как работят.
* Кои са различните clearing техники и кои в какъв контекст се използват?
* Обяснете CSS sprite-овете, и как можете да ги вкарате на уеб страница или сайт.
* Кои са любимите ви техники, които заменят картинките и в кои случаи кои от тях използвате?
* Коя техника предпочитате: CSS свойства за всеки браузър, условно включени .css файлове, или... нещо друго?
* Как показвате страниците си на браузъри, които не поддържат част от възможностите на HTML5?
  * Какви техники/процеси използвате?
* Какви са различните начини визуално да скриете съсържание от уеб страницата (и да го направите видимо само за екранните четци)?
* Използвали ли сте грид система и ако да, коя предпочитате?
* Изполвали ли сте media queries или специфичен за мобилните платформи layouts или CSS?
* Запознати ли сте със стилизирането на SVG?
* Как оптимизирате вашите уеб страници за принтиране?
* Кои са някои от "триковете" за писане на ефективен CSS?
* Какви са предимствата/недостатъците при използване на SASS, Compass, Stylus, LESS и подобни?
  * Опишете какво ви харесва и не ви харесва при използването им.
* Как реализирате уеб дизайни, които използват нестандартни фонтове?
  * Уеб фонтове (фонт сървиси като: Google Webfonts, Typekit и т.н.)
* Обяснете как уеб браузърите разбират кои елементи отговарят на даден CSS селектор.
* Как разбирате box модела и как казвате на уеб браузъра чрез CSS да рендира вашия лейаут с различен box модел.

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
