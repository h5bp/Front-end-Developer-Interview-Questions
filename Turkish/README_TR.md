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
* Kod yazmakla ilgili ne seni heyecanlandırır / ilgini çeker?
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
    * Caching (önbellekleme)
    * vb.
* Sitedeki JS/CSS gibi yan kaynakları birden fazla alanadı altında barındırmanın avantajları nelerdir ?
  * Belli bir zamanda, tek bir alanadı üzerinden web tarayıcısı ne kadar kaynak indirebilir?
* Sayfa yüklenme süresini azaltmak için hangi yollara başvurursun?
* Yeni dahil olduğunuz bir projede, kodlama için `Space` boşluk kullanılıyor ama siz `Tab` ile boşluk bırakmayı tercih ediyorsunuz. Bu durumda ne yaparsınız?
  * EditorConfig (http://editorconfig.org) vb. kod yazım standardını kolaylaştıran araçlar
  * Yaygın eğilimlere uyum sağlamak (istikrarlı kalmak)
  * `issue :retab! command`
* Basit bir slayt/galeri sayfası oluşturun
  * JS kodu kullanılmaması halinde artı puan.
* What tools do you use to test your code's performance?
  * Profiler, JSPerf, Dromaeo
* Bu yıl bir teknolojide uzmanlaşacak olsan, bu hangi teknoloji olurdu?
* Standartların ve standartlaştırma kurumlarının önemini açıklayınız.
* FOUC nedir? FOUC'tan nasıl kaçınılır?

**[[⬆]](#toc)**

####<a name='html'>HTML Soruları:</a>

* `doctype`ın işlevi nedir?
*  "standart mod" ile "aptal mod" arasındaki fark nedir?
* XHTML sayfalarının ne gibi sınırlamaları vardır?
  * Sayfaların `application/xhtml+xml` olarak çalıştırılmasında herhangi bir sakınca var mıdır?
* Çoklu dilde içerik içeren bir sayfayı nasıl sunarsınız?
  * Çok dilli siteleri tasarlarken ve geliştirirken ne gibi şeylerden kaçınılmalıdır?
* `data-` özelliği ne faydalar sağlar?
* HTML5'i bir açık web platformu olarak düşünün? HTML5'in yapı taşları nelerdir?
* Çerezler (cookie), sessionStorage ve localStorage arasındaki farkları tarif ediniz.

**[[⬆]](#toc)**

####<a name='css'>CSS Soruları:</a>

* "Reset" (sıfırlama) CSS dosyasının ne yaptığını ve nasıl kullanışlı olduğunu açıklayınız.
* "Float"'un ne olduğunu ve nasıl çalıştığını açıklayınız.
* Çeşitli temizleme teknikleri nelerdir ve hangi bağlamda hangisinin uygundur?
* CSS sprite'larının ne olduğunu ve bir sayfaya nasıl uygulanabileceğini açıklayınız.
* En sevdiğiniz imaj yerine başka bir şey koyma teknikleri nelerdir ve hangisini ne zaman kullanırsınız?
* CSS özellik hack'leri (cinlik), şartlı olarak eklenen .css dosyaları, ya da ... başka bir şey?
* Özellik kısıtlamaları olan tarayıcılarda sayfaları nasıl sunarsınız?
  * Hangi teknikleri/işlemleri kullanırsınız?
* İçeriği görsel olarak saklamanın (ve sadece ekran okurlarına göstermenin) farklı yolları nelerdir?
* Hiç ızgara sistemi kullandınız mı, kullandıysanız hangisini tercih ediyorsunuz?
* Hiç "media" sorgularını (query) kullandınız mı, mobil cihazlar odaklı düzen/CSS uyguladınız mı?
* SVG'ye stil uygulamaya aşina mısınız?
* How do you optimize your webpages for print?
* Web sayfalarınızı nasıl yazıcı için en uygun hale getirirsiniz?
* Verimli CSS yazmak için "Çaktım!" dedirtecek şeyler nelerdir?
* CSS önişlemcilerinin (SASS, Compass, Stylus, LESS) avantajları/dezavantajları nelerdir?
  * Öyleyse, kullanmış olduğunuz CSS önişlemcisiyle ilgili neyi sevip neyi sevmediğinizi anlatın.
* Standart olmayan bir yazı tipi kullanan bir web tasarımını nasıl uygularsınız?
  * Webfonts (Google Webfonts, Typekit vb. gibi font servisleri)
* Tarayıcıların hangi elementlerin bir CSS seçicisine uyduğunu nasıl belirlediğini açıklayınız.
* Sizin kutu modeli anlayışınızı açıklayınız. Tarayıcıya CSS'le düzenlemenizi farklı kutu modelleriyle üretmesini nasıl söylersiniz?

**[[⬆]](#toc)**

####<a name='js'>JS Soruları:</a>

* Olay atamasını açıklayınız. (event delegation)
* JavaScript'te `this` anahtar kelimesinin nasıl çalıştığını açıklayınız.
* Prototip tabanlı kalıtımın nasıl çalıştığını açıklayınız.
* How do you go about testing your JavaScript?
* Yazdığınız JavaScript'i nasıl test ediyorsunuz?
* AMD mi CommonJS mi?
* Hashtable nedir?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`. 
* `function foo(){ }();` satırının neden bir IIFE olarak çalışmadığını açıklayınız. (IIFE: Immediately-invoked function expression, "anında çalıştırılan fonksiyon ifadesi")
  * Düzgün bir IIFE haline gelmesi için neyin değiştirilmesi gerekir?
* `null`, `undefined` ve `undeclared` değerleri olan değişkenler arasında ne fark vardır?
  * Bu durumları nasıl kontrol etmeyi tercih edersiniz?
* Kapanım (closure) nedir ve nasıl/neden kullanılır?
* Anonim fonksiyonların tipik bir kullanım yeri nedir?
* "JavaScript modül kalıbı"nı (module pattern) ve ne zaman kullanılacağını açıklayınız. 
  * Temiz isim uzayından (namespace) bahsederseniz ek puan.
  * Peki modüllerinizde isim uzayı yoksa?
* Yazdığınız kodu nasıl düzenlersiniz? (modül kalıbı, klasik kalıtım?)
* "Host nesneler" ve "Native (yerli) nesneler" arasındaki fark nedir?
* `function Person(){}`, `var person = Person()`, ve `var person = new Person()` arasındaki fark nedir?
* `.call` ve `.apply` arasındaki fark nedir?
* `undefined` ve `null` arasındaki fark nedir?
* `Function.prototype.bind` açıklayınız?
* Yazdığınız kodu ne zaman optimize edersiniz?
* JavaScript'te kalıtımın nasıl çalıştığını açıklayabilir misiniz?
* `document.write()`'ı ne zaman kullanırdınız?
  * Kaçınılmasına rağmen çoğu reklam halen `document.write()` kullanıyor
* Özellik tespiti, özellik çıkarımı ve UA karakter dizisi kullanımı arasındaki fark nedir?
* AJAX'i olabildiğince ayrıntılı açıklayınız.
* JSONP'nin nasıl çalıştığını (ve aslında AJAX olmadığını) açıklayınız.
* Hiç JavaScript şablonları (template) kullandınız mı?
  * Kullandıysanız, hangi kütüphaneleri kullandınız? (Mustache.js, Handlebars vb.)
* "Hoisting"'in ne olduğunu açıklayınız.
* Olay şişkinliğini (event bubbling) tarif ediniz.
* "attribute" (nitelik) ve "property" (özellik) arasındaki fark nedir?
* Yerleşik JavaScript nesnelerini genişletmek neden kötü bir fikirdir?
* Neden yerleşik nesneleri genişletmek iyi bir fikir olabilir?
* "document load" ve "document ready" olayları arasındaki fark nedir?
* `==` ve `===` arasındaki fark nedir?
* Tarayıcı penceresindeki URL'den sorgu dizesi (query string) parametrelerini nasıl alabileceğinizi açıklayın.
* JavaScript'te aynı kaynak ilkesini (same-origin policy) açıklayınız.
* JavaScript'te kalıtım kalıplarını tarif ediniz.
* Çözümleyiniz:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* JavaScript'te memoization (tekrarlı hesaplamadan kaçınma) için bir strateji tarif edin.
* Neden "ternary expression" (üçlü ifade) deriz, "ternary" kelimesi neyi gösterir? 
* What is the arity of a function?
* Bir fonksiyonun "arity"'si (argüman sayısı) nedir?
* `"use strict";` nedir? Kullanmanın avantajları ve dezavantajları nelerdir?

**[[⬆]](#toc)**

####<a name='jquery'>jQuery Soruları:</a>

* "chaining" (zincirleme) nedir?
* "deferreds" (öteleme) nedir?
* jQuery'e özel bazı optimize etme yolları nelerdir?
* `.end()` ne yapar?
* Nasıl ve neden bağlı bir olay "handler"'ını (ele alıcı/işleyici) bir isim uzayına sokarsınız?
* Bir jQuery metoduna parametre olarak verebileceğiniz 4 farklı değeri sayınız.
  * Seçici (string [karakter dizini]), Callback (fonksiyon), HTMLElement, nesne, dizi, element dizisi, jQuery nesnesi vb.
* Effekt kuyruğu (fx) nedir?
* `.get()`, `[]`, ve `.eq()` arasındaki fark nedir?
* `.bind()`, `.live()`, ve `.delegate()` arasındaki fark nedir?
* `$` ve `$.fn` arasındaki fark nedir? Ya da, `$.fn` nedir?
* Bu seçiciyi optimize edin:
```javascript
$(".foo div#bar:eq(0)")
```
* 'delegate()' and 'live()' arasındaki fark nedir?

**[[⬆]](#toc)**

####<a name='jscode'>Kodlama Becerisi Soruları:</a>

```javascript
~~3.14
```
Soru: Yukarıdaki ifade ne değer döndürür?
**Cevap: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Soru: Yukarıdaki ifade ne değer döndürür?
**Cevap: "goh angasal a m'i"**

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

**[[⬆]](#toc)**

####<a name='fun'>Eğlence Soruları:</a>

* Yazdığınız en havalı, en çok gurur duyduğunuz kod nedir?
* Kullandığınız geliştirici araçları arasında, sevdikleriniz nelerdir ?
* Hiç hobi projeniz var mı? Ne gibi?
* Internet Explorer'ın sevdiğiniz özellikleri nelerdir?

**[[⬆]](#toc)**
