"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12645],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return N}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(a),N=l,k=s["".concat(p,".").concat(N)]||s[N]||c[N]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},91488:function(e,t,a){a.r(t),a.d(t,{assets:function(){return E},contentTitle:function(){return N},default:function(){return f},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return d}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&u(e,a,t[a]);return e};const s={title:"CQL",tags:["SQL"]},N="CQL",k={unversionedId:"db/column/cql",id:"db/column/cql",title:"CQL",description:"- https://docs.datastax.com/en/cql-oss/3.3/",source:"@site/../notes/db/column/cql.md",sourceDirName:"db/column",slug:"/db/column/cql",permalink:"/notes/db/column/cql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/column/cql.md",tags:[{label:"SQL",permalink:"/notes/tags/sql"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664927783,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"CQL",tags:["SQL"]},sidebar:"docs",previous:{title:"Clickhouse SQL",permalink:"/notes/db/column/clickhouse/sql"},next:{title:"DuckDB",permalink:"/notes/db/column/duckdb"}},E={},d=[{value:"cqlsh",id:"cqlsh",level:2},{value:"CQL",id:"cql-1",level:2}],S={toc:d};function f(e){var t,a=e,{components:l}=a,u=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},S),u),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"cql"}),"CQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.datastax.com/en/cql-oss/3.3/"}),"https://docs.datastax.com/en/cql-oss/3.3/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/datastax/nodejs-driver"}),"datastax/nodejs-driver"))),(0,n.kt)("h2",c({},{id:"cqlsh"}),"cqlsh"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"SHOW VERSION;\nSHOW HOST;\n\nSHOW SESSION $id;\n\nSOURCE '/data/commands.cql'\n\nCAPTURE;\nCAPTURE OFF;\nCAPTURE '/data/file';\n\nTRACING ON;\nTRACING OFF;\n\nPAGING ON;\nPAGING OFF;\nPAGING $page_size_in_rows;\n\nEXPAND ON;\nEXPAND OFF;\n\n-- LOGIN <username> [<password>]\n\nCLEAR;\nCLS;\n\n-- DESCRIBE <>\nDESCRIBE CLUSTER;\nDESCRIBE SCHEMA;\nDESCRIBE KEYSPACES;\nDESCRIBE KEYSPACE keyspace_name;\nDESCRIBE TABLES;\nDESCRIBE TABLE table_name;\nDESCRIBE MATERIALIZED VIEW view_name;\nDESCRIBE TYPES;\nDESCRIBE TYPE type_name;\nDESCRIBE FUNCTIONS;\nDESCRIBE FUNCTION function_name;\nDESCRIBE AGGREGATES;\nDESCRIBE AGGREGATE aggregate_function_name;\n\n-- COPY <table name> [(<column>, ...)] TO <file name> WITH <copy option> [AND <copy option> ...]\n-- MAXREQUESTS=6 PAGESIZE=1000 PAGETIMEOUT=10\n-- BEGINTOKEN, ENDTOKEN\n-- MAXOUTPUTSIZE=-1\n-- ENCODING=utf8\n\n-- COPY <table name> [(<column>, ...)] FROM <file name> WITH <copy option> [AND <copy option> ...]\n-- INGESTRATE=100000 MAXROWS=-1 SKIPROWS=0 SKIPCOLS=0 MAXPARSEERRORS=-1 MAXINSERTERRORS=1000\n-- ERRFILE=import_<ks>_<table>.err\n-- MAXBATCHSIZE=20 MINBATCHSIZE=2\n-- CHUNKSIZE=1000\nCOPY test FROM 'file.csv' WITH HEADER=true;\n\n-- COPY\n-- NULLVAL=null HEADER=false DECIMALSEP=.\n-- THOUSANDSSEP\n-- BOOLSTYlE True, False\n-- NUMPROCESSES\n-- MAXATTEMPTS=5\n-- REPORTFREQUENCY=0.25\n-- RATEFILE\n")),(0,n.kt)("h2",c({},{id:"cql-1"}),"CQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KEYSPACE - CREATE, DROP, DESCRIBE, ALTER",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"durable_writes"),(0,n.kt)("li",{parentName:"ul"},"replication",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"class",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"NetworkTopologyStrategy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<datacenter>")," - \u7ed9\u5b9a dc \u7684\u526f\u672c\u6570"),(0,n.kt)("li",{parentName:"ul"},"replication_factor - dc \u9ed8\u8ba4\u526f\u672c\u6570"))),(0,n.kt)("li",{parentName:"ul"},"SimpleStrategy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"replication_factor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5168\u5c40\u526f\u672c\u6570\uff0c\u4e0d\u8003\u8651 datacenter"))))))))))),(0,n.kt)("li",{parentName:"ul"},"USE keyspace"),(0,n.kt)("li",{parentName:"ul"},"TABLE",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"column",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"STATIC - \u76f8\u540c\u5206\u7247\u503c\u76f8\u540c"))),(0,n.kt)("li",{parentName:"ul"},"PRIMARY KEY",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u6307\u5b9a\u5219\u6bcf\u884c\u4e3a\u4e00\u4e2a partition"),(0,n.kt)("li",{parentName:"ul"},"\u503c\u4e0d\u80fd\u4e3a null"),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u5217\u4f5c\u4e3a partition key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY ((a, b), c)")," - \u591a\u4e2a partation key",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"c \u4e3a clustering column"))))),(0,n.kt)("li",{parentName:"ul"},"table_options",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"COMPACT STORAGE")),(0,n.kt)("li",{parentName:"ul"},"CLUSTERING ORDER",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u57fa\u4e8e clustering column \u6392\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4fee\u6539\u6392\u5e8f"))),(0,n.kt)("li",{parentName:"ul"},"comment"),(0,n.kt)("li",{parentName:"ul"},"read_repair_chance=0"),(0,n.kt)("li",{parentName:"ul"},"dclocal_read_repair_chance=0"),(0,n.kt)("li",{parentName:"ul"},"speculative_retry=99PERCENTILE"),(0,n.kt)("li",{parentName:"ul"},"gc_grace_seconds=864000"),(0,n.kt)("li",{parentName:"ul"},"tombstone_gc"),(0,n.kt)("li",{parentName:"ul"},"bloom_filter_fp_chance=0.01"),(0,n.kt)("li",{parentName:"ul"},"default_time_to_live=0"),(0,n.kt)("li",{parentName:"ul"},"cdc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"enabled=false"),(0,n.kt)("li",{parentName:"ul"},"preimage=false"),(0,n.kt)("li",{parentName:"ul"},"ttl"))),(0,n.kt)("li",{parentName:"ul"},"compaction - \u5408\u5e76 SSTables",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tombstone_threshold=0.2"),(0,n.kt)("li",{parentName:"ul"},"tombstone_compaction_interval=86400s - 1day"),(0,n.kt)("li",{parentName:"ul"},"SizeTieredCompactionStrategy - STCS - \u9ed8\u8ba4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bucket_high=1.5, bucket_low=0.5"),(0,n.kt)("li",{parentName:"ul"},"min_sstable_size=50"),(0,n.kt)("li",{parentName:"ul"},"min_threshold=4, max_threshold=32"))),(0,n.kt)("li",{parentName:"ul"},"LeveledCompactionStrategy - LCS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sstable_size_in_mb=160"))),(0,n.kt)("li",{parentName:"ul"},"IncrementalCompactionStrategy - ICS - \u4f01\u4e1a\u7248"),(0,n.kt)("li",{parentName:"ul"},"DateTieredCompactionStrategy - TWCS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 sstable/time window"),(0,n.kt)("li",{parentName:"ul"},"compaction_window_unit=DAYS, compaction_window_size=1"),(0,n.kt)("li",{parentName:"ul"},"expired_sstable_check_frequency_seconds=600"),(0,n.kt)("li",{parentName:"ul"},"min_threshold=4, max_threshold=32"))))),(0,n.kt)("li",{parentName:"ul"},"compression",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sstable_compression=LZ4Compressor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SnappyCompressor"),(0,n.kt)("li",{parentName:"ul"},"DeflateCompressor"))),(0,n.kt)("li",{parentName:"ul"},"chunk_length_in_kb=4KB"))),(0,n.kt)("li",{parentName:"ul"},"scylla_encryption_options"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"caching = {'enabled': 'true'}")),(0,n.kt)("li",{parentName:"ul"},"speculative_retry"),(0,n.kt)("li",{parentName:"ul"},"cache",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"enabled=true"))))))),(0,n.kt)("li",{parentName:"ul"},"INDEX - \u4e8c\u7ea7\u7d22\u5f15",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730 - \u5355\u5206\u7247"),(0,n.kt)("li",{parentName:"ul"},"\u5168\u5c40"))),(0,n.kt)("li",{parentName:"ul"},"TTL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a\u5217\u7ef4\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u884c\u7ef4\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u8868\u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4 default_time_to_live"))),(0,n.kt)("li",{parentName:"ul"},"JSON",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SELECT JSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"INSERT JSON")),(0,n.kt)("li",{parentName:"ul"},"fromJson"),(0,n.kt)("li",{parentName:"ul"},"toJson"))),(0,n.kt)("li",{parentName:"ul"},"CREATE MATERIALIZED VIEW",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SELECT \u9650\u5236",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5 ALLOW FILTERING"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8 order"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5305\u542b limit"))))),(0,n.kt)("li",{parentName:"ul"},"ScyllaDB \u6269\u5c55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SELECT BYPASS CACHE"),(0,n.kt)("li",{parentName:"ul"},"CREATE TABLE WITH paxos_grace_seconds"),(0,n.kt)("li",{parentName:"ul"},"SELECT/INSERT USING TIMEOUT"),(0,n.kt)("li",{parentName:"ul"},"KEYSPACE options"),(0,n.kt)("li",{parentName:"ul"},"PRUNE MATERIALIZED VIEW"),(0,n.kt)("li",{parentName:"ul"},"CREATE MATERIALIZED VIEW WITH synchronous_updates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u540c\u6b65\u66f4\u65b0"))),(0,n.kt)("li",{parentName:"ul"},"MV \u4e8c\u7ea7\u7d22\u5f15 synchronous_updates"),(0,n.kt)("li",{parentName:"ul"},"REDUCEFUNC for UDA"),(0,n.kt)("li",{parentName:"ul"},"per_partition_rate_limit")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"CREATE KEYSPACE catalog WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy','DC1' : 3};\nuse catalog;\nCREATE TABLE mutant_data (\n   first_name text,\n   last_name text,\n   address text,\n   picture_location text,\n   PRIMARY KEY((first_name, last_name)));\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.scylladb.com/stable/cql/ddl.html"}),"https://docs.scylladb.com/stable/cql/ddl.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.scylladb.com/stable/cql/types.html"}),"https://docs.scylladb.com/stable/cql/types.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.scylladb.com/stable/cql/compaction.html"}),"https://docs.scylladb.com/stable/cql/compaction.html"))))}f.isMDXComponent=!0}}]);