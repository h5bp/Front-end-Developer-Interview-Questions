***

## العنوان: أسئلة الترميز&#xA;التخطيط: تخطيطات/page.njk&#xA;الرابط الثابت: /questions/coding-questions/index.html

سؤال: ما هي قيمة `foo`?

```javascript
var foo = 10 + '20';
```

سؤال: ماذا سيكون إخراج الكود أدناه؟

```javascript
console.log(0.1 + 0.2 == 0.3);
```

سؤال: كيف يمكنك أن تجعل هذا العمل؟

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

سؤال: ما هي القيمة التي يتم إرجاعها من العبارة التالية؟

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

سؤال: ما هي قيمة `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

سؤال: ما هي نتيجة التنبيهين أدناه؟

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

سؤال: ما هي قيمة `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

سؤال: ما هي قيمة `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

السؤال: ماذا تطبع التعليمة البرمجية التالية؟

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

سؤال: ما الفرق بين هذه الوعود الأربعة؟

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

سؤال: ما الذي سيتم إخراج الرمز أدناه إلى وحدة التحكم ولماذا؟

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

سؤال: ضع في اعتبارك الوظيفتين أدناه. هل سيعيد كلاهما نفس الشيء؟ لماذا أو لماذا لا؟

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
