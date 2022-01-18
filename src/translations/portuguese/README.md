---
title: Questões para entrevista de profissionais Front-end
layout: layouts/page.njk
permalink: /translations/portuguese/index.html
---

# Questões para entrevista de profissionais Front-end

Este repositório contém uma série de perguntas para entrevista de profissionais de front-end que podem ser usadas para avaliar os candidatos. Não é recomendado de maneira alguma usar todas as perguntas aqui no mesmo candidato (que levaria horas). A escolha de alguns itens dessa lista deverá ajudar a identificar as habilidades requeridas do candidato.

O artigo [Baseline For Front-End Developers](https://rmurphey.com/posts/a-baseline-for-front-end-developers-2015/) de [Rebecca Murphey](https://rmurphey.com/) é também uma ótima fonte para ler antes de entrevistar um candidato.

**Note:** Tenha em mente que muitas destas questões estão em aberto e poderia levar a discussões interessantes que dizem mais sobre as capacidades do candidato do que a resposta em si.

## <a name='toc'>Tabela de Conteúdos</a>

  1. [Questões Gerais](#general)
  2. [Questões de HTML](#html)
  3. [Questões de CSS](#css)
  4. [Questões de JS](#js)
  5. [Questões de Acessibilidade](https://scottaohara.github.io/accessibility_interview_questions/)(external link)
  6. [Questões sobre Teste](#testing)
  7. [Questões de Performance](#performance)
  8. [Questões de Rede](#network)
  9. [Questões de Código](#jscode)
  10. [Questões Divertidas](#fun)

#### [⬆](#toc) <a name='contributors'>Contribuintes originais:</a>

A maiorida das questões foram retiradas de um _thread_da [oksoclap](http://oksoclap.com/) originalmente criada por [Paul Irish](http://paulirish.com) ([@paul_irish](http://twitter.com/paul_irish)) e com a contribuição das seguintes pessoas: [@bentruyman](http://twitter.com/bentruyman) [@cowboy](http://twitter.com/cowboy) [@ajpiano](http://ajpiano)  [@SlexAxton](http://twitter.com/slexaxton) [@boazsender](http://twitter.com/boazsender) [@miketaylr](http://twitter.com/miketaylr) [@vladikoff](http://twitter.com/vladikoff) [@gf3](http://twitter.com/gf3) [@jon_neal](http://twitter.com/jon_neal) [@sambreed](http://twitter.com/sambreed) [@iansym](http://twitter.com/iansym)

#### [⬆](#toc) <a name='general'>Questões Gerais:</a>

* O que você aprendeu ontem / esta semana?
* O que te anima ou te interessa em programação?
* Qual foi um desafio tecnico que teve recentemente e como o resolveu?
* Quando construindo um novo site ou mantendo um existente, pode explicar algumas das tecnicas que usou para aumentar a performance?
* Pode descrever algumas melhores práticas ou metodologias de SEO que usou recentemente?
* Pode explicar metodologias comuns ou problemas que resolveu recentemente em termos de seguranca em front-end?
* Que acções tomou pessoalmente em projetos recentes para aumentar a manutenibilidade do código?
* Fale sobre seu ambiente de desenvolvimento preferido.
* Com quais sistemas de controle de versão você é familiar?
* Descreva seu processo quando cria uma página web.
* Se você tivesse 5 diferentes arquivos de folhas de estilo, qual seria a melhor forma de integrá-los no site?
* Descreva a diferença entre _progressive enhancement_ and _graceful degradation_.
* Como você pode otimizar os recursos de um site?
* Quantos recursos um navegador pode baixar, simultaneamente, de um determinado domínio?
  * Quais são as exceções?
* Descreva 3 formas de diminuir o _page load_ (tempo de carregamento real ou percebido)
* Se você caísse em um projeto que as pessoas usam _tabs_ para indentação e você usa espaços, o que você faria?
* Descreva como criaria uma simples página com um _slideshow_
* Se você pudesse dominar uma tecnologia este ano, qual seria?
* Explique a importância de normas e órgãos normativos.
* O que é _Flash of Unstyled Content_? Como você evita FOUC?
* Explique o que são ARIA e leitores de tela, e como fazer um site de web acessivel.
* Explique alguns contras e a favor de usar animações em CSS em vez de Javascript.
* O que significa CORS e qual é o problema que resolve?
* Como resolveria um desentendimento com um patrão ou colega?
* Que recursos usa para aprender sobre as tendencias em desenvolvimento front-end e design?
* Quais so as qualificações necessarias para ser um bom programador de front-end?
* Em que cargo você se vê?
* Explique a diferença entre _cookies_, _session storage_ e _local storage_.

#### [⬆](#toc) <a name='html'>Questões de HTML:</a>

* Qual é a função de `doctype`?
* Como se serve uma página com conteúdo em múltiplos idiomas?
* Que tipo de coisas que você deve tomar cuidado ao desenvolver um website multi-língua?
* Quais são os benefícios em utilizar o atributo `data-`?
* Considere o HTML5 como uma plataforma web aberta. Quais são os blocos de construção de HTML5?
* Descreva a diferença entre `cookie`, `sessionStorage` e `localStorage`.
* Descreva a diferença entre `<script>`, `<script async>` e `<scrypt defer>`.
* Porque é, geralmente, uma boa ideia colocar os `<link>` CSS entre `<head></head>` e JS `<script>` diretamente antes de `</body>`? Conhece exceções?
* O que é _progressive rendering_?
* Porque usaria um atributo `srcset` numa tag imagem? Explique o processo que o navegador usa quando avalia o atributo.
* Utilisou diferentes linguagens de _HTML templating_?
* Qual é a diferença entre `canvas` e `svg`?
* O que são elementos vazios (elementos nulos) em HTML?

#### [⬆](#toc) <a name='css'>Questões de CSS:</a>

* O que é a especificidade de um seletor CSS e como funciona?
* Qual é a diferenca entre _resetting_ e _normalizing_ em CSS? Qual escolheria e por quê?
* Descreva _floats_ e como funcionam.
* Descreva z-index e como o empilhamento do contexto é formado.
* Descreva BFC (_Block Formatting Context_) e como funciona.
* Quais são as várias técnicas para _clearing_ e quais delas são apropriadas para que contexto?
* Qual seria a sua abordagem para resolver problemas de estilo relacionados com browsers diferentes?
* Como desenvolve uma página para navegadores com recursos limitados?
  * Quais técnicas/processos que usa?
* Quais são as diferentes formas de utilizar conteúdo escondido (e como fazer para deixá-los disponíveis apenas para leitores de tela?)
* Já utilizou algum sistema de _grid_, se sim, qual você prefere?
* Já utilizou ou implementou _media queries_ ou CSSs específicos para mobile?
* Qual é sua familiaridade com estilos em SVG?
* Consegue dar um exemplo de de uma propriedade `@media` que não seja `screen`?
* Quais são algumas técnicas para escrever CSS eficiente?
* Quais são as vantagens/desvantagens de usar pré-processadores CSS?
  * Descreva o que você gostou e o que não gostou com de pré-processadores que usou.
* Como você implementaria um website que não utilizaria fontes padrões?
* Explique como um navegador determina quais os elementos que correspondem a um seletor CSS.
* Descreva pseudo-elementos e como são utilizados.
* Explique o que você entende sobre _box model_ e como você poderia dizer para o navegador en CSS para renderizar seu layout em diferentes _box models_.
* O que `* { box-sizing: border-box; }` faz? Quais são as vantagens?
* Qual é a função da propriedade `display`? Dê alguns exemplos de como pode ser usada.
* Qual é a diferença entre `inline` e `inline-block`?
* Qual é a diferença entre seletores `nth-of-type()` e `nth-child()`?
* Qual é a diferença entre elementos posicionados de forma relativa, fixa, absoluta e estática (`relative`, `fixed`, `absolute` and `static`)?
* Quais _frameworks CSS_ você tem usado localmente ou em produção?
  * Como você mudaria/melhoraria ele(s)?
* Alguma vez usou _CSS Grid_?
* Explique a diferença entre desenvolver um site para ser responsivo ou usando uma tática _Mobile First_?
* Você já trabalhou com gráficos retina? Se sim, quando e quais técnicas você usou?
* Qual a razão porque usaria `translate()` em vez de _absolute positioning_, ou vice-versa? Por quê?
* O que é a propriedade de CSS `clearfix` e como é usada?
* Explique a diferença entre px, em e rem relacionados com o tamanho da fonte.
* Pode dar um exemplo de uma _pseudo class_? Pode dar um exemplo de como é utilizada?
* Qual é a diferença entre elementos _block level_ e elementos _inline_. Pode dar exemplos de cada tipo de elemento?

#### [⬆](#toc) <a name='js'>Questões de JS:</a>

* Explique a delegação de eventos (_event delegation_).
* Explique como `this` funciona em JavaScript.
  * Dê um exemplo de como o uso de `this` mudou com ES6.
* Explique como funciona herança prototípica.
* Qual a diferença entre uma variável  `null`,  `undefined` ou `undeclared`?
  * Como verificar esses estados?
* O que é uma _closure_, e como/por que você usaria uma?
* Que construções da linguagem javascript se usa para iterar por propridades de um objeto ou elementos de um array?
* Descreva a diferença principal entre os metodos `Array.forEach()` e `Array.map()`. Por que usaria um em vez do outro?
* Qual o caso de uso típico para funções anônimas?
* Qual a diferença entre objetos herdados e objetos nativos?
* Qual a diferença entre: `function Person(){}`, `var person = Person()`, e `var person = new Person()`?
* Quais são as diferenças do uso de `foo` entre `function foo() {}` e `var foo = function() {}`
* Explique como funciona `Function.call` e `Function.apply`? Qual a diferença mais importante?
* Explique `Function.prototype.bind`.
* Qual a diferença entre _feature detection_, _feature inference_, e o uso de _UA string_?
* Explique o que é _hoisting_.
* Descreva o que é borbulhar do evento (_event bubbling_).
* Descreva o que é captura do evento (_event capturing_).
* Qual a diferença entre um "atributo" e uma "propriedade"?
* Quais são os pros e contras da extensão de objetos nativos em Javascript?
* Qual a diferença entre `==` e `===`?
* Explique a política de _same-origin_ em relação a Javascript.
* Porque é chamado um operador condicional ternário, o que a palavra "ternário" indica?
* O que é o `"use strict";`? Quais a vantagens e desvantagens de sua utilização?
* Quais as vantagens a desvantages de escrever código Javascript numa linguagem que é compilada para Javascript?
* Que instrumentos e técnicas usa para depurar código Javascript?
* Explique a diferença entre objetos mutáveis e imutáveis.
  * Dê um exemplo de um objeto imutável em Javascript
  * Quais são os pros e contras da imutabilidade?
  * Como consegue desenvolver imutabilidade no seu código?
* Explique a diferença entre funções síncronas e assíncronas.
* O que é o loop de eventos?
  * Qual a diferença entre a pilha de chamadas (_call stack_) e a fila de chamadas (_stack queue_)?
* Quais as diferenças entre variáveis criadas usando o `let`, `var` ou `const`?
* Quais as diferenças entre uma classe em ES6 e construtores de função em ES5?
* Dê um exemplo do uso para a sintaxe das funções de seta `=>`? Como a nova sintaxe difere de outras funções?
* Qual a vantagem de usar a sintaxe de seta para o metodo em um construtor?
* Qual é a definição de uma função de ordem superior?
* Dê um exemplo de desestruturação de um objeto ou array.
* Dê um exemplo da geração de uma _string_ usando _Template Literals_ em ES6.
* Dê um exemplo de uma _curry function_ e as vantagens da sintaxe?
* Quais os benificios de usar `spread syntax` e quais as diferencas com `rest syntax`?
* Como partilhar código entre ficheiros?
* Qual a razão para criar membros de classe estáticos?
* Qual a diferenca entre loops `while` e `do-while` em JavaScript?
* O que é uma _promise_? Onde, e como usaria uma _promise_?

## Questões de código
* Faça isso funcionar:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Crie um loop for que itere até `100` enquanto retorna **fizz** em múltiplos de `3`, **buzz** em múltiplos de `5` e **fizzbuzz** em múltiplos de `3` e `5`.
* O que será retornado de cada um desses?
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```
* Escreva uma função de invocação imediata (IIFE - Immediately Invoked Function Expression)

#### [⬆](#toc) <a name='testing'>Questões de teste:</a>

* Quais são algumas vantagens / desvantagens de testar seu código?
* Que ferramentas usaria para testar a funcionalidade do seu código?
* Qual é a diferença entre um teste de unidade e um teste funcional / de integração?
* Qual é a finalidade de uma ferramenta de linting de estilo de código?
* Quais são algumas das práticas recomendadas para efetuar testes?

#### [⬆](#toc) <a name='performance'>Questões de performance:</a>

* Que ferramentas você usaria para encontrar um bug de performance em seu código?
* Quais são algumas maneiras de melhorar o desempenho de rolagem do seu site?
* Explique a diferença entre layout, pintura e composição.

#### [⬆](#toc) <a name='network'>Questões de rede:</a>

* Tipicamente, porque é melhor servir os assets do site de multiplos dominios?
* Descreva o processo do momento em que digita o URL de um site até ele ser carregado na tela.
* Quais as diferenças entre _Long-Polling_, _Websockets_ e _Server-Sent Events_?
* Explique os seguintes cabeçalhos de solicitação e resposta:
  * Diferença entre _Expires_, _Date_, _Age_ e _If-Modified_
  * _Do Not Track_
  * _Cache-Control_
  * _Transfer-Encoding_
  * _ETag_
  * _X-Frame-Options_
* O que são métodos HTTP? Liste e explique os métodos HTTP que conhece.
* O que é pré-busca (_prefetching_) de domínio e como isso ajuda na performance?
* O que é um CDN e qual é a sua vantagem?

#### [⬆](#toc) <a name='jscode'>Questões de código:</a>

Questão: Qual é o valor de `foo`?
```javascript
var foo = 10 + '20';
```

Questão: Qual o retorno do código abaixo?
```javascript
console.log(0.1 + 0.2 == 0.3);
```

Questão: Como você faria isso funcionar?
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Questão: Qual valor é retornado da seguinte declaração?
```javascript
"sou uma lasanha".split("").reverse().join("");
```

Questão: Qual é o valor de `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) );
```

Questão: Qual o retorno dos dois alerts abaixo?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Questão: Qual o valor de `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Questão: Qual o valor d `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Questão: O que o código abaixo imprime na tela?
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
```

Questão: Qual a diferença entra essas quatro promessas?
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

Questão: Qual será a saída do código abaixo para o console e por quê?
```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Questão: Considere as duas funções abaixo. Ambos retornarão a mesma coisa? Por que ou por que não?
```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```


#### [⬆](#toc) <a name='fun'>Questões Divertidas:</a>

* Qual a coisa mais legal que você desenvolveu recentement? Qual você ficou mais orgulhoso?
* Quais suas partes favoritas sobre as ferramentas de desenvolvimento que você usa?
* Você teve algum projeto prediletos? Qual tipo?
* Qual sua feature favorita do Internet Explorer?

#### [⬆](#toc) <a name='license'>Licença:</a>

Lançado sobre a [Licença MIT](http://opensource.org/licenses/MIT). Veja o arquivo LICENSE para detalhes.
