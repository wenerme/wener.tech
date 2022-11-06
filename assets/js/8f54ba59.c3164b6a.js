"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40687],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,g=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={title:"\u8bed\u6cd5\u89e3\u6790"},f="\u89e3\u6790",g={unversionedId:"languages/parser/parsing",id:"languages/parser/parsing",title:"\u8bed\u6cd5\u89e3\u6790",description:"- Parsing - \u89e3\u6790",source:"@site/../notes/languages/parser/parsing.md",sourceDirName:"languages/parser",slug:"/languages/parser/parsing",permalink:"/notes/languages/parser/parsing",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/parser/parsing.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1661163540,formattedLastUpdatedAt:"Aug 22, 2022",frontMatter:{title:"\u8bed\u6cd5\u89e3\u6790"},sidebar:"docs",previous:{title:"Parser Glossary",permalink:"/notes/languages/parser/glossary"},next:{title:"PEG",permalink:"/notes/languages/parser/peg"}},k={},d=[],y={toc:d};function b(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"\u89e3\u6790"}),"\u89e3\u6790"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Parsing - \u89e3\u6790",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e38\u7528\u7b97\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LL - Left to right, Leftmost dervation - \u4e0a\u4e0b\u6587\u65e0\u5173\uff0c\u81ea\u4e0a\u5411\u4e0b"),(0,n.kt)("li",{parentName:"ul"},"LR - Left to right, Rightmost dervation - \u4e0a\u4e0b\u6587\u65e0\u5173\uff0c\u81ea\u5e95\u5411\u4e0a"),(0,n.kt)("li",{parentName:"ul"},"PEG + Packrat parsing"),(0,n.kt)("li",{parentName:"ul"},"Earley Parsing"))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u65b9\u5f0f\u51b3\u5b9a\u4e86\u5185\u90e8\u6570\u636e\u7ed3\u6784\u4e0d\u540c\uff0c\u89e3\u51b3\u5206\u6b67\u7684\u65b9\u5f0f\u4e0d\u540c"))),(0,n.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u65e0\u5173 - Context Free",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"int int = 10;")," - \u8fd9\u91cc\u5728\u505a lexing \u7684\u65f6\u5019\u4f1a\u6210\u529f\uff0c\u4f46\u8bed\u6cd5\u5c42\u9762\u4f1a\u5931\u8d25\uff1b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u4e0a\u4e0b\u6587\u65e0\u5173\uff0c\u5148\u505a lexing\uff0c\u7b2c\u4e8c\u4e2a int \u4e5f\u4f1a\u88ab\u8bc6\u522b\u6210\u7c7b\u578b\u7684 token\u3002"))))),(0,n.kt)("li",{parentName:"ul"},"\u5de6\u9012\u5f52 - Left Recursion")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-antlr4"}),"exp\n  : exp '+' exp\n  | integer\n  ;\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LALR - LookAhead Left Recursion",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u524d\u5411\u73af\u89c6\u5de6\u9012\u5f52"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 LA \u6765\u89e3\u51b3\u5206\u6b67"))),(0,n.kt)("li",{parentName:"ul"},"Parser Combinator - \u7ec4\u5408\u89e3\u6790"),(0,n.kt)("li",{parentName:"ul"},"Parser Generator - \u751f\u6210\u89e3\u6790",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_parser_generators"}),"Comparison of parser generators")))),(0,n.kt)("li",{parentName:"ul"},"Lexing - \u8bcd\u6cd5\u89e3\u6790 - \u8bcd\u6cd5\u5206\u6790",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"lexical analysis, tokenization"))),(0,n.kt)("li",{parentName:"ul"},"Grammar - \u8bed\u6cd5\u89e3\u6790"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/sap/chevrotain"}),"https://github.com/sap/chevrotain")," - Parser Building Toolkit for JavaScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://softwareengineering.stackexchange.com/questions/338665"}),"When to use a Parser Combinator? When to use a Parser Generator?"))))))}b.isMDXComponent=!0}}]);