/*! For license information please see 29f6950f.776b2c9e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17428],{41318:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=r(11527),s=r(47214);const l={title:"Trigger"},i="Trigger",d={id:"db/relational/postgresql/postgresql-trigger",title:"Trigger",description:"- trigger \u51fd\u6570\u4e0d\u80fd\u5b9a\u4e49\u53c2\u6570\uff0c\u901a\u8fc7 TG_ARGV \u63a5\u6536\u53c2\u6570",source:"@site/../notes/db/relational/postgresql/postgresql-trigger.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/trigger",permalink:"/notes/db/relational/postgresql/trigger",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-trigger.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693122196,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{title:"Trigger"},sidebar:"docs",previous:{title:"PostgreSQL Tenant",permalink:"/notes/db/relational/postgresql/tenant"},next:{title:"PostgreSQL Upgrade",permalink:"/notes/db/relational/postgresql/upgrade"}},c={},o=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"trigger",children:"Trigger"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"trigger \u51fd\u6570\u4e0d\u80fd\u5b9a\u4e49\u53c2\u6570\uff0c\u901a\u8fc7 TG_ARGV \u63a5\u6536\u53c2\u6570"}),"\n"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"var"}),(0,t.jsx)(n.th,{children:"for"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NEW"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OLD"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_NAME"}),(0,t.jsx)(n.td,{children:"trigger name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_WHEN"}),(0,t.jsx)(n.td,{children:"BEFORE/AFTER/INSTEAD OF"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_LEVEL"}),(0,t.jsx)(n.td,{children:"ROW/STATEMENT"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_OP"}),(0,t.jsx)(n.td,{children:"INSERT/UPDATE/DELETE/TRUNCATE"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_RELID"}),(0,t.jsx)(n.td,{children:"oid of table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.del,{children:"TG_RELNAME"})}),(0,t.jsx)(n.td,{children:"name of table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_TABLE_NAME"}),(0,t.jsx)(n.td,{children:"name of table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_TABLE_SCHEMA"}),(0,t.jsx)(n.td,{children:"schema of table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_NARGS"}),(0,t.jsx)(n.td,{children:"number of arguments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_ARGV"}),(0,t.jsx)(n.td,{children:"arguments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_EVENT"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TG_TAG"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8fd4\u56de\u7c7b\u578b ",(0,t.jsx)(n.code,{children:"trigger"})," - \u6570\u636e\u53d8\u5316"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8fd4\u56de\u7c7b\u578b ",(0,t.jsx)(n.code,{children:"event_trigger"})," - \u6570\u636e\u5e93\u4e8b\u4ef6"]}),"\n",(0,t.jsxs)(n.li,{children:["\u81ea\u52a8\u521b\u5efa\u53d8\u91cf ",(0,t.jsx)(n.code,{children:"TG_<NAME>"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"NULL"})," \u6216 record/row"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BEFORE"})," row\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"NULL"})," \u5219\u4e0d\u4f1a\u89e6\u53d1\u5b9e\u9645\u64cd\u4f5c - INSERT/UPDATE/DELETE"]}),"\n",(0,t.jsx)(n.li,{children:"\u4fee\u6539 NEW \u8fd4\u56de\u4f1a\u4f7f\u7528\u65b0\u7684\u503c"}),"\n",(0,t.jsxs)(n.li,{children:["DELETE \u8fd4\u56de\u5185\u5bb9\u65e0\u610f\u4e49\uff0c\u4f46\u9700\u8981 \u975e NULL\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6b64\u65f6 NEW \u4e3a NULL\uff0c\u4e00\u822c\u8fd4\u56de OLD"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"INSTEAD OF"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u53ea\u80fd\u662f row \u7ea7\u522b\uff0c\u53ea\u652f\u6301 view"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"event_trigger"})," - DDL \u4e8b\u4ef6\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TG_EVENT, TG_TAG"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ALTER|CREATE|DROP|COMMENT|GRANT|REVOKE|IMPORT FOREIGN SCHEMA|REFRESH MATERIALIZED VIEW"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SECURITY LABEL"}),", ",(0,t.jsx)(n.code,{children:"SELECT INTO"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/plpgsql-trigger.html",children:"https://www.postgresql.org/docs/current/plpgsql-trigger.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/event-trigger-matrix.html",children:"https://www.postgresql.org/docs/current/event-trigger-matrix.html"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create or replace function insert_entity_sid() returns trigger as\n$$\nbegin\n    if NEW.sid is null then\n        NEW.sid := next_entity_sid(TG_ARGV[0], NEW.tid);\n    end if;\n    return new;\nend;\n$$ language plpgsql;\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3354:(e,n,r)=>{var t=r(50959),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,l={},o=null,h=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:s,type:e,key:o,ref:h,props:l,_owner:d.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var t=r(50959);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);