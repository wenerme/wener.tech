"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84780],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,b=f["".concat(u,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96975:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return k}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const f={id:"dev",title:"Kubernetes \u5f00\u53d1"},d="Kubernetes \u5f00\u53d1",b={unversionedId:"devops/kubernetes/dev/dev",id:"devops/kubernetes/dev/dev",title:"Kubernetes \u5f00\u53d1",description:"- \u5f00\u53d1\u7c7b\u578b",source:"@site/../notes/devops/kubernetes/dev/README.md",sourceDirName:"devops/kubernetes/dev",slug:"/devops/kubernetes/dev/",permalink:"/notes/devops/kubernetes/dev/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/dev/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641222557,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{id:"dev",title:"Kubernetes \u5f00\u53d1"},sidebar:"docs",previous:{title:"CNCF",permalink:"/notes/devops/kubernetes/cncf"},next:{title:"skaffold",permalink:"/notes/devops/kubernetes/dev/skaffold"}},m={},k=[],v={toc:k};function y(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"kubernetes-\u5f00\u53d1"}),"Kubernetes \u5f00\u53d1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 CDR \u7ba1\u7406\u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u63a5 API \u8fdb\u884c\u5c55\u793a\u548c\u8d44\u6e90\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 Operator"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7ec4\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/kubernetes-sigs/kubebuilder"}),"kubernetes-sigs/kubebuilder")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://kubernetes.io/docs/reference/using-api/client-libraries"}),"client-libraries")))),(0,n.kt)("li",{parentName:"ul"},"\u5728 Kubernetes \u4e0a\u5f00\u53d1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"skaffold - Generic Source to Kubernetes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/google/ko"}),"google/ko")," - For Golang",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"source to image"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u65e0\u7cfb\u7edf\u4f9d\u8d56\u65e0 cgo \u573a\u666f")))))))}y.isMDXComponent=!0}}]);