"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25391],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],o={id:"internal",title:"Kubernetes Internal"},u=void 0,p={unversionedId:"devops/kubernetes/internal/internal",id:"devops/kubernetes/internal/internal",isDocsHomePage:!1,title:"Kubernetes Internal",description:"Tips",source:"@site/notes/devops/kubernetes/internal/README.md",sourceDirName:"devops/kubernetes/internal",slug:"/devops/kubernetes/internal/internal",permalink:"/notes/devops/kubernetes/internal/internal",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/internal/README.md",version:"current",frontMatter:{id:"internal",title:"Kubernetes Internal"},sidebar:"docs",previous:{title:"Kubernetes \u5f00\u53d1",permalink:"/notes/devops/kubernetes/dev/dev"},next:{title:"Kubernates \u63a5\u53e3",permalink:"/notes/devops/kubernetes/internal/k8s-api"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",children:[{value:"etcd \u96c6\u7fa4\u72b6\u6001",id:"etcd-\u96c6\u7fa4\u72b6\u6001",children:[]}]},{value:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8",id:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6267\u884c\u8c03\u5ea6")))),(0,i.kt)("h2",{id:"\u72b6\u6001\u7ba1\u7406"},"\u72b6\u6001\u7ba1\u7406"),(0,i.kt)("h3",{id:"etcd-\u96c6\u7fa4\u72b6\u6001"},"etcd \u96c6\u7fa4\u72b6\u6001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"k3s \u5c06 etcd \u5916\u5316\u4e3a\u6570\u636e\u5e93\u4f9d\u8d56 - \u4f7f\u5f97\u8fd9\u90e8\u5206\u6613\u4e8e\u7ef4\u62a4\u7ba1\u7406")),(0,i.kt)("h2",{id:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8"},"\u5e94\u7528\u72b6\u6001\u5b58\u50a8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u3001\u5757\u8bbe\u5907"),(0,i.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5185",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5185\u90e8\u7f72\u5b58\u50a8 provisioner \u5904\u7406 pvc"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5b58\u50a8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"longhorn"),(0,i.kt)("li",{parentName:"ul"},"ceph"))),(0,i.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9\u5b58\u50a8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"hostPath"),(0,i.kt)("li",{parentName:"ul"},"local-path-provisioner"))))),(0,i.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5916 - \u4f9d\u8d56\u5916\u90e8\u5b58\u50a8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5e73\u53f0\u670d\u52a1 - \u4f8b\u5982 GFS\u3001OSS"),(0,i.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5b58\u50a8\u96c6\u7fa4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ceph"))),(0,i.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5b58\u50a8\u670d\u52a1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NFS"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-csi/external-provisioner"},"kubernetes-csi/external-provisioner"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u76d1\u542c PVC \u89e6\u53d1\u521b\u5efa\u548c\u5220\u9664\u5377")))))}m.isMDXComponent=!0}}]);