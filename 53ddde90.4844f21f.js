(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return O}));var a=n(2),b=n(7),r=(n(0),n(557)),l={id:"regex-note",title:"Regex \u901f\u8bb0",tags:["\u7b14\u8bb0"],date:new Date("2013-10-13T00:00:00.000Z")},c={permalink:"/blog/2013/10/13/Regex \u901f\u8bb0",source:"@site/contents/story/2013/2013-10-13-Regex \u901f\u8bb0.md",description:"Regex \u901f\u8bb0",date:"2013-10-13T00:00:00.000Z",tags:[{label:"\u7b14\u8bb0",permalink:"/blog/tags/\u7b14\u8bb0"}],title:"Regex \u901f\u8bb0",readingTime:1.355,truncated:!0,prevItem:{title:"\u8f6f\u4ef6\u8bbe\u8ba1\u5e08\u8003\u8bd5\u7b14\u8bb0",permalink:"/blog/2013/11/08/\u8f6f\u4ef6\u8bbe\u8ba1\u5e08\u8003\u8bd5\u7b14\u8bb0"},nextItem:{title:"\u7b80\u5355\u7684\u6587\u5b57\u6c14\u6ce1\u6846 for Swing",permalink:"/blog/2013/10/12/\u7b80\u5355\u7684\u6587\u5b57\u6c14\u6ce1\u6846 for Swing"}},p=[{value:"\u5b57\u7b26\u8868\u793a",id:"\u5b57\u7b26\u8868\u793a",children:[]},{value:"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784",id:"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784",children:[]},{value:"\u951a\u70b9\u53ca\u5176\u4ed6 &quot;\u96f6\u957f\u5ea6\u65ad\u8a00&quot;",id:"\u951a\u70b9\u53ca\u5176\u4ed6-\u96f6\u957f\u5ea6\u65ad\u8a00",children:[]},{value:"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd",id:"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd",children:[]},{value:"\u5206\u7ec4,\u6355\u83b7,\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236",id:"\u5206\u7ec4\u6355\u83b7\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236",children:[]},{value:"\u547d\u540d\u5b57\u7b26\u7ec4",id:"\u547d\u540d\u5b57\u7b26\u7ec4",children:[]},{value:"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b",id:"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b",children:[]},{value:"\u5339\u914d\u57fa\u7840",id:"\u5339\u914d\u57fa\u7840",children:[]}],i={rightToc:p};function O(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"regex-\u901f\u8bb0"},"Regex \u901f\u8bb0"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f, \u7531\u4e8e\u6b63\u5219\u5728\u4e0d\u540c\u7684\u6d41\u6d3e\u4e2d\u8868\u793a\u6709\u6240\u4e0d\u540c,\u53ea\u80fd\u6574\u7406\u4e00\u4e9b\u51e0\u4e4e\u96f7\u540c\u7684.",Object(r.b)("br",{parentName:"p"}),"\n","\u4e0d\u540c\u6d41\u6d3e\u4e4b\u95f4\u7684\u5dee\u5f02,\u5f88\u591a\u5728\u662f\u5426\u9700\u8981\u8f6c\u4e49\u4e0a,\u4f8b\u5982 \u5728\u6709\u4e9b\u6d41\u6d3e\u91cc ",Object(r.b)("inlineCode",{parentName:"p"},"()")," \u8981\u5199\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"\\(\\)"),Object(r.b)("br",{parentName:"p"}),"\n","\u8fd9\u91cc\u6574\u7406\u7684\u4e3b\u8981\u662f PCRE \u6d41\u6d3e\u7684\u6b63\u5219\u8bed\u6cd5")),Object(r.b)("h2",{id:"\u5b57\u7b26\u8868\u793a"},"\u5b57\u7b26\u8868\u793a"),Object(r.b)("p",null,"\u5b57\u7b26\u7f29\u8fdb\u8868\u793a\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\n,\\t,\\a,\\b,\\e,\\f,\\r,\\v")),Object(r.b)("p",null,"\u516b\u8fdb\u5236\u8f6c\u4e49\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\num")),Object(r.b)("p",null,"\u5341\u516d\u8fdb\u5236\u8f6c\u4e49/Unicode \u8f6c\u4e49\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\xnum,\\x{num},\\unum,\\Unum")),Object(r.b)("p",null,"\u63a7\u5236\u5b57\u7b26\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\cchar")),Object(r.b)("h2",{id:"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784"},"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784"),Object(r.b)("p",null,"\u666e\u901a\u5b57\u7b26\u7ec4\n: ",Object(r.b)("inlineCode",{parentName:"p"},"[a-z].[^a-z]")),Object(r.b)("p",null,"\u51e0\u4e4e\u80fd\u5339\u914d\u4efb\u4f55\u5b57\u7b26\u7684\u5143\u5b57\u7b26\n: ",Object(r.b)("inlineCode",{parentName:"p"},".")),Object(r.b)("p",null,"\u5355\u4e2a\u5b57\u8282\n: '\\C'"),Object(r.b)("p",null,"Unicode \u7ec4\u5408\u5b57\u7b26\u5e8f\u5217\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\X")),Object(r.b)("p",null,"\u5b57\u7b26\u7ec4\u7b80\u8bb0(\u5927\u5199\u4e3a\u6392\u9664)\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\w,\\W,\\s,\\S,\\d,\\D")),Object(r.b)("p",null,"Unicode \u5c5e\u6027\u533a\u57df\u548c\u5206\u7c7b\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\p{prop},\\P{prop}")),Object(r.b)("p",null,'POSIX "\u5b57\u7b26\u7ec4"\u65b9\u62ec\u53f7\u8868\u793a\n: ',Object(r.b)("inlineCode",{parentName:"p"},"[[:alpha:]]")),Object(r.b)("p",null,'POSIX "Collating\u5e8f\u5217" \u65b9\u62ec\u53f7\u8868\u793a\n: ',Object(r.b)("inlineCode",{parentName:"p"},"[[.span.-11.]]")),Object(r.b)("p",null,'POSIX "\u5b57\u7b26\u7b49\u4ef7\u7c7b" \u65b9\u62ec\u53f7\u8868\u793a\n: ',Object(r.b)("inlineCode",{parentName:"p"},"[[=n=]]")),Object(r.b)("h2",{id:"\u951a\u70b9\u53ca\u5176\u4ed6-\u96f6\u957f\u5ea6\u65ad\u8a00"},'\u951a\u70b9\u53ca\u5176\u4ed6 "\u96f6\u957f\u5ea6\u65ad\u8a00"'),Object(r.b)("p",null,"\u884c/\u5b57\u7b26\u4e32\u8d77\u70b9\n: ",Object(r.b)("inlineCode",{parentName:"p"},"^, \\A")),Object(r.b)("p",null,"\u884c/\u5b57\u7b26\u4e32\u7ec8\u70b9\n: '$. \\Z, \\z'"),Object(r.b)("p",null,"\u672c\u6b21\u5339\u914d\u7684\u5f00\u59cb\u4f4d\u7f6e/\u4e0a\u6b21\u5339\u914d\u7684\u7ed3\u675f\u4f4d\u7f6e\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\G")),Object(r.b)("p",null,"\u5355\u8bcd\u5206\u754c\u7b26\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\b,\\B,\\<,\\>")),Object(r.b)("p",null,"\u987a\u5e8f\u73af\u89c6\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?=...), (?!...)")),Object(r.b)("p",null,"\u9006\u5e8f\u73af\u89c6\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?<=...),(?<!...)")),Object(r.b)("h2",{id:"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd"},"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd"),Object(r.b)("p",null,"\u6a21\u5f0f\u4fee\u9970\u8bcd\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?modifier),(-?modifier)"),"\n: eg:",Object(r.b)("inlineCode",{parentName:"p"},"(?i)...(?-i)")),Object(r.b)("p",null,"\u6a21\u5f0f\u4f5c\u7528\u8303\u56f4\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?modifier:...)"),"\n: eg:",Object(r.b)("inlineCode",{parentName:"p"},"(?i:....)")),Object(r.b)("p",null,"\u6ce8\u91ca\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?#...),#...")),Object(r.b)("p",null,"\u6587\u672c\u8303\u56f4\n: ",Object(r.b)("inlineCode",{parentName:"p"},"\\Q,\\E")),Object(r.b)("h2",{id:"\u5206\u7ec4\u6355\u83b7\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236"},"\u5206\u7ec4,\u6355\u83b7,\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236"),Object(r.b)("p",null,"\u6355\u83b7/\u5206\u7ec4\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(...),\\1,\\2")),Object(r.b)("p",null,"\u4ec5\u7528\u4e8e\u5206\u7ec4\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?:...)")),Object(r.b)("p",null,"\u547d\u540d\u6355\u83b7\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?<name>...)")),Object(r.b)("p",null,"\u56fa\u5316\u5206\u7ec4\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?>...)")),Object(r.b)("p",null,"\u591a\u9009\n: ",Object(r.b)("inlineCode",{parentName:"p"},"...|...|...")),Object(r.b)("p",null,"\u6761\u4ef6\u5224\u65ad\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?if then|else)")),Object(r.b)("p",null,"\u5339\u914d\u4f18\u5148\u91cf\u8bcd\n: ",Object(r.b)("inlineCode",{parentName:"p"},"*,+,?,{m,n}")),Object(r.b)("p",null,"\u5ffd\u7565\u4f18\u5148\u91cf\u8bcd\n: ",Object(r.b)("inlineCode",{parentName:"p"},"*?,+?,??,{m,n}?")),Object(r.b)("p",null,"\u5360\u6709\u4f18\u5148\u91cf\u8bcd\n: ",Object(r.b)("inlineCode",{parentName:"p"},"*?,++,?+,{m,n}+")),Object(r.b)("h2",{id:"\u547d\u540d\u5b57\u7b26\u7ec4"},"\u547d\u540d\u5b57\u7b26\u7ec4"),Object(r.b)("p",null,"\u5173\u4e8e\u8fd9\u4e9b\u5b57\u7b26\u7ec4\u7684\u547d\u540d,\u53ef\u4ee5\u53c2\u8003",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/ctype.h.html"}),"susv-ctype"),".\u9700\u8981\u6ce8\u610f\u7684\u662f,\u5728unicode\u91cc,\u8fd9\u4e9b\u5b57\u7b26\u7ec4\u7684\u5b9a\u4e49\u8981\u6839\u636eunicode \u7684\u5b9a\u4e49\u6765\u5224\u65ad.\u4f1a\u5305\u542b\u989d\u5916\u7684\u540c\u4e49\u7684\u5b57\u7b26."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"\u7ec4"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u63cf\u8ff0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:alnum:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:alpha:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5b57\u6bcd")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:blank:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7a7a\u767d")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:cntrl:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u63a7\u5236\u7b26")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:digit:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:graph:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53ef\u663e\u793a")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:lower:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5c0f\u5199")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:upper:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5927\u5199")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"[:space:]"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5305\u62ec ","[:blank:]",", \u6362\u884c, \u56de\u8f66\u53ca\u5176\u4ed6")))),Object(r.b)("h2",{id:"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b"},"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"nfa|nfa.not")," \u5339\u914d ",Object(r.b)("inlineCode",{parentName:"p"},"nfa.not")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5339\u914d\u7ed3\u679c"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nfa"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4f20\u7edf NFA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nfa.not"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"POSIX / DFA")))),Object(r.b)("p",null,"DFA \u4e0d\u652f\u6301\u6355\u83b7\u578b\u62ec\u53f7\u548c\u56de\u6eaf"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"x(.+)+x")," \u5339\u914d ",Object(r.b)("inlineCode",{parentName:"p"},"=xx============================================================")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5339\u914d\u7ed3\u679c"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u65f6\u95f4\u957f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NFA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u65f6\u95f4\u77ed"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DFA, \u4f46\u4e5f\u6709\u53ef\u80fd\u662f\u6df7\u5408\u7684\u6216\u4f18\u5316\u7684")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5f15\u64ce"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5de5\u5177"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DFA"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"awk, egrep, flex, lex, MySQL, Procmail")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tranditional NFA"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GNU Emacs, Java, grep, less, more, .NET, PCRE, Perl, PHP, Python, Vi, Ruby, sed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"POSIX NFA"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mawk, Mortricekern System;s utiles, GNU Emacs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DFA/NFA"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GNU awk, GNU grep, Tcl")))),Object(r.b)("h2",{id:"\u5339\u914d\u57fa\u7840"},"\u5339\u914d\u57fa\u7840"),Object(r.b)("p",null,"\u89c4\u52191\n: \u4f18\u5148\u9009\u62e9\u6700\u5de6\u7aef\u7684\u5339\u914d\u7ed3\u679c"),Object(r.b)("p",null,"\u89c4\u52192\n: \u6807\u51c6\u91cf\u8bcd\u662f\u5339\u914d\u4f18\u5148\u7684"),Object(r.b)("p",null,"NFA\n: \u8868\u8fbe\u5f0f\u4e3b\u5bfc"),Object(r.b)("p",null,"DFA\n: \u6587\u672c\u4e3b\u5bfc,\u4e0d\u5173\u5fc3\u8868\u8fbe\u5f0f\u7684\u5f62\u5f0f\n: \u5373 ",Object(r.b)("inlineCode",{parentName:"p"},"x*=x?x?...=(x(x(x...)?)?)?")),Object(r.b)("p",null,"\u5339\u914d\u4f18\u5148\u91cf\u8bcd\u548c\u5ffd\u7565\u4f18\u5148\u91cf\u8bcd\u63a7\u5236,\u5bf9\u56de\u6eaf\u72b6\u6001\u9009\u62e9,\u662f\u8df3\u8fc7\u8fd8\u662f\u8fdb\u884c."),Object(r.b)("p",null,"\u73af\u89c6\u6a21\u62df\u56fa\u5316\u5206\u7ec4\n: ",Object(r.b)("inlineCode",{parentName:"p"},"(?>...) => (?=(...))\\1")),Object(r.b)("p",null,"\u591a\u9009\u7ed3\u6784\u5373\u975e\u5339\u914d\u4f18\u5148,\u4e5f\u975e\u5ffd\u7565\u4f18\u5148,\u800c\u662f\u987a\u5e8f\u4f18\u5148\n: eg: ",Object(r.b)("inlineCode",{parentName:"p"},'(to|tow) =~ "tow" = "to"')))}O.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return m}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),O=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},j=function(e){var t=O(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),j=O(n),d=a,m=j["".concat(l,".").concat(d)]||j[d]||o[d]||r;return n?b.a.createElement(m,c(c({ref:t},i),{},{components:n})):b.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);