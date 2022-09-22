"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81327],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),l=["components"],i={title:"PostgreSQL Introspection"},s="PostgreSQL Introspection",p={unversionedId:"db/relational/postgresql/postgresql-introspection",id:"db/relational/postgresql/postgresql-introspection",title:"PostgreSQL Introspection",description:"- \u53c2\u8003",source:"@site/../notes/db/relational/postgresql/postgresql-introspection.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-introspection",permalink:"/notes/db/relational/postgresql/postgresql-introspection",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/postgresql/postgresql-introspection.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"PostgreSQL Introspection"},sidebar:"docs",previous:{title:"PostgreSQL Index",permalink:"/notes/db/relational/postgresql/postgresql-index"},next:{title:"PostgreSQL PL",permalink:"/notes/db/relational/postgresql/postgresql-pl"}},c={},m=[{value:"pg_catalog",id:"pg_catalog",level:2}],u={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgresql-introspection"},"PostgreSQL Introspection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/information-schema.html"},"information_schema")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/functions-info.html"},"System Information Functions and Operators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/catalogs.html"},"System Catalogs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.interdb.jp/pg/index.html"},"https://www.interdb.jp/pg/index.html"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select *\nfrom information_schema.columns AS cols\n         JOIN pg_type AS pgt ON cols.udt_name = pgt.typname\nwhere table_schema not in ('information_schema', 'pg_catalog', 'metric_helpers')\n  and table_name not like 'pg_%'\norder by table_catalog, table_schema, table_name, ordinal_position;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="generate golang struct field"',title:'"generate',golang:!0,struct:!0,'field"':!0},"select concat(column_name, '  ',\n              case pgt.typname\n                when 'name' then 'string'\n                when 'varchar' then 'string'\n                when 'char' then 'string'\n                when 'text' then 'string'\n                when 'oid' then 'int'\n                when 'int2' then 'int'\n                when 'int4' then 'int'\n                when 'int8' then 'int'\n                when 'bool' then 'bool'\n                when 'regproc' then 'string'\n                when '_aclitem' then 'string'\n                when 'pg_node_tree' then 'string'\n                else pgt.typname end, ' `gorm:\"column:',\n              column_name, '\"`')\nfrom information_schema.columns AS cols\n         JOIN pg_type AS pgt ON cols.udt_name = pgt.typname\nwhere table_schema = 'information_schema'\n  and table_name = 'columns'\norder by table_catalog, table_schema, table_name, ordinal_position;\n")),(0,a.kt)("h2",{id:"pg_catalog"},"pg_catalog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u6240\u6709 postgres \u7684\u5185\u90e8\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"pg_policy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89c6\u56fe pg_policies")))))}g.isMDXComponent=!0}}]);