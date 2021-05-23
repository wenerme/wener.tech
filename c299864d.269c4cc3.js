(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{1021:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),u=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(a),s=r,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||l;return a?n.a.createElement(O,c(c({ref:t},o),{},{components:a})):n.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},822:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(8),l=(a(0),a(1021)),i={id:"loki",title:"Loki"},c={unversionedId:"service/logging/loki",id:"service/logging/loki",isDocsHomePage:!1,title:"Loki",description:"* \u662f\u4ec0\u4e48",source:"@site/notes/service/logging/loki.md",slug:"/service/logging/loki",permalink:"/notes/service/logging/loki",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/logging/loki.md",version:"current",sidebar:"docs",previous:{title:"Fluentbit",permalink:"/notes/service/logging/fluentbit"},next:{title:"Syslog",permalink:"/notes/service/logging/syslog"}},b=[{value:"collector",id:"collector",children:[{value:"fluentbit",id:"fluentbit",children:[]}]},{value:"\u5b58\u50a8",id:"\u5b58\u50a8",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]}],o={toc:b};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9762\u5411\u65e5\u5fd7\u7684 Prometheus"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/grafana/loki"},"grafana/loki")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/architecture/"},"Architecture")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/blog/2020/05/12/an-only-slightly-technical-introduction-to-loki-the-prometheus-inspired-open-source-logging-system/"},"An introduction to Loki, the Prometheus-inspired open source logging system")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/overview/comparisons/"},"Loki compared to other log systems"))))),Object(l.b)("h2",{id:"collector"},"collector"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/clients/"},"https://grafana.com/docs/loki/latest/clients/")),Object(l.b)("li",{parentName:"ul"},"Promtail"),Object(l.b)("li",{parentName:"ul"},"FluentD & Fluent-bit")),Object(l.b)("h3",{id:"fluentbit"},"fluentbit"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/clients/fluentbit/"},"out_loki")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/grafana/loki/tree/master/cmd/fluent-bit"},"https://github.com/grafana/loki/tree/master/cmd/fluent-bit"))),Object(l.b)("h2",{id:"\u5b58\u50a8"},"\u5b58\u50a8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/operations/storage/"},"Loki Storage")),Object(l.b)("li",{parentName:"ul"},"writes a chunk per stream"),Object(l.b)("li",{parentName:"ul"},"chunk_target_size (around 1MB), max_chunk_age (increase beyond 1h), chunk_idle_period (increase to match max_chunk_age)"),Object(l.b)("li",{parentName:"ul"},"index",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Amazon DynamoDB"),Object(l.b)("li",{parentName:"ul"},"Google Bigtable"),Object(l.b)("li",{parentName:"ul"},"Apache Cassandra"),Object(l.b)("li",{parentName:"ul"},"BoltDB - \u5355\u673a"),Object(l.b)("li",{parentName:"ul"},"BoltDB Shipper - \u5b9e\u9a8c\u9636\u6bb5"))),Object(l.b)("li",{parentName:"ul"},"chunk",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Amazon DynamoDB"),Object(l.b)("li",{parentName:"ul"},"Google Bigtable"),Object(l.b)("li",{parentName:"ul"},"Apache Cassandra"),Object(l.b)("li",{parentName:"ul"},"Amazon S3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6743\u9650",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"s3:ListBucket"),Object(l.b)("li",{parentName:"ul"},"s3:PutObject"),Object(l.b)("li",{parentName:"ul"},"s3:GetObject"))))),Object(l.b)("li",{parentName:"ul"},"Google Cloud Storage"),Object(l.b)("li",{parentName:"ul"},"Filesystem - \u5355\u673a\uff0c\u9664\u975e NFS - NFS \u4f53\u9a8c\u4e0d\u597d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5355\u76ee\u5f55\u6700\u591a 5.5m ",Object(l.b)("a",{parentName:"li",href:"https://github.com/grafana/loki/issues/1502"},"#1502"))))))),Object(l.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/architecture/#components"},"Components")),Object(l.b)("li",{parentName:"ul"},"Distributor",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Hashing",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Consul"))),Object(l.b)("li",{parentName:"ul"},"Quorum consistency"))),Object(l.b)("li",{parentName:"ul"},"Ingester",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u72b6\u6001 - PENDING, JOINING, ACTIVE, LEAVING, UNHEALTHY"),Object(l.b)("li",{parentName:"ul"},"Handoff"))),Object(l.b)("li",{parentName:"ul"},"Query frontend",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u9009\uff0c\u65e0\u72b6\u6001\u67e5\u8be2\u7f13\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u961f\u5217"),Object(l.b)("li",{parentName:"ul"},"\u62c6\u5206"),Object(l.b)("li",{parentName:"ul"},"\u7f13\u5b58"))),Object(l.b)("li",{parentName:"ul"},"Querier",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5904\u7406 LogQL - \u67e5\u8be2\u5206\u53d1"),Object(l.b)("li",{parentName:"ul"},"\u53bb\u91cd"))),Object(l.b)("li",{parentName:"ul"},"\u8bfb\u53d6\u8def\u5f84",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"querier \u63a5\u6536\u5230 HTTP \u8bf7\u6c42"),Object(l.b)("li",{parentName:"ol"},"querier \u5c06\u67e5\u8be2\u4f20\u9012\u7ed9 ingesters \u5904\u7406\u5185\u5b58\u6570\u636e"),Object(l.b)("li",{parentName:"ol"},"ingesters \u63a5\u6536\u5230\u8bfb\u53d6\u8bf7\u6c42\u8fd4\u56de\u5339\u914d\u6570\u636e"),Object(l.b)("li",{parentName:"ol"},"querier \u4ece backing store \u61d2\u52a0\u8f7d\u6570\u636e - \u5982\u679c ingesters \u672a\u8fd4\u56de\u6570\u636e"),Object(l.b)("li",{parentName:"ol"},"querier \u4fbf\u5229\u63a5\u6536\u5230\u7684\u6570\u636e\u5c31\u884c\u53bb\u91cd\uff0c\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c"))),Object(l.b)("li",{parentName:"ul"},"\u5199\u5165\u8def\u5f84",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"distributor \u63a5\u6536\u5230\u5199\u5165\u8bf7\u6c42 \u6d41"),Object(l.b)("li",{parentName:"ol"},"\u901a\u8fc7 hash ring \u5bf9 \u6d41 \u5c31\u884c hash \u9009\u53d6 ingesters"),Object(l.b)("li",{parentName:"ol"},"distributor \u5c06\u6bcf\u4e2a\u6d41\u8f6c\u53d1\u7ed9\u5bf9\u5e94\u7684 ingesters \u548c \u526f\u672c"),Object(l.b)("li",{parentName:"ol"},"ingester \u4f1a\u5c06\u6d41\u5199\u5165 chunk - chunk \u5728\u79df\u6237\u7684 labelset \u4e0b\u552f\u4e00"),Object(l.b)("li",{parentName:"ol"},"distributor \u8fd4\u56de\u6210\u529f")))))}u.isMDXComponent=!0}}]);