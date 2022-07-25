***

## Titel: Coding Questions&#xA;Layout: layouts/page.njk&#xA;Permalink: /questions/coding-questions/index.html

Frage: Was ist der Wert von `foo`?

```javascript
var foo = 10 + '20';
```

Frage: Was wird die Ausgabe des folgenden Codes sein?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Frage: Wie würden Sie das zum Laufen bringen?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Frage: Welcher Wert wird von der folgenden Anweisung zurückgegeben?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Frage: Was ist der Wert von `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Frage: Was ist das Ergebnis der beiden folgenden Warnungen?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Frage: Was ist der Wert von `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Frage: Was ist der Wert von `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Frage: Was druckt der folgende Code?

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

Frage: Was ist der Unterschied zwischen diesen vier Versprechen?

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

Frage: Was wird der folgende Code an die Konsole ausgegeben und warum?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Frage: Betrachten Sie die beiden folgenden Funktionen. Werden beide dasselbe zurückgeben? Warum oder warum nicht?

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
