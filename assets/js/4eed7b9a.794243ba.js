"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31329],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30574:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",slug:"postgresql-use-wrong-index-with-order-and-limit",tags:["PostgreSQL","DevOps"]},s=void 0,c={permalink:"/story/postgresql-use-wrong-index-with-order-and-limit",editUrl:"https://github.com/wenerme/wener/edit/master/story/2021/2021-10-11-postgresql-use-wrong-index-with-order-and-limit.md",source:"@site/story/2021/2021-10-11-postgresql-use-wrong-index-with-order-and-limit.md",title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",description:"\u5f53\u4f7f\u7528 ORDER BY+LIMIT \u65f6 PostgreSQL \u53ef\u80fd\u4f1a\u9009\u62e9\u66f4\u5dee\u7684\u6267\u884c\u65b9\u5f0f\uff0c\u6570\u636e\u91cf\u5927\u65f6\uff0c\u6267\u884c\u6548\u7387\u76f8\u5dee\u6210\u767e\u4e0a\u5343\u500d\u3002",date:"2022-03-11T09:14:18.258Z",formattedDate:"March 11, 2022",tags:[{label:"PostgreSQL",permalink:"/story/tags/postgre-sql"},{label:"DevOps",permalink:"/story/tags/dev-ops"}],readingTime:4.85,truncated:!0,authors:[],prevItem:{title:"K3S vs K0S",permalink:"/story/k3s-vs-k0s"},nextItem:{title:"\u7cfb\u7edf\u76d8\u6062\u590d",permalink:"/story/rescue-root-disk"}},p={authorsImageUrls:[]},m=[{value:"\u7d22\u5f15\u9009\u62e9\u95ee\u9898",id:"\u7d22\u5f15\u9009\u62e9\u95ee\u9898",children:[],level:2},{value:"\u7d22\u5f15\u9009\u62e9\u539f\u56e0",id:"\u7d22\u5f15\u9009\u62e9\u539f\u56e0",children:[],level:2},{value:"\u89e3\u51b3\u95ee\u9898",id:"\u89e3\u51b3\u95ee\u9898",children:[],level:2},{value:"STATISTICS \u573a\u666f",id:"statistics-\u573a\u666f",children:[],level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[],level:2}],d={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528 ORDER BY+LIMIT \u65f6 PostgreSQL \u53ef\u80fd\u4f1a\u9009\u62e9\u66f4\u5dee\u7684\u6267\u884c\u65b9\u5f0f\uff0c\u6570\u636e\u91cf\u5927\u65f6\uff0c\u6267\u884c\u6548\u7387\u76f8\u5dee\u6210\u767e\u4e0a\u5343\u500d\u3002"),(0,l.kt)("h2",{id:"\u7d22\u5f15\u9009\u62e9\u95ee\u9898"},"\u7d22\u5f15\u9009\u62e9\u95ee\u9898"),(0,l.kt)("p",null,"\u5047\u8bbe\u7ed3\u6784\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table organizations(\n  id bigserial primary key,\n  jgmc text,\n  clrq date\n);\n\ncreate index if not exists idx_organizations_clrq on ic.organizations (clrq);\ncreate index if not exists idx_organizations_jgmc_fts on ic.organizations using pgroonga (jgmc);\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u901a\u5e38\u57fa\u4e8e clrq \u6392\u5e8f\uff0c\u4f46\u4f1a \u641c\u7d22 jgmc\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"explain analyse verbose\nselect jgmc, clrq, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq desc\nlimit 30 offset 0\n;\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u4e86 clrq is not null \u800c\u975e nulls last")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u56e0\u4e3a\u7d22\u5f15\u9ed8\u8ba4\u9690\u542b nulls last\uff0c\u4e5f\u5c31\u662f\u8bf4 ",(0,l.kt)("inlineCode",{parentName:"p"},"order by clrq asc")," \u9690\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"order by clrq asc nulls last"),"\u3002\n\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"order by clrq desc nulls last")," \u65f6\u4e0d\u4f1a\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"idx_organizations_clrq")," \u7d22\u5f15\uff0c\u56e0\u4e3a nulls \u987a\u5e8f\u4e0d\u5339\u914d\u3002\n\u56e0\u6b64\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"is not null")," \u6392\u9664\u3002"))),(0,l.kt)("p",null,"\u7ed9\u51fa\u7684\u6267\u884c\u8ba1\u5212\u548c\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Limit  (cost=0.43..33132.51 rows=30 width=1284) (actual time=4678.918..13104.109 rows=6 loops=1)\n"  Output: jgmc, clrq, id"\n  ->  Index Scan Backward using idx_organizations_clrq on ic.organizations  (cost=0.43..4069724.46 rows=3685 width=1284) (actual time=4678.916..13104.101 rows=6 loops=1)\n"        Output: jgmc, clrq, id"\n        Index Cond: (organizations.clrq IS NOT NULL)\n        Filter: (organizations.jgmc &@~ \'\u767e\u5ea6\'::text)\n        Rows Removed by Filter: 3685166\nPlanning Time: 0.826 ms\nExecution Time: 13104.226 ms\n')),(0,l.kt)("p",null,"\u5b9e\u9645\u6267\u884c\u4e86 13s\uff0c\u9009\u62e9\u4e86 idx_organizations_clrq \u7d22\u5f15\u3002"),(0,l.kt)("p",null,"\u4f46\u5982\u679c\u53bb\u6389 LIMIT\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"explain analyse verbose\nselect jgmc, clrq, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq desc\n-- limit 30 offset 0\n;\n")),(0,l.kt)("p",null,"\u7ed9\u51fa\u7684\u8ba1\u5212\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Sort  (cost=40479.53..40488.74 rows=3685 width=1284) (actual time=19.771..19.774 rows=6 loops=1)\n"  Output: jgmc, clrq, id"\n  Sort Key: organizations.clrq DESC\n  Sort Method: quicksort  Memory: 36kB\n  ->  Index Scan using idx_organizations_jgmc_fts on ic.organizations  (cost=0.00..40261.24 rows=3685 width=1284) (actual time=19.716..19.737 rows=6 loops=1)\n"        Output: jgmc, clrq, id"\n        Index Cond: (organizations.jgmc &@~ \'\u767e\u5ea6\'::text)\n        Filter: (organizations.clrq IS NOT NULL)\nPlanning Time: 0.706 ms\nExecution Time: 21.824 ms\n')),(0,l.kt)("p",null,"\u5b9e\u9645\u6267\u884c\u53ea\u9700\u8981 21ms\uff0c\u9009\u62e9\u4e86 idx_organizations_jgmc_fts \u7d22\u5f15\u3002"),(0,l.kt)("p",null,"PostgreSQL \u5728\u8fd9\u6837\u7684\u573a\u666f\u4e0b\u9009\u62e9\u4e86\u9519\u8bef\u7684\u7d22\u5f15\uff0c\u5bfc\u81f4\u67e5\u8be2\u65f6\u95f4\u76f8\u5dee 600 \u500d\u3002"),(0,l.kt)("h2",{id:"\u7d22\u5f15\u9009\u62e9\u539f\u56e0"},"\u7d22\u5f15\u9009\u62e9\u539f\u56e0"),(0,l.kt)("p",null,"ORDER BY+LIMIT \u8ba9\u67e5\u8be2\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u63d0\u524d\u7ed3\u675f\u7684\u53ef\u80fd"),"\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982 \u5b9e\u9645\u6570\u636e 10k,\u4f46 limit 10, \u53ea\u9700\u4f7f\u7528\u7d22\u5f15\u626b\u63cf 10 \u6761\u6570\u636e\u4fbf\u53ef\u4ee5\u505c\u6b62\u6267\u884c\uff0c\u800c\u4e0d\u9700\u8981\u5148\u5224\u65ad \u5176\u4ed6 \u6761\u4ef6\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64 PostgreSQL \u7684 optimizer \u6709\u8ba9\u8fd9\u79cd\u9009\u62e9\u4f18\u5148\u7684\u903b\u8f91 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/postgres/postgres/blob/REL_13_STABLE/src/backend/optimizer/util/pathnode.c#L3633-L3753"},"pathnode.c#L3633-L3753"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create_limit_path \u9488\u5bf9 LIMIT/OFFSET \u521b\u5efa\u6267\u884c\u8ba1\u5212",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"adjust_limit_rows_costs \u8c03\u6574\u6b64\u65f6\u7684 rows costs")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="adjust_limit_rows_costs"',title:'"adjust_limit_rows_costs"'},"*total_cost = *startup_cost +\n  (input_total_cost - input_startup_cost)\n  * count_rows / input_rows;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"var"),(0,l.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"total_cost"),(0,l.kt)("td",{parentName:"tr",align:null},"\u603b cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"startup_cost"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"input_total_cost"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u603b cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"input_startup_cost"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u521d\u59cb\u603b cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"count_rows"),(0,l.kt)("td",{parentName:"tr",align:null},"limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"input_rows"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165 \u884c")))),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u8c03\u6574\u903b\u8f91\u91cc\u4f1a\u5c06\u73b0\u5728\u7684\u8fc7\u7a0b cost ",(0,l.kt)("inlineCode",{parentName:"p"},"input_total_cost - input_startup_cost")," \u4e58\u4ee5 \u7cfb\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"count_rows / input_rows"),"\u3002\n\u8fd9\u4e2a\u7cfb\u6570\u4fbf\u4f1a\u4f7f\u5f97 ORDER BY+LIMIT \u65f6\u4f18\u5148\u9009\u62e9\u7d22\u5f15\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u4e24\u4e2a\u8ba1\u5212\u7684 rows \u76f8\u540c\uff0c\u4f18\u5148\u4e86 \u6392\u5e8f\u7d22\u5f15\u5219\u4f1a\u9009\u62e9\u6392\u5e8f\u7d22\u5f15\u65b9\u6848\u3002"),(0,l.kt)("h2",{id:"\u89e3\u51b3\u95ee\u9898"},"\u89e3\u51b3\u95ee\u9898"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u76ee\u6807")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u907f\u514d\u9009\u62e9\u6392\u5e8f\u7d22\u5f15"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 noop function \u907f\u514d\u7d22\u5f15")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"explain verbose\nselect clrq, jgmc, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by coalesce(clrq) desc\nlimit 30 offset 0\n;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 expression \u907f\u514d\u7d22\u5f15")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"explain verbose\nselect clrq, jgmc, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq+0 desc\nlimit 30 offset 0\n;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 nulls \u987a\u5e8f\u907f\u514d\u7d22\u5f15")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a index \u9ed8\u8ba4 asc nulls last \u56e0\u6b64 asc \u548c desc \u9009\u62e9\u4e0d\u540c nulls \u987a\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"where is not null"),(0,l.kt)("li",{parentName:"ul"},"desc nulls last"),(0,l.kt)("li",{parentName:"ul"},"asc nulls first")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"explain verbose\nselect clrq, jgmc, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq desc nulls last\nlimit 30 offset 0\n;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u8c03\u6574 STATISTICS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u4e24\u8005\u7edf\u8ba1 rows \u4e0d\u540c\u7684\u60c5\u51b5\u4e0b - \u8fd9\u91cc\u4e0d\u9002\u7528"),(0,l.kt)("li",{parentName:"ul"},"SET STATISTICS"),(0,l.kt)("li",{parentName:"ul"},"CREATE STATISTICS")),(0,l.kt)("h2",{id:"statistics-\u573a\u666f"},"STATISTICS \u573a\u666f"),(0,l.kt)("p",null,"STATISTICS \u5f71\u54cd n_distinct\uff0cn_distinct \u5f71\u54cd inputs_rows\uff0c\u591a\u4e2a\u8ba1\u5212\u76f8\u540c\uff0c\u53ef\u589e\u52a0 STATISTICS \u907f\u514d\u9519\u8bef\u9009\u62e9\u7d22\u5f15\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT attname,\n       n_distinct,\n       null_frac\nFROM pg_stats\nWHERE tablename = 'organizations'\n  and attname in ('clrq', 'jgmc');\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"attname"),(0,l.kt)("th",{parentName:"tr",align:"left"},"n_distinct"),(0,l.kt)("th",{parentName:"tr",align:"left"},"null_frac"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clrq"),(0,l.kt)("td",{parentName:"tr",align:"left"},"7914"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.00030666665")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"jgmc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-0.99441195"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.0030133333")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT relname, reltuples, relpages\nFROM pg_class\nWHERE relname LIKE 'organizations';\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"relname"),(0,l.kt)("th",{parentName:"tr",align:"left"},"reltuples"),(0,l.kt)("th",{parentName:"tr",align:"left"},"relpages"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"organizations"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3686376"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1116103")))),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gocardless.com/blog/debugging-the-postgres-query-planner/"},"https://gocardless.com/blog/debugging-the-postgres-query-planner/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dba.stackexchange.com/a/258986/234272"},"https://dba.stackexchange.com/a/258986/234272"))))}u.isMDXComponent=!0}}]);