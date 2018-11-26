---
title: Front-end vývojář – otázky k pohovoru
layout: layouts/page.njk
permalink: /translations/czech/index.html
---

# Front-end vývojář – otázky k pohovoru 

Tento repozitář obsahuje řadu otázek, které můžete směle položit u pohovoru kandidátovi na pozici front-end vývojář a ověřit si tak jeho znalosti v tomto oboru. Není zamýšleno položit všechny tyto otázky (jejich korektní zodpovězení by trvalo hodiny), leč pouze určitou část vyhovující vašim potřebám.   

Za přečtení stojí také:

* [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)(Anglicky) od [Rebecca Murphey](http://rmurphey.com/)
* [Interview Questions and Exercises About CSS](http://css-tricks.com/interview-questions-css/)(Anglicky) od [Chris Coyier](http://chriscoyier.net/)

**Poznámka:** Mějte na paměti, že tyto otázky mají vést spíše k diskusi na dané téma a prozradit tak něco více o schopnostech daného vývojáře než aby byly zodpovězeny jedním slovem nebo větou.

## <a name='toc'>Obsah</a>

  1. [Původní přispěvovatelé](#contributors)
  1. [Obecné otázky](#general)
  1. [HTML otázky](#html)
  1. [CSS otázky](#css)
  1. [JS otázky](#js)
  1. [jQuery otázky](#jquery)
  1. [Otázky z kódu](#jscode)
  1. [Zábavné otázky](#fun)

#### <a name='contributors'>Původní přispěvovatelé:</a>

Většina otázek byla převzata z [oksoclap](http://oksoclap.com/) původně vytvořeného [Paulem Irishem](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) a následně doplněna těmito osobami:

* [@bentruyman](http://twitter.com/bentruyman) – http://bentruyman.com
* [@cowboy](http://twitter.com/cowboy) – http://benalman.com
* [@ajpiano](http://ajpiano) – http://ajpiano.com
* [@SlexAxton](http://twitter.com/slexaxton) – http://alexsexton.com
* [@boazsender](http://twitter.com/boazsender) – http://boazsender.com
* [@miketaylr](http://twitter.com/miketaylr) – http://miketaylr.com
* [@vladikoff](http://twitter.com/vladikoff) – http://vladfilippov.com
* [@gf3](http://twitter.com/gf3) – http://gf3.ca
* [@jon_neal](http://twitter.com/jon_neal) – http://twitter.com/jon_neal
* [@wookiehangover](http://twitter.com/wookiehangover) – http://wookiehangover.com
* [@iansym](http://twitter.com/iansym) – http://twitter.com/iansym

**[[⬆]](#toc)**

#### <a name='general'>Obecné otázky:</a>

* Co jste se naučili včera/minulý týden nového?
* Co Vás vzrušuje nebo zajímá na kódování? 
* Povězte něco o Vašem oblíbeném vývojovém prostředí (operační systém, editor, prohlížeč, nástroje, atd.).
* Popište jak postupujete při vytváření nové webové stránky.
* Dokážete vysvětlit rozdíl mezi pozvolným degradováním (graceful degradation) a postupným vylepšováním(progressive enhancement)?
  * Body navíc za popsání detekce pokročilé funkcionality
* Vysvětlete pojem "sémantické HTML".
* Jak byste optimalizovali zdroje (obrázky, JS, CSS, atd.) webové stránky?
  * K dispozici je celá řada optimalizací např.:
    * Spojování souborů
    * Minifikace souborů
    * CDN hostování
    * Caching
    * atd.
* Proč je lepší posílat zdroje webové stránky z více domén?
  * Kolik souborů může z dané domény stahovat prohlížeš najednou?
* Vyjmenujte tři způsoby jak snížit dobu nahrávání webové stránky (vnímanou nebo skutečnou dobu nahrávání)
* Pokud naskočíte do projektu, kde se místo odsazování tabulátory používají mezery, co uděláte?
  * Navrhnutí, že projekt by mohl využívat něco jako EditorConfig (http://editorconfig.org)
  * Přízpůsobení se konvenci (ale zústat konzistentní).
  * `issue :retab! command`
* Napište jednoduchou stránku se slideshow.
  * Body navíc pokud nepoužívá JS.
* Jaké nástroje používáte pro testování rychlosti Vašeho kódu?
  * Profiler, JSPerf, Dromaeo
* Pokud byste se chtěl/chtěla letos naučit jednu novou technologii, která by to byla?
* Vysvětlete důležitost standardů a standardizačních orgánů
* Co to je FOUC? Jak je možné se vyhnout FOUC?

**[[⬆]](#toc)**

#### <a name='html'>HTML otázky:</a>

* Co dělá `doctype` ?
* Jaký je rozdíl mezi standardním módem a quirks módem? 
* Jaká jsou omezení při poskytování XHTML stránek?
  * Existuje nějaký problém při poskytování stránek jako `application/xhtml+xml`?
* Jak poskytujete stránku s vícejazyčným obsahem?  
  * Na co všechno si musíte dát pozor při vytváření vícejazyčné stránky?
* K čemu je dobrý atribut `data-`?
* Uvažujte o HTML5 jako o otevření platormě. Jaké jsou základní stavební kameny HTML5?
* Popište rozdíl mezi cookies, sessionStorage a localStorage.

**[[⬆]](#toc)**

#### <a name='css'>CSS otázky:</a>

* Popište co děla a k čemu je dobrý "reset" CSS soubor. 
* Popište obtékání (floats) a jak funguje.
* Popiště různé techniky pro zastavení obtékání (clear fixing) a řekněte, které se hodí v kterém kontextu.
* Vysvětlete, co to jsou CSS sprites a jak byste je implementovali.
* Jaká je Vaše oblíbená technika pro nahrazování obrázků a kterou a kdy používáte?
* CSS property hacks, kondicionální vkládání .css souborů nebo něco dalšího?
* Jak poskytujete stránky pro funkcionálně/vlastnostmi omezený prohlížeč?
  * Jakou techniku/proces používáte?
* Jaké jsou způsoby pro zneviditelní obsahu (a zachování jeho dostupnosti pro čtečky)?
* Použili jste někdy grid system a pokud ano, který upřednostňujete?
* Použili jset někdy mediální selektor (media query) nebo specifický layout/CSS pro mobilní zařízení?
* Máte nějaké zkušenosti s vytvářením SVG?
* Jak optimalizujete stránky pro tisk?
* Jaké jsou zásady pro psaní efektnivního CSS?
* Jaké jsou výhody/nevýhody použítí CSS preprocesorů (SASS, Compass, Stylus, LESS)?
  * Popiště, co se Vám na CSS preprocesorech, které jste použili, líbí/nelíbí.
* Jak byste implementovali návrh webové stránky, která používá nestandardní řezy písma?
  * Webfonts (služby typu: Google Webfonts, Typekit etc.)
* Vysvětlete jak prohlížeč určuje, který element odpovída CSS selektoru.
* Vysvětlete Vaše chápání box modelu a jak řeknete pomocí CSS prohlížeči, aby Váš layout vykreslil v odlišném box modelu

**[[⬆]](#toc)**

#### <a name='js'>JS otázky:</a>

* Vysvětlete delegaci událostí.
* Vysvětlete jak funguje `this` v JavaScriptu.
* Vysvětlete jak funguje funguje prototypová dědičnost.
* Jak testujete JavaScript?
* AMD vs. CommonJS?
* Co je hashovací tabulka?
* Vysvětlete proč následující volání nebude fungovat jako IIFE: `function foo(){ }();`.
  * Co musíte změnit, aby volání zafungovalo jako IIFE?
* Vysvětlete rozdíl mezi proměnou, která je `null`, `nedefinovaná` nebo `nedeklarovaná`?
  * Jakým způsobem ověříte jednotlivé stavy proměnné?
* Co to je closure a jak/proč bychom je měli používat?  
* Jaké je typické využití pro anonymní funkce?
* Vysvětlete "JavaScript module pattern" a kdybyste ho měli použít.
  * Body navíc za zmínku o čistých jmených prostorech.
  * Co když moduly nemají jmené prostory?
* Jak organizujete Váš kód? Module pattern, klasická dědičn5ost?
* Jaký je rozdíl mezi nativními a hostitelskými objekty?
* Rozdíl mezi:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Jaký je rozdíl mezi `.call` a `.apply`?
* Jaký je rozdíl mezi `undefined` and `null`?
* Vysvětlete `Function.prototype.bind`.
* Kdy optimalizujete Váš kód?
* Vysvětlete jak funguje dědičnost v JavaScriptu.
* Kdy byste použili `document.write()`?
  * Většina generovaných reklam stále používá tento přístup i přesto, že je to dlouhodobě odsuzováno.
* Jaký je rozdíl mezi detekcí vlastností, odvození vlastností a použití UA řetězce?
* Vysvětlete AJAX co nejpodrobněji to jde.
* Vysvětlete jak funguje JSONP (a proč to není opravdový AJAX).
* Použili jste někdy JavaScriptové šablony?
  * Pokud ano, které knihovny jste použili (Mustache.js, Handlebars etc.)?
* Vysvětlete "hoisting".
* Vysvětlete probublávání událostí.
* Jaký je rozdíl mezi atributem (attribute) a vlastností (property)?
* Proč není dobrý nápad rozšiřovat nativní JavaScriptové objekty?
* Proč je dobrý nápad rozšiřovat nativní JavaScriptové objekty?
* Jaký je rozdíl mezi událostmi document load a document ready?
* Jaký je rozdíl mezi `==` a `===`?
* Vysvětlete jakým způsobem získáte parametr z URL zadaného v okně prohlížeče.
* Vysvětlete JavaScriptové pravidlo stejného původu (same-origin policy). 
* Popište přístupy k dědění v JavaScriptu.
* Následující kód upravte tak, aby fungoval:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Popište strategie pro memorizaci (odstranění opakovaných výpočtů) v JavaScriptu.
* Proč se říká ternární operátor, co označuje slovo ternární?
* Co je označováné jako "arity" funkce?
* Co znamená `"use strict";`? Jaké jsou výhody a nevýhody použití?

**[[⬆]](#toc)**

#### <a name='jquery'>jQuery otázky:</a>

* Vysvětlete řetězení (chaining).
* Vysvětlete odkládání (deferreds).
* Jaké znáte a umíte implementovat optimalizace speciálně pro jQuery?
* Co dělá `.end()`?
* Jak a proč byste váš event handler opatřili jmeným prostorem?
* Jmenujte čtyři různé typy hodnot, které můžete předat jako vstupní parametr metod v jQuery.
  * Selektor (řetězec), HTML (řetězec), Callback (funkce), HTMLElement, object, pole, pole elementu, jQuery Object, atd.
* Co to je fronta efektů (nebo fx fronta)?
* Jaký je rozdíl mezi `.get()`, `[]` a `.eq()`?
* Jaký je rozdíl mezi `.bind()`, `.live()` a `.delegate()`?
* Jaký je rozdíl mezi `$` a `$.fn`? Nebo jenom, co je `$.fn`?
* Zoptimalizujte tento selektor:
```javascript
$(".foo div#bar:eq(0)")
```
* Jaký je rozdíl mezi 'delegate()' a 'live()'?

**[[⬆]](#toc)**

#### <a name='jscode'>Otázky z kódu:</a>

```javascript
~~3.14
```
Otázka: Jakou hodnotu vrátí uvedený výraz?
**Odpověď: 3**

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Otázka: Jakou hodnotu vrátí uvedený výraz?
**Odpověď: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Otázka: Jakou hodnotu má window.foo?
**Odpověď: "bar"**
pouze pokud window.foo bylo false, jinak vrátí svojí hodnotu.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Otázka: Co zobrazí uvedené dva alerty?
**Odpověď: "Hello World" a ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Otázka: Jaká je hodnota foo.length?
**Odpověď: `2`**

```javascript
var foo = {};
foo.bar = 'hello';
```
Otázka: Jaká je hodnota foo.length?
**Odpověď: `undefined`**

**[[⬆]](#toc)**

#### <a name='fun'>Zábavné otázky:</a>

* Jaká je nejúžasnější věc, kterou jste kdy nakódovali, nebo na kterou jste nejvíce pyšní?
* Jaké jsou Vaše oblíbené části vývojářských nástrojů, které používáte?
* Máte nějaký vlastní hobby projekt?
* Jaká je Vaše oblíbená vlastnost Internet Exploreru?

**[[⬆]](#toc)**
