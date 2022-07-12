---
title: Intervju za posao Front-end Developera
layout: layouts/page.njk
permalink: /translations/croatian/index.html
---

# Intervju za posao Front-end Developera

@version 2.0.0

Ovaj repozitorij sadrži brojna pitanja za intervju iz područja front-end-a koja možete koristiti u procjeni potencijalnih kandidata. Nikako se ne preporuča da upotrijebite svako ovdje navedeno pitanje za jednog kandidata (to bi trajalo satima). Odabir nekoliko ciljanih pitanja s ove liste bi Vam trebao pomoći u odabiru.

[Rebecca Murphey](http://rmurphey.com/) [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) je prilično dobro štivo za pročitati prije samog razgovora.

**Napomena:** Imajte na umu da su mnoga ovdje navedena pitanja otvorenog tipa i mogla bi voditi u zanimljive rasprave koje govore više o sposobnostima osobe nego pitanja sa direktnim odgovorima.

#### Autori originalne liste

Većina pitanja je preuzeta sa [oksoclap](http://oksoclap.com/) tj. rasprave koju je u originalu pokrenuo [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) i kojoj su pridonijele sljedeće osobe:

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

### Općenita pitanja:

* Opišite Vašu preferiranu razvojnu okolinu. (OS, Editor, Broseri, Alati itd.)
* Možete li opisati Vaš postupak izrade web stranice? 
* Možete li opisati razliku između progresivnog poboljšanja i neprimjetne degradacije? 
	* Bonus bodovi ako se opiše detektiranje mogućnosti browsera 
* Objasnite što je to "Semantički HTML". 
* Kako biste optimirali infrastrukturu i resurse web stranice?
	* Traženje više rješenja poput:
		* Spajanje datoteka
		* Minifikacija datoteka
		* Korištenje CDN-a
		* Međuspremanje (Caching)
		* itd.
* Zašto je sadržaj bolje poslužiti sa više domena?
	* Koliko resursa preglednik skida sa jedne domene odjednom? 
* Navedite tri načina za smanjivanje vremena učitavanja stranice. (primijećeno ili stvarno vrijeme učitavanje) 
* Ako bi došli na projekt gdje se koriste tabovi a Vi koristite razmake, što biste učinili?
	* Npr. preporučanje korištenja EditorConfig-a (http://editorconfig.org)
	* Konformacija postojećoj praksi (zadržavanje konzistentnosti)
	* `korištenje :retab! naredbe`
* Napravite jednostavnu stranicu za držanje prezentacije
	* Bonus bodovi za nekorištenje JavaScript-a.  
* Koje alate koristite za testiranje performansi koda?
	* Profiler, JSPerf, Dromaeo
* Kad bi mogli odabrati jednu tehologiju koju ćete naučiti ove godine, što bi to bila? 
* Objasnite važnost standarda i tijela za standardizaciju
* Što je FOUC? Kako biste izbjegli FOUC?  

### Pitanja za HTML:

* Što radi `doctype`?
* Koja je razlika između standardnog i dosjetljivog (quirks) modusa? 
* Koja su ograničenja kod posluživanja XHTML stranica? 
	* Postoje li problemi kod posluživanja stranica sa `application/xhtml+xml`?  
* Kako biste poslužili stranicu sa sadržajem na više jezika? 
	* Na što morate paziti kod dizajniranja ili razvoja za višejezičnu stranicu?
* Za što se koriste `data-` atributi? 
* Razmotrite HTML5 kao platformu otvorenog web-a. Koji su gradivni elementi HTML5-ice?
* Pojasnite razliku između kolačića, podataka sjednice (sessionStorage) i lokalne pohrane. 

### Pitanja za JavaScript:

* Objasnite delegaciju događaja.
* Objasnite kako se u Javascriptu koristi `this`
* Pojasnite prototipno nasljeđivanje
* Kako testirate JavaScript? 
* AMD u usporedbi sa CommonJS-om?
* Što je to hash tabela?
* Što su `undefined` i `undeclared` varijable? 
* Što je closure, kako i zašto se koristi?
	* Vaš omiljeni način njihovog kreiranja? argyle (samo kod IIFE-a)  
* Koja je uobičajena primjena za anonimnu funkciju? 
* Objasnite "JavaScript module pattern" i kada biste ga koristili.
	* Bonus bodovi za spomen čistih imenskih prostora (namespacing)
	* Što učiniti ako moduli nemaju imenske prostore
* Kako organizirate kod? (module pattern, klasično nasljeđivanje?) 
* Koja je razlika između host i native objekta?
* Razlika između: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Koja je razlika između `.call` i `.apply`? 
* Objasnite `Function.prototype.bind` 
* Kad optimirate Vaš kod?
* Možete li objasniti nasljeđivanje u JavaScriptu?   
* Kada biste koristili `document.write()`?
	* Većina generiranih oglasa još uvijek koristi `document.write()` premda se to zamjera.
* Koja je razlika između detekcije mogućnosti (feature detection), pretpostavljanje mogućnosti (feature inference) i korištenja UA string-a 
* Objasnite AJAX sa što više detalja 
* Objasnite kako radi JSONP (i zašto nije pravi AJAX) 
* Da li ste ikad koristili JavaScript predloške (templating)?
	* Ako da, koje ste biblioteke koristili? (Mustache.js, Handlebars etc.) 
* Objasnite "hoisting".
* Objasnite propagaciju događaja (event bubbling). 
* Koja je razlika između "attribute"-a i "property"-a? 
* Zašto proširivanje ugrađenih JavaScript objekata nije najbolja ideja? 
* Zašto je proširivanje ugrađenih JavaScript objekata dobra ideja? 
* Koja je razlika između document load i document ready događaja? 
* Koja je razlika između `==` i `===`?
* Objasnite kako bi došli do parametra iz URL adrese prozora preglednika. 
* Objasnite politiku jednog izvorišta gledano sa stajališta JavaScript-e. 
* Opišite načine nasljeđivanja u JavaScript-u.
* Popravite: 
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Opišite strategiju za memoizaciju (izbjegavanje ponovljenog računanja) u Javascript-u.
* Zašto se Ternarni operator zove Ternarni? 
* Što je arnost funkcije?  
* Što je `"use strict";`? Koje su mane, koje prednosti?

### JavaScript primjeri koda:

```javascript
~~3.14
```
Pitanje: Koja je povratna vrijednost gornjeg izraza? 
**Odgovor: 3** 

```javascript
"Ovo je proba".split("").reverse().join("");
```
Pitanje: Koja je povratna vrijednost gornjeg izraza? 
**Odgovor: "aborp ej ovO"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Pitanje: Koju vrijednost ima window.foo? 
**Odgovor: "bar"** 
Samo ako window.foo nije istinit u suprotnom će zadržati vrijednost.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Pitanje: Kako će izgledati obavijesti iz gornjeg primjera? 
**Odgovor: "Hello World" nakon toga ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Pitanje: Koja je vrijednost za foo.length? 
**Odgovor: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Pitanje: Koja je vrijednost za foo.length? 
**Odgovor: `undefined`

### Pitanja za jQuery:

* Objasnite "chaining". 
* Objasnite "deferreds".
* Navedite koje optimizacije korištenja jQuery-a poznajete?
* Što radi `.end()` ? 
* Kada i zašto bi vezani (bound) događaj stavili u imenski prostor (namespace)? 
* Navedite četiri vrijednosti koje možete poslati jQuery metodi.
	* Selektor (string), HTML (string), Callback (funkcija), HTMLElement, object, array, element array, jQuery Object itd.
* Što je red efekata (fx)? 
* Koja je razlika između .get()`, `[]`, i `.eq()`? 
* Koja je razlika između .bind()`, `.live()`, i `.delegate()`? 
* Koja je razlika između `$` i `$.fn`? Ili samo što je `$.fn`.
* Optimirajte selektor: 
```javascript
$(".foo div#bar:eq(0)")
```
* Razlika između 'delegate()' i 'live()'? 


### Pitanja za CSS:

* Objasnite što je to "reset" CSS i zašto je koristan. 
* Opišite što su i kako rade Float-ovi. 
* Koje su tehnike clearing-a i koji su konteksti prikladni za njihovu primjenu? 
* Pojasnite CSS sprite-ove i kako biste ih izveli na stranici ili site-u. 
* Koje su Vaše omiljene tehnike zamjene slike i kada ih koristite? 
* CSS hack-ovi property-a, kondicionalno uključivanje .css datoteka, ili ... nešto drugo? 
* Kako poslužujete sadržaj za preglednike (browser-e) slabijih mogućnosti? 
	* Koje tehnike/procese koristite?  
* Koji su mogući načini za vizualno sakrivanje sadržaja (ostaju dostupni samo screen reader-ima)? 
* Da li ste ikad koristili grid system, ako jeste koji preferirate? 
* Da li ste koristili ili implementirali media querie-je ili layout/CSS specifičan za mobile? 
* Imate li iskustva u stiliziranju sa SVG-om? 
* Kako optimirate stranice za ispis? 
* Koje su "kvake" za pisanje učinkovitog CSS-a? 
* Koje su prednosti/nedostatci korištenja CSS preprocessore? (SASS, Compass, Stylus, LESS) 
	* Ako da, opišite što vam se (ne)sviđa kod CSS preprocessora koje ste koristili. 
* Kako bi izradili preliminarni web dizajn koji ne koristi standardne fontove? 
	* Webfont-ovi (font servisi poput: Google Webfonts, Typekit itd.)
* Objasnite kako browser utvrđuje koji elementi odgovaraju CSS selector-u.  

### Opcionalna zabavna pitanja:

* Koja je najbolja stvar koju ste isprogramirali, na što ste najviše ponosni?
* Koji su Vam omiljena svojstva razvojnih alata koje koristite?
* Imate li kakve omiljene vlastite projekte? Koje? 
* Koja Vam je omiljena mogućnost Internet Explorer-a?
