"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80193],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84460:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(96600),o=t(27279),a=(t(59496),t(49613)),i=["components"],l={title:"Linux Hardware FAQ"},c=void 0,u={unversionedId:"os/linux/hardware/linux-hardware-faq",id:"os/linux/hardware/linux-hardware-faq",title:"Linux Hardware FAQ",description:"Intel Corporation Ethernet Connection (2) I219-V notworking",source:"@site/notes/os/linux/hardware/linux-hardware-faq.md",sourceDirName:"os/linux/hardware",slug:"/os/linux/hardware/linux-hardware-faq",permalink:"/notes/os/linux/hardware/linux-hardware-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/hardware/linux-hardware-faq.md",tags:[],version:"current",frontMatter:{title:"Linux Hardware FAQ"},sidebar:"docs",previous:{title:"dmidecode",permalink:"/notes/os/linux/hardware/dmidecode"},next:{title:"NVME",permalink:"/notes/os/linux/hardware/nvme"}},s={},p=[{value:"Intel Corporation Ethernet Connection (2) I219-V notworking",id:"intel-corporation-ethernet-connection-2-i219-v-notworking",level:2},{value:"e1000e - The NVM Checksum Is Not Valid",id:"e1000e---the-nvm-checksum-is-not-valid",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intel-corporation-ethernet-connection-2-i219-v-notworking"},"Intel Corporation Ethernet Connection (2) I219-V notworking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"e1000e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ark.intel.com/content/www/us/en/ark/products/82186/intel-ethernet-connection-i219-v.html"},"I219-V"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dmesg | grep e1000e\n# e1000e: Intel(R) PRO/1000 Network Driver - 3.2.6-k\n# e1000e: Copyright(c) 1999 - 2015 Intel Corporation.\n# e1000e 0000:00:1f.6: Interrupt Throttling Rate (ints/sec) set to dynamic conservative mode\n# e1000e 0000:00:1f.6: The NVM Checksum Is Not Valid\n# e1000e: probe of 0000:00:1f.6 failed with error -5\n\nlspci -s 0000:00:1f.6\n# 00:1f.6 Ethernet controller: Intel Corporation Ethernet Connection (2) I219-V\n")),(0,a.kt)("h2",{id:"e1000e---the-nvm-checksum-is-not-valid"},"e1000e - The NVM Checksum Is Not Valid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mynixworld.info/2012/12/05/e1000e-the-nvm-checksum-is-not-valid/"},"https://mynixworld.info/2012/12/05/e1000e-the-nvm-checksum-is-not-valid/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://downloadcenter.intel.com/download/29137"},"Intel\xae Ethernet Connections Boot Utility, Preboot Images, and EFI Drivers"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# download preboot\ncurl -LO https://downloadmirror.intel.com/29137/eng/Preboot.tar.gz\ntar zxvf Preboot.tar.gz\ncd APPS/BootUtil/Linux_x64\nchmod +x ./bootutil64e\n\n# Alpine compact\napk add gcompat\nmkdir -p /lib64\nln -s /lib/ld-linux-x86-64.so.2 /lib64/ld-linux-x86-64.so.2\n\n# fix\n./bootutil64e -NIC 1 -defcfg\n\n# done\nreboot\n")))}m.isMDXComponent=!0}}]);