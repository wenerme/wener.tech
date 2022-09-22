"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47498],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],s={title:"CSS"},o="CSS",p={unversionedId:"web/style/css",id:"web/style/css",title:"CSS",description:"Spec",source:"@site/../notes/web/style/css.md",sourceDirName:"web/style",slug:"/web/style/css",permalink:"/notes/web/style/css",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/style/css.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"CSS"},sidebar:"docs",previous:{title:"CSS Selector",permalink:"/notes/web/style/css-selector"},next:{title:"emotion",permalink:"/notes/web/style/emotion"}},c={},u=[{value:"Spec",id:"spec",level:2},{value:"Topics",id:"topics",level:2},{value:"Print",id:"print",level:3},{value:"CSS \u6ee4\u955c",id:"css-\u6ee4\u955c",level:3},{value:"\u5728 CSS \u4e2d\u4f7f\u7528 FontAwesome",id:"\u5728-css-\u4e2d\u4f7f\u7528-fontawesome",level:3},{value:"flex",id:"flex",level:3},{value:"\u6587\u672c\u6ea2\u51fa\u663e\u793a\u7701\u7565\u53f7",id:"\u6587\u672c\u6ea2\u51fa\u663e\u793a\u7701\u7565\u53f7",level:3},{value:"\u907f\u514d\u70b9\u51fb\u9ad8\u4eae",id:"\u907f\u514d\u70b9\u51fb\u9ad8\u4eae",level:3},{value:"visibility \u5728\u52a8\u753b\u4e2d\u7684\u95ee\u9898",id:"visibility-\u5728\u52a8\u753b\u4e2d\u7684\u95ee\u9898",level:3},{value:"\u907f\u514d div \u5904\u7406\u70b9\u51fb\u4e8b\u4ef6",id:"\u907f\u514d-div-\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6",level:3},{value:"\u6bd4\u4f8b\u5bbd\u9ad8",id:"\u6bd4\u4f8b\u5bbd\u9ad8",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"css"},"CSS"),(0,l.kt)("h2",{id:"spec"},"Spec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/css-nesting-1/"},"CSS Nesting Module"))),(0,l.kt)("h2",{id:"topics"},"Topics"),(0,l.kt)("h3",{id:"print"},"Print"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/css-gcpm-3"},"CSS Generated Content for Paged Media Module")),(0,l.kt)("li",{parentName:"ul"},"CSS Paged Media Module Level 3 ",(0,l.kt)("a",{parentName:"li",href:"https://drafts.csswg.org/css-page-3"},"https://drafts.csswg.org/css-page-3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://css-tricks.com/almanac/properties/p/page-break/"},"page-break@css-tricks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/"},"https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@page"},"https://developer.mozilla.org/en-US/docs/Web/CSS/@page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://papersizes.io/a/"},"http://papersizes.io/a/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.print-css.rocks/"},"https://www.print-css.rocks/"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/*  \u9875\u7709 */\n@page {\n  @top-center {\n    content: element(pageHeader);\n  }\n}\n#pageHeader {\n  position: running(pageHeader);\n}\n")),(0,l.kt)("h3",{id:"css-\u6ee4\u955c"},"CSS \u6ee4\u955c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://css-tricks.com/almanac/properties/f/filter/"},"https://css-tricks.com/almanac/properties/f/filter/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://codepen.io/akademy/pen/FlkzB"},"http://codepen.io/akademy/pen/FlkzB"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 :before \u505a\u80cc\u666f\u5e76\u6dfb\u52a0\u6ee4\u955c")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* \u5bf9\u6ee4\u955c\u4f7f\u7528\u6e10\u53d8 */\n.active {\n  transition: 1s filter linear;\n  -webkit-transition: 1s -webkit-filter linear;\n  -moz-transition: 1s -moz-filter linear;\n  -ms-transition: 1s -ms-filter linear;\n  -o-transition: 1s -o-filter linear;\n}\n")),(0,l.kt)("h3",{id:"\u5728-css-\u4e2d\u4f7f\u7528-fontawesome"},"\u5728 CSS \u4e2d\u4f7f\u7528 FontAwesome"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://astronautweb.co/snippet/font-awesome/"},"A list of Font Awesome icons and their CSS content values"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".mytextwithicon {\n  position: relative;\n}\n.mytextwithicon:before {\n  content: '\\25AE'; /* \u4fee\u6539\u4e3a\u9700\u8981\u7684\u503c */\n  font-family: FontAwesome;\n  left: -5px;\n  position: absolute;\n  top: 0;\n}\n")),(0,l.kt)("h3",{id:"flex"},"flex"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://caniuse.com/#feat=flexbox"},"caniuse")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/philipwalton/flexbugs"},"flexbugs")," \u7531\u793e\u533a\u7ef4\u62a4\u7684 flex \u5728\u5404\u4e2a\u6d4f\u89c8\u5668\u4e2d\u7684 BUG \u548c\u89e3\u51b3\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"float, clear \u548c vertical-align \u4e0d\u5f71\u54cd flex \u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"A guide to flexbox")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://stackoverflow.com/a/14964944/1870054"},"\u6eda\u52a8\u5185\u5bb9"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* \u9488\u5bf9\u5bb9\u5668\u7684\u5c5e\u6027 */\n.container{\n  display: flex;\n  /* \u6392\u5e8f\u65b9\u5411 */\n  flex-direction: row;\n  /*flex-direction: row | row-reverse | column | column-reverse;*/\n\n  /* \u6362\u884c\u63a7\u5236 */\n  flex-wrap: nowrap\n  /*flex-wrap: nowrap | wrap | wrap-reverse;*/\n\n  /* flex-direction \u548c flex-wrap \u7684\u7f29\u5199 */\n  flex-flow: row nowrap;\n  /*flex-flow: <\u2018flex-direction\u2019> || <\u2018flex-wrap\u2019>*/\n\n  /* \u5185\u5bb9\u95f4\u9694\u63a7\u5236 */\n  justify-content: flex-start;\n  /*justify-content: flex-start | flex-end | center | space-between | space-around;*/\n\n  /* \u5185\u5bb9\u5bf9\u9f50\u63a7\u5236 */\n  align-items: flex-start;\n  /*align-items: flex-start | flex-end | center | baseline | stretch;*/\n\n  /* \u63a7\u5236\u5185\u5bb9\u6709\u591a\u884c\u65f6\u7684\u884c\u95f4\u8ddd */\n  align-content: flex-start;\n  /*align-content: flex-start | flex-end | center | space-between | space-around | stretch;*/\n}\n/* \u9488\u5bf9\u81ea\u8eab\u7684\u5c5e\u6027 */\n.item{\n  /* \u987a\u5e8f\u63a7\u5236 */\n  /*order: <integer>;*/\n\n  /* \u5bbd\u5ea6\u589e\u957f\u63a7\u5236 */\n  flex-grow: 0;\n  /*flex-grow: <number>;*/\n\n  /* \u5bbd\u5ea6\u6536\u7f29\u63a7\u5236 */\n  flex-shrink: 0;\n  /*flex-shrink: <number>;*/\n\n  /* \u57fa\u7840\u5c3a\u5bf8\u63a7\u5236 */\n  flex-basis: auto;\n  /*flex-basis: <length> | auto;*/\n\n  /* \u53c2\u6570\u7f29\u5199 */\n  flex: 0 0 auto;\n  /*flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]*/\n\n  /* \u5143\u7d20\u5bf9\u9f50\u63a7\u5236 */\n  align-self: flex-start;\n  /*align-self: auto | flex-start | flex-end | center | baseline | stretch;*/\n}\n")),(0,l.kt)("h3",{id:"\u6587\u672c\u6ea2\u51fa\u663e\u793a\u7701\u7565\u53f7"},"\u6587\u672c\u6ea2\u51fa\u663e\u793a\u7701\u7565\u53f7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".over-test {\n  width: 300px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n")),(0,l.kt)("h3",{id:"\u907f\u514d\u70b9\u51fb\u9ad8\u4eae"},"\u907f\u514d\u70b9\u51fb\u9ad8\u4eae"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/"},"Remove Gray Highlight When Tapping Links in Mobile Safari"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".button {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5141\u8bb8 css \u4e2d\u7684 :active \u6837\u5f0f\u5728\u79fb\u52a8\u7aef safari \u751f\u6548\ndocument.addEventListener('touchstart', function () {}, true);\n")),(0,l.kt)("h3",{id:"visibility-\u5728\u52a8\u753b\u4e2d\u7684\u95ee\u9898"},"visibility \u5728\u52a8\u753b\u4e2d\u7684\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u52a8\u753b\u4e2d\u5982\u679c\u7ed3\u675f ",(0,l.kt)("inlineCode",{parentName:"li"},"visibility: hidden"),", \u90a3\u4f1a\u5bfc\u81f4\u76f4\u63a5\u4e0d\u8fdb\u884c\u52a8\u753b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".target {\n  /* \u5c06 visibility \u4e5f\u52a0\u5165\u8f6c\u6362, \u65f6\u95f4\u7b49\u540c */\n  transition: opacity 250ms ease-out, visibility 250ms linear;\n}\n")),(0,l.kt)("h3",{id:"\u907f\u514d-div-\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6"},"\u907f\u514d div \u5904\u7406\u70b9\u51fb\u4e8b\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4e24\u4e2a div \u91cd\u53e0\u7684\u65f6\u5019, \u4e0d\u5e0c\u671b\u7b2c\u4e00\u4e2a\u900f\u660e\u7684 div \u5904\u7406\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"opacity:0")," \u7684\u65f6\u5019, \u4e0d\u5e0c\u671b\u5904\u7406\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"},"pointer-events")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action"},"touch-action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u624b\u52bf\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u8f83\u597d\u7684\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"manipulation"),", \u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"pan-x pan-y pinch-zoom")),(0,l.kt)("li",{parentName:"ul"},"\u5de6\u53f3\u6ed1,\u4e0a\u4e0b\u6ed1,\u7f29\u653e")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".overlay {\n  pointer-events: none;\n}\n.container .button {\n  pointer-events: auto;\n}\n")),(0,l.kt)("h3",{id:"\u6bd4\u4f8b\u5bbd\u9ad8"},"\u6bd4\u4f8b\u5bbd\u9ad8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u5bbd\u767e\u5206\u6bd4+padding"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528 vh/vw"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://stackoverflow.com/questions/1495407"},"Maintain the aspect ratio of a div with CSS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://css-tricks.com/scaling-responsive-animations/"},"Scaling Responsive Animations"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  width: 100%;\n  /* 4:3 */\n  padding-bottom: 75%;\n}\n\n/* \u4fdd\u8bc1\u7edd\u5bf9\u7684 9/16, \u5e76\u4e14\u5728\u5c4f\u5e55\u5c45\u4e2d */\n.container {\n  width: 100vw;\n  height: calc(100vw * 16 / 9);\n  transform: translateY(calc((100vw * 16 / 9 - 100vh) / -2));\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"aspect ratio"),(0,l.kt)("th",{parentName:"tr",align:null},"padding-bottom value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16:9"),(0,l.kt)("td",{parentName:"tr",align:null},"56.25%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4:3"),(0,l.kt)("td",{parentName:"tr",align:null},"75%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3:2"),(0,l.kt)("td",{parentName:"tr",align:null},"66.66%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8:5"),(0,l.kt)("td",{parentName:"tr",align:null},"62.5%")))))}f.isMDXComponent=!0}}]);