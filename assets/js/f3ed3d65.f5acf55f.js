"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56023],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,_=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(_,l(l({ref:t},u),{},{components:r})):n.createElement(_,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var n=r(96600),o=r(27279),s=(r(59496),r(49613)),l=["components"],a={title:"cstore_fdw"},c="cstore_fdw",i={unversionedId:"db/relational/postgresql/cstore_fdw",id:"db/relational/postgresql/cstore_fdw",title:"cstore_fdw",description:"- citusdata/cstorefdw",source:"@site/../notes/db/relational/postgresql/cstore_fdw.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/cstore_fdw",permalink:"/notes/db/relational/postgresql/cstore_fdw",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/postgresql/cstore_fdw.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"cstore_fdw"},sidebar:"docs",previous:{title:"Citus",permalink:"/notes/db/relational/postgresql/citus"},next:{title:"FerretDB",permalink:"/notes/db/relational/postgresql/ferretdb"}},u={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cstore_fdw"},"cstore_fdw"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/citusdata/cstore_fdw"},"citusdata/cstore_fdw"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5217\u5b58"))),(0,s.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u4f7f\u7528\u6548\u679c\u4e00\u822c")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"citus 10+ \u5185\u7f6e columnar, \u53d6\u4ee3 cstore_fdw"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f9d\u8d56\u4e8e protobuf-c\n# \u786e\u4fdd pg_config \u5728 PATH \u4e2d\n\ngit clone https://github.com/citusdata/cstore_fdw\ncd cstore_fdw\nmake install\n# /bin/sh /usr/local/lib/postgresql/pgxs/src/makefiles/../../config/install-sh -c -d '/usr/local/lib/postgresql'\n# /bin/sh /usr/local/lib/postgresql/pgxs/src/makefiles/../../config/install-sh -c -d '/usr/local/share/postgresql/extension'\n# /bin/sh /usr/local/lib/postgresql/pgxs/src/makefiles/../../config/install-sh -c -d '/usr/local/share/postgresql/extension'\n# /usr/bin/install -c -m 755  cstore_fdw.so '/usr/local/lib/postgresql/cstore_fdw.so'\n# /usr/bin/install -c -m 644 .//cstore_fdw.control '/usr/local/share/postgresql/extension/'\n# /usr/bin/install -c -m 644 .//cstore_fdw--1.6.sql .//cstore_fdw--1.5--1.6.sql .//cstore_fdw--1.4--1.5.sql .//cstore_fdw--1.3--1.4.sql .//cstore_fdw--1.2--1.3.sql .//cstore_fdw--1.1--1.2.sql .//cstore_fdw--1.0--1.1.sql  '/usr/local/share/postgresql/extension/'\n\n# mac\ncp cstore_fdw.so /usr/local/lib/postgresql/\n\necho \"shared_preload_libraries = 'cstore_fdw'\" >> postgresql.conf\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"-- load extension first time after install\nCREATE EXTENSION cstore_fdw;\n\n-- create server object\nCREATE SERVER cstore_server FOREIGN DATA WRAPPER cstore_fdw;\n\n-- create foreign table\nCREATE FOREIGN TABLE customer_reviews\n(\n    customer_id TEXT,\n    review_date DATE,\n    review_rating INTEGER,\n    review_votes INTEGER,\n    review_helpful_votes INTEGER,\n    product_id CHAR(10),\n    product_title TEXT,\n    product_sales_rank BIGINT,\n    product_group TEXT,\n    product_category TEXT,\n    product_subcategory TEXT,\n    similar_product_ids CHAR(10)[]\n)\nSERVER cstore_server\nOPTIONS(compression 'pglz');\n\nCOPY customer_reviews FROM '/home/user/customer_reviews_1998.csv' WITH CSV;\nCOPY customer_reviews FROM '/home/user/customer_reviews_1999.csv' WITH CSV;\n\nANALYZE customer_reviews;\n\n-- Find all reviews a particular customer made on the Dune series in 1998.\nSELECT\n    customer_id, review_date, review_rating, product_id, product_title\nFROM\n    customer_reviews\nWHERE\n    customer_id ='A27T7HVDXA3K2A' AND\n    product_title LIKE '%Dune%' AND\n    review_date >= '1998-01-01' AND\n    review_date <= '1998-12-31';\n\n-- Do we have a correlation between a book's title's length and its review ratings?\nSELECT\n    width_bucket(length(product_title), 1, 50, 5) title_length_bucket,\n    round(avg(review_rating), 2) AS review_average,\n    count(*)\nFROM\n   customer_reviews\nWHERE\n    product_group = 'Book'\nGROUP BY\n    title_length_bucket\nORDER BY\n    title_length_bucket;\n\nDROP FOREIGN TABLE cstore_table_n;\n\nDROP SERVER cstore_server;\nDROP EXTENSION cstore_fdw;\n")))}f.isMDXComponent=!0}}]);