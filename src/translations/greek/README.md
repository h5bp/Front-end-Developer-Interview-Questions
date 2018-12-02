---
title: Ερωτήσεις συνέντευξης για υποψήφιους Frond-end developers
layout: layouts/page.njk
permalink: /translations/greek/index.html
---

# Ερωτήσεις συνέντευξης για υποψήφιους Frond-end developers

Αυτό το αποθετήριο (repo) περιέχει μια σειρά από front-end ερωτήσεις συνέντευξης που μπορούν να χρησιμοποιηθούν κατά την εξέταση πιθανών υποψηφίων. Σε καμία περίπτωση δεν προτείνεται να θέσετε όλα τα ερωτήματα που βρίσκονται εδώ στον ίδιο υποψήφιο (αυτό θα έπαιρνε ώρες). Επιλέγοντας όμως μερικές από αυτές, θα μπορέσετε να επιλέξετε τον υποψήφιο με τις κατάλληλες για σας δεξιότητες.

Επίσης, πριν προχωρήσετε στις συνεντεύξεις, θα ήταν εξαιρετικά χρήσιμο να διαβάσετε το άρθρο της [Rebecca Murphey](http://rmurphey.com/) ["Baseline For Front-End Developers"](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/).

**Σημείωση:** Λάβετε υπόψη ότι πολλές από αυτές τις ερωτήσεις είναι ελευθέρου θέματος και μπορεί να οδηγήσουν σε ενδιαφέρουσες συζητήσεις που θα σας πουν πολλά περισσότερα πράγματα σχετικά με τις δυνατότητες του υποψήφιου από μια απλή απάντηση.

## <a name='toc'>Περιεχόμενα</a>

  1. [Αρχικοί Συντελεστές](#contributors)
  2. [Γενικές Ερωτήσεις](#general)
  3. [HTML Ερωτήσεις](#html)
  4. [CSS Ερωτήσεις](#css)
  5. [JS Ερωτήσεις](#js)
  6. [jQuery Ερωτήσεις](#jquery)
  7. [Coding Ερωτήσεις](#jscode)
  8. [Διασκεδαστικές Ερωτήσεις](#fun)
  9. [Άλλες Εξαιρετικές Πηγές](#references)

#### [[⬆]](#toc) <a name='contributors'>Αρχικοί Συντελεστές:</a>

Οι περισσότερες ερωτήσεις προέκυψαν από ένα [oksoclap](http://oksoclap.com/) thread που δημιουργήθηκε αρχικά από τον [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) και στο οποίο συνείσφεραν τα παρακάτω άτομα:

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

#### [[⬆]](#toc) <a name='general'>Γενικές Ερωτήσεις:</a>

* Τι μάθατε χτές/αυτή την εβδομάδα;
* Τι σε ενθουσιάζει ή σας ενδιαφέρει σχετικά με τον προγραμματισμό;
* Τι σκέφτεστε σχετικά με το UI, Ασφάλεια, Απόδοση, SEO, Συντηρησιμότητα και Τεχνολογία, ενώ υλοποιείτε μια web εφαρμογή ή ιστοσελίδα;
* Μιλήστε σχετικά με το προτιμώμενο περιβάλλον ανάπτυξής σας. (OS, Editor, Φυλλομετρητές, εργαλεία κ.λπ.)
* Με ποια έκδοση version control συστήματος είστε εξοικειωμένος;
* Μπορείτε να περιγράψετε τη ροή της εργασίας σας κατά την διάρκεια δημιουργίας μιας ιστοσελίδας;
* Μπορείτε να περιγράψετε τη διαφορά μεταξύ progressive enhancement και graceful degradation;
  *  Επιπλέον βαθμοί για την περιγραφή feature detection
* Εξηγήστε τι σημαίνει "Semantic HTML".
* Πώς μπορείτε να κάνετε optimize τα στοιχεία/πόρους των ιστοσελίδων σας;
  * Ψάχνοντας για μια σειρά από λύσεις που μπορεί να περιλαμβάνουν:
    * File concatenation
    * File minification
    * CDN Hosted
    * Caching
    * etc.
* Γιατί είναι καλύτερα να σερβίρετε τα στοιχεία της ιστοσελίδας σας από πολλά domains;
  * Πόσα resources τη φορά μπορεί να κατεβάσει ένας φυλλομετρητής από κάθε domain;
* Ονομάστε 3 τρόπους μείωσης του page load. (θεωρητικός ή πραγματικός χρόνος φόρτωσης)
* Αν μπείτε σε κάποιο έργο στο οποίο χρησιμοποιούν tabs και εσείς έχετε συνηθίσει spaces, τι θα κάνατε;
  * Προτείνετε να χρησιμοποιηθεί στο έργο κάτι σαν το EditorConfig (http://editorconfig.org)
  * Συμμορφωθείτε με τις συμβάσεις (μείνετε συνεπής)
  * `issue :retab! command`
* Δημιουργήστε μια απλή slideshow σελίδα
  * Επιπλέον βαθμοί αν δεν χρησιμοποιηθεί καθόλου JS.
* Ποια εργαλεία χρησιμοποιείτε για να ελέγξετε την απόδοση του κώδικά σας;
  * Profiler, JSPerf, Dromaeo
* Αν θα μπορούσατε να κατέχετε μια τεχνολογία φέτος, ποια θα ήταν αυτή;
* Ποιες είναι οι διαφορές μεταξύ Long-Polling, WebSockets και SSE;
* Εξηγήστε τη σημασία των standards και των οργανισμών τους.
* Τι είναι FOUC; Πώς μπορείτε να αποφύγετε το FOUC;
* Περιγράψτε όσο καλύτερα γίνεται τη διαδικασία από τη στιγμή που θα πληκτρολογείτε το URL ενός ιστότοπου μέχρι το τελείωμα του loading στην οθόνη σας.

#### [[⬆]](#toc) <a name='html'>HTML Ερωτήσεις:</a>
* Τι κάνει το `doctype`?
* Ποια είναι η διαφορά μεταξύ standards mode και quirks mode;
* Ποιοι είναι περιορισμοί όταν "σερβίρετε" XHTML σελίδες;
  * Υπάρχουν προβλήματα όταν "σερβίρετε" σελίδες ως `application/xhtml+xml`;
* Πώς σερβίρετε μια σελίδα με περιεχόμενο σε πολλές γλώσσες;
  * Σε τι είδους πράγματα πρέπει να είστε προσεκτικοί κατά τον σχεδιασμό ή την ανάπτυξη για πολυγλωσσικά sites;
* Σε τι είναι χρήσιμα τα `data-` attributes;
* Εξετάστε την HTML5 ως μια ανοιχτή web πλατφόρμα. Ποια είναι τα δομικά στοιχεία της;
* Περιγράψτε τη διαφορά μεταξύ των cookies, sessionStorage και localStorage.
* Μπορείτε να εξηγήσετε τη διαφορά μεταξύ `GET` και `POST`;

#### [[⬆]](#toc) <a name='css'>CSS Ερωτήσεις:</a>
* Περιγράψτε τι κάνει ένα "reset" CSS αρχείο και γιατί είναι χρήσιμο.
* Περιγράψτε τι είναι τα "Floats" και πώς λειτουργούν.
* Περιγράψτε το z-index και πως λειτουργεί ο τρόπο στοίβαξης.
* Ποιες είναι οι διάφορες τεχνικές "clearing" και ποια είναι η κατάλληλη για κάθε περίπτωση;
* Εξηγήστε τί είναι τα CSS sprites, και πώς θα τα υλοποιούσατε σε μια σελίδα ή site.
* Ποιες είναι οι αγαπημένες σας image replacement τεχνικές και ποιες χρησιμοποιείτε;
* CSS property hacks, conditionally included .css αρχεία, ή... κάτι άλλο;
* Πώς σερβίρεται τις σελίδες σας για feature-constrained browsers;
  * Ποιες τεχνικές/εργασίες χρησιμοποιείτε;
* Ποιοι είναι οι διαφορετικοί τρόποι για αποκρύψετε οπτικά (visually hide) περιεχόμενο (και να είναι διαθέσιμo μόνο για screen readers);
* Έχετε χρησιμοποιήσει ποτέ κάποιο grid system, και αν ναι, ποιο προτιμάτε;
* Έχετε χρησιμοποιήσει ή υλοποιήσει media queries ή mobile specific layouts/CSS;
* Κάποια εξοικείωση σε styling SVG;
* Πώς θα βελτιστοποιήσετε τις ιστοσελίδες σας για εκτύπωση;
* Ποια είναι μερικά από τα "gotchas" για συγγραφή αποτελεσματικής CSS;
* Ποια είναι τα πλεονεκτήματα/μειονεκτήματα κατά την χρήση CSS preprocessors; (SASS, Compass, Stylus, LESS)
  * Εάν έχετε χρησιμοποιήσει CSS preprocessors, περιγράψτε τι σας αρέσει και τι όχι.
* Πώς θα υλοποιούσατε ένα web design δείγμα που χρησιμοποιεί μη-standard γραμματοσειρές;
  * Webfonts (υπηρεσίες γραμματοσειρών όπως: Google Webfonts, Typekit etc.)
* Εξηγήστε πώς ένας browser καθορίζει ποια στοιχεία ταιριάζουν με έναν CSS selector;
* Εξηγήστε το "box model" και πως θα πείτε στον browser μέσω CSS να ρεντάρει (render) το layout σε διαφορετικά box models.
* Τι κάνει το ```* { box-sizing: border-box; }```? Ποια είναι τα πλεονεκτήματά του;
* Αναφέρετε όσες τιμές (values) μπορείτε να θυμηθείτε για το display property.
* Ποια είναι η διαφορά μεταξύ inline και inline-block;
* Ποια είναι η διαφορά μεταξύ relative, fixed, absolute και statically τοποθετυμένου element;
* Τι υπάρχοντα CSS frameworks έχετε χρησιμοποιήσει τοπικά, ή σε παραγωγή; (Bootstrap, PureCSS, Foundation κτλ.)
  * Αν ναι, ποια από αυτά; Αν μπορούσατε, πώς θα τα αλλάζατε/βελτιώνατε;
* Έχετε παίξει με τις νέες CSS Flexbox ή Grid προδιαγραφές;
  * Αν ναι, τι γνώμη έχετε για την επίδοση τους?

#### [[⬆]](#toc) <a name='js'>JS Ερωτήσεις:</a>

* Εξηγήστε το "event delegation"
* Εξηγήστε πως λειτουργεί το `this` στην JavaScript
* Εξηγήστε πως λειτουργεί η prototypal κληρονομικότητα
* Πως κάνετε τεστ στη JavaScript;
* AMD vs. CommonJS;
* Τι είναι το hashtable;
* Εξηγήστε γιατί το παρακάτω δεν λειτουργεί σαν IIFE: `function foo(){ }();`. 
  * Τι χρειάζεται να αλάξει έτσι ώστε να λειτουργήσει σαν IIFE;
* Ποια είναι η διαφορά ανάμεσα σε μια μεταβλητή που είναι: `null`, `undefined` και `undeclared`;
  * Πώς θα ελέγξετε οποιαδήποτε από τις παραπάνω καταστάσεις;
* Τί είναι closure, και πως/γιατί να το χρησιμοποιήσετε;
* Ποια είναι η πιο χαρακτηριστική χρήση των anonymous functions;
* Εξηγήστε την "JavaScript module pattern" και πότε θα την χρησιμοποιούσατε.
  * Επιπλέον βαθμοί για την αναφορά καθαρού namespacing.
  * Τι γίνεται αν τα modules είναι namespace-less;
* Πώς οργανώνετε τον κωδικό σας; (module pattern, classical inheritance;)
* Ποια είναι η διαφορά μεταξύ host objects και native objects;
* Διαφορά μεταξύ: `function Person(){}`, `var person = Person()`, και `var person = new Person()`;
* Ποια είναι η διαφορά μεταξύ `.call` and `.apply`;
* Εξηγήστε τι είναι  `Function.prototype.bind`;
* Πότε βελτιστοποιείτε τον κώδικα σας;
* Μπορείτε να μας εξηγήσετε πώς λειτουργεί η κληρονομικότητα (inheritance) στην JavaScript;
* Πότε θα χρησιμοποιήσετε `document.write()`;
  * Οι περισσότερες διαφημίσεις που δημιουργούνται χρησιμοποιούν ακόμα `document.write ()` αν και η χρήση του είναι παρακινδυνευμένη
* Ποια είναι η διαφορά μεταξύ feature detection, feature inference, και χρησιμοποιώντας το UA string
* Εξηγήστε το AJAX με όσες περισσότερες λεπτομέρειες μπορείτε
* Εξηγήστε πώς λειτουργεί το JSONP  (και πως δεν είναι στην πραγματικότητα AJAX)
* Έχετε χρησιμοποιήσει ποτέ JavaScript templating?
  * Αν ναι, ποιες libraries έχετε χρησιμοποιήσει; (Mustache.js, Handlebars κτλ.)
* Εξηγήστε τι είναι το "hoisting".
* Περιγράψτε το event bubbling.
* Ποια είναι η διαφορά μεταξύ "attribute" και "property";
* Γιατί η επέκταση (extending) των built in JavaScript objects δεν είναι καλή ιδέα;
* Γιατί η επέκταση (extending) των built ins είναι καλή ιδέα;
* Ποια είναι η διαφορά μεταξύ document load event και document ready event;
* Ποια είναι η διαφορά μεταξύ `==` and `===`;
* Εξηγήστε πώς θα πάρετε μια παράμετρο query string από το URL του παράθυρου (window) του browser.
* Εξηγήστε την πολιτική same-origin σε σχέση με την JavaScript.
* Περιγράψτε τις inheritance patterns της JavaScript.
* Κάνε το παρακάτω να δουλέψει:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* Περιγράψτε μια στρατηγική για memoization (αποφεύγοντας τον υπολογισμό επανάληψης) σε JavaScript.
* Γιατί ονομάζεται Ternary expression, τι υποδεικνύει η λέξη "Ternary";
* Τι είναι η arity μιας συνάρτησης (function);
* Τι σημαίνει `"use strict";`; Ποια είναι τα πλεονεκτήματα και τα μειονεκτήματα στην χρήση του;

#### [[⬆]](#toc) <a name='jquery'>jQuery Ερωτήσεις:</a>

* Εξηγήστε το "chaining".
* Εξηγήστε το "deferreds".
* Ποιές jQuery βελτιστοποιήσεις μπορείτε να υλοποιήσετε;
* Τι κάνει το `.end()`;
* Πώς, και γιατί, να χρησιμοποιήσεις namespace σε έναν bound event handler;
* Ονόμασε 4 διαφορετικές τιμές που μπορείς να περάσεις στην jQuery method.
  * Selector (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object κτλ.
* Τι είναι η effects (ή fx) queue;
* Ποια είναι η διαφορά μεταξύ `.get()`, `[]`, και `.eq()`;
* Ποια είναι η διαφορά μεταξύ `.bind()`, `.live()`, και `.delegate()`?
* Ποια είναι η διαφορά μεταξύ `$` and `$.fn`; Η απλά τι είναι `$.fn`.
* Βελτιστοποιήστε τον παρακάτω selector:
```javascript
$(".foo div#bar:eq(0)")
```

#### [[⬆]](#toc) <a name='jscode'>Code Ερωτήσεις:</a>


```javascript
modulo(12, 5) // 2
```
*Ερώτηση: Υλοποιήστε μια modulo function που ικανοποιεί το παραπάνω*


```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
*Ερώτηση: Τι τιμή επιστρέφει από την παραπάνω δήλωση;*

**Απάντηση: "goh angasal a m'i"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
*Ερώτηση: Ποια είναι η τιμή του `window.foo`?*

**Απάντηση: "bar"** *(μόνο αν το `window.foo` ήταν falsey αλλιώς θα διατηρούσε την τιμή)*

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
*Ερώτηση: Ποιο είναι το αποτέλεσμα των δύο παραπάνω alerts?*

**Απάντηση: "Hello World" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
*Ερώτηση: Ποια είναι η τιμή του `foo.length`?*

**Απάντηση: `2`**

#### [[⬆]](#toc) <a name='fun'>Διασκεδαστικές Ερωτήσεις:</a>

* Ποιο είναι το πιο σημαντικό πράγμα που έχετε υπολοιήση, ποιο είναι αυτό για το οποίο αισθάνεστε πραγματικά περήφανος;
* Ποια είναι τα αγαπημένα σας εργαλεία στα developer tools που χρησιμοποιείτε;
* Έχετε κάποια pet projects; Τι ακριβώς;
* Ποιο είναι το αγαπημένο σας χαρακτηριστικό στον Internet Explorer?

#### [[⬆]](#toc) <a name='references'>Άλλες Εξαιρετικές Πηγές:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
* http://davidshariff.com/quiz/
* http://blog.sourcing.io/interview-questions
