***

## title: JavaScript Vragen&#xA;layout: layouts/page.njk&#xA;permalink: /questions/javascript-questions/index.html

*   Leg gebeurtenisdelegatie uit.
*   Leg uit hoe `this` werkt in JavaScript.
    *   Kun je een voorbeeld geven van een van de manieren waarop werken met `this` is veranderd in ES6?
*   Leg uit hoe prototypische overerving werkt.
*   Wat is het verschil tussen een variabele die is: `null`, `undefined` of niet aangegeven?
    *   Hoe zou u te werk gaan bij het controleren op een van deze staten?
*   Wat is een sluiting en hoe/waarom zou je er een gebruiken?
*   Welke taalconstructies gebruikt u voor het herhalen van objecteigenschappen en matrixitems?
*   Kunt u het belangrijkste verschil beschrijven tussen de `Array.forEach()` lus en `Array.map()` methoden en waarom zou je de ene versus de andere kiezen?
*   Wat is een typische use case voor anonieme functies?
*   Wat is het verschil tussen hostobjecten en native objecten?
*   Leg het verschil uit tussen: `function Person(){}`, `var person = Person()`en `var person = new Person()`?
*   Leg de verschillen uit over het gebruik van `foo` tussen `function foo() {}` en `var foo = function() {}`
*   Kunt u uitleggen wat `Function.call` en `Function.apply` doen? Wat is het opmerkelijke verschil tussen de twee?
*   Uitleggen `Function.prototype.bind`.
*   Wat is het verschil tussen functiedetectie, functie-inferentie en het gebruik van de UA-tekenreeks?
*   Leg uit "hijsen".
*   Beschrijf gebeurtenis borrelen.
*   Beschrijf het vastleggen van gebeurtenissen.
*   Wat is het verschil tussen een "attribuut" en een "eigenschap"?
*   Wat zijn de voor- en nadelen van het uitbreiden van ingebouwde JavaScript-objecten?
*   Wat is het verschil tussen `==` en `===`?
*   Leg het beleid van dezelfde oorsprong uit met betrekking tot JavaScript.
*   Waarom wordt het een Ternaire operator genoemd, wat geeft het woord "Ternair" aan?
*   Wat is de strikte modus? Wat zijn enkele van de voor- en nadelen van het gebruik ervan?
*   Wat zijn enkele van de voor- en nadelen van het schrijven van JavaScript-code in een taal die compileert naar JavaScript?
*   Welke tools en technieken gebruikt u het debuggen van JavaScript-code?
*   Leg het verschil uit tussen veranderlijke en onveranderlijke objecten.
    *   Wat is een voorbeeld van een onveranderlijk object in JavaScript?
    *   Wat zijn de voor- en nadelen van onveranderlijkheid?
    *   Hoe bereik je onveranderlijkheid in je eigen code?
*   Leg het verschil uit tussen synchrone en asynchrone functies.
*   Wat is event loop?
    *   Wat is het verschil tussen de callstack en de taakwachtrij?
*   Wat zijn de verschillen tussen variabelen die zijn gemaakt met behulp van `let`, `var` of `const`?
*   Wat zijn de verschillen tussen ES6-klasse en ES5-functieconstructoren?
*   Kunt u een use case aanbieden voor de nieuwe pijl? `=>` functie syntaxis? Waarin verschilt deze nieuwe syntaxis van andere functies?
*   Welk voordeel is er voor het gebruik van de pijlsyntaxis voor een methode in een constructor?
*   Wat is de definitie van een hogere-orde functie?
*   Kun je een voorbeeld geven voor het destructureren van een object of een array?
*   Kun je een voorbeeld geven van het genereren van een tekenreeks met ES6 Template Literals?
*   Kun je een voorbeeld geven van een curryfunctie en waarom deze syntaxis een voordeel biedt?
*   Wat zijn de voordelen van het gebruik `spread syntax` en hoe verschilt het van `rest syntax`?
*   Hoe kunt u code delen tussen bestanden?
*   Waarom wilt u statische klasleden maken?
*   Wat is het verschil tussen `while` en `do-while` loops in JavaScript?
*   Wat is een belofte? Waar en hoe zou je promise gebruiken?

## Vragen over coderen

*   Laat dit werken:

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

*   Maak een for-lus die itereert tot `100` tijdens het uitvoeren **"bruisen"** bij veelvouden van `3`, **"geroezemoes"** bij veelvouden van `5` en **"bruisend"** bij veelvouden van `3` en `5`
*   Wat wordt er door elk van deze geretourneerd?

```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```

*   Schrijf een onmiddellijk aangeroepen functie-expressie (IIFE)
