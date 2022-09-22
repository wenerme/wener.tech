"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68513],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8509:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&u(e,r,t[r]);return e};const p={title:"memtest"},f="memtest",d={unversionedId:"os/linux/sys/memtest",id:"os/linux/sys/memtest",title:"memtest",description:"- memtester",source:"@site/../notes/os/linux/sys/memtest.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/memtest",permalink:"/notes/os/linux/sys/memtest",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/memtest.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"memtest"},sidebar:"docs",previous:{title:"LSM",permalink:"/notes/os/linux/sys/lsm"},next:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"}},y={},b=[{value:"trying mlock ...too many pages, reducing",id:"trying-mlock-too-many-pages-reducing",level:2}],g={toc:b};function k(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),u),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"memtest"}),"memtest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://pyropus.ca./software/memtester/"}),"memtester")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://www.memtest.org/"}),"memtest86+"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"16-bit, \u4e0d\u652f\u6301 UEFI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.memtest86.com/"}),"memtest86.com"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5546\u4e1a, \u6709 free \u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 UEFI")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl -LO http://www.memtest.org/download/5.31b/memtest86+-5.31b.iso.zip\nunzip memtest86+-5.31b.iso.zip\n\nsudo dd bs=4M if=mt531b.iso of=/dev/sdb conv=fdatasync\nsudo dd bs=4M if=memtest86+-5.31b.bin of=/dev/sdb conv=fdatasync\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u67e5\u90e8\u5206\u5185\u5b58\nmemtester -p 0xfce20000 64k 128\n")),(0,n.kt)("h1",c({},{id:"memtester"}),"memtester"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://pyropus.ca./software/memtester/"}),"memtester"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apk add memtester\n# size iteratio\nmemtester 30G 1\n")),(0,n.kt)("h2",c({},{id:"trying-mlock-too-many-pages-reducing"}),"trying mlock ...too many pages, reducing"),(0,n.kt)("p",null,"\u7528 root \u8d26\u53f7"))}k.isMDXComponent=!0}}]);