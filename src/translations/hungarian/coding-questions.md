***

## cím: Kódolási kérdések&#xA;elrendezés: elrendezések/page.njk&#xA;permalink: /questions/coding-questions/index.html

Kérdés: Mi az értéke `foo`?

```javascript
var foo = 10 + '20';
```

Kérdés: Mi lesz az alábbi kód kimenete?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Kérdés: Hogyan tudná ezt működőképessé tenni?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Kérdés: Milyen értéket ad vissza a rendszer a következő állításból?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Kérdés: Mi az értéke `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Kérdés: Mi az alábbi két riasztás eredménye?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Kérdés: Mi az értéke `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Kérdés: Mi az értéke `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Kérdés: Mit nyomtat az alábbi kód?

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

Kérdés: Mi a különbség a négy ígéret között?

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

Kérdés: Mit és miért fog az alábbi kód a konzolra továbbítani?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Kérdés: Vegye figyelembe az alábbi két funkciót. Mindketten ugyanazt adják vissza? Miért vagy miért nem?

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
