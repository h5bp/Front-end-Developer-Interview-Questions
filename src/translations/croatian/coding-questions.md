***

## naslov: Pitanja o kodiranju&#xA;izgled: layouts/page.njk&#xA;permalink: /questions/coding-questions/index.html

Pitanje: Koja je vrijednost `foo`?

```javascript
var foo = 10 + '20';
```

Pitanje: Koliki će biti izlaz donjeg koda?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Pitanje: Kako biste to učinili?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Pitanje: Koja se vrijednost vraća iz sljedeće izjave?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Pitanje: Koja je vrijednost `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Pitanje: Kakav je ishod dvaju upozorenja u nastavku?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Pitanje: Koja je vrijednost `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Pitanje: Koja je vrijednost `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Pitanje: Što ispisuje sljedeći kôd?

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

Pitanje: Koja je razlika između ova četiri obećanja?

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

Pitanje: Što će kôd u nastavku izlazni na konzolu i zašto?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Pitanje: Razmotrite dvije funkcije u nastavku. Hoće li obojica vratiti istu stvar? Zašto ili zašto ne?

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
