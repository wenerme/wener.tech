"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10594],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98231:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>i(e,s(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const k={title:"Redis Stack"},f="Redis Stack",h={unversionedId:"db/kv/redis/redis-stack",id:"db/kv/redis/redis-stack",title:"Redis Stack",description:"- RedisInsight",source:"@site/../notes/db/kv/redis/redis-stack.md",sourceDirName:"db/kv/redis",slug:"/db/kv/redis/stack",permalink:"/notes/db/kv/redis/stack",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/redis/redis-stack.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1683689500,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"Redis Stack"},sidebar:"docs",previous:{title:"Redis Module",permalink:"/notes/db/kv/redis/module"},next:{title:"Redis Version",permalink:"/notes/db/kv/redis/version"}},b={},v=[],N={toc:v},R="wrapper";function y(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(R,d(u(u({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"redis-stack"}),"Redis Stack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/RedisInsight/RedisInsight"}),"RedisInsight"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SSPLv1"),(0,n.kt)("li",{parentName:"ul"},"Electron, Monaco Editor, NodeJS"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/RedisJSON/RedisJSON"}),"RedisJSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/RedisGraph/RedisGraph"}),"RedisGraph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/RedisTimeSeries/RedisTimeSeries"}),"RedisTimeSeries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/RediSearch/RediSearch"}),"RedisSearch"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u5206\u8bcd\u4f7f\u7528 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/lionsoul2014/friso"}),"lionsoul2014/friso")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/RedisBloom/RedisBloom"}),"RedisBloom")," - PDS - probabilistic data structures",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bloom filter"),(0,n.kt)("li",{parentName:"ul"},"Cuckoo filter"),(0,n.kt)("li",{parentName:"ul"},"Count-Min Sketch"),(0,n.kt)("li",{parentName:"ul"},"Top-K"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://redis.io/docs/stack/license/"}),"https://redis.io/docs/stack/license/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RSALv2, SSPLv1")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# https://hub.docker.com/r/redis/redis-stack\n# 8001 RedisInsight\n# http://localhost:8001\n# /redis-stack.conf\ndocker run --rm -it \\\n  -v $PWD/data:/data \\\n  -v $PWD/redis-stack.conf:/redis-stack.conf \\\n  -p 6379:6379 -p 8001:8001 \\\n  --name redis-stack redis/redis-stack:latest\n\n# redis/redis-stack-server \u65e0 RedisInsight\ndocker run --rm -it \\\n  -p 6379:6379 \\\n  --name redis-stack redis/redis-stack-server:latest\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"REDIS_ARGS"),(0,n.kt)("li",{parentName:"ul"},"REDISEARCH_ARGS"),(0,n.kt)("li",{parentName:"ul"},"REDISJSON_ARGS"),(0,n.kt)("li",{parentName:"ul"},"REDISGRAPH_ARGS"),(0,n.kt)("li",{parentName:"ul"},"REDISTIMESERIES_ARGS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RETENTION_POLICY"))),(0,n.kt)("li",{parentName:"ul"},"REDISBLOOM_ARGS")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# http://localhost:8001\n# http://localhost:8001/healthcheck/\n# chown -R 1001 redisinsight\ndocker run --rm -it -v $PWD/redisinsight/db:/db -p 8001:8001 redislabs/redisinsight:latest\n")))}y.isMDXComponent=!0}}]);