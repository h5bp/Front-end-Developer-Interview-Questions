***

## title: Domande JavaScript&#xA;layout: layouts/page.njk&#xA;permalink: /questions/javascript-questions/index.html

*   Spiegare la delega degli eventi.
*   Spiega come `this` funziona in JavaScript.
    *   Puoi fare un esempio di uno dei modi in cui lavorare con `this` è cambiato in ES6?
*   Spiegare come funziona l'ereditarietà prototipale.
*   Qual è la differenza tra una variabile che è: `null`, `undefined` o non dichiarato?
    *   Come faresti a controllare uno di questi stati?
*   Cos'è una chiusura e come/perché dovresti usarne una?
*   Quali costruzioni linguistiche vengono utilizzate per l'iterazione delle proprietà degli oggetti e degli elementi della matrice?
*   Puoi descrivere la principale differenza tra il `Array.forEach()` loop e `Array.map()` metodi e perché sceglieresti l'uno rispetto all'altro?
*   Qual è un tipico caso d'uso per le funzioni anonime?
*   Qual è la differenza tra oggetti host e oggetti nativi?
*   Spiega la differenza tra: `function Person(){}`, `var person = Person()`e `var person = new Person()`?
*   Spiegare le differenze sull'uso di `foo` tra `function foo() {}` e `var foo = function() {}`
*   Puoi spiegarci cosa `Function.call` e `Function.apply` fare? Qual è la differenza notevole tra i due?
*   Spiegare `Function.prototype.bind`.
*   Qual è la differenza tra il rilevamento delle funzionalità, l'inferenza delle funzionalità e l'utilizzo della stringa UA?
*   Spiega "sollevamento".
*   Descrivi il gorgogliamento degli eventi.
*   Descrivere l'acquisizione degli eventi.
*   Qual è la differenza tra un "attributo" e una "proprietà"?
*   Quali sono i pro e i contro dell'estensione degli oggetti JavaScript incorporati?
*   Qual è la differenza tra `==` e `===`?
*   Spiegare la politica della stessa origine per quanto riguarda JavaScript.
*   Perché si chiama operatore ternario, cosa indica la parola "Ternario"?
*   Cos'è la modalità rigorosa? Quali sono alcuni dei vantaggi / svantaggi del suo utilizzo?
*   Quali sono alcuni dei vantaggi/svantaggi della scrittura di codice JavaScript in un linguaggio che compila in JavaScript?
*   Quali strumenti e tecniche vengono utilizzati per il debug del codice JavaScript?
*   Spiega la differenza tra oggetti mutevoli e immutabili.
    *   Cos'è un esempio di oggetto immutabile in JavaScript?
    *   Quali sono i pro e i contro dell'immutabilità?
    *   Come puoi ottenere l'immutabilità nel tuo codice?
*   Spiegare la differenza tra funzioni sincrone e asincrone.
*   Che cos'è il ciclo di eventi?
    *   Qual è la differenza tra stack di chiamate e coda di operazioni?
*   Quali sono le differenze tra le variabili create utilizzando `let`, `var` o `const`?
*   Quali sono le differenze tra i costruttori di funzioni della classe ES6 e ES5?
*   Puoi offrire un caso d'uso per la nuova freccia `=>` sintassi della funzione? In che modo questa nuova sintassi differisce dalle altre funzioni?
*   Quale vantaggio c'è nell'usare la sintassi della freccia per un metodo in un costruttore?
*   Qual è la definizione di una funzione di ordine superiore?
*   Puoi fare un esempio per destrutturare un oggetto o una matrice?
*   Puoi fare un esempio di generazione di una stringa con ES6 Template Literals?
*   Puoi fare un esempio di una funzione curry e perché questa sintassi offre un vantaggio?
*   Quali sono i vantaggi dell'utilizzo `spread syntax` e in che modo è diverso da `rest syntax`?
*   Come è possibile condividere il codice tra i file?
*   Perché potresti voler creare membri statici della classe?
*   Qual è la differenza tra `while` e `do-while` loop in JavaScript?
*   Cos'è una promessa? Dove e come useresti la promessa?

## Domande di codifica

*   Fai in modo che questo funzioni:

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

*   Creare un ciclo for che itera fino a `100` durante l'output **"frizzante"** a multipli di `3`, **"ronzio"** a multipli di `5` e **"fizzbuzz"** a multipli di `3` e `5`
*   Cosa verrà restituito da ciascuno di questi?

```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```

*   Scrivere un'espressione di funzione immediatamente richiamata (IIFE)
