"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51882],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,x=m["".concat(u,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(x,l(l({ref:t},p),{},{components:n})):r.createElement(x,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(96600),i=n(27279),o=(n(59496),n(49613)),l=["components"],a={title:"Syslinux"},u=void 0,s={unversionedId:"os/linux/boot/syslinux",id:"os/linux/boot/syslinux",title:"Syslinux",description:"- \u53ea\u652f\u6301 X86",source:"@site/notes/os/linux/boot/syslinux.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/syslinux",permalink:"/notes/os/linux/boot/syslinux",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/syslinux.md",tags:[],version:"current",frontMatter:{title:"Syslinux"},sidebar:"docs",previous:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"},next:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"}},p={},c=[{value:"config",id:"config",level:2},{value:"extlinux",id:"extlinux",level:2},{value:"MBR",id:"mbr",level:2},{value:"extlinux: no previous syslinux boot sector found",id:"extlinux-no-previous-syslinux-boot-sector-found",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 X86"),(0,o.kt)("li",{parentName:"ul"},"\u5206\u4e3a extlinux\u3001isolinux"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 mbr"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shallowsky.com/linux/extlinux.html"},"How to install extlinux (syslinux) as a bootloader")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Filesystem"},"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u60c5\u51b5"))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"UEFI \u652f\u6301\u4e0d\u597d - \u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 exFAT"),(0,o.kt)("li",{parentName:"ul"},"6.04+ \u652f\u6301 ext4 64bit"))),(0,o.kt)("h2",{id:"config"},"config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Config"},"Config"))),(0,o.kt)("h2",{id:"extlinux"},"extlinux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=EXTLINUX"},"EXTLINUX"))),(0,o.kt)("h2",{id:"mbr"},"MBR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Mbr"},"MBR")),(0,o.kt)("li",{parentName:"ul"},"mbr - dos \u5206\u533a"),(0,o.kt)("li",{parentName:"ul"},"altmbr.bin - \u6307\u5b9a\u5206\u533a\uff0c\u5ffd\u7565 boot"),(0,o.kt)("li",{parentName:"ul"},"gptmbr.bin - gtp \u5206\u533a"),(0,o.kt)("li",{parentName:"ul"},"isohdppx.bin - ISO HDD PPX"),(0,o.kt)("li",{parentName:"ul"},"isohdpfx.bin - ISO HDD PFX"),(0,o.kt)("li",{parentName:"ul"},"isolinux.bin - ISO Linux"),(0,o.kt)("li",{parentName:"ul"},"\u98ce\u683c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_c")," - \u542f\u52a8\u6309\u4f4f Ctrl\uff0ccode boots from BIOS drive 0x80"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_f")," - \u603b\u662f boots from BIOS drive 0x80.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u590d mbr \u5206\u533a\ndd bs=440 conv=notrunc count=1 if=/usr/share/syslinux/mbr.bin of=$dev\n")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"extlinux-no-previous-syslinux-boot-sector-found"},"extlinux: no previous syslinux boot sector found"))}f.isMDXComponent=!0}}]);