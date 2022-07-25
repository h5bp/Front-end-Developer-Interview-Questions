***

## title: Ερωτήσεις κωδικοποίησης&#xA;διάταξη: διατάξεις/page.njk&#xA;μόνιμος σύνδεσμος: /questions/coding-questions/index.html

Ερώτηση: Ποια είναι η αξία του `foo`?

```javascript
var foo = 10 + '20';
```

Ερώτηση: Ποια θα είναι η έξοδος του παρακάτω κώδικα;

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Ερώτηση: Πώς θα το κάνατε αυτό να λειτουργήσει;

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Ερώτηση: Ποια τιμή επιστρέφεται από την ακόλουθη δήλωση;

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Ερώτηση: Ποια είναι η αξία του `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Ερώτηση: Ποιο είναι το αποτέλεσμα των δύο παρακάτω ειδοποιήσεων;

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Ερώτηση: Ποια είναι η αξία του `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Ερώτηση: Ποια είναι η αξία του `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Ερώτηση: Τι εκτυπώνει ο ακόλουθος κώδικας;

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

Ερώτηση: Ποια είναι η διαφορά μεταξύ αυτών των τεσσάρων υποσχέσεων;

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

Ερώτηση: Τι θα εξάγει ο παρακάτω κώδικας στην κονσόλα και γιατί;

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Ερώτηση: Εξετάστε τις δύο παρακάτω λειτουργίες. Θα επιστρέψουν και οι δύο το ίδιο πράγμα; Γιατί ή γιατί όχι;

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
