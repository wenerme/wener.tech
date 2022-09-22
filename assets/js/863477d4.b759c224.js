"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76552],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(i,".").concat(f)]||c[f]||u[f]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},47323:function(e,t,r){r.r(t),r.d(t,{assets:function(){return E},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&d(e,r,t[r]);return e};const c={title:"PostgreSQL FDW"},f="PostgreSQL FDW",m={unversionedId:"db/relational/postgresql/postgresql-fdw",id:"db/relational/postgresql/postgresql-fdw",title:"PostgreSQL FDW",description:"- Foreign data wrappers",source:"@site/../notes/db/relational/postgresql/postgresql-fdw.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-fdw",permalink:"/notes/db/relational/postgresql/postgresql-fdw",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-fdw.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1632926151,formattedLastUpdatedAt:"Sep 29, 2021",frontMatter:{title:"PostgreSQL FDW"},sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/faq"},next:{title:"PostgreSQL \u5168\u6587\u68c0\u7d22",permalink:"/notes/db/relational/postgresql/fts"}},E={},O=[{value:"mysql_fdw",id:"mysql_fdw",level:2},{value:"postgres_fdw",id:"postgres_fdw",level:2},{value:"dblink",id:"dblink",level:2},{value:"sqlite_fdw",id:"sqlite_fdw",level:2}],b={toc:O};function g(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),d),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"postgresql-fdw"}),"PostgreSQL FDW"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://wiki.postgresql.org/wiki/Foreign_data_wrappers"}),"Foreign data wrappers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/adjust/clickhouse_fdw"}),"adjust/clickhouse_fdw"))),(0,n.kt)("h2",u({},{id:"mysql_fdw"}),"mysql_fdw"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/EnterpriseDB/mysql_fdw"}),"EnterpriseDB/mysql_fdw"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"CREATE EXTENSION mysql_fdw;\n\nCREATE SERVER mysql_server\nFOREIGN DATA WRAPPER mysql_fdw\nOPTIONS (host '127.0.0.1', port '3306');\n\nCREATE USER MAPPING FOR postgres\nSERVER mysql_server\nOPTIONS (username 'foo', password 'bar');\n\nCREATE FOREIGN TABLE warehouse(\n     warehouse_id int,\n     warehouse_name text,\n     warehouse_created datetime)\nSERVER mysql_server\n     OPTIONS (dbname 'db', table_name 'warehouse');\n")),(0,n.kt)("h2",u({},{id:"postgres_fdw"}),"postgres_fdw"),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 ON CONFLICT DO NOTHING"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ON CONFLICT DO UPDATE",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u624b\u52a8\u5b9e\u73b0 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/plpgsql-control-structures.html#PLPGSQL-UPSERT-EXAMPLE"}),"Exceptions with UPDATE/INSERT")))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"CREATE EXTENSION postgres_fdw;\n\nCREATE SERVER ext_server\nFOREIGN DATA WRAPPER postgres_fdw\nOPTIONS (host '127.0.0.1', port '5432', dbname 'ext');\n\nCREATE USER MAPPING FOR demo\nSERVER ext_server\nOPTIONS (user 'ext', password 'ext');\n\nCREATE FOREIGN TABLE foreign_table (\n        id integer NOT NULL,\n        data text\n)\nSERVER foreign_server\nOPTIONS (schema_name 'some_schema', table_name 'some_table');\n")),(0,n.kt)("h2",u({},{id:"dblink"}),"dblink"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"CREATE EXTENSION dblink;\n\nSELECT dblink_connect('myconn', 'db2remote');\n\nCREATE SERVER db2remote\nFOREIGN DATA WRAPPER dblink_fdw\nOPTIONS (host 'postgres.demoproject.aivencloud.com', dbname 'db2', port '11254');\nSELECT * FROM dblink('myconn','SELECT * FROM foo') AS t(a int);\n")),(0,n.kt)("h2",u({},{id:"sqlite_fdw"}),"sqlite_fdw"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/pgspider/sqlite_fdw"}),"pgspider/sqlite_fdw")),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 COPY"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5206\u7247\u8868")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"CREATE EXTENSION sqlite_fdw;\n\nCREATE SERVER sqlite_server FOREIGN DATA WRAPPER sqlite_fdw OPTIONS (database '/tmp/test.db');\nCREATE FOREIGN TABLE t1(a integer, b text) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n-- \u9700\u8981 key \u652f\u6301\u66f4\u65b0\nCREATE FOREIGN TABLE t1(a integer OPTIONS (key 'true'), b text) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n-- int \u8f6c timestamp\nCREATE FOREIGN TABLE t1(a integer, b text, c timestamp without time zone OPTIONS (column_type 'INT')) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n\nIMPORT FOREIGN SCHEMA public FROM SERVER sqlite_server INTO public;\n")))}g.isMDXComponent=!0}}]);