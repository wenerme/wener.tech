"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87036],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31539:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),p=["components"],s={title:"PostgreSQL"},u="PostgreSQL on Kubernetes",i={unversionedId:"devops/kubernetes/app/k8s-postgres",id:"devops/kubernetes/app/k8s-postgres",title:"PostgreSQL",description:"* \u90e8\u7f72\u65b9\u6848",source:"@site/../notes/devops/kubernetes/app/k8s-postgres.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/k8s-postgres",permalink:"/notes/devops/kubernetes/app/k8s-postgres",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/app/k8s-postgres.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1615297598,formattedLastUpdatedAt:"Mar 9, 2021",frontMatter:{title:"PostgreSQL"},sidebar:"docs",previous:{title:"Kubernetes Operators",permalink:"/notes/devops/kubernetes/app/k8s-operator"},next:{title:"K8S Secrets",permalink:"/notes/devops/kubernetes/app/k8s-secret"}},l={},c=[],f={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgresql-on-kubernetes"},"PostgreSQL on Kubernetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u6848",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u9ad8\u53ef\u7528 - \u7136\u540e\u90e8\u7f72 pg",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5ef6\u65f6\u9ad8 - \u5206\u5e03\u5f0f\u5b58\u50a8\u4e00\u822c IO \u4e0d\u7a33\u5b9a"),(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528\u6613\u7ef4\u62a4"),(0,a.kt)("li",{parentName:"ul"},"Longhorn, OpenEBS"))),(0,a.kt)("li",{parentName:"ul"},"PG \u9ad8\u53ef\u7528\uff0c\u4e0d\u4f9d\u8d56\u5b58\u50a8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u590d\u6742"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u5927\u89c4\u6a21 pg"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zalando/postgres-operator"},"zalando/postgres-operator"))))))))}m.isMDXComponent=!0}}]);