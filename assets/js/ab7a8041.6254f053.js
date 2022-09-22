"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79262],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,k=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20161:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={title:"Cookie"},m="Cookie",k={unversionedId:"web/cookie",id:"web/cookie",title:"Cookie",description:"- rfc6265",source:"@site/../notes/web/cookie.md",sourceDirName:"web",slug:"/web/cookie",permalink:"/notes/web/cookie",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/cookie.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1635793726,formattedLastUpdatedAt:"Nov 1, 2021",frontMatter:{title:"Cookie"},sidebar:"docs",previous:{title:"CDN",permalink:"/notes/web/cdn"},next:{title:"CORS",permalink:"/notes/web/cors"}},d={},b=[],y={toc:b};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"cookie"}),"Cookie"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc6265"}),"rfc6265"),"\nHTTP State Management Mechanism",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc6265#section-5.2"}),"Set-Cookie Header")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-same-site-00"}),"Same-Site Cookies"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SameSite",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65f6\u53ea\u6709 \u5339\u914d\u7ad9\u70b9\u7684 cookie \u4f1a\u88ab\u53d1\u9001"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u4f1a\u968f top-level navigations \u53d1\u9001"))),(0,n.kt)("li",{parentName:"ul"},"SameSite=Strict",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0e same-site \u8bf7\u6c42\u4e00\u8d77\u53d1\u9001"))),(0,n.kt)("li",{parentName:"ul"},"SameSite=Lax",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"same-site, cross-site"))))),(0,n.kt)("li",{parentName:"ul"},"Access-Control-Allow-Credentials: true",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u63a5\u53d7 cookie"))),(0,n.kt)("li",{parentName:"ul"},"withCredentials: true",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u5e26\u4e0a cookie")))))}O.isMDXComponent=!0}}]);