---
title: Perguntas para Entrevista de Desenvolvedor Front-End
layout: layouts/page.njk
permalink: /translations/portuguese/index.html
lang: pt
---


## <a name='toc'>Índice</a>

1. [Perguntas Gerais](#general)
1. [Perguntas sobre HTML](#html)
1. [Perguntas sobre CSS](#css)
1. [Perguntas sobre JS](#js)
1. [Perguntas sobre Testes](#testing)
1. [Perguntas sobre Desempenho](#performance)
1. [Perguntas sobre Rede](#network)
1. [Perguntas Divertidas](#fun)


#### [[⬆]](#toc) <a name='general'>Perguntas Gerais:</a>

* O que você aprendeu ontem/esta semana?
* O que mais te interessa sobre programação?
* Qual foi um desafio técnico recente que você enfrentou e como o resolveu?
* Ao criar um novo site ou ao mantê-lo, pode explicar algumas técnicas que usou para aumentar o desempenho?
* Pode descrever algumas boas práticas de SEO ou técnicas que usou recentemente?
* Pode explicar algumas técnicas comuns ou problemas recentes resolvidos em relação à segurança de front-end?
* Quais ações você tomou pessoalmente em projetos recentes para aumentar a manutenibilidade do seu código?
* Fale sobre seu ambiente de desenvolvimento preferido.
* Com quais sistemas de controle de versão você está familiarizado?
* Pode descrever seu fluxo de trabalho ao criar uma página web?
* Se você tiver 5 folhas de estilo diferentes, como integraria elas ao site da melhor forma?
* Pode descrever a diferença entre aprimoramento progressivo e degradação graciosa?
* Como você otimizaria os ativos/recursos de um site?
* Quantos recursos um navegador baixará de um domínio específico de cada vez?
  * E quais são as exceções?
* Cite 3 maneiras de diminuir o carregamento da página (tempo de carregamento percebido ou real).
* Se você ingressasse em um projeto e eles usassem tabs e você usasse espaços, o que você faria?
* Descreva como você criaria uma página de apresentação de slides simples.
* Se você pudesse dominar uma tecnologia este ano, qual seria?
* Explique a importância dos padrões e dos órgãos normativos.
* O que é Flash de Conteúdo Não Estilizado? Como você evita o FOUC?
* Explique o que são ARIA e leitores de tela, e como tornar um site acessível.
* Explique alguns dos prós e contras das animações CSS versus animações JavaScript.
* O que CORS significa e que problema ele aborda?
* Como você lidou com um desacordo com seu chefe ou colaborador?
* Quais recursos você usa para aprender sobre as últimas novidades em desenvolvimento e design de front-end?
* Quais habilidades são necessárias para ser um bom desenvolvedor front-end?
* Qual papel você vê para si mesmo?
* Explique a diferença entre cookies, armazenamento de sessão e armazenamento local?
* Você pode explicar o que acontece quando você insere uma URL no navegador?

#### [[⬆]](#toc) <a name='html'>Perguntas sobre HTML:</a>

* O que um `doctype` faz?
* Como você serve uma página com conteúdo em vários idiomas?
* De que tipo de coisas você deve estar ciente ao projetar ou desenvolver para sites multilíngues?
* Para que servem os atributos `data-`?
* Considere o HTML5 como uma plataforma web aberta. Quais são os blocos de construção do HTML5?
* Descreva a diferença entre um `cookie`, `sessionStorage` e `localStorage`.
* Descreva a diferença entre `<script>`, `<script async>` e `<script defer>`.
* Por que geralmente é uma boa ideia posicionar os `<link>`s CSS entre `<head></head>` e os `<script>`s JS logo antes de `</body>`? Você conhece alguma exceção?
* O que é renderização progressiva?
* Por que você usaria um atributo `srcset` em uma tag de imagem? Explique o processo que o navegador usa ao avaliar o conteúdo desse atributo.
* Você já usou diferentes linguagens de modelagem HTML antes?
* Qual é a diferença entre `canvas` e `svg`?
* O que são elementos vazios em HTML?


#### [[⬆]](#toc) <a name='css'>Perguntas sobre CSS:</a>

* O que é especificidade do seletor CSS e como funciona?
* Qual é a diferença entre "resetar" e "normalizar" o CSS? Qual você escolheria e por quê?
* Descreva Floats e como eles funcionam.
* Descreva z-index e como o contexto de empilhamento é formado.
* Descreva BFC (Contexto de Formatação de Bloco) e como funciona.
* Quais são as várias técnicas de limpeza e qual é apropriada para qual contexto?
* Como você abordaria a correção de problemas de estilização específicos do navegador?
* Como você serve suas páginas para navegadores com recursos limitados?
  * Quais técnicas ou processos você utiliza?
* Quais são as diferentes maneiras de ocultar visualmente o conteúdo (e torná-lo disponível apenas para leitores de tela)?
* Você já usou um sistema de grid e, se sim, qual você prefere?
* Você já usou ou implementou media queries ou layouts/CSS específicos para dispositivos móveis?
* Você está familiarizado com a estilização de SVG?
* Você pode dar um exemplo de uma propriedade `@media` diferente de `screen`?
* Quais são algumas das "pegadinhas" ao escrever CSS eficiente?
* Quais são as vantagens/desvantagens de usar pré-processadores de CSS?
  * Descreva o que você gosta ou não gosta nos pré-processadores de CSS que você já utilizou.
* Como você implementaria um comp de design web que usa fontes não padrão?
* Explique como um navegador determina quais elementos correspondem a um seletor CSS.
* Descreva o que são pseudo-elementos e explique para que são usados.
* Explique sua compreensão do modelo de caixa e como você diria ao navegador em CSS para renderizar seu layout em diferentes modelos de caixa.
* O que ```* { box-sizing: border-box; }``` faz? Quais são suas vantagens?
* Qual é a propriedade `display` do CSS e você pode dar alguns exemplos de seu uso?
* Qual é a diferença entre inline e inline-block?
* Qual é a diferença entre os seletores "nth-of-type()" e "nth-child()"?
* Qual é a diferença entre um elemento posicionado de forma relativa, fixa, absoluta e estática?
* Quais frameworks CSS existentes você usou localmente ou em produção? Como você os mudaria/melhoraria?
* Você já usou CSS Grid?
* Você pode explicar a diferença entre codificar um site para ser responsivo versus usar uma estratégia mobile-first?
* Você já trabalhou com gráficos retina? Se sim, quando e quais técnicas você usou?
* Há alguma razão pela qual você gostaria de usar `translate()` em vez de *posicionamento absoluto*, ou vice-versa? E por quê?
* Como a propriedade css clearfix é útil?
* Você pode explicar a diferença entre px, em e rem em relação ao dimensionamento de fontes?
* Você pode dar um exemplo de uma pseudo classe? Você pode fornecer um exemplo de uso para uma pseudo classe? 
* Qual é a diferença entre um elemento de nível de bloco e um elemento inline. Você pode fornecer exemplos de cada tipo de elemento?
* Qual é a diferença entre CSS Grid e Flexbox? Quando você usaria um em vez do outro?

#### [[⬆]](#toc) <a name='js'>Perguntas sobre JS:</a>

* Explique a delegação de eventos.
* Explique como `this` funciona em JavaScript.
  * Você pode dar um exemplo de uma das maneiras que trabalhar com `this` mudou no ES6?
* Explique como funciona a herança prototipal.
* Qual é a diferença entre uma variável que é: `null`, `undefined` ou não declarada?
  * Como você procederia para verificar qualquer um desses estados?
* O que é um fechamento (closure) e como/por que você usaria um?
* Quais construções de linguagem você usa para iterar sobre propriedades de objetos e itens de array?
* Você pode descrever a principal diferença entre o loop `Array.forEach()` e os métodos `Array.map()` e por que você escolheria um em vez do outro?
* Qual é um caso de uso típico para funções anônimas?
* Qual é a diferença entre objetos host e objetos nativos?
* Explique a diferença entre: `function Person(){}`, `var person = Person()` e `var person = new Person()`?
* Explique as diferenças no uso de `foo` entre `function foo() {}` e `var foo = function() {}`
* Você pode explicar o que `Function.call` e `Function.apply` fazem? Qual é a diferença notável entre os dois?
* Explique `Function.prototype.bind`.
* Qual é a diferença entre detecção de recursos, inferência de recursos e uso da string UA?
* Explique "hoisting".
* O que é coerção de tipo? Quais são as armadilhas comuns ao confiar na coerção de tipo no código JavaScript?
* Descreva a propagação de eventos.
* Descreva a captura de eventos.
* Qual é a diferença entre um "atributo" e uma "propriedade"?
* Quais são os prós e contras de estender objetos JavaScript integrados?
* Qual é a diferença entre `==` e `===`?
* Explique a política de mesma origem em relação ao JavaScript.
* Por que é chamado de operador Ternário, o que a palavra "Ternário" indica?
* O que é o modo estrito? Quais são algumas das vantagens/desvantagens de usá-lo?
* Quais são algumas das vantagens/desvantagens de escrever código JavaScript em uma linguagem que compila para JavaScript?
* Quais ferramentas e técnicas você usa para depurar código JavaScript?
* Explique a diferença entre objetos mutáveis e imutáveis.
  * Qual é um exemplo de um objeto imutável em JavaScript?
  * Quais são os prós e contras da imutabilidade?
  * Como você pode alcançar a imutabilidade em seu próprio código?
* Explique a diferença entre funções síncronas e assíncronas.
* O que é o loop de eventos?
  * Qual é a diferença entre pilha de chamadas (call stack) e fila de tarefas (task queue)?
* Quais são as diferenças entre as variáveis criadas usando `let`, `var` ou `const`?
* Quais são as diferenças entre a classe ES6 e os construtores de função ES5?
* Você pode oferecer um caso de uso para a nova sintaxe de função de seta `=>`? Como essa nova sintaxe difere de outras funções?
* Qual é a vantagem de usar a sintaxe de seta para um método em um construtor?
* Qual é a definição de uma função de ordem superior?
* Você pode dar um exemplo de desestruturação de um objeto ou de um array?
* Você pode dar um exemplo de geração de uma string com Literais de Template ES6?
* Você pode dar um exemplo de uma função curry e por que essa sintaxe oferece uma vantagem?
* Quais são os benefícios de usar a `sintaxe spread` e como ela é diferente da `sintaxe rest`?
* Como você pode compartilhar código entre arquivos?
* Por que você pode querer criar membros de classe estáticos?
* Qual é a diferença entre os loops `while` e `do-while` em JavaScript?
* O que é uma promessa? Onde e como você usaria uma promessa?
* Explique como você pode usar os princípios da Programação Orientada a Objetos ao codificar com JavaScript.

## Coding questions
* Faça isso funcionar:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Crie um loop for que itere até `100` enquanto produz **"fizz"** em múltiplos de `3`, **"buzz"** em múltiplos de `5` e **"fizzbuzz"** em múltiplos de `3` e `5`
* O que será retornado por cada um destes?
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```
* Escreva uma função em JavaScript imediatamente invocada (IIFE)


#### [[⬆]](#toc) <a name='testing'>Perguntas sobre Testes:</a>

* Quais são algumas vantagens/desvantagens ao testar seu código?
* Quais ferramentas você usaria para testar a funcionalidade do seu código?
* Qual é a diferença entre um teste unitário e um teste funcional/integração?
* Qual é o propósito de uma ferramenta de linting de estilo de código?
* Quais são algumas das melhores práticas de teste?


#### [[⬆]](#toc) <a name='performance'>Perguntas sobre Desempenho:</a>

* Quais ferramentas você usaria para encontrar um bug de desempenho em seu código?
* Quais são algumas maneiras de melhorar o desempenho de rolagem do seu site?
* Explique a diferença entre layout, pintura e composição.

#### [[⬆]](#toc) <a name='network'>Perguntas sobre Rede:</a>

* Tradicionalmente, por que tem sido melhor servir ativos do site a partir de vários domínios?
* Descreva o processo desde o momento em que você digita a URL de um site até ele terminar de carregar na sua tela.
* Quais são as diferenças entre Long-Polling, Websockets e Server-Sent Events?
* Explique os seguintes cabeçalhos de solicitação e resposta:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* Quais são os métodos HTTP? Liste todos os métodos HTTP que você conhece e explique-os.
* O que é pré-busca de domínio e como isso ajuda no desempenho?
* O que é uma CDN e qual é o benefício de usar uma?

#### [[⬆]](#toc) <a name='fun'>Perguntas Divertidas:</a>

* Qual é um projeto legal em que você trabalhou recentemente?
* Quais são algumas coisas que você gosta nas ferramentas de desenvolvedor que você usa?
* Quem te inspira na comunidade front-end?
* Você tem algum projeto pessoal? De que tipo?
