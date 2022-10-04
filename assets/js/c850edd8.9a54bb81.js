"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97962],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(59496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),k=i,b=c["".concat(p,".").concat(k)]||c[k]||u[k]||n;return a?r.createElement(b,l(l({ref:t},s),{},{components:a})):r.createElement(b,l({ref:t},s))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<n;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50918:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return c},metadata:function(){return b},toc:function(){return h}});var r=a(49613),i=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&s(e,a,t[a]);return e};const c={title:"Observability Awesome",tags:["Awesome"]},k="Observability Awesome",b={unversionedId:"service/observability/observability-awesome",id:"service/observability/observability-awesome",title:"Observability Awesome",description:"- getsentry/sentry",source:"@site/../notes/service/observability/observability-awesome.md",sourceDirName:"service/observability",slug:"/service/observability/awesome",permalink:"/notes/service/observability/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/observability-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664871591,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"Observability Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"netdata",permalink:"/notes/service/observability/netdata"},next:{title:"Observability FAQ",permalink:"/notes/service/observability/faq"}},f={},h=[{value:"Tracing",id:"tracing",level:2},{value:"Metrics",id:"metrics",level:2},{value:"APM",id:"apm",level:2}],y={toc:h};function N(e){var t,a=e,{components:i}=a,s=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),s),n(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"observability-awesome"}),"Observability Awesome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/service/observability/tracing/sentry"}),"getsentry/sentry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/louislam/uptime-kuma"}),"louislam/uptime-kuma"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, JS, Vue"),(0,r.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u7f51\u7ad9 uptime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://demo.uptime.kuma.pet/"}),"https://demo.uptime.kuma.pet/")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/parca-dev/parca"}),"parca-dev/parca"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,r.kt)("li",{parentName:"ul"},"Continuous profiling for analysis of CPU and memory usage")))),(0,r.kt)("h2",u({},{id:"tracing"}),"Tracing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/hypertrace/hypertrace"}),"hypertrace/hypertrace"))),(0,r.kt)("h2",u({},{id:"metrics"}),"Metrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/service/observability/metrics/m3"}),"m3db/m3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,r.kt)("li",{parentName:"ul"},"Distributed TSDB, Aggregator and Query Engine, Prometheus Sidecar, Graphite Compatible, Metrics Platform"))),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e/fork Prometheus \u7684\u670d\u52a1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/service/observability/metrics/promxy"}),"promxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/service/observability/metrics/cortex"}),"cortex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/service/observability/metrics/thanos"}),"thanos")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/service/observability/metrics/promxy"}),"jacksontj/promxy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u805a\u5408\u591a\u4e2a prometheus \u8fdb\u884c\u67e5\u8be2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jacksontj/promxy/blob/master/cmd/promxy/config.yaml"}),"config.yaml"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nocache=1 for VictoriaMetrics ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jacksontj/promxy/blob/d4609ebcfd2a50d58f2115c1f079bf4779fc5515/pkg/servergroup/config.go#L96-L99"}),"QueryParams")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/timescale/promscale/tree/master/cmd/prom-migrator"}),"prom-migrator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/grafana/mimir"}),"grafana/mimir"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AGPLv3, Go"),(0,r.kt)("li",{parentName:"ul"},"\u957f\u671f\u5b58\u50a8\uff0c\u4f7f\u7528 S3 \u5b58\u50a8")))),(0,r.kt)("h2",u({},{id:"apm"}),"APM"),(0,r.kt)("admonition",u({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"APM = Metrcis + Trace = Prometheus + Jaeger"),(0,r.kt)("li",{parentName:"ul"},"APM \u5185\u7f6e\u96c6\u6210 - \u800c\u4e0d\u662f\u7b80\u5355\u7684\u7ec4\u5408\u4e24\u4e2a\u573a\u666f - \u4f8b\u5982: Grafana \u540c\u65f6\u663e\u793a Prometheus + Jaeger"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u7528\u4e8e Java \u73af\u5883 - \u66f4\u5bb9\u6613 instrument"),(0,r.kt)("li",{parentName:"ul"},"\u975e Java \u73af\u5883\u4f7f\u7528 OpenTelemetry"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/uptrace/uptrace"}),"uptrace/uptrace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BSL, Golang"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4f7f\u7528 ClickHouse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/SigNoz/signoz"}),"SigNoz/signoz"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,r.kt)("li",{parentName:"ul"},"OpenTelemetry Collector, ClickHouse"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://signoz.io/docs/architecture/"}),"https://signoz.io/docs/architecture/")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/opensearch-project/observability"}),"opensearch-project/observability")),(0,r.kt)("li",{parentName:"ul"},"Graphite"),(0,r.kt)("li",{parentName:"ul"},"Javamelody"),(0,r.kt)("li",{parentName:"ul"},"Stagemonitor"),(0,r.kt)("li",{parentName:"ul"},"Scouter"),(0,r.kt)("li",{parentName:"ul"},"Elastic APM"),(0,r.kt)("li",{parentName:"ul"},"App Metrics"),(0,r.kt)("li",{parentName:"ul"},"Glowroot")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u56fd\u4eba\u5f00\u53d1\u7ef4\u62a4")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/sunface/datav"}),"sunface/datav"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, TS+Go"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/dianping/cat"}),"dianping/cat"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,r.kt)("li",{parentName:"ul"},"\u7f8e\u56e2\u70b9\u8bc4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pinpoint-apm/pinpoint"}),"pinpoint-apm/pinpoint"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,r.kt)("li",{parentName:"ul"},"HBase"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/skywalking"}),"apache/skywalking"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,r.kt)("li",{parentName:"ul"},"ES, H2, MySQL,TiDb, sharding-sphere")))))}N.isMDXComponent=!0}}]);