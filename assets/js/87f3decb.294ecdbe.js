"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40683],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82912:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"antlr4",title:"Antlr 4"},s="Antlr4",u={unversionedId:"languages/antlr4",id:"languages/antlr4",title:"Antlr 4",description:"- \u6848\u4f8b",source:"@site/notes/languages/antlr4.md",sourceDirName:"languages",slug:"/languages/antlr4",permalink:"/notes/languages/antlr4",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/antlr4.md",tags:[],version:"current",frontMatter:{id:"antlr4",title:"Antlr 4"},sidebar:"docs",previous:{title:"V Reference",permalink:"/notes/languages/v/v-reference"},next:{title:"\u5b57\u5178",permalink:"/notes/languages/english/dict"}},p=[{value:"\u8bed\u6cd5\u7ed3\u6784",id:"\u8bed\u6cd5\u7ed3\u6784",children:[],level:2},{value:"Go",id:"go",children:[],level:2},{value:"antlr4 cli options",id:"antlr4-cli-options",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"What is semantic predicate ?",id:"what-is-semantic-predicate-",children:[],level:3},{value:"Lexer vs Parser",id:"lexer-vs-parser",children:[],level:3},{value:"\u5ffd\u7565\u5927\u5c0f\u5199",id:"\u5ffd\u7565\u5927\u5c0f\u5199",children:[],level:3},{value:"Visitor vs Listener",id:"visitor-vs-listener",children:[],level:3},{value:"reportAttemptingFullContext",id:"reportattemptingfullcontext",children:[],level:3}],level:2}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"antlr4"},"Antlr4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6848\u4f8b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/antlr/grammars-v4"},"grammars-v4")))),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u652f\u6301",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Java"),(0,l.kt)("li",{parentName:"ul"},"C#"),(0,l.kt)("li",{parentName:"ul"},"Python 2/3"),(0,l.kt)("li",{parentName:"ul"},"JavaScript"),(0,l.kt)("li",{parentName:"ul"},"Go"),(0,l.kt)("li",{parentName:"ul"},"C++"),(0,l.kt)("li",{parentName:"ul"},"Swift")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar antlr-4.6-complete.jar -Dlanguage=Go MyLang.g4\n")),(0,l.kt)("h2",{id:"\u8bed\u6cd5\u7ed3\u6784"},"\u8bed\u6cd5\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-antlr4"},"@header {\n}\n\n@members {\n}\n\n@parser::members {\n}\n\n@lexer::members {\n}\n\nparent\nlocals [\n    List<String> symbols = new ArrayList<String>()\n]\n: ruleName;\n\nruleName[int returnValue]\n@init{\n}\n@after {\n}\nlocals [int i=1]\n  :  ID {/*Dynamically-Scoped Attributes*/if($block::symbols.contains($ID.text)){}}\n  ;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-g4"},"/** Optional javadoc style comment */\ngrammar Name;\noptions {...}\nimport ... ;\n\ntokens {...}\nchannels {...} // lexer only\n@actionName {...}\n\nrule1 // parser and lexer rules, possibly intermingled\n...\nruleN\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"grammar Count;\n\n@header {\npackage foo;\n}\n\n@members {\nint count = 0;\n}\n\nlist\n@after {System.out.println(count+\" ints\");}\n: INT {count++;} (',' INT {count++;} )*\n;\n\nINT : [0-9]+ ;\nWS : [ \\r\\t\\n]+ -> skip ;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-antlr"},"grammar JSON;\n\njson\n   : value\n   ;\n\nobject\n   : '{' pair (',' pair)* '}'\n   | '{' '}'\n   ;\n\npair\n   : STRING ':' value\n   ;\n\narray\n   : '[' value (',' value)* ']'\n   | '[' ']'\n   ;\n\nvalue\n   : STRING\n   | NUMBER\n   | object\n   | array\n   | 'true'\n   | 'false'\n   | 'null'\n   ;\n\n\nSTRING\n   : '\"' (ESC | ~ [\"\\\\])* '\"'\n   ;\nfragment ESC\n   : '\\\\' ([\"\\\\/bfnrt] | UNICODE)\n   ;\nfragment UNICODE\n   : 'u' HEX HEX HEX HEX\n   ;\nfragment HEX\n   : [0-9a-fA-F]\n   ;\nNUMBER\n   : '-'? INT '.' [0-9] + EXP? | '-'? INT EXP | '-'? INT\n   ;\nfragment INT\n   : '0' | [1-9] [0-9]*\n   ;\n// no leading zeros\nfragment EXP\n   : [Ee] [+\\-]? INT\n   ;\n// \\- since - means \"range\" inside [...]\nWS\n   : [ \\t\\n\\r] + -> skip\n   ;\n")),(0,l.kt)("h2",{id:"go"},"Go"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/antlr/antlr4/blob/master/doc/go-target.md"},"https://github.com/antlr/antlr4/blob/master/doc/go-target.md"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/antlr/antlr4/runtime/Go/antlr\nantlr4 -Dlanguage=Go -package mylang MyLang.g4\n")),(0,l.kt)("h2",{id:"antlr4-cli-options"},"antlr4 cli options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ANTLR Parser Generator  Version 4.7.1\n -o ___              specify output directory where all output is generated\n -lib ___            specify location of grammars, tokens files\n -atn                generate rule augmented transition network diagrams\n -encoding ___       specify grammar file encoding; e.g., euc-jp\n -message-format ___ specify output style for messages in antlr, gnu, vs2005\n -long-messages      show exception details when available for errors and warnings\n -listener           generate parse tree listener (default)\n -no-listener        don't generate parse tree listener\n -visitor            generate parse tree visitor\n -no-visitor         don't generate parse tree visitor (default)\n -package ___        specify a package/namespace for the generated code\n -depend             generate file dependencies\n -D<option>=value    set/override a grammar-level option\n -Werror             treat warnings as errors\n -XdbgST             launch StringTemplate visualizer on generated code\n -XdbgSTWait         wait for STViz to close before continuing\n -Xforce-atn         use the ATN simulator for all predictions\n -Xlog               dump lots of logging info to antlr-timestamp.log\n -Xexact-output-dir  all output goes into -o dir regardless of paths/package\n")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"what-is-semantic-predicate-"},"What is semantic predicate ?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/3056441/1870054"},"What is a 'semantic predicate' in ANTLR?"))),(0,l.kt)("h3",{id:"lexer-vs-parser"},"Lexer vs Parser"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bcd\u6cd5/lexer rule",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u5199"),(0,l.kt)("li",{parentName:"ul"},"used to tokenize your input source. It represents a fundamental building block of your language."))),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5/parser rule",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u5199"),(0,l.kt)("li",{parentName:"ul"},"consists of zero or more other parser rules or tokens produced by the lexer."))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u591a\u4e2a Lexer \u90fd\u80fd\u5339\u914d\u540c\u4e00\u4e2a\u5185\u5bb9, \u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u4f1a\u88ab\u9009\u62e9."),(0,l.kt)("li",{parentName:"ul"},"Lexer \u4e2d\u4e0d\u4f1a\u6709\u5176\u4ed6\u7684 Token, Skip \u4e0d\u4f1a\u751f\u6548, \u56e0\u4e3a\u4e00\u4e2a Lexer \u662f\u4e00\u4e2a Token"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.3dbuzz.com/forum/threads/203932-ANTLR-When-to-use-Parser-Rules-vs-Lexer-Rules"},"WHEN TO USE PARSER RULES VS LEXER RULES?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u89e3\u6790\u7684\u57fa\u672c\u6b65\u9aa4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a\u4e00\u4e2a\u4e00\u4e2a\u7684 Token"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u7ec4 Token \u89e3\u6790\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8bed\u6cd5\u6811\u8fdb\u884c\u5904\u7406"))),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e24\u8005\u662f\u5206\u4e0d\u5f00\u7684")))),(0,l.kt)("h3",{id:"\u5ffd\u7565\u5927\u5c0f\u5199"},"\u5ffd\u7565\u5927\u5c0f\u5199"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/antlr/antlr4/blob/master/doc/case-insensitive-lexing.md"},"Case-Insensitive Lexing"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5173\u952e\u8bcd\u5b9a\u4e49\u4f7f\u7528\u5ffd\u7565\u5927\u5c0f\u5199\u7684\u5339\u914d"),(0,l.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u5b57\u7b26\u6d41")))),(0,l.kt)("h3",{id:"visitor-vs-listener"},"Visitor vs Listener"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/20714492"},"Antlr4 Listeners and Visitors - which to implement?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://jakubdziworski.github.io/java/2016/04/01/antlr_visitor_vs_listener.html"},"Visitor vs Listener")),(0,l.kt)("li",{parentName:"ul"},"visitor pattern you have the ability to direct tree walking while in listener you are only reacting to the tree walker."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://saumitra.me/blog/antlr4-visitor-vs-listener-pattern/"},"Antlr4 visitor vs listener pattern"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"listener pattern is that its all automatic and even if you don\u2019t write any parse tree walker, then also it will figure out and trigger the enter and exit method for each rule. This is a huge benefit for translation type of usecases."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://developers-club.com/posts/259691/"},'Fight "the Listener vs the Visitor" at antlr4 stadium'))),(0,l.kt)("h3",{id:"reportattemptingfullcontext"},"reportAttemptingFullContext"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.antlr.org/api/Java/org/antlr/v4/runtime/DiagnosticErrorListener.html#reportAttemptingFullContext-org.antlr.v4.runtime.Parser-org.antlr.v4.runtime.dfa.DFA-int-int-java.util.BitSet-org.antlr.v4.runtime.atn.ATNConfigSet-"},"DiagnosticErrorListener#reportAttemptingFullContext")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5f71\u54cd\u89e3\u6790")))}c.isMDXComponent=!0}}]);