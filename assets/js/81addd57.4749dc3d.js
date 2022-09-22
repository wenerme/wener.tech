"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55181],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4175:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e};const c={title:"Ephemeral Volumes"},f="\u4e34\u65f6\u5377",d={unversionedId:"devops/kubernetes/storage/ephemeral-volume",id:"devops/kubernetes/storage/ephemeral-volume",title:"Ephemeral Volumes",description:"\u7528\u4e8e\u7f13\u5b58\u573a\u666f\uff0c\u4e0d\u4ecb\u610f\u91cd\u542f\u540e\u6570\u636e\u4e22\u5931\u3002",source:"@site/../notes/devops/kubernetes/storage/ephemeral-volume.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/ephemeral-volume",permalink:"/notes/devops/kubernetes/storage/ephemeral-volume",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/ephemeral-volume.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"Ephemeral Volumes"},sidebar:"docs",previous:{title:"Kubernates \u5b58\u50a8",permalink:"/notes/devops/kubernetes/storage/"},next:{title:"NFS",permalink:"/notes/devops/kubernetes/storage/k8s-nfs"}},b={},v=[],k={toc:v};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"\u4e34\u65f6\u5377"}),"\u4e34\u65f6\u5377"),(0,n.kt)("p",null,"\u7528\u4e8e\u7f13\u5b58\u573a\u666f\uff0c\u4e0d\u4ecb\u610f\u91cd\u542f\u540e\u6570\u636e\u4e22\u5931\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"emptyDir"),(0,n.kt)("li",{parentName:"ul"},"configMap, downwardAPI, secret",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u5165 K8S \u6570\u636e"))),(0,n.kt)("li",{parentName:"ul"},"CSI \u63d0\u4f9b/CSIInlineVolume - \u9700\u8981 ",(0,n.kt)("a",m({parentName:"li"},{href:"https://kubernetes-csi.github.io/docs/drivers.html"}),"\u9a71\u52a8\u652f\u6301"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.16 BETA"))),(0,n.kt)("li",{parentName:"ul"},"\u901a\u7528\u4e34\u65f6\u5377/GenericEphemeralVolume",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.19 ALPHA"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e emptyDir"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u53ef\u662f\u672c\u5730\u4e5f\u53ef\u4ee5\u662f NAS"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u9650\u5236\u5bb9\u91cf"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u6709\u521d\u59cb\u6570\u636e - \u53d6\u51b3\u4e8e\u9a71\u52a8\u548c\u53c2\u6570"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u8fd0\u7ef4\u64cd\u4f5c - \u53d6\u51b3\u4e8e\u9a71\u52a8\u652f\u6301",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5feb\u7167\u3001\u514b\u9686\u3001\u6269\u7f29\u5bb9\u3001\u5bb9\u91cf\u8ddf\u8e2a"))),(0,n.kt)("li",{parentName:"ul"},"StorageClass \u6700\u597d\u4f7f\u7528 WaitForFirstConsumer \u8c03\u5ea6"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/"}),"Ephemeral Volumes"))))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# CSI\nkind: Pod\napiVersion: v1\nmetadata:\n  name: my-csi-app\nspec:\n  containers:\n    - name: my-frontend\n      image: busybox\n      volumeMounts:\n        - mountPath: '/data'\n          name: my-csi-inline-vol\n      command: ['sleep', '1000000']\n  volumes:\n    - name: my-csi-inline-vol\n      # CSI \u63d0\u4f9b\n      csi:\n        driver: inline.storage.kubernetes.io\n        # \u9a71\u52a8\u76f8\u5173\n        volumeAttributes:\n          foo: bar\n    # Genric\n    - name: scratch-volume\n      ephemeral:\n        # \u6ce8\u610f\u8fd9\u91cc\u662f\u6a21\u7248 - \u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u6839\u636e\u6a21\u7248\u521b\u5efa PVC\n        # Pod \u5220\u9664\u65f6\u4f1ap\u5220\u9664 PVC\n        volumeClaimTemplate:\n          metadata:\n            labels:\n              type: my-frontend-volume\n          spec:\n            accessModes: ['ReadWriteOnce']\n            storageClassName: 'scratch-storage-class'\n            resources:\n              requests:\n                storage: 1Gi\n")))}y.isMDXComponent=!0}}]);