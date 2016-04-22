#Questões para entrevista de profissionais Front-end

Este repositório contém uma série de perguntas para entrevista de profissionais de front-end que podem ser usadas para avaliar os candidatos. Não é recomendado de maneira alguma usar todas as perguntas aqui no mesmo candidato (que levaria horas). A escolha de alguns itens dessa lista deverá ajudar a identificar as habilidades requeridas do candidato.

O artigo [Baseline For Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) de [Rebecca Murphey](http://rmurphey.com/) é também uma ótima fonte para ler antes de entrevistar um candidato.

**Note:** Tenha em mente que muitas destas questões estão em aberto e poderia levar à discussões interessantes que dizem mais sobre as capacidades do candidato do que a resposta em si.

## <a name='toc'>Tabela de Conteúdos</a>

  1. [Contribuintes Originais](#contributors)
  1. [Questões Gerais](#general)
  1. [Questões de HTML](#html)
  1. [Questões de CSS](#css)
  1. [Questões de JS](#js)
  1. [Questões de jQuery](#jquery)
  1. [Questões de Código](#jscode)
  1. [Questões Divertidas](#fun)
  1. [Outras Grandes Referências](#references)
  1. [Licença](#license)

####[[⬆]](#toc) <a name='contributors'>Contribuintes originais:</a>

A maiorida das questões foram retiradas de um _thread_da [oksoclap](http://oksoclap.com/) originalmente criada por [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) e com a contribuição das seguintes pessoas: [@bentruyman](http://twitter.com/bentruyman) [@cowboy](http://twitter.com/cowboy) [@ajpiano](http://ajpiano)  [@SlexAxton](http://twitter.com/slexaxton) [@boazsender](http://twitter.com/boazsender) [@miketaylr](http://twitter.com/miketaylr) [@vladikoff](http://twitter.com/vladikoff) [@gf3](http://twitter.com/gf3) [@jon_neal](http://twitter.com/jon_neal) [@sambreed](http://twitter.com/sambreed) [@iansym](http://twitter.com/iansym)

####[[⬆]](#toc) <a name='general'>Questões Gerais:</a>

* O que você aprendeu ontem ou esta semana?
* O que te excita ou te interessa em programação/codificação?
* Quais as suas considerações sobre UI, Segurança, Perfomance, Aplicação, Manutenibilidade  ou Tecnologia quando você desenvolve uma aplicação web ou site?
* Fale sobre seu ambiente de desenvolvimento preferido. (SO, Editor, Browser, Ferramentas, etc.)
* Com quais sistemas de controle de versão você é familiar?
* Descreva seu trabalho quando cria uma página web.
* Se você tivesse 5 diferentes arquivos de folhas de estilo, qual seria a melhor forma de integrá-los no site?
  * Concatenação de arquivos
* Descreva a diferença entre _progressive enhancement_ and _graceful degradation_.
  * Bônus se descrever ou mencionar detecção de recursos.
* Como você pode otimizar os recursos de um site?
  * À procura de uma série de soluções que possam incluir:
    * Concatenação de arquivo
    * "Minificação" de arquivo
    * Utilização de CDN
    * Caching
    * etc.
* Por que é melhor servir recursos de um site de múltiplos domínios?
  * Quantos recursos um navegador pode baixar, simultaneamente, a partir de um determinado domínio?
  * O que são *exceptions*?
    * Bônus para identificação mobile como uma possível desvantagem (http://www.mobify.com/blog/domain-sharding-bad-news-mobile-performance/)
    * Bônus para identicação de HTTP2 / SPDY como uma *exception*
* Fale 3 formas de diminuir o _page load_ (tempo de carregamento real e percebido)
* Se você caísse em um projeto que as pessoas usam _tabs_ para indentação e você usa espaços, o que você faria?
  * Sugerir que o projeto utilize algo como EditorConfig (http://editorconfig.org)
  * Se conformar com as convenções (ficar consistente)
  * `issue :retab! command`
* Escreva uma página simples de _slideshow_
  * Bônus se não usar JS.
* Quais ferramentas você usa para testar a performance do seu código?
  * Profiler, JSPerf, Dromaeo
* Se você pudesse dominar uma tecnologia deste ano, qual seria?
* Quais as diferenças entre *Long-Polling*, *Websockets* and *SSE*?
* Explique a importância de normas e órgãos normativos.
* O que é FOUC? Como você evita FOUC?
* Dê a sua melhor descrição do processo do momento que você digita a URL de um website até o final do carregamento da página na sua tela.

####[[⬆]](#toc) <a name='html'>Questões de HTML:</a>

* O que um `doctype` faz?
* Qual a diferença entre _standards mode_ e _quirks mode_?
* Quais as limitações quando utilizamos páginas XHTML?
  * Existe algum problema em utilizar páginas como `application/xhtml+xml`?
* Como você desenvolve uma página com conteúdo em múltiplos idiomas?
  * Que tipo de coisas que você deve tomar cuidado ao desenvolver um website multi-língua?
* Quais são os benefícios em utilizar o atributo `data-`?
* Considere o HTML5 como uma plataforma web aberta. Quais são os blocos de construção de HTML5?
* Descreva a diferença entre cookies, sessionStorage e localStorage.
* Você pode explicar a diferença entre `GET` e `POST`?

####[[⬆]](#toc) <a name='css'>Questões de CSS:</a>

* Qual é a diferença entre classes e IDs no CSS?
* Descreva o que é o arquivo "reset" do CSS e o que ele faz e como ele é útil.
  * Bônus para identicação das desvantagens de um *reset* e/ou mencionar *normalize* como uma melhor alternativa.
* Descreva o que são Floats e como eles funcionam.
* Descreva z-index e como o empilhamento do contexto é formado.
* Quais são as várias técnicas para "clearing" e quais delas são apropriadas para qual contexto?
* Explique o que são CSS Sprites, e como você implementaria eles em um website.
* Quais são suas técnicas favoritas para troca de imagens e quais dela você usa.
* CSS Hacks, arquivo condicional .css, ou... alguma outra coisa?
* Como você desenvolve sua página para browsers com recursos limitados?
  * Quais técnicas/processos você usa?
* Quais são as diferentes formas de visualizar conteúdo escondido (e como fazer para deixar eles disponíveis apenas para leitores de tela?)
* Você já utilizou algum sistema de grid, se sim, qual você prefere?
* Você já utilizou ou implementou media queries ou CSSs específicos para mobile?
* Qual sua familiaridade com SVG?
* Como você optimiza suas páginas para impressão?
* Quais são algumas técnicas para escrever um eficiente CSS?
* Você já utilizou pré-processadores CSS? (SASS, Compass, Stylus, LESS)
  * Se sim, descreva o que você gostou e o que não gostou com eles.
* Como você implementaria um website que não utilizaria fontes padrões nos computadores?
  * Webfonts (Serviços como: Google Webfonts, Typekit, etc.)
* Explique como um browser determina quais os elementos que correspondem a um seletor CSS.
*  Explique o que você entende sobre *box model* e como você poderia dizer para o navegador en CSS para renderizar seu layout em diferentes *box models*.
* O que ```* { box-sizing: border-box; }``` faz? Quais são as vantagens?
* Liste quantas propriedades *display* você puder lembrar.
* Qual a diferença entre inline e inline-block?
* Qual a diferença entre elementos posicionados de forma relativa, fixa, absoluta e estática?
* Quais frameworks CSS você tem usado localmente ou em produção? (Bootstrap, PureCSS, Foundation, etc.)
  * Se sim, quais deles? Se você puder, como você mudaria/melhoraria ele(s)?
* Você já brincou com as novas especificações de CSS Flexbox e CSS Grid?
* Como o design responsivo é diferente do design adaptavel?
* Você já trabalhou com gráficos retina? Se sim, quando e quais técnicas você usou?

####[[⬆]](#toc) <a name='js'>Questões de JS:</a>

* Explique o evento _delegation_.
* Explique como `this` funciona em JavaScript.
* Explique como funciona herança prototipada.
* Como você testa seu JavaScript?
* AMD vs. CommonJS?
* Explique por que a seguinte função não funciona como uma IIFE: `function foo(){ }();`.
  * O que precisa ser alterado para se tornar uma IIFE?
* Qual a diferença entre uma variável que `null`,  `undefined` ou `undeclared`?
  * Como você verificaria esses estados?
* O que é uma _closure_, e como/por que você usaria uma?
* Qual o caso de uso típico para funções anônimas?
* Como você organiza seu código? (module pattern, herança clássica?)
* Qual a diferença entre objetos herdados e objetos nativos?
 Qual a diferença entre: `function Person(){}`, `var person = Person()`, e `var person = new Person()`?
* Qual a diferença entre `.call` e `.apply`?
* Explique `Function.prototype.bind`.
* Quando você otimiza seu código?
* Você pode explicar como funciona a herença no Javascript?
* Quando você deve usar o `document.write()`?
  * A maioria dos anúncios de publicidade ainda utilizam `document.write()` embora seu uso não seja recomendado.
* Qual a diferença entre feature detection, feature inference, e o uso de UA string?
* Explique o que é AJAX o mais detalhadamente possível.
* Explique como o JSONP funciona (e como ele realmente não é AJAX).
* Você já utilizou templates com Javascript?
  * Se sim, quais bibliotecas foram utilizadas? (Mustache.js, Handlebars, etc.)
* Explique o que é "hoisting".
* Descreva o que é event bubbling.
* Qual a diferença entre "atributo" e "propriedade"?
* Porque a extensão de objetos nativos não é uma boa ideia?
* Qual a diferença entre o evento document load e o evento document ready?
* Qual a diferença entre `==` e `===`?
* Explique como você pega um parâmetro na URL do browser.
* Explique a política de _same-origin_ em relação a Javascript.
* Faça isso funcionar:
```javascript
[1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```
* O que é um operador ternário, o que a palavra "ternário" indica/significa?
* O que é o `"use strict";`? Quais a vantagens e desvantagens de sua utilização?
* Crie um loop for que itere até `100` enquanto retorna **fizz** em múltiplos de `3`, **buzz** em múltiplos de `5` e **fizzbuzz** em múltiplos de `3` e `5`.

####[[⬆]](#toc) <a name='jquery'>Questões de jQuery:</a>

* Explique "chaining".
* Explique "deferreds".
* Quais são algumas otimizações de jQuery que você pode implementar?
* O que `.end()` faz?
* Nomeie 4 valores diferentes que você pode passar para um método jQuery.
  * Seletor (string), HTML (string), Callback (function), HTMLElement, object, array, elemento de array, jQuery Object, etc.
* Qual a diferença entre `.get()`, `[]`, e `.eq()`?

####[[⬆]](#toc) <a name='jscode'>Questões de código:</a>

*Questão: Como você faria isso funcionar?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```


*Questão: Qual valor é retornado da seguinte declaração?*
```javascript
"sou uma lasanha".split("").reverse().join("");
```
**Resposta: "ahnasal amu uos"**


*Questão: Qual é o valor de `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```
**Resposta: "bar"** *(apenas se window.foo for falso, se não ele vai retornar o seu valor próprio).*


*Questão: Qual o retorno dos dois alerts abaixo?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```
**Resposta: "Hello World" & ReferenceError: bar is not defined**


*Questão: Qual o valor de `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
**Resposta: `2`**

####[[⬆]](#toc) <a name='fun'>Questões Divertidas:</a>

* Qual a coisa mais legal que você desenvolveu recentement? Qual você ficou mais orgulhoso?
* Quais suas partes favoritas sobre as ferramentas de desenvolvimento que você usa?
* Você teve algum projeto para animais de estimação? Qual tipo?
* Qual sua feature favorita do Internet Explorer?

####[[⬆]](#toc) <a name='references'>Outras Grandes Referências:</a>

* http://programmers.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before
* http://www.nczonline.net/blog/2010/01/05/interviewing-the-front-end-engineer/
* http://css-tricks.com/interview-questions-css/
* http://davidshariff.com/quiz/
* http://blog.sourcing.io/interview-questions
* http://www.toptal.com/javascript/interview-questions
* http://www.sitepoint.com/5-typical-javascript-interview-exercises/
* http://www.sitepoint.com/5-javascript-interview-exercises/

####[[⬆]](#toc) <a name='license'>Licença:</a>

Lançado sobre a [Licença MIT](http://opensource.org/licenses/MIT). Veja o arquivo LICENSE para detalhes.
