"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68714],{56117:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(3905)),i=["components"],o={id:"qemu-windows-host",title:"QEMU Windows \u5bbf\u4e3b\u673a"},u="QEMU Windows HOST",p={unversionedId:"os/virt/qemu-windows-host",id:"os/virt/qemu-windows-host",title:"QEMU Windows \u5bbf\u4e3b\u673a",description:"Tips",source:"@site/notes/os/virt/qemu-windows-host.md",sourceDirName:"os/virt",slug:"/os/virt/qemu-windows-host",permalink:"/notes/os/virt/qemu-windows-host",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/qemu-windows-host.md",tags:[],version:"current",frontMatter:{id:"qemu-windows-host",title:"QEMU Windows \u5bbf\u4e3b\u673a"},sidebar:"docs",previous:{title:"QEMU Version",permalink:"/notes/os/virt/qemu-version"},next:{title:"QEMU",permalink:"/notes/os/virt/qemu"}},s={},m=[{value:"Tips",id:"tips",level:2},{value:"Could not load library WinHvPlatform.dll",id:"could-not-load-library-winhvplatformdll",level:2},{value:"HAXM vs HyperV",id:"haxm-vs-hyperv",level:2}],d={toc:m};function c(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"qemu-windows-host"},"QEMU Windows HOST"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://qemu.weilnetz.de/w64/"},"W64"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"QEMU Binaries for Windows and QEMU Documentation"))),(0,l.kt)("li",{parentName:"ul"},"accel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"hax",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea 2.9 \u652f\u6301\u4f7f\u7528 HAXM, \u7c7b\u4f3c\u4e8e Linux \u7684 KVM"))),(0,l.kt)("li",{parentName:"ul"},"whpx - Windows Hypervisor Platform accelerator"))),(0,l.kt)("li",{parentName:"ul"},"Windows XP \u6700\u540e\u7248\u672c\u4e3a 2.7.0")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"could-not-load-library-winhvplatformdll"},"Could not load library WinHvPlatform.dll"),(0,l.kt)("h2",{id:"haxm-vs-hyperv"},"HAXM vs HyperV"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/xamarin/android/get-started/installation/android-emulator/hardware-acceleration"},"Hardware acceleration for emulator performance (Hyper-V & HAXM)"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,l.kt)("th",{parentName:"tr",align:null},"HAXM"),(0,l.kt)("th",{parentName:"tr",align:null},"WHPX"),(0,l.kt)("th",{parentName:"tr",align:null},"Hypervisor.Framework"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Intel Processor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AMD Processor"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hyper-V"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nested Virtualization"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Limited"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))))}c.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{kt:function(){return d}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(r),c=a,f=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return r?n.createElement(f,i(i({ref:e},m),{},{components:r})):n.createElement(f,i({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);