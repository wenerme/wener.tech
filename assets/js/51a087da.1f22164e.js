"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45761],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(r),h=a,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},20201:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"prometheus-storage",title:"Prometheus \u5b58\u50a8"},l=void 0,m={unversionedId:"service/observability/metrics/prometheus/prometheus-storage",id:"service/observability/metrics/prometheus/prometheus-storage",isDocsHomePage:!1,title:"Prometheus \u5b58\u50a8",description:"Tips",source:"@site/notes/service/observability/metrics/prometheus/prometheus-storage.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/prometheus-storage",permalink:"/notes/service/observability/metrics/prometheus/prometheus-storage",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus-storage.md",tags:[],version:"current",frontMatter:{id:"prometheus-storage",title:"Prometheus \u5b58\u50a8"},sidebar:"docs",previous:{title:"Prometheus K8S",permalink:"/notes/service/observability/metrics/prometheus/prometheus-k8s"},next:{title:"PromQL",permalink:"/notes/service/observability/metrics/prometheus/promql"}},p=[{value:"Tips",id:"tips",children:[]},{value:"Remote",id:"remote",children:[]}],u={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u6d41\u65b9\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Remote API"),(0,i.kt)("li",{parentName:"ul"},"Sidecar \u4e0a\u4f20 Chunk \u505a\u957f\u671f + Sidecar \u8bf7\u6c42 Prometheus \u67e5\u770b\u5b9e\u65f6"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/m3db/m3"},"m3db/m3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f TSDB\uff0c\u805a\u5408\u67e5\u8be2\u5f15\u64ce"),(0,i.kt)("li",{parentName:"ul"},"Prometheus Sidecar, Graphite Compatible, Metrics Platform"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/VictoriaMetrics/VictoriaMetrics"},"VictoriaMetrics/VictoriaMetrics")," - VictoriaMetrics - fast, cost-effective and scalable time series database, long-term remote storage for Prometheus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenObservability/OpenMetrics"},"OpenObservability/OpenMetrics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/timescale/timescaledb"},"timescale/timescaledb"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e PG \u7684\u884d\u751f\u6570\u636e\u5e93"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/timescale/timescale-prometheus"},"timescale/timescale-prometheus"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e timescaledb \u5b9e\u73b0 Prometheus \u63a5\u53e3"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cortexproject/cortex"},"cortexproject/cortex"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cortexmetrics.io/docs/architecture/"},"\u67b6\u6784")),(0,i.kt)("li",{parentName:"ul"},"Consul \u4e2d\u592e\u8c03\u5ea6\u3001PG \u914d\u7f6e\u5b58\u50a8\u3001Cassandra \u6570\u636e\u5b58\u50a8\u3001S3 \u957f\u671f\u51b7\u6570\u636e\u3001Memcache \u67e5\u8be2\u7f13\u5b58"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/thanos-io/thanos"},"thanos-io/thanos"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thanos.io/design.md/"},"\u8bbe\u8ba1")),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u3001\u5bf9\u8c61\u5b58\u50a8\u3001\u67e5\u8be2\u805a\u5408\u53bb\u91cd"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/blog/2019/11/21/promcon-recap-two-households-both-alike-in-dignity-cortex-and-thanos"},"Cortex and Thanos"))))),(0,i.kt)("h2",{id:"remote"},"Remote"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.promlts.com/resources/prometheus-remote-storage"},"Prometheus Remote Storage")),(0,i.kt)("li",{parentName:"ul"},"\u65e5\u5fd7",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dropped sample for series that was not explicitly dropped via relabelling",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u7531\u4e8e relabel \u4e4b\u7c7b\u7684\u539f\u56e0\u5bfc\u81f4\u65f6\u95f4\u5e8f\u5217\u6ca1\u6709\u4e86 label\uff0c\u4e22\u5f03\u8fd9\u7c7b\u6570\u636e"))),(0,i.kt)("li",{parentName:"ul"},"Remote storage resharding from N to M",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u52a8\u6001\u961f\u5217\u8c03\u6574\u5206\u7247 - \u589e\u957f\u4ee5\u4fdd\u8bc1\u8ddf\u4e0a\u91c7\u96c6\u7684\u6307\u6807\u6570\uff0c\u5199\u5165\u901f\u7387"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u6807\u6570\u4fbf\u5c11\u4e86\u4e5f\u4f1a\u51cf\u5c11"))),(0,i.kt)("li",{parentName:"ul"},"Currently resharding, skipping",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6b63\u5728\u8c03\u6574\u5206\u7247\u7684\u65f6\u5019\u53c8\u89e6\u53d1\u4e86\u8c03\u6574"))),(0,i.kt)("li",{parentName:"ul"},"Failed to flush all samples on shutdown",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728\u505c\u6b62\u4e00\u4e2a\u961f\u5217\u65f6\u65e0\u6cd5\u5199\u5165\u5168\u90e8\u6307\u6807"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u8fdc\u7a0b\u5b58\u50a8\u6709\u95ee\u9898\uff0c\u53ef\u80fd\u8d85\u65f6"))))),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"rps \u8f83\u5927\uff0c\u5bf9\u53cd\u5411\u4ee3\u7406\u6709\u4e00\u5b9a\u6027\u80fd\u5f71\u54cd"),(0,i.kt)("li",{parentName:"ul"},"prometheus \u4f1a\u591a\u7528\u7ea6 25% \u5185\u5b58"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus/issues/5627"},"#5627")," - Remote Write Shard Flapping"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/practices/remote_write"},"REMOTE WRITE TUNING"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"remote_write:\n  - url: http://127.0.0.1:1234\n    # \u552f\u4e00\u8fdc\u7a0b\u540d\u5b57 - \u7528\u4e8e\u5185\u90e8\u6807\u793a - \u4f1a\u5728 prometheus \u6307\u6807\u548c\u65e5\u5fd7\u4e2d\u4f53\u73b0\n    # \u4e0d\u8bbe\u7f6e\u5219\u4f1a\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u5b57\n    name: \n    # \u8fdc\u7a0b\u5199\u8d85\u65f6 - \u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\u5efa\u8bae\u8bbe\u7f6e\u5927\u4e00\u70b9\n    # \u5982\u679c\u8bbe\u7f6e\u5c0f\u4e86\u4f1a\u5bfc\u81f4\u6570\u636e\u4e00\u76f4\u5931\u8d25\n    # \u5982\u679c\u4f7f\u7528\u4e86\u53cd\u5411\u4ee3\u7406\uff0c\u4e5f\u8981\u6ce8\u610f\u4fee\u6539\u53cd\u5411\u4ee3\u7406\u7684\u8d85\u65f6\u65f6\u95f4\n    remote_timeout: 30s\n    \n    # \u6807\u7b7e\u4fee\u6539\n    write_relabel_configs:\n    # \u79fb\u9664 go_ \u5f00\u5934\u7684\u6307\u6807\n    - action: drop\n      regex: go_.*\n      source_labels: [__name__]\n\n    # HTTP Authorization: Basic\n    basic_auth:\n      username: username\n      password: password\n      # \u4ece\u6587\u4ef6\u8bfb\u53d6\u5bc6\u7801\n      password_file: /etc/prometheus/my-remote-password\n\n    # HTTP Authorization: Bearer\n    # \u4f8b\u5982 JWT\n    bearer_token: <string>\n    bearer_token_file: /etc/prometheus/my-remote-token\n\n    # TLS \u914d\u7f6e\n    tls_config:\n      [ <tls_config> ]\n\n    # HTTP \u4ee3\u7406\n    proxy_url: http://127.0.0.1:8080\n\n    # \u961f\u5217\u914d\u7f6e\n    # \u5f53\u6307\u6807\u91cf\u5927\u7684\u65f6\u5019\u6bd4\u8f83\u91cd\u8981\n    queue_config:\n      # Number of samples to buffer per shard before we block reading of more\n      # samples from the WAL. It is recommended to have enough capacity in each\n      # shard to buffer several requests to keep throughput up while processing\n      # occasional slow remote requests.\n      # \u6bcf\u4e2a shard \u7684\u5bb9\u91cf - \u8bfb\u53d6 WAL \u7684\u7f13\u51b2\u6570\u91cf\n      # \u8d85\u8fc7\u5219\u4f1a\u6269\u5bb9 - \u8bbe\u7f6e\u8fc7\u5927\u53ef\u80fd\u4f1a\u5bfc\u81f4 OOM\n      # \u5efa\u8bae max_samples_per_send \u7684 3-10 \u500d\n      capacity: 500\n      # \u6700\u5c0f shard \u6570\u91cf - \u8c03\u6574\u6700\u5c0f\u53ef\u907f\u514d\u521d\u59cb rw \u5199\u5165\u8fc7\u6162\n      # \u5982\u679c rw \u8ddf\u4e0d\u4e0a\u65f6\u4f1a\u589e\u52a0\n      min_shards: 1\n      # \u6700\u5927 shard \u6570\u91cf - \u5e76\u53d1\u6570\u8bf7\u6c42\u6570\n      max_shards: 1000\n      # \u6bcf\u6b21\u6279\u91cf\u53d1\u9001\u7684\u6837\u672c\u6570 - \u9ed8\u8ba4\u8f83\u5c0f\uff0c\u4e3a\u4e86\u517c\u5bb9\u66f4\u591a\u7cfb\u7edf\n      # \u8bbe\u7f6e\u5927\u53ef\u4ee5\u4f7f\u541e\u5410\u66f4\u5927 - \u538b\u7f29\u66f4\u597d\uff0c\u5360\u7528\u66f4\u5c11\u7f51\u7edc\n      max_samples_per_send: 100\n      # \u6bcf\u6b21\u53d1\u9001\u7684\u6700\u5927\u7b49\u5f85\u65f6\u95f4 - \u5373\u4fbf\u6ca1\u8fbe\u5230 max_samples_per_send \u4e5f\u53d1\u9001\n      # \u5728\u5ef6\u8fdf\u884c\u8981\u6c42\u4e0d\u9ad8\u573a\u666f\u53ef\u4ee5\u8bbe\u7f6e\u9ad8\u4e00\u70b9 - \u4e5f\u80fd\u589e\u52a0\u6bcf\u6b21\u53d1\u9001\u7684\u91cf\n      batch_send_deadline: 5s\n      \n      # \u4f1a\u4e00\u76f4\u91cd\u8bd5 - \u6ca1\u6709\u6700\u5927\u7b49\u5f85\u6b21\u6570\n      # \u521d\u6b21\u91cd\u8bd5\u7b49\u5f85\n      min_backoff: 30ms\n      # \u6700\u5927\u91cd\u8bd5\u7b49\u5f85\n      max_backoff: 100ms\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u793a\u4f8b\u914d\u7f6e\nqueue_config:\n  # 500\n  capacity: 2500\n  # 1000\n  max_shards: 1000\n  # 1\n  min_shards: 200\n  # 100\n  max_samples_per_send: 5000\n  # 5s\n  batch_send_deadline: 10s\n")))}c.isMDXComponent=!0}}]);