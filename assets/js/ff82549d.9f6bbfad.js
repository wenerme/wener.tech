"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48302],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44010:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),i=["components"],l={title:"MinIO Operator"},c=void 0,s={unversionedId:"service/storage/minio-operator",id:"service/storage/minio-operator",title:"MinIO Operator",description:"- MinIO Kubernetes Operator",source:"@site/notes/service/storage/minio-operator.md",sourceDirName:"service/storage",slug:"/service/storage/minio-operator",permalink:"/notes/service/storage/minio-operator",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/minio-operator.md",tags:[],version:"current",frontMatter:{title:"MinIO Operator"},sidebar:"docs",previous:{title:"Minio FAQ",permalink:"/notes/service/storage/minio-faq"},next:{title:"MinIO",permalink:"/notes/service/storage/minio"}},p={},u=[{value:"tenant",id:"tenant",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MinIO Kubernetes Operator",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AGPLv3"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79df\u6237"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u79df\u6237\u6269\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72 minio \u548c console",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"console \u6709 operator \u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"console \u652f\u6301\u521b\u5efa tenant - \u53ea\u80fd\u521b\u5efa\u96c6\u7fa4\u6a21\u5f0f"))),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u547d\u4ee4\u884c\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ul"},"cdr minio.min.io/Tenant")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add minio https://operator.min.io/\n# helm \u5185\u652f\u6301\u751f\u6210\u591a\u4e2a tenant\nhelm install --namespace minio-operator --create-namespace --generate-name minio/minio-operator\nkubectl apply -f https://github.com/minio/operator/blob/master/examples/tenant.yaml\n")),(0,a.kt)("h2",{id:"tenant"},"tenant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"image: minio/minio:RELEASE.2021-04-06T23-11-00Z\nimagePullPolicy: IfNotPresent\n## Secret with credentials to be used by MinIO Tenant.\ncredsSecret:\n  name: minio-demo-secret\n\npools:\n  - servers: 4\n    volumesPerServer: 4\n    volumeClaimTemplate:\n      metadata:\n        name: data\n      spec:\n        storageClassName: standard\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 10Gi\n\nmountPath: /export\nsubPath: /data\nrequestAutoCert: true\ns3:\n  bucketDNS: false\npodManagementPolicy: Parallel\n\nconsole:\n  image: minio/console:v0.6.8\n  replicas: 1\n  consoleSecret:\n    name: console-secret\n")))}f.isMDXComponent=!0}}]);