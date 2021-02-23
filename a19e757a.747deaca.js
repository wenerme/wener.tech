(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{468:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var a=r(2),n=r(7),l=(r(0),r(734)),b={title:"Grammar FAQ"},i={unversionedId:"languages/grammar/grammar-faq",id:"languages/grammar/grammar-faq",isDocsHomePage:!1,title:"Grammar FAQ",description:"Grammar FAQ",source:"@site/notes/languages/grammar/grammar-faq.md",slug:"/languages/grammar/grammar-faq",permalink:"/notes/languages/grammar/grammar-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/grammar/grammar-faq.md",version:"current"},c=[{value:"Antlr vs PEG",id:"antlr-vs-peg",children:[]}],p={rightToc:c};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"grammar-faq"},"Grammar FAQ"),Object(l.b)("h2",{id:"antlr-vs-peg"},"Antlr vs PEG"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PEG - Parsing expression grammar",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u662f\u4e00\u5957\u901a\u7528\u7684 \u89e3\u6790\u8868\u8fbe\u6587\u6cd5"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u540c\u8bed\u8a00\u6709\u4e0d\u540c\u5b9e\u73b0\uff0c\u4f46\u80fd\u529b\u548c\u5904\u7406\u903b\u8f91\u76f8\u540c"))),Object(l.b)("li",{parentName:"ul"},"Antlr",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"LL(*)")," \u8bed\u6cd5\u89e3\u6790\u5668\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u6838\u5fc3\u4e3a Java \u8bed\u8a00\uff0c\u53ef\u4ee5\u751f\u6210\u4e0d\u540c\u76ee\u6807\u8bed\u8a00")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u4e66\u5199\u8bed\u6cd5\u533a\u522b")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PEG",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bed\u6cd5\u7ed3\u6784\u66f4\u7b80\u5355\uff0c\u7c7b\u4f3c\u4e8e\u62fc\u88c5\u590d\u6742\u6b63\u5219\uff0c\u4e0d\u533a\u5206\u8bed\u6cd5\u548c\u8bcd\u6cd5"),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c\u903b\u8f91\u81ea\u4e0a\u4e0b\u4e0b\u4e00\u6b21\u6027\u6267\u884c\u51fa\u7ed3\u679c"))),Object(l.b)("li",{parentName:"ul"},"Antlr",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bed\u6cd5\u533a\u5206\u8bcd\u6cd5\u548c\u8bed\u6cd5 - Lexer \u548c Grammar"),Object(l.b)("li",{parentName:"ul"},"\u89e3\u6790\u662f\u6709\u5206\u8bcd\u903b\u8f91 - Tokenize"),Object(l.b)("li",{parentName:"ul"},"\u5c06 Token \u653e\u5165 Grammar \u903b\u8f91\u5f97\u5230\u6700\u7ec8\u7684 AST")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6982\u5ff5\u7406\u8bba\u533a\u522b")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PEG",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c CFG \u4f46\u5e76\u4e0d\u662f\u5b50\u96c6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"A{n}B{n}C{n}")," \u80fd\u8868\u8fbe\u4e0a\u4e0b\u6587\u76f8\u5173\u8bed\u6cd5"))),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u4e8c\u4e49\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"A / AB")," \u6c38\u8fdc\u4e0d\u4f1a\u5339\u914d\u5230\u7b2c\u4e8c\u4e2a\u89c4\u5219"))),Object(l.b)("li",{parentName:"ul"},"Lookahead \u53ef\u4ee5\u5305\u542b\u9012\u5f52",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c PEG \u4e0d\u5305\u542b\u9012\u5f52 LA \u5219\u53ef\u4ee5\u7ffb\u8bd1\u4e3a Antlr"))))),Object(l.b)("li",{parentName:"ul"},"Antlr",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"LL(*)"),", CFG \u5b50\u96c6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"A / AB")," \u53ef\u80fd\u5339\u914d\u7b2c\u4e8c\u4e2a\u89c4\u5219"),Object(l.b)("li",{parentName:"ul"},"Lookahead \u53ea\u80fd\u662f\u7b80\u5355\u7684\u6a21\u5f0f - DFA")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u529f\u80fd\u533a\u522b")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PEG",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u529f\u80fd\u7b80\u5355\uff0c\u6bcf\u4e2a\u8bed\u8a00\u4e00\u822c\u90fd\u6709\u5b9e\u73b0\uff0c\u8bed\u6cd5\u4e0d\u540c\u4f46\u76f8\u4f3c"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c\u6309\u9700\u6355\u83b7 text \u5185\u5bb9"),Object(l.b)("li",{parentName:"ul"},"\u4e66\u5199\u590d\u6742\u8bed\u6cd5\u9700\u8981\u6ce8\u610f\u4f18\u5148\u7ea7 - ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Operator-precedence_parser"}),"Operator-precedence parser")),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u5de6\u9012\u5f52"))),Object(l.b)("li",{parentName:"ul"},"Antlr",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u529f\u80fd\u5f3a\u5927\uff0c\u652f\u6301\u975e\u5e38\u591a\u8bed\u8a00"),Object(l.b)("li",{parentName:"ul"},"\u5468\u8fb9\u5de5\u5177\u8f83\u591a - IDE \u652f\u6301")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-antlr"}),"// PEG \u4f18\u5148\u7ea7 - \u6709\u5e8f\uff0c\u65e0\u6b67\u4e49\nAddExp: MultiExp ( '+' MultiExp)*\nMultiExp: Primary ( '*' Primary)\nPrimary: [0-9]+\n\n// Antlr \u4f18\u5148\u7ea7 - \u5de6\u9012\u5f52\nexpression\n  : expression '*' expression\n  | expression '+' expression\n  | Int\n  ;\nInt: [0-9]+ ;\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://arxiv.org/abs/1207.0443"}),"Left Recursion in Parsing Expression Grammars"))))))}m.isMDXComponent=!0},734:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),m=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=m(r),O=a,j=u["".concat(b,".").concat(O)]||u[O]||o[O]||l;return r?n.a.createElement(j,i(i({ref:t},p),{},{components:r})):n.a.createElement(j,i({ref:t},p))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=r[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);