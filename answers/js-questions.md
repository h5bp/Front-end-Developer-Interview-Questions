# JS Questions

**Explain event delegation**

Event delegation is a way to avoid adding event listener to elements and
improve the program performance by using `event.target` property. It is a
technique by handling the bubbling of DOM interface Event. When an event is
fired from an element, the event will be bubbled up to its parent nodes.
However, the original element where the event occurs, called `target`, could be
always retrievable at any time.

**Explain how `this` works in JavaScript**

This is a keyword in JavaScript refers to current object of the scope, eg.
global window, function or class.

**Explain how prototypal inheritance works**

The prototypal inheritance is the way to implement inheritance in JavaScript.
A new class can be inherited from the old by set up prototype chain.

```
// create a class Rectangle
function Rectangle( width, height ) {
 this.width = width;
 this.height = height;
 this.name = "rect";
}

// created a function area by prototype (only function has prototype)
Rectangle.prototype.area = function() {
 return this.width * this.height;
};

// crate a new function as class, called Square
function Square( length ) {
 this.width = this.height = length;
}

// use prototype to make Square inherited area function from Rectangle
Square.prototype = Object.create( Rectangle.prototype );
var square = new Square( 4 );
square.area(); // 16
```

**What do you think of AMD vs CommonJS?**

AMD and CommonJS are the standards for loading modules in JavaScript. AMD
provides a way to load modules asynchronously which has better performance, but
synchronous API might not be suitable by using AMD; meanwhile CommonJS provides
the solution for synchronous module loading.

For ES6, we release `export` and `import` to solve the module loading. Since
old browsers won't able to support them, BableJS could be the helper.

**Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
What needs to be changed to properly make it an IIFE?**

It would cause syntax error, since the line starting with keyword `function`
would make the compiler assume it is a function declare statement. The correct
way of writing should be

```js
(function foo() { })(); // or
(function foo() { }());
+function foo(){ }();
```

**What's the difference between a variable that is: `null`, `undefined` or
`undeclared`? How would you go about checking for any of these states?**

`null` is a object indicate a empty value;
`undefined` is for the declared variable without assign any value;
`undeclared` means the variable haven't been declared.

**What is a closure, and how/why would you use one?**

closure is a inner function which can access outer variables; However the inner
variables won't be able to access by outer object or variable.

**What's a typical use case for anonymous functions?**

1. call back functions
2. closure function

**How do you organize your code? (module pattern, classical inheritance?)**

For node projects, I would create several modules depend on function and
leverage frameworks such as Angular, React. The main principle is try to create
unique, none duplicated module.

There are many tools also can help me organize the code, eg, webpack for module
package, gulp for automation, and ect.

**What's the difference between host objects and native objects?**

- Host objects: what an environment(browser, window, document, etc) provides
- Native objects: what JavaScript provides, eg. Object, Math, Date, ...

**Difference between: `function Person(){}`, `var person = Person()`, and
`var person = new Person()`?**

`function Person(){}`, function declare;
`var person = Person()`, assign the final eval of function Person which would
be undefined; `var person = new Person()` create a instance of function as class
Person.

**What's the difference between `.call` and `.apply`?**

They are similar the only difference is `.call` accept serials of arguments,
while `.apply` accept a array of arguments.

```
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
```

**Explain `Function.prototype.bind`.**

`Function.prototype.bind` is used for change the target of `this`.

```
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var retrieveX = module.getX;
console.log(retrieveX()); // undefined

var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 42
```

**When would you use `document.write()`?**

Change the document content

**What's the difference between feature detection, feature inference,
and using the UA string?**

- Feature detection: directly check if a feature is implemented

```js
if (Promise) {
  let a = Promise.resolve('hello');
}
```

- Feature inference: assume a feature is implemented by checking other
properties. It is usually a bad practice, don't do it.

```js
if (MozSmsMessage) {
  // guess it must be Firefox...
}
```

- UA string: UA stands for UserAgent, which a browser natively exposes to
  scripts and HTTP header

```js
console.log(navigator.userAgent); // "Mozilla/5.0 (Macintosh; ..."
```

**Explain AJAX in as much detail as possible.**

AJAX will create a XMLHTTPRequest Object, then checking the request status.
Once the request return the success status, then return back the content or
data from the request, and handle the data. It is usually asynchronously, so
the request won't stop other logic running, improve the web performance.

