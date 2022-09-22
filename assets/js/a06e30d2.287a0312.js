"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81234],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),f=i,b=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77624:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(96600),i=r(27279),a=(r(59496),r(49613)),l=["components"],o={tags:["FAQ"]},u="JS Library FAQ",p={unversionedId:"web/script/lib/js-lib-faq",id:"web/script/lib/js-lib-faq",title:"JS Library FAQ",description:"popperjs vs floating-ui",source:"@site/notes/web/script/lib/js-lib-faq.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/js-lib-faq",permalink:"/notes/web/script/lib/js-lib-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/script/lib/js-lib-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"inversify",permalink:"/notes/web/script/lib/inversify"},next:{title:"konva",permalink:"/notes/web/script/lib/konva"}},s={},c=[{value:"popperjs vs floating-ui",id:"popperjs-vs-floating-ui",level:2},{value:"fetch vs axios",id:"fetch-vs-axios",level:2},{value:"jsdom vs cheerio",id:"jsdom-vs-cheerio",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-library-faq"},"JS Library FAQ"),(0,a.kt)("h2",{id:"popperjs-vs-floating-ui"},"popperjs vs floating-ui"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"floating-ui - popper -> floating-ui - 2021 - core ~600b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5e95\u5c42\u63a5\u53e3 - \u652f\u6301 web, React Native, Canvas"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e0a\u5c42\u5c01\u88c5"))),(0,a.kt)("li",{parentName:"ul"},"popperjs - ~3kb - 2006",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u53cb\u597d\uff0c\u7b80\u5355\u6613\u7528")))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/floating-ui/floating-ui/discussions/1425"},"Popper is evolving into Floating UI!"))),(0,a.kt)("h2",{id:"fetch-vs-axios"},"fetch vs axios"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fetch",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e - \u6d4f\u89c8\u5668\u57fa\u672c\u90fd\u652f\u6301\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 abort signal \u652f\u6301 timeout"))),(0,a.kt)("li",{parentName:"ul"},"axios",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"~20kB"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 timeout"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b9e\u4f8b\u5316 - \u643a\u5e26\u9ed8\u8ba4\u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u62e6\u622a\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8 JSON \u8f6c\u6362"),(0,a.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u5904\u7406\u4e0a\u4f20\u4e0b\u8f7d\u8fdb\u5ea6")))),(0,a.kt)("h2",{id:"jsdom-vs-cheerio"},"jsdom vs cheerio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jsdom",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6d4f\u89c8\u5668 DOM API"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u5728\u6d4f\u89c8\u5668\u6d4b\u8bd5\u903b\u8f91 - \u5efa\u8bae\u7981\u7528 JS\uff0c\u4f7f\u7528 textContent"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 innerText ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jsdom/jsdom/issues/1245"},"jsdom/jsdom#1245"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 textContent - \u6240\u6709\u81ea\u8282\u70b9 text \u96c6\u5408"),(0,a.kt)("li",{parentName:"ul"},"innerText \u4f9d\u8d56\u5e03\u5c40\u6e32\u67d3\u4fe1\u606f - \u901a\u8fc7\u6837\u5f0f\u9690\u85cf\u7684\u5143\u7d20\u4e0d\u4f1a\u88ab\u5305\u542b"))))),(0,a.kt)("li",{parentName:"ul"},"cheerio",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6a21\u4eff jQuery \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u6027\u80fd\u66f4\u597d"),(0,a.kt)("li",{parentName:"ul"},"\u4f46 \u5e73\u5766 DOM \u5904\u7406\u8d77\u6765\u4e0d\u65b9\u4fbf"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5728 NodeJs \u4f7f\u7528")))))}f.isMDXComponent=!0}}]);