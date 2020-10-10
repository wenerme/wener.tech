(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{590:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),b=(a(0),a(618)),c={title:"BBVM - BeBasic Virtual Machine",id:"bbvm",date:new Date("2015-10-30T00:00:00.000Z"),tags:["\u9879\u76ee","Golang","Java","\u6e38\u620f","\u865a\u62df\u673a"],baseUrl:"https://raw.githubusercontent.com/wenerme/bbvm/master/"},i={permalink:"/blog/bbvm",source:"@site/../story/project/bbvm.md",description:"The first VM in my live.",date:"2015-10-30T00:00:00.000Z",tags:[{label:"\u9879\u76ee",permalink:"/blog/tags/\u9879\u76ee"},{label:"Golang",permalink:"/blog/tags/golang"},{label:"Java",permalink:"/blog/tags/java"},{label:"\u6e38\u620f",permalink:"/blog/tags/\u6e38\u620f"},{label:"\u865a\u62df\u673a",permalink:"/blog/tags/\u865a\u62df\u673a"}],title:"BBVM - BeBasic Virtual Machine",prevItem:{title:"Go Redis module",permalink:"/blog/go-rm"},nextItem:{title:"Guava \u7b80\u4ecb",permalink:"/blog/guava-intro"}},l=[{value:"Main feature",id:"main-feature",children:[]},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",children:[]},{value:"BBasic",id:"bbasic",children:[]}],m={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The first VM in my live."),Object(b.b)("h1",{id:"bbvm---bebasic-virtual-machine"},"BBVM - BeBasic Virtual Machine"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://travis-ci.org/wenerme/bbvm"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://travis-ci.org/wenerme/bbvm.svg",alt:"Build Status"}))),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://coveralls.io/github/wenerme/bbvm?branch=master"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://coveralls.io/repos/wenerme/bbvm/badge.svg?branch=master&service=github",alt:"Coverage Status"}))),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wenerme"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/bbvm-%F0%9F%92%97-orange.svg",alt:"Build with love"}))),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wenerme/bbvm/issues"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/issues/wenerme/bbvm.svg",alt:"GitHub issues"}))),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/wenerme/bbvm/master/LICENSE"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/license-Apache%202-blue.svg",alt:"GitHub license"}))),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/intent/tweet?text=Wow:&url=https://github.com/wenerme/bbvm/"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/twitter/url/https/github.com/wenerme/bbvm.svg?style=social",alt:"Twitter"})))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'; ____________________\n; \\______   \\______   \\___  _______\n;  |    |  _/|    |  _/\\  \\/ /     \\\n;  |    |   \\|    |   \\ \\   /  Y Y  \\\n;  |______  /|______  /  \\_/|__|_|  /\n;         \\/        \\/            \\/\n\nJMP CODE\nDATA STR CHAR "Hello, BBvm",0\nCODE:\n\nOUT 1, STR\nEXIT\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),">Hello, BBvm\n")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u4e2d\u6587"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"English"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#%E5%86%85%E5%AE%B9"}),"README"),"/",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/wenerme/bbvm/wiki/%E4%B8%BB%E9%A1%B5"}),"WIKI")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#contents"}),"README"),"/",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/wenerme/bbvm/wiki/Home"}),"WIKI"))))),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"doc/image/bbvm-monopoly-demo.png",alt:"\u5927\u5bcc\u7fc1"}))),Object(b.b)("h1",{id:"contents"},"Contents"),Object(b.b)("p",null,"BBvm is a simple easy virtual machine that run bbin compile from bbasm which is a simple assembly too."),Object(b.b)("h2",{id:"main-feature"},"Main feature"),Object(b.b)("p",null,"BBvm has a lot built-in system invoke with a default screen enabled device."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Graphic draw"),Object(b.b)("li",{parentName:"ul"},"Image load"),Object(b.b)("li",{parentName:"ul"},"File read/write"),Object(b.b)("li",{parentName:"ul"},"String op")),Object(b.b)("h1",{id:"\u5185\u5bb9"},"\u5185\u5bb9"),Object(b.b)("p",null,"BBvm \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u865a\u62df\u673a,\u5176\u6c47\u7f16\u7801\u4e3a BBasm."),Object(b.b)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),Object(b.b)("p",null,"BBvm \u5305\u542b\u4e86\u5927\u91cf\u7684\u5185\u5efa\u7cfb\u7edf\u8c03\u7528,\u5e76\u4e14\u8fd0\u884c\u4e8e\u4e00\u4e2a\u6709\u5c4f\u5e55\u7684\u8bbe\u5907\u4e0a."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u56fe\u5f62\u64cd\u4f5c"),Object(b.b)("li",{parentName:"ul"},"\u56fe\u50cf\u64cd\u4f5c"),Object(b.b)("li",{parentName:"ul"},"\u6587\u4ef6\u64cd\u4f5c"),Object(b.b)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u64cd\u4f5c")),Object(b.b)("h2",{id:"bbasic"},"BBasic"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.baike.com/wiki/BBASIC"}),"BBasic")," \u662f\u4e00\u79cd\u638c\u4e0a\u5b66\u4e60\u673a\u7684\u7f16\u7a0b\u5e73\u53f0.BBK BBASIC,\u7b80\u79f0BB,\u6700\u65e9\u7531\u901a\u5bb5\u866b\u4e8e2006\u5e74\u5f00\u53d1,\u662f\u7531VMBASIC\u7ed3\u5408QuickBASIC\u5f00\u53d1\u800c\u6210. \u8fd0\u884c\u4e8e\u65e9\u671f\u6b65\u6b65\u9ad8\u5b66\u4e60\u673a\u5e73\u53f0."),Object(b.b)("p",null,"\u8be5\u9879\u76ee\u4e3a\u539f\u6b65\u6b65\u9ad8 BBasic \u865a\u62df\u673a\u7684\u4e00\u4e2a\u4eff\u7167\u5b9e\u73b0.\u5e76\u5728\u539f\u6765\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u6269\u5c55."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u505a\u5230\u548c BBasic \u7684\u6c47\u7f16\u7801\u517c\u5bb9"),Object(b.b)("li",{parentName:"ul"},"\u505a\u5230\u548c BBasic \u7684\u4e8c\u8fdb\u5236\u517c\u5bb9"),Object(b.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u7f16\u8bd1 Vasm \u7684\u7f16\u8bd1\u5668"),Object(b.b)("li",{parentName:"ul"},"\u5b9e\u73b0 BB \u7684\u865a\u62df\u673a,\u5305\u62ec\u56fe\u5f62\u754c\u9762\u7b49\u6240\u6709\u529f\u80fd"),Object(b.b)("li",{parentName:"ul"},"\u5bf9 BBAsm \u8fdb\u884c\u6269\u5c55")),Object(b.b)("h1",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://trello.com/b/ZBl8mVYa/bbvm"}),"\u5f00\u53d1\u8fdb\u5ea6/Roadmap"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"BBAsm \u8bed\u6cd5\u53c2\u8003",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wenerme/bbvm/blob/master/doc/grammar/BBAsm.g4"}),"\u8fd9\u91cc"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"BB \u865a\u62df\u673a\u89c4\u8303\u53c2\u8003",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wenerme/bbvm/wiki/vm-spec"}),"\u8fd9\u91cc")))))}p.isMDXComponent=!0},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),p=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),o=p(a),u=r,O=o["".concat(c,".").concat(u)]||o[u]||s[u]||b;return a?n.a.createElement(O,i(i({ref:t},m),{},{components:a})):n.a.createElement(O,i({ref:t},m))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var m=2;m<b;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);