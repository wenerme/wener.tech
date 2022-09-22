"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54477],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=i(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49532:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))i.call(t,r)&&s(e,r,t[r]);return e};const f={title:"Reloader"},d="Reloader",m={unversionedId:"devops/kubernetes/app/reloader",id:"devops/kubernetes/app/reloader",title:"Reloader",description:"- stakater/Reloader",source:"@site/../notes/devops/kubernetes/app/reloader.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/reloader",permalink:"/notes/devops/kubernetes/app/reloader",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/reloader.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"Reloader"},sidebar:"docs",previous:{title:"prometheus-config-reloader",permalink:"/notes/devops/kubernetes/app/prometheus-config-reloader"},next:{title:"sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets"}},b={},y=[],v={toc:y};function k(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),s),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"reloader"}),"Reloader"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/stakater/Reloader"}),"stakater/Reloader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ConfigMap, Secret -> DeploymentConfig, Deployment, Daemonset, Statefulset, Rollout")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"kind: Deployment\nmetadata:\n  name: foo\n  annotations:\n    # \u5339\u914d  foo-configmap, foo-secret\n    reloader.stakater.com/auto: 'true'\n    # \u9650\u5b9a\u5339\u914d\u76ee\u6807\n    reloader.stakater.com/search: 'true'\n    # \u81ea\u5b9a\u4e49 \u9009\u62e9\n    configmap.reloader.stakater.com/reload: 'foo-configmap,bar-configmap'\n    secret.reloader.stakater.com/reload: 'foo-secret'\n---\nkind: ConfigMap\nmetadata:\n  annotations:\n    # \u5bf9\u5e94 reloader.stakater.com/search: \"true\"\n    reloader.stakater.com/match: 'true'\n")))}k.isMDXComponent=!0}}]);