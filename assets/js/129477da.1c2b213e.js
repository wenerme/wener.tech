"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71876],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},56792:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return v}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e};const c={title:"vector"},k="vector",d={unversionedId:"service/observability/vector",id:"service/observability/vector",title:"vector",description:"- vectordotdev/vector",source:"@site/../notes/service/observability/vector.md",sourceDirName:"service/observability",slug:"/service/observability/vector",permalink:"/notes/service/observability/vector",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/vector.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"vector"},sidebar:"docs",previous:{title:"Zipkin",permalink:"/notes/service/observability/tracing/zipkin"},next:{title:"vrl",permalink:"/notes/service/observability/vrl"}},N={},v=[{value:"Sources &amp; Sinks",id:"sources--sinks",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"Agent",id:"agent",level:3},{value:"file",id:"file",level:2},{value:"kubernetes_logs",id:"kubernetes_logs",level:2},{value:"\u591a\u884c",id:"\u591a\u884c",level:2}],g={toc:v};function h(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),u),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"vector"}),"vector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector"}),"vectordotdev/vector"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MPL-2.0, Rust"),(0,a.kt)("li",{parentName:"ul"},"Datadog \u5f00\u6e90"),(0,a.kt)("li",{parentName:"ul"},"observability data ",(0,a.kt)("strong",{parentName:"li"},"pipeline")),(0,a.kt)("li",{parentName:"ul"},"logs, metrics, traces(WIP) - observability \u91c7\u96c6\u5904\u7406\u5168\u5bb6\u6876"))),(0,a.kt)("li",{parentName:"ul"},"Sources",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Prometheus RemoteWrite/Scrap"),(0,a.kt)("li",{parentName:"ul"},"s3, fluent, logstash"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes_logs, docker_logs, nginx_metrics, postgresql_metrics, statsd"),(0,a.kt)("li",{parentName:"ul"},"host_metrics, journald, exec, file, syslog, socket, stdin"),(0,a.kt)("li",{parentName:"ul"},"nats"),(0,a.kt)("li",{parentName:"ul"},"internal_logs, internal_metrics"),(0,a.kt)("li",{parentName:"ul"},"vector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://dnstap.info/"}),"dnstap")))),(0,a.kt)("li",{parentName:"ul"},"Transforms"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://vector.dev/docs/reference/configuration/sinks/"}),"Sinks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"S3, ClickHouse, Elastic, Loki, InfluxDB, Prometheus RW/Export, Statsd"),(0,a.kt)("li",{parentName:"ul"},"Redis, Plusar, Nats, Kafka"),(0,a.kt)("li",{parentName:"ul"},"Vector"))),(0,a.kt)("li",{parentName:"ul"},"\u89d2\u8272",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"agent - \u91c7\u96c6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"source -> sink"),(0,a.kt)("li",{parentName:"ul"},"source \u901a\u5e38\u4e3a file, kubernetes_logs, host_metrics"))),(0,a.kt)("li",{parentName:"ul"},"aggregator - \u805a\u5408",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"source \u901a\u5e38\u4e3a vector, syslog, statsd, fluent"),(0,a.kt)("li",{parentName:"ul"},"transform"))),(0,a.kt)("li",{parentName:"ul"},"sidecar - \u5e94\u7528")))),(0,a.kt)("admonition",m({},{title:"issues",type:"info"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"timescale/postgres sink ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/939"}),"#939")),(0,a.kt)("li",{parentName:"ul"},"PostgreSQL/MySQL sink ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/6556"}),"#6556")),(0,a.kt)("li",{parentName:"ul"},"sonic sink ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/988"}),"#988")),(0,a.kt)("li",{parentName:"ul"},"grpc source ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/573"}),"#573")),(0,a.kt)("li",{parentName:"ul"},"zstd compress ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/2302"}),"#2302")),(0,a.kt)("li",{parentName:"ul"},"windows_event_log source ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/1206"}),"#1206")),(0,a.kt)("li",{parentName:"ul"},"VictoriaMetrics sink ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/1343"}),"#1343")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes_system_events")," source ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/1293"}),"#1293"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/salesforce/sloop"}),"salesforce/sloop"),"\nKubernetes History Visualization")))),(0,a.kt)("hr",{parentName:"admonition"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"stops watching logs from new pods ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/8616"}),"#8616"))),(0,a.kt)("hr",{parentName:"admonition"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"opentelemetry source & sink ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/1444"}),"#1444")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew tap vectordotdev/brew\nbrew install vector\n\n# https://github.com/vectordotdev/vector/releases\n")),(0,a.kt)("h2",m({},{id:"sources--sinks"}),"Sources & Sinks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubernetes_logs"),(0,a.kt)("li",{parentName:"ul"},"host_metrics"),(0,a.kt)("li",{parentName:"ul"},"internal_metrics"),(0,a.kt)("li",{parentName:"ul"},"prometheus_scrape",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u81ea\u52a8\u53d1\u73b0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/issues/2303"}),"https://github.com/vectordotdev/vector/issues/2303")))),(0,a.kt)("li",{parentName:"ul"},"Metrics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"prometheus_exporter - Prometheus \u7684 /metrics"),(0,a.kt)("li",{parentName:"ul"},"prometheus_remote_write"),(0,a.kt)("li",{parentName:"ul"},"statsd"))),(0,a.kt)("li",{parentName:"ul"},"console - \u8f93\u51fa\u65e5\u5fd7\u5230 stdout - debug \u7528"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"vector"),(0,a.kt)("li",{parentName:"ul"},"file"),(0,a.kt)("li",{parentName:"ul"},"socket"),(0,a.kt)("li",{parentName:"ul"},"redis"),(0,a.kt)("li",{parentName:"ul"},"websocket"),(0,a.kt)("li",{parentName:"ul"},"nats"),(0,a.kt)("li",{parentName:"ul"},"kafka"),(0,a.kt)("li",{parentName:"ul"},"pulsar")))),(0,a.kt)("h2",m({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/playground",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GraphQL playground"))),(0,a.kt)("li",{parentName:"ul"},"/health"),(0,a.kt)("li",{parentName:"ul"},"/graphql"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://vector.dev/docs/reference/api/"}),"https://vector.dev/docs/reference/api/"))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),'# data_dir = "/var/lib/vector"\n\n[sources.dummy_logs]\ntype = "generator"\nformat = "syslog"\ninterval = 1\n\n# ector Remap Language https://vector.dev/docs/reference/vrl/\n[transforms.parse_logs]\ntype = "remap"\ninputs = ["dummy_logs"]\nsource = \'\n. = parse_syslog!(string!(.message))\n\'\n\n# Print parsed logs to stdout\n[sinks.print]\ntype = "console"\ninputs = ["parse_logs"]\nencoding.codec = "json"\n\n# GraphQL API http://localhost:8686\n# vector top\n[api]\nenabled = true\naddress = "127.0.0.1:8686"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/vector/")),(0,a.kt)("h2",m({},{id:"\u90e8\u7f72"}),"\u90e8\u7f72"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://vector.dev/docs/setup/installation/package-managers/helm/"}),"Install Vector using Helm"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://helm.vector.dev"}),"https://helm.vector.dev"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/helm-charts"}),"https://github.com/vectordotdev/helm-charts"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u662f vector \u5305"))))),(0,a.kt)("li",{parentName:"ul"},"kubectl ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/vectordotdev/vector/tree/master/distribution/kubernetes/vector-agent"}),"https://github.com/vectordotdev/vector/tree/master/distribution/kubernetes/vector-agent"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"helm template vector vector/vector")," \u751f\u6210"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://vector.dev/docs/setup/installation/platforms/kubernetes/"}),"Kubernetes")),(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"VECTOR_SELF_NODE_NAME"),(0,a.kt)("li",{parentName:"ul"},"VECTOR_SELF_POD_NAME"),(0,a.kt)("li",{parentName:"ul"},"VECTOR_SELF_POD_NAMESPACE")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Port"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"5044"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"logstash")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6000"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"vector")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8080"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"splunk-hec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8125"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"statsd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8282"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"datadog-agent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"9000"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"syslog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"9090"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"prom-exporter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"24224"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"fluent")))),(0,a.kt)("h3",m({},{id:"agent"}),"Agent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6536\u96c6 host \u4e3b\u673a\u4e0a\u7684 k8s \u65e5\u5fd7"),(0,a.kt)("li",{parentName:"ul"},"\u6536\u96c6 host metrics \u66b4\u9732\u4e3a prometheus_exporter"),(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a DaemonSet")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"volume"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"from host"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"to path"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"data"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/var/lib/vector"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/vector-data-dir")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"config"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/etc/vector/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"var-log"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/var/log"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/var/log/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"var-lib"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/var/lib"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/var/lib/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"procfs"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/proc"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/host/proc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sysfs"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/sys"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"/host/sys")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/var/lib/vector",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u6765\u5b58\u50a8\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 /var/lib/vector/kubernetes_logs/checkpoints.json")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"data_dir: /vector-data-dir\napi:\n  enabled: true\n  address: 127.0.0.1:8686\n  playground: false\nsources:\n  kubernetes_logs:\n    type: kubernetes_logs\n  host_metrics:\n    filesystem:\n      devices:\n        excludes: [binfmt_misc]\n      filesystems:\n        excludes: [binfmt_misc]\n      mountPoints:\n        excludes: ['*/proc/sys/fs/binfmt_misc']\n    type: host_metrics\n  internal_metrics:\n    type: internal_metrics\nsinks:\n  prom_exporter:\n    type: prometheus_exporter\n    inputs: [host_metrics, internal_metrics]\n    address: 0.0.0.0:9090\n  stdout:\n    type: console\n    inputs: [kubernetes_logs]\n    encoding:\n      codec: json\n")),(0,a.kt)("h2",m({},{id:"file"}),"file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://vector.dev/docs/reference/configuration/sources/file/"}),"https://vector.dev/docs/reference/configuration/sources/file/"))),(0,a.kt)("h2",m({},{id:"kubernetes_logs"}),"kubernetes_logs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/pods/**/*.log"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/pods/<podUID>/<containerName>_<instance#>.log"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pod UUID -> metadata"))))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u91c7\u96c6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/containers/*.log"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f03\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metrics-server-7f86dff975-bghf6_kube-system_metrics-server-cc0a1b325521c82f8b252e4f4e0ab118a4455376cf45c8ae1987841816325ba3.log")),(0,a.kt)("li",{parentName:"ul"},"Docker"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u5305\u542b\u66f4\u591a\u5143\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"k0s \u7528\u5230\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u73af\u5883 /var/log/containers -> /var/log/pods"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/kubernetes/kubernetes/issues/53022"}),"https://github.com/kubernetes/kubernetes/issues/53022")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/fabric8io/fluent-plugin-kubernetes_metadata_filter/issues/105"}),"https://github.com/fabric8io/fluent-plugin-kubernetes_metadata_filter/issues/105"))))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6392\u9664\u91c7\u96c6")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"vector.dev/exclude: 'true'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://vector.dev/docs/reference/configuration/sources/kubernetes_logs/"}),"https://vector.dev/docs/reference/configuration/sources/kubernetes_logs/"))),(0,a.kt)("h2",m({},{id:"\u591a\u884c"}),"\u591a\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"out:\n  type: reduce\n  inputs:\n  - log\n  group_by:\n  - container_id\n  merge_strategies:\n    message: concat_newline\n  starts_when: match(string!(.message), r'^[^\\s]')\n  #starts_when: match(string!(.message) , r'^[^}$]')\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://vector.dev/docs/reference/configuration/transforms/reduce/"}),"https://vector.dev/docs/reference/configuration/transforms/reduce/"))))}h.isMDXComponent=!0}}]);