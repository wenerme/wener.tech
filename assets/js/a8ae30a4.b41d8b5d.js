/*! For license information please see a8ae30a4.b41d8b5d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82820],{87487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(11527),r=n(47214);const i={title:"umami"},a="umami",o={id:"service/analytics/umami",title:"umami",description:"- umami-software/umami",source:"@site/../notes/service/analytics/umami.md",sourceDirName:"service/analytics",slug:"/service/analytics/umami",permalink:"/notes/service/analytics/umami",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/analytics/umami.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1705499993,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"umami"},sidebar:"docs",previous:{title:"Matomo",permalink:"/notes/service/analytics/matomo/"},next:{title:"UTM",permalink:"/notes/service/analytics/utm"}},m={},c=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"umami",children:"umami"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/umami-software/umami",children:"umami-software/umami"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"MIT, Node + PostgreSQL/MySQL/Clickhouse"}),"\n",(0,s.jsx)(t.li,{children:"\u7b26\u5408 GDPR"}),"\n",(0,s.jsxs)(t.li,{children:["\u6570\u636e\u7ed3\u6784 ",(0,s.jsx)(t.a,{href:"https://github.com/umami-software/umami/blob/master/db/postgresql/schema.prisma",children:"https://github.com/umami-software/umami/blob/master/db/postgresql/schema.prisma"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# admin:admin\n# http://127.0.0.1:3000\ndocker run --rm -it \\\n  -e DATABASE_URL= \\\n  -e DATABASE_TYPE=postgresql \\\n  -e APP_SECRET=$UMANI_APP_SECRET \\\n  -e DISABLE_TELEMETRY=1 \\\n  -e IGNORE_IP=127.0.0.1 \\\n  -p 3000:3000 \\\n  --name umami ghcr.io/umami-software/umami:postgresql-latest\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://umami.is/docs/environment-variables",children:"https://umami.is/docs/environment-variables"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://umami.is/docs/api",children:"https://umami.is/docs/api"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3354:(e,t,n)=>{var s=n(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,l=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,s)&&!m.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(50959);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);