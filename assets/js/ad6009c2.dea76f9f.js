"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38723],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1197:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e};const m={id:"lvm",title:"LVM"},f="LVM",d={unversionedId:"ops/storage/block/lvm",id:"ops/storage/block/lvm",title:"LVM",description:"Tips",source:"@site/../notes/ops/storage/block/lvm.md",sourceDirName:"ops/storage/block",slug:"/ops/storage/block/lvm",permalink:"/notes/ops/storage/block/lvm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/block/lvm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"lvm",title:"LVM"},sidebar:"docs",previous:{title:"Fiber Channel",permalink:"/notes/ops/storage/block/fc"},next:{title:"mdadm",permalink:"/notes/ops/storage/block/mdadm"}},k={},b=[{value:"Tips",id:"tips",level:2}],y={toc:b};function O(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"lvm"}),"LVM"),(0,n.kt)("h2",s({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://askubuntu.com/q/3596"}),"What is LVM and what is it used for?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"http://tldp.org/HOWTO/LVM-HOWTO/"}),"LVM HOWTO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wiki.ubuntu.com/Lvm"}),"LVM wiki")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)"}),"LVM Wikipedia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://askubuntu.com/questions/3596"}),"What is LVM and what is it used for ?")),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u903b\u8f91\u5377\u53ef\u4ee5\u8de8\u78c1\u76d8"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9e\u73b0 RAID0 \u7684\u529f\u80fd, \u5206\u644a\u78c1\u76d8\u538b\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u903b\u8f91\u5377\u5927\u5c0f\u53ef\u52a8\u6001\u8c03\u6574\u4e0d\u5f71\u54cd\u7cfb\u7edf\u548c\u7a0b\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u5206\u533a,\u4fee\u6539\u65e0\u9700\u91cd\u542f"),(0,n.kt)("li",{parentName:"ul"},"\u70ed\u4ea4\u6362"),(0,n.kt)("li",{parentName:"ul"},"\u5408\u5e76\u591a\u4e2a\u4e91\u76d8"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u505a\u6df7\u5408,\u4f7f\u7528 SSD \u6765\u505a\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9 LV \u505a\u5feb\u7167\u6216\u6062\u590d"),(0,n.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 striped \u6a21\u5f0f,\u4f7f\u7cfb\u7edf\u76f4\u63a5\u8bbf\u95ee\u7269\u7406\u78c1\u76d8,\u7c7b\u4f3c\u4e8e RAID-0"))),(0,n.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u603b\u7ed3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LVM \u8bbe\u7f6e\u8d77\u6765\u6709\u70b9\u7e41\u6742"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4e5f\u4e0d\u4f1a\u7528\u4e8e rootfs"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u505a nas \u4e5f\u4f18\u5148\u662f\u8003\u8651 zfs")))))}O.isMDXComponent=!0}}]);