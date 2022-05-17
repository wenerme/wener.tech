"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2070],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,E=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(E,s(s({ref:t},d),{},{components:n})):r.createElement(E,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97692:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],o={title:"PostgreSQL FDW"},i=void 0,p={unversionedId:"db/relational/postgresql/postgresql-fdw",id:"db/relational/postgresql/postgresql-fdw",title:"PostgreSQL FDW",description:"- Foreign data wrappers",source:"@site/notes/db/relational/postgresql/postgresql-fdw.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-fdw",permalink:"/notes/db/relational/postgresql/postgresql-fdw",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-fdw.md",tags:[],version:"current",frontMatter:{title:"PostgreSQL FDW"},sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/faq"},next:{title:"PostgreSQL \u5168\u6587\u68c0\u7d22",permalink:"/notes/db/relational/postgresql/fts"}},d={},u=[{value:"mysql_fdw",id:"mysql_fdw",level:2},{value:"postgres_fdw",id:"postgres_fdw",level:2},{value:"dblink",id:"dblink",level:2},{value:"sqlite_fdw",id:"sqlite_fdw",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.postgresql.org/wiki/Foreign_data_wrappers"},"Foreign data wrappers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/adjust/clickhouse_fdw"},"adjust/clickhouse_fdw"))),(0,l.kt)("h2",{id:"mysql_fdw"},"mysql_fdw"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/EnterpriseDB/mysql_fdw"},"EnterpriseDB/mysql_fdw"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION mysql_fdw;\n\nCREATE SERVER mysql_server\nFOREIGN DATA WRAPPER mysql_fdw\nOPTIONS (host '127.0.0.1', port '3306');\n\nCREATE USER MAPPING FOR postgres\nSERVER mysql_server\nOPTIONS (username 'foo', password 'bar');\n\nCREATE FOREIGN TABLE warehouse(\n     warehouse_id int,\n     warehouse_name text,\n     warehouse_created datetime)\nSERVER mysql_server\n     OPTIONS (dbname 'db', table_name 'warehouse');\n")),(0,l.kt)("h2",{id:"postgres_fdw"},"postgres_fdw"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 ON CONFLICT DO NOTHING"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ON CONFLICT DO UPDATE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u624b\u52a8\u5b9e\u73b0 ",(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/plpgsql-control-structures.html#PLPGSQL-UPSERT-EXAMPLE"},"Exceptions with UPDATE/INSERT"))))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION postgres_fdw;\n\nCREATE SERVER ext_server\nFOREIGN DATA WRAPPER postgres_fdw\nOPTIONS (host '127.0.0.1', port '5432', dbname 'ext');\n\nCREATE USER MAPPING FOR demo\nSERVER ext_server\nOPTIONS (user 'ext', password 'ext');\n\nCREATE FOREIGN TABLE foreign_table (\n        id integer NOT NULL,\n        data text\n)\nSERVER foreign_server\nOPTIONS (schema_name 'some_schema', table_name 'some_table');\n")),(0,l.kt)("h2",{id:"dblink"},"dblink"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION dblink;\n\nSELECT dblink_connect('myconn', 'db2remote');\n\nCREATE SERVER db2remote\nFOREIGN DATA WRAPPER dblink_fdw\nOPTIONS (host 'postgres.demoproject.aivencloud.com', dbname 'db2', port '11254');\nSELECT * FROM dblink('myconn','SELECT * FROM foo') AS t(a int);\n")),(0,l.kt)("h2",{id:"sqlite_fdw"},"sqlite_fdw"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pgspider/sqlite_fdw"},"pgspider/sqlite_fdw")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 COPY"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5206\u7247\u8868")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION sqlite_fdw;\n\nCREATE SERVER sqlite_server FOREIGN DATA WRAPPER sqlite_fdw OPTIONS (database '/tmp/test.db');\nCREATE FOREIGN TABLE t1(a integer, b text) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n-- \u9700\u8981 key \u652f\u6301\u66f4\u65b0\nCREATE FOREIGN TABLE t1(a integer OPTIONS (key 'true'), b text) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n-- int \u8f6c timestamp\nCREATE FOREIGN TABLE t1(a integer, b text, c timestamp without time zone OPTIONS (column_type 'INT')) SERVER sqlite_server OPTIONS (table 't1_sqlite');\n\nIMPORT FOREIGN SCHEMA public FROM SERVER sqlite_server INTO public;\n")))}m.isMDXComponent=!0}}]);