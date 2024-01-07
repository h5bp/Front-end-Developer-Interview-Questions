---
title: Questionnaire de recrutement pour développeur front-end
layout: layouts/page.njk
permalink: /translations/french/index.html
lang: fr
---

# Questionnaire de recrutement pour développeur front-end

Cette liste contient un certain nombre de questions que vous pouvez poser lors d'un entretien d'embauche pour un développeur Front-End. Il n'est en aucun cas recommandé de poser toutes ces questions à un candidat (ça prendrait des heures). Choisissez en quelques-unes liées au profil que vous rechercher afin de vérifier les compétences dont vous avez besoin.

**Note:** Gardez en tête que la plupart de ces questions sont ouvertes et qu'elles peuvent mener à des discussions intéressantes, qui vous en apprendront plus sur les capacités de la personne.

## <a name='toc'>Table des matières</a>

  1. [Questions générales](#general-questions)
  1. [Questions sur HTML](#html-questions)
  1. [Questions sur CSS](#css-questions)
  1. [Questions sur JS](#js-questions)
  1. [Questions sur la programmation](#code-questions)
  1. [Questions sur les tests](#testing-questions)
  1. [Questions sur la performance](#performance-questions)
  1. [Questions sur réseau](#network-questions)
  1. [Questions pour le fun](#fun-questions)

#### S'impliquer :

  1. [Contributeurs](#contributors)
  1. [Comment contribuer (en)](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [Licence](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

**[[⬆]](#toc)**

#### <a name='general-questions'>Questions générales:</a>

* Qu'avez-vous appris cette semaine ?
* Qu'est ce qui vous motive ou vous intéresse dans le développement ?
* Quel a été le dernier défi technique que vous avez expérimenté et comment l'avez-vous résolu ?
* Lors de la création ou la maintenance d'un site web, pouvez-vous expliquer certaines techniques que vous avez utilisées pour augmenter les performances ?
* Pouvez-vous décrire quelques bonnes pratiques ou techniques de référencement que vous avez utilisées récemment ?
* Pouvez-vous expliquer des techniques courantes ou des problèmes récents résolus en ce qui concerne la sécurité côté Front-end ?
* Quelles sont les actions que vous avez personellement prises sur des projets récents pour augmenter la maintenabilité de votre code?
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
* Si vous pouviez maîtriser parfaitement une technologie cette année, laquelle serait-elle ?
* Expliquez l'importance des standards et des organisations les édictant.
* Qu'est-ce que le FOUC (*flash of unstyled content*) et comment l'évitez-vous ?
* Expliquez ce que sont ARIA et les lecteurs d'écrans, et comment rendre votre site internet accessible
* Expliquez quelques-uns des pour et contre des animations CSS par rapport aux animations JavaScript
* Que signifie CORS et quel problème aborde-t-il ?
* Comment avez-vous géré un désaccord avec votre patron ou votre collaborateur ?
* Quelles ressources utilisez-vous pour en savoir plus sur les dernières nouveautés en matière de développement et de conception front-end ?
* Quelles sont les compétences nécessaires pour être un bon développeur front-end ?
* Dans quel rôle vous voyez-vous ?
* Expliquez la différence entre les cookies, sessions storage et local storage ?
* Pouvez-vous expliquer ce qu'il se passe lorsque vous saisissez une URL dans le navigateur ?
* Décrivez la différence entre SSR (*server side rendering*) et CSR (*certificate signing request*). Discutez des avantages et des inconvénients.
  * Connaissez-vous le rendu statique ?
  * Réhydratation ?

**[[⬆]](#toc)**

#### <a name='html-questions'>Questions sur HTML :</a>

* Que fait un `doctype` ?
* Comment servez-vous une page avec du contenu multilingue ?
* À quoi devez-vous faire attention quand vous *designez* ou développez des pages pour des sites multilingues ?
* À quoi les attributs `data-` servent-ils ?
* Si l'on considère que HTML5 est une API Web ouverte, quelles sont les briques de base de HTML5 ?
* Décrivez la différence entre `cookie`, `sessionStorage`, et `localStorage`.
* Décrivez la différence entre `<script>`, `<script async>` et `<script defer>`.
* Pourquoi est-ce généralement une bonne idée de positionner les `<link>` à l'intérieur de `<head></head>` et les `<script>` juste avant `</body>`? Connaissez-vous des exceptions ?
* Qu'est-ce que le rendu progressif ?
* Pourquoi utiliseriez-vous l'attribut `srcset` dans une balise image ? Expliquez le processus utilisé par le navigateur lors de l'évaluation du contenu de cet attribut.
* Avez-vous déjà utilisé différents langages de création de modèles (*templating languages*) HTML ?
* Quelles est la différence entre `canvas` et `svg` ?
* Que sont les éléments vides en HTML ?

**[[⬆]](#toc)**

#### <a name='css-questions'>Questions sur CSS :</a>

* Quelle est la spécificité du sélecteur CSS et comment ça marche ?
* Quelle est la différence entre un "reset" et une "normalisation" en CSS ? Lequel choisiriez-vous et pourquoi ?
* Décrivez le positionnement flottant et son fonctionnement.
* Décrivez le `z-index` et comment le contexte d'empilement se forme ?
* Décrivez BFC (*Block Formatting Context*) et son fonctionnement.
* Quelles sont les différentes méthodes de "clearing" des éléments flottants, et laquelle est appropriée pour chaque contexte ?
* Quelle approche choisiriez-vous pour réparer des bugs au niveau du CSS spécifique à certains navigateurs ?
* Comment servez-vous vos pages pour les navigateurs aux fonctionnalités réduites ?
  * Quelles techniques/procédés utilisez-vous ?
* Quelles sont les différentes manières de masquer du contenu (en le laissant disponible pour les lecteurs d'écran) ?
* Avez-vous déjà utilisé un système de grille, et si oui, lequel préférez-vous ?
* Avez-vous déjà implémenté des "media queries", ou des mises en page/CSS spécifiques aux mobiles ?
* Avez-vous déjà touché au style d'un SVG ?
* Pouvez-vous donner un exemple de propriété `@media` autre que screen ?
* Quelques astuces pour écrire du CSS efficacement ?
* Quels sont les avantages/désavantages de l'utilisation des préprocesseurs CSS ? (SASS, Compass, Stylus, LESS)
  * Si vous avez un avis, décrivez ce que vous aimez et n'aimez pas des préprocesseurs que vous avez utilisé.
* Comment implémenteriez-vous un design qui utilise des polices de caractères non standards ?
* Expliquez comment un navigateur détermine quels éléments correspondent à un sélecteur CSS.
* Décrivez les `pseudo-éléments` et discutez de leur utilité.
* Expliquez ce que vous avez compris du modèle de boite (box model) et comment implémenteriez vous une mise en page avec des modèles de boite différents.
* Qu'est-ce que ```* { box-sizing: border-box; }``` fait ? Quels sont ses désavantages ?
* Qu'est-ce que la propriété CSS `display` et pouvez-vous donner quelques exemples de son utilisation ?
* Quelle est la différence entre `inline` et `inline-block` ?
* Quelle est la différence entre les sélecteurs `nth-of-type()` et `nth-child()` ?
* Quelle est la différence entre les éléments ayant `relative`, `fixed`, `absolute` et `static` comme `position` ?
* Quels frameworks CSS avez-vous utilisé localement, ou en production ? Comment feriez-vous pour les changer/améliorer ?
* Avez-vous utilisé CSS Grid ?
* Pouvez-vous expliquer la différence entre coder un site Web pour qu'il soit *responsive* versus utiliser une stratégie *mobile-first* ?
* Avez-vous déjà travaillé avec des images "retina" ? Si oui, à quel moment et quelles techniques avez-vous utilisées ?
* Y a-t-il des raisons particulières pour lesquelles vous voudriez utilser `translate()` plutôt que `position: absolute` ou vice-versa ? Et pourquoi ?
* En quoi la propriété CSS `clearfix` est-elle utile ?
* Pouvez-vous expliquer la différence entre `px`, `em` et `rem` en ce qui concerne la taille des polices ?
* Pouvez-vous donner un exemple de pseudo-classe ? Pouvez-vous fournir un exemple de cas d'utilisation pour une pseudo-classe ?
* Quelle est la différence entre un élément de niveau bloc et un élément en ligne. Pouvez-vous fournir des exemples de chaque type d’élément ?
* Quelle est la différence entre CSS Grid et Flexbox ? Quand utiliseriez-vous l’un plutôt que l’autre ?
* Quelle est la différence entre les mises en page *fixed*, *fluid* and *responsive* ?

**[[⬆]](#toc)**

#### <a name='js-questions'>Questions sur JS :</a>

* Expliquez la délégation d'évènement.
* Expliquez comment fonctionne `this` en Javascript.
 * Pouvez-vous donner un exemple de l'une des façons dont l'utilisation de `this` a changé dans ES6 ?
* Expliquez comment fonctionne l'héritage de prototype.
* Quelle est la différence entre une variable `null`, `undefined` et non déclarée ?
  * Comment feriez-vous pour vérifier chacun de ces états ?
* Qu'est-ce qu'une "closure" et comment/pourquoi en utiliser une ?
* Quelles constructions de langage utilisez-vous pour parcourir les propriétés des objets et les éléments du tableau ?
* Pouvez-vous décrire la principale difference entre la boucle `forEach` et la boucle `.map()` et pourquoi choisiriez-vous l'une et pas l'autre ?
* Quelle est l'utilisation typique d'une fonction anonyme ?
* Quelle est la différence entre des objets hôtes et des objets natifs ?
* Différence entre: `function Person() {}`, `var person = Person()` et `var person = new Person()` ?
* Expliquez les différences dans l'usage de `foo` entre `foo() {}` et `var foo = function() {}`
* Pouvez-vous expliquer ce que font `Function.call` et `Function.apply` ? Quelle est la différence notable entre les deux ?
* Expliquez `Function.prototype.bind`.
* Quelle est la différence entre détection de "feature", inférence de "feature" et l'utilisation du "User-Agent" ?
* Expliquez le phénomène de "hoisting".
* Qu’est-ce que la coercition de type ? Quels sont les pièges courants liés au recours à la coercition de type dans le code JavaScript ?
* Décrivez le "event bubbling".
* Décrivez le "event capturing".
* Quelle est la différence entre un "attribut" et une "propriété" ?
* Quels sont les avantages et les inconvénients de l’extension des objets JavaScript intégrés ?
* Quelle est la différence entre `==` et `===` ?
* Expliquez la politique d'origine commune (same-origin policy) et ses implications en JavaScript.
* Qu'est ce que l'opérateur ternaire ? Qu'est-ce que ce mot indique ?
* Qu'est-ce que `"use strict";`? Quels sont les avantages et désavantages de son utilisation ?
* Quels sont les avantages/inconvénients de l'écriture de code JavaScript dans un language qui compile en JavaScript ?
* Quels outils et techniques utilisez-vous pour le "debugging" du code javascript ?
* Expliquez la difference entre les objets muables et les objets immuables.
  * Donnez un exemple d'objet immuable en javascript.
  * Quels sont les avantages et inconvénients de l'immuabilité ?
  * Comment pouvez-vous réaliser l'immuabilité dans votre code ?
* Expliquez la différence entre les fonctions synchrones et asynchrones.
* Qu'est ce qu'une boucle d'événement ?
  * Quelle est la différence entre la pile d'appels et la file d'attente de tâches?
* Quelles sont les différences entre les variables crées en utilisant `let`, `var` ou `const` ?
* Quelles sont les différences entre les constructeurs de classe ES6 et de fonctions ES5 ?
* Pouvez-vous proposer un cas d'utilisation pour la nouvelle syntaxe de fonction arrow `=>` ? En quoi cette nouvelle syntaxe diffère-t-elle des autres fonctions ?
* Quel avantage y a-t-il à utiliser la syntaxe des flèches pour une méthode dans un constructeur ?
* Quelle est la définition d’une fonction d’ordre supérieur ?
* Pouvez-vous donner un exemple de déstructuration d'un objet ou d'un tableau ?
* Pouvez-vous donner un exemple de génération d'une chaîne avec des littéraux de modèle ES6 (*ES6 Template Literals*) ?
* Pouvez-vous donner un exemple de fonction "curry" et pourquoi cette syntaxe offre un avantage ?
* Quels sont les avantages de l’utilisation de la syntaxe spread et en quoi est-elle différente de la syntaxe rest ?
* Comment partager du code entre des fichiers ?
* Pourquoi voudriez-vous créer des membres de classe statiques ?
* Quelle est la différence entre les boucles `while` et `do-while` en JavaScript ?
* Qu'est-ce qu'une "Promise" ? Où et comment utiliseriez-vous la "Promise" ?
* Discutez de la manière dont vous pouvez utiliser les principes de la programmation orientée objet lors du codage avec JavaScript.

**[[⬆]](#toc)**

#### <a name='code-questions'>Questions sur la programmation :</a>


*Comment feriez-vous marcher ceci ?*
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

*Créez une boucle `for` qui se répète `100` fois et affichez: **"fizz"** aux multiples de `3`, `"buzz"` aux multiples de `5` et **"fizzbuzz"** aux multiples de `3` et `5`.*

*Quelle est la valeur retournée de chaque console.log ?*
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```

*Write an immediately invoked function expression (IIFE)*

**[[⬆]](#toc)**

#### <a name="testing-questions">Questions sur les Tests</a>

* Quels sont les avantages/inconvénients de tester votre code ?
* Quels outils utiliseriez-vous pour tester les fonctionnalités de votre code.
* Quel est la difference entre un test unitaire et un test fonctionnel/d'intégration ?
* Quel est le but d'un outil de lissage de style de code ?
* Quelles sont les bonnes pratiques en matière de tests ?

**[[⬆]](#toc)**

#### <a name="performance-questions">Questions sur la performance</a>

* Quels outils utiliseriez-vous pour trouver une erreur de performance dans votre code ?
* Comment pouvez-vous améliorer les performances de défilement de votre site Web ?
* Expliquez la différence entre la mise en page, la peinture et la composition.

**[[⬆]](#toc)**

#### <a name="network-questions">Questions sur le réseau</a>

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
* Expliquez ce qu'est le pre-fetching de domaine et en quoi cela aide en matière de performance ?
* Qu'est-ce que le CDN et quel est l'avantage d'en utiliser un ?

**[[⬆]](#toc)**

#### <a name='fun-questions'>Questions pour le fun :</a>

* Quel est le truc le plus cool que vous ayez programmé, de quoi êtes-vous le plus fier ?
* Quelles sont les parties favorites des outils de développement que vous utilisez ?
* Qui vous inspire dans la communauté front-end ?
* Avez-vous des projets chouchous ? Quel genre ?

**[[⬆]](#toc)**

#### <a name="contributors">Contributeurs :</a>

Ce document a démarré avec la collaboration de [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) et [@iansym](https://twitter.com/iansym).

Il a depuis reçu des contributions de plus de [100 développeurs](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
