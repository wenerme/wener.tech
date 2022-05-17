"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79305],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,b=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46887:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],s={id:"timescale",title:"TimeScale"},o=void 0,m={unversionedId:"db/relational/postgresql/timescale",id:"db/relational/postgresql/timescale",title:"TimeScale",description:"Tips",source:"@site/notes/db/relational/postgresql/timescale.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/timescale",permalink:"/notes/db/relational/postgresql/timescale",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/timescale.md",tags:[],version:"current",frontMatter:{id:"timescale",title:"TimeScale"},sidebar:"docs",previous:{title:"psql",permalink:"/notes/db/relational/postgresql/psql"},next:{title:"WAL-G",permalink:"/notes/db/relational/postgresql/wal-g"}},c={},p=[{value:"Tips",id:"tips",level:2},{value:"Notes",id:"notes",level:2}],u={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.timescale.com/"},"TimeScale")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/timescale/timescaledb"},"timescale/timescaledb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"An open-source time-series database optimized for fast ingest and complex queries. Engineered up from PostgreSQL, packaged as an extension."))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.timescale.com/time-series-data-postgresql-10-vs-timescaledb-816ee808bac5"},"Problems with PostgreSQL 10 for time-series data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.timescale.com/blog/building-a-distributed-time-series-database-on-postgresql/"},"Building a distributed time-series database on PostgreSQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/timescale/pg_prometheus"},"timescale/pg_prometheus")," - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/timescale/prometheus-postgresql-adapter"},"timescale/prometheus-postgresql-adapter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PostgreSQL extension for Prometheus data"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u4f7f\u7528\u8be5\u7ed3\u6784"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/timescale/timescale-prometheus"},"timescale/timescale-prometheus"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"prometheus \u4ea4\u4e92\u65b0\u7684\u67b6\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a RemoteStorage"),(0,l.kt)("li",{parentName:"ul"},"prometheus ",(0,l.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write"},"remote_write")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.timescaledb.com/using-timescaledb/telemetry"},"https://docs.timescaledb.com/using-timescaledb/telemetry"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timescaledb.telemetry_level=off")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER [SYSTEM | DATABASE | USER] { *db_name* | *role_specification* } SET timescaledb.telemetry_level=off")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/timescale/timescaledb/issues/638"},"timescale/timescaledb#638")," - List of recommended ZFS/Zpool settings")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u57fa\u4e8e postgres \u4e0a\u6e38\u6784\u5efa\u7684\u955c\u50cf\n# https://github.com/timescale/timescaledb-docker\n# timescale/timescaledb-postgis \u5305\u542b postgis \u6269\u5c55\ndocker run --rm -it \\\n  -p 5432:5432 \\\n  -v $PWD/data:/var/lib/postgresql/data \\\n  -e POSTGRES_DB=timescale \\\n  -e POSTGRES_USER=timescale \\\n  -e POSTGRES_PASSWORD=timescale \\\n  --name timescaledb timescale/timescaledb:latest-pg12\n\n# http://localhost:9201/metrics\n# -log-level \u9ed8\u8ba4 debug\n# -async-acks \u5728\u5199\u5165\u5230\u6570\u636e\u5e93\u4e4b\u524d\u54cd\u5e94 - \u53ef\u80fd\u4e22\u4f46 metric \u573a\u666f\u4e0b\u4e00\u822c\u4e0d\u5f71\u54cd\ndocker run --rm -it --link timescaledb:db \\\n  -p 9201:9201 \\\n  --name ts-prometheus timescale/timescale-prometheus \\\n  -async-acks \\\n  -db-host=db -db-name=timescale -db-port=5432 -db-user=timescale -db-password=timescale\n\nprometheus --config.file=prometheus.yml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"prometheus.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: "prometheus"\n    static_configs:\n    - targets: ["localhost:9090"]\n\n  - job_name: "node"\n    static_configs:\n    - targets: ["localhost:9100"]\n\n  - job_name: "tsdb-prom"\n    static_configs:\n    - targets: ["localhost:9201"]\n\nremote_write:\n  - url: "http://localhost:9201/write"\nremote_read:\n  - url: "http://localhost:9201/read"\n')),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.timescale.com/introduction/architecture"},"Architecture & Concepts"))))}d.isMDXComponent=!0}}]);