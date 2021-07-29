"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70588],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,k=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},87287:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],c={title:"Cookie"},l=void 0,u={unversionedId:"web/cookie",id:"web/cookie",isDocsHomePage:!1,title:"Cookie",description:"- rfc6265",source:"@site/notes/web/cookie.md",sourceDirName:"web",slug:"/web/cookie",permalink:"/notes/web/cookie",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/cookie.md",version:"current",frontMatter:{title:"Cookie"},sidebar:"docs",previous:{title:"Chrome",permalink:"/notes/web/chrome"},next:{title:"CORS",permalink:"/notes/web/cors"}},p=[],m={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6265"},"rfc6265"),"\nHTTP State Management Mechanism",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6265#section-5.2"},"Set-Cookie Header")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-same-site-00"},"Same-Site Cookies"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SameSite",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65f6\u53ea\u6709 \u5339\u914d\u7ad9\u70b9\u7684 cookie \u4f1a\u88ab\u53d1\u9001"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u4f1a\u968f top-level navigations \u53d1\u9001"))),(0,a.kt)("li",{parentName:"ul"},"SameSite=Strict",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0e same-site \u8bf7\u6c42\u4e00\u8d77\u53d1\u9001"))),(0,a.kt)("li",{parentName:"ul"},"SameSite=Lax",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"same-site, cross-site")))))))}s.isMDXComponent=!0}}]);