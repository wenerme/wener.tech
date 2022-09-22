"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[42396],{49613:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return b}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=u(n),b=r,h=k["".concat(p,".").concat(b)]||k[b]||s[b]||o;return n?a.createElement(h,i(i({ref:e},m),{},{components:n})):a.createElement(h,i({ref:e},m))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92257:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var a=n(96600),r=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"Netboot"},p="Netboot",u={unversionedId:"ops/netboot",id:"ops/netboot",title:"Netboot",description:"- google/netboot",source:"@site/../notes/ops/netboot.md",sourceDirName:"ops",slug:"/ops/netboot",permalink:"/notes/ops/netboot",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/netboot.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Netboot"},sidebar:"docs",previous:{title:"Mirrors",permalink:"/notes/ops/mirrors"},next:{title:"OPS Awesome",permalink:"/notes/ops/ops-awesome"}},m={},s=[{value:"iPXE",id:"ipxe",level:2},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:3},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",level:3},{value:"http://boot.ipxe.org/demo/boot.php",id:"httpbootipxeorgdemobootphp",level:3},{value:"AlpineLinux",id:"alpinelinux",level:2},{value:"http://boot.alpinelinux.org/boot.ipxe",id:"httpbootalpinelinuxorgbootipxe",level:3},{value:"netboot.xyz",id:"netbootxyz",level:2},{value:"https://boot.netboot.xyz",id:"httpsbootnetbootxyz",level:3}],k={toc:s};function b(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"netboot"},"Netboot"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/netboot"},"google/netboot"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go \u5b9e\u73b0"))),(0,o.kt)("li",{parentName:"ul"},"AlpineLinux",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/PXE_boot"},"PXE boot")),(0,o.kt)("li",{parentName:"ul"},"netboot ",(0,o.kt)("a",{parentName:"li",href:"http://boot.alpinelinux.org/"},"boot.alpinelinux.org")),(0,o.kt)("li",{parentName:"ul"},"Mirror \u91cc\u4e5f\u90fd\u6709 netboot \u4f9d\u8d56\u7528\u7684\u4e1c\u897f ",(0,o.kt)("a",{parentName:"li",href:"https://mirrors.sjtug.sjtu.edu.cn/alpine/v3.16/releases/x86_64/netboot/"},"https://mirrors.sjtug.sjtu.edu.cn/alpine/v3.16/releases/x86_64/netboot/")))),(0,o.kt)("li",{parentName:"ul"},"ArchLinux",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Netboot"},"Netboot")))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://etherboot.org/wiki/qemu"},"How to use gPXE with QEMU")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/thereapsz/alpine-pxe"},"thereapsz/alpine-pxe"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728 docker \u4e2d\u8fd0\u884c ubuntu \u7684 pxe \u670d\u52a1"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.saminiir.com/debugging-pxe-boot/"},"Debugging PXE boot with QEMU")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Storage_area_network"},"https://en.wikipedia.org/wiki/Storage_area_network"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540e\u7f00"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".iso"),(0,o.kt)("td",{parentName:"tr",align:null},"CD/DVD, \u865a\u62df\u5149\u9a71, DARC/iLO, VMware, VBox")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".dsk"),(0,o.kt)("td",{parentName:"tr",align:null},"1.44 MB \u8f6f\u76d8, \u865a\u62df\u8f6f\u76d8, DARC/iLO, VMware, VBox")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".usb"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u521b\u5efa USB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".lkrn"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u4ece GRUB/EXTLINUX \u542f\u52a8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".kpxe"),(0,o.kt)("td",{parentName:"tr",align:null},"DHCP \u542f\u52a8\u955c\u50cf\u6216\u5167\u5efa iPXE \u7f51\u5361")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"undionly.kpxe"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e26 UNDI \u652f\u6301\u7684 PXE \u955c\u50cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".efi"),(0,o.kt)("td",{parentName:"tr",align:null},"EFI \u542f\u52a8\u955c\u50cf")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -nd -P x86_64 --mirror http://boot.alpinelinux.org/images/latest-stable/x86_64/\n")),(0,o.kt)("h2",{id:"ipxe"},"iPXE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://ipxe.org"},"ipxe.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ipxe/ipxe"},"ipxe/ipxe")),(0,o.kt)("li",{parentName:"ul"},"Wikipedia ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IPXE"},"IPXE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://ipxe.org/cmd"},"\u547d\u4ee4\u884c")),(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u76ee\u5f55 ",(0,o.kt)("a",{parentName:"li",href:"http://boot.ipxe.org/"},"boot.ipxe.org")),(0,o.kt)("li",{parentName:"ul"},"\u5728 PXE \u4e0a\u65b0\u589e\u7279\u6027",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"boot from a web server via HTTP"),(0,o.kt)("li",{parentName:"ul"},"boot from an iSCSI SAN"),(0,o.kt)("li",{parentName:"ul"},"boot from a Fibre Channel SAN via FCoE"),(0,o.kt)("li",{parentName:"ul"},"boot from an AoE SAN"),(0,o.kt)("li",{parentName:"ul"},"boot from a wireless network"),(0,o.kt)("li",{parentName:"ul"},"boot from a wide-area network"),(0,o.kt)("li",{parentName:"ul"},"boot from an Infiniband network"),(0,o.kt)("li",{parentName:"ul"},"control the boot process with a script"))),(0,o.kt)("li",{parentName:"ul"},"QMUE \u96c6\u6210\u4e86 iPXE"),(0,o.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u7f51\u5361\u96c6\u6210\u4e86 iPXE"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.packet.net/technical/infrastructure/custom-ipxe"},"Custom iPXE")))),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"QEMU \u4e0d\u652f\u6301 https"),(0,o.kt)("li",{parentName:"ul"},"QMEU \u7248\u672c\u4e3a 1.0.0 \u5f88\u591a\u547d\u4ee4\u6ca1\u6709")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 Esc+2 \u5207\u6362\u5230 monitor, Esc+1 \u5207\u6362\u5230\u63a7\u5236\u53f0\nqemu-system-x86_64 -net nic -net user -curses\n\n# \u6216\u8005\u4f7f\u7528\u5b98\u65b9\u7684\u5185\u6838\ncurl http://boot.ipxe.org/ipxe.lkrn -O\nqemu-system-x86_64 -net nic -net user\n")),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# http://ipxe.org/download\n# http://ipxe.org/howto/chainloading\n# \u4f8b\u5982\nmake bin/undionly.kpxe EMBED=demo.ipxe\n")),(0,o.kt)("h3",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u914d\u7f6e http://ipxe.org/cfg\n# \u67e5\u770b\u5f53\u524d\u7248\u672c\u53f7\nshow version\n# \u663e\u793a\u6784\u5efa\u7684\u5e73\u53f0\nshow platform\n\n# \u81ea\u52a8\u914d\u7f6e\u7f51\u7edc\ndhcp\n\n# ipxe \u7684\u6f14\u793a\u811a\u672c\nchain http://boot.ipxe.org/demo/boot.php\n")),(0,o.kt)("h3",{id:"httpbootipxeorgdemobootphp"},(0,o.kt)("a",{parentName:"h3",href:"http://boot.ipxe.org/demo/boot.php"},"http://boot.ipxe.org/demo/boot.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!ipxe\n\nkernel vmlinuz-3.16.0-rc4 bootfile=http://boot.ipxe.org/demo/boot.php fastboot initrd=initrd.img\ninitrd initrd.img\nboot\n")),(0,o.kt)("h2",{id:"alpinelinux"},"AlpineLinux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/testing/x86_64/alpine-ipxe"},"https://pkgs.alpinelinux.org/package/edge/testing/x86_64/alpine-ipxe"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 alpine \u542f\u52a8\u811a\u672c\n# QEMU \u62a5 imgtrust \u547d\u4ee4\u627e\u4e0d\u5230 http://ipxe.org/cmd/imgtrust\nchain --autofree http://boot.alpinelinux.org/boot.ipxe\n")),(0,o.kt)("h3",{id:"httpbootalpinelinuxorgbootipxe"},(0,o.kt)("a",{parentName:"h3",href:"http://boot.alpinelinux.org/boot.ipxe"},"http://boot.alpinelinux.org/boot.ipxe")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!ipxe\n\nset os Alpine Linux\ncpuid --ext 29 && set arch x86_64 || set arch x86\n\nimgtrust --permanent\n\nmenu ${os} [ ${arch} ]\nitem latest-stable Latest stable\nitem edge Edge (development)\nchoose version || goto alpine_exit\ngoto boot\n\n:boot\nset img-url http://boot.alpinelinux.org/images/${version}/${arch}\nset repo-url http://dl-cdn.alpinelinux.org/alpine/${version}/main\nimgfree\nkernel ${img-url}/vmlinuz-vanilla alpine_repo=${repo-url} modules=loop,squashfs modloop=${img-url}/modloop-vanilla quiet nomodeset\nimgverify vmlinuz-vanilla ${img-url}/vmlinuz-vanilla.sig\ninitrd ${img-url}/initramfs-vanilla\nimgverify initramfs-vanilla ${img-url}/initramfs-vanilla.sig\nboot\ngoto alpine_exit\n\n:alpine_exit\nclear menu\nexit 0\n")),(0,o.kt)("h2",{id:"netbootxyz"},"netboot.xyz"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://netboot.xyz/"},"netboot.xyz"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=10923460"},"HN")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/antonym/netboot.xyz"},"antonym/netboot.xyz"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u811a\u672c ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/antonym/netboot.xyz/tree/master/src"},"src/")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://netboot.xyz/booting/tftp/"},"tftp")),(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u914d\u7f6e ",(0,o.kt)("a",{parentName:"li",href:"https://boot.netboot.xyz/boot.cfg"},"https://boot.netboot.xyz/boot.cfg")),(0,o.kt)("li",{parentName:"ul"},"memdisk ",(0,o.kt)("a",{parentName:"li",href:"https://boot.netboot.xyz/memdisk"},"https://boot.netboot.xyz/memdisk")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u811a\u672c ",(0,o.kt)("a",{parentName:"li",href:"https://boot.netboot.xyz"},"https://boot.netboot.xyz")),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u7cfb\u7edf",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Alpine Linux"),(0,o.kt)("li",{parentName:"ul"},"Antergos"),(0,o.kt)("li",{parentName:"ul"},"Arch Linux"),(0,o.kt)("li",{parentName:"ul"},"CentOS"),(0,o.kt)("li",{parentName:"ul"},"CoreOS Container Linux"),(0,o.kt)("li",{parentName:"ul"},"Debian"),(0,o.kt)("li",{parentName:"ul"},"Devuan"),(0,o.kt)("li",{parentName:"ul"},"Fedora"),(0,o.kt)("li",{parentName:"ul"},"FreeBSD"),(0,o.kt)("li",{parentName:"ul"},"FreeDOS"),(0,o.kt)("li",{parentName:"ul"},"Gentoo"),(0,o.kt)("li",{parentName:"ul"},"IPFire"),(0,o.kt)("li",{parentName:"ul"},"Mageia"),(0,o.kt)("li",{parentName:"ul"},"Manjaro Linux"),(0,o.kt)("li",{parentName:"ul"},"Microsoft Windows"),(0,o.kt)("li",{parentName:"ul"},"MirOS"),(0,o.kt)("li",{parentName:"ul"},"OpenBSD"),(0,o.kt)("li",{parentName:"ul"},"OpenSUSE"),(0,o.kt)("li",{parentName:"ul"},"RancherOS"),(0,o.kt)("li",{parentName:"ul"},"Red Hat Enterprise Linux"),(0,o.kt)("li",{parentName:"ul"},"Scientific Linux"),(0,o.kt)("li",{parentName:"ul"},"Tiny Core Linux"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu"))),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u67b6\u6784",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"x86_64"),(0,o.kt)("li",{parentName:"ul"},"i386"),(0,o.kt)("li",{parentName:"ul"},"arm")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 netboot.xyz \u542f\u52a8\u811a\u672c\n# \u5982\u679c\u4e0d\u652f\u6301 https \u5219\u53ef\u4ee5\u4f7f\u7528 http\nchain --autofree https://boot.netboot.xyz\n")),(0,o.kt)("h3",{id:"httpsbootnetbootxyz"},(0,o.kt)("a",{parentName:"h3",href:"https://boot.netboot.xyz"},"https://boot.netboot.xyz")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!ipxe\n####       boot.netboot.xyz initial loader       ####\n#### see http://netboot.xyz for more information ####\nset conn_type https\nchain --autofree https://boot.netboot.xyz/menu.ipxe || echo HTTPS failed... attempting HTTP...\nset conn_type http\nchain --autofree http://boot.netboot.xyz/menu.ipxe || echo HTTP failed, localbooting...\n")))}b.isMDXComponent=!0}}]);