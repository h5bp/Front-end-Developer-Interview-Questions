#Intervju za posao Front-end Developer-a

@version 0.0.1

Ovaj repo sadrži mnogobrojna pitanja za intervju iz oblasti front-end develpment-a koja možete koristiti u proceni mogućih kandidata.
Ne preporučuje se korišćenje svih pitanja jer bi intervju trajao dugo. Izbor od nekoliko pitanja sa ove liste bi Vam pomogao.

Pre intevjua, preporučujemo da proučite članak: [Rebecca Murphey](http://rmurphey.com/) [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/).

**Napomena:** Uzmite u obzir da veliki broj dole navedenih pitanja može biti korisna tema za razgovor koja će Vam možda reći vise o sposobnostima osobe nego direktni odgovori.

####Autori originalne liste

Većina pitanja je preuzeta sa [oksoclap](http://oksoclap.com/) tj. rasprave koju je originalno pokrenuo [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) i kojoj su doprineli:

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

### Opšta pitanja:

* Opišite Vaš omiljeni radni prostor. (OS, Editor, Browseri, Alati itd.)
* Opišite Vaš proces izrade web stranice?
* Možete li opisati razliku između progresivnog poboljšanja i neprimjetne degradacije?
	* Bonus bodovi ako se opiše detektovanje mogućnosti browsera
* Objasnite šta je to "Semantički HTML".
* Kako biste optimizirali infrastrukturu i resurse web stranice?
	* Traže se više rešenja, na primer:
		* Spajanje datoteka
		* Minifikacija datoteka
		* Korišćenje CDN-a
		* Keširanje (Caching)
		* itd.
* Zbog čega je bolje preuzimati delove stranice sa više domena?
	* Koliko resursa browser može preuzeti istovremeno sa jednog domena?
* Navedite tri načina za smanjivanje vremena učitavanja strane. (uočeno ili stvarno vrieme učitavanja)
* Ako bi došli na projekt gde se koriste tabovi a Vi koristite razmake, šta biste uradili?
	* Preporučili korištenja EditorConfig-a (http://editorconfig.org)
	* Prilagodili se postojećoj praksi (zadržavanje konzistentnosti)
	* `koristili :retab! naredbu`
* Napravite jednostavnu stranicu za prezentacije
	* Bonus bodovi ako se ne koristi JavaScript.
* Koje alate koristite za testiranje performansi koda?
	* Profiler, JSPerf, Dromaeo
* Kada bi ste odabrati jednu tehologiju koju ćete naučiti ove godine, koja bi to bila?
* Objasnite važnost standarda i organizacija za standardizaciju
* Šta je to FOUC? Kako možete izbeći FOUC?

### HTML pitanja:

* Koja je funkcija `doctype`?
* Koja je razlika između standardnog i quirks moda?
* Koja su ograničenja u obsluživanju XHTML standarda?
	* Postoje li problemi kod obsluživanju stranica sa header-om `application/xhtml+xml`?
* Kako biste obslužili stranicu sa višejezičnim sadržajem?
	* Na što morate obratit pažnju prilikom dizajna ili razvoja višejezične stranicu?
* Čemu služe `data-` atributi?
* Posmatrajte HTML5 kao platformu otvorenog koda. Koji su gradivni elementi HTML-a 5?
* Objasnite razliku između kolačića, podataka sesije (sessionStorage) i lokalnog snimanja.

### CSS pitanja:

* Objasnite čemu služi "reset" CSS i zašto je koristan.
* Opišite šta su i kako rade Float-ovi.
* Koje su tehnike clearing-a i u kojim slučajevima bi ste ih koristili?
* Objasnite CSS sprite-ove i kako se koriste na stranici ili site-u.
* Koje su Vaše omiljene tehnike zamene slike i kada ih koristite?
* Koje su Vaše omiljene tehnike: CSS hack-ovi property-a, kondicionalno uključivanje .css datoteka, ili ... nešto drugo?
* Kako obslužujete sadržaj za browser-e slabijih mogućnosti?
    * Koje tehnike/procese koristite?
* Koji su mogući načini za vizualno sakrivanje sadržaja (vidljivi su samo za screen reader-e)?
* Da li ste ikada koristili grid system, i ako jeste koji Vam je omiljeni?
* Da li ste koristili ili implementirali media querie-je ili layout/CSS specifične za mobilne?
* Imate li iskustva u stilizovanju SVG slika?
* Kako prilagođavate stranicu za štampu?
* Šta se podrazumeva pod dobrom praksom za pisanje efikasnog CSS-a?
* Koje su prednosti/nedostatci korišćenja CSS pred-procesora? (SASS, Compass, Stylus, LESS)
    * Opišite što vam se sviđa ili ne sviđa kod CSS pred-procesora koje ste koristili.
* Objasnite kako bi ste napravili stranicu čiji dizajn ne koristi standardne fontove?
    * Webfont-ovi (font servisi poput: Google Webfonts, Typekit itd.)
* Objasnite kako browser utvrđuje koji elementi odgovaraju CSS selector-u.
* Objasnite Vaše razumevanje "box model"-a i na koji način bi ste naveli browser da prikaže (render) izgled vaše strane?

### JavaScript pitanja:

* Objasnite delegaciju događaja
* Objasnite kako se u Javascriptu koristi `this`
* Objasnite nasleđivanje prototype-a
* Kako testirate JavaScript?
* AMD ili CommonJS?
* Šta je to hash tabela?
* Objasnite zašto sledeća funkcija neće raditi kao IIFE: `function foo(){ }();`?
    * Šta treba izmeniti da bi radila kao IIFE?
* U čemu je razlika između `null`, `undefined` i `undeclared`?
    * Kako bi ste promenili ova stanja?
* Šta je closure, kako i zašto se koristi?
* Koja je uobičajena primena anonimne funkcije?
* Objasnite "JavaScript module pattern" i kada biste ga koristili.
	* Bonus bodovi za predlog namespacing-a
	* Šta ako su moduli bez namespacing-a?
* Kako organizujete Vaš kod? (module pattern, klasično nasleđivanje?)
* Koja je razlika između host i native objekta?
* Koja je razlika između `function Person(){}`, `var person = Person()`, i `var person = new Person()`?
* Koja je razlika između `.call` i `.apply`?
* Objasnite `Function.prototype.bind`
* Kada optimizirate Vaš kod?
* Možete li objasniti nasleđivanje u JavaScriptu?
* Kada koristite `document.write()`?
	* Većina oglasa još uvijek koristi `document.write()` iako se to ne preporučuje.
* Koja je razlika između detekcije mogućnosti (feature detection), pretpostavljanje mogućnosti (feature inference) i korišćenja UA string-a?
* Objasnite AJAX sa što više detalja
* Objasnite kako radi JSONP (i u čemu se razlikuje od pravog AJAX-a)
* Da li ste ikad koristili JavaScript template?
	* Ako da, koje ste koristili? (Mustache.js, Handlebars etc.)
* Objasnite "hoisting".
* Objasnite propagaciju događaja (event bubbling).
* Koja je razlika između "attribute"-a i "property"-a?
* Zašto proširivanje ugrađenih JavaScript objekata nije najbolja ideja?
* Zašto je proširivanje ugrađenih JavaScript objekata dobra ideja?
* Koja je razlika između document load i document ready događaja?
* Koja je razlika između `==` i `===`?
* Objasnite kako bi ste pročitali parametar URL adrese
* Objasnite pravilo jednog izvora gledano sa staništa JavaScript-a.
* Opišite načine nasleđivanja u JavaScript-u.
* Popravite: `[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]`
* Objasnite memoization strategiju (izbegavanje ponavljanja računanja) u Javascript-u.
* Zašto se Ternarni operator zove Ternarni?
* Šta je arity funkcije?
* Šta radi `"use strict";`? Koje su mane, koje prednosti?

### jQuery pitanja:

* Objasnite "chaining".
* Objasnite "deferreds".
* Navedite koje optimizacije korišćenja jQuery-a znate?
* Čemu služi `.end()` ?
* Kada i zašto bi vezani (bound) događaj stavili u namespace?
* Navedite četri vrednosti koje možete poslati jQuery metodu.
    * Selektor (string), HTML (string), Callback (funkcija), HTMLElement, object, array, element array, jQuery Object itd.
* Čemu služi red efekata (fx)?
* Koja je razlika između .get()`, `[]`, i `.eq()`?
* Koja je razlika između .bind()`, `.live()`, i `.delegate()`?
* Koja je razlika između `$` i `$.fn`? Ili samo što je `$.fn`.
* Optimirajte selektor: `$(".foo div#bar:eq(0)")`
* Razlika između 'delegate()' i 'live()'?

### Kod vežbe:</a>


```javascript
modulo(12, 5) // 2
```
*Pitanje: Napišite modulo funkciju koja daje rezultat prikazan iznad*


```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Pitanje: Šta će biti vraćeno iz funkcije prikazane iznad?*

**Odgovor: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Pitanje: Koja je vrednost `window.foo`?*

**Odgovor: "bar"**

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Pitanje: Šta će se desiti kao rezultat 2 alerta iznad?*

**Odgovor: "Hello World" i ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Pitanje: Koja je vrednost `foo.length`?*

**Odgovor: `2`**

### Zanimljiva pitanja:</a>

* Šta je najzanimljivije što ste napravili do sad? na čemu ste najponosniji?
* Šta Vam je najinteresantnije u alatima koje koristite za rad?
* Imate li neke hobi projekte? Koje?
* Šta Vam se najviše sviđa kod Internet Explorer?

### Dodatni clanci

* [http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before](http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before)
* [http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/](http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/)
* [http://css-tricks.com/interview-questions-css/](http://css-tricks.com/interview-questions-css/)
