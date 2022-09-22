"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67059],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94942:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),i=["components"],p={title:"\u7c7b\u578b"},l="\u7c7b\u578b",c={unversionedId:"dev/theory/typing",id:"dev/theory/typing",title:"\u7c7b\u578b",description:"- \u7c7b\u578b\u662f\u8ba9\u6240\u6709\u4e0d\u540c\u80cc\u666f\u7684\u4eba\u90fd\u80fd\u9ad8\u6548\u6c9f\u901a\u7684\u5143\u8bed\u8a00",source:"@site/../notes/dev/theory/typing.md",sourceDirName:"dev/theory",slug:"/dev/theory/typing",permalink:"/notes/dev/theory/typing",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/theory/typing.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"\u7c7b\u578b"},sidebar:"docs",previous:{title:"\u9650\u5236\u7406\u8bba",permalink:"/notes/dev/theory/theory-of-constraints"},next:{title:"\u803b\u8fb1\u5899",permalink:"/notes/dev/wall-of-shame"}},u={},s=[],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u662f\u8ba9\u6240\u6709\u4e0d\u540c\u80cc\u666f\u7684\u4eba\u90fd\u80fd\u9ad8\u6548\u6c9f\u901a\u7684\u5143\u8bed\u8a00"),(0,a.kt)("li",{parentName:"ul"},"Hindley-Milner"),(0,a.kt)("li",{parentName:"ul"},"free theorems",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ttic.uchicago.edu/~dreyer/course/papers/wadler.pdf"},"https://ttic.uchicago.edu/~dreyer/course/papers/wadler.pdf")))),(0,a.kt)("li",{parentName:"ul"},"Haskell \u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://hoogle.haskell.org/"},"Hoogle")," \u652f\u6301\u57fa\u4e8e\u51fd\u6570\u7c7b\u578b\u641c\u7d22"),(0,a.kt)("li",{parentName:"ul"},"Lightweight higher-kinded polymorphism",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf"},"https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf"))))))}f.isMDXComponent=!0}}]);