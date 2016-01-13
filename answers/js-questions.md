# JS Questions

#### Explain event delegation

When an event is fired from an element, the event will be bubbled up to its
parent nodes. However, the original element where the event occurs, called
'target', stays the same in the event object. Using the `target` property, we
can always keep tracking which element actually causes an event captured by
its parent, and it can help use reduce the number of event handlers as we
sometimes don't need to add event listeners for every element.

#### Explain how `this` works in JavaScript

*Not answered yet*

#### Explain how prototypal inheritance works

*Not answered yet*

#### What do you think of AMD vs CommonJS?

*Not answered yet*

#### Explain why the following doesn't work as an IIFE: `function foo(){ }();`.

*Not answered yet*

###### What needs to be changed to properly make it an IIFE?

```js
(function foo() { })(); // or
(function foo() { }());
```

#### What's the difference between a variable that is: `null`, `undefined` or undeclared?
###### How would you go about checking for any of these states?

*Not answered yet*

#### What is a closure, and how/why would you use one?

*Not answered yet*

#### What's a typical use case for anonymous functions?

*Not answered yet*

#### How do you organize your code? (module pattern, classical inheritance?)

*Not answered yet*

#### What's the difference between host objects and native objects?

- Host objects: what an environment(browser, Node.js, etc) provides
- Native objects: what JavaScript provides


#### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

*Not answered yet*

#### What's the difference between `.call` and `.apply`?

*Not answered yet*

#### Explain `Function.prototype.bind`.

*Not answered yet*

#### When would you use `document.write()`?

When someone gives me one million dollar for doing it.

#### What's the difference between feature detection, feature inference, and using the UA string?

- Feature detection: directly check if a feature is implemented

```js
if (Promise) {
  let a = Promise.resolve('hello');
}
```

- Feature inference: infer if a feature is implemented by checking other properties

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

#### Explain AJAX in as much detail as possible.

*Not answered yet*

#### Explain how JSONP works (and how it's not really AJAX).

A JSONP response contains a callback function usually written in JavaScript,
and when the response is flushed, the callback will be launched. It's more like
script tag injection, rather than AJAX.

#### Have you ever used JavaScript templating?

Yes.

###### If so, what libraries have you used?

Handlebars, Mustache, etc.

#### Explain "hoisting".

*Not answered yet*

#### Describe event bubbling.

It's when an event is bubbled into container elements, in the higher level of a
DOM tree.

#### What's the difference between an "attribute" and a "property"?

- Attribute: specified in HTML, always in the form of string
- Property: specified in DOM object, can have any type of JavaScript

#### Why is extending built-in JavaScript objects not a good idea?

*Not answered yet*

#### Difference between document load event and document ready event?

- document ready: when a HTML document is loaded and rendered
- document load: when a HTML document and assets in the document are all loaded
  and rendered

#### What is the difference between `==` and `===`?

*Not answered yet*

#### Explain the same-origin policy with regards to JavaScript.

Same-origin means having same host, port and protocol(HTTP or HTTPS). If a
script in the different origin should be accessed, we can consider using CORS.

#### Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

```js
let duplicate = (arr) => arr.concat(arr);
```

#### Why is it called a Ternary expression, what does the word "Ternary" indicate?

*Not answered yet*

#### What is `"use strict";`? what are the advantages and disadvantages to using it?

Advantages

- Cannot assign a value to an undefined global variable
- Fire TypeError for not-allowed assignments
- `this` in a normal function refers to `undefined`, instead of `global`

In short, it secures JavaScript.

Disadvantage

- When using global strict mode and concatenating the script with other scripts
  not using strict mode, the other scripts can be broken.

#### Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`

*Not answered yet*

#### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

*Not answered yet*

#### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

*Not answered yet*

#### Explain what a single page app is and how to make one SEO-friendly.

*Not answered yet*

#### What is the extent of your experience with Promises and/or their polyfills?

*Not answered yet*

#### What are the pros and cons of using Promises instead of callbacks?

*Not answered yet*

#### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

*Not answered yet*

#### What tools and techniques do you use debugging JavaScript code?

*Not answered yet*

#### What language constructions do you use for iterating over object properties and array items?

*Not answered yet*

#### Explain the difference between mutable and immutable objects.
###### What is an example of an immutable object in JavaScript?
###### What are the pros and cons of immutability?
###### How can you achieve immutability in your own code?

*Not answered yet*

#### Explain the difference between synchronous and asynchronous functions.

*Not answered yet*

#### What is event loop?
###### What is the difference between call stack and task queue?

*Not answered yet*

