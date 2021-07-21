(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(d,b(b({ref:t},o),{},{components:r})):a.a.createElement(d,b({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},366:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(1151)),l={title:"Redis Version"},b={unversionedId:"db/kv/redis-version",id:"db/kv/redis-version",isDocsHomePage:!1,title:"Redis Version",description:"| ver | date       |",source:"@site/notes/db/kv/redis-version.md",slug:"/db/kv/redis-version",permalink:"/notes/db/kv/redis-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/kv/redis-version.md",version:"current",sidebar:"docs",previous:{title:"LMDB",permalink:"/notes/db/kv/lmdb"},next:{title:"Redis",permalink:"/notes/db/kv/redis"}},c=[{value:"6.0",id:"60",children:[]},{value:"5.0",id:"50",children:[]},{value:"4.0",id:"40",children:[]},{value:"3.2.0",id:"320",children:[]}],o={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"ver"),Object(i.b)("th",{parentName:"tr",align:null},"date"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"6.0"),Object(i.b)("td",{parentName:"tr",align:null},"2020-04-30")))),Object(i.b)("h2",{id:"60"},"6.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SSL"),Object(i.b)("li",{parentName:"ul"},"ACLs"),Object(i.b)("li",{parentName:"ul"},"RESP3"),Object(i.b)("li",{parentName:"ul"},"Client side caching"),Object(i.b)("li",{parentName:"ul"},"Threaded I/O"),Object(i.b)("li",{parentName:"ul"},"Diskless replication on replicas"),Object(i.b)("li",{parentName:"ul"},"Cluster support in Redis-benchmark"),Object(i.b)("li",{parentName:"ul"},"improved redis-cli cluster support")),Object(i.b)("h2",{id:"50"},"5.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e stream \u7c7b\u578b")),Object(i.b)("h2",{id:"40"},"4.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53d8\u66f4",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u6a21\u5757"),Object(i.b)("li",{parentName:"ol"},"\u65b0\u7684\u540c\u6b65\u65b9\u5f0f")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A -> B -> C -> D")),Object(i.b)("ol",{parentName:"li",start:3},Object(i.b)("li",{parentName:"ol"},"\u5931\u6548\u673a\u5236")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"LFU")),Object(i.b)("ol",{parentName:"li",start:4},Object(i.b)("li",{parentName:"ol"},"\u975e\u963b\u585e DEL \u548c FLUSHALL/FLUSHDB."),Object(i.b)("li",{parentName:"ol"},"RDB-AOF \u6df7\u5408\u6301\u4e45\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ol"},"\u65b0\u7684 MEMORY \u8bed\u53e5"),Object(i.b)("li",{parentName:"ol"},"Redis Cluster \u73b0\u5728\u517c\u5bb9 NAT/Docker"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.antirez.com/news/110"},"The first release candidate of Redis 4.0 is out")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/antirez/redis/4.0/00-RELEASENOTES"},"RELEASENOTES"))))),Object(i.b)("h2",{id:"320"},"3.2.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://redis.io/commands/#geo"},"GEO")," API"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://redis.io/commands/bitfield"},"BITFIELD")," command"),Object(i.b)("li",{parentName:"ul"},"script effects replication\n\u96c6\u7fa4\u4e0b\u53ea\u540c\u6b65\u88ab\u811a\u672c\u4fee\u6539\u7684\u5185\u5bb9,\u800c\u4e0d\u662f\u5206\u53d1\u811a\u672c\u5230\u6240\u6709\u8282\u70b9\u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"Lua scripts debugger\nVIDEO: ",Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=IMvRfStaoyM"},"New Redis Lua scripts debugger: a short intro")),Object(i.b)("li",{parentName:"ul"},"slaves and masters are in agreement about what keys are expired during read operations."),Object(i.b)("li",{parentName:"ul"},"SPOP now accepts an optional count argument"),Object(i.b)("li",{parentName:"ul"},"RDB AUX fields"),Object(i.b)("li",{parentName:"ul"},"Sentinel can now scale monitoring many masters"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://antirez.com/news/104"},"Redis 3.2.0 is out!"))))))}p.isMDXComponent=!0}}]);