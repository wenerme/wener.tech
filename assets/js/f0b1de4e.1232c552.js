"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94390],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,f=m["".concat(u,".").concat(b)]||m[b]||c[b]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87305:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={title:"Kubernetes Internal"},b="Kubernetes Internal",f={unversionedId:"devops/kubernetes/internal/README",id:"devops/kubernetes/internal/README",title:"Kubernetes Internal",description:"- https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md",source:"@site/../notes/devops/kubernetes/internal/README.md",sourceDirName:"devops/kubernetes/internal",slug:"/devops/kubernetes/internal/",permalink:"/notes/devops/kubernetes/internal/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/internal/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"Kubernetes Internal"},sidebar:"docs",previous:{title:"sealos",permalink:"/notes/devops/kubernetes/distro/sealos"},next:{title:"Kubernates \u63a5\u53e3",permalink:"/notes/devops/kubernetes/internal/k8s-api"}},d={},k=[{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",level:2},{value:"etcd \u96c6\u7fa4\u72b6\u6001",id:"etcd-\u96c6\u7fa4\u72b6\u6001",level:3},{value:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8",id:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8",level:2}],v={toc:k};function y(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),s),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"kubernetes-internal"}),"Kubernetes Internal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md"}),"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md")),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u8c03\u5ea6")))),(0,n.kt)("h2",c({},{id:"\u72b6\u6001\u7ba1\u7406"}),"\u72b6\u6001\u7ba1\u7406"),(0,n.kt)("h3",c({},{id:"etcd-\u96c6\u7fa4\u72b6\u6001"}),"etcd \u96c6\u7fa4\u72b6\u6001"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"k3s \u5c06 etcd \u5916\u5316\u4e3a\u6570\u636e\u5e93\u4f9d\u8d56 - \u4f7f\u5f97\u8fd9\u90e8\u5206\u6613\u4e8e\u7ef4\u62a4\u7ba1\u7406")),(0,n.kt)("h2",c({},{id:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8"}),"\u5e94\u7528\u72b6\u6001\u5b58\u50a8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u3001\u5757\u8bbe\u5907"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5185",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5185\u90e8\u7f72\u5b58\u50a8 provisioner \u5904\u7406 pvc"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"longhorn"),(0,n.kt)("li",{parentName:"ul"},"ceph"))),(0,n.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9\u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hostPath"),(0,n.kt)("li",{parentName:"ul"},"local-path-provisioner"))))),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5916 - \u4f9d\u8d56\u5916\u90e8\u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5e73\u53f0\u670d\u52a1 - \u4f8b\u5982 GFS\u3001OSS"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5b58\u50a8\u96c6\u7fa4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ceph"))),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5b58\u50a8\u670d\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"NFS"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/kubernetes-csi/external-provisioner"}),"kubernetes-csi/external-provisioner"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76d1\u542c PVC \u89e6\u53d1\u521b\u5efa\u548c\u5220\u9664\u5377")))))}y.isMDXComponent=!0}}]);