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
  1. [Licens](#license)

####[[⬆]](#toc) <a name='contributors'>Ursprungliga skribenter:</a>

Majoriteten av de här frågorna hämtades från en [oksoclap](http://oksoclap.com/)-tråd som ursprungligen skapades av [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) med bidrag från följande personer: [@bentruyman](http://twitter.com/bentruyman) [@cowboy](http://twitter.com/cowboy) [@ajpiano](http://ajpiano)  [@SlexAxton](http://twitter.com/slexaxton) [@boazsender](http://twitter.com/boazsender) [@miketaylr](http://twitter.com/miketaylr) [@vladikoff](http://twitter.com/vladikoff) [@gf3](http://twitter.com/gf3) [@jon_neal](http://twitter.com/jon_neal) [@sambreed](http://twitter.com/sambreed) [@iansym](http://twitter.com/iansym)

####[[⬆]](#toc) <a name='general'>Allmänna frågor:</a>

* Vad lärde du dig igår / den här veckan?
* Vad tycker du är spännande eller intressant med kodning?
* Vilka övervägningar gör du angående gränssnitt, säkerhet, prestanda, SEO, underhållsmässighet och tekniker när du bygger en webbapplikation eller -plats?
* Berätta lite om den utvecklingsmiljö du helst sitter i? (OS, editor eller IDE, webbläsare, verktyg o.s.v.)
* Kan du beskriva ditt arbetsflöde när du skapar en hemsida?
* Om du har fem olika stilmallar, hur skulle du bäst integrera dem i sajten?
  * Filkonkatenering.
* Kan du beskriva skillnaden mellan "progressive enhancement" och "graceful degradation"?
	* Bonuspoäng för att beskriva "feature detection"
* Hur skulle du optimera en webbplats resurser?
  * Söker en rad lösningar som kan innefatta:
    * Sammanfoga filer (file concatenation)
    * Minska filstorleken (file minification)
    * Hosta via CDN
    * Caching
    * o.s.v.
* Varför har det traditionellt sett varit bättre att servera webbplatsen från flera domäner?
  * Hur många resurser kan en webbläsare ladda från en specifik domän åt gången?
  * Vilka är undantagen?
    * Bonuspoäng för att nämna mobila enheter som en möjlig nackdel (http://www.mobify.com/blog/domain-sharding-bad-news-mobile-performance/).
    * Bonuspoäng för att nämna HTTP2/SPDY som ett undantag.
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
* Vad är skillnaderna mellan long-polling, WebSockets och SSE?
* Beskriv varför det är viktigt med standarder och standardiseringsorganisationer.
* Vad är FOUC? Hur undviker du FOUC?
* Förklara så noggrannt du kan processen från att du skriver in en webbsidas URL till att sidan har laddats färdigt på din skärm.

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
* Kan du förklara skillnaden mellan `GET` och `POST`?

####[[⬆]](#toc) <a name='css'>CSS-frågor:</a>

* Vad är skillnaden mellan klasser och ID:n i CSS?
* Förklara vad en nollställnings(reset)-CSS-fil gör och varför den är användbar.
  * Bonuspoäng för att nämna baksidor med en nollställningsfil, och/eller nämna normaliseringsfil som ett bättre alternativ.
* Beskriv floats och hur de fungerar.
* Beskriv z-index och hur stacking context skapas.
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
* Vad gör ```* { box-sizing: border-box; }```? Vad är dess fördelar?
* Lista så många värden för display-egenskapen som du kan komma ihåg.
* Vad är skillnaden mellan inline och inline-block?
* Vad är skillnaden mellan element som är positionerade med relative, fixed, absolute och static?
* Vilka CSS-ramverk har du använt lokalt eller i produktion? (Twitter Bootstrap, PureCSS, Foundation etc.)
  * Om du kunde, hur skulle du förändra/förbättra dem?
* Har du lekt något med de nya CSS-specifikationerna för Flexbox och Grid?
* På vilket sätt skiljer sig responsiv design från adaptiv design?
* Har du någon gång arbetat med retinagrafik? I så fall, när var det och vilka tekniker använde du?

####[[⬆]](#toc) <a name='js'>JS-frågor:</a>

* Förklara eventdelegering
* Förklara hur `this` fungerar i JavaScript
* Förklara hur prototypiskt arv fungerar
* Hur gör du för att testa ditt JavaScript?
* AMD eller CommonJS?
* Förklara varför följande inte fungerar som en IIFE: `function foo(){ }();`.
  * Vad behöver ändras för att göra den till en fungerande IIFE?
* Vad är skillnaden mellan en variabel som är: `null`, `undefined` eller `undeclared`?
  * Hur skulle du göra för att kolla efter någon av dessa?
* Vad är en "closure" och hur/varför vill du använda det?
* Vad är ett typiskt användningsområde för en anonym funktion?
* Hur organiserar du din kod? (module pattern, classical inheritance?) 
* Vad är skillnaden mellan "host objects" och "native objects"?
* Skillnaden mellan: `function Person(){}`, `var person = Person()` och `var person = new Person()`?
* Vad är skillnaden mellan `.call` och `.apply`? 
* Förklara `Function.prototype.bind`? 
* När optimerar du din kod?
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
* Skillnaden mellan "document load event" och "document ready event"? 
* Vad är skillnaden mellan `==` och `===`? 
* Förklara "same-origin policy" med hänsyn till JavaScript. 
* Få det här att fungera
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Varför kallas det för "Ternary expression", vad menas med ordet "Ternary"?
* Vad är `"use strict";`? Vilka är för- och nackdelarna med att använda det?

####[[⬆]](#toc) <a name='jquery'>jQuery-frågor:</a>

* Förklara "chaining". 
* Förklara "deferreds".
* Vad är några jQuery-optimeringar du kan göra?
* Vad gör `.end()`? 
* Nämn fyra olika värden du kan skicka till jQuery-metoden.
  * Selektor (sträng), HTML (sträng), Callback (funktion), HTMLElement, objekt, array, array av element, jQuery-objekt o.s.v.
* Vad är skillnaden mellan `.get()`, `[]`, och `.eq()`? 

####[[⬆]](#toc) <a name='jscode'>Kodfrågor:</a>

*Fråga: Implementera en modulofunktion som stämmer med nedan*
```javascript
modulo(12, 5) // 2
```

Fråga: Vilket värde returneras från nedanstående?
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
**Svar: "goh angasal a m'i"** 

*Fråga: Vad är värdet av `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```
**Svar: "bar"** *Bara om `window.foo` var "falsey", annars skulle den behålla sitt värde.*


*Fråga: Vad kommer de två alerterna att ropa ut?*
```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
**Svar: "Hello World" & ReferenceError: bar is not defined** 


*Fråga: Vad är värdet av `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
**Svar: `2`**

####[[⬆]](#toc) <a name='fun'>Roliga frågor:</a>

* Nämn en cool sak du kodat nyligen. Vad har du byggt som du är stolt över?
* Nämn några delar som du gillar hos de utvecklarverktyg du använder?
* Har du några egna projekt som du sköter om? I sådana fall vilken typ av projekt?
* Vilken är din favoritfunktion i Internet Explorer?

####[[⬆]](#toc) <a name='references'>Andra bra resurser:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
* http://davidshariff.com/quiz/
* http://blog.sourcing.io/interview-questions
* http://www.toptal.com/javascript/interview-questions
* http://www.sitepoint.com/5-typical-javascript-interview-exercises/
* http://www.sitepoint.com/5-javascript-interview-exercises/

####[[⬆]](#toc) <a name='license'>Licens:</a>

Copyright 2012 av Darcy Clarke, släppt under [MIT-licensen](http://opensource.org/licenses/MIT). Se filen LICENSE för detaljer.
