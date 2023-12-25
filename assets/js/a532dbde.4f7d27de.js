/*! For license information please see a532dbde.4f7d27de.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10594],{82918:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=n(11527),t=n(47214);const r={title:"Redis Stack"},d="Redis Stack",c={id:"db/kv/redis/redis-stack",title:"Redis Stack",description:"- RedisInsight",source:"@site/../notes/db/kv/redis/redis-stack.md",sourceDirName:"db/kv/redis",slug:"/db/kv/redis/stack",permalink:"/notes/db/kv/redis/stack",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/kv/redis/redis-stack.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1683689500,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"Redis Stack"},sidebar:"docs",previous:{title:"Redis Module",permalink:"/notes/db/kv/redis/module"},next:{title:"Redis Version",permalink:"/notes/db/kv/redis/version"}},l={},o=[];function a(e){const s={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"redis-stack",children:"Redis Stack"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/RedisInsight/RedisInsight",children:"RedisInsight"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"SSPLv1"}),"\n",(0,i.jsx)(s.li,{children:"Electron, Monaco Editor, NodeJS"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/RedisJSON/RedisJSON",children:"RedisJSON"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/RedisGraph/RedisGraph",children:"RedisGraph"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/RedisTimeSeries/RedisTimeSeries",children:"RedisTimeSeries"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/RediSearch/RediSearch",children:"RedisSearch"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\u4e2d\u6587\u5206\u8bcd\u4f7f\u7528 ",(0,i.jsx)(s.a,{href:"https://github.com/lionsoul2014/friso",children:"lionsoul2014/friso"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/RedisBloom/RedisBloom",children:"RedisBloom"})," - PDS - probabilistic data structures\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Bloom filter"}),"\n",(0,i.jsx)(s.li,{children:"Cuckoo filter"}),"\n",(0,i.jsx)(s.li,{children:"Count-Min Sketch"}),"\n",(0,i.jsx)(s.li,{children:"Top-K"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://redis.io/docs/stack/license/",children:"https://redis.io/docs/stack/license/"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"RSALv2, SSPLv1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# https://hub.docker.com/r/redis/redis-stack\n# 8001 RedisInsight\n# http://localhost:8001\n# /redis-stack.conf\ndocker run --rm -it \\\n  -v $PWD/data:/data \\\n  -v $PWD/redis-stack.conf:/redis-stack.conf \\\n  -p 6379:6379 -p 8001:8001 \\\n  --name redis-stack redis/redis-stack:latest\n\n# redis/redis-stack-server \u65e0 RedisInsight\ndocker run --rm -it \\\n  -p 6379:6379 \\\n  --name redis-stack redis/redis-stack-server:latest\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"REDIS_ARGS"}),"\n",(0,i.jsx)(s.li,{children:"REDISEARCH_ARGS"}),"\n",(0,i.jsx)(s.li,{children:"REDISJSON_ARGS"}),"\n",(0,i.jsx)(s.li,{children:"REDISGRAPH_ARGS"}),"\n",(0,i.jsxs)(s.li,{children:["REDISTIMESERIES_ARGS\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"RETENTION_POLICY"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"REDISBLOOM_ARGS"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# http://localhost:8001\n# http://localhost:8001/healthcheck/\n# chown -R 1001 redisinsight\ndocker run --rm -it -v $PWD/redisinsight/db:/db -p 8001:8001 redislabs/redisinsight:latest\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,s,n)=>{var i=n(50959),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,n){var i,r={},o=null,a=null;for(i in void 0!==n&&(o=""+n),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(a=s.ref),s)d.call(s,i)&&!l.hasOwnProperty(i)&&(r[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===r[i]&&(r[i]=s[i]);return{$$typeof:t,type:e,key:o,ref:a,props:r,_owner:c.current}}s.Fragment=r,s.jsx=o,s.jsxs=o},11527:(e,s,n)=>{e.exports=n(3354)},47214:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>d});var i=n(50959);const t={},r=i.createContext(t);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);