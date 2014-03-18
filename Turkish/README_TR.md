#Ön Yüz Yazılımcısı -Front-end Developer- Mülakat Soruları

Burada ön yüz yazılım -ya da front-end- iş başvurularınızda karşınıza çıkabilecek sorular yer almaktadır. Her sorunun iş başvurularınızda karşınıza çıkması garanti değil ancak ihtimali var. Ayrıca buradaki sorular sadece iş başvurusu yapanlar için değil, bu branşta kendini geliştirmeyi düşünenler için de kaynak niteliğindedir.

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

####[[⬆]](#toc) <a name='contributors'>Katkıda Bulunanlar:</a>

Söz konusu aşağıdaki sorular [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) önderliğinde ve aşağıdaki katkıda bulunanlar tarafından oluşturulmuştur:

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

####[[⬆]](#toc) <a name='general'>Genel Sorular:</a>

* Dün -ya da bu hafta- neler öğrendin?
* Kod yazmanda seni cezbeden şey ne? Neden yazılım?
* Website yada web application hazırlarken UI, güvenlik, performans, SEO, sürdürülebilirlik veya teknoloji için nelere dikkat edersin?
* Bize biraz geliştirme ortamından bahset. -İşletim Sistemi, Web Tarayıcı, Araçlar, Kod Editörü/IDE, vb.-
* Web sayfasını oluştururken hangi adımları takip edersin?
* "Aşamalı geliştirme (progressive enhancement)" ile "kontrollü azalma (graceful degradation)" arasında ne fark vardır?
  * Bahsedilen doğru özellikler için artı puan 
* "Semantic HTML" ne demektir, açıklayabilir misin?
* Web sitesindeki dosyaları nasıl optimize edersin?
  * Beklenilen çözüm konuları:
    * Dosya birleştirme
    * Dosya boyut küçültme
    * CDN kullanımı
    * Caching
    * vb.
* Sitedeki JS/CSS gibi statik dosyaları birden fazla alanadı altında barındırmanın avantajları nelerdir?
  * Belli bir zamanda, tek bir alanadı üzerinden web tarayıcısı ne kadar kaynak indirebilir?
