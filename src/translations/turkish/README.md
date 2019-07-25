---
title: Ön Yüz Yazılımcısı - Front-end Developer - Mülakat Soruları
layout: layouts/page.njk
permalink: /translations/turkish/index.html
---

# Ön Yüz Yazılımcısı - Front-end Developer - Mülakat Soruları

Burada ön yüz yazılım -ya da front-end- iş başvurularınızda karşınıza çıkabilecek sorular yer almaktadır. Her sorunun iş başvurularınızda karşınıza çıkması garanti değil ancak ihtimali var. Ayrıca buradaki sorular sadece iş başvurusu yapanlar için değil, bu branşta kendini geliştirmeyi düşünenler için de kaynak niteliğindedir.

**Not:** Buradaki birçok sorunun ucunun açık olduğunu, bu sebeple vereceğiniz cevaba göre ilginç tartışmalara yol açabileceğini unutmayın.

## İçindekiler

  1. [Genel Sorular](#general-questions)
  1. [HTML Soruları](#html-questions)
  1. [CSS Soruları](#css-questions)
  1. [JS Soruları](#js-questions)
  1. [Test Soruları](#testing-questions)
  1. [Performans Soruları](#performance-questions)
  1. [Ağ Soruları](#network-questions)
  1. [Kodlama Soruları](#coding-questions)
  1. [Eğlenceli Sorular](#fun-questions)

## Dahil Olmak İçin

  1. [Katkıda bulunanlar](./#dahil-olmak-%C4%B0%C3%A7in)
  1. [Nasıl katkıda bulunabilirim?](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [Lisans](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### <a name='general-questions'>Genel Sorular:</a>

* Dün -ya da bu hafta- neler öğrendin?
* Kod yazmanda seni cezbeden şey ne?
* Deneyimlediğin son teknik meydan okuma / problem neydi ve onu nasıl çözdün?
* Website yada web application hazırlarken UI, güvenlik, performans, SEO, sürdürülebilirlik veya teknoloji için nelere dikkat edersin?
* Bize biraz geliştirme ortamından bahset. -İşletim Sistemi, Web Tarayıcı, Araçlar, Kod Editörü/IDE, vb.-
* Haangi version kontrol sistemlerine aşinasın?
* Web sayfasını oluştururken hangi adımları takip edersin?
* Eğer 5 farklı stil dosyası varsa, bunları siteye entegre etmenin en iyi yolu nedir?
* "Aşamalı geliştirme (progressive enhancement)" ile "kontrollü azalma (graceful degradation)" arasında ne fark vardır?
* Web sitesindeki dosyaları nasıl optimize edersin?
* Belli bir zamanda, tek bir alanadı üzerinden web tarayıcısı ne kadar kaynak indirebilir?
  * İstisnalar nelerdir?
* Sayfa yüklenme hızını azaltmanın yollarından 3 tanesini söyleyebilir misin?
* Yeni dahil olduğunuz bir projede, kodlama için `Tab` boşluk kullanılıyor ama siz `Space` ile boşluk bırakmayı tercih ediyorsunuz. Bu durumda ne yaparsınız?
* Basit bir slayt/galeri sayfası oluşturun
* Eğer bu yıl bir teknolojide en iyi olmak isteseydin, hangisini seçerdin?
* Yazılım standartlarının öneminden bahseder misin?
* FOUC nedir? FOUC'a nasıl engel olabilirsin?
* Web adresinin ilk adres girilirken sayfanın tam olarak yüklenmesine kadar ki işlemleri açıklayabilir misin?
* CSS animasyonlarının JavaScript animasyonlara göre artılarını ve eksiklerini açıklayabilir misin?
* CORS ne anlama geliyor ve nasıl bir problemi çözüyor?



#### <a name='html-questions'>HTML Soruları:</a>

* `doctype`ın işlevi nedir?
* Full standards mode, almost standards mode ve quirks mode arasındaki farklar nelerdir?
* HTML ve XHTML arasındaki farkler nelerdir?
* Sayfaların `application/xhtml+xml` olarak çalıştırılmasında herhangi bir sakınca var mıdır?
* Sayfa içeriği çoklu dil olan siteyi nasıl sunabilirsin?
* Çoklu dil olan sayfalarda tasarım veya kodlama olarak nelerden kaçılmalısın?
* `data-` özelliği ne faydalar sağlar?
* HTML5'i 'open web platform' olarak düşün. HTML5'in yapı taşları/temelleri nelerdir?
* `cookie`, `sessionStorage` ve `localStorage` arasındaki farkları açıklayabilir misin?
* `<script>`, `<script async>` ve `<script defer>` arasındaki farkları açıklayabilir misin?
* CSS `<link>`lerin `<head></head>` arasında ve JS `<script>`lerinin `</body>` etiketinden önce olması niye genelde iyi bir fikirdir? Herhangi bir istisna biliyor musun?
* Progressive rendering nedir?
* Önceden farklı bir HTML templating dili kullandın mı?

#### <a name='css-questions'>CSS Soruları:</a>

* CSS'te class ve ID arasındaki farklar nelerdir?
* "Resetting" ve "normalizing" CSS'ler arasındaki farklar nelerdir? Hangisini kullanmamız gerekir, neden?
* Floats özelliğinin ne olduğunu ve nasıl çalıştığından bahsedin.
* z-index özelliğinin ne olduğunu ve nasıl çalıştığından bahsedin.
* BFC (Block Formatting Context)'nin ne olduğunu ve nasıl çalıştığından bahsedin.
* Çeşitli 'clearing' teknikleri nelerdir ve hangi teknik hangi içerik için uygundur?
* CSS Sprites özelliğini ve sayfanıza veya web uygulamanıza nasıl entegre edeceğinizi anlatın.
* En favori imaj yerini değiştirme (image replacement) tekniği sizce hangisidir ve ne gibi durumlarda kullanırsınız?
* Browser tabanlı (browser-specific) stil problemlerini nasıl çözersiniz?
* Özellik kısıtlamalı (feature-constrained) tarayıcılar için websitenizi nasıl hazırlarsınız?
  * Hangi teknikleri/işlemleri kullanırsınız?
* İçerikleri görsel olarak gizlemek hangi yollar bulunmakta? (İçerik sadece ekran okuyucular (screen readers) için gözükecek.)
* Şimdiye kadar grid sistemi kullandınız mı? Eğer kullandıysanız, ne tercih edersiniz?
* Şimdiye kadar 'media queries' veya mobil bazlı CSS/tasarım kullanıdınız mı?
* SVG stillendirme hakkında deneyiminiz var mı?
* Yazdırmak için (print) sitenizi ne şekilde en uygun hale getirdiniz?
* Kaliteli CSS yazmak için 'işte bu!' dediğiniz şeyler nelerdir?
* CSS 'preprocessor'ler kullanmanın artı-eksileri nelerdir? (SASS, Compass, Stylus, LESS)
  * Şimdiye kadar kullandıklarınızda en çok beğendiğiniz/beğenmediğiniz özellikler nelerdi?
* Standart fontları kullanmayan web tasarımlarını nasıl sayfanıze entegre ediyorsunuz?
* Tarayıcılar HTML elementlerin CSS seçicilerle (selector) eşleştiğini nasıl algılıyor, açıklar mısınız?
* Sözde elementleri (pseudo-elements) ve ne için kullandıklarını açıklayın.
* 'box model' konusunu bildiğiniz kadar açıklayın ve tasarımınızı farklı bir 'box model' ile göstermek istediğinizde CSS tarafında tarayıcıya ne belirtmeniz gerekir?
* ```* { box-sizing: border-box; }``` ne yapar? Avantajları nelerdir?
* 'Display' özelliğinin aldığı değerleri hatırladığınız kadar sayın.
* 'inline' ile 'inline-block' arasındaki farklılıklar nelerdir?
* 'relative', 'fixed', 'absolute' ve 'static' konumlandırılmış elementlerin farkı nedir?
* CSS kelimesindeki C harfi "Cascading"in (basamaklı) kısaltmasıdır. Yönlendirilen stillerde öncelikler nasıl belirlenir (birkaç örnekle birlikte)? Bunu nasıl kendi avantajınıza göre kullanabilirsiniz?
* Kullanmış olduğunuz, daha tanınmayan - lokal CSS çatılar (frameworks) var mı? Bunları nasıl değiştirmek / geliştirmek isterdiniz?
* Yeni CSS Flebox veya Grid özellikleriyle deneyip bir şeyler yaptınız mı?
* Responsive tasarımın adaptive tasarımdan farkı nedir?
* Hiç retina grafiklerle çalıştınız mı? Eğer çalıştıysanız ne zaman ve hangi teknikleri kullandınız?
* `translate()` yerine *absolute positioning*, veya tam tersini kullanmak için bir sebebiniz olabilir mi? Ve neden?

#### <a name='js-questions'>JS Soruları:</a>

* 'Event delegation' özelliğini anlatın.
* JavaScript'te `this` nasıl çalışıyor?
* 'prototypal inheritance' nasıl çalışır?
* AMD ile CommonJS'in farkı nelerdir?
* IIFE olarak neden bu fonksiyonun çalışmadığını açıklayın: `function foo(){ }();`.
  * IIFE olarak çalışması için ne yapmak gerekiyor?
* `null`, `undefined` ve `undeclared` arasında ne farklar var?
  * Bu değerleri kontrol ederken neler yapmalıyız?
* 'Closure' nedir, ve nasıl/neden kullanırız?
* Anonim fonksiyonları kullanma durumları nelerdir?
* Kodunuzu nasıl organize edersiniz? (module pattern, classical inheritance?)
* host objects ve native objects arasında ne fark var?
* `function Person(){}`, `var person = Person()`, ve `var person = new Person()` arasındaki farklar nelerdir?
* `.call` ve `.apply` arasındaki fark nedir?
* `Function.prototype.bind` özelliğinin ne olduğunu açıklayınız.
* `undefined` ve `null` arasındaki fark nedir?
* `document.write()` fonksiyonunu ne zaman kullanmalıyız?
* Özellik tespiti (feature detection), özellik çıkarım (feature inference) ve UA string kullanımı arasındaki farklar nelerdir?
* AJAX'ı olabildiğince detaylı şekilde açıklayın.
* Ajax kullanmanın avantajları ve dezavantajları nelerdir?
* JSONP nasıl çalışır? (ve neden tam olarak AJAX olmadığını da açıklayınız.)
* JavaScript 'template' yapısını hiç kullandınız mı?
  * Eğer kullandıysanız, Hangi 'library'leri kullandınız? (Mustache.js, Handlebars, vb.)
* "Hoisting" özelliğini açıklayın.
* 'Event bubbling' özelliğini açıklayın.
* "Attribute" ve "property" arasındaki farklar nelerdir?
* JavaScript objeleri genişletmek neden iyi fikir değildir?
* "document load event" ile "document DOMContentLoaded event" arasındaki farklar nelerdir?
* `==` ve `===` arasında ne fark vardır?
* JavaScript için 'same-origin policy' konusunu açıklayın.
* Çalışacak şekilde kodu yazın:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Neden 'Ternary expression' olarak çağrılmaktadır? "Ternary" kelimesi neyi belirtmektedir?
* `"use strict";` nedir? Bunu kullanmanın artı/eksileri nelerdir?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Websitenin genel skopundan ayrılmak ve dokunmamak neden genelde iyi bir fikirdir?
* Neden `load` gibi bir event kullanırsınız? Bunun dezavantajları var mı? Bildiğiniz alternatifleri var mı ve neden onları kullanıyorsunuz?
* Tek sayfa uygulama (single page app) nedir ve nasıl arama motoru uyumlu (SEO-friendly) yapılır, açıklayın.
* "Promises" ve/veya onun polyfilleriyle alakalı deneyimler nedir?
* "Callback"ler yerine "Promises" kullanmanın artıları ve eksileri nelerdir?
* JavaScript'in derlendiği bir dilde JavaScript yazmanın avantajları ve dezavantajlarından bazıları nelerdir?
* JavaScript kodunuzda hata ayıklarken (debugging) kullandığınız teknikler ve araçlar nelerdir?
* What language constructions do you use for iterating over object properties and array items?
* Kesilebilir (mutable) ve değişmez (immutable) nesneler arasındaki farkları açıklayın.
  * JavaScript'te değişmez (immutable) objeye bir örnek veriniz.
  * Değişmezliğin (immutability) artıları ve eksileri nedir?
  * Değişmezliği (immutability) kendi kodunuzda nasıl başarırsınız?
* Senkron ve asenkron fonksiyonlar arasındaki farkları açıklayın.
* Olay döngüsü (event loop) nedir?
  * Çağrı yığını (call stack) ve görev kuyruğu (task queue) arasındaki fark nedir?
* `foo`, `function foo() {}` ve `var foo = function() {}` arasındaki farkları açıklayın.

#### <a name='testing-questions'>Test Soruları:</a>

  * Kodunuzu test etmenin avantajları ve dezavantajları nelerdir?
  * Kodunuzun işlevselliğini sınamak için hangi araçları kullanıyorsunuz?
  * Ünite testi (unit test) ile fonksiyonel/entgrasyon testi arasındaki fark nedir?
  * Kodu lint etme aracının (code style linting tool) kullanım amacı nedir?

#### <a name='performance-questions'>Performans Soruları:</a>

  * Kodunuzda performans problemleri bulmak için hangi araçları kullanıyorsunuz?
  * Websitenizin kaydırma (scrolling) performansını geliştirmenin yollarından bazıları nelerdir?
  * "Layout", "painting" ve "compositing" terimleri arasındaki farkları açıklayınız.

#### <a name='network-questions'>Ağ Soruları:</a>

  * Geleneksel olarak, neden site dosyalarını birden fazla domainden sunmak daha iyidir?
  * Web adresinin ilk adres girilirken sayfanın tam olarak yüklenmesine kadar ki işlemleri açıklayabilir misin?
  * "Long-Polling", "Websockets" ve "Server-Sent Events" terimleri arasındaki farklar nelerdir?
  * Şu "request" ve "response header"ları açıklayın:
    * Diff. between Expires, Date, Age and If-Modified-...
    * Do Not Track
    * Cache-Control
    * Transfer-Encoding
    * ETag
    * X-Frame-Options
  * HTTP metodları nelerdir? Bildiklerinizi listeleyin ve açıklayın.

#### <a name='coding-questions'>Kodlama Soruları:</a>

*Soru:`foo`'nun değeri nedir?*
```javascript
var foo = 10 + '20';
```

*Soru: Bu işi nasıl yaparsınız?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Soru: Bu ifadeden dönen sonuç nedir?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Question: `window.foo` değeri nedir?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Question: Aşağıdaki iki "alert"in çıktısı nedir?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Soru: `foo.length` değeri nedir?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Soru: `foo.x` değeri nedir?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Soru: Bu kodun çıktısı nedir?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

#### <a name='fun-questions'>Eğlenceli Sorular:</a>

* Şimdiye kadar içinde bulunduğun en havalı proje neydi?
* Kullandığınız geliştirici araçları arasında, sevdikleriniz nelerdir?
* Önyüz (front-end) komünitesinde etkilendiklerin kimler?
* Evcil hayvanlarla alakalı herhangi bir projen var mı? Varsa ne tür bir proje?
* Internet Explorer'ın senin için favori özelliği nedir?
* Kahveni nasıl seversin?

#### Katılımcılar:

Bu proje 2009 yılında bu katılımcılarla başladı: [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) and [@iansym](https://twitter.com/iansym).

Bu projenin bakımı şu anda aşağıdaki kişiler tarafından yapılmaktadır:

- [roblarsen](https://github.com/roblarsen)
- [vvscode](https://github.com/vvscode)

O zamandan beri bu [inanılmaz derecede harika insanlar](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTORS.md) sayesinde etkin durumda.

İlham mı geldi? Katkı sağlamak için [Katılım rehberi](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/.github/CONTRIBUTING.md)mizi inceleyin!
