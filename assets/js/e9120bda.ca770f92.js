"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49439],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return N}});var l=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},o=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),k=u(a),N=r,h=k["".concat(p,".").concat(N)]||k[N]||s[N]||i;return a?l.createElement(h,n(n({ref:t},o),{},{components:a})):l.createElement(h,n({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=k;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,n[1]=m;for(var u=2;u<i;u++)n[u]=a[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},53048:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return N},default:function(){return g},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return d}});var l=a(49613),r=Object.defineProperty,i=Object.defineProperties,n=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&o(e,a,t[a]);if(m)for(var a of m(t))u.call(t,a)&&o(e,a,t[a]);return e};const k={title:"Database Awesome",tags:["Awesome"]},N="Database Awesome",h={unversionedId:"db/db-awesome",id:"db/db-awesome",title:"Database Awesome",description:"| name                 | stand for      |",source:"@site/../notes/db/db-awesome.md",sourceDirName:"db",slug:"/db/awesome",permalink:"/notes/db/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/db-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667302770,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{title:"Database Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"ScyllaDB",permalink:"/notes/db/column/scylladb"},next:{title:"Database FAQ",permalink:"/notes/db/faq"}},c={},d=[{value:"\u7406\u8bba",id:"\u7406\u8bba",level:2},{value:"\u5206\u5e03\u5f0f",id:"\u5206\u5e03\u5f0f",level:2},{value:"\u5b9e\u65f6\u6570\u636e\u5e93",id:"\u5b9e\u65f6\u6570\u636e\u5e93",level:2},{value:"\u65f6\u5e8f",id:"\u65f6\u5e8f",level:2},{value:"OLAP",id:"olap",level:2},{value:"OLTP",id:"oltp",level:2},{value:"Column Store",id:"column-store",level:2},{value:"Wide-Column",id:"wide-column",level:2},{value:"\u56fe",id:"\u56fe",level:2},{value:"Stream",id:"stream",level:2},{value:"\u6d88\u606f\u961f\u5217",id:"\u6d88\u606f\u961f\u5217",level:2},{value:"\u6709\u8da3",id:"\u6709\u8da3",level:2},{value:"SQLite Awesome",id:"sqlite-awesome",level:2},{value:"ID",id:"id",level:2},{value:"Big Data",id:"big-data",level:2},{value:"Vector",id:"vector",level:2},{value:"Geo",id:"geo",level:2},{value:"Tools",id:"tools",level:2},{value:"Library",id:"library",level:2},{value:"Migration",id:"migration",level:2},{value:"TBD",id:"tbd",level:2},{value:"Read",id:"read",level:2}],b={toc:d};function g(e){var t,a=e,{components:r}=a,o=((e,t)=>{var a={};for(var l in e)p.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&m)for(var l of m(e))t.indexOf(l)<0&&u.call(e,l)&&(a[l]=e[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(t=s(s({},b),o),i(t,n({components:r,mdxType:"MDXLayout"}))),(0,l.kt)("h1",s({},{id:"database-awesome"}),"Database Awesome"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",s({parentName:"tr"},{align:null}),"name"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"stand for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Relational DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u5173\u7cfb\u578b\u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Key-value stores"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"KV \u5b58\u50a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Document stores"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u6587\u6863\u5b58\u50a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Time Series DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u65f6\u5e8f\u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Graph DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u56fe\u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Object oriented DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u9762\u5411\u5bf9\u8c61\u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Search engines"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u641c\u7d22\u5f15\u64ce")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"RDF stores"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"RDF \u5b58\u50a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Wide column stores"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u5bbd\u5217\u5b58\u50a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Column stores"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u5217\u5b58\u50a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Multivalue DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u591a\u503c\u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Native XML DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"XML \u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Spatial DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u7a7a\u95f4\u6570\u636e\u5e93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Event Stores"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u5b58\u50a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Content stores"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u5185\u5bb9\u5b58\u50a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Navigational DBMS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"\u5bfc\u822a\u6570\u636e\u5e93")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://db-engines.com/en/ranking"}),"https://db-engines.com/en/ranking")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://db-benchmarks.com/"}),"https://db-benchmarks.com/"))),(0,l.kt)("h2",s({},{id:"\u7406\u8bba"}),"\u7406\u8bba"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sargable - Search ARGument ABLE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wikipedia ",(0,l.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Sargable"}),"Sargable")),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u67e5\u8be2\u53ef\u5229\u7528\u7d22\u5f15\u7684\u573a\u666f")))),(0,l.kt)("h2",s({},{id:"\u5206\u5e03\u5f0f"}),"\u5206\u5e03\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/rqlite/rqlite"}),"rqlite/rqlite"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQLite + Raft"))),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/relational/postgresql/citus"}),"citusdata/citus"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PostgreSQL Sharding"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/newsql/cockroachdb"}),"cdb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/newsql/yugabytedb"}),"yugabyte/yugabyte-db")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ydb-platform/ydb"}),"ydb-platform/ydb")))),(0,l.kt)("li",{parentName:"ul"},"MySQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Viteness"),(0,l.kt)("li",{parentName:"ul"},"TiDB")))),(0,l.kt)("h2",s({},{id:"\u5b9e\u65f6\u6570\u636e\u5e93"}),"\u5b9e\u65f6\u6570\u636e\u5e93"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/MaterializeInc/materialize"}),"MaterializeInc/materialize"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"MATERIALIZED VIEW")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://materialize.com/docs/sql/create-source/"}),"CREATE SOURCE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Kafka, S3"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/supabase/supabase"}),"supabase/supabase"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u6bd4 Firebase")))),(0,l.kt)("h2",s({},{id:"\u65f6\u5e8f"}),"\u65f6\u5e8f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/questdb/questdb"}),"questdb/questdb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Java, Apache 2.0"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL \u517c\u5bb9\u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/m3db/m3"}),"m3db/m3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"from Uber"),(0,l.kt)("li",{parentName:"ul"},"Distributed TSDB, Aggregator and Query Engine, Prometheus Sidecar, Graphite Compatible, Metrics Platform"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/taosdata/TDengine"}),"taosdata/TDengine"))),(0,l.kt)("h2",s({},{id:"olap"}),"OLAP"),(0,l.kt)("p",null,"Cube \u8ba1\u7b97"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/duckdb/duckdb"}),"duckdb/duckdb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQLite for OLAP, C++, MIT"))),(0,l.kt)("li",{parentName:"ul"},"Apache Druid"),(0,l.kt)("li",{parentName:"ul"},"Apache Kylin"),(0,l.kt)("li",{parentName:"ul"},"Apache Pinot"),(0,l.kt)("li",{parentName:"ul"},"ClickHouse"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_OLAP_servers"}),"Comparison of OLAP servers"))),(0,l.kt)("h2",s({},{id:"oltp"}),"OLTP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/stoneatom/stonedb"}),"stoneatom/stonedb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPLv2, C++"),(0,l.kt)("li",{parentName:"ul"},"MySQL HTAP and MySQL-native database for oltp, real-time analytics")))),(0,l.kt)("h2",s({},{id:"column-store"}),"Column Store"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u5206\u6790"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/column/clickhouse"}),"Clickhouse")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/column/duckdb"}),"DuckDB")),(0,l.kt)("li",{parentName:"ul"},"Apache Druid"),(0,l.kt)("li",{parentName:"ul"},"Apache Pinot"),(0,l.kt)("li",{parentName:"ul"},"InfluxDB"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL cstore_fdw, vops",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ORC"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/greenplum-db/gpdb"}),"greenplum-db/gpdb")),(0,l.kt)("li",{parentName:"ul"},"format",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"orc"),(0,l.kt)("li",{parentName:"ul"},"parquet"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_column-oriented_DBMSes"}),"List of column-oriented DBMSes"))),(0,l.kt)("h2",s({},{id:"wide-column"}),"Wide-Column"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bbd\u5217 - \u4e8c\u7ef4 KV",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e76\u975e\u6807\u51c6\u5217\u5b58\u50a8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/column/scylladb"}),"Scylla")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/column/cassandra"}),"Apache Cassandra")),(0,l.kt)("li",{parentName:"ul"},"Apache Accumulo"),(0,l.kt)("li",{parentName:"ul"},"Apache HBase"),(0,l.kt)("li",{parentName:"ul"},"Hypertable"),(0,l.kt)("li",{parentName:"ul"},"\u5546\u4e1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bigtable"),(0,l.kt)("li",{parentName:"ul"},"DataStax Enterprise"),(0,l.kt)("li",{parentName:"ul"},"DataStax Astra DB"),(0,l.kt)("li",{parentName:"ul"},"Azure Tables")))),(0,l.kt)("h2",s({},{id:"\u56fe"}),"\u56fe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/JanusGraph/janusgraph"}),"JanusGraph/janusgraph"))),(0,l.kt)("h2",s({},{id:"stream"}),"Stream"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"airbyte"),(0,l.kt)("li",{parentName:"ul"},"nifi"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/benthosdev/benthos"}),"benthosdev/benthos"))),(0,l.kt)("h2",s({},{id:"\u6d88\u606f\u961f\u5217"}),"\u6d88\u606f\u961f\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/obsidiandynamics/goharvest/wiki/Comparison-of-messaging-patterns"}),"Comparison of messaging patterns"))),(0,l.kt)("h2",s({},{id:"\u6709\u8da3"}),"\u6709\u8da3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/wiredtiger/wiredtiger"}),"wiredtiger/wiredtiger"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MongoDB"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/tantaman/aphrodite"}),"tantaman/aphrodite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/facebookincubator/LogDevice"}),"facebookincubator/LogDevice"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Distributed storage for sequential data"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/FerretDB/FerretDB"}),"FerretDB/FerretDB"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,l.kt)("li",{parentName:"ul"},"mongodb wire protocol to PostgreSQL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/fcoury/oxide"}),"fcoury/oxide"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"),(0,l.kt)("li",{parentName:"ul"},"mongodb wire protocol to PostgreSQL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/alash3al/redix"}),"alash3al/redix"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,l.kt)("li",{parentName:"ul"},"redis wire protocol to PostgreSQL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://www.micahlerner.com/2021/10/13/tao-facebooks-distributed-data-store-for-the-social-graph.html"}),"TAO: Facebook\u2019s Distributed Data Store for the Social Graph"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TAO - The Associations and Objects"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://news.ycombinator.com/item?id=29045443"}),"HN")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/EvgSkv/logica"}),"EvgSkv/logica"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u903b\u8f91\u7f16\u7a0b\u8f6c SQL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/dolthub/dolt"}),"dolthub/dolt"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,l.kt)("li",{parentName:"ul"},"Git for Data"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ApsaraDB"}),"ApsaraDB"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"by Alibaba"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/xtdb/xtdb"}),"xtdb/xtdb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Clojure"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/codenotary/immudb"}),"codenotary/immudb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"immutable database"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/maxmunzel/kvass"}),"maxmunzel/kvass"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Go"),(0,l.kt)("li",{parentName:"ul"},"personal key-value store"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/debezium/debezium"}),"debezium/debezium"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,l.kt)("li",{parentName:"ul"},"CDC - Change data capture"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/nhost/nhost"}),"nhost/nhost"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, TS"),(0,l.kt)("li",{parentName:"ul"},"Hasura+S3"),(0,l.kt)("li",{parentName:"ul"},"Firebase Alternative with GraphQL")))),(0,l.kt)("h2",s({},{id:"sqlite-awesome"}),"SQLite Awesome"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/relational/litestream"}),"benbjohnson/litestream"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,l.kt)("li",{parentName:"ul"},"Streaming replication for SQLite"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u8fdb\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u4e2a sqlite \u540c\u6b65\u5230\u53e6\u5916\u7684 sqlite - \u4f9d\u8d56\u4e2d\u95f4\u5b58\u50a8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"/notes/db/relational/litefs"}),"superfly/litefs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e fuse \u7684 litestream - \u6279\u91cf\u540c\u6b65"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/proofrock/ws4sqlite"}),"proofrock/ws4sqlite"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Query sqlite via http"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://news.ycombinator.com/item?id=30636796"}),"HN")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/"}),"Hosting SQLite on Github Pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/subzerocloud/blue-steel"}),"subzerocloud/blue-steel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RUST"),(0,l.kt)("li",{parentName:"ul"},"REST api for SQLite & PostgreSQL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://lumosql.org/"}),"https://lumosql.org/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQLite+LMDB"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/tantaman/conflict-free-sqlite"}),"tantaman/conflict-free-sqlite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/pocketbase/pocketbase"}),"pocketbase/pocketbase"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Go"),(0,l.kt)("li",{parentName:"ul"},"realtime backend in 1 file"))),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/canonical/dqlite"}),"dqlite"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPLv3, C"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/rqlite/rqlite"}),"rqlite"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,l.kt)("li",{parentName:"ul"},"HTTPS API"),(0,l.kt)("li",{parentName:"ul"},"node-discovery & automatic clustering - Kubernetes, Consul, etcd, DNS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/hashicorp/raft"}),"hashicorp/raft")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/rqlite/rqlite/blob/master/DOC/PERFORMANCE.md"}),"https://github.com/rqlite/rqlite/blob/master/DOC/PERFORMANCE.md")),(0,l.kt)("li",{parentName:"ul"},"In-memory DB < 2GB"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7528 deterministic SQL - \u56e0\u4e3a raft \u590d\u5236\uff0c\u5e42\u7b49"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/losfair/mvsqlite"}),"losfair/mvsqlite"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"),(0,l.kt)("li",{parentName:"ul"},"MVCC SQLite that runs on FoundationDB"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bloomberg/comdb2"}),"bloomberg/comdb2"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, C")))))),(0,l.kt)("h2",s({},{id:"id"}),"ID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ulid/spec"}),"ULID"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ulid/spec/issues/41"}),"#41"),"\nPostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"extension",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/edoceo/pg-ulid"}),"edoceo/pg-ulid")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/iCyberon/pg_ulid"}),"iCyberon/pg_ulid")))),(0,l.kt)("li",{parentName:"ul"},"plpgsql",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/geckoboard/pgulid"}),"geckoboard/pgulid")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-00"}),"UUIDv6"),"\n\u6709\u70b9\u7c7b\u4f3c ULID"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/niieani/hashids.js"}),"niieani/hashids.js"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"YouTube-like ids"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://instagram-engineering.com/1cf5a71e5a5c"}),"Sharding & IDs at Instagram"))),(0,l.kt)("h2",s({},{id:"big-data"}),"Big Data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://hakibenita.com/sql-for-data-analysis"}),"Practical SQL for Data Analysis"))),(0,l.kt)("h2",s({},{id:"vector"}),"Vector"),(0,l.kt)("p",null,"\u9762\u5411\u5411\u91cf\u7684\u591a\u7528\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u641c\u7d22")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"\u673a\u5668\u5b66\u4e60"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Vector -> ",(0,l.kt)("inlineCode",{parentName:"p"},"number[]"))),(0,l.kt)("admonition",s({},{type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ClickHouse/ClickHouse/issues/35101"}),"ClickHouse#35101"),"\nIndexed Vector Similarity and kNN Search"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/milvus-io/milvus"}),"milvus-io/milvus"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,l.kt)("li",{parentName:"ul"},"Vector database for scalable similarity search and AI applications."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/facebookresearch/faiss"}),"facebookresearch/faiss"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, C++"),(0,l.kt)("li",{parentName:"ul"},"efficient similarity search and clustering of dense vectors"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/semi-technologies/weaviate"}),"semi-technologies/weaviate"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BSD-3, Golang"),(0,l.kt)("li",{parentName:"ul"},"cloud-native, modular, real-time vector search engine"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/facebookincubator/velox"}),"facebookincubator/velox"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, C++"),(0,l.kt)("li",{parentName:"ul"},"C++ vectorized database acceleration library"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/erikbern/ann-benchmarks"}),"erikbern/ann-benchmarks"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Benchmarks of approximate nearest neighbor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://towardsdatascience.com/9c65a3bd0696"}),"Not All Vector Databases Are Made Equal"))),(0,l.kt)("h2",s({},{id:"geo"}),"Geo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://s2geometry.io/"}),"https://s2geometry.io/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/uber/h3"}),"uber/h3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, C"),(0,l.kt)("li",{parentName:"ul"},"Hexagonal hierarchical geospatial indexing system")))),(0,l.kt)("h2",s({},{id:"tools"}),"Tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/Netflix/ndbench"}),"Netflix/ndbench"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Store Benchmark"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/sqlpad/sqlpad"}),"sqlpad/sqlpad"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Web-based SQL editor and visualizing"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bytebase/bytebase"}),"bytebase/bytebase"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Go, Vue"),(0,l.kt)("li",{parentName:"ul"},"Safe database schema change and version control for DevOps teams.")))),(0,l.kt)("h2",s({},{id:"library"}),"Library"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parser/SQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/prql/prql"}),"prql/prql"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"),(0,l.kt)("li",{parentName:"ul"},"Pipelined Relational Query Language"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://tokern.io/blog/open-source-sql-parsers/"}),"Open Source SQL Parsers"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://news.ycombinator.com/item?id=31107231"}),"HN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://stripe.com/en-gb/sigma"}),"https://stripe.com/en-gb/sigma"))))))),(0,l.kt)("h2",s({},{id:"migration"}),"Migration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flywaydb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQL"))),(0,l.kt)("li",{parentName:"ul"},"liquibase",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"XML"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/golang-migrate/migrate"}),"golang-migrate/migrate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/amacneil/dbmate"}),"amacneil/dbmate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ariga/atlas"}),"ariga/atlas")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/djrobstep/migra"}),"djrobstep/migra"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PG Schema Diff"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/fabianlindfors/reshape"}),"fabianlindfors/reshape"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"zero-downtime schema migration tool for Postgres"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/charperbonaroo/pgmigrate"}),"charperbonaroo/pgmigrate"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Write migrations using plain SQL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/sqitchers/sqitch"}),"sqitchers/sqitch"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Perl"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/skeema/skeema"}),"skeema"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MySQL & MariaDB"))),(0,l.kt)("li",{parentName:"ul"},"sqlite ",(0,l.kt)("a",s({parentName:"li"},{href:"https://sqlite.org/pragma.html#pragma_user_version"}),"user_version")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/rickbergfalk/postgrator"}),"rickbergfalk/postgrator"))),(0,l.kt)("h2",s({},{id:"tbd"}),"TBD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://db.grussell.org/index.html"}),"Database eLearning")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://db-engines.com/en/ranking"}),"DB-Engines Ranking")),(0,l.kt)("li",{parentName:"ul"},"Aphyr ",(0,l.kt)("a",s({parentName:"li"},{href:"https://aphyr.com/tags/jepsen"}),"jepsen")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/eventql/eventql"}),"EventQL"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"http://eventql.io/"}),"EventQL")," is a distributed, column-oriented database built for large-scale event collection and analytics. It runs super-fast SQL and MapReduce queries."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://crate.io/"}),"Carte"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQL FOR THINGS DATA"),(0,l.kt)("li",{parentName:"ul"},"Real-time SQL. Simple scaling. Millions of inserts per second."),(0,l.kt)("li",{parentName:"ul"},"CrateDB offers Standard-SQL, real-time queries and document support (JSON) in a simple, horizontal way to scale."),(0,l.kt)("li",{parentName:"ul"},"IoT & Sensors",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Stream millions of data points per second into CrateDB and query them in real time to visualize, track, and predict."))),(0,l.kt)("li",{parentName:"ul"},"Log & Event Analytics",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Analyze logs from IT infrastructure to monitor security, compliance, usage, billing, and more."))),(0,l.kt)("li",{parentName:"ul"},"Time Series, Geospatial, Machine Learning",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Versatile SQL engine enables complex queries, text searches, and aggregations \u2013 in real time or against volumes of historic data."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/caesar0301/awesome-public-datasets"}),"caesar0301/awesome-public-datasets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://dbmstools.com/"}),"https://dbmstools.com/"))),(0,l.kt)("h2",s({},{id:"read"}),"Read"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://blog.the-pans.com/relational/"}),"How and why the Relational Model works for databases")),(0,l.kt)("li",{parentName:"ul"},"Youtube ",(0,l.kt)("a",s({parentName:"li"},{href:"https://youtu.be/JOrXRsES3mk"}),"Database Fundamentals: Memory, Storage and ACID Guarantees"))))}g.isMDXComponent=!0}}]);