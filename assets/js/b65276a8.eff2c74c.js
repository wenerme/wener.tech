"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68103],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),y=a,f=m["".concat(p,".").concat(y)]||m[y]||s[y]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62532:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={title:"Let's Encrypt"},p=void 0,u={unversionedId:"security/letsencrypt",id:"security/letsencrypt",title:"Let's Encrypt",description:"- letsdebug",source:"@site/notes/security/letsencrypt.md",sourceDirName:"security",slug:"/security/letsencrypt",permalink:"/notes/security/letsencrypt",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/security/letsencrypt.md",tags:[],version:"current",frontMatter:{title:"Let's Encrypt"},sidebar:"docs",previous:{title:"Crypto",permalink:"/notes/security/crypto"},next:{title:"Security Awesome",permalink:"/notes/security/security-awesome"}},c={},s=[],m={toc:s};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://letsdebug.net/"},"letsdebug"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u57df\u540d\u8bc1\u4e66\u95ee\u9898"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://letsencrypt.org/docs/rate-limits/"},"\u9891\u7387\u9650\u5236"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"50 \u8bc1\u4e66/\u6ce8\u518c\u57df\u540d/\u5468",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u57df\u540d\u6309\u7167\u9876\u7ea7\u57df\u540d\u7b97"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("a",{parentName:"li",href:"http://www.example.com"},"www.example.com")," -> example.com"))),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8bc1\u4e66\u6700\u591a 100 \u4e2a\u57df\u540d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u6700\u591a 5000 \u57df\u540d\u8bc1\u4e66"))),(0,l.kt)("li",{parentName:"ul"},"\u7eed\u671f\u4e0d\u8ba1\u5165\u6bcf\u5468\u6ce8\u518c\u57df\u540d\u6570 - \u6bcf\u5468\u6700\u591a 5 \u91cd\u590d\u8bc1\u4e66",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8bc1\u4e66\u5185 SAN \u5224\u65ad\u662f\u5426\u76f8\u540c"))),(0,l.kt)("li",{parentName:"ul"},"Revoke \u65e0\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u5c0f\u65f6\u6700\u591a 5 \u6b21\u9a8c\u8bc1\u5931\u8d25"),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u63a5\u53e3 20 RPS\uff0c\u975e\u6838\u5fc3 40 RPS"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4e0d\u4f1a\u9047\u5230\u7684\u9650\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"10 \u8d26\u6237/IP/3 \u5c0f\u65f6"),(0,l.kt)("li",{parentName:"ul"},"500 \u8d26\u6237/IPv6-48/3 \u5c0f\u65f6"),(0,l.kt)("li",{parentName:"ul"},"300 \u5f85\u9a8c\u8bc1\u6388\u6743/\u8d26\u6237"))))),(0,l.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u6709\u6548\u671f \u4e09\u4e2a\u6708, 90 \u5929, 13 \u5468"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://letsencrypt.org/docs/staging-environment/"},"staging"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://acme-staging-v02.api.letsencrypt.org/directory"},"https://acme-staging-v02.api.letsencrypt.org/directory")),(0,l.kt)("li",{parentName:"ul"},"ACME v2 New Orders 1,500/3h")))))}y.isMDXComponent=!0}}]);