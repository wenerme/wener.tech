"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60499],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,b=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14477:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e};const m={title:"PWA"},f="PWA",b={unversionedId:"web/spec/pwa",id:"web/spec/pwa",title:"PWA",description:"- Progressive Web Apps - \u6e10\u8fdb\u5f0f\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f",source:"@site/../notes/web/spec/pwa.md",sourceDirName:"web/spec",slug:"/web/spec/pwa",permalink:"/notes/web/spec/pwa",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/pwa.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1638548289,formattedLastUpdatedAt:"Dec 3, 2021",frontMatter:{title:"PWA"},sidebar:"docs",previous:{title:"Messaging",permalink:"/notes/web/spec/messaging"},next:{title:"ShadowDOM",permalink:"/notes/web/spec/shadowdom"}},w={},d=[],k={toc:d};function g(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"pwa"}),"PWA"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Progressive Web Apps - \u6e10\u8fdb\u5f0f\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"since 2015"))),(0,n.kt)("li",{parentName:"ul"},"service workers"),(0,n.kt)("li",{parentName:"ul"},"manifests"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://web.dev/learn/pwa/"}),"Learn PWA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/GoogleChrome/workbox"}),"GoogleChrome/workbox"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developers.google.com/web/tools/workbox"}),"doc")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://serviceworke.rs/"}),"Service Worker Cookbook")),(0,n.kt)("li",{parentName:"ul"},"mdn",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"}),"PWAs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage"}),"CacheStorage"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://web.dev/service-workers-cache-storage/"}),"Service workers and the Cache Storage API")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://pwa.js.org/"}),"pwa.js.org"))))))}g.isMDXComponent=!0}}]);