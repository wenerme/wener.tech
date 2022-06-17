"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22813],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=l,g=c["".concat(u,".").concat(k)]||c[k]||m[k]||n;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},53053:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=a(87462),l=a(63366),n=(a(67294),a(3905)),i=["components"],o={title:"Loki"},u=void 0,p={unversionedId:"service/observability/logging/loki",id:"service/observability/logging/loki",title:"Loki",description:"- grafana/loki \u662f\u4ec0\u4e48 ?",source:"@site/notes/service/observability/logging/loki.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/loki",permalink:"/notes/service/observability/logging/loki",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/logging/loki.md",tags:[],version:"current",frontMatter:{title:"Loki"},sidebar:"docs",previous:{title:"logging-operator",permalink:"/notes/service/observability/logging/logging-operator"},next:{title:"Syslog",permalink:"/notes/service/observability/logging/syslog"}},s={},m=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"collector",id:"collector",level:2},{value:"fluentbit",id:"fluentbit",level:3},{value:"\u5b58\u50a8",id:"\u5b58\u50a8",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2}],c={toc:m};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki"},"grafana/loki")," \u662f\u4ec0\u4e48 ?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AGPL-3.0, Go"),(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u754c\u7684 Prometheus"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/architecture/"},"Architecture"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5199\u5165 < 100GB \u8003\u8651\u90e8\u7f72\u5355\u4f53\u670d\u52a1\u5373\u53ef"),(0,n.kt)("li",{parentName:"ul"},"\u5355\u4f53\u670d\u52a1\u4e5f\u53ef\u4ee5\u591a\u63a5\u70b9\u6269\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u6a21\u5f0f\u7ef4\u62a4\u8d77\u6765\u66f4\u9ebb\u70e6"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/overview/comparisons/"},"vs. EFK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/blog/2020/05/12/an-only-slightly-technical-introduction-to-loki-the-prometheus-inspired-open-source-logging-system/"},"An introduction to Loki, the Prometheus-inspired open source logging system")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/overview/comparisons/"},"Loki compared to other log systems"))))),(0,n.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/configuration/"},"https://grafana.com/docs/loki/latest/configuration/"))),(0,n.kt)("h2",{id:"collector"},"collector"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/clients/"},"https://grafana.com/docs/loki/latest/clients/")),(0,n.kt)("li",{parentName:"ul"},"Promtail"),(0,n.kt)("li",{parentName:"ul"},"FluentD & Fluent-bit")),(0,n.kt)("h3",{id:"fluentbit"},"fluentbit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/clients/fluentbit/"},"out_loki")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki/tree/master/cmd/fluent-bit"},"https://github.com/grafana/loki/tree/master/cmd/fluent-bit"))),(0,n.kt)("h2",{id:"\u5b58\u50a8"},"\u5b58\u50a8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6cbf\u7528 cortex \u903b\u8f91",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u8005\u90fd\u662f tomwilkie"),(0,n.kt)("li",{parentName:"ul"},"distributor, ingester, querier, chunk"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/operations/storage/"},"Loki Storage")),(0,n.kt)("li",{parentName:"ul"},"writes a chunk per stream"),(0,n.kt)("li",{parentName:"ul"},"chunk_target_size (around 1MB), max_chunk_age (increase beyond 1h), chunk_idle_period (increase to match max_chunk_age)"),(0,n.kt)("li",{parentName:"ul"},"index - range -> chunkids",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BoltDB Shipper - \u672c\u5730\u548c\u8fdc\u7a0b\u540c\u6b65 - \u4f9d\u8d56\u5bf9\u8c61\u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"24h \u5468\u671f\u7d22\u5f15\u65f6\u5de5\u4f5c\u6700\u597d"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Thanos"))),(0,n.kt)("li",{parentName:"ul"},"Apache Cassandra - \u517c\u5bb9 scylladb"),(0,n.kt)("li",{parentName:"ul"},"Amazon DynamoDB"),(0,n.kt)("li",{parentName:"ul"},"Google Bigtable"),(0,n.kt)("li",{parentName:"ul"},"BoltDB - \u5355\u673a"))),(0,n.kt)("li",{parentName:"ul"},"chunk - chunkid -> blob",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache Cassandra"),(0,n.kt)("li",{parentName:"ul"},"Amazon S3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6743\u9650",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"s3:ListBucket"),(0,n.kt)("li",{parentName:"ul"},"s3:PutObject"),(0,n.kt)("li",{parentName:"ul"},"s3:GetObject"),(0,n.kt)("li",{parentName:"ul"},"s3:DeleteObject - Single Store (boltdb-shipper) compactor"))))),(0,n.kt)("li",{parentName:"ul"},"Filesystem - \u5355\u673a\uff0c\u9664\u975e NFS - NFS \u4f53\u9a8c\u4e0d\u597d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5355\u76ee\u5f55\u6700\u591a 5.5m ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki/issues/1502"},"#1502")))),(0,n.kt)("li",{parentName:"ul"},"Amazon DynamoDB"),(0,n.kt)("li",{parentName:"ul"},"Google Bigtable"),(0,n.kt)("li",{parentName:"ul"},"Google Cloud Storage")))),(0,n.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/loki/latest/architecture/#components"},"Components")),(0,n.kt)("li",{parentName:"ul"},"Distributor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Hashing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Consul"))),(0,n.kt)("li",{parentName:"ul"},"Quorum consistency"))),(0,n.kt)("li",{parentName:"ul"},"Ingester",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u72b6\u6001 - PENDING, JOINING, ACTIVE, LEAVING, UNHEALTHY"),(0,n.kt)("li",{parentName:"ul"},"Handoff"))),(0,n.kt)("li",{parentName:"ul"},"Query frontend",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u9009\uff0c\u65e0\u72b6\u6001\u67e5\u8be2\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u961f\u5217"),(0,n.kt)("li",{parentName:"ul"},"\u62c6\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u7f13\u5b58"))),(0,n.kt)("li",{parentName:"ul"},"Querier",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406 LogQL - \u67e5\u8be2\u5206\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u53bb\u91cd"))),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u8def\u5f84",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"querier \u63a5\u6536\u5230 HTTP \u8bf7\u6c42"),(0,n.kt)("li",{parentName:"ol"},"querier \u5c06\u67e5\u8be2\u4f20\u9012\u7ed9 ingesters \u5904\u7406\u5185\u5b58\u6570\u636e"),(0,n.kt)("li",{parentName:"ol"},"ingesters \u63a5\u6536\u5230\u8bfb\u53d6\u8bf7\u6c42\u8fd4\u56de\u5339\u914d\u6570\u636e"),(0,n.kt)("li",{parentName:"ol"},"querier \u4ece backing store \u61d2\u52a0\u8f7d\u6570\u636e - \u5982\u679c ingesters \u672a\u8fd4\u56de\u6570\u636e"),(0,n.kt)("li",{parentName:"ol"},"querier \u4fbf\u5229\u63a5\u6536\u5230\u7684\u6570\u636e\u5c31\u884c\u53bb\u91cd\uff0c\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c"))),(0,n.kt)("li",{parentName:"ul"},"\u5199\u5165\u8def\u5f84",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"distributor \u63a5\u6536\u5230\u5199\u5165\u8bf7\u6c42 \u6d41"),(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7 hash ring \u5bf9 \u6d41 \u5c31\u884c hash \u9009\u53d6 ingesters"),(0,n.kt)("li",{parentName:"ol"},"distributor \u5c06\u6bcf\u4e2a\u6d41\u8f6c\u53d1\u7ed9\u5bf9\u5e94\u7684 ingesters \u548c \u526f\u672c"),(0,n.kt)("li",{parentName:"ol"},"ingester \u4f1a\u5c06\u6d41\u5199\u5165 chunk - chunk \u5728\u79df\u6237\u7684 labelset \u4e0b\u552f\u4e00"),(0,n.kt)("li",{parentName:"ol"},"distributor \u8fd4\u56de\u6210\u529f")))))}k.isMDXComponent=!0}}]);