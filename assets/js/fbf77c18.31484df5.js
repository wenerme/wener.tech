"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53067],{10198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return c}});var r=n(96600),a=n(27279),o=(n(59496),n(3905)),s=["components"],m={title:"memtest"},i=void 0,l={unversionedId:"os/linux/sys/memtest",id:"os/linux/sys/memtest",title:"memtest",description:"- memtester",source:"@site/notes/os/linux/sys/memtest.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/memtest",permalink:"/notes/os/linux/sys/memtest",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/memtest.md",tags:[],version:"current",frontMatter:{title:"memtest"},sidebar:"docs",previous:{title:"LSM",permalink:"/notes/os/linux/sys/lsm"},next:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"}},u={},c=[{value:"trying mlock ...too many pages, reducing",id:"trying-mlock-too-many-pages-reducing",level:2}],p={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pyropus.ca./software/memtester/"},"memtester")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.memtest.org/"},"memtest86+"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"16-bit, \u4e0d\u652f\u6301 UEFI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.memtest86.com/"},"memtest86.com"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5546\u4e1a, \u6709 free \u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 UEFI")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO http://www.memtest.org/download/5.31b/memtest86+-5.31b.iso.zip\nunzip memtest86+-5.31b.iso.zip\n\nsudo dd bs=4M if=mt531b.iso of=/dev/sdb conv=fdatasync\nsudo dd bs=4M if=memtest86+-5.31b.bin of=/dev/sdb conv=fdatasync\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u68c0\u67e5\u90e8\u5206\u5185\u5b58\nmemtester -p 0xfce20000 64k 128\n")),(0,o.kt)("h1",{id:"memtester"},"memtester"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pyropus.ca./software/memtester/"},"memtester"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apk add memtester\n# size iteratio\nmemtester 30G 1\n")),(0,o.kt)("h2",{id:"trying-mlock-too-many-pages-reducing"},"trying mlock ...too many pages, reducing"),(0,o.kt)("p",null,"\u7528 root \u8d26\u53f7"))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return p}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,y=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:a,s[1]=m;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);