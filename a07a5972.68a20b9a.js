(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{381:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(7),i=(r(0),r(557)),o={id:"lvm",title:"LVM"},c={unversionedId:"ops/storage/block/lvm",id:"ops/storage/block/lvm",isDocsHomePage:!1,title:"LVM",description:"LVM",source:"@site/contents/tricks/ops/storage/block/lvm.md",slug:"/ops/storage/block/lvm",permalink:"/notes/ops/storage/block/lvm",version:"current",sidebar:"docs",previous:{title:"mdadm",permalink:"/notes/ops/storage/block/mdadm"},next:{title:"Filesystem",permalink:"/notes/ops/storage/fs/intro"}},l=[{value:"Tips",id:"tips",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"lvm"},"LVM"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://askubuntu.com/q/3596"}),"What is LVM and what is it used for?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://tldp.org/HOWTO/LVM-HOWTO/"}),"LVM HOWTO")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.ubuntu.com/Lvm"}),"LVM wiki")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)"}),"LVM Wikipedia")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://askubuntu.com/questions/3596"}),"What is LVM and what is it used for ?")),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7279\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u903b\u8f91\u5377\u53ef\u4ee5\u8de8\u78c1\u76d8"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9e\u73b0 RAID0 \u7684\u529f\u80fd, \u5206\u644a\u78c1\u76d8\u538b\u529b"),Object(i.b)("li",{parentName:"ul"},"\u903b\u8f91\u5377\u5927\u5c0f\u53ef\u52a8\u6001\u8c03\u6574\u4e0d\u5f71\u54cd\u7cfb\u7edf\u548c\u7a0b\u5e8f"),Object(i.b)("li",{parentName:"ul"},"\u52a8\u6001\u5206\u533a,\u4fee\u6539\u65e0\u9700\u91cd\u542f"),Object(i.b)("li",{parentName:"ul"},"\u70ed\u4ea4\u6362"),Object(i.b)("li",{parentName:"ul"},"\u5408\u5e76\u591a\u4e2a\u4e91\u76d8"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u505a\u6df7\u5408,\u4f7f\u7528 SSD \u6765\u505a\u7f13\u5b58"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9 LV \u505a\u5feb\u7167\u6216\u6062\u590d"),Object(i.b)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 striped \u6a21\u5f0f,\u4f7f\u7cfb\u7edf\u76f4\u63a5\u8bbf\u95ee\u7269\u7406\u78c1\u76d8,\u7c7b\u4f3c\u4e8e RAID-0"))),Object(i.b)("li",{parentName:"ul"},"\u4e2a\u4eba\u603b\u7ed3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"LVM \u8bbe\u7f6e\u8d77\u6765\u6709\u70b9\u7e41\u6742"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u822c\u4e5f\u4e0d\u4f1a\u7528\u4e8e rootfs"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u505a nas \u4e5f\u4f18\u5148\u662f\u8003\u8651 zfs")))))}b.isMDXComponent=!0},557:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(O,c(c({ref:t},p),{},{components:r})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);