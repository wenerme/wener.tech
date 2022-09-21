"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83198],{6491:function(e,t,l){l.r(t),l.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=l(96600),a=l(27279),r=(l(59496),l(3905)),i=["components"],u={title:"CSS Rule"},o=void 0,p={unversionedId:"web/style/css-rule",id:"web/style/css-rule",title:"CSS Rule",description:"width",source:"@site/notes/web/style/css-rule.md",sourceDirName:"web/style",slug:"/web/style/css-rule",permalink:"/notes/web/style/css-rule",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/style/css-rule.md",tags:[],version:"current",frontMatter:{title:"CSS Rule"},sidebar:"docs",previous:{title:"Layout",permalink:"/notes/web/style/css-layout"},next:{title:"CSS Selector",permalink:"/notes/web/style/css-selector"}},m={},s=[{value:"width",id:"width",level:2},{value:"theme",id:"theme",level:2},{value:"color",id:"color",level:2},{value:"@layer",id:"layer",level:2},{value:"\u5bf9\u9f50\u548c\u6392\u5217",id:"\u5bf9\u9f50\u548c\u6392\u5217",level:2},{value:"flexbox",id:"flexbox",level:2}],c={toc:s};function k(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"width"},"width"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"min-content - \u56fa\u6709\u7684\u6700\u5c0f\u5bbd\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"max-content - \u56fa\u6709\u7684\u6700\u5927\u5bbd\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"fit-content = min(max-content, max(min-content, fill-available))"),(0,r.kt)("li",{parentName:"ul"},"stretch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fit-content(<length-percentage>)")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"min(max-content, max(min-content, <length-percentage>))"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6d4f\u89c8\u5668\u8fd8\u6ca1\u6709\u652f\u6301"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/width"},"https://developer.mozilla.org/en-US/docs/Web/CSS/width"))),(0,r.kt)("h2",{id:"theme"},"theme"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prefers-color-scheme light,dark")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u544a\u8bc9\u6d4f\u89c8\u5668\u652f\u6301\u914d\u8272 - \u4e14\u4f18\u5148\u9009\u62e9 dark --\x3e\n<meta name="color-scheme" content="dark light" />\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  /* \u8868\u793a\u652f\u6301\u914d\u7f6e\u65b9\u6848 */\n  color-scheme: dark light;\n}\n\n/* \u6839\u636e\u7528\u6237\u914d\u7f6e\u9009\u62e9 */\nbody {\n  background-color: gainsboro;\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: darkslategray;\n  }\n}\n")),(0,r.kt)("h2",{id:"color"},"color"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u547d\u540d\u989c\u8272"),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u989c\u8272",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"transparent"),(0,r.kt)("li",{parentName:"ul"},"currentcolor"))),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u989c\u8272",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Canvas \u5e94\u7528\u6216\u6587\u6863\u80cc\u666f\u8272"),(0,r.kt)("li",{parentName:"ul"},"CanvasText \u5e94\u7528\u6216\u6587\u6863\u6587\u672c\u524d\u666f\u8272"),(0,r.kt)("li",{parentName:"ul"},"LinkText - non-active, non-visited - \u84dd\u8272"),(0,r.kt)("li",{parentName:"ul"},"VisitedText - visited - \u7d2b\u8272"),(0,r.kt)("li",{parentName:"ul"},"ActiveText - active - \u7ea2\u8272"),(0,r.kt)("li",{parentName:"ul"},"ButtonFace - \u6309\u94ae\u80cc\u666f\u989c\u8272"),(0,r.kt)("li",{parentName:"ul"},"ButtonText"),(0,r.kt)("li",{parentName:"ul"},"ButtonBorder"),(0,r.kt)("li",{parentName:"ul"},"Field - input \u80cc\u666f\u8272"),(0,r.kt)("li",{parentName:"ul"},"FieldText"),(0,r.kt)("li",{parentName:"ul"},"Highlight - \u9009\u4e2d\u6587\u672c\u80cc\u666f\u989c\u8272 ::selection"),(0,r.kt)("li",{parentName:"ul"},"HighlightText - \u9009\u4e2d\u6587\u672c\u989c\u8272"),(0,r.kt)("li",{parentName:"ul"},"SelectedItem - \u9009\u4e2d\u5143\u7d20\u80cc\u666f\u8272 - \u4f8b\u5982 checkbox"),(0,r.kt)("li",{parentName:"ul"},"SelectedItemText"),(0,r.kt)("li",{parentName:"ul"},"Mark - mark \u6807\u7b7e"),(0,r.kt)("li",{parentName:"ul"},"MarkText"),(0,r.kt)("li",{parentName:"ul"},"GrayText - disabled \u7684\u989c\u8272"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/css-color/"},"CSS Color Module Level 4"))),(0,r.kt)("h2",{id:"layer"},"@layer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chrome 99+, FF97+"),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u7ea7\u8054\u5c42\u7ea7"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5728 \u5c42 \u91cc\u7684\u4f1a\u9ed8\u8ba4\u5728\u4e00\u4e2a\u533f\u540d\u5c42")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* 1. \u547d\u540d\u5c42 */\n@layer layer-name {\n  /*rules*/\n}\n/* 2. \u5b9a\u4e49\u5c42 - \u4f18\u5148\u7ea7\u5360\u4f4d - \u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\u5f88\u91cd\u8981\uff0c\u548c\u4e4b\u540e\u518d\u6dfb\u52a0\u89c4\u5219 */\n/* \u8d8a\u540e\u4f18\u5148\u7ea7\u8d8a\u9ad8 */\n@layer theme, layout, utilities;\n/* 3. \u533f\u540d\u5c42 - \u547d\u540d\u5c42\u4e4b\u540e - \u4f18\u5148\u7ea7\u6700\u9ad8 - \u7b49\u540c\u4e8e\u6ca1\u6709\u5b9a\u4e49\u5c42 */\n@layer {\n  /*rules*/\n}\n\n/* 4. import \u5230 \u5c42 */\n@import 'theme.css' layer(utilities);\n@import 'theme.css' layer; /* \u533f\u540d\u5c42 */\n\n/* \u5d4c\u5957\u5c42 */\n@layer framework {\n  @layer layout {\n  }\n}\n\n/* \u540e\u7eed\u589e\u52a0\u89c4\u5219\u5230\u5d4c\u5957\u5c42 */\n@layer framework.layout {\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="zxx-lib.css" layer="lib" />\n<link rel="stylesheet" href="zxx-lib.css" layer />\n<link rel="stylesheet" href="zxx-lib.css" layer media="supports(at-rule(@layer))" />\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer"},"@layer"))),(0,r.kt)("h2",{id:"\u5bf9\u9f50\u548c\u6392\u5217"},"\u5bf9\u9f50\u548c\u6392\u5217"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{align,justify}-{items,self,content}"),(0,r.kt)("li",{parentName:"ul"},"align & justify",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"align - Block Axis"),(0,r.kt)("li",{parentName:"ul"},"justify - Inline Axis"))),(0,r.kt)("li",{parentName:"ul"},"align-self \u9ed8\u8ba4 stretch"),(0,r.kt)("li",{parentName:"ul"},"flex - flex-direction",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"justify - \u4e3b\u8f74"),(0,r.kt)("li",{parentName:"ul"},"align - \u526f\u8f74"))),(0,r.kt)("li",{parentName:"ul"},"alignment",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f4d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"center"),(0,r.kt)("li",{parentName:"ul"},"start - \u53d7 \u4e66\u5199\u6a21\u5f0f\u5f71\u54cd"),(0,r.kt)("li",{parentName:"ul"},"end"),(0,r.kt)("li",{parentName:"ul"},"self-start"),(0,r.kt)("li",{parentName:"ul"},"self-end"),(0,r.kt)("li",{parentName:"ul"},"flex-start"),(0,r.kt)("li",{parentName:"ul"},"flex-end"),(0,r.kt)("li",{parentName:"ul"},"left"),(0,r.kt)("li",{parentName:"ul"},"right"))),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u7ebf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"baseline"),(0,r.kt)("li",{parentName:"ul"},"first baseline"),(0,r.kt)("li",{parentName:"ul"},"last baseline"))),(0,r.kt)("li",{parentName:"ul"},"\u5206\u5e03",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"stretch"),(0,r.kt)("li",{parentName:"ul"},"space-between"),(0,r.kt)("li",{parentName:"ul"},"space-around"),(0,r.kt)("li",{parentName:"ul"},"space-evenly"))))),(0,r.kt)("li",{parentName:"ul"},"safe & unsafe",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"safe - \u6ea2\u51fa\u65f6\u4f7f\u7528 start")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment"},"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment"))),(0,r.kt)("h2",{id:"flexbox"},"flexbox"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex item has a 100% by default")))}k.isMDXComponent=!0},3905:function(e,t,l){l.d(t,{kt:function(){return c}});var n=l(59496);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(l),k=a,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||r;return l?n.createElement(d,i(i({ref:t},s),{},{components:l})):n.createElement(d,i({ref:t},s))}));function c(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"}}]);