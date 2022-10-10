"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47336],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var l=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return n?l.createElement(k,s(s({ref:t},u),{},{components:n})):l.createElement(k,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39907:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return g}});var l=n(49613),a=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={title:"Pg SQL \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},d="PostgreSQL SQL \u95ee\u9898",k={unversionedId:"db/relational/postgresql/postgresql-sql-faq",id:"db/relational/postgresql/postgresql-sql-faq",title:"Pg SQL \u5e38\u89c1\u95ee\u9898",description:"Note",source:"@site/../notes/db/relational/postgresql/postgresql-sql-faq.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/sql-faq",permalink:"/notes/db/relational/postgresql/sql-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-sql-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656950348,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Postgresql Scale",permalink:"/notes/db/relational/postgresql/scale"},next:{title:"PostgreSQL Tenant",permalink:"/notes/db/relational/postgresql/tenant"}},N={},g=[{value:"XML xpath \u8fd4\u56de\u7ed3\u679c\u5305\u542b CDATA",id:"xml-xpath-\u8fd4\u56de\u7ed3\u679c\u5305\u542b-cdata",level:2},{value:"\u7cfb\u7edf\u4fe1\u606f",id:"\u7cfb\u7edf\u4fe1\u606f",level:2},{value:"\u9759\u6001\u6570\u636e\u884c",id:"\u9759\u6001\u6570\u636e\u884c",level:2},{value:"\u5206\u7ec4\u805a\u5408",id:"\u5206\u7ec4\u805a\u5408",level:2},{value:"function vs procedure",id:"function-vs-procedure",level:2},{value:"plpgsql vs sql",id:"plpgsql-vs-sql",level:2},{value:"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c",id:"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c",level:2},{value:"\u65f6\u95f4\u65e5\u671f\u5904\u7406",id:"\u65f6\u95f4\u65e5\u671f\u5904\u7406",level:2},{value:"\u6b63\u5219",id:"\u6b63\u5219",level:2},{value:"\u751f\u6210\u5e26\u524d\u7f00\u7684 UUID \u4e3b\u952e",id:"\u751f\u6210\u5e26\u524d\u7f00\u7684-uuid-\u4e3b\u952e",level:2},{value:"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f",id:"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f",level:2},{value:"Operator",id:"operator",level:2},{value:"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e",id:"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e",level:2},{value:"ON CONFLICT \u591a\u5217 UNIQUE",id:"on-conflict-\u591a\u5217-unique",level:2},{value:"LATERAL JOIN",id:"lateral-join",level:2},{value:"\u4e0d\u53ef\u4ee5\u518d WHERE \u4f7f\u7528\u522b\u540d",id:"\u4e0d\u53ef\u4ee5\u518d-where-\u4f7f\u7528\u522b\u540d",level:2},{value:"csv",id:"csv",level:2},{value:"create role if not exists",id:"create-role-if-not-exists",level:2},{value:"role cannot be dropped because some objects depend on it - privileges for table users",id:"role-cannot-be-dropped-because-some-objects-depend-on-it---privileges-for-table-users",level:2},{value:"create role if not exists",id:"create-role-if-not-exists-1",level:2},{value:"create policy if not exists",id:"create-policy-if-not-exists",level:2}],E={toc:g};function f(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var l in e)i.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&p.call(e,l)&&(n[l]=e[l]);return n})(n,["components"]);return(0,l.kt)("wrapper",(t=c(c({},E),u),r(t,s({components:a,mdxType:"MDXLayout"}))),(0,l.kt)("h1",c({},{id:"postgresql-sql-\u95ee\u9898"}),"PostgreSQL SQL \u95ee\u9898"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"comment \u4e0d\u80fd\u5728\u521b\u5efa\u8868\u65f6\u6307\u5b9a"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/functions-json.html"}),"JSON Functions and Operators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," ~= ",(0,l.kt)("inlineCode",{parentName:"li"},"UNIQUE")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"NOT NULL"))),(0,l.kt)("h2",c({},{id:"xml-xpath-\u8fd4\u56de\u7ed3\u679c\u5305\u542b-cdata"}),"XML xpath \u8fd4\u56de\u7ed3\u679c\u5305\u542b CDATA"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/message-id/5DB23068.3080601%40anastigmatix.net"}),"BUG #16046: xpath returns CDATA tag along with the value in postgres 12"))),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"-- PG 12+ \u8fd4\u56de  <![CDATA[text]]>\n-- PG 11 \u8fd4\u56de text\nselect unnest(xpath('/s/text()','<s><![CDATA[text]]></s>'));\n-- \u6dfb\u52a0 string \u8f6c\u6362\u8fd4\u56de\u6b63\u5e38\nselect unnest(xpath('string(/s)','<s><![CDATA[text]]></s>'::xml));\n")),(0,l.kt)("h2",c({},{id:"\u7cfb\u7edf\u4fe1\u606f"}),"\u7cfb\u7edf\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"select version();\nshow server_version;\nshow server_version_num;\nshow server_encoding;\n")),(0,l.kt)("h2",c({},{id:"\u9759\u6001\u6570\u636e\u884c"}),"\u9759\u6001\u6570\u636e\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"SELECT *\nFROM (VALUES (1, 'one'), (2, 'two'), (3, 'three')) AS t (num, letter);\n")),(0,l.kt)("h2",c({},{id:"\u5206\u7ec4\u805a\u5408"}),"\u5206\u7ec4\u805a\u5408"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/cube.html"}),"cube")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/devel/queries-table-expressions.html#QUERIES-GROUPING-SETS"}),"GROUPING SETS, CUBE, ROLLUP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rollup(a,b,c)")," => ",(0,l.kt)("inlineCode",{parentName:"li"},"grouping sets((a,b,c),(a,b),(a),())")),(0,l.kt)("li",{parentName:"ul"},"cube((a),(b),(c)) grouping sets((a,b,c),(a,b),(a,c),(a),(b,c),(b),(c),())")),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"GROUP BY a, b, c\n-- \u5bf9\u7b49\n\n\nROLLUP ( a, b , c)\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c ),\n    ( a, b    ),\n    ( a       ),\n    (         )\n)\n\nCUBE ( a, b, c )\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c ),\n    ( a, b    ),\n    ( a,    c ),\n    ( a       ),\n    (    b, c ),\n    (    b    ),\n    (       c ),\n    (         )\n)\n\nCUBE ( (a, b), (c, d) )\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c, d ),\n    ( a, b       ),\n    (       c, d ),\n    (            )\n)\n")),(0,l.kt)("h2",c({},{id:"function-vs-procedure"}),"function vs procedure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u64cd\u4f5c\u4e8b\u7269"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SELECT \u8c03\u7528"))),(0,l.kt)("li",{parentName:"ul"},"procedure",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u8fd4\u56de\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u6709 INOUT \u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 commit \u548c rollback"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CALL \u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u5d4c\u5957\u5230\u5176\u4ed6 DDL - SELECT,INSERT,UPDATE,DELETE")))),(0,l.kt)("h2",c({},{id:"plpgsql-vs-sql"}),"plpgsql vs sql"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sql",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u719f\u6089 SQL"))),(0,l.kt)("li",{parentName:"ul"},"plpgsql",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u590d\u6742\u8bed\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u63a7\u5236\u6d41 - \u80fd\u505a\u5230\u5355\u4e2a SQL \u505a\u4e0d\u5230\u7684\u4e8b\u60c5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://stackoverflow.com/a/24771561/1870054"}),"https://stackoverflow.com/a/24771561/1870054"))),(0,l.kt)("h2",c({},{id:"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c"}),"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"get diagnostics cnt = row_count;\nreturn cnt;\n")),(0,l.kt)("h2",c({},{id:"\u65f6\u95f4\u65e5\u671f\u5904\u7406"}),"\u65f6\u95f4\u65e5\u671f\u5904\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to_timestamp \u8f6c timestamptz"),(0,l.kt)("li",{parentName:"ul"},"to_date \u8f6c date"),(0,l.kt)("li",{parentName:"ul"},"to_char \u8f6c text"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/functions-formatting.html"}),"Data Type Formatting Functions")))),(0,l.kt)("li",{parentName:"ul"},"ts \u652f\u6301\u5c0f\u6570\u70b9\u540e\u516d\u4f4d - nano \u7cbe\u5ea6")),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"SELECT TO_DATE('20170103','YYYYMMDD');\nSELECT TO_DATE('2020\u5e747\u670828\u65e5','YYYY\u5e74MM\u6708DD\u65e5');\nSELECT TO_CHAR(TO_DATE('2020\u5e747\u670828\u65e5','YYYY\u5e74MM\u6708DD\u65e5'),'YYYY-MM-DD');\n\n-- ms \u8f6c ts - \u652f\u6301\u5c0f\u6570\u70b9\nselect to_timestamp(1630402380252::float / 1000);\n-- ts \u8f6c epoch - \u5305\u542b\u5c0f\u6570\u70b9\nselect extract(epoch from now());\n")),(0,l.kt)("h2",c({},{id:"\u6b63\u5219"}),"\u6b63\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{}),"regexp_match(string, pattern [, flags ]) returns text[]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flags",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"g - global")))),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"SELECT (regexp_match('200\u4e07\u4eba\u6c11\u5e01', '[\\d.]+'))[1];\nSELECT (regexp_match('200\u4e07\u4eba\u6c11\u5e01', '\\D+$'))[1];\n")),(0,l.kt)("h2",c({},{id:"\u751f\u6210\u5e26\u524d\u7f00\u7684-uuid-\u4e3b\u952e"}),"\u751f\u6210\u5e26\u524d\u7f00\u7684 UUID \u4e3b\u952e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u7528\u4e8e GraphQL \u901a\u8fc7 ID \u5224\u65ad\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"create table test\n(\n    id    text default 'test-' || public.gen_random_uuid() primary key,\n    value text\n);\n\ninsert into test(value)\nvalues ('test');\n\nselect *\nfrom test;\n")),(0,l.kt)("h2",c({},{id:"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f"}),"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4 serial",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709\u5f52\u5c5e\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u89c4\u8303"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALWAYS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"INSERT \u6307\u5b9a ID \u4e0d\u4f1a\u751f\u6548\uff0c\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"OVERRIDING SYSTEM VALUE")),(0,l.kt)("li",{parentName:"ul"},"UPDATE \u4e0d\u5141\u8bb8\u4fee\u6539 ID"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BY DEFAULT")," - \u7528\u6237\u6307\u5b9a\u503c\u4f18\u5148\u7ea7\u66f4\u9ad8")))),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE users (\n   id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY\n);\n-- \u4e5f\u53ef\u4ee5\u9488\u5bf9\u751f\u6210\u8bbe\u7f6e\u66f4\u591a\u53c2\u6570\nCREATE TABLE users (\n   id bigint GENERATED ALWAYS AS IDENTITY\n             (MINVALUE 0 START WITH 0 CACHE 20)\n             PRIMARY KEY,\n);\n")),(0,l.kt)("h2",c({},{id:"operator"}),"Operator"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"-- \u64cd\u4f5c\u7b26\u4e5f\u662f\u51fd\u6570\nSELECT 3 OPERATOR(pg_catalog.+) 4;\n")),(0,l.kt)("h2",c({},{id:"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e"}),"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"distinct - \u63a8\u8350")),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"select distinct on (id) id, date, another_info\nfrom the_table\norder by id, date desc;\n")),(0,l.kt)("ol",c({},{start:2}),(0,l.kt)("li",{parentName:"ol"},"window")),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"select data\nfrom (\n        select data,\n                row_number()\n                over (partition by data ->> 'groupId' order by item_date desc) as rn\n        from pulled_items\n    ) lt\nwhere rn = 1\n")),(0,l.kt)("h2",c({},{id:"on-conflict-\u591a\u5217-unique"}),"ON CONFLICT \u591a\u5217 UNIQUE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT"}),"https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT")),(0,l.kt)("li",{parentName:"ul"},"conflict_target can perform unique index inference"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u5217 UNIQUE \u4f1a\u6709\u95ee\u9898 - ",(0,l.kt)("a",c({parentName:"li"},{href:"https://stackoverflow.com/a/38066008/1870054"}),"https://stackoverflow.com/a/38066008/1870054"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u901a\u8fc7 generate \u5217\u8c03\u6574 uniqe \u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"\u6216\u8005\u518d\u5efa\u4e00\u4e2a\u5305\u542b\u6240\u6709 unique \u5217\u7684\u7d22\u5f15"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981\u8fd4\u56de EXCLUDED \u53ef\u4ee5\u4f7f\u7528 CTE \u591a\u6b65\u6267\u884c ",(0,l.kt)("a",c({parentName:"li"},{href:"https://stackoverflow.com/a/35953488/1870054"}),"https://stackoverflow.com/a/35953488/1870054"))),(0,l.kt)("h2",c({},{id:"lateral-join"}),"LATERAL JOIN"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ea4\u53c9\u5f15\u7528\u5176\u4ed6 FROM"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-LATERAL"}),"https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-LATERAL"))),(0,l.kt)("h2",c({},{id:"\u4e0d\u53ef\u4ee5\u518d-where-\u4f7f\u7528\u522b\u540d"}),"\u4e0d\u53ef\u4ee5\u518d WHERE \u4f7f\u7528\u522b\u540d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u518d WHERE \u548c HAVING \u4f7f\u7528\u522b\u540d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"https://www.postgresql.org/docs/current/sql-select.html#SQL-SELECT-LIST"}),"https://www.postgresql.org/docs/current/sql-select.html#SQL-SELECT-LIST")))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u5b9a\u8981\uff0c\u53ef\u4ee5\u8003\u8651 CTE \u6216 subquery")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"An output column's name can be used to refer to the column's value in ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clauses, but ",(0,l.kt)("strong",{parentName:"p"},"not")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"HAVING")," clauses; there you must write out the expression instead.")),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"select username, profiles.age as profile_age\nfrom users,\n  left join profiles on (profiles.user_id = users.id)\n-- \u4e0d\u652f\u6301 \u5f15\u7528\nwhere profile_age > 18;\n")),(0,l.kt)("h2",c({},{id:"csv"}),"csv"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"COPY (SELECT * FROM foo) TO '/tmp/test.csv' WITH CSV DELIMITER ',' HEADER;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"psql")),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"\\copy (SELECT * FROM foo) TO '/tmp/test.csv' WITH CSV DELIMITER ',' HEADER;\n\\copy (SELECT * FROM foo) TO STDOUT WITH CSV DELIMITER ',' HEADER;\n")),(0,l.kt)("h2",c({},{id:"create-role-if-not-exists"}),"create role if not exists"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"DO\n$do$\nBEGIN\n   IF EXISTS (\n      SELECT FROM pg_catalog.pg_roles\n      WHERE  rolname = 'my_user') THEN\n\n      RAISE NOTICE 'Role \"my_user\" already exists. Skipping.';\n   ELSE\n      CREATE ROLE my_user LOGIN PASSWORD 'my_password';\n   END IF;\nEND\n$do$;\n")),(0,l.kt)("h2",c({},{id:"role-cannot-be-dropped-because-some-objects-depend-on-it---privileges-for-table-users"}),"role cannot be dropped because some objects depend on it - privileges for table users"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"REASSIGN OWNED BY test TO postgres;\nDROP OWNED BY test;\n\nDROP USER test;\n")),(0,l.kt)("h2",c({},{id:"create-role-if-not-exists-1"}),"create role if not exists"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"DO\n$do$\nBEGIN\n   IF EXISTS (\n      SELECT FROM pg_catalog.pg_roles\n      WHERE  rolname = 'my_user') THEN\n\n      RAISE NOTICE 'Role \"my_user\" already exists. Skipping.';\n   ELSE\n      CREATE ROLE my_user;\n   END IF;\nEND\n$do$;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406 EXCEPTION \u6bd4\u63d0\u524d\u68c0\u6d4b\u66f4\u6162")),(0,l.kt)("h2",c({},{id:"create-policy-if-not-exists"}),"create policy if not exists"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"do\n$do$\n    begin\n        if exists(select *\n                  from pg_catalog.pg_policies\n                  where (schemaname, tablename, policyname) = ('app', 'service_accounts', 'tid'))\n        then\n            raise notice 'policy already exists';\n        else\n            create policy tid on app.service_accounts using (tid = current_tenant_id());\n        end if;\n    end\n$do$;\n")))}f.isMDXComponent=!0}}]);