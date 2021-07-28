(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,g=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(g,c(c({ref:t},p),{},{components:n})):a.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},690:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1172)),o={id:"languages",title:"\u8bed\u8a00"},c={unversionedId:"languages/languages",id:"languages/languages",isDocsHomePage:!1,title:"\u8bed\u8a00",description:"Tips",source:"@site/notes/languages/README.md",slug:"/languages/languages",permalink:"/notes/languages/languages",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/README.md",version:"current",sidebar:"docs",previous:{title:"UI Awesome",permalink:"/notes/web/ui/ui-awesome"},next:{title:"Antlr 4",permalink:"/notes/languages/antlr4"}},l=[{value:"Tips",id:"tips",children:[]},{value:"EBNF",id:"ebnf",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://learnxinyminutes.com/"},"Learn X in Y minutes")),Object(i.b)("li",{parentName:"ul"},"Ranking",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html"},"TIOBE Index")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://spectrum.ieee.org/static/interactive-the-top-programming-languages-2017"},"Interactive: The Top Programming Languages 2017"))))),Object(i.b)("h2",{id:"ebnf"},"EBNF"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.iso.org/standard/26153.html"},"ISO 14977"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Information technology -- Syntactic metalanguage -- Extended BNF")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'Production  = name "=" [ Expression ] ";" ;\nExpression  = Alternative { "|" Alternative } ;\nAlternative = Term { Term } ;\nTerm        = name | TOKEN | Group | Option | Repetition ;\nGroup       = "(" Expression ")" ;\nOption      = "[" Expression "]" ;\nRepetition  = "{" Expression "}" ;\n')))}u.isMDXComponent=!0}}]);