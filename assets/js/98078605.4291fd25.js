"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41258],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(a),c=n,g=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5423:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return h}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&m(e,a,t[a]);return e};const k={tags:["Awesome"]},c="Parser Awesome",g={unversionedId:"languages/parser/parser-awesome",id:"languages/parser/parser-awesome",title:"Parser Awesome",description:"- Antlr",source:"@site/../notes/languages/parser/parser-awesome.md",sourceDirName:"languages/parser",slug:"/languages/parser/parser-awesome",permalink:"/notes/languages/parser/parser-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/parser/parser-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{tags:["Awesome"]},sidebar:"docs",previous:{title:"ohmjs",permalink:"/notes/languages/parser/ohmjs"},next:{title:"Parser FAQ",permalink:"/notes/languages/parser/parser-faq"}},f={},h=[{value:"PEG",id:"peg",level:2}],N={toc:h};function d(e){var t,a=e,{components:n}=a,m=((e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},N),m),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"parser-awesome"}),"Parser Awesome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/languages/parser/antlr4"}),"Antlr"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Adaptive LL(*)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/languages/parser/javacc"}),"JavaCC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LL(k)"))),(0,r.kt)("li",{parentName:"ul"},"Grammer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yacc - Yet Another Compiler-Compiler"),(0,r.kt)("li",{parentName:"ul"},"bison - YACC-compatible Parser Generator",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LALR(1), LR(1), IELR(1), GLR"))))),(0,r.kt)("li",{parentName:"ul"},"Lexer - DFA",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"lex - Lexical Analyzer Generator"),(0,r.kt)("li",{parentName:"ul"},"flex"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/skvadrik/re2c"}),"skvadrik/re2c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lexer generator for C, C++, Go and Rust"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://jflex.de/"}),"http://jflex.de/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jflex-de/jflex"}),"https://github.com/jflex-de/jflex")))))),(0,r.kt)("li",{parentName:"ul"},"Diagram - railroad diagrams - wikipedia ",(0,r.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Syntax_diagram"}),"Syntax diagram"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/tabatkins/railroad-diagrams"}),"tabatkins/railroad-diagrams"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, JS, Python"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.bottlecaps.de/rr/ui"}),"https://www.bottlecaps.de/rr/ui")))),(0,r.kt)("li",{parentName:"ul"},"Languages",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/mingodad/squilu"}),"https://github.com/mingodad/squilu")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/adrian-thurston/ragel"}),"adrian-thurston/ragel"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ragel State Machine Compiler"))),(0,r.kt)("li",{parentName:"ul"},"BNF, ABNF, EBNF",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ABNF - Augmented Backus\u2013Naur Form - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.rfc-editor.org/rfc/rfc5234.html"}),"rfc5234"))))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_parser_generators"}),"Comparison of parser generators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://dinosaur.compilertools.net/"}),"http://dinosaur.compilertools.net/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://ldapwiki.com/wiki/ABNF"}),"https://ldapwiki.com/wiki/ABNF"))),(0,r.kt)("h2",u({},{id:"peg"}),"PEG"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Golang",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pointlander/peg"}),"pointlander/peg")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/zyedidia/gpeg"}),"zyedidia/gpeg")))),(0,r.kt)("li",{parentName:"ul"},"Java",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/sirthias/parboiled"}),"sirthias/parboiled"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u751f\u6210\u4ee3\u7801\uff0c\u76f4\u63a5\u901a\u8fc7\u6ce8\u89e3\u6267\u884c - \u7b80\u5355\u6613\u7528"),(0,r.kt)("li",{parentName:"ul"},"Elegant parsing in Java and Scala - lightweight, easy-to-use, powerful."))))),(0,r.kt)("li",{parentName:"ul"},"JavaScript",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/languages/parser/peggy"}),"peggy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"successor of PEG.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/languages/parser/pegjs"}),"PEG.js"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u4e0d\u518d\u7ef4\u62a4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pegjs/pegjs"}),"pegjs/pegjs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pegjs/pegjs/blob/master/src/parser.pegjs"}),"parser.pegjs")),(0,r.kt)("li",{parentName:"ul"},"Simple and expressive grammar syntax"),(0,r.kt)("li",{parentName:"ul"},"Integrates both lexical and syntactical analysis"),(0,r.kt)("li",{parentName:"ul"},"Parsers have excellent error reporting out of the box"),(0,r.kt)("li",{parentName:"ul"},"Based on parsing expression grammar formalism \u2014 more powerful than traditional LL(k) and LR(k) parsers"),(0,r.kt)("li",{parentName:"ul"},"Usable from your browser, from the command line, or via JavaScript API"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/languages/parser/ohmjs"}),"harc/ohm"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, JS"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u751f\u6210\u4ee3\u7801\uff0c\u4f7f\u7528\u7c7b\u4f3c Regex - \u7ed9\u8bed\u6cd5\u89e3\u6790\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://ohmjs.org/editor/"}),"https://ohmjs.org/editor/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://ohmjs.org/docs/syntax-reference"}),"https://ohmjs.org/docs/syntax-reference")))))),(0,r.kt)("li",{parentName:"ul"},"\u6848\u4f8b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jgm/peg-markdown/blob/master/markdown_parser.leg"}),"https://github.com/jgm/peg-markdown/blob/master/markdown_parser.leg"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Markdown"))))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://bford.info/packrat/"}),"The Packrat Parsing and Parsing Expression Grammars Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://www.antlr.org/papers/LL-star-PLDI11.pdf"}),"LL(","*","): The Foundation of the ANTLR Parser Generator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/orlandohill/peg-left-recursion"}),"orlandohill/peg-left-recursion")," - An idea to handle left-recursion in Parsing Expression Grammars (PEGs)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/PhilippeSigaud/Pegged/wiki/Left-Recursion"}),"PhilippeSigaud/Pegged/wiki/Left-Recursion"))))))}d.isMDXComponent=!0}}]);