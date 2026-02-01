---
title: 프론트엔드 면접 문제 은행
layout: layouts/page.njk
permalink: /translations/korean/index.html
lang: ko
---

# 프론트엔드 면접 문제 은행

이 파일에는 잠재적인 프론트엔드 개발자 후보를 선정할 때 사용할 수 있는 여러 가지 면접 질문들이 있습니다. 후보자에게 모든 문제를 사용하는 것은 많은 시간이 소요되기 때문에 추천하지 않습니다. 대신, 여러분이 요구하는 주요 기술과 관련된 질문들을 몇 가지 선정해서 사용해보세요.

**참고:** 여기 있는 많은 질문은 자유롭게 추가/수정/삭제될 수 있고 정답보다 그 사람의 능력에 관해 이야기하는 흥미로운 토론을 끌어낼 수 있다는 것을 기억하세요.

## <a name='toc'>목차</a>

1. [일반적인 질문](#general)
1. [HTML 관련 질문](#html)
1. [CSS 관련 질문](#css)
1. [JS 관련 질문](#js)
1. [테스트 관련 질문](#testing)
1. [성능 관련 질문](#performance)
1. [네트워크 관련 질문](#network)
1. [재미있는 질문](#fun)

## 함께하기

1. [함께하는 분들](#contributors)
1. [함께하는 방법](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/main/CONTRIBUTING.md)
1. [라이선스](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/main/LICENSE.md)

#### [[⬆]](#toc) <a name='general'>일반적인 질문:</a>

* 어제/이번 주에 무엇을 공부하셨나요?
* 코딩을 할 때 당신을 들뜨게 하거나 흥미를 끄는 것들은 무엇인가요?
* 최근에 당신이 경험한 기술적인 문제는 무엇이고 그것을 어떻게 해결했나요?
* 웹 사이트를 새로 만들거나 유지보수할 때 성능을 향상시키기 위해 사용한 기술들에 대해 설명해주세요.
* 최근에 사용해 본 SEO 모범 사례나 기술에 대해 설명해주세요.
* 프론트엔드 보안과 관련하여 일반적인 기술이나 최근 해결한 문제에 대해 설명해주세요.
* 코드의 유지보수성을 높이기 위해 최근 프로젝트에서 개인적으로 취한 조치는 무엇인가요?
* 선호하는 개발 환경에 대해 자유롭게 이야기해 주세요.
* 버전 관리 시스템은 어떤 것들을 사용해보셨습니까?
* 당신이 웹 페이지를 만들 때의 과정을 설명해주실 수 있을까요?
* 당신에게 5가지 다른 stylesheet가 있습니다. 어떤 방법으로 사이트에 제공하는 게 가장 효과적일까요?
* 점진적 향상법(progressive enhancement)과 우아한 성능저하법(graceful degradation)의 차이를 설명하실 수 있습니까?
* 웹사이트에서 assets/resources를 최적화하는 방법에 관해 설명해주세요.
* 브라우저가 한 번에 1개의 도메인에서 내려받는 자원은 몇 개인가요?
  * 예외에는 어떤 것들이 있나요?
* 페이지 로드 시간을 줄이는 세 가지 방법에 관해서 이야기해 보세요.
* 당신이 프로젝트에 합류했습니다. 근데 그들은 Tab을 이용하고, 당신은 Space를 사용했습니다. 어떻게 하실 건가요?
* 간단한 Slideshow 페이지를 만드는 방법에 관해서 이야기해 보세요.
* 만약 올해 하나의 기술을 마스터할 수 있다면, 어떤 기술을 선택하시겠습니까?
* 표준의 중요성에 관해 설명해주세요.
* Flash of Unstyled Content에 관해 설명해주세요. 또 FOUC를 피하기 위해선 어떻게 해야 하나요?
* ARIA와 screenreader에 대해 설명해주세요. 또 접근성을 지원하는 웹사이트를 어떻게 만드는지에 대해도 설명해주세요.
* CSS 애니메이션과 JavaScript 애니메이션의 차이점에 관해 설명해주세요.
* CORS는 무엇의 약자이고 어떤 문제에 대해서 언급하는 것인가요?
* 상사나 협업자와의 의견 충돌을 어떻게 처리하셨나요?
* 최신 프론트엔드 개발 및 디자인에 대해 배우기 위해 어떤 리소스를 사용하시나요?
* 좋은 프론트엔드 개발자가 되기 위해 필요한 기술은 무엇인가요?
* 자신이 어떤 역할을 하고 싶으신가요?
* 쿠키, 세션 스토리지, 로컬 스토리지의 차이점을 설명해주세요.
* URL을 브라우저에 입력했을 때 어떤 일이 발생하는지 설명해주세요.
* SSR과 CSR의 차이점을 설명해주세요. 각각의 장단점도 논의해주세요.
  * 정적 렌더링(static rendering)에 대해 알고 계신가요?
  * 리하이드레이션(Rehydration)에 대해 알고 계신가요?

#### [[⬆]](#toc) <a name='html'>HTML 관련 질문:</a>

* `doctype`이 무엇을 하는 것인가요?
* 다국어가 포함된 페이지는 어떤 방식으로 제공하나요?
* 다국어 페이지를 제공할 때 주의해야 할 점은 무엇인가요?
* `data-` 속성은 무엇을 하는 것인가요?
* HTML5를 오픈 웹 플랫폼(open web platform)으로 생각해본다면, 어떤 것들로 구성돼 있을까요?
* `쿠키(Cookies)`와 `세션저장소(sessionStorage)`와 `로컬저장소(localStorage)`의 차이점을 설명해주세요.
* `<script>`, `<script async>`와 `<script defer>`의 차이점에 관해 설명해주세요.
* CSS `<link>`를 `<head></head>` 사이에 쓰는 것과 JS `<script>`를 `</body>` 바로 앞에 사용하는 것은 왜 좋은 방법인가요? 예외가 있다면 알고 계신가요?
* Progressive rendering이란 무엇인가요?
* 이미지 태그에 `srcset` 속성을 사용하는 이유는 무엇인가요? 브라우저가 이 속성을 가진 콘텐츠를 평가할 때 사용하는 과정을 설명해보세요.
* 다른 HTML 템플릿 언어를 사용해 본 적이 있나요?
* `canvas`와 `svg`의 차이점은 무엇인가요?
* HTML에서 빈 요소(empty elements)란 무엇인가요?

#### [[⬆]](#toc) <a name='css'>CSS 관련 질문:</a>

* CSS 선택자 특이성(specificity)이란 무엇이며 어떻게 작동하나요?
* CSS "초기화(resetting)"와 "정규화(normalizing)"의 차이점은 무엇인가요? 어떤 것을 선택하시겠고, 그 이유는 무엇인가요?
* Floats가 어떻게 동작하는지 설명해주세요.
* z-index에 관해 설명하고 쌓임 맥락(stacking context)이 어떻게 형성되는지 설명해주세요.
* BFC(Block Formatting Context)에 관해 설명하고 어떻게 작동하는지 설명해주세요.
* 클리어링(Clearing) 기술에는 어떤 것들이 있으며, 어떤 상황에서 어떤 방법이 적절한지 설명하세요.
* 브라우저 스펙 차이에 따른 스타일링 이슈를 어떻게 해결하나요?
* 기능이 제약된 브라우저를 위해서 어떤 방식으로 페이지를 만드나요?
  * 어떠한 기술과 절차를 사용하나요?
* 시각적으로 보이지 않고 스크린 리더에서만 접근 가능하게 하는 방법에 관해 설명해주세요.
* 그리드 시스템(Grid system)을 사용한 적이 있나요? 있다면 어떤 것을 선호하나요?
* 미디어 쿼리(media queries)나 모바일에 맞는 layout/CSS를 사용한 적이 있나요?
* SVG를 스타일링하는데 익숙하신가요?
* `screen` 외에 `@media` 속성의 다른 예를 들 수 있나요?
* 효율적인 CSS를 작성하기 위한 "비법(gotchas)"은 어떤 게 있나요?
* CSS 전처리기(CSS preprocessors)를 사용해보셨나요?
  * 그렇다면, 사용 경험에 기반해 좋았던 점과 나빴던 점을 설명해주세요.
* 비표준 폰트를 사용하는 웹 디자인 컴프를 어떻게 구현하시겠습니까?
* 브라우저가 CSS 선택자와 일치하는 요소를 어떻게 결정하는지 설명해주세요.
* 가상 요소(pseudo-elements)에 대해 설명하고 어디에 사용되는지 이야기해보세요.
* 박스 모델에 대해 설명하고 브라우저에서 다른 박스 모델로 렌더링하도록 CSS로 어떻게 지시하는지 설명해주세요.
* `* { box-sizing: border-box; }`는 무엇을 하며 장점은 무엇인가요?
* CSS `display` 속성이란 무엇이며 몇 가지 사용 예를 들어주세요.
* inline과 inline-block의 차이점은 무엇인가요?
* "nth-of-type()"과 "nth-child()" 선택자의 차이점은 무엇인가요?
* relative, fixed, absolute, static 위치의 차이점은 무엇인가요?
* 어떤 CSS 프레임워크를 로컬 또는 프로덕션에서 사용해 보셨나요? 어떻게 변경/개선하시겠습니까?
* CSS Grid를 사용해 본 적이 있나요?
* 반응형 웹사이트 코딩과 모바일 우선 전략의 차이점을 설명해주세요.
* 레티나 그래픽 환경에서 작업해 본 적이 있나요? 어떤 기술을 사용했나요?
* *절대 위치 지정* 대신 `translate()`를 사용하거나 그 반대의 경우가 있나요? 그 이유는 무엇인가요?
* clearfix CSS 속성은 어떻게 유용한가요?
* 폰트 크기와 관련하여 px, em, rem의 차이점을 설명해주세요.
* 가상 클래스(pseudo class)의 예를 들 수 있나요? 가상 클래스의 사용 사례를 제공해주세요.
* 블록 레벨 요소와 인라인 요소의 차이점은 무엇인가요? 각 유형의 예를 들어주세요.
* CSS Grid와 Flexbox의 차이점은 무엇인가요? 언제 하나를 다른 것보다 사용하시겠습니까?
* 고정형(fixed), 유동형(fluid), 반응형(responsive) 레이아웃의 차이점은 무엇인가요?

#### [[⬆]](#toc) <a name='js'>JS 관련 질문:</a>

* 이벤트 위임(event delegation)에 관해 설명해주세요.
* JavaScript에서 `this`가 어떻게 작동하는지 설명해주세요.
  * ES6에서 `this` 사용 방식이 어떻게 변경되었는지 예를 들어 설명해주세요.
* 프로토타입 상속(prototypal inheritance)이 어떻게 작동하는지 설명해주세요.
* `null`, `undefined`, `undeclared`의 차이점은 무엇인가요?
  * 이들을 어떻게 확인하나요?
* 클로저(Closure)는 무엇이며, 어떻게/왜 사용하나요?
* 객체 속성과 배열 아이템을 순회할 때 어떤 언어 구조를 사용하나요?
* `Array.forEach()` 루프와 `Array.map()` 메서드의 주요 차이점을 설명하고 언제 각각을 선택하는지 설명해주세요.
* 익명 함수(anonymous functions)의 일반적인 사용 사례는 무엇인가요?
* 호스트 객체(host objects)와 네이티브 객체(native objects)의 차이점은 무엇인가요?
* `function Person(){}`, `var person = Person()`, `var person = new Person()`의 차이점을 설명해주세요.
* `function foo() {}`와 `var foo = function() {}`에서 `foo`의 사용법 차이를 설명해주세요.
* `Function.call`과 `Function.apply`가 무엇을 하는지 설명해주세요. 둘 사이의 주목할 만한 차이점은 무엇인가요?
* `Function.prototype.bind`를 설명해주세요.
* 기능 탐지(feature detection), 기능 추론(feature inference), UA 문자열 사용의 차이점은 무엇인가요?
* "호이스팅(Hoisting)"에 대해 설명해주세요.
* 타입 강제 변환(type coercion)이란 무엇인가요? JavaScript 코드에서 타입 강제 변환에 의존할 때의 일반적인 함정은 무엇인가요?
* 이벤트 버블링(event bubbling)에 대해 설명해주세요.
* 이벤트 캡처링(event capturing)에 대해 설명해주세요.
* "속성(attribute)"과 "프로퍼티(property)"의 차이점은 무엇인가요?
* 내장 JavaScript 객체를 확장하는 것의 장단점은 무엇인가요?
* `==`와 `===`의 차이점은 무엇인가요?
* JavaScript의 "동일 출처 정책(same-origin policy)"에 대해 설명해주세요.
* 왜 삼항 연산자라고 부르며, "삼항(Ternary)"이라는 단어는 무엇을 의미하나요?
* 엄격 모드(strict mode)란 무엇인가요? 사용할 때의 장단점은 무엇인가요?
* JavaScript로 컴파일되는 언어로 JavaScript 코드를 작성하는 것의 장단점은 무엇인가요?
* JavaScript 코드를 디버깅할 때 어떤 도구와 기술을 사용하나요?
* 가변(mutable) 객체와 불변(immutable) 객체의 차이점을 설명해주세요.
  * JavaScript에서 불변 객체의 예는 무엇인가요?
  * 불변성의 장단점은 무엇인가요?
  * 코드에서 불변성을 어떻게 달성할 수 있나요?
* 동기(synchronous) 함수와 비동기(asynchronous) 함수의 차이점을 설명해주세요.
* 이벤트 루프(event loop)란 무엇인가요?
  * 콜 스택(call stack)과 태스크 큐(task queue)의 차이점은 무엇인가요?
* `let`, `var`, `const`로 생성된 변수의 차이점은 무엇인가요?
* ES6 클래스와 ES5 함수 생성자의 차이점은 무엇인가요?
* 새로운 화살표 `=>` 함수 문법의 사용 사례를 제시할 수 있나요? 이 새로운 문법이 다른 함수와 어떻게 다른가요?
* 생성자에서 메서드에 화살표 문법을 사용하면 어떤 이점이 있나요?
* 고차 함수(higher-order function)의 정의는 무엇인가요?
* 객체나 배열의 구조 분해(destructuring) 예를 들어주세요.
* ES6 템플릿 리터럴로 문자열을 생성하는 예를 들어주세요.
* 커리 함수(curry function)의 예를 들고 이 문법이 왜 유리한지 설명해주세요.
* `spread 문법`을 사용할 때의 이점은 무엇이며 `rest 문법`과 어떻게 다른가요?
* 파일 간에 코드를 어떻게 공유할 수 있나요?
* 정적 클래스 멤버를 만들고 싶은 이유는 무엇인가요?
* JavaScript에서 `while`과 `do-while` 루프의 차이점은 무엇인가요?
* Promise란 무엇인가요? 어디서 어떻게 Promise를 사용하나요?
* JavaScript로 코딩할 때 객체 지향 프로그래밍 원칙을 어떻게 사용할 수 있는지 논의해주세요.

#### [[⬆]](#toc) <a name='code-questions'>코딩 질문:</a>

* 다음을 동작하게 만드세요:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* `100`까지 반복하면서 `3`의 배수에서는 **"fizz"**, `5`의 배수에서는 **"buzz"**, `3`과 `5`의 배수에서는 **"fizzbuzz"**를 출력하는 for 루프를 작성하세요.
* 다음 각각은 무엇을 반환하나요?
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```
* 즉시 실행 함수 표현식(IIFE)을 작성하세요.

#### [[⬆]](#toc) <a name='testing'>테스트 관련 질문:</a>

* 코드 테스트의 장단점은 무엇인가요?
* 코드의 기능을 테스트하기 위해 어떤 도구를 사용하시겠습니까?
* 단위 테스트와 기능/통합 테스트의 차이점은 무엇인가요?
* 코드 스타일 린팅 도구의 목적은 무엇인가요?
* 테스팅 모범 사례에는 어떤 것들이 있나요?

#### [[⬆]](#toc) <a name='performance'>성능 관련 질문:</a>

* 코드에서 성능 버그를 찾기 위해 어떤 도구를 사용하시겠습니까?
* 웹사이트의 스크롤 성능을 향상시킬 수 있는 방법에는 어떤 것들이 있나요?
* 레이아웃(layout), 페인팅(painting), 합성(compositing)의 차이점을 설명해주세요.

#### [[⬆]](#toc) <a name='network'>네트워크 관련 질문:</a>

* 전통적으로 사이트 자산을 여러 도메인에서 제공하는 것이 왜 더 나았나요?
* 웹사이트의 URL을 입력했을 때 화면에 로딩이 완료될 때까지의 과정을 최대한 자세히 설명해주세요.
* Long-Polling, Websockets, Server-Sent Events의 차이점은 무엇인가요?
* 다음 요청 및 응답 헤더에 대해 설명해주세요:
  * Expires, Date, Age, If-Modified-...의 차이
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* HTTP 메서드란 무엇인가요? 알고 있는 모든 HTTP 메서드를 나열하고 설명해주세요.
* 도메인 프리페칭(domain pre-fetching)이란 무엇이며 성능에 어떻게 도움이 되나요?
* CDN이란 무엇이며 사용할 때의 이점은 무엇인가요?

#### [[⬆]](#toc) <a name='fun'>재미있는 질문:</a>

* 최근에 작업한 멋진 프로젝트는 무엇인가요?
* 사용하는 개발 도구에서 마음에 드는 점은 무엇인가요?
* 프론트엔드 커뮤니티에서 당신에게 영감을 주는 사람은 누구인가요?
* 개인 프로젝트가 있나요? 어떤 종류인가요?

---

## <a name='contributors'>함께하는 분들:</a>

이 문서는 2009년에 다음에 언급된 분들과의 협업으로 시작했습니다:
[@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano) [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) [@iansym](https://twitter.com/iansym)

현재는 [100명이 넘는 개발자들](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors)이 함께하고 있습니다.
