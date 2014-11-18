#前端工作面试问题

**备注:** 本 repo 包含了一些前端面试问题用于考查候选者。不建议对单个候选者问及每个问题（那需要好几个小时）。只要从列表里挑选一些，就能帮助你考查候选者是否具备所需要的技能了。

[Rebecca Murphey](http://rmurphey.com/) 的 [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) 是你在准备面试前应该阅读的绝佳资源。

**记住：** 很多问题都是开放的，可以引发有趣的讨论。这比直接的答案更能体现此人的能力。

## <a name='toc'>目录</a>

  1. [最初的贡献者](#contributors)
  1. [常见问题](#general)
  1. [HTML 相关问题](#html)
  1. [CSS 相关问题](#css)
  1. [JS 相关问题](#js)
  1. [jQuery 相关问题](#jquery)
  1. [代码相关的问题](#jscode)
  1. [有趣的问题](#fun)
  1. [其他参考资料](#references)

####[[⬆]](#toc) <a name='contributors'>最初贡献者</a>

这里大部分的面试题都摘抄自 [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) 在 [oksoclap](http://oksoclap.com/) 创建的帖子，这份原帖的贡献者还有：

* [@bentruyman](http://twitter.com/bentruyman) - http://bentruyman.com
* [@cowboy](http://twitter.com/cowboy) - http://benalman.com
* [@ajpiano](http://ajpiano) - http://ajpiano.com
* [@SlexAxton](http://twitter.com/slexaxton) - http://alexsexton.com
* [@boazsender](http://twitter.com/boazsender) - http://boazsender.com
* [@miketaylr](http://twitter.com/miketaylr) - http://miketaylr.com
* [@vladikoff](http://twitter.com/vladikoff) - http://vladfilippov.com
* [@gf3](http://twitter.com/gf3) - http://gf3.ca
* [@jon_neal](http://twitter.com/jon_neal) - http://twitter.com/jon_neal
* [@wookiehangover](http://twitter.com/wookiehangover) - http://wookiehangover.com
* [@darcy_clarke](http://twitter.com/darcy) - http://darcyclarke.me
* [@iansym](http://twitter.com/iansym)


####[[⬆]](#toc) <a name='general'>常见问题：</a>

* 你在昨天/本周学到了什么？

* 编写代码的哪些方面能够使你兴奋或感兴趣？

* 在制作一个Web应用或Web站点的过程中，你是如何考虑他的UI、安全性、高性能、SEO、可维护性以及技术因素的？

* 谈谈你喜欢的开发环境。(例如操作系统，编辑器，浏览器，工具等等。)

* 你最熟悉哪一套版本控制系统？

* 你能描述一下当你制作一个网页的工作流程吗？

* 你能描述一下渐进增强和优雅降级之间的不同吗?
	* 如果提到了特性检测，可以加分。

* 请解释一下什么是“语义化的 HTML”。

* 你如何对网站的文件和资源进行优化？
	* 期待的解决方案包括：
		* 文件合并
		* 文件最小化/文件压缩
		* 使用 CDN 托管
		* 缓存的使用
		* 其他

* 为什么利用多个域名来提供网站资源会更有效？
	* 浏览器同一时间可以从一个域名下载多少资源？

* 请说出三种减少页面加载时间的方法。（加载时间指感知的时间或者实际加载时间）

* 如果你参与到一个项目中，发现他们使用 Tab 来缩进代码，但是你喜欢空格，你会怎么做？
	* 建议这个项目使用像 EditorConfig (http://editorconfig.org/) 之类的规范
	* 为了保持一致性，接受项目原有的风格
	* 直接使用 VIM 的 retab 命令

* 请写一个简单的幻灯效果页面
	* 如果不使用JS来完成，可以加分。

* 你都使用哪些工具来测试代码的性能？
	* Profiler, JSPerf, Dromaeo

* 如果今年你打算熟练掌握一项新技术，那会是什么？

* Long-Polling, Websockets, SSE(Server-Sent Event) 之间有什么区别？

* 请谈一下你对网页标准和标准制定机构重要性的理解。

* 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

* 请尽可能完整得描述下从输入URL到整个网页加载完毕及显示在屏幕上的整个流程

####[[⬆]](#toc) <a name='html'>HTML相关问题：</a>

* `doctype`（文档类型）的作用是什么？

* 浏览器标准模式和怪异模式之间的区别是什么？

* 使用 XHTML 的局限有哪些？
	* 如果页面使用 'application/xhtml+xml' 会有什么问题吗？

* 如果网页内容需要支持多语言，你会怎么做？
	* 在设计和开发多语言网站时，有哪些问题你必须要考虑？

* `data-`属性的作用是什么？

* 如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？

* 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

* 请描述一下 `GET` 和 `POST` 的区别?

####[[⬆]](#toc) <a name='css'>CSS 相关问题：</a>

* 描述下 “reset” CSS 文件的作用和使用它的好处。

* 解释下浮动和它的工作原理。

* 列举不同的清除浮动的技巧，并指出它们各自适用的使用场景。

* 解释下 CSS sprites，以及你要如何在页面或网站中使用它。

* 你最喜欢的图片替换方法是什么，你如何选择使用。

* 讨论CSS hacks，条件引用或者其他。

* 如何为有功能限制的浏览器提供网页？
  * 你会使用哪些技术和处理方法？

* 有哪些的隐藏内容的方法（如果同时还要保证屏幕阅读器可用呢？）

* 你用过栅格系统吗？如果使用过，你最喜欢哪种？

* 你用过媒体查询，或针对移动端的布局/CSS 吗？

* 你熟悉 SVG 样式的书写吗？

* 如何优化网页的打印样式？

* 在书写高效 CSS 时会有哪些问题需要考虑？

* 使用 CSS 预处理器的优缺点有哪些？(SASS，Compass，Stylus，LESS)
  * 描述下你曾经使用过的 CSS 预处理的优缺点。

* 如果设计中使用了非标准的字体，你该如何去实现？
  * Webfonts (字体服务例如：Google Webfonts，Typekit 等等。)

* 解释下浏览器是如何判断元素是否匹配某个 CSS 选择器？

* 解释一下你对盒模型的理解，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局。

* 请解释一下 ```* { box-sizing: border-box; }``` 的作用, 并且说明使用它有什么好处？

* 请罗列出你所知道的 display 属性的全部值

* 请解释一下 inline 和 inline-block 的区别？

* 请解释一下 relative、fixed、absolute 和 static 元素的区别

* 你目前在使用哪一套CSS框架，或者在产品线上使用过哪一套？(Bootstrap, PureCSS, Foundation 等等)
  * 如果有，请问是哪一套？如果可以，你如何改善CSS框架？

* 请问你有使用过 CSS Flexbox 或者 Grid specs 吗？
  * 如果有，请问在性能和效率的方面你是怎么看的？

####[[⬆]](#toc) <a name='js'>JS相关问题：</a>

* 解释下事件代理。

* 解释下 JavaScript 中 `this` 是如何工作的。

* 解释下原型继承的原理。

* 你是如何测试JavaScript代码的？

* AMD vs. CommonJS？

* 什么是哈希表？

* 解释下为什么接下来这段代码不是 IIFE(立即调用的函数表达式)：`function foo(){ }();`.
  * 要做哪些改动使它变成 IIFE?

* 描述以下变量的区别：`null`，`undefined` 或 `undeclared`？
  * 该如何检测它们？

* 什么是闭包，如何使用它，为什么要使用它？

* 请举出一个匿名函数的典型用例？

* 解释 “JavaScript 模块模式” 以及你在何时使用它。
  * 如果有提到无污染的命名空间，可以考虑加分。
  * 如果你的模块没有自己的命名空间会怎么样？

* 你是如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？

* 请指出 JavaScript 宿主对象和原生对象的区别？

* 指出下列代码的区别：
```javascript
function Person(){}
var person = Person();
var person = new Person();
```

* `.call` 和 `.apply` 的区别是什么？

* 请解释 `Function.prototype.bind` 的作用？

* 你何时优化自己的代码？

* 你能解释一下 JavaScript 中的继承是如何工作的吗？

* 在什么时候你会使用 `document.write()`？
	* 大多数生成的广告代码依旧使用 `document.write()`，虽然这种用法会让人很不爽。

* 请指出浏览器特性检测，特性推断和浏览器 UA 字符串嗅探的区别？

* 请尽可能详尽的解释 AJAX 的工作原理。

* 请解释 JSONP 的工作原理，以及它为什么不是真正的 AJAX。

* 你使用过 JavaScript 模板系统吗？
	* 如有使用过，请谈谈你都使用过哪些库，比如 Mustache.js，Handlebars 等等。

* 请解释变量声明提升。

* 请描述下事件冒泡机制。

* "attribute" 和 "property" 的区别是什么？

* 为什么扩展 JavaScript 内置对象不是好的做法？

* 为什么扩展 JavaScript 内置对象是好的做法？

* 请指出 document load 和 document ready 两个事件的区别。

* `==` 和 `===` 有什么不同？

* 你如何从浏览器的 URL 中获取查询字符串参数。

* 请解释一下 JavaScript 的同源策略。

* 请描述一下 JavaScript 的继承模式。

* 如何实现下列代码：
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```

* 描述一种 JavaScript 中实现 memoization(避免重复运算)的策略。

* 什么是三元表达式？“三元” 表示什么意思？

* 函数的参数元是什么？

* 什么是 `"use strict";` ? 使用它的好处和坏处分别是什么？

####[[⬆]](#toc) <a name='jquery'>jQuery 相关问题：</a>

* 解释"chaining"。

* 解释"deferreds"。

* 你知道哪些针对 jQuery 的优化方法。

* 请解释 `.end()` 的用途。

* 你如何给一个事件处理函数命名空间，为什么要这样做？

* 请说出你可以传递给 jQuery 方法的四种不同值。
	* 选择器（字符串），HTML（字符串），回调函数，HTML元素，对象，数组，元素数组，jQuery对象等。

* 什么是效果队列？

* 请指出 `.get()`，`[]`，`eq()` 的区别。

* 请指出 `.bind()`，`.live()` 和 `.delegate()` 的区别。

* 请指出 `$` 和 `$.fn` 的区别，或者说出 `$.fn` 的用途。

* 请优化下列选择器：
```javascript
$(".foo div#bar:eq(0)")
```

####[[⬆]](#toc) <a name='jscode'>代码相关的问题：</a>

```javascript
modulo(12, 5) // 2
```

问题：实现满足上述结果的modulo函数

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

问题：上面的语句的返回值是什么？
**答案："goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```

问题：window.foo 的值是什么？
**答案："bar"**
只有 window.foo 为假时的才是上面答案，否则就是它本身的值。

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```

问题：上面两个 alert 的结果是什么
**答案: "Hello World" 和 ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

问题：foo.length 的值是什么？
**答案：`2`**

####[[⬆]](#toc) <a name='fun'>有趣的问题：</a>

* 你编写过的最酷的代码是什么？其中你最自豪的是什么？

* 在你使用的开发工具中，最喜欢哪些方面？

* 你有什么业余项目吗？是哪种类型的？

* 你最爱的 IE 特性是什么？

####[[⬆]](#toc) <a name='references'>其他参考资料：</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
* http://davidshariff.com/quiz/
* http://blog.sourcing.io/interview-questions
* http://www.toptal.com/javascript/interview-questions

####[[⬆]](#toc) <a name='license'>协议:</a>

Copyright 2012 by Darcy Clarke, 基于[MIT License](http://opensource.org/licenses/MIT) 协议。点击协议文件查看详细。
