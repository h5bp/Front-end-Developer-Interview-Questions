***

## titel: Kodningsspørgsmål&#xA;layout: layouts/page.njk&#xA;permalink: /questions/coding-questions/index.html

Spørgsmål: Hvad er værdien af `foo`?

```javascript
var foo = 10 + '20';
```

Spørgsmål: Hvad vil udgangen af koden nedenfor være?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Spørgsmål: Hvordan vil du få det til at fungere?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Spørgsmål: Hvilken værdi returneres fra følgende udsagn?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Spørgsmål: Hvad er værdien af `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Spørgsmål: Hvad er resultatet af de to indberetninger nedenfor?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Spørgsmål: Hvad er værdien af `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Spørgsmål: Hvad er værdien af `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Spørgsmål: Hvad udskriver følgende kode?

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

Spørgsmål: Hvad er forskellen mellem disse fire løfter?

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

Spørgsmål: Hvad vil koden nedenfor udsende til konsollen og hvorfor?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Spørgsmål: Overvej de to funktioner nedenfor. Vil de begge returnere det samme? Hvorfor eller hvorfor ikke?

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
