/*! For license information please see 6ab956cb.370957a2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75700],{67892:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var d=s(2488),t=s(62780);const i={title:"Filesystem"},l="Filesystem",r={id:"devops/storage/fs/README",title:"Filesystem",description:"- \u5728 Mac \u4e0b\u53ef\u901a\u8fc7\u865a\u62df\u673a\u6765\u683c\u5f0f\u5316\u78c1\u76d8",source:"@site/../notes/devops/storage/fs/README.md",sourceDirName:"devops/storage/fs",slug:"/devops/storage/fs/",permalink:"/notes/devops/storage/fs/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/storage/fs/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Filesystem"},sidebar:"docs",previous:{title:"LUKS",permalink:"/notes/devops/storage/encryption/luks"},next:{title:"DFS",permalink:"/notes/devops/storage/fs/dfs"}},c={},h=[{value:"\u57fa\u51c6\u6d4b\u8bd5",id:"\u57fa\u51c6\u6d4b\u8bd5",level:2},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",level:2},{value:"diskutil",id:"diskutil",level:2},{value:"OS X",id:"os-x",level:2},{value:"\u7279\u6b8a\u7279\u6027",id:"\u7279\u6b8a\u7279\u6027",level:2},{value:"FAQ",id:"faq",level:2},{value:"disk vs rdisk on BSD",id:"disk-vs-rdisk-on-bsd",level:3},{value:"\u6587\u4ef6\u65f6\u95f4",id:"\u6587\u4ef6\u65f6\u95f4",level:3}];function x(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"filesystem",children:"Filesystem"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5728 Mac \u4e0b\u53ef\u901a\u8fc7\u865a\u62df\u673a\u6765\u683c\u5f0f\u5316\u78c1\u76d8"}),"\n",(0,d.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,d.jsx)(e.a,{href:"https://rufus.akeo.ie/",children:"rufus"})," \u5236\u4f5c Windows \u542f\u52a8\u76d8"]}),"\n",(0,d.jsx)(e.li,{children:"CHS - \u67f1\u9762-\u78c1\u5934-\u6247\u533a - Cylinder-head-sector"}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://wiki.archlinux.org/index.php/Solid_State_Drives",children:"Solid State Drives"})}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Flash_file_system",children:"Flash file system"})}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://unix.stackexchange.com/questions/198590",children:"https://unix.stackexchange.com/questions/198590"})}),"\n",(0,d.jsxs)(e.li,{children:["\u9488\u5bf9\u95ea\u5b58\u4f18\u5316\u7684\u6587\u4ef6\u7cfb\u7edf\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"APFS"}),"\n",(0,d.jsx)(e.li,{children:"exFAT"}),"\n",(0,d.jsx)(e.li,{children:"F2FS"}),"\n",(0,d.jsx)(e.li,{children:"JFFS\u3001JFFS2"}),"\n",(0,d.jsx)(e.li,{children:"ZFS - \u5229\u7528 SSD \u7f13\u5b58\u3001\u65e5\u5fd7"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\u865a\u62df\u5316\u76f8\u5173\u7279\u6027\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["COW\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"btrfs, zfs"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["holes\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"ext2, ext3"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:"Snapshot"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["XFS\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u6162"}),"\n",(0,d.jsx)(e.li,{children:"\u57fa\u4e8e\u65e5\u5fd7"}),"\n",(0,d.jsx)(e.li,{children:"\u8db3\u591f\u7a33\u5b9a,\u9002\u5408\u751f\u4ea7,\u4f7f\u7528\u6700\u4e3a\u5e7f\u6cdb"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["Btrfs\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u6700\u5feb"}),"\n",(0,d.jsx)(e.li,{children:"CopyOnWrite"}),"\n",(0,d.jsx)(e.li,{children:"\u652f\u6301\u5199\u5feb\u7167"}),"\n",(0,d.jsx)(e.li,{children:"\u652f\u6301 XATTRs \u548c inline data"}),"\n",(0,d.jsx)(e.li,{children:"\u652f\u6301\u70ed fsck"}),"\n",(0,d.jsx)(e.li,{children:"Ceph \u53ef\u540c\u65f6\u5199\u65e5\u5fd7\u548c\u5bf9\u8c61\u6570\u636e"}),"\n",(0,d.jsx)(e.li,{children:"\u6b63\u5728\u8d8b\u4e8e\u7a33\u70b9\u548c\u751f\u4ea7"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["Ext4\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u9002\u5408\u751f\u4ea7"}),"\n",(0,d.jsx)(e.li,{children:"\u57fa\u4e8e\u65e5\u5fd7"}),"\n",(0,d.jsx)(e.li,{children:"\u6587\u4ef6\u540d\u6709\u957f\u5ea6\u9650\u5236"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/F2FS",children:"F2FS"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["Linux \u5185\u6838\u652f\u6301 - v3.8 - 2010-12-20\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"5.6+ \u652f\u6301\u538b\u7f29 - LZO\u3001LZ4"}),"\n",(0,d.jsx)(e.li,{children:"5.7+ \u652f\u6301 zstd"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:"\u9488\u5bf9 \u95ea\u5b58 \u4f18\u5316 - SSD\u3001TF\u3001USB"}),"\n",(0,d.jsx)(e.li,{children:"\u4e3b\u6d41 Android \u624b\u673a\u5747\u4f7f\u7528\u8be5\u7cfb\u7edf"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/List_of_cryptographic_file_systems",children:"List of cryptographic file systems"})}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/List_of_file_systems",children:"List of file systems"})}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Comparison_of_file_systems",children:"Comparison of file system"})}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://www.howtogeek.com/howto/33552/htg-explains-which-linux-file-system-should-you-choose/",children:"Which Linux File System Should You Use?"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5982\u679c\u4e0d\u786e\u5b9a\u5c31\u7528 EXT4"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://github.com/mhx/dwarfs",children:"mhx/dwarfs"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"fast high compression read-only file system"}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://news.ycombinator.com/item?id=32216275",children:"HN"})}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"N/A"}),(0,d.jsx)(e.th,{children:"Minix"}),(0,d.jsx)(e.th,{children:"Ext"}),(0,d.jsx)(e.th,{children:"Ext2"}),(0,d.jsx)(e.th,{children:"Xia"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Max FS size"}),(0,d.jsx)(e.td,{children:"64 MB"}),(0,d.jsx)(e.td,{children:"2 GB 4 TB 2 GB"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Max file size"}),(0,d.jsx)(e.td,{children:"64 MB"}),(0,d.jsx)(e.td,{children:"2 GB 2 GB 64 MB"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Max file name"}),(0,d.jsx)(e.td,{children:"16/30 c"}),(0,d.jsx)(e.td,{children:"255 c"}),(0,d.jsx)(e.td,{children:"255 c"}),(0,d.jsx)(e.td,{children:"248 c"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"3 times support"}),(0,d.jsx)(e.td,{children:"No"}),(0,d.jsx)(e.td,{children:"No"}),(0,d.jsx)(e.td,{children:"Yes"}),(0,d.jsx)(e.td,{children:"Yes"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Extensible"}),(0,d.jsx)(e.td,{children:"No"}),(0,d.jsx)(e.td,{children:"No"}),(0,d.jsx)(e.td,{children:"Yes"}),(0,d.jsx)(e.td,{children:"No"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Var. block size"}),(0,d.jsx)(e.td,{children:"No"}),(0,d.jsx)(e.td,{children:"No"}),(0,d.jsx)(e.td,{children:"Yes"}),(0,d.jsx)(e.td,{children:"No"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"fs"}),(0,d.jsx)(e.th,{children:"create"}),(0,d.jsx)(e.th,{children:"grow"}),(0,d.jsx)(e.th,{children:"shrink"}),(0,d.jsx)(e.th,{children:"move"}),(0,d.jsx)(e.th,{children:"copy"}),(0,d.jsx)(e.th,{children:"check"}),(0,d.jsx)(e.th,{children:"label"}),(0,d.jsx)(e.th,{children:"uuid"}),(0,d.jsx)(e.th,{children:"pkgs"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"btrfs"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"btrfs-progs/btrfs-tools"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"exfat"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ext2"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"e2fsprogs"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ext2"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"e2fsprogs"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ext2"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"e2fsprogs"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"f2fs"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"f2fs-tools"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"fat16"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"dosfstools, mtools"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"fat32"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"dosfstools, mtools"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"hfs"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"hfsutils"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"hfs+"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"hfsutils"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"jfs"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"jfsutils"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"swap"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"util-linux"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"luks"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"cryptsetup, dmsetup"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"lvm2 pv"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"lvm2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"minix"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"util-linux"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"nilfs2"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"nilfs-utils/nilfs-tools"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ntfs"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"ntfs-3g/ntfsprogs"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"reiser4"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"reiser4progs"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"reiserfs"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"reiserfsprogs/reiserfs-utils"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"udf"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"udftools"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"xfs"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u274c"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"\u2705"}),(0,d.jsx)(e.td,{children:"xfsprogs, xfsdump"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u57fa\u51c6\u6d4b\u8bd5",children:"\u57fa\u51c6\u6d4b\u8bd5"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"# /dev/zero \u6700\u5feb,\u4f46\u53ef\u80fd\u4f1a\u88ab\u538b\u7f29\ntime cat /dev/zero | head -c $((1024*1024*500)) > /dev/null\nreal\t0m0.439s\nuser\t0m0.026s\nsys\t0m0.747s\n\n# /dev/urandom \u6027\u80fd\u8f83\u6162\ntime cat /dev/urandom | head -c $((1024*1024*500)) > /dev/null\nreal\t1m25.427s\nuser\t0m0.097s\nsys\t1m25.713s\n\n# openssl \u968f\u673a\u6570\u76f8\u5bf9\u66f4\u5feb\ntime openssl rand $((1024*1024*500)) | head -c $((1024*1024*500)) > /dev/null\nreal\t0m9.721s\nuser\t0m9.024s\nsys\t0m1.284s\n\n# \u76d1\u63a7 IO \u72b6\u51b5\niostat -mx -d sda 1\n\ndd bs=16M count=64 if=test of=test1 conv=fdatasync\n\n"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://romanrm.net/dd-benchmark",children:"dd benchmark"})}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u5e38\u7528\u64cd\u4f5c",children:"\u5e38\u7528\u64cd\u4f5c"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"# \u53ef\u67e5\u770b\u901f\u5ea6\npv /home/user/bigfile.iso | md5sum\n# 8.25 \u540e\u53ef\u67e5\u770b\u8fdb\u5ea6\ndd if=/dev/urandom of=/dev/null status=progress\n# urandom \u4f1a\u9650\u5236\u901f\u5ea6,\u53ef\u4ee5\u4f7f\u7528\u6587\u4ef6\u6765\u6d4b\u8bd5\ntruncat -s 10G test.data\ndd if=test.data of=/dev/null status=progress\n# \u4f3c\u4e4e\u4f1a\u66f4\u5feb\npv < /dev/sda > /dev/sdb\n# \u4f7f\u7528 PV \u76d1\u63a7\u901f\u5ea6\ndd if=/dev/urandom | pv | dd of=/dev/null\n# \u7b80\u5355\u4e00\u70b9\npv bigfile.iso | dd of=VirtualDisk.raw\n# \u5728 DD \u6267\u884c\u4ee5\u540e\u4e5f\u53ef\u4ee5\u67e5\u770b\u8fdb\u5ea6\nkill -USR1 $(pgrep ^dd)\nwatch -n5 'kill -USR1 $(pgrep ^dd)'\n# \u5728 BSD/MAC \u4e0b\u9700\u8981 INFO\nkill -INFO $(pgrep ^dd$)\n# \u540c\u4e0a\u7b80\u5355\u4e00\u70b9\npkill -usr1 dd\n\n# \u5c06\u78c1\u76d8\u5236\u4f5c\u4e3a\u955c\u50cf\u6587\u4ef6\ndd if=/dev/sdb of=./disk.img\n# \u4ece\u6587\u4ef6\u6062\u590d\u5230\u78c1\u76d8\ndd if=./disk.img of=/dev/sdb\n\n# \u6302\u8f7d smb\n# Windows \u5171\u4eab\u65e0\u5bc6\u7801\u65f6\u4f7f\u7528 guest\nmount_smbfs //guest:guest@192.168.8.1/share/ ~/mnt/share/\n# \u6216\u8005\u6302\u8f7d cifs \u4e5f\u53ef\u4ee5\nmount -t cifs -o username=guest,password=guest //192.168.8.1/share/ ~/mnt/share/\n\n# \u5982\u679c\u4f7f\u7528\u7684\u73af\u5883\u6ca1\u6709\u76f8\u5173\u7684 linux \u5de5\u5177,\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 docker\ndocker run --rm -it --privileged -v /:/host ubuntu\n\n"})}),"\n",(0,d.jsx)(e.h2,{id:"diskutil",children:"diskutil"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/diskutil.8.html",children:"diskutil.8"})}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"os-x",children:"OS X"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"# \u76f8\u5f53\u4e8e fdisk -l\ndiskutil list\n# umount \u7ecf\u5e38\u65e0\u6cd5\u76f4\u63a5\u64cd\u4f5c\ndiskutil unmount /Volumes/<\u6302\u8f7d\u540d>\ndiskutil unmountdisk /dev/disk2\n# \u683c\u5f0f\u5316\u78c1\u76d8\ndiskutil eraseDisk HFS+ DISK disk2\n# \u78c1\u76d8\u5206\u533a\ndiskutil partitionDisk disk4 1 GPT HFS+ newdisk R\n\n# \u6dfb\u52a0 ext \u7c7b\u78c1\u76d8\u64cd\u4f5c\u5de5\u5177\nbrew install e2fsprogs\nls `brew --prefix e2fsprogs`/sbin\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u7279\u6b8a\u7279\u6027",children:"\u7279\u6b8a\u7279\u6027"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["rename2\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"overlay \u4f9d\u8d56"}),"\n",(0,d.jsx)(e.li,{children:"zfs \u5c1a\u4e0d\u652f\u6301"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["clone\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"zfs \u5c1a\u4e0d\u652f\u6301"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"faq",children:"FAQ"}),"\n",(0,d.jsx)(e.h3,{id:"disk-vs-rdisk-on-bsd",children:"disk vs rdisk on BSD"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"man hdiutil"})}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)(e.p,{children:'/dev/rdisk nodes are character-special devices, but are "raw" in the BSD sense and force block-aligned I/O. They are closer to the physical disk than the buffer cache. /dev/disk nodes, on the other hand, are buffered block-special devices and are used primarily by the kernel\'s filesystem code.'}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u5373 rdisk \u51e0\u4e4e\u662f\u76f4\u63a5\u8bbf\u95ee\u7269\u7406\u8bbe\u5907,disk \u8fd8\u4f1a\u7ecf\u8fc7\u7cfb\u7edf\u7f13\u5b58.\u5728\u80fd\u4f7f\u7528 rdisk \u65f6\u4e0d\u4f7f\u7528 disk."}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"http://superuser.com/questions/631592",children:"http://superuser.com/questions/631592"})}),"\n",(0,d.jsx)(e.h3,{id:"\u6587\u4ef6\u65f6\u95f4",children:"\u6587\u4ef6\u65f6\u95f4"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["HN ",(0,d.jsx)(e.a,{href:"https://news.ycombinator.com/item?id=12555160",children:"Linus on btime: \u201cLet\u2019s wait five years\u201d (2010)"})]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u65f6\u95f4\u7f29\u5199"}),(0,d.jsx)(e.th,{children:"\u5168\u79f0"}),(0,d.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"atime"}),(0,d.jsx)(e.td,{children:"Access Time"}),(0,d.jsx)(e.td,{children:"\u8bbf\u95ee\u65f6\u95f4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ctime"}),(0,d.jsx)(e.td,{children:"Change Time"}),(0,d.jsx)(e.td,{children:"\u5f53\u8bbf\u95ee\u6743\u9650\u7b49\u4fee\u6539\u65f6,\u4f1a\u4fee\u6539\u8be5\u65f6\u95f4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mtime"}),(0,d.jsx)(e.td,{children:"Modify Time"}),(0,d.jsx)(e.td,{children:"\u5f53\u4fee\u6539\u6587\u4ef6\u5185\u5bb9\u65f6\u4f1a\u4fee\u6539\u8be5\u65f6\u95f4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"btime"}),(0,d.jsx)(e.td,{children:"Birth Time"}),(0,d.jsx)(e.td,{children:"\u521b\u5efa\u65f6\u95f4"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{style:{textAlign:"center"}}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"windows"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"linux"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"solaris"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"dragonfly"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"nacl"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"freebsd"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"darwin"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"netbsd"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"openbsd"}),(0,d.jsx)(e.th,{style:{textAlign:"center"},children:"plan9"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"atime"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"mtime"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"ctime"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713*"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"btime"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"n/a"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"n/a"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"n/a"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"n/a"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,d.jsx)(e.td,{style:{textAlign:"center"}}),(0,d.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"Windows XP \u4e0d\u652f\u6301 ctime, Vista \u4ee5\u4e0a\u652f\u6301."}),"\n",(0,d.jsxs)(e.li,{children:["\u53ef\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"stat \u6587\u4ef6\u540d"})," \u67e5\u770b"]}),"\n",(0,d.jsxs)(e.li,{children:["\u8be5\u8868\u683c\u6458\u81ea ",(0,d.jsx)(e.a,{href:"https://github.com/djherbis/times#supported-times",children:"djherbis/times"})]}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"$ stat sg_store.db\n  File: 'sg_store.db'\n  Size: 45056          \tBlocks: 88         IO Block: 4096   regular file\nDevice: 1000004h/16777220d     \tInode: 45296478    Links: 1\nAccess: (0644/-rw-r--r--)  Uid: (  501/   root)   Gid: (   20/   root)\nAccess: 2016-09-22 15:26:54.000000000 +0800\nModify: 2016-09-22 15:26:54.000000000 +0800\nChange: 2016-09-22 15:27:20.000000000 +0800\n Birth: 2016-09-21 23:05:30.000000000 +0800\n\n# \u4fee\u6539 mtime \u548c ctime\n$ touch sg_store.db\n# \u4fee\u6539 ctime\n$ chown root:root sg_store.db\n"})})]})}function j(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(x,{...n})}):x(n)}},38088:(n,e,s)=>{var d=s(96651),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var d,i={},h=null,x=null;for(d in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)l.call(e,d)&&!c.hasOwnProperty(d)&&(i[d]=e[d]);if(n&&n.defaultProps)for(d in e=n.defaultProps)void 0===i[d]&&(i[d]=e[d]);return{$$typeof:t,type:n,key:h,ref:x,props:i,_owner:r.current}}e.Fragment=i,e.jsx=h,e.jsxs=h},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>r,M:()=>l});var d=s(96651);const t={},i=d.createContext(t);function l(n){const e=d.useContext(i);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);