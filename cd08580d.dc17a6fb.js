(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||o;return n?a.a.createElement(m,p(p({ref:t},c),{},{components:n})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},931:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(1114)),i={title:"Dapr Kubernetes"},p={unversionedId:"dev/cloud/dapr-k8s",id:"dev/cloud/dapr-k8s",isDocsHomePage:!1,title:"Dapr Kubernetes",description:"- \u53c2\u8003",source:"@site/notes/dev/cloud/dapr-k8s.md",slug:"/dev/cloud/dapr-k8s",permalink:"/notes/dev/cloud/dapr-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/cloud/dapr-k8s.md",version:"current",sidebar:"docs",previous:{title:"\u547d\u540d\u89c4\u8303",permalink:"/notes/dev/naming"},next:{title:"Dapr Version",permalink:"/notes/dev/cloud/dapr-version"}},l=[{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"annotations",id:"annotations",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"helm ",Object(o.b)("a",{parentName:"li",href:"https://github.com/dapr/dapr/blob/master/charts/dapr"},"charts/dapr"))))),Object(o.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"dapr-operator"),Object(o.b)("li",{parentName:"ul"},"dapr-sidecar-injector"),Object(o.b)("li",{parentName:"ul"},"dapr-placement - actor instance -> Pod"),Object(o.b)("li",{parentName:"ul"},"dapr-sentry - mTLS, CA")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u751f\u4ea7\u8d44\u6e90\u5efa\u8bae")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Component"),Object(o.b)("th",{parentName:"tr",align:null},"CPU"),Object(o.b)("th",{parentName:"tr",align:null},"Memory"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Operator"),Object(o.b)("td",{parentName:"tr",align:null},"1/100m"),Object(o.b)("td",{parentName:"tr",align:null},"200Mi/100Mi")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Sidecar Injector"),Object(o.b)("td",{parentName:"tr",align:null},"1/100m"),Object(o.b)("td",{parentName:"tr",align:null},"200Mi/30Mi")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Sentry"),Object(o.b)("td",{parentName:"tr",align:null},"1/100m"),Object(o.b)("td",{parentName:"tr",align:null},"200Mi/30Mi")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Placement"),Object(o.b)("td",{parentName:"tr",align:null},"1/250m"),Object(o.b)("td",{parentName:"tr",align:null},"150Mi/75Mi")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Dashboard"),Object(o.b)("td",{parentName:"tr",align:null},"200m/50m"),Object(o.b)("td",{parentName:"tr",align:null},"200Mi/20Mi")))),Object(o.b)("h2",{id:"annotations"},"annotations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-annotations/"},"Kubernetes pod annotations"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  dapr.io/enabled: 'true'\n  dapr.io/app-id: 'nodeapp'\n  dapr.io/app-port: '3000'\n  # \u914d\u7f6e CDR \u540d\u5b57\n  dapr.io/config: 'tracing'\n\n  # debug, info, warn, error\n  dapr.io/log-level: 'info'\n  dapr.io/log-as-json: 'false'\n  # port 7777\n  dapr.io/enable-profiling: 'false'\n  # token based API authentication\n  dapr.io/api-token-secret: ''\n  # grpc, http\n  dapr.io/app-protocol: 'http'\n  # \u6700\u5927\u5e76\u53d1\u6570\u9650\u5236\n  dapr.io/app-max-concurrency: ''\n  # insecure SSL\n  dapr.io/app-ssl: 'false'\n  dapr.io/metrics-port: '9090'\n\n  dapr.io/sidecar-cpu-| ''\n  dapr.io/sidecar-memory-| ''\n  dapr.io/sidecar-cpu-request: ''\n  dapr.io/sidecar-memory-request: ''\n\n  dapr.io/sidecar-liveness-probe-delay-seconds: '3'\n  dapr.io/sidecar-liveness-probe-timeout-seconds: '3'\n  dapr.io/sidecar-liveness-probe-period-seconds: '6'\n  dapr.io/sidecar-liveness-probe-threshold: '3'\n  dapr.io/sidecar-readiness-probe-delay-seconds: '3'\n  dapr.io/sidecar-readiness-probe-timeout-seconds: '3'\n  dapr.io/sidecar-readiness-probe-period-seconds: '6'\n  dapr.io/sidecar-readiness-probe-threshold: '3'\n\n  # \u8bf7\u6c42\u4f53\u5927\u5c0f - \u5355\u4f4d MB\n  dapr.io/http-max-request-size: '4'\n  # \u989d\u5916\u7684\u73af\u5883\u53d8\u91cf\uff0c\u9017\u53f7\u5206\u5272 key=value\n  dapr.io/env: ''\n")))}d.isMDXComponent=!0}}]);