"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86388],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),k=o,f=m["".concat(p,".").concat(k)]||m[k]||c[k]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18606:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={id:"rook",title:"Rook"},k="Rook",f={unversionedId:"devops/kubernetes/storage/rook",id:"devops/kubernetes/storage/rook",title:"Rook",description:"Tips",source:"@site/../notes/devops/kubernetes/storage/rook.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/rook",permalink:"/notes/devops/kubernetes/storage/rook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/rook.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1606055087,formattedLastUpdatedAt:"Nov 22, 2020",frontMatter:{id:"rook",title:"Rook"},sidebar:"docs",previous:{title:"OpenEBS",permalink:"/notes/devops/kubernetes/storage/openebs"},next:{title:"\u670d\u52a1",permalink:"/notes/devops/service/"}},d={},b=[{value:"Tips",id:"tips",level:2},{value:"nfs",id:"nfs",level:2}],v={toc:b};function N(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),s),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"rook"}),"Rook"),(0,n.kt)("h2",c({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://rook.io/"}),"rook.io"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7ba1\u7406\u6846\u67b6"),(0,n.kt)("li",{parentName:"ul"},"\u4ee5 CRD \u7684\u65b9\u5f0f \u6587\u4ef6\u3001\u5757\u3001\u5bf9\u8c61\u3001NoSQL \u5b58\u50a8\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7ba1\u7406\u670d\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ceph",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u90e8\u7f72\u5230\u78c1\u76d8"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u90e8\u7f72\u5230 Block PV"))),(0,n.kt)("li",{parentName:"ul"},"EdgeFS - \u95ed\u6e90 - \u7981\u6b62\u5546\u4e1a\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"CockroachDB"),(0,n.kt)("li",{parentName:"ul"},"Cassandra"),(0,n.kt)("li",{parentName:"ul"},"NFS Server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c06 PVC \u66b4\u9732\u4e3a NFS \u670d\u52a1"))),(0,n.kt)("li",{parentName:"ul"},"Yugabyte DB"))))),(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"k8s 1.11+"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://rook.io/docs/rook/master/ceph-prerequisites.html"}),"Ceph"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6709\u539f\u59cb\u5757\u8bbe\u5907 - \u6ca1\u6709\u5206\u533a\u6ca1\u6709\u683c\u5f0f\u5316\u8fc7\u7684\u78c1\u76d8"),(0,n.kt)("li",{parentName:"ul"},"\u539f\u59cb\u5206\u533a - \u6ca1\u6709\u6587\u4ef6\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"PV \u80fd\u4ee5 block \u7684\u6a21\u5f0f\u5de5\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 LVM"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CSI \u4e0d\u8981\u4f7f\u7528 FlexVolume"),(0,n.kt)("li",{parentName:"ul"},"RBD ",(0,n.kt)("inlineCode",{parentName:"li"},"modprobe rbd")),(0,n.kt)("li",{parentName:"ul"},"CephFS \u5efa\u8bae Linux >= 4.17",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u4e8e\u8be5\u7248\u672c\u9650\u989d\u4e0d\u751f\u6548"))))),(0,n.kt)("li",{parentName:"ul"},"NFS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5 nfs-utils")))))),(0,n.kt)("h2",c({},{id:"nfs"}),"nfs"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"ver=v1.5.0\ncurl -L --remote-name-all https://github.com/rook/rook/raw/$ver/cluster/examples/kubernetes/nfs/{common,operator,webhook,psp,rbac}.yaml\n")))}N.isMDXComponent=!0}}]);