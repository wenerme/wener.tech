"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68331],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"Citus Columnar"},u="Citus Columnar",c={unversionedId:"db/relational/postgresql/citus-columnar",id:"db/relational/postgresql/citus-columnar",title:"Citus Columnar",description:"- src/backend/columnar",source:"@site/../notes/db/relational/postgresql/citus-columnar.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/citus-columnar",permalink:"/notes/db/relational/postgresql/citus-columnar",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/postgresql/citus-columnar.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660268591,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{title:"Citus Columnar"},sidebar:"docs",previous:{title:"PostgresSQL",permalink:"/notes/db/relational/postgresql/"},next:{title:"Citus Version",permalink:"/notes/db/relational/postgresql/citus-version"}},s={},p=[{value:"Chunk Group Filtering",id:"chunk-group-filtering",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"citus-columnar"},"Citus Columnar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/citusdata/citus/tree/master/src/backend/columnar"},"src/backend/columnar")),(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u884d\u751f\u81ea ORC\uff0c\u4f46\u5143\u6570\u636e\u5728 PG\uff0c\u80fd\u4e8b\u52a1\u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2021/03/06/citus-10-columnar-compression-for-postgres/"},"Citus 10 brings columnar compression to Postgres"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No UPDATE or DELETE"),(0,l.kt)("li",{parentName:"ul"},"No logical replication or logical decoding"),(0,l.kt)("li",{parentName:"ul"},"btree and hash indexe"),(0,l.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 cstore_fdw"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26369305"},"HN"))))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/citusdata/citus/issues/4742"},"#4742")," unlogged"),(0,l.kt)("li",{parentName:"ul"},"\u5728 I/O-bound \u975e\u5e38\u6709\u7528, CPU-bound \u573a\u666f\u80af\u5b9a\u6bd4\u4e0d\u8fc7\u4e13\u95e8\u4e3a column \u8bbe\u8ba1\u7684\u6267\u884c\u5f15\u64ce"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE contestant (\n    handle TEXT,\n    birthdate DATE,\n    rating INT,\n    percentile FLOAT,\n    country CHAR(3),\n    achievements TEXT[]\n) USING columnar;\n\n\n-- \u8f6c\u6362\u4e3a \u884c \u5b58\u50a8\nSELECT alter_table_set_access_method('contestant', 'heap');\n-- \u8f6c\u6362\u4e3a \u5217 \u5b58\u50a8 - index \u4f1a\u88ab drop\nSELECT alter_table_set_access_method('contestant', 'columnar');\n\nVACUUM VERBOSE contestant;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5355\u884c\u6570\u636e\u91cf\u5927\u65f6\uff0c\u51cf\u5c11\u52a0\u8f7d\u5230\u5185\u5b58\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5927\u6570\u636e\u5206\u6790 - \u5b9a\u65f6\u751f\u6210\u8868"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u975e\u5e38\u591a\u7684\u4f7f\u7528\u9650\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Append-only - \u4e0d\u53ef\u66f4\u65b0\u548c\u5220\u9664"),(0,l.kt)("li",{parentName:"ul"},"Rollback \u4e5f\u4e0d\u4f1a\u6062\u590d\u5df2\u5199\u5165\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 hash \u548c btree \u7d22\u5f15"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 index scan, bitmap index scan"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 tiscan"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 sample scan"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 toast - inline \u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 onconflict - \u652f\u6301\u7eaf DO NOTHING"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u9501 - SELECT \u2026 FOR SHARE, SELECT \u2026 FOR UPDATE"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 serializable isolation level"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 foreign keys, unique constraints, exclusion constraints"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 logical decoding"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 intra-node parallel scans"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 AFTER \u2026 FOR EACH ROW trigger"),(0,l.kt)("li",{parentName:"ul"},"\u65e0 UNLOGGED, TEMPORARY"))),(0,l.kt)("li",{parentName:"ul"},"strip",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"150000 rows/strip - alter_columnar_table_set \u53ef\u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u5355\u4f4d"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e8b\u52a1\u4f1a\u521b\u5efa - \u5982\u679c\u4e00\u4e2a\u4e8b\u52a1\u53ea\u63d2\u5165\u4e00\u6761\u4e5f\u4f1a\u521b\u5efa\u4e00\u4e2a strip",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u6279\u91cf\u63d2\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u5f88\u591a\u5c0f strip\uff0c\u8868\u662f\u65e0\u6cd5\u4fee\u590d\u7684\uff0c\u53ea\u80fd\u4ece\u65b0 INSERT INTO SELECT")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u4fee\u590d\u8868"',title:'"\u4fee\u590d\u8868"'},"BEGIN;\nCREATE TABLE foo_compacted (LIKE foo) USING columnar;\nINSERT INTO foo_compacted SELECT * FROM foo;\nDROP TABLE foo;\nALTER TABLE foo_compacted RENAME TO foo;\nCOMMIT;\n")),(0,l.kt)("h2",{id:"chunk-group-filtering"},"Chunk Group Filtering"))}d.isMDXComponent=!0}}]);