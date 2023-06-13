"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68513],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(r),f=a,d=c["".concat(i,".").concat(f)]||c[f]||u[f]||s;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15323:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(m)for(var r of m(t))l.call(t,r)&&p(e,r,t[r]);return e};const c={title:"memtest"},f="memtest",d={unversionedId:"os/linux/sys/memtest",id:"os/linux/sys/memtest",title:"memtest",description:"- memtester",source:"@site/../notes/os/linux/sys/memtest.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/memtest",permalink:"/notes/os/linux/sys/memtest",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/memtest.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"memtest"},sidebar:"docs",previous:{title:"LSM",permalink:"/notes/os/linux/sys/lsm"},next:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"}},b={},k=[{value:"memtest",id:"memtest-1",level:2},{value:"trying mlock ...too many pages, reducing",id:"trying-mlock-too-many-pages-reducing",level:2}],y={toc:k};function g(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),p),s(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"memtest"}),"memtest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://pyropus.ca./software/memtester/"}),"memtester")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://www.memtest.org/"}),"memtest86+"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"16-bit, \u4e0d\u652f\u6301 UEFI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.memtest86.com/"}),"memtest86.com"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5546\u4e1a, \u6709 free \u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 UEFI")))),(0,n.kt)("h2",u({},{id:"memtest-1"}),"memtest"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"curl -LO http://www.memtest.org/download/5.31b/memtest86+-5.31b.iso.zip\nunzip memtest86+-5.31b.iso.zip\n\nsudo dd bs=4M if=mt531b.iso of=/dev/sdb conv=fdatasync\nsudo dd bs=4M if=memtest86+-5.31b.bin of=/dev/sdb conv=fdatasync\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u67e5\u90e8\u5206\u5185\u5b58\nmemtester -p 0xfce20000 64k 128\n")),(0,n.kt)("h1",u({},{id:"memtester"}),"memtester"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://pyropus.ca./software/memtester/"}),"memtester")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/jnavila/memtester"}),"jnavila/memtester")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/jnavila/memtester/blob/master/memtester.8"}),"https://github.com/jnavila/memtester/blob/master/memtester.8")),(0,n.kt)("li",{parentName:"ul"},"MEMTESTER_TEST_MASK"),(0,n.kt)("li",{parentName:"ul"},"test_stuck_address"),(0,n.kt)("li",{parentName:"ul"},"test_random_value"),(0,n.kt)("li",{parentName:"ul"},"test_xor_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_sub_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_mul_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_div_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_or_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_and_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_solidbits_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_checkerboard_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_blockseq_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_walkbits0_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_walkbits1_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_bitspread_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_bitflip_comparison"),(0,n.kt)("li",{parentName:"ul"},"test_8bit_wide_random"),(0,n.kt)("li",{parentName:"ul"},"test_16bit_wide_random")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk add memtester\n# size iteratio\nmemtester 30G 1\n")),(0,n.kt)("h2",u({},{id:"trying-mlock-too-many-pages-reducing"}),"trying mlock ...too many pages, reducing"),(0,n.kt)("p",null,"\u7528 root \u8d26\u53f7"))}g.isMDXComponent=!0}}]);