***

## ခေါင်းစဉ် - ကိုဒင်းမေးခွန်းများ&#xA;အလွှာ - layouts/page.njk&#xA;ပါမယ်လင့် : //questions/coding-questions/index.html

မေးခွန်း– တန်ဖိုးက ဘာလဲ `foo`?

```javascript
var foo = 10 + '20';
```

မေးခွန်း– အောက်ပါ သင်္ကေတရဲ့ ထုတ်ကုန်က ဘာတွေလဲ။

```javascript
console.log(0.1 + 0.2 == 0.3);
```

မေးခွန်း– ဒီအလုပ်ကို ဘယ်လိုလုပ်မလဲ။

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

မေးခွန်း– အောက်ပါဖော်ပြချက်ကနေ ဘယ်တန်ဖိုးပြန်ရသလဲ။

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

မေးခွန်း– တန်ဖိုးက ဘာလဲ `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

မေးခွန်း– အောက်ပါသတိပေးချက်နှစ်ခုရဲ့ ရလဒ်က ဘာလဲ။

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

မေးခွန်း– တန်ဖိုးက ဘာလဲ `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

မေးခွန်း– တန်ဖိုးက ဘာလဲ `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

မေးခွန်း– အောက်ပါ သင်္ကေတ ပုံနှိပ်နည်းက ဘာလဲ။

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

မေးခွန်း– ဤကတိလေးခု၏ ကွာခြားချက်ကား အဘယ်နည်း။

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

မေးခွန်း– ကွန်ဆောရဲ့ထုတ်လွှင့်မှုအောက်က သင်္ကေတက ဘာလဲ၊ ဘာကြောင့်လဲ။

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

မေးခွန်း– အောက်ပါလုပ်ဆောင်မှုနှစ်ခုကို သုံးသပ်ကြည့်ပါ။ သူ တို့ နှစ် ဦး စလုံး သည် တူညီ သော အရာ ကို ပြန် ပေး မည် လော ။ အဘယ်ကြောင့် နည်း ။

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
