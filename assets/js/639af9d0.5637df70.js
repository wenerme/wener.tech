"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84780],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76043:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),i=["components"],u={id:"dev",title:"Kubernetes \u5f00\u53d1"},l="Kubernetes \u5f00\u53d1",s={unversionedId:"devops/kubernetes/dev/dev",id:"devops/kubernetes/dev/dev",title:"Kubernetes \u5f00\u53d1",description:"- \u5f00\u53d1\u7c7b\u578b",source:"@site/../notes/devops/kubernetes/dev/README.md",sourceDirName:"devops/kubernetes/dev",slug:"/devops/kubernetes/dev/",permalink:"/notes/devops/kubernetes/dev/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/dev/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"dev",title:"Kubernetes \u5f00\u53d1"},sidebar:"docs",previous:{title:"CNCF",permalink:"/notes/devops/kubernetes/cncf"},next:{title:"skaffold",permalink:"/notes/devops/kubernetes/dev/skaffold"}},p={},c=[],d={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes-\u5f00\u53d1"},"Kubernetes \u5f00\u53d1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u7c7b\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 CDR \u7ba1\u7406\u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u63a5 API \u8fdb\u884c\u5c55\u793a\u548c\u8d44\u6e90\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 Operator"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7ec4\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubernetes-sigs/kubebuilder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/using-api/client-libraries"},"client-libraries")))),(0,a.kt)("li",{parentName:"ul"},"\u5728 Kubernetes \u4e0a\u5f00\u53d1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"skaffold - Generic Source to Kubernetes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/ko"},"google/ko")," - For Golang",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"source to image"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u65e0\u7cfb\u7edf\u4f9d\u8d56\u65e0 cgo \u573a\u666f")))))))}f.isMDXComponent=!0}}]);