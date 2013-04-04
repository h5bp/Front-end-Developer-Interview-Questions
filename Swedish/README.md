#Front-end Anställningsfrågor

@version 2.0.0

Detta arkiv innehåller ett urval av frågor som kan ställas till den arbetssökande. Det är verkligen inte rekommenderat att ställa alla frågor här till samma person (det skulle ta timmar). Att välja ut ett par stycken från listan bör hjälpa dig besluta hurvida den arbetssökande uppfyller dina krav.

**Att tänka på:** Kom ihåg att många av de här frågorna är öppna och kan leda till intressanta diskussioner som berättar mer om personens kunskaper än vad en sluten fråga skulle.

####Ursprungliga skribenter

Majoriteten av de här frågorna var plockade från en [oksoclap](http://oksoclap.com/) tråd som skapades av [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) och bidrod till dessa gjordes av följande personer:

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

### Allmänna frågor:
* Vilka versionshanterings-system har du använt(Git, SVN osv.)?
* I vilken utvecklingsmiljö sitter du helst? (OS, Editor, Webbläsare, Vektyg osv.)
* Kan du beskriva ditt arbetsflöde när du skapar en hemsida?
* Kan du beskriva skillnaden mellan 'progressive enhancement' och 'graceful degradation'?
	* Bonuspoäng för att beskriva "feature detection"
* Förklara vad som menas med "Semantic HTML". 
* Vilken webbläsare använder du huvudsakligen och vilka utvecklingsverktyg använder du?
* Hur skulle du optimera en webbplats resurser?
	* Söker en rad lösningar som kan innefatta:
		* Sammanfoga filer (File concatenation)
		* Minsta på filstorleken (file minification)
		* Hosta via CDN
		* Caching
		* osv.
* Varför är det bättre skicka webbplatsen från en rad olika domäner?
	* Hur många resurser kan en webbläsare ladda från en specifik domän åt gången?
* Nämn tre sätt att minska belastningen på en webbsida (uppfattad eller faktiskt laddningstid)
* Om du hoppade på ett projekt och de alla använde tabbar och du mellanrum, vad skulle du då göra?
	* Föreslå att projektet använder sig av något som t.ex. EditConfig (http://editorconfig.org)
	* Håll dig till sedvanligheterna (var konsekvent)
	* `issue :retab! command`
* Sätt ihop ett enkelt bildspel 
	* Bonuspoäng om det inte använder sig av javascript. 
* Vilka verktyg använder du dig av för att testa di kods prestanda?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* osv.
* Om du kunde bemästra en teknologi det här året, vad skulle det vara?
* Beskriv varför det är viktigt med en gemensam standard.
* Vad är FOUC? Hur undviker du FOUC?  

### HTML-specifika frågor:
* Vad gör en dokumenttyp och hur många kan du namnge?
* Vad är skillnaden mellan standard-läge och quirks-läge?
* Vilka begränsningar utsätts du för när du hanterar XHTML sidor?
	* Finns det några problem med att skicka sidor som "application/xhtml+xml"?
* Hur skickar du en sida innehållandes flera språk?
	* Vad måste du vara försiktig med när du designar eller utvecklar för flerspråks-sidor?
* Kan du använda XHTML syntax i HTML5?
* Hur använder du XML i HTML5?
* Varför är `data-` attributen så bra?
* Vad är innehållsmodellerna i HTML4 och hur skiljer de sig i HTML5?
* Tänk dig HTML5 som en öppen web plattform. Vad är byggstenarna i HTML5?
* Beskriv skillnaden mellan cookies, sessionStorage och localStorage.


### JS-Specifika frågor:

* Förklara händelse representanterna (event delegation)
* Förklara hur `this` fungerar i JavaScript
* Förklara hur prototypiskt arv fungerar
* Hur gör du för att testa ditt JavaScript?
* AMD eller CommonJS?
* Vilka JavaScript bibliotek har du använt?
* Har du någonsin kollat igenom källkoden till de bibliotek/ramverk du använder?
* Vad är en hashtable?
* Vad är `undefined` och `undeclared` variabler?
* Vad är en blockering (closure) och hur/varför vill du använda det?
	* Ditt favoritmönster för att använda dem, argyle (Bara i IIFEs)
* Vad är ett typiskt användningsområde för en annonym funktion?
* Förklara "JavaScript module pattern" och varför du vill använda det.
	* Bonuspoäng om man nämner rena namnplatser(clean namespacing)
	* Tänk om dina moduler inte har några namnplatser?
* Hur organiserar du din kod? (module pattern, classical inheritance?) 
* Vad är skillnaden mellan "host objects" och "native objects"?
* Skillnaden mellan: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Vad är skillnaden mellan `.call` och `.apply`? 
* Förklara `Function.prototype.bind`? 
* När optimizerar du din kod? 
* Kan du förklara hur arv fungerar i JavaScript?   
* När skulle du använda `document.write()`?
	* De flesta genererade reklamerna använder fortfarande `document.write()` även om de flesta ogillar det
* Vad är skillnaden mellan feature detection, feature inference, och använda UA string 
* Förklara AJAX så noggrant som möjligt
* Förklara hur JSONP fungerar(och varför det egentligen inte är AJAX)
* Har du någonsin använt någon JavaScript mall?
* Have you ever used JavaScript templating?
	* Om så är fallet, vilka? (T.ex. Mustache.js, Handlebars osv.) 
* Förklara "hoisting".
* Beskriv event bubbling. 
* Vad är skillnaden mellan "attribute" och "property"? 
* Varför är det inte bra att utvidga (extending) JavaScript objekt?
* Varför är det bra att utvidga inbyggt ins?
* Skillnaden mellan "document load event" och "document ready event"? 
* Vad är skillnaden mellan `==` and `===`? 
* Förklara hur du får en fråge-sträng parameter från webbläsarens URL fält.
* Förklara "same-origin policy" med hänsyn till JavaScript. 
* Förklara arv mönster i JavaScript.
* Få det här att fungera
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Beskriv en strategi för "moemoization" (undvika uträkningsrepetioner) i JavaScript.
* Varför kallas det för "Ternary expression", vad menas med ordet "Ternary"?
* Vad är "the arity" av en funktion?  
* Vad är `"use strict";`? Vad för- och nackdelar med att använda det?

### JS-Code Exempel:

```javascript
~~3.14
```
Fråga: Vilket värde returneras från ovanstående?
**Svar: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Fråga: Vilket värde returneras från ovanstående?
**Svar: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Fråga: Vad är värdet av window.foo? 
**Svar: "bar"** 
bara om window.foo var falskt annars skulle den behålla dess värde.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Fråga: Vad kommer de två alerterna att ropa ut?
**Svar: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Fråga: Vad är värdet av foo.length? 
**Svar: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Fråga: Vad är värdet av foo.length? 
**Svar: `undefined`

### jQuery-Specifika frågor:

* Förklara "chaining". 
* Förklara "deferreds".
* Vad är några jQuery optimeringar du kan göra?
* Vad gör `.end()`? 
* Hur, och varför, skulle du "namespace a bound event handler"? 
* Nämn fyra olika värden du kan skicka till jQuery metoden
	* Selektorn (sträng), HTML (sträng), Callback (funktion), HTMLElement, objekt, array, element array, jQuery objekt osv.
* Vad är effekt(effects)(or fx) kön? 
* Vad är skillnaden mellan `.get()`, `[]`, och `.eq()`? 
* Vad är skillnaden mellan `.bind()`, `.live()`, och `.delegate()`? 
* Vad är skillnaden mellan `$` och `$.fn`? eller bara, vad är `$.fn`.
* Förbättra den här selektorn: 
```javascript
$(".foo div#bar:eq(0)")
```
* Skillnaden mellan 'delegate()' och 'live()'? 


### CSS-Specifika frågor:
* Förklara vad en återställnings (reset) CSS file gör och varför den är användbar.
* Beskriv Floats och hur de fungerar.
* Vilka olika återställningstekniker finns de och i vilka sammanhang är de relevanta?
* Beskriv "CSS sprites", och hur du skulle implementera dem på en sida.
* Vilka är dina favorit bild-ersättningstekniker och vilka använder du?
* CSS "property hacks",villkorligt inkluderade .css filer eller något annat?
* Hur skickar du sidor till funktions begränsade webbläsare?
	* Vilka tekniker/processer använder du?
* Vilka olika sätt finns det att visuellt dölja element (och bara göra de tillgängligt för skärmläsare)?
* Har du någonsin använt ett rutnät-system, och i sådana fall, vilket föredrar du?
* Har du någonsin använt eller implementerat media frågor eller mobil-specifika layouter/CSSer?
* Någon erfarenhet av att styla SVG? 
* Hur förbättrar du dina webbplatser för utskrift?
* Vilka är några av de "gotchas" som finns för att skriva effektiv CSS?
* Använder du CSS preprocessorer? (SASS, Compass, Stylus, LESS)
	* I sådana fall, beskriv vad du gillar och ogillar med de du använt.
* Hur skulle du implementera en webdesign som använder icke-standardiserade typsnitt?
	* Typsnitt (Typsnitts-tjänster som: Google web-typsnitt, Typekit osv.)
* Förklara hur en webbläsare bestämmer vilka element som matchar en CSS-väljare (selector)


### Roliga alternativa frågor:

* Vad är den coolaste grejen du någonsin har kodat och vad är du mest stolt över?
* Känner du till HTML5-gang tecknet?
* Är du nu, eller har någonsin vart på en båt?
* Vilka är dina favorit-grejer som finns i dina utvecklarverktyg som du använder?
* Har du något eller några egna projekt som du håller kärt? I sådana fall vad för typer?
* Beskriv betydelsen av "cornify".
* På ett papper, skriv ner bokstäverna A B C D E verktikalt. Nu sätt de i fallande ordning utan att skriva en enda rad av kod.
	* Vänta och se om de vänder på pappret upp och ner.
* Pirat eller ninja?
	* Bonuspoäng om det är en kombination och en bra förklaring varför. (+2 för zombi-ap-pirat-ninjor)
* Om inte webutveckling, vad skulle du då helst göra?
* Vart i världen är Carmen Sandiego?
	* Tips: Deras svar är alltid fel
* Vilken är din favorit-funktion i Internet Explorer?
* Avsluta den här meningen: Brendan Eich och Doug Crockford är __________ av JavaScript.
* jQuery: Ett bra bibliotek eller de bästa? Diskutera.
* http://www.w3schools.com/ eller http://w3fools.com/
