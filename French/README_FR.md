#Front-end Job Interview Questions

Ce dépôt contient un certain nombre de questions pour entretien avec des développeurs front-end qui peuvent être utilisée sur des candidats potentiels. Il n'est en aucun cas recommandé de poser toutes ces questions à un unique candidat (ça prendrait des heures). En choisir quelques-unes de cette liste devrait vous aider à vérifier les compétences dont vous avez besoin.

L'article [Bases pour les développeurs front-end](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)[en] de [Rebecca Murphey](http://rmurphey.com/) est aussi une bonne ressource à lire avant de lancer dans un entretien.

**Note:** Gardez en tête que la plupart de ces questions sont ouvertes et qu'elles peuvent mener à des discussions intéressantes qui vous en apprendront plus sur les capacités de la personne, qu'une question directe le ferait.

## <a name='toc'>Table des matières</a>

  1. [Contributeurs originaux](#contributors)
  1. [Questions générales](#general)
  1. [Questions sur HTML](#html)
  1. [Questions sur CSS](#css)
  1. [Questions sur JS](#js)
  1. [Questions sur jQuery](#jquery)
  1. [Questions sur la programmation](#jscode)
  1. [Questions pour le plaisir](#fun)

####<a name='contributors'>Contributeurs originaux:</a>

La majorité des questions sont tirées d'un sujet sur [oksoclap](http://oksoclap.com/) créé à l'origine par [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) et les personnes suivantes y ont contribué:

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

####<a name='general'>Questions générales:</a>

* Qu'avez-vous appris cette semaine ?
* Qu'est-ce qui vous motive ou vous intéresse dans le développement ?
* Parlez-moi de votre environnement de travail préféré. (OS, éditeur, navigateur, outils, etc.)
* Pouvez-vous décrire comment vous travaillez (votre workflow) lorsque vous créez une page web ?
* Pouvez-vous décrire la différence entre amélioration progressive et dégradation gracieuse ?
  * Point bonus si description des méthodes de détection.
Expliquez ce que le terme «HTML sémantique» signifie.
* Comment optimisez-vous les performances de vos pages web (assets/resources) ?
  * Parmi les solutions possibles :
    * La concaténation des fichiers
    * La minification des fichiers
    * L'utilisation d'un Content Delivery Network (CDN)
    * La mise en cache
    * etc.
* Pourquoi est-il préférable de disposer ses assets sur des domaines différents ?
  * Combien de ressources différentes à la fois un navigateur peut-il télécharger à partir d'un même domaine ?
* Donnez 3 façons qui permettent de réduire le temps de chargement d'une page (perçu ou réel).
* Si vous démarrez sur un projet existant, que votre prédécesseur a utilisé des tabulations pour indenter son code et que vous utilisez des espaces, que faites-vous ?
  * Vous proposez d'utiliser quelque chose comme EditorConfig (http://editorconfig.org)
  * Vous restez fidèle aux conventions
  * `issue :retab! command`
* Développez un simple diaporama
  * Un point bonus si vous le faites sans JS
* Quels outils utilisez-vous pour tester la performance de votre code ?
  * JSPerf (http://jsperf.com/)
  * Dromaeo (http://dromaeo.com/)
  * etc.
* Si vous pouviez maitriser parfaitement une technologie cette année, laquelle serait-ce ?
* Expliquez l'importance des standards et des organisations les édictant.
* Qu'est-ce que le FOUC, comment l'évitez-vous ?

**[[⬆]](#toc)**

####<a name='html'>Questions sur HTML :</a>

* Que fait un `doctype` ?
* Quelle est la différence entre les modes `standard` et `quirks` ?
* Quelles sont les limitations des pages XHTML ?
  * Y a t'il des problèmes à envoyer des pages avec le content-type `application/xhtml+xml` ?
* Comment servez-vous une page avec du contenu multilingue ?
  * À quoi devez-vous faire attention quand vous désignez ou développez des pages pour des sites multilingues ?
* À quoi les `data-` "attributes" servent-ils ?
* Si l'on considère que HTML5 est une plateforme web ouverte, quelles sont les briques de base de HTML5 ?
* Décrivez la différence entre cookies, sessionStorage, et localStorage.

**[[⬆]](#toc)**

####<a name='css'>Questions sur CSS :</a>

* Décrivez ce que fait un "reset" CSS et en quoi il est utile.
* Décrivez le positionnement flottant et comment cela fonctionne.
* Quelles sont les différentes méthodes de "clearing" des éléments flottant, et laquelle est appropriée pour chaque contexte ?
* Expliquez ce que sont les "sprites" CSS, et comment vous les implémenteriez sur une page ou un site.
* Quelles sont vos techniques favorites de remplacement d'images, et comment les utilisez-vous ?
* Parmi les solutions suivantes, laquelle préférez-vous ? Hacks CSS, appel de fichier CSS par commentaire conditionnel ou autre chose ?
* Comment servez-vous vos pages pour les navigateurs aux fonctionnalités réduites ?
  * Quelles techniques/procédés utilisez-vous ?
* Quelles sont les différentes manières de masquer du contenu (en le laissant disponible pour les lecteurs d'écran) ?
* Avez-vous déjà utilisé un système de grille, et si oui, lequel préférez-vous ?
* Avez-vous déjà implémenté des "media queries", ou des "layouts CSS" spécifiques aux mobiles ?
* Avez-vous déjà touché au style d'un SVG ?
* Comment optimisez-vous vos pages pour l'impression (le print) ?
* Quelques astuces pour écrire du CSS efficacement ?
* Quels sont les avantages/désavantages de l'utilisation des préprocesseurs CSS ? (SASS, Compass, Stylus, LESS)
  * Si vous avez un avis, décrivez ce que vous aimez et n'aimez pas des préprocesseurs que vous avez utilisés.
* Comment implémenteriez-vous un design qui utilise des polices non standards ?
  * Webfonts (des services : Google Webfonts, Typekit, etc.)
* Expliquez comment un navigateur détermine quels éléments correspondent à quel sélecteur CSS.
* Expliquez ce que vous avez compris du modèle de boite et comment diriez-vous au navigateur, en CSS, de représenter votre mise en page avec des modèles de boite différents.

**[[⬆]](#toc)**

####<a name='js'>Questions sur JS :</a>

* Expliquez la délégation d'évènement.
* Expliquez comment fonctionne `this` en Javascript.
* Expliquez comment fonctionne l'héritage de prototype.
* Comment vous en sortez-vous avec les tests en Javascript ?
* AMD ou CommonJS ?
* Qu'est-ce qu'une table de hachage (hashtable) ?
* Expliquez pourquoi ce qui suit n'est pas une IIFE (Immediately Invoked Function Expression) : `function foo(){ }();`.
  * Qu'est-ce qu'il faut changer pour faire une IIFE correcte ?
* Quelle est la différence entre une variable `null`, `undefined` et `undeclared` ?
  * Comment feriez-vous pour vérifier chacun de ces états ?
* Qu'est-ce qu'une "closure" et comment/pourquoi en utiliser une ?
  * Point bonus pour avoir mentionné le nettoyage de l'espace de nom (namespace).
  . Et si vos modules n'avaient pas d'espace de nom ?
* Comment organisez-vous votre code ? (pattern modulaire, héritage classique ?)
* Quelle est la différence entre des objets hôtes et des objets natifs ?
* Différence entre :
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Quelle est la différence entre `.call` et `.apply` ?
* Expliquez `Function.prototype.bind` ?
* Comment optimisez-vous votre code ?
* Pouvez-vous expliquer comment fonctionne l'héritage en Javascript ?
* Quand utiliseriez-vous `document.write()` ?
  * La plupart des pubs utilisent encore `document.write()` même si son utilisation est découragée.
* Quelle est la différence entre détections de "feature", inférence de "feature" et l'utilisation du "User-Agent" ?
* Expliquez ce qu'est AJAX avec autant de détails que possible.
* Expliquez comment fonctionne JSONP (et pourquoi ce n'est pas réellement de l'AJAX).
* Avez-vous déjà utilisé fait du "templating" Javascript ?
  * Si oui, quelles librairies avez-vous utilisées ? (Mustache.js, Handlebars, etc.)
* Expliquez le phénomène de "hoisting".
* Décrivez la phase de remontée d'un évènement.
* Quelle est la différence entre un "attribut" et une "propriété" ?
* Pourquoi étendre des objets natifs de Javascript n'est-il pas une bonne idée ?
* Pourquoi étendre les objets natifs est-il une bonne idée ?
* Quelle est la différence entre un les évènements "document load" et "document ready" ?
* Quelle la différence entre `==` et `===` ?
* Expliquez comment vous récupèreriez le paramètre d'une requête issu de l'URL de la fenêtre du navigateur ?
* Expliquez la politique d'origine commune et ses implications en JavaScript.
* Expliquez les patterns d'héritage en JavaScript.
* Faites fonctionner ceci :
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Décrivez une stratégie de "memoization" (éviter la répétition de calculs) en Javascript.
* Pourquoi qualifierions-nous une expression de : ternaire ? Qu'est-ce que ce mot indique ?
* Qu'est-ce que l'arité d'une fonction ?
* Qu'est-ce que `"use strict";`? Quels sont les avantages et désavantages de son utilisation ?

**[[⬆]](#toc)**

####<a name='jquery'>Questions sur jQuery :</a>

* Expliquez le chainage (chaining).
* Expliquez "deferred".
* Décrivez quelques optimisations spécifiques à jQuery que vous pouvez implémenter.
* Que fait `.end()` ?
* Pourquoi et comment restreindriez-vous un évènement à un espace de nom (namespace) ?
* Nommez 4 valeurs différentes que vous pouvez passer à une méthode jQuery.
  * Sélecteur (string), HTML (string), Callback (function), HTMLElement, objet, tableau, tableau d'éléments, objet jQuery, etc.
* Qu'est-ce que la queue d'effets (fx queue) ?
* Quelle est la différence entre `.get()`, `[]`, et `.eq()` ?
* Quelle est la différence entre `.bind()`, `.live()`, et `.delegate()`?
* Quelle est la différence entre `$` et `$.fn`? Ou bien seulement : qu'est-ce que `$.fn`.
* Optimisez ce sélecteur :
```javascript
$(".foo div#bar:eq(0)")
```
* Quelle est la différence entre `delegate()` and `live()` ?

**[[⬆]](#toc)**

####<a name='jscode'>Questions sur la programmation :</a>

```javascript
~~3.14
```
Question: Que retourne ce code ?
**Réponse: 3**

```javascript
"je suis un bouffeur de lasagne".split("").reverse().join("");
```
Question: Que retourne ce code ?
**Réponse: "engasal ed rueffuob nu sius ej"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Question: Que retourne window.foo?
**Réponse: "bar"**
seulement si window.foo n'était pas défini ou faux, autrement il garde sa valeur

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Question: Que se passe-t-il à l'exécution de ce code ?
**Réponse: "Hello World" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Question: Quelle est la valeur de foo.length ?
**Réponse: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Question: Quelle est la valeur de foo.length ?
**Réponse: `undefined`

**[[⬆]](#toc)**

####<a name='fun'>Questions pour le fun :</a>

* Quel est le truc le plus cool que vous ayez programmé, de quoi êtes-vous le plus fier ?
* Quelles sont vos parties favorites des outils de développement que vous utilisez ?
* Avez-vous des projets chouchous ? Quel genre ?
* Quelle est votre fonctionnalité favorite de IE ?

**[[⬆]](#toc)**
