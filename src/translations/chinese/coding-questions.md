***

## 标题： 编码问题&#xA;layout： layouts/page.njk&#xA;永久链接： /questions/coding-questions/index.html

问题：的价值是什么`foo`?

```javascript
var foo = 10 + '20';
```

问：以下代码的输出是什么？

```javascript
console.log(0.1 + 0.2 == 0.3);
```

问：你会如何做到这一点？

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

问：从以下语句返回什么值？

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

问题：的价值是什么`window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

问：以下两个警报的结果是什么？

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

问题：的价值是什么`foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

问题：的价值是什么`foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

问：以下代码打印什么？

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

问：这四个承诺有什么区别？

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

问：下面的代码将输出到控制台，为什么？

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

问：考虑以下两个函数。他们俩会退回同样的东西吗？为什么或为什么不呢？

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
