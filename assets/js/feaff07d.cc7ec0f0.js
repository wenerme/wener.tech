"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96594],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,f=d["".concat(u,".").concat(s)]||d[s]||p[s]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16085:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),o=["components"],l={title:"mtd"},u="mtd",m={unversionedId:"os/linux/dev/mtd",id:"os/linux/dev/mtd",title:"mtd",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/linux/dev/mtd.md",sourceDirName:"os/linux/dev",slug:"/os/linux/dev/mtd",permalink:"/notes/os/linux/dev/mtd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/dev/mtd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"mtd"},sidebar:"docs",previous:{title:"Linux Device",permalink:"/notes/os/linux/dev/"},next:{title:"PCI",permalink:"/notes/os/linux/dev/pci"}},c={},p=[],d={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mtd"},"mtd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"memory technology device - Linux \u8bbf\u95ee \u5185\u5b58\u8bbe\u5907(rom, flash) \u7684\u5b50\u7cfb\u7edf"),(0,i.kt)("li",{parentName:"ul"},"\u5e38\u7528\u4e8e\u5d4c\u5165\u5f0f\u8bbe\u5907 Flash \u5b58\u50a8"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.linux-mtd.infradead.org/"},"mtd-utils")),(0,i.kt)("li",{parentName:"ul"},"flash, jffs, nand, ubi"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/dev/mtdN")," - \u5b57\u7b26\u8bbe\u5907",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ioctl"),(0,i.kt)("li",{parentName:"ul"},"MEMGETINFO, MEMERASE"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/dev/mtdblockN")," - \u4f2a\u88c5\u5757\u8bbe\u5907"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://my.oschina.net/shelllife/blog/123482"},"https://my.oschina.net/shelllife/blog/123482")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/513415"},"https://unix.stackexchange.com/questions/513415"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b mtd \u548c ubi \u5206\u533a\ncat /proc/partitions\n# mtd \u5757\ncat /proc/mtd\n\nnanddump -f /tmp/mtd0.bin /dev/mtd0\n\n/usr/bin/ubiattach /dev/ubi_ctrl -m <MTD_partition> -O <block_size>\n/bin/mount -t ubifs ubi1:rootfs0 /media/mnt\n\n# \u5982\u679c\u6ca1\u6709 fs\nnanddump -f /tmp/mtd0.bin /dev/mtdblock0\n# data flash / NOR\ndd if=/dev/mtdblock1 of=/tmp/mtd1.bin\n\n\nmknod -m 644 /dev/mtd9        c 90 9\nmknod -m 644 /dev/mtdblock9   b 31 9\nmount -t jffs2 /dev/mtdblock9 /mnt\n")))}s.isMDXComponent=!0}}]);