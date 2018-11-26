---
title: Front-end Anställningsfrågor
layout: layouts/page.njk
permalink: /translations/swedish/index.html
---

# Front-end Anställningsfrågor

Detta arkiv innehåller ett urval av frågor som kan ställas till den arbetssökande. Det är verkligen inte rekommenderat att ställa alla frågor här till samma person (det skulle ta timmar). Att välja ut ett par stycken från listan bör hjälpa dig besluta huruvida den arbetssökande uppfyller dina krav.

**Att tänka på:** Kom ihåg att många av de här frågorna är öppna och kan leda till intressanta diskussioner som berättar mer om personens kunskaper än vad en sluten fråga skulle.

## Innehållsförteckning

  1. [Allmänna frågor](#general-questions)
  1. [HTML-frågor](#html-questions)
  1. [CSS-frågor](#css-questions)
  1. [JS-frågor](#js-questions)
  1. [Nätverksgrågor](#network-questions)
  1. [Kodfrågor](#coding-questions)
  1. [Roliga frågor](#fun-questions)

## Hjälpa till

  1. [Bidragande skribenter](#contributors)
  1. [Att hjälpa till](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [Licens](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### Allmänna frågor:

* Vad lärde du dig igår/den här veckan?
* Vad tycker du är spännande eller intressant med kodning?
* Berätta om en teknisk utmaning du haft nyligen och hur du löste den.
* Vilka övervägningar gör du angående gränssnitt, säkerhet, prestanda, SEO, underhållsmässighet och tekniker när du bygger en webbapplikation eller -plats?
* Berätta lite om den utvecklingsmiljö du helst sitter i.
* Vilka versionshanteringssystem har du använt?
* Kan du beskriva ditt arbetsflöde när du skapar en hemsida?
* Om du har fem olika stilmallar, hur skulle du bäst integrera dem i sajten?
* Kan du beskriva skillnaden mellan "progressive enhancement" och "graceful degradation"?
* Hur skulle du optimera en webbplats resurser?
* Hur många resurser kan en webbläsare ladda från en specifik domän åt gången?
  * Vilka är undantagen?
* Nämn tre sätt att minska laddningstiden för en webbsida (uppfattad eller faktisk laddningstid).
* Om du hoppade på ett projekt och de använde tabbar och du mellanslag, vad skulle du då göra?
* Beskriv hur du skulle göra ett enkelt bildspel.
* Om du kunde bemästra en teknologi i år, vad skulle det vara?
* Beskriv varför det är viktigt med standarder och standardiseringsorganisationer.
* Vad är "Flash of Unstyled Content"? Hur undviker du FOUC?
* Förklara vad ARIA och skärmläsare är och hur man gör en webbplats tillgänglig.
* Förklara några av fördelarna och nackdelarna mellan CSS- och JavaScript-animationer.

#### HTML-frågor:

* Vad gör en dokumenttyp (`doctype`)?
* Vad är skillnaden mellan standardläge och quirksläge?
* Vad är skillnaden mellan HTML och XHTML?
* Finns det några problem med att skicka sidor som `application/xhtml+xml`?
* Hur skickar du en sida innehållandes flera språk?
* Vad måste du vara försiktig med när du designar eller utvecklar för flerspråkssidor?
* Vad är `data-`-attribut bra för?
* Tänk dig HTML5 som en öppen webbplattform. Vad är byggstenarna i HTML5?
* Beskriv skillnaden mellan en `cookie`, `sessionStorage` och `localStorage`.
* Beskriv skillnaden mellan `<script>`, `<script async>` och `<script defer>`.
* Varför är det generellt en bra idé att lägga CSS-`<link>`ar mellan `<head></head>` och JS-`<script>`ar precis före `</body>`? Känner du till några undantag?
* Vad är progressiv rendering?
* Har du använt dig av några HTML-mallspråk tidigare?

#### CSS-frågor:

* Vad är skillnaden mellan klasser och ID:n i CSS?
* Vad är skillnaden mellan att "nollställa" och att "normalisera" CSS? Vad skulle du välja och varför?
* Beskriv floats och hur de fungerar.
* Beskriv z-index och hur stacking context skapas.
* Beskriv BFC (Block Formatting Context) och hur det fungerar?
* Vilka olika clearing-tekniker finns det och vilka passar för vilka sammanhang?
* Förklara CSS-sprites och hur du skulle implementera dem på en sida.
* Vilka är dina favorittekniker för bildersättning och vilka använder du i vilka situationer?
* Hur skulle du fixa webbläsarspecifika stilproblem?
* Hur skickar du sidor till funktionsbegränsade webbläsare?
  * Vilka tekniker/processer använder du?
* Vilka olika sätt finns det att visuellt dölja element (och bara göra dem tillgängliga för skärmläsare)?
* Har du någonsin använt ett rutnätsystem, och i sådana fall vilket föredrar du?
* Har du använt eller implementerat mediafrågor eller mobilspecifika layouter/CSS:er?
* Har du någon erfarenhet av att styla SVG?
* Hur optimerar du dina webbplatser för utskrift?
* Vilka är några av de fallgropar som finns för att skriva effektiv CSS?
* Vilka är fördelarna/nackdelarna med att använda CSS-preprocessorer?
  * Beskriv vad du gillar och ogillar med de CSS-preprocessorer du använt.
* Hur skulle du implementera en webbdesign som använder icke-standardiserade typsnitt?
* Förklara hur en webbläsare bestämmer vilka element som matchar en selektor.
* Beskriv pseudoelement och vad de används till.
* Förklara boxmodellen och hur du skulle göra i CSS för att få webbläsaren att rendera din layout i olika boxmodeller.
* Vad gör ```* { box-sizing: border-box; }```? Vad är dess fördelar?
* Lista så många värden för display-egenskapen som du kan komma ihåg.
* Vad är skillnaden mellan inline och inline-block?
* Vad är skillnaden mellan element som är positionerade med relative, fixed, absolute och static?
* C:et i CSS står för "Cascading". Hur bestäms prioritet när stilar sätts (några exempel)? Hur kan du använda det här systemet till din fördel?
* Vilka CSS-ramverk har du använt lokalt eller i produktion? Hur skulle du förändra/förbättra dem?
* Har du lekt något med de nya CSS-specifikationerna för Flexbox och Grid?
* På vilket sätt skiljer sig responsiv design från adaptiv design?
* Har du någon gång arbetat med retinagrafik? I så fall, när var det och vilka tekniker använde du?
* Finns det någon anledning till att du skulle vilja använda `translate()` i stället för *absolut positionering* och vice-versa? I så fall varför?

#### JS-frågor:

* Förklara eventdelegering.
* Förklara hur `this` fungerar i JavaScript
* Förklara hur prototypiskt arv fungerar.
* AMD eller CommonJS?
* Förklara varför följande inte fungerar som en IIFE: `function foo(){ }();`.
  * Vad behöver ändras för att göra den till en fungerande IIFE?
* Vad är skillnaden mellan en variabel som är: `null`, `undefined` eller `undeclared`?
  * Hur skulle du göra för att kolla efter någon av dessa?
* Vad är en "closure" och hur/varför vill du använda det?
* Vad är ett typiskt användningsområde för en anonym funktion?
* Hur organiserar du din kod? (Modulmönstret, klassiskt arv?)
* Vad är skillnaden mellan "host objects" och "native objects"?
* Skillnaden mellan: `function Person(){}`, `var person = Person()` och `var person = new Person()`?
* Vad är skillnaden mellan `.call` och `.apply`?
* Förklara `Function.prototype.bind`?
* När skulle du använda `document.write()`?
* Vad är skillnaden mellan "feature detection", "feature inference", och att använda UA-strängen?
* Förklara AJAX så noggrant som möjligt.
* Förklara hur JSONP fungerar (och varför det egentligen inte är AJAX).
* Har du någonsin använt "JavaScript templating"?
  * Om så är fallet, vilka bibliotek har du använt?
* Förklara "hoisting".
* Beskriv "event bubbling".
* Vad är skillnaden mellan "attribute" och "property"?
* Varför är det inte bra att utvidga (extend) inbyggda JavaScript-objekt?
* Skillnaden mellan "document load event" och "document ready event"?
* Vad är skillnaden mellan `==` och `===`?
* Förklara "same-origin policy" med hänsyn till JavaScript.
* Få det här att fungera
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Varför kallas det för "ternary expression", vad menas med ordet "ternary"?
* Vad är `"use strict";`? Vilka är för- och nackdelarna med att använda det?
* Skapa en for-loop som itererar upp till `100` medan den skriver ut **"fizz"** vid multiplar av `3`, **"buzz"** vid multiplar av `5` och **"fizzbuzz"** vid multiplar av `3` och `5`.
* Varför är det generellt sett en bra idé att aldrig röra det globala scopet på en webbsida?
* Varför skulle man vilja använda något som `load`-eventet? Har det eventet några nackdelar? Känner du till några alternativ och varför skulle man i så fall vilja använda dem?
* Förklara vad en single page-app är och hur en sådan kan göras SEO-vänlig.
* Hur stor erfarenhet har du av Promises och/eller polyfills för dem?
* Vad är fördelarna och nackdelarna med att använda Promises i stället för callbacks?
* Nämn några för- och nackdelar med att skriva JavaScript-kod i ett språk som kompilerar till JavaScript.

#### Testfrågor:

* Nämn några för- och nackdelar med att testa sin kod.
* Vilka verktyg skulle du använda för att testa din kods funktionalitet?
* Vad är skillnaden mellan ett enhetstest och ett integrations-/funktionellt test?
* Vad är syftet med ett verktyg för lintning av kodstil?

#### Prestandafrågor:

* Vilka verktyg skulle du använda för att hitta en prestandabugg i din kod?
* Nämn några sätt att förbättra din sajts skrollningsprestanda.
* Beskriv skillnaden mellan "layout", "painting" och "compositing".

#### Nätverksfrågor:

* Varför har det traditionellt sett varit bättre att servera webbplatsen från flera domäner?
* Förklara så noggrannt du kan processen från att du skriver in en webbsidas URL till att sidan har laddats färdigt på din skärm.
* Vad är skillnaderna mellan long-polling, WebSockets och Server-Sent Events?
* Förklara följande svarshuvuden:
  * Skillnaden mellan Expires, Date, Age och If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* Vad är "HTTP actions"? Lista alla "HTTP actions" du känner till och förklara dem.

#### Kodfrågor

*Fråga: Vad är värdet av `foo`?*
```javascript
var foo = 10 + '20';
```

*Fråga: Hur skulle du få det här att fungera?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Fråga: Vilket värde returneras från nedanstående?
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Fråga: Vad är värdet av `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Fråga: Vad kommer de två alerterna att ropa ut?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Fråga: Vad är värdet av `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Fråga: Vad är värdet av `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

#### Roliga frågor:

* Nämn en cool sak du kodat nyligen.
* Nämn några delar som du gillar hos de utvecklarverktyg du använder?
* Har du några egna projekt som du sköter om? I sådana fall vilken typ av projekt?
* Vilken är din favoritfunktion i Internet Explorer?
* Hur gillar du ditt kaffe?

#### Bidragande skribenter:

Det här dokumentet startades 2009 som ett samarbete mellan [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) och [@iansym](https://twitter.com/iansym).

Det har sedan dess fått bidrag från över [100 utvecklare](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
