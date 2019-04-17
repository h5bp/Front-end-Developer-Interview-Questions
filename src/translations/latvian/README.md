---
title: Front-end web programmētāja darba intervijas jautājumi
layout: layouts/page.njk
permalink: /translations/latvian/index.html
---

# Front-end web programmētāja darba intervijas jautājumi

Šis repozitorijs satur vairākus ar front-end web programmētāja darba prasmēm saistītus jautājumus, ko var izmantot, intervējot potenciālos vakances kandidātus. Nav ieteicams izmantot katru šeit minēto jautājumu, jo tas patērētu ļoti daudz laika. Izvēlieties tikai dažus jautājumus no šī saraksta, kas Jums palīdzēs ātrāk atlasīt kandidātus ar nepieciešamajām prasmēm.

[Rebecca Murphey](http://rmurphey.com/) [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) raksts ir ļoti piemērota lasāmviela, kuru izlasīt pirms dodaties uz darba interviju.

**Piezīme:** Paturiet prātā, ka daudzi no šiem jautājumiem ir atvērta tipa, kas varētu izvērsties plašākā diskusijā un ļautu iepazīt cilvēka prasmes daudz labāk nekā tieša atbilde.

## <a name='toc'>Saturs</a>

  1. [Sākotnējie Kontributori](#contributors)
  1. [Vispārēji Jautājumi](#general)
  1. [HTML Jautājumi](#html)
  1. [CSS Jautājumi](#css)
  1. [JS Jautājumi](#js)
  1. [jQuery Jautājumi](#jquery)
  1. [Kodēšanas Jautājumi](#jscode)
  1. [Interesanti Jautājumi](#fun)
  1. [Citas Lieliskas Atsauces](#references)

#### [[⬆]](#toc) <a name='contributors'>Sākotnējie Kontributori:</a>

Vairums no jautājumiem tika paņemti no [oksoclap](http://oksoclap.com/) raksta, ko sākotnēji izveidoja [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) un kuru papildināja sekojoši cilvēki:

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

#### [[⬆]](#toc) <a name='general'>Vispārēji Jautājumi:</a>

* Ko jaunu Jūs apguvāt vakar/šonedēļ?
* Kas Jūs aizrauj un interesē programmēšanā?
* Kādas UI (lietotāja interfeisa), performances, SEO, apkopes vai tehnoloģijas apsvērumus jūs ņemat vērā, kad veidojat web-aplikāciju vai mājas lapu?
* Pastāstiet par sev vēlemo darba vidi. (Operētājsistēma, pārlūki, rīki utt.)
* Vai variet aprakstīt savu darba procesu, kad veidojiet mājas lapu?
* Vai jūs variet aprakstīt starpību starp "progressive enhancement" un "graceful degradation"?
  * Bonus punkti, ja tiek pieminēta funkciju noteikšana (feature detection).
* Izskaidrojiet, ko nozīmē "Semantisks HTML".
* Kā Jūs optimizētu mājas lapas failus/resurus?
  * Potenciāli vairāki risinājumu, starp kuriem būtu:
    * Failu konkatenācija (savienošana)
    * Failu minimizēšana
    * CDN hostēšana
    * Kešošana
    * u.c.
* Kāpēc ir labāk lapas resurus izvietot uz vairākiem domēniem?
  * Cik daudz resursus pārlūks spēj vienlaicīgi lejuplādēt no viena domēna?
* Nosauciet 3 veidus, kā samazināt lapas ielādes laiku (šķietamo vai faktisko)
* Kā Jūs rīkotos, ja Jūs pievienotos projektam un viņi izmantotu tabulāciju, bet Jūs atstarpes koda atkāpju veidošanai?
  * Ieteiktu projektā izmantot kaut ko līdzīgu EditorConfig (http://editorconfig.org)
  * Pieskaņoties kolēģiem
  * Veikt retabulāciju ar ':retab!' komandu
* Izveidojiet vienkāršū slaidrāža lapu
  * Bonus punkti, ja netiek izmantots JavaScript
* Kādus rīkus Jūs izmantojiet, lai pārbaudītu sava koda veiktspēju (performanci)?
  * Profiler, JSPerf, Dromaeo
* Ja šogad Jūs varētu pilnībā apgūt vienu tehnoloģiju, kura tā būtu?
* Kādas ir atšķirības starp Long-Polling, Websockets un SSE?
* Izskaidrojiet standartu un standartizēšanas komisiju nozīmi.
* Kas ir FOUC? Kā izvairīties no FOUC?

#### [[⬆]](#toc) <a name='html'>HTML Jautājumi:</a>

* Ko dara `doctype`?
* Kāda ir starpība starp standarta režīmu un quirks režīmu?
* Kādi ir XHTML lapu ierobežojumi?
  * Vai var rasties problēmas, ja lapa tiek servēta kā `application/xhtml+xml`?
* Kā servēt lapu ar saturu vairākās valodās?
  * Par ko ir īpaši jāpiedomā, kad dizainē vai izstrādā vairāku valodu mājas lapas?
* Ar ko ir noderīgi `data-` atribūti?
* Pieņemot, ka HTML5 ir atvērta web-platforma, kas ir HTML5 pamatelementi?
* Aprakstiet atšķirības starp sīkdatnēm (cookies), sessionStorage un localStorage.

#### [[⬆]](#toc) <a name='css'>CSS Jautājumi:</a>

* Aprakstiet, ko dara "reset" CSS fails un ar ko tas ir noderīgs.
* Aprakstiet Float parametru un to, kā tas strādā.
* Kādas ir dažādas Clear parametra lietošanas tehnikas un kādā kontekstā katra ir vispiemērotākā?
* Izskaidrojiet, kas ir CSS spraiti (sprites) un kā Jūs tos izmantotu lapā?
* Kāda ir Jūsu iecienītākā attēlu aizvietošanas tehnika un kādos brīžos Jūs to izmantojiet?
* CSS parametru hacki, nosacīti iekļauti .css faili vai kas cits?
* Kā Jūs servējat lapas priekš pārlūkiem ar ierobežotu funkcionalitāti?
  * Kādas tehnikas/procesu Jūs piekopjat?
* Kādi ir dažādi paņēmieni, kā vizuāli noslēpt saturu (un padarīt to pieejamu tikai priekš ekrāna lasītājiem)?
* Vai esat kādreiz izmantojis režģa (grid) sistēmu? Ja jā, tad kurai dodiet priekšroku?
* Vai esat izmantojis mediju vaicājumus (media queries) vai izkārtojumus(layouts)/CSS domātus speciāli priekš mobilajām iekārtām?
* Vai esat pazīstams ar SVG stilu definēšanu?
* Kā Jūs optimizējiet mājas lapas priekš printēšanas?
* Kādi ir dažādi triki un paņēmieni (kā arī ar ko der uzmanīties), lai veidotu efektīvu CSS?
* Kādi ir plusi/mīnusi izmantojot CSS preprocesorus? (SASS, Compass, Stylus, LESS)
  * Aprakstiet plusus un mīnusus tiem CSS preprocesoriem, kurus esiet izmantojis.
* Kā Jūs veidotu mājas lapas dizainu, kas izmanto nestandarta fontus?
  * Webonti (tādi fontu servisi kā Google Webfonts, Typekit u.c.)
* Izskaidrojiet kā pārlūks nosaka kuri elementi atbilst CSS selektoriem?
* Izskaidrojiet kā Jūs saprotiet "box model" un kā Jūs ar CSS palīdzību norādītu pārlūkam attēlot izkārtojumu(layout) ar dažādiem "box model" iestatījumiem.

#### [[⬆]](#toc) <a name='js'>JS Jautājumi:</a>

* Izskaidrojiet notikumu deleģēšanu (event delegation)
* Izskaidrojiet kā `this` strādā JavaScript valodā
* Izskaidrojiet kā strādā prototipiskā mantošana?
* Kā Jūs testējat savu JavaScript kodu?
* AMD vai CommonJS? 
* Kas ir asociatīvais masīvs (hashtable)?
* Paskaidrojiet kāpēc šis kods nestrādā kā IIFE: `function foo(){ }();`. 
  * Kas ir jāpamaina, lai tā pareizi strādātu kā IIFE?
* Kāda ir atšķirība starp mainīgajiem, kas ir definēti kā: `null`, `undefined` or `undeclared`?
  * Kā jūs pārbaudītu vai mainīgais atbilst kādam no šiem stāvokļiem?
* Kas ir slēgums(closure) un kā/kāpēc Jūs tādu izmantotu?
* Kādos gadījumos parasti tiek izmantotas anonīmās funkcijas?
* Izskaidrojiet "JavaScript module pattern" un kādos gadījumos Jūs to izmantotu.
  * Bonus punkti, ja tiek pieminēta tīra nosaukumvietas uzturēšana (clean namespacing)
  * Gadījumā ja Jūsu moduļi neizmanto nosaukumvietu?
* Kā Jūs organizējat savu kodu? (Moduļu veidā, klasiskā mantošana?)
* Kāda ir atšķirība starp "host" objektiem un "native" objektiem?
* Kāda ir atšķirība starp: `function Person(){}`, `var person = Person()`, un `var person = new Person()`?
* Kāda ir atšķirība starp `.call` un `.apply`?
* Izskaidrojiet `Function.prototype.bind`?
* Kurā brīdī Jūs optimizējiet savu kodu?
* Vai variet izskaidrot kā JavaScript valodā strādā mantošana?
* Kādos gadījumos Jūs izmantotu `document.write()`?
  * Vairums reklāmas joprojām izmanto `document.write()` kaut arī šāda prakse tiek pelta. 
* Kāda ir atšķirība starp funkciju noteikšanu (feature detection), funkciju secināšanu (feature inference) un UA virknes (UA string) izmantošanu?
* Izskaidrojiet AJAX cik vien detalizēti iespējams
* Izskaidrojiet kā stradā JSONP (un kā tas atšķiras no AJAX)
* Vai esat jebkad izmantojuši JavaScript šablonošanai (templating)?
  * Ja jā, kuras bibliotēkas Jūs esat izmantojuši? (Mustache.js, Handlebars etc.)
* Izskaidrojiet "hoisting"
* Izskaidrojiet notikumu burbuļošanu (event bubbling)
* Kāda ir atšķirība starp atribūtu un rekvizītu (property)?
* Kāpēc paplašināt iebūvētos JavaScript objektus nav laba doma?
* Kāpēc paplašināt "built ins" ir laba doma?
* Kāda ir atšķirība starp "document load" un "document ready" notikumu?
* Kāda ir atšķirība starp `==` un `===`?
* Paskaidrojiet kā Jūs iegūtu kverija stringa parametru no pārlūka loga URL?
* Izskaidrojiet vietējās izcelsmes (same-origin) noteikumu attiecībā uz JavaScript
* Izskaidrojiet mantošanas paternus JavaScript valodā.
* Lieciet šim strādāt:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Izskaidrojoet memoizācijas stratēģiju (izvairīšanos no aprēķinu atkārtošanas) JavaScript valodā.
* Kāpēc to sauc par ternāru izteiksmi (Ternary expression)? Uz ko norāda vārds ternārs?
* Kas ir funkcijas "arity"?
* Kas ir `"use strict";`? Kādas ir priekšrocības un trūkumi to izmantojot?

#### [[⬆]](#toc) <a name='jquery'>jQuery Jautājumi:</a>

* Izskaidrojiet savirknēšanu (chaining).
* Izskaidrojiet novēlojumus (deferreds).
* Kādas ir jQuery specifiskas optimizācijas, ko Jūs spējat ieviest praksē?
* Ko veic `.end()`?
* Kā un kāpēc Jūs nosauktu pievienotu notikumu apdarinātāju (bound event handler)?
* Nosauciet 4 dažādas vērtības, ko Jūs varat padot jQuery metodei
  * Selektoru (virkne), HTML (virkne), atgriezenisko funkciju (funkcija), HTMLElement, Object, Array, Element Array, Jquery Object u.c.
* Kas ir efektu (vai fx) rinda?
* Kāda ir atšķirība starp `.get()`, `[]`, un `.eq()`?
* Kāda ir atšķirība starp `.bind()`, `.live()`, un `.delegate()`?
* Kāda ir atšķirība starp `$` un `$.fn`? Vai vienkārši kas ir `$.fn`?
* Optimizējiet šo selektoru
```javascript
$(".foo div#bar:eq(0)")
```

#### [[⬆]](#toc) <a name='jscode'>Kodēšanas Jautājumi:</a>


```javascript
modulo(12, 5) // 2
```
*Jautājums: Izveidojiet modulo funkciju, kas apmierina augstākminēto*

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Jautājums: Kāda vērtība tiek atgriezta no augšākminētā koda?

**Atbilde: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Jautājums: Kāda ir `window.foo` vērtība?*

**Atbilde: "bar"** *(vienīgi°ja `window.foo` "falsey", savādāk tas paturētu savu esošo vērtību)*

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Jautājums: Kāds ir abu augstākminēto paziņojumu iznākums?*

**Atbilde: "Hello World" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Jautājums: Kāda ir `foo.length` vērtība?*

**Atbilde: `2`**

#### [[⬆]](#toc) <a name='fun'>Interesanti Jautājumi:</a>

* Kas ir pati foršākā lieta, ko jebkat esiet uzprogrammējis un ar ko lepojaties?
* Kuras ir Jūsu izstrādes rīku iemīļotākās funkcijas, kuras izmantojiet?
* Vai Jums ir kādi hobiju projekti? Kādi?
* Kāda ir Jūsu iecienītakā Internet Explorer raksturiezīme?

#### [[⬆]](#toc) <a name='references'>Citas Lieliskas Atsauces:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
