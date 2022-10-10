"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84330],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53448:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={title:"MinIO Kubernetes Operator"},f="MinIO Kubernetes Operator",b={unversionedId:"devops/kubernetes/app/minio-operator",id:"devops/kubernetes/app/minio-operator",title:"MinIO Kubernetes Operator",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/devops/kubernetes/app/minio-operator.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/minio-operator",permalink:"/notes/devops/kubernetes/app/minio-operator",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/minio-operator.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1615297598,formattedLastUpdatedAt:"Mar 9, 2021",frontMatter:{title:"MinIO Kubernetes Operator"},sidebar:"docs",previous:{title:"Lens",permalink:"/notes/devops/kubernetes/app/lens"},next:{title:"CrunchyData PGO",permalink:"/notes/devops/kubernetes/app/pgo"}},d={},k=[{value:"Direct CSI",id:"direct-csi",level:2}],O={toc:k};function v(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"minio-kubernetes-operator"}),"MinIO Kubernetes Operator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AGPLv3")," - \u57fa\u672c\u610f\u5473\u7740\u90e8\u7f72\u7684\u670d\u52a1\u4e0d\u80fd\u7ed9\u522b\u4eba\u4f7f\u7528\uff0c\u63d0\u4f9b\u5546\u4e1a\u6388\u6743"),(0,n.kt)("li",{parentName:"ul"},"minio k8s operator"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79df\u6237 - ns \u9694\u79bb"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u6269\u5bb9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u901a\u8fc7 Zone \u5b9e\u73b0"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a\u57df\u540d\u5206\u6d41"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u652f\u6301\u7f29\u5bb9")),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5bb9\u4f1a\u6709 down \u65f6\u95f4"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u5220\u9664\u6240\u6709 StatefulSet \u8fdb\u884c\u91cd\u5efa"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42 StatefulSet \u7684 PV \u4e0d\u88ab\u56de\u6536 - policy \u8bbe\u7f6e\u4e3a retain"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/minio/operator"}),"minio/operator"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AGPLv3")),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350 PV \u4f7f\u7528 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/minio/operator/blob/master/docs/using-direct-csi.md"}),"direct csi")," \u63d2\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8981\u6c42\u591a\u79df\u6237\u96c6\u7fa4\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 Helm \u90e8\u7f72",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Minio \u662f Apache 2.0 \u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5355\u76f4\u89c2\u6613\u7ef4\u62a4"))),(0,n.kt)("li",{parentName:"ul"},"minio \u652f\u6301\u591a\u7528\u6237")))),(0,n.kt)("h2",s({},{id:"direct-csi"}),"Direct CSI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u50cf\u6781\u4e86 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/rancher/local-path-provisioner"}),"rancher/local-path-provisioner"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5 CSI\ncat << EOF > default.env\nDIRECT_CSI_DRIVES=data{1...4}\nDIRECT_CSI_DRIVES_DIR=/mnt\nKUBELET_DIR_PATH=/var/lib/kubelet\nEOF\n\nexport $(cat default.env)\nkubectl apply -k github.com/minio/direct-csi\n")))}v.isMDXComponent=!0}}]);