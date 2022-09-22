"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79262],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,k=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),i=["components"],l={title:"Cookie"},c="Cookie",u={unversionedId:"web/cookie",id:"web/cookie",title:"Cookie",description:"- rfc6265",source:"@site/../notes/web/cookie.md",sourceDirName:"web",slug:"/web/cookie",permalink:"/notes/web/cookie",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/cookie.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1635793726,formattedLastUpdatedAt:"Nov 1, 2021",frontMatter:{title:"Cookie"},sidebar:"docs",previous:{title:"CDN",permalink:"/notes/web/cdn"},next:{title:"CORS",permalink:"/notes/web/cors"}},p={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cookie"},"Cookie"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6265"},"rfc6265"),"\nHTTP State Management Mechanism",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6265#section-5.2"},"Set-Cookie Header")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-same-site-00"},"Same-Site Cookies"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"SameSite",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65f6\u53ea\u6709 \u5339\u914d\u7ad9\u70b9\u7684 cookie \u4f1a\u88ab\u53d1\u9001"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u4f1a\u968f top-level navigations \u53d1\u9001"))),(0,o.kt)("li",{parentName:"ul"},"SameSite=Strict",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0e same-site \u8bf7\u6c42\u4e00\u8d77\u53d1\u9001"))),(0,o.kt)("li",{parentName:"ul"},"SameSite=Lax",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"same-site, cross-site"))))),(0,o.kt)("li",{parentName:"ul"},"Access-Control-Allow-Credentials: true",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u63a5\u53d7 cookie"))),(0,o.kt)("li",{parentName:"ul"},"withCredentials: true",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u5e26\u4e0a cookie")))))}f.isMDXComponent=!0}}]);