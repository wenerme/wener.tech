"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69711],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),v=a,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86712:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"vector"},l=void 0,c={unversionedId:"service/observability/vector",id:"service/observability/vector",title:"vector",description:"- vectordotdev/vector",source:"@site/notes/service/observability/vector.md",sourceDirName:"service/observability",slug:"/service/observability/vector",permalink:"/notes/service/observability/vector",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/vector.md",tags:[],version:"current",frontMatter:{title:"vector"},sidebar:"docs",previous:{title:"netdata",permalink:"/notes/service/observability/netdata"},next:{title:"Service Awesome",permalink:"/notes/devops/service/service-awesome"}},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector"},"vectordotdev/vector"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MPL-2.0, Rust"),(0,o.kt)("li",{parentName:"ul"},"Datadog \u5f00\u6e90"),(0,o.kt)("li",{parentName:"ul"},"observability data ",(0,o.kt)("strong",{parentName:"li"},"pipeline")),(0,o.kt)("li",{parentName:"ul"},"logs, metrics, traces(WIP) - observability \u5168\u5bb6\u6876"))),(0,o.kt)("li",{parentName:"ul"},"Sources",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prometheus RemoteWrite/Scrap"),(0,o.kt)("li",{parentName:"ul"},"s3, fluent, logstash"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes_logs, docker_logs, nginx_metrics, postgresql_metrics, statsd"),(0,o.kt)("li",{parentName:"ul"},"host_metrics, journald, exec, file, syslog, socket, stdin"),(0,o.kt)("li",{parentName:"ul"},"nats"),(0,o.kt)("li",{parentName:"ul"},"internal_logs, internal_metrics"),(0,o.kt)("li",{parentName:"ul"},"vector"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dnstap.info/"},"dnstap")))),(0,o.kt)("li",{parentName:"ul"},"Transforms"),(0,o.kt)("li",{parentName:"ul"},"Sinks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"S3, ClickHouse, Elastic, Loki, InfluxDB, Prometheus RW/Export, Statsd"),(0,o.kt)("li",{parentName:"ul"},"Redis, Plusar, Nats, Kafka"),(0,o.kt)("li",{parentName:"ul"},"Vector"))),(0,o.kt)("li",{parentName:"ul"},"\u89d2\u8272",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"agent - \u91c7\u96c6"),(0,o.kt)("li",{parentName:"ul"},"aggregator - \u805a\u5408"),(0,o.kt)("li",{parentName:"ul"},"sidecar - \u5e94\u7528")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"issues")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector/issues/1444"},"#1444")," opentelemetry source & sink",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9884\u8ba1 2021 \u5e74\u5e95"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector/issues/939"},"#939")," timescale/postgres sink"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector/issues/6556"},"#6556")," PostgreSQL/MySQL sink"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector/issues/988"},"#988")," sonic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector/issues/573"},"#573")," grpc source"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector/issues/2302"},"#2302")," zstd compress"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vectordotdev/vector/issues/1206"},"#1206")," windows_event_log source")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew tap vectordotdev/brew\nbrew install vector\n\n# https://github.com/vectordotdev/vector/releases\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'# data_dir = "/var/lib/vector"\n\n[sources.dummy_logs]\ntype = "generator"\nformat = "syslog"\ninterval = 1\n\n# ector Remap Language https://vector.dev/docs/reference/vrl/\n[transforms.parse_logs]\ntype = "remap"\ninputs = ["dummy_logs"]\nsource = \'\n. = parse_syslog!(string!(.message))\n\'\n\n# Print parsed logs to stdout\n[sinks.print]\ntype = "console"\ninputs = ["parse_logs"]\nencoding.codec = "json"\n\n# GraphQL API http://localhost:8686\n# vector top\n[api]\nenabled = true\naddress = "127.0.0.1:8686"\n')),(0,o.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HELM ",(0,o.kt)("a",{parentName:"li",href:"https://vector.dev/docs/setup/installation/package-managers/helm/"},"https://vector.dev/docs/setup/installation/package-managers/helm/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vector.dev/docs/setup/installation/platforms/kubernetes/"},"https://vector.dev/docs/setup/installation/platforms/kubernetes/"))))}m.isMDXComponent=!0}}]);