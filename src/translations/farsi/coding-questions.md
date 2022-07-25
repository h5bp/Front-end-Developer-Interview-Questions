***

## عنوان: کدنویسی سوالات&#xA;طرح: layouts/page.njk&#xA;لینک ثابت: /questions/coding-questions/index.html

سوال: چه ارزشی دارد `foo`?

```javascript
var foo = 10 + '20';
```

سوال: خروجی کد زیر چه خواهد بود؟

```javascript
console.log(0.1 + 0.2 == 0.3);
```

سوال: این کار را چگونه انجام می دادید؟

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

سوال: چه ارزشی از بیانیه زیر بازگردانده می شود؟

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

سوال: چه ارزشی دارد `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

سوال: نتیجه دو هشدار زیر چگونه است؟

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

سوال: چه ارزشی دارد `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

سوال: چه ارزشی دارد `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

سوال: کد زیر چه چیزی را چاپ می کند؟

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

سوال: چه تفاوتی بین این چهار وعده وجود دارد؟

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

سوال: کد زیر خروجی به کنسول چه خواهد شد و چرا؟

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

سوال: دو عملکرد زیر را در نظر بگیرید. هر دو ي اونا يه چيزي رو برميگردونن؟ چرا یا چرا؟

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
