***

## כותרת: שאלות קידוד&#xA;פריסה: פריסות/page.njk&#xA;קישור קבוע: /questions/coding-questions/index.html

שאלה: מה הערך של `foo`?

```javascript
var foo = 10 + '20';
```

שאלה: מה יהיה הפלט של הקוד שלהלן?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

שאלה: איך הייתם גורמים לזה לעבוד?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

שאלה: איזה ערך מוחזר מהמשפט הבא?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

שאלה: מה הערך של `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

שאלה: מה התוצאה של שתי ההתראות שלהלן?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

שאלה: מה הערך של `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

שאלה: מה הערך של `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

שאלה: מה מדפיס הקוד הבא?

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

שאלה: מה ההבדל בין ארבע ההבטחות הללו?

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

שאלה: מה יהיה הקוד שמתחת לפלט לקונסולה ומדוע?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

שאלה: שקול את שתי הפונקציות שלהלן. האם שניהם יחזרו את אותו הדבר? למה או למה לא?

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
