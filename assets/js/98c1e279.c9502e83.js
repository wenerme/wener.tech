"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86666],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return v}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,v=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return r?a.createElement(v,o(o({ref:t},d),{},{components:r})):a.createElement(v,o({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93964:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return v},metadata:function(){return g},toc:function(){return b}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&d(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),u=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const v={slug:"recover-synology",title:"\u6062\u590d\u7fa4\u6656\u6570\u636e\u76d8",tags:["AlpineLinux","\u8fd0\u7ef4"]},k=void 0,g={permalink:"/story/recover-synology",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2023/2023-05-29-recover-synology.md",source:"@site/../story/2023/2023-05-29-recover-synology.md",title:"\u6062\u590d\u7fa4\u6656\u6570\u636e\u76d8",description:"Recover Synology",date:"2023-05-29T00:00:00.000Z",formattedDate:"May 29, 2023",tags:[{label:"AlpineLinux",permalink:"/story/tags/alpine-linux"},{label:"\u8fd0\u7ef4",permalink:"/story/tags/\u8fd0\u7ef4"}],readingTime:5.3,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"recover-synology",title:"\u6062\u590d\u7fa4\u6656\u6570\u636e\u76d8",tags:["AlpineLinux","\u8fd0\u7ef4"]},prevItem:{title:"\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",permalink:"/story/sni-proxy"},nextItem:{title:"\u8fc1\u79fb\u963f\u91cc\u4e91 CDN \u5230 Cloudflare",permalink:"/story/migrate-aliyun-cdn-to-cf"}},f={authorsImageUrls:[]},b=[{value:"Recover Synology",id:"recover-synology",level:2},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:2},{value:"wrong fs type, bad option, bad superblock on /dev/mapper/vg1-volume_1",id:"wrong-fs-type-bad-option-bad-superblock-on-devmappervg1-volume_1",level:2},{value:"S.M.A.T Check",id:"smat-check",level:2},{value:"LVM Check",id:"lvm-check",level:2},{value:"mdadm check",id:"mdadm-check",level:2},{value:"BTRFS critical (device dm-1): corrupt leaf",id:"btrfs-critical-device-dm-1-corrupt-leaf",level:2},{value:"btrfs backup",id:"btrfs-backup",level:2},{value:"LV Status NOT available",id:"lv-status-not-available",level:2},{value:"WARNING: PV /dev/md127 in VG vg1 is using an old PV header, modify the VG to update.",id:"warning-pv-devmd127-in-vg-vg1-is-using-an-old-pv-header-modify-the-vg-to-update",level:2},{value:"File descriptor 63 (pipe: 111755) leaked on pvck invocation.",id:"file-descriptor-63-pipe-111755-leaked-on-pvck-invocation",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],h={toc:b},y="wrapper";function N(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.kt)(y,m(p(p({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",p({},{id:"recover-synology"}),"Recover Synology"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recover Synology from AlpineLinux"),(0,a.kt)("li",{parentName:"ul"},"btrfs report I/O Error")),(0,a.kt)("h2",p({},{id:"\u95ee\u9898"}),"\u95ee\u9898"),(0,a.kt)("p",null,"\u7fa4\u6656\u7684\u76d8\u641e\u7684\u5f88\u590d\u6742"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mdraid -> lvm -> btrfs")),(0,a.kt)("p",null,"\u53ea\u770b\u5230 btrfs \u62a5\u9519\uff08I/O Error\uff09\uff0c\u65e0\u6cd5\u4f7f\u7528\uff0c\u6ca1\u770b\u5230\u5177\u4f53\u7684\u78c1\u76d8\u9519\u8bef\uff0c\u53ea\u80fd\u9010\u7ea7\u6392\u67e5\u3002"),(0,a.kt)("p",null,"\u4e3b\u8981\u76ee\u7684\u662f\u6302\u8f7d btrfs \u6062\u590d\u6570\u636e\u3002"),(0,a.kt)("h2",p({},{id:"\u64cd\u4f5c"}),"\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"file -s /dev/sda1 # linux_raid_member\nfile -s /dev/sda2 # swap\nfile -s /dev/sda3 # \u53d1\u73b0\u662f\u7528\u7684 mdadm RAID 6\n# /dev/sda3: Linux Software RAID version 1.2 (1) UUID= name=DF:2 level=6 disks=4\n\napk add mdadm\n\nmdadm --examine --scan  # \u626b\u63cf\nmdadm --assemble --scan # \u6dfb\u52a0\ncat /proc/mdstat        # \u72b6\u6001\n\nfile -s /dev/md127 # \u53d1\u73b0\u662f LVM\n# /dev/md127: LVM2 PV (Linux Logical Volume Manager), UUID: , size: 11980386729984\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d LVM")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'apk add lvm2\n\npvscan\n# PV /dev/md127   VG vg1             lvm2 [<10.90 TiB / 604.00 MiB free]\nvgscan\n# Found volume group "vg1" using metadata type lvm2\n\nlvdisplay\nlvs\n# /dev/vg1/syno_vg_reserved_area\n# /dev/vg1/volume_1\n\nvgchange -ay vg1 # \u6fc0\u6d3b vg1\n\nfile -s /dev/vg1/volume_1 # -> /dev/mapper/vg1-volume_1\nfile -s /dev/mapper/vg1-volume_1\n# /dev/mapper/vg1-volume_1: BTRFS Filesystem label "2022.12.04-17:42:08 v42661", sectorsize 4096, nodesize 16384, leafsize 16384, UUID=, 151894196224/11979737530368 bytes used, 1 devices\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d btrfs")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add btrfs-progs btrfs-progs-extra\nmodprobe btrfs\n\nbtrfs device scan\nbtrfs filesystem show\n\nbtrfs check /dev/mapper/vg1-volume_1 # \u5c1d\u8bd5\u68c0\u6d4b\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"ERROR: errors found in fs roots\nfound 151884984320 bytes used, error(s) found\ntotal csum bytes: 2896392\ntotal tree bytes: 127860736\ntotal fs tree bytes: 99958784\ntotal extent tree bytes: 15761408\nbtree space waste bytes: 25632487\nfile data blocks allocated: 103613448192\n referenced 103061467136\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d1\u73b0\u4e0d\u5c11\u95ee\u9898")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"mount /dev/mapper/vg1-volume_1 /mnt # \u5c1d\u8bd5\u6302\u8f7d\n# wrong fs type, bad option, bad superblock on /dev/mapper/vg1-volume_1\n\ndmesg # \u5185\u6838\u65e5\u5fd7\u627e\u539f\u56e0\n# BTRFS critical (device dm-1): corrupt leaf\n\nmount -t btrfs -o recovery,ro /dev/mapper/vg1-volume_1 /mnt\n\nbtrfs check /dev/mapper/vg1-volume_1 --repair # \u5c1d\u8bd5\u4fee\u590d\uff0c\u4f46\u662f\u5931\u8d25\n# ERROR: failed to repair root items: I/O error\n\nbtrfs scrub start -Bf /dev/mapper/vg1-volume_1\n# btrfs rescue zero-log /dev/<device_name>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"smartctl \u5c1d\u8bd5\u68c0\u6d4b\u786c\u76d8\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"mdadm \u5c1d\u8bd5 resync")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65e0\u89e3, TODO")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"/dev/mapper/cachedev_0 on /volume1 type btrfs (rw,nodev,relatime,ssd,synoacl,space_cache=v2,auto_reclaim_space,metadata_ratio=50,block_group_cache_tree,subvolid=256,subvol=/@syno)\n")),(0,a.kt)("h2",p({},{id:"wrong-fs-type-bad-option-bad-superblock-on-devmappervg1-volume_1"}),"wrong fs type, bad option, bad superblock on /dev/mapper/vg1-volume_1"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"mount -t btrfs /dev/mapper/vg1-volume_1 /mnt\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-txt"}),"BTRFS: device label 2022.12.04-17:42:08 v42661 devid 1 transid 449145 /dev/mapper/vg1-volume_1 scanned by mount (4067)\nBTRFS info (device dm-1): using crc32c (crc32c-intel) checksum algorithm\nBTRFS info (device dm-1): using free space tree\nBTRFS critical (device dm-1): corrupt leaf: root=1 block=668844032 slot=1, invalid root flags, have 0x400000000 expect mask 0x1000000000001\nBTRFS error (device dm-1): read time tree block corruption detected on logical 668844032 mirror 1\nBTRFS critical (device dm-1): corrupt leaf: root=1 block=668844032 slot=1, invalid root flags, have 0x400000000 expect mask 0x1000000000001\nBTRFS error (device dm-1): read time tree block corruption detected on logical 668844032 mirror 2\nBTRFS error (device dm-1): open_ctree failed\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"btrfs check /dev/mapper/vg1-volume_1 --repair\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"ERROR: failed to repair root items: I/O error\n")),(0,a.kt)("h2",p({},{id:"smat-check"}),"S.M.A.T Check"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add smartmontools\n\nsmartctl -t long /dev/sda\nsmartctl -t long /dev/sdb\nsmartctl -t long /dev/sdc\nsmartctl -t long /dev/sdd\n\n# \u5f88\u6162\nsmartctl -l selftest /dev/sda\nsmartctl -l selftest /dev/sdb\nsmartctl -l selftest /dev/sdc\nsmartctl -l selftest /dev/sdd\n\nsmartctl -a /dev/sda\n")),(0,a.kt)("h2",p({},{id:"lvm-check"}),"LVM Check"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"vgck vg1 -v\npvck /dev/md127\n")),(0,a.kt)("h2",p({},{id:"mdadm-check"}),"mdadm check"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"4","*","10T SAS \u9700\u8981\u8dd1 8h, iostat -> ~200MB/s")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"mdadm --detail /dev/md127\nmdadm --action=check /dev/md127\n\n# \u67e5\u770b\u6709\u95ee\u9898\u7684\u5757\nwatch cat /sys/block/md127/md/mismatch_cnt\n# \u67e5\u770b\u8fdb\u5ea6\ncat /proc/mdstat\ncat /sys/block/md127/md/sync_action\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"md127: mismatch sector in range 713232-713240\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"echo idle > /sys/block/md127/md/sync_action # \u505c\u6b62 check\nmdadm --action=repair /dev/md127            # \u5c1d\u8bd5\u4fee\u590d - repair=resync\niostat -h                                   # write \u662f\u6709\u4fee\u590d\n\n# K/Sec\ncat /proc/sys/dev/raid/speed_limit_max\nsysctl dev.raid.speed_limit_max # 200000\nsysctl dev.raid.speed_limit_max=2000000\n\n# \u4e0d\u662f\u5e73\u6ed1\u9650\u901f\uff0c\u800c\u662f\u5e73\u5747 - \u56e0\u6b64 resync \u4e00\u4f1a\u513f\u6ee1\u901f\uff0c\u4e00\u4f1a\u513f 0\nsysctl dev.raid.speed_limit_max=100000 # \u5982\u679c\u89c9\u5f97\u4fee\u590d\u4e86\u95ee\u9898\uff0c\u53ef\u4ee5\u964d\u4f4e\u901f\u5ea6\uff0c\u7136\u540e\u5c1d\u8bd5\u7cfb\u7edf\u64cd\u4f5c\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://unix.stackexchange.com/a/531230/47774"}),"https://unix.stackexchange.com/a/531230/47774"))),(0,a.kt)("h2",p({},{id:"btrfs-critical-device-dm-1-corrupt-leaf"}),"BTRFS critical (device dm-1): corrupt leaf"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"BTRFS error (device dm-1): read time tree block corruption detected on logical 668844032 mirror 2\nBTRFS critical (device dm-1): corrupt leaf: root=1 block=668844032 slot=1, invalid root flags, have 0x400000000 expect mask 0x1000000000001\nBTRFS error (device dm-1): read time tree block corruption detected on logical 668844032 mirror 1\nBTRFS critical (device dm-1): corrupt leaf: root=1 block=668844032 slot=1, invalid root flags, have 0x400000000 expect mask 0x1000000000001\nBTRFS error (device dm-1): read time tree block corruption detected on logical 668844032 mirror 2\nBTRFS error (device dm-1): open_ctree failed\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"btrfs check /dev/mapper/vg1-volume_1 --repair\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-txt"}),"[1/7] checking root items\nchecksum verify failed on 711114752 wanted 0xed010ef2 found 0xb32e10d9\nchecksum verify failed on 711114752 wanted 0xed010ef2 found 0x3a406fa5\nchecksum verify failed on 711114752 wanted 0xed010ef2 found 0xb32e10d9\nCsum didn't match\nERROR: failed to repair root items: I/O error\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"BTRFS: device label 2022.12.04-17:42:08 v42661 devid 1 transid 449145 /dev/mapper/vg1-volume_1 scanned by btrfs (22854)\n")),(0,a.kt)("h2",p({},{id:"btrfs-backup"}),"btrfs backup"),(0,a.kt)("p",null,"apk add partclone"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"#btrfstune -u /dev/mapper/vg1-volume_1\n")),(0,a.kt)("p",null,(0,a.kt)("a",p({parentName:"p"},{href:"https://manpages.debian.org/jessie/partclone/partclone.btrfs.8"}),"https://manpages.debian.org/jessie/partclone/partclone.btrfs.8")),(0,a.kt)("p",null,"noerror: Instructs dd to continue operation, ignoring all read errors\nsync: Instruct dd to fill input blocks with zeroes if there were any read errors"),(0,a.kt)("p",null,"dd if=/dev/sda of=/dev/sdb1 bs=1MB conv=noerror,sync status=progress\n| gzip -c > backup.img.gz\ngunzip -c /PATH/TO/DRIVE/backup_image.img.gz | dd of=/dev/sda"),(0,a.kt)("h2",p({},{id:"lv-status-not-available"}),"LV Status NOT available"),(0,a.kt)("p",null,"\u662f\u56e0\u4e3a\u6ca1\u6709 active"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"vgchange -ay vg1\n")),(0,a.kt)("h2",p({},{id:"warning-pv-devmd127-in-vg-vg1-is-using-an-old-pv-header-modify-the-vg-to-update"}),"WARNING: PV /dev/md127 in VG vg1 is using an old PV header, modify the VG to update."),(0,a.kt)("p",null,"\u4e0d\u7ba1"),(0,a.kt)("h2",p({},{id:"file-descriptor-63-pipe-111755-leaked-on-pvck-invocation"}),"File descriptor 63 (pipe: 111755) leaked on pvck invocation."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"LVM_SUPPRESS_FD_WARNINGS=1 vgck vg1\n")),(0,a.kt)("h2",p({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/btrfs.8.html"}),"btrfs.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/btrfs-check.8.html"}),"btrfs-check.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/vgchange.8.html"}),"vgchange.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/vgck.8.html"}),"vgck.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://man7.org/linux/man-pages/man4/md.4.html"}),"md.4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/mdadm.8.html"}),"mdadm.8")),(0,a.kt)("li",{parentName:"ul"},"BTRFS: failed to read log tree",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"btrfs rescue zero-log /dev/<devicename>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.suse.com/support/kb/doc/?id=000018761"}),"https://www.suse.com/support/kb/doc/?id=000018761")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.cyberciti.biz/tips/linux-raid-increase-resync-rebuild-speed.html"}),"https://www.cyberciti.biz/tips/linux-raid-increase-resync-rebuild-speed.html"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"clean up")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk del mdadm lvm2 btrfs-progs btrfs-progs-extra\n")))}N.isMDXComponent=!0}}]);