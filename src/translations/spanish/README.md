---
title: GUÍA DE PREGUNTAS PARA ENTREVISTAS DE TRABAJO
layout: layouts/page.njk
permalink: /translations/spanish/index.html
lang: es
---

# GUÍA DE PREGUNTAS PARA ENTREVISTAS DE TRABAJO

Este repositorio contiene preguntas de entrevistas a programadores front-end, que pueden ser usadas para revisar a candidatos potenciales. Bajo ningún concepto se recomienda usar todas las preguntas aquí expuestas con el mismo candidato (eso llevaría horas). Escoger algunos elementos de esta lista debería ayudarle a revisar las habilidades que requiere.

**Nota:** Tenga en mente que muchas de estas preguntas son abiertas y pueden llevar a interesantes discusiones que le pueden decir más sobre las capacidades de la persona que una simple respuesta.

## Índice

  1. [Preguntas generales](#general)
  1. [Preguntas específicas de HTML](#html)
  1. [Preguntas específicas de CSS](#css)
  1. [Preguntas específicas de JavaScript](#js)
  1. [Preguntas sobre pruebas de código](#testing)
  1. [Preguntas sobre rendimiento](#performance)
  1. [Preguntas sobre conectividad](#network)
  1. [Preguntas de código](#codigojs)
  1. [Preguntas divertidas](#divertidas)

## Contribuyendo

  1. [Contribuyentes](#contribuyentes)
  1. [Cómo contribuir](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [Licencia](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### <a name='general'>Preguntas generales:</a>

* ¿Qué aprendió ayer/esta semana?
* ¿Qué es lo que le entusiasma o le interesa de la programación?
* ¿Podría describir algún problema técnico que haya resuelto recientemente y cómo lo resolvió?
* ¿Podría describir algunas técnicas que haya utilizado al momento de construir un nuevo sitio web o dar mantenimiento a uno existente para incrementar su rendimiento?
* ¿Podría explicar algunas prácticas o técnicas de SEO que haya utilizado recientemente? 
* ¿Qué puede decir acerca de técnicas comunes o problemas que haya resuelto recientemente respecto a la seguridad de aplicaciones front-end?
* ¿Qué acciones ha realizado en proyectos recientes para mejorar la manteniabilidad de su código?
* Hable acerca de tu ambiente de desarrollo preferido.
* ¿Puede describir el proceso que sigue cuando crea una página web?
* ¿Qué sistemas de control de versiones ha utilizado?
* ¿Podría describir el proceso que sigue cuando creas una página web?
* Si tuviera cinco hojas de estilo distintas, ¿cómo las integraría a su página web?
* ¿Puede describir la diferencia entre _"Progressive Enhancement"_ y _"Graceful Degradation"_?
* ¿Cómo optimizaría los recursos de un sitio web?
* ¿Cuántos recursos se pueden descargar simultáneamente de un mismo dominio?
 * ¿Cuáles son las excepciones?
* Mencione tres formas para disminuir el tiempo de carga de una página (tiempo real o percibido).
* Si se ha unido a un proyecto y los desarrolladores usan tabs y usted usa espacios, ¿qué hace?
* Describa como elaboraría una página con una galería sencilla.
* Si pudiera elegir una tecnología para dominar este año, ¿cuál sería?
* Explique la importancia de estándares y los grupos que los definen.
* ¿Sabe que es el _Flash Of Unstyled Content_?, ¿cómo lo evita?
* Explique qué son las _Aplicaciones de internet enriquecidas y accesibles_ y los lectores de pantalla, además de cómo hacer una página web accesible
* Explique las ventajas y desventajas de usar animaciones en CSS en comparación con animaciones hechas con JavaScript.
* ¿Qué significa _CORS_ y a qué problema está relacionado?
* ¿Cómo manejaría una discrepancia con su jefe o compañero de trabajo?
* ¿Qué recursos usa para aprender acerca de las últimas novedades en desarrollo web y diseño?
* ¿Cuáles cree que son las habilidades necesarias para ser un buen desarrollador front-end?
* ¿En qué rol le gustaría desempeñarse?
* Explique la diferencia entre _cookies_, _session storage_ y _local storage_.
* ¿Podría explicar qué sucede cuando ingresa una URL en el navegador?
* ¿Cuál es la diferencia entre _SSR_ y _CSR_? Hable acerca de los pros y contras de cada uno.
 * ¿Está familiarizado con el concepto de _Static Rendering_?
 * ¿Qué puede decir acerca de la re-hidratación?


#### <a name='html'>Preguntas específicas de HTML:</a>

* ¿Qué función cumple el `doctype`?
* ¿Cómo distribuiría una página con contenido en varios lenguajes?
* ¿Qué consideraciones se deben tener cuando se diseñan/desarrollan sitios multi-lenguajes?
* ¿Para qué son buenos los atributos `data-`?
* Si consideramos HTML5 como una plataforma web abierta, ¿cuáles son los componentes que constituyen HTML5?
* Describa la diferencia entre `cookies`, `sessionStorage` y `localStorage`.
* Describa la diferencia entre `<script>`, `<script async>` y `<script defer>`.
* Generalmente, ¿por qué es una buena idea agregar la etiqueta `<link>` dentro de la etiqueta `<head>` y la etiqueta `<script>` justo antes de cerrar la etiqueta `<body>`. ¿Conoces algún caso excepcional?
* ¿Qué es el renderizado progresivo?
* ¿Por qué usaría el atributo `srcset` en una imagen? Explique el proceso que sigue el navegador al evaluar el contenido de este atributo.
* ¿Ha usado algún lenguaje de plantillas HTML?
* ¿Cuál es la diferencia entre los elementos `canvas` y `svg`?
* ¿Qué son los elementos vacíos en HTML?


#### <a name='css'>Preguntas específicas de CSS:</a>

* ¿Qué es la especificidad de los selectores CSS y cómo funciona? 
* ¿Cuál es la diferencia entre normalizar y resetear el CSS?, ¿Cuál elegiría y por qué?
* Describa qué son los "floats" y su funcionamiento.
* Describa el `z-index` y como se decide el contexto de apilado de elementos.
* Describa el contexto de formato de bloques (_BFC_) y como funciona.
* ¿Cuáles son las técnicas para usar la propiedad `clear` y en qué contexto es apropiado utilizar cada una?
* ¿Cuál es su enfoque al desarrollar páginas que dan soporte a navegadores con capacidades limitadas?
 * ¿Qué técnicas o procesos utiliza?
* ¿Cuáles son las distintas formas para esconder contenido, pero mantenerlo disponible únicamente para lectores de pantalla?
* ¿Ha usado algún sistema para cuadrículas (grids) y cuál prefiere?
* ¿Ha usado o implementado "media queries" o reglas específicas para dispositivos móviles?
* ¿Está familiarizado con aplicar estilos a SVGs?
* ¿Podría dar un ejemplo de una propiedad `@media` distinta a `screen`?
* ¿Cuáles son algunos de los "trucos" para escribir CSS eficiente?
* ¿Cuáles son las ventajas y desventajas de utilizar pre-procesadores CSS?
 * Mencione lo que le agrada y desagrada de los pre-procesadores que ha usado.
* ¿Cómo implementaría un diseño que usa fuentes que no son web-safe?
* ¿Puede explicar cómo determina un navegador qué elementos coinciden con un selector de CSS?
* Describa los pseudo-elementos y discuta sus usos.
* ¿Puede explicar cómo entiende el `box model` (modelo de cajas) y como podría, mediante CSS, hacer que un navegador renderize su esquema usando diferentes modelos de cajas?
* ¿Qué sucede al usar `* {box-sizing: border-box;}`. ¿Qué desventajas supone su uso?
* ¿Qué es la propiedad `display` de CSS? ¿Podría dar algunos ejemplos de su uso?
* ¿Cuál es la diferencia entre `inline` y `inline-block`?
* ¿Cuál es la diferencia entre los selectores `nth-of-type()` y `nth-child()`?
* ¿Cuál es la diferencia entre las posiciones `relative`, `fixed`, `absolute` y `static` para un elemento dado?
* ¿Cuáles frameworks de CSS has usado en desarrollo o producción? ¿Cómo los mejoraría?
* ¿Ha utilizado CSS Grid?
* ¿Podría explicar la diferencia entre desarrollar un sitio web para ser _responsive_ y utilizar una estrategia _mobile-first_?
* ¿Ha trabajado con tecnología retina?, ¿qué técnicas utilizó?
* ¿Hay alguna razón por la cual preferiría usar `translate()` en vez de el posicionamiento absoluto? ¿Alguna razón para hacer lo contrario?
* ¿En qué casos es útil la propiedad `clearfix` de css?
* ¿Cuál es ls diferencia entre usar px, em o rem para definir tamaños de fuente?
* ¿Podría dar un ejemplo de una pseudo-clase de CSS y un posible caso de uso?
* ¿Cuál es la diferencia entre un elemento a nivel de bloque y un elemento en línea? Mencione algunos ejemplos de cada tipo de elemento.
* ¿Cuál es la diferencia entre CSS Grid y Flexbox? ¿En qué casos preferiría usar uno sobre el otro?


#### <a name='js'>Preguntas específicas de JavaScript:</a>

* Explique "_event delegation_".
* Explique cómo funciona `this` en JavaScript.
* Explique cómo funciona la herencia de prototipos (prototypal inheritance) en JavaScript.
* ¿Qué opina de AMD en comparación con CommonJS?
* Explique por qué `function foo(){ }();` no funciona como un IIFE.
 * ¿Qué se necesita cambiar para que funcione como una IIFE?
* ¿Cuál es la diferencia entre variables `null`, `undefined` y `undeclared`?
 * ¿Cómo comprobarías que una variable refiere a alguno de esos valores?
* ¿Qué es un "_closure_" y cuando, o por qué usaría uno?
* ¿Puede hablar de un uso típico para una función anónima?
* ¿Cómo organiza su código, patrón módulo, herencia clásica?
* ¿Cuál es la diferencia entre objetos huésped (host objects) y objetos nativos?
* ¿Cuál es la diferencia entre: ` function Person(){} `, `var person = Person()` y `var person = new Person()`?
* ¿Cuál es la diferencia entre `.call` y `.apply`?
* ¿Puede explicar el uso de `Function.prototype.bind`?
* ¿Cuándo usarías `document.write()`?
* ¿Cuál es la diferencia entre detección de capacidades, inferencia de capacidades y usar la cadena del user agent?.
* Explique AJAX con tanto detalle como pueda.
* Explique cómo funciona JSONP (y cómo no es AJAX realmente)
* ¿Ha utilizado alguna vez templates en JavaScript?
	* De ser así, ¿qué bibliotecas ha usado?
* ¿Puede explicar en qué consiste el "_hoisting_"?
* ¿Puede hablar sobre "_event bubbling_"?
* ¿Cuál es la diferencia entre un "_atributo_" y una "_propiedad_"?
* ¿Por qué es una mala idea extender objetos nativos de JavaScript?
* ¿Cuál es la diferencia entre el evento "_document load_" y el evento “_document ready_"?
* ¿Cuál es la diferencia entre `==` y `===`?
* Explique la política de mismo origen (same-origin policy) y sus repercusiones en JavaScript.
* Haga que este código funcione:
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* ¿Por qué reciben el nombre de sentencias ternarias? ¿Qué significa la palabra "_ternaria_"?
* ¿Qué es `"use strict";`? ¿Cuáles son las ventajas y desventajas de usarlo?
* Haga un ciclo `for` de `100` iteraciones que imprima **"fizz"** en los múltiplos de `3`, **"buzz"** en los múltiplos de `5` y **"fizzbuzz"** en los múltiplos de `3` y `5`
* De manera general, ¿por qué es una buena idea no usar el "ámbito" (scope) global de un sitio web?
* ¿Por qué usaría el evento `load`?, ¿usarlo representa alguna ventaja?, ¿conoce alternativas y el por qué usaría dichas alternativas?
* Explique en qué consiste una aplicación de una sola página y como hacer una que bajo los términos del posicionamiento en los buscadores.
* ¿Qué tanto sabes acerca de las promesas en javascript? ¿Conoce alternativas a ellas?
* Mencione las ventajas y desventajas de usar promesas en vez de callbacks.
* Menciona las ventajas y desventajas de escribir Javascript a través de otro lenguaje que compile y su resultado sea Javascript.
* ¿Qué herramientas y técnicas usa para depurar código Javascript?
* ¿Qué código utiliza para iterar sobre propiedades de un objeto y sobre arreglos?
* Explique la diferencia entre objetos mutables y objetos inmutables.
 * Mencione un ejemplo de un objeto inmutable en javascript.
 * Mencione las ventajas y desventajas de la inmutabilidad.
 * ¿Cómo puede usar la inmutabilidad en su código?
* Explique la diferencia entre funciones síncronas y asíncronas.
* ¿Qué es el `event loop`?
 * ¿Cuál es la diferencia entre la pila de llamadas y la cola de tareas?

#### <a name='codigojs'>Preguntas sobre pruebas de código:</a>

* Menciona ventajas y desventajas de realizar pruebas en el código
* ¿Qué herramientas usarías para probar la funcionalidad de tu código?
* ¿Cuál es la diferencia entre una prueba unitaria y una prueba de funcionalidad?
* ¿Cuál es el propósito de usar herramientas para verificar los estilos usados en el código?

#### <a name='performance'>Preguntas sobre rendimiento:</a>

* ¿Qué herramientas usarías para detectar un error en el rendimiento de tu código?
* ¿De qué formas podrías mejorar el rendimiento del scrolling en tu sitio web?
* Menciona las diferencias entre los términos `layout`, `painting` y `compositing`.

#### <a name='network'>Preguntas sobre conectividad:</a>

* Tradicionalmente, ¿Por qué es mejor servir los recursos estáticos del sitio desde múltiples dominios?
* Intenta explicar el proceso desde el momento en el cual ingresas una URL en el navegador hasta que termina de cargar la página en tu pantalla.
* ¿Cuáles son las diferencias entre `Long-polling`, `websockets` y `server-sent events`?
* Explique las siguientes cabeceras de respuesta y envío.
 * `Expires`, `Date`, `Age` y `If-Modified-`
 * `Do Not Track`
 * `Cache-Control`
 * `Transfer-Encoding`
 * `Etag`
 * `X-Frame-Options`
* ¿Qué son las acciones `HTTP`? explique las acciones HTTP que conozca.

#### <a name='codigojs'>Preguntas de código:</a>


_Pregunta: ¿Cuál es el valor de `foo`?_
```javascript
var foo = 10 + '20';
```

_Pregunta: ¿Cómo harías funcionar esto?_
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

_Pregunta: ¿Cuál es el resultado de la siguiente sentencia?_
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

_Pregunta: ¿Cuál es el valor de `window.foo`?_
```javascript
( window.foo || ( window.foo = "bar" ) );
```

_Pregunta: ¿Cuál es el resultado de los dos *alerts*?_
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

_Pregunta: ¿Cuál es el valor de `foo.length`?_
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

_Pregunta: ¿Cuál es el valor de `foo.x`?_
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

_Pregunta: ¿Qué imprime el siguiente código?_
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

#### <a name='divertidas'>Preguntas divertidas:</a>

* ¿Qué es lo más genial que ha programado y qué es lo que más le enorgullece de ello?
* ¿Cuáles son sus partes favoritas de las herramientas de desarrollo que usa?
* ¿Tiene algún proyecto personal? ¿De qué tipo?
* ¿Cuál es su funcionalidad favorita de Internet Explorer?
* ¿Cómo te gusta tu café?


#### <a name='contribuyentes'>Contribuyentes</a>

Este documento se creó en 2009 como una colaboración de [@paul_irish](http://twitter.com/paul_irish) [@bentruyman](http://twitter.com/bentruyman) [@cowboy](http://twitter.com/cowboy) [@ajpiano](http://twitter.com/ajpiano)  [@SlexAxton](http://twitter.com/slexaxton) [@boazsender](http://twitter.com/boazsender) [@miketaylr](http://twitter.com/miketaylr) [@vladikoff](http://twitter.com/vladikoff) [@gf3](http://twitter.com/gf3) [@jon_neal](http://twitter.com/jon_neal) [@sambreed](http://twitter.com/sambreed) y [@iansym](http://twitter.com/iansym).

Ha recibido contribuciones de [100 desarrolladores](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
