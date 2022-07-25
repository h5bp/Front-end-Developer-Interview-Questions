***

## titlu: Întrebări de codificare&#xA;layout: layouts/page.njk&#xA;permalink: / questions/coding-questions/index.html

Întrebare: Care este valoarea `foo`?

```javascript
var foo = 10 + '20';
```

Întrebare: Care va fi rezultatul codului de mai jos?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Întrebare: Cum ați face ca acest lucru să funcționeze?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Întrebare: Ce valoare este returnată din următoarea declarație?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Întrebare: Care este valoarea `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Întrebare: Care este rezultatul celor două alerte de mai jos?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Întrebare: Care este valoarea `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Întrebare: Care este valoarea `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Întrebare: Ce imprimă următorul cod?

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

Întrebare: Care este diferența dintre aceste patru promisiuni?

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

Întrebare: Care va fi ieșirea codului de mai jos pe consolă și de ce?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Întrebare: Luați în considerare cele două funcții de mai jos. Vor returna amândoi același lucru? De ce sau de ce nu?

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
