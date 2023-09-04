"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48270],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return c}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(r),c=a,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(f,o(o({ref:e},s),{},{components:r})):n.createElement(f,o({ref:e},s))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99812:function(t,e,r){r.r(e),r.d(e,{assets:function(){return k},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&s(t,r,e[r]);if(i)for(var r of i(e))p.call(e,r)&&s(t,r,e[r]);return t};const d={title:"QEMU Windows \u5bbf\u4e3b\u673a"},c="QEMU Windows HOST",f={unversionedId:"os/virt/qemu/qemu-windows-host",id:"os/virt/qemu/qemu-windows-host",title:"QEMU Windows \u5bbf\u4e3b\u673a",description:"Tips",source:"@site/../notes/os/virt/qemu/qemu-windows-host.md",sourceDirName:"os/virt/qemu",slug:"/os/virt/qemu/windows-host",permalink:"/notes/os/virt/qemu/windows-host",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/qemu/qemu-windows-host.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1676530464,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"QEMU Windows \u5bbf\u4e3b\u673a"},sidebar:"docs",previous:{title:"QEMU Version",permalink:"/notes/os/virt/qemu/version"},next:{title:"SeaBIOS",permalink:"/notes/os/virt/seabios"}},k={},y=[{value:"Tips",id:"tips",level:2},{value:"Could not load library WinHvPlatform.dll",id:"could-not-load-library-winhvplatformdll",level:2},{value:"HAXM vs HyperV",id:"haxm-vs-hyperv",level:2}],v={toc:y};function b(t){var e,r=t,{components:a}=r,s=((t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=m(m({},v),s),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"qemu-windows-host"}),"QEMU Windows HOST"),(0,n.kt)("h2",m({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://qemu.weilnetz.de/w64/"}),"W64"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"QEMU Binaries for Windows and QEMU Documentation"))),(0,n.kt)("li",{parentName:"ul"},"accel",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hax",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea 2.9 \u652f\u6301\u4f7f\u7528 HAXM, \u7c7b\u4f3c\u4e8e Linux \u7684 KVM"))),(0,n.kt)("li",{parentName:"ul"},"whpx - Windows Hypervisor Platform accelerator"))),(0,n.kt)("li",{parentName:"ul"},"Windows XP \u6700\u540e\u7248\u672c\u4e3a 2.7.0")),(0,n.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",m({},{id:"could-not-load-library-winhvplatformdll"}),"Could not load library WinHvPlatform.dll"),(0,n.kt)("h2",m({},{id:"haxm-vs-hyperv"}),"HAXM vs HyperV"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.microsoft.com/en-us/xamarin/android/get-started/installation/android-emulator/hardware-acceleration"}),"Hardware acceleration for emulator performance (Hyper-V & HAXM)"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Scenario"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"HAXM"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"WHPX"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Hypervisor.Framework"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Intel Processor"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"AMD Processor"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Hyper-V"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nested Virtualization"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Limited"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Docker"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u2705")))))}b.isMDXComponent=!0}}]);