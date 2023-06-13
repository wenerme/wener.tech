"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46461],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return N}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),N=l,d=m["".concat(p,".").concat(N)]||m[N]||c[N]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return N},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return E}});var r=n(49613),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e};const m={title:"DDL"},N="PostgreSQL DDL",d={unversionedId:"db/relational/postgresql/postgresql-ddl",id:"db/relational/postgresql/postgresql-ddl",title:"DDL",description:"CREATE TABLE",source:"@site/../notes/db/relational/postgresql/postgresql-ddl.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/ddl",permalink:"/notes/db/relational/postgresql/ddl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-ddl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"DDL"},sidebar:"docs",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/notes/db/relational/postgresql/datatype"},next:{title:"PostgreSQL Troubleshooting",permalink:"/notes/db/relational/postgresql/debug"}},k={},E=[{value:"CREATE TABLE",id:"create-table",level:2},{value:"ALTER TABLE",id:"alter-table",level:2},{value:"\u7ee7\u627f\u8868",id:"\u7ee7\u627f\u8868",level:2},{value:"add constraint if not exists",id:"add-constraint-if-not-exists",level:2}],f={toc:E};function g(e){var t,n=e,{components:l}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},f),s),a(t,i({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"postgresql-ddl"}),"PostgreSQL DDL"),(0,r.kt)("h2",c({},{id:"create-table"}),"CREATE TABLE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u533a\u5206 column_constraint, table_constraint"),(0,r.kt)("li",{parentName:"ul"},"INHERITS - \u7ee7\u627f\u6e90\u8868",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f \u672c\u5730\u8868\u6216\u8fdc\u7a0b\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u5efa\u7acb\u5173\u7cfb - \u4fee\u6539\u7236\u8868\u5f71\u54cd\u5b50\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u8986\u76d6\u5217\u5b9a\u4e49 - \u4f46\u7c7b\u578b\u8981\u5339\u914d"))),(0,r.kt)("li",{parentName:"ul"},"LIKE - \u590d\u5236\u6e90\u8868\u4fe1\u606f -",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u590d\u5236 \u672c\u5730\u8868\u3001\u89c6\u56fe\u3001\u8fdc\u7a0b\u8868\u3001\u7ec4\u5408\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{ INCLUDING | EXCLUDING } { COMMENTS | COMPRESSION | CONSTRAINTS | DEFAULTS | GENERATED | IDENTITY | INDEXES | STATISTICS | STORAGE | ALL }")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9009\u9879\u4e3a EXCLUDING\uff0c\u4e5f\u5c31\u662f\u5305\u542b\u6240\u6709"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INCLUDING CONSTRAINTS")," \u662f\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"CHECK"),", \u800c\u4e0d\u5305\u542b \u5916\u952e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6ce8\u610f")," \u4e0d\u5305\u542b FOREIGN KEY"))),(0,r.kt)("li",{parentName:"ul"},"\u5916\u952e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"addition foreign key constraint - \u88ab\u5f15\u7528\u8868 SHARE ROW EXCLUSIVE"),(0,r.kt)("li",{parentName:"ul"},"MATCH",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SIMPLE - \u9ed8\u8ba4 - \u5141\u8bb8\u4efb\u610f\u5217 NULL - \u542b NULL \u5219\u4e0d\u9650\u5236"),(0,r.kt)("li",{parentName:"ul"},"FULL - \u591a\u5916\u952e\u5217\u65f6\u4e0d\u5141\u8bb8\u6709\u4e00\u4e2a\u5217\u4e3a NULL \u9664\u975e\u5168 NULL"),(0,r.kt)("li",{parentName:"ul"},"PARTIAL - \u672a\u5b9e\u73b0"))),(0,r.kt)("li",{parentName:"ul"},"ON DELETE|UPDATE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NO ACTION - \u9ed8\u8ba4 - \u53ef\u4ee5\u5ef6\u8fdf\u68c0\u67e5"),(0,r.kt)("li",{parentName:"ul"},"RESTRICT - \u540c NO ACTION \u4f46 \u4e0d\u53ef\u4ee5\u5ef6\u8fdf\u68c0\u67e5"),(0,r.kt)("li",{parentName:"ul"},"CASCADE"),(0,r.kt)("li",{parentName:"ul"},"SET NULL"),(0,r.kt)("li",{parentName:"ul"},"SET DEFAULT - \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\uff0c\u8981\u6c42\u5f15\u7528\u8868\u4e5f\u80fd\u5339\u914d\u4e0a\u5bf9\u5e94\u884c"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[NOT] DEFERRABLE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u7acb\u5373\u68c0\u67e5 - \u53ef\u4ee5\u5728\u4e8b\u52a1\u6700\u540e\u68c0\u67e5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INITIALLY {IMMEDIATE|DEFERRED}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u53ef\u5ef6\u8fdf\u68c0\u67e5\u9650\u5236\u7684 \u68c0\u67e5\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"IMMEDIATE - \u7acb\u5373"),(0,r.kt)("li",{parentName:"ul"},"DEFERRED - \u4e8b\u52a1\u7ed3\u675f"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"SET CONSTRAINTS { ALL | name [, ...] } { DEFERRED | IMMEDIATE }")))),(0,r.kt)("li",{parentName:"ul"},"ON COMMIT - \u63a7\u5236\u4e34\u65f6\u8868\u63d0\u4ea4\u65f6\u7684\u884c\u4e3a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PRESERVE ROWS"),(0,r.kt)("li",{parentName:"ul"},"DELETE ROWS"),(0,r.kt)("li",{parentName:"ul"},"DROP"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/sql-createtable.html"}),"CREATE TABLE")))),(0,r.kt)("li",{parentName:"ul"},"PG 11 \u5f00\u59cb\u652f\u6301\u751f\u6210\u5217",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PG 12 \u652f\u6301 STORED"),(0,r.kt)("li",{parentName:"ul"},"VIRTUAL - WIP")))),(0,r.kt)("h2",c({},{id:"alter-table"}),"ALTER TABLE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{ DISABLE | ENABLE } ROW LEVEL SECURITY"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u5f00\u542f RLS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[NO] FORCE ROW LEVEL SECURITY"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u9650\u5236 table owner - \u26a0\ufe0f \u8be5\u64cd\u4f5c\u4e0d\u4f1a enable RLS"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u9650\u5236 table owner"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/sql-altertable.html"}),"ALTER TABLE"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"-- \u67e5\u770b RLS \u72b6\u6001\nselect\n  relname,\n  relrowsecurity,\n  relforcerowsecurity\nfrom\n  pg_class\nwhere\n  relname not like 'pg_%'\n  and relname not like 'sql_%'\n  and relkind = 'r';\n")),(0,r.kt)("h2",c({},{id:"\u7ee7\u627f\u8868"}),"\u7ee7\u627f\u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6743\u9650\u53ea\u6821\u9a8c\u7236\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8de8\u8868 UNIQUE\u3001\u5916\u952e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u53ea\u80fd\u9488\u5bf9\u5355\u4e2a\u8868"))),(0,r.kt)("li",{parentName:"ul"},"INSERT, UPDATE \u9700\u8981\u660e\u786e\u8868"),(0,r.kt)("li",{parentName:"ul"},"ALTER TABLE \u53ef\u4ee5\u5c06\u8868\u8bbe\u7f6e\u4e3a\u7ee7\u627f\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ALTER TABLE RENAME")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"SELECT\n  name,\n  elevation -- ONLY \u4e0d\u5305\u542b children \u8868\nFROM\n  ONLY cities\nWHERE\n  elevation > 500;\n\n-- c.tableoid \u6765\u6e90\u8868 - \u5728 pg_class.oid \u627e\u5230\u5b9a\u4e49\nSELECT\n  c.tableoid:: regclass,\n  c.name,\n  c.elevation\nFROM\n  cities c\nWHERE\n  c.elevation > 500;\n\nSELECT\n  name,\n  elevation -- \u663e\u6027\u8981\u6c42\u5305\u542b children - \u9ed8\u8ba4\u5305\u542b - \u4e0d\u5efa\u8bae\u4f7f\u7528\u8be5\u8bed\u6cd5\nFROM\n  cities *\nWHERE\n  elevation > 500;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/ddl-inherit.html"}),"https://www.postgresql.org/docs/current/ddl-inherit.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/tutorial-inheritance.html"}),"https://www.postgresql.org/docs/current/tutorial-inheritance.html")),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6570\u636e\u5206\u7247 - ",(0,r.kt)("a",c({parentName:"li"},{href:"https://arctype.com/blog/inheritance-in-postgres/"}),"https://arctype.com/blog/inheritance-in-postgres/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8fc7\u73b0\u5728\u7684 pg \u5206\u7247\u529f\u80fd\u66f4\u6210\u719f")))),(0,r.kt)("h2",c({},{id:"add-constraint-if-not-exists"}),"add constraint if not exists"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u540d\u5b57\u53bb\u91cd\u590d")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u5224\u65ad\u662f\u5426\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT 1 FROM pg_constraint WHERE conname = 'constraint_name'\""))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"do $$\nbegin\nalter table tenants add\n  constraint tenants_tid_fkey foreign key (tid) references system_tenants (tid) on delete cascade;\nexception\n  when duplicate_object then raise notice 'Table constraint foo.bar already exists';\nend;\n$$;\n")),(0,r.kt)("ol",c({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u5224\u65ad\u903b\u8f91\u662f\u5426\u5b58\u5728")))}g.isMDXComponent=!0}}]);