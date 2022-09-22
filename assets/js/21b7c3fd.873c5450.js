"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86719],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,h=m["".concat(p,".").concat(f)]||m[f]||l[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62057:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),i=["components"],c={id:"ceph-k8s",title:"Ceph Kubernetes"},p="Ceph Kubernetes",s={unversionedId:"service/storage/ceph/ceph-k8s",id:"service/storage/ceph/ceph-k8s",title:"Ceph Kubernetes",description:"Tips",source:"@site/../notes/service/storage/ceph/ceph-k8s.md",sourceDirName:"service/storage/ceph",slug:"/service/storage/ceph/ceph-k8s",permalink:"/notes/service/storage/ceph/ceph-k8s",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/storage/ceph/ceph-k8s.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"ceph-k8s",title:"Ceph Kubernetes"},sidebar:"docs",previous:{title:"Ceph \u672f\u8bed",permalink:"/notes/service/storage/ceph/ceph-glossary"},next:{title:"Ubuntu 16.04 \u5b89\u88c5 Ceph",permalink:"/notes/service/storage/ceph/ceph-ubuntu-16-install"}},u={},l=[{value:"Tips",id:"tips",level:2}],m={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ceph-kubernetes"},"Ceph Kubernetes"),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u6bcf\u4e2a\u8282\u70b9\u76f8\u540c\u6027\u80fd\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u6848",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ceph \u90e8\u7f72\u5728\u96c6\u7fa4\u5916"),(0,a.kt)("li",{parentName:"ul"},"Ceph \u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://rook.io/"},"rook.io")," \u90e8\u7f72"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ceph.com/docs/mimic/start/kube-helm/"},"Helm")," \u90e8\u7f72"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cloudops.com/blog/the-ultimate-rook-and-ceph-survival-guide/"},"The Ultimate Rook and Ceph Survival Guide"))))))}f.isMDXComponent=!0}}]);