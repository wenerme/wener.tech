"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29925],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,N=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22404:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"PostgreSQL Index"},p=void 0,s={unversionedId:"db/relational/postgresql/postgresql-index",id:"db/relational/postgresql/postgresql-index",isDocsHomePage:!1,title:"PostgreSQL Index",description:"- B-tree, Hash, GiST, SP-GiST, GIN, BRIN",source:"@site/notes/db/relational/postgresql/postgresql-index.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-index",permalink:"/notes/db/relational/postgresql/postgresql-index",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-index.md",tags:[],version:"current",frontMatter:{title:"PostgreSQL Index"},sidebar:"docs",previous:{title:"PostgreSQL FDW",permalink:"/notes/db/relational/postgresql/postgresql-fdw"},next:{title:"PostgreSQL PL",permalink:"/notes/db/relational/postgresql/postgresql-pl"}},m=[{value:"access method &quot;hash&quot; does not support unique indexes",id:"access-method-hash-does-not-support-unique-indexes",children:[]},{value:"\u91cd\u590d\u503c\u7d22\u5f15",id:"\u91cd\u590d\u503c\u7d22\u5f15",children:[]}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"B-tree, Hash, GiST, SP-GiST, GIN, BRIN"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 B-tree"),(0,r.kt)("li",{parentName:"ul"},"B-tree",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f8\u7b49\u548c\u8303\u56f4\u4e0a\u4e0b\u9650 ",(0,r.kt)("inlineCode",{parentName:"li"},"<"),",",(0,r.kt)("inlineCode",{parentName:"li"},"<="),",",(0,r.kt)("inlineCode",{parentName:"li"},"="),",",(0,r.kt)("inlineCode",{parentName:"li"},">="),",",(0,r.kt)("inlineCode",{parentName:"li"},">"),", BETWEEN, IN, IS NULL, IS NOT NULL"),(0,r.kt)("li",{parentName:"ul"},"\u524d\u7f00\u5339\u914d ",(0,r.kt)("inlineCode",{parentName:"li"},"LIKE 'foo%'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"~ '^foo'"),", ILIKE, ~","*"," \u4e14\u5927\u5c0f\u5199\u5904\u7406\u903b\u8f91\u76f8\u540c"))),(0,r.kt)("li",{parentName:"ul"},"HASH - ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," \u64cd\u4f5c - \u5982\u679c\u5b58\u5728 HASH \u7d22\u5f15\uff0c\u4f1a\u4f18\u5148\u4f7f\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u786e\u5b9a\u53ea\u4f1a\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," \u5efa\u8bae\u4f7f\u7528 HASH"),(0,r.kt)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u6bd4 B-tree \u5c11\uff0c\u901f\u5ea6\u66f4\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u53d7\u503c\u957f\u5ea6\u5f71\u54cd"))),(0,r.kt)("li",{parentName:"ul"},"GiST",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8c\u7ef4\u6570\u636e - ",(0,r.kt)("inlineCode",{parentName:"li"},"<<"),",",(0,r.kt)("inlineCode",{parentName:"li"},"&<"),",",(0,r.kt)("inlineCode",{parentName:"li"},"&>"),",",(0,r.kt)("inlineCode",{parentName:"li"},">>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"<<|"),",",(0,r.kt)("inlineCode",{parentName:"li"},"&<|"),",",(0,r.kt)("inlineCode",{parentName:"li"},"|&>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"|>>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"@>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"<@"),",",(0,r.kt)("inlineCode",{parentName:"li"},"~="),",",(0,r.kt)("inlineCode",{parentName:"li"},"&&")),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 nearest-neighbor/\u4e34\u8fd1 \u641c\u7d22 - ",(0,r.kt)("inlineCode",{parentName:"li"},"location <-> point '(101,456)'")))),(0,r.kt)("li",{parentName:"ul"},"SP-GiST - Space partitioned GiST",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"non-balanced disk-based data structures",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"quadtrees, k-d trees, and radix trees (tries)"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8c\u7ef4\u70b9 - ",(0,r.kt)("inlineCode",{parentName:"li"},"<<"),",",(0,r.kt)("inlineCode",{parentName:"li"},">>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"~="),",",(0,r.kt)("inlineCode",{parentName:"li"},"<@"),",",(0,r.kt)("inlineCode",{parentName:"li"},"<^"),",",(0,r.kt)("inlineCode",{parentName:"li"},">^")),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 nearest-neighbor"))),(0,r.kt)("li",{parentName:"ul"},"GIN - inverted indexes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9006\u5411\u7d22\u5f15 - \u9002\u7528\u4e8e\u7c7b\u4f3c\u6570\u7ec4\u8fd9\u6837\u7684\u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<@"),",",(0,r.kt)("inlineCode",{parentName:"li"},"@>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"="),",",(0,r.kt)("inlineCode",{parentName:"li"},"&&")))),(0,r.kt)("li",{parentName:"ul"},"BRIN - Block Range INdexes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"store summaries about the values stored in consecutive physical block ranges"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u8fde\u7eed\u76f8\u90bb\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<"),",",(0,r.kt)("inlineCode",{parentName:"li"},"<="),",",(0,r.kt)("inlineCode",{parentName:"li"},"="),",",(0,r.kt)("inlineCode",{parentName:"li"},">="),",",(0,r.kt)("inlineCode",{parentName:"li"},">")))),(0,r.kt)("li",{parentName:"ul"},"Bloom - ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE EXTENSION bloom;")),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u8868\u8fbe\u5f0f\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u552f\u4e00\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u5217\u7d22\u5f15")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4ece\u65e7\u7248\u672c pg_upgrade \u5347\u7ea7\u540e\u9700\u8981 REINDEX \u624d\u4f1a\u5229\u7528\u5230\u65b0\u7684\u7d22\u5f15\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"VACUUM FULL \u4f1a\u91cd\u5efa\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL 13 BTree \u7d22\u5f15\u4f1a\u53bb\u91cd - \u51cf\u5c11\u78c1\u76d8\u548c\u5185\u5b58\u7a7a\u95f4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e0c\u671b\u65e7\u7248\u672c\u884c\u4e3a\uff0c\u53ef\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"deduplicate_items=off")))),(0,r.kt)("li",{parentName:"ul"},"null \u4e0d\u60f3\u7b49 - \u56e0\u6b64\u4e0d\u4f1a\u7b97\u5728 unique")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"UNIQUE INDEX \u53ea\u80fd\u4f7f\u7528 B-tree"),(0,r.kt)("li",{parentName:"ul"},"\u6392\u5e8f\u53ea\u80fd B-tree"),(0,r.kt)("li",{parentName:"ul"},"\u6392\u5e8f\u9690\u542b NULLS LAST, \u9ed8\u8ba4 ASC NULLS LAST - \u56e0\u6b64\u9ed8\u8ba4 DESC NULLS LAST ",(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u4f1a"),"\u7528\u5230\u7d22\u5f15")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Hash \u7d22\u5f15\nCREATE INDEX name ON table USING HASH (column);\n-- \u5982\u679c\u60f3\u8981 Hash unique \u53ef\u4ee5\u4f7f\u7528 constraint\n-- \u4f46 ON CONFLICT \u9700\u8981\u4f7f\u7528 constraint \u540d\u5b57\uff0cpg \u4e0d\u80fd\u81ea\u5df1\u63a8\u5bfc\nalter table tab add constraint cst_exc_id exclude using hash (id with =);\n\n-- \u5185\u7f6e Hash \u51fd\u6570\nSELECT hashtext('text'),\n       hashchar('c'),\n       hash_array(array [1,2,3]),\n       jsonb_hash('{\n         \"me\": \"haki\"\n       }'::jsonb),\n       timestamp_hash(now()::timestamp);\n\n-- \u4e34\u8fd1\u641c\u7d22\nSELECT * FROM places ORDER BY location <-> point '(101,456)' LIMIT 10;\n-- \u7d22\u5f15\u652f\u6301 ORDER \u548c NULL \u987a\u5e8f\nCREATE INDEX test3_desc_index ON test3 (id DESC NULLS LAST);\n\n-- \u7d22\u5f15\u6dfb\u52a0\u989d\u5916\u503c - \u53ef\u4ee5\u8ba9\u5e38\u7528\u67e5\u8be2\u53ea\u9700\u8981\u8d70\u7d22\u5f15\nCREATE INDEX idx_cust2 ON customer(active) INCLUDE (email);\n\n\n-- \u67e5\u627e\u91cd\u590d\u7d22\u5f15\n  SELECT array_agg(indexname) AS indexes, replace(indexdef, indexname, '') AS defn\n    FROM pg_indexes\nGROUP BY defn\n  HAVING count(*) > 1;\n\n-- \u7d22\u5f15\u4f7f\u7528\u60c5\u51b5\nSELECT relname, indexrelname, idx_scan\nFROM   pg_catalog.pg_stat_user_indexes\nWHERE  schemaname = 'public';\n\n-- \u5e76\u884c\u6784\u5efa\u7d22\u5f15\n\nSET max_parallel_workers = 32;\nSET max_parallel_maintenance_workers = 16;\n\nCREATE INDEX CONCURRENTLY idx_address1 ON address(district);\n")),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"access-method-hash-does-not-support-unique-indexes"},'access method "hash" does not support unique indexes'),(0,r.kt)("p",null,"\u652f\u6301 BTree \u53ef\u4ee5 create unique index"),(0,r.kt)("h2",{id:"\u91cd\u590d\u503c\u7d22\u5f15"},"\u91cd\u590d\u503c\u7d22\u5f15"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PG 13 BTree \u4f1a\u53bb\u91cd\uff0c\u662f\u6bd4\u8f83\u597d\u7684\u9009\u62e9"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u6570\u91cf\u5dee\u5f02\u60c5\u51b5\uff0c\u53ef\u4ee5\u9009\u62e9\u90e8\u5206\u7d22\u5f15")))}u.isMDXComponent=!0}}]);