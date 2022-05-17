"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73143],{3905:function(e,t,l){l.d(t,{Zo:function(){return m},kt:function(){return c}});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),g=p(l),c=a,k=g["".concat(o,".").concat(c)]||g[c]||s[c]||r;return l?n.createElement(k,i(i({ref:t},m),{},{components:l})):n.createElement(k,i({ref:t},m))}));function c(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}g.displayName="MDXCreateElement"},51330:function(e,t,l){l.r(t),l.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=l(87462),a=l(63366),r=(l(67294),l(3905)),i=["components"],u={title:"Logging Awesome",tags:["Awesome"]},o=void 0,p={unversionedId:"service/observability/logging/logging-awesome",id:"service/observability/logging/logging-awesome",title:"Logging Awesome",description:"- Logging Stack",source:"@site/notes/service/observability/logging/logging-awesome.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/logging-awesome",permalink:"/notes/service/observability/logging/logging-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/logging/logging-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Logging Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Fluentbit",permalink:"/notes/service/observability/logging/fluentbit"},next:{title:"Loki",permalink:"/notes/service/observability/logging/loki"}},m={},s=[{value:"Collector",id:"collector",level:2},{value:"\u65e5\u5fd7\u5b58\u50a8",id:"\u65e5\u5fd7\u5b58\u50a8",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"fluent-bit vs Fluentd",id:"fluent-bit-vs-fluentd",level:2},{value:"Fluentd vs Logstash",id:"fluentd-vs-logstash",level:2}],g={toc:s};function c(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging Stack",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ELK"),(0,r.kt)("li",{parentName:"ul"},"EFK - Elastic, Fluent, Kibana"),(0,r.kt)("li",{parentName:"ul"},"PLG - Promtail, Loki, Grafana"),(0,r.kt)("li",{parentName:"ul"},"FIG - Fluent, InfluxDB, Grafana"))),(0,r.kt)("li",{parentName:"ul"},"OS Log",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"kmsg"),(0,r.kt)("li",{parentName:"ul"},"syslog"),(0,r.kt)("li",{parentName:"ul"},"/var/log"))),(0,r.kt)("li",{parentName:"ul"},"windows",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"event log"))),(0,r.kt)("li",{parentName:"ul"},"macos",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/var/log",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"system.log"),(0,r.kt)("li",{parentName:"ul"},"wifi.log"),(0,r.kt)("li",{parentName:"ul"},"install.log"))),(0,r.kt)("li",{parentName:"ul"},"/Library/Logs"),(0,r.kt)("li",{parentName:"ul"},"~/Library/Logs")))))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/banzaicloud/logging-operator"},"banzaicloud/logging-operator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fluentd and Fluentbit")))),(0,r.kt)("h2",{id:"collector"},"Collector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluentd"},"fluent/fluentd"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Ruby+C"),(0,r.kt)("li",{parentName:"ul"},"\u53bb\u4e2d\u5fc3\u5316\u63d2\u4ef6\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Tag \u8def\u7531"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit"},"fluent/fluent-bit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, C"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Go \u63d2\u4ef6 - musl \u4e0d\u652f\u6301"))),(0,r.kt)("li",{parentName:"ul"},"Logstash",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u5316\u63d2\u4ef6\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8bed\u53e5\u8def\u7531"))),(0,r.kt)("li",{parentName:"ul"},"beats",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"filebeat"),(0,r.kt)("li",{parentName:"ul"},"metricbeat"),(0,r.kt)("li",{parentName:"ul"},"packetbeat"),(0,r.kt)("li",{parentName:"ul"},"winlogbeat"),(0,r.kt)("li",{parentName:"ul"},"auditbeat"),(0,r.kt)("li",{parentName:"ul"},"heartbeat"),(0,r.kt)("li",{parentName:"ul"},"functionbeat"))),(0,r.kt)("li",{parentName:"ul"},"Splunk")),(0,r.kt)("h2",{id:"\u65e5\u5fd7\u5b58\u50a8"},"\u65e5\u5fd7\u5b58\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki"},"grafana/loki"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AGPL-3.0, Go"),(0,r.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u754c\u7684 Prometheus"))),(0,r.kt)("li",{parentName:"ul"},"es"),(0,r.kt)("li",{parentName:"ul"},"influxdb")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eng.uber.com/logging"},"Fast and Reliable Schema-Agnostic Log Analytics Platform"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ELK -> Clickhouse")))),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"fluent-bit-vs-fluentd"},"fluent-bit vs Fluentd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fluent-bit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u8f7b\u91cf - \u8fd0\u884c\u5185\u5b58 450K"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u8f83\u5c11 - 35+"),(0,r.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u53f6\u5b50\u8282\u70b9\u65e5\u5fd7\u91c7\u96c6 - \u7c7b\u4f3c \u5404\u79cd beats \u96c6\u5408"))),(0,r.kt)("li",{parentName:"ul"},"Fluentd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ruby+C - \u8fd0\u884c\u5185\u5b58 40MB"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u591a - 650+"),(0,r.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u65e5\u5fd7\u805a\u5408\u5206\u6790\u5904\u7406")))),(0,r.kt)("h2",{id:"fluentd-vs-logstash"},"Fluentd vs Logstash"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://logz.io/blog/fluentd-logstash/"},"Fluentd vs Logstash"))))))}c.isMDXComponent=!0}}]);