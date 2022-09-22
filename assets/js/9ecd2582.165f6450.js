"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13308],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,b=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42856:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),i=["components"],l={title:"Fiber Channel"},c="Fiber Channel",p={unversionedId:"ops/storage/block/fc",id:"ops/storage/block/fc",title:"Fiber Channel",description:"- SAN \u539f\u59cb\u534f\u8bae",source:"@site/../notes/ops/storage/block/fc.md",sourceDirName:"ops/storage/block",slug:"/ops/storage/block/fc",permalink:"/notes/ops/storage/block/fc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/storage/block/fc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Fiber Channel"},sidebar:"docs",previous:{title:"Storage",permalink:"/notes/ops/storage/"},next:{title:"LVM",permalink:"/notes/ops/storage/block/lvm"}},u={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fiber-channel"},"Fiber Channel"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SAN \u539f\u59cb\u534f\u8bae"),(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5728 Firber Channel network",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9700\u8981\u7279\u6b8a\u7684\u7f51\u7edc\u8bbe\u5907"),(0,o.kt)("li",{parentName:"ul"},"WWN \u5730\u5740 - World Wide Names"),(0,o.kt)("li",{parentName:"ul"},"WWNN - World Wide Node Name - \u8282\u70b9\u540d\u5b57"),(0,o.kt)("li",{parentName:"ul"},"WWPN - World Wide Port Name - \u8282\u70b9\u7aef\u53e3 - \u5b9a\u4f4d\u7c7b\u4f3c Ethernet \u7684 MAC",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728\u786c\u4ef6\u4e2d"))),(0,o.kt)("li",{parentName:"ul"},"Zoing"),(0,o.kt)("li",{parentName:"ul"},"LUN Masking"),(0,o.kt)("li",{parentName:"ul"},"Switch Domain ID"),(0,o.kt)("li",{parentName:"ul"},"FLOGI - Fabric Login"),(0,o.kt)("li",{parentName:"ul"},"FCNS - Fibre Channel Name Service"),(0,o.kt)("li",{parentName:"ul"},"PLOGI - Port Login"),(0,o.kt)("li",{parentName:"ul"},"Process Login"),(0,o.kt)("li",{parentName:"ul"},"ALUA - Asymmetric Logical Unit Assignment"))),(0,o.kt)("li",{parentName:"ul"},"FCP \u53d1\u9001 SCSI \u6307\u4ee4"),(0,o.kt)("li",{parentName:"ul"},"\u534f\u8bae\u7a33\u5b9a\u53ef\u9760\u3001\u4e0d\u4f1a\u4e22\u5931\u3001\u652f\u6301 2, 4, 6, 8, 16 Gbps")))}f.isMDXComponent=!0}}]);