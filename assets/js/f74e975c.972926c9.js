"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20576],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return m},metadata:function(){return w},toc:function(){return v}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"Linux Hardware FAQ"},h=void 0,w={unversionedId:"os/linux/hardware/linux-hardware-faq",id:"os/linux/hardware/linux-hardware-faq",title:"Linux Hardware FAQ",description:"Intel Corporation Ethernet Connection (2) I219-V notworking",source:"@site/../notes/os/linux/hardware/linux-hardware-faq.md",sourceDirName:"os/linux/hardware",slug:"/os/linux/hardware/faq",permalink:"/notes/os/linux/hardware/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/hardware/linux-hardware-faq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1615902468,formattedLastUpdatedAt:"Mar 16, 2021",frontMatter:{title:"Linux Hardware FAQ"},sidebar:"docs",previous:{title:"dmidecode",permalink:"/notes/os/linux/hardware/dmidecode"},next:{title:"NVME",permalink:"/notes/os/linux/hardware/nvme"}},b={},v=[{value:"Intel Corporation Ethernet Connection (2) I219-V notworking",id:"intel-corporation-ethernet-connection-2-i219-v-notworking",level:2},{value:"e1000e - The NVM Checksum Is Not Valid",id:"e1000e---the-nvm-checksum-is-not-valid",level:2}],y={toc:v},g="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(g,d(p(p({},y),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",p({},{id:"intel-corporation-ethernet-connection-2-i219-v-notworking"}),"Intel Corporation Ethernet Connection (2) I219-V notworking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"e1000e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://ark.intel.com/content/www/us/en/ark/products/82186/intel-ethernet-connection-i219-v.html"}),"I219-V"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"dmesg | grep e1000e\n# e1000e: Intel(R) PRO/1000 Network Driver - 3.2.6-k\n# e1000e: Copyright(c) 1999 - 2015 Intel Corporation.\n# e1000e 0000:00:1f.6: Interrupt Throttling Rate (ints/sec) set to dynamic conservative mode\n# e1000e 0000:00:1f.6: The NVM Checksum Is Not Valid\n# e1000e: probe of 0000:00:1f.6 failed with error -5\n\nlspci -s 0000:00:1f.6\n# 00:1f.6 Ethernet controller: Intel Corporation Ethernet Connection (2) I219-V\n")),(0,r.kt)("h2",p({},{id:"e1000e---the-nvm-checksum-is-not-valid"}),"e1000e - The NVM Checksum Is Not Valid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://mynixworld.info/2012/12/05/e1000e-the-nvm-checksum-is-not-valid/"}),"https://mynixworld.info/2012/12/05/e1000e-the-nvm-checksum-is-not-valid/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://downloadcenter.intel.com/download/29137"}),"Intel\xae Ethernet Connections Boot Utility, Preboot Images, and EFI Drivers"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# download preboot\ncurl -LO https://downloadmirror.intel.com/29137/eng/Preboot.tar.gz\ntar zxvf Preboot.tar.gz\ncd APPS/BootUtil/Linux_x64\nchmod +x ./bootutil64e\n\n# Alpine compact\napk add gcompat\nmkdir -p /lib64\nln -s /lib/ld-linux-x86-64.so.2 /lib64/ld-linux-x86-64.so.2\n\n# fix\n./bootutil64e -NIC 1 -defcfg\n\n# done\nreboot\n")))}k.isMDXComponent=!0}}]);