"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62883],{49613:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,d=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},f),{},{components:n})):r.createElement(d,i({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84696:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"exFAT"},u=void 0,s={unversionedId:"os/linux/fs/exfat",id:"os/linux/fs/exfat",title:"exFAT",description:"- Linux exFAT",source:"@site/notes/os/linux/fs/exfat.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/exfat",permalink:"/notes/os/linux/fs/exfat",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/fs/exfat.md",tags:[],version:"current",frontMatter:{title:"exFAT"},sidebar:"docs",previous:{title:"Btrfs",permalink:"/notes/os/linux/fs/btrfs"},next:{title:"ext4",permalink:"/notes/os/linux/fs/ext4"}},f={},p=[],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux exFAT",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c vfat"),(0,o.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u6743\u9650\u6982\u5ff5\uff0c\u53ef\u4ee5 mount \u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"defaults,noatime,nofail,uid=1000,fmask=0133,dmask=0022")),(0,o.kt)("li",{parentName:"ul"},"Linux 5.4+ in kernel module",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4f7f\u7528 fuse"))))),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4\u5de5\u5177",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"fuse-exfat-utils - \u57fa\u4e8e fuse"),(0,o.kt)("li",{parentName:"ul"},"exfatprogs - \u57fa\u4e8e kernel module",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"{dump,fsck,mkfs,tune}.exfat"),(0,o.kt)("li",{parentName:"ul"},"exfatlabel"))))),(0,o.kt)("li",{parentName:"ul"},"Kernel fs ",(0,o.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/latest/filesystems/vfat.html"},"vfat"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"exFAT \u6700\u9002\u5408 \u95ea\u5b58\u76d8/U \u76d8/TF \u5361"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apk del fuse-exfat fuse-exfat-utils\napk add exfatprogs\n\nmodprobe exfat\ncat /proc/filesystems | grep exfat\n\nmkfs.exfat /dev/sdc1\ntune.exfat -vi /dev/sdc1\nmount /dev/sdc1 /mnt\n")))}m.isMDXComponent=!0}}]);