/*! For license information please see ffc98b1e.1c880325.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46461],{84608:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=l(11527),r=l(47214);const i={title:"DDL"},t="PostgreSQL DDL",c={id:"db/relational/postgresql/postgresql-ddl",title:"DDL",description:"CREATE TABLE",source:"@site/../notes/db/relational/postgresql/postgresql-ddl.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/ddl",permalink:"/notes/db/relational/postgresql/ddl",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-ddl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"DDL"},sidebar:"docs",previous:{title:"Date",permalink:"/notes/db/relational/postgresql/date"},next:{title:"PostgreSQL Troubleshooting",permalink:"/notes/db/relational/postgresql/debug"}},d={},o=[{value:"CREATE TABLE",id:"create-table",level:2},{value:"ALTER TABLE",id:"alter-table",level:2},{value:"\u7ee7\u627f\u8868",id:"\u7ee7\u627f\u8868",level:2},{value:"add constraint if not exists",id:"add-constraint-if-not-exists",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"postgresql-ddl",children:"PostgreSQL DDL"}),"\n",(0,s.jsx)(e.h2,{id:"create-table",children:"CREATE TABLE"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u533a\u5206 column_constraint, table_constraint"}),"\n",(0,s.jsxs)(e.li,{children:["INHERITS - \u7ee7\u627f\u6e90\u8868\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u4ee5\u662f \u672c\u5730\u8868\u6216\u8fdc\u7a0b\u8868"}),"\n",(0,s.jsx)(e.li,{children:"\u4f1a\u5efa\u7acb\u5173\u7cfb - \u4fee\u6539\u7236\u8868\u5f71\u54cd\u5b50\u8868"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u8986\u76d6\u5217\u5b9a\u4e49 - \u4f46\u7c7b\u578b\u8981\u5339\u914d"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["LIKE - \u590d\u5236\u6e90\u8868\u4fe1\u606f -\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u590d\u5236 \u672c\u5730\u8868\u3001\u89c6\u56fe\u3001\u8fdc\u7a0b\u8868\u3001\u7ec4\u5408\u7c7b\u578b"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"{ INCLUDING | EXCLUDING } { COMMENTS | COMPRESSION | CONSTRAINTS | DEFAULTS | GENERATED | IDENTITY | INDEXES | STATISTICS | STORAGE | ALL }"})}),"\n",(0,s.jsx)(e.li,{children:"\u9ed8\u8ba4\u9009\u9879\u4e3a EXCLUDING\uff0c\u4e5f\u5c31\u662f\u5305\u542b\u6240\u6709"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"INCLUDING CONSTRAINTS"})," \u662f\u5305\u542b ",(0,s.jsx)(e.code,{children:"CHECK"}),", \u800c\u4e0d\u5305\u542b \u5916\u952e"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6ce8\u610f"})," \u4e0d\u5305\u542b FOREIGN KEY"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5916\u952e\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"addition foreign key constraint - \u88ab\u5f15\u7528\u8868 SHARE ROW EXCLUSIVE"}),"\n",(0,s.jsxs)(e.li,{children:["MATCH\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SIMPLE - \u9ed8\u8ba4 - \u5141\u8bb8\u4efb\u610f\u5217 NULL - \u542b NULL \u5219\u4e0d\u9650\u5236"}),"\n",(0,s.jsx)(e.li,{children:"FULL - \u591a\u5916\u952e\u5217\u65f6\u4e0d\u5141\u8bb8\u6709\u4e00\u4e2a\u5217\u4e3a NULL \u9664\u975e\u5168 NULL"}),"\n",(0,s.jsx)(e.li,{children:"PARTIAL - \u672a\u5b9e\u73b0"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["ON DELETE|UPDATE\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"NO ACTION - \u9ed8\u8ba4 - \u53ef\u4ee5\u5ef6\u8fdf\u68c0\u67e5"}),"\n",(0,s.jsx)(e.li,{children:"RESTRICT - \u540c NO ACTION \u4f46 \u4e0d\u53ef\u4ee5\u5ef6\u8fdf\u68c0\u67e5"}),"\n",(0,s.jsx)(e.li,{children:"CASCADE"}),"\n",(0,s.jsx)(e.li,{children:"SET NULL"}),"\n",(0,s.jsx)(e.li,{children:"SET DEFAULT - \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\uff0c\u8981\u6c42\u5f15\u7528\u8868\u4e5f\u80fd\u5339\u914d\u4e0a\u5bf9\u5e94\u884c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"[NOT] DEFERRABLE"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u662f\u5426\u7acb\u5373\u68c0\u67e5 - \u53ef\u4ee5\u5728\u4e8b\u52a1\u6700\u540e\u68c0\u67e5"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"INITIALLY {IMMEDIATE|DEFERRED}"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u63a7\u5236\u53ef\u5ef6\u8fdf\u68c0\u67e5\u9650\u5236\u7684 \u68c0\u67e5\u65f6\u95f4"}),"\n",(0,s.jsx)(e.li,{children:"IMMEDIATE - \u7acb\u5373"}),"\n",(0,s.jsx)(e.li,{children:"DEFERRED - \u4e8b\u52a1\u7ed3\u675f"}),"\n",(0,s.jsxs)(e.li,{children:["\u53ef\u4fee\u6539 ",(0,s.jsx)(e.code,{children:"SET CONSTRAINTS { ALL | name [, ...] } { DEFERRED | IMMEDIATE }"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["ON COMMIT - \u63a7\u5236\u4e34\u65f6\u8868\u63d0\u4ea4\u65f6\u7684\u884c\u4e3a\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"PRESERVE ROWS"}),"\n",(0,s.jsx)(e.li,{children:"DELETE ROWS"}),"\n",(0,s.jsx)(e.li,{children:"DROP"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.postgresql.org/docs/current/sql-createtable.html",children:"CREATE TABLE"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["PG 11 \u5f00\u59cb\u652f\u6301\u751f\u6210\u5217\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"PG 12 \u652f\u6301 STORED"}),"\n",(0,s.jsx)(e.li,{children:"VIRTUAL - WIP"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"alter-table",children:"ALTER TABLE"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"{ DISABLE | ENABLE } ROW LEVEL SECURITY"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u662f\u5426\u5f00\u542f RLS"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"[NO] FORCE ROW LEVEL SECURITY"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u662f\u5426\u9650\u5236 table owner - \u26a0\ufe0f \u8be5\u64cd\u4f5c\u4e0d\u4f1a enable RLS"}),"\n",(0,s.jsx)(e.li,{children:"\u9ed8\u8ba4\u4e0d\u9650\u5236 table owner"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.postgresql.org/docs/current/sql-altertable.html",children:"ALTER TABLE"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- \u67e5\u770b RLS \u72b6\u6001\nselect\n  relname,\n  relrowsecurity,\n  relforcerowsecurity\nfrom\n  pg_class\nwhere\n  relname not like 'pg_%'\n  and relname not like 'sql_%'\n  and relkind = 'r';\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7ee7\u627f\u8868",children:"\u7ee7\u627f\u8868"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6743\u9650\u53ea\u6821\u9a8c\u7236\u8868"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e0d\u652f\u6301\u8de8\u8868 UNIQUE\u3001\u5916\u952e\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7d22\u5f15\u53ea\u80fd\u9488\u5bf9\u5355\u4e2a\u8868"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"INSERT, UPDATE \u9700\u8981\u660e\u786e\u8868"}),"\n",(0,s.jsx)(e.li,{children:"ALTER TABLE \u53ef\u4ee5\u5c06\u8868\u8bbe\u7f6e\u4e3a\u7ee7\u627f\u8868"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u652f\u6301 ALTER TABLE RENAME"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT\n  name,\n  elevation -- ONLY \u4e0d\u5305\u542b children \u8868\nFROM\n  ONLY cities\nWHERE\n  elevation > 500;\n\n-- c.tableoid \u6765\u6e90\u8868 - \u5728 pg_class.oid \u627e\u5230\u5b9a\u4e49\nSELECT\n  c.tableoid:: regclass,\n  c.name,\n  c.elevation\nFROM\n  cities c\nWHERE\n  c.elevation > 500;\n\nSELECT\n  name,\n  elevation -- \u663e\u6027\u8981\u6c42\u5305\u542b children - \u9ed8\u8ba4\u5305\u542b - \u4e0d\u5efa\u8bae\u4f7f\u7528\u8be5\u8bed\u6cd5\nFROM\n  cities *\nWHERE\n  elevation > 500;\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.postgresql.org/docs/current/ddl-inherit.html",children:"https://www.postgresql.org/docs/current/ddl-inherit.html"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.postgresql.org/docs/current/tutorial-inheritance.html",children:"https://www.postgresql.org/docs/current/tutorial-inheritance.html"})}),"\n",(0,s.jsxs)(e.li,{children:["\u53ef\u7528\u4e8e\u6570\u636e\u5206\u7247 - ",(0,s.jsx)(e.a,{href:"https://arctype.com/blog/inheritance-in-postgres/",children:"https://arctype.com/blog/inheritance-in-postgres/"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e0d\u8fc7\u73b0\u5728\u7684 pg \u5206\u7247\u529f\u80fd\u66f4\u6210\u719f"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"add-constraint-if-not-exists",children:"add constraint if not exists"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u57fa\u4e8e\u540d\u5b57\u53bb\u91cd\u590d"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4e5f\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u5224\u65ad\u662f\u5426\u5b58\u5728 ",(0,s.jsx)(e.code,{children:"SELECT 1 FROM pg_constraint WHERE conname = 'constraint_name'\""})]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"do $$\nbegin\nalter table tenants add\n  constraint tenants_tid_fkey foreign key (tid) references system_tenants (tid) on delete cascade;\nexception\n  when duplicate_object then raise notice 'Table constraint foo.bar already exists';\nend;\n$$;\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u67e5\u8be2\u5224\u65ad\u903b\u8f91\u662f\u5426\u5b58\u5728"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},3354:(n,e,l)=>{var s=l(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,l){var s,i={},o=null,a=null;for(s in void 0!==l&&(o=""+l),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)t.call(e,s)&&!d.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===i[s]&&(i[s]=e[s]);return{$$typeof:r,type:n,key:o,ref:a,props:i,_owner:c.current}}e.Fragment=i,e.jsx=o,e.jsxs=o},11527:(n,e,l)=>{n.exports=l(3354)},47214:(n,e,l)=>{l.d(e,{Z:()=>c,a:()=>t});var s=l(50959);const r={},i=s.createContext(r);function t(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);