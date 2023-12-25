/*! For license information please see c96c3bbf.80633e63.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20572],{2162:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(11527),r=s(47214);const o={title:"PostgreSQL Inside"},l="Inside",i={id:"db/relational/postgresql/postgresql-inside",title:"PostgreSQL Inside",description:"- https://www.postgresql.org/docs/current/catalog-pg-class.html",source:"@site/../notes/db/relational/postgresql/postgresql-inside.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/inside",permalink:"/notes/db/relational/postgresql/inside",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-inside.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1683689500,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"PostgreSQL Inside"},sidebar:"docs",previous:{title:"PostgreSQL Index",permalink:"/notes/db/relational/postgresql/index"},next:{title:"PostgreSQL Introspection",permalink:"/notes/db/relational/postgresql/introspection"}},a={},c=[];function d(e){const t={a:"a",h1:"h1",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"inside",children:"Inside"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/catalog-pg-class.html",children:"https://www.postgresql.org/docs/current/catalog-pg-class.html"})}),"\n",(0,n.jsx)(t.li,{children:"JSON 1GB \u9650\u5236\uff0c\u538b\u7f29\u524d"}),"\n",(0,n.jsxs)(t.li,{children:["pg_table_size, pg_relation_size, pg_total_relation_size\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"total_relation_size = table_size + index_size"}),"\n",(0,n.jsx)(t.li,{children:"table_size = relation_size + toast_size"}),"\n",(0,n.jsx)(t.li,{children:"external_size = toast_size + index_size"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/storage-file-layout.html",children:"https://www.postgresql.org/docs/current/storage-file-layout.html"})}),"\n",(0,n.jsxs)(t.li,{children:["\u53c2\u8003\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/postgrespro/zson",children:"https://github.com/postgrespro/zson"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u538b\u7f29 JSONB"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/functions-admin.html",children:"https://www.postgresql.org/docs/current/functions-admin.html"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3354:(e,t,s)=>{var n=s(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,o={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},11527:(e,t,s)=>{e.exports=s(3354)},47214:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>l});var n=s(50959);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);