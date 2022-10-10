"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57134],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27835:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={title:"Local Path Provisioner"},f="Local Path",d={unversionedId:"devops/kubernetes/storage/local-path-provisioner",id:"devops/kubernetes/storage/local-path-provisioner",title:"Local Path Provisioner",description:"- rancher/local-path-provisioner",source:"@site/../notes/devops/kubernetes/storage/local-path-provisioner.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/local-path-provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/local-path-provisioner.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656205646,formattedLastUpdatedAt:"Jun 26, 2022",frontMatter:{title:"Local Path Provisioner"},sidebar:"docs",previous:{title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/storage/k8s-storage-faq"},next:{title:"Local PV",permalink:"/notes/devops/kubernetes/storage/local-pv"}},h={},v=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],b={toc:v};function k(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"local-path"}),"Local Path"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/rancher/local-path-provisioner"}),"rancher/local-path-provisioner")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"storageClassName: local-path")),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u76ee\u5f55 - /var/lib/rancher/k3s/storage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pvc-<UUID>_<NAMESPACE>_<PVC_NAME>")),(0,n.kt)("li",{parentName:"ul"},"UUID=pvc.uid"),(0,n.kt)("li",{parentName:"ul"},"PVC",(0,n.kt)("em",{parentName:"li"},"NAME=`<VOLUME_NAME>"),"<POD_NAME>`"))),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f02\u5e38\u540e PVC \u4e22\u5931\uff0cStatefulSet \u65e0\u6cd5\u542f\u52a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664 Pod \u4ece\u65b0\u90e8\u7f72\u53ef\u6062\u590d"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"zfs example ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/rancher/local-path-provisioner/issues/162"}),"#162")),(0,n.kt)("li",{parentName:"ul"},"\u6062\u590d pv ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/rancher/local-path-provisioner/issues/144"}),"#144"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"k3s \u9ed8\u8ba4\u914d\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "nodePathMap": [\n    {\n      "node": "DEFAULT_PATH_FOR_NON_LISTED_NODES",\n      "paths": ["/var/lib/rancher/k3s/storage"]\n    }\n  ]\n}\n')),(0,n.kt)("h2",u({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),'kind: ConfigMap\napiVersion: v1\nmetadata:\n  name: local-path-config\n  namespace: local-path-storage\ndata:\n  # paths \u8bbe\u7f6e\u4e3a\u7a7a\u6570\u7ec4\u5219\u4f1a\u62d2\u7edd\n  # paths \u8bbe\u7f6e\u591a\u4e2a\u4f1a\u968f\u673a\u9009\u62e9\n  config.json: |-\n    {\n      "nodePathMap":[\n        {\n          "node":"DEFAULT_PATH_FOR_NON_LISTED_NODES",\n          "paths":["/opt/local-path-provisioner"]\n        },\n        {\n          "node":"yasker-lp-dev1",\n          "paths":["/opt/local-path-provisioner", "/data1"]\n        },\n        {\n          "node":"yasker-lp-dev3",\n          "paths":[]\n        }\n      ]\n    }\n  setup: |-\n    #!/bin/sh\n    path=$1\n    mkdir -m 0777 -p ${path}\n  teardown: |-\n    #!/bin/sh\n    path=$1\n    rm -rf ${path}\n')))}k.isMDXComponent=!0}}]);