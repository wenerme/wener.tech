/*! For license information please see 542d1dbb.058ab95e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74363],{805:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var r=s(11527),t=s(47214);const d={slug:"regex-note",title:"Regex \u901f\u8bb0",tags:["\u7b14\u8bb0"],date:new Date("2013-10-13T00:00:00.000Z")},l="Regex \u901f\u8bb0",i={permalink:"/story/regex-note",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2013/2013-10-13-Regex \u901f\u8bb0.md",source:"@site/../story/2013/2013-10-13-Regex \u901f\u8bb0.md",title:"Regex \u901f\u8bb0",description:"\u9700\u8981\u6ce8\u610f\u7684\u662f, \u7531\u4e8e\u6b63\u5219\u5728\u4e0d\u540c\u7684\u6d41\u6d3e\u4e2d\u8868\u793a\u6709\u6240\u4e0d\u540c,\u53ea\u80fd\u6574\u7406\u4e00\u4e9b\u51e0\u4e4e\u96f7\u540c\u7684.",date:"2013-10-13T00:00:00.000Z",formattedDate:"October 13, 2013",tags:[{label:"\u7b14\u8bb0",permalink:"/story/tags/\u7b14\u8bb0"}],readingTime:3.625,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"regex-note",title:"Regex \u901f\u8bb0",tags:["\u7b14\u8bb0"],date:"2013-10-13T00:00:00.000Z"},unlisted:!1,prevItem:{title:"\u8f6f\u4ef6\u8bbe\u8ba1\u5e08\u8003\u8bd5\u7b14\u8bb0",permalink:"/story/rk-software-designer"},nextItem:{title:"\u7b80\u5355\u7684\u6587\u5b57\u6c14\u6ce1\u6846 for Swing",permalink:"/story/java-siwng-textbubble"}},c={authorsImageUrls:[]},h=[{value:"\u5b57\u7b26\u8868\u793a",id:"\u5b57\u7b26\u8868\u793a",level:2},{value:"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784",id:"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784",level:2},{value:"\u951a\u70b9\u53ca\u5176\u4ed6 &quot;\u96f6\u957f\u5ea6\u65ad\u8a00&quot;",id:"\u951a\u70b9\u53ca\u5176\u4ed6-\u96f6\u957f\u5ea6\u65ad\u8a00",level:2},{value:"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd",id:"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd",level:2},{value:"\u5206\u7ec4,\u6355\u83b7,\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236",id:"\u5206\u7ec4\u6355\u83b7\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236",level:2},{value:"\u547d\u540d\u5b57\u7b26\u7ec4",id:"\u547d\u540d\u5b57\u7b26\u7ec4",level:2},{value:"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b",id:"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b",level:2},{value:"\u5339\u914d\u57fa\u7840",id:"\u5339\u914d\u57fa\u7840",level:2}];function x(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f, \u7531\u4e8e\u6b63\u5219\u5728\u4e0d\u540c\u7684\u6d41\u6d3e\u4e2d\u8868\u793a\u6709\u6240\u4e0d\u540c,\u53ea\u80fd\u6574\u7406\u4e00\u4e9b\u51e0\u4e4e\u96f7\u540c\u7684.\n\u4e0d\u540c\u6d41\u6d3e\u4e4b\u95f4\u7684\u5dee\u5f02,\u5f88\u591a\u5728\u662f\u5426\u9700\u8981\u8f6c\u4e49\u4e0a,\u4f8b\u5982 \u5728\u6709\u4e9b\u6d41\u6d3e\u91cc ",(0,r.jsx)(e.code,{children:"()"})," \u8981\u5199\u6210 ",(0,r.jsx)(e.code,{children:"\\(\\)"}),"\n\u8fd9\u91cc\u6574\u7406\u7684\u4e3b\u8981\u662f PCRE \u6d41\u6d3e\u7684\u6b63\u5219\u8bed\u6cd5"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b57\u7b26\u8868\u793a",children:"\u5b57\u7b26\u8868\u793a"}),"\n",(0,r.jsxs)(e.p,{children:["\u5b57\u7b26\u7f29\u8fdb\u8868\u793a\n: ",(0,r.jsx)(e.code,{children:"\\n,\\t,\\a,\\b,\\e,\\f,\\r,\\v"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u516b\u8fdb\u5236\u8f6c\u4e49\n: ",(0,r.jsx)(e.code,{children:"\\num"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5341\u516d\u8fdb\u5236\u8f6c\u4e49/Unicode \u8f6c\u4e49\n: ",(0,r.jsx)(e.code,{children:"\\xnum,\\x{num},\\unum,\\Unum"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u63a7\u5236\u5b57\u7b26\n: ",(0,r.jsx)(e.code,{children:"\\cchar"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784",children:"\u5b57\u7b26\u53ca\u76f8\u5173\u7ed3\u6784"}),"\n",(0,r.jsxs)(e.p,{children:["\u666e\u901a\u5b57\u7b26\u7ec4\n: ",(0,r.jsx)(e.code,{children:"[a-z].[^a-z]"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u51e0\u4e4e\u80fd\u5339\u914d\u4efb\u4f55\u5b57\u7b26\u7684\u5143\u5b57\u7b26\n: ",(0,r.jsx)(e.code,{children:"."})]}),"\n",(0,r.jsx)(e.p,{children:"\u5355\u4e2a\u5b57\u8282\n: '\\C'"}),"\n",(0,r.jsxs)(e.p,{children:["Unicode \u7ec4\u5408\u5b57\u7b26\u5e8f\u5217\n: ",(0,r.jsx)(e.code,{children:"\\X"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5b57\u7b26\u7ec4\u7b80\u8bb0(\u5927\u5199\u4e3a\u6392\u9664)\n: ",(0,r.jsx)(e.code,{children:"\\w,\\W,\\s,\\S,\\d,\\D"})]}),"\n",(0,r.jsxs)(e.p,{children:["Unicode \u5c5e\u6027\u533a\u57df\u548c\u5206\u7c7b\n: ",(0,r.jsx)(e.code,{children:"\\p{prop},\\P{prop}"})]}),"\n",(0,r.jsxs)(e.p,{children:['POSIX "\u5b57\u7b26\u7ec4"\u65b9\u62ec\u53f7\u8868\u793a\n: ',(0,r.jsx)(e.code,{children:"[[:alpha:]]"})]}),"\n",(0,r.jsxs)(e.p,{children:['POSIX "Collating \u5e8f\u5217" \u65b9\u62ec\u53f7\u8868\u793a\n: ',(0,r.jsx)(e.code,{children:"[[.span.-11.]]"})]}),"\n",(0,r.jsxs)(e.p,{children:['POSIX "\u5b57\u7b26\u7b49\u4ef7\u7c7b" \u65b9\u62ec\u53f7\u8868\u793a\n: ',(0,r.jsx)(e.code,{children:"[[=n=]]"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u951a\u70b9\u53ca\u5176\u4ed6-\u96f6\u957f\u5ea6\u65ad\u8a00",children:'\u951a\u70b9\u53ca\u5176\u4ed6 "\u96f6\u957f\u5ea6\u65ad\u8a00"'}),"\n",(0,r.jsxs)(e.p,{children:["\u884c/\u5b57\u7b26\u4e32\u8d77\u70b9\n: ",(0,r.jsx)(e.code,{children:"^, \\A"})]}),"\n",(0,r.jsx)(e.p,{children:"\u884c/\u5b57\u7b26\u4e32\u7ec8\u70b9\n: '$. \\Z, \\z'"}),"\n",(0,r.jsxs)(e.p,{children:["\u672c\u6b21\u5339\u914d\u7684\u5f00\u59cb\u4f4d\u7f6e/\u4e0a\u6b21\u5339\u914d\u7684\u7ed3\u675f\u4f4d\u7f6e\n: ",(0,r.jsx)(e.code,{children:"\\G"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5355\u8bcd\u5206\u754c\u7b26\n: ",(0,r.jsx)(e.code,{children:"\\b,\\B,\\<,\\>"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u987a\u5e8f\u73af\u89c6\n: ",(0,r.jsx)(e.code,{children:"(?=...), (?!...)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u9006\u5e8f\u73af\u89c6\n: ",(0,r.jsx)(e.code,{children:"(?<=...),(?<!...)"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd",children:"\u6ce8\u91ca\u548c\u6a21\u5f0f\u4fee\u9970\u8bcd"}),"\n",(0,r.jsxs)(e.p,{children:["\u6a21\u5f0f\u4fee\u9970\u8bcd\n: ",(0,r.jsx)(e.code,{children:"(?modifier),(-?modifier)"}),"\n: eg:",(0,r.jsx)(e.code,{children:"(?i)...(?-i)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u6a21\u5f0f\u4f5c\u7528\u8303\u56f4\n: ",(0,r.jsx)(e.code,{children:"(?modifier:...)"}),"\n: eg:",(0,r.jsx)(e.code,{children:"(?i:....)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u6ce8\u91ca\n: ",(0,r.jsx)(e.code,{children:"(?#...),#..."})]}),"\n",(0,r.jsxs)(e.p,{children:["\u6587\u672c\u8303\u56f4\n: ",(0,r.jsx)(e.code,{children:"\\Q,\\E"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5206\u7ec4\u6355\u83b7\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236",children:"\u5206\u7ec4,\u6355\u83b7,\u6761\u4ef6\u5224\u65ad\u548c\u63a7\u5236"}),"\n",(0,r.jsxs)(e.p,{children:["\u6355\u83b7/\u5206\u7ec4\n: ",(0,r.jsx)(e.code,{children:"(...),\\1,\\2"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u4ec5\u7528\u4e8e\u5206\u7ec4\n: ",(0,r.jsx)(e.code,{children:"(?:...)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u547d\u540d\u6355\u83b7\n: ",(0,r.jsx)(e.code,{children:"(?<name>...)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u56fa\u5316\u5206\u7ec4\n: ",(0,r.jsx)(e.code,{children:"(?>...)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u591a\u9009\n: ",(0,r.jsx)(e.code,{children:"...|...|..."})]}),"\n",(0,r.jsxs)(e.p,{children:["\u6761\u4ef6\u5224\u65ad\n: ",(0,r.jsx)(e.code,{children:"(?if then|else)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5339\u914d\u4f18\u5148\u91cf\u8bcd\n: ",(0,r.jsx)(e.code,{children:"*,+,?,{m,n}"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5ffd\u7565\u4f18\u5148\u91cf\u8bcd\n: ",(0,r.jsx)(e.code,{children:"*?,+?,??,{m,n}?"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5360\u6709\u4f18\u5148\u91cf\u8bcd\n: ",(0,r.jsx)(e.code,{children:"*?,++,?+,{m,n}+"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u547d\u540d\u5b57\u7b26\u7ec4",children:"\u547d\u540d\u5b57\u7b26\u7ec4"}),"\n",(0,r.jsxs)(e.p,{children:["\u5173\u4e8e\u8fd9\u4e9b\u5b57\u7b26\u7ec4\u7684\u547d\u540d,\u53ef\u4ee5\u53c2\u8003",(0,r.jsx)(e.a,{href:"http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/ctype.h.html",children:"susv-ctype"}),".\u9700\u8981\u6ce8\u610f\u7684\u662f,\u5728 unicode \u91cc,\u8fd9\u4e9b\u5b57\u7b26\u7ec4\u7684\u5b9a\u4e49\u8981\u6839\u636e unicode \u7684\u5b9a\u4e49\u6765\u5224\u65ad.\u4f1a\u5305\u542b\u989d\u5916\u7684\u540c\u4e49\u7684\u5b57\u7b26."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"right"},children:"\u7ec4"}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:alnum:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:alpha:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u5b57\u6bcd"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:blank:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u7a7a\u767d"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:cntrl:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u63a7\u5236\u7b26"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:digit:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:graph:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u53ef\u663e\u793a"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:lower:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u5c0f\u5199"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:upper:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u5927\u5199"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"[:space:]"}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"\u5305\u62ec [:blank:], \u6362\u884c, \u56de\u8f66\u53ca\u5176\u4ed6"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b",children:"\u6d4b\u8bd5\u5f15\u64ce\u7c7b\u578b"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"nfa|nfa.not"})," \u5339\u914d ",(0,r.jsx)(e.code,{children:"nfa.not"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5339\u914d\u7ed3\u679c"}),(0,r.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"nfa"}),(0,r.jsx)(e.td,{children:"\u4f20\u7edf NFA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"nfa.not"}),(0,r.jsx)(e.td,{children:"POSIX / DFA"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"DFA \u4e0d\u652f\u6301\u6355\u83b7\u578b\u62ec\u53f7\u548c\u56de\u6eaf"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"x(.+)+x"})," \u5339\u914d ",(0,r.jsx)(e.code,{children:"=xx============================================================"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5339\u914d\u7ed3\u679c"}),(0,r.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u65f6\u95f4\u957f"}),(0,r.jsx)(e.td,{children:"NFA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u65f6\u95f4\u77ed"}),(0,r.jsx)(e.td,{children:"DFA, \u4f46\u4e5f\u6709\u53ef\u80fd\u662f\u6df7\u5408\u7684\u6216\u4f18\u5316\u7684"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5f15\u64ce"}),(0,r.jsx)(e.th,{children:"\u5de5\u5177"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DFA"}),(0,r.jsx)(e.td,{children:"awk, egrep, flex, lex, MySQL, Procmail"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Tranditional NFA"}),(0,r.jsx)(e.td,{children:"GNU Emacs, Java, grep, less, more, .NET, PCRE, Perl, PHP, Python, Vi, Ruby, sed"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"POSIX NFA"}),(0,r.jsx)(e.td,{children:"mawk, Mortricekern System;s utiles, GNU Emacs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DFA/NFA"}),(0,r.jsx)(e.td,{children:"GNU awk, GNU grep, Tcl"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5339\u914d\u57fa\u7840",children:"\u5339\u914d\u57fa\u7840"}),"\n",(0,r.jsx)(e.p,{children:"\u89c4\u5219 1\n: \u4f18\u5148\u9009\u62e9\u6700\u5de6\u7aef\u7684\u5339\u914d\u7ed3\u679c"}),"\n",(0,r.jsx)(e.p,{children:"\u89c4\u5219 2\n: \u6807\u51c6\u91cf\u8bcd\u662f\u5339\u914d\u4f18\u5148\u7684"}),"\n",(0,r.jsx)(e.p,{children:"NFA\n: \u8868\u8fbe\u5f0f\u4e3b\u5bfc"}),"\n",(0,r.jsxs)(e.p,{children:["DFA\n: \u6587\u672c\u4e3b\u5bfc,\u4e0d\u5173\u5fc3\u8868\u8fbe\u5f0f\u7684\u5f62\u5f0f\n: \u5373 ",(0,r.jsx)(e.code,{children:"x*=x?x?...=(x(x(x...)?)?)?"})]}),"\n",(0,r.jsx)(e.p,{children:"\u5339\u914d\u4f18\u5148\u91cf\u8bcd\u548c\u5ffd\u7565\u4f18\u5148\u91cf\u8bcd\u63a7\u5236,\u5bf9\u56de\u6eaf\u72b6\u6001\u9009\u62e9,\u662f\u8df3\u8fc7\u8fd8\u662f\u8fdb\u884c."}),"\n",(0,r.jsxs)(e.p,{children:["\u73af\u89c6\u6a21\u62df\u56fa\u5316\u5206\u7ec4\n: ",(0,r.jsx)(e.code,{children:"(?>...) => (?=(...))\\1"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u591a\u9009\u7ed3\u6784\u5373\u975e\u5339\u914d\u4f18\u5148,\u4e5f\u975e\u5ffd\u7565\u4f18\u5148,\u800c\u662f\u987a\u5e8f\u4f18\u5148\n: eg: ",(0,r.jsx)(e.code,{children:'(to|tow) =~ "tow" = "to"'})]})]})}function j(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},3354:(n,e,s)=>{var r=s(50959),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var r,d={},h=null,x=null;for(r in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)l.call(e,r)&&!c.hasOwnProperty(r)&&(d[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===d[r]&&(d[r]=e[r]);return{$$typeof:t,type:n,key:h,ref:x,props:d,_owner:i.current}}e.Fragment=d,e.jsx=h,e.jsxs=h},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>l});var r=s(50959);const t={},d=r.createContext(t);function l(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);