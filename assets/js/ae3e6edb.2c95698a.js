"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22917],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||c[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5171:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const d={title:"Trusted Platform Module"},h="Trusted Platform Module",b={unversionedId:"os/linux/hardware/tpm",id:"os/linux/hardware/tpm",title:"Trusted Platform Module",description:"- tpm2-software",source:"@site/../notes/os/linux/hardware/tpm.md",sourceDirName:"os/linux/hardware",slug:"/os/linux/hardware/tpm",permalink:"/notes/os/linux/hardware/tpm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/hardware/tpm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1623656447,formattedLastUpdatedAt:"Jun 14, 2021",frontMatter:{title:"Trusted Platform Module"},sidebar:"docs",previous:{title:"S.M.A.R.T.",permalink:"/notes/os/linux/hardware/smart"},next:{title:"Init Awesome",permalink:"/notes/os/linux/init/awesome"}},w={},y=[{value:"QEMU",id:"qemu",level:2}],v={toc:y},k="wrapper";function g(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,c(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"trusted-platform-module"}),"Trusted Platform Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/tpm2-software"}),"tpm2-software"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tpm2-tool"),(0,n.kt)("li",{parentName:"ul"},"tpm2-tss - tss->TPM2 Software Stack"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/stefanberger/swtpm"}),"stefanberger/swtpm"),"\nTPM emulator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"swtpm - software tpm"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://wiki.archlinux.org/title/Trusted_Platform_Module"}),"Trusted Platform Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/latchset/clevis"}),"latchset/clevis"),"\nAutomated Encryption Framework"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://qemu-project.gitlab.io/qemu/specs/tpm.html"}),"QEMU TPM Device"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# \u5185\u6838\u652f\u6301\ncat /boot/config-lts | grep CONFIG_TCG_TPM\n\n# \u68c0\u6d4b\u662f\u5426\u6709 tpm \u8bbe\u5907\ndmesg | grep -i tpm\nls /sys/kernel/security/tpm*\n# linux 5.6+\ncat /sys/class/tpm/tpm*/tpm_version_major\n\n[ -c /dev/tpmrm0 ] && echo "TPM 2.0" # since v4.12-rc1\n[ -c /dev/tpm0 ] && echo "TPM 1.2 or 2.0"\n\nmodprobe tpm\n# modprobe -a tpm_{atmel,infineon,nsc,tis,crb}\n')),(0,n.kt)("h2",s({},{id:"qemu"}),"QEMU"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://tpm2-software.github.io/2020/10/19/TPM2-Device-Emulation-With-QEMU.html"}),"Tpm2 Device Emulation With Qemu"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"mkdir /tmp/emulated_tpm\nswtpm socket --tpmstate dir=/tmp/emulated_tpm --ctrl type=unixio,path=/tmp/emulated_tpm/swtpm-sock --log level=20 --tpm2\n\nqemu-system-x86_64 -hda ~/qemu-images/ubuntu-20.04-amd64.img -boot d -m 2048 -enable-kvm \\\n  -chardev socket,id=chrtpm,path=/tmp/emulated_tpm/swtpm-sock \\\n  -tpmdev emulator,id=tpm0,chardev=chrtpm -device tpm-tis,tpmdev=tpm0\n")))}g.isMDXComponent=!0}}]);