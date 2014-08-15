#Questões para entrevista de profissionais Front-end

@versão 2.0.0

Este repositório contém uma série de perguntas para entrevista de profissionais de front-end que podem ser usadas para avaliar os candidatos. Não é recomendado de maneira alguma usar todas as perguntas aqui no mesmo candidato (que levaria horas). A escolha de alguns itens dessa lista deverá ajudar a identificar as habilidades requeridas do candidato.

O artigo [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) de [Rebecca Murphey](http://rmurphey.com/) é também uma ótima fonte para ler antes de entrevistar um candidato.

**Note:** Tenha em mente que muitas destas questões estão em aberto e poderia levar à discussões interessantes que dizem mais sobre as capacidades do candidato do que a resposta em si.

####Colaboradores originais

A maioria das perguntas foi retirada de uma _thread_ da [oksoclap](http://oksoclap.com/), criada originalmente por [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) e com a contribuição individual das seguintes pessoas:

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
* [@darcy](http://twitter.com/darcy) - http://darcyclarke.me
* [@iansym](http://twitter.com)

### Questões gerais:

* O que você aprendeu ontem ou esta semana?
* O que te excita ou te interessa em programação/codificação?
* Fale sobre seu ambiente de desenvolvimento preferido. (SO, Editor, Browser, Ferramentas, etc)
* Descreva seu trabalho quando cria uma página web.
* Descreva a diferença entre _progressive enhancement_ and _graceful degradation_.
  * Bônus se descrever ou mencionar detecção de recursos.
* Explique o que significa "HTML Semântico".
* Como você pode otimizar os recursos de um site?
  * À procura de uma série de soluções que possam incluir:
    * Concatenação de arquivo
    * "Minificação" de arquivo
    * Utilização de CDN
    * Caching
    * etc.
* Por que é melhor servir recursos de um site de múltiplos domínios?
* Quantos recursos um navegador pode baixar, simultaneamente, a partir de um determinado domínio?
* Fale 3 formas de diminuir o _page load_ (tempo de carregamento real e percebido)
* Se você caísse em um projeto que as pessoas usam _tabs_ para identação e você usa espaços, o que você faria?
  * Sugerir que o projeto utilize algo como EditorConfig (http://editorconfig.org)
  * Se conformar com as convenções (ficar consistente)
  * `issue :retab! command`
* Escreva uma página simples de _slideshow_
  * Bônus se não usar JS.
* Quais ferramentas você usa para testar a performance do seu código?
  * Profiler, JSPerf, Dromaeo
* Se você pudesse dominar uma tecnologia deste ano, qual seria?
* Explique a importância de normas e órgãos normativos.
* O que é FOUC? Como você evita FOUC?

### Questões específicas de HTML:

* O que um `doctype` faz?
* Qual a diferença entre _standards mode_ e _quirks mode_?
* Quais as limitações quando utilizamos páginas XHTML?
  * Existe algum problema em utilizar páginas como `application/xhtml+xml`?
* Como você desenvolve uma página com conteúdo em múltiplos idiomas?
  * Que tipo de coisas que você deve tomar cuidado ao desenvolver um website multi-língua?
* Quais são os benefícios em utilizar o atributo `data-`?
* Considere o HTML5 como uma plataforma web aberta. Quais são os blocos de construção de HTML5?
* Descreva a diferença entre cookies, sessionStorage e localStorage.

### Questões específicas de JS:

* Explique o evento _delegation_.
* Explique como `this` funciona em JavaScript.
* Explique como funciona herança prototipada.
* Como você testa seu JavaScript?
* AMD vs. CommonJS?
* O que é um _hashtable_?
* O que são as variáveis `undefined` e `undeclared`?
* O que é uma _closure_, e como/por que você usaria uma?
  * Seu padrão favorito é utilizado por ele? Argyle (Apenas aplicáveis para IIFEs)
* Qual o caso de uso típico para funções anônimas?
* Explique o padrão "JavaScript module pattern" e quando você o usaria.
  * Bônus por mencionar _namespaces_ limpos.
  * E se seus módulos são namespace-less?
* Como você organiza seu código? (module pattern, herança clássica?)
* Qual a diferença entre objetos herdados e objetos nativos?
* Qual a diferença entre:

```javascript
function Person(){}
var person = Person()
var person = new Person()
```

* Qual a diferença entre `.call` e `.apply`?
* Explique `Function.prototype.bind`.
* Quando você otimiza seu código?
* Você pode explicar como funciona a herença no Javascript?
* Quando você deve usar o `document.write()`?
  * A maioria dos anúncios de publicidade ainda utilizam `document.write()` embora seu uso não seja recomendado.
* Qual a diferença entre feature detection, feature inference, e o uso de UA string?
* Explique o que é AJAX mais detalhadamente possível.
* Explique como o JSONP funciona (e como ele realmente não é AJAX).
* Você já utilizou templates com Javascript?
  * Se sim, quais bibliotecas foram utilizadas? (Mustache.js, Handlebars etc.)
* Explique o que é "hoisting".
* Descreva o que é event bubbling.
* Qual a diferença entre atributo e propriedade?
* Porque a extensão de objetos nativos não são uma boa ideia?
* Porque a extensão de elementos nativos não são uma boa ideia?
* Qual a diferença entre o evento document load e o evento document ready?
* Qual a diferença entre `==` e `===`?
* Explique como você pega um parâmetro na URL do browser.
* Explique a política de _same-origin_ em relação a Javascript.
* Descreva os padrões de herança em JavaScript.
* Faça isso funcionar:

```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```

* Descreva a estratégia para memoization (evitar a repetição de cálculo) no JavaScript.
* O que é um operador ternário, o que a palavra "ternário" indica/significa?
* O que a aridade de uma função?
O que é o `"use strict";`? Quais a vantagens e desvantagens de sua utilização?

### Exemplos de códigos JavaScript:

```javascript
~~3.14
```

Questão: Qual é o valor a ser retornado?

**Resposta: 3**

```javascript
"sou uma lasanha".split("").reverse().join("");
```

Questão: Qual é o valor a ser retornado?

**Resposta: "ahnasal amu uos"**

```javascript
( window.foo || ( window.foo = "bar" ) );
```
Questão: Qual é o valor de `window.foo`?

**Resposta: "bar"**

Apenas se window.foo for falso, se não ele vai retornar o seu valor próprio.

```javascript
var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
```
Questão: Qual o retorno destes dois alerts?

**Resposta: "Olá Mundo" & ReferenceError: bar is not defined**

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Questão: Qual o valor de `foo.length`?

**Resposta: `2`**

```javascript
var foo = {};
foo.bar = 'hello';
```

Questão: Qual o valor de `foo.length`?

**Resposta: `undefined`**

### Questões específicas de jQuery:

* Explique o que é "chaining".
* Explique o que é "deferreds".
* Quais são algumas especificações de optimização do jQuery que você pode implementar?
* O que o `.end()` faz?
* Como, e porque, faria namespacing de vários agregadores de eventos?
* Cite 4 valores diferentes que você pode passar pelo método jQuery
  * Seletores (string), HTML (string), Callback (function), HTMLElement, object, array, element array, jQuery Object etc.
* Quais são os efeitos do queue?
* Qual a diferença entre `.get()`, `[]`, e `.eq()`?
* Qual a diferença entre `.bind()`, `.live()`, e `.delegate()`?
* Qual a diferença entre `$` e `$.fn`? Ou, apenas, o que é `$.fn`.
* Optimize esse seletor:
```javascript
$(".foo div#bar:eq(0)")
```
* Qual a diferença entre 'delegate()' e 'live()'?


### Questões específicas de CSS
* Descreva o que é o arquivo "reset" do css e o que ele faz e como ele é útil.
* Descreva o que são floats e como eles funcionam.
* Quais são as várias técnicas para "clearing" e quais delas são apropriadas para qual contexto?
* Explique o que são CSS Sprites, e como você implementaria eles em um website.
* Quais são suas técnicas favoritas para troca de imagens e quais dela você usa.
* CSS Hacks, arquivo condicional .css, ou... alguma outra coisa?
* Como você desenvolve sua página para browsers com recursos limitados?
  * Quais técnicas/processos você usa?
* Quais são as diferentes formas de visualizar conteúdo escondido (e como fazer para deixar eles disponíveis apenas para leitores de tela?)
* VoCê já utilizou algum sistema de grid, se sim, qual você prefere?
* Você já utilizou ou implementou media queries ou css's específicos para mobile?
* Qual sua familiaridade com SVG?
* Como você optimiza suas páginas para impressão?
* Quais são algumas técnicas para escrever um eficiente CSS?
* Você já utilizou pré-processadores css? (SASS, Compass, Stylus, LESS)
  * Se sim, descreva o que você gostou e o que não gostou com eles.
* Como você implementaria um website que não utilizaria fontes padrões nos computadores?
  * Webfonts (Serviços como: Google Webfonts, Typekit etc.)
* Explique como um browser determina quais os elementos que correspondem a um seletor CSS.

### Questões divertidas opcionais:

* Qual a coisa mais legal que você desenvolveu, qual você ficou mais orgulhoso?
* Quais suas partes favoritas sobre as ferramentas de desenvolvimento que você usa?
* Você teve algum projeto para animais de estimação? Qual tipo?
* Qual sua feature favorita do Internet Explorer?
* Qual é a melhor linguagem de programação para aprender em 2014?
