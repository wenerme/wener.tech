"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81958],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18475:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return c},default:function(){return O},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={title:"Redis Version",tags:["Version"]},c="Redis Version",k={unversionedId:"db/kv/redis-version",id:"db/kv/redis-version",title:"Redis Version",description:"| ver     | date       |",source:"@site/../notes/db/kv/redis-version.md",sourceDirName:"db/kv",slug:"/db/kv/redis-version",permalink:"/notes/db/kv/redis-version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/redis-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656950348,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"Redis Version",tags:["Version"]},sidebar:"docs",previous:{title:"Redis FAQ",permalink:"/notes/db/kv/redis-faq"},next:{title:"Redis",permalink:"/notes/db/kv/redis"}},N={},f=[{value:"Redis 7",id:"redis-7",level:2},{value:"Redis 6",id:"redis-6",level:2},{value:"Redis 5",id:"redis-5",level:2},{value:"Redis 4",id:"redis-4",level:2},{value:"Redis 3.2.0",id:"redis-320",level:2}],b={toc:f};function O(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),p),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"redis-version"}),"Redis Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"ver"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Redis 7"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"2022-04-27")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Redis 6"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"2020-04-30")))),(0,n.kt)("h2",d({},{id:"redis-7"}),"Redis 7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redis Functions"),(0,n.kt)("li",{parentName:"ul"},"ACLv2 - selector, key \u8bfb\u5199\u9650\u5b9a, \u9650\u5b9a\u5b50\u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"command introspection - \u65b0\u589e COMMAND getkeysandflags|list|docs"),(0,n.kt)("li",{parentName:"ul"},"Cluster Sharded Pub/Sub"),(0,n.kt)("li",{parentName:"ul"},"50 \u4e2a\u65b0\u547d\u4ee4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZMPOP, BZMPOP, LMPOP, BLMPOP, SINTERCARD, ZINTERCARD"),(0,n.kt)("li",{parentName:"ul"},"shared pub/sub - SPUBLISH, SSUBSCRIBE, SUNSUBSCRIBE, PUBSUB SHARDCHANNELS/SHARDNUMSUB"),(0,n.kt)("li",{parentName:"ul"},"EXPIRETIME, PEXPIRETIME"),(0,n.kt)("li",{parentName:"ul"},"EXPIRE NX/XX/GT/LT"),(0,n.kt)("li",{parentName:"ul"},"EVAL_RO, EVALSHA_RO"),(0,n.kt)("li",{parentName:"ul"},"SORT_RO"),(0,n.kt)("li",{parentName:"ul"},"SHUTDOWN NOW|FORCE|ABORT"),(0,n.kt)("li",{parentName:"ul"},"FUNCTION, FCALL, FCALL_RO"),(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"COMMAND DOCS|LIST|INFO"),(0,n.kt)("li",{parentName:"ul"},"LATENCY HISTOGRAM"),(0,n.kt)("li",{parentName:"ul"},"CLUSTER LINKS|DELSLOTSRANGE|ADDSLOTSRANGE"),(0,n.kt)("li",{parentName:"ul"},"CLIENT NO-EVICT"),(0,n.kt)("li",{parentName:"ul"},"ACL DRYRUN")))))),(0,n.kt)("h2",d({},{id:"redis-6"}),"Redis 6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SSL"),(0,n.kt)("li",{parentName:"ul"},"ACLs"),(0,n.kt)("li",{parentName:"ul"},"RESP3"),(0,n.kt)("li",{parentName:"ul"},"Client side caching"),(0,n.kt)("li",{parentName:"ul"},"Threaded I/O - \u90e8\u5206\u591a\u7ebf\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"Diskless replication on replicas"),(0,n.kt)("li",{parentName:"ul"},"Cluster support in Redis-benchmark"),(0,n.kt)("li",{parentName:"ul"},"improved redis-cli cluster support")),(0,n.kt)("h2",d({},{id:"redis-5"}),"Redis 5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e stream \u7c7b\u578b")),(0,n.kt)("h2",d({},{id:"redis-4"}),"Redis 4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53d8\u66f4",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u6a21\u5757"),(0,n.kt)("li",{parentName:"ol"},"\u65b0\u7684\u540c\u6b65\u65b9\u5f0f")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A -> B -> C -> D")),(0,n.kt)("ol",d({parentName:"li"},{start:3}),(0,n.kt)("li",{parentName:"ol"},"\u5931\u6548\u673a\u5236")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LFU")),(0,n.kt)("ol",d({parentName:"li"},{start:4}),(0,n.kt)("li",{parentName:"ol"},"\u975e\u963b\u585e DEL \u548c FLUSHALL/FLUSHDB."),(0,n.kt)("li",{parentName:"ol"},"RDB-AOF \u6df7\u5408\u6301\u4e45\u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ol"},"\u65b0\u7684 MEMORY \u8bed\u53e5"),(0,n.kt)("li",{parentName:"ol"},"Redis Cluster \u73b0\u5728\u517c\u5bb9 NAT/Docker"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"http://www.antirez.com/news/110"}),"The first release candidate of Redis 4.0 is out")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://raw.githubusercontent.com/antirez/redis/4.0/00-RELEASENOTES"}),"RELEASENOTES"))))),(0,n.kt)("h2",d({},{id:"redis-320"}),"Redis 3.2.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"http://redis.io/commands/#geo"}),"GEO")," API"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"http://redis.io/commands/bitfield"}),"BITFIELD")," command"),(0,n.kt)("li",{parentName:"ul"},"script effects replication\n\u96c6\u7fa4\u4e0b\u53ea\u540c\u6b65\u88ab\u811a\u672c\u4fee\u6539\u7684\u5185\u5bb9,\u800c\u4e0d\u662f\u5206\u53d1\u811a\u672c\u5230\u6240\u6709\u8282\u70b9\u6267\u884c"),(0,n.kt)("li",{parentName:"ul"},"Lua scripts debugger\nVIDEO: ",(0,n.kt)("a",d({parentName:"li"},{href:"https://www.youtube.com/watch?v=IMvRfStaoyM"}),"New Redis Lua scripts debugger: a short intro")),(0,n.kt)("li",{parentName:"ul"},"slaves and masters are in agreement about what keys are expired during read operations."),(0,n.kt)("li",{parentName:"ul"},"SPOP now accepts an optional count argument"),(0,n.kt)("li",{parentName:"ul"},"RDB AUX fields"),(0,n.kt)("li",{parentName:"ul"},"Sentinel can now scale monitoring many masters"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"http://antirez.com/news/104"}),"Redis 3.2.0 is out!"))))))}O.isMDXComponent=!0}}]);