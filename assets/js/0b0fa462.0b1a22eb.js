"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8021],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=s(n),m=o,y=b["".concat(l,".").concat(m)]||b[m]||c[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},49722:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return b}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={title:"Busybox",id:"busybox"},l=void 0,s={unversionedId:"os/busybox/busybox",id:"os/busybox/busybox",isDocsHomePage:!1,title:"Busybox",description:"- busybox",source:"@site/notes/os/busybox/README.md",sourceDirName:"os/busybox",slug:"/os/busybox/busybox",permalink:"/notes/os/busybox/busybox",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/README.md",tags:[],version:"current",frontMatter:{title:"Busybox",id:"busybox"},sidebar:"docs",previous:{title:"Windows Remote Management",permalink:"/notes/os/windows/winrm"},next:{title:"ifupdown",permalink:"/notes/os/busybox/ifupdown"}},p=[],c={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://busybox.net/downloads/BusyBox.html"},"busybox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.busybox.net/live_bbox/live_bbox.html"},"live bbox"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/\ncurl -o busybox https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/busybox-x86_64\nchmod +x busybox\n")),(0,a.kt)("h1",{id:"\u5305\u7ba1\u7406"},"\u5305\u7ba1\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ipkg - Itsy Package Management System - 2006-5-30",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".ipk")))),(0,a.kt)("li",{parentName:"ul"},"opkg - OPKG Package Manager",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 root fs \u7ba1\u7406\uff0c\u800c\u4e0d\u53ea\u662f\u5b89\u88c5\u5230\u7279\u5b9a\u76ee\u5f55 - \u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".opk")))),(0,a.kt)("li",{parentName:"ul"},"\u65e9\u671f\u4f7f\u7528 ipkg, \u4e4b\u540e\u88ab opkg \u66ff\u4ee3"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c apt/dpkg")))}b.isMDXComponent=!0}}]);