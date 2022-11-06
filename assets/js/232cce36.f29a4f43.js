"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87036],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,b=f["".concat(i,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(b,p(p({ref:t},u),{},{components:r})):n.createElement(b,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48589:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&u(e,r,t[r]);return e};const f={title:"PostgreSQL"},m="PostgreSQL on Kubernetes",b={unversionedId:"devops/kubernetes/app/k8s-postgres",id:"devops/kubernetes/app/k8s-postgres",title:"PostgreSQL",description:"* \u90e8\u7f72\u65b9\u6848",source:"@site/../notes/devops/kubernetes/app/k8s-postgres.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/k8s-postgres",permalink:"/notes/devops/kubernetes/app/k8s-postgres",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/k8s-postgres.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1615297598,formattedLastUpdatedAt:"Mar 9, 2021",frontMatter:{title:"PostgreSQL"},sidebar:"docs",previous:{title:"Kubernetes Operators",permalink:"/notes/devops/kubernetes/app/k8s-operator"},next:{title:"K8S Secrets",permalink:"/notes/devops/kubernetes/app/k8s-secret"}},d={},y=[],k={toc:y};function g(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),u),a(t,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"postgresql-on-kubernetes"}),"PostgreSQL on Kubernetes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u6848",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u9ad8\u53ef\u7528 - \u7136\u540e\u90e8\u7f72 pg",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5ef6\u65f6\u9ad8 - \u5206\u5e03\u5f0f\u5b58\u50a8\u4e00\u822c IO \u4e0d\u7a33\u5b9a"),(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528\u6613\u7ef4\u62a4"),(0,n.kt)("li",{parentName:"ul"},"Longhorn, OpenEBS"))),(0,n.kt)("li",{parentName:"ul"},"PG \u9ad8\u53ef\u7528\uff0c\u4e0d\u4f9d\u8d56\u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u590d\u6742"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u5927\u89c4\u6a21 pg"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/zalando/postgres-operator"}),"zalando/postgres-operator"))))))))}g.isMDXComponent=!0}}]);