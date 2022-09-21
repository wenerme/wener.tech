"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20063],{7799:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var r=a(96600),n=a(27279),l=(a(59496),a(3905)),i=["components"],m={title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},p=void 0,o={unversionedId:"os/linux/fs/fs-faq",id:"os/linux/fs/fs-faq",title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",description:"\u6587\u4ef6\u540d",source:"@site/notes/os/linux/fs/fs-faq.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/fs-faq",permalink:"/notes/os/linux/fs/fs-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/fs/fs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"ext4",permalink:"/notes/os/linux/fs/ext4"},next:{title:"FUSE",permalink:"/notes/os/linux/fs/fuse"}},k={},u=[{value:"\u6587\u4ef6\u540d",id:"\u6587\u4ef6\u540d",level:2},{value:"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236",id:"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236",level:2},{value:"atime, mtime, ctime",id:"atime-mtime-ctime",level:2},{value:"MBR vs GPT",id:"mbr-vs-gpt",level:2},{value:"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199",id:"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199",level:2},{value:"Do you want to remove the signature?",id:"do-you-want-to-remove-the-signature",level:2},{value:"cluster size for NTFS, FAT, and exFAT",id:"cluster-size-for-ntfs-fat-and-exfat",level:2}],d={toc:u};function N(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6587\u4ef6\u540d"},"\u6587\u4ef6\u540d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linux",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u5305\u542b /"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b :"))),(0,l.kt)("li",{parentName:"ul"},"macOS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u5305\u542b :"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b /")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/9847573/1870054"},"https://stackoverflow.com/a/9847573/1870054"))),(0,l.kt)("h2",{id:"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236"},"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://access.redhat.com/solutions/1532"},"What are the file and file system size limitations for Red Hat Enterprise Linux?"))),(0,l.kt)("h2",{id:"atime-mtime-ctime"},"atime, mtime, ctime"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"mean"),(0,l.kt)("th",{parentName:"tr",align:null},"stand for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"atime"),(0,l.kt)("td",{parentName:"tr",align:null},"access time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mtime"),(0,l.kt)("td",{parentName:"tr",align:null},"modify time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ctime"),(0,l.kt)("td",{parentName:"tr",align:null},"create time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"btime"),(0,l.kt)("td",{parentName:"tr",align:null},"birth time"),(0,l.kt)("td",{parentName:"tr",align:null},"fs \u521b\u5efa\u65f6\u95f4")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"btime",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"crtime EXTFS"),(0,l.kt)("li",{parentName:"ul"},"Linux 4.11+ \u652f\u6301 statx \u8fd4\u56de crtime"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/stat.1.html"},"stat.1")),(0,l.kt)("li",{parentName:"ul"},"ext",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"strictatime - \u66f4\u4e25\u683c\u7684 atime \u7ef4\u62a4\uff0c\u5f71\u54cd\u6027\u80fd\uff0c\u7279\u6b8a\u573a\u666f\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"noatime - \u4e0d\u7ef4\u62a4 atime"),(0,l.kt)("li",{parentName:"ul"},"nodiratime - \u4e0d\u7ef4\u62a4\u76ee\u5f55 atime"),(0,l.kt)("li",{parentName:"ul"},"relatime - relative atime - \u8d85\u8fc7 24h \u624d\u66f4\u65b0 atime")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'touch hello.txt\n# \u67e5\u770b\u6240\u6709\u65f6\u95f4\nstat hello.txt\n\ntouch hello.txt                           # \u4fee\u6539 atime, mtime\ntouch -m hello.txt                        # \u4fee\u6539 mtime\ntouch -d "2020-01-15 10:30:45" hello.txt  # \u6307\u5b9a atime, mtime\n\ntouch neo.txt\ntouch hello.txt -r neo.txt                # \u53c2\u7167\u4fee\u6539\n\n# inode\nstat -c $i /etc/profile\ndf --output=source /etc/profile | tail -1\n# debugfs \u80fd\u770b\u5230 crtime\ndebugfs -R "stat <$(stat -c %i /etc/profile)>" /dev/sda2\n')),(0,l.kt)("h2",{id:"mbr-vs-gpt"},"MBR vs GPT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MBR - Master Boot Record",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53eb DOS \u5206\u533a - \u6700\u65e9\u4e8e IBM PC DOS 2.0"))),(0,l.kt)("li",{parentName:"ul"},"GPT - GUID Partition Table",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a UEFI \u800c\u8bde\u751f"))),(0,l.kt)("li",{parentName:"ul"},"4096 disk sector - AFD - Advanced Format - 4Kn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea 2010 \u5e74\u5f00\u59cb\uff0c\u5382\u5546\u5927\u591a\u91c7\u7528 4k sector"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 512 \u5b9e\u9645\u662f\u4f7f\u7528\u6a21\u62df\u540e\u7684\u5730\u5740 - 512e")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"-"),(0,l.kt)("th",{parentName:"tr",align:null},"mbr"),(0,l.kt)("th",{parentName:"tr",align:null},"gpt"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"since"),(0,l.kt)("td",{parentName:"tr",align:null},"1983"),(0,l.kt)("td",{parentName:"tr",align:null},"2005 - UEFI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interface"),(0,l.kt)("td",{parentName:"tr",align:null},"BIOS"),(0,l.kt)("td",{parentName:"tr",align:null},"UEFI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"512b sector"),(0,l.kt)("td",{parentName:"tr",align:null},"2TiB = 2^32 \xd7 512"),(0,l.kt)("td",{parentName:"tr",align:null},"8 ZiB = 2^64 \xd7 512")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4096b sector"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"64 ZiB = 2^64 \xd7 4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"CHS - Cylinder-head-sector"),(0,l.kt)("td",{parentName:"tr",align:null},"LBA - Logical Block Addressing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bits"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"64")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The size of this disk is 2 TiB (2199023255552 bytes). DOS partition table format cannot be used on drives for volumes larger than 2199023255040 bytes for 512-byte sectors. Use GUID partition table format (GPT).")),(0,l.kt)("h2",{id:"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199"},"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mount -o rw,remount /\n")),(0,l.kt)("h2",{id:"do-you-want-to-remove-the-signature"},"Do you want to remove the signature?"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u5e0c\u671b\u5220\u9664 fs \u5219\u9009\u62e9 No"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/478001/47774"},"What is a vfat signature?"))),(0,l.kt)("h2",{id:"cluster-size-for-ntfs-fat-and-exfat"},"cluster size for NTFS, FAT, and exFAT"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NTFS")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"7 MB\u201316 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"16 TB\u201332 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 TB\u201364 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"64 TB\u2013128 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"32 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"128 TB\u2013256 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"64 KB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"exFAT")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"7 MB\u2013256 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"256 MB\u201332 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"32 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 GB\u2013256 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"128 KB"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FAT32")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 MB\u201364 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"512 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"64 MB\u2013128 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"128 MB\u2013256 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"2 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"256 MB\u20138 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"8 GB\u201316 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"16 GB\u201332 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 KB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FAT16")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"8 MB\u201332 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"512 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 MB\u201364 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"64 MB\u2013128 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"2 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"128 MB\u2013256 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"256 MB\u2013512 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"512 MB\u20131 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1 GB\u20132 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"32 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2 GB\u20134 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"64 KB")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NAND flash \u5927\u591a\u4e3a 128 KB blocksize\uff0c\u6240\u4ee5 extFAT \u5f88\u9002\u5408\u95ea\u5b58")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-gb/topic/9772e6f1-e31a-00d7-e18f-73169155af95"},"Default cluster size for NTFS, FAT, and exFAT"))))}N.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{kt:function(){return d}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),d=o(a),N=n,g=d["".concat(p,".").concat(N)]||d[N]||k[N]||l;return a?r.createElement(g,i(i({ref:e},u),{},{components:a})):r.createElement(g,i({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:n,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);