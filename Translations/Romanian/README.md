#Întrebări pentru interviu tehnic web front-end

Acest fişier conține o serie de întrebări pentru interviuri tehnice pe partea
de front-end, care pot fi folosite pentru a verifica un potențial candidat. Nu
este deloc recomandat să fie folosite toate întrebările pentru un singur
candidat ( ar lua câteva ore ). Alegând câteva întrebări din această listă ar
trebui să te ajute în verificarea calităților pe care le urmărești.

**Notă:** Ține în minte că multe dintre întrebări au răspuns liber și ar putea
duce la discuții interesante, care ți-ar putea spune mai multe despre
capacitățile persoanei.

## <a name='toc'>Cuprins</a>

  1. [Întrebări generale](#general)
  1. [Întrebări despre HTML](#html)
  1. [Întrebări despre CSS](#css)
  1. [Întrebări despre JS](#js)
  1. [Întrebări despre jQuery](#jquery)
  1. [Întrebări despre programare](#jscode)
  1. [Întrebări amuzante](#fun)


## <a name='toc'>Procesul de implicare</a>

  1. [Contribuitori iniţiali](#contributors)
  1. [Contribuitori recenţi](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors)
  1. [Cum să contribui](    )
  1. [Licenţă](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

####[[⬆]](#toc) <a name='general'>Întrebări generale:</a>

* Ce ai învățat ieri / săptămâna asta?
* Ce te fascinează sau interesează la programare?
* Ce aspecte de UI, Securitate, Performanță, SEO, Întreținere sau Tehnologie iei în cosiderare când construiești o aplicație web sau un site?
* Povestește despre mediul de lucru preferat. (OS, Editor, Browsere, Unelte,
  etc.)
* Îți poți descrie fluxul de lucru când creezi o pagină web?
* Dacă ai 5 fişiere cu cod CSS, cum le poţi integra cel mai bine într-un singur site?
* Poți descrie diferența dintre "progressive enhancement" și "graceful  degradation"?
* Cum ai optimiza resursele statice ale unui site?
* Tradiţional, de ce a fost mai bine să serveşti resurse din mai multe domenii?
* Câte resurse poate un browser descărca de la un domeniu la un moment dat?
    * Care sunt excepţiile?
* Numește 3 moduri pentru a scădea timpul de încarcare a paginii. (perceput
  sau chiar timpul de descărcare)
* Dacă intri într-un proiect și se folosesc taburi în loc de spații, ce faci?
* Scrie o pagină simplă slideshow
* Ce unelte foloseşti pentru a testa performanţa codului pe care îl scrii?
* Dacă ai putea învăța o tehnologie anul asta, care ar fi?
* Care sunt diferenţele dintre Long-Polling, Websockets şi SSE?
* Explică importanța standardelor și a organismelor de standardizare.
* Ce este FOUC? Cum eviți Fouc?
* Încearcă să descrii cât mai bine ce se întâmplă din momentul în care scrii un URL în browser până când este complet 
încărcat pe ecranul tău.
* Explică ce sunt screenreaders şi ARIA şi cum faci un website accesibil.
* Compară părţi bune şi negative pentru animaţii CSS versus animaţii JavaScript
* Explică ce înseamnă "HTML Semantic".
* Explică următoarele headere de request şi response:
    * Diferenţa dintre Expires, Date, Age şi If-Modified
    * DNT
    * Cache-Control
    * Transfer-Encoding
    * ETag
    * X-Frame-Options

####[[⬆]](#toc) <a name='html'>Întrebări HTML:</a>

* La ce este util `doctype`?
* Care este diferența dintre "standards mode" și "quirks mode"?
* Care sunt limitările când servești pagini XHTML?
* Apar probleme când servești pagini ca `application/xhtml+xml`?
* Cum servești o pagină cu conținut în mai multe limbi?
* La ce trebuie să fi atent când faci design sau dezvolți pentru site-uri multilingve
* La ce sunt utile atributele `data-`?
* Considerând HTML5 ca o platformă web deschisă, care sunt parțile componente   alte HTML5?
* Descrie diferența dintre cookies, sessionStorage și localStorage.
* Poţi explica diferenţa dintre `GET` şi `POST`?
* Descrie diferenţa dintre `<script>`, `<script async>` şi `<script defer>`.

####[[⬆]](#toc) <a name='css'>Întrebări CSS:</a>

* Care este diferenţa dintre clase şi ID în CSS?
* Descrie ce este un fișier CSS de resetare și la ce este util.
* Descrie 'Float' si cum funcționează.
* Descrie z-index şi cum se formează stacking context.
* Care sunt tehnicile de 'clearing' și care este potrivită pentru ce context
* Explică conceptul de CSS sprites și cum le-ai implementa pe o pagină sau un site.
* Care sunt tehnicile tale preferate pentru inlocuirea imaginilor și care când le folosești?
* Hack-uri de proprietăți CSS, includerea condițională a fișierelor .css,  sau... altceva?
* Cum servești pagini pentru browsere cu capabilități reduse?
  * Ce procese/tehnici folosești?
* Care sunt diferitele modalități de a ascunde vizual conținut (dar sa-l faci disponibil pentru cititoare de ecrane) ?
* Ai folosit vreodată un system 'grid' și dacă da, ce preferi?
* Ai folosit sau implementat 'media queries' sau interfețe/CSS specific pentru mobile ?
* Familiarități cu stilizarea unui SVG?
* Cum optimizezi paginile pentru print?
* Ceva 'gotchas' când scrii CSS eficient?
* Care sunt avantajele/dezavantajele folosirii preprocesoarelor CSS (SASS, Compass, Stylus, LESS)
  * Descrie ce îți place respectiv nu îți place la preprocesoarele CSS pe care
    le-ai folosit
* Cum ai implementa un design care folosește fonturi non-standard?
* Explică cum un browser determina ce elemente se potrivesc unui selector CSS?
* Explică cum întelegi conceptul dea "box model" si cum îi spui browser-ului prin CSS cum sa randeze layoutul în modele diferite
* Ce face ```* { box-sizing: border-box; }```? Care sunt avantajele?
* Ce proprietăţi de display şti?
* Care este diferenţa dintre `inline` şi `inline-block`?
* Care este diferenţa dintre poziţionarea relativă, fixă, absolută şi statică a unui element?
* C-ul din CSS vine de la Cascading. Cum este determinată prioritatea în asignarea stilului ( câteva exemple )? Cum foloseşti acest sistem?
* Ce framework CSS ai folosit local sau în producţie? (Bootstrap, PureCSS, Foundation etc.)
    * Ce ai schimba / îmbunătăţi la ele?
* Ai avut ocazia să te joci cu noile specificaţii pentru CSS Flexbox sau Grid?
* Ai lucrat vreodata pentru retina display? Dacă da, ce tehnici ai folosit?


####[[⬆]](#toc) <a name='js'>Întrebări JS:</a>

* Explică "event delegation".
* Explică cum funcționează `this` în JavaScript.
* Explică cum funcționează moștenirea prototipală.
* Cum îti testezi codul JavaScript?
* AMD vs. CommonJS?
* Explică de ce următoarea nu functionează ca un IIFE: `function foo(){ }();`
  * Ce trebuie schimbat ca să o transformi într-o IIFE?
* Care este diferența dintre o variabilă care este: `null`, `undefined` sau `undeclared`?
  * Cum ai face sa verifici după fiecare dintre stările acestea?
* Ce este un "closure" și cum/de ce ai folosi unul?
* Care este un caz în care sunt folosite funcții anonime?
* Cum îți organizezi codul? (module pattern, moștenire?)
* Care este diferența dintre obiecte host si obiecte native?
* Diferența dintre: `function Person(){}`, `var person = Person()` și `person = new Person()`
* Care este diferența dintre `.call` și `.apply`?
* Explică `Function.prototype.bind`?
* Când îți optimizezi codul?
* Când ai folosi `document.write()`?
* Care este diferența dintre 'feature detection', 'feature inference' și folosirea șirului User Agent?
* Explică AJAX cât mai detaliat posibil.
* Explică cum funcționează JSONP (și cum nu este chiar AJAX ).
* Ai folosit vreodată template-uri JavaScript?
  * Dacă da, ce librării ai folosit? (Mustache.js, Handlebars etc.)
* Explică "hoisting".
* Descrie "event bubbling".
* Care este diferența dintre un atribut și o proprietate?
* De ce nu este o idee bună extinderea obiectelor JavaScript "built-in"?
* Care este diferența dintre evenimentul "document load" și "document ready"?
* Care este diferența dintre "==" și "==="?
* Explică politica "same-origins" în legătură cu JavaScript.
* Fă următorul cod să funcționeze:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Ce este o expresie ternară și ce indică cuvântul ternar?
* Ce este `"use strict;"` și care sunt avantajele si dezavantajele folosirii acestuia?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, `"buzz"` at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`.
*  De ce este, de regulă, o idee bună să nu poluezi scope-ul global al unui website ?

####[[⬆]](#toc) <a name='jquery'>Întrebări jQuery:</a>

* Explică "chaining".
* Explică "deferreds".
* Poți vorbi despre ceva optimizări specifice jQuery pe care le poți implementa?
* Ce face `.end()`?
* Când și cum ai folosi un "namespace" pentru a lega un handler de eveniment?
* Numește 4 valori diferite pe care le poți trimite unei metode jQuery.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Care este diferența dintre `.get()`, `[]`, și `.eq()`?

####[[⬆]](#toc) <a name='jscode'>Întrebări despre cod:</a>

*Întrebare: Cum ai face asta să funcţioneze?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Întrebare: Ce valoare este returnată de expresia următoare?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Întrebare: Care este valoare lui `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Întrebare: Care este rezultatul celor două apelări ale funcției alert?*
```javascript
var foo = "Hello"; 
(function() { 
    var bar = " World"; 
    alert(foo + bar); 
})(); 
alert(foo + bar);
```

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Întrebare: Care este valoarea lui `foo.length`?*

```javascript
var foo = {};
foo.bar = 'hello';
```
*Întrebare: Care este valoarea lui `foo.length`?*

####[[⬆]](#toc) <a name='fun'>Întrebări amuzante:</a>

* Povesteşte-mi despre un proiect mişto la care ai lucrat recent?
* Ce îți place cel mai mult la uneltele de dezvoltare pe care le folosești?
* Ai proiecte personale? Ce fel?
* Care este funcționalitatea ta preferată din Internet Explorer?
* Cum îti place cafeaua?

####[[⬆]](#toc) <a name='contributors'>Contribuitori iniţiali:</a>

Majoritatea întrebărilor au fost adunate dintr-un fir de discutie [oksoclap](http://oksoclap.com/) creat de [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) la care au contribuit apoi:
