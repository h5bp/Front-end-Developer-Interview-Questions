---
title: Въпроси за интервю за front-end разработчици
layout: layouts/page.njk
permalink: /translations/bulgarian/index.html
lang : bg
---

# Въпроси за интервю за front-end разработчици

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
  1. [Въпроси, свързани с тестване](#testing)
  1. [Въпроси, свързани с бързодействие](#performance)
  1. [Мрежови въпроси](#network)
  1. [Въпроси, свързани с програмиране](#jscode)
  1. [Забавни въпроси](#fun)
  1. [Допълнителни ресурси](#references)

#### [[⬆]](#toc) <a name='contributors'>Участници в проекта:</a>

Мнозинството от въпроси са взети от [oksoclap](http://oksoclap.com/) измислени от [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) и благодарение на:

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

#### [[⬆]](#toc) <a name='general'>Общи въпроси:</a>

* Какво научихте вчера / тази седмица?
* Какво ви привлича в писането на код?
* С какво техническо предизвикателство се сблъскахте наскоро и как го решихте?
* Какво свързва потребителския интерфейс, сигурността, функционирането, SEO, поддръжката или технологиите по между им при създаването на уеб приложения или сайтове?
* Разкажете за предпочитанията ви към операционни системи, редактори, браузъри, инструменти и т.н.
* С кои системи за управление на версиите (source control) сте запознати?
* Можете ли да обясните последователността от действия, които извършвате, когато създавате уеб страници?
* Ако имате 5 различни стилови файла, как бихте ги интегрирали?
* Можете ли да обясните разликите между progressive enhancement и graceful degradation?
* Как бихте оптимизирали зареждането на ресурси за дадена уеб страница?
* По колко ресурса едновременно свалят браузърите от даден домейн?
    * Какви са изключенията?
* Назовете 3 начина да намалите скоростта на зареждане на уеб страница (забележимата или реалната скорост на зареждане).
* Ако започнете работа по проект, в чийто код са използвани табулации, а вие сте използвали интервали, какво ще направите?
* Обяснете как бихте изградили страница със слайд-шоу.
* Ако можете да научите много добре 1 технология тази година, каква ще е тя?
* Обяснете важността на стандартите и организациите за стандартизация.
* Какво е Flash of unstyled content? Как се справяте с FOUC?
* Обяснете какво е ARIA и екранни четци и как да правим сайтовете по-достъпни.
* Обяснете предимствата и недостатъците на CSS анимациите пред тези на JavaScript.
* Какво означава CORS и какъв проблем решава?


#### [[⬆]](#toc) <a name='html'>HTML въпроси:</a>

* Какво прави `doctype`?
* Каква е разликата между режимите "standards mode", "almost standards mode" и "quirks mode"?
* Каква е разликата между HTML и XHTML?
* Има ли проблеми при обработката на страници с `application/xhtml+xml`?
* Как показвате страници със съдържание на няколко езика?
* Какви неща трябва да се имат предвид, когато правите дизайн или разработвате многоезични страници?
* За какво служат HTML атрибутите, които започват с `data-`?
* Представете си HTML5 като отворена уеб платформа. Кои са градивните елементи на HTML5?
* Обяснете разликата между бисквитки, `sessionStorage` и `localStorage`.
* Обяснете разликата `<script>`, `<script async> ` и `<script defer>`.
* Защо е добре да се зарежда CSS `<link>` в елемента `<head></head>` и JS `<script>` преди затварящия таг `</body>`? Знаете ли за изключения?
* Какво означава progressive rendering?
* Защо бихте използвали `srcset` атрибут в `<img>` таг? Обяснете процеса, през който минава браузърът, когато обработва съдържанието на този атрибут.
* Използвали ли сте различни шаблонни HTML езици?


#### [[⬆]](#toc) <a name='css'>CSS въпроси:</a>

* Каква е разликата между class и ID в CSS?
* Каква е разликата между "resetting" и "normalizing" в CSS? Кое бихте избрали и защо?
* Обяснете плаващите елементи (floats) и как работят.
* Обяснете z-index и как се формира наслагването на елементите.
* Опишете BFC (Block Formatting Context) и как работи той.
* Кои са различните clearing техники и кои в какъв контекст се използват?
* Обяснете CSS sprite-овете, и как можете да ги вкарате на уеб страница или сайт.
* Кои са любимите ви техники, които заменят картинките и в кои случаи кои от тях използвате?
* Как бихте подходили за да решите специфичните стилове за различните браузъри?
* Как показвате страниците си на браузъри, които не поддържат част от възможностите на HTML5?
  * Какви техники/процеси използвате?
* Какви са различните начини визуално да скриете съдържание от уеб страницата (и да го направите видимо само за екранните четци)?
* Използвали ли сте грид система и ако да, коя предпочитате?
* Използвали ли сте media queries или специфичен за мобилните платформи layouts или CSS?
* Запознати ли сте със стилизирането на SVG?
* Как оптимизирате вашите уеб страници за принтиране?
* Кои са някои от "триковете" за писане на ефективен CSS?
* Какви са предимствата/недостатъците при използване на препроцесори?
  * Опишете какво ви харесва и не ви харесва при използването им.
* Как реализирате уеб дизайни, които използват нестандартни фонтове?
* Обяснете как уеб браузърите разбират кои елементи отговарят на даден CSS селектор.
* Опишете псевдо-елементите и обяснете за какво се използват.
* Обяснете как разбирате box model и как бихте накарали браузъра с CSS да изпълни layout в различни box model-и.
* Какво прави `* { box-sizing: border-box; } `? Какви са предимствата му?
* Направете списък на всички стойности на `display`, за които можете да се сетите.
* Каква е разликата между inline и inline-block?
* Каква е разликата между позиционирането на елементите relative, fixed, absolute и static?
* 'C' в CSS идва от Cascading. Какъв приоритет имат стиловете при наслагването им (няколко примера)? Как бихте използвали това?
* Какви CSS frameworks сте ползвали самостоятелно или в проекти? Как бихте ги променили / обогатили?
* Тествали ли сте новия CSS Flexbox или Grid specs?
* Каква е разликата между responsive design и adaptive design на сайт?
* Работили ли сте с retina graphics? Ако да, какви техники използвахте?
* Има ли причина да ползвате translate() вместо абсолютно позициониране и обратно? Защо?

#### [[⬆]](#toc) <a name='js'>JS въпроси:</a>

* Обяснете event delegation.
* Обяснете как работи `this` в JavaScript.
* Обяснете как работи наследяването на прототипи (prototypal inheritance).
* AMD или CommonJS?
* Обяснете защо този код не работи като IIFE: `function foo(){ }();`.
  * Какво е нужно да се промени, за да може кодът да работи като IIFE?
* Каква е разликата между променлива, която е: `null`, `undefined` или недекларирана?
  * Как проверявате всяко от тези състояния на променливите?
* Какво е closure? Как и защо се използва?
* Кога се използват анонимните функции?
* Как организирате своя код? (module патърн, класическо наследяване?)
* Каква е разликата между host обекти и native обекти?
* Каква е разликата между `function Person(){}`, `var person = Person()` и `var person = new Person()`?
* Каква е разликата между `.call` и `.apply`?
* Обяснете `Function.prototype.bind`?
* В какви случаи бихте използвали `document.write()`?
* Каква е разликата между feature detection, feature inference, и използването на user agent (UA) string?
* Обяснете AJAX в детайли.
* Какви са предимствата и недостатъците при употребата на AJAX?
* Обяснете как работи JSONP (и защо не е точно AJAX).
* Използвали ли сте JavaScript темплейти?
  * Ако да, коя библиотека сте използвали?
* Обяснете "hoisting".
* Обяснете "event bubbling".
* Каква е разликата между "attribute" и "property"?
* Защо extending built-in в JavaScript обектите не е добра идея?
* Каква е разликата между събитията "document load" и "document DOMContentLoaded"?
* Каква е разликата между `==` и `===`?
* Обяснете same-origin policy от гледна точка на JavaScript.
* Оправете кода, така че да работи:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Защо тернарният оператор се нарича така? Какво означава думата "тернарен"?
* Какво е `"use strict";`? Какви са предимствата и недостатъците на ползването му в кода?
* Напишете for loop, който стига до 100 и извежда "fizz" за всички числа, които се делят на 3, "buzz" за тези, които се делят 5 и "fizzbuzz" за числата, които се делят и на 3 и на 5.
* Защо по правило е добра идея да се остави global scope на един уебсайт непроменен?
* Защо бихте използвали нещо като `load` събитието? Това събитие има ли недостатъци? Знаете ли алтернативи и защо бихте ги използвали?
* Обяснете какво е single page app и как може да се оптимизира за търсачките.
* Докъде се простира опитът ви с Promises и / или техните polyfills?
* Какви са предимствата и недостатъците при използване на Promises вместо callbacks?
* Кои са някои предимства / недостатъци на писането на JavaScript код на език, който се компилира до JavaScript?
* Какви инструменти и техники използвате, когато дебъгвате JavaScript код?
* Кои конструкции на езика използвате, за да итерирате атрибути (properties) на обекти и елементи в масиви?
* Обяснете разликата между mutable и immutable обекти.
  * Дайте пример за immutable обект в JavaScript.
  * Какви са предимствата и недостатъците на това един обект да бъде immutable?
  * Как може да направите обект immutablе във Вашия собствен код?
* Обяснете разликата между синхронни и асинхронни функции.
* Какво е event loop?
  * Каква е разликата между call stack и task queue?
* Обяснете разликите при използването на `foo` в примерите: `function foo() {}`; `var foo = function() {}`
* Какви са разликите при създаавнето на променливи с `let`, `var` и `const`?

#### [[⬆]](#toc) <a name='jquery'>jQuery въпроси:</a>

* Обяснете "chaining".
* Обяснете "deferreds".
* Какви специфични за jQuery оптимизации, можете да направите?
* Какво прави `.end()`?
* Как и защо бихте сложили bound event handler в namespace?
* Назовете 4 различни типа стойности, които можете да подадете на jQuery метод.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object и т. н.
* Какво е effects (или fx) queue?
* Каква е разликата между `.get()`, `[]`, и `.eq()`?
* Каква е разликата между `.bind()`, `.live()`, и `.delegate()`?
* Каква е разликата между `$` и `$.fn`? Или просто: Какво е `$.fn`?
* Оптимизирайте този селектор:
```javascript
$(".foo div#bar:eq(0)")
```

#### [[⬆]](#toc) <a name='testing'>Въпроси, свързани с тестване:</a>
* Какви са предимствата и недостатъците в тестването на код?
* Какви инструменти бихте могли да използвате, за да тествате как работи Вашия код?
* Каква е разликата между компонентен тест (unit test) и функционален / интеграционен тест (functional / integration test)?
* Каква е целта на инструментите за анализиране на кода (linting tools)?

#### [[⬆]](#toc) <a name='performance'>Въпроси, свързани с бързодействие:</a>
* Какви инструменти бихте използвали, за да откриете проблем, свързан с бързодействието на кода?
* Дайте примери за начини, по които може да подобрите бързодействието на скролирането в сайт.
* Обяснете разликата между layout, painting и compositing.

#### [[⬆]](#toc) <a name='network'>Мрежови въпроси:</a>
* Защо по традиция е препоръчително да се зареждат ресурсите за даден уебсайт от няколко домейна?
* Опишете по най-добрия възможен начин процесът, който се случва от написването на URL-a на един уебсайт до края на зарежаднето му на екрана.
* Какви са разликите между Long-Polling, Websockets и Server-Sent Events?
* Обяснете следните хедъри на request и response:
  * Разлики между `Expires`, `Date`, `Age` и `If-Modified-...`
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* Какво представляват HTTP методите? Избройте всички HTTP методи, които познавате, и ги обяснете.

#### [[⬆]](#toc) <a name='jscode'>Въпроси, свързани с програмиране:</a>


```javascript
modulo(12, 5) // 2
```
*Въпрос: Имплементирайте функция за намиране на остатък от деление която отговаря на горното условие (да връща 2 при аргументи 12 и 5)*

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

#### [[⬆]](#toc) <a name='fun'>Забавни въпроси:</a>

* Кое е най-якото нещо, което сте писали и от което сте най-горд?
* Кое най-много ви допада в инструментите за разработчици, които използвате?
* Разработвате ли някакви проекти като хоби? Какви?
* Какво най-много ви харесва в Internet Explorer?
* Как предпочитате кафето си?

#### [[⬆]](#toc) <a name='references'>Допълнителни ресурси:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
