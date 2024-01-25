/*! For license information please see 921f396b.1aa0e98b.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29094],{65768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(11527),r=n(47214);const i={title:"Directus"},c="Directus",l={id:"service/cms/directus",title:"Directus",description:"- directus/directus \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/cms/directus.md",sourceDirName:"service/cms",slug:"/service/cms/directus",permalink:"/notes/service/cms/directus",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/cms/directus.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706172619,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"Directus"},sidebar:"docs",previous:{title:"CMS Awesome",permalink:"/notes/service/cms/awesome"},next:{title:"Docusaurus",permalink:"/notes/service/cms/docusaurus"}},o={},a=[{value:"client",id:"client",level:2},{value:"config",id:"config",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"directus",children:"Directus"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/directus/directus",children:"directus/directus"})," \u662f\u4ec0\u4e48\uff1f\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"GPL-3.0, NodeJS+Typescript+Vue"}),"\n",(0,s.jsx)(t.li,{children:"Headless CMS"}),"\n",(0,s.jsx)(t.li,{children:"DB -> GraphQL+REST"}),"\n",(0,s.jsx)(t.li,{children:"\u6570\u636e\u5e93\u652f\u6301 PostgreSQL, MySQL, SQLite, OracleDB, CockroachDB, MariaDB, MS-SQL"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.directus.io/concepts/activity/",children:"concepts"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# http://127.0.0.1:8055\ndocker run --rm -it \\\n  -p 8055:8055 \\\n  -e KEY=replace-with-random-value \\\n  -e SECRET=replace-with-random-value \\\n  -e ADMIN_EMAIL=admin@example.com \\\n  -e ADMIN_PASSWORD=ADMIN_PASSWORD \\\n  -e DB_CLIENT=sqlite3 \\\n  -e DB_FILENAME=/directus/database/data.db \\\n  -e WEBSOCKETS_ENABLED=true \\\n  -v $PWD/data/database:/directus/database \\\n  -v $PWD/data/uploads:/directus/uploads \\\n  -v $PWD/data/extensions:/directus/extensions \\\n  --name directus directus/directus\n\nnpm init directus-project\n"})}),"\n",(0,s.jsx)(t.h2,{id:"client",children:"client"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install @directus/sdk\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createDirectus, rest, graphql } from '@directus/sdk';\n\ninterface Article {\n\tid: number;\n\ttitle: string;\n\tcontent: string;\n}\n\ninterface Schema {\n\tarticles: Article[];\n}\n\n// Client with REST support\nconst client = createDirectus<Schema>('http://directus.example.com').with(rest());\n\n// Client with GraphQL support\nconst client = createDirectus<Schema>('http://directus.example.com').with(graphql());\n"})}),"\n",(0,s.jsx)(t.h2,{id:"config",children:"config"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.directus.io/self-hosted/config-options.html",children:"https://docs.directus.io/self-hosted/config-options.html"})}),"\n",(0,s.jsx)(t.li,{children:".env"}),"\n",(0,s.jsx)(t.li,{children:"config.json - KV \u540c env"}),"\n",(0,s.jsx)(t.li,{children:"config.yaml"}),"\n",(0,s.jsxs)(t.li,{children:["config.js - ",(0,s.jsx)(t.code,{children:"export default {}"}),", ",(0,s.jsx)(t.code,{children:"export default function(env) {return {}}"}),",\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"env \u4e3a process.env"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'CONFIG_PATH="/path/to/config.js" npx directus start\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3354:(e,t,n)=>{var s=n(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,i={},a=null,d=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,s)&&!o.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:a,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>c});var s=n(50959);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);