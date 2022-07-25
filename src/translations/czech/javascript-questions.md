***

## title: JavaScript Otázky&#xA;layout: layouts/page.njk&#xA;permalink: /questions/javascript-questions/index.html

*   Vysvětlete delegování událostí.
*   Vysvětlete, jak `this` funguje v JavaScriptu.
    *   Můžete uvést příklad jednoho ze způsobů, jak pracovat s `this` změnil se v ES6?
*   Vysvětlete, jak funguje dědičnost prototypů.
*   Jaký je rozdíl mezi proměnnou, která je: `null`, `undefined` nebo nehlášené?
    *   Jak byste postupovali při kontrole některého z těchto stavů?
*   Co je uzávěr a jak / proč byste ho používali?
*   Jaké jazykové konstrukce používáte pro iteraci vlastností objektů a položek pole?
*   Můžete popsat hlavní rozdíl mezi `Array.forEach()` smyčka a `Array.map()` metody a proč byste si vybrali jednu proti druhé?
*   Jaký je typický případ použití anonymních funkcí?
*   Jaký je rozdíl mezi hostitelskými objekty a nativními objekty?
*   Vysvětlete rozdíl mezi: `function Person(){}`, `var person = Person()`a `var person = new Person()`?
*   Vysvětlete rozdíly v používání `foo` mezi `function foo() {}` a `var foo = function() {}`
*   Můžete vysvětlit, co `Function.call` a `Function.apply` dělat? Jaký je pozoruhodný rozdíl mezi těmito dvěma?
*   Vysvětlit `Function.prototype.bind`.
*   Jaký je rozdíl mezi detekcí funkcí, odvozením funkcí a použitím řetězce UA?
*   Vysvětlete "zvedání".
*   Popište bublání událostí.
*   Popište zachycení události.
*   Jaký je rozdíl mezi "atributem" a "vlastností"?
*   Jaké jsou výhody a nevýhody rozšíření vestavěných objektů JavaScriptu?
*   Jaký je rozdíl mezi `==` a `===`?
*   Vysvětlete zásady stejného původu s ohledem na JavaScript.
*   Proč se nazývá ternární operátor, co znamená slovo "ternární"?
*   Co je přísný režim? Jaké jsou některé z výhod / nevýhod jeho použití?
*   Jaké jsou některé z výhod / nevýhod psaní kódu JavaScript v jazyce, který se kompiluje do JavaScriptu?
*   Jaké nástroje a techniky používáte k ladění kódu JavaScript?
*   Vysvětlete rozdíl mezi proměnlivými a neměnnými objekty.
    *   Jaký je příklad neměnného objektu v jazyce JavaScript?
    *   Jaké jsou výhody a nevýhody neměnnosti?
    *   Jak můžete dosáhnout neměnnosti ve svém vlastním kódu?
*   Vysvětlete rozdíl mezi synchronními a asynchronními funkcemi.
*   Co je smyčka událostí?
    *   Jaký je rozdíl mezi zásobníkem volání a frontou úloh?
*   Jaké jsou rozdíly mezi proměnnými vytvořenými pomocí `let`, `var` nebo `const`?
*   Jaké jsou rozdíly mezi konstruktory funkcí třídy ES6 a ES5?
*   Můžete nabídnout případ použití pro novou šipku? `=>` syntaxe funkce? Jak se tato nová syntaxe liší od ostatních funkcí?
*   Jaká výhoda je pro použití syntaxe šipky pro metodu v konstruktoru?
*   Jaká je definice funkce vyššího řádu?
*   Můžete uvést příklad destrukce objektu nebo pole?
*   Můžete uvést příklad generování řetězce pomocí literálů šablony ES6?
*   Můžete uvést příklad funkce kari a proč tato syntaxe nabízí výhodu?
*   Jaké jsou výhody používání `spread syntax` a jak se liší od `rest syntax`?
*   Jak můžete sdílet kód mezi soubory?
*   Proč byste mohli chtít vytvořit statické členy třídy?
*   Jaký je rozdíl mezi `while` a `do-while` smyčky v JavaScriptu?
*   Co je to slib? Kde a jak byste použili slib?

## Otázky týkající se kódování

*   Učiňte tuto práci:

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

*   Vytvořte smyčku for, která iteruje až do `100` při výstupu **"fizz"** na násobcích `3`, **"Buzz"** na násobcích `5` a **"fizzbuzz"** na násobcích `3` a `5`
*   Co každý z nich vrátí?

```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```

*   Zápis okamžitě vyvolaného výrazu funkce (IIFE)
