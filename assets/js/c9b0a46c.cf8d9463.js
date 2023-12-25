/*! For license information please see c9b0a46c.cf8d9463.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40609],{99162:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var i=s(11527),r=s(47214);const l={title:"ZFS \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},d="ZFS \u5e38\u89c1\u95ee\u9898",c={id:"os/linux/fs/zfs/zfs-faq",title:"ZFS \u5e38\u89c1\u95ee\u9898",description:"- renameat2/overlayfs ZFS v2.2+",source:"@site/../notes/os/linux/fs/zfs/zfs-faq.md",sourceDirName:"os/linux/fs/zfs",slug:"/os/linux/fs/zfs/faq",permalink:"/notes/os/linux/fs/zfs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/zfs/zfs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"ZFS \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"dRAID",permalink:"/notes/os/linux/fs/zfs/draid"},next:{title:"Inside",permalink:"/notes/os/linux/fs/zfs/inside"}},o={},t=[{value:"\u5982\u4f55\u9009\u62e9 RAIDZ/mirror/dRAID",id:"\u5982\u4f55\u9009\u62e9-raidzmirrordraid",level:2},{value:"\u4fee\u590d",id:"\u4fee\u590d",level:2},{value:"raidz1 to raidz2",id:"raidz1-to-raidz2",level:2},{value:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f",id:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f",level:2},{value:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162",id:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162",level:2},{value:"cannot create &#39;/data/db&#39;: pool must be upgraded to set this property or value",id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value",level:2},{value:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",level:2},{value:"zfs compression vs application compression",id:"zfs-compression-vs-application-compression",level:2},{value:"ZFS \u7f13\u5b58",id:"zfs-\u7f13\u5b58",level:2},{value:"ZFS \u6027\u80fd\u4f30\u7b97",id:"zfs-\u6027\u80fd\u4f30\u7b97",level:2},{value:"zfs import",id:"zfs-import",level:2},{value:"\u5173\u95ed\u6240\u6709 atime",id:"\u5173\u95ed\u6240\u6709-atime",level:2},{value:"zvol vs zfs",id:"zvol-vs-zfs",level:2},{value:"High System Usage",id:"high-system-usage",level:2},{value:"zfs list slow",id:"zfs-list-slow",level:2},{value:"ZFS vs Hard RAID",id:"zfs-vs-hard-raid",level:2},{value:"z0 is write-protected but explicit read-write mode requested",id:"z0-is-write-protected-but-explicit-read-write-mode-requested",level:2},{value:"Superblock needs_recovery flag is clear, but journal has data.",id:"superblock-needs_recovery-flag-is-clear-but-journal-has-data",level:2},{value:"is in use and contains a unknown filesystem",id:"is-in-use-and-contains-a-unknown-filesystem",level:2},{value:"zvol \u6269\u5bb9",id:"zvol-\u6269\u5bb9",level:2},{value:"cannot label &#39;sdf&#39;: failed to detect device partitions on &#39;/dev/sdf1&#39;: 19",id:"cannot-label-sdf-failed-to-detect-device-partitions-on-devsdf1-19",level:2},{value:"Missing /dev/zvol",id:"missing-devzvol",level:2},{value:"cannot trim: no devices in pool support trim operations",id:"cannot-trim-no-devices-in-pool-support-trim-operations",level:2},{value:"retry UNAVAL",id:"retry-unaval",level:2},{value:"remount zvol rw",id:"remount-zvol-rw",level:2},{value:"zfs destory container snapshots",id:"zfs-destory-container-snapshots",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"zfs-\u5e38\u89c1\u95ee\u9898",children:"ZFS \u5e38\u89c1\u95ee\u9898"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["renameat2/overlayfs ZFS v2.2+\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/openzfs/zfs/commit/dbf6108b4df92341eea40d0b41792ac16eabc514",children:"zfs_rename: support RENAME_ flags"})}),"\n"]}),"\n"]}),"\n"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"abbr."}),(0,i.jsx)(n.th,{children:"stand for"}),(0,i.jsx)(n.th,{children:"cn"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SPA"}),(0,i.jsx)(n.td,{children:"Storage Pool Allocator"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vdev"}),(0,i.jsx)(n.td,{children:"Virtual Device"}),(0,i.jsx)(n.td,{children:"\u865a\u62df\u8bbe\u5907"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ZIL"}),(0,i.jsx)(n.td,{children:"ZFS Intent Log"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TXG"}),(0,i.jsx)(n.td,{children:"Transaction Group"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SLOG"}),(0,i.jsx)(n.td,{children:"Sync Log"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ARC"}),(0,i.jsx)(n.td,{children:"Adaptive Replacement Cache"}),(0,i.jsx)(n.td,{children:"\u81ea\u9002\u5e94\u66ff\u6362\u7f13\u5b58"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"L2ARC"}),(0,i.jsx)(n.td,{children:"Level 2 ARC"}),(0,i.jsx)(n.td,{children:"\u4e8c\u7ea7 ARC"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zfs get all | grep -E 'used\\b|logicalused|compression|\\bcompress'\n\nzfs get all | grep -E 'sync'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u9009\u62e9-raidzmirrordraid",children:"\u5982\u4f55\u9009\u62e9 RAIDZ/mirror/dRAID"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["RAIDZ - striped vdevs - RAID5/6/7\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["66%\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"3wide RADIZ1"}),"\n",(0,i.jsx)(n.li,{children:"6wide RADIZ2"}),"\n",(0,i.jsx)(n.li,{children:"9wide RADIZ3"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"N*W RAIDZx"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"N group"}),"\n",(0,i.jsx)(n.li,{children:"W wide"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u80fd/\u4e0d\u65b9\u4fbf \u6269\u5bb9"}),"\n",(0,i.jsx)(n.li,{children:"\u56fa\u5b9a parity"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["mirror - RAID10\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"50%"}),"\n",(0,i.jsx)(n.li,{children:"degraded \u6027\u80fd\u66f4\u597d"}),"\n",(0,i.jsx)(n.li,{children:"\u6062\u590d\u5feb"}),"\n",(0,i.jsx)(n.li,{children:"\u6269\u5bb9\u65b9\u4fbf"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/notes/os/linux/fs/zfs/draid",children:"dRAID"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u66f4\u7075\u6d3b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u53c2\u8003"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["2015 ",(0,i.jsx)(n.a,{href:"https://jrs-s.net/2015/02/06/zfs-you-should-use-mirror-vdevs-not-raidz/",children:"ZFS: You should use mirror vdevs, not RAIDZ."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["by Author of ",(0,i.jsx)(n.a,{href:"https://github.com/jimsalterjrs/sanoid",children:"jimsalterjrs/sanoid"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4fee\u590d",children:"\u4fee\u590d"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# -t temporary \u91cd\u542f\u540e\u6062\u590d\nzpool offline main scsi-0000\nzpool replace main scsi-0000 scsi-1111\n\n# -e \u5982\u679c\u65b0\u7684\u786c\u76d8\u66f4\u5927\nzpool online main scsi-1111\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"resilver"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"group \u91cc\u5168\u90e8\u626b"}),"\n",(0,i.jsx)(n.li,{children:"\u4f1a\u5f88\u6162"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"raidz1-to-raidz2",children:"raidz1 to raidz2"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4e0d\u53ef\u4ee5"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://serverfault.com/a/799952/190601",children:"https://serverfault.com/a/799952/190601"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f",children:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b\u538b\u7f29\u540e\u7684\u5927\u5c0f\ndu -h .\n# \u67e5\u770b\u5b9e\u9645\u5927\u5c0f\ndu --apparent-size -h .\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162",children:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162"}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u5173\u95ed atime"}),"\n",(0,i.jsx)(n.h2,{id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value",children:"cannot create '/data/db': pool must be upgraded to set this property or value"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool upgrade -a\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",children:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["compressratio - \u538b\u7f29\u7387\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1/compressratio = \u538b\u7f29\u6bd4"}),"\n",(0,i.jsx)(n.li,{children:"compressratio=logicalused/used"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"used - \u5b9e\u9645\u5360\u7528\u7a7a\u95f4"}),"\n",(0,i.jsx)(n.li,{children:"logicalused - \u903b\u8f91\u5360\u7528\u7a7a\u95f4"}),"\n",(0,i.jsxs)(n.li,{children:["\u5360\u7528\u7a7a\u95f4\u4e5f\u548c\u4ec0\u4e48\u65f6\u5019\u5f00\u542f\u7684 compression \u6709\u5173\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f00\u542f compression \u4e4b\u540e\u65b0\u5199\u5165\u6570\u636e\u4f1a\u538b\u7f29"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u5360\u7528\u7a7a\u95f4\u4f1a\u5bf9\u9f50\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u6bd4\u903b\u8f91\u66f4\u591a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zfs get all | grep -E 'used\\b|logicalused|compression|\\bcompress'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"data                 used                  884G                  -\ndata                 compressratio         1.47x                 -\ndata                 compression           lz4                   local\ndata                 logicalused           1.24T                 -\n"})}),"\n",(0,i.jsx)(n.h2,{id:"zfs-compression-vs-application-compression",children:"zfs compression vs application compression"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["zfs \u538b\u7f29\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5168\u91cf\u538b\u7f29\uff0c\u7b80\u5355\u6613\u7528"}),"\n",(0,i.jsx)(n.li,{children:"\u538b\u7f29\u7387\u53d7 block \u5927\u5c0f\u5f71\u54cd"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 lz4\u3001zstd"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5e94\u7528 \u538b\u7f29\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6d89\u53ca\u5230\u5e94\u7528\u529f\u80fd\u662f\u5426\u652f\u6301"}),"\n",(0,i.jsxs)(n.li,{children:["\u538b\u7f29\u7684\u8303\u56f4\u548c ZFS \u538b\u7f29\u7684\u8303\u56f4\u4e0d\u540c\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e00\u822c\u5e94\u7528\u53ea\u538b\u7f29 \u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u538b\u7f29\u7387 \u4e0d\u4e00\u5b9a\u5c31\u6bd4 ZFS \u538b\u7f29\u7387 \u9ad8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["zfs vs pg\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["PostgreSQL 14 \u652f\u6301 LZ4 TOAST\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"default_toast_compression=lz4"}),"\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"col1 text COMPRESSION lz4"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"PostgreSQL 15 \u652f\u6301 LZ4 WAL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"zfs-\u7f13\u5b58",children:"ZFS \u7f13\u5b58"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ZIL - ZFS Intent Log - \u7f13\u51b2 WRITE \u64cd\u4f5c"}),"\n",(0,i.jsxs)(n.li,{children:["SLOG - Separate Intent Log\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"zpool add tank log"})}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u9700\u8981\u7279\u522b\u5927\u7684\u8bbe\u5907 - \u4f8b\u5982 16G, 64G SSD \u8db3\u77e3"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ARC - \u7f13\u5b58 READ \u64cd\u4f5c - Adaptive Replacement Cache\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L2ARC\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"zpool add tank cache"})}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u9700\u8981\u7279\u522b\u5927\u7684\u8bbe\u5907 - \u4f8b\u5982 128G SSD"}),"\n",(0,i.jsx)(n.li,{children:"\u7cfb\u7edf\u91cd\u542f\u540e\u7f13\u5b58\u4f9d\u7136\u53ef\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zpool add tank log ada3             # \u6dfb\u52a0 ZIL - \u5355\u78c1\u76d8\nzpool add tank log mirror ada3 ada4 # \u6dfb\u52a0 ZIL - RAID1 - \u574f\u4e00\u4e2a SSD \u5199\u5165\u7684\u6570\u636e\u4e5f\u4e0d\u4f1a\u4e22\nzpool add tank cache ada3           # \u6dfb\u52a0 L2ARC\n"})}),"\n",(0,i.jsx)(n.h2,{id:"zfs-\u6027\u80fd\u4f30\u7b97",children:"ZFS \u6027\u80fd\u4f30\u7b97"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8c03\u4f18\u5e94\u5148\u627e\u5230\u74f6\u9888\u5728\u54ea\u91cc\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["RAIDZn \u987a\u5e8f 4KB \u8bfb\u53d6 - \u65e0 cache \u573a\u666f\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["RAIDZ1 - ",(0,i.jsx)(n.code,{children:"N/(N-1) * IOPS"})]}),"\n",(0,i.jsxs)(n.li,{children:["RAIDZ2 - ",(0,i.jsx)(n.code,{children:"N/(N-2) * IOPS"})]}),"\n",(0,i.jsxs)(n.li,{children:["RAIDZ3 - ",(0,i.jsx)(n.code,{children:"N/(N-3) * IOPS"})]}),"\n",(0,i.jsx)(n.li,{children:"\u6709 cache \u65f6\uff0c\u5219\u4e0a\u9650\u4e3a cache \u78c1\u76d8\u7684 IOPS"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5199\u5165\u6027\u80fd\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65e0\u6cd5\u76f4\u63a5\u4f30\u7b97\uff0czfs \u5185\u90e8 zil \u4e3a\u5f02\u6b65\u5199\u5165"}),"\n",(0,i.jsx)(n.li,{children:"\u989d\u5916\u7684 ZIL \u8bbe\u5907\u53ef\u63d0\u5347 write \u6027\u80fd"}),"\n",(0,i.jsx)(n.li,{children:"\u9ed8\u8ba4\u4f1a\u5728\u6bcf\u4e2a\u78c1\u76d8\u9884\u7559\u7a7a\u95f4\u5b58\u50a8 ZIL"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6027\u80fd\u5f71\u54cd\u56e0\u7d20\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"recordsize - \u9ed8\u8ba4 128k"}),"\n",(0,i.jsx)(n.li,{children:"compression"}),"\n",(0,i.jsx)(n.li,{children:"ashift"}),"\n",(0,i.jsx)(n.li,{children:"dedup - \u9ed8\u8ba4\u5173\u95ed - \u7279\u6b8a\u573a\u666f\u53bb\u91cd\u80fd\u63d0\u5347\u6027\u80fd"}),"\n",(0,i.jsx)(n.li,{children:"atime - \u9ed8\u8ba4\u5f00\u542f - \u4e00\u822c\u4e0d\u9700\u8981\uff0c\u53ef\u5173\u95ed\u63d0\u5347\u8bfb\u53d6\u6027\u80fd"}),"\n",(0,i.jsx)(n.li,{children:"logbias - \u9ed8\u8ba4 latency, \u53ef\u8bbe\u7f6e\u4e3a throughput, \u51cf\u5c11\u4f7f\u7528\u989d\u5916 zil \u8bbe\u5907"}),"\n",(0,i.jsxs)(n.li,{children:["sync\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5173\u95ed\u6700\u591a\u4e22\u5931 30s \u6570\u636e - \u5982\u679c\u573a\u666f\u5141\u8bb8\u4e22\u5931\uff0c\u5219\u4e0d\u5f71\u54cd"}),"\n",(0,i.jsx)(n.li,{children:"\u901a\u8fc7 UPS \u786e\u4fdd\u5b58\u50a8 \u6bd4 \u7f51\u7edc\u540e\u5f02\u5e38 \u53ef\u8003\u8651\u5173\u95ed sync"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"primarycache"}),"\n",(0,i.jsx)(n.li,{children:"secondarycache"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"zfs-import",children:"zfs import"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6b63\u5e38\u7cfb\u7edf\u542f\u52a8\u4f1a\u4ece\u7f13\u5b58 \u5bfc\u5165 - zfs import -c /etc/zfs/zpool.cache"}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u7f13\u5b58\u4e22\u5931\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u641c\u7d22\u78c1\u76d8\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f8b\u5982: \u66f4\u6362\u4e86\u7cfb\u7edf"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openzfs.github.io/openzfs-docs/man/8/zpool-import.8.html",children:"zpool-import.8"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b \u53ef\u5bfc\u5165 \u7684 pool\n# \u4f7f\u7528 lsblk \u641c\u7d22\nzpool import\n# \u6267\u884c\u5bfc\u5165 - \u5bfc\u5165\u6240\u7684\nzpool import -a\n\n# \u624b\u52a8\u6307\u5b9a\u641c\u7d22\u76ee\u5f55\nzpool import -d /dev/disk/by-id\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u95ed\u6240\u6709-atime",children:"\u5173\u95ed\u6240\u6709 atime"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zfs get atime | grep '\\son\\s' | cut -d ' ' -f 1 | xargs -n1 sudo zfs set atime=off\n"})}),"\n",(0,i.jsx)(n.h1,{id:"atimeon-temporary",children:"atime=on temporary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/12382",children:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/12382"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/openzfs/zfs/issues/7947",children:"https://github.com/openzfs/zfs/issues/7947"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",metastring:"title=/etc/conf.d/zfs",children:'MOUNT_EXTRA_OPTIONS="-o atime=off"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"zvol-vs-zfs",children:"zvol vs zfs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["zvol - \u5757\u8bbe\u5907\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"raidz\u3001\u538b\u7f29"}),"\n",(0,i.jsx)(n.li,{children:"\u6ca1\u6709\u6240\u6709 zfs \u4f34\u968f\u7684\u80fd\u529b"}),"\n",(0,i.jsx)(n.li,{children:"blocksize=8k"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["zfs - \u6587\u4ef6\u7cfb\u7edf - dataset\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5feb\u7167\u3001\u514b\u9686"}),"\n",(0,i.jsxs)(n.li,{children:["\u6587\u4ef6\u7cfb\u7edf\u6709\u4e00\u5b9a\u7279\u6027 - \u4e5f\u6709\u7f3a\u9677\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:"\u4e3b\u8981\u7f3a\u9677: \u4e0d\u652f\u6301 rename2/overlay"})," - ZFS v2.2+"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"recordsize=128k"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"high-system-usage",children:"High System Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"z_wr_iss"}),"\n",(0,i.jsx)(n.li,{children:"spl_dynamic_tas"}),"\n",(0,i.jsx)(n.li,{children:"z_wr_iss_h"}),"\n",(0,i.jsx)(n.li,{children:"l2arc_feed"}),"\n",(0,i.jsx)(n.li,{children:"z_wr_int_h"}),"\n",(0,i.jsx)(n.li,{children:"rcu_sched"}),"\n",(0,i.jsx)(n.li,{children:"txg_sync"}),"\n",(0,i.jsx)(n.li,{children:"z_ioctl_int"}),"\n",(0,i.jsx)(n.li,{children:"kworker/0:1-events"}),"\n",(0,i.jsx)(n.li,{children:"z_null_iss"}),"\n",(0,i.jsx)(n.li,{children:"z_null_int"}),"\n",(0,i.jsx)(n.li,{children:"dp_sync_taskq"}),"\n",(0,i.jsx)(n.li,{children:"z_wr_int"}),"\n",(0,i.jsx)(n.li,{children:"arc_reap"}),"\n",(0,i.jsx)(n.li,{children:"ksoftirqd"}),"\n",(0,i.jsx)(n.li,{children:"dbuf_evict"}),"\n",(0,i.jsx)(n.li,{children:"mmp"}),"\n",(0,i.jsx)(n.li,{children:"migration/0"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"zfs-list-slow",children:"zfs list slow"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["dataset \u591a\u4e86\u540e ",(0,i.jsx)(n.code,{children:"zfs list"})," \u975e\u5e38\u6162"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"time zfs list | wc -l\n\n# docker zfs volume \u4f7f\u7528\u7684\u547d\u4ee4\nzfs list -s name -o name,guid,available -H -p\nzfs list -r -t all -Hp -o name,origin,used,available,mountpoint,compression,type,volsize,quota,referenced,written,logicalused,usedbydataset main/docker\n\n# containerd\nzfs list -Hp -o name,origin,used,available,mountpoint,compression,type,volsize,quota,referenced,written,logicalused,usedbydataset data/var/k3s/snapshotter/60519\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"758\n\nreal    0m1.777s\nuser    0m0.177s\nsys     0m1.599s\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/openzfs/zfs/discussions/8898",children:"https://github.com/openzfs/zfs/discussions/8898"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"time zfs list -s name -o name,guid,available -H -p > zfs-list.txt\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"real    2m10.183s\nuser    0m3.016s\nsys     2m6.836s\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wc -l zfs-list.txt\n# 20177 zfs-list.txt\n"})}),"\n",(0,i.jsx)(n.h2,{id:"zfs-vs-hard-raid",children:"ZFS vs Hard RAID"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ZFS \u6709\u6821\u9a8c\u548c,\u548c\u53ef\u907f\u514d\u4f4d\u7ffb\u8f6c\u7b49\u95ee\u9898,\u800c RAID \u4e3b\u8981\u7528\u4e8e\u907f\u514d\u6574\u4e2a\u78c1\u76d8\u7684\u635f\u574f"}),"\n",(0,i.jsx)(n.li,{children:"ZFS \u53ea\u9700\u8981 HBAs (host bus adapter ) \u800c\u4e0d\u9700\u8981 RAID \u63a7\u5236\u5668"}),"\n",(0,i.jsx)(n.li,{children:"\u6700\u591a\u53ea\u9700\u8981 Z2, Z3 \u5f88\u5c11\u4f7f\u7528,\u5e76\u4e14\u53ef\u80fd\u4f1a\u6709\u95ee\u9898,\u6709\u5176\u4ed6\u7684\u529e\u6cd5\u6765\u907f\u514d\u53ef\u80fd\u7684\u9519\u8bef"}),"\n",(0,i.jsx)(n.li,{children:"ZFS \u5e76\u4e0d\u662f RAID, \u800c\u662f\u4e00\u4e2a\u8f6f\u4ef6,\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,i.jsx)(n.li,{children:"ZFS \u91cd\u5efa\u6bd4 RAID \u66f4\u5feb,\u4f8b\u5982 1TB \u7684\u4e91\u76d8,\u5b9e\u9645\u6570\u636e\u53ea\u6709 100MB, \u90a3\u4e48 ZFS \u53ea\u9700\u8981 100MB \u7684 IO, \u800c RAID \u9700\u8981 1TB \u7684 IO."}),"\n",(0,i.jsx)(n.li,{children:"scrub \u662f\u7528\u6765\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u7684,\u800c\u4e0d\u662f\u4fdd\u8bc1\u78c1\u76d8\u5065\u5eb7\u7684.\u4e0d\u662f\u81ea\u52a8\u7684,\u9700\u8981\u5b9a\u65f6\u8c03\u5ea6."}),"\n",(0,i.jsxs)(n.li,{children:["\u989d\u5916\u7279\u6027\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u5212\u5206\u5b58\u50a8\u7a7a\u95f4"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u6839\u636e\u5e94\u7528\u8c03\u4f18"}),"\n",(0,i.jsx)(n.li,{children:"\u52a0\u5bc6"}),"\n",(0,i.jsx)(n.li,{children:"\u589e\u91cf\u540c\u6b65"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"PFA"s, as in Pre-Failure Alerts'}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.reddit.com/r/storage/comments/3jcg2r/zfs_vs_raid6/",children:"ZFS vs RAID6"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"z0-is-write-protected-but-explicit-read-write-mode-requested",children:"z0 is write-protected but explicit read-write mode requested"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"umount /dev/z0\ne2fsck /dev/z0\nmount /dev/z0\n"})}),"\n",(0,i.jsx)(n.h2,{id:"superblock-needs_recovery-flag-is-clear-but-journal-has-data",children:"Superblock needs_recovery flag is clear, but journal has data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Buffer I/O error on dev zd0, logical block 0, lost async page write\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u78c1\u76d8\u6ee1\u4e86"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zfs list -o space,mountpoint\n"})}),"\n",(0,i.jsx)(n.h2,{id:"is-in-use-and-contains-a-unknown-filesystem",children:"is in use and contains a unknown filesystem"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"mdraid, lvm, multipath"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /proc/mdstat\n\nmdadm --stop /dev/md127\n"})}),"\n",(0,i.jsx)(n.h2,{id:"zvol-\u6269\u5bb9",children:"zvol \u6269\u5bb9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zfs get volsize data/vol      # \u5f53\u524d\nzfs set volsize=500G data/vol # \u4fee\u6539 Quota\nresize2fs /dev/zvol/data/vol  # \u6269\u5bb9 fs\n"})}),"\n",(0,i.jsx)(n.h2,{id:"cannot-label-sdf-failed-to-detect-device-partitions-on-devsdf1-19",children:"cannot label 'sdf': failed to detect device partitions on '/dev/sdf1': 19"}),"\n",(0,i.jsx)(n.h2,{id:"missing-devzvol",children:"Missing /dev/zvol"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"apk add zfs zfs-{scripts,udev}\n\nudevadm trigger\n"})}),"\n",(0,i.jsx)(n.h2,{id:"cannot-trim-no-devices-in-pool-support-trim-operations",children:"cannot trim: no devices in pool support trim operations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zpool trim data\n\nhdparm -I /dev/sda | grep -i trim # \u68c0\u67e5 TRIM \u652f\u6301\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SATA \u63a7\u5236\u5668"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/openzfs/zfs/discussions/14231",children:"https://github.com/openzfs/zfs/discussions/14231"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L2ARC device is in use as a cache"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/openzfs/zfs/issues/13108",children:"https://github.com/openzfs/zfs/issues/13108"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"retry-unaval",children:"retry UNAVAL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zpool online data DISK\nzpool clear data\nzpool scrube data # \u63a8\u8350\n"})}),"\n",(0,i.jsx)(n.h2,{id:"remount-zvol-rw",children:"remount zvol rw"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mount -o remount,rw /data/docker\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cache \u5f02\u5e38\u540e\u5bfc\u81f4 zvol \u88ab\u91cd\u65b0\u6302\u8f7d\u4e3a ro"}),"\n",(0,i.jsx)(n.li,{children:"clear cache \u7684 error \u540e\u8fd8\u662f\u65e0\u6cd5\u6302\u8f7d\uff0c\u56e0\u4e3a fs \u635f\u574f"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ansi",children:"\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5767264 starting block 14909936)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 14909936\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5898267 starting block 11927556)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 11927556\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5898258 starting block 20496389)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 20496389\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 5898266 starting block 2630818)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 2630818\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2919521 starting block 16194810)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194810\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194811\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194812\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 16194813\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2920494 starting block 14332529)\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493815)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 24493815\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493816)\x1b[0m\n\x1b[0;31mBuffer I/O error on device zd0, logical block 14332529\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 0, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 2, lost async page write\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_check_bdev_write_error:217: comm kworker/u8:0: Error while async write back metadata\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mprevious I/O error to superblock detected\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 5, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 6, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 8, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1048588, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1048589, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1466067, lost async page write\x1b[0m\n\x1b[0;31mBuffer I/O error on dev zd0, logical block 1505175, lost async page write\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493838)\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_check_bdev_write_error:217: comm VM Periodic Tas: Error while async write back metadata\x1b[0m\n\x1b[0;33mEXT4-fs warning (device zd0): \x1b[0;1mext4_end_bio:343: I/O error 3 writing to inode 2883634 starting block 24493839)\x1b[0m\n\x1b[0;31mAborting journal on device zd0-8.\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0) in ext4_convert_unwritten_io_end_vec:4859: \x1b[0;31;1mIO failure\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0mfailed to convert unwritten extents to written extents -- potential data loss!  (inode 2883634, error -5)\n\x1b[0;33mJBD2: \x1b[0;31mI/O error when updating journal superblock for zd0-8.\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_journal_check_start:83: comm k3s-server: Detected aborted journal\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mprevious I/O error to superblock detected\x1b[0m\n\x1b[0;33mEXT4-fs error (device zd0): \x1b[0;31;1mext4_journal_check_start:83: comm http-nio-8080-P: Detected aborted journal\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mI/O error while writing superblock\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31;1mRemounting filesystem read-only\x1b[0m\n\x1b[0;33mEXT4-fs (zd0): \x1b[0;31mI/O error while writing superblock\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u505c\u6b62\u670d\u52a1\u81ea\u52a8\u542f\u52a8"}),"\n",(0,i.jsx)(n.li,{children:"reboot"}),"\n",(0,i.jsx)(n.li,{children:"fsck"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"umount /dev/zd0\nfsck -y /dev/zd0\nmount -a\n\n# ensure mount point working as expected\ntouch /data/docker/test\n\n# start service\n"})}),"\n",(0,i.jsx)(n.h2,{id:"zfs-destory-container-snapshots",children:"zfs destory container snapshots"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zfs list > zfs.txt\n# main/1poezhz45yv210xqwve9vft0d\ngrep -E '^main/\\w{25}\\W' zfs.txt | cut -f 1 -d ' ' | xargs -n 1 sudo zfs destroy -r -R\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,n,s)=>{var i=s(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,s){var i,l={},t=null,a=null;for(i in void 0!==s&&(t=""+s),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,i)&&!o.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:r,type:e,key:t,ref:a,props:l,_owner:c.current}}n.Fragment=l,n.jsx=t,n.jsxs=t},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var i=s(50959);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);