(window.webpackJsonp=window.webpackJsonp||[]).push([[926],{1096:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||c;return r?o.a.createElement(y,a(a({ref:t},p),{},{components:r})):o.a.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var p=2;p<c;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},999:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(8),c=(r(0),r(1096)),l={title:"OpenTelemetry"},a={unversionedId:"service/observability/tracing/opentelemetry",id:"service/observability/tracing/opentelemetry",isDocsHomePage:!1,title:"OpenTelemetry",description:"- OpenTelemetry \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/observability/tracing/opentelemetry.md",slug:"/service/observability/tracing/opentelemetry",permalink:"/notes/service/observability/tracing/opentelemetry",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/tracing/opentelemetry.md",version:"current",sidebar:"docs",previous:{title:"Jaeger",permalink:"/notes/service/observability/tracing/jaeger"},next:{title:"Sentry",permalink:"/notes/service/observability/tracing/sentry"}},i=[{value:"collector",id:"collector",children:[]}],p={toc:i};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"OpenTelemetry \u662f\u4ec0\u4e48\uff1f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b9a\u4e49 spec"),Object(c.b)("li",{parentName:"ul"},"OpenTracing \u548c OpenCensus \u5408\u5e76\u540e\u7684\u9879\u76ee"))),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-operator"},"open-telemetry/opentelemetry-operator"))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  --name opentelemetry-collector otel/opentelemetry-collector\n")),Object(c.b)("h2",{id:"collector"},"collector"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-collector"},"open-telemetry/opentelemetry-collector"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"vendor-agnostic implementation"),Object(c.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u591a\u5957\u534f\u8bae"),Object(c.b)("li",{parentName:"ul"},"\u8fd0\u884c\u6a21\u5f0f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"agent - sidecar,\u91c7\u96c6\u5668"),Object(c.b)("li",{parentName:"ul"},"gateway - \u7f51\u5173\u96c6\u7fa4,\u72ec\u7acb\u670d\u52a1"))),Object(c.b)("li",{parentName:"ul"},"core \u7248 - Jaeger, Prometheus, Fluent Bit"),Object(c.b)("li",{parentName:"ul"},"contrib \u7248 - \u5305\u542b\u6240\u6709 contrib \u7ec4\u4ef6"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter"},"open-telemetry/opentelemetry-collector-contrib/exporter"),"\n\u4e0d\u540c\u540e\u7aef\u7684 exporter"),Object(c.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"receivers"),Object(c.b)("li",{parentName:"ul"},"processors"),Object(c.b)("li",{parentName:"ul"},"exporters")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"# \u6570\u636e\u6e90\u5b9a\u4e49 - \u5728 pipeline/service \u4e2d\u4f7f\u7528\n# push or pull\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n\nexporters:\n  otlp:\n    endpoint: otelcol:55680\n\nextensions:\n  health_check:\n  pprof:\n  zpages:\n\nservice:\n  extensions: [health_check, pprof, zpages]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n    logs:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp]\n")))}b.isMDXComponent=!0}}]);