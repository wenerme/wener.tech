(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,j=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?a.a.createElement(j,o(o({ref:t},b),{},{components:n})):a.a.createElement(j,o({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},640:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1169)),l={title:"JavaScript \u5e38\u89c1\u95ee\u9898"},o={unversionedId:"languages/js/js-faq",id:"languages/js/js-faq",isDocsHomePage:!1,title:"JavaScript \u5e38\u89c1\u95ee\u9898",description:"Primitive vs Object",source:"@site/notes/languages/js/js-faq.md",slug:"/languages/js/js-faq",permalink:"/notes/languages/js/js-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/js/js-faq.md",version:"current",sidebar:"docs",previous:{title:"Grammar FAQ",permalink:"/notes/languages/grammar/grammar-faq"},next:{title:"LLVM",permalink:"/notes/languages/llvm/README"}},c=[{value:"Primitive vs Object",id:"primitive-vs-object",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"primitive-vs-object"},"Primitive vs Object"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"Primitive"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"primitive value, primitive data type"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u662f\u5bf9\u8c61\uff0c\u6ca1\u6709\u65b9\u6cd5\uff0c",Object(i.b)("strong",{parentName:"li"},"\u4e0d\u53ef\u53d8")),Object(i.b)("li",{parentName:"ul"},"7 \u79cd\u7c7b\u578b - string, number, bigint, boolean, undefined, symbol, null"),Object(i.b)("li",{parentName:"ul"},"\u9664\u4e86 null \u548c undefined \u90fd\u6709\u5c01\u88c5\u7c7b\u578b - String, Number, BigInt, Boolean, Symbol"))),Object(i.b)("li",{parentName:"ul"},"Object",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u975e Primitive"),Object(i.b)("li",{parentName:"ul"},"\u96c6\u6210\u81ea Object.prototype"),Object(i.b)("li",{parentName:"ul"},"Object.create(null)"),Object(i.b)("li",{parentName:"ul"},"JS \u4e2d ",Object(i.b)("strong",{parentName:"li"},"\u6570\u7ec4\u4e3a\u5bf9\u8c61")))),Object(i.b)("li",{parentName:"ul"},"typeof",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f1a\u8fd4\u56de function, undefined, object, string, number, boolean, bigint, symbol"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"typeof null")," \u4f1a\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"object"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// \u6700\u7b80\u5355\u76f4\u63a5\u5224\u65ad\ntypeof obj === 'object' && obj !== null\n\n// \u5224\u65ad\u662f\u5426\u4e3a\u5bf9\u8c61 - \u975e Prim\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\nfunction isObject(obj) {\n  return obj === Object(obj);\n}\n\n// \u5728 Object.prototype, Object.create(null) \u8fd4\u56de false\nval instanceof Object\n// null \u8fd4\u56de true\ntypeof val === 'object'\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6027\u80fd\u5bf9\u6bd4 ",Object(i.b)("a",{parentName:"li",href:"https://jsbench.me/epk80dx8xr/1"},"typeof vs Object()"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"typeof \u66f4\u5feb")))))))}u.isMDXComponent=!0}}]);