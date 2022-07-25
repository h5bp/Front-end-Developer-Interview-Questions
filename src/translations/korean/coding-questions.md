***

## 제목: 코딩 질문&#xA;레이아웃 : 레이아웃 / page.njk&#xA;블로그 바로 가기: /questions/coding-questions/index.html

질문 : 가치는 무엇입니까? `foo`?

```javascript
var foo = 10 + '20';
```

질문 : 아래 코드의 출력은 무엇입니까?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

질문: 이 일을 어떻게 하겠습니까?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

질문: 다음 문장에서 반환되는 값은 무엇입니까?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

질문 : 가치는 무엇입니까? `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

질문: 아래 두 경고의 결과는 무엇입니까?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

질문 : 가치는 무엇입니까? `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

질문 : 가치는 무엇입니까? `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

질문: 다음 코드는 무엇을 인쇄합니까?

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

질문: 이 네 가지 약속의 차이점은 무엇입니까?

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

질문 : 아래 코드는 콘솔에 어떤 것을 출력하며 그 이유는 무엇입니까?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

질문 : 아래의 두 가지 기능을 고려하십시오. 둘 다 같은 것을 돌려 줄 것입니까? 왜 또는 왜 안돼?

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
