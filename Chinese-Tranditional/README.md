# 前端工程師面試問題集

@版本 2.0.0

譯注：此翻譯版，主要給不能流利的讀英文的人看，相關專有名詞還是保留原文。翻譯不好地方請協助pull request.

此repository包含了一些前端開發的面試問題，來審查一個有潛力的面試者。這並不是建議你對同一個面試者問上所有的問 (那會花費好幾小時)。從列表中挑幾個題目，應該就夠幫助你審查面試者是否擁有你需要的技能。

[Rebecca Murphey](http://rmurphey.com/) 的 [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) 也是一篇很棒且值得讀的文章在你開始面試之前。

**注意：** 請記住一點，很多問題都是隨情況而變化，能引發很多有趣的討論，比直接的標準答案更能讓你瞭解此人的能力。

####參考文獻

多數的問題都是從 [oksoclap](http://oksoclap.com/) 上的一個討論串截取出來，原創作人為 [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) 並由以下的人員所貢獻：

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

### 常見問題：

* 你昨天或這週學習了什麼？
* 寫程式的哪部份最讓你感到很興奮或是有興趣？
* 說說你喜好的開發環境 (作業系統, 編輯器, 瀏覽器, 開發工具 … 之類) 
* 你可以描述你在開發一個網站時的工作流程嗎？
* 你可以描述漸進增強 (progressive enhancement) 和優美退化 (graceful degradation) 間的差異嗎？
	* 加分題：描述這兩項的特色？  
* 描述什麼是"Semantic HTML"？
* 你怎麼優化一個網站的靜態檔案 (assets) 和資源 (resources)？
	* 可能的解決方法包含如下：
		* File concatenation (檔案合併)
		* File minification (最小化文檔)
		* CDN Hosted (CDN託管)
		* Caching (快取)
		* …之類
* 為什麼用多個域名來放置網站資源會比較好？
	* 瀏覽器一次能在同一個域名下載多少資源？
* 說出三種能加快網頁讀取速度的方法？ (感覺上的速度或是真正的讀取時間) 
* 如果你加入了一個專案，但是他們的程式碼用tabs，但是你習慣用spaces (空白鍵)，你會怎麼做？ 
	* 建議此專案使用，例如：EditorConfig (http://editorconfig.org)
	* 訂定一個公約 (保持一致)
	* `issue :retab! command` (retab! 在vim中用來把所有spaces換成tabs)
* 寫一個簡易的投影片頁面
	* 加分如果沒有用到 JavaScript
* 你用什麼工具來測試你的程式碼效能？
	* Profiler, [JSPerf](http://jsperf.com/), [Dromaeo](http://dromaeo.com/)
* 如果今年你能精通一項技術，那會是什麼？
* 描述標準和製定標準機構的重要性？
* 什麼是 FOUC？ 你怎麼避免 FOUC?  

### HTML 規格問題集:

* `doctype` 做什麼用的？
* standards mode 和 quirks mode 有什麼不同？
* 使用 XHTML 有什麼限制？? 
	* 如果網頁使用 `application/xhtml+xml` 會有問題嗎？
* 你怎麼做一個需要支持多國語言的網頁？
	* 當開發和設計一個多國語言網站時，有什麼需要小心的？
* `data-` 屬性的好處在哪？ 
* 考慮 HTML5 作為一個開放式的網站平台。HTML5 的 building blocks 有哪些？ 
* 請描述 cookies, sessionStorage 和 localStorage 的不同？

### JS 規格問題集

* 描述 event delegation
* 描述 `this` 如果運作在 JavaScript 中
* 描述 prototypal inheritance 如何運作？
* 你如何測試你的 JavaScript？
* AMD vs. CommonJS?
* 什麼是 hashtable?
* 什麼是  `undefined` 和 `undeclared` 變數？
* 什麼是 closure, 如何/為什麼使用?
	* 你最喜愛並習慣用的 pattern 是怎樣的? argyle (Only applicable to IIFEs)  
* anonymous functions 典型的使用時機？ 
* 描述 "JavaScript module pattern"，你什麼情況會用到？
	* 加分題：清楚地提到 namespacing. 
	* 如果你的 module 沒有命名空間怎辦？
* 你如何架構你的程式碼？ (module pattern, classical inheritance?) 
* host objects 和 native objects 有何不同？ 
* 有何不同: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* `.call` 和 `.apply` 有何不同？
* 描述 `Function.prototype.bind`? 
* 你什麼時候優化你的程式？
* 你可以描述 inheritance 如何運作在 JavaScript？
* 你什麼情況會使用 `document.write()`？
	* 多數的廣告產生仍然使用 `document.write()` 雖然這樣用會令人皺眉
* feature detection, feature inference, 和使用 UA string 有什麼不同？
* 盡可能的詳述描述 AJAX
* 描述 JSONP 如何運作 (且為何它不是真正的 AJAX) 
* 你是用過 JavaScript templating (樣板) ？
	* 如果有的話，你有用過哪些 libraries？ (Mustache.js, Handlebars … 等) 
* 描述 "hoisting"
* 描述 event bubbling.
* "attribute" 和 "property" 的不同？ 
* 為什麼擴展 JavaScript 內建的 objects 不是個好方法？
* 為什麼擴展 JavaScript 插件是個好方法？
* document load event 和 document ready event 有什麼不同？ 
* `==` 和 `===` 有什麼不同？ 
* 描述你如何取得一個 query string 的 parameter 從瀏覽器的網址列。
* 描述 JavaScript 的 same-origin policy (同源策略)
* 描述 JavaScript 的 inheritance patterns (繼承模式) 
* 實作如下程式: 
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* 描述一個 memoization (避免重複運算) 的策略  在 JavaScript 中
* Ternary expression 怎麼來的, "Ternary" 的意思是什麼？
* function 的 arity 是什麼？
* 什麼是 `"use strict";`? 使用他的優點和缺點是什麼？

### JS 程式範例：

```javascript
~~3.14
```
問: 上述的statement(陳述式)會回傳什麼？
**答: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
問: 上述的statement(陳述式)會回傳什麼？
**答: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
問:  window.foo 的值是什麼？ 
**答: "bar"** 
只有在 window.foo 是 falsey 時會回傳此答案，否則的話會回傳window.foo

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
問: 上述的兩個alerts的結果會是什麼？
**答: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

問: foo.length 的值是什麼？
**答： `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
問: foo.length 的值是什麼？
**答： `undefined`

### jQuery 規格問題集：

* 描述 "chaining" 
* 描述 "deferreds"
* 你知道哪些實作 jQuery 的優化方式？
* `.end()` 做些什麼？ 
* 如何給一個綁定的 event handler 命名空間？為什麼這樣做？
* 說出四種可以傳到 jQuery 方法的值
	* Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object … 等。
* 什麼是 effects (or fx) queue? 
* `.get()`, `[]`, 和 `.eq()` 有何不同？ 
* `.bind()`, `.live()`, 和 `.delegate()` 有何不同？ 
* `$` 和 `$.fn` 有何不同？ 或什麼是 `$.fn`？
* 優化這個 selector: 
```javascript
$(".foo div#bar:eq(0)")
```
* 'delegate()' 和 'live()' 有何不同？


### CSS 規格問題集：

* 描述 "reset" 在 CSS 中做什麼, 如何用？
* 描述 Floats 並解釋如何運作
* 有哪些不同的 clearing 技術？哪個適用在哪種內容上？
* 描述 CSS sprites, 你如何實作在網頁或網站上？
* 你最喜愛的圖片取代技術是什麼？你什麼時候會用到？
* CSS 屬性 hacks, 也條件引用 .css 檔案, 或是… 其他的？ 
* 你怎麼讓你的網頁支援有功能限制的瀏覽器？
	* 你會使用什麼樣的技術/流程 ？
* 有什麼方法來隱藏網頁的內容？ (只顯示在 screen readers)？
* 你使用過 grid system 嗎？如果有的話？你較推薦哪個？
* 你曾經實作 media queries 或是 mobile specific (手機規格的) layouts/CSS? 
* 你熟悉任何有關 SVG 嗎？ 
* 你如何優化你的網頁以利於列印？ 
* 在寫高效的 CSS 時，有什麼要注意的？
* 使用 CSS preprocessors 的優點和缺點是什麼？ (SASS, Compass, Stylus, LESS) 
	* 如果是這樣, 描述你使用過的喜歡和不喜歡的 CSS preprocessors
* 你如何使用非標準字體來實作網頁設計？
	* Webfonts (font services 像是: Google Webfonts, Typekit …等等)
* 姐是瀏覽器如何按照 CSS selector 找到對應的element？   

### 可選的有趣問題：

* 你寫過最酷的程式是什麼？你最自豪的是什麼？
* 你使用的開發工具中，你最喜歡的部分是什麼？
* 你有任何的 pet projects (個人開發的小專案)？ 什麼樣的？
* 你最喜歡 IE 瀏覽器的什麼特點？
