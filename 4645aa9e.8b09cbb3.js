(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(n),O=a,s=p["".concat(i,".").concat(O)]||p[O]||m[O]||l;return n?r.a.createElement(s,c(c({ref:t},o),{},{components:n})):r.a.createElement(s,c({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},371:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),l=(n(0),n(1169)),i={title:"Vlang FAQ"},c={unversionedId:"languages/v/v-faq",id:"languages/v/v-faq",isDocsHomePage:!1,title:"Vlang FAQ",description:"Vlang \u4e0e Golang \u7684\u76f8\u4f3c\u70b9",source:"@site/notes/languages/v/v-faq.md",slug:"/languages/v/v-faq",permalink:"/notes/languages/v/v-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/v/v-faq.md",version:"current",sidebar:"docs",previous:{title:"Vlang Build",permalink:"/notes/languages/v/v-build"},next:{title:"V Reference",permalink:"/notes/languages/v/v-reference"}},b=[{value:"Vlang \u4e0e Golang \u7684\u76f8\u4f3c\u70b9",id:"vlang-\u4e0e-golang-\u7684\u76f8\u4f3c\u70b9",children:[]}],o={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"vlang-\u4e0e-golang-\u7684\u76f8\u4f3c\u70b9"},"Vlang \u4e0e Golang \u7684\u76f8\u4f3c\u70b9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":="),", ",Object(l.b)("inlineCode",{parentName:"li"},"=")),Object(l.b)("li",{parentName:"ul"},"struct, interface, \u51fd\u6570\u5904\u7406\u65b9\u5f0f, type alias"),Object(l.b)("li",{parentName:"ul"},"go, chan, select"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"_test.v")," \u4e3a\u6d4b\u8bd5, ",Object(l.b)("inlineCode",{parentName:"li"},"test_")," \u4e3a\u6d4b\u8bd5\u51fd\u6570"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"v fmt")),Object(l.b)("li",{parentName:"ul"},"c inter op"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"$embed_file")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"//go:embed")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},".${backend}.v")," \u6839\u636e\u60c5\u51b5\u9009\u62e9\u7f16\u8bd1"),Object(l.b)("li",{parentName:"ul"},"\u6bd4 Go \u66f4\u597d\u7684\u5730\u65b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"error/optional \u7684\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"\u8bed\u53e5\u53ef\u4ee5\u4f5c\u4e3a\u503c"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5b57\u7b26\u4e32\u63d2\u503c"))),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u540c\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"&Type")," \u8868\u793a\u5f15\u7528\u800c\u4e0d\u662f ",Object(l.b)("inlineCode",{parentName:"li"},"*Type")),Object(l.b)("li",{parentName:"ul"},"\u5185\u5b58\u57fa\u4e8e reference count \u91ca\u653e - \u5927\u90e8\u5206\u4f20\u503c\u4e3a\u81ea\u52a8\u91ca\u653e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64 v \u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"mut Type")," \u800c\u4e0d\u662f\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"*Type")," - \u66f4\u597d\u7531\u7f16\u8bd1\u5668\u63a7\u5236\u662f\u5426\u662f\u6307\u9488"))),Object(l.b)("li",{parentName:"ul"},"\u65e0\u5168\u5c40\u53d8\u91cf - \u9ed8\u8ba4 pure function"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u53ef\u53d8 - \u9700\u8981 mut \u4fee\u9970"),Object(l.b)("li",{parentName:"ul"},"int \u56fa\u5b9a\u4e3a i32"),Object(l.b)("li",{parentName:"ul"},"interface \u8c03\u7528\u53ef\u80fd\u4e0d\u4f1a\u8c03\u7528\u5230\u5b9e\u9645 struct \u5b9e\u73b0\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},"shared \u5bf9\u8c61\u7b49\u540c\u4e8e\u5c01\u88c5\u4e86 mutex \u7684\u5938\u7ebf\u7a0b\u5171\u4eab\u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa ORM - \u652f\u6301 LINQ"),Object(l.b)("li",{parentName:"ul"},"unsafe \u5173\u952e\u5b57\u64cd\u4f5c\u5185\u5b58\u4e0d\u5b89\u5168\u5185\u5bb9"),Object(l.b)("li",{parentName:"ul"},"union \u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"sizeof, ",Object(l.b)("inlineCode",{parentName:"li"},"__offsetof")),Object(l.b)("li",{parentName:"ul"},"\u6761\u4ef6\u7f16\u8bd1 ",Object(l.b)("inlineCode",{parentName:"li"},"$if")," \u7c7b\u4f3c go build tag \u7b49\u540c\u4e8e c \u7684 preprocessor"),Object(l.b)("li",{parentName:"ul"},"\u51fd\u6570\u652f\u6301 attribute - \u7c7b\u4f3c java \u7684 annotation"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u751f\u6210\u6765\u652f\u6301\u8303\u578b"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7f16\u8bd1\u65f6\u53cd\u5c04"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7b80\u5355\u7684\u64cd\u4f5c\u7b26\u91cd\u8f7d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"+, -, *, /, %, <, >, ==, !=, <=, >=")))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 asm \u5173\u952e\u5b57\u5185\u8054\u6c47\u7f16")))))}u.isMDXComponent=!0}}]);