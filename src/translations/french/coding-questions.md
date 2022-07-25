***

## titre : Questions de codage&#xA;mise en page : mises en page/page.njk&#xA;permalien: /questions/coding-questions/index.html

Question : Quelle est la valeur de `foo`?

```javascript
var foo = 10 + '20';
```

Question : Quelle sera la sortie du code ci-dessous ?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Question: Comment feriez-vous pour que cela fonctionne?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Question : Quelle valeur est renvoyée par l’instruction suivante ?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Question : Quelle est la valeur de `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Question : Quel est le résultat des deux alertes ci-dessous ?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Question : Quelle est la valeur de `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Question : Quelle est la valeur de `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Question : Qu’est-ce que le code suivant imprime ?

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

Question : Quelle est la différence entre ces quatre promesses ?

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

Question : Qu’est-ce que le code ci-dessous produira sur la console et pourquoi ?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Question : Considérez les deux fonctions ci-dessous. Vont-ils tous les deux retourner la même chose? Pourquoi ou pourquoi pas?

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
