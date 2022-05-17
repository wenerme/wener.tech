"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31389],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7029:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],o={id:"redis",title:"Redis"},l=void 0,d={unversionedId:"db/kv/redis",id:"db/kv/redis",title:"Redis",description:"- redis.conf",source:"@site/notes/db/kv/redis.md",sourceDirName:"db/kv",slug:"/db/kv/redis",permalink:"/notes/db/kv/redis",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/kv/redis.md",tags:[],version:"current",frontMatter:{id:"redis",title:"Redis"},sidebar:"docs",previous:{title:"Redis Version",permalink:"/notes/db/kv/redis-version"},next:{title:"RocksDB",permalink:"/notes/db/kv/rocksdb"}},p={},u=[{value:"Stream",id:"stream",level:2},{value:"Module",id:"module",level:2},{value:"ACL",id:"acl",level:2},{value:"FAQ",id:"faq",level:2},{value:"MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled.",id:"misconf-redis-is-configured-to-save-rdb-snapshots-but-is-currently-not-able-to-persist-on-disk-commands-that-may-modify-the-data-set-are-disabled",level:3},{value:"RESP3",id:"resp3",level:3}],c={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://download.redis.io/redis-stable/redis.conf"},"redis.conf")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redislabs.com/blog/5-key-takeaways-for-developing-with-redis"},"5 Key Takeaways for Developing with Redis"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Keep Track of Your Keys"),(0,i.kt)("li",{parentName:"ol"},"Keep Track of the Length of Your Key Names"),(0,i.kt)("li",{parentName:"ol"},"Use the Right Data Structures"),(0,i.kt)("li",{parentName:"ol"},"Use SCAN, Never Use KEYS"),(0,i.kt)("li",{parentName:"ol"},"Use Server-Side Lua Scripts"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://scaleyourcode.com/blog/article/15"},"Redis configuration for production"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=X01gn5a2WQ0"},"YouTube")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RedisLabsModules/redis-graph/"},"RedisGraph"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A graph database as a Redis module")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\nwget http://download.redis.io/redis-stable/redis.conf\nredis-server redis.conf\n# macOS \u5b89\u88c5\nbrew install redis\n# \u901a\u8fc7 docker \u542f\u52a8\n# \u6570\u636e\u5b58\u50a8\u4e8e ~/data/redis\ndocker run --rm -it -v ~/data/redis:/data -p 6379:6379 --name my-redis redis redis-server --appendonly ye\n\nredis-server --bind=0.0.0.0\n")),(0,i.kt)("h2",{id:"stream"},"Stream"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"redis ",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/antirez/4e7049ce4fce4aa61bf0cfbc3672e64d"},"api")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/antirez/68e67f3251d10f026861be2d0fe0d2f4"},"Redis Streams: consumer groups v2 specification document")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://antirez.com/news/116"},"An update on Redis Streams development"))))),(0,i.kt)("h2",{id:"module"},"Module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redislabs.com/blog/writing-redis-modules"},"\u5199 Redis \u6a21\u5757\u7684\u6559\u7a0b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://redismodules.com/"},"Redis \u6a21\u5757\u4ed3\u5e93")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://antirez.com/news/106"},"Antirez \u5173\u4e8e Redis \u6a21\u5757\u7684\u535a\u5ba2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wenerme/go-rm"},"wenerme/go-rm"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Golang \u5199 Redis \u6a21\u5757")))),(0,i.kt)("h2",{id:"acl"},"ACL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/topics/acl"},"ACL"))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"misconf-redis-is-configured-to-save-rdb-snapshots-but-is-currently-not-able-to-persist-on-disk-commands-that-may-modify-the-data-set-are-disabled"},"MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/kapkaev/4619127"},"https://gist.github.com/kapkaev/4619127"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"redis-cli\n# config set stop-writes-on-bgsave-error no\n")),(0,i.kt)("h3",{id:"resp3"},"RESP3"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c"},"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c")),(0,i.kt)("p",null,"\u76ee\u524d\u7684 RESP \u662f QA \u6a21\u5f0f\uff0c\u6027\u80fd\u548c\u5904\u7406\u80fd\u529b\u4e0a\u6709\u9650"))}m.isMDXComponent=!0}}]);