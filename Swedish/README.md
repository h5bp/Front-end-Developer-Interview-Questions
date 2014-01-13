#Front-end Anställningsfrågor

Detta arkiv innehåller ett urval av frågor som kan ställas till den arbetssökande. Det är verkligen inte rekommenderat att ställa alla frågor här till samma person (det skulle ta timmar). Att välja ut ett par stycken från listan bör hjälpa dig besluta huruvida den arbetssökande uppfyller dina krav.

[Rebecca Murphey](http://rmurphey.com/)s [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) är också en bra resurs att läsa in dig på innan du ger dig in i en intervju.

**Att tänka på:** Kom ihåg att många av de här frågorna är öppna och kan leda till intressanta diskussioner som berättar mer om personens kunskaper än vad en sluten fråga skulle.

## <a name='toc'>Innehållsförteckning</a>

  1. [Ursprungliga skribenter](#contributors)
  1. [Allmänna frågor](#general)
  1. [HTML-frågor](#html)
  1. [CSS-frågor](#css)
  1. [JS-frågor](#js)
  1. [jQuery-frågor](#jquery)
  1. [Kodfrågor](#jscode)
  1. [Roliga frågor](#fun)
  1. [Andra bra resurser](#references)

####[[⬆]](#toc) <a name='contributors'>Ursprungliga skribenter:</a>

Majoriteten av de här frågorna var plockade från en [oksoclap](http://oksoclap.com/)-tråd som skapades av [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) och bidrag till dessa gjordes av följande personer:

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

####[[⬆]](#toc) <a name='general'>Allmänna frågor:</a>

* Vad lärde du dig igår / den här veckan?
* Vad tycker du är spännande eller intressant med kodning?
* Vilka övervägningar gör du angående gränssnitt, säkerhet, prestanda, SEO, underhållsmässighet och tekniker när du bygger en webbapplikation eller -plats?
* Berätta lite om den utvecklingsmiljö du helst sitter i? (OS, editor, webbläsare, verktyg o.s.v.)
* Kan du beskriva ditt arbetsflöde när du skapar en hemsida?
* Kan du beskriva skillnaden mellan "progressive enhancement" och "graceful degradation"?
	* Bonuspoäng för att beskriva "feature detection"
* Förklara vad som menas med semantisk HTML.
* Hur skulle du optimera en webbplats resurser?
  * Söker en rad lösningar som kan innefatta:
    * Sammanfoga filer (file concatenation)
    * Minska filstorleken (file minification)
    * Hosta via CDN
    * Caching
    * o.s.v.
* Varför är det bättre att servera webbplatsen från flera domäner?
  * Hur många resurser kan en webbläsare ladda från en specifik domän åt gången?
* Nämn tre sätt att minska laddningstiden för en webbsida (uppfattad eller faktisk laddningstid).
* Om du hoppade på ett projekt och de använde tabbar och du mellanslag, vad skulle du då göra?
  * Föreslå att projektet använder sig av något som t.ex. EditorConfig (http://editorconfig.org)
  * Håll dig till konventionerna (var konsekvent)
  * `issue :retab! command`
* Sätt ihop ett enkelt bildspel 
  * Bonuspoäng om det inte använder sig av JS.
* Vilka verktyg använder du dig av för att testa din kods prestanda?
  * Profiler, JSPerf, Dromaeo
* Om du kunde bemästra en teknologi i år, vad skulle det vara?
* Beskriv varför det är viktigt med standarder och standardiseringsorganisationer.
* Vad är FOUC? Hur undviker du FOUC?

####[[⬆]](#toc) <a name='html'>HTML-frågor:</a>

* Vad gör en dokumenttyp (doctype)?
* Vad är skillnaden mellan standard-läge och quirks-läge?
* Vilka begränsningar utsätts du för när du hanterar XHTML-sidor?
  * Finns det några problem med att skicka sidor som `application/xhtml+xml`?
* Hur skickar du en sida innehållandes flera språk?
  * Vad måste du vara försiktig med när du designar eller utvecklar för flerspråkssidor?
* Vad är `data-`-attributen bra för?
* Tänk dig HTML5 som en öppen webb-plattform. Vad är byggstenarna i HTML5?
* Beskriv skillnaden mellan cookies, sessionStorage och localStorage.

####[[⬆]](#toc) <a name='css'>CSS-frågor:</a>

* Förklara vad en nollställnings(reset)-CSS-fil gör och varför den är användbar.
* Beskriv Floats och hur de fungerar.
* Vilka olika clearing-tekniker finns det och vilka passar för vilka sammanhang?
* Förklara CSS-sprites och hur du skulle implementera dem på en sida.
* Vilka är dina favorittekniker för bildersättning och vilka använder du i vilka situationer?
* CSS "property hacks", villkorligt inkluderade .css-filer eller något annat?
* Hur skickar du sidor till funktionsbegränsade webbläsare?
  * Vilka tekniker/processer använder du?
* Vilka olika sätt finns det att visuellt dölja element (och bara göra dem tillgängliga för skärmläsare)?
* Har du någonsin använt ett rutnätsystem, och i sådana fall, vilket föredrar du?
* Har du använt eller implementerat mediafrågor eller mobilspecifika layouter/CSS:er?
* Någon erfarenhet av att styla SVG? 
* Hur optimerar du dina webbplatser för utskrift?
* Vilka är några av de fallgropar som finns för att skriva effektiv CSS?
* Vilka är fördelarna/nackdelarna med att använda CSS-preprocessorer? (SASS, Compass, Stylus, LESS)
  * Om du använt några själv, beskriv vad du gillar och ogillar med dem.
* Hur skulle du implementera en webbdesign som använder icke-standardiserade typsnitt?
  * Webbtypsnitt (Typsnittstjänster som: Google webbtypsnitt, Typekit o.s.v.)
* Förklara hur en webbläsare bestämmer vilka element som matchar en selektor.
* Förklara boxmodellen och hur du skulle göra i CSS för att få webbläsaren att rendera din layout i olika boxmodeller.

####[[⬆]](#toc) <a name='js'>JS-frågor:</a>

* Förklara eventdelegering
* Förklara hur `this` fungerar i JavaScript
* Förklara hur prototypiskt arv fungerar
* Hur gör du för att testa ditt JavaScript?
* AMD eller CommonJS?
* Vad är en hashtabell?
* Förklara varför följande inte fungerar som en IIFE: `function foo(){ }();`.
  * Vad behöver ändras för att göra den till en fungerande IIFE?
* Vad är skillnaden mellan en variabel som är: `null`, `undefined` eller `undeclared`?
  * Hur skulle du göra för att kolla efter någon av dessa?
* Vad är en "closure" och hur/varför vill du använda det?
* Vad är ett typiskt användningsområde för en anonym funktion?
* Förklara "JavaScript module pattern" och när du skulle vilja använda det.
  * Bonuspoäng om man nämner rena namnrymder (clean namespacing)
  * Tänk om dina moduler inte har några namnrymder?
* Hur organiserar du din kod? (module pattern, classical inheritance?) 
* Vad är skillnaden mellan "host objects" och "native objects"?
* Skillnaden mellan: `function Person(){}`, `var person = Person()` och `var person = new Person()`?
* Vad är skillnaden mellan `.call` och `.apply`? 
* Förklara `Function.prototype.bind`? 
* När optimerar du din kod?
* Kan du förklara hur arv fungerar i JavaScript?   
* När skulle du använda `document.write()`?
  * De flesta genererade reklamerna använder fortfarande `document.write()` även om de flesta ogillar det
* Vad är skillnaden mellan "feature detection", "feature inference", och att använda UA-strängen?
* Förklara AJAX så noggrant som möjligt
* Förklara hur JSONP fungerar (och varför det egentligen inte är AJAX)
* Har du någonsin använt "JavaScript templating"?
  * Om så är fallet, vilka bibliotek har du använt? (Mustache.js, Handlebars o.s.v.) 
* Förklara "hoisting".
* Beskriv "event bubbling".
* Vad är skillnaden mellan "attribute" och "property"? 
* Varför är det inte bra att utvidga (extend) inbyggda JavaScript-objekt?
* Varför är det bra att utvidga inbyggda JavaScript-objekt?
* Skillnaden mellan "document load event" och "document ready event"? 
* Vad är skillnaden mellan `==` och `===`? 
* Förklara hur du får en QueryString-parameter från webbläsarfönstrets URL.
* Förklara "same-origin policy" med hänsyn till JavaScript. 
* Få det här att fungera
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Beskriv en strategi för "memoization" (undvika repetitioner av uträkningar) i JavaScript.
* Varför kallas det för "Ternary expression", vad menas med ordet "Ternary"?
* Vad är "the arity" av en funktion?  
* Vad är `"use strict";`? Vilka är för- och nackdelarna med att använda det?

####[[⬆]](#toc) <a name='jquery'>jQuery-frågor:</a>

* Förklara "chaining". 
* Förklara "deferreds".
* Vad är några jQuery-optimeringar du kan göra?
* Vad gör `.end()`? 
* Hur, och varför, skulle du "namespace a bound event handler"? 
* Nämn fyra olika värden du kan skicka till jQuery-metoden.
  * Selektor (sträng), HTML (sträng), Callback (funktion), HTMLElement, objekt, array, array av element, jQuery-objekt o.s.v.
* Vad är effektkö ("effects queue" eller "fx queue")? 
* Vad är skillnaden mellan `.get()`, `[]`, och `.eq()`? 
* Vad är skillnaden mellan `.bind()`, `.live()`, och `.delegate()`? 
* Vad är skillnaden mellan `$` och `$.fn`? Eller bara, vad är `$.fn`.
* Förbättra denna selektor: `$(".foo div#bar:eq(0)")`

####[[⬆]](#toc) <a name='jscode'>Kodfrågor:</a>

```javascript
modulo(12, 5) // 2
```
*Fråga: Implementera en modulofunktion som stämmer med ovan*

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Fråga: Vilket värde returneras från ovanstående?

**Svar: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Fråga: Vad är värdet av `window.foo`?*

**Svar: "bar"** *Bara om `window.foo` var "falsey", annars skulle den behålla sitt värde.*

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Fråga: Vad kommer de två alerterna att ropa ut?*

**Svar: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Fråga: Vad är värdet av `foo.length`?*

**Svar: `2`**

####[[⬆]](#toc) <a name='fun'>Roliga frågor:</a>

* Vad är det coolaste du någonsin har kodat och vad är du mest stolt över?
* Vilka är dina favoritdelar som finns i de utvecklarverktyg du använder?
* Har du några egna projekt som du sköter om? I sådana fall vilken typ av projekt?
* Vilken är din favoritfunktion i Internet Explorer?

####[[⬆]](#toc) <a name='references'>Andra bra resurser:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
