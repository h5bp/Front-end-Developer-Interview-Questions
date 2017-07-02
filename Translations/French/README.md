#Questionnaire de recrutement pour développeur front-end

Cette liste contient un certain nombre de questions que vous pouvez poser lors d'un entretien d'embauche pour un développeur Front-End. Il n'est en aucun cas recommandé de poser toutes ces questions à un candidat (ça prendrait des heures). Choisissez en quelques-unes liées au profil que vous rechercher afin de vérifier les compétences dont vous avez besoin.

**Note:** Gardez en tête que la plupart de ces questions sont ouvertes et qu'elles peuvent mener à des discussions intéressantes, qui vous en apprendront plus sur les capacités de la personne.

## <a name='toc'>Table des matières</a>

  1. [Questions générales](#general-questions)
  1. [Questions sur HTML](#html-questions)
  1. [Questions sur CSS](#css-questions)
  1. [Questions sur JS](#js-questions)
  1. [Questions sur réseau](#network-questions)
  1. [Questions sur la programmation](#code-questions)
  1. [Questions pour le fun](#fun-questions)

####S'impliquer :

  1. [Contributeurs](#contributors)
  1. [Comment contribuer (en)](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [Licence](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

**[[⬆]](#toc)**

####<a name='general-questions'>Questions générales:</a>

* Qu'avez-vous appris cette semaine ?
* Qu'est ce qui vous motive ou vous intéresse dans le développement ?
* Quel a été le dernier défi technique que vous avez expérimenté et comment l'avez-vous résolu ?
* Quelles considérations en terme d'UI, Sécurité, Performance, SEO, Maintenabilité ou Technologie faites-vous lorsque vous concevez une application web ou site ?
* Parlez-moi de votre environnement de travail préféré.
* Avec quels logiciels de gestion de versions êtes-vous familier?
* Pouvez-vous décrire comment vous travaillez (votre workflow) lorsque vous créez une page web ?
* Si vous aviez 5 feuilles de style différentes, de quelle façon les intégreriez-vous le mieux dans un site ?
* Pouvez-vous décrire la différence entre amélioration progressive et dégradation gracieuse ?
* Comment optimisez-vous les performances de vos pages web (assets/ressources) ?
* Combien de ressources différentes à la fois un navigateur peut-il télécharger à partir d'un même domaine ?
  * Quelles sont les exceptions ?
* Donnez 3 façons qui permettent de réduire le temps de chargement d'une page (perçu ou réel).
* Si vous commencez à travailler sur un projet existant, où votre prédécesseur a utilisé des tabulations pour indenter son code et que vous utilisez des espaces, que faites-vous ?
* Décrivez comment vous développeriez un simple diaporama
* Quels outils utilisez-vous pour tester la performance de votre code ?
* Si vous pouviez maîtriser parfaitement une technologie cette année, laquelle serait-elle ?
* Expliquez l'importance des standards et des organisations les édictant.
* Qu'est-ce que le FOUC (*flash of unstyled content*) et comment l'évitez-vous ?
* Expliquez ce que sont ARIA et les lecteurs d'écrans, et comment rendre votre site internet accessible
* Expliquez quelques-uns des pour et contre des animations CSS par rapport aux animations JavaScript

**[[⬆]](#toc)**

####<a name='html-questions'>Questions sur HTML :</a>

* Que fait un `doctype` ?
* Quelle est la différence entre les modes `standard` et `quirks` ?
* Quelles sont les différences entre HTML et XHTML ?
* Y a-t-il des problèmes à envoyer des pages avec le *Content-Type* `application/xhtml+xml` ?
* Comment servez-vous une page avec du contenu multilingue ?
* À quoi devez-vous faire attention quand vous *designez* ou développez des pages pour des sites multilingues ?
* À quoi les attributs `data-` servent-ils ?
* Si l'on considère que HTML5 est une API Web ouverte, quelles sont les briques de base de HTML5 ?
* Décrivez la différence entre `cookie`, `sessionStorage`, et `localStorage`.
* Décrivez la différence entre `<script>`, `<script async>` et `<script defer>`.
* Pourquoi est-ce généralement une bonne idée de positionner les `<link>` à l'intérieur de `<head></head>` et les `<script>` juste avant `</body>`? Connaissez-vous des exceptions ?
* Qu'est-ce que le rendu progressif ?

**[[⬆]](#toc)**

####<a name='css-questions'>Questions sur CSS :</a>

* Quelle est la différence entre les classes et les IDs en CSS ?
* Quelle est la différence entre un "reset" et une "normalisation" en CSS ? Lequel choisiriez-vous et pourquoi ?
* Décrivez le positionnement flottant et son fonctionnement.
* Décrivez le `z-index` et comment le contexte d'empilement se forme ?
* Quelles sont les différentes méthodes de "clearing" des éléments flottants, et laquelle est appropriée pour chaque contexte ?
* Expliquez ce que sont les "sprites" CSS et comment vous les implémenteriez sur une page ou un site.
* Quelles sont vos techniques favorites de remplacement d'images, et comment les utilisez-vous ?
* Quelle approche choisiriez-vous pour réparer des bugs au niveau du CSS spécifique à certains navigateurs ?
* Comment servez-vous vos pages pour les navigateurs aux fonctionnalités réduites ?
  * Quelles techniques/procédés utilisez-vous ?
* Quelles sont les différentes manières de masquer du contenu (en le laissant disponible pour les lecteurs d'écran) ?
* Avez-vous déjà utilisé un système de grille, et si oui, lequel préférez-vous ?
* Avez-vous déjà implémenté des "media queries", ou des "layouts CSS" spécifiques aux mobiles ?
* Avez-vous déjà touché au style d'un SVG ?
* Comment optimisez-vous vos pages pour l'impression (le print) ?
* Quelques astuces pour écrire du CSS efficacement ?
* Quels sont les avantages/désavantages de l'utilisation des préprocesseurs CSS ? (SASS, Compass, Stylus, LESS)
  * Si vous avez un avis, décrivez ce que vous aimez et n'aimez pas des préprocesseurs que vous avez utilisé.
* Comment implémenteriez-vous un design qui utilise des polices de caractères non standards ?
* Expliquez comment un navigateur détermine quels éléments correspondent à un sélecteur CSS.
* Expliquez ce que vous avez compris du modèle de boite (box model) et comment implémenteriez vous une mise en page avec des modèles de boite différents.
* Qu'est-ce que ```* { box-sizing: border-box; }``` fait ? Quels sont ses désavantages ?
* Listez autant de valeurs que vous pouvez pour la propriété `display`.
* Quelle est la différence entre `inline` et `inline-block` ?
* Quelle est la différence entre les éléments ayant `relative`, `fixed`, `absolute` et `static` comme `position` ?
* Le 'C' dans CSS veut dire Cascade (Cascading). Comment la priorité est-elle définie lors de l'assignement de styles (exemples) ? Comment pouvez-vous utiliser ce système à votre avantage ?
* Quels frameworks CSS avez-vous utilisé localement, ou en production ? Comment feriez-vous pour les changer/améliorer ?
* Avez-vous expérimenté le récent `flexbox` ?
* En quoi le "responsive design" est différent du "adaptive design" ?
* Avez-vous déjà travaillé avec des images "retina" ? Si oui, à quel moment et quelles techniques avez-vous utilisées ?
* Y a-t-il des raisons particulières pour lesquelles vous voudriez utilser `translate()` plutôt que `position: absolute` ou vice-versa ? Et pourquoi ?

**[[⬆]](#toc)**

####<a name='js-questions'>Questions sur JS :</a>

* Expliquez la délégation d'évènement.
* Expliquez comment fonctionne `this` en Javascript.
* Expliquez comment fonctionne l'héritage de prototype.
* Comment testez-vous votre code Javascript ?
* Que pensez-vous d'AMD par rapport à CommonJS ?
* Expliquez pourquoi ce qui suit n'est pas une IIFE (Immediately Invoked Function Expression) : `function foo(){ }();`.
  * Qu'est-ce qu'il faut changer pour faire une IIFE correcte ?
* Quelle est la différence entre une variable `null`, `undefined` et non déclarée ?
  * Comment feriez-vous pour vérifier chacun de ces états ?
* Qu'est-ce qu'une "closure" et comment/pourquoi en utiliser une ?
* Quelle est l'utilisation typique d'une fonction anonyme ?
* Comment organisez-vous votre code ? (pattern modulaire, héritage classique ?)
* Quelle est la différence entre des objets hôtes et des objets natifs ?
* Différence entre: `function Person() {}`, `var person = Person()` et `var person = new Person()` ?
* Quelle est la différence entre `.call` et `.apply` ?
* Expliquez `Function.prototype.bind` ?
* Comment optimisez-vous votre code ?
* Pouvez-vous expliquer comment fonctionne l'héritage en Javascript ?
* Quand utiliseriez-vous `document.write()` ?
* Quelle est la différence entre détection de "feature", inférence de "feature" et l'utilisation du "User-Agent" ?
* Expliquez ce qu'est AJAX avec autant de détails que possible.
* Expliquez comment fonctionne JSONP (et pourquoi ce n'est pas réellement de l'AJAX).
* Avez-vous déjà utilisé des "templates" en Javascript ?
  * Si oui, quelles librairies avez-vous utilisées ?
* Expliquez le phénomène de "hoisting".
* Décrivez le "event bubbling".
* Quelle est la différence entre un "attribut" et une "propriété" ?
* Pourquoi étendre des objets natifs de Javascript n'est-il pas une bonne idée ?
* Pourquoi étendre des objets natifs est-il une bonne idée ?
* Quelle est la différence entre les évènements "document load" et "document ready" ?
* Quelle est la différence entre `==` et `===` ?
* Expliquez la politique d'origine commune (same-origin policy) et ses implications en JavaScript.
* Expliquez les patterns d'héritage en JavaScript.
* Faites fonctionner ceci :
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Qu'est ce que l'opérateur ternaire ? Qu'est-ce que ce mot indique ?
* Qu'est-ce que `"use strict";`? Quels sont les avantages et désavantages de son utilisation ?
* Créez une boucle `for` qui se répète `100` fois et affichez **"fizz"** aux multiples de `3`, `"buzz"` aux multiples de `5` et **"fizzbuzz"** aux multiples de `3` et `5`.
* Pourquoi il est en général préférable de laissez le 'scope' global d'un site tel quel et ne jamais y toucher ?
* Pourquoi utiliseriez-vous quelque chose comme l'événement `load` ? Est-ce que cet évènement a des avantages ? Connaissez-vous des alternatives, et pourquoi les utiliseriez-vous ?
* Expliquez ce qu'est une application mono-page (*Single Page Application*) et comment feriez-vous pour qu'elle soit optimisée pour le référencement (*SEO*).
* Quelle est l'étendue de votre expérience avec les "Promises" et/ou leurs "polyfills" ?
* Quels sont les pour et contre de l'utilisation des "Promises" à la place des "callbacks" ?
* Quel est le résultat de :
```javascript
["1","2","3"].map(parseInt);
```

**[[⬆]](#toc)**

####<a name="network-questions">Questions sur le réseau</a>

* Pourquoi est-il préférable de disposer ses assets sur des domaines différents ?
* Faites de votre mieux pour décrire le processus à partir du moment où vous tapez l'URL d'un site internet jusqu'au moment où la page a finit de charger.
* Quelle est la différence entre "Long-Polling", "Websockets" et les événements "Server-Sent" ?
* Expliquez les entêtes de requêtes et réponses suivant :
  * Différences entre `Expires`, `Date`, `Age` et `If-Modified-`...
  * Do Not Track
  * `Cache-Control`
  * `Transfer-Encoding`
  * `ETag`
  * `X-Frame-Options`
* Quelles sont les différentes actions (verbes) HTTP ? Listez toutes celles que vous connaissez et expliquez-les.

**[[⬆]](#toc)**

####<a name='code-questions'>Questions sur la programmation :</a>

*Quelle est la valeur de `foo` ?*
```javascript
var foo = 10 + '20';
```

*Comment feriez-vous marcher ceci ?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Que retourne ce code ?*
```javascript
"je suis un bouffeur de lasagne".split("").reverse().join("");
```

*Que retourne `window.foo` ?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Qu'affichent les deux alertes ci-dessous ?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Quelle est la valeur de `foo.length` ?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

**[[⬆]](#toc)**

####<a name='fun-questions'>Questions pour le fun :</a>

* Quel est le truc le plus cool que vous ayez programmé, de quoi êtes-vous le plus fier ?
* Quelles sont les parties favorites des outils de développement que vous utilisez ?
* Avez-vous des projets chouchous ? Quel genre ?
* Quelle est votre fonctionnalité favorite dans IE ?
* Comment voulez-vous votre café ?

**[[⬆]](#toc)**

####<a name="contributors">Contributeurs :</a>

Ce document a démarré avec la collaboration de [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) et [@iansym](https://twitter.com/iansym).

Il a depuis reçu des contributions de plus de [100 développeurs](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
