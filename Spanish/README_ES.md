#GUIA DE PREGUNTAS PARA ENTREVISTAS DE TRABAJO

@versión 1.0

## Contribuyentes

@bentruyman (http://bentruyman.com/), @roger_raymond (http://twitter.com/iansym), @ajpiano (http://ajpiano.com/), @paul_irish (http://paulirish.com/), @SlexAxton (http://alexsexton.com/), @boazsender (http://boazsender.com/), @miketaylr (http://miketaylr.com/), @vladikoff (http://vladfilippov.com/), @gf3 (http://gf3.ca/), @jon_neal (http://twitter.com/jon_neal), @wookiehangover (http://wookiehangover.com/) and @darcy_clarke (http://darcyclarke.me)

## Preguntas generales:

* ¿Tenés cuenta en Twitter? 
	* De tenerla, ¿a quién seguís en Twitter?
* ¿Tenés cuenta en Github?
	* De tenerla, ¿podés mencionar algunos repositorios que seguís?
* ¿Cuáles blogs seguís?
* ¿Cuáles sistemas de control de versiones has usado (Subversion, Git, entre otros)?
* ¿Cuál es tu ambiente de desarrollo favorito (Sistema Operativo, Editor de Texto, Navegadores, Herramientas, entre otros)?
* ¿Podés describir el proceso que seguís cuando creás una página web?
* ¿Podés describir la diferencia entre "Progressive Enhancement" y "Graceful Degradation"?
	* Puntos extra si el entrevistado menciona "detección de capacidades".
* Explicá que significa "HTML Semántico".
* ¿Cuál es tu navegador primario y cuáles herramientas de desarrollo usás?
* ¿Cómo optimizás los recursos de un website?
	* Se espera una lista respuestas tales como:
		* Concatenación de archivos
		* Compresión (minificación) de archivos
		* Utilizar un CDN
		* Caching
		* Entre otros
* ¿Porqué es mejor utilizar varios dominios para distribuir los recursos de una página web?
	* ¿Cuántos recursos se pueden descargar simultáneamente de un mismo dominio?
* Mencioná tres formas para disminuir el tiempo de carga de una página (tiempo real o percibido).
* Imaginá que recién iniciaste en un proyecto, los desarrolladores usan tabs y vos usás espacios, ¿que hacés?
	* Sugerir que el proyecto utilice algo como EditorConfig (http://editorconfig.org)
	* Mantener la convención establecida y utilizar tabs.
	* Utilizar el comando `:retab!`
* Escribí un página con una galería sencilla.
	* Puntos extra si no utiliza Javascript.
* ¿Qué herramientas usás para probar el performance de tu código?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* Entre otras.
* Si pudieras elegir una tecnología para dominar este año, ¿cuál sería?
* Explicá la importancia de estándares y los grupos que los definen.

## Preguntas específicas de HTML:

* ¿Qué función cumple el `doctype` y cuántos podes nombrar?
* ¿Cuál es la diferencia entre el modo convencional y el "quirks mode"?
* ¿Cuáles son las limitaciones al utilizar páginas XHTML?
	* ¿Hay algún problema al servir las páginas usando: `application/xhtml+xml`?  
* ¿Cómo programarías una página con contenido en varios lenguajes?
	* ¿Qué consideraciones se deben tener cuando se diseñan/desarrollan sitios multi-lenguajes?
* ¿Podés usar sintaxis de XHTML en HTML5?
* ¿Cómo usás XML en HTML5?
* ¿Para qué se utilizan los atributos `data-`?
* ¿Cuáles son los modelos de contenido usados en HTML4? ¿Podés compararlos a los de HTML5? 
* Si consideramos HTML5 como una plataforma web abierta, ¿cuáles son las piezas del lego que constituyen HTML5?
* Describí la diferencia entre cookies, sessionStorage y localStorage.

## Preguntas específicas de Javascript:

* ¿Qué librerías de Javascript has usado?
* ¿En qué se diferencia Javascript de Java?
* ¿Qué es un `hashtable`?
* ¿Cuál es la diferencia entre variables `undefined` y variables `undeclared`? 
* ¿Qué es un "closure" y cuando, o porqué, usarías uno?
	* ¿Cuál es tu patrón favorito para crearlos? Cuadriculado (Solo aplica a las IIFEs)
* ¿Podés hablar de un uso típico para una función anónima?
* ¿Podés explicar el Patrón Módulo en Javascript y cuándo lo usarías?
	* Puntos extra por mencionar un namespace no contaminado.
	* ¿Qué pasa si tus módulos no tienen un namespace?
* ¿Cómo organizás tu código, patrón módulo, herencia clásica?
* ¿Cuál es la diferencia entre objetos huésped (host objects) y objetos nativos?
* ¿Cuál es la diferencia entre:
```javascript
function Person(){} var person = Person() var person = new Person()
```
* ¿Cuál es la diferencia entre `.call` y `.apply`? 
* ¿Podés explicar el uso de `Function.prototype.bind`? 
* ¿Cuándo tomas la decisión de optimizar tu codigo?
* ¿Podés explicar cómo funciona la herencia en Javascript?
* ¿Cuándo usarías `document.write()`?
	* La mayoría de anuncios de "third party vendors" todavía utilizan esta técnica, aunque no es recomendada.
* ¿Cuál es la diferencia entre detección de capacidades, inferencia de capacidades y usar el string del user agent.
* Explique AJAX con tanto detalle como sea posible.
* Explique ¿cómo funciona JSONP y cómo es distinto a AJAX?
* ¿Has utilizado alguna vez templates en Javascript?
	* De ser asi, ¿cuáles librerías has usado (Mustache.js, Handlebars, entre otros)?
* ¿Podés explicar en que consiste el "hoisting"?
* ¿Sabés que es el FOUC? Y ¿cómo evitarlo?
* ¿Podés hablar sobre "event bubbling"?
* ¿Cuál es la diferencia entre un "atributo" y una "propiedad"?
* ¿Porqué es una mala idea extender objetos nativos de Javascript?
* ¿Porqué es una buena idea extender objetos nativos de Javascript?
* ¿Cuál es la diferencia entre el evento "document load" y "document ready"?
* ¿Cuál es la diferencia entre `==` y `===`? 
* Si tenés que obtener un parametro del URL, ¿cómo lo harías?
* Explicá la política de mismo origen (same-origin policy) y sus repercusiones en Javascript.
* Explicá "event delegation".
* ¿Podés describir los patrones de herencia en Javascript?
* Hacé que este código funcione:
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* ¿Podés describir una estrategia para memoización (*memoization*, evitar repetir cálculos) en Javascript?
* ¿Porqué reciben el nombre de sentencias ternarias ¿Qué significa la palabra "ternaria"?  
* ¿Qué es el `arity` de una función?

## Ejemplos de código de Javascript:

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
Únicamente si window.foo tenía un valor falsey, de cualquier otra forma retendrá su valor.

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


## Preguntas específicas de jQuery:

* Explicá el "encadenamiento" (chaining).
* Explicá las "diferidas" (deferreds).
* ¿Cuáles son algunas optimizaciones que se pueden implementar usando jQuery?
* ¿Qué función cumple el método `.end()`? 
* ¿Cómo y porqué, aplicarías "namespacing" a un "event handler"?
* Nombre cuatro diferentes valores que se pueden pasar como parámetro al metodo jQuery.
	* Un selector (string), HTML (string), Callback (function), HTMLElement, objeto, arreglo, arreglo de elementos, objeto jQuery, entre otros.
* ¿Qué es la "cola de efectos" (fx queue)?
* ¿Cuál es la diferencia entre `.get()`, `[]` y `.eq()`? 
* ¿Cuál es la diferencia entre `.bind()`, `.live()` y `.delegate()`? 
* ¿Cuál es la diferencia entre `$` y `$.fn`? O simplemente, ¿qué es `$.fn`?
* Optimizá este selector:
```javascript
$(".foo div#bar:eq(0)")
```

## Preguntas específicas de CSS:

* Describí ¿qué es un archivo "reset" y porqué es útil?
* Describí qué son los "floats" y su funcionamiento.
* ¿Cuáles son los métodos para "limpiar" (clear) tus "floats" y cuál es apropiado en dado contexto?
* Explicá ¿qué son los sprites en CSS y cómo los implementarias en una página?
* ¿Cuál es tu técnica favorita para reemplazar imágenes y cuando usás cada una?
* ¿"CSS Hacks", archivos incluidos con etiquetas condicionales o algún otro metodo...?
* ¿Cuál es tu enfoque al desarrollar páginas que dan soporte a navegadores con capacidades limitadas?
	* ¿Qué técnicas o procesos usás?
* ¿Cuáles son las distintas formas para esconder contenido, pero mantenerlo disponible únicamente para screen readers?
* ¿Has usado algún sistema para cuadrículas (grids) y cuál preferis?
* ¿Has usado o implementado "media queries" o reglas específicas para dispositivos móviles?
* ¿Tenés familiaridad estilizando SVGs?
* ¿Cómo optimizás tus páginas para impresión?
* ¿Cuáles son algunas de las "trampas" al escribir CSS eficiente?
* ¿Has usado algún preprocesador para CSS (SASS, Compass, Stylus, LESS)? 
	* De ser así, ¿podés mencionar qué te gusta y qué no de los que has usado?
* ¿Cómo implementarías un diseño que usa fuentes que no son web-safe?
	* Webfonts (usando servicios para fuentes como Goodle Webfonts, Typekit, entre otros).
* ¿Podés explicar cómo determina un navegador cuales elementos coinciden con un selector de CSS?

## Preguntas opcionales y divertidas:

* ¿Que es lo más cool que has programado y qué es lo que más te enorgullece de ella?
* ¿Sabés cuál es la "gang sign" de HTML5?
* ¿Estás ahora o has estado alguna vez en un bote?
* ¿Cuáles son tus partes favoritas de las herramientas de desarrollo que usás?
* ¿Tenés algún proyecto personal? ¿De qué tipo?
* Explicá el significado de "cursificar" (cornify).
* Tomá un papel y escribí las letras A B C D E verticalmente, ahora ponelas en order descendiente sin escribir una sola línea de código.
	* Esperá a ver si giran el papel.
* ¿Pirata o Ninja?
	* Puntos extra si es una combinación y dio una buena razón, dos puntos extra por monos zombies piratas ninjas.
* ¿Si no estuvieras en Desarollo Web, en que estarías trabajando?
* ¿Dónde en el mundo esta Carmen Sandiego?
	* Consejo: no hay respuesta correcta.
* ¿Cúal es tu funcionalidad favorita de Internet Explorer?
* Completá esta oracion: Brendan Eich y Doug Crockford son los __________ del Javascript.
* jQuery: ¿una buena librería o la mejor librería? Explicá porqué.

