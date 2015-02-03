# 前端工程師面試問題集

譯注：此翻譯版，主要給不能流利的讀英文的人看，相關專有名詞還是保留原文，翻譯不好地方請協助 Pull request。

此文件包含了一些前端開發的面試問題，來審查一個有潛力的面試者。這並不是建議你對同一個面試者問上所有的問 (那會花費好幾小時)。從列表中挑幾個題目，應該就夠幫助你審查面試者是否擁有你需要的技能。

**注意：** 請記住一點，很多問題都是隨情況而變化，能引發很多有趣的討論，比直接的標準答案更能讓你瞭解此人的能力。

## <a name='toc'>目錄</a>

  1. [常見問題](#general-questions)
  1. [HTML 問題](#html-questions)
  1. [CSS 問題](#css-questions)
  1. [JS 問題](#js-questions)
  1. [Network 問題](#network-questions)
  1. [程式碼問題](#coding-questions)
  1. [有趣問題](#fun-questions)

## 參與貢獻

  1. [貢獻作者群](#contributors)
  1. [如何貢獻](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [版權宣告](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)


#### <a name='general-questions'>常見問題：</a>

* 你昨天或這週學習了什麼？
* 寫程式的哪部份最讓你感到很興奮或是有興趣？
* What is a recent technical challenge you experienced and how did you solve it?
* 當你開發Web應用程式或網站時，針對UI、安全性、效能、SEO、維護性，以及技術，你考量的點是什麼？
* 說說你喜好的開發環境 (作業系統, 編輯器或 IDE, 瀏覽器, 開發工具 … 之類)
* 你最熟悉哪一套版本控制系統？
* 你可以描述你在開發一個網站時的工作流程嗎？
* 如果有 5 種不同的樣式表 (stylesheets)，該如何整併到網站？
* 你可以描述漸進增強 (progressive enhancement) 和優美退化 (graceful degradation) 間的差異嗎？
* 你怎麼優化一個網站的靜態檔案 (assets) 和資源 (resources)？
* 說出三種能加快網頁讀取速度的方法 (感覺上的速度或是真正的讀取時間)。
* 如果你加入了一個專案，但是他們的程式碼用 tabs，但是你習慣用spaces (空白鍵)，你會怎麼做？
* 寫一個簡易的投影片頁面
* 你用什麼工具來測試你的程式碼效能？
* 如果今年你能精通一項技術，那會是什麼？
* 描述標準和製定標準機構的重要性？
* 什麼是 FOUC？ 你怎麼避免 FOUC?
* Explain what ARIA and screenreaders are, and how to make a website accessible.
* Explain some of the pros and cons for CSS animations versus JavaScript animations.

#### <a name='html-questions'>HTML 問題:</a>

* `doctype` 做什麼用的？
* standards mode 和 quirks mode 有什麼不同？
* 使用 XHTML 有什麼限制？?
* 如果網頁使用 `application/xhtml+xml` 會有問題嗎？
* 你怎麼做一個需要支持多國語言的網頁？
* 當開發和設計一個多國語言網站時，有什麼需要小心的？
* `data-` 屬性的好處在哪？
* 考慮 HTML5 作為一個開放式的網站平台。HTML5 的 building blocks 有哪些？
* 請描述 `cookies`, `sessionStorage` 和 `localStorage` 的不同？
* Describe the difference between `<script>`, `<script async>` & `<script defer>`.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

#### <a name='css-questions'>CSS 問題：</a>

* CSS 的 class 和 ID 兩者有何差異？
* 描述 "resetting" 和 "normalizing" 的差異性？你會選擇哪一種，為什麼選擇它？
* 描述 Floats 並解釋如何運作。
* 描述 z-index 並且描述堆疊內容 (stacking context) 如何形成。
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
* 使用 CSS preprocessors 的優點和缺點是什麼？ (Sass, Compass, Stylus, LESS)
  * 描述你使用過的喜歡和不喜歡的 CSS preprocessors
* 你如何使用非標準字體來實作網頁設計？
* 解釋瀏覽器如何按照 CSS selector 找到對應的 element。
* 解釋你所認知的 box model，以及你如何在 CSS 告訴瀏覽器使用不同 box model 來呈現圖層？
* 請解釋 `* { box-sizing: border-box; }`？並且說明使用它的好處？
* 請列出您記憶中 display 屬性的全部值
* 請說明 inline 和 inline-block 的差異性？
* 請說明 relative、fixed、absolute 和 static 元件差異性？
* The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?
* 你目前有使用哪一套 CSS Framework 在開發環境或產品線上？
  * 如果有，請問是哪一套，並且描述如果改善或提昇 CSS Framework？
* 請問你有使用過 CSS Flexbox 或 Grid specs？
* 如何區分 responsive design 與 adaptive design 有何不同？
* 你曾經使用過 retina graphics？如果有，是在什麼時機以及用了什麼技術？
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?

#### <a name='js-questions'>JS 規格問題集：</a>

* 描述 event delegation
* 描述 `this` 如果運作在 JavaScript 中
* 描述 prototypal inheritance 如何運作？
* 你如何測試你的 JavaScript？
* AMD vs. CommonJS?
* 解釋下列程式碼為什麼不是IIFE: `function foo(){ }();`.  (Immediately Invoked Function Expression,立即函式)
  * 需要修改那裡使它成為IIFE?
* `null`、`undefined`和 `undeclared`變數之間有什麼差異？
  * 你如何檢查？
* 什麼是 closure, 如何/為什麼使用?
* anonymous functions 典型的使用時機？
* 你如何架構你的程式碼？ (module pattern, classical inheritance?)
* host objects 和 native objects 有何不同？
* `function Person(){}`、`var person = Person()`和`var person = new Person()`之間有何不同？
* `.call` 和 `.apply`有何不同？
* 描述 `Function.prototype.bind`?
* 你什麼時候優化你的程式？
* 你什麼情況會使用 `document.write()`？
  * 多數的廣告產生仍然使用 `document.write()` 雖然這樣用會令人皺眉
* feature detection, feature inference, 和使用 UA string 有什麼不同？
* 盡可能的詳述描述 AJAX。
* 描述 JSONP 如何運作 (且為何它不是真正的 AJAX)。
* 你是用過 JavaScript templating (樣板) ？
  * 如果有的話，你有用過哪些 libraries？ (Mustache.js, Handlebars … 等)
* 描述 "hoisting"
* 描述 event bubbling.
* "attribute" 和 "property" 的不同？
* 為什麼擴展 JavaScript 內建的 objects 不是個好方法？
* document load event 和 document ready event 有什麼不同？
* `==` 和 `===` 有什麼不同？
* 描述 JavaScript 的 same-origin policy (同源策略)
* 實作如下程式:

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

* Ternary expression 怎麼來的, "Ternary" 的意思是什麼？
* 什麼是 `"use strict";`? 使用他的優點和缺點是什麼？
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, `"buzz"` at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`

#### <a name='network-questions'>網路問題集:</a>

* 傳統上為什麼用多個域名來放置網站資源會比較好？
* 請詳細描述當您在網址列打入網址開始到最後網頁呈現在螢幕前的整個流程。
* Long-Polling, Websockets, SSE (Server-Sent Event) 之間有什麼差異？
* 請描述下列 request 和 response headers：
  * Diff. between Expires, Date, Age and If-Modified-...
  * DNT
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* 請描述 `GET` 和 `POST` 的差異性？

#### <a name='coding-questions'>程式碼問題集:</a>

問題：實作符合下面的函式

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

問題: 下面的 statement(陳述式) 會回傳什麼？

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

問題:  window.foo 的值是什麼？

```javascript
( window.foo || ( window.foo = "bar" ) );
```

問題: 下面的兩個 alerts 的結果會是什麼？

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

問題: 下面 foo.length 的值是什麼？

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

#### <a name='fun-questions'>有趣問題：</a>

* 你最近寫過最酷的專案是？
* 你使用的開發工具中，你最喜歡的部分是什麼？
* 你有任何的 pet projects (個人開發的小專案)？ 什麼樣的？
* 你最喜歡 IE 瀏覽器的什麼特點？
* How do you like your coffee?

#### <a name='contributors'>貢獻作者群:</a>

此文件是由 [@paul_irish](http://twitter.com/paul_irish) [@bentruyman](http://twitter.com/bentruyman) [@cowboy](http://twitter.com/cowboy) [@ajpiano](http://twitter.com/ajpiano)  [@SlexAxton](http://twitter.com/slexaxton) [@boazsender](http://twitter.com/boazsender) [@miketaylr](http://twitter.com/miketaylr) [@vladikoff](http://twitter.com/vladikoff) [@gf3](http://twitter.com/gf3) [@jon_neal](http://twitter.com/jon_neal) [@sambreed](http://twitter.com/sambreed) and [@iansym](http://twitter.com/iansym) 於 2009 年共同發起。

目前已經超過 [100 開發者](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors) 參與此專案.
