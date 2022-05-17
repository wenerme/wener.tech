"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47062],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),f=l,d=c["".concat(u,".").concat(f)]||c[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={title:"Linux Awesome",tags:["Awesome"]},u=void 0,m={unversionedId:"os/linux/linux-awesome",id:"os/linux/linux-awesome",title:"Linux Awesome",description:"Dev",source:"@site/notes/os/linux/linux-awesome.md",sourceDirName:"os/linux",slug:"/os/linux/linux-awesome",permalink:"/notes/os/linux/linux-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/linux-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Linux Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"musl",permalink:"/notes/os/linux/lib/musl"},next:{title:"Linux FAQ",permalink:"/notes/os/linux/linux-faq"}},p={},s=[{value:"Dev",id:"dev",level:2},{value:"Command",id:"command",level:2},{value:"Performance",id:"performance",level:2},{value:"webadmin",id:"webadmin",level:2},{value:"Firmware",id:"firmware",level:2},{value:"Learn",id:"learn",level:2},{value:"Tools",id:"tools",level:2},{value:"\u6709\u8da3",id:"\u6709\u8da3",level:2}],c={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dev"},"Dev"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openwall.com/"},"https://www.openwall.com/"))),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tldr-pages/tldr"},"tldr-pages/tldr"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Collaborative cheatsheets for console commands")))),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.brendangregg.com/linuxperf.html"},"Linux Performance"))),(0,a.kt)("h2",{id:"webadmin"},"webadmin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zhaojh329/oui"},"zhaojh329/oui")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cockpit-project/cockpit"},"cockpit-project/cockpit"))),(0,a.kt)("h2",{id:"firmware"},"Firmware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fwupd.org/"},"fwupd"),"\nLinux Vendor Firmware Service")),(0,a.kt)("h2",{id:"learn"},"Learn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sysprog21.github.io/lkmpg/"},"The Linux Kernel Module Programming Guide"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28283030"},"HN"))))),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aristocratos/btop"},"aristocratos/btop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/intoli/exodus"},"intoli/exodus"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"relocation of Linux binaries\u2013and all of their dependencies\u2013without containers")))),(0,a.kt)("h2",{id:"\u6709\u8da3"},"\u6709\u8da3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sbu-fsl/kernel-ml"},"sbu-fsl/kernel-ml"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Brings ML to Linux kernel")))))}f.isMDXComponent=!0}}]);