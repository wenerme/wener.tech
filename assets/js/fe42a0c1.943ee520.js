"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57708],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64985:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e};const f={title:"CORS"},d="CORS",m={unversionedId:"web/cors",id:"web/cors",title:"CORS",description:"- fetch cookie \u8de8\u57df\u9700\u8981\u8bf7\u6c42\u65f6\u8bbe\u7f6e credentials: include",source:"@site/../notes/web/cors.md",sourceDirName:"web",slug:"/web/cors",permalink:"/notes/web/cors",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/cors.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1635793726,formattedLastUpdatedAt:"Nov 1, 2021",frontMatter:{title:"CORS"},sidebar:"docs",previous:{title:"Cookie",permalink:"/notes/web/cookie"},next:{title:"deno",permalink:"/notes/web/deno/"}},b={},O=[],y={toc:O};function w(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"cors"}),"CORS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fetch cookie \u8de8\u57df\u9700\u8981\u8bf7\u6c42\u65f6\u8bbe\u7f6e credentials: include",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42\u670d\u52a1\u7aef\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials: true")),(0,n.kt)("li",{parentName:"ul"},"\u5426\u5219\u4e0d\u4f1a set-cookie"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mdn ",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}),"CORS"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Preflight \u8bf7\u6c42")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"Origin:\nAccess-Control-Request-Method:\nAccess-Control-Request-Headers: POST\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Preflight \u54cd\u5e94")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-http"}),"Vary: Origin\nVary: Access-Control-Request-Method\nVary: Access-Control-Request-Headers\nAccess-Control-Allow-Origin: http://127.0.0.1:3000\nAccess-Control-Allow-Methods: POST\nAccess-Control-Allow-Credentials: true\nAccess-Control-Max-Age: 300\nAccess-Control-Expose-Headers: X-Page,X-Page-Size,X-Total,X-Total-Pages\n")))}w.isMDXComponent=!0}}]);