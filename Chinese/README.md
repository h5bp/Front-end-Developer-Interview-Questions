#前端工程师面试问题

@版本 1.0 

**备注:** 本repo包含了一些前端面试问题用于考查候选者。不建议对单个候选者问及每个问题（那需要好几个小时）。只要从列表里挑选一些，就能帮助你考查候选者是否具备所需要的技能了。

记住，很多问题都是开放的，可以引发有趣的讨论。那比直接的答案更能体现此人的能力。
 
####最初的贡献者

**备注:** 大部分问题从是某个帖子搜集和由下列个人提供：

* @bentruyman (http://bentruyman.com)
* @cowboy (http://benalman.com)
* @roger_raymond (http://twitter.com/iansym)
* @ajpiano (http://ajpiano.com)
* @paul_irish (http://paulirish.com)
* @SlexAxton (http://alexsexton.com)
* @boazsender (http://boazsender.com)
* @miketaylr (http://miketaylr.com)
* @vladikoff (http://vladfilippov.com)
* @gf3 (http://gf3.ca)
* @jon_neal (http://twitter.com/jon_neal)
* @wookiehangover (http://wookiehangover.com)
* @darcy_clarke (http://darcyclarke.me)
* @tairraos (http://xiaole.happylive.org)

## 一般问题

* 你用Twitter吗？ （在天朝最好问你用微博吗？）
	* 如果用，你都关注那些人？

* 你用Github吗？
	* 如果用，你关注的项目有什么？

* 你关注的博客有那些？

* 你使用那些版本管理系统，比如Git，SVN等？

* 你常用的开发环境是怎样的？比如操作系统，文本编辑器，浏览器，及其他工具等。

* 你能描述一下你制作一个网页的工作流程吗？

* 你能描述一下渐进增强和优雅降级之间的不同吗?
	* 如果提到了特性检测，可以加分。

* 请解释一下什么是语义化的HTML。

* 你更喜欢在哪个浏览器下进行开发？你使用那些开发人员工具？

* 你如何对网站的文件和资源进行优化？
	* 期待的解决方案包括：
		* 文件合并
		* 文件最小化/文件压缩
		* 使用CDN托管
		* 缓存的使用
		* 其他

* 为什么利用多个域名来存储网站资源会更有效？
	* 浏览器一次可以从一个域名下做多少资源？

* 请说出三种减低页面加载时间的方法。（加载时间指感知的时间或者实际加载时间）

* 如果你接到了一个使用Tab来缩进代码的项目，但是你喜欢空格，你会怎么做？
	* 建议这个项目使用像EditorConfig(http://editorconfig.org/)之类的规范
	* 为了保持一致性，转换成项目原有的风格
	* 直接使用VIM的retab命令

* 请写一个简单的幻灯效果页面
	* 如果不使用JS来完成，可以加分。

* 你都使用那些工具来测试代码的性能？
	* 例如JSPerf (http://jsperf.com/)
	* 例如Dromaeo (http://dromaeo.com/) 
	* 其它。

* 如果今年你打算熟练掌握一项新技术，那会是什么？

* 请谈一下你对网页标准和标准制定机构重要性的理解。

* 什么是FOUC（文档样式闪烁）？你如何来避免FOUC？

## HTML相关问题

* `doctype`（文档类型）的作用是什么？你知道多少种文档类型？

* 浏览器标准模式和怪异模式之间的区别是什么？

* 使用XHTML的局限有那些？
	* 如果页面使用'application/xhtml+xml'会有什么问题吗？

* 如果网页内容需要支持多语言，你会怎么做？
	* 在设计和开发多语言网站时，有哪些问题你必须要考虑？

* 在HTML5的页面中可以使用XHTML的语法吗？

* 在HTML5中如何使用XML？

* `data-`属性的作用是什么？

* 如果把HTML5看作做一个开放平台，那它的构建模块有那些？

* 请描述一下cookies，sessionStorage和localStorage的区别？ 


## JS相关问题

* 你使用过那些Javascript库？

* 你是否研究过你所使用的JS库或者框架的源代码？

* 什么是哈希表？

* 'undefined'变量和'undeclared'变量分别指什么？

* 闭包是什么，如何使用它，为什么要使用它？
	* 你喜欢的使用闭包的模式是什么？

* 请举出一个匿名函数的典型用例？

* 请解释什么是Javascript的模块模式，并举出实用实例。
	* 如果有提到无污染的命名空间，可以考虑加分。
	* 如果你的模块没有自己的命名空间会怎么样？

* 你如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？

* 请指出Javascript宿主对象和内置对象的区别？

* 指出下列代码的区别：
```javascript
function Person(){
	some code
} 
var person = Person(); 
var person = new Person();
```

* '.call'和'.apply'的区别是什么？

* 请解释'Funciton.prototype.bind'的作用？

* 你如何优化自己的代码？

* 你能解释一下JavaScript中的继承是如何工作的吗？

* 在什么时候你会使用'document.write()'？
	* 大多数生成的广告代码依旧使用'document.write()'，虽然这种用法会让人很不爽。

* 请指出浏览器特性检测，特性推断和浏览器UA字符串嗅探的区别？

* 请尽可能详尽的解释AJAX的工作原理。

* 请解释JSONP的工作原理，以及它为什么不是真正的AJAX。

* 你使用过JavaScript的模板系统吗？
	* 如有使用做，请谈谈你都使用过那些类似库文件。比如Mustache.js,Handlebars等等。

* 请解释变量声明提升。

* 请描述下事件冒泡机制。

* "attribute"和"property"的区别是什么？

* 为什么扩展JavaScript内置对象是个坏做法？

* 为什么扩展JavaScript内置对象是个好做法？

* 请指出document load和document ready的区别。(这是个问题的问题）

* '=='和'==='有什么不同？

* 你如何获取浏览器URL中查询字符串中的参数。

* 请解释一下JavaScript的同源策略。

* 请解释一下事件代理。

* 请描述一下JavaScript的继承模式。

* 如何实现下列代码：
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```

* 描述一种JavaScript memoization(避免重复运算)的策略。

* 什么是三元条件语句？

* 函数的参数元是什么？

* 什么是"use strict"?使用它的好处和坏处分别是什么？

* JavaScript内存泄漏。
	* 什么是内存泄漏？
	* 哪些情况下会导致内存泄漏？
	* 有什么样的工具可以检测内存泄漏？

* 变量的数据类型( 基本类型和引用类型 )。
	* 什么是基本类型值？
	* JavaScript中有哪些基本类型值？
	* 什么是引用类型值？
	* 基本类型值和引用类型值在内存中的保存方式有什么不同？
	* 基本类型值和引用类型值的"复制"在内存中有什么不同？

* typeof 与 instanceof 操作符。	


## JS代码示例：

```javascript
~~3.14
```
问题：上面的语句的返回值是什么？
**答案：3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
问题：上面的语句的返回值是什么？
**答案："goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
问题：window.foo的值是什么？
**答案："bar"**
只有window.foo为假时的才是上面答案，否则就是它本身的值。

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
问题：上面两个alert的结果是什么
**答案: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
问题：foo.length的值是什么？
**答案：'2'**

```javascript
var foo = {};
foo.bar = 'hello';
```
问题：foo.length的值是什么？
**答案: `undefined`

```javascript
foo = foo||bar
```
问题: 这行代码是什么意思? 
**答案: if(!foo) foo = bar

```javascript
foo>>1
```
问题: 这行代码是什么意思? 
**答案: Math.floor(foo/2)

```javascript
foo|0
foo+.5|0
```
问题: 这行代码是什么意思? 
**答案: parseInt(foo) & Math.round(foo)

```javascript
function foo(bar1, bar2, bar3){}
```
问题: 如何获取参数的个数?
**答案: foo.length //this example is 3


## jQuery-Specific Questions:
## jQuery相关问题


* 解释"chaining"。

* 解释"deferreds"。

* 你知道那些针对jQuery的优化方法。

* 请解释'.end()'的用途。

* 你如何给一个事件处理函数命名空间，为什么要这样做？

* 请说出你可以传递到jQuery方法的四种不同值。
	* 选择器（字符串），HTML（字符串），回调函数，HTML元素，对象，数组，元素数组，jQuery对象等。

* 什么是效果队列？

* 请指出'.get()','[]','eq()',的区别。

* 请指出'.bing()','.live()'和'.delegate()'的区别。

* 请指出'$'和'$.fn'的区别？或者说出'$.fn'的用途。

* 请优化下列选择器：
```javascript
$(".foo div#bar:eq(0)")
```

* 'delegate()'和'live()'有什么区别? 


## CSS相关问题

* 描述css reset的作用和用途。

* 描述下浮动和它的工作原理。

* 清除浮动的方法有那些，分别适用于什么情形。

* 解释css sprites,如何使用。

* 你最喜欢的图片替换方法是什么，你如何选择使用。

* 讨论CSS hacks，条件引用或者其他。 

* 如何为有功能限制的浏览器提供网页。
	* 你会使用那些技术和处理方法。

* 如何视觉隐藏网页内容，只让它们在屏幕阅读器中可用。

* 你使用过网格系统吗？如果使用过，你最喜欢哪种？

* 你使用过meidia queries（媒体查询）吗，或者移动网站相关的CSS布局。

* 你熟悉SVG样式的书写吗？

* 如何优化网页的打印样式。

* 在书写高效CSS文件时会有哪些问题需要考虑。

* 你使用CSS预处理器吗？(SASS,Compass,Stylus,LESS)
	* 如果使用，描述你的喜好。

* 你是否接触过使用非标准字体的设计？
	* 字体服务，Google Webfonts, Typekit,等等。

* 请解释浏览器是如何根据CSS选择器选择对应元素的。


## 可选的有趣问题

* 你编写过的最酷的代码是什么？其中你最自豪的是什么？

* 你知道HTML5的帮派标志吗？

* 你是否正在或曾经在一艘船上。(不懂这个幽默）

* 你使用的开发工具中，你最喜欢的部分是什么？

* 你有什么业余项目吗？是那种类型的？

* 解释cornify的重要性？(本题完全摸不到头脑）

* 在一张纸上，垂直写下ABCDE，然后不用任何代码，将他们到序排列。
	* 静静的看他们是否将纸反转。

* 海盗还是忍者？
	* 如果是两者的合体，并有恰当理由，可以加分。如果是僵尸猴子海盗加忍者加两分。(注，此题文化差异过大）

* 如果没有在Web开发，你会做什么？

* 卡门圣迭哥的隐藏处在哪里？
	* 提示：本题的答案永远是错的。

* 你最爱的IE特性是什么？

* 完句填空： Brendan Eich和Doug Crockford是JavaScript的________。

* 讨论：jQuery是牛逼的库还是最牛逼的库。
