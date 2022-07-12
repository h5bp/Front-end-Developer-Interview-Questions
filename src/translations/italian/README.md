---
title: Domande per il colloquio di lavoro per front-end
layout: layouts/page.njk
permalink: /translations/italian/index.html
---

# Domande per il colloquio di lavoro per front-end

Questo repository contiene una serie di domande che possono essere usate nei colloqui di lavoro quando si esaminano i potenziali candidati per il ruolo di front-end. Non è affatto consigliato usare ogni singola domanda con lo stesso candidato (richiederebbe ore). Scegliere alcune di queste domande dalla lista dovrebbe aiutarti ad esaminare le skill che vengono richieste.

L'articolo [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) di [Rebecca Murphey](http://rmurphey.com/) è un'ottima risorsa da leggere prima di affrontare un colloquio.

**Nota:** Tieni presente che molte di queste domande sono a risposta aperta e possono portare a interessanti discussioni che possono far capire le capacità di una persona più di quello che farebbe una risposta diretta.

## <a name='toc'>Indice dei Contenuti</a>

  1. [Collaboratori Originali](#contributors)
  1. [Domande Generali](#general)
  1. [Domande Specifiche su HTML](#html)
  1. [Domande Specifiche su CSS](#css)
  1. [Domande Specifiche su JS](#js)
  1. [Domande Specifiche su jQuery](#jquery)
  1. [Domande con Codice](#jscode)
  1. [Domande per Divertimento](#fun)
  1. [Altre Ottime Risorse](#references)

#### [[⬆]](#toc) <a name='contributors'>Collaboratori Originali:</a>

La maggior parte delle domande sono state prese da una discussione su [oksoclap](http://oksoclap.com/) originariamente creata da [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) e con il contributo delle seguenti persone:

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

#### [[⬆]](#toc) <a name='general'>Domande Generali:</a>

* Cosa hai imparato ieri/questa settimana?
* Cosa ti entusiasma o ti interessa della programmazione?
* Qual è una sfida tecnica che hai incontrato e come l'hai risolta?
* Quali considerazioni fai riguardo alla UI, alla Sicurezza, alle Prestazioni, al SEO, alla Manutenibilità o alla Tecnologia mentre costruisci una applicazione web o un sito?
* Parla del tuo ambiente di sviluppo preferito. (Sistema Operativo, Editor di testo, Browser, Strumenti ecc.)
* Con quali sistemi di controllo di versione [*VCS*] hai familiarità?
* Puoi descrivere il tuo metodo di lavoro quando crei una pagina web?
* Se avessi 5 fogli di stile differenti, come ti comporteresti per integrarli al meglio nel sito?
* Puoi descrivere la differenza tra miglioramento progressivo [*progressive enhancement*] e degradazione elegante [*graceful degradation*]?
* Come ottimizzeresti le risorse/asset di un sito?
* Quante risorse scaricherà per volta un browser da uno specifico dominio?
  * Quali sono le eccezioni?
* Citami 3 modi per diminuire il caricamento della pagina. (percepito o effettivo tempo di caricamento)
* Se cominci a lavorare su un progetto già iniziato dove vengono usati tab invece di spazi, cosa fai?
* Descrivi come creeresti una semplice pagina con slideshow.
* Se avessi la possibilità di diventare esperto in una tecnologia, quale sceglieresti?
* Spiega l'importanza degli standard e degli enti di normazione.
* Cosa è il FOUC? Come eviti il FOUC?
* Spiega cosa sono ARIA e lettori di schermo [*screenreaders*] e come rendere un sito web accessibile.
* Spiega alcuni dei pro e contro delle animazioni CSS rispetto alle animazioni Javascript.

#### [[⬆]](#toc) <a name='html'>Domande su HTML:</a>

* Cosa fa il `doctype`?
* Qual è la differenza tra standard mode e quirks mode?
* Qual è la differenza tra HTML e XHTML?
* Ci sono dei problemi a servire le pagine come `application/xhtml+xml`?
* Come servi una pagina con il contenuto in più lingue?
* A cosa devi far attenzione quando progetti o sviluppi siti multilingua?
* Per cosa sono utili gli attributi `data-`?
* Considera HTML5 come una piattaforma web aperta. Quali sono i mattoni di HTML5?
* Descrivi le differenze tra `cookie`, `sessionStorage` e `localStorage`.
* Descrivi la differenza tra `<script>`, `<script async>` e `<script defer>`.
* Perche è generalmente una buona idea posizionare CSS `<link>` tags all'interno di `<head></head>` e Javascript `<script>` tags appena prima di `</body>`? Conosci eccezioni?
* Cos'è il rendering progressivo [*progressive rendering*]?
* Hai mai utilizzato differeti liguaggi di templating HTML prima?

#### [[⬆]](#toc) <a name='css'>Domande Specifiche su CSS:</a>

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
* Quali sono i vantaggi/svantaggi nell'usare i preprocessori CSS? (SASS, Compass, Stylus, LESS)
	* Se sì, descrivi cosa ti piace e cosa non ti piace dei preprocessori CSS che hai usato.
* Come implementeresti una grafica web che usa font non standard?
	* Webfonts (servizi di font tipo: Google Webfonts, Typekit, ecc...)
* Spiega come un browser determina quali elementi corrispondono a un selettore CSS.
* Spiega la tua comprensione del box model e come useresti i CSS per dire al browser di rappresentare il tuo layout nei vari box model.

#### [[⬆]](#toc) <a name='js'>Domande Specifiche su JS:</a>

* Spiega l'event delegation.
* Spiega come funziona `this` in JavaScript.
* Spiega come funziona l'ereditarietà prototipale [*prototypal inheritance*].
* Come fai a testare il tuo codice JavaScript?
* AMD contro CommonJS?
* Cosa è una hashtable?
* Spiega perché il seguente codice non funziona come UN IIFE: `function foo(){ }();`. 
  * Cosa c'è bisogno di cambiare per renderlo correttamente un IIFE?
* Quale è la differenza tra una variabile che è: `null`, `undefined` or `undeclared`?
  * Come faresti per controllare questi stati?
* Cosa è una chiusura [*closure*], e come/perché ne useresti una?
* Qual è l'uso tipico di una funzione anonima?
* Spiega il "JavaScript module pattern" e quando lo useresti.
	* Punti bonus se menziona namespacing pulito.
	* E se i tuoi moduli sono senza namespace?
* Come organizzi il tuo codice? (module pattern, ereditarietà classica?)
* Qual è la differenza tra oggetti host e oggetti nativi?
* Differenza tra: `function Person(){}`, `var person = Person()`, e `var person = new Person()`?
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
* Descrivi l'event bubbling.
* Qual è la differenza tra un "attribute" e una "property"?
* Perché extending built negli oggetti JavaScript non è una buona idea?
* Perché extending built è una buona idea?
* Differenza tra l'evento document load e l'evento document ready?
* Qual è la differenza tra `==` e `===`?
* Spiega come prenderesti il parametro query string dall'URL della finestra del browser.
* Spiega la policy "stessa origine" [*same-origin*] per quanto riguarda JavaScript.
* Descrivi i pattern di ereditarietà in JavaScript.
* Cosa ottieni da:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Descrivi la tecnica della memoizzazione (evitando la ripetizione del calcolo) in JavaScript.
* Perché è chiamata espressione Ternaria, cosa indica la parola "Ternaria"?
* Cosa è l'arietà di una funzione?
* Cosa è `"use strict";`? Quali sono i vantaggi e gli svantaggi nell'usarlo?

#### [[⬆]](#toc) <a name='jquery'>Domande Specifiche su jQuery:</a>

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

#### [[⬆]](#toc) <a name='jscode'>Domande con Codice:</a>


```javascript
modulo(12, 5) // 2
```
*Domanda: Implementa la funzione modulo che soddisfi quanto sopra*


```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Domanda: Quale valore viene ritornato dalla dichiarazione qui sopra?*

**Risposta: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Domanda: Qual è il valore di `window.foo?`*

**Risposta: "bar"** *(solo se `window.foo` era falso altrimenti manterrà il suo valore)*

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Domanda: Qual è il risultato dei due alert qui sopra?*

**Risposta: "Hello World" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Domanda: Qual è il valore di `foo.length`?*

**Risposta: `2`**

#### [[⬆]](#toc) <a name='fun'>Domande per Divertimento:</a>

* Qual è la cosa più bella che hai mai sviluppato, di cosa sei più orgoglioso?
* Quali sono le tue parti preferite degli strumenti di sviluppo che usi?
* Hai qualche progetto personale? Di che tipo?
* Qual è la tua feature preferita di Internet Explorer?

#### [[⬆]](#toc) <a name='references'>Altre Ottime Risorse:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
