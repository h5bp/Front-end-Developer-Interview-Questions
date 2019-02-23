---
title: 해설집
layout: layouts/page.njk
permalink: /translations/korean/reference.html
---

## 해설집
```
이 문서는 정답을 알려주는 문서가 아닙니다.
면접에 대한 답은 스스로가 찾아야 좋으며,
그 판단을 돕기 위한 해설서 임을 밝히는 바입니다.
``` 

##기여자
@Songhun(http://songhun.blogspot.com)
@YiHanghee(http://blog.javarouka.me)

##일반적인 질문에 대한 참고
* SNS에 대해서 물어보는 이유가 무엇일까요?

## HTML에 대한 참고
* `doctype`에 대한 설명은 [Wikipedia](http://ko.wikipedia.org/wiki/%EB%AC%B8%EC%84%9C_%ED%98%95%EC%8B%9D_%EC%84%A0%EC%96%B8) 에서 찾아볼 수 있습니다.
	* 문서 타입에 대한 자세한 설명을 담은 블로그 ["Activating Browser Modes with Doctype"](http://hsivonen.iki.fi/doctype/)
* 표준 모드는 W3C의 표준에 맞춘 구현 렌더링으로 동작하며(미세하게 다릅니다), 쿽스 모드는 다양한 브라우저 및 표준 정립 이전의 구버전 기준으로 작성된 HTML의 fallback 과 비슷합니다.
	* [Quirks Mode 렌더링과 DTD.](http://naradesign.net/wp/2007/03/27/118/)
	* [Mozilla's Quirks Mode](https://developer.mozilla.org/ko/Mozilla's_Quirks_Mode)	
* [XHTML 과 HTML의 차이](http://blog.wystan.net/2007/05/24/xhtml-vs-html) 블로그 포스팅에 4부작(?)으로 좋은 설명이 있네요.
	* application/xhtml+xml 컨텐트 타입은 브라우저에 따라 해석할 수 없기도 합니다.(IE...)
* 엘리먼트의(특히 루트인 html) lang attribute 와 관련이 있을까요...?
* [HTML 5 + XML = XHTML 5](http://html5doctor.com/html-5-xml-xhtml-5/), <!doctype xhtml>
* Programer custom attribute. ex) 자동차를 엘리먼트로 나타내야 할 경우를 생각해보면 기본 html 속성으로는 부족하겠죠.
* HTML4의 콘텐츠 모델이 div와 span에 id와 클래스를 입힌 inline 및 block display의 사용자 정의형이라면, HTML5는 그것을 표준화한 콘텐츠 모델.
	* 자세한 것은 [내용 모델(한글 by ClearBoth 팀)](http://html5.clearboth.org/content-models.html) 이쪽으로.
* open web platform 이 뭘까요...?
* 서버와 공유할 필요가 있는지의 여부, 저장 용량, 저장 생명주기에 따라 셋을 구분할 수 있습니다.

## Javascript에 대한 참고
* 유명한 Javascript Library는 다음과 같습니다.
	* jQuery
	* Prototype.js
	* YUI
	* Ext JS
	* Dojo
* Java와 Javascript는 Car와 Carpet의 차이와 비슷하다고 할 수 있습니다.
* [Undeclared, Undefined, Null in JavaScript](http://constc.blogspot.com/2008/07/undeclared-undefined-null-in-javascript.html)
* [Naver Developer에서 제공 되는 Closure설명](http://dev.naver.com/tech/ajaxui/ajaxui_2.php#a_2_2)
* [Javascript anonymous functions](http://helephant.com/2008/08/23/javascript-anonymous-functions/)
	* [Pro Javascript Techniques(3): Anonymous Functions(한글)](http://happyzoo.tistory.com/124)

## jQuery에 대한 참고
* jQeury들의 거의 모든 method들은 jQuery object를 돌려주도록 되어있습니다.
	* 이 특성으로 인해 같은 scope에서 일어나는 거의 모든 method들을 연결하여 정의를 할 수 가 있습니다.
	* Paul Irish 가 작성한 [블로그](http://paulirish.com/2008/sequentially-chain-your-callbacks-in-jquery-two-ways/) 를 참고하시면 좋을 듯 합니다.
* [.end()](http://api.jquery.com/end/)
* [Namesapced Events](http://docs.jquery.com/Namespaced_Events)
* [Effect queue()](http://api.jquery.com/queue/)
	* [Understanding jQuery Effects Queue](http://blog.bigbinary.com/2010/02/02/understanding-jquery-effects-queue.html)


## CSS 참고

##흥미로운 질문들에 대한 참고
* http://html5homi.es/
