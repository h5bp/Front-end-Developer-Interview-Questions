---
title: Питання кандидату на посаду front-end розробника
layout: layouts/page.njk
permalink: /translations/ukrainian/index.html
lang: uk
---

# Питання кандидату на посаду front-end розробника

**Примітка:** Цей репозиторій містить підбірку питань, які можуть бути використані на співбесідах на посаду front-end розробника. Тут пропонуються лише ідеї, не варто задавати всі запитання відразу (інакше однієї години точно не вистачить).

Також, майте на увазі, що багато питань не потребують однозначної короткої відповіді, а лише допомагають завести бесіду на ту чи іншу тему (даючи змогу кандидату показати себе в усій красі).

## <a name='toc'>Зміст</a>

  1. [Автори](#contributors)
  1. [Загальні запитання](#general)
  1. [Запитання по HTML](#html)
  1. [Запитання по JavaScript](#js)
  1. [Приклади коду на JavaScript](#jscode)
  1. [Запитання по jQuery](#jquery)
  1. [Запитання по CSS](#css)
  1. ["Світська бесіда"](#fun)

#### [⬆](#toc) <a name='contributors'>Автори:</a>

Цей проект було засновано в 2009 році завдяки співпраці [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano) [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) та [@iansym](https://twitter.com/iansym).

Наразі проект підтримують:

* [roblarsen](https://github.com/roblarsen)
* [vvscode](https://github.com/vvscode)

З тих пір він був активним завдяки цим [чудовим людям](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTORS.md).


#### [⬆](#toc) <a name='general'>Загальні запитання:</a>

* Чому ви навчились вчора/цього тижня?
* Що цікавить та захоплює вас у програмуванні?
* З якою технологічною складністю вам довелося стикнутись нещодавно і як ви її вирішили?
* Чи можете ви розповісти про якісь техніки які ви використовуєте для підвищення продуктивності під час створення або підтримки веб-сайту?
* Опишіть деякі кращі практики використання SEO або техніки які ви нещодавно використовуватили?
* Чи можете ви пояснити будь-які типові техніки або нещодавні проблеми які ви вирішувати відносно безпеки (security) на front-end?
* Що особисто ви зробити на минулих проектах аби покращити підтримуваність свого коду?
* Поговоримо про середовище розробки якоми ви надаєте перевагу.
* З якими системами контролю версій (VCS) ви знайомі?
* Опишіть послідовність ваших дій під час створенння нової web-сторінки.
* У вас є 5 різних файлів зі стилями, яким чином їх найкраще інтегрувати на сторінку?
* Чи можете ви пояснити у чому різниця між progressive enhancement і graceful degradation?
* Яким чином ви б оптимізували ресурси веб-сайту?
* Скільки ресурсів одночасно браузер може завантажувати з одного домена?
  * Які є виключення?
* Назвіть 3 способи зменшення часу завантаження сторінки (сприйманого або реального)
* Якщо ви прийшли на проект, де для форматування використовується табуляція, а ви звикли до пробілів, як ви вчинете?
* Опишіть як би ви реалізували просте слайд-шоу?
* Якби у вас була можливість опанувати одну нову технологію в цьому році, що б це було?
* Поясніть важливість стандартів і комітетів стандартизації.
* Що таке блимання нестилізованого контенту (Flash of Unstyled Content)? Як його уникнути?
* Поясніть що таке ARIA та читачі екрану та як зробити сайт доступним для людей з обмеженими здібностями?
* Поясніть деякі переваги та недоліки CSS анімації в порівннянні JavaScript анімацією?
* Як розшифровуюється CORS та які проблеми він вирішує?
* Як ви вирішуєте розбіжності у поглядах зі своїм керівником або іншим працівником?
* Які ресурси ви використовуєте аби дізнаватись про найсвіжіші тенденції у front-end розробці та дизайні?

#### [⬆](#toc) <a name='html'>Запитання по HTML:</a>

* Для чого потрібен `doctype` і скільки різновидів Ви можете назвати?
* В чому різниця між standards mode і quirks mode?
* Які обмеження накладають стандарти XHTML?
	* Чи можуть виникнути проблеми при подачі сторінок із типом `application/xhtml+xml`?
* Як слід оформляти сторінку, на якій контент може бути на різних мовах?
	* Що потрібно мати на увазі при розробці багатомовних сайтів?
* Чи можна використовувати синтаксис XHTML в HTML5?
* Як використовувати XML в HTML5?
* Чим корисні `data-` атрибути?
* Які box-моделі є в HTML4 і чи є відмінності в HTML5?
* Якщо розглядати HTML5 як відкриту web-платформу: на чому вона базується, з яких компонентів складається?
* Поясніть різницю між cookies, sessionStorage і localStorage.
* Чи знайомі з підводними каменями верстки поштових шаблонів?
* Яка різниця між `GET` і` POST`?

#### [⬆](#toc) <a name='js'>Запитання по JavaScript:</a>

* Якими js-бібліотеками Ви користувалися?
* Ви коли-небудь заглядали в вихідний код бібліотек / фреймворків, якими користувалися?
* Чим JavaScript відрізняється від Java?
* Що-таке хеш-таблиця?
* Що таке `невизначені (undefined)` і `неоголошені (undeclared)` змінні?
* Що таке замикання і як / для чого його використовують?
	* На Вашу думку, як слід їх використовувати?
* Де зазвичай використовуються анонімні функції?
* Поясніть "JavaScript module pattern" і де він (патерн) застосовується
	* Бонус, якщо згадана чистота глобального простору імен
	* Що, якщо Ваш модуль не укладено в простір імен?
* Як Ви організуєте свій код? (module pattern, наслідування)
* У чому різниця між host-об'єктами і нативними об'єктами?
* У чому різниця між останніми двома рядками:

```javascript
function Person(){}

var person = Person()
var person = new Person()
```

* У чому різниця між `.call` і` .apply`?
* Що робить і для чого потрібен метод `Function.prototype.bind`?
* Коли Ви оптимізуєте свій код?
* Поясніть, як працює наслідування в JavaScript?
* Де досі використовується `document.write ()`?
	* У більшості згенерованих банерів, хоча так робити не рекомендується
* У чому різниця між feature detection (визначення можливостей браузера), feature inference (припущення можливостей) і аналізом рядку user-agent?
* Розкажіть про AJAX якомога детальніше
* Поясніть, як працює JSONP (і чому це не справжній AJAX)
* Чи використовували Ви коли-небудь шаблонізації на JavaScript?
	* Якщо так, які бібліотеки використовували? (Mustache.js, Handlebars etc.)
* Поясніть, що таке "hoisting"
* Поясніть event bubbling
* У чому різниця між "атрибутом" (attribute) і "властивістю" (property)?
* Чому *не слід* розширювати нативні JavaScript об'єкти?
* Коли *слід* розширювати нативні JavaScript об'єкти?
* У чому різниця між подіями `document load` і `document ready`?
* У чому різниця між `==` і `===`?
* Як отримати параметри з URL'а поточного вікна?
* Поясніть `same-origin policy` в контексті JavaScript
* Розкажіть про `event delegation`
* Які Ви знаєте патерни організації наслідування в JavaScript?
* Зробіть так, щоб цей код працював:
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Опишіть принцип мемоізаціі (уникнення повторних обчислень) в JavaScript
* Чому тернарний оператор так називається?
* Що таке тернарність функції?
* Що робить рядок `" use strict ";`? Які переваги та недоліки від її використання?

#### [⬆](#toc) <a name='jscode'>Приклади на JavaScript</a>

```javascript
~~3.14
```
Питання: Яке значення повертає цей фрагмент коду?
**Відповідь: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Питання: Яке значення повертає цей фрагмент коду?
**Відповідь: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Питання: Чому дорівнює window.foo?
**Відповідь: "bar" (тільки якщо вираз window.foo був хибним, інакше змінна збереже своє початкове значення)**,


```javascript
var foo = "Hello";
(function() {
	var bar = " World";
	alert(foo + bar);
})();
alert(foo + bar);
```
Питання: Що покажуть ці два alert?
**Відповідь: "Hello World" и ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Питання: Чому дорівнює foo.length?
**Відповідь: `2`**

```javascript
var foo = {};
foo.bar = 'hello';
```
Питання: Чому дорівнює foo.length?
**Відповідь: `undefined`**


#### [⬆](#toc) <a name='jquery'>Запитання по jQuery:</a>

* Розкажіть про "chaining".
* Розкажіть про "deferreds".
* Які Ви знаєте прийоми оптимізації коду, що використовує jQuery?
* Що робить `.end()`?
* Як додати простір імен до обробника подій? Для чого це потрібно?
* Назвіть 4 різних види аргументів, які приймає функція jQuery()?
	* Селектор (рядок), HTML (рядок), Callback (функція), HTMLElement, об'єкт, масив, масив елементів, об'єкт jQuery тощо.
* Що таке черга ефектів (fx queue)?
* В чому різниця між `.get()`, `[]`, і `.eq()`?
* В чому різниця між `.bind()`, `.live()`, і `.delegate()`?
* В чому різниця між `$` і `$.fn`? Що таке `$.fn` взагалі?
* Оптимізуйте даний селектор:
```javascript
$(".foo div#bar:eq(0)")
```

#### [⬆](#toc) <a name='css'>Запитання по CSS:</a>

* Що таке "reset" CSS і для чого він потрібен?
* Поясніть, що таке плаваючі елементи (floats) і як вони працюють?
* Які ви знаєте методи заборони обтікання (clearing) і де які застосовуються?
* Що таке CSS спрайт? Як вони реалізуються на сторінці або сайті?
* Які Ваші улюблені методи підміни тексту картинкою (image replacement) і коли Ви їх використовуєте?
* CSS property hacks, умовне підключення .css файлів...
* Як Ви забезпечуєте відображення сторінок в старих / обмежених браузерах?
	* Які прийоми / процеси Ви при цьому використовуєте?
* Якими способами можна візуально приховати елемент (залишивши його доступним для екранного диктора, екранного зчитувача)?
* Ви коли-небудь використовували сіткову верстку (grid system, grid design)? Якщо так, яка Ваша улюблена?
* Чи доводилося Вам використовувати або реалізовувати media queries або верстку під мобільні пристрої?
* Чи доводилося Вам стилізувати SVG?
* Як оптимізувати сторінки для друку?
* Які є підводні камені в оптимізації продуктивності CSS?
* Ви використовуєте CSS препроцесори? (SASS, Compass, Bourbon, Stylus, LESS)
	* Якщо так, розкажіть, що Вам в них подобається і не подобається?
* Як Ви зверстаєте макет, який використовує нестандартні шрифти?
	* Webfonts (сервіси на кшталт Google Webfonts, Typekit, Fontsquirrel etc.)
* Розкажіть, як браузер визначає, на які елементи накладати CSS стилі?
* Чи доводилося стикатися з Retina-дисплеями?
* Чи чули про систему БЕМ (Блок-Елемент-Модифікатор)?
	* Якщо так, то в чому її суть? Розкажіть про систему нотифікації селектор.

#### [⬆](#toc) <a name='fun'>"Світська бесіда":</a>

* Найкрутіше, що Ви коли небудь робили і чим пишаєтесь?
* Чи знаєте Ви секретний жест HTML5-банди?
* ([неперекладаємий гумор](https://vimeo.com/18848658)) Are you now, or have you ever been, on a boat.
* Що Вам найбільше подобаються у Ваших інструментах розробника?
* У Вас є якісь особисті проекти?
* Візьміть аркуш паперу і напишіть в стовпчик букви A B C D E. Тепер відсортуйте стовпчик в алфавітному порядку за спаданням, не написавши жодного рядка коду.
	* Засічіть, через скільки часу кандидат переверне аркуш
* Пірат або ніндзя?
	* Бонус за комбінацію. Аргументовану. +2 за зомбі-пірат-ніндзя-мавпу
* Чим би Ви займалися, якщо не Web-розробкою?
* Яка Ваша улюблена "фішка" Internet Explorer?
* Закінчіть речення: Brendan Eich та Doug Crockford є __________ мови JavaScript.
* jQuery: хороша бібліотека або велика бібліотека? Тема для дискусії...
