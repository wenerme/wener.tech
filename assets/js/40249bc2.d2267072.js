"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91276],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,b=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},63130:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&u(e,r,t[r]);return e};const s={tags:["FAQ"]},m="Temporal FAQ",b={unversionedId:"service/workflow/temporal-faq",id:"service/workflow/temporal-faq",title:"Temporal FAQ",description:"temporal-web vs temporal-ui",source:"@site/../notes/service/workflow/temporal-faq.md",sourceDirName:"service/workflow",slug:"/service/workflow/temporal-faq",permalink:"/notes/service/workflow/temporal-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/workflow/temporal-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"n8n",permalink:"/notes/service/workflow/n8n"},next:{title:"temporal",permalink:"/notes/service/workflow/temporal"}},w={},v=[{value:"temporal-web vs temporal-ui",id:"temporal-web-vs-temporal-ui",level:2}],d={toc:v};function y(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},d),u),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"temporal-faq"}),"Temporal FAQ"),(0,n.kt)("h2",f({},{id:"temporal-web-vs-temporal-ui"}),"temporal-web vs temporal-ui"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/temporalio/ui"}),"temporal/ui")," - \u65b0\u7684 Web UI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u524d\u7aef: TypeScript+Svelte"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u7aef: Golang - echo"),(0,n.kt)("li",{parentName:"ul"},"\u529f\u80fd\u76ee\u524d\u4e0d\u5b8c\u5584 - WIP"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/temporalio/web"}),"temporalio/web")," - \u65e7\u7684 Web UI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Javascript+Vue"),(0,n.kt)("li",{parentName:"ul"},"fork \u81ea Cadence - \u4f46 cadence web \u65b0\u7684\u529f\u80fd\u6ca1\u52a0\u4e0a - graph"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u662f ",(0,n.kt)("strong",{parentName:"li"},"\u7ef4\u62a4\u72b6\u6001"))))))}y.isMDXComponent=!0}}]);