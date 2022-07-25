***

## 標題： 編碼問題&#xA;layout： layouts/page.njk&#xA;永久連結： /questions/coding-questions/index.html

問題：的價值是什麼`foo`?

```javascript
var foo = 10 + '20';
```

問：以下代碼的輸出是什麼？

```javascript
console.log(0.1 + 0.2 == 0.3);
```

問：你會如何做到這一點？

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

問：從以下語句返回什麼值？

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

問題：的價值是什麼`window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

問：以下兩個警報的結果是什麼？

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

問題：的價值是什麼`foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

問題：的價值是什麼`foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

問：以下代碼列印什麼？

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

問：這四個承諾有什麼區別？

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

問：下面的代碼將輸出到控制台，為什麼？

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

問：考慮以下兩個函數。他們倆會退回同樣的東西嗎？為什麼或為什麼不呢？

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
