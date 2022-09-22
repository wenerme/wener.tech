"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45529],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||l;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83133:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={title:"ext4"},f=void 0,d={unversionedId:"os/linux/fs/ext4",id:"os/linux/fs/ext4",title:"ext4",description:"ext4",source:"@site/../notes/os/linux/fs/ext4.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/ext4",permalink:"/notes/os/linux/fs/ext4",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/ext4.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656950348,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"ext4"},sidebar:"docs",previous:{title:"exFAT",permalink:"/notes/os/linux/fs/exfat"},next:{title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/linux/fs/faq"}},k={},b=[{value:"ext4",id:"ext4",level:2},{value:"\u6d4b\u8bd5 fs",id:"\u6d4b\u8bd5-fs",level:2},{value:"mke2fs.conf",id:"mke2fsconf",level:2},{value:"resize \u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570",id:"resize-\u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570",level:2},{value:"New size results in too many block group descriptors",id:"new-size-results-in-too-many-block-group-descriptors",level:2},{value:"kernel error",id:"kernel-error",level:2}],g={toc:b};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),u),l(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h2",c({},{id:"ext4"}),"ext4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"man ",(0,r.kt)("a",c({parentName:"li"},{href:"https://man7.org/linux/man-pages/man5/ext4.5.html"}),"ext4.5")),(0,r.kt)("li",{parentName:"ul"},"man ",(0,r.kt)("a",c({parentName:"li"},{href:"https://man7.org/linux/man-pages/man8/mke2fs.8.html"}),"mke2fs.8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://serverfault.com/a/496099/190601"}),"Choose block size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://linuxreviews.org/Year_2038_Timestamp_Problem"}),"https://linuxreviews.org/Year_2038_Timestamp_Problem"))))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"mkfs.ext4 \u9ed8\u8ba4 1k block - \u5bfc\u81f4\u4e0d\u80fd\u8d85\u8fc7 2T",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1k \u4e00\u822c\u7528\u4e8e U \u76d8 \u8fd9\u79cd\u5b58\u50a8\u6bd4\u8f83\u5c0f\u7684\u8bbe\u5907"))),(0,r.kt)("li",{parentName:"ul"},"inode >= 256 \u907f\u514d Y2038 \u95ee\u9898"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apk add e2fsprogs e2fsprogs-extra\n\nresize2fs -P /dev/sda3 # \u78c1\u76d8\u6700\u5c0f\u7a7a\u95f4\ntune2fs -l /dev/sda3 # \u67e5\u770b\u4fe1\u606f\ne2fsck -p /dev/sda3 # \u68c0\u6d4b\u4fee\u590d\n\nresize2fs /dev/sda3 100000 # \u7f29\u5c0f\u5206\u533a\ne2image -ra -p /dev/sda1 /dev/sdb1 # \u590d\u5236\u5206\u533a - \u53ea\u590d\u5236\u7528\u5230\u7684\u5757 - \u6548\u7387\u66f4\u9ad8\n")),(0,r.kt)("h2",c({},{id:"\u6d4b\u8bd5-fs"}),"\u6d4b\u8bd5 fs"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"truncate --size 10M test\n\nmkfs.ext4 -v test\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9 small fs type"),(0,r.kt)("li",{parentName:"ul"},"block-size 1024"),(0,r.kt)("li",{parentName:"ul"},"blocks 10240 = 10M"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927 fs blocks 10485760",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927 resize 1024 \u500d = 10240","*","1024"),(0,r.kt)("li",{parentName:"ul"},"= blocks per group ",(0,r.kt)("em",{parentName:"li"}," inodes per group = 8192"),"1280")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fs_types for mke2fs.conf resolution: 'ext4', 'small'\nDiscarding device blocks: done\nDiscard succeeded and will return 0s - skipping inode table wipe\nFilesystem label=\nOS type: Linux\nBlock size=1024 (log=0)\nFragment size=1024 (log=0)\nStride=0 blocks, Stripe width=0 blocks\n2560 inodes, 10240 blocks\n512 blocks (5.00%) reserved for the super user\nFirst data block=1\nMaximum filesystem blocks=10485760\n2 block groups\n8192 blocks per group, 8192 fragments per group\n1280 inodes per group\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tune2fs -l test\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u53cd\u63a8 fs \u521d\u59cb\u5316\u65f6\u7684\u5927\u5c0f\uff0c\u53ef\u5224\u65ad\u6700\u5927\u53ef resize \u7a7a\u95f4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block size"),(0,r.kt)("li",{parentName:"ul"},"Blocks per group"),(0,r.kt)("li",{parentName:"ul"},"Inodes per group")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"file test\n\nmkfs.ext4 -F -b 4096 test\n")),(0,r.kt)("h2",c({},{id:"mke2fsconf"}),"mke2fs.conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-T \u6307\u5b9a\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"man ",(0,r.kt)("a",c({parentName:"li"},{href:"https://man7.org/linux/man-pages/man5/mke2fs.conf.5.html"}),"mke2fs.conf.5"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"size"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"<= 3mb"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"floppy")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-conf",metastring:'title="/etc/mke2fs.conf"',title:'"/etc/mke2fs.conf"'}),"[defaults]\n    base_features = sparse_super,large_file,filetype,resize_inode,dir_index,ext_attr\n    default_mntopts = acl,user_xattr\n    enable_periodic_fsck = 0\n    blocksize = 4096\n    inode_size = 256\n    inode_ratio = 16384\n\n[fs_types]\n    ext3 = {\n        features = has_journal\n    }\n    ext4 = {\n        features = has_journal,extent,huge_file,flex_bg,metadata_csum,64bit,dir_nlink,extra_isize\n        inode_size = 256\n    }\n    small = {\n        blocksize = 1024\n        inode_ratio = 4096\n    }\n    floppy = {\n        blocksize = 1024\n        inode_size = 128\n        inode_ratio = 8192\n    }\n    big = {\n        inode_ratio = 32768\n    }\n    huge = {\n        inode_ratio = 65536\n    }\n    news = {\n        inode_ratio = 4096\n    }\n    largefile = {\n        inode_ratio = 1048576\n        blocksize = -1\n    }\n    largefile4 = {\n        inode_ratio = 4194304\n        blocksize = -1\n    }\n    hurd = {\n    blocksize = 4096\n    inode_size = 128\n    }\n")),(0,r.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",c({},{id:"resize-\u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570"}),"resize \u9700\u8981\u6ce8\u610f\u7684\u53c2\u6570"),(0,r.kt)("p",null,"mke2fs will attempt to reserve enough space so that the filesystem may grow to 1024 times its initial size. This can be changed using the resize extended option."),(0,r.kt)("p",null,"\u5982\u679c\u521d\u59cb\u7a7a\u95f4\u662f 1G\uff0c\u90a3\u4e48\u9ed8\u8ba4\u6700\u5927\u53ea\u80fd resize \u5230 1T\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-i"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-E resize=max-online-resize")),(0,r.kt)("li",{parentName:"ul"},"-m reserved-blocks-percentage")),(0,r.kt)("h2",c({},{id:"new-size-results-in-too-many-block-group-descriptors"}),"New size results in too many block group descriptors"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u9ed8\u8ba4\u6700\u5927 resize 1024 \u500d\uff0c\u5982\u679c\u521d\u59cb 1G \u5219\u6700\u5927 1T\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/tytso/e2fsprogs/issues/74#issuecomment-889894735"}),"tytso/e2fsprogs#74"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"e2fsck -f /dev/XXX\nresize2fs /dev/XXX\n")),(0,r.kt)("p",null,"\u6216"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"resize2fs -f /dev/sdb2\n")),(0,r.kt)("h2",c({},{id:"kernel-error"}),"kernel error"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"blk_update_request: critical target error, dev sda, sector 1875240 op 0x1:(WRITE) flags 0x800 phys_seg 2 prio class 0\nAborting journal on device sda2-8.\n\nblk_update_request: critical target error, dev sda, sector 1837056 op 0x1:(WRITE) flags 0x800 phys_seg 1 prio class 0\nBuffer I/O error on dev sda2, logical block 196608, lost sync page write\nJBD2: Error -5 detected when updating journal superblock for sda2-8.\n\nEXT4-fs (sda2): I/O error while writing superblock\nEXT4-fs error (device sda2): ext4_journal_check_start:83: Detected aborted journal\nEXT4-fs (sda2): Remounting filesystem read-only\n")),(0,r.kt)("p",null,"\u5c1d\u8bd5\u4fee\u590d"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fsck\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"Journal checksum error found in /dev/sda2\nfsck.ext4: unable to set superblock flags on /dev/sda2\n")),(0,r.kt)("p",null,"\u5e94\u8be5\u662f SD \u5361\u5f02\u5e38\u4e86\uff0c\u5c1d\u8bd5\u66f4\u6362\u786c\u4ef6\u8bbe\u5907\u3002"))}y.isMDXComponent=!0}}]);