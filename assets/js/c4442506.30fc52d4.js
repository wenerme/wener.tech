"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81114],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={slug:"rescue-root-disk",title:"\u7cfb\u7edf\u76d8\u6062\u590d",tags:["AlpineLinux","\u8fd0\u7ef4"]},i=void 0,u={permalink:"/story/rescue-root-disk",editUrl:"https://github.com/wenerme/wener/edit/master/story/2021/2021-11-17-rescue-root-disk.md",source:"@site/story/2021/2021-11-17-rescue-root-disk.md",title:"\u7cfb\u7edf\u76d8\u6062\u590d",description:"\u559c\u6b22\u4f7f\u7528 \u95ea\u5b58\u76d8/U \u76d8 \u4f5c\u4e3a Linux \u7cfb\u7edf\u76d8\uff0c\u4f46 U \u76d8 \u4f7f\u7528\u5bff\u547d\u6709\u9650\uff0c\u5f53\u5f02\u5e38\u540e\u9700\u8981\u5bf9\u7cfb\u7edf\u76d8\u8fdb\u884c\u66f4\u6362\u3002",date:"2021-11-17T00:00:00.000Z",formattedDate:"November 17, 2021",tags:[{label:"AlpineLinux",permalink:"/story/tags/alpine-linux"},{label:"\u8fd0\u7ef4",permalink:"/story/tags/\u8fd0\u7ef4"}],readingTime:5.985,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"rescue-root-disk",title:"\u7cfb\u7edf\u76d8\u6062\u590d",tags:["AlpineLinux","\u8fd0\u7ef4"]},prevItem:{title:"\u4ece\u65b0\u5b66\u4e60",permalink:"/story/relearning"},nextItem:{title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",permalink:"/story/postgresql-use-wrong-index-with-order-and-limit"}},p={authorsImageUrls:[]},d=[{value:"\u73b0\u72b6",id:"\u73b0\u72b6",level:2},{value:"\u5907\u4efd\u6062\u590d\u65b9\u6848",id:"\u5907\u4efd\u6062\u590d\u65b9\u6848",level:2},{value:"\u6062\u590d",id:"\u6062\u590d",level:2},{value:"\u51c6\u5907\u5907\u4efd\u76d8",id:"\u51c6\u5907\u5907\u4efd\u76d8",level:3},{value:"\u5206\u533a\u8868&amp;\u542f\u52a8\u5206\u533a\u5907\u4efd",id:"\u5206\u533a\u8868\u542f\u52a8\u5206\u533a\u5907\u4efd",level:3},{value:"root \u5206\u533a\u5907\u4efd",id:"root-\u5206\u533a\u5907\u4efd",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u559c\u6b22\u4f7f\u7528 \u95ea\u5b58\u76d8/U \u76d8 \u4f5c\u4e3a Linux \u7cfb\u7edf\u76d8\uff0c\u4f46 U \u76d8 \u4f7f\u7528\u5bff\u547d\u6709\u9650\uff0c\u5f53\u5f02\u5e38\u540e\u9700\u8981\u5bf9\u7cfb\u7edf\u76d8\u8fdb\u884c\u66f4\u6362\u3002"),(0,l.kt)("h2",{id:"\u73b0\u72b6"},"\u73b0\u72b6"),(0,l.kt)("p",null,"\u4f7f\u7528 SanDisk CZ430 \u4f5c\u4e3a \u7cfb\u7edf\u76d8/Root \u5206\u533a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"lsblk")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    1 114.6G  0 disk\n\u251c\u2500sda1   8:1    1   128M  0 part /boot\n\u2514\u2500sda2   8:2    1 114.4G  0 part /\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"df -h /")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda2       113G  2.2G  106G   2% /\n")),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c U \u76d8 \u5f02\u5e38\uff0c\u7cfb\u7edf\u88ab\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ea\u8bfb\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"touch ~/test\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"touch: cannot touch '/home/admin/test': Read-only file system\n")),(0,l.kt)("p",null,"dmesg \u53ef\u770b\u5230\u5f02\u5e38\u4fe1\u606f\uff0c\u51e0\u4e2a\u6708\u524d\u5df2\u7ecf\u51fa\u95ee\u9898\u4e86\uff0c\u56e0\u4e3a\u7cfb\u7edf\u8fd8\u80fd\u6b63\u5e38\u4f7f\u7528\u6682\u4e14\u6ca1\u7ba1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dmesg",metastring:'title="dmesg -T"',title:'"dmesg','-T"':!0},"[Tue Sep  7 16:48:16 2021] sd 2:0:0:0: [sda] tag#0 UNKNOWN(0x2003) Result: hostbyte=0x00 driverbyte=0x08 cmd_age=0s\n[Tue Sep  7 16:48:16 2021] sd 2:0:0:0: [sda] tag#0 Sense Key : 0x7 [current]\n[Tue Sep  7 16:48:16 2021] sd 2:0:0:0: [sda] tag#0 ASC=0x27 ASCQ=0x0\n[Tue Sep  7 16:48:16 2021] sd 2:0:0:0: [sda] tag#0 CDB: opcode=0x2a 2a 00 00 04 16 90 00 00 08 00\n[Tue Sep  7 16:48:16 2021] blk_update_request: critical target error, dev sda, sector 267920 op 0x1:(WRITE) flags 0x103000 phys_seg 1 prio class 0\n[Tue Sep  7 16:48:16 2021] Buffer I/O error on dev sda2, logical block 466, lost async page write\n")),(0,l.kt)("h2",{id:"\u5907\u4efd\u6062\u590d\u65b9\u6848"},"\u5907\u4efd\u6062\u590d\u65b9\u6848"),(0,l.kt)("p",null,"\u5c06\u73b0\u5728\u6570\u636e\u5b8c\u6574\u5907\u4efd\u5230\u65b0\u7684 U \u76d8\uff0c\u91cd\u542f\u5373\u53ef\uff0c\u4f46\u6062\u590d\u5907\u4efd\u6709\u597d\u51e0\u79cd\u65b9\u5f0f\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5168\u76d8 dd")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901f\u5ea6\u6162"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u66b4\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u63d0\u4f9b\u81f3\u5c11\u73b0\u5728\u78c1\u76d8\u5927\u5c0f\u7684\u5b58\u50a8")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u91cd\u88c5 - \u4ec5\u62f7\u8d1d\u6570\u636e")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ebb\u70e6")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6062\u590d\u5206\u533a\u3001\u6062\u590d\u6570\u636e")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6548"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u591a\u4e00\u70b9\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u78c1\u76d8\u53ea\u9700\u8981\u5df2\u7528\u7a7a\u95f4\u5927\u5c0f\u5373\u53ef")),(0,l.kt)("h2",{id:"\u6062\u590d"},"\u6062\u590d"),(0,l.kt)("p",null,"\u56e0\u4e3a\u8fd9\u662f\u5df2\u7ecf\u7b2c\u4e09\u56db\u6b21\u6062\u590d\u4e86\uff0c\u4e4b\u524d\u90fd\u662f dd\uff0c\u4f46\u8fd9\u6b21\u6253\u7b97\u7528\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\uff0c\u4e14\u8fd9\u6b21\u7684\u7cfb\u7edf\u76d8\u4e3a 128G\uff0c\u4f46\u76ee\u524d\u53ea\u6709 64G \u7684\u7a7a\u95f2 U \u76d8\uff0c\u6545\u9009\u62e9\u65b9\u6848 3\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6062\u590d\u8fc7\u7a0b")),(0,l.kt)("ol",{start:0},(0,l.kt)("li",{parentName:"ol"},"\u51c6\u5907\u5907\u4efd\u76d8"),(0,l.kt)("li",{parentName:"ol"},"\u5206\u533a\u8868\u5907\u4efd & \u542f\u52a8\u5206\u533a\u5907\u4efd"),(0,l.kt)("li",{parentName:"ol"},"root \u5206\u533a \u5907\u4efd & \u4fee\u590d"),(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1"),(0,l.kt)("li",{parentName:"ol"},"\u5173\u673a"),(0,l.kt)("li",{parentName:"ol"},"\u53d6\u6389\u574f\u7684 U \u76d8"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u673a")),(0,l.kt)("admonition",{title:"\u6062\u590d\u5907\u4efd\u6ce8\u610f\u4e8b\u9879",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u4e2a\u53ef\u5199\u76ee\u5f55 - tmpfs,shm - \u4f8b\u5982: /run, /var/run, /tmp, /dev/shm"))),(0,l.kt)("h3",{id:"\u51c6\u5907\u5907\u4efd\u76d8"},"\u51c6\u5907\u5907\u4efd\u76d8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5907\u4efd\u76d8 /dev/sdb 64G\uff0c\u540c SanDisk CZ430")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="lsblk"',title:'"lsblk"'},"NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    1 114.6G  0 disk\n\u251c\u2500sda1   8:1    1   128M  0 part /boot\n\u2514\u2500sda2   8:2    1 114.4G  0 part /\nsdb      8:16   1  57.3G  0 disk\n")),(0,l.kt)("h3",{id:"\u5206\u533a\u8868\u542f\u52a8\u5206\u533a\u5907\u4efd"},"\u5206\u533a\u8868&\u542f\u52a8\u5206\u533a\u5907\u4efd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u4fdd\u4f7f\u7528 root \u7528\u6237\u64cd\u4f5c\nsudo su\n# \u8fdb\u5165\u53ef\u5199\u76ee\u5f55\ncd /run\n\n# \u6b63\u5e38\u60c5\u51b5\u5206\u533a\u8868\u7684\u5907\u4efd\u6062\u590d\n# sfdisk -d /dev/sda | sfdisk -f /dev/sdb\n\n# \u9009\u62e9\u7b80\u5355\u65b9\u5f0f\u5907\u4efd\u540e\u518d\u4fee\u6539\u6700\u540e\u5206\u533a\n# \u8fd9\u91cc dd 130MB - \u540c\u65f6\u628a boot \u5206\u533a\u5907\u4efd\u4e86\ndd if=/dev/sda of=/dev/sdb bs=1M count=130 status=progress\n\n# \u8f6c\u50a8\u5206\u533a\u8868\nsfdisk -d /dev/sda > sda.partition.table.txt\n# \u5220\u9664\u7b2c\u4e8c\u4e2a\u5206\u533a\u7684\u5927\u5c0f\nsed -r '$ s/size=\\s*\\d+,//' -i sda.partition.table.txt\n# \u91cd\u5efa\u5206\u533a\nsfdisk -f /dev/sdb < sda.partition.table.txt\n# \u73b0\u5728\u5206\u533a\u5927\u5c0f\u6b63\u5e38\nfdisk -l /dev/sdb\n\n# \u5206\u533a\u53d8\u5316\u91cd\u65b0\u626b\u63cf\nmdev -s\npartprobe\n# \u51fa\u73b0\u5206\u533a\nls /dev/sdb*\n")),(0,l.kt)("h3",{id:"root-\u5206\u533a\u5907\u4efd"},"root \u5206\u533a\u5907\u4efd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"root \u5206\u533a\u4e00\u822c\u8f83\u5927\uff0c\u76f4\u63a5 dd \u6162\u4e14\u4f24 U \u76d8"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5 dd \u9700\u8981\u76ee\u6807\u76f8\u540c\u5927\u5c0f\uff0c\u5426\u5219\u4e22\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u4f7f\u7528 clone \u6570\u636e\u65b9\u5f0f")),(0,l.kt)("admonition",{title:"\u7531\u4e8e\u76ee\u6807\u5206\u533a\u66f4\u5c0f\uff0c\u4e0d\u80fd\u76f4\u63a5\u590d\u5236",type:"caution"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ext4 \u6570\u636e\u62f7\u8d1d - \u57fa\u4e8e ext4 block\uff0c\u53ea\u62f7\u8d1d\u4f7f\u7528\u90e8\u5206\n# \u4e5f\u53ef\u4ee5\u7528\u4e8e\u751f\u6210 img \u5907\u4efd\u955c\u50cf\u4e4b\u540e\u7528\ne2image -ra -p /dev/sda2 /dev/sdb2\n")),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5206\u533a\u5927\u5c0f\u8db3\u591f\uff0c\u76f4\u63a5\u590d\u5236\u5373\u53ef"))),(0,l.kt)("p",null,"\u56e0\u4e3a root \u5206\u533a\u4e3a 120G\uff0c\u4f46\u5b9e\u9645\u53ea\u7528\u4e86 2.2G\uff0c \u5148\u955c\u50cf\u5206\u533a\uff0c\u7f29\u5c0f\u5206\u533a\uff0c\u7136\u540e\u6062\u590d\u5230\u65b0\u7684\u5206\u533a\u3002"),(0,l.kt)("p",null,"\u7d22\u6027\u5185\u5b58\u6709 4G\uff0c\u56e0\u6b64\u76f4\u63a5\u5728 /dev/shm \u64cd\u4f5c\uff0c\u5426\u5219\u9700\u8981\u5916\u7f6e\u5b58\u50a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ece\u65b0\u6302\u8f7d\u4e3a 3G - \u9ed8\u8ba4 2G\nmount -o remount,size=3G /dev/shm\n# \u5236\u4f5c\u955c\u50cf\ne2image -rap /dev/sda2 sda2.raw\n\n# \u4fee\u590d\u5206\u533a - \u4e00\u822c U\u76d8 \u635f\u574f\u90fd\u4f1a\u5bfc\u81f4 fs \u5f02\u5e38\ne2fsck -y sda2.raw\n# \u7f29\u5c0f\u5206\u533a\nresize2fs sda2.raw 4G\n# \u6062\u590d\ne2image -rap sda2.raw /dev/sdb2\n# \u6269\u5c55\u5206\u533a\nresize2fs /dev/sdb2\n")),(0,l.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"fsck /dev/sdb1\nfsck /dev/sdb2\n\nmount /dev/sdb2 /mnt\nmount /dev/sdb1 /mnt/boot\n# \u4e0d\u5e94\u8be5\u6709\u53d8\u5316\nrsync -vna /boot/ /mnt/boot/\n\n# \u7531\u4e8e fsck \u4fee\u590d\uff0c\u53ef\u80fd root \u5206\u533a\u5927\u5c0f\u4e0d\u540c\ndf / /mnt /boot /mnt/boot\n")),(0,l.kt)("p",null,"\u5982\u679c\u88c5\u6709 qemu\uff0c\u8fd8\u53ef\u4ee5\u76f4\u63a5\u542f\u7528 qemu \u9a8c\u8bc1\uff0c\u76ee\u524d\u5c31\u7b80\u5355\u786e\u8ba4\u6587\u4ef6\u6ca1\u95ee\u9898\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u51c6\u5907\u5173\u673a\u91cd\u542f\numount -R /mnt\neject /dev/sdb\n\npoweroff\n")),(0,l.kt)("p",null,"\u53d6\u6389 \u574f\u7684 U \u76d8\uff0c\u542f\u52a8\u3002"),(0,l.kt)("p",null,"\u4e00\u5207\u6062\u590d\u6b63\u5e38\u3002\ud83c\udf89"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u7cfb\u7edf\u76d8\u6062\u590d\u8fd8\u662f\u76f8\u5f53\u5bb9\u6613\uff0c\u4f46 CZ430 \u786e\u5b9e\u6709\u70b9\u8001\u4e86\uff0c\u5728 2017 \u5e74\u5de6\u53f3\u4e0a\u5e02\uff0c\u76f8\u540c\u89c4\u683c\u5df2\u7ecf\u5356 4\u30015 \u5e74\u4e86\uff0c\u6027\u80fd\u5404\u65b9\u9762\u6709\u6240\u6b20\u7f3a\uff0c\u4e4b\u540e\u4f1a\u5c3d\u91cf\u9009\u62e9 Lexar S47\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wener.me/notes/ops/admin/fio-out/"},"https://wener.me/notes/ops/admin/fio-out/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SanDisk CZ430, Lexar S47 \u6027\u80fd\u5bf9\u6bd4")))),(0,l.kt)("p",null,"\u6b64\u5916\u4f7f\u7528 U \u76d8 \u505a\u7cfb\u7edf\u76d8\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u6ce8\u610f\u4fee\u6539 docker \u4e4b\u7c7b\u7684\u6570\u636e\u76ee\u5f55\u4e3a\u5176\u4ed6\u5b58\u50a8\uff0c\u56e0\u4e3a\u8dd1\u5b9e\u9645\u5e94\u7528\u7684\u65f6\u5019 U \u76d8 \u6027\u80fd\u662f\u4e0d\u8db3\u7684\uff0c\u4e14\u6570\u636e\u5e93\u7c7b\u578b\u5e94\u7528\u7684\u5c0f BlockSize IO \u4e0d\u9002\u5408 U \u76d8\u3002"))}c.isMDXComponent=!0}}]);