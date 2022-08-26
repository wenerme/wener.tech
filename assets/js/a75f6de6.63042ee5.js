"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43447],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Prometheus"},p=void 0,s={unversionedId:"service/observability/metrics/prometheus/README",id:"service/observability/metrics/prometheus/README",title:"Prometheus",description:"- Prometheus",source:"@site/notes/service/observability/metrics/prometheus/README.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/",permalink:"/notes/service/observability/metrics/prometheus/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/README.md",tags:[],version:"current",frontMatter:{title:"Prometheus"},sidebar:"docs",previous:{title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/observability/metrics/metrics-faq"},next:{title:"postgres_exporter",permalink:"/notes/service/observability/metrics/prometheus/postgres_exporter"}},m={},u=[{value:"Config",id:"config",level:2},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2},{value:"Pushing",id:"pushing",level:2},{value:"Proxy",id:"proxy",level:2},{value:"label",id:"label",level:2},{value:"Push vs Pull",id:"push-vs-pull",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://prometheus.io"},"Prometheus")),(0,l.kt)("li",{parentName:"ul"},"Prometheus ",(0,l.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/comparison/"},"vs")),(0,l.kt)("li",{parentName:"ul"},"Prometheus \u53ef\u4ee5\u548c Grafana \u96c6\u6210, \u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://grafana.net/dashboards"},"https://grafana.net/dashboards")," \u53ef\u4ee5\u627e\u5230\u5f88\u591a\u9884\u5b9a\u4e49\u7684\u9762\u677f\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"Prometheus vs TICK",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pull vs Push"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prometheus/pushgateway"},"prometheus/pushgateway")),(0,l.kt)("li",{parentName:"ul"},"\u78c1\u76d8\u7a7a\u95f4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"needed_disk_space = retention_time_seconds * ingested_samples_per_second * bytes_per_sample"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bytes_per_sample \u4e00\u822c\u4e3a 1\u30012 bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.time")," \u9ed8\u8ba4 15d"),(0,l.kt)("li",{parentName:"ul"},"node_exporter \u5927\u7ea6 3000 \u6307\u6807"),(0,l.kt)("li",{parentName:"ul"},"scrape_interval 15s"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(3000/15*2 * 15*24*60*60) /1000/1000 = 518M")))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.robustperception.io/configuring-prometheus-storage-retention"},"https://www.robustperception.io/configuring-prometheus-storage-retention"))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Prometheus \u4e0d\u652f\u6301 auth\uff0c\u5982\u679c\u8981\u5bf9\u5916\u66b4\u9732\u5efa\u8bae\u6dfb\u52a0\u53cd\u5411\u4ee3\u7406"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5b89\u88c5\nbrew install prometheus\n# \u4ece\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5\ngo install github.com/prometheus/prometheus@latest\n\n# \u542f\u52a8 \u9ed8\u8ba4\u524d\u7aef\u9875\u9762 http://localhost:9090\nprometheus --config.file ~/.config/prometheus.yml\n\n# docker \u542f\u52a8\ndocker run \\\n  -p 9090:9090 \\\n  -v /etc/prometheus:/etc/prometheus \\\n  prom/prometheus\n\n# \u6216\u901a\u8fc7 brew \u542f\u52a8\u670d\u52a1\n# \u5982\u679c\u6ca1\u6709 --storage.tsdb.path \u53ef\u80fd\u51fa\u73b0\u6743\u9650\u95ee\u9898\necho "--config.file $HOME/.config/prometheus.yml --storage.tsdb.path $HOME/.data/prometheus" > /usr/local/etc/prometheus.args\nbrew services start prometheus\n# \u9519\u8bef\u65e5\u5fd7\ncat /usr/local/var/log/prometheus.err.log\n# \u6b63\u5e38\u65e5\u5fd7\ncat /usr/local/var/log/prometheus.log\n\n# \u7ba1\u7406\u63a5\u53e3\n# --web.enable-admin-api \u542f\u7528 /api/*/admin/ \u76f8\u5173\u63a5\u53e3\n# --web.enable-lifecycle \u542f\u7528 reload \u548c quite\n# \u53c2\u8003 https://prometheus.io/docs/operating/security/\nprometheus --config.file ~/.config/prometheus.yml --web.enable-admin-api --web.enable-lifecycle\n# brew \u53c2\u6570\necho "--config.file $HOME/.config/prometheus.yml --storage.tsdb.path $HOME/.data/prometheus --web.enable-admin-api --web.enable-lifecycle" > /usr/local/etc/prometheus.args\n# \u91cd\u542f\u670d\u52a1\nbrew services restart prometheus\n# \u91cd\u8f7d\u914d\u7f6e\ncurl -X POST http://localhost:9090/-/reload\n\n# \u4e3b\u673a\u8282\u70b9\u76d1\u63a7\nbrew install node_exporter\n# \u901a\u8fc7 service \u542f\u52a8\necho --web.listen-address :9101 > /usr/local/etc/node_exporter.args\nbrew services start node_exporter\n\n# \u76f4\u63a5\u542f\u52a8\nnode_exporter --web.listen-address :9101\n\n# Docker\n# ===================\ndocker pull prom/prometheus\ndocker pull prom/alertmanager\n# \u9700\u8981\u6302\u8f7d /proc\ndocker pull prom/node-exporter\ndocker pull prom/blackbox-exporter\ndocker pull prom/container-exporter\ndocker pull prom/mysqld-exporter\n\n# node_exporter \u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u4e0d\u592a\u597d\ngo get github.com/prometheus/node_exporter\n\n# \u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u4e3a admin/admin\ndocker pull grafana/grafana\n\ndocker network create --subnet=172.18.0.0/16 mon-net\n\ndocker run --net mon-net --ip 172.18.0.10 -i -p 12000:3000 grafana/grafana\ndocker run --net mon-net --ip 172.18.0.20 -i -p 12001:9090 prom/prometheus\n\n# http://docs.grafana.org/installation/docker/\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 12000:3000 \\\n  -e "GF_SERVER_ROOT_URL=http://grafana.server.name"  \\\n  -e "GF_SECURITY_ADMIN_PASSWORD=secret"  \\\n  grafana/grafana\n')),(0,l.kt)("h2",{id:"config"},"Config"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0d\u652f\u6301\u73af\u5883\u53d8\u91cf\u66ff\u6362\uff0c\u4f46\u6d89\u53ca\u5230\u51ed\u8bc1\u4fe1\u606f\u7684\u5730\u65b9\u90fd\u652f\u6301 \u6587\u4ef6 \u6216\u4f7f\u7528 \u5e38\u7528\u7684 \u73af\u5883\u53d8\u91cf"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5168\u5c40\u914d\u7f6e\nglobal:\n  # \u6293\u53d6\u95f4\u9694\uff0c\u9ed8\u8ba4 1m\n  scrape_interval: 15s\n  # \u6293\u53d6\u8d85\u65f6\uff0c\u9ed8\u8ba4 10s\n  scrape_timeout: 10s\n  # \u8ba1\u7b97\u89c4\u5219\u95f4\u9694\uff0c\u9ed8\u8ba4 1m\n  evaluation_interval: 15s\n\n# \u544a\u8b66\u914d\u7f6e\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n          # - alertmanager:9093\n\n# \u5468\u671f\u6027\u8ba1\u7b97\u7684\u89c4\u5219\u6587\u4ef6\nrule_files:\n  # - \"first_rules.yml\"\n  # - \"second_rules.yml\"\n\n# \u6293\u53d6\u914d\u7f6e\nscrape_configs:\n  # \u4efb\u52a1\u540d\u5b57\uff0c\u4f1a\u6dfb\u52a0\u4e00\u4e2a job=$job_name \u7684\u6807\u7b7e\n  - job_name: 'prometheus'\n    # \u6307\u6807\u8def\u5f84\uff0c\u9ed8\u8ba4 '/metrics'\n    metrics_path: '/metrics'\n    # \u8bf7\u6c42 schema\uff0c\u9ed8\u8ba4 'http'\n    scheme: 'http'\n    # \u9759\u6001\u914d\u7f6e\n    static_configs:\n      # \u6293\u53d6\u76ee\u6807\n      - targets: ['localhost:9090']\n")),(0,l.kt)("h2",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration"},"\u652f\u6301\u914d\u7f6e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"azure"),(0,l.kt)("li",{parentName:"ul"},"consul - \u670d\u52a1 catalog"),(0,l.kt)("li",{parentName:"ul"},"digitalocean"),(0,l.kt)("li",{parentName:"ul"},"dockerswarm"),(0,l.kt)("li",{parentName:"ul"},"dns - SVR \u8bb0\u5f55"),(0,l.kt)("li",{parentName:"ul"},"ec2"),(0,l.kt)("li",{parentName:"ul"},"openstack"),(0,l.kt)("li",{parentName:"ul"},"file - \u68c0\u6d4b\u6587\u4ef6\u53d8\u5316",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u4e0e static_config \u76f8\u540c"))),(0,l.kt)("li",{parentName:"ul"},"gce"),(0,l.kt)("li",{parentName:"ul"},"kubernetes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"node\u3001service\u3001pod\u3001endpoints\u3001ingress"))),(0,l.kt)("li",{parentName:"ul"},"marathon"),(0,l.kt)("li",{parentName:"ul"},"nerve"),(0,l.kt)("li",{parentName:"ul"},"serverset"),(0,l.kt)("li",{parentName:"ul"},"triton"))),(0,l.kt)("li",{parentName:"ul"},"mDNS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus/issues/2537"},"#2537")," - Cannot scrape targets specified by mDNS name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/msiebuhr/prometheus-mdns-sd"},"msiebuhr/prometheus-mdns-sd"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5199\u5165\u6587\u4ef6\uff0c\u4f7f\u7528\u6587\u4ef6\u53d1\u73b0")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# _prometheus-http._tcp\n# _prometheus-https._tcp\ngo get github.com/msiebuhr/prometheus-mdns-sd\n#\nprometheus-mdns-sd -out /etc/prometheus/mdns-sd.json\n\ncat <<XML > /etc/avahi/services/node-exporter.service\n<service-group>\n  <name replace-wildcards="yes">%h</name>\n\n  <service>\n    <type>_prometheus-http._tcp</type>\n    <port>9100</port>\n  </service>\n</service-group>\nXML\n\n# macOS\ndns-sd -R "node_exporter metrics" _prometheus-http._tcp. . 9100 path=/metrics\n')),(0,l.kt)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/operating/integrations"},"INTEGRATIONS")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bfb\u5199\u7684\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Azure Data Explorer"),(0,l.kt)("li",{parentName:"ul"},"Cortex"),(0,l.kt)("li",{parentName:"ul"},"CrateDB"),(0,l.kt)("li",{parentName:"ul"},"Google BigQuery"),(0,l.kt)("li",{parentName:"ul"},"Google Cloud Spanner"),(0,l.kt)("li",{parentName:"ul"},"InfluxDB"),(0,l.kt)("li",{parentName:"ul"},"IRONdb"),(0,l.kt)("li",{parentName:"ul"},"M3DB"),(0,l.kt)("li",{parentName:"ul"},"MetricFire"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL/TimescaleDB"),(0,l.kt)("li",{parentName:"ul"},"QuasarDB"),(0,l.kt)("li",{parentName:"ul"},"Splunk"),(0,l.kt)("li",{parentName:"ul"},"TiKV"),(0,l.kt)("li",{parentName:"ul"},"Thanos")))),(0,l.kt)("h2",{id:"pushing"},"Pushing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/practices/pushing/"},"https://prometheus.io/docs/practices/pushing/")),(0,l.kt)("li",{parentName:"ul"},"only valid use case for the Pushgateway is for capturing the outcome of a service-level batch job")),(0,l.kt)("h2",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prometheus-community/PushProx"},"https://github.com/prometheus-community/PushProx"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: node\n    # \u4ee3\u7406\n    proxy_url: http://proxy:8080/\n    static_configs:\n      - targets: ['client:9100'] # Presuming the FQDN of the client is \"client\".\n")),(0,l.kt)("h2",{id:"label"},"label"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__")," \u5f00\u5934\u7684\u4e3a\u5185\u90e8 label"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__meta")," \u53ef\u80fd\u7531 Service Discovery \u6dfb\u52a0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__tmp")," \u53ef\u7531\u7528\u6237\u4f7f\u7528")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"__address__")),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"__schema__")),(0,l.kt)("td",{parentName:"tr",align:null},"http/https")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"__name__")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"__param_target")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"?target="))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"__param_module")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"?module="))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- job_name: 'printer'\n  static_configs:\n    - targets:\n        - 192.168.1.2\n  metrics_path: /snmp\n  params:\n    module: [printer_mib]\n  relabel_configs:\n    # __param_target=__address__\n    - source_labels: [__address__]\n      target_label: __param_target\n    # instance=__param_target\n    - source_labels: [__param_target]\n      target_label: instance\n    - target_label: __address__\n      # snmp exporter \u5730\u5740\n      replacement: 192.168.1.3:9116\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"push-vs-pull"},"Push vs Pull"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Push",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IoT \u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u9694\u79bb\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1H47v7WfyKkSLMrR8_iku6u9VB73WrVzBHb2SB6dL9_g"},"Pros/Cons of allowing push in Prometheus"))))}d.isMDXComponent=!0}}]);