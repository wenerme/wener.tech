"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50139],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(a),c=l,h=k["".concat(p,".").concat(c)]||k[c]||u[c]||n;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},12130:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=a(96600),l=a(27279),n=(a(59496),a(49613)),i=["components"],o={title:"PostgreSQL Awesome",tags:["Awesome"]},p="PostgreSQL Awesome",s={unversionedId:"db/relational/postgresql/postgresql-awesome",id:"db/relational/postgresql/postgresql-awesome",title:"PostgreSQL Awesome",description:"\u6269\u5c55\u63d2\u4ef6\u529f\u80fd",source:"@site/../notes/db/relational/postgresql/postgresql-awesome.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-awesome",permalink:"/notes/db/relational/postgresql/postgresql-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/postgresql/postgresql-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"PostgreSQL Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"PostgreSQL Admin",permalink:"/notes/db/relational/postgresql/postgresql-admin"},next:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/notes/db/relational/postgresql/postgresql-cli"}},m={},u=[{value:"Extension",id:"extension",level:2},{value:"PL",id:"pl",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"Internal",id:"internal",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"Scale",id:"scale",level:2},{value:"Sync",id:"sync",level:2},{value:"Scale Stories",id:"scale-stories",level:2},{value:"HA vs Horizontal Scale",id:"ha-vs-horizontal-scale",level:2}],k={toc:u};function c(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql-awesome"},"PostgreSQL Awesome"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6269\u5c55\u63d2\u4ef6\u529f\u80fd")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6570\u636e\u529f\u80fd - \u6570\u636e\u7c7b\u578b\u3001\u64cd\u4f5c\u7c7b\u578b\u3001\u7d22\u5f15\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ol"},"\u670d\u52a1\u529f\u80fd - \u96c6\u7fa4\u3001cron\u3001\u5b58\u50a8\u5f15\u64ce"),(0,n.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u80fd\u529b - \u56fe\u3001\u6d41\u3001GIS"),(0,n.kt)("li",{parentName:"ol"},"\u96c6\u6210\u529f\u80fd - Redis\u3001ES"),(0,n.kt)("li",{parentName:"ol"},"\u8bed\u8a00\u529f\u80fd - JS\u3001Lua\u3001Java")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/neondatabase/neon"},"neondatabase/neon"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"),(0,n.kt)("li",{parentName:"ul"},"Serverless Postgres"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/notes/db/relational/postgresql/orioledb"},"orioledb/orioledb"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"storage engine"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.slideshare.net/AlexanderKorotkov/solving-postgresql-wicked-problems"},"slide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30462695"},"HN"),"\nauthor ",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/threads?id=akorotkov"},"akorotkov")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Vonng/pigsty"},"Vonng/pigsty"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0"),(0,n.kt)("li",{parentName:"ul"},"\u56fd\u4ea7"),(0,n.kt)("li",{parentName:"ul"},"Battery-Included Distribution for PostgreSQL"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MaterializeInc/materialize"},"MaterializeInc/materialize"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u589e\u91cf\u56fa\u5316\u67e5\u8be2"))),(0,n.kt)("li",{parentName:"ul"},"Superbase"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PostgresApp/PostgresApp"},"PostgresApp/PostgresApp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"macOS \u5e94\u7528"))),(0,n.kt)("li",{parentName:"ul"},"PipelineDB - \u505c\u6b62")),(0,n.kt)("h2",{id:"extension"},"Extension"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TimescaleDB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-age"},"apache/incubator-age"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Graph + Realtime"),(0,n.kt)("li",{parentName:"ul"},"openCypher"),(0,n.kt)("li",{parentName:"ul"},"\u53d7 AgensGraph \u542f\u53d1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/arkhipov/temporal_tables"},"arkhipov/temporal_tables"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Temporal - \u8bb0\u5f55\u6570\u636e\u53d8\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u4fee\u6539\u5f52\u6863\u5230\u5386\u53f2\u8868"),(0,n.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 PG13"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zombodb/zombodb"},"zombodb/zombodb"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u96c6\u6210 ES \u641c\u7d22\u548c\u5206\u6790\u80fd\u529b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ankane/pgvector"},"ankane/pgvector"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5411\u91cf\u641c\u7d22"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pgaudit/pgaudit"},"pgaudit/pgaudit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supabase/supa_audit"},"supabase/supa_audit"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Generic Table Auditing"),(0,n.kt)("li",{parentName:"ul"},"\u7eaf SQL"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://supabase.com/blog/2022/03/08/audit"},"Postgres Auditing in 150 lines of SQL")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wasmerio/wasmer-postgres"},"wasmerio/wasmer-postgres")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pgq/pgq"},"pgq/pgq"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Queue for PostgreSQL"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/knizhnik/imcs"},"knizhnik/imcs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In-Memory Columnar Store"),(0,n.kt)("li",{parentName:"ul"},"OLAP"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/heterodb/pg-strom"},"heterodb/pg-strom"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"accelerate mostly batch and analytics workloads with utilization of GPU and NVME-SSD")))),(0,n.kt)("h2",{id:"pl"},"PL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/plv8/plv8"},"plv8/plv8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pllua/pllua"},"pllua/pllua")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tada/pljava"},"tada/pljava"))),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yugonagata-pgsql.blogspot.com/2021/06/implementing-incremental-view.html?m=1"},"Implementing Incremental View Maintenance for PostgreSQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28425379"},"HN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.depesz.com/2020/08/25/waiting-for-postgresql-14-improvements-for-handling-large-number-of-connections/"},"Waiting for PostgreSQL 14 \u2013 Improvements for handling large number of connections")),(0,n.kt)("li",{parentName:"ul"},"Audit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eager.io/blog/audit-postgres/"},"https://eager.io/blog/audit-postgres/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://heap.io/blog/how-postgres-audit-tables-saved-us-from-taking-down-production"},"How Postgres Audit Tables Saved Us From Taking Down Production"))))),(0,n.kt)("h2",{id:"internal"},"Internal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://postgrespro.com/community/books/internals"},"https://postgrespro.com/community/books/internals"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=32088316"},"https://news.ycombinator.com/item?id=32088316")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.interdb.jp/pg/index.html"},"http://www.interdb.jp/pg/index.html"))),(0,n.kt)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pgmodeler.io/"},"https://pgmodeler.io/")),(0,n.kt)("li",{parentName:"ul"},"ankane",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ankane/pghero"},"ankane/pghero")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ankane/dexter"},"ankane/dexter"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"automatic indexer"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ankane/pgslice"},"ankane/pgslice")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/keithf4/pg_bloat_check"},"keithf4/pg_bloat_check")),(0,n.kt)("li",{parentName:"ul"},"WAL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wal-g/wal-g"},"wal-g/wal-g"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"),(0,n.kt)("li",{parentName:"ul"},"vs wal-e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LZ4, LZMA, Brotli"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u6838\u5904\u7406"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2017/08/18/introducing-wal-g-faster-restores-for-postgres/"},"Introducing WAL-G by Citus: Faster Disaster Recovery for Postgres")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wal-e/wal-e"},"wal-e/wal-e"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSD-3, Python"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u7ef4\u62a4")))))),(0,n.kt)("h2",{id:"scale"},"Scale"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yandex/odyssey"},"yandex/odyssey")),(0,n.kt)("li",{parentName:"ul"},"pgbouncer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pg-sharding/spqr"},"pg-sharding/spqr"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Stateless Postgres Query Router"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/awslabs/pgbouncer-rr-patch"},"awslabs/pgbouncer-rr-patch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/agroal/pgagroal"},"agroal/pgagroal"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"connection pool"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.postgresql.org/wiki/Replication%2C_Clustering%2C_and_Connection_Pooling"},"Replication, Clustering, and Connection Pooling"))),(0,n.kt)("h2",{id:"sync"},"Sync"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ankane/pgsync"},"ankane/pgsync"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ruby"),(0,n.kt)("li",{parentName:"ul"},"sync table"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/toluaina/pgsync"},"toluaina/pgsync"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"to elasticsearch"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eulerto/wal2json"},"eulerto/wal2json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jackc/pglogrepl"},"jackc/pglogrepl"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PostgreSQL logical replication library for Go")))),(0,n.kt)("h2",{id:"scale-stories"},"Scale Stories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.notion.so/blog/sharding-postgres-at-notion"},"Herding elephants: Lessons learned from sharding Postgres at Notion"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28776786"},"HN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.notion.so/blog/data-model-behind-notion"},"The data model behind Notion's flexibility")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.raphkoster.com/2009/01/08/database-sharding-came-from-uo/"},"Database \u201csharding\u201d came from UO?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/paypal-tech/20d3749ed680"},"PostgreSQL at Scale: Database Schema Changes Without Downtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/08/06/why-you-dont-want-to-shard/"},"Why you don\u2019t want to shard.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.sentry.io/2015/07/23/transaction-id-wraparound-in-postgres"},"Transaction ID Wraparound in Postgres")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://slack.engineering/re-architecting-slacks-workspace-preferences-how-to-move-to-an-eav-model-to-support-scalability/"},"Re-architecting Slack\u2019s Workspace Preferences: How to Move to an EAV Model to Support Scalability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/p/20d3749ed680"},"PostgreSQL at Scale: Database Schema Changes Without Downtime"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30458580"},"HN")))),(0,n.kt)("li",{parentName:"ul"},"retool ",(0,n.kt)("a",{parentName:"li",href:"https://retool.com/blog/how-we-upgraded-postgresql-database/"},"How we upgraded our 4TB Postgres database"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31084147"},"HN"))))),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"ha-vs-horizontal-scale"},"HA vs Horizontal Scale"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HA",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f master-master \u65b9\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f master-slave \u65b9\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u6bcf\u4e2a\u8282\u70b9\u662f\u5b8c\u6574\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u53ef\u7528"))),(0,n.kt)("li",{parentName:"ul"},"HS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u6570\u636e\u4e0d\u662f\u5b8c\u6574\u7684 - sharding"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u6709 citus \u63d0\u4f9b\u8fd9\u6837\u7684\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u8c03 partation"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0\u8282\u70b9")))))}c.isMDXComponent=!0}}]);