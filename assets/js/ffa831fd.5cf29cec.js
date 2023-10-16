"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82807],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var l=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=l.createContext({}),o=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return l.createElement(p.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},N=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,h=k["".concat(p,".").concat(N)]||k[N]||s[N]||n;return a?l.createElement(h,i(i({ref:e},u),{},{components:a})):l.createElement(h,i({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=N;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[k]="string"==typeof t?t:r,i[1]=m;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},53619:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return c},default:function(){return w},frontMatter:function(){return h},metadata:function(){return d},toc:function(){return b}});var l=a(49613),r=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&u(t,a,e[a]);if(m)for(var a of m(e))o.call(e,a)&&u(t,a,e[a]);return t},s=(t,e)=>n(t,i(e)),N=(t,e)=>{var a={};for(var l in t)p.call(t,l)&&e.indexOf(l)<0&&(a[l]=t[l]);if(null!=t&&m)for(var l of m(t))e.indexOf(l)<0&&o.call(t,l)&&(a[l]=t[l]);return a};const h={title:"OS Awesome",tags:["Awesome"]},c="OS Awesome",d={unversionedId:"os/os-awesome",id:"os/os-awesome",title:"OS Awesome",description:"Cross OS Components Compare",source:"@site/../notes/os/os-awesome.md",sourceDirName:"os",slug:"/os/awesome",permalink:"/notes/os/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/os-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1697457593,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{title:"OS Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"OpenBSD",permalink:"/notes/os/openbsd/"},next:{title:"OS FAQ",permalink:"/notes/os/faq"}},g={},b=[{value:"Linux Distro",id:"linux-distro",level:2},{value:"\u4e0d\u6d3b\u8dc3",id:"\u4e0d\u6d3b\u8dc3",level:2},{value:"Embedded",id:"embedded",level:2},{value:"Retro Game",id:"retro-game",level:2},{value:"BSD",id:"bsd",level:2},{value:"Kernel",id:"kernel",level:2},{value:"Boot",id:"boot",level:2},{value:"Emulator",id:"emulator",level:2},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",level:2},{value:"Firmware",id:"firmware",level:2},{value:"Forth",id:"forth",level:2},{value:"assm",id:"assm",level:2},{value:"Misc",id:"misc",level:2},{value:"Package manager",id:"package-manager",level:2}],f={toc:b},y="wrapper";function w(t){var e=t,{components:a}=e,r=N(e,["components"]);return(0,l.kt)(y,s(k(k({},f),r),{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",k({},{id:"os-awesome"}),"OS Awesome"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Cross OS Components Compare")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",k({parentName:"tr"},{align:null}),"vs."),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"Windows"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"macOS"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"AlpineLinux"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"Debian"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"Ubuntu"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"RHEL"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"OpenWRT"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"FreeBSD"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Kernel"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Windows NT"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"XUN"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Linux"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Linux"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Linux"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Linux"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Linux"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"BSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Package Manager"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"nuget"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"brew"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"apk"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"apt"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"apt"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"yum"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"opkg"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"pkg")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"init"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"launchd"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"openrc/bbox"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"systemd"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"upstart"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Service Management"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"launchd"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"openrc"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"systemd"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"systemd"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Desktop Environment"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Aqua"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"GNOME"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Firewall"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"pf"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"iptables"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"ufw"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"pf,ipfw")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Virtualization"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"hyperv/hax"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"hvf/hax"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"kvm"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"kvm"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"kvm"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"kvm"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"-"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"bhyve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Shell"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"cmd,ps"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"zsh"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"ash"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"bash"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"bash"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"bash"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"csh,sh")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/redox-os/redox"}),"redox-os/redox"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Rust"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/vlang/vinix"}),"vlang/vinix"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPL-3.0, Vlang"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/cloudius-systems/osv"}),"cloudius-systems/osv"),"\nOSv - os for the cloud."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://fuchsia.dev/"}),"FuchsiaOS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BSD, MIT, Apache License 2.0"),(0,l.kt)("li",{parentName:"ul"},"Zircon ROTS \u5185\u6838"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/SerenityOS/serenity"}),"SerenityOS/serenity"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BSD-3, C++"),(0,l.kt)("li",{parentName:"ul"},"Unix-like, 90 \u5e74\u4ee3\u98ce\u683c, x86_32"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/haiku/haiku"}),"haiku/haiku"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/reactos/reactos"}),"reactos/reactos"),"\n\u517c\u5bb9 Windows \u7684 Linux",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPL-2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/mszoek/airyx"}),"mszoek/airyx"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BSD, ObjC"),(0,l.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u517c\u5bb9 macOS \u5e76\u63d0\u4f9b\u76f8\u540c\u7684\u4f53\u9a8c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/SerenityOS/serenity"}),"SerenityOS/serenity"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Graphical Unix-like operating system for x86 computers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/bottlerocket-os/bottlerocket"}),"bottlerocket-os/bottlerocket"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"designed for hosting containers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/siderolabs/talos"}),"siderolabs/talos"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux distribution built for Kubernetes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://gitlab.com/nakst/essence"}),"nakst/essence"))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/zriyansh/awesome-os"}),"zriyansh/awesome-os"))),(0,l.kt)("h2",k({},{id:"linux-distro"}),"Linux Distro"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"openwrt"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/istoreos/istoreos"}),"istoreos/istoreos"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"based on OpenWRT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/reactos/reactos"}),"reactos"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u517c\u5bb9 Windows\u2122 NT - Windows NT4, 2000, XP, 2003, Vista, 7"))),(0,l.kt)("li",{parentName:"ul"},"Media Center",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://libreelec.tv/"}),"LibreELEC"),"\nLibre Embedded Linux Entertainment Center",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"fork of OpenELEC at 2016"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/LibreELEC/LibreELEC.tv"}),"LibreELEC/LibreELEC.tv")),(0,l.kt)("li",{parentName:"ul"},"Just enough OS for KODI"),(0,l.kt)("li",{parentName:"ul"},"RPi 4 \u652f\u6301 HEVC/H.265 \u786c\u89e3"),(0,l.kt)("li",{parentName:"ul"},"RPi 2+ \u652f\u6301 H.264 \u786c\u89e3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://osmc.tv/"}),"osmc.tv")),(0,l.kt)("li",{parentName:"ul"},"OpenELEC"),(0,l.kt)("li",{parentName:"ul"},"GeeXboX"),(0,l.kt)("li",{parentName:"ul"},"Recalbox"),(0,l.kt)("li",{parentName:"ul"},"LinuxMCE"),(0,l.kt)("li",{parentName:"ul"},"LinHES"))),(0,l.kt)("li",{parentName:"ul"},"Gaming",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.lakka.tv/"}),"lakka.tv"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7535\u89c6\u3001\u590d\u53e4\u6e38\u620f"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e LibreELEC, RetroArch"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/libretro/Lakka-LibreELEC"}),"libretro/Lakka-LibreELEC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/libretro/RetroArch"}),"libretro/RetroArch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.lakka.tv/doc/Hardware-support"}),"Hardware-support")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://emulation.ninja/"}),"https://emulation.ninja/")))),(0,l.kt)("li",{parentName:"ul"},"Retropie,Recalbox,Lakka,Batocera"),(0,l.kt)("li",{parentName:"ul"},"unRAID, LIME TECH"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/kentjhall/horizon-linux"}),"kentjhall/horizon-linux"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"arm64 Linux patched to run programs for the Nintendo Switch\u2019s Horizon OS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=32464955"}),"HN")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/oasislinux/oasis"}),"oasislinux/oasis"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"small statically-linked linux system"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=32458744"}),"HN"))))),(0,l.kt)("h2",k({},{id:"\u4e0d\u6d3b\u8dc3"}),"\u4e0d\u6d3b\u8dc3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/mit-pdos/biscuit"}),"mit-pdos/biscuit"))),(0,l.kt)("h2",k({},{id:"embedded"}),"Embedded"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/tock/tock"}),"tock/tock"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Apache-2.0, Rust"),(0,l.kt)("li",{parentName:"ul"},"secure embedded os for microcontrollers"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/mudita/MuditaOS"}),"mudita/MuditaOS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mobile operating system based on FreeRTOS\u2122 optimized for E Ink displays")))),(0,l.kt)("h2",k({},{id:"retro-game"}),"Retro Game"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/MiSTer-devel/Main_MiSTer"}),"MiSTer-devel/Main_MiSTer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://voxodyssey.com/atari-2600"}),"atari-2600"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28931183"}),"HN")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://akedo.app/"}),"https://akedo.app/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=31823898"}),"https://news.ycombinator.com/item?id=31823898"))))),(0,l.kt)("h2",k({},{id:"bsd"}),"BSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/ravynsoft/ravynos"}),"ravynsoft/ravynos"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"experience like and some compatibility with macOS"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://openbsdrouterguide.net/"}),"OpenBSD Router Guide"))),(0,l.kt)("h2",k({},{id:"kernel"}),"Kernel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/jjyr/bootgo"}),"jjyr/bootgo"),"\nbarebones OS kernel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Go"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/vvaltchev/tilck"}),"vvaltchev/tilck"),"\nTiny Linux-Compatible Kernel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BSD-2, C"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/nuta/kerla"}),"nuta/kerla"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Apache-2.0, Rust")))),(0,l.kt)("h2",k({},{id:"boot"}),"Boot"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://ventoy.net"}),"Ventoy"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bootable USB drive for ISO/WIM/IMG/VHD(x)/EFI"),(0,l.kt)("li",{parentName:"ul"},"USB/Local Disk/SSD/NVMe/SD Card"),(0,l.kt)("li",{parentName:"ul"},"MBR, GPT"),(0,l.kt)("li",{parentName:"ul"},"x86 Legacy BIOS, IA32 UEFI, x86_64 UEFI, ARM64 UEFI, MIPS64EL UEFI"),(0,l.kt)("li",{parentName:"ul"},"Windows/WinPE/Linux/ChromeOS/Unix/VMware/Xen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/ventoy/Ventoy"}),"ventoy/Ventoy"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPL-3.0, C")))))),(0,l.kt)("h2",k({},{id:"emulator"}),"Emulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/pokemium/magia"}),"pokemium/magia"),"\nGBA emulator",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Golang"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/Zekfoo/AGZ"}),"Zekfoo/AGZ"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"circuit-level redesign of the Game Boy Advance"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/JetSetIlly/Gopher2600"}),"JetSetIlly/Gopher2600"),"\nAtari 2600/VCS Emulator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://binji.github.io/posts/pokegb/"}),"POKEGB: a gameboy emulator that only plays Pok\xe9mon blue"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://gist.github.com/binji/395669d45e9005950232043ab4378abe"}),"pokegb.cc"),"\n\u672a\u6df7\u6dc6\u7684\u539f\u59cb\u4ee3\u7801"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://100r.co/site/uxn.html"}),"uxn"),"\nportable 8-bit virtual computer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/VitorVilela7/wide-snes"}),"VitorVilela7/wide-snes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/Myself086/Project-Nested"}),"Myself086/Project-Nested"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NES emulator running on SNES"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.copetti.org/writings/consoles/nes/"}),"NES Architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.copetti.org/writings/consoles/super-nintendo/"}),"SNES Architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.copetti.org/writings/consoles/game-boy/"}),"GBA Architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"http://www.6502.org/tutorials/6502opcodes.html"}),"NMOS 6502 Opcodes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://andrewkelley.me/post/jamulator.html"}),"Statically Recompiling NES Games into Native Executables with LLVM and Go")),(0,l.kt)("li",{parentName:"ul"},"wikipedia ",(0,l.kt)("a",k({parentName:"li"},{href:"https://en.wikipedia.org/wiki/MOS_Technology_6502"}),"MOS Technology 6502")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.romhacking.net/"}),"ROM Hack")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://tcrf.net/"}),"The Cutting Room Floor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.pagetable.com/c64ref/c64disasm/"}),"C64 BASIC & KERNAL ROM Disassembly")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/aappleby/MetroBoy"}),"aappleby/MetroBoy"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gate-level simulators and for Game Boy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28396927"}),"HN")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.thedigitalcatonline.com/blog/2018/05/28/exploring-the-amiga-1/"}),"Exploring the Amiga - Part 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/AlexAltea/orbital"}),"AlexAltea/orbital"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PS4"))),(0,l.kt)("li",{parentName:"ul"},"Playstation 3 Architecture ",(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28934624"}),"HN")),(0,l.kt)("li",{parentName:"ul"},"Famicom Party: Making NES Games in Assembly ",(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=29069095"}),"HN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://sourceforge.net/projects/vm02/"}),"https://sourceforge.net/projects/vm02/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Java 6502"))),(0,l.kt)("li",{parentName:"ul"},"NES 64 \u2013 Commodore 64 Kernal and Basic ROMs Ported to the NES",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=30351755"}),"HN")))),(0,l.kt)("li",{parentName:"ul"},"Playstation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/nkanaev/tipsy"}),"nkanaev/tipsy"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PS1-like software renderer"),(0,l.kt)("li",{parentName:"ul"},"~500 lines of C99")))))),(0,l.kt)("h2",k({},{id:"\u5f00\u53d1"}),"\u5f00\u53d1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://wiki.osdev.org"}),"https://wiki.osdev.org")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/tuhdo/os01"}),"tuhdo/os01"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bootstrap yourself to write an OS from scratch"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/isometimes/rpi4-osdev"}),"isometimes/rpi4-osdev"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28774022"}),"HN")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/favorites?id=Gunax"}),"https://news.ycombinator.com/favorites?id=Gunax")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/klange/toaruos"}),"klange/toaruos"))),(0,l.kt)("h2",k({},{id:"firmware"}),"Firmware"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/obdev/v-usb"}),"obdev/v-usb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Atmel's AVR Microcontrollers")))),(0,l.kt)("h2",k({},{id:"forth"}),"Forth"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"http://www.forth.org/svfig/osf.html"}),"http://www.forth.org/svfig/osf.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://forth-standard.org/systems"}),"https://forth-standard.org/systems")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/ForthHub/wiki/wiki/Forth-Systems"}),"https://github.com/ForthHub/wiki/wiki/Forth-Systems"))),(0,l.kt)("h2",k({},{id:"assm"}),"assm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Minias \u2013 A mini x86-64 assembler for fun and learning ",(0,l.kt)("a",k({parentName:"li"},{href:"https://news.ycombinator.com/item?id=28884768"}),"HN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/skilldrick/easy6502"}),"skilldrick/easy6502")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"http://www.projectoberon.com/"}),"http://www.projectoberon.com/"))),(0,l.kt)("h2",k({},{id:"misc"}),"Misc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/marcan/takeover.sh"}),"marcan/takeover.sh"))),(0,l.kt)("h2",k({},{id:"package-manager"}),"Package manager"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/jordansissel/fpm"}),"jordansissel/fpm"))))}w.isMDXComponent=!0}}]);