* Sayfa yüklenme süresini azaltmak için 3 yöntem belirt.
* Yeni dahil olduğunuz bir projede, kodlama için `Tab` boşluk kullanılıyor ama siz `Space` ile boşluk bırakmayı tercih ediyorsunuz. Bu durumda ne yaparsınız?
  * EditorConfig (http://editorconfig.org) vb. kod yazım standardını kolaylaştıran araçlar
  * Yazılan koda uymak (Kod tutarlılığı)
  * `issue :retab! command`
* Basit bir slayt/galeri sayfası oluşturun
  * JS kodu kullanılmaması halinde artı puan.
* Kod performansınızı ölçmek için hangi araçları kullanıyorsun?
  * Profiler, JSPerf, Dromaeo
* Eğer bu yıl bir teknolojide en iyi olmak isteseydin, hangisini seçerdin?
* Yazılım standartlarının öneminden bahset
* FOUC nedir? FOUC'a nasıl engel olabilirsin?
* Web adresinin ilk adres girilirken sayfanın tam olarak yüklenmesine kadar ki işlemleri açıklayabilir misin?

####[[⬆]](#toc) <a name='html'>HTML Soruları:</a>

* `doctype`ın işlevi nedir?
*  "standards mod" ile "quirks mod" arasındaki fark nedir?
* XHTML sayfalarının ne gibi sınırlamaları vardır?
  * Sayfaların `application/xhtml+xml` olarak çalıştırılmasında herhangi bir sakınca var mıdır?
* Sayfa içeriği çoklu dil olan siteyi nasıl sunabilirsin?
  * Çoklu dil olan sayfalarda tasarım veya kodlama olarak nelerden kaçılmalısın?
* `data-` özelliği ne faydalar sağlar?
* HTML5'i 'open web platform' olarak düşün. HTML5'in yapı taşları/temelleri nelerdir?
* Cookie, sessionStorage ve localStorage farklılıkları nelerdir?
* GET ve POST arasındaki farklılık nedir?

####[[⬆]](#toc) <a name='css'>CSS Soruları:</a>

* 'Reset' css dosyasının ne olduğunu ve neden kullanışlı olduğunu anlatın.
* 'Floats' özelliğinin ne olduğunu ve nasıl çalıştığından bahsedin.
* Çeşitli 'clearing' teknikleri nelerdir? and Hangi teknik hangi içerik için uygundur?
* CSS Sprites özelliğini ve sayfanıza veya web app'inize nasıl entegre edeceğinizi anlatın.
* En favori imaj yerini değiştirme (image replacement) tekniği sizce hangisidir ve ne gibi durumlarda kullanırsınız?
* CSS özelliklerini 'hack'leme, Duruma bağlı css dosyaları yükleme veya ....herhangi farklı birşey?
* Bazı özellikleri zorlayıcı tarayıcılarda sayfalarınızı nasıl hazırlarsınız?
  * Hangi teknikleri/işlemleri kullanırsınız?
* İçerikleri görsel olarak gizlemek hangi yollar bulunmakta? (ve içerik sadece ekran okuyucular (screen readers) için gözükecek)
* Şimdiye kadar grid sistemi kullandınız mı? Eğer kullandıysanız, ne tercih edersiniz?
* Şimdiye kadar 'media queries' veya mobil bazlı CSS/tasarım kullanıdınız mı?
* SVG stillendirme hakkında deneyiminiz var mı?
* Yazdırmak için (print) sitenizi ne şekilde en uygun hale getirdiniz?
* Kaliteli CSS yazmak için 'işte bu!' dediğiniz şeyler nelerdir?
* CSS 'preprocessor'ler kullanmanın artı-eksileri nelerdir? (SASS, Compass, Stylus, LESS)
  * Şimdiye kadar kullandıklarınızda en çok beğendiğiniz/beğenmediğiniz özellikler nelerdi?
* Standart fontları kullanmayan web tasarımlarını nasıl sayfanıze entegre ediyorsunuz?
  * Webfontlar (Örnek font servisleri: Google Webfonts, Typekit, vb.)
* Tarayıcılar html elementlerin CSS seçicilerle (selector) eşleştiğini nasıl algılıyor?
* 'box model' konusunu bildiğiniz kadar açıklayın. Ve Tasarımınızı farklı bir 'box model' ile göstermek istediğinizde CSS tarafında tarayıcıya ne belirtmeniz gerekir?
* 'Display' özelliğinin aldığı değerleri hatırladığınız kadar sayın.
* 'Inline' ile 'Inline-block' arasındaki farklılıklar nelerdir?
* 'Relative', 'Fixed', 'Absolute' ve 'Static' konumlandırılmış elementlerin farkı nedir?

####[[⬆]](#toc) <a name='js'>JS Soruları:</a>

* 'Event delegation' özelliğini anlatın.
* JavaScript'te `this` nasıl çalışıyor?
* 'prototypal inheritance' nasıl çalışır?
* Javascript kodunuzu nasıl test ediyorsunuz?
* AMD ile CommonJS'in farkı nelerdir?
* 'hashtable' nedir?
* IIFE olarak neden bu fonksiyonun çalışmadığını açıklayın: `function foo(){ }();`. 
  * IIFE olarak çalışması için ne yapmak gerekiyor?
* `null`, `undefined` ve `undeclared` arasında ne farklar var?
  * Bu değerleri kontrol ederken neler yapmalıyız?
* 'Closure' nedir, ve Nasıl/Neden kullanırız?
* Anonim fonksiyonları kullanma durumları nelerdir?
* 'JavaScript module pattern' nedir? ve ne zaman kullanmalıyız?
  * Kaliteli şekilde 'Namespace'a anlatımı için bonus puan
  * Peki modüllerin 'namespace'i yoksa?
* Kodunuzu nasıl organize edersiniz? (module pattern, classical inheritance?)
* host objects ve native objects arasında ne fark var?
* Aşağıdaki kodun birbirinden farkını belirtin:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* `.call` ve `.apply` arasındaki fark nedir?
* `undefined` ve `null` arasındaki fark nedir?
* `Function.prototype.bind` özelliğinin ne olduğunu açıklayınız.
* Kodunuzu ne zaman optimize edersiniz?
* Javascriptte 'inheritance' nasıl çalışmaktadır?
* `document.write()` fonksiyonunu ne zaman kullanmalıyız?
  * Çoğu oluşturulan reklam (ads) hala `document.write()` kullanmaktadır.
* 'Feature detection', 'feature inference', ve 'UA string' kullanımı arasında farklar nelerdir?
* AJAX'ı olabildiğince detaylı şekilde açıklayın.
* JSONP nasıl çalışır? (ve neden tam olarak AJAX olmadığını)
* JavaScript 'template' yapısını hiç kullandınız mı?
  * Eğer kullandıysanız, Hangi 'library'leri kullandınız? (Mustache.js, Handlebars, vb.)
* "Hoisting" özelliğini açıklayın.
* 'Event bubbling' özelliğini açıklayın.
* "Attribute" ve "property" arasındaki farklar nelerdir?
* JavaScript objeleri genişletmek neden iyi fikir değildir?
* Yerleşik yapıları genişletmek neden iyi fikirdir? 
* 'document load' event ile 'document ready' event ne fark var?
* `==` ve `===` arasında ne fark var?
* Sayfa URL'inden querystring parametrelerini nasıl alabileceğinizi açıklayın.
* Javascript için 'same-origin policy' konusunu açıklayın.
* Javascript'teki 'inheritance patterns' özelliğini açıklayın.
* Çalışacak şekilde kodu yazın:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Javascript'te 'memoization (Hesaplama tekrarlarından kaçınma - avoiding calculation repetition)' için stratejiniz nedir?
* Neden 'Ternary expression' olarak çağrılmaktadır? "Ternary" kelimesi ne belirtmektedir?
* Fonksiyonlarda kullanılan 'arity' nedir?
* `"use strict";` nedir? Bunu kullanmanın artı/eksileri nelerdir?

####[[⬆]](#toc) <a name='jquery'>jQuery Soruları:</a>

* "chaining" özelliğini açıklayın.
* "deferreds" özelliğini açıklayın.
* Kullandığınız Jquery bazlı optimizasyonlar nelerdir?
* `.end()` fonksiyonu ne yapmaktadır?
* Nasıl, ve neden, birbine bağlı 'event' 'handler'lar için 'namespace' kullanmalıyız?
* Jquery metodlarında izin verilen 4 farklı değer söyleyin.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object, vb.
* Efekt (veya fx) sırası 'queue' nedir?
* `.get()`, `[]`, ve `.eq()` arasında ne farklılıklar var?
* `.bind()`, `.live()`, ve `.delegate()` arasında ne farklılıklar var?
* `$` ve `$.fn` arasında ne farklılıklar var? Veya sadece `$.fn` nedir?
* Bu 'selector'ü optimize edin:
```javascript
$(".foo div#bar:eq(0)")
```
* 'delegate()' ve 'live()' arasındaki farklılıklar nelerdir?

####[[⬆]](#toc) <a name='jscode'>Kodlama Becerisi Soruları:</a>

```javascript
~~3.14
```
Soru: Yukarıdaki ifadeden dönen sonuç nedir?
**Cevap: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Soru: Yukarıdaki ifadeden dönen sonuç nedir?
**Cevap: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Soru: `window.foo`nun değeri nedir? 
**Cevap: "bar"**
`window.foo`nun değeri 'false' olmadıkça kendi değerini döndürür.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Soru: Yukarıdaki iki uyarının -`alert`- çıktısı nedir? 
**Cevap: "Hello World" & ReferenceError: bar is not defined**

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

####[[⬆]](#toc) <a name='fun'>Eğlenceli Sorular:</a>

* Şimdiye kadar kodlarken en çok gurur duyduğun/eğlendiğin şey neydi?
* Kullandığınız geliştirici araçları arasında, sevdikleriniz nelerdir?
* Kendin için herhangi bir konuda önemli olan bir projede çalıştın mı? Ne tarz?
* Internet Explorer'ın sevdiğiniz özellikleri nelerdir?


####[[⬆]](#toc) <a name='references'>Diğer Önemli Referanslar: (İngilizce)</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
* http://davidshariff.com/quiz/
* http://blog.sourcing.io/interview-questions
