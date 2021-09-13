"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51882],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7875:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],a={title:"Syslinux"},u=void 0,s={unversionedId:"os/linux/boot/syslinux",id:"os/linux/boot/syslinux",isDocsHomePage:!1,title:"Syslinux",description:"- \u53ea\u652f\u6301 X86",source:"@site/notes/os/linux/boot/syslinux.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/syslinux",permalink:"/notes/os/linux/boot/syslinux",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/syslinux.md",tags:[],version:"current",frontMatter:{title:"Syslinux"},sidebar:"docs",previous:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"},next:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"}},p=[{value:"config",id:"config",children:[]},{value:"extlinux",id:"extlinux",children:[]},{value:"MBR",id:"mbr",children:[]},{value:"extlinux: no previous syslinux boot sector found",id:"extlinux-no-previous-syslinux-boot-sector-found",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 X86"),(0,o.kt)("li",{parentName:"ul"},"\u5206\u4e3a extlinux\u3001isolinux"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 mbr"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shallowsky.com/linux/extlinux.html"},"How to install extlinux (syslinux) as a bootloader")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Filesystem"},"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u60c5\u51b5"))))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"UEFI \u652f\u6301\u4e0d\u597d - \u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 exFAT"),(0,o.kt)("li",{parentName:"ul"},"6.04+ \u652f\u6301 ext4 64bit")))),(0,o.kt)("h2",{id:"config"},"config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Config"},"Config"))),(0,o.kt)("h2",{id:"extlinux"},"extlinux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=EXTLINUX"},"EXTLINUX"))),(0,o.kt)("h2",{id:"mbr"},"MBR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Mbr"},"MBR")),(0,o.kt)("li",{parentName:"ul"},"mbr - dos \u5206\u533a"),(0,o.kt)("li",{parentName:"ul"},"altmbr.bin - \u6307\u5b9a\u5206\u533a\uff0c\u5ffd\u7565 boot"),(0,o.kt)("li",{parentName:"ul"},"gptmbr.bin - gtp \u5206\u533a"),(0,o.kt)("li",{parentName:"ul"},"isohdppx.bin - ISO HDD PPX"),(0,o.kt)("li",{parentName:"ul"},"isohdpfx.bin - ISO HDD PFX"),(0,o.kt)("li",{parentName:"ul"},"isolinux.bin - ISO Linux"),(0,o.kt)("li",{parentName:"ul"},"\u98ce\u683c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_c")," - \u542f\u52a8\u6309\u4f4f Ctrl\uff0ccode boots from BIOS drive 0x80"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_f")," - \u603b\u662f boots from BIOS drive 0x80.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u590d mbr \u5206\u533a\ndd bs=440 conv=notrunc count=1 if=/usr/share/syslinux/mbr.bin of=$dev\n")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"extlinux-no-previous-syslinux-boot-sector-found"},"extlinux: no previous syslinux boot sector found"))}m.isMDXComponent=!0}}]);