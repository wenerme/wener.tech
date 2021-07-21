(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{1151:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return a?r.a.createElement(d,b(b({ref:t},c),{},{components:a})):r.a.createElement(d,b({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},670:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(1151)),i={title:"ZFS"},b={unversionedId:"ops/storage/fs/zfs",id:"ops/storage/fs/zfs",isDocsHomePage:!1,title:"ZFS",description:"Tips",source:"@site/notes/ops/storage/fs/zfs.md",slug:"/ops/storage/fs/zfs",permalink:"/notes/ops/storage/fs/zfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/zfs.md",version:"current",sidebar:"docs",previous:{title:"ZFS \u5e38\u89c1\u95ee\u9898",permalink:"/notes/ops/storage/fs/zfs-faq"},next:{title:"FTP",permalink:"/notes/ops/storage/network/ftp"}},o=[{value:"Tips",id:"tips",children:[]},{value:"NOTES",id:"notes",children:[]},{value:"\u6570\u636e\u5197\u4f59",id:"\u6570\u636e\u5197\u4f59",children:[]},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",children:[]},{value:"Tutor",id:"tutor",children:[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"zpool",id:"zpool",children:[]},{value:"zfs",id:"zfs",children:[]}]},{value:"share",id:"share",children:[]},{value:"\u7ba1\u7406\u8fd0\u7ef4",id:"\u7ba1\u7406\u8fd0\u7ef4",children:[]},{value:"ZFS vs \u786c\u4ef6 RAID",id:"zfs-vs-\u786c\u4ef6-raid",children:[]},{value:"\u52a0\u5bc6",id:"\u52a0\u5bc6",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]},{value:"SSD",id:"ssd",children:[]}],c={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://zfsonlinux.org/"},"zfsonlinux")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/zfsonlinux/zfs"},"zfsonlinux/zfs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://open-zfs.org/"},"open-zfs")),Object(l.b)("li",{parentName:"ul"},"Archlinux ",Object(l.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/ZFS"},"ZFS")),Object(l.b)("li",{parentName:"ul"},"Archlinux ",Object(l.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/ZFS/Virtual_disks"},"ZFS/Virtual disks")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pthree.org/2012/04/17/install-zfs-on-debian-gnulinux/"},"ZFS Administration")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://buildwithbsd.org/zfs/zfs_tutorial_part_1.html"},"ZFS Tutorial - 2016")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://serverfault.com/questions/355708"},"ZFS Resources")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E23824_01/pdf/821-1448.pdf"},"Oracle\xae Solaris Administration: ZFS File Systems - 2012"),Object(l.b)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E23824_01/html/821-1448/"},"HTML")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E23824_01/html/821-1448/gkkih.html"},"Encryption")),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027\u662f ZFS \u7684\u4e3b\u8981\u7279\u6027"),Object(l.b)("li",{parentName:"ul"},"256 \u4f4d\u7684\u6821\u9a8c\u548c\u4f4d\u4e8e\u5143\u6570\u636e\u4e2d,\u4e0e\u6570\u636e\u76f8\u9694\u79bb"))),Object(l.b)("li",{parentName:"ul"},"Copy on Write"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5feb\u7167"),Object(l.b)("li",{parentName:"ul"},"Pooled Data Storage",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ZFS \u4f1a\u5c06\u5b58\u50a8\u8bbe\u5907\u7684\u53ef\u7528\u7a7a\u95f4\u4f5c\u4e3a\u4e00\u4e2a\u8d44\u6e90\u6c60, zpool"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u7528\u4e8e\u4f18\u5316\u6027\u80fd\u548c\u5197\u4f59"))),Object(l.b)("li",{parentName:"ul"},"RAIDZ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"RAIDZ1 - RAID-5"),Object(l.b)("li",{parentName:"ul"},"RAIDZ2 - RAID-6"),Object(l.b)("li",{parentName:"ul"},"RAIDZ3 \u7528\u7684\u76f8\u5bf9\u8f83\u5c11, \u591a\u4e00\u4e2a\u5197\u4f59"))),Object(l.b)("li",{parentName:"ul"},"SSD \u6df7\u5408\u5b58\u50a8\u6c60"),Object(l.b)("li",{parentName:"ul"},"\u5bb9\u91cf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ZFS \u662f 128 \u4f4d\u7684\u6587\u4ef6\u7cfb\u7edf, \u53ef\u5b58\u50a8 256 ZB"))),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u6e05\u6d17",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ZFS \u53ef\u5bf9\u5b58\u50a8\u6c60\u91cc\u7684\u6570\u636e\u8fdb\u884c\u5b8c\u6574\u6027\u6821\u9a8c,\u53ef\u4fee\u6539\u5176\u4e2d\u7684\u6570\u636e\u9519\u8bef."))),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ZSF \u6307\u4ee4\u6765\u7ba1\u7406\u6587\u4ef6\u7cfb\u7edf"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u53bb\u91cd"),Object(l.b)("li",{parentName:"ul"},"\u52a0\u5bc6"),Object(l.b)("li",{parentName:"ul"},"ARC - Adaptive Replacement Cache."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/zfsonlinux/zfs/wiki/faq"},"faq"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9009\u62e9\u521b\u5efa pool \u7684\u540d\u5b57",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f00\u53d1,\u6d4b\u8bd5 /dev/hdX,/dev/sdX"),Object(l.b)("li",{parentName:"ul"},"\u5c0f\u4e8e 10 \u786c\u76d8 /dev/disk/by-id"),Object(l.b)("li",{parentName:"ul"},"\u5927\u4e8e 10 \u786c\u76d8 /dev/disk/by-path"),Object(l.b)("li",{parentName:"ul"},"\u5927\u4e8e 10 \u6700\u597d /dev/disk/by-vdev"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.freebsd.org/cgi/man.cgi?query=zpool&sektion=8"},"zpool.8")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.freebsd.org/cgi/man.cgi?query=zfs&sektion=8"},"zfs.8")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.slideshare.net/MatthewAhrens/openzfs-novel-algorithms-snapshots-space-allocation-raidz-matt-ahrens"},"OpenZFS novel algorithms: snapshots, space allocation, RAID-Z - Matt Ahrens")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.zfsbuild.com/2010/05/26/zfs-raid-levels/"},"http://www.zfsbuild.com/2010/05/26/zfs-raid-levels/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://calomel.org/zfs_raid_speed_capacity.html"},"ZFS Raidz Performance, Capacity and Integrity")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://forum.proxmox.com/threads/zfs-with-ssds-am-i-asking-for-a-headache-in-the-near-future.25967/"},"https://forum.proxmox.com/threads/zfs-with-ssds-am-i-asking-for-a-headache-in-the-near-future.25967/")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wintelguy.com/zfs-calc.pl"},"ZFS / RAIDZ Capacity Calculator"))))),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"zpool",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u6c60",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u7ec4\u865a\u62df\u8bbe\u5907\u7684\u5408\u96c6"))))),Object(l.b)("li",{parentName:"ul"},"vdev - Virtual Device - \u865a\u62df\u8bbe\u5907",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"disk"),Object(l.b)("li",{parentName:"ul"},"file"),Object(l.b)("li",{parentName:"ul"},"mirror"),Object(l.b)("li",{parentName:"ul"},"raidz",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"raidz \u7b49\u540c\u4e8e raidz1"),Object(l.b)("li",{parentName:"ul"},"raidz1"),Object(l.b)("li",{parentName:"ul"},"raidz2"),Object(l.b)("li",{parentName:"ul"},"raidz3"))),Object(l.b)("li",{parentName:"ul"},"spare"),Object(l.b)("li",{parentName:"ul"},"log"),Object(l.b)("li",{parentName:"ul"},"cache"))),Object(l.b)("li",{parentName:"ul"},"vdev \u72b6\u6001",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"DEGRADED"),Object(l.b)("li",{parentName:"ul"},"FAULTED"),Object(l.b)("li",{parentName:"ul"},"OFFLINE"),Object(l.b)("li",{parentName:"ul"},"ONLINE"),Object(l.b)("li",{parentName:"ul"},"REMOVED"),Object(l.b)("li",{parentName:"ul"},"UNAVAIL"))),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7684\u5b88\u62a4\u8fdb\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"zfs-import",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zpool import")),Object(l.b)("li",{parentName:"ul"},"\u5bfc\u5165 pool"))),Object(l.b)("li",{parentName:"ul"},"zfs-mount",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zfs mount -a")," / ",Object(l.b)("inlineCode",{parentName:"li"},"zfs umount -a")),Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u6302\u8f7d\u76ee\u5f55, \u6302\u8f7d\u76ee\u5f55\u548c\u662f\u5426\u6302\u8f7d\u7531 mountpoint \u548c canmount \u63a7\u5236"))),Object(l.b)("li",{parentName:"ul"},"zfs-share",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zfs share -a")," / ",Object(l.b)("inlineCode",{parentName:"li"},"zfs unshare -a")),Object(l.b)("li",{parentName:"ul"},"\u63a7\u5236 iSCSI, NFS \u6216 CIFS \u7b49\u7f51\u7edc\u5171\u4eab"))),Object(l.b)("li",{parentName:"ul"},"zfs-zed",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ZFS Event Daemon"),Object(l.b)("li",{parentName:"ul"},"\u76d1\u63a7 zfs \u4e8b\u4ef6, \u5f53\u6709 zevent \u65f6\u95f4\u89e6\u53d1\u65f6, \u4f1a\u6267\u884c\u76f8\u5e94\u7c7b\u578b\u7684\u811a\u672c")))))),Object(l.b)("p",null,"A raidz group with\tN disks\tof size\tX with P parity\tdisks can hold\napproximately (N-P)*X bytes and can withstand P device(s) failing\nbefore data integrity is compromised. The minimum number of\ndevices in\ta raidz\tgroup is one more than the number of parity\ndisks. The\trecommended number is between 3\tand 9 to help increase\nperformance."),Object(l.b)("h2",{id:"\u6570\u636e\u5197\u4f59"},"\u6570\u636e\u5197\u4f59"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Stripped"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e0\u5197\u4f59"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"RAIDZ1"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e RAID 5"),Object(l.b)("li",{parentName:"ul"},"\u6700\u5927\u7684\u78c1\u76d8\u7a7a\u95f4"),Object(l.b)("li",{parentName:"ul"},"\u5f53\u78c1\u76d8\u8bfb\u5199\u5757\u5927\u4e8e 128K \u65f6\u6027\u80fd\u8f83\u597d"),Object(l.b)("li",{parentName:"ul"},"\u5e94\u8be5\u4f7f\u7528 2",Object(l.b)("sup",null,"n"),"+1 \u4e2a\u78c1\u76d8"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"RAIDZ2"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e RAID 6"),Object(l.b)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u5bb9\u9519"),Object(l.b)("li",{parentName:"ul"},"\u6bd4 RAIDZ1 \u66f4\u597d\u7684 MTTDL(mean time to data loss)"),Object(l.b)("li",{parentName:"ul"},"\u5e94\u8be5\u4f7f\u7528 2",Object(l.b)("sup",null,"n"),"+2 \u4e2a\u78c1\u76d8"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"RAIDZ3"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u8be5\u4f7f\u7528 2",Object(l.b)("sup",null,"n"),"+3 \u4e2a\u78c1\u76d8"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u955c\u50cf"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e RAID 1"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4,\u4f46\u5904\u7406\u5c0f\u6570\u636e\u7684\u8bfb\u5199\u6027\u80fd\u4f1a\u8f83\u597d."),Object(l.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u8ffd\u6c42\u66f4\u597d\u7684\u6027\u80fd\u53ef\u57fa\u4e8e RAIDZ \u5b9e\u73b0\u955c\u50cf,\u7279\u522b\u662f\u9488\u5bf9\u4ea4\u5927\u7684,\u4e0d\u53ef\u7f13\u5b58\u7684\u968f\u673a\u8bfb."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6bcf\u4e2a vdev \u7684\u78c1\u76d8\u4e0d\u5e94\u8be5\u8d85\u8fc7 12 \u4e2a.\u5efa\u8bae\u6bcf\u4e2a vdev \u4e3a 3-9 \u4e2a\u78c1\u76d8.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e00\u4e2a\u6216\u591a\u4e2a\u78c1\u76d8\u7ec4\u6210 vdev")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"vdev \u521b\u5efa\u540e\u4e0d\u80fd\u4fee\u6539")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e00\u4e2a\u6216\u591a\u4e2a vdev \u7ec4\u6210 zpool")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u78c1\u76d8\u635f\u574f\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"vdev \u635f\u574f\u5bfc\u81f4 zpool \u4e0d\u53ef\u4f7f\u7528")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6dfb\u52a0\u5230 zpool \u540e\u7684 vdev \u4e0d\u80fd\u88ab\u5220\u9664")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ZIL(ZFS intent log) \u635f\u574f\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"L1ARC \u662f\u5b58\u50a8\u4e8e RAM \u7684\u8bfb\u7f13\u5b58,\u4e0d\u5e94\u8be5\u8d85\u8fc7 7/8 \u603b RAM")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"L2ARC \u662f\u5b58\u50a8\u4e8e\u78c1\u76d8\u7684\u8bfb\u7f13\u5b58")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ZIL he L2ARC \u5b58\u50a8\u4e8e SSD \u4f46\u4e0d\u5e94\u8be5\u5b58\u50a8\u4e8e\u540c\u4e00\u4e2a SSD")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ZIL \u4e3b\u8981\u7528\u4e8e\u540c\u6b65\u5199,\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"L2ARC \u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u63d0\u5347\u592a\u591a\u7684\u6027\u80fd")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u589e\u52a0 RAM \u662f\u63d0\u5347\u6027\u80fd\u7684\u6700\u597d\u65b9\u5f0f"))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/dmu.c"},"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/dmu.c"),"\nThis statistic shows ZFS DMU (Data Management Unit) operations/sec.\n",Object(l.b)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E27998_01/html/E48490/analytics__statistics__disk_zfs_dmu_operations.html"},"https://docs.oracle.com/cd/E27998_01/html/E48490/analytics__statistics__disk_zfs_dmu_operations.html")),Object(l.b)("p",null,"ARC buffer data (ABD).\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/abd.c"},"https://github.com/zfsonlinux/zfs/blob/master/module/zfs/abd.c")),Object(l.b)("p",null,"dnode\ndnode is a data structure which represents an object. An object can be a ZPL file or directory, a ZVOL volume, or several other types of internal metadata\n",Object(l.b)("a",{parentName:"p",href:"http://open-zfs.org/wiki/Documentation/DnodeSync"},"http://open-zfs.org/wiki/Documentation/DnodeSync")),Object(l.b)("h2",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://open-zfs.org/wiki/Hardware"},"Hardware"))),Object(l.b)("h2",{id:"tutor"},"Tutor"),Object(l.b)("h3",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u5de5\u4f5c\u533a\u95f4\nmkdir -p ~/temp/zfs && cd $_\n# \u4f7f\u7528\u6587\u4ef6\u4f5c\u4e3a\u5b58\u50a8, \u5b9e\u9645\u4f7f\u7528\u65f6\u5c06\u6587\u4ef6\u66ff\u6362\u4e3a\u8bbe\u5907\u5373\u53ef\nfor i in {1..4};do dd bs=1M count=256 if=/dev/zero of=disk$i; done\ndd bs=1M count=256 if=/dev/zero of=sparedisk\n")),Object(l.b)("h3",{id:"zpool"},"zpool"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u5355\u4e2a\u78c1\u76d8\u7684 Pool, \u6ca1\u6709\u6570\u636e\u5197\u4f59\nzpool create tank $PWD/disk1\nzpool list\n# \u5199\u5165\u6570\u636e, OS X \u7684\u6302\u8f7d\u70b9\u5728 /Volumes/tank, Linux \u4e3a /tank\ndd bs=1M count=64 if=/dev/random of=/tank/foo\n# \u67e5\u770b\u5199\u5165\u540e\u7684\u72b6\u6001\nzpool list tank\n# \u6e05\u9664\nzpool destroy\n\n# \u955c\u50cf Pool\nzpool create tank mirror $PWD/disk1 $PWD/disk2\nzpool status tank\ndd bs=1M count=64 if=/dev/random of=/tank/foo\n# \u4f7f disk1 \u6570\u636e\u635f\u574f\ndd bs=1M seek=10 count=1 conv=notrunc if=/dev/random of=disk1\nzpool scrub tank\nzpool status tank\n# \u53ea\u662f\u6570\u636e\u635f\u574f\u78c1\u76d8\u6ca1\u6709\u5f02\u5e38, \u53ef\u4f7f\u7528 clear \u4fee\u590d\nzpool clear tank\nzpool status tank\n# \u4f7f disk1 \u78c1\u76d8\u635f\u574f\necho > disk1\nzpool scrub tank\n# \u663e\u793a\u6709\u4e00\u4e2a\u78c1\u76d8\u4e0d\u53ef\u7528\u4f46\u4f9d\u7136\u53ef\u4ee5\u64cd\u4f5c\nzpool status tank\ndd bs=1M count=64 if=/dev/random of=/tank/bar\n# \u66ff\u6362\u635f\u574f\u7684\u78c1\u76d8\nzpool replace tank $PWD/disk1 $PWD/sparedisk\nzpool status\n# \u6269\u5bb9,\u6dfb\u52a0\u65b0\u7684\u78c1\u76d8\nzpool add tank mirror $PWD/disk3 $PWD/disk4\nzpool list\ndd bs=1M count=100 if=/dev/urandom of=/tank/bar\nzpool iostat -v tank\nzpool destroy tank\n")),Object(l.b)("h3",{id:"zfs"},"zfs"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"zpool create tank mirror $PWD/disk1 $PWD/disk2\nzfs list tank\n# \u521b\u5efa\u65b0\u7684\u6587\u4ef6\u7cfb\u7edf\nzfs create tank/joey\nzfs create tank/monica\nzfs create tank/ross\nzfs list -r tank\ndf -h |grep tank\n# \u5220\u9664\u6587\u4ef6\u7cfb\u7edf\nzfs destroy tank/ross\nzfs create tank/ross\n# \u4fee\u6539\u6302\u8f7d\u70b9\nzfs set mountpoint=$PWD/monica tank/monica\n# \u5378\u8f7d\u6587\u4ef6\u7cfb\u7edf\nzfs umount tank/joey\ndf -h |grep tank\n# \u4ece\u65b0\u6302\u8f7d\nzfs mount tank/joey\n# \u83b7\u53d6\u6240\u6709\u5c5e\u6027\n# SOURCE: '-' \u53ea\u8bfb default \u9ed8\u8ba4\u503c local \u672c\u5730\u4fee\u6539\u7684\u503c inherited \u7ee7\u627f\u81ea\u7236\u6587\u4ef6\u7cfb\u7edf\u7684\u503c temporary\nzfs get all tank/joey\nzfs get -Hp -o name,property,value used,available tank/joey\n\n\n# \u9650\u5236\u914d\u989d\nzfs set quota=50m tank/joey\n# \u8bbe\u7f6e\u9884\u7559\nzfs set reservation=25m tank/joey\nzfs get -r quota tank\nzfs get -r reservation tank\n\n# \u542f\u7528\u538b\u7f29\nzfs set compression=lz4 tank/joey\nzfs get -r compression tank\n# \u4f7f\u7528\u8bcd\u5178\u6d4b\u8bd5\u538b\u7f29\n# \u5728 Ubuntu/Debian \u4e0b\u9700\u8981\u5b89\u88c5 wordlist,\u4f8b\u5982 apt-get install wamerican-large\ncp /usr/share/dict/words /tank/ross/\ncp /usr/share/dict/words /tank/joey/\nzfs list -o name,used,compressratio,compression tank/{joey,ross}\n")),Object(l.b)("h2",{id:"share"},"share"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8 nfs\napk add nfs-utils\nservice nfs start\n\n# \u4f1a\u4fee\u6539 /var/lib/nfs/etab \u914d\u7f6e\u6587\u4ef6\nzfs set sharenfs=on data/share\n# samba\n# zfs set sharesmb=on data/share\n# \u8bbe\u7f6e\u989d\u5916\u9009\u9879\nzfs set sharenfs="rw=@192.168.11.0/24" data/share\n# \u5171\u4eab\u662f\u6240\u6709\u5b9a\u4e49\u4e86\u5171\u4eab\u5c5e\u6027\u7684\u5377\nzfs share -a\n# \u542f\u52a8\u65f6\u6267\u884c zfs share -a\nrc-update add zfs-share\n\n# \u67e5\u770b\u6240\u6709\u7684\u5171\u4eab\u72b6\u6001\nzfs list -o name,sharenfs\n\n# \u53d6\u6d88\u6240\u6709\u5171\u4eab\nzfs unshare -a\n')),Object(l.b)("h2",{id:"\u7ba1\u7406\u8fd0\u7ef4"},"\u7ba1\u7406\u8fd0\u7ef4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"zpool status -x\n# \u8fdb\u884c\u6570\u636e\u6e05\u7406\u64cd\u4f5c\nzpool scrub tank\n# \u67e5\u770b scrub \u72b6\u6001\nzpool status\n# io \u7edf\u8ba1, \u95f4\u9694 5s\nzpool iostat -v 5\n# \u4ece pool \u4e2d\u79fb\u9664\u8bbe\u5907, \u53ea\u80fd\u79fb\u9664 \u672a\u4f7f\u7528\u7684\u70ed\u5907, \u7f13\u5b58, \u9876\u5c42\u8bbe\u5907, \u65e5\u5fd7\u8bbe\u5907\nzpool remove main device\n# \u6dfb\u52a0\u9876\u5c42\u8bbe\u5907\nzpool add main raidz dev1 dev2\n# \u6dfb\u52a0\u7f13\u5b58\nzpool add main cache dev\n# -f \u683c\u5f0f\u5316\nsudo zpool add main -f cache /dev/disk/by-id/wwn-0x500000000abcd\n\n# \u67e5\u770b\u538b\u7f29\u4fe1\u606f\n# compressratio, compression, refcompressratio\nzfs get all main/archive | grep com\n# \u67e5\u770b\u538b\u7f29\u540e\u7684\u5927\u5c0f\ndu -h .\n# \u67e5\u770b\u5b9e\u9645\u5927\u5c0f\ndu --apparent-size -h .\n")),Object(l.b)("h2",{id:"zfs-vs-\u786c\u4ef6-raid"},"ZFS vs \u786c\u4ef6 RAID"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ZFS \u6709\u6821\u9a8c\u548c,\u548c\u53ef\u907f\u514d\u4f4d\u7ffb\u8f6c\u7b49\u95ee\u9898,\u800c RAID \u4e3b\u8981\u7528\u4e8e\u907f\u514d\u6574\u4e2a\u78c1\u76d8\u7684\u635f\u574f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ZFS \u53ea\u9700\u8981 HBAs (host bus adapter ) \u800c\u4e0d\u9700\u8981 RAID \u63a7\u5236\u5668")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6700\u591a\u53ea\u9700\u8981 Z2, Z3 \u5f88\u5c11\u4f7f\u7528,\u5e76\u4e14\u53ef\u80fd\u4f1a\u6709\u95ee\u9898,\u6709\u5176\u4ed6\u7684\u529e\u6cd5\u6765\u907f\u514d\u53ef\u80fd\u7684\u9519\u8bef")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ZFS \u5e76\u4e0d\u662f RAID, \u800c\u662f\u4e00\u4e2a\u8f6f\u4ef6,\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ZFS \u91cd\u5efa\u6bd4 RAID \u66f4\u5feb,\u4f8b\u5982 1TB \u7684\u4e91\u76d8,\u5b9e\u9645\u6570\u636e\u53ea\u6709 100MB, \u90a3\u4e48 ZFS \u53ea\u9700\u8981 100MB \u7684 IO, \u800c RAID \u9700\u8981 1TB \u7684 IO.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"scrub \u662f\u7528\u6765\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u7684,\u800c\u4e0d\u662f\u4fdd\u8bc1\u78c1\u76d8\u5065\u5eb7\u7684.\u4e0d\u662f\u81ea\u52a8\u7684,\u9700\u8981\u5b9a\u65f6\u8c03\u5ea6.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'"PFA"s, as in Pre-Failure Alerts')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://www.reddit.com/r/storage/comments/3jcg2r/zfs_vs_raid6/"},"ZFS vs RAID6")))),Object(l.b)("h2",{id:"\u52a0\u5bc6"},"\u52a0\u5bc6"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://blog.heckel.xyz/2017/01/08/zfs-encryption-openzfs-zfs-on-linux/"},"https://blog.heckel.xyz/2017/01/08/zfs-encryption-openzfs-zfs-on-linux/"),"\n",Object(l.b)("a",{parentName:"p",href:"https://www.rolando.cl/blog/2017/06/13/playing-with-zfs-encryption/"},"https://www.rolando.cl/blog/2017/06/13/playing-with-zfs-encryption/"),"\n",Object(l.b)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=14591452"},"https://news.ycombinator.com/item?id=14591452")),Object(l.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://blog.delphix.com/matt/2014/06/06/zfs-stripe-width/"},"ZFS RAIDZ stripe width, or: How I Learned to Stop Worrying and Love RAIDZ")),Object(l.b)("li",{parentName:"ul"},"[Getting the Most out of ZFS Pools]","(Getting the Most out of ZFS Pools)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://constantin.glez.de/blog/2010/06/closer-look-zfs-vdevs-and-performance"},"A Closer Look at ZFS, Vdevs and Performance")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.freebsd.org/ZFSTuningGuide"},"FreeBSD ZFS Tuning Guide")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://docs.oracle.com/cd/E19253-01/819-5461/index.html"},"ZFS Administration Guide")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blogs.oracle.com/video/entry/becoming_a_zfs_ninja"},"Becoming a ZFS Ninja (video)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://forums.freenas.org/index.php?threads/slideshow-explaining-vdev-zpool-zil-and-l2arc-for-noobs.7775/"},"Slideshow explaining VDev, zpool, ZIL and L2ARC and other newbie mistakes!")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.bsdnow.tv/tutorials/zfs"},"A Crash Course on ZFS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=uT2i2ryhCio"},"ZFS: The Last Word in File Systems - Part 1 (video)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://calomel.org/zfs_raid_speed_capacity.html"},"ZFS Raidz Performance, Capacity and Integrity")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://louwrentius.com/the-hidden-cost-of-using-zfs-for-your-home-nas.html"},"The 'Hidden' Cost of Using ZFS for Your Home NAS"))),Object(l.b)("h2",{id:"ssd"},"SSD"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://linuxhint.com/configuring-zfs-cache/"},"https://linuxhint.com/configuring-zfs-cache/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.reddit.com/r/zfs/comments/7bd797/ssd_caching/"},"https://www.reddit.com/r/zfs/comments/7bd797/ssd_caching/")),Object(l.b)("li",{parentName:"ul"},"SLOG is a write cache. This is the one you'd want to mirror and you'd also want to use an SSD that can finish in flight writes in the case of a power outage"),Object(l.b)("li",{parentName:"ul"},"Something with a battery or capacitor")))}p.isMDXComponent=!0}}]);