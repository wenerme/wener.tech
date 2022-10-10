"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65619],{49613:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return c}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=u(a),c=r,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return a?n.createElement(d,i(i({ref:e},s),{},{components:a})):n.createElement(d,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},16048:function(t,e,a){a.r(e),a.d(e,{assets:function(){return N},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&s(t,a,e[a]);if(o)for(var a of o(e))u.call(e,a)&&s(t,a,e[a]);return t};const k={title:"ZFS \u8c03\u4f18"},c="ZFS Tuning",d={unversionedId:"ops/storage/fs/zfs-tuning",id:"ops/storage/fs/zfs-tuning",title:"ZFS \u8c03\u4f18",description:"- \u63d0\u5347\u5e94\u7528\u6027\u80fd - \u9488\u5bf9\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u4f18",source:"@site/../notes/ops/storage/fs/zfs-tuning.md",sourceDirName:"ops/storage/fs",slug:"/ops/storage/fs/zfs-tuning",permalink:"/notes/ops/storage/fs/zfs-tuning",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/fs/zfs-tuning.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1649946978,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"ZFS \u8c03\u4f18"},sidebar:"docs",previous:{title:"ZFS \u5e38\u89c1\u95ee\u9898",permalink:"/notes/ops/storage/fs/zfs-faq"},next:{title:"OpenZFS Version",permalink:"/notes/ops/storage/fs/zfs-version"}},N={},f=[{value:"ZIL SLOG",id:"zil-slog",level:2},{value:"L2ARC",id:"l2arc",level:2},{value:"\u78c1\u76d8\u4fe1\u606f",id:"\u78c1\u76d8\u4fe1\u606f",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],g={toc:f};function h(t){var e,a=t,{components:r}=a,s=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=m(m({},g),s),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"zfs-tuning"}),"ZFS Tuning"),(0,n.kt)("admonition",m({},{title:"\u76ee\u7684",type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u5347\u5e94\u7528\u6027\u80fd - \u9488\u5bf9\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u4f18"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u5347 \u8bfb"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u5347 \u5199"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u5347 \u7a7a\u95f4\u4f7f\u7528\u7387"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/proc/spl/kstat/zfs/main/iostats"),(0,n.kt)("li",{parentName:"ul"},"/sys/module/zfs/parameters")),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u673a\u68b0\u76d8\u65f6\uff0c\u5efa\u8bae\u914d\u5907\u4e00\u4e2a SSD \u5206\u4e24\u4e2a\u533a\uff0c\u4e00\u4e2a\u505a SLOG \u4e00\u4e2a\u505a L2ARC - \u5e76\u589e\u52a0 zfs_txg_timeout"),(0,n.kt)("li",{parentName:"ul"},"compressratio \u53d7 recordsize \u5f71\u54cd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/openzfs/zfs/discussions/11293"}),"https://github.com/openzfs/zfs/discussions/11293")))),(0,n.kt)("li",{parentName:"ul"},"\u603b\u662f\u5f00\u542f compression"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"zpool prop"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"default"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"recommand"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ashift"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"atime"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"on"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"off")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"recordsize"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"128K"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"logbias"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"latency"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"autotrim"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"off"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"SDD \u63a8\u8350 on")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"zdb | grep ashift  # \u67e5\u770b\u4f7f\u7528\u7684 ashift\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ashift",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2^n - block size/sector size"),(0,n.kt)("li",{parentName:"ul"},"\u5339\u914d\u5e95\u5c42\u7269\u7406 sector size"),(0,n.kt)("li",{parentName:"ul"},"0 \u4e3a\u81ea\u52a8\u68c0\u6d4b"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4e3a 12 - 4K")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"source",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"default"),(0,n.kt)("li",{parentName:"ul"},"temporary",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u6302\u8f7d\u70b9\u5c5e\u6027 - \u4f1a\u6620\u5c04\u5230 mount"))),(0,n.kt)("li",{parentName:"ul"},"inherited from"),(0,n.kt)("li",{parentName:"ul"},"local")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"zfs set compression=lz4 POOL\nzfs set atime=off POOL\nzfs set xattr=sa POOL\n\n# \u65ad\u7535\u53ef\u80fd\u4e22\u5931\u4e00\u5b9a\u6570\u636e\nzfs set sync=disabled POOL\n")),(0,n.kt)("h2",m({},{id:"zil-slog"}),"ZIL SLOG"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5199\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"ZIL - ZFS Intent Log",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u77ed\u671f\u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"ZIL \u9ed8\u8ba4\u5b58\u5728\u4e8e\u786c\u76d8\u4e0a\u7684\u7279\u6b8a\u533a\u57df - \u4ea7\u751f\u53cc\u5199 - \u5148\u5199 ZIL \u5728\u5199\u56de\u5230\u78c1\u76d8\u533a\u57df"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4f7f\u7528 ZIL \u7684\u573a\u666f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"logbias=throughput"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u5757"))))),(0,n.kt)("li",{parentName:"ul"},"SLOG - Separate ZFS Intent Log",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4e8e\u989d\u5916\u7684\u78c1\u76d8 - \u907f\u514d\u53cc\u5199"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e0d\u4e86\u591a\u5c11\u7a7a\u95f4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c 16G \u6216 64G \u8db3\u77e3"),(0,n.kt)("li",{parentName:"ul"},"max amount of write traffic per second x 15"),(0,n.kt)("li",{parentName:"ul"},"TXG commit interval - transaction group commit interval - 5s-10s",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"zfs_txg_synctime"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0 \u4e8b\u52a1 \u5ef6\u65f6\u6765\u589e\u52a0\u4f7f\u7528\u7684 slog"))))))),(0,n.kt)("li",{parentName:"ul"},"sync=standard - POSIX-compatible - synchronous only if requested"),(0,n.kt)("li",{parentName:"ul"},"sync=always")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# txg \u63d0\u4ea4\u95f4\u9694 - 5\u79d2\ncat /sys/module/zfs/parameters/zfs_txg_timeout\n# \u589e\u52a0 slog \u4f7f\u7528\u91cf\necho 180 | sudo tee /sys/module/zfs/parameters/zfs_txg_timeout\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"parameter"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"default"),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"zfs_dirty_data_max"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"10% RAM"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"zfs_dirty_data_max_percent"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"10% RAM"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"zfs_dirty_data_sync_percent"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"20"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u8fbe\u5230 zfs_dirty_data_max \u6bd4\u4f8b\u540e\u51fa\u53d1 sync")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"zfs_dirty_data_max_max"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"25% RAM"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"zfs_dirty_data_max_max_percent"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"25% RAM"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",m({},{id:"l2arc"}),"L2ARC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"ARC \u4e3a\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"L2ARC \u4e3a cache \u8bbe\u5907"),(0,n.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u662f\u8986\u76d6\u5199"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u652f\u6301 TRIM - ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/zfsonlinux/zfs/pull/9789"}),"https://github.com/zfsonlinux/zfs/pull/9789"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"l2arc_trim_ahead - \u9700\u8981\u65f6\u591a trim \u591a\u5c11")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u53ef\u67e5\u770b SSD trim \u652f\u6301\u60c5\u51b5\nzpool status -t\n# \u89e6\u53d1 pool\nzpool trim pool\n")),(0,n.kt)("h2",m({},{id:"\u78c1\u76d8\u4fe1\u606f"}),"\u78c1\u76d8\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# sector size\n# phy sector size\nblockdev --getss --getpbsz /dev/sda\n\ncat /sys/block/sd{a,b}/queue/{logical_block_size,physical_block_size,optimal_io_size}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/bradfa/flashbench"}),"bradfa/flashbench"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u95ea\u5b58\u7684 block size")))),(0,n.kt)("h2",m({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.youtube.com/watch?v=1Wo3i2gkAIk"}),"How the ZFS Adaptive Replacement Cache works"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Free RAM is wasted RAM")),(0,n.kt)("li",{parentName:"ul"},"ARC \u7ef4\u62a4 LRU,LFU"),(0,n.kt)("li",{parentName:"ul"},"\u7f13\u5b58 fs \u548c metadata - metadata \u9ed8\u8ba4 25% cache"),(0,n.kt)("li",{parentName:"ul"},"Compress ARC - \u5b58\u50a8\u66f4\u591a\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"block - 512b - 16MB"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5185\u5b58\u538b\u529b\u8c03\u6574\u4f7f\u7528\u7684\u7f13\u5b58\u91cf - adaptive"),(0,n.kt)("li",{parentName:"ul"},"tuning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"file server - \u5927 ARC, \u7f13\u5b58\u66f4\u591a metadata, \u53ef\u8003\u8651 L2ARC"),(0,n.kt)("li",{parentName:"ul"},"block storage/iSCSI - \u5927 ARC, \u914d\u7f6e volblocksize"),(0,n.kt)("li",{parentName:"ul"},"Database/A - \u5c0f ARC, \u53ea\u7f13\u5b58 metadata, large db buffer cache"),(0,n.kt)("li",{parentName:"ul"},"Database/B - \u4e2d ARC, \u53ea\u7f13\u5b58 metadata, small db buffer cache, compression \u80fd\u8ba9 ARC \u547d\u4e2d\u66f4\u591a\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"Hypervisor - \u4e2d\u5c0f ARC, \u4e3a VM \u9884\u7559\u5185\u5b58, \u907f\u514d\u53cc\u7f13\u5b58"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html"}),"Workload Tuning"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PosstgreSQL - ",(0,n.kt)("a",m({parentName:"li"},{href:"https://vadosware.io/post/everything-ive-seen-on-optimizing-postgres-on-zfs-on-linux/"}),"Everything I've seen on optimizing Postgres on ZFS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"recordsize=8K"),(0,n.kt)("li",{parentName:"ul"},"logbias=throughput"))),(0,n.kt)("li",{parentName:"ul"},"MySQL InnoDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"recordsize=16K"),(0,n.kt)("li",{parentName:"ul"},"primarycache=metadata"),(0,n.kt)("li",{parentName:"ul"},"logbias=throughput"),(0,n.kt)("li",{parentName:"ul"},"my.cnf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"skip-innodb_doublewrite"),(0,n.kt)("li",{parentName:"ul"},"innodb_use_native_aio=0"),(0,n.kt)("li",{parentName:"ul"},"innodb_use_atomic_writes=0"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.delphix.com/blog/delphix-engineering/zfs-raidz-stripe-width-or-how-i-learned-stop-worrying-and-love-raidz"}),"ZFS RAIDZ stripe width, or: How I Learned to Stop Worrying and Love RAIDZ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.unixarena.com/2013/07/zfs-how-to-extend-zpool-and-re-layout.html"}),"ZFS \u2013 How to Extend ZPOOL and Re-layout ?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.oracle.com/cd/E23824_01/html/821-1448/ftyue.html"}),"ZFS Terminology")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.google.com/spreadsheets/d/1pdu_X2tR4ztF6_HLtJ-Dc4ZcwUdt6fkCjpnXxAEFlyA"}),"ZFS overhead calc.xlsx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://blogs.oracle.com/roch/tuning-zfs-recordsize"}),"Tuning ZFS recordsize")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Module%20Parameters.html"}),"Module Parameters"))))}h.isMDXComponent=!0}}]);