(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(b,".").concat(m)]||u[m]||d[m]||l;return n?a.a.createElement(O,c(c({ref:t},i),{},{components:n})):a.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},659:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),l=(n(0),n(1172)),b={title:"\u5f00\u53d1\u76f8\u5173\u8bcd\u6c47"},c={unversionedId:"dev/theory/glossary",id:"dev/theory/glossary",isDocsHomePage:!1,title:"\u5f00\u53d1\u76f8\u5173\u8bcd\u6c47",description:"\u8bcd\u6c47",source:"@site/notes/dev/theory/glossary.md",slug:"/dev/theory/glossary",permalink:"/notes/dev/theory/glossary",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/theory/glossary.md",version:"current",sidebar:"docs",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/notes/dev/theory/design-pattern"},next:{title:"Pattern FAQ",permalink:"/notes/dev/theory/pattern-faq"}},o=[{value:"\u8bcd\u6c47",id:"\u8bcd\u6c47",children:[]},{value:"\u7406\u8bba",id:"\u7406\u8bba",children:[]}],i={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u8bcd\u6c47"},"\u8bcd\u6c47"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Phase"),Object(l.b)("th",{parentName:"tr",align:null},"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mutable state"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u53d8\u72b6\u6001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"side effects"),Object(l.b)("td",{parentName:"tr",align:null},"\u526f\u4f5c\u7528")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"unrestricted side effects"),Object(l.b)("td",{parentName:"tr",align:null},"\u65e0\u9650\u5236\u526f\u4f5c\u7528")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"unprincipled design"),Object(l.b)("td",{parentName:"tr",align:null},"\u65e0\u539f\u5219\u8bbe\u8ba1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"category theory"),Object(l.b)("td",{parentName:"tr",align:null},"\u8303\u7574\u5b66")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"set theory"),Object(l.b)("td",{parentName:"tr",align:null},"\u96c6\u5408\u8bba")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cognitive load"),Object(l.b)("td",{parentName:"tr",align:null},"\u8ba4\u77e5\u8d1f\u8377")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"partial order"),Object(l.b)("td",{parentName:"tr",align:null},"\u504f\u5e8f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"total order"),Object(l.b)("td",{parentName:"tr",align:null},"\u5168\u5e8f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"reconciliation"),Object(l.b)("td",{parentName:"tr",align:null},"\u548c\u89e3, \u8c03\u548c")))),Object(l.b)("h2",{id:"\u7406\u8bba"},"\u7406\u8bba"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Phase"),Object(l.b)("th",{parentName:"tr",align:null},"Abbr"),Object(l.b)("th",{parentName:"tr",align:null},"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"don't repeat yourself"),Object(l.b)("td",{parentName:"tr",align:null},"DRY"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e0d\u8981\u91cd\u590d\u81ea\u5df1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"loose coupling high cohesion"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u9ad8\u5185\u805a\u4f4e\u8026\u5408")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"you ain't gonna need it"),Object(l.b)("td",{parentName:"tr",align:null},"YAGNI"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f60\u4e0d\u4f1a\u7528\u5230\u5b83\u7684")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Principle of least surprise"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u610f\u5916\u539f\u5219")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"single responsibility"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u5355\u4e00\u8d23\u4efb")))))}p.isMDXComponent=!0}}]);