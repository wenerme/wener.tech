"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84853],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,N=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(N,l(l({ref:t},u),{},{components:n})):a.createElement(N,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return g}});var a=n(49613),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={title:"PostgreSQL Index"},c="PostgreSQL Index",N={unversionedId:"db/relational/postgresql/postgresql-index",id:"db/relational/postgresql/postgresql-index",title:"PostgreSQL Index",description:"- B-tree, Hash, GiST, SP-GiST, GIN, BRIN",source:"@site/../notes/db/relational/postgresql/postgresql-index.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-index",permalink:"/notes/db/relational/postgresql/postgresql-index",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-index.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633940899,formattedLastUpdatedAt:"Oct 11, 2021",frontMatter:{title:"PostgreSQL Index"},sidebar:"docs",previous:{title:"Functions",permalink:"/notes/db/relational/postgresql/postgresql-func"},next:{title:"PostgreSQL Introspection",permalink:"/notes/db/relational/postgresql/postgresql-introspection"}},k={},g=[{value:"hypopg",id:"hypopg",level:2},{value:"access method &quot;hash&quot; does not support unique indexes",id:"access-method-hash-does-not-support-unique-indexes",level:2},{value:"\u91cd\u590d\u503c\u7d22\u5f15",id:"\u91cd\u590d\u503c\u7d22\u5f15",level:2}],f={toc:g};function h(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},f),u),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"postgresql-index"}),"PostgreSQL Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"B-tree, Hash, GiST, SP-GiST, GIN, BRIN"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 B-tree"),(0,a.kt)("li",{parentName:"ul"},"B-tree",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f8\u7b49\u548c\u8303\u56f4\u4e0a\u4e0b\u9650 ",(0,a.kt)("inlineCode",{parentName:"li"},"<"),",",(0,a.kt)("inlineCode",{parentName:"li"},"<="),",",(0,a.kt)("inlineCode",{parentName:"li"},"="),",",(0,a.kt)("inlineCode",{parentName:"li"},">="),",",(0,a.kt)("inlineCode",{parentName:"li"},">"),", BETWEEN, IN, IS NULL, IS NOT NULL"),(0,a.kt)("li",{parentName:"ul"},"\u524d\u7f00\u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"li"},"LIKE 'foo%'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"~ '^foo'"),", ILIKE, ~","*"," \u4e14\u5927\u5c0f\u5199\u5904\u7406\u903b\u8f91\u76f8\u540c"))),(0,a.kt)("li",{parentName:"ul"},"HASH - ",(0,a.kt)("inlineCode",{parentName:"li"},"=")," \u64cd\u4f5c - \u5982\u679c\u5b58\u5728 HASH \u7d22\u5f15\uff0c\u4f1a\u4f18\u5148\u4f7f\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u786e\u5b9a\u53ea\u4f1a\u7528\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"=")," \u5efa\u8bae\u4f7f\u7528 HASH"),(0,a.kt)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u6bd4 B-tree \u5c11\uff0c\u901f\u5ea6\u66f4\u5feb"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53d7\u503c\u957f\u5ea6\u5f71\u54cd"))),(0,a.kt)("li",{parentName:"ul"},"GiST",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8c\u7ef4\u6570\u636e - ",(0,a.kt)("inlineCode",{parentName:"li"},"<<"),",",(0,a.kt)("inlineCode",{parentName:"li"},"&<"),",",(0,a.kt)("inlineCode",{parentName:"li"},"&>"),",",(0,a.kt)("inlineCode",{parentName:"li"},">>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"<<|"),",",(0,a.kt)("inlineCode",{parentName:"li"},"&<|"),",",(0,a.kt)("inlineCode",{parentName:"li"},"|&>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"|>>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"@>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"<@"),",",(0,a.kt)("inlineCode",{parentName:"li"},"~="),",",(0,a.kt)("inlineCode",{parentName:"li"},"&&")),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 nearest-neighbor/\u4e34\u8fd1 \u641c\u7d22 - ",(0,a.kt)("inlineCode",{parentName:"li"},"location <-> point '(101,456)'")))),(0,a.kt)("li",{parentName:"ul"},"SP-GiST - Space partitioned GiST",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"non-balanced disk-based data structures",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"quadtrees, k-d trees, and radix trees (tries)"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8c\u7ef4\u70b9 - ",(0,a.kt)("inlineCode",{parentName:"li"},"<<"),",",(0,a.kt)("inlineCode",{parentName:"li"},">>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"~="),",",(0,a.kt)("inlineCode",{parentName:"li"},"<@"),",",(0,a.kt)("inlineCode",{parentName:"li"},"<^"),",",(0,a.kt)("inlineCode",{parentName:"li"},">^")),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 nearest-neighbor"))),(0,a.kt)("li",{parentName:"ul"},"GIN - inverted indexes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9006\u5411\u7d22\u5f15 - \u9002\u7528\u4e8e\u7c7b\u4f3c\u6570\u7ec4\u8fd9\u6837\u7684\u573a\u666f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<@"),",",(0,a.kt)("inlineCode",{parentName:"li"},"@>"),",",(0,a.kt)("inlineCode",{parentName:"li"},"="),",",(0,a.kt)("inlineCode",{parentName:"li"},"&&")))),(0,a.kt)("li",{parentName:"ul"},"BRIN - Block Range INdexes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"store summaries about the values stored in consecutive physical block ranges"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u8fde\u7eed\u76f8\u90bb\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<"),",",(0,a.kt)("inlineCode",{parentName:"li"},"<="),",",(0,a.kt)("inlineCode",{parentName:"li"},"="),",",(0,a.kt)("inlineCode",{parentName:"li"},">="),",",(0,a.kt)("inlineCode",{parentName:"li"},">")))),(0,a.kt)("li",{parentName:"ul"},"Bloom - ",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE EXTENSION bloom;")),(0,a.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7c7b\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u90e8\u5206\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u8fbe\u5f0f\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},"\u552f\u4e00\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u5217\u7d22\u5f15"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/powa-team/pg_qualstats"}),"pg_qualstats")," - An extension collecting statistics about quals",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"quals -> predicates"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/HypoPG/hypopg"}),"hypopg")," - Hypothetical indexes for PostgreSQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bc4\u4f30\u7d22\u5f15\u548c Query Plan")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bitmap Index Scan"),(0,a.kt)("li",{parentName:"ul"},"Bitmap Heap Scan"),(0,a.kt)("li",{parentName:"ul"},"Index Scan")),(0,a.kt)("admonition",m({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4ece\u65e7\u7248\u672c pg_upgrade \u5347\u7ea7\u540e\u9700\u8981 REINDEX \u624d\u4f1a\u5229\u7528\u5230\u65b0\u7684\u7d22\u5f15\u7279\u6027"),(0,a.kt)("li",{parentName:"ul"},"VACUUM FULL \u4f1a\u91cd\u5efa\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},"PostgreSQL 13 BTree \u7d22\u5f15\u4f1a\u53bb\u91cd - \u51cf\u5c11\u78c1\u76d8\u548c\u5185\u5b58\u7a7a\u95f4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e0c\u671b\u65e7\u7248\u672c\u884c\u4e3a\uff0c\u53ef\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"deduplicate_items=off")))),(0,a.kt)("li",{parentName:"ul"},"null \u4e0d\u60f3\u7b49 - \u56e0\u6b64\u4e0d\u4f1a\u7b97\u5728 unique"))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"UNIQUE INDEX \u53ea\u80fd\u4f7f\u7528 B-tree"),(0,a.kt)("li",{parentName:"ul"},"\u6392\u5e8f\u53ea\u80fd B-tree"),(0,a.kt)("li",{parentName:"ul"},"\u6392\u5e8f\u9690\u542b NULLS LAST, \u9ed8\u8ba4 ASC NULLS LAST - \u56e0\u6b64\u9ed8\u8ba4 DESC NULLS LAST ",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u4f1a"),"\u7528\u5230\u7d22\u5f15"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sql",metastring:'title="\u7d22\u5f15\u652f\u6301\u7684\u64cd\u4f5c"',title:'"\u7d22\u5f15\u652f\u6301\u7684\u64cd\u4f5c"'}),"SELECT am.amname              AS index_method,\n       opc.opcname            AS opclass_name,\n       opc.opcintype::regtype AS indexed_type,\n       opc.opcdefault         AS is_default\nFROM pg_am am,\n     pg_opclass opc\nWHERE opc.opcmethod = am.oid\nORDER BY index_method, opclass_name;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"-- Hash \u7d22\u5f15\nCREATE INDEX name ON table USING HASH (column);\n-- \u5982\u679c\u60f3\u8981 Hash unique \u53ef\u4ee5\u4f7f\u7528 constraint\n-- \u4f46 ON CONFLICT \u9700\u8981\u4f7f\u7528 constraint \u540d\u5b57\uff0cpg \u4e0d\u80fd\u81ea\u5df1\u63a8\u5bfc\nalter table tab add constraint cst_exc_id exclude using hash (id with =);\n\n-- \u5185\u7f6e Hash \u51fd\u6570\nSELECT hashtext('text'),\n       hashchar('c'),\n       hash_array(array [1,2,3]),\n       jsonb_hash('{\n         \"me\": \"haki\"\n       }'::jsonb),\n       timestamp_hash(now()::timestamp);\n\n-- \u4e34\u8fd1\u641c\u7d22\nSELECT * FROM places ORDER BY location <-> point '(101,456)' LIMIT 10;\n-- \u7d22\u5f15\u652f\u6301 ORDER \u548c NULL \u987a\u5e8f\nCREATE INDEX test3_desc_index ON test3 (id DESC NULLS LAST);\n\n-- \u7d22\u5f15\u6dfb\u52a0\u989d\u5916\u503c - \u53ef\u4ee5\u8ba9\u5e38\u7528\u67e5\u8be2\u53ea\u9700\u8981\u8d70\u7d22\u5f15\nCREATE INDEX idx_cust2 ON customer(active) INCLUDE (email);\n\n\n-- \u67e5\u627e\u91cd\u590d\u7d22\u5f15\n  SELECT array_agg(indexname) AS indexes, replace(indexdef, indexname, '') AS defn\n    FROM pg_indexes\nGROUP BY defn\n  HAVING count(*) > 1;\n\n-- \u7d22\u5f15\u4f7f\u7528\u60c5\u51b5\nSELECT relname, indexrelname, idx_scan\nFROM   pg_catalog.pg_stat_user_indexes\nWHERE  schemaname = 'public';\n\n-- \u5e76\u884c\u6784\u5efa\u7d22\u5f15\n\nSET max_parallel_workers = 32;\nSET max_parallel_maintenance_workers = 16;\n\nCREATE INDEX CONCURRENTLY idx_address1 ON address(district);\n")),(0,a.kt)("h2",m({},{id:"hypopg"}),"hypopg"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM hypopg_create_index('CREATE INDEX ON test (id)');\n\nSELECT * FROM hypopg_list_indexes();\nEXPLAIN SELECT * FROM test WHERE id = 1;\n")),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"access-method-hash-does-not-support-unique-indexes"}),'access method "hash" does not support unique indexes'),(0,a.kt)("p",null,"\u652f\u6301 BTree \u53ef\u4ee5 create unique index"),(0,a.kt)("h2",m({},{id:"\u91cd\u590d\u503c\u7d22\u5f15"}),"\u91cd\u590d\u503c\u7d22\u5f15"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PG 13 BTree \u4f1a\u53bb\u91cd\uff0c\u662f\u6bd4\u8f83\u597d\u7684\u9009\u62e9"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u6570\u91cf\u5dee\u5f02\u60c5\u51b5\uff0c\u53ef\u4ee5\u9009\u62e9\u90e8\u5206\u7d22\u5f15")))}h.isMDXComponent=!0}}]);