"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15760],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=l,N=c["".concat(u,".").concat(k)]||c[k]||m[k]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15436:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return h}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&s(e,a,t[a]);return e};const c={title:"ClickHouse"},k="ClickHouse",N={unversionedId:"db/column/clickhouse",id:"db/column/clickhouse",title:"ClickHouse",description:"- insert > select\ud800\udd0210000 > delete\ud800\udd02100 > update\ud800\udd0210",source:"@site/../notes/db/column/clickhouse.md",sourceDirName:"db/column",slug:"/db/column/clickhouse",permalink:"/notes/db/column/clickhouse",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/column/clickhouse.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664871591,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"ClickHouse"},sidebar:"docs",previous:{title:"Clickhouse SQL",permalink:"/notes/db/column/clickhouse-sql"},next:{title:"DuckDB",permalink:"/notes/db/column/duckdb"}},d={},h=[{value:"Notes",id:"notes",level:2},{value:"Auth",id:"auth",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8fd0\u7ef4",id:"\u8fd0\u7ef4",level:2},{value:"Auth",id:"auth-1",level:3},{value:"Stats",id:"stats",level:2},{value:"Turnning",id:"turnning",level:2},{value:"formats",id:"formats",level:2},{value:"config.xml",id:"configxml",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u5bfc\u51fa\u6570\u636e",id:"\u5bfc\u51fa\u6570\u636e",level:2},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"\u67e5\u770b\u8868\u4fe1\u606f",id:"\u67e5\u770b\u8868\u4fe1\u606f",level:2}],g={toc:h};function f(e){var t,a=e,{components:l}=a,s=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),s),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"clickhouse"}),"ClickHouse"),(0,n.kt)("admonition",m({},{title:"When to use ClickHouse",type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"insert > select\ud800\udd0210000 > delete\ud800\udd02100 > update\ud800\udd0210"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u4e0d\u53d8"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u6709\u65f6\u95f4\u5c5e\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u5f52\u6863\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u3001\u65e5\u5fd7\u3001\u76d1\u63a7\u3001\u6307\u6807"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u805a\u5408\u975e\u5e38\u591a\u7684\u6570\u636e\u6e90 - OLAP"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/yandex/ClickHouse"}),"yandex/ClickHouse"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, C++"),(0,n.kt)("li",{parentName:"ul"},"OLAP, \u5217\u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u5217\u5b58\u4e00\u4e2a\u6587\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Key \u8bbf\u95ee"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 zookeeper \u8fdb\u884c\u96c6\u7fa4\u8c03\u5ea6 - \u53ef\u4f7f\u7528 ",(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/operations/clickhouse-keeper/"}),"clickhouse-keeper")," \u66ff\u4ee3"))),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5e93 default"),(0,n.kt)("li",{parentName:"ul"},"DataGrip \u53ef\u4ee5\u4f7f\u7528 JDBC \u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u3001\u76d1\u63a7 - signoz, uptrace"),(0,n.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u5206\u6790"),(0,n.kt)("li",{parentName:"ul"},"timeseries-oriented"))),(0,n.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"8123 HTTP"),(0,n.kt)("li",{parentName:"ul"},"9000 native client"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.yandex/docs/en/single/"}),"\u5355\u9875\u6587\u6863")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ClickHouse"}),"wiki/ClickHouse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.yandex/"}),"clickhouse.yandex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.yandex/docs/en/development/architecture/"}),"https://clickhouse.yandex/docs/en/development/architecture/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/Altinity/clickhouse-operator"}),"Altinity/clickhouse-operator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/operations/tips/"}),"Usage Recommendations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/operations/requirements/"}),"Requirements")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/quickwit-oss/quickwit"}),"Quickwit"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AGPLv3, Rust"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u641c\u7d22\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"cloud-native search engine for log management & analytics"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b URL \u8bf7\u6c42 Quickwit \u8fdb\u884c ",(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/guides/developer/full-text-search"}),"\u5168\u6587\u641c\u7d22")),(0,n.kt)("li",{parentName:"ul"},"Quickwit \u652f\u6301\u8f93\u51fa\u4e3a clickHouseRowBinary"))),(0,n.kt)("li",{parentName:"ul"},"Why",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://eng.uber.com/logging/"}),"Fast and Reliable Schema-Agnostic Log Analytics Platform"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Uber, ES -> ClickHouse"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://tech.ebayinc.com/engineering/ou-online-analytical-processing/"}),"Our Online Analytical Processing Journey with ClickHouse on Kubernetes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ebay, Druid -> ClickHouse"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://blog.cloudflare.com/http-analytics-for-6m-requests-per-second-using-clickhouse/"}),"HTTP Analytics for 6M requests per second using ClickHouse"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cloudflare, PostgreSQL+Citus -> ClickHouse"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.nedmcclain.com/why-devops-love-clickhouse/amp/"}),"https://www.nedmcclain.com/why-devops-love-clickhouse/amp/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350 ext4 \u800c\u975e zfs"))),(0,n.kt)("li",{parentName:"ul"},"ClickHouse as an alternative to Elasticsearch for log storage and analysis ",(0,n.kt)("a",m({parentName:"li"},{href:"https://news.ycombinator.com/item?id=26316401"}),"HN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.youtube.com/watch?v=pZkKsfr8n3M"}),"A Practical Introduction to Handling Log Data in ClickHouse"))))))),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"immutable data"),(0,n.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 UDF"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u6570\u636e\u91cf\u8f83\u5c11(< 1TB)\u65f6\u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u63d2\u5165\u64cd\u4f5c\u975e\u5e38\u5feb - \u56e0\u4e3a\u662f\u5f02\u6b65\u7684\uff0c\u540e\u53f0\u4f1a\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"keep non-timeseries data out of clickhouse"),(0,n.kt)("li",{parentName:"ul"},"dynamic subcolumns - JSON"),(0,n.kt)("li",{parentName:"ul"},"OLAP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9002\u5408 KV"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9002\u5408\u5c0f\u6570\u636e\u7cbe\u786e\u67e5\u8be2"))))),(0,n.kt)("admonition",m({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UDF ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/ClickHouse/ClickHouse/issues/11"}),"#11")),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UPDATE, DELETE, REPLACE, MERGE, UPSERT, INSERT UPDATE",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 DROP PARTITION \u5b9e\u73b0\u90e8\u5206\u6570\u636e\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 mutation ",(0,n.kt)("inlineCode",{parentName:"li"},"ALTER TABLE name UPDATE/DELETE column=exp WHERE filter"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u540e\u53f0\u5f02\u6b65\u6267\u884c\uff0c\u5168\u90e8\u6570\u636e\u91cd\u5199\uff0c\u975e\u539f\u5b50\u64cd\u4f5c\uff0c\u975e\u5e38\u6162"),(0,n.kt)("li",{parentName:"ul"},"\u6ee1\u8db3 GDPR \u8981\u6c42"))))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8bfb\u5199\u5206\u79bb ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/ClickHouse/ClickHouse/issues/18452"}),"#18452")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Port"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2181"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Zookeeper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9181"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ClickHouse Keeper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8123"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"HTTP API - JDBC, ODBC, WebUI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8443"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"HTTP SSL/TLS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9000"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Native Protocol/ClickHouse TCP - inter-server comm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9004"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MySQL emulation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9005"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PostgreSQL emulation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9009"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"inter server comm - data exchange, replication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9010"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"SSL/TLS inter server comm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9011"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Native protocol PROXYv1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9019"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"JDBC Bridge")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9100"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gRPC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9234"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ClickHouse Keeper Raft")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9363"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Prometheus metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9281"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"SSL ClickHouse Keeper")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"9440"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"SSL/TLS Native protocol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"42000"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Graphite")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# https://hub.docker.com/r/yandex/clickhouse-server/\n# /etc/clickhouse-server/config.xml\ndocker run --rm -it \\\n  -v $PWD/data:/var/lib/clickhouse \\\n  -p 8123:8123 -p 9000:9000 \\\n  --ulimit nofile=262144:262144 \\\n  --name ch-server yandex/clickhouse-server\n\n# Client\ndocker run -it --rm --link ch-server yandex/clickhouse-client --host ch-server\n\n# \u542f\u52a8\nclickhouse-server --config-file=/etc/clickhouse-server/config.xml\nclickhouse-client --host=example.com\n\n# \u5bfc\u5165 CSV\ncat my.csv | clickhouse-client --host=example-perftest01j --query="INSERT INTO rankings_tiny FORMAT CSV"\n# \u5bfc\u5165 TSV, \u5e76\u8ba1\u7b97\u65f6\u95f4\ntime clickhouse-client --query="INSERT INTO trips FORMAT TabSeparated" < trips.tsv\n\ncurl \'http://localhost:8123/?query=SELECT%20NOW()\'\n')),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"COPY(\n  SELECT\n    t.id,\n    t.name\n  FROM\n    t\n) TO '/opt/data/export.tsv';\n\n-- \u4ece PostgreSQL \u5bfc\u5165\nCOPY...TO PROGRAM\n")),(0,n.kt)("h2",m({},{id:"notes"}),"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5217 DEFAULT materializes on merge, MATERIALIZED materializes on INSERT, OPTIMIZE TABLE"),(0,n.kt)("li",{parentName:"ul"},"ENGINE = Null - ETL \u8868, trigger materialized view"),(0,n.kt)("li",{parentName:"ul"},"index_granularity - \u7d22\u5f15\u7cbe\u5ea6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"how many rows reps index key and pk"),(0,n.kt)("li",{parentName:"ul"},"lower, point query \u66f4\u5feb"),(0,n.kt)("li",{parentName:"ul"},"8192 rows or 10MB of data"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf 8192 \u884c\u4e00\u4e2a \u7d22\u5f15\u8bb0\u5f55/mark"),(0,n.kt)("li",{parentName:"ul"},"\u7a00\u758f\u7d22\u5f15 - \u4e0d\u540c\u4e8e BTree"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u884c\u5904\u7406\u5355\u4f4d"))),(0,n.kt)("li",{parentName:"ul"},"index_granularity_bytes - \u9ed8\u8ba4 10MB"),(0,n.kt)("li",{parentName:"ul"},"primary key",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u6c42\u552f\u4e00")),(0,n.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u78c1\u76d8\u4e0a\u6570\u636e\u6392\u5e8f - sk=pk"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u52a0\u8f7d\u5230\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u8fc7\u6ee4 ",(0,n.kt)("strong",{parentName:"li"},"\u6700\u5de6\u8fb9")," \u5217\u56e0\u4e3a\u6709\u5e8f\uff0c\u6240\u4ee5\u53ef\u4ee5\u4e8c\u5206\u641c\u7d22"),(0,n.kt)("li",{parentName:"ul"},"\u8fc7\u6ee4 \u4e0d\u5305\u542b\u6700\u5de6\u8fb9 \u5217\uff0c\u5219\u4f1a\u5168\u5c40\u641c\u7d22"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e4b\u540e\u7684 PK \u662f\u4f4e\u7eac\u5ea6\u7684\u6570\u636e\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 skipping index \u4f18\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u521b\u5efa\u4e8c\u7ea7\u7d22\u5f15 \u8bb0\u5f55\u989d\u5916 minmax \u6765\u4f18\u5316\u8bbf\u95ee"),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u7eac\u5ea6\u6570\u636e\u53ea\u80fd\u521b\u5efa \u989d\u5916\u7684\u8868 \u6216 \u989d\u5916\u7684\u89c6\u56fe \u6216 PROJECTION \u4f7f\u7528\u4e0d\u540c\u7684\u987a\u5e8f\u6765\u89e3\u51b3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PROJECTION \u4e3a\u9690\u85cf\u8868\uff0c\u7c7b\u4f3c\u4e8e\u4f20\u7edf DB \u7684\u7d22\u5f15 - \u4fdd\u7559\u4e86\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u81ea\u52a8\u9009\u62e9 PROJECTION"))),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u987a\u5e8f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f4e\u7eac\u5ea6 \u6570\u636e\u5728\u5de6\u8fb9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7cbe\u786e\u67e5\u8be2\u4f1a\u5904\u7406\u66f4\u591a\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u538b\u7f29\u6bd4\u66f4\u9ad8 - \u78c1\u76d8\u4e0a\u6570\u636e\u5c11\uff0c\u610f\u5473\u7740 IO \u5feb"))),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u7eac\u5ea6 \u6570\u636e\u5728\u5de6\u8fb9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7cbe\u786e\u67e5\u8be2\u5904\u7406\u66f4\u5c11\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u538b\u7f29\u6bd4\u4f4e"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Locality-sensitive_hashing"}),"Locality-sensitive hashing"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u5bf9\u957f\u5185\u5bb9\u8fdb\u884c fingerprint, \u7136\u540e\u653e\u5728\u6700\u5de6\u8fb9\u6392\u5e8f, \u8fd9\u6837\u4f1a\u5927\u5927\u589e\u52a0\u538b\u7f29\u6bd4"),(0,n.kt)("li",{parentName:"ul"},"\u4f46\u67e5\u8be2\u9700\u8981\u989d\u5916\u5e26\u4e00\u4e2a\u6761\u4ef6"))))),(0,n.kt)("li",{parentName:"ul"},"sorting key",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e86 sorting key \u672a\u8bbe\u7f6e pk \u5219 pk=sk"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u5728 pk \u4e4b\u5916\u518d\u6dfb\u52a0 sk"))),(0,n.kt)("li",{parentName:"ul"},"sparse index")),(0,n.kt)("h2",m({},{id:"auth"}),"Auth"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LDAP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/guides/sre/configuring-ldap"}),"https://clickhouse.com/docs/en/guides/sre/configuring-ldap"))))),(0,n.kt)("h2",m({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# \u8981\u6c42 SSE 4.2\ngrep -q sse4_2 /proc/cpuinfo && echo "SSE 4.2 supported" || echo "SSE 4.2 not supported"\n\n# Docker\n# https://hub.docker.com/r/clickhouse/clickhouse-server/\n# /etc/clickhouse-server/config.xml\ndocker run -it --rm \\\n  --ulimit nofile=262144:262144 \\\n  -v=$HOME/data:/var/lib/clickhouse \\\n  --name clickhouse-server clickhouse/clickhouse-server\n')),(0,n.kt)("h2",m({},{id:"\u8fd0\u7ef4"}),"\u8fd0\u7ef4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350 ext4 noatime, nobarrier")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# CPU \u4f7f\u7528\u6027\u80fd\u6a21\u5f0f\necho 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n# \u4e0d\u8981\u7981\u7528 overcommit\necho 0 | sudo tee /proc/sys/vm/overcommit_memory\n\n# \u65e7 Linux Kernel\necho 'madvise' | sudo tee /sys/kernel/mm/transparent_hugepage/enabled\n")),(0,n.kt)("h3",m({},{id:"auth-1"}),"Auth"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kerberos"),(0,n.kt)("li",{parentName:"ul"},"LDAP")),(0,n.kt)("h2",m({},{id:"stats"}),"Stats"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"SELECT\n  tabe,\n  name,\n  sub(data_compressed_bytes) AS compressed,\n  sub(data_uncompressed_bytes) AS uncompressed,\n  floor((compressed / uncompressed) * 100, 4) as percent\nFROM\n  system.columns\nWHERE\n  database = currentDatabase()\nGROUP BY\n  table,\n  name\nORDER BY\n  table ASC,\n  name ASC;\n")),(0,n.kt)("h2",m({},{id:"turnning"}),"Turnning"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro"}),"https://clickhouse.com/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro"))),(0,n.kt)("h2",m({},{id:"formats"}),"formats"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/interfaces/formats/"}),"https://clickhouse.com/docs/en/interfaces/formats/"))),(0,n.kt)("h2",m({},{id:"configxml"}),"config.xml"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://clickhouse.com/docs/en/operations/configuration-files/"}),"https://clickhouse.com/docs/en/operations/configuration-files/"))),(0,n.kt)("h2",m({},{id:"\u5220\u9664"}),"\u5220\u9664"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"TTL"),(0,n.kt)("li",{parentName:"ol"},"DELETE FROM"),(0,n.kt)("li",{parentName:"ol"},"ALTER DELETE"),(0,n.kt)("li",{parentName:"ol"},"DROP PARTITION"),(0,n.kt)("li",{parentName:"ol"},"TRUNCATE")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"-- DELETE FROM\nSET allow_experimental_lightweight_delete = true;\n")),(0,n.kt)("h2",m({},{id:"\u5bfc\u51fa\u6570\u636e"}),"\u5bfc\u51fa\u6570\u636e"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM table INTO OUTFILE 'file' FORMAT CSV\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'$ clickhouse-client --query "SELECT * from table" --format FormatName > result.txt\n')),(0,n.kt)("h2",m({},{id:"\u5bfc\u5165\u6570\u636e"}),"\u5bfc\u5165\u6570\u636e"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# HTTP API\necho \'{"foo":"bar"}\' | curl \'http://localhost:8123/?query=INSERT%20INTO%20test%20FORMAT%20JSONEachRow\' --data-binary @-\n# CLI\necho \'{"foo":"bar"}\' | clickhouse-client --query="INSERT INTO test FORMAT JSONEachRow"\n')),(0,n.kt)("h2",m({},{id:"\u67e5\u770b\u8868\u4fe1\u606f"}),"\u67e5\u770b\u8868\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"SELECT\n    part_type,\n    path,\n    formatReadableQuantity(rows) AS rows,\n    formatReadableSize(data_uncompressed_bytes) AS data_uncompressed_bytes,\n    formatReadableSize(data_compressed_bytes) AS data_compressed_bytes,\n    formatReadableSize(primary_key_bytes_in_memory) AS primary_key_bytes_in_memory,\n    marks,\n    formatReadableSize(bytes_on_disk) AS bytes_on_disk\nFROM system.parts\nWHERE (table = 'hits_UserID_URL') AND (active = 1)\nFORMAT Vertical;\n")))}f.isMDXComponent=!0}}]);