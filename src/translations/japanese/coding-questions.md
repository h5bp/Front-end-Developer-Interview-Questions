***

## title: コーディングの質問&#xA;レイアウト:レイアウト/ページ.njk&#xA;パーマリンク: /questions/coding-questions/index.html

質問:の価値は何ですか?`foo`?

```javascript
var foo = 10 + '20';
```

質問:以下のコードの出力は何ですか?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

質問:どのようにこの作品を作りますか?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

質問: 次のステートメントからどのような値が返されますか。

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

質問:の価値は何ですか?`window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

質問: 以下の 2 つのアラートの結果はどうなりますか?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

質問:の価値は何ですか?`foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

質問:の価値は何ですか?`foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

質問: 次のコードは何を出力しますか。

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

質問: これら4つの約束の違いは何ですか?

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

質問:以下のコードはコンソールに何とその理由を出力しますか?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

質問: 以下の 2 つの関数を考えてみましょう。彼らは両方とも同じものを返しますか?なぜ、またはなぜそうではないのですか?

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
