"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22371],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),y=o,f=m["".concat(p,".").concat(y)]||m[y]||u[y]||l;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43297:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(96600),o=r(27279),l=(r(59496),r(49613)),a=["components"],i={title:"OpenTelemetry"},p=void 0,c={unversionedId:"service/observability/tracing/opentelemetry",id:"service/observability/tracing/opentelemetry",title:"OpenTelemetry",description:"- OpenTelemetry \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/observability/tracing/opentelemetry.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/opentelemetry",permalink:"/notes/service/observability/tracing/opentelemetry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/tracing/opentelemetry.md",tags:[],version:"current",frontMatter:{title:"OpenTelemetry"},sidebar:"docs",previous:{title:"Jaeger",permalink:"/notes/service/observability/tracing/jaeger"},next:{title:"Sentry",permalink:"/notes/service/observability/tracing/sentry"}},s={},u=[{value:"collector",id:"collector",level:2}],m={toc:u};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OpenTelemetry \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 spec"),(0,l.kt)("li",{parentName:"ul"},"OpenTracing \u548c OpenCensus \u5408\u5e76\u540e\u7684\u9879\u76ee"),(0,l.kt)("li",{parentName:"ul"},"API -> SDK -> Processing -> Exporter -out of app-> Collector -> Backend"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-operator"},"open-telemetry/opentelemetry-operator"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  --name opentelemetry-collector otel/opentelemetry-collector\n")),(0,l.kt)("h2",{id:"collector"},"collector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-collector"},"open-telemetry/opentelemetry-collector"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"vendor-agnostic implementation"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u591a\u5957\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"agent - sidecar,\u91c7\u96c6\u5668"),(0,l.kt)("li",{parentName:"ul"},"gateway - \u7f51\u5173\u96c6\u7fa4,\u72ec\u7acb\u670d\u52a1"))),(0,l.kt)("li",{parentName:"ul"},"core \u7248 - Jaeger, Prometheus, Fluent Bit"),(0,l.kt)("li",{parentName:"ul"},"contrib \u7248 - \u5305\u542b\u6240\u6709 contrib \u7ec4\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter"},"open-telemetry/opentelemetry-collector-contrib/exporter"),"\n\u4e0d\u540c\u540e\u7aef\u7684 exporter"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"receivers"),(0,l.kt)("li",{parentName:"ul"},"processors"),(0,l.kt)("li",{parentName:"ul"},"exporters")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6570\u636e\u6e90\u5b9a\u4e49 - \u5728 pipeline/service \u4e2d\u4f7f\u7528\n# push or pull\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n\nexporters:\n  otlp:\n    endpoint: otelcol:55680\n\nextensions:\n  health_check:\n  pprof:\n  zpages:\n\nservice:\n  extensions: [health_check, pprof, zpages]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n    logs:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n")))}y.isMDXComponent=!0}}]);