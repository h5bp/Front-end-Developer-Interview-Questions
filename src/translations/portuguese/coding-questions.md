***

## título: Perguntas de codificação&#xA;layout: layouts/page.njk&#xA;permalink: /questions/coding-questions/index.html

Pergunta: Qual é o valor de `foo`?

```javascript
var foo = 10 + '20';
```

Pergunta: Qual será a saída do código abaixo?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Pergunta: Como você faria isso funcionar?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Pergunta: Qual valor é devolvido da seguinte declaração?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Pergunta: Qual é o valor de `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Pergunta: Qual é o resultado dos dois alertas abaixo?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Pergunta: Qual é o valor de `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Pergunta: Qual é o valor de `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Pergunta: O que o código a seguir imprime?

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

Pergunta: Qual é a diferença entre essas quatro promessas?

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

Pergunta: Qual será o código abaixo da saída para o console e por quê?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Pergunta: Considere as duas funções abaixo. Os dois voltarão a mesma coisa? Por que ou não?

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
