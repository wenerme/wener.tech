"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93133],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54458:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={title:"Redis FAQ",tags:["FAQ"]},d="Redis FAQ",f={unversionedId:"db/kv/redis-faq",id:"db/kv/redis-faq",title:"Redis FAQ",description:"Replica vs Slave",source:"@site/../notes/db/kv/redis-faq.md",sourceDirName:"db/kv",slug:"/db/kv/redis-faq",permalink:"/notes/db/kv/redis-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/redis-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Redis FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"LMDB",permalink:"/notes/db/kv/lmdb"},next:{title:"Redis Version",permalink:"/notes/db/kv/redis-version"}},b={},v=[{value:"Replica vs Slave",id:"replica-vs-slave",level:2},{value:"List vs PubSub vs Stream",id:"list-vs-pubsub-vs-stream",level:2},{value:"MISCONF Redis is configured to save RDB snapshots",id:"misconf-redis-is-configured-to-save-rdb-snapshots",level:2},{value:"RESP3",id:"resp3",level:2},{value:"ERR max number of clients reached",id:"err-max-number-of-clients-reached",level:2}],k={toc:v};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),p),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"redis-faq"}),"Redis FAQ"),(0,n.kt)("h2",c({},{id:"replica-vs-slave"}),"Replica vs Slave"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542b\u4e49\u5b8c\u5168\u76f8\u540c"),(0,n.kt)("li",{parentName:"ul"},"slaveof = replicaof"),(0,n.kt)("li",{parentName:"ul"},"\u662f\u56e0\u4e3a\u8c03\u6574\u4e86\u540d\u8bcd ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/redis/redis/issues/5335"}),"redis#5335"))),(0,n.kt)("h2",c({},{id:"list-vs-pubsub-vs-stream"}),"List vs PubSub vs Stream"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"List",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u91cd\u590d\u6d88\u8d39 - POP \u540e\u5c31\u4e0d\u5b58\u5728\u4e86"))),(0,n.kt)("li",{parentName:"ul"},"Pub/Sub",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5b58\u50a8\u6570\u636e - \u7528\u4e8e\u4f20\u9012\u4fe1\u606f - \u5b9e\u73b0\u5f02\u6b65/\u540c\u6b65\u901a\u8baf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"at-most-once, fire & forget, fan-out"))),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709 Sub \u65f6 Pub \u662f\u65e0\u610f\u4e49\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u8ba2\u9605\u7cfb\u7edf\u4e8b\u4ef6 - keyspace, keyevent - \u9700\u8981\u8c03\u6574\u914d\u7f6e ",(0,n.kt)("a",c({parentName:"li"},{href:"/notes/db/kv/redis#%E9%94%AE%E5%8F%98%E5%8C%96%E9%80%9A%E7%9F%A5"}),"\u952e\u53d8\u5316\u901a\u77e5")),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 pattern - \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"system.events.*")))),(0,n.kt)("li",{parentName:"ul"},"Stream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e - \u6709\u6d88\u8d39\u8005\u3001\u6d88\u8d39\u7ec4\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u80fd\u91cd\u590d\u6d88\u8d39 - at-most-once \u6216 at-least-once"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u66f4\u591a\u6d88\u606f\u961f\u5217\u7684\u6982\u5ff5 - \u4f8b\u5982: \u6d88\u606f ID\u3001\u65f6\u95f4\u6233\u3001 ACK"),(0,n.kt)("li",{parentName:"ul"},"\u80fd\u5b9e\u73b0 List \u548c Pub/Sub \u7684\u6240\u6709\u8bed\u4e49"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u963b\u585e")))),(0,n.kt)("h2",c({},{id:"misconf-redis-is-configured-to-save-rdb-snapshots"}),"MISCONF Redis is configured to save RDB snapshots"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled.\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"redis-cli\n# config set stop-writes-on-bgsave-error no\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://gist.github.com/kapkaev/4619127"}),"https://gist.github.com/kapkaev/4619127"))),(0,n.kt)("h2",c({},{id:"resp3"}),"RESP3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7684 RESP \u662f QA \u6a21\u5f0f\uff0c\u6027\u80fd\u548c\u5904\u7406\u80fd\u529b\u4e0a\u6709\u9650"),(0,n.kt)("li",{parentName:"ul"},"\u53d1\u9001 HELLO \u5224\u65ad\u662f\u5426\u652f\u6301 RESP3")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c"}),"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c"))),(0,n.kt)("h2",c({},{id:"err-max-number-of-clients-reached"}),"ERR max number of clients reached"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"client \u9ed8\u8ba4 timeout \u4e3a 0\uff0c\u53ef\u5c1d\u8bd5\u6dfb\u52a0 timeout \u5728\u670d\u52a1\u7aef\u5173\u95ed\u94fe\u63a5"),(0,n.kt)("li",{parentName:"ul"},"maxclients \u9ed8\u8ba4 10,000")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u589e\u52a0\u4e86 maxclients \u4e5f\u8981\u589e\u52a0\u7cfb\u7edf\u9650\u5236\nulimit -Sn 100000\nsysctl -w fs.file-max=100000\n")))}y.isMDXComponent=!0}}]);