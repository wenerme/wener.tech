"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4903],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,k=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57478:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"k8s-minio",title:"Minio"},s="Minio on K8S",c={unversionedId:"devops/kubernetes/app/k8s-minio",id:"devops/kubernetes/app/k8s-minio",isDocsHomePage:!1,title:"Minio",description:"Tips",source:"@site/notes/devops/kubernetes/app/k8s-minio.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/k8s-minio",permalink:"/notes/devops/kubernetes/app/k8s-minio",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/k8s-minio.md",tags:[],version:"current",frontMatter:{id:"k8s-minio",title:"Minio"},sidebar:"docs",previous:{title:"Consol",permalink:"/notes/devops/kubernetes/app/k8s-consul"},next:{title:"Kubernetes Operators",permalink:"/notes/devops/kubernetes/app/k8s-operator"}},u=[{value:"Tips",id:"tips",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"minio-on-k8s"},"Minio on K8S"),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"helm \u5b89\u88c5 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/minio/charts"},"minio/charts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5355\u4e2a\u79df\u6237"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u5e03\u5f0f\u6a21\u5f0f\u548c\u5355\u673a\u6a21\u5f0f"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/minio/operator"},"minio/operator")," \u5b89\u88c5 - \u5b98\u65b9\u4e3b\u63a8\uff0c APGL 3.0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u591a\u79df\u6237\u3001\u591a\u5b58\u50a8"),(0,o.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/minio/direct-csi"},"minio/direct-csi")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/minio/direct-csi"},"minio/direct-csi"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"direct.csi.min.io"),(0,o.kt)("li",{parentName:"ul"},"Direct Volume Access"),(0,o.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8bbf\u95ee\u6302\u8f7d\u7684\u78c1\u76d8\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u6587\u4ef6\u7684\u65b9\u5f0f\u8bbf\u95ee")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# https://charts.wener.tech/\nhelm show chart wener/minio\n")))}m.isMDXComponent=!0}}]);