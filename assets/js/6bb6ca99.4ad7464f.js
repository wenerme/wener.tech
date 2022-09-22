"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23331],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46453:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),s=["components"],l={title:"Local PV"},i="Local Persistent Volumes",c={unversionedId:"devops/kubernetes/storage/local-pv",id:"devops/kubernetes/storage/local-pv",title:"Local PV",description:"* local/volume",source:"@site/../notes/devops/kubernetes/storage/local-pv.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/local-pv",permalink:"/notes/devops/kubernetes/storage/local-pv",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/storage/local-pv.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Local PV"},sidebar:"docs",previous:{title:"Local Path Provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner"},next:{title:"Longhorn \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/storage/longhorn-faq"}},u={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-persistent-volumes"},"Local Persistent Volumes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/#local"},"local/volume")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/sig-storage-local-static-provisioner"},"kubernetes-sigs/sig-storage-local-static-provisioner"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/sig-storage-local-static-provisioner/blob/master/docs/best-practices.md"},"Best Practices")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2019/04/04/kubernetes-1.14-local-persistent-volumes-ga/"},"Kubernetes 1.14: Local Persistent Volumes GA")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"local pv \u6ca1\u6709\u7f51\u7edc\u4f20\u8f93\u3001\u66f4\u597d\u7684 iops \u548c\u672c\u5730\u8bfb\u5199\u901f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u81ea\u884c\u590d\u5236\u6570\u636e\u7684\u573a\u666f"),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u88ab\u7ed1\u5b9a\u5230\u67d0\u4e2a\u8282\u70b9\uff0c\u8282\u70b9\u5f02\u5e38\u5fc5\u987b\u624b\u52a8\u5e72\u6d89")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6dfb\u52a0 StorageClass\n# \u7136\u540e\u9700\u8981\u90e8\u7f72 provisioner \u521b\u5efa PVs\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: local-storage\nprovisioner: kubernetes.io/no-provisioner\n# WaitForFirstConsumer \u8ddf\u968f Pod \u8c03\u5ea6\n# https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode\nvolumeBindingMode: WaitForFirstConsumer\n")))}f.isMDXComponent=!0}}]);