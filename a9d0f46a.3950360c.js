(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{517:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(7),l=(a(0),a(766)),b={id:"k8s-storage",title:"Kubernates \u5b58\u50a8"},c={unversionedId:"devops/kubernetes/storage/k8s-storage",id:"devops/kubernetes/storage/k8s-storage",isDocsHomePage:!1,title:"Kubernates \u5b58\u50a8",description:"Tips",source:"@site/notes/devops/kubernetes/storage/README.md",slug:"/devops/kubernetes/storage/k8s-storage",permalink:"/notes/devops/kubernetes/storage/k8s-storage",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/README.md",version:"current",sidebar:"docs",previous:{title:"Rancher UI",permalink:"/notes/devops/kubernetes/platform/rancher"},next:{title:"NFS",permalink:"/notes/devops/kubernetes/storage/k8s-nfs"}},i=[{value:"Tips",id:"tips",children:[]}],p={rightToc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7c7b\u4f3c OSS/S3/Swift \u7c7b\u7684\u5b58\u50a8\u670d\u52a1\uff0c\u5e94\u8be5\u5f53\u4f5c\u670d\u52a1\u6765\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u4f5c\u4e3a\u6587\u4ef6\u7cfb\u7edf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u4ee3\u7801\u8bfb\u5199"))),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u591a\u4e2a Pod \u60f3\u8981\u5171\u4eab\u5b58\u50a8\uff0c\u5219\u672c\u8d28\u662f ReadWriteMany\uff0c\u6700\u7b80\u5355\u7684\u9009\u9879\u662f NFS"),Object(l.b)("li",{parentName:"ul"},"PV - PVC - Pod \u7684\u5173\u7cfb\u5728 ReadWriteOnce \u7684\u5173\u7cfb\u4e0b\u90fd\u662f 1:1:1 \u7684"),Object(l.b)("li",{parentName:"ul"},"\bPV \u53ef\u80fd\u4f1a\u5bf9\u5e94\u5b58\u50a8\u5b9e\u73b0\u5185\u90e8\u7684 Volume - \u5927\u591a\u6570\u65f6\u5019\u4e5f\u662f 1:1 \u7684"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u542f\u52a8\u4e00\u4e2a NFS \u670d\u52a1\u5728\u96c6\u7fa4\u5185\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u7684\u4f7f\u7528\u8bbe\u8ba1\u4e5f\u9075\u5faa\u4e00\u5b9a\u6a21\u5f0f - \u5b58\u50a8\u4e5f\u662f\u5e94\u7528\u5c01\u88c5\u72ec\u7acb\u7684\u4e00\u5c42"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/volumes"}),"Volume")," - \u5377",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6709\u751f\u547d\u5468\u671f"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cd\u542f\u540e\u4f9d\u7136\u4fdd\u7559"),Object(l.b)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},"volumeMounts \u6307\u5b9a Pod \u8981\u6302\u8f7d\u7684\u5377"),Object(l.b)("li",{parentName:"ul"},"volumes \u6307\u5b9a\u5377\u600e\u4e48\u63d0\u4f9b"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://portworx.com/basic-guide-kubernetes-storage/"}),"A Basic Guide to Kubernetes Storage: PVS, PVCs, Statefulsets")),Object(l.b)("li",{parentName:"ul"},"\u5377\u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"awsElasticBlockStore"),Object(l.b)("li",{parentName:"ul"},"azureDisk"),Object(l.b)("li",{parentName:"ul"},"azureFile"),Object(l.b)("li",{parentName:"ul"},"cephfs - Ceph \u7684\u6587\u4ef6\u7cfb\u7edf"),Object(l.b)("li",{parentName:"ul"},"cinder - OpenStack \u5757\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"configMap - \u6302\u8f7d ConfigMap \u4f5c\u4e3a\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"csi - Container Storage Interface - \u62bd\u8c61\u5c42"),Object(l.b)("li",{parentName:"ul"},"downwardAPI"),Object(l.b)("li",{parentName:"ul"},"emptyDir - \u7a7a\u76ee\u5f55 - \u7c7b\u4f3c\u7ad9\u4f4d"),Object(l.b)("li",{parentName:"ul"},"fc (fibre channel)"),Object(l.b)("li",{parentName:"ul"},"flexVolume - \u7c7b\u4f3c\u4e8e CSI \u524d\u8eab"),Object(l.b)("li",{parentName:"ul"},"flocker"),Object(l.b)("li",{parentName:"ul"},"gcePersistentDisk"),Object(l.b)("li",{parentName:"ul"},"gitRepo (deprecated)"),Object(l.b)("li",{parentName:"ul"},"glusterfs"),Object(l.b)("li",{parentName:"ul"},"hostPath - \u4e3b\u673a\u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},"iscsi - iSCSI \u78c1\u76d8\u5757"),Object(l.b)("li",{parentName:"ul"},"local"),Object(l.b)("li",{parentName:"ul"},"nfs - NFS \u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf - Linux"),Object(l.b)("li",{parentName:"ul"},"persistentVolumeClaim"),Object(l.b)("li",{parentName:"ul"},"projected"),Object(l.b)("li",{parentName:"ul"},"portworxVolume"),Object(l.b)("li",{parentName:"ul"},"quobyte"),Object(l.b)("li",{parentName:"ul"},"rbd - Ceph \u7684 RBD \u5757\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"scaleIO"),Object(l.b)("li",{parentName:"ul"},"secret - \u6302\u8f7d secret \u4f5c\u4e3a\u6587\u4ef6\u7cfb\u7edf"),Object(l.b)("li",{parentName:"ul"},"storageos"),Object(l.b)("li",{parentName:"ul"},"vsphereVolume"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}),"Persistent Volume")," - \u6301\u4e45\u5377",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PersistentVolume, PersistentVolumeClaim - API \u5bf9\u8c61 - \u62bd\u8c61\u5b58\u50a8\u662f\u5982\u4f55\u63d0\u4f9b\u5982\u4f55\u6d88\u8d39\u7684"),Object(l.b)("li",{parentName:"ul"},"PersistentVolume - PV",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u7684\u5b58\u50a8\u5377 - \u901a\u8fc7 StorageClass \u521b\u5efa"),Object(l.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u5206\u4e3a\u9759\u6001\u548c\u52a8\u6001\u63d0\u4f9b"))),Object(l.b)("li",{parentName:"ul"},"PersistentVolumeClaim - PVC",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Pod \u7533\u8bf7\u4f7f\u7528 PV \u8d44\u6e90\u7684\u8bf7\u6c42\u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},"\u7533\u8bf7\u53ef\u80fd\u6307\u540d\u6240\u9700\u5377\u7684\u5c5e\u6027 - \u4f8b\u5982 \u6027\u80fd"),Object(l.b)("li",{parentName:"ul"},"PVC \u4f1a\u88ab\u6700\u7ec8\u7ed1\u5b9a\u5230 PV"))),Object(l.b)("li",{parentName:"ul"},"Pod -> PVC -> PV -> \u5bbf\u4e3b\u673a"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5220\u9664\u6b63\u5728\u4f7f\u7528\u7684 PVC \u4e0d\u4f1a\u7acb\u5373\u5220\u9664\uff0c\u4f1a\u5728 Pod \u4e0d\u4f7f\u7528\u540e\u6267\u884c"),Object(l.b)("li",{parentName:"ul"},"\u5220\u9664\u7ed1\u5b9a\u4e86 PVC \u7684 PV \u4e5f\u4f1a\u63a8\u8fdf\u5230 PVC \u5220\u9664\u540e\u6267\u884c")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'kubectl get storageclass\n\n# \u53d6\u6d88 sc \u7684\u9ed8\u8ba4\u503c\nkubectl patch storageclass local-path -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}\'\n# \u8bbe\u7f6e\u9ed8\u8ba4\nkubectl patch storageclass longhorn -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Plugin"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ReadWriteOnce"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ReadOnlyMany"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ReadWriteMany"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Storage Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CephFS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filesystem")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cinder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CSI"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interface")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FC"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FlexVolume"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Glusterfs"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filesystem")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HostPath"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filesystem")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iSCSI"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NFS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filesystem")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RBD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block")))))}u.isMDXComponent=!0},766:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=u(a),o=n,m=O["".concat(b,".").concat(o)]||O[o]||j[o]||l;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);