"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2481],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32841:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={title:"cert-manager version",tags:["Version"]},f="cert-manager version",d={unversionedId:"devops/kubernetes/app/cert-manager-version",id:"devops/kubernetes/app/cert-manager-version",title:"cert-manager version",description:"1.5",source:"@site/../notes/devops/kubernetes/app/cert-manager-version.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/cert-manager-version",permalink:"/notes/devops/kubernetes/app/cert-manager-version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/cert-manager-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1630662479,formattedLastUpdatedAt:"Sep 3, 2021",frontMatter:{title:"cert-manager version",tags:["Version"]},sidebar:"docs",previous:{title:"ArgoCD",permalink:"/notes/devops/kubernetes/app/argocd"},next:{title:"Cert Manager",permalink:"/notes/devops/kubernetes/app/cert-manager"}},k={},v=[{value:"1.5",id:"15",level:2},{value:"1.4",id:"14",level:2}],b={toc:v};function g(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"cert-manager-version"}),"cert-manager version"),(0,n.kt)("h2",c({},{id:"15"}),"1.5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 kubernetes 1.22 - \u8be5\u7248\u672c\u79fb\u9664\u4e86 kube \u79fb\u9664\u7684\u8d44\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ingress \u9ed8\u8ba4\u4f7f\u7528 v1, \u5931\u8d25\u5219\u5c1d\u8bd5 v1beta1"))),(0,n.kt)("li",{parentName:"ul"},"\u5e9f\u5f03\u7248\u672c v1alpha2, v1alpha3, v1beta1 - 1.6 \u79fb\u9664"),(0,n.kt)("li",{parentName:"ul"},"cert-manager.io/v1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"secretTemplate",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4e3a secret \u6dfb\u52a0 annotation,labels - \u65b9\u4fbf\u4e0e kubed \u914d\u5408\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u79fb\u9664 secretTemplate \u5e76\u4e0d\u4f1a\u79fb\u9664\u5b9e\u9645 kubed \u540c\u6b65\u51fa\u6765\u7684 secret - \u7531 argocd \u8fd9\u6837\u7684\u670d\u52a1\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5ffd\u7565 annotations - \u53ef\u5f3a\u5236\u4fee\u6539\u89c4\u5219 ",(0,n.kt)("inlineCode",{parentName:"li"},"--copied-annotations=*"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kubectl.kubernetes.io"),(0,n.kt)("li",{parentName:"ul"},"fluxcd.io"),(0,n.kt)("li",{parentName:"ul"},"argocd.argoproj.io"))))))),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u9a8c\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Gateway API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 HTTPRoute \u66ff\u4ee3 Ingress"),(0,n.kt)("li",{parentName:"ul"},"gateway-shim controller",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7\u6ce8\u89e3 Gateways \u6765\u81ea\u52a8\u83b7\u53d6 cert"))))),(0,n.kt)("li",{parentName:"ul"},"CertificateSigningRequest \u652f\u6301\u6240\u6709 issuser")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"apiVersion: cert-manager.io/v1\nkind: Certificate\nspec:\n  secretTemplate:\n    annotations:\n      my-secret-annotation: 'foo'\n    labels:\n      my-secret-label: bar\n")),(0,n.kt)("h2",c({},{id:"14"}),"1.4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u9a8c\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CertificateSigningRequests",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u652f\u6301 CA Issuer")))))))}g.isMDXComponent=!0}}]);