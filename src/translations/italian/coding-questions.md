***

## titolo: Domande di codifica&#xA;layout: layouts/page.njk&#xA;permalink: /questions/coding-questions/index.html

Domanda: Qual è il valore di `foo`?

```javascript
var foo = 10 + '20';
```

Domanda: Quale sarà l'output del codice qui sotto?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Domanda: Come faresti a farlo funzionare?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Domanda: Quale valore viene restituito dall'istruzione seguente?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Domanda: Qual è il valore di `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Domanda: Qual è il risultato dei due avvisi riportati di seguito?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Domanda: Qual è il valore di `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Domanda: Qual è il valore di `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Domanda: Cosa stampa il codice seguente?

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

Domanda: Qual è la differenza tra queste quattro promesse?

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

Domanda: Quale sarà il codice sottostante in uscita sulla console e perché?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Domanda: Considera le due funzioni seguenti. Torneranno entrambi la stessa cosa? Perché o perché no?

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
