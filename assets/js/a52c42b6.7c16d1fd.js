"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82460],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},72613:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"PromQL"},l=void 0,u={unversionedId:"service/observability/metrics/prometheus/promql",id:"service/observability/metrics/prometheus/promql",title:"PromQL",description:"- PromQL",source:"@site/notes/service/observability/metrics/prometheus/promql.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/promql",permalink:"/notes/service/observability/metrics/prometheus/promql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/promql.md",tags:[],version:"current",frontMatter:{title:"PromQL"},sidebar:"docs",previous:{title:"TSDB",permalink:"/notes/service/observability/metrics/prometheus/prometheus-tsdb"},next:{title:"statsd_exporter",permalink:"/notes/service/observability/metrics/prometheus/statsd_exporter"}},m={},p=[{value:"\u5e38\u7528",id:"\u5e38\u7528",level:2},{value:"irate vs rate",id:"irate-vs-rate",level:2}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"PromQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/querying/examples/"},"QUERY EXAMPLES")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@valyala/9ab455142085"},"PromQL tutorial for beginners and humans")),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 PromQL \u7684\u5e94\u7528",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/VictoriaMetrics/VictoriaMetrics"},"VictoriaMetrics"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"long-term remote storage for Prometheus"))))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.robustperception.io/rate-then-sum-never-sum-then-rate"},"Rate then sum, never sum then rate"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-promql"},'# \u6307\u6807\nnode_cpu_seconds_total\n# \u6807\u7b7e\u8fc7\u6ee4\uff0c\u652f\u6301\u64cd\u4f5c\u7b26\u53f7 = != \u5339\u914d =~ \u4e0d\u5339\u914d !~\nnode_cpu_seconds_total{mode="user"}\n# 5 \u5206\u949f\u5747\u503c\nrate(node_cpu_seconds_total{mode="user"}[5m])\n# \u805a\u5408\u7ed3\u679c\nsum(rate(node_cpu_seconds_total{mode="user"}[5m]))\n# \u6309\u7167 mode \u5206\u7ec4\nsum(rate(node_cpu_seconds_total[5m])) by (mode)\n# \u4e0d\u770b idle \u548c nice\nsum(rate(node_cpu_seconds_total{mode!~"idle|nice"}[5m])) by (mode)\n# \u53ea\u770b user \u548c system\nsum(rate(node_cpu_seconds_total{mode=~"user|system"}[5m])) by (mode)\n# \u5206\u522b\u8fd4\u56de\n# by (mode) \u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u4e22\u5931\u4e86 label\uff0c\u5219\u4f1a\u8ba4\u4e3a\u662f\u540c\u6837\u7684\u6307\u6807\uff0c\u4f1a\u88ab\u4e22\u5f03\nsum(rate(node_cpu_seconds_total{mode="user"}[5m])) by (mode) or sum(rate(node_cpu_seconds_total{mode="system"}[5m])) by (mode)\n# \u7ed3\u679c\u52a0\u4e0a\u53e6\u5916\u4e00\u4e2a\u6307\u6807\nsum(rate(node_cpu_seconds_total{mode=~"user|system"}[5m])) by (mode) or node_load15\n\n# unifiVapNumStations \u7ed3\u679c join unifiVapEssId label\nsum(unifiVapNumStations * on(unifiVapIndex,instance) group_left(unifiVapEssId) unifiVapEssId{}) by (unifiVapEssId)\n\n# \u66ff\u6362\u6807\u7b7e\n# grafana \u91cc\u80fd\u8ba9\u4e00\u5217\u51fa\u73b0\u4e24\u6b21\n# \u4f46 grafana \u4e0d\u80fd\u5168\u6587\u5339\u914d https://github.com/grafana/grafana/issues/11418\nlabel_replace(unifiIfMac, "unifiLabel", "$0", "unifiIfMac", ".+")\n')),(0,o.kt)("h2",{id:"\u5e38\u7528"},"\u5e38\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-promql"},'# \u67e5\u8be2\u5728\u7ebf\u8282\u70b9\n{__name__=~"probe_success|up"}\n# \u6210\u529f\u7387\nsum({__name__=~"probe_success|up"})/count({__name__=~"probe_success|up"})*100\n# \u5168\u8282\u70b9\u4fe1\u606f\nlabel_replace({__name__=~"probe_success|up"}, "instance_ip", "$2", "instance", "(192[.]168[.]|http?://)?([0-9.+]+|.*).*")\n\n# \u6392\u9664 kube \u5185\u7f6e\u7ec4\u4ef6\n{job!~"apiserver|kubelet"}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"metric"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"node_uname_info"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux \u8282\u70b9\u4fe1\u606f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"windows_os_info"),(0,o.kt)("td",{parentName:"tr",align:null},"Windows \u8282\u70b9\u4fe1\u606f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"windows_cs_hostname"),(0,o.kt)("td",{parentName:"tr",align:null},"ComputerSystem.DNSHostName, ComputerSystem.Domain")))),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"irate-vs-rate"},"irate vs rate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ea\u7528\u4e8e counter - \u589e\u957f\u503c"),(0,o.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4f7f\u7528 rate - irate \u4e0d\u6bd4 rate \u5feb\uff0c\u65e0\u6cd5\u6355\u83b7\u5cf0\u503c"),(0,o.kt)("li",{parentName:"ul"},"irate",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ea\u4f7f\u7528\u8303\u56f4\u5185\u6700\u8fd1\u4e24\u4e2a\u65f6\u95f4\u70b9\u6570\u636e"))),(0,o.kt)("li",{parentName:"ul"},"rate",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u95f4\u9694\u8fdb\u884c\u6c42\u5e73\u5747\u6bcf\u79d2"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@valyala/why-irate-from-prometheus-doesnt-capture-spikes-45f9896d7832"},"Why irate from Prometheus doesn't capture spikes"))))}d.isMDXComponent=!0}}]);