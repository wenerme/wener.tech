"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50796],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,f=m["".concat(p,".").concat(k)]||m[k]||c[k]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44809:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),l=["components"],i={id:"rook",title:"Rook"},p=void 0,u={unversionedId:"devops/kubernetes/storage/rook",id:"devops/kubernetes/storage/rook",title:"Rook",description:"Tips",source:"@site/notes/devops/kubernetes/storage/rook.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/rook",permalink:"/notes/devops/kubernetes/storage/rook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/rook.md",tags:[],version:"current",frontMatter:{id:"rook",title:"Rook"},sidebar:"docs",previous:{title:"OpenEBS",permalink:"/notes/devops/kubernetes/storage/openebs"},next:{title:"\u670d\u52a1",permalink:"/notes/devops/service/"}},s={},c=[{value:"Tips",id:"tips",level:2},{value:"nfs",id:"nfs",level:2}],m={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rook.io/"},"rook.io"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7ba1\u7406\u6846\u67b6"),(0,o.kt)("li",{parentName:"ul"},"\u4ee5 CRD \u7684\u65b9\u5f0f \u6587\u4ef6\u3001\u5757\u3001\u5bf9\u8c61\u3001NoSQL \u5b58\u50a8\u670d\u52a1"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u7ba1\u7406\u670d\u52a1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ceph",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u90e8\u7f72\u5230\u78c1\u76d8"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u90e8\u7f72\u5230 Block PV"))),(0,o.kt)("li",{parentName:"ul"},"EdgeFS - \u95ed\u6e90 - \u7981\u6b62\u5546\u4e1a\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"CockroachDB"),(0,o.kt)("li",{parentName:"ul"},"Cassandra"),(0,o.kt)("li",{parentName:"ul"},"NFS Server",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5c06 PVC \u66b4\u9732\u4e3a NFS \u670d\u52a1"))),(0,o.kt)("li",{parentName:"ul"},"Yugabyte DB"))))),(0,o.kt)("li",{parentName:"ul"},"\u8981\u6c42",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"k8s 1.11+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rook.io/docs/rook/master/ceph-prerequisites.html"},"Ceph"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6709\u539f\u59cb\u5757\u8bbe\u5907 - \u6ca1\u6709\u5206\u533a\u6ca1\u6709\u683c\u5f0f\u5316\u8fc7\u7684\u78c1\u76d8"),(0,o.kt)("li",{parentName:"ul"},"\u539f\u59cb\u5206\u533a - \u6ca1\u6709\u6587\u4ef6\u7cfb\u7edf"),(0,o.kt)("li",{parentName:"ul"},"PV \u80fd\u4ee5 block \u7684\u6a21\u5f0f\u5de5\u4f5c"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 LVM"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CSI \u4e0d\u8981\u4f7f\u7528 FlexVolume"),(0,o.kt)("li",{parentName:"ul"},"RBD ",(0,o.kt)("inlineCode",{parentName:"li"},"modprobe rbd")),(0,o.kt)("li",{parentName:"ul"},"CephFS \u5efa\u8bae Linux >= 4.17",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5c0f\u4e8e\u8be5\u7248\u672c\u9650\u989d\u4e0d\u751f\u6548"))))),(0,o.kt)("li",{parentName:"ul"},"NFS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 nfs-utils")))))),(0,o.kt)("h2",{id:"nfs"},"nfs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ver=v1.5.0\ncurl -L --remote-name-all https://github.com/rook/rook/raw/$ver/cluster/examples/kubernetes/nfs/{common,operator,webhook,psp,rbac}.yaml\n")))}k.isMDXComponent=!0}}]);