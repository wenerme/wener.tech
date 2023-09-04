"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92301],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,b=s["".concat(p,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return k}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const s={title:"ipxe"},f=void 0,b={unversionedId:"os/linux/boot/ipxe",id:"os/linux/boot/ipxe",title:"ipxe",description:"iPXE",source:"@site/../notes/os/linux/boot/ipxe.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/ipxe",permalink:"/notes/os/linux/boot/ipxe",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/boot/ipxe.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693804740,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{title:"ipxe"},sidebar:"docs",previous:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"},next:{title:"Netboot",permalink:"/notes/os/linux/boot/netboot"}},d={},k=[{value:"iPXE",id:"ipxe",level:2},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:3},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",level:3},{value:"demo",id:"demo",level:2},{value:"qemu",id:"qemu",level:2}],h={toc:k};function g(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),c),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"ipxe"}),"iPXE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://ipxe.org"}),"ipxe.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/ipxe/ipxe"}),"ipxe/ipxe")),(0,r.kt)("li",{parentName:"ul"},"Wikipedia ",(0,r.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/IPXE"}),"IPXE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://ipxe.org/cmd"}),"\u547d\u4ee4\u884c")),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u76ee\u5f55 ",(0,r.kt)("a",m({parentName:"li"},{href:"http://boot.ipxe.org/"}),"boot.ipxe.org")),(0,r.kt)("li",{parentName:"ul"},"\u5728 PXE \u4e0a\u65b0\u589e\u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"boot from a web server via HTTP"),(0,r.kt)("li",{parentName:"ul"},"boot from an iSCSI SAN"),(0,r.kt)("li",{parentName:"ul"},"boot from a Fibre Channel SAN via FCoE"),(0,r.kt)("li",{parentName:"ul"},"boot from an AoE SAN"),(0,r.kt)("li",{parentName:"ul"},"boot from a wireless network"),(0,r.kt)("li",{parentName:"ul"},"boot from a wide-area network"),(0,r.kt)("li",{parentName:"ul"},"boot from an Infiniband network"),(0,r.kt)("li",{parentName:"ul"},"control the boot process with a script"))),(0,r.kt)("li",{parentName:"ul"},"QMUE \u96c6\u6210\u4e86 iPXE"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u7f51\u5361\u96c6\u6210\u4e86 iPXE"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://help.packet.net/technical/infrastructure/custom-ipxe"}),"Custom iPXE")))),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"QEMU \u4e0d\u652f\u6301 https"),(0,r.kt)("li",{parentName:"ul"},"QMEU \u7248\u672c\u4e3a 1.0.0 \u5f88\u591a\u547d\u4ee4\u6ca1\u6709")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528 Esc+2 \u5207\u6362\u5230 monitor, Esc+1 \u5207\u6362\u5230\u63a7\u5236\u53f0\nqemu-system-x86_64 -net nic -net user -curses\n\n# \u6216\u8005\u4f7f\u7528\u5b98\u65b9\u7684\u5185\u6838\ncurl http://boot.ipxe.org/ipxe.lkrn -O\nqemu-system-x86_64 -net nic -net user\n")),(0,r.kt)("h3",m({},{id:"\u81ea\u5b9a\u4e49"}),"\u81ea\u5b9a\u4e49"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# http://ipxe.org/download\n# http://ipxe.org/howto/chainloading\n# \u4f8b\u5982\nmake bin/undionly.kpxe EMBED=demo.ipxe\n")),(0,r.kt)("h3",m({},{id:"\u547d\u4ee4\u884c"}),"\u547d\u4ee4\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u6240\u6709\u914d\u7f6e http://ipxe.org/cfg\n# \u67e5\u770b\u5f53\u524d\u7248\u672c\u53f7\nshow version\n# \u663e\u793a\u6784\u5efa\u7684\u5e73\u53f0\nshow platform\n\n# \u81ea\u52a8\u914d\u7f6e\u7f51\u7edc\ndhcp\n\n# ipxe \u7684\u6f14\u793a\u811a\u672c\nchain http://boot.ipxe.org/demo/boot.php\n")),(0,r.kt)("h2",m({},{id:"demo"}),"demo"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"#!ipxe\n\nkernel vmlinuz-3.16.0-rc4 bootfile=http://boot.ipxe.org/demo/boot.php fastboot initrd=initrd.img\ninitrd initrd.img\nboot\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://boot.ipxe.org/demo/boot.php"}),"http://boot.ipxe.org/demo/boot.php"))),(0,r.kt)("h2",m({},{id:"qemu"}),"qemu"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://gist.github.com/mcastelino/7ab9dba51b0dbb230bd18c448d935312"}),"https://gist.github.com/mcastelino/7ab9dba51b0dbb230bd18c448d935312")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://gist.github.com/pojntfx/1c3eb51afedf4fa9671ffd65860e6839"}),"https://gist.github.com/pojntfx/1c3eb51afedf4fa9671ffd65860e6839"))))}g.isMDXComponent=!0}}]);