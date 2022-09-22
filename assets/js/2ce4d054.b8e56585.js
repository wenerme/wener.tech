"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6976],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6015:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return w}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e};const u={title:"pfSense"},m="pfSense",d={unversionedId:"os/network/pfsense",id:"os/network/pfsense",title:"pfSense",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/network/pfsense.md",sourceDirName:"os/network",slug:"/os/network/pfsense",permalink:"/notes/os/network/pfsense",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/network/pfsense.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1604593660,formattedLastUpdatedAt:"Nov 5, 2020",frontMatter:{title:"pfSense"},sidebar:"docs",previous:{title:"OpenWrt",permalink:"/notes/os/network/openwrt"},next:{title:"\u8def\u7531",permalink:"/notes/os/network/router"}},y={},w=[],b={toc:w};function O(e){var t,r=e,{components:o}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),c),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"pfsense"}),"pfSense"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e FreeBSD \u4f7f\u7528 PHP \u7ba1\u7406\u7684\u8f6f\u8def\u7531\u3001\u9632\u706b\u5899"),(0,n.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u534f\u8bae Apache 2.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://www.pfsense.org"}),"pfsense.org"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://github.com/pfsense/pfsense"}),"pfsense/pfsense")),(0,n.kt)("li",{parentName:"ul"},"wikipedia ",(0,n.kt)("a",f({parentName:"li"},{href:"https://en.wikipedia.org/wiki/PfSense"}),"pfSense")))),(0,n.kt)("li",{parentName:"ul"},"2004 fork m0n0wall")))}O.isMDXComponent=!0}}]);