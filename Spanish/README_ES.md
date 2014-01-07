#GUIA DE PREGUNTAS PARA ENTREVISTAS DE TRABAJO

@version 2.0.0

Este repositorio contiene preguntas de entrevistas a programadores front-end, que pueden ser usadas para revisar a candidatos potenciales. Bajo ningún concepto se recomienda usar todas las preguntas aquí expuestas con el mismo candidato (eso llevaría horas). Escoger algunos elementos de esta lista debería ayudarle a revisar las habilidades que requiere.

[Rebecca Murphey](http://rmurphey.com/)'s [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) es también un gran recurso a leer (en inglés) antes de ir a una entrevista.

**Nota:** Tenga en mente que muchas de estas preguntas son abiertas y pueden llevar a interesantes discusiones que le pueden decir más sobre las capacidades de la persona que una simple respuesta.

## <a name='indice'>Índice</a>

  1. [Contribuyentes originales](#contribuyentes)
  1. [Preguntas generales](#general)
  1. [Preguntas específicas de HTML](#html)
  1. [Preguntas específicas de CSS](#css)
  1. [Preguntas específicas de JavaScript](#js)
  1. [Preguntas específicas de jQuery](#jquery)
  1. [Preguntas de código](#codigojs)
  1. [Preguntas divertidas](#divertidas)

####<a name='contribuyentes'>Contribuyentes originales</a>

La mayoría de las preguntas fueron extraidas de un hilo de [oksoclap](http://oksoclap.com/) creado originalmente por [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) y ampliado por los siguientes individuos:

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
* [@darcy_clarke](http://twitter.com/darcy) - http://darcyclarke.me
* [@iansym](http://twitter.com)

**[[⬆]](#indice)**

####<a name='general'>Preguntas generales:</a>

* ¿Qué sistemas de control de versiones ha usado (Subversion, Git, etc.)?
* ¿Cuál es su ambiente de desarrollo favorito (Sistema Operativo, Editor de Texto, Navegadores, Herramientas, etc.)?
* ¿Puede describir el proceso que sigue cuando crea una página web?
* ¿Puede describir la diferencia entre "Progressive Enhancement" y "Graceful Degradation"?
	* Puntos extra si el entrevistado menciona "detección de capacidades".
* Explique qué significa "HTML Semántico".
* ¿Cuál es el navegador que utiliza principalmente para el desarrollo y qué herramientas de desarrollo usa?
* ¿Cómo optimiza los recursos de una web?
	* Se espera una lista respuestas tales como:
		* Concatenación de archivos
		* Compresión (minificación) de archivos
		* Utilizar un CDN
		* Caching
		* etc.
* ¿Por qué es mejor utilizar varios dominios para distribuir los recursos de una página web?
	* ¿Cuántos recursos se pueden descargar simultáneamente de un mismo dominio?
* Mencione tres formas para disminuir el tiempo de carga de una página (tiempo real o percibido).
* Si se ha unido a un proyecto y los desarrolladores usan tabs y usted usa espacios, ¿qué hace?
	* Sugerir que el proyecto utilice algo como EditorConfig (http://editorconfig.org)
	* Mantener la convención establecida y utilizar tabs.
	* Utilizar el comando `:retab!`
* Escriba un página con una galería sencilla.
	* Puntos extra si no usa JavaScript.
* ¿Qué herramientas usa para probar el rendimiento de su código?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* Entre otras.
* Si pudiera elegir una tecnología para dominar este año, ¿cuál sería?
* Explique la importancia de estándares y los grupos que los definen.
* ¿Sabe que es el FOUC? ¿Cómo lo evita?

**[[⬆]](#indice)**

####<a name='html'>Preguntas específicas de HTML:</a>

* ¿Qué función cumple el `doctype` y cuántos puede nombrar?
* ¿Cuál es la diferencia entre el modo convencional y el "quirks mode"?
* ¿Cuáles son las limitaciones al utilizar páginas XHTML?
	* ¿Hay algún problema al servir las páginas usando: `application/xhtml+xml`?  
* ¿Cómo programaría una página con contenido en varios lenguajes?
	* ¿Qué consideraciones se deben tener cuando se diseñan/desarrollan sitios multi-lenguajes?
* ¿Puede usar sintaxis de XHTML en HTML5?
* ¿Cómo usa XML en HTML5?
* ¿Para qué son buenos los atributos `data-`?
* ¿Cuáles son los modelos de contenido usados en HTML4? ¿Puede compararlos a los de HTML5? 
* Si consideramos HTML5 como una plataforma web abierta, ¿cuáles son las piezas del lego que constituyen HTML5?
* Describa la diferencia entre cookies, sessionStorage y localStorage.

**[[⬆]](#indice)**

####<a name='css'>Preguntas específicas de CSS:</a>

* Describa qué es un archivo "reset" y porqué es útil.
* Describa qué son los "floats" y su funcionamiento.
* ¿Cuáles son los métodos para "limpiar" (clear) sus "floats" y cuál es apropiado en el contexto dado?
* Explique ¿qué son los sprites en CSS y cómo los implementarias en una página?
* ¿Cuál es su técnica favorita para reemplazar imágenes y cuando usa cada una?
* ¿"CSS Hacks", archivos incluidos con etiquetas condicionales o algún otro metodo...?
* ¿Cuál es su enfoque al desarrollar páginas que dan soporte a navegadores con capacidades limitadas?
	* ¿Qué técnicas o procesos usa?
* ¿Cuáles son las distintas formas para esconder contenido, pero mantenerlo disponible únicamente para lectores de pantalla?
* ¿Ha usado algún sistema para cuadrículas (grids) y cuál prefiere?
* ¿Ha usado o implementado "media queries" o reglas específicas para dispositivos móviles?
* ¿Está familiarizado con aplicar estilos a SVGs?
* ¿Cómo optimiza sus páginas para la impresión?
* ¿Cuáles son algunas de las "trampas" al escribir CSS eficiente?
* ¿Ha usado algún preprocesador para CSS (SASS, Compass, Stylus, LESS)? 
	* De ser así, ¿puede mencionar qué le gusta y qué no de los que ha usado?
* ¿Cómo implementaría un diseño que usa fuentes que no son web-safe?
	* Webfonts (usando servicios para fuentes como Goodle Webfonts, Typekit, entre otros).
* ¿Puede explicar cómo determina un navegador qué elementos coinciden con un selector de CSS?

**[[⬆]](#indice)**

####<a name='js'>Preguntas específicas de JavaScript:</a>

* Explique "event delegation".
* Explique cómo funciona `this` en JavaScript.
* Explique cómo funciona la herencia de prototipos (prototypal inheritance) en JavaScript.
* ¿Cómo realiza pruebas en JavaScript?
* AMD vs. CommonJS?
* ¿Qué bibliotecas de JavaScript ha usado?
* ¿Alguna vez ha mirado el código fuente de bibliotecas/frameworks que utiliza?
* ¿Qué es un `hashtable`?
* ¿Cuál es la diferencia entre variables `undefined` y variables `undeclared`? 
* ¿Qué es un "closure" y cuando, o porqué, usaría uno?
	* ¿Cuál es su patrón favorito para crearlos? Cuadriculado (Solo aplica a las IIFEs)
* ¿Puede hablar de un uso típico para una función anónima?
* ¿Puede explicar el Patrón Módulo en JavaScript y cuándo lo usaría?
	* Puntos extra por mencionar un namespace no contaminado.
	* ¿Qué pasa si sus módulos no tienen un namespace?	
* ¿Cómo organiza su código, patrón módulo, herencia clásica?
* ¿Cuál es la diferencia entre objetos huésped (host objects) y objetos nativos?
* ¿Cuál es la diferencia entre:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* ¿Cuál es la diferencia entre `.call` y `.apply`? 
* ¿Puede explicar el uso de `Function.prototype.bind`? 
* ¿Cuándo optimiza su codigo?
* ¿Puede explicar cómo funciona la herencia en JavaScript?
* ¿Cuándo usarías `document.write()`?
	* La mayoría de anuncios de todavía utilizan esta técnica, aunque no es recomendada.
* ¿Cuál es la diferencia entre detección de capacidades, inferencia de capacidades y usar la cadena del user agent.
* Explique AJAX con tanto detalle como pueda.
* Explique cómo funciona JSONP (y cómo no es AJAX realmente)
* ¿Ha utilizado alguna vez templates en JavaScript?
	* De ser asi, ¿qué bibliotecas ha usado (Mustache.js, Handlebars, entre otros)?
* ¿Puede explicar en que consiste el "hoisting"?
* ¿Puede hablar sobre "event bubbling"?
* ¿Cuál es la diferencia entre un "atributo" y una "propiedad"?
* ¿Por qué es una mala idea extender objetos nativos de JavaScript?
* ¿Por qué es una buena idea extender objetos nativos de JavaScript?
* ¿Cuál es la diferencia entre el evento "document load" y "document ready"?
* ¿Cuál es la diferencia entre `==` y `===`? 
* Si tiene que obtener un parametro de la URL, ¿cómo lo harías?
* Explique la política de mismo origen (same-origin policy) y sus repercusiones en JavaScript.
* ¿Puede describir los patrones de herencia en JavaScript?
* Haga que este código funcione:
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* ¿Puede describir una estrategia para memoización (*memoization*, evitar repetir cálculos) en JavaScript?
* ¿Por qué reciben el nombre de sentencias ternarias? ¿Qué significa la palabra "ternaria"?  
* ¿Qué es el `arity` de una función?
* ¿Qué es `"use strict";`? ¿Cuáles son las ventajas y desventajas de usarlo?

**[[⬆]](#indice)**

####<a name='jquery'>Preguntas específicas de jQuery:</a>

* Explique el "encadenamiento" (chaining).
* Explique las "diferidas" (deferreds).
* ¿Cuáles son algunas optimizaciones que se pueden implementar usando jQuery?
* ¿Qué función cumple el método `.end()`? 
* ¿Cómo y por qué, aplicaría "namespacing" a un "event handler"?
* Nombre cuatro diferentes valores que se pueden pasar como parámetro al metodo jQuery.
	* Un selector (string), HTML (string), Callback (function), HTMLElement, objeto, matriz, matriz de elementos, objeto jQuery, entre otros.
* ¿Qué es la "cola de efectos" (fx queue)?
* ¿Cuál es la diferencia entre `.get()`, `[]` y `.eq()`? 
* ¿Cuál es la diferencia entre `.bind()`, `.live()` y `.delegate()`? 
* ¿Cuál es la diferencia entre `$` y `$.fn`? O simplemente, ¿qué es `$.fn`?
* Optimize este selector:
```javascript
$(".foo div#bar:eq(0)")
```
* ¿Cuál es la diferencia entre 'delegate()' y 'live()'? 

**[[⬆]](#indice)**

####<a name='codigojs'>Preguntas de código:</a>

```javascript
~~3.14
```
Pregunta: ¿Cuál es el retorno de la sentencia anterior?
**Respuesta: 3** 

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
Pregunta: ¿Cuál es el retorno de la sentencia anterior?
**Respuesta: "goh angasal a m'i"** 

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Preguntan: ¿Cuál es el valor de window.foo?
**Respuesta: "bar"** 
Únicamente si window.foo tenía un valor falso, de cualquier otra forma retendrá su valor.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Pregunta: ¿Cuál es el resultado de los dos alerts anteriores?
**Respuesta: "Hello World" y ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Pregunta: ¿Cuál es el valor de foo.length? 
**Respuesta: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Pregunta: ¿Cuál es el valor de foo.length? 
**Respuesta: `undefined`

**[[⬆]](#indice)**

####<a name='divertidas'>Preguntas divertidas:</a>

* ¿Qué es lo más cool que ha programado y qué es lo que más le enorgullece de ello?
* ¿Sabe cuál es la "gang sign" de HTML5?
* ¿Está ahora o ha estado alguna vez en un bote?
* ¿Cuáles son sus partes favoritas de las herramientas de desarrollo que usa?
* ¿Tiene algún proyecto personal? ¿De qué tipo?
* Explique el significado de "cursificar" (cornify).
* Tome un papel y escriba las letras A B C D E verticalmente, ahora póngalas en órden descendiente sin escribir una sola línea de código.
	* Espere a ver si giran el papel.
* ¿Pirata o Ninja?
	* Puntos extra si es una combinación y dio una buena razón, dos puntos extra por monos zombies piratas ninjas.
* ¿Si no estuviera en Desarollo Web, en que estaría trabajando?
* ¿En qué lugar del mundo está Carmen Sandiego?
	* Consejo: no hay respuesta correcta.
* ¿Cúal es su funcionalidad favorita de Internet Explorer?
* Complete esta oracion: Brendan Eich y Doug Crockford son los __________ del JavaScript.
* jQuery: ¿Una buena biblioteca o la mejor biblioteca? Explique porqué.
* http://www.w3schools.com/ o http://w3fools.com/

**[[⬆]](#indice)**
