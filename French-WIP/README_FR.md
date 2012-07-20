# QUESTIONNAIRE DE RECRUTEMENT

@version 1.0
 
## Contributors

@bentruyman (http://bentruyman.com/), @roger_raymond (http://twitter.com/iansym), @ajpiano (http://ajpiano.com/), @paul_irish (http://paulirish.com/), @SlexAxton (http://alexsexton.com/), @boazsender (http://boazsender.com/), @miketaylr (http://miketaylr.com/), @vladikoff (http://vladfilippov.com/), @gf3 (http://gf3.ca/), @jon_neal (http://twitter.com/jon_neal), @wookiehangover (http://wookiehangover.com/) and @darcy_clarke (http://darcyclarke.me)

## General Questions:

* Êtes-vous sur Twitter ? 
	* Si oui, qui suivez-vous ?
* Êtes-vous sur GitHub ?  
	* Si oui, donnez quelques exemples de dépôt que vous suivez.
* A quels blogs êtes vous abonné ?  
* Quel logiciel de gestion de versions avez-vous déjà utilisé ? (Git, SVN etc.)
* Quel est votre environnement de développement préféré ? (OS, Editor, Browsers, Tools etc.)
* Pouvez-vous décrire votre workflow lorsque vous créez une page web ? 
* Pouvez-vous décrire la différence entre amélioration progressive et dégradation progressive ? 
	* Un point bonus si vous décrivez des méthodes de détection
* Expliquez ce que le terme "HTML sémantique" signifie. 
* Quel naviguateur et outils de débogage web utilisez-vous ?
* Comment optimisez vous les performances de vos page web (assets/resources) ?
	* Énumérez quelques solutions comme :
		* La concaténation des fichiers
		* La minification des fichiers
		* L'utilisation d'un Content Delivery Network (CDN)
		* La mise en cache
		* etc…
* Pourquoi est-il préférable de disposer ses assets sur des domaines différents ? 
	* Combien de ressources différentes un navigateur peut télécharger à partir d'un même domaine à un instant T ? 
* Donnez 3 façons qui permettent de réduire le temps de chargement d'une page. (perçu ou réel) 
* Si vous démarrez sur un projet existant, que votre prédécesseur a utilisé des tabulations pour indenter son code et que vous utilisez des espaces, que faites-vous ?
	* Vous Proposez d'utiliser quelque chose comme EditorConfig (http://editorconfig.org)
	* Vous Restez fidèle aux conventions
	* `issue :retab! command`
* Développez un simple slideshow
	* Un point bonus si vous le faites sans JS  
* Quel outils utilisez vous pour tester la performance de votre code ?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* etc…
* Si vous pouviez maitriser parfaitement une technologie cette année, laquelle serait-ce ?
* Expliquez l'importance des standards et des organisations les édictant.

## Questions spécifiques à HTML :

* Qu'est-ce qu'un `doctype` fait, et combien pouvez-vous en nommer ?
* Quelle est la différence entre les modes `standard` et `quirks`
* Quelles sont les limitations des pages XHTML ?
	* Y a t'il des problèmes à envoyer des pages avec le content-type `application/xhtml+xml` ?
* Comment servez vous une page avec du contenu multilingue ?
	* À quoi devez-vous faire attention quand vous designez ou développez des pages pour des sites multilingues ?
* Pouvez vous utliser une syntaxe XHTML en HTML5 ?
* Comment utilisez vous du XML en HTML5 ?
* À quoi servent les `data-` attributes ?
* Que sont les modèles de contenus en HTML4, et diffèrent-ils de HTML5 ?
* Si l'on considère que HTML5 est une plateforme web ouverte, quels sont les briques de base de HTML5 ?
* Décrivez la différence entre cookies, sessionStorage, et localStorage.

## Questions spécifiques à Javascript :
* Quelles sont les librairies Javascript que vous avez utilisé ?
* En quoi Javascript est-il différent de Java ?
* Qu'est-ce qu'une hashTable ?
* Que sont les variables `undefined` et `undeclared` ?
* Qu'est-ce qu'une closure, et pourquoi / comment en utiliseriez vous une ?
	* Votre patten favori pour les créer ? (seulement pour les IIFEs, fonctions-expressions évoquées immédiatement)
* Quel est un cas d'utilisation typique pour une fonction anonyme ?
* Expliquer les pattern Javascript de "Module", et quand vous l'utiliseriez.
	* Un point bonus si vous parlez de namespacing
	* Que se passe t'il si vos modules ne sont pas namespacés ?
* Comment organisez vous votre code (pattern modulaire, héritage classique ?)
* Quelle est la différence entre objets hôtes et objets natifs ?
* Différence entre : 
```javascript
function Person(){}
var person = Person() // et
var person = new Person()
```
* Quelle est la différence entre `.call` et `.apply` ?
* Expliquez `Function.prototype.bind` ? 
* Quand optimisez-vous votre code ?
* Pouvez vous expliquer comment fonctionne l'héritage en Javascript ?
* Quand utiliseriez-vous `document.write()` ?
  * La plupart des pubs utilisent encore `document.write()` même si son utilisation est découragée.
* Quelle est la différence entre détection de feature, inférence de feature, et l'utilisation de l'User Agent ?
* Expliquez un call AJAX dans le plus grand détail possible
* Expliquez comment JSONP fonctionne (et en quoi ca n'est pas réellement de l'AJAX)
* Avez vous déja utilisé fait du templating en Javascript ?
	* Si oui, quelles librairies avez vous utilisé (Mustache.js, Handlebars etc…)
* Expliquez "hoisiting".
* Quest-ce que le FOUC, comment l'évitez vous ?
* Décrivez le bubbling d'évênement.
* Quelle est la différence entre un "attribut" et une "propriété"
* Pourquoi étendre les objets natifs Javascript n'est pas une bonne idée ?
* Pourquoi étendre les objets natifs est une bonne idée ?
* Quelle est la différence entre les évenements `load` et `ready` du document?
* Quelle est la différence entre `==` et `===` ?
* Expliquez comment vous récupéreriez un paramètre de querystring de l'URL du browser.
* Expliquez la politique d'origine commune et ses implication en Javascript.
* Expliquez la délégation d'évênement.
* Expliquez les patterns d'héritage en Javascript.
* Faites fonctionner ceci : 
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Décrivez une stratégie de mémoization (pour éviter la répétition des calculs) en Javascript.
* Qu'est-que qu'une instruction 'Ternaire', et qu'indique le mot 'Ternaire'
* Qu'est-ce que l'arité d'une fonction ?

## Exemples de code JS

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
Question: Que se passe t'il à l'éxécution de ce code ?
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


## Questions spécifiques à jQuery : 

* Expliquez le chainage
* Expliquez 'deferred'
* Décrivez des optimisations spécifiques à jQuery que vous pouvez implémenter.
* Que fait `.end()` ?
* Pourquoi et comment restreindriez-vous un evenement bindé à un un namespace ?
* Nommez 4 valeurs différentes que vous pouvez passer à la méthode jQuery.
	* Sélecteur (string), HTML (string), Callback (function), HTMLElement, objet, tableau, tableau d'éléments, objet jQuery, etc…
* Qu'est-ce que la queue d'effets (fx queue) ?
* Quelle est la différence entre `.get()`, `[]`, et `.eq()` ?
* Quelle est la différence entre `.bind()`, `.live()`, et `.delegate()`? 
* Quelle est la différence entre `$` et `$.fn`? Ou bien seulement : qu'est-ce que `$.fn`.
* Optimisez ce sélecteur : 
```javascript
$(".foo div#bar:eq(0)")
```

## Questions spécifiques CSS : 

* Décrivez ce que fait un fichier CSS Reset, et pourquoi il est utile.
* Décrivez les Floats, et comment ils fonctionnent.
* Quelles sont les différentes méthodes de clearing des floats, et laquelle est appropriée pour chaque contexte ?
* Expliquez les sprites CSS, et comment vous les implémenteriez sur une page ou un site.
* Quelles sont vos techniques favorites de remplacement d'images, et comment les utilisez vous ?
* hacks de propriétés CSS, fichiers .css inclus avec des commentaires conditionnels, ou autre ?
* Comment servez vous vos pages pour les browsers aux fonctionnalités réduites ?
	* Quelles techniques / process utilisez vous ?
* Quelles sont les différentes manières de masquer du contenu (en le laissant disponible pour les lecteurs d'écran) ?
* Avez vous déja utilisé un grid system, et si oui, lequel préférez-vous ?
* Avez vous déja implémenté des media queries, ou des layouts/CSS spécifiques aux mobiles ?
* Déja touché au styling de SVG ?
* Comment optimisez vous vos pages pour le print ?
* Quelques trucs pour écrire du CSS efficace ?
* Utilisez vous des préprocesseurs CSS ? (SASS, Compass, Stylus, LESS) 
	* Si oui, décrivez ce que vous aimez et n'aimez pas des préprocesseurs que vous avez utilisé.
* Comment implémenteriez-vous une créa web qui utilise des typos non standard ?
	* Webfonts (services comme: Google Webfonts, Typekit etc.)
* Expliquez comment un browser détermine ce qui matche un sélecteur CSS.



## Questions optionnelles, pour le geste.

* Quel est le tuc le plus cool que vous ayez jamais codé, de quoi êtes vous le plus fier ?
* Connaissez vous le signe de gang du HTML5 ?
* Êtes vous ou avez vous déja été sur un bateau.
* Quelles sont vos parties favorites des outils de développement que vous utilisez.
* Avez vous des projets chouchous ? Quel genre ?
* Expliquez 'cornify'
* Sur un bout de papier, écrivez les lettres A B C D E verticalement.
  Maintenant mettez les en ordre descendant sans écrire une ligne de code.
	* Regardez si ils retournent le bout de papier.
* Pirate ou Ninja.
	* Bonus si c'est une doublette, et si il y a une bonne raison. (+2 pour des Zombies Singes Ninja Pirates)
* Si c'était pas du Dev, vous feriez quoi ?
* Ou est Carmen San Diego ?
	* Indice : La réponse est toujours fausse.
* Quelle est votre feature favorite de IE
* Complétez cette phrase Brendan Eich et Doug Crockford sont les __________ de javascript.
* jQuery : superbe librairie, ou la meilleure ? Discutez.
