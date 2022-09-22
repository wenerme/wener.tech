"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6741],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),o=["components"],l={id:"languages",title:"\u8bed\u8a00"},u=void 0,p={unversionedId:"languages/languages",id:"languages/languages",title:"\u8bed\u8a00",description:"- Learn X in Y minutes",source:"@site/../notes/languages/README.md",sourceDirName:"languages",slug:"/languages/",permalink:"/notes/languages/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"languages",title:"\u8bed\u8a00"},sidebar:"docs",previous:{title:"Java 9",permalink:"/notes/java/version/java-9"},next:{title:"ARM Build",permalink:"/notes/languages/c/arm-build"}},c={},s=[{value:"EBNF",id:"ebnf",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learnxinyminutes.com/"},"Learn X in Y minutes")),(0,i.kt)("li",{parentName:"ul"},"Ranking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html"},"TIOBE Index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://spectrum.ieee.org/static/interactive-the-top-programming-languages-2017"},"Interactive: The Top Programming Languages 2017"))))),(0,i.kt)("h2",{id:"ebnf"},"EBNF"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.iso.org/standard/26153.html"},"ISO 14977"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Information technology -- Syntactic metalanguage -- Extended BNF")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Production  = name "=" [ Expression ] ";" ;\nExpression  = Alternative { "|" Alternative } ;\nAlternative = Term { Term } ;\nTerm        = name | TOKEN | Group | Option | Repetition ;\nGroup       = "(" Expression ")" ;\nOption      = "[" Expression "]" ;\nRepetition  = "{" Expression "}" ;\n')))}f.isMDXComponent=!0}}]);