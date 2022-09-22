"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21617],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return N}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),N=r,k=c["".concat(p,".").concat(N)]||c[N]||m[N]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return N},default:function(){return A},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return T}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e};const c={title:"Postgresql Scale"},N="Postgresql Scale",k={unversionedId:"db/relational/postgresql/postgresql-scale",id:"db/relational/postgresql/postgresql-scale",title:"Postgresql Scale",description:"- scale up",source:"@site/../notes/db/relational/postgresql/postgresql-scale.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/scale",permalink:"/notes/db/relational/postgresql/scale",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-scale.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656205646,formattedLastUpdatedAt:"Jun 26, 2022",frontMatter:{title:"Postgresql Scale"},sidebar:"docs",previous:{title:"PostgreSQL Replicate",permalink:"/notes/db/relational/postgresql/replication"},next:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/sql-faq"}},d={},T=[{value:"Story",id:"story",level:2},{value:"Table Partitioning",id:"table-partitioning",level:2},{value:"Logical Repolication",id:"logical-repolication",level:2}],E={toc:T};function A(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},E),s),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"postgresql-scale"}),"Postgresql Scale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"scale up",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5806\u786c\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"scale out replicas",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"pub/sub"))),(0,a.kt)("li",{parentName:"ul"},"scale out sharding",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u7247 - \u591a\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5206\u7247 - \u903b\u8f91\u6620\u5c04",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u63a7\u6027\u9ad8\u3001\u7279\u6b8a\u573a\u666f"))),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5206\u7247 - cdb\u3001citus",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7b80\u5355\u3001\u8981\u6c42\u4f7f\u7528 patten \u7b26\u5408")))))),(0,a.kt)("admonition",m({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"PostgreSQL \u5e76\u4e0d\u662f OLAP \u6570\u636e\u5e93\uff0c\u80fd\u529b\u6709\u4e0a\u9650\uff0c\u5f53\u53d1\u73b0\u6709\u66f4\u591a\u7684\u65f6\u95f4\u548c\u8d44\u6e90\u6295\u5165 \u6570\u636e\u4ed3\u5e93 \u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u9009\u62e9\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u4ed3\u6570\u636e\u5e93\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"backup",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/pgbackrest/pgbackrest"}),"pgbackrest"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT, perl & C"),(0,a.kt)("li",{parentName:"ul"},"by Crunchy Data"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/notes/db/relational/postgresql/wal-g"}),"wal-g"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"by Citus Data, Apache-2.0, Go"))),(0,a.kt)("li",{parentName:"ul"},"Barman",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2ndQuadrant, GPL v 3.0, python"),(0,a.kt)("li",{parentName:"ul"},"basebackup & rsync"))),(0,a.kt)("li",{parentName:"ul"},"pg_probackup",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"by Postgres Professional, PostgreSQL License, C"))),(0,a.kt)("li",{parentName:"ul"},"BART"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.postgresql.eu/events/pgconfeu2018/sessions/session/2098/slides/123/Advanced%20backup%20methods.pdf"}),"Advanced PostgreSQL backup & recovery methods"))),(0,a.kt)("h2",m({},{id:"story"}),"Story"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gitlab \u56e0\u4e3a License \u95ee\u9898\u653e\u5f03 Citus ",(0,a.kt)("a",m({parentName:"li"},{href:"https://about.gitlab.com/handbook/engineering/development/enablement/data_stores/database/doc/citus.html"}),"Sharding GitLab with CitusDB")),(0,a.kt)("li",{parentName:"ul"},"Gitlab PostgreSQL Partitioning with FDW",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://about.gitlab.com/handbook/engineering/development/enablement/data_stores/database/doc/fdw-sharding.html"}),"PostgreSQL 11 sharding with foreign data wrappers and partitioning"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u4e3a foreign server \u8fde\u63a5\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u597d\u7ef4\u62a4 schema"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u672c\u5730 foreign key"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u4e0d\u4f1a push down \u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u6027\u80fd\u964d\u4f4e"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u548c\u8ba1\u5212\u65f6\u95f4\u589e\u52a0"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5206\u7247\u90fd\u9700\u8981 HA \u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 parallel scan"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u6027\u80fd\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5168\u5c40\u4e8b\u52a1")))))))),(0,a.kt)("h2",m({},{id:"table-partitioning"}),"Table Partitioning"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6027\u80fd\u63d0\u5347",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4e3b\u8981\u67e5\u8be2\u7684\u6570\u636e\u90fd\u5728\u4e00\u4e2a\u5206\u7247\u91cc\u65f6\uff0c\u7d22\u5f15\u52a0\u8f7d\u5230\u5185\u5b58\u4f7f\u7528\u7387\u66f4\u9ad8"))),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u66f4\u65b0\u548c\u67e5\u8be2\u5355\u4e2a\u5206\u7247\u65f6\u6027\u80fd\u63d0\u5347",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u53ef\u80fd\u901a\u8fc7 seq scan \u800c\u4e0d\u9700\u8981\u4f7f\u7528\u7d22\u5f15\uff0c\u5bfc\u81f4\u968f\u673a\u8bbf\u95ee"))),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u64cd\u4f5c\u5206\u7247\u8868\u6765\u6279\u91cf\u64cd\u4f5c\u6570\u636e\uff0c\u6027\u80fd\u5927\u5e45\u5ea6\u63d0\u9ad8"),(0,a.kt)("li",{parentName:"ul"},"\u8f83\u5c11\u4f7f\u7528\u7684\u5206\u7247\u53ef\u79fb\u5230\u66f4\u4fbf\u5b9c\u7684\u5b58\u50a8\u4e0a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f53\u5355\u8868\u5927\u5c0f\u8d85\u8fc7\u7269\u7406\u5185\u5b58\u65f6\uff0c\u5efa\u8bae\u5206\u8868")),(0,a.kt)("admonition",m({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u8868\u7d22\u5f15\u4e0d\u53ef\u4ee5 CONCURRENTLY",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9664\u975e\u5148 DETACH"))),(0,a.kt)("li",{parentName:"ul"},"\u5206\u8868\u53ef\u4ee5\u521b\u5efa CREATE INDEX ON ONLY",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u540e\u7d22\u5f15\u662f\u65e0\u6548\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5355\u72ec\u5206\u7247\u4e0a\u521b\u5efa\u7136\u540e ATTACH"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u5f0f\u6765\u521b\u5efa UNIQUE \u548c PRIMARY KEY"))),(0,a.kt)("li",{parentName:"ul"},"\u6709\u65f6\u5019\u8868\u7ee7\u627f\u6bd4\u5206\u7247\u66f4\u597d\u7528"))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u552f\u4e00 \u9650\u5236\u5fc5\u987b\u5305\u542b\u6240\u6709 partition key columns"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u521b\u5efa\u8de8\u8868 exclusion constraint",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8de8\u5206\u7247\u9650\u5236"))),(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9 INSERT \u7684 BEFORE ROW \u89e6\u53d1\u5668\u65e0\u6cd5\u66f4\u6539\u5206\u7247"),(0,a.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u8868\u548c\u6301\u4e45\u8868\u4e0d\u53ef\u4ee5\u6df7\u7528"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5206\u8868\u7b56\u7565")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8303\u56f4 - \u4f8b\u5982 \u65f6\u95f4\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u5217\u8868 - \u4f8b\u5982 \u5e74\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u54c8\u5e0c - \u4f8b\u5982 UUID \u5b57\u6bb5")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u7b56\u7565")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4f7f\u7528\u573a\u666f\u7684\u51b7\u70ed\u6570\u636e\u533a\u5206 - \u4f8b\u5982 \u6700\u8fd1\u4e00\u5468\u6570\u636e\u5355\u72ec\u8868"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6570\u636e\u672c\u8eab\u7684\u903b\u8f91\u7ed3\u6784\u533a\u5206 - \u4f8b\u5982 \u533a\u57df\u3001\u5e74\u4efd")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"-- RANGE \u5206\u7247\n-- \u521b\u5efa\u865a\u62df\u8868\nCREATE TABLE measurement (\n    city_id         int not null,\n    logdate         date not null,\n    peaktemp        int,\n    unitsales       int\n) PARTITION BY RANGE (logdate);\n\n-- LIST \u5206\u7247\nCREATE TABLE cities (\n    city_id      bigserial not null,\n    name         text not null,\n    population   bigint\n) PARTITION BY LIST (left(lower(name), 1));\n-- LIST \u5b50\u8868\nCREATE TABLE cities_ab\n    PARTITION OF cities (\n    CONSTRAINT city_id_nonzero CHECK (city_id != 0)\n) FOR VALUES IN ('a', 'b');\n-- \u9ed8\u8ba4\u5206\u7247\nCREATE TABLE cities_partdef\n    PARTITION OF cities DEFAULT;\n\n-- HASH \u5206\u7247\nCREATE TABLE orders (\n    order_id     bigint not null,\n    cust_id      bigint not null,\n    status       text\n) PARTITION BY HASH (order_id);\n-- HASH \u5b50\u8868\nCREATE TABLE orders_p1 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 0);\nCREATE TABLE orders_p2 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 1);\nCREATE TABLE orders_p3 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 2);\nCREATE TABLE orders_p4 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 3);\n\n-- \u53ef\u76f4\u63a5\u521b\u5efa\u7d22\u5f15 - \u5f53\u589e\u52a0\u5206\u7247\u65f6\u4f1a\u5bf9\u5206\u7247\u52a0\u7d22\u5f15\nCREATE INDEX ON measurement (logdate);\n\nCREATE TABLE measurement_y2006m02 PARTITION OF measurement\n    FOR VALUES FROM ('2006-02-01') TO ('2006-03-01');\n-- \u53ef\u4fee\u6539 TABLESPACE \u9009\u62e9\u4e0d\u540c\u5b58\u50a8\u4ecb\u8d28\nCREATE TABLE measurement_y2006m03 PARTITION OF measurement\n    FOR VALUES FROM ('2006-03-01') TO ('2006-04-01')\n    TABLESPACE fasttablespace;;\n\n-- \u5206\u7247\u8868\u53ef\u4ee5\u518d\u5206\u7247\nCREATE TABLE measurement_y2006m02 PARTITION OF measurement\n    FOR VALUES FROM ('2006-02-01') TO ('2006-03-01')\n    PARTITION BY RANGE (peaktemp);\n\n-- \u53d6\u4fdd\u5f00\u542f\u5206\u7247\u88c1\u526a\u914d\u7f6e - \u9ed8\u8ba4\u5f00\u542f\nselect * from pg_settings where name='enable_partition_pruning';\n\n-- \u53ef\u4ee5\u76f4\u63a5\u5220\u9664\u5206\u7247\u8868 - \u4f1a\u9501\u4e3b\u8868\nDROP TABLE measurement_y2006m02;\n-- \u53ef\u4ee5\u6392\u9664\u5206\u7247\nALTER TABLE measurement DETACH PARTITION measurement_y2006m02;\n\n\n-- \u5355\u72ec\u521b\u5efa\u5206\u7247\uff0c\u6dfb\u52a0\u6821\u9a8c\uff0c\u5bfc\u5165\u6570\u636e\uff0c\u52a0\u5165\u5230\u5206\u7247\nCREATE TABLE measurement_y2008m02\n  (LIKE measurement INCLUDING DEFAULTS INCLUDING CONSTRAINTS)\n  TABLESPACE fasttablespace;\n-- \u63d0\u524d\u521b\u5efa\u597d CONSTRAINT - \u5426\u5219 ATTACH \u65f6\u8fd8\u662f\u4f1a\u521b\u5efa\u4e14\u9700\u8981 ACCESS EXCLUSIVE\nALTER TABLE measurement_y2008m02 ADD CONSTRAINT y2008m02\n   CHECK ( logdate >= DATE '2008-02-01' AND logdate < DATE '2008-03-01' );\n\\copy measurement_y2008m02 from 'measurement_y2008m02'\n-- possibly some other data preparation work\n-- SHARE UPDATE EXCLUSIVE\n-- ATTACH \u540e\u53ef\u4ee5\u5220\u9664\u521b\u5efa\u7684 CHECK\n-- \u5982\u679c\u6709 DEFAULT \u4e5f\u4f1a\u68c0\u67e5\uff0c\u9664\u975e\u521b\u5efa\u4e86\u6392\u9664 CHECK\nALTER TABLE measurement ATTACH PARTITION measurement_y2008m02\n    FOR VALUES FROM ('2008-02-01') TO ('2008-03-01' );\n")),(0,a.kt)("h2",m({},{id:"logical-repolication"}),"Logical Repolication"),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u590d\u5236 schema"))))}A.isMDXComponent=!0}}]);