#Questões para entrevista para profissionais Front-end

@versão 1.0

**Nota:** Este repositório contém perguntas que podem ser usadas para contratação de um candidato em potencial. Porém, não é recomendado a utilização de cada pergunta para o mesmo candidato (isso levaria horas). Escolhendo alguns items, a lista irá ajudar a analisar as competências requisitadas. 

Tenha em mente que muitas dessas questões estão em aberto e poderiam levar a discussões interessantes que irão revelar mais sobre as competências da pessoa do que uma resposta.

 
####Contribuidore



**Nota:** A maioria das perguntas foram retiradas de um tópico criado e contribuido pelas seguintes pessoas:

* @bentruyman (http://bentruyman.com)
* @cowboy (http://benalman.com)
* @roger_raymond (http://twitter.com/iansym)
* @ajpiano (http://ajpiano.com)
* @paul_irish (http://paulirish.com)
* @SlexAxton (http://alexsexton.com)
* @boazsender (http://boazsender.com)
* @miketaylr (http://miketaylr.com)
* @vladikoff (http://vladfilippov.com)
* @gf3 (http://gf3.ca)
* @jon_neal (http://twitter.com/jon_neal)
* @wookiehangover (http://wookiehangover.com)
* @darcy_clarke (http://darcyclarke.me)
* @tairraos (http://xiaole.happylive.org)

### Questões Gerais:

* Vocêe está no Twitter? 
	* Se sim, quem você segue?
* Você está no GitHub?
	* Se sim, quais repositórios você segue?
* Quais blogs você lê?
Qual Sistema de Controle de Versão você tem usado? (Git, SVN etc.)?
Qual seu ambiente de trabalho preferido? (SO's, Editores, Browsers, Ferramentas etc.) 
* Você pode descrever o seu ambiente de trabalho quando você cria uma página?
* Você poderia descrever qual a diferença entre progressive enhancement e graceful degradation?
	* Pontos bônus se descrever detecção de recursos.
* Explique o que "HTML Semântico" significa.
* Qual browser você usa principalmente para desenvolvedor e quais ferramentas de desenvolvimento você usa?
* Como você optimiza os recursos de um website?
	* Uma série de soluções podem ser incluídas:
		* Concatenação de arquivos
		* Minificação de arquivos
		* Hospedar em um CDN os arquivos estáticos
		* Caching
		* etc.
* Porque é muito melhor utilizarmos recursos de um website vindo de vários domínios?
	* Quanto recursos irão ser baixados de um determinado dominío por vez?
* Exemplifique 3 modos de dominuir o tempo de carregamento. (tempo de carregamento real ou percebido)
* Se você entrasse em um projeto onde foram utilizados TABS para indentação e você usa ESPAÇOS, o que você faria?
	* Sugerir para o projeto a utilização de algo como o EditorConfig (http://editorconfig.org)
	* Conformarcom as convenções (ficar consistente)
	* `issue :retab! command`
* Desenvolva uma página simples para apresentação de slides 
	* Pontos bônus se não utilizar JS.
* Quais ferramentas você usa para testar a perfomance do seu código?
	* JSPerf (http://jsperf.com/)
	* Dromaeo (http://dromaeo.com/) 
	* etc.

* Se você pudesse dominar uma tecnologia este ano, o que seria?
* Explique a importância de padrões e padrões organizacionais.
* O que é FOUC? Como evitamos o FOUC?  

### Questões específicas de HTML
* O que `doctype` faz, e quantos você consegue nomear?
* Qual a diferença entre stardads mode e quirks mode?
* Quais as limitações quando utilizamos páginas XHTML?
	* Existe algum problema em utilizar páginas como application/xhtml+xml`?
* Como você desenvolve uma página como conteúdo em múltiplos idiomas?
	* Que tipo de coisas que você deve ser cauteloso em está desenvolvendo um website multi-língua?
* Você pode utilizar a sintaxe XHTML no HTML5?
* Como você usa XML no HTML5?
* Quais são os benefícios em utilizar o atributo `data-`?
* Quais são os modelos de conteúdo do HTML4 e eles são diferentes em HTML5?
* Considere o HTML5 como uma plataforma web aberta. Quais são os 
* Consider HTML5 as an open web platform. Quais são os blocos de construção de HTML5?
* Descreva a diferença entre cookies, sessionStorage e localStorage.

### Questões específicas de Javascript
* Quais bibliotecas Javascript você tem usado?
* Você alguma vez já olhou no código de alguma biblioteca/framework que você utilizou?
* Quais a diferença entre Javascript e Java?
* O que é um hashtable?
* Qual a diferença entre variáveis `undefined` e variáveis `undeclared`?
* O que é uma closure, e como/porque você usaria uma?
	* Seu padrão favorito a ser utilizar por ele? Argyle (Apenas aplicáveis para IIFEs)
* Qual o típico uso de uma função anônima?
* Explique o padrão "JavaScript module pattern" e quando você o usaria.
	* Pontos bônus para menção de namespaces limpos.
	* E se seus módulos são namespace-less?
* Como você utiliza seu código? (Module Pattern, )
* How do you organize your code? (module pattern, Herança clássica?) 
* Qual a diferença entre objetos herdados e objetos nativos? 
* Diferencie: 
```javascript
function Person(){} var person = Person() var person = new Person()
```
* Qual a diferença entre `.call` e `.apply`? 
* Explique: `Function.prototype.bind`? 
* Quando você otimiza seu código?
* Você pode explicar como funciona a herença no Javascript?
* Quando você deve usar o `document.write()`?
	* A maioria dos anúncios de publicidade ainda utilizam `document.write ()` embora seu uso é não recomendado.
* Qual a diferença entre feature detection, feature inference, e o uso de UA string?
* Explique o que é AJAX mais detalhadamente possível.
* Explique como o JSONP funciona (e como ele realmente não é AJAX).
* Você já utilizou templates com Javascript?
	* Se sim, quais bibliotecas foram utilizadas? (Mustache.js, Handlebars etc.) 
* Explique o que é "hoisting".
* Descreva o que é event bubbling. 
* Qual a diferença entre attribute e property.
* Porque a extensão de objetos nativos não são uma boa idéia?
* Porque a extensão de elementos nativos não são uma boa idéia?
* Qual a diferença entre o evento document load e o evento document ready?
* Qual a diferença entre `==` e `===`? 
* Explique como você pega uma query string pela url do browser.
* Explique a política de same-origin em relação a Javascript. 
* Explique o que é event delegation. 
* Descreva os padrões de herança em JavaScript. 
* Faça isso funcionar: 
```javascript
[1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```
* Descreva a estratégica para memoization (evitar a repetição de cálculo) no JavaScript. 
* O que é um operador tornario, o que a palavra "ternário" indica/significa?
* O que a aridade de uma função?  
* O que é o `"use strict";`? Quais a vantagens e desvantagens de sua utilização?

### Exemplos de código Javascript:

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
Questão: Qual é o valor de window.foo?
**Resposta: "bar"** 
Apenas se window.foo for falso, se não ele vai retornar o seu valor próprio.

```javascript
var foo = "Olá"; (function() { var bar = " Mundo"; alert(foo + bar); })(); alert(foo + bar);
```
Questão: Qual o retorno destes dois alerts? 
**Resposta: "Olá Mundo" & ReferenceError: bar is not defined** 

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
Questão: Qual é o valor de foo.length? 
**Resposta: `2`

```javascript
var foo = {};
foo.bar = 'hello';
```
Questão: Qual é o valor de foo.length? 
**Resposta: `undefined`

```javascript
foo = foo||bar
```
Questão: Qual o significado disso?
**Resposta: if(!foo) foo = bar

```javascript
foo>>1
```
Questão: Qual o significado disso?
**Resposta: Math.floor(foo/2)

```javascript
foo|0
foo+.5|0
```
Questão: Qual o significado disso?
**Resposta: parseInt(foo) & Math.round(foo)

```javascript
function foo(bar1, bar2, bar3){}
```
Questão: Como posso pegar a quantidade de parâmetros?
**Resposta: foo.length //this example is 3


### Questões específicas de jQuery

* Explique o que é "chaining". 
* Explique o que é "deferreds".
* Quais são algumas especificações de optimização do jQuery qye você pode implementar?
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
* 
* CSS Hacks, arquivo condicional .css, ou... outra coisa? 
* Como você desenvolve sua página para browsers com recursos limitados?
	* Quais técnicas/processos você usa?
* Quais são os diferentes modos de deixar o conteúdo escondio (e como fazemos para deixar eles disponíveis apenas para leitores de tela?)
* Você já alguma vez já utilizou um sistema de grid, se sim, qual você prefere?
* Você já utilizou ou implementou media queries ou css's específicos para celular?
* Qual sua familiaridade com SVG?
* Como você optimiza suas páginas para impressão?
* Quais são algumas técnicas para escrever um eficiente CSS?
* Você já utilizou pré-processadores css? (SASS, Compass, Stylus, LESS) 
	* Se sim, descreva o que você gostou e o que não gostou com eles.
* Como você implementaria um website que não utilizaria fontes padrões nos computadores?
	* Webfonts (Serviços como: Google Webfonts, Typekit etc.)
* Explique como um browser determina quais os elementos que correspondem a um seletor CSS?

### Questões Opcionais de brincadeiras

* Qual a coisa mais legal que você desenvolveu, qual você ficou mais orgulhoso?
* Você sabe qual o aperto de mão da gangue do HTML5?
* Você está agora, ou já esteve... num barco?
* Quais suas partes favoritas sobre as ferramentas de desenvolvimento que você usa?
* Você teve algum projeto para animais de estimação? Qual tipo?

* Explica a importância da "Unicornização".
* Num pedaço de papel, escreva as letras A B C D E verticalmente. Agora coloque 
* On a piece of paper, write down the letters A B C D E vertically. Agora coloque isso em ordem decrescente, sem escrever uma linha de código.
	* Esperar e ver se eles vire o papel de cabeça para baixo
* Pirata ou Ninja? 
	* Bônus se ele fizer um combo ou com uma boa razão. (+2 para zombie macaco pirata vestido de ninja) 
* Se você não estiver desenvolvendo, o que você estaria fazendo?
* Aonde no mundo fica o Acre?
	* Dica: A resposta sempre será errada.
* Qual sua feature favorita do Internet Explorer?
* Complete essa sentença: Brendan Eich e Doug Crockford são os __________ do javascript.
* jQuery: uma boa biblioteca ou a melhor biblioteca? Discutam.
* http://www.w3schools.com/ ou http://w3fools.com/
