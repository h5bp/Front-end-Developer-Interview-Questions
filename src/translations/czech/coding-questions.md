***

## název: Kódování otázky&#xA;layout: layouts/page.njk&#xA;permalink: /questions/coding-questions/index.html

Otázka: Jaká je hodnota `foo`?

```javascript
var foo = 10 + '20';
```

Otázka: Jaký bude výstup níže uvedeného kódu?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Otázka: Jak byste to udělali?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Otázka: Jaká hodnota je vrácena z následujícího příkazu?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Otázka: Jaká je hodnota `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Otázka: Jaký je výsledek dvou níže uvedených výstrah?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Otázka: Jaká je hodnota `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Otázka: Jaká je hodnota `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Otázka: Co se vytiskne v následujícím kódu?

```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
```

Otázka: Jaký je rozdíl mezi těmito čtyřmi zaslíbeními?

```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

Otázka: Jaký bude níže uvedený kód výstupem do konzoly a proč?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Otázka: Zvažte dvě níže uvedené funkce. Vrátí se oba stejně? Proč nebo proč ne?

```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```
