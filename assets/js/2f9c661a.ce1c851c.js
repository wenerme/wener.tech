"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9984],{49613:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,d=c["".concat(i,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(d,l(l({ref:t},f),{},{components:n})):r.createElement(d,l({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return w}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&f(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&f(e,n,t[n]);return e},p=(e,t)=>a(e,l(t)),m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const d={title:"NTFS"},y="NTFS",b={unversionedId:"os/linux/fs/ntfs",id:"os/linux/fs/ntfs",title:"NTFS",description:"- Linux 5.15+ RW",source:"@site/../notes/os/linux/fs/ntfs.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/ntfs",permalink:"/notes/os/linux/fs/ntfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/ntfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"NTFS"},sidebar:"docs",previous:{title:"NFS",permalink:"/notes/os/linux/fs/nfs"},next:{title:"RAID",permalink:"/notes/os/linux/fs/raid"}},g={},w=[{value:"ntfs-3g",id:"ntfs-3g",level:2}],O={toc:w},v="wrapper";function k(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(v,p(c(c({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"ntfs"}),"NTFS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux 5.15+ RW"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.kernel.org/doc/html/latest/filesystems/ntfs.html"}),"NTFS filesystem driver")),(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981 NTFS ?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u662f PC \u4f7f\u7528 -> \u5efa\u8bae NTFS"),(0,r.kt)("li",{parentName:"ul"},"\u5426\u5219 exFAT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u751a\u81f3\u53ef\u80fd\u6bd4 NTFS \u66f4\u597d, \u5e76\u4e14\u6240\u6709\u5e73\u53f0\u90fd\u652f\u6301")))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"modprobe ntfs\ncat /proc/filesystems | grep ntfs\n")),(0,r.kt)("h2",c({},{id:"ntfs-3g"}),"ntfs-3g"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ntfs-3g \u5728 OSX \u6216 Linux \u4e0a\u90fd\u6709")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# Manual http://www.tuxera.com/community/open-source-ntfs-3g/#tab-1414502373-2-22\n# http://www.tuxera.com/community/ntfs-3g-manual/\napk add ntfs-3g ntfs-3g-progs\n\n# \u6302\u8f7d\nmount -t ntfs-3g /dev/sda1 /mnt/windows\n# \u6216\u8005\nntfs-3g /dev/disk2 mnt/file\n\n# fstab \u65b9\u5f0f\necho '/dev/sda1 /mnt/windows ntfs-3g defaults 0 0' > /etc/fstab\nmount -a\n")))}k.isMDXComponent=!0}}]);