#Pytania kwalifikacyjne na stanowisko Webmastera

@wersja 1.0

#### Pierwotni autorzy

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

### Pytania ogólne:

* Czy używasz Twittera? 
  * Jeśli tak, czyje konta śledzisz na Twitterze?
* Czy używasz GitHuba? 
	* Jeśli tak, podaj przykłady śledzonych repozytoriów  
* Jakie blogi śledzisz? 
* Jakie systemy kontroli wersji używałeś (Git, SVN itd.)? 
* Jakie jest Twoje preferowane środowisko programistyczne? (System operacyjny, Edytor, Przeglądarki, Narzędzia itd.) 
* Opisz kolejne zadania podczas tworzenia strony internetowej? 
* Opisz różnicę między stopniowym ulepszaniemn i wdzięczną degradacją? 
	* Dodatkowe punkty za opisanie wykrywania obsługi cech  
* Wyjaśnij, co oznacza "Semantyczny HTML". 
* Jakiej przeglądarki i narzędzi używasz podczas prac programistycznych?
* Jak optymalizowałbyś zasoby strony internetowej?
	* Myśląc o wielu rozwiązaniach, które zawierają:
		* Łączenie plików
		* Zmniejszenie rozmiaru plików
		* Zasoby CDN
		* Buforowanie
		* itd.
* Dlaczego serwowanie zasobów strony przez wiele domen jest lepsze? 
	* Ile zasobów pobiera przeglądarka z danej domeny w jednej chwili? 
