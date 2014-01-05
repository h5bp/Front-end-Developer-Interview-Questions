#Întrebări pentru interviu tehnic web front-end

Acest depozit conține o serie de întrebări pentru interviuri tehnice pe partea
de front-end, care pot fi folosite pentru a verifica un potențial candidat. Nu
este deloc recomandat să fie folosite toate întrebările pentru un singur
candidat ( ar lua câteva ore ). Alegând câteva întrebări din această listă ar
trebui să te ajute în verificarea calităților pe care le urmărești.

Articolul lui [Rebecca Murphey](http://rmurphey.com/) [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) este de asemenea o resursă bună de citit înainte de a intra într-un interviu

**Notă:** Ține în minte că multe dintre întrebări au răspuns liber și ar putea
duce la discuții interesante, care ți-ar putea spune mai multe despre
capacitățile persoanei.

## <a name='toc'>Cuprins</a>

  1. [Contribuitori inițiali](#contributors)
  1. [Întrebări generale](#general)
  1. [Întrebări despre HTML](#html)
  1. [Întrebări despre CSS](#css)
  1. [Întrebări despre JS](#js)
  1. [Întrebări despre jQuery](#jquery)
  1. [Întrebări despre programare](#jscode)
  1. [Întrebări amuzante](#fun)
  1. [Alte resurse bune](#references)

####[[⬆]](#toc) <a name='contributors'>Contribuitori inițiali:</a>

The majority of the questions were plucked from an [oksoclap](http://oksoclap.com/) thread created originally by [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) and contributed to by the following individuals:
Majoritatea întrebărilor au fost adunate dintr-un fir de discutie [oksoclap](http://oksoclap.com/) creat de [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) la care au contribuit apoi:

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

####[[⬆]](#toc) <a name='general'>Întrebări generale:</a>

* Ce ai învățat ieri / săptămâna asta?
* Ce te fascinează sau interesează la programare?
* Ce aspecte de UI, Securitate, Performanță, SEO, Întreținere sau Tehnologie iei în cosiderare când construiești o aplicație web sau un site?
* Povestește despre mediul de lucru preferat. ( OS, Editor, Browsere, Unelte,
  etc.)
* Îți poți descrie fluxul de lucru când creezi o pagină web?
* Poți descrie difereța dintre "progressive enhancement" și "graceful
  degradation"?
  * Puncte bonus pentru descrierea modalităților de detecție
    a capabilităților suportate de browsere
* Explică ce înseamnă "HTML Semantic".
* Cum ai optimiza părțile componente ale unui site web?
  * Urmărit mai multe soluții printre care:
    * Concatenarea fișierelor
    * Minificarea fișierelor
    * Cache
    * etc.
* De ce este mai bine să servești conținutul static din mai multe domenii?
  * Câte resurse va descarca un browser de la un domeniu la un moment dat?
* Numește 3 moduri pentru a scădea timpul de încarcare a paginii. ( perceput
  sau chiar timpul de descărcare )
* Dacă intri într-un proiect și se folosesc taburi în loc de spații, ce faci?
  * Sugerează ca proiectul să folosească ceva de genul EditorConfig (http://editorconfig.org)
  * Conformează cu convențiile ( rămâi consistent )
  * `issue :retab! command`
* Scrie o simplă pagină de slideshow
  * Puncte bonus dacă nu se folosește JS.
* Ce unelte folosești pentru a testa performanța codului tău?
  * Profiler, JSPerf, Dromaeo
* Dacă ai putea învăța o tehnologie anul asta, care ar fi?
* Explică importanța standardelor și a organismelor de standardizare.
* Ce este FOUC? Cum eviți Fouc?

####[[⬆]](#toc) <a name='html'>Întrebări HTML:</a>

* La ce este util `doctype`?
* Care este diferența dintre "standards mode" și "quirks mode"?
* Care sunt limitările când servești pagini XHTML ?
  * Apar probleme când servești pagini ca `application/xhtml+xml`?
* Cum servești o pagină cu conținut în mai multe limbi?
  * La ce trebuie să fi atent când faci design sau dezvolți pentru site-uri multilingve
* La ce sunt utile atributele `data-`?
* Considerând HTML5 ca o platformă web deschisă, care sunt parțile componente
  alte HTML5?
* Descrie diferența dintre cookies, sessionStorage și localStorage

####[[⬆]](#toc) <a name='css'>Întrebări CSS:</a>

* Descrie ce este un fișier CSS de resetare și la ce este util.
* Descrie 'Float' si cum funcționează.
* Care sunt tehnicile de 'clearing' și care este potrivită pentru ce context
* Explică conceptul de mape CSS și cum le-ai implementa pe o pagină sau un
  site.
* Care sunt tehnicile tale preferate pentru inlocuirea imaginilor și care când
  le folosești?
* Hack-uri de proprietăți CSS, includerea condițională a fișierelor .css,
  sau... altceva?
* Cum servești pagini pentru browsere cu capabilități reduse?
  * Ce procese/tehnici folosești?
* Care sunt diferitele modalități de a ascunde vizual conținut (dar sa-l faci
  disponibil pentru cititoare de ecrane) ?
* Ai folosit vreodată un system 'grid' și dacă da, ce preferi?
* Ai folosit sau implementat 'media queries' sau interfețe/CSS specific pentru
  mobile ?
* Familiarități cu stilizarea unui SVG?
* Cum optimizezi paginile pentru print?
* Ceva 'gotchas' când scrii CSS eficient?
* Care sunt avantajele/dezavantajele folosirii preprocesoarelor CSS (SASS,
  Compass, Stylus, LESS)
  * Descrie ce îți place respectiv nu îți place la preprocesoarele CSS pe care
    le-ai folosit
* Cum ai implementa un design care folosește fonturi non-standard?
  * Webfonts (servicii fonturi ca: Google Webfonts, Typekit etc.)
* Explică cum un browser determina ce elemente se potrivesc unui selector CSS?
* Explică cum întelegi conceptul dea "box model" si cum îi spui browser-ului
  prin CSS cum sa randeze layoutul în modele diferite

####[[⬆]](#toc) <a name='js'>Întrebări JS:</a>

* Explică "event delegation".
* EXplică cum funcționează `this` în JavaScript.
* Explică cum funcționează moștenirea prototipală.
* Cum procedezi cu testarea codului JavaScript?
* AMD vs. CommonJS?
* Ce este un "hashtable"?
* Explică de ce următoarea nu functionează ca un IIFE: `function foo(){ }();`
  * Ce trebuie schimbat ca să o transformi într-o IIFE?
* Care este diferența dintre o variabilă care este: `null`, `undefined` sau
  `undeclared`?
  * Cum ai face sa verifici după fiecare dintre stările acestea?
* Ce este un "closure" și cum/de ce ai folosi unul?
* Care este un caz în care sunt folosite funcții anonime?
* Explică "Javascript module pattern" și cand l-ai folosi.
  * Puncte bonus pentru menționarea namespace-uri curate.
  * Daca modulele sunt fără namespace?
* Cum îți organizezi codul? (module pattern, moștenire?)
* Care este diferența dintre obiecte host si obiecte native?
* Diferența dintre:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Care este diferența dintre `.call` și `.apply`?
* Explică `Function.prototype.bind`?
* Când îți optimizezi codul?
* Poți explica cum funcționează moștenirea in JavaScript?
* Când ai folosi `document.write()`?
  * Cele mai multe reclame generate încă folosesc `document.write()` deși este
    o soluție neplacută
* Care este diferența dintre 'feature detection', 'feature inference' și
  folosirea șirului User Agent
* Explică AJAX cât mai detaliat posibil
* Explică cum funcționează JSONP ( și cum nu este AJAX prea mult )
* Ai folosit vreodată template-uri JavaScript?
  * Dacă da, ce librării ai folosit? (Mustache.js, Handlebars etc.)
* Explică "hoisting".
* Descrie "event bubbling".
* Care este diferența dintre un atribut și o proprietate?
* De ce nu este o idee bună extinderea obiectelor JavaScript DOM/"built-in".
* De ce este extinderea "built in"-urilor o idee bună?
* Diferența dintre evenimentul de "document load" și "document ready"?
* Care este diferența dintre "==" și "==="?
* Explain how you would get a query string parameter from the browser window's URL.
* Explică politica "same-origins" în legătură cu JavaScript.
* Descrie pattern-uri de moștenire în JavaScript.
* Fă următorul cod să funcționeze:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Descrie o strategie pentru memoizare (evită repetarea calculelor) în
  JavaScript.
* Ce este o expresie ternară și ce indică cuvântul ternar?
* Ce este aritatea unei funcții?
* Ce este `"use strict;"` și care sunt avantajele si dezavantajele folosirii
  acestuia?

####[[⬆]](#toc) <a name='jquery'>Întrebări jQuery:</a>

* Explică "chaining".
* Explică "deferreds".
* Poți vorbi despre ceva optimizări specifice jQuery pe care le poți
  implementa?
* Ce face `.end()`?
* Când și cum ai folosi un "namespace" pentru a lega un handler de eveniment?
* Numește 4 valori diferite pe care le poți trimite unei metode jQuery.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Ce este coada de efecte - "effects queue"?
* Care este diferența dintre `.get()`, `[]`, și `.eq()`?
* Care este diferența dintre `.bind()`, `.live()`, și `.delegate()`?
* Care este diferența dintre `$` și `$.fn`? Sau doar ce este `$.fn`.
* Optimizează acest selector:
```javascript
$(".foo div#bar:eq(0)")
```

####[[⬆]](#toc) <a name='jscode'>Întrebări despre cod:</a>

```javascript
~~3.14
```
*Întrebare: Ce valoare este returnată de expresia de mai sus?*

**Răspuns: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Întrebare: Ce valoare este returnată de expresia de mai sus?*

**Răspuns: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Întrebare: Care este valoare lui `window.foo`?*

**Răspuns: "bar"** *(doar dacă `window.foo` era "falsey" altfel va returna
valoarea inițială)*

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Întrebare: Care este rezultatul celor două apelări ale funcției alert?*

**Răspuns: "Hello World" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Întrebare: Care este valoarea lui `foo.length`?*

**Răspuns: `2`**

```javascript
var foo = {};
foo.bar = 'hello';
```
*Întrebare: Care este valoarea lui `foo.length`?*

**Răspuns: `undefined`**

####[[⬆]](#toc) <a name='fun'>Întrebări amuzante:</a>

* Care este cel mai mișto lucru pe care l-ai programat sau de care ești cel mai
  mândru?
* Ce îți place cel mai mult la uneltele de dezvoltare pe care le folosești?
* Ai proiecte personale? De care?
* Care este funcționalitatea ta preferată din Internet Explorer?

####[[⬆]](#toc) <a name='references'>Alte referințe bune:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
