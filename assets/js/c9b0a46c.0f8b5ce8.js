"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40609],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||n;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},13853:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return v}});var r=a(49613),l=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&m(e,a,t[a]);return e},d=(e,t)=>n(e,i(t)),c=(e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const k={title:"ZFS \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},f="ZFS \u5e38\u89c1\u95ee\u9898",N={unversionedId:"os/linux/fs/zfs/zfs-faq",id:"os/linux/fs/zfs/zfs-faq",title:"ZFS \u5e38\u89c1\u95ee\u9898",description:"- renameat2/overlayfs ZFS v2.2+",source:"@site/../notes/os/linux/fs/zfs/zfs-faq.md",sourceDirName:"os/linux/fs/zfs",slug:"/os/linux/fs/zfs/faq",permalink:"/notes/os/linux/fs/zfs/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/zfs/zfs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701146597,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"ZFS \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"dRAID",permalink:"/notes/os/linux/fs/zfs/draid"},next:{title:"Inside",permalink:"/notes/os/linux/fs/zfs/inside"}},g={},v=[{value:"\u5982\u4f55\u9009\u62e9 RAIDZ/mirror/dRAID",id:"\u5982\u4f55\u9009\u62e9-raidzmirrordraid",level:2},{value:"\u4fee\u590d",id:"\u4fee\u590d",level:2},{value:"raidz1 to raidz2",id:"raidz1-to-raidz2",level:2},{value:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f",id:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f",level:2},{value:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162",id:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162",level:2},{value:"cannot create &#39;/data/db&#39;: pool must be upgraded to set this property or value",id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value",level:2},{value:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",level:2},{value:"zfs compression vs application compression",id:"zfs-compression-vs-application-compression",level:2},{value:"ZFS \u7f13\u5b58",id:"zfs-\u7f13\u5b58",level:2},{value:"ZFS \u6027\u80fd\u4f30\u7b97",id:"zfs-\u6027\u80fd\u4f30\u7b97",level:2},{value:"zfs import",id:"zfs-import",level:2},{value:"\u5173\u95ed\u6240\u6709 atime",id:"\u5173\u95ed\u6240\u6709-atime",level:2},{value:"zvol vs zfs",id:"zvol-vs-zfs",level:2},{value:"High System Usage",id:"high-system-usage",level:2},{value:"zfs list slow",id:"zfs-list-slow",level:2},{value:"ZFS vs Hard RAID",id:"zfs-vs-hard-raid",level:2},{value:"z0 is write-protected but explicit read-write mode requested",id:"z0-is-write-protected-but-explicit-read-write-mode-requested",level:2},{value:"Superblock needs_recovery flag is clear, but journal has data.",id:"superblock-needs_recovery-flag-is-clear-but-journal-has-data",level:2},{value:"is in use and contains a unknown filesystem",id:"is-in-use-and-contains-a-unknown-filesystem",level:2},{value:"zvol \u6269\u5bb9",id:"zvol-\u6269\u5bb9",level:2},{value:"cannot label &#39;sdf&#39;: failed to detect device partitions on &#39;/dev/sdf1&#39;: 19",id:"cannot-label-sdf-failed-to-detect-device-partitions-on-devsdf1-19",level:2},{value:"Missing /dev/zvol",id:"missing-devzvol",level:2},{value:"cannot trim: no devices in pool support trim operations",id:"cannot-trim-no-devices-in-pool-support-trim-operations",level:2},{value:"retry UNAVAL",id:"retry-unaval",level:2},{value:"remount zvol rw",id:"remount-zvol-rw",level:2}],z={toc:v},b="wrapper";function h(e){var t=e,{components:a}=t,l=c(t,["components"]);return(0,r.kt)(b,d(u(u({},z),l),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"zfs-\u5e38\u89c1\u95ee\u9898"}),"ZFS \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("admonition",u({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"renameat2/overlayfs ZFS v2.2+",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/openzfs/zfs/commit/dbf6108b4df92341eea40d0b41792ac16eabc514"}),"zfs_rename: support RENAME","_"," flags")))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"abbr."),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"stand for"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"cn"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SPA"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Storage Pool Allocator"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"vdev"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Virtual Device"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u865a\u62df\u8bbe\u5907")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ZIL"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ZFS Intent Log"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"TXG"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Transaction Group"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"SLOG"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Sync Log"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ARC"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Adaptive Replacement Cache"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u81ea\u9002\u5e94\u66ff\u6362\u7f13\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"L2ARC"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Level 2 ARC"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u4e8c\u7ea7 ARC")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zfs get all | grep -E 'used\\b|logicalused|compression|\\bcompress'\n\nzfs get all | grep -E 'sync'\n")),(0,r.kt)("h2",u({},{id:"\u5982\u4f55\u9009\u62e9-raidzmirrordraid"}),"\u5982\u4f55\u9009\u62e9 RAIDZ/mirror/dRAID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAIDZ - striped vdevs - RAID5/6/7",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"66%",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3wide RADIZ1"),(0,r.kt)("li",{parentName:"ul"},"6wide RADIZ2"),(0,r.kt)("li",{parentName:"ul"},"9wide RADIZ3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"N*W RAIDZx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"N group"),(0,r.kt)("li",{parentName:"ul"},"W wide"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd/\u4e0d\u65b9\u4fbf \u6269\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u56fa\u5b9a parity"))),(0,r.kt)("li",{parentName:"ul"},"mirror - RAID10",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"50%"),(0,r.kt)("li",{parentName:"ul"},"degraded \u6027\u80fd\u66f4\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u6062\u590d\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5bb9\u65b9\u4fbf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/notes/os/linux/fs/zfs/draid"}),"dRAID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66f4\u7075\u6d3b")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u8003")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2015 ",(0,r.kt)("a",u({parentName:"li"},{href:"https://jrs-s.net/2015/02/06/zfs-you-should-use-mirror-vdevs-not-raidz/"}),"ZFS: You should use mirror vdevs, not RAIDZ."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"by Author of ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/jimsalterjrs/sanoid"}),"jimsalterjrs/sanoid"))))),(0,r.kt)("h2",u({},{id:"\u4fee\u590d"}),"\u4fee\u590d"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# -t temporary \u91cd\u542f\u540e\u6062\u590d\nzpool offline main scsi-0000\nzpool replace main scsi-0000 scsi-1111\n\n# -e \u5982\u679c\u65b0\u7684\u786c\u76d8\u66f4\u5927\nzpool online main scsi-1111\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"resilver")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"group \u91cc\u5168\u90e8\u626b"),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u5f88\u6162")),(0,r.kt)("h2",u({},{id:"raidz1-to-raidz2"}),"raidz1 to raidz2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u4ee5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://serverfault.com/a/799952/190601"}),"https://serverfault.com/a/799952/190601"))),(0,r.kt)("h2",u({},{id:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f"}),"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u538b\u7f29\u540e\u7684\u5927\u5c0f\ndu -h .\n# \u67e5\u770b\u5b9e\u9645\u5927\u5c0f\ndu --apparent-size -h .\n")),(0,r.kt)("h2",u({},{id:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162"}),"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162"),(0,r.kt)("p",null,"\u5c1d\u8bd5\u5173\u95ed atime"),(0,r.kt)("h2",u({},{id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value"}),"cannot create '/data/db': pool must be upgraded to set this property or value"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"sudo zpool upgrade -a\n")),(0,r.kt)("h2",u({},{id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4"}),"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"compressratio - \u538b\u7f29\u7387",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1/compressratio = \u538b\u7f29\u6bd4"),(0,r.kt)("li",{parentName:"ul"},"compressratio=logicalused/used"))),(0,r.kt)("li",{parentName:"ul"},"used - \u5b9e\u9645\u5360\u7528\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"logicalused - \u903b\u8f91\u5360\u7528\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u4e5f\u548c\u4ec0\u4e48\u65f6\u5019\u5f00\u542f\u7684 compression \u6709\u5173",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f compression \u4e4b\u540e\u65b0\u5199\u5165\u6570\u636e\u4f1a\u538b\u7f29"))),(0,r.kt)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u4f1a\u5bf9\u9f50\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u6bd4\u903b\u8f91\u66f4\u591a")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zfs get all | grep -E 'used\\b|logicalused|compression|\\bcompress'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"data                 used                  884G                  -\ndata                 compressratio         1.47x                 -\ndata                 compression           lz4                   local\ndata                 logicalused           1.24T                 -\n")),(0,r.kt)("h2",u({},{id:"zfs-compression-vs-application-compression"}),"zfs compression vs application compression"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zfs \u538b\u7f29",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u91cf\u538b\u7f29\uff0c\u7b80\u5355\u6613\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29\u7387\u53d7 block \u5927\u5c0f\u5f71\u54cd"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 lz4\u3001zstd"))),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528 \u538b\u7f29",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6d89\u53ca\u5230\u5e94\u7528\u529f\u80fd\u662f\u5426\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29\u7684\u8303\u56f4\u548c ZFS \u538b\u7f29\u7684\u8303\u56f4\u4e0d\u540c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u5e94\u7528\u53ea\u538b\u7f29 \u6570\u636e"))),(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29\u7387 \u4e0d\u4e00\u5b9a\u5c31\u6bd4 ZFS \u538b\u7f29\u7387 \u9ad8")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zfs vs pg",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PostgreSQL 14 \u652f\u6301 LZ4 TOAST",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"default_toast_compression=lz4"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"col1 text COMPRESSION lz4")))),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL 15 \u652f\u6301 LZ4 WAL")))),(0,r.kt)("h2",u({},{id:"zfs-\u7f13\u5b58"}),"ZFS \u7f13\u5b58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ZIL - ZFS Intent Log - \u7f13\u51b2 WRITE \u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"SLOG - Separate Intent Log",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zpool add tank log")),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u7279\u522b\u5927\u7684\u8bbe\u5907 - \u4f8b\u5982 16G, 64G SSD \u8db3\u77e3"))),(0,r.kt)("li",{parentName:"ul"},"ARC - \u7f13\u5b58 READ \u64cd\u4f5c - Adaptive Replacement Cache",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58"))),(0,r.kt)("li",{parentName:"ul"},"L2ARC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zpool add tank cache")),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u7279\u522b\u5927\u7684\u8bbe\u5907 - \u4f8b\u5982 128G SSD"),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u91cd\u542f\u540e\u7f13\u5b58\u4f9d\u7136\u53ef\u7528")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zpool add tank log ada3             # \u6dfb\u52a0 ZIL - \u5355\u78c1\u76d8\nzpool add tank log mirror ada3 ada4 # \u6dfb\u52a0 ZIL - RAID1 - \u574f\u4e00\u4e2a SSD \u5199\u5165\u7684\u6570\u636e\u4e5f\u4e0d\u4f1a\u4e22\nzpool add tank cache ada3           # \u6dfb\u52a0 L2ARC\n")),(0,r.kt)("h2",u({},{id:"zfs-\u6027\u80fd\u4f30\u7b97"}),"ZFS \u6027\u80fd\u4f30\u7b97"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8c03\u4f18\u5e94\u5148\u627e\u5230\u74f6\u9888\u5728\u54ea\u91cc\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAIDZn \u987a\u5e8f 4KB \u8bfb\u53d6 - \u65e0 cache \u573a\u666f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RAIDZ1 - ",(0,r.kt)("inlineCode",{parentName:"li"},"N/(N-1) * IOPS")),(0,r.kt)("li",{parentName:"ul"},"RAIDZ2 - ",(0,r.kt)("inlineCode",{parentName:"li"},"N/(N-2) * IOPS")),(0,r.kt)("li",{parentName:"ul"},"RAIDZ3 - ",(0,r.kt)("inlineCode",{parentName:"li"},"N/(N-3) * IOPS")),(0,r.kt)("li",{parentName:"ul"},"\u6709 cache \u65f6\uff0c\u5219\u4e0a\u9650\u4e3a cache \u78c1\u76d8\u7684 IOPS"))),(0,r.kt)("li",{parentName:"ul"},"\u5199\u5165\u6027\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u76f4\u63a5\u4f30\u7b97\uff0czfs \u5185\u90e8 zil \u4e3a\u5f02\u6b65\u5199\u5165"),(0,r.kt)("li",{parentName:"ul"},"\u989d\u5916\u7684 ZIL \u8bbe\u5907\u53ef\u63d0\u5347 write \u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u5728\u6bcf\u4e2a\u78c1\u76d8\u9884\u7559\u7a7a\u95f4\u5b58\u50a8 ZIL"))),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u5f71\u54cd\u56e0\u7d20",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"recordsize - \u9ed8\u8ba4 128k"),(0,r.kt)("li",{parentName:"ul"},"compression"),(0,r.kt)("li",{parentName:"ul"},"ashift"),(0,r.kt)("li",{parentName:"ul"},"dedup - \u9ed8\u8ba4\u5173\u95ed - \u7279\u6b8a\u573a\u666f\u53bb\u91cd\u80fd\u63d0\u5347\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"atime - \u9ed8\u8ba4\u5f00\u542f - \u4e00\u822c\u4e0d\u9700\u8981\uff0c\u53ef\u5173\u95ed\u63d0\u5347\u8bfb\u53d6\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"logbias - \u9ed8\u8ba4 latency, \u53ef\u8bbe\u7f6e\u4e3a throughput, \u51cf\u5c11\u4f7f\u7528\u989d\u5916 zil \u8bbe\u5907"),(0,r.kt)("li",{parentName:"ul"},"sync",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u6700\u591a\u4e22\u5931 30s \u6570\u636e - \u5982\u679c\u573a\u666f\u5141\u8bb8\u4e22\u5931\uff0c\u5219\u4e0d\u5f71\u54cd"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 UPS \u786e\u4fdd\u5b58\u50a8 \u6bd4 \u7f51\u7edc\u540e\u5f02\u5e38 \u53ef\u8003\u8651\u5173\u95ed sync"))),(0,r.kt)("li",{parentName:"ul"},"primarycache"),(0,r.kt)("li",{parentName:"ul"},"secondarycache")))),(0,r.kt)("h2",u({},{id:"zfs-import"}),"zfs import"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u7cfb\u7edf\u542f\u52a8\u4f1a\u4ece\u7f13\u5b58 \u5bfc\u5165 - zfs import -c /etc/zfs/zpool.cache"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u7f13\u5b58\u4e22\u5931\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u641c\u7d22\u78c1\u76d8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u66f4\u6362\u4e86\u7cfb\u7edf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://openzfs.github.io/openzfs-docs/man/8/zpool-import.8.html"}),"zpool-import.8"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b \u53ef\u5bfc\u5165 \u7684 pool\n# \u4f7f\u7528 lsblk \u641c\u7d22\nzpool import\n# \u6267\u884c\u5bfc\u5165 - \u5bfc\u5165\u6240\u7684\nzpool import -a\n\n# \u624b\u52a8\u6307\u5b9a\u641c\u7d22\u76ee\u5f55\nzpool import -d /dev/disk/by-id\n")),(0,r.kt)("h2",u({},{id:"\u5173\u95ed\u6240\u6709-atime"}),"\u5173\u95ed\u6240\u6709 atime"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zfs get atime | grep '\\son\\s' | cut -d ' ' -f 1 | xargs -n1 sudo zfs set atime=off\n")),(0,r.kt)("h1",u({},{id:"atimeon-temporary"}),"atime=on temporary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/12382"}),"https://gitlab.alpinelinux.org/alpine/aports/-/issues/12382")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/openzfs/zfs/issues/7947"}),"https://github.com/openzfs/zfs/issues/7947"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh",metastring:"title=/etc/conf.d/zfs",title:"/etc/conf.d/zfs"}),'MOUNT_EXTRA_OPTIONS="-o atime=off"\n')),(0,r.kt)("h2",u({},{id:"zvol-vs-zfs"}),"zvol vs zfs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zvol - \u5757\u8bbe\u5907",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"raidz\u3001\u538b\u7f29"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u6240\u6709 zfs \u4f34\u968f\u7684\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"blocksize=8k"))),(0,r.kt)("li",{parentName:"ul"},"zfs - \u6587\u4ef6\u7cfb\u7edf - dataset",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5feb\u7167\u3001\u514b\u9686"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7edf\u6709\u4e00\u5b9a\u7279\u6027 - \u4e5f\u6709\u7f3a\u9677",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"\u4e3b\u8981\u7f3a\u9677: \u4e0d\u652f\u6301 rename2/overlay")," - ZFS v2.2+"))),(0,r.kt)("li",{parentName:"ul"},"recordsize=128k")))),(0,r.kt)("h2",u({},{id:"high-system-usage"}),"High System Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"z_wr_iss"),(0,r.kt)("li",{parentName:"ul"},"spl_dynamic_tas"),(0,r.kt)("li",{parentName:"ul"},"z_wr_iss_h"),(0,r.kt)("li",{parentName:"ul"},"l2arc_feed"),(0,r.kt)("li",{parentName:"ul"},"z_wr_int_h"),(0,r.kt)("li",{parentName:"ul"},"rcu_sched"),(0,r.kt)("li",{parentName:"ul"},"txg_sync"),(0,r.kt)("li",{parentName:"ul"},"z_ioctl_int"),(0,r.kt)("li",{parentName:"ul"},"kworker/0:1-events"),(0,r.kt)("li",{parentName:"ul"},"z_null_iss"),(0,r.kt)("li",{parentName:"ul"},"z_null_int"),(0,r.kt)("li",{parentName:"ul"},"dp_sync_taskq"),(0,r.kt)("li",{parentName:"ul"},"z_wr_int"),(0,r.kt)("li",{parentName:"ul"},"arc_reap"),(0,r.kt)("li",{parentName:"ul"},"ksoftirqd"),(0,r.kt)("li",{parentName:"ul"},"dbuf_evict"),(0,r.kt)("li",{parentName:"ul"},"mmp"),(0,r.kt)("li",{parentName:"ul"},"migration/0")),(0,r.kt)("h2",u({},{id:"zfs-list-slow"}),"zfs list slow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dataset \u591a\u4e86\u540e ",(0,r.kt)("inlineCode",{parentName:"li"},"zfs list")," \u975e\u5e38\u6162")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"time zfs list | wc -l\n\n# docker zfs volume \u4f7f\u7528\u7684\u547d\u4ee4\nzfs list -s name -o name,guid,available -H -p\nzfs list -r -t all -Hp -o name,origin,used,available,mountpoint,compression,type,volsize,quota,referenced,written,logicalused,usedbydataset main/docker\n\n# containerd\nzfs list -Hp -o name,origin,used,available,mountpoint,compression,type,volsize,quota,referenced,written,logicalused,usedbydataset data/var/k3s/snapshotter/60519\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"758\n\nreal    0m1.777s\nuser    0m0.177s\nsys     0m1.599s\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/openzfs/zfs/discussions/8898"}),"https://github.com/openzfs/zfs/discussions/8898"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"time zfs list -s name -o name,guid,available -H -p > zfs-list.txt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"real    2m10.183s\nuser    0m3.016s\nsys     2m6.836s\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"wc -l zfs-list.txt\n# 20177 zfs-list.txt\n")),(0,r.kt)("h2",u({},{id:"zfs-vs-hard-raid"}),"ZFS vs Hard RAID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ZFS \u6709\u6821\u9a8c\u548c,\u548c\u53ef\u907f\u514d\u4f4d\u7ffb\u8f6c\u7b49\u95ee\u9898,\u800c RAID \u4e3b\u8981\u7528\u4e8e\u907f\u514d\u6574\u4e2a\u78c1\u76d8\u7684\u635f\u574f"),(0,r.kt)("li",{parentName:"ul"},"ZFS \u53ea\u9700\u8981 HBAs (host bus adapter ) \u800c\u4e0d\u9700\u8981 RAID \u63a7\u5236\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u591a\u53ea\u9700\u8981 Z2, Z3 \u5f88\u5c11\u4f7f\u7528,\u5e76\u4e14\u53ef\u80fd\u4f1a\u6709\u95ee\u9898,\u6709\u5176\u4ed6\u7684\u529e\u6cd5\u6765\u907f\u514d\u53ef\u80fd\u7684\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"ZFS \u5e76\u4e0d\u662f RAID, \u800c\u662f\u4e00\u4e2a\u8f6f\u4ef6,\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"ZFS \u91cd\u5efa\u6bd4 RAID \u66f4\u5feb,\u4f8b\u5982 1TB \u7684\u4e91\u76d8,\u5b9e\u9645\u6570\u636e\u53ea\u6709 100MB, \u90a3\u4e48 ZFS \u53ea\u9700\u8981 100MB \u7684 IO, \u800c RAID \u9700\u8981 1TB \u7684 IO."),(0,r.kt)("li",{parentName:"ul"},"scrub \u662f\u7528\u6765\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u7684,\u800c\u4e0d\u662f\u4fdd\u8bc1\u78c1\u76d8\u5065\u5eb7\u7684.\u4e0d\u662f\u81ea\u52a8\u7684,\u9700\u8981\u5b9a\u65f6\u8c03\u5ea6."),(0,r.kt)("li",{parentName:"ul"},"\u989d\u5916\u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5212\u5206\u5b58\u50a8\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u6839\u636e\u5e94\u7528\u8c03\u4f18"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u91cf\u540c\u6b65")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"PFA"s, as in Pre-Failure Alerts'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.reddit.com/r/storage/comments/3jcg2r/zfs_vs_raid6/"}),"ZFS vs RAID6"))),(0,r.kt)("h2",u({},{id:"z0-is-write-protected-but-explicit-read-write-mode-requested"}),"z0 is write-protected but explicit read-write mode requested"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"umount /dev/z0\ne2fsck /dev/z0\nmount /dev/z0\n")),(0,r.kt)("h2",u({},{id:"superblock-needs_recovery-flag-is-clear-but-journal-has-data"}),"Superblock needs_recovery flag is clear, but journal has data."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"Buffer I/O error on dev zd0, logical block 0, lost async page write\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u78c1\u76d8\u6ee1\u4e86")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zfs list -o space,mountpoint\n")),(0,r.kt)("h2",u({},{id:"is-in-use-and-contains-a-unknown-filesystem"}),"is in use and contains a unknown filesystem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mdraid, lvm, multipath")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"cat /proc/mdstat\n\nmdadm --stop /dev/md127\n")),(0,r.kt)("h2",u({},{id:"zvol-\u6269\u5bb9"}),"zvol \u6269\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zfs get volsize data/vol      # \u5f53\u524d\nzfs set volsize=500G data/vol # \u4fee\u6539 Quota\nresize2fs /dev/zvol/data/vol  # \u6269\u5bb9 fs\n")),(0,r.kt)("h2",u({},{id:"cannot-label-sdf-failed-to-detect-device-partitions-on-devsdf1-19"}),"cannot label 'sdf': failed to detect device partitions on '/dev/sdf1': 19"),(0,r.kt)("h2",u({},{id:"missing-devzvol"}),"Missing /dev/zvol"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk add zfs zfs-{scripts,udev}\n\nudevadm trigger\n")),(0,r.kt)("h2",u({},{id:"cannot-trim-no-devices-in-pool-support-trim-operations"}),"cannot trim: no devices in pool support trim operations"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zpool trim data\n\nhdparm -I /dev/sda | grep -i trim # \u68c0\u67e5 TRIM \u652f\u6301\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SATA \u63a7\u5236\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/openzfs/zfs/discussions/14231"}),"https://github.com/openzfs/zfs/discussions/14231"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"L2ARC device is in use as a cache"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/openzfs/zfs/issues/13108"}),"https://github.com/openzfs/zfs/issues/13108"))),(0,r.kt)("h2",u({},{id:"retry-unaval"}),"retry UNAVAL"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"zpool online data DISK\nzpool clear data\nzpool scrube data # \u63a8\u8350\n")),(0,r.kt)("h2",u({},{id:"remount-zvol-rw"}),"remount zvol rw"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"mount -o remount,rw /data/docker\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cache \u5f02\u5e38\u540e\u5bfc\u81f4 zvol \u88ab\u91cd\u65b0\u6302\u8f7d\u4e3a ro"),(0,r.kt)("li",{parentName:"ul"},"clear cache \u7684 error \u540e\u8fd8\u662f\u65e0\u6cd5\u6302\u8f7d\uff0c\u56e0\u4e3a fs \u635f\u574f")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ansi"}),"\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5767264 starting block 14909936)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 14909936\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5898267 starting block 11927556)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 11927556\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5898258 starting block 20496389)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 20496389\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5898266 starting block 2630818)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 2630818\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2919521 starting block 16194810)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194810\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194811\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194812\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194813\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2920494 starting block 14332529)\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493815)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 24493815\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493816)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 14332529\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 0, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 2, lost async page write\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_check_bdev_write_error:217: comm kworker/u8:0: Error while async write back metadata\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mprevious I/O error to superblock detected\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 5, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 6, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 8, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1048588, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1048589, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1466067, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1505175, lost async page write\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493838)\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_check_bdev_write_error:217: comm VM Periodic Tas: Error while async write back metadata\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493839)\x1b[0m\n\x1b[0;31mAborting journal on device zd0-8.\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0) in ext4_convert_unwritten_io_end_vec:4859: \x1b[0;31;1mIO failure\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0mfailed to convert unwritten extents to written extents -- potential data loss!  (inode 2883634, error -5)\n\x1b[0;33mJBD2: \x1b[0;31mI/O error when updating journal superblock for zd0-8.\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_journal_check_start:83: comm k3s-server: Detected aborted journal\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mprevious I/O error to superblock detected\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_journal_check_start:83: comm http-nio-8080-P: Detected aborted journal\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mI/O error while writing superblock\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31;1mRemounting filesystem read-only\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mI/O error while writing superblock\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\u670d\u52a1\u81ea\u52a8\u542f\u52a8"),(0,r.kt)("li",{parentName:"ul"},"reboot"),(0,r.kt)("li",{parentName:"ul"},"fsck")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"umount /dev/zd0\nfsck -y /dev/zd0\nmount -a\n\n# ensure mount point working as expected\ntouch /data/docker/test\n\n# start service\n")))}h.isMDXComponent=!0}}]);