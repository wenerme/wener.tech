"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82585],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,b=f["".concat(p,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15410:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return g}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&u(e,r,t[r]);return e};const f={title:"ArgoCD Notifications"},d="ArgoCD Notifications",b={unversionedId:"devops/kubernetes/app/argocd-notifications",id:"devops/kubernetes/app/argocd-notifications",title:"ArgoCD Notifications",description:"- argoproj-labs/argocd-notifications",source:"@site/../notes/devops/kubernetes/app/argocd-notifications.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/argocd-notifications",permalink:"/notes/devops/kubernetes/app/argocd-notifications",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/argocd-notifications.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1621756378,formattedLastUpdatedAt:"May 23, 2021",frontMatter:{title:"ArgoCD Notifications"},sidebar:"docs",previous:{title:"ArgoCD Image Updater",permalink:"/notes/devops/kubernetes/app/argocd-image-updater"},next:{title:"ArgoCD \u7248\u672c",permalink:"/notes/devops/kubernetes/app/argocd-version"}},m={},g=[],y={toc:g};function v(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=l(l({},y),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",l({},{id:"argocd-notifications"}),"ArgoCD Notifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",l({parentName:"li"},{href:"https://github.com/argoproj-labs/argocd-notifications"}),"argoproj-labs/argocd-notifications"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Slack, SMTP, Opsgenie, Telegram, WebHook")))))}v.isMDXComponent=!0}}]);