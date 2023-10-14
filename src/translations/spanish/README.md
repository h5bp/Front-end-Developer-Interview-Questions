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
  1. [Preguntas de código](#codigojs)
  1. [Preguntas sobre pruebas de código](#testing)
  1. [Preguntas sobre rendimiento](#performance)
  1. [Preguntas sobre conectividad](#network)
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

* Explique el "_event delegation_".
* Explique cómo funciona `this` en JavaScript.
 * ¿Puede dar un ejemplo de una de las maneras en que trabajar con `this` ha cambiado desde ES6?
* Explique cómo funciona la herencia de prototipos (prototypal inheritance) en JavaScript.
* ¿Cuál es la diferencia entre variables `null`, `undefined` y `undeclared`?
 * ¿Cómo comprobarías que una variable refiere a alguno de esos valores?
* ¿Qué es un "_closure_" y cuando, o por qué usaría uno?
* ¿Qué características del lenguaje puede utilizar para iterar sobre propiedades de un objeto y elementos de un arreglo?
* ¿Podría describir cuál es la principal diferencia entre el ciclo `Array.forEach()` y el método `Array.map()` y por qué elegiría uno sobre el otro?
* ¿Puede hablar de un uso típico para una función anónima?
* ¿Cuál es la diferencia entre objetos huésped (host objects) y objetos nativos?
* ¿Cuál es la diferencia entre: ` function Person(){} `, `var person = Person()` y `var person = new Person()`?
* Esplique las diferencias entre el uso de `foo` en `function foo(){}` y `var foo = function(){}`.
* ¿Qué hacen `Function.call` y `Function.apply`? ¿Cuál es la diferencia más notable entre las dos?
* ¿Puede explicar el uso de `Function.prototype.bind`?
* ¿Cuál es la diferencia entre detección de capacidades, inferencia de capacidades y usar la cadena del user agent?.
* ¿Puede explicar en qué consiste el "_hoisting_"?
* ¿Qué es la coerción de tipos? ¿Cuáles son los errores más comunes al utilizarla en JavaScript?
* ¿Puede hablar sobre "_event bubbling_"?
* Describa qué es "_event capturing"_.
* ¿Cuál es la diferencia entre un atributo y una propiedad?
* ¿Cuáles son los pros y contras de extender objetos nativos de JavaScript?
* ¿Cuál es la diferencia entre `==` y `===`?
* Explique la política de mismo origen (same-origin policy) y sus repercusiones en JavaScript.
* ¿Por qué reciben el nombre de sentencias ternarias? ¿Qué significa la palabra "_ternaria_"?
* ¿Qué es `"use strict";`? ¿Cuáles son las ventajas y desventajas de usarlo?
* Mencione las ventajas y desventajas de escribir Javascript a través de otro lenguaje que transpile a Javascript.
* ¿Qué herramientas y técnicas usa para depurar código Javascript?
* Explique la diferencia entre objetos mutables y objetos inmutables.
 * Mencione un ejemplo de un objeto inmutable en javascript.
 * Mencione las ventajas y desventajas de la inmutabilidad.
 * ¿Cómo puede usar la inmutabilidad en su código?
* Explique la diferencia entre funciones síncronas y asíncronas.
* ¿Qué es el `event loop`?
 * ¿Cuál es la diferencia entre la pila de llamadas y la cola de tareas?
* ¿Cuáles son las diferencias entre variables declaradas usando `let`, `var` o `const`?
* ¿Cuáles son las diferencias entre los constructores de clases de ES6 y los constructores de funciones de ES5?
* ¿Podría mencionar un caso de uso para la nueva sintaxis de funciones flecha (_"arrow functions"_) `=>`? ¿Qué diferencia tiene respecto a las funciones tradicionales?
* ¿Qué ventaja tiene utilizar la sintaxis de funciones flecha (_"arrow functions"_) para un método en un constructor?
* Defina qué es una función de orden superior (_"higher order function"_).
* ¿Podría dar un ejemplo de desestructuración (_"destructuring"_) de un objeto o arreglo?
* ¿Cómo se puede generar un string con los _template literals_ de ES6?
* ¿Podría dar un ejemplo de una función curry? ¿Qué ventajas tiene usarla?
* ¿Cuáles son los beneficios de usar el operador `spread` y cómo se diferencia del operador `rest`?
* ¿De qué manera puede compartir código entre archivos?
* ¿Por qué necesitaría crear un miembro estático en una clase?
* ¿Cuál es la diferencia entre los ciclos `while` y `do-while` en JavaScript?
* ¿Qué es una promesa? ¿En qué casos y cómo usaría una?
* ¿Cómo podría utilizar los principios de la programación orientada a objetos en JavaScript?

#### <a name='codigojs'>Preguntas sobre código:</a>

* Haga que este código funcione:
```javascript
duplicate([1,2,3,4,5]) // [1,2,3,4,5,1,2,3,4,5]
```
* Haga un ciclo `for` de `100` iteraciones que imprima **"fizz"** en los múltiplos de `3`, **"buzz"** en los múltiplos de `5` y **"fizzbuzz"** en los múltiplos de `3` y `5`
* ¿Cuál será el retorno de cada uno de los siguientes códigos?
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```
* Escriba una función auto-invocada ("_IIFE_")

#### <a name='testing'>Preguntas sobre pruebas de código:</a>

* Menciona ventajas y desventajas de realizar pruebas en el código
* ¿Qué herramientas usarías para probar la funcionalidad de tu código?
* ¿Cuál es la diferencia entre una prueba unitaria y una prueba funcional o de integración?
* ¿Cuál es el propósito de usar herramientas para verificar los estilos usados en el código?
* ¿Cuáles son algunas de las mejores prácticas al realizar pruebas?

#### <a name='performance'>Preguntas sobre rendimiento:</a>

* ¿Qué herramientas usarías para detectar un error en el rendimiento de tu código?
* ¿De qué formas podrías mejorar el rendimiento del scrolling en tu sitio web?
* Menciona las diferencias entre los términos `layout`, `painting` y `compositing`.

#### <a name='network'>Preguntas sobre redes:</a>

* Tradicionalmente, ¿Por qué es mejor servir los recursos estáticos del sitio desde múltiples dominios?
* Intenta explicar el proceso desde el momento en el cual ingresas una URL en el navegador hasta que termina de cargar la página en tu pantalla.
* ¿Cuáles son las diferencias entre `Long-polling`, `websockets` y `server-sent events`?
* Explique las siguientes cabeceras de peticiones y respuestas:
 * Diferencias entre `Expires`, `Date`, `Age` y `If-Modified-`...
 * `Do Not Track`
 * `Cache-Control`
 * `Transfer-Encoding`
 * `Etag`
 * `X-Frame-Options`
* ¿Qué son los métodos `HTTP`? Mencione y explique los que conozca.
* ¿Qué es el "_pre-fetching_" de dominio y cómo contribuye al rendimiento de una página web?
* ¿Qué es un CDN y cuáles son los beneficios de usar uno?


#### <a name='divertidas'>Preguntas divertidas:</a>

* ¿Qué es lo más genial que ha programado y qué es lo que más le enorgullece de ello?
* ¿Cuáles son sus partes favoritas de las herramientas de desarrollo que usa?
* ¿Tiene algún proyecto personal? ¿De qué tipo?
* ¿Cuál es su funcionalidad favorita de Internet Explorer?
* ¿Cómo te gusta tu café?


#### <a name='contribuyentes'>Contribuyentes</a>

Este documento se creó en 2009 como una colaboración de [@paul_irish](http://twitter.com/paul_irish) [@bentruyman](http://twitter.com/bentruyman) [@cowboy](http://twitter.com/cowboy) [@ajpiano](http://twitter.com/ajpiano)  [@SlexAxton](http://twitter.com/slexaxton) [@boazsender](http://twitter.com/boazsender) [@miketaylr](http://twitter.com/miketaylr) [@vladikoff](http://twitter.com/vladikoff) [@gf3](http://twitter.com/gf3) [@jon_neal](http://twitter.com/jon_neal) [@sambreed](http://twitter.com/sambreed) y [@iansym](http://twitter.com/iansym).

Ha recibido contribuciones de [100 desarrolladores](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
