"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51058],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(t),f=a,m=g["".concat(l,".").concat(f)]||g[f]||u[f]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55293:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return y}});var n=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&p(e,t,r[t]);return e};const g={title:"Jaeger Operator",tags:["Kubernetes","Operator"]},f="jaeger-operator",m={unversionedId:"service/observability/tracing/jaeger-operator",id:"service/observability/tracing/jaeger-operator",title:"Jaeger Operator",description:"- jaegertracing/jaeger-operator",source:"@site/../notes/service/observability/tracing/jaeger-operator.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/jaeger-operator",permalink:"/notes/service/observability/tracing/jaeger-operator",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/tracing/jaeger-operator.md",tags:[{label:"Kubernetes",permalink:"/notes/tags/kubernetes"},{label:"Operator",permalink:"/notes/tags/operator"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664871591,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"Jaeger Operator",tags:["Kubernetes","Operator"]},sidebar:"docs",previous:{title:"Observability FAQ",permalink:"/notes/service/observability/faq"},next:{title:"Jaeger",permalink:"/notes/service/observability/tracing/jaeger"}},b={},y=[],d={toc:y};function v(e){var r,t=e,{components:a}=t,p=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},d),p),o(r,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"jaeger-operator"}),"jaeger-operator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/jaegertracing/jaeger-operator"}),"jaegertracing/jaeger-operator")),(0,n.kt)("li",{parentName:"ul"},"API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Jaeger"))),(0,n.kt)("li",{parentName:"ul"},"namespace/deployment annotation sidecar.jaegertracing.io/inject")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"apiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: my-jaeger\nspec:\n  # allInOne - \u9ed8\u8ba4\uff0c\u6d4b\u8bd5\u3001\u6f14\u793a\n  # production - \u7ec4\u4ef6\u72ec\u7acb\u90e8\u7f72\uff0ccollector\n  # streaming - \u5728 production \u4e4b\u4e0a\u589e\u52a0\u6d41\u5904\u7406 - Ingester - Kafka\n  strategy: allInOne\n  allInOne:\n    image: jaegertracing/all-in-one:latest\n    options:\n      log-level: debug\n  storage:\n    # memory, allInOne, elasticsearch\n    type: memory\n    # ES_PASSWORD, ES_USERNAME\n    secretName: jaeger-secret\n    options:\n      memory:\n        max-traces: 100000\n      cassandra:\n        servers: cassandra\n        keyspace: jaeger_v1_datacenter3\n      es:\n        server-urls: https://quickstart-es-http.default.svc:9200\n        index-prefix: my-prefix\n    cassandraCreateSchema:\n      enabled: false\n  ingress:\n    enabled: false\n  agent:\n    # \u9ed8\u8ba4\u4f5c\u4e3a sidecar inject\n    strategy: DaemonSet\n  annotations:\n    scheduler.alpha.kubernetes.io/critical-pod: ''\n")))}v.isMDXComponent=!0}}]);