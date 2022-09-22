"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38399],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=o(a),k=n,N=c["".concat(p,".").concat(k)]||c[k]||s[k]||i;return a?r.createElement(N,l(l({ref:t},u),{},{components:a})):r.createElement(N,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59711:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return d}});var r=a(49613),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(m)for(var a of m(t))o.call(t,a)&&u(e,a,t[a]);return e};const c={title:"VictoriaMetrics"},k="VictoriaMetrics",N={unversionedId:"service/observability/metrics/victoria-metrics",id:"service/observability/metrics/victoria-metrics",title:"VictoriaMetrics",description:"- VictoriaMetrics/VictoriaMetrics \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/observability/metrics/victoria-metrics.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/victoria-metrics",permalink:"/notes/service/observability/metrics/victoria-metrics",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/victoria-metrics.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"VictoriaMetrics"},sidebar:"docs",previous:{title:"VictoriaMetrics Operator",permalink:"/notes/service/observability/metrics/victoria-metrics-operator"},next:{title:"netdata",permalink:"/notes/service/observability/netdata"}},v={},d=[{value:"Notes",id:"notes",level:2},{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",level:2},{value:"vmauth",id:"vmauth",level:2},{value:"vmctl",id:"vmctl",level:2},{value:"vmagent",id:"vmagent",level:2},{value:"Lens",id:"lens",level:2},{value:"cannot handle more than 4 concurrent inserts during 1m0s",id:"cannot-handle-more-than-4-concurrent-inserts-during-1m0s",level:2}],h={toc:d};function g(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},h),u),i(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"victoriametrics"}),"VictoriaMetrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/VictoriaMetrics/VictoriaMetrics"}),"VictoriaMetrics/VictoriaMetrics")," \u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65f6\u5e8f\u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u3001\u4f4e\u6210\u672c\u3001\u5927\u89c4\u6a21"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u96c6\u7fa4"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u63a8\u8350\u5355\u8282\u70b9 - \u5c0f\u4e8e \u767e\u4e07/s \u7684\u6307\u6807\u901f\u7387\u63a8\u8350\u5355\u8282\u70b9\u7248\u672c - \u901a\u8fc7\u5782\u76f4\u6269\u5bb9/\u589e\u52a0 CPU \u5185\u5b58\u6765\u63d0\u5347\u6027\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u538b\u7f29\u7387 - \u78c1\u76d8\u5360\u7528\u7a7a\u95f4\u5c0f - IO \u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9\u6027\u80fd\u53ef\u53c2\u8003 ",(0,r.kt)("a",s({parentName:"li"},{href:"https://valyala.medium.com/92550d78d8ae"}),"measuring-vertical-scalability"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1vCPU 4G - 500k/s"),(0,r.kt)("li",{parentName:"ul"},"2vCPU 8G - 800k/s"),(0,r.kt)("li",{parentName:"ul"},"64vCPU 240G - 19M/s"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u5448\u7ebf\u6027\u589e\u957f - 1.6-1.8x"))))),(0,r.kt)("li",{parentName:"ul"},"http://victoriametrics:8428/api/v1/write"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u8bbe\u8ba1\u53c2\u8003 ClickHouse"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"grafana dashboard vmcluster ",(0,r.kt)("a",s({parentName:"li"},{href:"https://grafana.com/grafana/dashboards/11176"}),"11176")),(0,r.kt)("li",{parentName:"ul"},"grafana dashboard vmsingle ",(0,r.kt)("a",s({parentName:"li"},{href:"https://grafana.com/grafana/dashboards/10229"}),"10229"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"port"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"8480"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"vminsert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"8481"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"vmselect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"8482"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"vmstorage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"8427"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"vmauth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"8428"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"single")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"8429"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"vmagent/vmsingle")))),(0,r.kt)("admonition",s({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e0b \u91c7\u6837"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9\u4e0d\u652f\u6301\u591a\u79df\u6237"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 remote_read"),(0,r.kt)("li",{parentName:"ul"},"histogram_quantile \u6709\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/VictoriaMetrics/VictoriaMetrics/issues/678"}),"#678")))))),(0,r.kt)("admonition",s({},{type:"warning"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"vmauth \u65e0\u6cd5\u8bbf\u95ee /vmui ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/VictoriaMetrics/VictoriaMetrics/issues/1752"}),"#1752")))),(0,r.kt)("h2",s({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4 - \u6bcf\u4e2a\u7ec4\u4ef6\u53ef\u5355\u72ec\u6269\u5bb9 - \u5206\u652f ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/VictoriaMetrics/VictoriaMetrics/tree/cluster"}),"cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u526f\u672c\u4e0d\u80fd\u7528\u4e8e\u5bb9\u707e")," - \u901a\u8fc7\u5907\u4efd\u5bb9\u707e - \u526f\u672c\u53ef\u63d0\u5347\u5199\u5165\u67e5\u8be2\u6027\u80fd - \u6269\u5bb9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"K8S \u4e0a\u63a8\u8350\u4f7f\u7528\u5e26\u526f\u672c\u529f\u80fd\u7684 PV"))),(0,r.kt)("li",{parentName:"ul"},"\u526f\u672c\u5728 vminsert \u5c42\u63a7\u5236 - \u5199\u5165\u591a\u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"URL \u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"accountID:projectID")," \u5b9e\u73b0\u591a\u79df\u6237",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e24\u4e2a ID \u4e3a uint32"),(0,r.kt)("li",{parentName:"ul"},"projectID \u9ed8\u8ba4 0"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\uff0c\u53ea\u5173\u5fc3\u6570\u636e\u7ef4\u5ea6\u5212\u5206\uff0c\u4e0d\u5173\u5fc3\u6388\u6743\u4e4b\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u81ea\u52a8\u8d1f\u8f7d\u5230 vmstorage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u652f\u6301\u5355\u4e2a\u8bf7\u6c42\u67e5\u8be2\u591a\u4e2a\u79df\u6237")))),(0,r.kt)("li",{parentName:"ul"},"vmstorage - \u5b58\u50a8\u6570\u636e - shared noting \u7ed3\u6784 - \u8282\u70b9\u4e4b\u95f4\u4e0d\u4e92\u76f8\u611f\u77e5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"vCPUs = ingestion_rate / 150K"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RAM = 2 * active_time_series * 1KB * replicationFactor")),(0,r.kt)("li",{parentName:"ul"},"active_time_series - 1h \u5185\u6709\u8bfb\u5199"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storage_space = ingestion_rate * retention_seconds")))),(0,r.kt)("li",{parentName:"ul"},"vminsert - \u4ee3\u7406\u5206\u53d1\u5230\u591a\u4e2a vmstorage - \u4e00\u81f4\u6027 Hash",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"vCPUs = ingestion_rate / 150K"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u6027\u80fd\u5e94\u8be5\u4e0e vmstorage \u76f8\u540c"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58 1G+"))),(0,r.kt)("li",{parentName:"ul"},"vmagent - \u91c7\u96c6"),(0,r.kt)("li",{parentName:"ul"},"vmselect - \u901a\u8fc7 vmselect \u805a\u5408\u67e5\u8be2\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"vmauth - auth \u4ee3\u7406 - \u7b80\u5355\u7684\u53cd\u5411\u4ee3\u7406+\u8d1f\u8f7d\u5747\u8861",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 bearer token, basic auth"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e auth \u4fe1\u606f\u9009\u62e9\u4ee3\u7406\u4e0a\u6e38"))),(0,r.kt)("li",{parentName:"ul"},"vmbackup - \u5c06 snapshot \u5907\u4efd\u5230\u5176\u4ed6\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"vmrestore - \u5c06 backup \u7684\u5185\u5bb9\u6062\u590d"),(0,r.kt)("li",{parentName:"ul"},"vmalert - \u544a\u8b66 \u548c \u8bb0\u5f55"),(0,r.kt)("li",{parentName:"ul"},"vmctl - \u547d\u4ee4\u884c\u5de5\u5177 - \u6570\u636e\u8fc1\u79fb"),(0,r.kt)("li",{parentName:"ul"},"vmgateway - \u6536\u8d39\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"vmbackupmanager - \u6536\u8d39\u7ec4\u4ef6")),(0,r.kt)("h2",s({},{id:"\u96c6\u7fa4"}),"\u96c6\u7fa4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"accountID",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"accountID:projectID"),(0,r.kt)("li",{parentName:"ul"},"accountID - int32"),(0,r.kt)("li",{parentName:"ul"},"projectID - int32 - \u9ed8\u8ba4 0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://<vminsert>:8480/insert/<accountID>/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"prometheus/api/v1/write"),(0,r.kt)("li",{parentName:"ul"},"prometheus/api/v1/import"),(0,r.kt)("li",{parentName:"ul"},"prometheus/api/v1/import/native"),(0,r.kt)("li",{parentName:"ul"},"prometheus/api/v1/import/csv"),(0,r.kt)("li",{parentName:"ul"},"prometheus/api/v1/import/prometheus"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://<vmselect>:8481"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/select/<accountID>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/prometheus"),(0,r.kt)("li",{parentName:"ul"},"/graphite"),(0,r.kt)("li",{parentName:"ul"},"/vmui"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/delete/<accountID>/prometheus/api/v1/admin/tsdb/delete_series?match[]=<timeseries_selector_for_delete>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/status/top_queries")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://<vmstorage>:8482"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/internal/force_merge - \u89e6\u53d1\u5408\u5e76\u538b\u7f29"),(0,r.kt)("li",{parentName:"ul"},"/snapshot/create"),(0,r.kt)("li",{parentName:"ul"},"/snapshot/list"),(0,r.kt)("li",{parentName:"ul"},"/snapshot/delete"),(0,r.kt)("li",{parentName:"ul"},"/snapshot/delete?snapshot=$ID"),(0,r.kt)("li",{parentName:"ul"},"/snapshot/delete_all"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://<vmauth>:8427"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/-/reload")))),(0,r.kt)("h2",s({},{id:"vmauth"}),"vmauth"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml",metastring:'title="\u751f\u6210\u7684 src_paths"',title:'"\u751f\u6210\u7684','src_paths"':!0}),"users:\n  - url_map:\n      - url_prefix: http://vmselect-demo.monitoring-system.svc:8481/select/500\n        src_paths:\n          - /vmui\n          - /vmui/vmui\n          - /graph\n          - /prometheus/graph\n          - /prometheus/api/v1/label.*\n          - /graphite.*\n          - /prometheus/api/v1/query.*\n          - /prometheus/api/v1/rules\n          - /prometheus/api/v1/alerts\n          - /prometheus/api/v1/metadata\n          - /prometheus/api/v1/rules\n          - /prometheus/api/v1/series.*\n          - /prometheus/api/v1/status.*\n          - /prometheus/api/v1/export.*\n          - /prometheus/federate\n          - /prometheus/api/v1/admin/tsdb/delete_series\n      - url_prefix: http://vminsert-demo.monitoring-system.svc:8480/insert/500\n        src_paths:\n          - /prometheus/api/v1/write\n          - /prometheus/api/v1/import.*\n          - /influx/.*\n          - /datadog/.*\n")),(0,r.kt)("h2",s({},{id:"vmctl"}),"vmctl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u8fc1\u79fb Prometheus, Thanos, InfluxDB, OpenTSDB"),(0,r.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u6b65\u9aa4",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 remote_write \u5199\u5165\u5230 vm"),(0,r.kt)("li",{parentName:"ol"},"\u8fc1\u79fb\u65e7\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u53bb\u6389\u65e7\u7684 remote_write"),(0,r.kt)("li",{parentName:"ol"},"\u505c\u6b62\u65e7\u670d\u52a1")))),(0,r.kt)("admonition",s({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5bfc\u5165\u4e0b\u91c7\u6837\u540e\u7684\u6570\u636e ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/VictoriaMetrics/VictoriaMetrics/issues/1101"}),"#1101")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# thanos\nvmctl prometheus --prom-snapshot thanos-data --vm-addr http://victoria-metrics:8428\n")),(0,r.kt)("h2",s({},{id:"vmagent"}),"vmagent"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"maxBlockSize"),(0,r.kt)("li",{parentName:"ul"},"maxDiskUsagePerURL=1073741824 - 1G"),(0,r.kt)("li",{parentName:"ul"},"queues"),(0,r.kt)("li",{parentName:"ul"},"showURL"),(0,r.kt)("li",{parentName:"ul"},"tmpDataPath",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u786e\u4fdd\u6570\u636e\u6301\u4e45\u5316\uff0c\u5efa\u8bae\u6620\u5c04\u5b58\u50a8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/tmp/vmagent-remotewrite-data"))))),(0,r.kt)("li",{parentName:"ul"},"flushInterval=1s"),(0,r.kt)("li",{parentName:"ul"},"label",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u989d\u5916 Label")))),(0,r.kt)("h2",s({},{id:"lens"}),"Lens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vmcluster",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Helm"),(0,r.kt)("li",{parentName:"ul"},"monitoring-system/vmselect-NAME:8481/select/0/prometheus"))),(0,r.kt)("li",{parentName:"ul"},"vmsingle",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Helm"),(0,r.kt)("li",{parentName:"ul"},"monitoring-system/vmsingle-victoria-metrics-stack:8429/prometheus")))),(0,r.kt)("h2",s({},{id:"cannot-handle-more-than-4-concurrent-inserts-during-1m0s"}),"cannot handle more than 4 concurrent inserts during 1m0s"),(0,r.kt)("p",null,"\u5c1d\u8bd5\u589e\u52a0 vmstorage \u8d44\u6e90\uff0c\u68c0\u67e5 vmstorage \u72b6\u6001\u3002"))}g.isMDXComponent=!0}}]);