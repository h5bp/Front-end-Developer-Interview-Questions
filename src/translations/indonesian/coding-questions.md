***

## title: Pertanyaan Coding&#xA;layout: layouts/page.njk&#xA;permalink: /questions/coding-questions/index.html

Pertanyaan: Berapa nilai dari `foo`?

```javascript
var foo = 10 + '20';
```

Pertanyaan: Apa yang akan menjadi output dari kode di bawah ini?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Pertanyaan: Bagaimana Anda membuat ini bekerja?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Pertanyaan: Nilai apa yang dikembalikan dari pernyataan berikut?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Pertanyaan: Berapa nilai dari `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Pertanyaan: Apa hasil dari dua peringatan di bawah ini?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Pertanyaan: Berapa nilai dari `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Pertanyaan: Berapa nilai dari `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Pertanyaan: Apa yang dicetak kode berikut?

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

Pertanyaan: Apa perbedaan antara keempat janji ini?

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

Pertanyaan: Apa yang akan dihasilkan kode di bawah ini ke konsol dan mengapa?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Pertanyaan: Pertimbangkan dua fungsi di bawah ini. Akankah mereka berdua mengembalikan hal yang sama? Mengapa atau mengapa tidak?

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
