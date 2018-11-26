---
title: Những Câu Hỏi Phỏng Vấn Lập Trình Viên Front-end
layout: layouts/page.njk
permalink: /translations/vietnamese/index.html
---

# Những Câu Hỏi Phỏng Vấn Lập Trình Viên Front-end

Tập tin này chứa một số câu hỏi phỏng vấn lập trình viên front-end, có thể được sử dụng khi kiểm tra các ứng viên tiềm năng. Không khuyến khích sử dụng tất cả các câu hỏi ở đây trên cùng một ứng cử viên (sẽ mất hàng giờ đồng hồ). Chọn một vài mục từ danh sách này sẽ giúp bạn kiểm tra những kỹ năng mà bạn yêu cầu ở ứng viên đó.

**Lưu ý:** Hãy nhớ rằng nhiều câu trong đây là những câu hỏi kết thúc mở và có thể dẫn đến vài cuộc thảo luận thú vị cung cấp cho bạn nhiều thông tin về khả năng của một người hơn là một câu trả lời thẳng thắn.

## Mục lục

  1. [Các câu hỏi chung](#các-câu-hỏi-chung)
  1. [Các câu hỏi về HTML](#các-câu-hỏi-về-html)
  1. [Các câu hỏi về CSS](#các-câu-hỏi-về-css)
  1. [Các câu hỏi về JavaScript](#các-câu-hỏi-về-javascript)
  1. [Các câu hỏi về Kiểm thử (Testing)](#các-câu-hỏi-về-kiểm-thử-testing)
  1. [Các câu hỏi về Hiệu suất (Performance)](#các-câu-hỏi-về-hiệu-suất-performance)
  1. [Các câu hỏi về Mạng (Network)](#các-câu-hỏi-về-mạng-network)
  1. [Các câu hỏi về việc viết code](#các-câu-hỏi-về-việc-viết-code)
  1. [Các câu hỏi vui](#các-câu-hỏi-vui)

## Tham gia đóng góp

  1. [Những người đóng góp](#những-người-đóng-góp)
  1. [Làm sao để đóng góp](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [Giấy phép](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### Các câu hỏi chung:

* Bạn đã học được gì trong ngày hôm qua/tuần này??
* Điều gì về lập trình làm bạn hứng thú?
* Một thử thách về mặt kĩ thuật bạn đã trải qua gần đây là gì và bạn đã giải quyết nó như thế nào?
* Bạn cân nhắc những Giao diện người dùng (UI), Vấn đề bảo mật (Security), Hiệu suất (Performance), Khả năng tối ưu cho các bộ máy tìm kiếm (SEO), Khả năng bảo trì (Maintainability) hay Công nghệ (Technology) nào khi xây dựng một ứng dụng/trang web?
* Hãy nói về môi trường lập trình mà bạn muốn.
* Những hệ thống quản lý phiên bản (version control systems) nào mà bạn đã sử dụng và cảm thấy quen thuộc?
* Bạn có thể trình bày mạch làm việc (workflow) của bạn khi bạn tạo một trang web không?
* Nếu bạn có 5 stylesheet khác nhau, bạn sẽ tích hợp chúng vào trang như thế nào là tốt nhất?
* Bạn có thể trình bày sự khác nhau giữa progressive enhancement và graceful degradation không?
* Bạn sẽ tối ưu các tài nguyên (assets/resources) của một website như thế nào?
* Một trình duyệt sẽ tải bao nhiêu tài nguyên cùng một lúc từ một tên miền (domain) cho trước?
  * Các exception là gì?
* Nêu 3 cách để giảm tải trang web (perceived hoặc thời gian tải thực tế (actual load time)).
* Nếu bạn tham gia vào một dự án và họ xài nút Tab trong khi bạn sử dụng nút dấu cách (spaces), bạn sẽ làm gì?
* Trình bày cách bạn sẽ làm một trang slideshow đơn giản.
* Nếu bạn có thể chuyên sâu về một công nghệ (technology) trong năm nay thì nó sẽ là công nghệ gì?
* Giải thích tầm quan trọng của các standards và standards bodies.
* Flash of Unstyled Content là gì? Bạn tránh FOUC như thế nào?
* Giải thích ARIA và screenreaders là gì, và làm thế nào để làm cho một trang web có thể truy cập được.
* Giải thích một vài ưu và khuyết điểm của CSS animations so với JavaScript animations.
* CORS là từ viết tắt của cái gì và nó đề cập đến vấn đề nào?

#### Các câu hỏi về HTML:

* Một `doctype` làm cái gì?
* Sự khác nhau giữa chế độ full standards, chế độ almost standards và chế độ quirks?
* Sự khác nhau giữa HTML và XHTML là gì?
* Có vấn đề nào không khi cung cấp (serving) các trang theo kiểu `application/xhtml+xml`?
* Bạn cung cấp một trang web có nội dung được viết bằng nhiều ngôn ngữ như thế nào?
* Bạn phải cảnh giác những điều gì khi thiết kế hoặc phát triển các trang web đa ngôn ngữ?
* Những thuộc tính `data-` có lợi cho cái gì?
* Hãy xem HTML5 như một nền tảng web mở (open web platform). Những building blocks của HTML5 là gì?
* Trình bày sự khác nhau giữa một `cookie`, `sessionStorage` và `localStorage`.
* Trình bày sự khác nhau giữa `<script>`, `<script async>` và `<script defer>`.
* Tại sao việc đặt các thẻ (tag) `<link>` CSS giữa 2 thẻ `<head></head>` và các thẻ `<script>` JS ngay trước thẻ `</body>` về cơ bản là một ý tưởng tốt? Bạn có biết những trường hợp ngoại lệ nào khác không?
* Progressive rendering là gì?
* Tại sao bạn sẽ sử dụng thuộc tính `srcset` trong 1 tag img? Giải thích quá trình mà trình duyệt sẽ sử dụng khi phân tích nội dung của thuộc tính này.
* Trước đây bạn đã bao giờ sử dụng những ngôn ngữ template HTML nào khác chưa?

#### Các câu hỏi về CSS:

* Điểm khác biệt giữa class và ID trong CSS là gì?
* Sự khác nhau giữa "resetting" và "normalizing" CSS là gì? Bạn sẽ chọn cái nào, và tại sao?
* Trình bày về Floats và cách chúng hoạt động.
* Trình bày về z-index và làm thế nào để nội dung stack với nhau được định hình.
* Trình bày về BFC (Block Formatting Context) và cách nó hoạt động.
* Các kĩ thuật clearing khác nhau là những kĩ thuật nào và phù hợp với hoàn cảnh nào?
* Giải thích về CSS sprites, và làm thế nào để bạn thực hiện chúng trên một trang web.
* Những kĩ thuật thay thế hình ảnh nào mà bạn thích và bạn sử dụng từng kĩ thuật đó khi nào?
* Bạn sẽ tiếp cận như thế nào để khắc phục các vấn đề về trình bày trên một trình duyệt cụ thể?
* Bạn sẽ cung cấp các trang của bạn trên các trình duyệt hạn chế tính năng như thế nào?
  * Bạn sẽ sử dụng kĩ thuật hay quy trình nào?
* Những cách khác nhau nào để ẩn giấu 1 element một cách trực quan (và làm cho chúng chỉ hiển thị với người đọc qua màn hình)?
* Bạn đã bao giờ sử dụng một hệ thống grid chưa, và nếu có, bạn thích cái nào hơn?
* Bạn đã bao giờ sử dụng các media queries hay các layout/CSS cụ thể cho mobile chưa?
* Bạn có quen với việc trình bày/tạo dáng cho SVG?
* Bạn tối ưu các trang web cho việc in ấn như thế nào?
* Một vài điểm kiểu "A đây rồi" trong việc viết CSS hiệu quả?
* Các ưu/khuyết điểm của việc sử dụng các CSS preprocessors?
  * Trình bày những điểm bạn thích và không thích về các CSS preprocessors mà bạn đã sử dụng.
* Bạn sẽ thực hiện thách thức trong các thiết kế web có sử dụng các font không phải tiêu chuẩn (non-standard fonts) như thế nào?
* Giải thích cách mà một trình duyệt quyết định những element nào tương ứng với một CSS selector.
* Trình bày về các pseudo-elements và thảo luận xem chúng dùng để làm gì.
* Giải thích những hiểu biết của bạn về box model và làm thế nào bạn báo với trình duyệt trong CSS để render layout của bạn trong các box models khác nhau.
* Đoạn code này ```* { box-sizing: border-box; }``` sẽ làm điều gì? Những ưu điểm của nó là gì?
* Liệt kê các giá trị của thuộc tính `display` mà bạn có thể nhớ.
* Sự khác nhau giữa inline và inline-block là gì?
* Sự khác nhau giữa một thành phần có thuộc tính `position` với giá trị: relative, fixed, absolute, hoặc có vị trí tĩnh (statically positioned element)?
* Chữ cái 'C' trong CSS là viết tắt của từ Cascading. Mức độ ưu tiên được xác định trong việc gán style như thế nào (cho vài ví dụ)? Bạn có thể tận dụng hệ thống này như thế nào?
* Những framework CSS nào bạn đã sử dụng trên máy của bạn, hoặc trong sản phẩm nào đó? Bạn sẽ thay đổi/cải tiến chúng như thế nào?
* Bạn có bao giờ sử dụng CSS Flexbox hay Grid chưa?
* Responsive design khác adaptive design như thế nào?
* Bạn có bao giờ làm việc với các thiết bị màn hình retina chưa? Nếu có, bạn đã sử dụng khi nào và dùng những kĩ thuật nào?
* Có những lý do nào bạn muốn sử dụng `translate()` hơn thay vì *absolute positioning* không, hoặc ngược lại? Và tại sao?

#### Các câu hỏi về JavaScript:

* Giải thích về event delegation
* Giải thích cách mà `this` hoạt động trong JavaScript
* Giải thích cách mà prototypal inheritance hoạt động
* Bạn nghĩ gì về AMD so với CommonJS?
* Giải thích tại sao đoạn code sau không hoạt động như một IIFE: `function foo(){ }();`.
  * Cần thay đổi gì để làm nó trở thành một IIFE?
* Sự khác nhau giữa một biến: chứa `null`, chứa `undefined` hoặc chưa được khai báo (undeclared) là gì?
  * Bạn sẽ kiểm tra các trạng thái này như thế nào?
* Một closure là gì, và bạn sẽ sử dụng nó như thế nào / tại sao bạn sử dụng nó?
* Một trường hợp sử dụng điển hình cho các anonymous functions?
* Bạn tổ chức code của bạn như thế nào? (module pattern, classical inheritance?)
* Sự khác nhau giữa host objects và native objects là gì?
* Nêu sự khác nhau giữa: `function Person(){}`, `var person = Person()`, và `var person = new Person()`?
* Sự khác nhau giữa `.call` và `.apply` là gì?
* Giải thích về `Function.prototype.bind`.
* Bạn sẽ sử dụng `document.write()` khi nào?
* Sự khác nhau giữa feature detection, feature inference, và việc sử dụng UA string là gì?
* Giải thích về Ajax bằng nhiều thông tin chi tiết nhất có thể.
* Những ưu và khuyết điểm của việc sử dụng Ajax là gì?
* Giải thích cách JSONP làm việc (và nó thật sự không phải là Ajax như thế nào).
* Bạn đã bao giờ sử dụng JavaScript templating chưa?
  * Nếu có, bạn đã sử dụng những thư viện nào?
* Giải thích về "hoisting".
* Trình bày về event bubbling.
* Trình bày sự khác nhau giữ một "attribute" và một "property"?
* Tại sao việc mở rộng các object được xây dựng sẵn trong JavaScript không phải là một ý tưởng tốt?
* Sự khác nhau giữa event `load` và event `DOMContentLoaded` của document?
* Sự khác nhau giữa `==` and `===` là gì?
* Giải thích về same-origin policy và sự liên quan của nó với JavaScript.
* Làm cho hàm này hoạt động:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Tại sao lại gọi là Ternary expression, từ "Ternary" có nghĩa gì?
* `"use strict";` là gì? Những điểm lợi và hại khi sử dụng nó?
* Tạo một vòng lặp `for` cho output từ `1` đến `100`, trong đó output **"fizz"** thay cho số chia hết cho `3`, **"buzz"** thay cho số chia hết cho `5` và **"fizzbuzz"** thay cho số chia hết cho cả `3` và `5`.
* Tại sao, nói chung, việc không làm ảnh hưởng đến global scope của một website là một điều tốt?
* Tại sao bạn sẽ không sử dụng những thứ như event `load`? Event này có điểm bất lợi nào không? Bạn có biết cách thay thế nào khác, và tại sao bạn sẽ sử dụng chúng?
* Giải thích một ứng dụng đơn trang (single page app) là gì và làm sao để làm chúng thân thiện với việc SEO.
* Mức độ trải nghiệm của bạn là như thế nào đối với các Promise và/hoặc polyfills của chúng?
* Những điểm lợi và hại của việc sử dụng các Promise thay cho các callback?
* Nêu một vài ưu và khuyết điểm của việc viết code JavaScript trong một ngôn ngữ mà sẽ dùng để biên dịch thành JavaScript.
* Bạn sử dụng những công cụ và kỹ thuật nào để gỡ lỗi (debug) cho JavaScript?
* Bạn sử dụng những cấu trúc nào để lặp xuyên suốt qua tất cả các thuộc tính (property) trong object và các item trong array?
* Giải thích sự khác nhau giữa các mutable object và immutable object.
  * Nêu ví dụ cho một immutable object trong JavaScript?
  * Những ưu/khuyết điểm của tính bất biến (immutability)?
  * Làm thế nào để đạt được tính bất biến trong code của bạn?
* Giải thích sự khác nhau giữa các hàm đồng bộ (synchronous function) và hàm không đồng bộ (asynchronous function).
* Event loop là gì?
  * Sự khác biệt giữa call stack và task queue là gì?
* Giải thích sự khác nhau trong các cách sử dụng `foo` sau đây: giữa `function foo() {}` và `var foo = function() {}`
* Sự khác biệt giữa các biến được tạo bằng việc sử dụng `let`, `var` hoặc `const` là gì?

#### Các câu hỏi về Kiểm thử (Testing):

* Vài điểm lợi và bất lợi trong việc kiểm thử code của bạn là gì?
* Bạn sẽ sử dụng những công cụ nào để kiểm thử chức năng của code của bạn?
* Sự khác nhau giữa một unit test và một functional/integration test là gì?
* Mục đích của một công cụ kiểm tra code style (code style linting tool) là gì?

#### Các câu hỏi về Hiệu suất (Performance):

* Bạn sử dụng những công cụ nào để tìm ra một lỗi hiệu suất trong code của bạn?
* Chỉ ra vài cách mà bạn có thể cải thiện hiệu suất cuộn trang (scrolling performance) trên website của bạn?
* Giải thích sự khác nhau giữa layout, painting và compositing.

#### Các câu hỏi về Mạng (Network):

* Theo truyền thống, tại sao việc cung cấp các tài nguyên của trang web từ nhiều tên miền khác nhau là việc có lợi hơn?
* Hãy trình bày một cách toàn diện nhất quá trình từ lúc bạn nhập vào URL của một trang web đến khi nó hoàn thành việc tải và hiện thị trên màn hình của bạn.
* Những điểm khác nhau giữa Long-Polling, Websockets và Server-Sent Events?
* Giải thích các request header và response header sau:
  * Sự khác nhau giữa Expires, Date, Age và If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* Các HTTP methods là gì? Liệt kê tất cả HTTP methods mà bạn biết, và giải thích chúng.

#### Các câu hỏi về việc viết code:

*Câu hỏi: Giá trị của `foo` là gì?*
```javascript
var foo = 10 + '20';
```

*Câu hỏi: Đoạn code dưới đây sẽ xuất ra cái gì?*
```javascript
console.log(0.1 + 0.2 == 0.3);
```

*Câu hỏi: Bạn sẽ làm thế nào để hàm này hoạt động?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Câu hỏi: Giá trị nào được trả về từ dòng lệnh sau?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Câu hỏi: Giá trị của `window.foo` là gì?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Câu hỏi: Kết quả của 2 lệnh alert dưới đây là gì?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Câu hỏi: Giá trị của `foo.length` là gì?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Câu hỏi: Giá trị của `foo.x` là gì?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Câu hỏi: Những dòng code sau in ra những gì?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

#### Các câu hỏi vui:

* Gần đây bạn đã làm việc với những dự án thú vị nào?
* Vài điều bạn thích về các công cụ dành cho nhà phát triển mà bạn sử dụng là gì?
* Ai là người truyền cảm hứng cho bạn trong cộng đồng front-end?
* Bạn có dự án ngắn hạn nào không? Kiểu dự án gì?
* Những tính năng của Internet Explorer mà bạn thích là gì?
* Bạn có thích dùng cà phê không?


#### Những người đóng góp:

Tài liệu này được khởi đầu vào năm 2009 như là một sự cộng tác của [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) và [@iansym](https://twitter.com/iansym).

Đã nhận được sự đóng góp từ hơn [100 developers](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