* Podaj 3 sposoby na zmniejszenie czasu ładowania strony. (postrzeganego lub rzeczywistego czasu ładowania) 
* Jeśli dołączasz do projektu, w którym używa się tabulacji, a ty używasz spacji, co wtedy zrobisz? 
	* Sugerowanie użycia narzędzi w stylu EditorConfig (http://editorconfig.org)
	* Zgodnie z konwencjami (pozostań konsekwentny)
	* `issue :retab! command`
* Napisz prosty pokaz slajdów 
	* Dodatkowe punkty, jeśli nie używasz JS.  
* Jakich narzędzi używasz do sprawdzenia wydajności swojego koodu?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* itd.
* Gdybyś mógbyś opanować jedną technologię w tym roku, jaka byłaby to technologia? 
* Wyjaśnij znaczenie standardów sieciowych i ich twórców.
* Czym jest FOUC? Jak unikasz FOUC?  

### Pytania HTML:

* Co robi `doctype` i jakie znasz przykłady? 
* Jaka jest różnica między trybem standardów a trybem dziwactw? 
* Jakie są ogranicznia w serwowaniu stron XHTML? 
	* Czy istnieją problemy z serwowaniem stron jako `application/xhtml+xml`?  
* Jak serwujesz stronę z treścią w wielu językach? 
	* Co jest ważne przy projektowaniu i tworzeniu stron wielojęzycznych?
* Czy możliwe jest używanie składni XHTML w HTML5? 
* Jak używać języka XML w HTML5? 
* Jaka jest przydatność atrybutów `data-` 
* Czy są modele treści w HTML4, a także czy różnią się w HTML5? 
* Rozpatrujemy HTML5 jako otwartą platformę internetową. Jakie składniki tworzą HTML5? 
* Opisz różnice między cookies, sessionStorage i localStorage. 

### Pytania JS:

* Jakie biblioteki JavaScript używałeś? 
* Czy kiedykolwiek sprawdzałeś kod źródłowy bibliotek, których używałeś?
* Jaka jest różnica między JavaScript a Java? 
* Czym jest tablica mieszająca?
* Co oznaczają komunikaty `undefined` i `undeclared` dla zmiennych? 
* Czym są domknięcia, jak i po co są używane? 
	* Ulubiony wzorzec używany do ich tworzenia? argyle (Dotyczy tylko IIFE)  
* Jakie znasz typowe użycie funkcji anonimowych? 
* Wyjaśnij pomysł "Moduł JavaScript" i kiedy jest wart stosowania. 
	* Dodatkowe punkty za wzmiankę na temat czytości przestrzeni nazw. 
	* Co jeśli Twój kod nie używa przestrzeni nazw?  
* Jak organizujesz swój kod? (moduły, klasyczne dziedziczenie?) 
* Jaka jest różnicza między obiektami typu `host` i `native`? 
* Różnica między: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Jaka jest różnica między `.call` i `.apply`? 
* Wyjaśnij `Function.prototype.bind`? 
* Kiedy optymalizujesz swój kod? 
* Wyjaśnij działanie dziedziczenia w JavaScript?   
* Kiedy użyłbyś `document.write()`?
	* Wiele generowanych reklam używa `document.write()` choć nie jest to mile widziane
* Jakie są różnice między wykrywaniem obsługi funkcji, wnioskowaniem obsługi funkcji i używaniem ciągu UA 
* Omów AJAX jak najbardziej szczegółowo 
* Wyjaśnij działanie JSONP (i dlaczego nie jest właściwie AJAX) 
* Czy kiedykolwiek używałeś szablonów w JavaScript?
	* Jeśli tak, jakie to były biblioteki? (Mustache.js, Handlebars itd.) 
* Wyjaśnij pojęcie "hoisting".
* Opisz bąbelkowanie zdarzeń. 
* Jak jest różnica między "atrybutem" i "właściwością"? 
* Czemu rozszerzanie wbudowanych obiektów w JavaScript jest złym pomysłem? 
* Czemu rozszerzenia to dobry pomysł? 
* Jak jest różnicą między zdarzeniami `load` i `ready` dla strony internetowej? 
* Jaka jest różnica między `==` i `===`? 
* Wyjaśnij ewentualny sposób pobrania parametrów z adresu URL w oknie przeglądarki. 
* Wyjaśnij politykę pochodzenia w odniesieniu do JavaScript. 
* Wyjaśnij delegację zdarzeń. 
* Opisz wzorce dziedziczenia w JavaScript. 
* Napisz działający kod: 
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Opisz strategię zapamiętywania (unikanie powtarzalnych obliczeń) w JavaScript. 
* Dlaczego mówimy wyrażenie trójkowe, co dokładnie oznacza słowo "trójkowy"? 
* Czym jest `arity` funkcji?  
* Co oznacza `"use strict";`? Jakie są zalety i wady takiego rozwiązania?

### Przykłady kodu JS:

```javascript
~~3.14
```
Pytanie: Jaka wartość zostanie zwrócona przez powyższe wyrażenie? 
**Odpowiedź: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Pytanie: Jaka wartość zostanie zwrócona przez powyższe wyrażenie? 
**Odpowiedź: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Pytanie: Jaka jest wartość window.foo? 
**Odpowiedź: "bar"** 
tylko jeśli window.foo było fałszywe, w innym przypadku zwraca swoją wartość.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Pytanie: Jaki będzie wyniki wywołania dwóch powyższych poleceń `alert`? 
**Odpowiedź: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Pytanie: Jaka jest wartość foo.length? 
**Odpowiedź: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Pytanie: Jaka jest wartość foo.length? 
**Odpowiedź: `undefined`

```javascript
foo = foo||bar
```
Pytanie: Co to oznacza? 
**Odpowiedź: if(!foo) foo = bar

```javascript
foo>>1
```
Pytanie: Co to oznacza?
**Odpowiedź: Math.floor(foo/2)

```javascript
foo|0
foo+.5|0
```
Pytanie: Co to oznacza?
**Odpowiedź: parseInt(foo) & Math.round(foo)

```javascript
function foo(bar1, bar2, bar3){}
```
Pytanie: Jak pobrać liczbę parametrów?
**Odpowiedź: foo.length //this example is 3


### Pytania jQuery:

* Wyjaśnij termin "chaining". 
* Wyjaśnij termin "deferreds".
* Jakie przykłady optymalizacji jQuery potrafisz wykonać?
* Co robi `.end()`? 
* Jak i dlaczego, użyjesz przestrzeni nazw przy obsłudze wiązania zdarzeń? 
* Podaj 4 różne wartości, jakie możesz przekazać do metody jQuery.
	* Selektor (string), HTML (string), funkcja zwrotna, HTMLElement, obiekt, tablica, element tablicy, obiekt jQuery itd.
* Co to jest kolejka  (or fx) queue? 
* Jakie są różnicę między `.get()`, `[]`, i `.eq()`? 
* Jakie są różnicę między `.bind()`, `.live()`, i `.delegate()`? 
* Jakie są różnicę między `$` i `$.fn`? Albo czym jest `$.fn`.
* Zoptymalizuj selektor: 
```javascript
$(".foo div#bar:eq(0)")
```
* Różnica między 'delegate()' i 'live()'? 


### Pytania CSS:

* Opisz, czym jest plik "reset" dla CSS i dlaczego jest użyteczny. 
* Opisz jak działa właściwość `float`. 
* Jakie znasz techniki kasowania (clearing) i kiedy wskazane jest ich stosowanie? 
* Wyjaśnij technikę "CSS sprites" oraz sposób jej wdrożenia na stronie. 
* Jakie są Twoje ulubione techniki zastępowania obrazów i kiedy je stosujesz? 
* Haczyki właściwości CSS, warunkowe dołącznie plików .css lub... coś innego? 
* Jak serwujesz strony dla przeglądarek z ograniczonym wsparciem funkcji? 
	* Jakie techniki stosujesz?  
* Jakie istnieją sposoby wizualnego ukrycia treści (i uczynienia ich dostępnymi tylko dla czytników ekranu)? 
* Czy kiedykolwiek używałeś systemów siatek, a jeśli tak to jakie preferujesz? 
* Czy używałeś 'media queries' lub tworzyłeś konkretne układy i arkusze dla urządzeń mobilnych? 
* Czy miałeś styczność ze stylowaniem SVG? 
* Jak optymalizujesz swoje strony do druku? 
* Jakie stosujesz "sztuczki" przy pisaniu efektywnych CSS? 
* Czy używasz narzędzi do przetwarzania CSS? (SASS, Compass, Stylus, LESS) 
	* Jeśli tak, opisz cechy, które lubisz i nie lubisz w używanych narzędziach. 
* Jak tworzysz i wdrażasz projekt używający niestandardowych czcionek? 
	* Czcionki sieciowe (serwisy czcionek jak: Google Webfonts, Typekit itd.)
* Wyjaśnij jak przeglądarka określa elementy pasujące do selektora CSS?  

### Pytania dodatkowe (zabawne):

* Opowiedz o najfajniejszej rzeczy zadaniu podczas kodowania. Z czego jest jesteś najbardziej dumny?
* Czy znasz podpis gangu HTML5? 
* Czy jesteś teraz lub kiedykolwiek byłeś na statku? 
* Jakie są Twoje ulubione narzędzia programistyczne, których używasz?
* Czy masz jakąś maskotkę projektową? Jaką? 
* Wyjaśnij termin "cornify". 
* Napisz na kartce papieru litery A B C D E w pionie. Posortuj je teraz malejąco bez pisania linijki kodu. 
	* Czekaj i patrz czy obróci kartkę do góry nogami
* Pirat lub Ninja? 
	* Dodatkowe punkty za połącznie obu i dobre argumenty (+2 dla zombie małpa pirat ninja) 
* Jeśli nie Programowanie Stron Internetowych, co innego mógłbyś robić? 
* Gdzie na świecie jest Carmen Sandiego?
	* Podpowiedź: każda odpowiedź jest zła
* Jaka jest Twoja ulubiona funkcja w Internet Explorer?
* Uzupełnij zdanie: Brendan Eich i Doug Crockford są __________ javascriptu.
* jQuery: wielka biblioteka lub największa biblioteka? Dyskusja.
* http://www.w3schools.com/ lub http://w3fools.com/
