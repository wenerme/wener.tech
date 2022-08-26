"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37181],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return N}});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),E=s(r),N=l,c=E["".concat(o,".").concat(N)]||E[N]||m[N]||n;return r?a.createElement(c,i(i({ref:t},u),{},{components:r})):a.createElement(c,i({ref:t},u))}));function N(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=E;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}E.displayName="MDXCreateElement"},28321:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=r(87462),l=r(63366),n=(r(67294),r(3905)),i=["components"],p={title:"ACL"},o="PostgreSQL ACL",s={unversionedId:"db/relational/postgresql/postgresql-acl",id:"db/relational/postgresql/postgresql-acl",title:"ACL",description:"- User -> Role - \u65b0\u7248\u90fd\u662f ROLE",source:"@site/notes/db/relational/postgresql/postgresql-acl.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-acl",permalink:"/notes/db/relational/postgresql/postgresql-acl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-acl.md",tags:[],version:"current",frontMatter:{title:"ACL"},sidebar:"docs",previous:{title:"PostGraphile",permalink:"/notes/db/relational/postgresql/postgraphile"},next:{title:"PostgreSQL Admin",permalink:"/notes/db/relational/postgresql/postgresql-admin"}},u={},m=[{value:"ROLE \u5c5e\u6027",id:"role-\u5c5e\u6027",level:2},{value:"list grants",id:"list-grants",level:2},{value:"list role settings",id:"list-role-settings",level:2},{value:"list policy",id:"list-policy",level:2}],E={toc:m};function N(e){var t=e.components,r=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql-acl"},"PostgreSQL ACL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User -> Role - \u65b0\u7248\u90fd\u662f ROLE"),(0,n.kt)("li",{parentName:"ul"},"\u5c5e\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LOGIN - \u53ef\u767b\u5f55 - ",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE USER")," \u9ed8\u8ba4\u5305\u542b LOGIN"),(0,n.kt)("li",{parentName:"ul"},"INHERIT - \u662f\u5426\u7ee7\u627f\u6743\u9650 IN ROLE - \u9ed8\u8ba4 \u5f00\u542f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7ee7\u627f PUBLIC"))),(0,n.kt)("li",{parentName:"ul"},"SUPERUSER"),(0,n.kt)("li",{parentName:"ul"},"CREATEDB"),(0,n.kt)("li",{parentName:"ul"},"CREATEROLE"),(0,n.kt)("li",{parentName:"ul"},"REPLICATION LOGIN"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PASSWORD 'password' | PASSWORD NULL")),(0,n.kt)("li",{parentName:"ul"},"BYPASSRLS - RLS \u4e0d\u751f\u6548"),(0,n.kt)("li",{parentName:"ul"},"CONNECTION LIMIT - \u8fde\u63a5\u6570\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"VALID UNTIL 'timestamp'"),(0,n.kt)("li",{parentName:"ul"},"IN ROLE - \u8d4b\u4e88\u89d2\u8272"),(0,n.kt)("li",{parentName:"ul"},"ROLE - \u6dfb\u52a0\u5176\u4ed6\u89d2\u8272\u5230\u8be5\u5206\u7ec4"),(0,n.kt)("li",{parentName:"ul"},"ADMIN - \u7c7b\u4f3c ROLE, \u4f46\u5141\u8bb8\u8be5\u89d2\u8272\u6dfb\u52a0\u5176\u4ed6\u6210\u5458\u5230\u8be5\u7ec4"))),(0,n.kt)("li",{parentName:"ul"},"\u9884\u8bbe\u89d2\u8272",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pg_read_all_data"),(0,n.kt)("li",{parentName:"ul"},"pg_read_all_settings"),(0,n.kt)("li",{parentName:"ul"},"pg_read_all_stats"),(0,n.kt)("li",{parentName:"ul"},"pg_write_all_data"),(0,n.kt)("li",{parentName:"ul"},"pg_stat_scan_tables - ACCESS SHARE"),(0,n.kt)("li",{parentName:"ul"},"pg_monitor -> pg_read_all_settings, pg_read_all_stats, pg_stat_scan_tables"),(0,n.kt)("li",{parentName:"ul"},"pg_database_owner"),(0,n.kt)("li",{parentName:"ul"},"pg_signal_backend - \u53d6\u6d88\u67e5\u8be2\u3001\u7ec8\u6b62\u4f1a\u8bdd"),(0,n.kt)("li",{parentName:"ul"},"pg_read_server_files - COPY"),(0,n.kt)("li",{parentName:"ul"},"pg_write_server_files"),(0,n.kt)("li",{parentName:"ul"},"pg_execute_server_program"))),(0,n.kt)("li",{parentName:"ul"},"GRANT - ",(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/ddl-priv.html"},"Privileges"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u89d2\u8272\u6743\u9650",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8868 - SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u521b\u5efa\u5916\u952e\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u521b\u5efa TRIGGER"))),(0,n.kt)("li",{parentName:"ul"},"\u5217 - SELECT | INSERT | UPDATE | REFERENCES"),(0,n.kt)("li",{parentName:"ul"},"\u5e8f\u5217 - USAGE | SELECT | UPDATE"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93 - CREATE | CONNECT | TEMPORARY | TEMP"),(0,n.kt)("li",{parentName:"ul"},"Schema - CREATE | USAGE"),(0,n.kt)("li",{parentName:"ul"},"Domain - USAGE"),(0,n.kt)("li",{parentName:"ul"},"FDW - USAGE"),(0,n.kt)("li",{parentName:"ul"},"FOREIGN SERVER - USAGE"),(0,n.kt)("li",{parentName:"ul"},"FUNCTION, PROCEDURE, ROUTINE - EXECUTE"))),(0,n.kt)("li",{parentName:"ul"},"PUBLIC=\u6240\u6709\u89d2\u8272"))),(0,n.kt)("li",{parentName:"ul"},"POLICY - \u8868 RLS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PERMISSIVE - OR \u5408\u5e76 - \u9ed8\u8ba4"),(0,n.kt)("li",{parentName:"ul"},"RESTRICTIVE - AND \u5408\u5e76"),(0,n.kt)("li",{parentName:"ul"},"USING - \u68c0\u67e5 SELECT \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"INSERT/UPDATE \u2026 RETURNING"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"false - \u884c\u4e0d\u663e\u793a"))),(0,n.kt)("li",{parentName:"ul"},"WITH CHECK - \u68c0\u67e5 INSERT \u548c UPDATE - \u9ed8\u8ba4\u4f7f\u7528 USING \u6761\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"false - \u51fa\u9519"))))),(0,n.kt)("li",{parentName:"ul"},"RULE - \u91cd\u5199\u8bed\u53e5"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-grant.html"},"GRANT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-alterrole.html"},"ALTER ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-createrole.html"},"CREATE ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-alterdefaultprivileges.html"},"ALTER DEFAULT PRIVILEGES"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u672a\u6765\u521b\u5efa\u5bf9\u8c61\uff0c\u4e0d\u5f71\u54cd\u73b0\u5728"))),(0,n.kt)("li",{parentName:"ul"},"postgrest ",(0,n.kt)("a",{parentName:"li",href:"https://postgrest.org/en/stable/auth.html"},"auth")),(0,n.kt)("li",{parentName:"ul"},"pgconf us 2019 ",(0,n.kt)("a",{parentName:"li",href:"https://postgresconf.org/system/events/document/000/000/996/pgconf_us_2019.pdf"},"Row Level Security"))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"set_config \u662f\u4e0d\u80fd\u88ab\u63a7\u5236\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RLS \u9488\u5bf9 current_user - \u7ef4\u62a4\u5f88\u591a\u7528\u6237\u8bb0\u5f55"),(0,n.kt)("li",{parentName:"ul"},"RLS \u9488\u5bf9 \u5339\u914d\u5bc6\u7801 \u8bb0\u5f55 - db \u8ba1\u7b97\u91cf\u66f4\u5927"),(0,n.kt)("li",{parentName:"ul"},"RLS \u9488\u5bf9 current_settings - \u7b80\u5355\u65b9\u4fbf\uff0c\u4f46\u4e0d\u53ef\u5bf9\u5916\u66b4\u9732",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u540c\u65f6\u9488\u5bf9 current_user - \u4f18\u5148\u4f7f\u7528\u4ece current_user \u63d0\u53d6\u7684\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tid bigint := coalesce(nullif(current_setting('tenant.id', true), '')::bigint,((regexp_match(current_user, 'tenant_(\\d+)$'))[1])::bigint)")))),(0,n.kt)("li",{parentName:"ul"},"RLS \u9488\u5bf9 \u7528\u6237 \u4f7f\u7528\u9759\u6001\u503c - \u6027\u80fd\u6700\u597d\uff0c\u53ef\u63d0\u524d\u4f18\u5316\u67e5\u8be2"),(0,n.kt)("li",{parentName:"ul"},"RLS \u9700\u8981\u8003\u8651\u505a\u5230 \u79df\u6237 \u7ef4\u5ea6\u8fd8\u662f \u7528\u6237 \u7ef4\u5ea6"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"create role wener login password 'wener'; -- \u53ef\u767b\u5f55\u7528\u6237\ncreate role admin; -- \u4e0d\u53ef\u767b\u5f55\u89d2\u8272\ngrant admin to wener; -- \u628a wener \u52a0\u5165 admin \u5206\u7ec4\n-- \u7ed9\u5206\u7ec4\u52a0\u6743\u9650\uff0c\u6210\u5458\u4e5f\u4f1a\u5f97\u5230\u6743\u9650\ngrant all on all tables in schema public to admin;\n\n-- \u4e0d\u53ef\u4ee5\u7528\u4e8e SECURITY DEFINER\n-- SET [ SESSION | LOCAL ] ROLE NONE|role_name\nSET ROLE wener; -- \u4fee\u6539 current_user\nRESET ROLE;     -- \u6062\u590d\n\n-- \u7c7b\u4f3c\u4e8e SET ROLE\n-- \u8bbe\u7f6e\u540e\uff0c\u4e0b\u6b21 SET ROLE \u4f1a\u6821\u9a8c\u662f\u5426\u6709\u6743\u9650\uff0c\u800c SET ROLE \u5219\u662f\u57fa\u4e8e\u6700\u5f00\u59cb\u7684\u6743\u9650\u5224\u65ad\n-- SET LOCAL \u53ef\u4ee5\u7528\u4e8e SECURITY DEFINER\n-- SET [ SESSION | LOCAL ] SESSION AUTHORIZATION DEFAULT|user_name\nSET SESSION AUTHORIZATION wener;\nRESET SESSION AUTHORIZATION\n")),(0,n.kt)("h2",{id:"role-\u5c5e\u6027"},"ROLE \u5c5e\u6027"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'select current_user; -- \u5f53\u524d\u7528\u6237\n\n-- \u63a7\u5236\u53ef\u89c1\u8303\u56f4\n-- \u9ed8\u8ba4 "$user", public\nshow search_path;\n-- \u9488\u5bf9 ROLE \u8bbe\u7f6e\nalter role demo_app_web set search_path = app_web,public;\n\n-- \u9488\u5bf9 ROLE \u8bbe\u7f6e SESSION \u53d8\u91cf\n-- \u26a0\ufe0f \u53ea\u6709\u5728 LOGIN \u624d\u751f\u6548\uff0cSET ROLE \u548c SET SESSION AUTHORIZATION \u4e0d\u751f\u6548\u3002\nalter role demo_t_500 set tenant.id = 500;\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"search_path \u53ef\u9488\u5bf9 ROLE, DATABASE \u8bbe\u7f6e")),(0,n.kt)("h2",{id:"list-grants"},"list grants"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT grantee, grantor, table_schema, table_name, privilege_type\nFROM information_schema.role_table_grants\nWHERE table_schema NOT IN ('pg_catalog', 'information_schema', 'columnar')\n  AND table_name NOT IN ('citus_tables');\n")),(0,n.kt)("h2",{id:"list-role-settings"},"list role settings"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT r.rolname, d.datname, rs.setconfig\nFROM pg_db_role_setting rs\n         LEFT JOIN pg_roles r ON r.oid = rs.setrole\n         LEFT JOIN pg_database d ON d.oid = rs.setdatabase;\n")),(0,n.kt)("h2",{id:"list-policy"},"list policy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT n.nspname                                   AS schemaname,\n       c.relname                                   AS tablename,\n       pol.polname                                 AS policyname,\n       CASE\n           WHEN pol.polpermissive THEN 'PERMISSIVE'::text\n           ELSE 'RESTRICTIVE'::text\n           END                                     AS permissive,\n       CASE\n           WHEN pol.polroles = '{0}'::oid[] THEN string_to_array('public'::text, ''::text)::name[]\n           ELSE ARRAY(SELECT pg_authid.rolname\n                      FROM pg_authid\n                      WHERE pg_authid.oid = ANY (pol.polroles)\n                      ORDER BY pg_authid.rolname)\n           END                                     AS roles,\n       CASE pol.polcmd\n           WHEN 'r'::\"char\" THEN 'SELECT'::text\n           WHEN 'a'::\"char\" THEN 'INSERT'::text\n           WHEN 'w'::\"char\" THEN 'UPDATE'::text\n           WHEN 'd'::\"char\" THEN 'DELETE'::text\n           WHEN '*'::\"char\" THEN 'ALL'::text\n           ELSE NULL::text\n           END                                     AS cmd,\n       pg_get_expr(pol.polqual, pol.polrelid)      AS qual,\n       pg_get_expr(pol.polwithcheck, pol.polrelid) AS with_check\nFROM pg_policy pol\n         JOIN pg_class c ON c.oid = pol.polrelid\n         LEFT JOIN pg_namespace n ON n.oid = c.relnamespace;\n")))}N.isMDXComponent=!0}}]);