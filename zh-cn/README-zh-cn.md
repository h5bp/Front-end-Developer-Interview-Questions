这是对 [Front-end-Developer-Interview-Questions](https://github.com/darcyclarke/Front-end-Developer-Interview-Questions) 的一个翻译
#JOB INTERVIEW QUESTIONNAIRE

@version 1.0
 
##投稿人名单：

@bentruyman (http://bentruyman.com/), @roger_raymond (http://twitter.com/iansym), @ajpiano (http://ajpiano.com/), @paul_irish (http://paulirish.com/), @SlexAxton (http://alexsexton.com/), @boazsender (http://boazsender.com/), @miketaylr (http://miketaylr.com/), @vladikoff (http://vladfilippov.com/), @gf3 (http://gf3.ca/), @jon_neal (http://twitter.com/jon_neal), @wookiehangover (http://wookiehangover.com/) and @darcy_clarke (http://darcyclarke.me)

## 综合性问题:

* 你上Twitter吗? 
	* 如果上, 那么你在Twitter上都关注了哪些人?
* 你上Github吗? 
	* 如果上, 你关注了哪些项目呢？  
* 你订阅了哪些博客? 
* 你用什么版本控制软件? 
* 你的首选开发环境是什么(OS, 编辑器, 浏览器, 调试工具等.) 
* 你能描述一下你创建一个网页的工作流程吗？
* 能描述一下什么是渐进增强和平稳退化吗？区别是什么呢？
* 解释一下什么是HTML语义化。 
* What does "minification" do? 
* Why is it better to serve site assets from multiple domains? 
	* How many resources will a browser download from a given domain at a time?  
* If you have 8 different stylesheets for a given design, how would you integrate them into the site? 
	* Looking for file concatenation.
	* Points off for `@import`, unless it works in conjunction with a build system.  
* 如果你进入一个项目组，其它人都使用tab而你使用空格，你会怎么做？
	* `issue :retab! command`
* 写一个简单的幻灯片页面。
	* 如果不用JS那就值得加分.  
* 用什么工具检测你代码的性能? 
* 如果今年你能学会一门技术，那是什么呢？ 
* Name 3 ways to decrease page load. (perceived or actual load time) 
* 解释一下标准的重要性。

## HTML问题:

* `doctype` 是什么, 你知道多少种呢? 
* 什么是标准模式和怪癖模式，之间的区别是什么? 
* 当构建一个XHTML网页时有一些什么限制或规定？ 
	* 如果我创建为`application/xhtml+xml`有没有什么问题？
* 怎么为多语言网页更好的创建网页? 
* 能在HTML5里使用XHTML的语法吗？HTML5里怎么使用XML? 
* `data-` 属性的好处在哪? 
* What are the content models in HTML4 and are they different in HTML5? 
* HTML5作为一个开放的网络平台. What are the building blocks of HTML5? 
* Describe the difference between cookies, sessionStorage and localStorage.  

## JS问题

* 你使用什么JS库? 
* JavaScript 跟 Java 有什么区别? 
* 什么是`undefined` 和 `未定义` 变量? 
* 什么是闭包，闭包怎么使用 ? 为什么使用闭包？ 
	* Your favorite pattern used to create them? argyle (Only applicable to IIFEs)  
* What's a typical use case for anonymous functions? 
* Explain the "JavaScript module pattern" and when you'd use it. 
	* Bonus points for mentioning clean namespacing. 
	* What if your modules are namespace-less?  
* how do you organize your code? (module pattern, classical inheritance?) 
* What's the difference between host objects and native objects? 
* Difference between: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
*  `.call` 和 `.apply` 有什么区别? 
* 描述 `Function.prototype.bind`? 
* 什么时候优化你的代码? 
* 能解释一下javascript里如何继承吗? 
	* Bonus points for the funny answer: "no one can" 
	* Extra bonus points if they take a stab at explaining it  
* 什么时候会使用 `document.write()`? 
	* Correct answer: 1999 - time to weed out the junior devs  
* What's the difference between feature detection, feature inference, and using the UA string 
* Explain AJAX in as much detail as possible 
* 解释一下JSONP的原理(它为什么不是AJAX，区别在哪？) 
* 用过 JavaScript 模板技术吗, 如果用过, 解释下为什么用、怎么用的? 
* Explain "hoisting". 
* 什么是FOUC? 如何避免FOUC? --译者注：[关于FOUC的说明](http://paulirish.com/2009/avoiding-the-fouc-v3/)
* 解释一下事件冒泡. 
* "attribute" and a "property"之间的区别是什么? 
* 为什么说扩展JS的原生对象是不好的呢? 
* Why is extending built ins a good idea? 
* document的load 事件document ready 事件区别在哪? 
* `==` 和 `===` 有什么区别？
* Explain how you would get a query string parameter from the browser window's URL. 
* 解释一下同源策略（关于javascript相关的就行）. 
* 描述一下事件代理. 
* 描述一下javascript中的继承. 
* 让下面的代码执行完后结果为注释过的值: 
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Describe a strategy for memoization (avoiding calculation repetition) in JavaScript. 
* Why is it called a Ternary statement, what does the word "Ternary" indicate? 
* What is the arity of a function?  

## JS-Code Examples:

```javascript
~~3.14
```
问题: 上面的语句返回什么值? 
**Answer: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
问题: 上面的语句返回什么值? 
**答案: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
问题: window.foo的值是什么? 
**答案: "bar"** 
only if window.foo was falsey otherwise it will retain its value.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
问题: 上面两个alert会弹出什么? 
**答案: "Hello World" 和 ReferenceError: bar is not defined** 

## jQuery 相关问题：

* 解释一下 "链式". 
* `.end()` 的作用是什么? 
* 什么情况下，你会为事件绑定创建一个命名空间? 
* What is the effects (or fx) queue? 
* `.get()`, `[]`, 和 `.eq()` 之间的区别是什么？
* `.bind()`, `.live()`, 和 `.delegate()`之间的区别是什么？
* `$` 和 `$.fn` 的区别是什么? 或者说`$.fn`究竟是什么？. 
* 优化下面的选择器: 
```javascript
$(".foo div#bar:eq(0)")
```

## CSS问题:

* 描述一下css的reset，它有什么作用？. 
* 描述一下浮动的它的原理. 
* What are the various clearing techniques and which is appropriate for what context? 
* 描述一下 CSS sprites, 你一般是怎么实现的？. 
* What are your favourite image replacement techniques and which do you use when? 
* 描述一下关于CSS属性的hacks, css文件的条件包含, 或者相关的其它技术? 
* 遇上某些功能有限的浏览器时，你如何做？
	* 使用什么工具或技术?  
* 有什么方法让某些内容在网页上不可见 (但是需要让屏幕阅读器读到)? 
* 你用不用网格布局?如果用，你喜欢它什么？
* Have you used or implement media queries or mobile specific layouts/CSS? 
* Any familiarity with styling SVG? 
* 你怎么为打印功能优化你的网页? 
* What are some of the "gotchas" for writing efficient CSS? 
* 你使用css预处理技术吗? 
	* If so, describe what you like and dislike about the CSS preprocessors you have used. 
* How would you implement a web design comp that uses non-standard fonts? (avoid mentioning webfonts so they can figure it out) 
* 解释一下浏览器是如何匹配符合的选择器的?  

## 可选的问题:

* 你曾经写过最酷的代码是什么，值得你骄傲的地方在哪? 
* Do you know the HTML5 gang sign? 
* Are you now, or have you ever been, on a boat. 
* 你最喜欢Firebug / Webkit Inspector的哪些部分或功能？
* Do you have any pet projects? What kind? 
* Explain the significance of "cornify". 
* On a piece of paper, write down the letters A B C D E vertically. Now put these in descending order without writing one line of code. 
	* Wait and see if they turn the paper upside down
* This should make the laugh and is a fine way to relieve some tension at the end of the interview.  
* Pirate or Ninja? 
	* Bonus if it's a combo and a good reason was given (+2 for zombie monkey pirate ninjas) 
* 如果没有网络，你会做什么？
* Where in the world is Carmen Sandiego? (hint: their answer is always wrong) 
* 你最喜欢Internet Explorer的什么功能？
* 完成这句话: Brendan Eich 和 Doug Crockford 是 javascript 的________.
* jQuery它是一个伟大的库或者说是最伟大的库吗？话题讨论.