(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{454:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(618)),c={id:"k8s-api",title:"Kubernates \u63a5\u53e3"},i={id:"devops/kubernetes/k8s-api",title:"Kubernates \u63a5\u53e3",description:"# Kubernates \u63a5\u53e3",source:"@site/../tricks/devops/kubernetes/k8s-api.md",permalink:"/notes/devops/kubernetes/k8s-api"},u=[{value:"Tips",id:"tips",children:[]}],s={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"kubernates-\u63a5\u53e3"},"Kubernates \u63a5\u53e3"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/"}),"\u5b9a\u4e49\u6587\u6863"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u6240\u6709\u5bf9\u8c61\u7684\u5b57\u6bb5\u8bf4\u660e\u548c\u5b9a\u4e49"))),Object(o.b)("li",{parentName:"ul"},"\u5206\u7c7b",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Workloads are objects you use to manage and run your containers on the cluster."),Object(o.b)("li",{parentName:"ul"},'Discovery & LB resources are objects you use to "stitch" your workloads together into an externally accessible, load-balanced Service.'),Object(o.b)("li",{parentName:"ul"},"Config & Storage resources are objects you use to inject initialization data into your applications, and to persist data that is external to your container."),Object(o.b)("li",{parentName:"ul"},"Cluster resources objects define how the cluster itself is configured; these are typically used only by cluster operators."),Object(o.b)("li",{parentName:"ul"},"Metadata resources are objects you use to configure the behavior of other resources within the cluster, such as HorizontalPodAutoscaler for scaling workloads.")))))}l.isMDXComponent=!0},618:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);