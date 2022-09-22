"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97616],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(a),d=r,c=k["".concat(s,".").concat(d)]||k[d]||m[d]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},80669:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return z},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return h}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&u(e,a,t[a]);return e};const k={title:"ZFS"},d="ZFS",c={unversionedId:"ops/storage/fs/zfs",id:"ops/storage/fs/zfs",title:"ZFS",description:"Tips",source:"@site/../notes/ops/storage/fs/zfs.md",sourceDirName:"ops/storage/fs",slug:"/ops/storage/fs/zfs",permalink:"/notes/ops/storage/fs/zfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/fs/zfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1661507210,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{title:"ZFS"},sidebar:"docs",previous:{title:"OpenZFS Version",permalink:"/notes/ops/storage/fs/zfs-version"},next:{title:"FTP",permalink:"/notes/ops/storage/network/ftp"}},f={},h=[{value:"Tips",id:"tips",level:2},{value:"Why ZFS",id:"why-zfs",level:2},{value:"NOTES",id:"notes",level:2},{value:"\u6570\u636e\u5197\u4f59",id:"\u6570\u636e\u5197\u4f59",level:2},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:2},{value:"Tutor",id:"tutor",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:3},{value:"zpool",id:"zpool",level:3},{value:"zfs",id:"zfs-1",level:3},{value:"share",id:"share",level:2},{value:"\u7ba1\u7406\u8fd0\u7ef4",id:"\u7ba1\u7406\u8fd0\u7ef4",level:2},{value:"ZFS vs \u786c\u4ef6 RAID",id:"zfs-vs-\u786c\u4ef6-raid",level:2},{value:"\u52a0\u5bc6",id:"\u52a0\u5bc6",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"SSD",id:"ssd",level:2}],N={toc:h};function z(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},N),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"zfs"}),"ZFS"),(0,n.kt)("h2",m({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://zfsonlinux.org/"}),"zfsonlinux")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/zfsonlinux/zfs"}),"zfsonlinux/zfs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://open-zfs.org/"}),"open-zfs")),(0,n.kt)("li",{parentName:"ul"},"Archlinux ",(0,n.kt)("a",m({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/ZFS"}),"ZFS")),(0,n.kt)("li",{parentName:"ul"},"Archlinux ",(0,n.kt)("a",m({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/ZFS/Virtual_disks"}),"ZFS/Virtual disks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pthree.org/2012/04/17/install-zfs-on-debian-gnulinux/"}),"ZFS Administration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://buildwithbsd.org/zfs/zfs_tutorial_part_1.html"}),"ZFS Tutorial - 2016")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://serverfault.com/questions/355708"}),"ZFS Resources")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.oracle.com/cd/E23824_01/pdf/821-1448.pdf"}),"Oracle\xae Solaris Administration: ZFS File Systems - 2012"),(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.oracle.com/cd/E23824_01/html/821-1448/"}),"HTML")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.oracle.com/cd/E23824_01/html/821-1448/gkkih.html"}),"Encryption")),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027\u662f ZFS \u7684\u4e3b\u8981\u7279\u6027"),(0,n.kt)("li",{parentName:"ul"},"256 \u4f4d\u7684\u6821\u9a8c\u548c\u4f4d\u4e8e\u5143\u6570\u636e\u4e2d,\u4e0e\u6570\u636e\u76f8\u9694\u79bb"))),(0,n.kt)("li",{parentName:"ul"},"Copy on Write"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5feb\u7167"),(0,n.kt)("li",{parentName:"ul"},"Pooled Data Storage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZFS \u4f1a\u5c06\u5b58\u50a8\u8bbe\u5907\u7684\u53ef\u7528\u7a7a\u95f4\u4f5c\u4e3a\u4e00\u4e2a\u8d44\u6e90\u6c60, zpool"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u7528\u4e8e\u4f18\u5316\u6027\u80fd\u548c\u5197\u4f59"))),(0,n.kt)("li",{parentName:"ul"},"RAIDZ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RAIDZ1 - RAID-5"),(0,n.kt)("li",{parentName:"ul"},"RAIDZ2 - RAID-6"),(0,n.kt)("li",{parentName:"ul"},"RAIDZ3 \u7528\u7684\u76f8\u5bf9\u8f83\u5c11, \u591a\u4e00\u4e2a\u5197\u4f59"))),(0,n.kt)("li",{parentName:"ul"},"SSD \u6df7\u5408\u5b58\u50a8\u6c60"),(0,n.kt)("li",{parentName:"ul"},"\u5bb9\u91cf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZFS \u662f 128 \u4f4d\u7684\u6587\u4ef6\u7cfb\u7edf, \u53ef\u5b58\u50a8 256 ZB"))),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e05\u6d17",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZFS \u53ef\u5bf9\u5b58\u50a8\u6c60\u91cc\u7684\u6570\u636e\u8fdb\u884c\u5b8c\u6574\u6027\u6821\u9a8c,\u53ef\u4fee\u6539\u5176\u4e2d\u7684\u6570\u636e\u9519\u8bef."))),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ZSF \u6307\u4ee4\u6765\u7ba1\u7406\u6587\u4ef6\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u53bb\u91cd"),(0,n.kt)("li",{parentName:"ul"},"\u52a0\u5bc6"),(0,n.kt)("li",{parentName:"ul"},"ARC - Adaptive Replacement Cache."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/zfsonlinux/zfs/wiki/faq"}),"faq"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u521b\u5efa pool \u7684\u540d\u5b57",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1,\u6d4b\u8bd5 /dev/hdX,/dev/sdX"),(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u4e8e 10 \u786c\u76d8 /dev/disk/by-id"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u4e8e 10 \u786c\u76d8 /dev/disk/by-path"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u4e8e 10 \u6700\u597d /dev/disk/by-vdev"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://openzfs.github.io/openzfs-docs/Project%20and%20Community/FAQ.html"}),"FAQ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.freebsd.org/cgi/man.cgi?query=zpool&sektion=8"}),"zpool.8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.freebsd.org/cgi/man.cgi?query=zfs&sektion=8"}),"zfs.8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.slideshare.net/MatthewAhrens/openzfs-novel-algorithms-snapshots-space-allocation-raidz-matt-ahrens"}),"OpenZFS novel algorithms: snapshots, space allocation, RAID-Z - Matt Ahrens")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.zfsbuild.com/2010/05/26/zfs-raid-levels/"}),"http://www.zfsbuild.com/2010/05/26/zfs-raid-levels/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://calomel.org/zfs_raid_speed_capacity.html"}),"ZFS Raidz Performance, Capacity and Integrity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://forum.proxmox.com/threads/zfs-with-ssds-am-i-asking-for-a-headache-in-the-near-future.25967/"}),"https://forum.proxmox.com/threads/zfs-with-ssds-am-i-asking-for-a-headache-in-the-near-future.25967/")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://wintelguy.com/zfs-calc.pl"}),"ZFS / RAIDZ Capacity Calculator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://utcc.utoronto.ca/~cks/space/blog/solaris/ZFSSystemAttributes"}),"ZFSSystemAttributes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://utcc.utoronto.ca/~cks/space/blog/solaris/ZFSDRaidNotes"}),"ZFSDRaidNotes")),(0,n.kt)("li",{parentName:"ul"},"ZFS native encryption vs LUKS ",(0,n.kt)("a",m({parentName:"li"},{href:"https://news.ycombinator.com/item?id=32340433"}),"https://news.ycombinator.com/item?id=32340433"))))),(0,n.kt)("h2",m({},{id:"why-zfs"}),"Why ZFS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"zpool - \u8f6f RAID",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u63a7\u5236 - \u6062\u590d\u521b\u5efa\u90fd\u6bd4\u786c RAID \u65b9\u4fbf\u5feb\u901f"),(0,n.kt)("li",{parentName:"ul"},"dRAID \u66f4\u8fdb\u4e00\u6b65\u63d0\u5347\u5927\u91cf\u76d8\u4f4d\u65f6\u7684\u6062\u590d\u901f\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u7075\u6d3b\u7684\u5197\u4f59\u7a0b\u5ea6\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u6027\u6821\u9a8c"))),(0,n.kt)("li",{parentName:"ul"},"dataset - \u903b\u8f91\u5212\u5206 zpool"),(0,n.kt)("li",{parentName:"ul"},"ZFS - \u6587\u4ef6\u7cfb\u7edf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5feb\u7167"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u91cf\u5907\u4efd - zfs send, zfs recv"),(0,n.kt)("li",{parentName:"ul"},"\u900f\u660e\u538b\u7f29"),(0,n.kt)("li",{parentName:"ul"},"dedup"))),(0,n.kt)("li",{parentName:"ul"},"\u7f13\u5b58 - \u5199\u7f13\u5b58\u3001\u8bfb\u7f13\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5229\u7528\u989d\u5916\u7684 SSD \u52a0\u901f")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"When not to use ZFS")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u57fa\u4e8e RAW Disk \u7684\u96c6\u7fa4\u5b58\u50a8 - \u4f8b\u5982: Ceph")),(0,n.kt)("h2",m({},{id:"notes"}),"NOTES"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"zpool",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6c60",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u7ec4\u865a\u62df\u8bbe\u5907\u7684\u5408\u96c6"))))),(0,n.kt)("li",{parentName:"ul"},"vdev - Virtual Device - \u865a\u62df\u8bbe\u5907",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"disk"),(0,n.kt)("li",{parentName:"ul"},"file"),(0,n.kt)("li",{parentName:"ul"},"mirror - RAID-1"),(0,n.kt)("li",{parentName:"ul"},"raidz",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"raidz - raidz1"),(0,n.kt)("li",{parentName:"ul"},"raidz1 - RAID-5"),(0,n.kt)("li",{parentName:"ul"},"raidz2 - RAID-6"),(0,n.kt)("li",{parentName:"ul"},"raidz3"))),(0,n.kt)("li",{parentName:"ul"},"spare"),(0,n.kt)("li",{parentName:"ul"},"log"),(0,n.kt)("li",{parentName:"ul"},"cache"))),(0,n.kt)("li",{parentName:"ul"},"vdev \u72b6\u6001",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DEGRADED"),(0,n.kt)("li",{parentName:"ul"},"FAULTED"),(0,n.kt)("li",{parentName:"ul"},"OFFLINE"),(0,n.kt)("li",{parentName:"ul"},"ONLINE"),(0,n.kt)("li",{parentName:"ul"},"REMOVED"),(0,n.kt)("li",{parentName:"ul"},"UNAVAIL"))),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7684\u5b88\u62a4\u8fdb\u7a0b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"zfs-import",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zpool import")),(0,n.kt)("li",{parentName:"ul"},"\u5bfc\u5165 pool"))),(0,n.kt)("li",{parentName:"ul"},"zfs-mount",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zfs mount -a")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"zfs umount -a")),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6302\u8f7d\u76ee\u5f55, \u6302\u8f7d\u76ee\u5f55\u548c\u662f\u5426\u6302\u8f7d\u7531 mountpoint \u548c canmount \u63a7\u5236"))),(0,n.kt)("li",{parentName:"ul"},"zfs-share",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zfs share -a")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"zfs unshare -a")),(0,n.kt)("li",{parentName:"ul"},"\u63a7\u5236 iSCSI, NFS \u6216 CIFS \u7b49\u7f51\u7edc\u5171\u4eab"))),(0,n.kt)("li",{parentName:"ul"},"zfs-zed",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZFS Event Daemon"),(0,n.kt)("li",{parentName:"ul"},"\u76d1\u63a7 zfs \u4e8b\u4ef6, \u5f53\u6709 zevent \u65f6\u95f4\u89e6\u53d1\u65f6, \u4f1a\u6267\u884c\u76f8\u5e94\u7c7b\u578b\u7684\u811a\u672c")))))),(0,n.kt)("p",null,"A raidz group with\tN disks\tof size\tX with P parity\tdisks can hold\napproximately (N-P)*X bytes and can withstand P device(s) failing\nbefore data integrity is compromised. The minimum number of\ndevices in\ta raidz\tgroup is one more than the number of parity\ndisks. The\trecommended number is between 3\tand 9 to help increase\nperformance."),(0,n.kt)("h2",m({},{id:"\u6570\u636e\u5197\u4f59"}),"\u6570\u636e\u5197\u4f59"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stripped",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0\u5197\u4f59"))),(0,n.kt)("li",{parentName:"ul"},"RAIDZ1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e RAID 5"),(0,n.kt)("li",{parentName:"ul"},"\u6700\u5927\u7684\u78c1\u76d8\u7a7a\u95f4"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u78c1\u76d8\u8bfb\u5199\u5757\u5927\u4e8e 128K \u65f6\u6027\u80fd\u8f83\u597d"),(0,n.kt)("li",{parentName:"ul"},"\u5e94\u8be5\u4f7f\u7528 2",(0,n.kt)("sup",null,"n"),"+1 \u4e2a\u78c1\u76d8"))),(0,n.kt)("li",{parentName:"ul"},"RAIDZ2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e RAID 6"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u5bb9\u9519"),(0,n.kt)("li",{parentName:"ul"},"\u6bd4 RAIDZ1 \u66f4\u597d\u7684 MTTDL(mean time to data loss)"),(0,n.kt)("li",{parentName:"ul"},"\u5e94\u8be5\u4f7f\u7528 2",(0,n.kt)("sup",null,"n"),"+2 \u4e2a\u78c1\u76d8"))),(0,n.kt)("li",{parentName:"ul"},"RAIDZ3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e94\u8be5\u4f7f\u7528 2",(0,n.kt)("sup",null,"n"),"+3 \u4e2a\u78c1\u76d8"))),(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e RAID 1"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4,\u4f46\u5904\u7406\u5c0f\u6570\u636e\u7684\u8bfb\u5199\u6027\u80fd\u4f1a\u8f83\u597d."),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u8ffd\u6c42\u66f4\u597d\u7684\u6027\u80fd\u53ef\u57fa\u4e8e RAIDZ \u5b9e\u73b0\u955c\u50cf,\u7279\u522b\u662f\u9488\u5bf9\u4ea4\u5927\u7684,\u4e0d\u53ef\u7f13\u5b58\u7684\u968f\u673a\u8bfb."))),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a vdev \u7684\u78c1\u76d8\u4e0d\u5e94\u8be5\u8d85\u8fc7 12 \u4e2a.\u5efa\u8bae\u6bcf\u4e2a vdev \u4e3a 3-9 \u4e2a\u78c1\u76d8."),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6216\u591a\u4e2a\u78c1\u76d8\u7ec4\u6210 vdev"),(0,n.kt)("li",{parentName:"ul"},"vdev \u521b\u5efa\u540e\u4e0d\u80fd\u4fee\u6539"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6216\u591a\u4e2a vdev \u7ec4\u6210 zpool"),(0,n.kt)("li",{parentName:"ul"},"\u78c1\u76d8\u635f\u574f\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931"),(0,n.kt)("li",{parentName:"ul"},"vdev \u635f\u574f\u5bfc\u81f4 zpool \u4e0d\u53ef\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5230 zpool \u540e\u7684 vdev \u4e0d\u80fd\u88ab\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"ZIL(ZFS intent log) \u635f\u574f\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931"),(0,n.kt)("li",{parentName:"ul"},"L1ARC \u662f\u5b58\u50a8\u4e8e RAM \u7684\u8bfb\u7f13\u5b58,\u4e0d\u5e94\u8be5\u8d85\u8fc7 7/8 \u603b RAM"),(0,n.kt)("li",{parentName:"ul"},"L2ARC \u662f\u5b58\u50a8\u4e8e\u78c1\u76d8\u7684\u8bfb\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"ZIL he L2ARC \u5b58\u50a8\u4e8e SSD \u4f46\u4e0d\u5e94\u8be5\u5b58\u50a8\u4e8e\u540c\u4e00\u4e2a SSD"),(0,n.kt)("li",{parentName:"ul"},"ZIL \u4e3b\u8981\u7528\u4e8e\u540c\u6b65\u5199,\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981"),(0,n.kt)("li",{parentName:"ul"},"L2ARC \u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u63d0\u5347\u592a\u591a\u7684\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0 RAM \u662f\u63d0\u5347\u6027\u80fd\u7684\u6700\u597d\u65b9\u5f0f")),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/dmu.c"}),"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/dmu.c"),"\nThis statistic shows ZFS DMU (Data Management Unit) operations/sec.\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://docs.oracle.com/cd/E27998_01/html/E48490/analytics__statistics__disk_zfs_dmu_operations.html"}),"https://docs.oracle.com/cd/E27998_01/html/E48490/analytics__statistics__disk_zfs_dmu_operations.html")),(0,n.kt)("p",null,"ARC buffer data (ABD).\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/abd.c"}),"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/abd.c")),(0,n.kt)("p",null,"dnode\ndnode is a data structure which represents an object. An object can be a ZPL file or directory, a ZVOL volume, or several other types of internal metadata\n",(0,n.kt)("a",m({parentName:"p"},{href:"http://open-zfs.org/wiki/Documentation/DnodeSync"}),"http://open-zfs.org/wiki/Documentation/DnodeSync")),(0,n.kt)("h2",m({},{id:"\u786c\u4ef6"}),"\u786c\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://open-zfs.org/wiki/Hardware"}),"Hardware"))),(0,n.kt)("h2",m({},{id:"tutor"}),"Tutor"),(0,n.kt)("h3",m({},{id:"\u51c6\u5907\u5de5\u4f5c"}),"\u51c6\u5907\u5de5\u4f5c"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u5de5\u4f5c\u533a\u95f4\nmkdir -p ~/temp/zfs && cd $_\n# \u4f7f\u7528\u6587\u4ef6\u4f5c\u4e3a\u5b58\u50a8, \u5b9e\u9645\u4f7f\u7528\u65f6\u5c06\u6587\u4ef6\u66ff\u6362\u4e3a\u8bbe\u5907\u5373\u53ef\nfor i in {1..4};do dd bs=1M count=256 if=/dev/zero of=disk$i; done\ndd bs=1M count=256 if=/dev/zero of=sparedisk\n")),(0,n.kt)("h3",m({},{id:"zpool"}),"zpool"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u5355\u4e2a\u78c1\u76d8\u7684 Pool, \u6ca1\u6709\u6570\u636e\u5197\u4f59\nzpool create tank $PWD/disk1\nzpool list\n# \u5199\u5165\u6570\u636e, OS X \u7684\u6302\u8f7d\u70b9\u5728 /Volumes/tank, Linux \u4e3a /tank\ndd bs=1M count=64 if=/dev/random of=/tank/foo\n# \u67e5\u770b\u5199\u5165\u540e\u7684\u72b6\u6001\nzpool list tank\n# \u6e05\u9664\nzpool destroy\n\n# \u955c\u50cf Pool\nzpool create tank mirror $PWD/disk1 $PWD/disk2\nzpool status tank\ndd bs=1M count=64 if=/dev/random of=/tank/foo\n# \u4f7f disk1 \u6570\u636e\u635f\u574f\ndd bs=1M seek=10 count=1 conv=notrunc if=/dev/random of=disk1\nzpool scrub tank\nzpool status tank\n# \u53ea\u662f\u6570\u636e\u635f\u574f\u78c1\u76d8\u6ca1\u6709\u5f02\u5e38, \u53ef\u4f7f\u7528 clear \u4fee\u590d\nzpool clear tank\nzpool status tank\n# \u4f7f disk1 \u78c1\u76d8\u635f\u574f\necho > disk1\nzpool scrub tank\n# \u663e\u793a\u6709\u4e00\u4e2a\u78c1\u76d8\u4e0d\u53ef\u7528\u4f46\u4f9d\u7136\u53ef\u4ee5\u64cd\u4f5c\nzpool status tank\ndd bs=1M count=64 if=/dev/random of=/tank/bar\n# \u66ff\u6362\u635f\u574f\u7684\u78c1\u76d8\nzpool replace tank $PWD/disk1 $PWD/sparedisk\nzpool status\n# \u6269\u5bb9,\u6dfb\u52a0\u65b0\u7684\u78c1\u76d8\nzpool add tank mirror $PWD/disk3 $PWD/disk4\nzpool list\ndd bs=1M count=100 if=/dev/urandom of=/tank/bar\nzpool iostat -v tank\nzpool destroy tank\n")),(0,n.kt)("h3",m({},{id:"zfs-1"}),"zfs"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"zpool create tank mirror $PWD/disk1 $PWD/disk2\nzfs list tank\n# \u521b\u5efa\u65b0\u7684\u6587\u4ef6\u7cfb\u7edf\nzfs create tank/joey\nzfs create tank/monica\nzfs create tank/ross\nzfs list -r tank\ndf -h |grep tank\n# \u5220\u9664\u6587\u4ef6\u7cfb\u7edf\nzfs destroy tank/ross\nzfs create tank/ross\n# \u4fee\u6539\u6302\u8f7d\u70b9\nzfs set mountpoint=$PWD/monica tank/monica\n# \u5378\u8f7d\u6587\u4ef6\u7cfb\u7edf\nzfs umount tank/joey\ndf -h |grep tank\n# \u4ece\u65b0\u6302\u8f7d\nzfs mount tank/joey\n# \u83b7\u53d6\u6240\u6709\u5c5e\u6027\n# SOURCE: '-' \u53ea\u8bfb default \u9ed8\u8ba4\u503c local \u672c\u5730\u4fee\u6539\u7684\u503c inherited \u7ee7\u627f\u81ea\u7236\u6587\u4ef6\u7cfb\u7edf\u7684\u503c temporary\nzfs get all tank/joey\nzfs get -Hp -o name,property,value used,available tank/joey\n\n\n# \u9650\u5236\u914d\u989d\nzfs set quota=50m tank/joey\n# \u8bbe\u7f6e\u9884\u7559\nzfs set reservation=25m tank/joey\nzfs get -r quota tank\nzfs get -r reservation tank\n\n# \u542f\u7528\u538b\u7f29\nzfs set compression=lz4 tank/joey\nzfs get -r compression tank\n# \u4f7f\u7528\u8bcd\u5178\u6d4b\u8bd5\u538b\u7f29\n# \u5728 Ubuntu/Debian \u4e0b\u9700\u8981\u5b89\u88c5 wordlist,\u4f8b\u5982 apt-get install wamerican-large\ncp /usr/share/dict/words /tank/ross/\ncp /usr/share/dict/words /tank/joey/\nzfs list -o name,used,compressratio,compression tank/{joey,ross}\n")),(0,n.kt)("h2",m({},{id:"share"}),"share"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# \u542f\u52a8 nfs\napk add nfs-utils\nservice nfs start\n\n# \u4f1a\u4fee\u6539 /var/lib/nfs/etab \u914d\u7f6e\u6587\u4ef6\nzfs set sharenfs=on data/share\n# samba\n# zfs set sharesmb=on data/share\n# \u8bbe\u7f6e\u989d\u5916\u9009\u9879\nzfs set sharenfs="rw=@192.168.11.0/24" data/share\n# \u5171\u4eab\u662f\u6240\u6709\u5b9a\u4e49\u4e86\u5171\u4eab\u5c5e\u6027\u7684\u5377\nzfs share -a\n# \u542f\u52a8\u65f6\u6267\u884c zfs share -a\nrc-update add zfs-share\n\n# \u67e5\u770b\u6240\u6709\u7684\u5171\u4eab\u72b6\u6001\nzfs list -o name,sharenfs\n\n# \u53d6\u6d88\u6240\u6709\u5171\u4eab\nzfs unshare -a\n')),(0,n.kt)("h2",m({},{id:"\u7ba1\u7406\u8fd0\u7ef4"}),"\u7ba1\u7406\u8fd0\u7ef4"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"zpool status -x\n# \u8fdb\u884c\u6570\u636e\u6e05\u7406\u64cd\u4f5c\nzpool scrub tank\n# \u67e5\u770b scrub \u72b6\u6001\nzpool status\n# io \u7edf\u8ba1, \u95f4\u9694 5s\nzpool iostat -v 5\n# \u4ece pool \u4e2d\u79fb\u9664\u8bbe\u5907, \u53ea\u80fd\u79fb\u9664 \u672a\u4f7f\u7528\u7684\u70ed\u5907, \u7f13\u5b58, \u9876\u5c42\u8bbe\u5907, \u65e5\u5fd7\u8bbe\u5907\nzpool remove main device\n# \u6dfb\u52a0\u9876\u5c42\u8bbe\u5907\nzpool add main raidz dev1 dev2\n# \u6dfb\u52a0\u7f13\u5b58\nzpool add main cache dev\n# -f \u683c\u5f0f\u5316\nsudo zpool add main -f cache /dev/disk/by-id/wwn-0x500000000abcd\n\n# \u67e5\u770b\u538b\u7f29\u4fe1\u606f\n# compressratio, compression, refcompressratio\nzfs get all main/archive | grep com\n# \u67e5\u770b\u538b\u7f29\u540e\u7684\u5927\u5c0f\ndu -h .\n# \u67e5\u770b\u5b9e\u9645\u5927\u5c0f\ndu --apparent-size -h .\n")),(0,n.kt)("h2",m({},{id:"zfs-vs-\u786c\u4ef6-raid"}),"ZFS vs \u786c\u4ef6 RAID"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ZFS \u6709\u6821\u9a8c\u548c,\u548c\u53ef\u907f\u514d\u4f4d\u7ffb\u8f6c\u7b49\u95ee\u9898,\u800c RAID \u4e3b\u8981\u7528\u4e8e\u907f\u514d\u6574\u4e2a\u78c1\u76d8\u7684\u635f\u574f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ZFS \u53ea\u9700\u8981 HBAs (host bus adapter ) \u800c\u4e0d\u9700\u8981 RAID \u63a7\u5236\u5668")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6700\u591a\u53ea\u9700\u8981 Z2, Z3 \u5f88\u5c11\u4f7f\u7528,\u5e76\u4e14\u53ef\u80fd\u4f1a\u6709\u95ee\u9898,\u6709\u5176\u4ed6\u7684\u529e\u6cd5\u6765\u907f\u514d\u53ef\u80fd\u7684\u9519\u8bef")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ZFS \u5e76\u4e0d\u662f RAID, \u800c\u662f\u4e00\u4e2a\u8f6f\u4ef6,\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ZFS \u91cd\u5efa\u6bd4 RAID \u66f4\u5feb,\u4f8b\u5982 1TB \u7684\u4e91\u76d8,\u5b9e\u9645\u6570\u636e\u53ea\u6709 100MB, \u90a3\u4e48 ZFS \u53ea\u9700\u8981 100MB \u7684 IO, \u800c RAID \u9700\u8981 1TB \u7684 IO.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"scrub \u662f\u7528\u6765\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u7684,\u800c\u4e0d\u662f\u4fdd\u8bc1\u78c1\u76d8\u5065\u5eb7\u7684.\u4e0d\u662f\u81ea\u52a8\u7684,\u9700\u8981\u5b9a\u65f6\u8c03\u5ea6.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'"PFA"s, as in Pre-Failure Alerts')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://www.reddit.com/r/storage/comments/3jcg2r/zfs_vs_raid6/"}),"ZFS vs RAID6")))),(0,n.kt)("h2",m({},{id:"\u52a0\u5bc6"}),"\u52a0\u5bc6"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://blog.heckel.xyz/2017/01/08/zfs-encryption-openzfs-zfs-on-linux/"}),"https://blog.heckel.xyz/2017/01/08/zfs-encryption-openzfs-zfs-on-linux/"),"\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.rolando.cl/blog/2017/06/13/playing-with-zfs-encryption/"}),"https://www.rolando.cl/blog/2017/06/13/playing-with-zfs-encryption/"),"\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://news.ycombinator.com/item?id=14591452"}),"https://news.ycombinator.com/item?id=14591452")),(0,n.kt)("h2",m({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://blog.delphix.com/matt/2014/06/06/zfs-stripe-width/"}),"ZFS RAIDZ stripe width, or: How I Learned to Stop Worrying and Love RAIDZ")),(0,n.kt)("li",{parentName:"ul"},"[Getting the Most out of ZFS Pools]","(Getting the Most out of ZFS Pools)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://constantin.glez.de/blog/2010/06/closer-look-zfs-vdevs-and-performance"}),"A Closer Look at ZFS, Vdevs and Performance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://wiki.freebsd.org/ZFSTuningGuide"}),"FreeBSD ZFS Tuning Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://docs.oracle.com/cd/E19253-01/819-5461/index.html"}),"ZFS Administration Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://blogs.oracle.com/video/entry/becoming_a_zfs_ninja"}),"Becoming a ZFS Ninja (video)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://forums.freenas.org/index.php?threads/slideshow-explaining-vdev-zpool-zil-and-l2arc-for-noobs.7775/"}),"Slideshow explaining VDev, zpool, ZIL and L2ARC and other newbie mistakes!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.bsdnow.tv/tutorials/zfs"}),"A Crash Course on ZFS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.youtube.com/watch?v=uT2i2ryhCio"}),"ZFS: The Last Word in File Systems - Part 1 (video)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://calomel.org/zfs_raid_speed_capacity.html"}),"ZFS Raidz Performance, Capacity and Integrity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://louwrentius.com/the-hidden-cost-of-using-zfs-for-your-home-nas.html"}),"The 'Hidden' Cost of Using ZFS for Your Home NAS"))),(0,n.kt)("h2",m({},{id:"ssd"}),"SSD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://linuxhint.com/configuring-zfs-cache/"}),"https://linuxhint.com/configuring-zfs-cache/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.reddit.com/r/zfs/comments/7bd797/ssd_caching/"}),"https://www.reddit.com/r/zfs/comments/7bd797/ssd_caching/")),(0,n.kt)("li",{parentName:"ul"},"SLOG is a write cache. This is the one you'd want to mirror and you'd also want to use an SSD that can finish in flight writes in the case of a power outage"),(0,n.kt)("li",{parentName:"ul"},"Something with a battery or capacitor")))}z.isMDXComponent=!0}}]);