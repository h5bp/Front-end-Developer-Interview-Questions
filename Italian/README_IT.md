#QUESTIONARIO COLLOQUIO DI LAVORO

@version 1.0
 
##Collaboratori

@bentruyman (http://bentruyman.com/), @roger_raymond (http://twitter.com/iansym), @ajpiano (http://ajpiano.com/), @paul_irish (http://paulirish.com/), @SlexAxton (http://alexsexton.com/), @boazsender (http://boazsender.com/), @miketaylr (http://miketaylr.com/), @vladikoff (http://vladfilippov.com/), @gf3 (http://gf3.ca/), @jon_neal (http://twitter.com/jon_neal), @wookiehangover (http://wookiehangover.com/) and @darcy_clarke (http://darcyclarke.me)

## Domande Generali:

* Sei su Twitter? 
	* Se sì, chi segui su Twitter?
* Sei su GitHub? 
	* Se sì, quali sono alcuni esempi di repository che segui
* Che blog segui? 
* Che sistema di controllo di versione [*version control*] hai usato (Git, SVN, ecc...)? 
* Qual è il tuo ambiente di sviluppo preferito? (Sistema Operativo, Editor di testo, Browser, Strumenti ecc.) 
* Puoi descrivere il tuo metodo di lavoro quando crei una pagina web? 
* Puoi descrivere la differenza tra miglioramento progressivo [*progressive enhancement*] e degradazione elegante [*graceful degradation*]?
	* Punti bonus se descrive il rilevamento di funzionalità [*feature detection*]
* Spiega cosa significa "HTML Semantico". 
* In quale browser sviluppi principalmente e quali strumenti di sviluppo usi?
* Come ottimizzeresti le risorse/asset di un sito?
	* Mi aspetto svariate soluzioni che possono includere:
		* Concatenazione dei file
		* Minimizzazione [*minification*] dei file
		* Uso di CDN
		* Caching
		* ecc...
* Perché è meglio servire file per il sito da più domini? 
	* Quante risorse scaricherà per volta un browser da uno specifico dominio? 
* Citami 3 modi per diminuire il caricamento della pagina. (percepito o effettivo tempo di caricamento) 
* Se cominci a lavorare su un progetto già iniziato dove vengono usati tab invece di spazi, cosa fai? 
	* Suggerisci di usare per il progetto qualcosa tipo EditorConfig (http://editorconfig.org)
	* Ti adatti alle convezioni (rimani coerente)
	* `issue :retab! command`
* Scrivi una semplice pagina con slideshow 
	* Punti bonus se non utilizza JS.
* Che strumenti usi per testare le prestazioni del tuo codice?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/)
	* ecc...
* Se potessi approfondire una tecnologia quest'anno, quale sarebbe? 
* Spiega l'importanza degli standard e degli enti di normazione. 

## Domande Specifiche su HTML:

* Cosa fa il `doctype`, e quanti me ne puoi citare? 
* Qual è la differenza tra standard mode e quirks mode? 
* Quali sono le limitazioni quando servi pagine XHTML? 
	* Ci sono dei problemi a servire le pagine come `application/xhtml+xml`?
* Come servi una pagina con il contenuto in più lingue? 
	* A cosa devi far attenzione quando progetti o sviluppi siti multilingua?
* Si può usare la sintassi XHTML in HTML5?
* Come usi XML in HTML5?
* Per cosa sono utili gli attributi `data-`? 
* Quali sono i modelli di contenuto [*content models*] in HTML4 e sono differenti in HTML5? 
* Considera HTML5 come una piattaforma web aperta. Quali sono i mattoni di HTML5? 
* Descrivi le differenze tra cookie, sessionStorage e localStorage.

## Domande Specifiche su JS

* Quali librerie JavaScript hai usato? 
* Come è diverso JavaScript da Java? 
* Cosa è una hashtable?
* Cosa sono le variabili `undefined` e `undeclared`? 
* Cosa è una chiusura [*closure*], e come/perché ne useresti una? 
	* Il tuo pattern preferito usato per crearle? argyle (Applicabile solo a espressioni di funzione immediatamente eseguite [*IIFE*])
* Qual è l'uso tipico di una funzione anonima? 
* Spiega il "JavaScript module pattern" e quando lo useresti. 
	* Punti bonus se menziona namespacing pulito. 
	* E se i tuoi moduli sono senza namespace?
* Come organizzi il tuo codice? (module pattern, ereditarietà classica?) 
* Qual è la differenza tra oggetti host e oggetti nativi? 
* Differenza tra: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Qual è la differenza tra `.call` e `.apply`? 
* Spiega `Function.prototype.bind`? 
* Quando ottimizzi il tuo codice? 
* Puoi spiegare come funziona l'ereditarietà in JavaScript?
* Quando useresti `document.write()`? 
	* La maggior parte delle pubblicità usa `document.write()` sebbene il suo utilizzo venga malvisto
* Qual è la differenza tra il rilevamento di funzionalità [*feature detection*], la deduzione di funzionalità [*feature inference*], e l'uso della stringa UA 
* Spiega AJAX nel modo più dettagliato possibile 
* Spiega come funziona JSONP (e come non è veramente AJAX) 
* Hai mai usato il templating JavaScript?
	* Se se sì, quali librerie hai utilizzato?  (Mustache.js, Handlebars ecc...)
* Spiega "hoisting".
* Cosa è il FOUC? Come eviti il FOUC?
* Descrivi l'event bubbling. 
* Qual è la differenza tra un "attribute" e una "property"? 
* Perché extending built negli oggetti JavaScript non è una buona idea? 
* Perché extending built è una buona idea? 
* Differenza tra l'evento document load e l'evento document ready? 
* Qual è la differenza tra `==` e `===`? 
* Spiega come prenderesti il parametro query string dall'URL della finestra del browser. 
* Spiega la policy "stessa origine" [*same-origin*] per quanto riguarda JavaScript. 
* Spiega l'event delegation. 
* Descrivi i pattern di ereditarietà in JavaScript. 
* Cosa ottieni da: 
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Descrivi la tecnica della memoizzazione (evitando la ripetizione del calcolo) in JavaScript. 
* Perché è chiamato operatore Ternario, cosa indica la parola "Ternario"? 
* Cosa è l'arietà di una funzione?

## Esempi di Codice JS:

```javascript
~~3.14
```
Domanda: Quale valore viene ritornato dalla dichiarazione qui sopra? 
**Risposta: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Domanda: Quale valore viene ritornato dalla dichiarazione qui sopra? 
**Risposta: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Domanda: Qual è il valore di window.foo? 
**Risposta: "bar"** 
solo se window.foo era falso altrimenti manterrà il suo valore.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Domanda: Qual è il risultato dei due alert qui sopra? 
**Risposta: "Hello World" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Domanda: Qual è il valore di foo.length? 
**Risposta: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Domanda: Qual è il valore di foo.length? 
**Risposta: `undefined`


## Domande Specifiche su jQuery:

* Spiega la "concatenazione" [*chaining*].
* Spiega "deferreds".
* Quali sono alcune ottimizzazioni specifiche per jQuery che puoi implementare?
* Cosa fa `.end()`? 
* Come, e perché, assegneresti un namespace al gestore di un evento? 
* Citami 4 differenti valori che puoi passare al metodo jQuery.
	* Selettore [*selector*] (testo), HTML (testo), Callback (funzione), HTMLElement, oggetti, array, element array, oggetto jQuery, ecc...
* Cosa è la coda di effetti [*fx queue*]? 
* Qual è la differenza tra `.get()`, `[]`, e `.eq()`? 
* Qual è la differenza tra `.bind()`, `.live()`, e `.delegate()`? 
* Qual è la differenza tra `$` e `$.fn`? O anche solo cosa è `$.fn`.
* Ottimizza questo selettore: 
```javascript
$(".foo div#bar:eq(0)")
```

## Domande Specifiche su CSS:

* Descrivi cosa fa un file CSS "reset" e in cosa è utile. 
* Descrivi i Float e come funzionano. 
* Quali sono le varie tecniche di clearing e quale è appropriata per quale contesto? 
* Spiega gli sprite CSS, e come li implementeresti in una pagina o in un sito. 
* Quali sono le tue tecniche di sostituzione immagini [*image replacement*] preferite e quale usi quando? 
* Hack delle proprietà CSS, file .css inclusi con condizioni, o... altro? 
* Come servi le tue pagine per i browser con funzionalità limitate? 
	* Che tecniche/processi usi?
* Quali sono i vari modi per nascondere visualmente il contenuto (e renderlo disponibile solo per gli screen reader)? 
* Hai mai usato un sistema di griglie [*grid system*], e se sì, qual è il tuo preferito? 
* Hai mai usato o implementato media queries o CSS/layout specifici per mobile? 
* Familiarità con lo styling SVG? 
* Come ottimizzi le tue pagine web per la stampa? 
* Quali sono alcuni dei "trucchi" per scrivere CSS efficiente? 
* Usi preprocessori CSS? (SASS, Compass, Stylus, LESS)
	* Se sì, descrivi cosa ti piace e cosa non ti piace dei preprocessori CSS che hai usato. 
* Come implementeresti una grafica web che usa font non standard?
	* Webfonts (servizi di font tipo: Google Webfonts, Typekit, ecc...)
* Spiega come un browser determina quali elementi corrispondono a un selettore CSS.

## Domande Opzionali per divertimento:

* Qual è la cosa più bella che hai mai sviluppato, di cosa sei più orgoglioso?
* Conosci l'HTML5 gang sign? 
* Sei o sei mai stato su una barca. 
* Quali sono le tue parti preferite degli strumenti di sviluppo che usi? 
* Hai qualche interesse, pallino? Di che tipo? 
* Spiega il significato di "cornify". 
* Su un pezzo di carta, scrivi le lettere A B C D E in fila verticale. Ora mettile in ordine decrescente senza scrivere neanche una linea di codice. 
	* Aspetta e vedi se girano il foglio sottosopra
* Pirata o Ninja? 
	* Punti bonus se è una combinazione e se è stata data una buona motivazione (+2 per scimmia ninja pirata zombie) 
* Se non fosse per lo sviluppo web, cosa staresti facendo ora? 
* Che fine ha fatto Carmen Sandiego?
	* Suggerimento: la risposta è sempre sbagliata) 
* Qual è la tua feature preferita di Internet Explorer?
* Completa questa frase: Brendan Eich e Doug Crockford sono i __________ di javascript.
* jQuery: un'ottima libreria o la migliore libreria? Discuti.