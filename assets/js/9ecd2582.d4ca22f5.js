"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13308],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18258:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={title:"Fiber Channel"},m="Fiber Channel",b={unversionedId:"ops/storage/block/fc",id:"ops/storage/block/fc",title:"Fiber Channel",description:"- SAN \u539f\u59cb\u534f\u8bae",source:"@site/../notes/ops/storage/block/fc.md",sourceDirName:"ops/storage/block",slug:"/ops/storage/block/fc",permalink:"/notes/ops/storage/block/fc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/block/fc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1619595507,formattedLastUpdatedAt:"Apr 28, 2021",frontMatter:{title:"Fiber Channel"},sidebar:"docs",previous:{title:"Storage",permalink:"/notes/ops/storage/"},next:{title:"LVM",permalink:"/notes/ops/storage/block/lvm"}},d={},y=[],g={toc:y};function k(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},g),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"fiber-channel"}),"Fiber Channel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SAN \u539f\u59cb\u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5728 Firber Channel network",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u7279\u6b8a\u7684\u7f51\u7edc\u8bbe\u5907"),(0,n.kt)("li",{parentName:"ul"},"WWN \u5730\u5740 - World Wide Names"),(0,n.kt)("li",{parentName:"ul"},"WWNN - World Wide Node Name - \u8282\u70b9\u540d\u5b57"),(0,n.kt)("li",{parentName:"ul"},"WWPN - World Wide Port Name - \u8282\u70b9\u7aef\u53e3 - \u5b9a\u4f4d\u7c7b\u4f3c Ethernet \u7684 MAC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u786c\u4ef6\u4e2d"))),(0,n.kt)("li",{parentName:"ul"},"Zoing"),(0,n.kt)("li",{parentName:"ul"},"LUN Masking"),(0,n.kt)("li",{parentName:"ul"},"Switch Domain ID"),(0,n.kt)("li",{parentName:"ul"},"FLOGI - Fabric Login"),(0,n.kt)("li",{parentName:"ul"},"FCNS - Fibre Channel Name Service"),(0,n.kt)("li",{parentName:"ul"},"PLOGI - Port Login"),(0,n.kt)("li",{parentName:"ul"},"Process Login"),(0,n.kt)("li",{parentName:"ul"},"ALUA - Asymmetric Logical Unit Assignment"))),(0,n.kt)("li",{parentName:"ul"},"FCP \u53d1\u9001 SCSI \u6307\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"\u534f\u8bae\u7a33\u5b9a\u53ef\u9760\u3001\u4e0d\u4f1a\u4e22\u5931\u3001\u652f\u6301 2, 4, 6, 8, 16 Gbps")))}k.isMDXComponent=!0}}]);