**Explain how JSONP works (and how it's not really AJAX).**

A JSONP response contains a callback function usually written in JavaScript,
and when the response is flushed, the callback will be launched. It's more like
script tag injection, rather than AJAX.

**Have you ever used JavaScript templating? If so, what libraries have you
used?**

Yes, Handlebars, Mustache, etc.

**Explain "hoisting".**

JavaScript hoisting would always move the variable declare to the top of the
statement which could prevent undeclared logic error during compiling.

**Describe event bubbling.**

It's when an event is bubbled into container elements, in the higher level of a
DOM tree.

**What's the difference between an "attribute" and a "property"?**

- Attribute: specified in HTML, always in the form of string, eg. 'src', 'href'
- Property: specified in DOM object, can have any type of JavaScript, eg.
'element.href'

**Why is extending built-in JavaScript objects not a good idea?**

It would break the standard conversation, but it is good idea to extend for the
features will be implement in next version of JavaScript.

**Difference between document load event and document ready event?**

- document ready: when a HTML document is loaded and rendered
- document load: when a HTML document and assets in the document are all loaded
  and rendered

**What is the difference between `==` and `===`?**

`==` compares value, `===` compares value and type.

**Explain the same-origin policy with regards to JavaScript.**

Same-origin means having same host, port and protocol(HTTP or HTTPS). If a
script in the different origin should be accessed, we can consider using CORS.

**Make this work:**
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

```js
let duplicate = (arr) => arr.concat(arr);
```

**Why is it called a Ternary expression, what does the word "Ternary"
indicate?**

Ternary means 3 parts, the Ternary expression (?:) is a shortcut of `if-else`
statement.

**What is `"use strict";`? what are the advantages and disadvantages to using
it?**

Advantages

- Cannot assign a value to an undefined global variable
- Fire TypeError for not-allowed assignments
- `this` in a normal function refers to `undefined`, instead of `global`

In short, it secures JavaScript.

Disadvantage

- When using global strict mode and concatenating the script with other scripts
  not using strict mode, the other scripts can be broken.

**Create a for loop that iterates up to `100` while outputting *"fizz"* at
multiples of `3`, *"buzz"* at multiples of `5` and *"fizzbuzz"* at multiples of
`3` and `5`**

```
for (var i = 1; i <= 100; i++) {
  var output = '';
  if (i % 3 === 0) output += 'fizz';
  if (i % 5 === 0) output += 'buzz';
  output !== '' ? console.log(output, i) : '';
}
```

**Why is it, in general, a good idea to leave the global scope of a website
as-is and never touch it?**

Since global scope will impact a lot of features, for preventing potential
issues, we should stay whatever the global state is.

**Why would you use something like the `load` event? Does this event have
disadvantages? Do you know any alternatives, and why would you use those?**

`load` event could be used to detect if a block of elements, including assets,
are all completely rendered. The disadvantages might be the performance issue,
since some times we don't need wait for assets, so `ready` event might be a
better choice.

**Explain what a single page app is and how to make one SEO-friendly.**

1. XML sitemap
2. Configure Google Analytics
3. Recrawl the site for bug, eg infinity loop

**What is the extent of your experience with Promises and/or their polyfills?**

```
new Promise((resolve, rejected) => {
    if(resolve){
        reslove("successed");
    }
    else{
        rejected("failed");
    }
})
.then((result) => {
    console.log(result);
})
.then((result) => {
    console.log(result);
});
```

polyfills: jQuery - Deferred, Q, When

**What are the pros and cons of using Promises instead of callbacks?**

Promises provide a better way to control the flow; while callback is lightweight
and triggered by event.

**What are some of the advantages/disadvantages of writing JavaScript code
in a language that compiles to JavaScript?**

pro:
- efficient writing, eg. CoffeeScript
- lint control, eg. flow

con:
- performance issue
- study invest

**What tools and techniques do you use debugging JavaScript code?**

- Chrome Developer tools
- Debug Plugins, eg React Plugins
- Test cases
- Lint

**What language constructions do you use for iterating over object
properties and array items?**

- for loop
- forEach loop
- array map, reduce, filter

**Explain the difference between mutable and immutable objects.**
**-What is an example of an immutable object in JavaScript?**
**-What are the pros and cons of immutability?**
**-How can you achieve immutability in your own code?**

Object.assign, Object.freeze, Array.slice are all the functions for immutable
work. Immutable could keep the original data unchanged for data safety reason,
eg props and state in react, props are immutable and states are mutable.

```
const object1 = {
  property1: 42
};

const object2 = Object.freeze(object1);

object2.property1 = 33;
// Throws an error in strict mode

console.log(object2.property1);
```

**Explain the difference between synchronous and asynchronous functions.**

In general, the statement is run one by one in synchronous sequence, but
asynchronously provides a way to run several statements at the same time which
improve the performance of program or web.

**What is event loop? What is the difference between call stack and task
queue?**

Event loop usually is implemented by

```
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

It would process a task queue in a stack of calls or functions.

```
while (taskQueue.length) {
  let item = taskQueue.pop();
  process1(item);
  process2(item);
  ...
  update(taskQueue);
}
```
