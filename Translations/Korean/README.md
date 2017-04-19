# **프론트엔드 개발자 면접 질문**

이 문서에는 프론트 엔드 개발 지원자 면접에 사용할 수 있는 여러가지 면접 질문이 포함되어 있습니다.
지원자에게 모든 면접 질문을 사용하는 것은 추천하지 않습니다(아마 몇시간이 걸릴 것입니다).
해당 리스트에서 몇가지 질문을 골라 질문하면, 필요한 전공 지식 확인에 도움이 됩니다.

**공지:**  이 질문들 중 대다수의 질문은 유동적인 질문이기 때문에, 직설적인 답변보다는 지원자의 능력에 대해 알고 더 흥미로운 이야기로 이어질수 있다는 점을 기억하세요.

[M4steM4](https://github.com/M4steM4)에 의해 2017년 4월 19일에 번역되었습니다.


## 목차

 1. [일반적인 질문](#일반적인-질문)
 1. [HTML 질문](#HTML-질문)
 1. [CSS 질문](#CSS-질문)
 1. [JavaScript 질문](#JavaScript-질문)
 1. [Testing 질문](#Testing-질문)
 1. [Performance 질문](#Performance-질문)
 1. [Network 질문](#Network-질문)
 1. [코딩 질문](#코딩-질문)
 1. [흥미로운 질문](#흥미로운-질문)


## 기타 사항

 1. [도움을 주신분들](#contributors)
 1. [How to Contribute](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
 1. [라이센스](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)


#### 일반적인 질문

 * 어제 혹은 이번주에 어떤것을 공부했었나요?
 * 코딩에 대해 흥미롭거나 관심있는것이 있나요?
 * 최근에 경험했던 기술적인 도전은 무엇이며, 어떻게 해결했나요?
 * 지원자가 웹 프로그램를 개발하는 동안 UI, 보안, 성능, SEO, 유지관리같은 기술적 고려사항으로는 어떤것이 있었나요?
 * 지원자가 선호하는 개발 환경에 대해 자유롭게 말씀해주세요.
 * 어떤 버전 컨트롤 시스템이 친숙한가요?
 * 웹페이지를 제작 시 지원자의 작업 흐름을 설명해주실수 있나요?
 * 만약 지원자가 5개의 스타일시트를 가지고 있을때, 어떻게 5개의 스타일시트를 포함시킬것인가요?
 * 점진적 향상법(progressive enhancement)과 우아한 성능저하법(graceful degradation)의 차이점을 설명해주실 수 있나요?
 * 어떻게 하면 웹사이트의 자원을 최적화 할 수 있나요?
 * 브라우저는 특정 도메인에서 얼마나 많은 리소스를 다운로드 하나요?
        * 그 중 예외는 무엇인가요?
 * 페이지 로딩시간을 줄이는 3가지 방법을 말씀해주세요(인지 또는 실제 로딩 시간).
 * 지원자가 어떤 프로젝트에 참여하게 되었는데, 그 프로젝트에서는 탭을 사용하고 지원자는 스페이스바를 사용하여 공백을 처리한다면 어떻게 해결 할것인가요?
 * 간단한 `slideshow` 페이지를 만드는것을 설명해주세요.
 * 지원자가 올해 배우고 싶은 한가지 기술이 있나요? 어떤 기술인가요?
 * 표준의 중요함에 대해 설명해주세요.
 * FOUC가 무엇인가요? FOUC를 피하려면 어떻게 해야하나요?
 * ARIA screen reader가 무엇이며, 어떻게 웹사이트에서 접근성을 높이는지 설명해주세요.
 * CSS 애니메이션과 JavaScript 애니메이션의 장단점을 설명해주세요.
 * CORS는 무엇을 의미하며, 주로 어떤 문제를 다루나요?


#### HTML 질문

* `doctype`은 왜 필요한가요?
* 완전 표준 모드와 유사 표준 모드, 호환 모드의 차이점은 무엇인가요?
* HTML과 XHTML의 차이점은 무엇인가요?
* `application/xhtml+xml`로 페이지 서비스시 문제가 발생하나요?
* 여러 언어로 작성된 콘텐츠 페이지는 어떻게 제공해야 할까요?
* 다국어로된 페이지를 디자인, 개발할 경우 주의해야 할 사항은 무엇인가요?
* `data-` 속성의 장점이 있나요?
* HTML5를 웹 플랫폼으로 정의할 때 HTML5의 기본 요소는 무엇인가요?
* `cookie`, `sessionStorage`, `localStorage` 의 차이점을 설명해주세요.
* `<script>`, `<script async>`, `<script defer>`의 차이점을 설명해주세요.
* 왜 CSS `<link>`를 `<head></head>`사이에 두며, JS `<script>`는 `<body></body>`전에 두나요?
    * 혹시 다른 예외상황도 있나요?
* 점진적 렌더링은 무엇인가요?
* 혹시 다른 HTML 템플릿 언어를 사용한 경험이 있나요?


#### CSS 질문

* CSS에서 id와 class의 차이점이 무엇인가요?
* CSS에서 "resetting"과 "normalizing" 차이점이 무엇인가요? 지원자는 주로 어떤걸 사용하며, 왜 사용하나요?
* `float`와 동작 방식에 대해 설명해주세요.
* `z-index`와 stacking context가 문서 내에서 어떻게 적용되는지 설명해주세요.
* BFC(Block Formatting Context)와 그것의 동작 방식에 대해 설명해주세요.
* CSS에서 최적화 기술엔 어떠한것이 있으며, 어떤 상황에 사용하는것이 적합한가요?
* CSS에서 이미지 버튼과 웹페이지에서 이것을 구현하는 방법을 설명해주세요.
* 가장 좋아하는 이미지 대체 기술은 무엇이며, 언제 그 기술을 사용하나요?
* 브라우저 별 스타일링 문제를 해결하는 방법과 그것에 대해 어떻게 생각하나요?
* 기능이 제한적인 브라우저에선 어떻게 페이지를 제공하나요?
    * 어떤 기술이나 방식을 사용하나요?
* 컨텐츠를 시각적으로 숨기는 방법엔 무엇이 있나요(그리고 화면상에서만 처리할 수 있나요)?
* 그리드 시스템을 사용한 경험이 있나요? 있다면 어떤 시스템을 선호하나요?
* 미디어 쿼리 또는 모바일 특정 레이아웃을 CSS를 사용해 구현한 경험이 있나요?
* SVG 스타일링에 익숙하나요?
* 웹페이지를 (화면상으로)출력할 때 어떻게 최적화 하나요?
* 효율적인 CSS를 작성할때 겪는 "어려움"에는 어떠한 것들이 있나요?
* CSS 전처리기를 사용할 때 장단점으론 어떠한 것이 있나요?
* CSS 전처리기에 대해 좋아하는점과 싫어하는점을 설명해주세요.
* 비표준 폰트로 웹 디자인을 구현하는 방법은 무엇인가요?
* 브라우저가 어떻게 요소와 CSS 선택자간의 일치를 결정하는지 설명해주세요.
* 가상 선택자에 대해 설명하고 그것에 대한 의견을 말씀해주세요.
* box 모델링과 어떻게 브라우저마다 다른 CSS box 모델링 레이아웃을 렌더링하는지 설명해주세요.
* `{box-sizing: border-box;}`의 장점과 동작 방식은 무엇인가요?
* 기억하고있는 `display`의 모든 속성값을 말씀해주세요.
* 포지션 엘리먼트인 `relative`, `fixed`, `absolute`의 차이점은 무엇인가요?
* CSS의 C는 cascading을 의미합니다. 그렇다면 스타일 지정시 우선 순위는 어떻게 결정되나요(몇가지 예시가 있나요)?
    * 이 시스템은 어떻게 활용할 수 있나요?
* 기존에 사용했던 CSS 프레임워크는 무엇인가요?
    * 어떻게 그것들을 바꾸거나 개선할 것인가요?
* CSS의 새로운 기술인 Flexbox나 Grid specs를 사용해본 경험이 있나요?
* 반응형 디자인과 적응형 디자인의 차이점은 무엇인가요?
* 시각적 그래픽(retina graphics)을 사용해본 경험이 있나요? 그리고 언제 어떤 기법을 사용했나요?
* 절대 위치 대신 `translate()`를 사용하려는 이유가 있나요?


#### JavaScript 질문

* 이벤트 위임에 대해 설명해주세요.
* 이 기능(JS기능 중 하나)이 JavaScript 내에서 어떻게 동작하는지 설명해주세요.
* 프로토타입 상속이 어떻게 동작하는지 설명해주세요.
* AMD vs CommonJS에 대해 어떻게 생각하나요?
* 왜 이 코드가 IIFE로 작동하지 않는지 이유를 설명해주세요 `function(){}();`.
    * 이 코드가 즉시실행함수로써 작동하기 위해선 어떤부분을 바꿔야 하나요?
* `ㅜnull`, `undefined` 그리고 선언되지 않은 변수의 차이점은 무엇인가요?
    * 또 어떻게 이 변수들의 상태를 구분하나요?
* 클로저는 무엇이며 언제 이것을 사용하나요?
* 언제 익명함수를 사용하나요?
* 코드를 어떻게 구성하나요(모듈 패턴, 객체지향적 상속개념)?
* host objects와 native objects의 차이점이 무엇인가요?
* 함수선언, 함수리터럴, 함수생성자의 차이점이 있나요?
* `.call`, `.apply`의 차이점은 무엇인가요?
* `Function.prototype.bind`를 설명해주세요.
* 만약 `document.write()`를 사용해야 한다면 언제 사용하실껀가요?
* 기능 검출(feature detection)과 기능 추론(feature inference)의 차이점은 무엇인가요?
* Ajax에 대해서 가능한 한 자세히 설명해주세요.
* Ajax 사용시 장단점은 무엇인가요?
* JSONP의 작동 방식을 설명해주세요(실제로 ajax가 아닌 방법).
* 자바스크립트 템플릿을 사용해 본 적이 있나요?
    * 그렇다면 어떤 라이브러리를 사용했나요?
* 호이스팅에 대해 설명해주세요.
* 이벤트 버블링에 대해 설명해주세요.
* 속성(attribute)과 요소(property)의 차이점은 무엇인가요?
* 자바스크립트 내장 객체를 확장하는것이 좋은 방법이 아닌 이유가 무엇인가요?
* Document Load 이벤트와 Ready 이벤트의 차이점은 무엇인가요?
* `==`와 `===`의 차이점은 무엇인가요?
* 자바스크립트의 동일 출처 정책에 대해 설명해주세요.
* 다음 코드가 동작하도록 코드를 작성해주세요:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* 왜 삼항식이라고 불리며, 어떻게 선언하나요?
* `use strict`가 무엇인가요? 그것을 어떤 장단점 때문에 사용하나요?
* "fizz"를 3의배수로 "buzz"를 5의배수로 "fizzbuzz"를 15의 배수로 출력하는 for loop를 만들어보세요.
* 웹 사이트의 글로벌 범위를 수정하지 않는것이 일반적으로 좋은 이유는 무엇인가요?
* 혹시 `load` 이벤트를 사용하나요? 그 이벤트의 단점이 있나요? 그것에 다른 대안을 알고있나요?
* 단일 페이지 앱이 무엇이며, 검색 엔진 최적화 앱을 만드는 방법을 설명해주세요.
* 지원자분의 Promise 및 Polyfill에 대한 경험은 어느정도인가요?
* Callback대신 Promise 사용시 장단점은 무엇인가요?
* JavaScript로 컴파일되는 언어로 JavaScript 코드를 작성할때의 장단점은 무엇인가요?
* JavaScript 코드를 디버깅할때 사용하는 도구와 기술은 무엇이 있나요?
* 오브젝트 프로퍼티와 배열 아이템을 반복하여 사용하기 위해 사용하는 언어구조는 무엇인가요?
* 변경 가능 객체와 변경 불가능 객체의 차이점을 설명해주세요.
    - 자바스크립트 내에서 불변 객체의 예시로 어떠한것이 있나요?
    - 불변 객체의 장단점은 무엇인가요?
    - 자신의 코드에서 불변성을 얻어낼 수 있을까요?
* 동기 함수와 비동기 함수의 차이점을 설명해주세요.
* 이벤트 루프란 무엇입니까?
    * call stack과 task queue의 차이점은 무엇인가요?
* `foo(){}`와 `var foo = function(){}`에서 `foo` 사용법에 대한 차이점을 설명해주세요


#### Testing 질문

* 코드를 테스트함으로써 얻는 장단점은 무엇인가요?
* 코드의 기능을 테스트하기 위해선 어떠한 도구를 사용해야 하나요?
* 단위 테스트, 기능 테스트, 통합 테스트의 차이점은 무엇인가요?
* 코드 스타일 linting tool의 사용 목적은 무엇인가요?


#### Performance 질문

* 코드에서 성능관련 버그를 찾기 위해 사용하는 도구를 어떠한것이 있나요?
* 웹 사이트의 스크롤링 성능을 향상시킬 수 있는 방법이 있나요?
* 레이아웃, 페인팅, 컴포지팅의 차이점을 설명해주세요.


#### Network 질문

* 전통적으로 여러 도메인 사이트의 자원을 제공하는것이 더 좋은 이유는 무엇인가요?
* 웹 사이트의 URL을 입력할 때부터 화면이 로드 될 때까지의 프로세스에 대해 최선을 다해 설명해주세요.
* Long-Polling, Websocket, Server-Sent Events의 차이점은 무엇인가요?
* 다음 요청 및 응답 헤더를 설명해주세요.
    - Diff. between Expires, Date, Age and If-Modified-...
    - Do Not Track
    - Cache-Control
    - Transfer-Encoding
    - ETag
    - X-Frame-Options
* HTTP 메소드란 무엇인가요? 알고있는 모든 HTTP 메소드에 대해 설명해주세요.


#### 코딩 질문

*질문 : `foo`에는 어떤 값이 할당될까요?*
```javascript
var foo = 10 + '20';
```

*질문 : 다음과 같이 작동하는 함수를 만들수 있나요?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*질문 : 실행 결과의 출력값은 무엇인가요?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*질문 : `window.foo`에 할당되는 값은 무엇인가요?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*질문 : 두 alert의 결과값은 무엇인가요?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*질문 : `foo.length`의 값은 무엇인가요?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*질문 : `foo.x`의 값은 무엇인가요?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*질문 : 다음 코드의 출력 순서는 어떻게 되나요?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```


#### 흥미로운 질문

* 최근에 작업한 멋진 프로젝트는 무엇인가요?
* 사용하는 개발자 도구에 대해 좋아하는점은 무엇인가요?
* 프론트엔드 커뮤니티에서 존경하는 사람이 있나요?
* 혹시 애완동물에 관련된 프로젝트가 있나요?
* Internet Explorer의 가장 좋아하는 기능은 무엇인가요?
* 커피 한잔 어떠신가요?


#### Contributors

이 문서는 2009년에 제작되어 여러 사람들의 도움으로 만들어졌습니다. [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed)  [@iansym](https://twitter.com/iansym)

그 이후로 [100명](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors)이 넘는 개발자들의 공헌을 받아 지금까지 제작되었습니다.



이 문서는 [@M4steM4](https://github.com/M4steM4)에 의해 번역(및 의역)되었습니다.
