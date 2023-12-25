/*! For license information please see c825e074.da24bc79.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65420],{48404:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(11527),l=t(47214);const r={title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",slug:"postgresql-use-wrong-index-with-order-and-limit",tags:["PostgreSQL","DevOps"]},i="PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",c={permalink:"/story/postgresql-use-wrong-index-with-order-and-limit",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2021/2021-10-11-postgresql-use-wrong-index-with-order-and-limit.md",source:"@site/../story/2021/2021-10-11-postgresql-use-wrong-index-with-order-and-limit.md",title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",description:"\u5f53\u4f7f\u7528 ORDER BY+LIMIT \u65f6 PostgreSQL \u53ef\u80fd\u4f1a\u9009\u62e9\u66f4\u5dee\u7684\u6267\u884c\u65b9\u5f0f\uff0c\u6570\u636e\u91cf\u5927\u65f6\uff0c\u6267\u884c\u6548\u7387\u76f8\u5dee\u6210\u767e\u4e0a\u5343\u500d\u3002",date:"2021-10-11T00:00:00.000Z",formattedDate:"October 11, 2021",tags:[{label:"PostgreSQL",permalink:"/story/tags/postgre-sql"},{label:"DevOps",permalink:"/story/tags/dev-ops"}],readingTime:4.85,hasTruncateMarker:!0,authors:[],frontMatter:{title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",slug:"postgresql-use-wrong-index-with-order-and-limit",tags:["PostgreSQL","DevOps"]},unlisted:!1,prevItem:{title:"\u7cfb\u7edf\u76d8\u6062\u590d",permalink:"/story/rescue-root-disk"},nextItem:{title:"K3S vs K0S",permalink:"/story/k3s-vs-k0s"}},o={authorsImageUrls:[]},d=[{value:"\u7d22\u5f15\u9009\u62e9\u95ee\u9898",id:"\u7d22\u5f15\u9009\u62e9\u95ee\u9898",level:2},{value:"\u7d22\u5f15\u9009\u62e9\u539f\u56e0",id:"\u7d22\u5f15\u9009\u62e9\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u95ee\u9898",id:"\u89e3\u51b3\u95ee\u9898",level:2},{value:"STATISTICS \u573a\u666f",id:"statistics-\u573a\u666f",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u5f53\u4f7f\u7528 ORDER BY+LIMIT \u65f6 PostgreSQL \u53ef\u80fd\u4f1a\u9009\u62e9\u66f4\u5dee\u7684\u6267\u884c\u65b9\u5f0f\uff0c\u6570\u636e\u91cf\u5927\u65f6\uff0c\u6267\u884c\u6548\u7387\u76f8\u5dee\u6210\u767e\u4e0a\u5343\u500d\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u7d22\u5f15\u9009\u62e9\u95ee\u9898",children:"\u7d22\u5f15\u9009\u62e9\u95ee\u9898"}),"\n",(0,s.jsx)(e.p,{children:"\u5047\u8bbe\u7ed3\u6784\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"create table organizations(\n  id bigserial primary key,\n  jgmc text,\n  clrq date\n);\n\ncreate index if not exists idx_organizations_clrq on ic.organizations (clrq);\ncreate index if not exists idx_organizations_jgmc_fts on ic.organizations using pgroonga (jgmc);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2\u901a\u5e38\u57fa\u4e8e clrq \u6392\u5e8f\uff0c\u4f46\u4f1a \u641c\u7d22 jgmc\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"explain analyse verbose\nselect jgmc, clrq, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq desc\nlimit 30 offset 0\n;\n"})}),"\n",(0,s.jsx)(e.admonition,{title:"\u4f7f\u7528\u4e86 clrq is not null \u800c\u975e nulls last",type:"tip",children:(0,s.jsxs)(e.p,{children:["\u56e0\u4e3a\u7d22\u5f15\u9ed8\u8ba4\u9690\u542b nulls last\uff0c\u4e5f\u5c31\u662f\u8bf4 ",(0,s.jsx)(e.code,{children:"order by clrq asc"})," \u9690\u542b ",(0,s.jsx)(e.code,{children:"order by clrq asc nulls last"}),"\u3002\n\u5f53\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"order by clrq desc nulls last"})," \u65f6\u4e0d\u4f1a\u9009\u62e9 ",(0,s.jsx)(e.code,{children:"idx_organizations_clrq"})," \u7d22\u5f15\uff0c\u56e0\u4e3a nulls \u987a\u5e8f\u4e0d\u5339\u914d\u3002\n\u56e0\u6b64\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"is not null"})," \u6392\u9664\u3002"]})}),"\n",(0,s.jsx)(e.p,{children:"\u7ed9\u51fa\u7684\u6267\u884c\u8ba1\u5212\u548c\u7ed3\u679c\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Limit  (cost=0.43..33132.51 rows=30 width=1284) (actual time=4678.918..13104.109 rows=6 loops=1)\n"  Output: jgmc, clrq, id"\n  ->  Index Scan Backward using idx_organizations_clrq on ic.organizations  (cost=0.43..4069724.46 rows=3685 width=1284) (actual time=4678.916..13104.101 rows=6 loops=1)\n"        Output: jgmc, clrq, id"\n        Index Cond: (organizations.clrq IS NOT NULL)\n        Filter: (organizations.jgmc &@~ \'\u767e\u5ea6\'::text)\n        Rows Removed by Filter: 3685166\nPlanning Time: 0.826 ms\nExecution Time: 13104.226 ms\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u9645\u6267\u884c\u4e86 13s\uff0c\u9009\u62e9\u4e86 idx_organizations_clrq \u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u5982\u679c\u53bb\u6389 LIMIT\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"explain analyse verbose\nselect jgmc, clrq, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq desc\n-- limit 30 offset 0\n;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7ed9\u51fa\u7684\u8ba1\u5212\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'Sort  (cost=40479.53..40488.74 rows=3685 width=1284) (actual time=19.771..19.774 rows=6 loops=1)\n"  Output: jgmc, clrq, id"\n  Sort Key: organizations.clrq DESC\n  Sort Method: quicksort  Memory: 36kB\n  ->  Index Scan using idx_organizations_jgmc_fts on ic.organizations  (cost=0.00..40261.24 rows=3685 width=1284) (actual time=19.716..19.737 rows=6 loops=1)\n"        Output: jgmc, clrq, id"\n        Index Cond: (organizations.jgmc &@~ \'\u767e\u5ea6\'::text)\n        Filter: (organizations.clrq IS NOT NULL)\nPlanning Time: 0.706 ms\nExecution Time: 21.824 ms\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u9645\u6267\u884c\u53ea\u9700\u8981 21ms\uff0c\u9009\u62e9\u4e86 idx_organizations_jgmc_fts \u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(e.p,{children:"PostgreSQL \u5728\u8fd9\u6837\u7684\u573a\u666f\u4e0b\u9009\u62e9\u4e86\u9519\u8bef\u7684\u7d22\u5f15\uff0c\u5bfc\u81f4\u67e5\u8be2\u65f6\u95f4\u76f8\u5dee 600 \u500d\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u7d22\u5f15\u9009\u62e9\u539f\u56e0",children:"\u7d22\u5f15\u9009\u62e9\u539f\u56e0"}),"\n",(0,s.jsxs)(e.p,{children:["ORDER BY+LIMIT \u8ba9\u67e5\u8be2\u6709 ",(0,s.jsx)(e.strong,{children:"\u63d0\u524d\u7ed3\u675f\u7684\u53ef\u80fd"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982 \u5b9e\u9645\u6570\u636e 10k,\u4f46 limit 10, \u53ea\u9700\u4f7f\u7528\u7d22\u5f15\u626b\u63cf 10 \u6761\u6570\u636e\u4fbf\u53ef\u4ee5\u505c\u6b62\u6267\u884c\uff0c\u800c\u4e0d\u9700\u8981\u5148\u5224\u65ad \u5176\u4ed6 \u6761\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u56e0\u6b64 PostgreSQL \u7684 optimizer \u6709\u8ba9\u8fd9\u79cd\u9009\u62e9\u4f18\u5148\u7684\u903b\u8f91 ",(0,s.jsx)(e.a,{href:"https://github.com/postgres/postgres/blob/REL_13_STABLE/src/backend/optimizer/util/pathnode.c#L3633-L3753",children:"pathnode.c#L3633-L3753"}),"\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["create_limit_path \u9488\u5bf9 LIMIT/OFFSET \u521b\u5efa\u6267\u884c\u8ba1\u5212\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"adjust_limit_rows_costs \u8c03\u6574\u6b64\u65f6\u7684 rows costs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",metastring:'title="adjust_limit_rows_costs"',children:"*total_cost = *startup_cost +\n  (input_total_cost - input_startup_cost)\n  * count_rows / input_rows;\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"right"},children:"var"}),(0,s.jsx)(e.th,{children:"meaning"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"total_cost"}),(0,s.jsx)(e.td,{children:"\u603b cost"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"startup_cost"}),(0,s.jsx)(e.td,{children:"\u521d\u59cb cost"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"input_total_cost"}),(0,s.jsx)(e.td,{children:"\u8f93\u5165\u603b cost"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"input_startup_cost"}),(0,s.jsx)(e.td,{children:"\u8f93\u5165\u521d\u59cb\u603b cost"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"count_rows"}),(0,s.jsx)(e.td,{children:"limit"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"right"},children:"input_rows"}),(0,s.jsx)(e.td,{children:"\u8f93\u5165 \u884c"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u8c03\u6574\u903b\u8f91\u91cc\u4f1a\u5c06\u73b0\u5728\u7684\u8fc7\u7a0b cost ",(0,s.jsx)(e.code,{children:"input_total_cost - input_startup_cost"})," \u4e58\u4ee5 \u7cfb\u6570 ",(0,s.jsx)(e.code,{children:"count_rows / input_rows"}),"\u3002\n\u8fd9\u4e2a\u7cfb\u6570\u4fbf\u4f1a\u4f7f\u5f97 ORDER BY+LIMIT \u65f6\u4f18\u5148\u9009\u62e9\u7d22\u5f15\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u4e3a\u4e24\u4e2a\u8ba1\u5212\u7684 rows \u76f8\u540c\uff0c\u4f18\u5148\u4e86 \u6392\u5e8f\u7d22\u5f15\u5219\u4f1a\u9009\u62e9\u6392\u5e8f\u7d22\u5f15\u65b9\u6848\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u89e3\u51b3\u95ee\u9898",children:"\u89e3\u51b3\u95ee\u9898"}),"\n",(0,s.jsx)(e.admonition,{title:"\u76ee\u6807",type:"tip",children:(0,s.jsx)(e.p,{children:"\u907f\u514d\u9009\u62e9\u6392\u5e8f\u7d22\u5f15"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528 noop function \u907f\u514d\u7d22\u5f15"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"explain verbose\nselect clrq, jgmc, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by coalesce(clrq) desc\nlimit 30 offset 0\n;\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528 expression \u907f\u514d\u7d22\u5f15"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"explain verbose\nselect clrq, jgmc, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq+0 desc\nlimit 30 offset 0\n;\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"\u6dfb\u52a0 nulls \u987a\u5e8f\u907f\u514d\u7d22\u5f15"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u56e0\u4e3a index \u9ed8\u8ba4 asc nulls last \u56e0\u6b64 asc \u548c desc \u9009\u62e9\u4e0d\u540c nulls \u987a\u5e8f"}),"\n",(0,s.jsx)(e.li,{children:"where is not null"}),"\n",(0,s.jsx)(e.li,{children:"desc nulls last"}),"\n",(0,s.jsx)(e.li,{children:"asc nulls first"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"explain verbose\nselect clrq, jgmc, id\nfrom ic.organizations\nwhere jgmc &@~ '\u767e\u5ea6'\n  and clrq is not null\norder by clrq desc nulls last\nlimit 30 offset 0\n;\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"\u8c03\u6574 STATISTICS"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u4e24\u8005\u7edf\u8ba1 rows \u4e0d\u540c\u7684\u60c5\u51b5\u4e0b - \u8fd9\u91cc\u4e0d\u9002\u7528"}),"\n",(0,s.jsx)(e.li,{children:"SET STATISTICS"}),"\n",(0,s.jsx)(e.li,{children:"CREATE STATISTICS"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"statistics-\u573a\u666f",children:"STATISTICS \u573a\u666f"}),"\n",(0,s.jsx)(e.p,{children:"STATISTICS \u5f71\u54cd n_distinct\uff0cn_distinct \u5f71\u54cd inputs_rows\uff0c\u591a\u4e2a\u8ba1\u5212\u76f8\u540c\uff0c\u53ef\u589e\u52a0 STATISTICS \u907f\u514d\u9519\u8bef\u9009\u62e9\u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT attname,\n       n_distinct,\n       null_frac\nFROM pg_stats\nWHERE tablename = 'organizations'\n  and attname in ('clrq', 'jgmc');\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"attname"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"n_distinct"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"null_frac"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"clrq"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"7914"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"0.00030666665"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"jgmc"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"-0.99441195"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"0.0030133333"})]})]})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT relname, reltuples, relpages\nFROM pg_class\nWHERE relname LIKE 'organizations';\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"relname"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"reltuples"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"relpages"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"organizations"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"3686376"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"1116103"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://gocardless.com/blog/debugging-the-postgres-query-planner/",children:"https://gocardless.com/blog/debugging-the-postgres-query-planner/"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://dba.stackexchange.com/a/258986/234272",children:"https://dba.stackexchange.com/a/258986/234272"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},3354:(n,e,t)=>{var s=t(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,t){var s,r={},d=null,a=null;for(s in void 0!==t&&(d=""+t),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(a=e.ref),e)i.call(e,s)&&!o.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:l,type:n,key:d,ref:a,props:r,_owner:c.current}}e.Fragment=r,e.jsx=d,e.jsxs=d},11527:(n,e,t)=>{n.exports=t(3354)},47214:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>i});var s=t(50959);const l={},r=s.createContext(l);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);