#Ön Yüz -Front-end- Mülakat Soruları

Burada ön yüz -ya da front-end- iş başvurularında karşınıza çıkabilecek sorular yer almaktadır. Burada yer alan her sorunun söz konusu iş başvurularında karşınıza çakması garanti olmayıp, olası sorulardır. Buradaki sorular sadece iş başvurusu yapanlar için olmamakla beraber, bu branşta kendini geliştirmeyi planlayanlar da bu sorularla kendilerini sınayabilirler.

[Rebecca Murphey](http://rmurphey.com/)'in [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) adlı İngilizce makalesinin de okunması tavsiye edilmektedir.

## <a name='toc'>İçindekiler</a>

  1. [Katkıda Bulunanlar](#contributors)
  1. [Genel Sorular](#general)
  1. [HTML Soruları](#html)
  1. [CSS Soruları](#css)
  1. [JS Soruları](#js)
  1. [jQuery Soruları](#jquery)
  1. [Kodlama Becerisi Soruları](#jscode)
  1. [Eğlence Soruları](#fun)

####<a name='contributors'>Katkıda Bulunanlar:</a>

Söz konusu aşağıdaki sorular [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) önderliğinde ve aşağıdaki katkıcılarca oluşturulmuştur:

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
* [@iansym](http://twitter.com/iansym) - http://twitter.com/iansym

**[[⬆]](#toc)**

####<a name='general'>Genel Sorular:</a>

* Dün -ya da bu hafta- neler öğrendin?
* What excites or interests you about coding?
* Bize biraz geliştirme ortamından bahset. -İşletim Sistemi, Web Tarayıcı, Araçlar, Kod Editörü/IDE, vb.-
* Web sayfasını oluştururken hangi adımları takip edersin ?
* "Aşamalı geliştirme" ile "kabul edilebilir etkinlik düşüşü" arasında ne fark vardır?
  * Bahsedilen doğru özellikler için artı puan 
* "Semantic HTML" ne demektir, açıklayabilir misin?
* Web sitesindeki dosyaları nasıl optimize edersin?
  * Beklenilen çözüm alt başlıkları:
    * Dosya birleştirme
    * Dosya boyut küçültme
    * CDN kullanımı
    * Caching
    * vb.
* Sitedeki JS/CSS gibi yan kaynakları birden fazla alanadı altında barındırmanın avantajları nelerdir ?
  * Belli bir zamanda, tek bir alanadı üzerinden web tarayıcısı ne kadar kaynak indirebilir?
* Sayfa yüklenme süresini azaltmak için hangi yollara başvurursun?
* Yeni dahil olduğunuz bir projede, kodlama için `Space` boşluk kullanılıyor ama siz `Tab` ile boşluk bırakmayı tercih ediyorsunuz. Bu durumda ne yaparsınız?
  * EditorConfig (http://editorconfig.org) vb. kod yazım standardını kolaylaştıran araçlar
  * Conform to the conventions (stay consistent)
  * `issue :retab! command`
* Basit bir slayt/galeri sayfası oluşturun
  * JS kodu kullanılmaması halinde artı puan.
* What tools do you use to test your code's performance?
  * Profiler, JSPerf, Dromaeo
* If you could master one technology this year, what would it be?
* Explain the importance of standards and standards bodies.
* What is FOUC? How do you avoid FOUC?

**[[⬆]](#toc)**

####<a name='html'>HTML Soruları:</a>

* `doctype`ın işlevi nedir?
*  "standart mod" ile "aptal mod" arasındaki fark nedir?
* XHTML sayfalarının ne gibi sınırlamaları vardır?
  * Sayfaların `application/xhtml+xml` olarak çalıştırılmasında herhangi bir sakınca var mıdır?
* How do you serve a page with content in multiple languages?
  * What kind of things must you be wary of when design or developing for multilingual sites?
* `data-` özelliği ne faydalar sağlar?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Describe the difference between cookies, sessionStorage and localStorage.

**[[⬆]](#toc)**

####<a name='css'>CSS Soruları:</a>

* Describe what a "reset" CSS file does and how it's useful.
* Describe Floats and how they work.
* What are the various clearing techniques and which is appropriate for what context?
* Explain CSS sprites, and how you would implement them on a page or site.
* What are your favourite image replacement techniques and which do you use when?
* CSS property hacks, conditionally included .css files, or... something else?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Any familiarity with styling SVG?
* How do you optimize your webpages for print?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors? (SASS, Compass, Stylus, LESS)
  * If so, describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
  * Webfonts (font services like: Google Webfonts, Typekit etc.)
* Explain how a browser determines what elements match a CSS selector?
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

**[[⬆]](#toc)**

####<a name='js'>JS Soruları:</a>

* Explain event delegation
* Explain how `this` works in JavaScript
* Explain how prototypal inheritance works
* How do you go about testing your JavaScript?
* AMD vs. CommonJS?
* What's a hashtable?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`. 
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* What's a typical use case for anonymous functions?
* Explain the "JavaScript module pattern" and when you'd use it.
  * Bonus points for mentioning clean namespacing.
  * What if your modules are namespace-less?
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* Difference between:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* `.call` ve `.apply` arasındaki fark nedir?
* `undefined` ve `null` arasındaki fark nedir?
* `Function.prototype.bind` açıklayınız?
* When do you optimize your code?
* Can you explain how inheritance works in JavaScript?
* When would you use `document.write()`?
  * Most generated ads still utilize `document.write()` although its use is frowned upon
* What's the difference between feature detection, feature inference, and using the UA string
* Explain AJAX in as much detail as possible
* Explain how JSONP works (and how it's not really AJAX)
* Have you ever used JavaScript templating?
  * If so, what libraries have you used? (Mustache.js, Handlebars etc.)
* Explain "hoisting".
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built in JavaScript objects not a good idea?
* Why is extending built ins a good idea?
* Difference between document load event and document ready event?
* What is the difference between `==` and `===`?
* Explain how you would get a query string parameter from the browser window's URL.
* Explain the same-origin policy with regards to JavaScript.
* Describe inheritance patterns in JavaScript.
* Çözümleyiniz:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Describe a strategy for memoization (avoiding calculation repetition) in JavaScript.
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is the arity of a function?
* What is `"use strict";`? what are the advantages and disadvantages to using it?

**[[⬆]](#toc)**

####<a name='jquery'>jQuery Soruları:</a>

* Explain "chaining".
* Explain "deferreds".
* What are some jQuery specific optimizations you can implement?
* What does `.end()` do?
* How, and why, would you namespace a bound event handler?
* Name 4 different values you can pass to the jQuery method.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* What is the effects (or fx) queue?
* What is the difference between `.get()`, `[]`, and `.eq()`?
* What is the difference between `.bind()`, `.live()`, and `.delegate()`?
* What is the difference between `$` and `$.fn`? Or just what is `$.fn`.
* Optimize this selector:
```javascript
$(".foo div#bar:eq(0)")
```
* Difference between 'delegate()' and 'live()'?

**[[⬆]](#toc)**

####<a name='jscode'>Kodlama Becerisi Soruları:</a>

```javascript
~~3.14
```
Question: What value is returned from the above statement?
**Answer: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Question: What value is returned from the above statement?
**Answer: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Soru: `window.foo`nun değeri nedir? 
**Cevap: "bar"**
`window.foo`nun değeri false olmadıkça kendi değerini döndürür.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Soru: Yukarıdaki iki uyarının -`alert`- çıktısı nedir? 
**Answer: "Hello World" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Soru: `foo.length`in değeri kaçtır? 

**Cevap: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Soru: `foo.length`in değeri kaçtır? 
**Cevap: `undefined`

**[[⬆]](#toc)**

####<a name='fun'>Eğlence Soruları:</a>

* What's the coolest thing you've ever coded, what are you most proud of?
* Kullandığınız geliştirici araçları arasında, sevdikleriniz nelerdir ?
* Do you have any pet projects? What kind?
* Internet Explorer'ın sevdiğiniz özellikleri nelerdir?

**[[⬆]](#toc)**
