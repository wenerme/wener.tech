"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18039],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=i(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90733:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),p=["components"],c={title:"Reloader"},l=void 0,i={unversionedId:"devops/kubernetes/app/reloader",id:"devops/kubernetes/app/reloader",title:"Reloader",description:"- stakater/Reloader",source:"@site/notes/devops/kubernetes/app/reloader.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/reloader",permalink:"/notes/devops/kubernetes/app/reloader",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/reloader.md",tags:[],version:"current",frontMatter:{title:"Reloader"},sidebar:"docs",previous:{title:"prometheus-config-reloader",permalink:"/notes/devops/kubernetes/app/prometheus-config-reloader"},next:{title:"sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets"}},s=[],u={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stakater/Reloader"},"stakater/Reloader"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ConfigMap, Secret -> DeploymentConfig, Deployment, Daemonset, Statefulset, Rollout")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Deployment\nmetadata:\n  name: foo\n  annotations:\n    # \u5339\u914d  foo-configmap, foo-secret\n    reloader.stakater.com/auto: 'true'\n    # \u9650\u5b9a\u5339\u914d\u76ee\u6807\n    reloader.stakater.com/search: 'true'\n    # \u81ea\u5b9a\u4e49 \u9009\u62e9\n    configmap.reloader.stakater.com/reload: 'foo-configmap,bar-configmap'\n    secret.reloader.stakater.com/reload: 'foo-secret'\n---\nkind: ConfigMap\nmetadata:\n  annotations:\n    # \u5bf9\u5e94 reloader.stakater.com/search: \"true\"\n    reloader.stakater.com/match: 'true'\n")))}f.isMDXComponent=!0}}]);