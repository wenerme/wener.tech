(window.webpackJsonp=window.webpackJsonp||[]).push([[967],{1040:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(1096)),o={title:"UEFI"},l={unversionedId:"os/linux/boot/uefi",id:"os/linux/boot/uefi",isDocsHomePage:!1,title:"UEFI",description:"- \u53c2\u8003",source:"@site/notes/os/linux/boot/uefi.md",slug:"/os/linux/boot/uefi",permalink:"/notes/os/linux/boot/uefi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/uefi.md",version:"current",sidebar:"docs",previous:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"},next:{title:"Linux \u7f51\u7edc",permalink:"/notes/os/linux/network/network"}},b=[{value:"OVMF",id:"ovmf",children:[]},{value:"Why UEFI / UEFI vs BIOS",id:"why-uefi--uefi-vs-bios",children:[]}],c={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://edk2-docs.gitbook.io/understanding-the-uefi-secure-boot-chain"},"Understanding UEFI Secure Boot Chain")),Object(i.b)("li",{parentName:"ul"},"wikipedia ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface"},"UEFI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Alpine_and_UEFI"},"Alpine and UEFI")),Object(i.b)("li",{parentName:"ul"},"debian ",Object(i.b)("a",{parentName:"li",href:"https://wiki.debian.org/UEFI"},"UEFI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.ubuntu.com/EFIBootLoaders"},"EFIBootLoaders")),Object(i.b)("li",{parentName:"ul"},"ubuntu ",Object(i.b)("a",{parentName:"li",href:"https://wiki.ubuntu.com/UEFI/OVMF"},"UEFI/OVMF")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://blog.system76.com/post/139138591598/howto-uefi-qemu-guest-on-ubuntu-xenial-host"},"Howto: QEMU w/ Ubuntu Xenial host + UEFI guest")))),Object(i.b)("li",{parentName:"ul"},".efi \u5b58\u50a8\u5728 ESP/EFI System Partition \u5206\u533a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5206\u533a\u6807\u8bc6 EF"),Object(i.b)("li",{parentName:"ul"},"\u5206\u533a\u683c\u5f0f\u4e3a FAT \u6216 FAT32")))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 UEFI \u5efa\u8bae\u4f7f\u7528 GRUB Bootloader")))),Object(i.b)("h2",{id:"ovmf"},"OVMF"),Object(i.b)("p",null,"\u57fa\u4e8e EDK II \u7528\u4e8e\u652f\u6301\u865a\u62df\u673a EFI \u542f\u52a8\u7684\u56fa\u4ef6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"OVMF/OVMF.fd - x86_64 \u5b9e\u9645\u8fd0\u884c\u7684\u56fa\u4ef6"),Object(i.b)("li",{parentName:"ul"},"OVMF/OVMF_CODE.fd"),Object(i.b)("li",{parentName:"ul"},"OVMF/OVMF_VARS.fd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u201ctemplate\u201d used to emulate persistent NVRAM storage"))),Object(i.b)("li",{parentName:"ul"},"OVMF/QEMU_EFI.fd - aarch64"),Object(i.b)("li",{parentName:"ul"},"ovmf/bios.bin - \u8f6f\u8fde\u63a5\u6307\u5411 OVMF.fd \u6216 QEMU_EFI.fd")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# -pflash path/to/OVMF.fd - emulated flash, fully support UEFI variables\n# -bios bios.bin - variables will be partially emulated, and non-volatile, variables may lose their contents after a reboot\n# -L . - \u540c bios\n# qemu-system-x86_64 -L .\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"why-uefi--uefi-vs-bios"},"Why UEFI / UEFI vs BIOS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u56fa\u4ef6\u63a5\u53e3"))),Object(i.b)("li",{parentName:"ul"},"BIOS",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MBR/Master Boot Record \u5b58\u50a8\u5206\u533a"))),Object(i.b)("li",{parentName:"ul"},"UEFI",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"GPT/GUID partition table \u5206\u533a"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 2TB \u5b58\u50a8\u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u8d85\u8fc7 4 \u4e2a\u4e3b\u5206\u533a"),Object(i.b)("li",{parentName:"ul"},"\u56fa\u4ef6\u652f\u6301\u4f7f\u7cfb\u7edf\u542f\u52a8\u66f4\u5feb"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u5b89\u5168\u542f\u52a8 - \u7cfb\u7edf\u5b8c\u6574\u6027\u68c0\u67e5"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u7f51\u7edc"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u56fe\u5f62\u754c\u9762")))))}u.isMDXComponent=!0},1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,O=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return n?r.a.createElement(O,l(l({ref:t},c),{},{components:n})):r.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);