/*! For license information please see 129477da.bacc49ae.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71876],{83463:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(11527),t=s(47214);const i={title:"vector"},l="vector",c={id:"service/observability/vector",title:"vector",description:"- vectordotdev/vector",source:"@site/../notes/service/observability/vector.md",sourceDirName:"service/observability",slug:"/service/observability/vector",permalink:"/notes/service/observability/vector",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/vector.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690351481,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{title:"vector"},sidebar:"docs",previous:{title:"Zipkin",permalink:"/notes/service/observability/tracing/zipkin"},next:{title:"vrl",permalink:"/notes/service/observability/vrl"}},d={},o=[{value:"Sources &amp; Sinks",id:"sources--sinks",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"Agent",id:"agent",level:3},{value:"file",id:"file",level:2},{value:"kubernetes_logs",id:"kubernetes_logs",level:2},{value:"\u591a\u884c",id:"\u591a\u884c",level:2},{value:"More than one file has the same fingerprint",id:"more-than-one-file-has-the-same-fingerprint",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vector",children:"vector"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector",children:"vectordotdev/vector"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MPL-2.0, Rust"}),"\n",(0,r.jsx)(n.li,{children:"Datadog \u5f00\u6e90"}),"\n",(0,r.jsxs)(n.li,{children:["observability data ",(0,r.jsx)(n.strong,{children:"pipeline"})]}),"\n",(0,r.jsx)(n.li,{children:"logs, metrics, traces(WIP) - observability \u91c7\u96c6\u5904\u7406\u5168\u5bb6\u6876"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Sources\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prometheus RemoteWrite/Scrap"}),"\n",(0,r.jsx)(n.li,{children:"s3, fluent, logstash"}),"\n",(0,r.jsx)(n.li,{children:"Kubernetes_logs, docker_logs, nginx_metrics, postgresql_metrics, statsd"}),"\n",(0,r.jsx)(n.li,{children:"host_metrics, journald, exec, file, syslog, socket, stdin"}),"\n",(0,r.jsx)(n.li,{children:"nats"}),"\n",(0,r.jsx)(n.li,{children:"internal_logs, internal_metrics"}),"\n",(0,r.jsx)(n.li,{children:"vector"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://dnstap.info/",children:"dnstap"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Transforms"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/configuration/sinks/",children:"Sinks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"S3, ClickHouse, Elastic, Loki, InfluxDB, Prometheus RW/Export, Statsd"}),"\n",(0,r.jsx)(n.li,{children:"Redis, Plusar, Nats, Kafka"}),"\n",(0,r.jsx)(n.li,{children:"Vector"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u89d2\u8272\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["agent - \u91c7\u96c6\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"source -> sink"}),"\n",(0,r.jsx)(n.li,{children:"source \u901a\u5e38\u4e3a file, kubernetes_logs, host_metrics"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["aggregator - \u805a\u5408\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"source \u901a\u5e38\u4e3a vector, syslog, statsd, fluent"}),"\n",(0,r.jsx)(n.li,{children:"transform"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"sidecar - \u5e94\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"issues",type:"info",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["timescale/postgres sink ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/939",children:"#939"})]}),"\n",(0,r.jsxs)(n.li,{children:["PostgreSQL/MySQL sink ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/6556",children:"#6556"})]}),"\n",(0,r.jsxs)(n.li,{children:["sonic sink ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/988",children:"#988"})]}),"\n",(0,r.jsxs)(n.li,{children:["grpc source ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/573",children:"#573"})]}),"\n",(0,r.jsxs)(n.li,{children:["zstd compress ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/2302",children:"#2302"})]}),"\n",(0,r.jsxs)(n.li,{children:["windows_event_log source ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/1206",children:"#1206"})]}),"\n",(0,r.jsxs)(n.li,{children:["VictoriaMetrics sink ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/1343",children:"#1343"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kubernetes_system_events"})," source ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/1293",children:"#1293"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/salesforce/sloop",children:"salesforce/sloop"}),"\nKubernetes History Visualization"]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["stops watching logs from new pods ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/8616",children:"#8616"})]}),"\n"]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["opentelemetry source & sink ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/1444",children:"#1444"})]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# macOS\nbrew tap vectordotdev/brew\nbrew install vector\n\n# https://github.com/vectordotdev/vector/releases\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sources--sinks",children:"Sources & Sinks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"kubernetes_logs"}),"\n",(0,r.jsx)(n.li,{children:"host_metrics"}),"\n",(0,r.jsx)(n.li,{children:"internal_metrics"}),"\n",(0,r.jsxs)(n.li,{children:["prometheus_scrape\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u81ea\u52a8\u53d1\u73b0"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/issues/2303",children:"https://github.com/vectordotdev/vector/issues/2303"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Metrics\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"prometheus_exporter - Prometheus \u7684 /metrics"}),"\n",(0,r.jsx)(n.li,{children:"prometheus_remote_write"}),"\n",(0,r.jsx)(n.li,{children:"statsd"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"console - \u8f93\u51fa\u65e5\u5fd7\u5230 stdout - debug \u7528"}),"\n",(0,r.jsxs)(n.li,{children:["\u901a\u7528\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"vector"}),"\n",(0,r.jsx)(n.li,{children:"file"}),"\n",(0,r.jsx)(n.li,{children:"socket"}),"\n",(0,r.jsx)(n.li,{children:"redis"}),"\n",(0,r.jsx)(n.li,{children:"websocket"}),"\n",(0,r.jsx)(n.li,{children:"nats"}),"\n",(0,r.jsx)(n.li,{children:"kafka"}),"\n",(0,r.jsx)(n.li,{children:"pulsar"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["API\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["/playground\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GraphQL playground"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"/health"}),"\n",(0,r.jsx)(n.li,{children:"/graphql"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/api/",children:"https://vector.dev/docs/reference/api/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:'# data_dir = "/var/lib/vector"\n\n[sources.dummy_logs]\ntype = "generator"\nformat = "syslog"\ninterval = 1\n\n# ector Remap Language https://vector.dev/docs/reference/vrl/\n[transforms.parse_logs]\ntype = "remap"\ninputs = ["dummy_logs"]\nsource = \'\n. = parse_syslog!(string!(.message))\n\'\n\n# Print parsed logs to stdout\n[sinks.print]\ntype = "console"\ninputs = ["parse_logs"]\nencoding.codec = "json"\n\n# GraphQL API http://localhost:8686\n# vector top\n[api]\nenabled = true\naddress = "127.0.0.1:8686"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/etc/vector/"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u90e8\u7f72",children:"\u90e8\u7f72"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://vector.dev/docs/setup/installation/package-managers/helm/",children:"Install Vector using Helm"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://helm.vector.dev",children:"https://helm.vector.dev"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/helm-charts",children:"https://github.com/vectordotdev/helm-charts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3b\u8981\u662f vector \u5305"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["kubectl ",(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector/tree/master/distribution/kubernetes/vector-agent",children:"https://github.com/vectordotdev/vector/tree/master/distribution/kubernetes/vector-agent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"helm template vector vector/vector"})," \u751f\u6210"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/setup/installation/platforms/kubernetes/",children:"Kubernetes"})}),"\n",(0,r.jsxs)(n.li,{children:["\u73af\u5883\u53d8\u91cf\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"VECTOR_SELF_NODE_NAME"}),"\n",(0,r.jsx)(n.li,{children:"VECTOR_SELF_POD_NAME"}),"\n",(0,r.jsx)(n.li,{children:"VECTOR_SELF_POD_NAMESPACE"}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Port"}),(0,r.jsx)(n.th,{children:"Name"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5044"}),(0,r.jsx)(n.td,{children:"logstash"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6000"}),(0,r.jsx)(n.td,{children:"vector"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8080"}),(0,r.jsx)(n.td,{children:"splunk-hec"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8125"}),(0,r.jsx)(n.td,{children:"statsd"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8282"}),(0,r.jsx)(n.td,{children:"datadog-agent"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9000"}),(0,r.jsx)(n.td,{children:"syslog"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9090"}),(0,r.jsx)(n.td,{children:"prom-exporter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"24224"}),(0,r.jsx)(n.td,{children:"fluent"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"agent",children:"Agent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6536\u96c6 host \u4e3b\u673a\u4e0a\u7684 k8s \u65e5\u5fd7"}),"\n",(0,r.jsx)(n.li,{children:"\u6536\u96c6 host metrics \u66b4\u9732\u4e3a prometheus_exporter"}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u4e3a DaemonSet"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"volume"}),(0,r.jsx)(n.th,{children:"from host"}),(0,r.jsx)(n.th,{children:"to path"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"/var/lib/vector"}),(0,r.jsx)(n.td,{children:"/vector-data-dir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"config"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"/etc/vector/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"var-log"}),(0,r.jsx)(n.td,{children:"/var/log"}),(0,r.jsx)(n.td,{children:"/var/log/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"var-lib"}),(0,r.jsx)(n.td,{children:"/var/lib"}),(0,r.jsx)(n.td,{children:"/var/lib/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"procfs"}),(0,r.jsx)(n.td,{children:"/proc"}),(0,r.jsx)(n.td,{children:"/host/proc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sysfs"}),(0,r.jsx)(n.td,{children:"/sys"}),(0,r.jsx)(n.td,{children:"/host/sys"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["/var/lib/vector\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u6765\u5b58\u50a8\u72b6\u6001"}),"\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 /var/lib/vector/kubernetes_logs/checkpoints.json"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"data_dir: /vector-data-dir\napi:\n  enabled: true\n  address: 127.0.0.1:8686\n  playground: false\nsources:\n  kubernetes_logs:\n    type: kubernetes_logs\n  host_metrics:\n    filesystem:\n      devices:\n        excludes: [binfmt_misc]\n      filesystems:\n        excludes: [binfmt_misc]\n      mountPoints:\n        excludes: ['*/proc/sys/fs/binfmt_misc']\n    type: host_metrics\n  internal_metrics:\n    type: internal_metrics\nsinks:\n  prom_exporter:\n    type: prometheus_exporter\n    inputs: [host_metrics, internal_metrics]\n    address: 0.0.0.0:9090\n  stdout:\n    type: console\n    inputs: [kubernetes_logs]\n    encoding:\n      codec: json\n"})}),"\n",(0,r.jsx)(n.h2,{id:"file",children:"file"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/configuration/sources/file/",children:"https://vector.dev/docs/reference/configuration/sources/file/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes_logs",children:"kubernetes_logs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/var/log/pods/**/*.log"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/var/log/pods/<podUID>/<containerName>_<instance#>.log"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"pod UUID -> metadata"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e0d\u4f1a\u91c7\u96c6\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/var/log/containers/*.log"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f03\u7528"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"metrics-server-7f86dff975-bghf6_kube-system_metrics-server-cc0a1b325521c82f8b252e4f4e0ab118a4455376cf45c8ae1987841816325ba3.log"})}),"\n",(0,r.jsx)(n.li,{children:"Docker"}),"\n",(0,r.jsx)(n.li,{children:"\u6587\u4ef6\u540d\u5305\u542b\u66f4\u591a\u5143\u4fe1\u606f"}),"\n",(0,r.jsx)(n.li,{children:"k0s \u7528\u5230\u4e86"}),"\n",(0,r.jsx)(n.li,{children:"\u6709\u4e9b\u73af\u5883 /var/log/containers -> /var/log/pods"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/53022",children:"https://github.com/kubernetes/kubernetes/issues/53022"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/fabric8io/fluent-plugin-kubernetes_metadata_filter/issues/105",children:"https://github.com/fabric8io/fluent-plugin-kubernetes_metadata_filter/issues/105"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6392\u9664\u91c7\u96c6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"vector.dev/exclude: 'true'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/configuration/sources/kubernetes_logs/",children:"https://vector.dev/docs/reference/configuration/sources/kubernetes_logs/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u591a\u884c",children:"\u591a\u884c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"out:\n  type: reduce\n  inputs:\n    - log\n  group_by:\n    - kubernetes_container_id\n  #- container_id\n  merge_strategies:\n    message: concat_newline\n  starts_when: match(string!(.message), r'^[^\\s]')\n  #starts_when: match(string!(.message) , r'^[^}$]')\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vector.dev/docs/reference/configuration/transforms/reduce/",children:"https://vector.dev/docs/reference/configuration/transforms/reduce/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"more-than-one-file-has-the-same-fingerprint",children:"More than one file has the same fingerprint"})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3354:(e,n,s)=>{var r=s(50959),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,i={},o=null,h=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:o,ref:h,props:i,_owner:c.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var r=s(50959);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);