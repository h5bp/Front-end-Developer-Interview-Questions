***

## साँचा:Coding Questions&#xA;लेआउट: लेआउट/&#xA;Permalink: / questions/coding-questions/index.html

प्रश्न: इसका मूल्य क्या है? `foo`?

```javascript
var foo = 10 + '20';
```

प्रश्न: नीचे दिए गए कोड का आउटपुट क्या होगा?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

प्रश्न: आप इस काम को कैसे करेंगे?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

प्रश्न: निम्नलिखित कथन से क्या मान दिया गया है?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

प्रश्न: इसका मूल्य क्या है? `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

प्रश्न: नीचे दिए गए दो अलर्ट का परिणाम क्या है?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

प्रश्न: इसका मूल्य क्या है? `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

प्रश्न: इसका मूल्य क्या है? `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

प्रश्न: निम्नलिखित कोड क्या मुद्रित करता है?

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

प्रश्न: इन चार वादों में क्या अंतर है?

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

प्रश्न: कंसोल के लिए नीचे दिए गए कोड क्या आउटपुट करेंगे और क्यों?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

प्रश्न: नीचे दिए गए दो कार्यों पर विचार करें। क्या वे दोनों एक ही चीज वापस करेंगे? क्यों या क्यों नहीं?

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
