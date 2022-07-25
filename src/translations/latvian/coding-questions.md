***

## nosaukums: Kodēšanas jautājumi&#xA;izkārtojums: izkārtojumi/page.njk&#xA;permalink: /questions/coding-questions/index.html

Jautājums: Kāda ir vērtība `foo`?

```javascript
var foo = 10 + '20';
```

Jautājums: Kāds būs zemāk esošā koda izvade?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Jautājums: Kā jūs liktu tam darboties?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Jautājums: Kāda vērtība tiek atgriezta no šī paziņojuma?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Jautājums: Kāda ir vērtība `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Jautājums: Kāds ir abu zemāk minēto brīdinājumu rezultāts?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Jautājums: Kāda ir vērtība `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Jautājums: Kāda ir vērtība `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Jautājums: Ko drukā šāds kods?

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

Jautājums: Kāda ir atšķirība starp šiem četriem solījumiem?

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

Jautājums: Kāds būs zemāk redzamais kods uz konsoli un kāpēc?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Jautājums: Apsveriet divas tālāk norādītās funkcijas. Vai viņi abi atgriezīsies vienu un to pašu? Kāpēc vai kāpēc ne?

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
