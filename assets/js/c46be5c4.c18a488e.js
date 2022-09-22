"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88217],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90024:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(96600),o=n(27279),i=(n(59496),n(49613)),a=["components"],u={title:"mdev"},c="mdev",l={unversionedId:"os/busybox/mdev",id:"os/busybox/mdev",title:"mdev",description:"- util-linux/mdev.c",source:"@site/../notes/os/busybox/mdev.md",sourceDirName:"os/busybox",slug:"/os/busybox/mdev",permalink:"/notes/os/busybox/mdev",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/busybox/mdev.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"mdev"},sidebar:"docs",previous:{title:"ifupdown",permalink:"/notes/os/busybox/ifupdown"},next:{title:"syslog",permalink:"/notes/os/busybox/syslog"}},s={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mdev"},"mdev"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sourcegraph.com/github.com/mirror/busybox/-/blob/util-linux/mdev.c"},"util-linux/mdev.c")),(0,i.kt)("li",{parentName:"ul"},"udev \u7684 mini \u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"/sys")," \u68c0\u6d4b\u5230\u7684\u8bbe\u5907\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev")," \u4e0b\u94fe\u63a5"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/mdev.conf"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# %s      %d:%d       %s\n# device  user:group  mode\n")))}d.isMDXComponent=!0}}]);