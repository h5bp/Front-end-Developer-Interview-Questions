***

## cím: JavaScript-kérdések&#xA;elrendezés: elrendezések/page.njk&#xA;permalink: /questions/javascript-questions/index.html

*   Ismertesse az eseménydelegálást.
*   Magyarázza el, hogyan `this` JavaScriptben működik.
    *   Tudna mondani egy példát arra, hogy milyen módon működik együtt `this` változott az ES6-ban?
*   Magyarázza el, hogyan működik a prototípus-öröklés.
*   Mi a különbség a változó között, ami a következő: `null`, `undefined` vagy be nem jelentett?
    *   Hogyan ellenőriznéd ezeket az államokat?
*   Mi az a bezárás, és hogyan/miért használna ilyet?
*   Milyen nyelvi konstrukciókat használ az objektumtulajdonságok és tömbelemek iterálásához?
*   Le tudnád írni a fő különbséget a `Array.forEach()` hurok és `Array.map()` módszereket és miért választanád az egyiket a másikkal szemben?
*   Mi a tipikus használati eset a névtelen függvényekhez?
*   Mi a különbség a gazdagépobjektumok és a natív objektumok között?
*   Fejtse ki a különbséget a következők között: `function Person(){}`, `var person = Person()`és `var person = new Person()`?
*   Magyarázza el a különbségeket a `foo` között `function foo() {}` és `var foo = function() {}`
*   Meg tudnád magyarázni, hogy mi `Function.call` és `Function.apply` csinál? Mi a figyelemre méltó különbség a kettő között?
*   Megmagyaráz `Function.prototype.bind`.
*   Mi a különbség a funkcióészlelés, a funkciókövetkeztetés és az UA-karakterlánc használata között?
*   Magyarázza el az "emelést".
*   Írja le az esemény buborékolását.
*   Ismertesse az események rögzítését.
*   Mi a különbség az "attribútum" és a "tulajdonság" között?
*   Milyen előnyei és hátrányai vannak a beépített JavaScript-objektumok kiterjesztésének?
*   Mi a különbség a következők között: `==` és `===`?
*   Magyarázza el az azonos eredetű irányelveket a JavaScripttel kapcsolatban.
*   Miért hívják Ternary operátornak, mit jelent a "Ternary" szó?
*   Mi az a szigorú mód? Milyen előnyei/hátrányai vannak a használatának?
*   Milyen előnyei /hátrányai vannak annak, ha JavaScript-kódot írunk egy olyan nyelven, amely JavaScriptre fordít?
*   Milyen eszközöket és technikákat használ a JavaScript-kód hibakereséséhez?
*   Magyarázza el a különbséget a módosítható és a nem módosítható objektumok között.
    *   Mi a példa egy megváltoztathatatlan objektumra JavaScriptben?
    *   Melyek a megváltoztathatatlanság előnyei és hátrányai?
    *   Hogyan érheted el a megváltoztathatatlanságot a saját kódodban?
*   Magyarázza el a szinkron és az aszinkron függvények közötti különbséget.
*   Mi az eseményhurok?
    *   Mi a különbség a hívási verem és a feladatsor között?
*   Mi a különbség a használatával létrehozott változók között `let`, `var` vagy `const`?
*   Mi a különbség az ES6 osztály és az ES5 függvény konstruktorai között?
*   Tudna ajánlani használati esetet az új nyílhoz `=>` függvény szintaxisa? Miben különbözik ez az új szintaxis a többi függvénytől?
*   Milyen előnye van annak, ha a nyíl szintaxisát egy konstruktor metódusához használjuk?
*   Mi a magasabb rendű függvény definíciója?
*   Tudna példát mondani egy objektum vagy tömb destrukciójára?
*   Tudna példát mondani egy karakterlánc generálására ES6 template literals segítségével?
*   Tudna példát mondani egy curry függvényre, és miért kínál előnyt ez a szintaxis?
*   Milyen előnyei vannak a használatnak `spread syntax` és miben különbözik `rest syntax`?
*   Hogyan oszthat meg kódot a fájlok között?
*   Miért érdemes statikus osztálytagokat létrehozni?
*   Mi a különbség a következők között: `while` és `do-while` hurkok JavaScriptben?
*   Mi az ígéret? Hol és hogyan használnád az ígéretet?

## Kódolási kérdések

*   Tegye ezt működőképessé:

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

*   Hozzon létre egy forhurkot, amely akár `100` kimenet közben **"fizz"** többszöröseinél `3`, **"zümmögés"** többszöröseinél `5` és **"fizzbuzz"** többszöröseinél `3` és `5`
*   Mit fognak ezek visszaadni?

```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```

*   Azonnal meghívott függvénykifejezés (IIFE) írása
