***

## заглавие: Въпроси за кодиране&#xA;оформление: оформления/page.njk&#xA;пермалинк: /questions/coding-questions/index.html

Въпрос: Каква е стойността на `foo`?

```javascript
var foo = 10 + '20';
```

Въпрос: Каква ще бъде продукцията на кода по-долу?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Въпрос: Как бихте накарали това да проработи?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Въпрос: Каква стойност се връща от следното изявление?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Въпрос: Каква е стойността на `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Въпрос: Какъв е резултатът от двата сигнала по-долу?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Въпрос: Каква е стойността на `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Въпрос: Каква е стойността на `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Въпрос: Какво отпечатва следният код?

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

Въпрос: Каква е разликата между тези четири обещания?

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

Въпрос: Какъв ще бъде кодът под изхода към конзолата и защо?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Въпрос: Помислете за двете функции по-долу. И двамата ли ще върнат едно и също нещо? Защо или защо не?

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
