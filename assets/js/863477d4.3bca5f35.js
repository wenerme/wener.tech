/*! For license information please see 863477d4.3bca5f35.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76552],{6841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=n(11527),r=n(47214);const l={title:"PostgreSQL FDW"},i="PostgreSQL FDW",o={id:"db/relational/postgresql/postgresql-fdw",title:"PostgreSQL FDW",description:"- Foreign data wrappers",source:"@site/../notes/db/relational/postgresql/postgresql-fdw.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/fdw",permalink:"/notes/db/relational/postgresql/fdw",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-fdw.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1632926151,formattedLastUpdatedAt:"Sep 29, 2021",frontMatter:{title:"PostgreSQL FDW"},sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/faq"},next:{title:"PostgreSQL \u5168\u6587\u68c0\u7d22",permalink:"/notes/db/relational/postgresql/fts"}},d={},a=[{value:"mysql_fdw",id:"mysql_fdw",level:2},{value:"postgres_fdw",id:"postgres_fdw",level:2},{value:"dblink",id:"dblink",level:2},{value:"sqlite_fdw",id:"sqlite_fdw",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"postgresql-fdw",children:"PostgreSQL FDW"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://wiki.postgresql.org/wiki/Foreign_data_wrappers",children:"Foreign data wrappers"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/adjust/clickhouse_fdw",children:"adjust/clickhouse_fdw"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"mysql_fdw",children:"mysql_fdw"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/EnterpriseDB/mysql_fdw",children:"EnterpriseDB/mysql_fdw"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE EXTENSION mysql_fdw;\n\nCREATE SERVER mysql_server\nFOREIGN DATA WRAPPER mysql_fdw\nOPTIONS (host '127.0.0.1', port '3306');\n\nCREATE USER MAPPING FOR postgres\nSERVER mysql_server\nOPTIONS (username 'foo', password 'bar');\n\nCREATE FOREIGN TABLE warehouse(\n     warehouse_id int,\n     warehouse_name text,\n     warehouse_created datetime)\nSERVER mysql_server\n     OPTIONS (dbname 'db', table_name 'warehouse');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"postgres_fdw",children:"postgres_fdw"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u652f\u6301 ON CONFLICT DO NOTHING"}),"\n",(0,s.jsxs)(t.li,{children:["\u4e0d\u652f\u6301 ON CONFLICT DO UPDATE\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u53ef\u4ee5\u624b\u52a8\u5b9e\u73b0 ",(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/plpgsql-control-structures.html#PLPGSQL-UPSERT-EXAMPLE",children:"Exceptions with UPDATE/INSERT"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE EXTENSION postgres_fdw;\n\nCREATE SERVER ext_server\nFOREIGN DATA WRAPPER postgres_fdw\nOPTIONS (host '127.0.0.1', port '5432', dbname 'ext');\n\nCREATE USER MAPPING FOR demo\nSERVER ext_server\nOPTIONS (user 'ext', password 'ext');\n\nCREATE FOREIGN TABLE foreign_table (\n        id integer NOT NULL,\n        data text\n)\nSERVER foreign_server\nOPTIONS (schema_name 'some_schema', table_name 'some_table');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"dblink",children:"dblink"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE EXTENSION dblink;\n\nSELECT dblink_connect('myconn', 'db2remote');\n\nCREATE SERVER db2remote\nFOREIGN DATA WRAPPER dblink_fdw\nOPTIONS (host 'postgres.demoproject.aivencloud.com', dbname 'db2', port '11254');\nSELECT * FROM dblink('myconn','SELECT * FROM foo') AS t(a int);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"sqlite_fdw",children:"sqlite_fdw"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/pgspider/sqlite_fdw",children:"pgspider/sqlite_fdw"})}),"\n",(0,s.jsx)(t.li,{children:"\u4e0d\u652f\u6301 COPY"}),"\n",(0,s.jsx)(t.li,{children:"\u4e0d\u652f\u6301\u5206\u7247\u8868"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE EXTENSION sqlite_fdw;\n\nCREATE SERVER sqlite_server FOREIGN DATA WRAPPER sqlite_fdw OPTIONS (database '/tmp/test.db');\nCREATE FOREIGN TABLE t1(a integer, b text) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n-- \u9700\u8981 key \u652f\u6301\u66f4\u65b0\nCREATE FOREIGN TABLE t1(a integer OPTIONS (key 'true'), b text) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n-- int \u8f6c timestamp\nCREATE FOREIGN TABLE t1(a integer, b text, c timestamp without time zone OPTIONS (column_type 'INT')) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n\nIMPORT FOREIGN SCHEMA public FROM SERVER sqlite_server INTO public;\n"})})]})}function E(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3354:(e,t,n)=>{var s=n(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,l={},a=null,c=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:a,ref:c,props:l,_owner:o.current}}t.Fragment=l,t.jsx=a,t.jsxs=a},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(50959);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);