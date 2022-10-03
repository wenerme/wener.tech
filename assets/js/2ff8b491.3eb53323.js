"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43769],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var l=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),o=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),k=o(a),c=n,d=k["".concat(p,".").concat(c)]||k[c]||s[c]||r;return a?l.createElement(d,i(i({ref:t},m),{},{components:a})):l.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},54602:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return g}});var l=a(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))o.call(t,a)&&m(e,a,t[a]);return e};const k={tags:["SQL"]},c="Clickhouse SQL",d={unversionedId:"db/column/clickhouse-sql",id:"db/column/clickhouse-sql",title:"Clickhouse SQL",description:"REST API",source:"@site/../notes/db/column/clickhouse-sql.md",sourceDirName:"db/column",slug:"/db/column/clickhouse-sql",permalink:"/notes/db/column/clickhouse-sql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/column/clickhouse-sql.md",tags:[{label:"SQL",permalink:"/notes/tags/sql"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664804552,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{tags:["SQL"]},sidebar:"docs",previous:{title:"Clickhouse \u914d\u7f6e",permalink:"/notes/db/column/clickhouse-conf"},next:{title:"ClickHouse",permalink:"/notes/db/column/clickhouse"}},N={},g=[{value:"REST API",id:"rest-api",level:2},{value:"Query",id:"query",level:2},{value:"JSON",id:"json",level:2},{value:"Alter Table JSON NO_SUCH_COLUMN_IN_TABLE",id:"alter-table-json-no_such_column_in_table",level:3},{value:"Database Engines",id:"database-engines",level:2},{value:"Table Engine",id:"table-engine",level:2},{value:"MergeTree",id:"mergetree",level:3},{value:"Mutation",id:"mutation",level:2},{value:"SELECT *",id:"select-",level:2},{value:"Cannot iterate over non-finalized ColumnObject",id:"cannot-iterate-over-non-finalized-columnobject",level:2},{value:"Memory limit (for query) exceeded",id:"memory-limit-for-query-exceeded",level:2},{value:"SQLite database file path must be inside &#39;user_files&#39; directory. (PATH_ACCESS_DENIED)",id:"sqlite-database-file-path-must-be-inside-user_files-directory-path_access_denied",level:2},{value:"FINAL",id:"final",level:2}],b={toc:g};function f(e){var t,a=e,{components:n}=a,m=((e,t)=>{var a={};for(var l in e)p.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&u)for(var l of u(e))t.indexOf(l)<0&&o.call(e,l)&&(a[l]=e[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(t=s(s({},b),m),r(t,i({components:n,mdxType:"MDXLayout"}))),(0,l.kt)("h1",s({},{id:"clickhouse-sql"}),"Clickhouse SQL"),(0,l.kt)("h2",s({},{id:"rest-api"}),"REST API"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"echo 'SELECT version()' | curl 'http://localhost:8123/' --data-binary @-\n\ncurl 'http://192.168.66.61:8123?query=select%20version()'\ncurl --get http://192.168.66.61:8123 --data-urlencode 'query=select version()'\n")),(0,l.kt)("h2",s({},{id:"query"}),"Query"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"select version();\n\nselect currentDatabase();\nselect currentProfiles();\nselect currentUser();\nselect currentRoles();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CREATE TABLE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ENGINE"),(0,l.kt)("li",{parentName:"ul"},"\u5217",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DEFAULT - \u8bbe\u7f6e\u9ed8\u8ba4\u503c"),(0,l.kt)("li",{parentName:"ul"},"MATERIALIZED"),(0,l.kt)("li",{parentName:"ul"},"ALIAS - \u522b\u540d\u5217 - \u4e0d\u5305\u542b\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"*")),(0,l.kt)("li",{parentName:"ul"},"EPHEMERAL - \u4e0d\u4f1a\u5b58\u50a8\uff0c\u4e0d\u80fd\u88ab SELECT \u5728 CREATE \u53ef\u4ee5\u88ab\u5f15\u7528"),(0,l.kt)("li",{parentName:"ul"},"compression_codec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 lz4"),(0,l.kt)("li",{parentName:"ul"},"NONE, LZ4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LZ4HC(9)")," - 1-12, \u63a8\u8350 4-9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZSTD(1)")," - 1-22"),(0,l.kt)("li",{parentName:"ul"},"DEFLATE_QPL"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u7f16\u7801",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Delta(delta_bytes)")),(0,l.kt)("li",{parentName:"ul"},"DoubleDelta"),(0,l.kt)("li",{parentName:"ul"},"Gorilla - XOR - Gorilla TSDB"),(0,l.kt)("li",{parentName:"ul"},"FPC"),(0,l.kt)("li",{parentName:"ul"},"T64"))),(0,l.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u7f16\u7801",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AES_128_GCM_SIV"),(0,l.kt)("li",{parentName:"ul"},"AES-256-GCM-SIV"))))),(0,l.kt)("li",{parentName:"ul"},"TTL"))))),(0,l.kt)("li",{parentName:"ul"},"REPLACE TABLE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709 Atomic \u5f15\u64ce\u53ef\u4ee5"))),(0,l.kt)("li",{parentName:"ul"},"Dictionaries - ",(0,l.kt)("inlineCode",{parentName:"li"},"key -> attributes"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://clickhouse.com/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"}),"\u5916\u90e8"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Local file"),(0,l.kt)("li",{parentName:"ul"},"Executable File"),(0,l.kt)("li",{parentName:"ul"},"Executable Pool"),(0,l.kt)("li",{parentName:"ul"},"HTTP(s)"),(0,l.kt)("li",{parentName:"ul"},"DBMS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ODBC"),(0,l.kt)("li",{parentName:"ul"},"MySQL"),(0,l.kt)("li",{parentName:"ul"},"ClickHouse"),(0,l.kt)("li",{parentName:"ul"},"MongoDB"),(0,l.kt)("li",{parentName:"ul"},"Redis"),(0,l.kt)("li",{parentName:"ul"},"Cassandra"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL")))))))),(0,l.kt)("h2",s({},{id:"json"}),"JSON"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSON -> ",(0,l.kt)("inlineCode",{parentName:"li"},"Object('json')")),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u8fd8\u6709\u5f88\u591a\u95ee\u9898")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"SET allow_experimental_object_type=1;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://clickhouse.com/docs/en/sql-reference/functions/json-functions/"}),"JSON Functions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://clickhouse.com/docs/en/guides/developer/working-with-json"}),"Working with JSON"))),(0,l.kt)("h3",s({},{id:"alter-table-json-no_such_column_in_table"}),"Alter Table JSON NO_SUCH_COLUMN_IN_TABLE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ClickHouse/ClickHouse/issues/38517"}),"https://github.com/ClickHouse/ClickHouse/issues/38517")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/ClickHouse/ClickHouse/issues/37730"}),"https://github.com/ClickHouse/ClickHouse/issues/37730"))),(0,l.kt)("h2",s({},{id:"database-engines"}),"Database Engines"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Atomic"),(0,l.kt)("li",{parentName:"ul"},"MySQL"),(0,l.kt)("li",{parentName:"ul"},"MaterializedMySQL"),(0,l.kt)("li",{parentName:"ul"},"Lazy"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"MaterializedPostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"Replicated"),(0,l.kt)("li",{parentName:"ul"},"SQLite")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"CREATE DATABASE sqlite_database\nENGINE = SQLite('db_path');\n")),(0,l.kt)("h2",s({},{id:"table-engine"}),"Table Engine"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",s({parentName:"tr"},{align:null}),"MergeTree Family"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"Log Family"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"Integrations"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"Special"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"MergeTree"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"StripeLog"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"ODBC"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Distributed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"ReplacingMergeTree"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Log"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"JDBC"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"MaterializedView")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"SummingMergeTree"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"TinyLog"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"MySQL"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Dictionary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"AggregatingMergeTree"),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"MongoDB"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Merge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"CollapsingMergeTree"),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"HDFS"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"File")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"VersionedCollapsingMergeTree"),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"S3"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"GraphiteMergeTree"),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Kafka"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"EmbeddedRocksDB"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Join")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"RabbitMQ"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"PostgreSQL"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"View")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null})),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"Buffer")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://clickhouse.com/docs/en/engines/table-engines/"}),"Table Engines"))),(0,l.kt)("h3",s({},{id:"mergetree"}),"MergeTree"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MergeTree",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ORDER BY tuple()")," \u8868\u793a\u4e0d\u9700\u8981\u6392\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u7d22\u5f15",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"annoy - \u7a7a\u95f4"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Replicated*"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"table \u7ef4\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u5305\u542b: INSERT, ALTER"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5305\u542b: CREATE, DROP, ATTACH, DETACH, RENAME",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RENAME - \u53ef\u4ee5\u8ba9\u526f\u672c\u8868\u540d\u5b57\u4e0d\u540c"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replacingmergetree/"}),"ReplacingMergeTree([ver])"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e sorting key \u53bb\u91cd"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 \u4fdd\u7559\u6700\u540e\u63d2\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7ed9\u5b9a\u4e86 ver \u5219\u4f1a\u57fa\u4e8e ver \u6392\u5e8f\u9009\u62e9\u6700\u7ec8\u4fdd\u7559\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ver \u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"UInt*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime64")))))),(0,l.kt)("li",{parentName:"ul"},"SummingMergeTree",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5408\u5e76\u76f8\u540c PK \u5230\u540c\u4e00\u884c\uff0c\u5176\u4ed6\u6570\u636e\u8fdb\u884c\u6c42\u548c"))),(0,l.kt)("li",{parentName:"ul"},"AggregatingMergeTree",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5408\u5e76\u805a\u5408\u903b\u8f91 - \u7c7b\u4f3c SummingMergeTree"))),(0,l.kt)("li",{parentName:"ul"},"CollapsingMergeTree",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Sign \u5220\u9664\u91cd\u590d - \u53ef\u4ee5\u591a\u4e2a\u76f8\u540c\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"Sign = 1 - state"),(0,l.kt)("li",{parentName:"ul"},"Sign = -1 - cancel"))),(0,l.kt)("li",{parentName:"ul"},"VersionedCollapsingMergeTree",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 CollapsingMergeTree \u4e4b\u4e0a\u6dfb\u52a0\u7248\u672c\u4fe1\u606f")))),(0,l.kt)("h2",s({},{id:"mutation"}),"Mutation"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"-- 0 async, 1 sync\nset mutations_sync=0;\n\nselect * from system.mutations;\n")),(0,l.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,l.kt)("h2",s({},{id:"select-"}),"SELECT ","*"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5305\u542b MATERIALIZED \u548c ALIAS"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e\u91cf\u65f6\u5f88\u5c11\u4f7f\u7528")),(0,l.kt)("h2",s({},{id:"cannot-iterate-over-non-finalized-columnobject"}),"Cannot iterate over non-finalized ColumnObject"),(0,l.kt)("p",null,"JSON \u5217\u6709\u95ee\u9898"),(0,l.kt)("h2",s({},{id:"memory-limit-for-query-exceeded"}),"Memory limit (for query) exceeded"),(0,l.kt)("h1",s({},{id:"snippets"}),"Snippets"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"SET describe_extend_object_types=1\nDESCRIBE tab\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TableSize")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"SELECT table,\n       formatReadableSize(sum(bytes_on_disk))           as disk_size,\n       formatReadableSize(sum(data_compressed_bytes))   as compressed_size,\n       formatReadableSize(sum(data_uncompressed_bytes)) as uncompressed_size,\n       min(min_date)                                    as min_date,\n       max(max_date)                                    as max_date\nFROM system.parts\nWHERE active\nGROUP BY table\nORDER BY sum(bytes_on_disk) DESC;\n")),(0,l.kt)("h2",s({},{id:"sqlite-database-file-path-must-be-inside-user_files-directory-path_access_denied"}),"SQLite database file path must be inside 'user_files' directory. (PATH_ACCESS_DENIED)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 /var/lib/clickhouse/user_files/"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings/#server_configuration_parameters-user_files_path"}),"https://clickhouse.com/docs/en/operations/server-configuration-parameters/settings/#server_configuration_parameters-user_files_path"))),(0,l.kt)("h2",s({},{id:"final"}),"FINAL"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-sql"}),"-- force collapsing, dedup, operation\nSELECT * FROM events FINAL;\n")))}f.isMDXComponent=!0}}]);