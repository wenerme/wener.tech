"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57134],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),l=["components"],p={title:"Local Path Provisioner"},i="Local Path",s={unversionedId:"devops/kubernetes/storage/local-path-provisioner",id:"devops/kubernetes/storage/local-path-provisioner",title:"Local Path Provisioner",description:"- rancher/local-path-provisioner",source:"@site/../notes/devops/kubernetes/storage/local-path-provisioner.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/local-path-provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/storage/local-path-provisioner.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Local Path Provisioner"},sidebar:"docs",previous:{title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/storage/k8s-storage-faq"},next:{title:"Local PV",permalink:"/notes/devops/kubernetes/storage/local-pv"}},c={},u=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-path"},"Local Path"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/local-path-provisioner"},"rancher/local-path-provisioner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storageClassName: local-path")),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u76ee\u5f55 - /var/lib/rancher/k3s/storage",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pvc-<UUID>_<NAMESPACE>_<PVC_NAME>")),(0,o.kt)("li",{parentName:"ul"},"UUID=pvc.uid"),(0,o.kt)("li",{parentName:"ul"},"PVC",(0,o.kt)("em",{parentName:"li"},"NAME=`<VOLUME_NAME>"),"<POD_NAME>`"))),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f02\u5e38\u540e PVC \u4e22\u5931\uff0cStatefulSet \u65e0\u6cd5\u542f\u52a8",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5220\u9664 Pod \u4ece\u65b0\u90e8\u7f72\u53ef\u6062\u590d"))))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"zfs example ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/local-path-provisioner/issues/162"},"#162")),(0,o.kt)("li",{parentName:"ul"},"\u6062\u590d pv ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/local-path-provisioner/issues/144"},"#144"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"k3s \u9ed8\u8ba4\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodePathMap": [\n    {\n      "node": "DEFAULT_PATH_FOR_NON_LISTED_NODES",\n      "paths": ["/var/lib/rancher/k3s/storage"]\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\napiVersion: v1\nmetadata:\n  name: local-path-config\n  namespace: local-path-storage\ndata:\n  # paths \u8bbe\u7f6e\u4e3a\u7a7a\u6570\u7ec4\u5219\u4f1a\u62d2\u7edd\n  # paths \u8bbe\u7f6e\u591a\u4e2a\u4f1a\u968f\u673a\u9009\u62e9\n  config.json: |-\n    {\n      "nodePathMap":[\n        {\n          "node":"DEFAULT_PATH_FOR_NON_LISTED_NODES",\n          "paths":["/opt/local-path-provisioner"]\n        },\n        {\n          "node":"yasker-lp-dev1",\n          "paths":["/opt/local-path-provisioner", "/data1"]\n        },\n        {\n          "node":"yasker-lp-dev3",\n          "paths":[]\n        }\n      ]\n    }\n  setup: |-\n    #!/bin/sh\n    path=$1\n    mkdir -m 0777 -p ${path}\n  teardown: |-\n    #!/bin/sh\n    path=$1\n    rm -rf ${path}\n')))}d.isMDXComponent=!0}}]);