"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6820],{49613:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return f}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(n),f=r,c=k["".concat(u,".").concat(f)]||k[f]||s[f]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68617:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"UEFI"},u="UEFI",p={unversionedId:"os/linux/boot/uefi",id:"os/linux/boot/uefi",title:"UEFI",description:"- .efi \u5b58\u50a8\u5728 ESP/EFI System Partition \u5206\u533a",source:"@site/../notes/os/linux/boot/uefi.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/uefi",permalink:"/notes/os/linux/boot/uefi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/boot/uefi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"UEFI"},sidebar:"docs",previous:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"},next:{title:"Build",permalink:"/notes/os/linux/build"}},m={},s=[{value:"AlpineLinux",id:"alpinelinux",level:2},{value:"OVMF",id:"ovmf",level:2},{value:"EFISTUB",id:"efistub",level:2},{value:"Why UEFI / UEFI vs BIOS",id:"why-uefi--uefi-vs-bios",level:2}],k={toc:s};function f(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uefi"},"UEFI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".efi \u5b58\u50a8\u5728 ESP/EFI System Partition \u5206\u533a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5206\u533a\u6807\u8bc6 EF"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u533a\u683c\u5f0f\u4e3a FAT \u6216 FAT32"))),(0,l.kt)("li",{parentName:"ul"},"efibootmgr - \u7ba1\u7406 efi \u53d8\u91cf\uff0c\u63a7\u5236\u4f7f\u7528\u7684\u542f\u52a8\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://edk2-docs.gitbook.io/understanding-the-uefi-secure-boot-chain"},"Understanding UEFI Secure Boot Chain")),(0,l.kt)("li",{parentName:"ul"},"wikipedia ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface"},"UEFI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Alpine_and_UEFI"},"Alpine and UEFI")),(0,l.kt)("li",{parentName:"ul"},"debian ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.debian.org/UEFI"},"UEFI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/EFIBootLoaders"},"EFIBootLoaders")),(0,l.kt)("li",{parentName:"ul"},"ubuntu ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/UEFI/OVMF"},"UEFI/OVMF")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.system76.com/post/139138591598/howto-uefi-qemu-guest-on-ubuntu-xenial-host"},"Howto: QEMU w/ Ubuntu Xenial host + UEFI guest"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 UEFI \u5efa\u8bae\u4f7f\u7528 GRUB Bootloader"))),(0,l.kt)("h2",{id:"alpinelinux"},"AlpineLinux"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6700\u5c0f UEFI/GPT \u5206\u533a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"mount point"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/boot, /efi"),(0,l.kt)("td",{parentName:"tr",align:null},"EFI Boot"),(0,l.kt)("td",{parentName:"tr",align:null},"260MiB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"1-32 GiB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"non"),(0,l.kt)("td",{parentName:"tr",align:null},"swap"),(0,l.kt)("td",{parentName:"tr",align:null},"1-2GiB")))),(0,l.kt)("h2",{id:"ovmf"},"OVMF"),(0,l.kt)("p",null,"\u57fa\u4e8e EDK II \u7528\u4e8e\u652f\u6301\u865a\u62df\u673a EFI \u542f\u52a8\u7684\u56fa\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OVMF/OVMF.fd - x86_64 \u5b9e\u9645\u8fd0\u884c\u7684\u56fa\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"OVMF/OVMF_CODE.fd"),(0,l.kt)("li",{parentName:"ul"},"OVMF/OVMF_VARS.fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u201ctemplate\u201d used to emulate persistent NVRAM storage"))),(0,l.kt)("li",{parentName:"ul"},"OVMF/QEMU_EFI.fd - aarch64"),(0,l.kt)("li",{parentName:"ul"},"ovmf/bios.bin - \u8f6f\u8fde\u63a5\u6307\u5411 OVMF.fd \u6216 QEMU_EFI.fd")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# -pflash path/to/OVMF.fd - emulated flash, fully support UEFI variables\n# -bios bios.bin - variables will be partially emulated, and non-volatile, variables may lose their contents after a reboot\n# -L . - \u540c bios\n# qemu-system-x86_64 -L .\n")),(0,l.kt)("h2",{id:"efistub"},"EFISTUB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u79cd\u542f\u52a8\u65b9\u5f0f\uff0c\u5c06 linux \u5185\u6838 \u8f6c\u4e3a efi \u6587\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux \u5185\u6838\u53ef\u76f4\u63a5\u901a\u8fc7 EFI \u542f\u52a8"))),(0,l.kt)("li",{parentName:"ul"},"Linux 3.3+"),(0,l.kt)("li",{parentName:"ul"},"archlinux ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/EFISTUB"},"EFISTUB"))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"why-uefi--uefi-vs-bios"},"Why UEFI / UEFI vs BIOS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56fa\u4ef6\u63a5\u53e3"))),(0,l.kt)("li",{parentName:"ul"},"BIOS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MBR/Master Boot Record \u5b58\u50a8\u5206\u533a"))),(0,l.kt)("li",{parentName:"ul"},"UEFI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPT/GUID partition table \u5206\u533a"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 2TB \u5b58\u50a8\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8d85\u8fc7 4 \u4e2a\u4e3b\u5206\u533a"),(0,l.kt)("li",{parentName:"ul"},"\u56fa\u4ef6\u652f\u6301\u4f7f\u7cfb\u7edf\u542f\u52a8\u66f4\u5feb"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b89\u5168\u542f\u52a8 - \u7cfb\u7edf\u5b8c\u6574\u6027\u68c0\u67e5"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u56fe\u5f62\u754c\u9762")))))}f.isMDXComponent=!0}}]);