"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61006],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,b=f["".concat(u,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27083:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e};const f={title:"Vault on Kubernetes",sidebar_title:"Vault on K8S"},m="Vault on Kubernetes",b={unversionedId:"ops/service/vault-k8s",id:"ops/service/vault-k8s",title:"Vault on Kubernetes",description:"- Vault on Kubernetes",source:"@site/../notes/ops/service/vault-k8s.md",sourceDirName:"ops/service",slug:"/ops/service/vault-k8s",permalink:"/notes/ops/service/vault-k8s",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/service/vault-k8s.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1622713470,formattedLastUpdatedAt:"Jun 3, 2021",frontMatter:{title:"Vault on Kubernetes",sidebar_title:"Vault on K8S"},sidebar:"docs",previous:{title:"\u8fdc\u7a0b\u684c\u9762",permalink:"/notes/ops/service/remote-desktop"},next:{title:"Vault \u5bc6\u94a5\u5f15\u64ce",permalink:"/notes/ops/service/vault-secret"}},d={},v=[{value:"Best practices",id:"best-practices",level:2}],k={toc:v};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"vault-on-kubernetes"}),"Vault on Kubernetes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.vaultproject.io/docs/platform/k8s"}),"Vault on Kubernetes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HA Vault \u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u5199 Secret"),(0,n.kt)("li",{parentName:"ul"},"Encryption as a Service"),(0,n.kt)("li",{parentName:"ul"},"Audit Logs for Vault"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/Boostport/kubernetes-vault"}),"Boostport/kubernetes-vault"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"allows pods to automatically receive a Vault token using Vault's AppRole auth backend.")))),(0,n.kt)("h2",c({},{id:"best-practices"}),"Best practices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/Boostport/kubernetes-vault/blob/master/best-practices.md"}),"Best practices for running Kubernetes-Vault in production")),(0,n.kt)("li",{parentName:"ul"},"Vault \u914d\u7f6e\u4e3a\u4f7f\u7528 HTTPS"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes-Vault \u4e0d\u5e94\u8be5\u4f7f\u7528 root token\uff0c\u4f7f\u7528\u4e00\u4e2a\u5468\u671f\u6027\u7684 token",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u52a8 renew - \u4e0d\u9700\u8981\u66f4\u6362 token"))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 AppRole\uff0csecret_id \u53ea\u4f1a\u6709\u4e00\u6b21\u4f7f\u7528\uff0c\u6bcf\u4e2a pod \u6709\u81ea\u5df1\u7684 secret_id",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AppRole \u5e94\u8be5\u751f\u6210\u5468\u671f\u6027\u7684 token"))),(0,n.kt)("li",{parentName:"ul"},"\u9650\u5b9a AppRole \u8bbf\u95ee\u6709\u6743\u9650\u8bbf\u95ee\u7684\u5bc6\u94a5 - \u6743\u9650\u53ef\u6309\u9700\u4fee\u6539"),(0,n.kt)("li",{parentName:"ul"},"metrics \u5e94\u8be5\u4f7f\u7528 httls \u4e14\u5c3d\u91cf\u542f\u7528 TLS Client Authentication"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u591a\u4e2a Kubernetes-Vault \u5b9e\u4f8b")))}y.isMDXComponent=!0}}]);