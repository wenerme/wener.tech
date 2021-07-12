(window.webpackJsonp=window.webpackJsonp||[]).push([[1050],{1123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(1129)),i={title:"MinIO Operator"},c={unversionedId:"service/storage/minio-operator",id:"service/storage/minio-operator",isDocsHomePage:!1,title:"MinIO Operator",description:"- MinIO Kubernetes Operator",source:"@site/notes/service/storage/minio-operator.md",slug:"/service/storage/minio-operator",permalink:"/notes/service/storage/minio-operator",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/minio-operator.md",version:"current",sidebar:"docs",previous:{title:"Minio FAQ",permalink:"/notes/service/storage/minio-faq"},next:{title:"MinIO",permalink:"/notes/service/storage/minio"}},l=[{value:"tenant",id:"tenant",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MinIO Kubernetes Operator",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"AGPLv3"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79df\u6237"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u79df\u6237\u6269\u5bb9"),Object(o.b)("li",{parentName:"ul"},"\u90e8\u7f72 minio \u548c console",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"console \u6709 operator \u6a21\u5f0f"),Object(o.b)("li",{parentName:"ul"},"console \u652f\u6301\u521b\u5efa tenant - \u53ea\u80fd\u521b\u5efa\u96c6\u7fa4\u6a21\u5f0f"))),Object(o.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u547d\u4ee4\u884c\u5b89\u88c5"),Object(o.b)("li",{parentName:"ul"},"cdr minio.min.io/Tenant")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add minio https://operator.min.io/\n# helm \u5185\u652f\u6301\u751f\u6210\u591a\u4e2a tenant\nhelm install --namespace minio-operator --create-namespace --generate-name minio/minio-operator\nkubectl apply -f https://github.com/minio/operator/blob/master/examples/tenant.yaml\n")),Object(o.b)("h2",{id:"tenant"},"tenant"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"image: minio/minio:RELEASE.2021-04-06T23-11-00Z\nimagePullPolicy: IfNotPresent\n## Secret with credentials to be used by MinIO Tenant.\ncredsSecret:\n  name: minio-demo-secret\n\npools:\n  - servers: 4\n    volumesPerServer: 4\n    volumeClaimTemplate:\n      metadata:\n        name: data\n      spec:\n        storageClassName: standard\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 10Gi\n\nmountPath: /export\nsubPath: /data\nrequestAutoCert: true\ns3:\n  bucketDNS: false\npodManagementPolicy: Parallel\n\nconsole:\n  image: minio/console:v0.6.8\n  replicas: 1\n  consoleSecret:\n    name: console-secret\n")))}p.isMDXComponent=!0},1129:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=r,O=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return t?a.a.createElement(O,c(c({ref:n},s),{},{components:t})):a.a.createElement(O,c({ref:n},s))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);