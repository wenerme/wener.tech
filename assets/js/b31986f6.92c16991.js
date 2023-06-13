"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98674],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return N}});var l=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),s=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),k=s(a),N=n,d=k["".concat(p,".").concat(N)]||k[N]||m[N]||r;return a?l.createElement(d,i(i({ref:t},o),{},{components:a})):l.createElement(d,i({ref:t},o))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5576:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return N},default:function(){return b},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return v}});var l=a(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&o(e,a,t[a]);if(u)for(var a of u(t))s.call(t,a)&&o(e,a,t[a]);return e};const k={title:"Database FAQ",tags:["FAQ"]},N="Database FAQ",d={unversionedId:"db/db-faq",id:"db/db-faq",title:"Database FAQ",description:"How to choose database",source:"@site/../notes/db/db-faq.md",sourceDirName:"db",slug:"/db/faq",permalink:"/notes/db/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/db-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"Database FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"DSN",permalink:"/notes/db/dsn"},next:{title:"\u6570\u636e\u5e93\u672f\u8bed",permalink:"/notes/db/glossary"}},c={},v=[{value:"How to choose database",id:"how-to-choose-database",level:2},{value:"Tradeoff OLTP vs OLAP vs NoSQL",id:"tradeoff-oltp-vs-olap-vs-nosql",level:2},{value:"OLTP vs OLAP vs NoSQL vs NewSQL vs Data Warehouse vs Data Mart vs Data Lake",id:"oltp-vs-olap-vs-nosql-vs-newsql-vs-data-warehouse-vs-data-mart-vs-data-lake",level:2},{value:"OLTP vs OLAP",id:"oltp-vs-olap",level:2},{value:"page size",id:"page-size",level:2},{value:"MySQL vs MariaDB",id:"mysql-vs-mariadb",level:2},{value:"\u4e3a\u4ec0\u4e48\u4e0d\u8981\u9009\u62e9 MySQL",id:"\u4e3a\u4ec0\u4e48\u4e0d\u8981\u9009\u62e9-mysql",level:2},{value:"\u8f6f\u5220\u9664\u5b9e\u73b0\u552f\u4e00\u7d22\u5f15",id:"\u8f6f\u5220\u9664\u5b9e\u73b0\u552f\u4e00\u7d22\u5f15",level:2},{value:"mongodb vs postgresql",id:"mongodb-vs-postgresql",level:2}],f={toc:v};function b(e){var t,a=e,{components:n}=a,o=((e,t)=>{var a={};for(var l in e)p.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&u)for(var l of u(e))t.indexOf(l)<0&&s.call(e,l)&&(a[l]=e[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(t=m(m({},f),o),r(t,i({components:n,mdxType:"MDXLayout"}))),(0,l.kt)("h1",m({},{id:"database-faq"}),"Database FAQ"),(0,l.kt)("h2",m({},{id:"how-to-choose-database"}),"How to choose database"),(0,l.kt)("admonition",m({},{type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"90% \u573a\u666f\u9009\u62e9 PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u8003\u8651 ",(0,l.kt)("strong",{parentName:"li"},"\u5782\u76f4")," \u6269\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"delay \u95ee\u9898"))))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u573a\u666f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OLTP \u5173\u7cfb\u578b - PostgreSQL, MySQL"),(0,l.kt)("li",{parentName:"ul"},"NoSQL \u6027\u80fd\u578b - KV, Memory Grid"),(0,l.kt)("li",{parentName:"ul"},"OLAP \u5206\u6790\u578b - Column"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Graph"),(0,l.kt)("li",{parentName:"ul"},"Document - MongoDB, FerratDB"),(0,l.kt)("li",{parentName:"ul"},"Search - OpenSearch, ",(0,l.kt)("a",m({parentName:"li"},{href:"/notes/db/search/solr"}),"solr"),", ",(0,l.kt)("a",m({parentName:"li"},{href:"/notes/db/search/manticoresearch"}),"manticoresearch")),(0,l.kt)("li",{parentName:"ul"},"Auth/Zanzibar - spicedb"),(0,l.kt)("li",{parentName:"ul"},"MBaaS/Mobile - CouchDB, supabase, hasura, prisma, strapi"),(0,l.kt)("li",{parentName:"ul"},"Secret/Security - Vault"),(0,l.kt)("li",{parentName:"ul"},"Logging"),(0,l.kt)("li",{parentName:"ul"},"Metrics"),(0,l.kt)("li",{parentName:"ul"},"Treacing")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u6a21\u5f0f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cbe\u51c6\u8bbf\u95ee - KV, OLTP"),(0,l.kt)("li",{parentName:"ul"},"\u6279\u91cf\u8bbf\u95ee - OLAP"),(0,l.kt)("li",{parentName:"ul"},"\u4fbf\u5229\u5173\u7cfb - Graph"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u5206\u6295\u5c04 - Column")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5206\u5e03\u5f0f - \u5982\u679c\u8981\u4f18\u5148\u8003\u8651\u5206\u5e03\u5f0f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Citus"),(0,l.kt)("li",{parentName:"ul"},"Clickhouse, Scylldb"),(0,l.kt)("li",{parentName:"ul"},"OpenSearch")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u805a\u5408\u5206\u6790 - \u8ba1\u7b97\u3001\u7f13\u5b58\u3001\u5206\u6790")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cubejs, superset, trino")),(0,l.kt)("h2",m({},{id:"tradeoff-oltp-vs-olap-vs-nosql"}),"Tradeoff OLTP vs OLAP vs NoSQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OLTP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ACID \u5fc5\u987b"),(0,l.kt)("li",{parentName:"ul"},"Latency",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"90% < 100ms"),(0,l.kt)("li",{parentName:"ul"},"99% < 1s"))),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"90% < 1G"),(0,l.kt)("li",{parentName:"ul"},"99% < 1T"))),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u67e5\u8be2\u547d\u4e2d\u7d22\u5f15"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u67e5\u8be2\u4e3a\u7cbe\u51c6\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"OLAP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Latency",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"50% < 1s"),(0,l.kt)("li",{parentName:"ul"},"90% > 1m"))),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"90% > 1T"))),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u67e5\u8be2\u8bbf\u95ee\u5927\u91cf\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c \u9ed8\u8ba4\u652f\u6301\u5206\u5e03\u5f0f"))),(0,l.kt)("li",{parentName:"ul"},"NoSQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u4ee5\u547d\u4e2d\u5185\u5b58\u4e3a\u4e3b"),(0,l.kt)("li",{parentName:"ul"},"KV \u65b9\u5f0f\u67e5\u8be2\u4e3a\u4e3b"),(0,l.kt)("li",{parentName:"ul"},"\u6ee1\u8db3\u7279\u6b8a\u9700\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c \u9ed8\u8ba4\u652f\u6301\u5206\u5e03\u5f0f")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u6848\u4f8b: 8G \u5c0f\u6587\u4ef6\u6570\u636e, hash -> blob"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ClickHouse < 1m"),(0,l.kt)("li",{parentName:"ul"},"ScyllaDB - \u89e6\u53d1 large data \u8b66\u544a, \u89e6\u53d1\u5199\u8d85\u65f6")),(0,l.kt)("h2",m({},{id:"oltp-vs-olap-vs-nosql-vs-newsql-vs-data-warehouse-vs-data-mart-vs-data-lake"}),"OLTP vs OLAP vs NoSQL vs NewSQL vs Data Warehouse vs Data Mart vs Data Lake"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OLTP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u4ea4\u6613\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u4e8b\u52a1\uff0c\u5f3a\u4e00\u81f4\uff0c\u8f83\u4f4e RT\uff0c\u4f4e\u9891\u5ea6\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5b9e\u65f6\u6570\u636e\uff0c\u6570\u636e\u91cf\u5c0f"))),(0,l.kt)("li",{parentName:"ul"},"OLAP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u5206\u6790\u62a5\u8868\u7edf\u8ba1\uff0c\u4ee5\u8bfb\u4e3a\u4e3b"),(0,l.kt)("li",{parentName:"ul"},"\u5f31\u4e8b\u52a1\uff0c\u5f31\u4e00\u81f4\u6027\uff0c\u5bf9\u54cd\u5e94\u6709\u4e00\u5b9a\u8981\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u660e\u7ec6\u6570\u636e\uff0c\u5386\u53f2\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927"))),(0,l.kt)("li",{parentName:"ul"},"NoSQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e94\u4ed8\u7279\u6b8a\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a\u541e\u5410\u3001\u5ef6\u65f6\u3001\u64cd\u4f5c\u4fbf\u643a\u3001\u6570\u636e\u91cf\u3001\u5b9e\u65f6\u3001\u5e76\u53d1\u3001\u641c\u7d22\u3001\u5916\u90e8\u96c6\u6210\u3001\u6570\u636e\u7ec4\u7ec7\u6a21\u5f0f\uff08\u56fe\u3001\u7a7a\u95f4\u3001\u65f6\u5e8f\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u5f62\u5f0f\u5404\u4e0d\u76f8\u540c\uff0c\u4e8b\u52a1\u4fdd\u969c\u5404\u90e8\u76f8\u540c"))),(0,l.kt)("li",{parentName:"ul"},"NewSQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u662f SQL \u6807\u51c6\u7684 NoSQL"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709 OLTP \u7684\u5c5e\u6027\uff0c\u80fd\u6a2a\u5411\u6269\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c SQL \u5f15\u64ce + \u5206\u5e03\u5f0f KV \u5b58\u50a8\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4f1a\u5b9e\u73b0 MySQL \u6216 PostgreSQL \u7684\u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Data_warehouse"}),"Data Warehouse"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7eac\u5ea6\u7684\u6570\u636e\u7ba1\u63a7"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5957\u7cfb\u7edf\uff0c\u4f53\u7cfb\u5316\u7684\u89e3\u51b3\u4f01\u4e1a\u5185\u90e8\u6570\u636e\u5b58\u50a8\u3001\u5904\u7406\u3001\u5206\u6790\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5de8\u5927\uff0c\u5bf9\u54cd\u5e94\u8981\u6c42\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u5e73\u53f0\uff0c\u7531\u5f88\u591a\u90e8\u5206\u7ec4\u6210\uff0c\u6709\u5f00\u53d1\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u5f00\u53d1\u548c BI"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u4f01\u4e1a\u6574\u4f53"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6709\u4e00\u5b9a\u7ed3\u6784"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Data_mart"}),"Data Mart"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u4ed3\u5e93\u7684\u4e00\u79cd\u7279\u6b8a\u5f62\u5f0f\uff0c\u6570\u636e\u4ed3\u5e93\u7684\u5b50\u96c6"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u4e1a\u52a1\u3001\u7ec4\u7ec7\u90e8\u95e8\u3001\u67d0\u4e00\u9886\u57df"),(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5185\u4e00\u5b9a\u6570\u636e\u5171\u4eab\uff0c\u6570\u636e\u5177\u6709\u7ed3\u6784\u6027"))),(0,l.kt)("li",{parentName:"ul"},"Data Lake",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u539f\u59cb\u6570\u636e\uff0c\u4fdd\u6301\u4f4e\u5ec9\u7684\u5b58\u50a8\u6210\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u89c4\u6a21\u548c\u6570\u636e\u91cf\u6bd4 DW \u5927\uff0c\u5904\u7406\u66f4\u6162\uff0c\u8bfb\u53d6\u65f6\u5b9a\u4e49\u6570\u636e\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"Hadoop \u662f DL\uff0c\u800c\u5728\u8fd9\u4e4b\u4e0a\u7684 HBase \u5219\u662f DW"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6570\u636e\u4e0d\u5141\u8bb8\u66f4\u65b0")))),(0,l.kt)("h2",m({},{id:"oltp-vs-olap"}),"OLTP vs OLAP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://www.stitchdata.com/resources/oltp-vs-olap/"}),"https://www.stitchdata.com/resources/oltp-vs-olap/"))),(0,l.kt)("h2",m({},{id:"page-size"}),"page size"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sqlite - 4096 - 4k"),(0,l.kt)("li",{parentName:"ul"},"postgres - 8192 - 8k"),(0,l.kt)("li",{parentName:"ul"},"mysql innodb 16k",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"innodb_page_size")))),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"-- SQLite\nPRAGMA page_size;\n-- PostgreSQL\nSELECT current_setting('block_size');\n-- MySQL\nSHOW TABLE STATUS;\n")),(0,l.kt)("h2",m({},{id:"mysql-vs-mariadb"}),"MySQL vs MariaDB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GUID \u4e0d\u540c"),(0,l.kt)("li",{parentName:"ul"},"Prefer MariaDB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AlpineLinux \u4e0b mysql \u4e3a mariadb"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",m({parentName:"li"},{href:"https://blog.devart.com/mysql-vs-mariadb.html"}),"https://blog.devart.com/mysql-vs-mariadb.html"))))),(0,l.kt)("h2",m({},{id:"\u4e3a\u4ec0\u4e48\u4e0d\u8981\u9009\u62e9-mysql"}),"\u4e3a\u4ec0\u4e48\u4e0d\u8981\u9009\u62e9 MySQL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u4f1a\u9009\u62e9 MySQL")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u4eba\u5458\u7ecf\u5386\u5927\u591a\u8fd8\u505c\u7559\u5728 MySQL 5.7"),(0,l.kt)("li",{parentName:"ol"},"\u5386\u53f2\u9057\u7559\u9879\u76ee"),(0,l.kt)("li",{parentName:"ol"},"\u66fe\u7ecf MySQL \u786e\u5b9e\u662f\u4e0d\u4e8c\u7684\u9009\u62e9"),(0,l.kt)("li",{parentName:"ol"},"\u7528\u4e86\u7279\u6b8a\u7684 MySQL fork"),(0,l.kt)("li",{parentName:"ol"},"Master Slave \u903b\u8f91\u7b80\u5355"),(0,l.kt)("li",{parentName:"ol"},"MyISAM \u6027\u80fd\u597d\uff0c\u867d\u7136\u4e0d ACID")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u4e0d\u8981\u9009\u62e9 MySQL")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u65b0\u9879\u76ee\u9700\u8981\u9009\u62e9 MySQL 8.0 \u90a3\u4e48\u4e0d\u5982\u8003\u8651\u5207\u6362\u5230 PostgreSQL"),(0,l.kt)("li",{parentName:"ol"},"\u8003\u8651 MariaDB \uff1f \u90a3\u4e48\u4e0d\u5982\u8003\u8651 PostgreSQL"),(0,l.kt)("li",{parentName:"ol"},"\u534f\u8bae\u66f4\u4e25\u683c"),(0,l.kt)("li",{parentName:"ol"},"\u7f3a\u5c11\u5f88\u591a SQL \u7279\u6027")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u6ca1\u6709\u6240\u4ee5\u4e0d\u77e5\u9053")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u975e\u5e38\u5f71\u54cd\u9879\u76ee\u5f00\u53d1\u548c\u9009\u9879")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",m({parentName:"p"},{href:"https://www.guru99.com/postgresql-vs-mysql-difference.html"}),"https://www.guru99.com/postgresql-vs-mysql-difference.html")))),(0,l.kt)("h2",m({},{id:"\u8f6f\u5220\u9664\u5b9e\u73b0\u552f\u4e00\u7d22\u5f15"}),"\u8f6f\u5220\u9664\u5b9e\u73b0\u552f\u4e00\u7d22\u5f15"),(0,l.kt)("pre",null,(0,l.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"create temporary table if not exists test\n(\n    id         text        not null default public.gen_ulid() primary key,\n    uid        uuid        not null default gen_random_uuid() unique,\n    eid        text        null,\n    created_at timestamptz not null default current_timestamp,\n    updated_at timestamptz not null default current_timestamp,\n    deleted_at timestamptz,\n\n    username   text        not null\n);\ntruncate table test;\n\n-- \u901a\u5e38\u7684\u552f\u4e00\u7d22\u5f15\ncreate unique index test_username_key on test (username);\n\n-- \u63d2\u5165\u6570\u636e\ninsert into test(username) values ('wener');\n\n-- \u8f6f\u5220\u9664\nupdate test\nset deleted_at=current_timestamp\nwhere username = 'wener';\n\n-- \u63d2\u5165\u5931\u8d25 - \u5df2\u7ecf\u5220\u9664\u7684\u8bb0\u5f55\u5f71\u54cd\u65b0\u6570\u636e\ninsert into test(username) values ('wener');\n-- \u79fb\u9664\u7d22\u5f15\ndrop index test_username_key;\n\n-- postgres \u6761\u4ef6\u7d22\u5f15\u5ffd\u7565\u9488\u5bf9\u672a\u5220\u9664\u7684\u552f\u4e00\n-- postgres 15 \u4e4b\u540e\u652f\u6301\u9488\u5bf9 null \u4e5f\u7b97\u552f\u4e00\uff0c\u521b\u5efa\u8054\u5408\u7d22\u5f15\u5373\u53ef\n-- mysql \u53ef\u4ee5\u4f7f\u7528\u8054\u5408\u7d22\u5f15\uff0c\u5c06 deleted_at \u9ed8\u8ba4\u4e3a 0\ncreate unique index test_username_key on test (username) where deleted_at is null;\n\n-- \u6210\u529f - \u5220\u9664\u6570\u636e\u4e0d\u5f71\u54cd\ninsert into test(username) values ('wener');\n-- \u5931\u8d25 - \u5df2\u7ecf\u5b58\u5728\u4e86\ninsert into test(username) values ('wener');\n-- \u5220\u9664 - \u518d\u6b21\u8f6f\u5220\u9664\nupdate test\nset deleted_at=current_timestamp\nwhere username = 'wener'\n  and deleted_at is null;\n-- \u6210\u529f - \u518d\u6b21\u63d2\u5165\ninsert into test(username) values ('wener');\n\n-- \u4e09\u6761\u8bb0\u5f55\nselect *\nfrom test;\n")),(0,l.kt)("h2",m({},{id:"mongodb-vs-postgresql"}),"mongodb vs postgresql"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MongoDB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SSPL"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863\u6a21\u578b"),(0,l.kt)("li",{parentName:"ul"},"BSON"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u6c34\u5e73\u6269\u5bb9\u8bbe\u8ba1"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u7b80\u5355\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u6587\u6863\u539f\u5b50\u4fee\u6539"))),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PostgreSQL License - \u7c7b\u4f3c MIT"),(0,l.kt)("li",{parentName:"ul"},"\u884c\u6a21\u578b"),(0,l.kt)("li",{parentName:"ul"},"JSONB"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6c34\u5e73\u548c\u5782\u76f4\u6269\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"ACID")))))}b.isMDXComponent=!0}}]);