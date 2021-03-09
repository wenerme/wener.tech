(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{638:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),l=(a(0),a(803)),i={id:"timescale",title:"TimeScale"},s={unversionedId:"db/relational/postgresql/timescale",id:"db/relational/postgresql/timescale",isDocsHomePage:!1,title:"TimeScale",description:"Tips",source:"@site/notes/db/relational/postgresql/timescale.md",slug:"/db/relational/postgresql/timescale",permalink:"/notes/db/relational/postgresql/timescale",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/timescale.md",version:"current",sidebar:"docs",previous:{title:"PostREST \u5165\u95e8\u90e8\u7f72",permalink:"/notes/db/relational/postgresql/postgrest-hello"},next:{title:"WAL-G",permalink:"/notes/db/relational/postgresql/wal-g"}},o=[{value:"Tips",id:"tips",children:[]},{value:"Notes",id:"notes",children:[]}],c={toc:o};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.timescale.com/"},"TimeScale")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/timescale/timescaledb"},"timescale/timescaledb"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"An open-source time-series database optimized for fast ingest and complex queries. Engineered up from PostgreSQL, packaged as an extension."))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.timescale.com/time-series-data-postgresql-10-vs-timescaledb-816ee808bac5"},"Problems with PostgreSQL 10 for time-series data")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.timescale.com/blog/building-a-distributed-time-series-database-on-postgresql/"},"Building a distributed time-series database on PostgreSQL")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/timescale/pg_prometheus"},"timescale/pg_prometheus")," - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/timescale/prometheus-postgresql-adapter"},"timescale/prometheus-postgresql-adapter"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PostgreSQL extension for Prometheus data"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u518d\u4f7f\u7528\u8be5\u7ed3\u6784"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/timescale/timescale-prometheus"},"timescale/timescale-prometheus"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prometheus \u4ea4\u4e92\u65b0\u7684\u67b6\u6784"),Object(l.b)("li",{parentName:"ul"},"\u4f5c\u4e3a RemoteStorage"),Object(l.b)("li",{parentName:"ul"},"prometheus ",Object(l.b)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write"},"remote_write")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.timescaledb.com/using-timescaledb/telemetry"},"https://docs.timescaledb.com/using-timescaledb/telemetry"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"timescaledb.telemetry_level=off")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ALTER [SYSTEM | DATABASE | USER] { *db_name* | *role_specification* } SET timescaledb.telemetry_level=off")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/timescale/timescaledb/issues/638"},"timescale/timescaledb#638")," - List of recommended ZFS/Zpool settings")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u57fa\u4e8e postgres \u4e0a\u6e38\u6784\u5efa\u7684\u955c\u50cf\n# https://github.com/timescale/timescaledb-docker\n# timescale/timescaledb-postgis \u5305\u542b postgis \u6269\u5c55\ndocker run --rm -it \\\n  -p 5432:5432 \\\n  -v $PWD/data:/var/lib/postgresql/data \\\n  -e POSTGRES_DB=timescale \\\n  -e POSTGRES_USER=timescale \\\n  -e POSTGRES_PASSWORD=timescale \\\n  --name timescaledb timescale/timescaledb:latest-pg12\n\n# http://localhost:9201/metrics\n# -log-level \u9ed8\u8ba4 debug\n# -async-acks \u5728\u5199\u5165\u5230\u6570\u636e\u5e93\u4e4b\u524d\u54cd\u5e94 - \u53ef\u80fd\u4e22\u4f46 metric \u573a\u666f\u4e0b\u4e00\u822c\u4e0d\u5f71\u54cd\ndocker run --rm -it --link timescaledb:db \\\n  -p 9201:9201 \\\n  --name ts-prometheus timescale/timescale-prometheus \\\n  -async-acks \\\n  -db-host=db -db-name=timescale -db-port=5432 -db-user=timescale -db-password=timescale\n\nprometheus --config.file=prometheus.yml\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"prometheus.yml")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: "prometheus"\n    static_configs:\n    - targets: ["localhost:9090"]\n\n  - job_name: "node"\n    static_configs:\n    - targets: ["localhost:9100"]\n\n  - job_name: "tsdb-prom"\n    static_configs:\n    - targets: ["localhost:9201"]\n\nremote_write:\n  - url: "http://localhost:9201/write"\nremote_read:\n  - url: "http://localhost:9201/read"\n')),Object(l.b)("h2",{id:"notes"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.timescale.com/introduction/architecture"},"Architecture & Concepts"))))}m.isMDXComponent=!0},803:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=m(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=m(a),u=r,d=b["".concat(i,".").concat(u)]||b[u]||p[u]||l;return a?n.a.createElement(d,s(s({ref:t},c),{},{components:a})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);