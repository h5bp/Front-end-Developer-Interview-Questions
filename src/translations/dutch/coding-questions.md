***

## titel: Coding Questions&#xA;layout: layouts/page.njk&#xA;permalink: /questions/coding-questions/index.html

Vraag: Wat is de waarde van `foo`?

```javascript
var foo = 10 + '20';
```

Vraag: Wat is de output van de onderstaande code?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Vraag: Hoe zou u dit laten werken?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Vraag: Welke waarde wordt geretourneerd uit de volgende verklaring?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Vraag: Wat is de waarde van `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Vraag: Wat is de uitkomst van de twee onderstaande waarschuwingen?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Vraag: Wat is de waarde van `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Vraag: Wat is de waarde van `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Vraag: Wat drukt de volgende code af?

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

Vraag: Wat is het verschil tussen deze vier beloften?

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

Vraag: Wat wordt de onderstaande code uitgevoerd naar de console en waarom?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Vraag: Overweeg de twee onderstaande functies. Zullen ze allebei hetzelfde teruggeven? Waarom wel of waarom niet?

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
