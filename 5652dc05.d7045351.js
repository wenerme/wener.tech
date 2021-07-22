(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1152:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return j}));var n=a(0),l=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=l.a.createContext({}),m=function(t){var e=l.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return l.a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},O=l.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,b=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=m(a),O=n,j=d["".concat(b,".").concat(O)]||d[O]||u[O]||r;return a?l.a.createElement(j,i(i({ref:e},p),{},{components:a})):l.a.createElement(j,i({ref:e},p))}));function j(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,b=new Array(r);b[0]=O;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,b[1]=i;for(var p=2;p<r;p++)b[p]=a[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},447:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return m}));var n=a(3),l=a(8),r=(a(0),a(1152)),b={id:"intro",title:"Filesystem"},i={unversionedId:"ops/storage/fs/intro",id:"ops/storage/fs/intro",isDocsHomePage:!1,title:"Filesystem",description:"Tips",source:"@site/notes/ops/storage/fs/README.md",slug:"/ops/storage/fs/intro",permalink:"/notes/ops/storage/fs/intro",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/README.md",version:"current",sidebar:"docs",previous:{title:"RAID",permalink:"/notes/ops/storage/block/raid"},next:{title:"Btrfs",permalink:"/notes/ops/storage/fs/btrfs"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u57fa\u51c6\u6d4b\u8bd5",id:"\u57fa\u51c6\u6d4b\u8bd5",children:[]},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",children:[]},{value:"diskutil",id:"diskutil",children:[]},{value:"OS X",id:"os-x",children:[]},{value:"FAQ",id:"faq",children:[{value:"disk vs rdisk on BSD",id:"disk-vs-rdisk-on-bsd",children:[]},{value:"\u6587\u4ef6\u65f6\u95f4",id:"\u6587\u4ef6\u65f6\u95f4",children:[]}]}],p={toc:c};function m(t){var e=t.components,a=Object(l.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728 Mac \u4e0b\u53ef\u901a\u8fc7\u865a\u62df\u673a\u6765\u683c\u5f0f\u5316\u78c1\u76d8"),Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(r.b)("a",{parentName:"li",href:"https://rufus.akeo.ie/"},"rufus")," \u5236\u4f5c Windows \u542f\u52a8\u76d8"),Object(r.b)("li",{parentName:"ul"},"CHS - \u67f1\u9762-\u78c1\u5934-\u6247\u533a - Cylinder-head-sector"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Solid_State_Drives"},"Solid State Drives")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Flash_file_system"},"Flash file system")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/198590"},"https://unix.stackexchange.com/questions/198590")),Object(r.b)("li",{parentName:"ul"},"\u9488\u5bf9\u95ea\u5b58\u4f18\u5316\u7684\u6587\u4ef6\u7cfb\u7edf",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"APFS"),Object(r.b)("li",{parentName:"ul"},"exFAT"),Object(r.b)("li",{parentName:"ul"},"F2FS"),Object(r.b)("li",{parentName:"ul"},"JFFS\u3001JFFS2"),Object(r.b)("li",{parentName:"ul"},"ZFS - \u5229\u7528 SSD \u7f13\u5b58\u3001\u65e5\u5fd7"))),Object(r.b)("li",{parentName:"ul"},"\u865a\u62df\u5316\u76f8\u5173\u7279\u6027",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"COW",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"btrfs, zfs"))),Object(r.b)("li",{parentName:"ul"},"holes",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ext2, ext3"))),Object(r.b)("li",{parentName:"ul"},"Snapshot"))),Object(r.b)("li",{parentName:"ul"},"XFS",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6162"),Object(r.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u65e5\u5fd7"),Object(r.b)("li",{parentName:"ul"},"\u8db3\u591f\u7a33\u5b9a,\u9002\u5408\u751f\u4ea7,\u4f7f\u7528\u6700\u4e3a\u5e7f\u6cdb"))),Object(r.b)("li",{parentName:"ul"},"Btrfs",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6700\u5feb"),Object(r.b)("li",{parentName:"ul"},"CopyOnWrite"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u5199\u5feb\u7167"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301 XATTRs \u548c inline data"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u70ed fsck"),Object(r.b)("li",{parentName:"ul"},"Ceph \u53ef\u540c\u65f6\u5199\u65e5\u5fd7\u548c\u5bf9\u8c61\u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u6b63\u5728\u8d8b\u4e8e\u7a33\u70b9\u548c\u751f\u4ea7"))),Object(r.b)("li",{parentName:"ul"},"Ext4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9002\u5408\u751f\u4ea7"),Object(r.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u65e5\u5fd7"),Object(r.b)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u6709\u957f\u5ea6\u9650\u5236"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/F2FS"},"F2FS"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Linux \u5185\u6838\u652f\u6301 - v3.8 - 2010-12-20",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"5.6+ \u652f\u6301\u538b\u7f29 - LZO\u3001LZ4"),Object(r.b)("li",{parentName:"ul"},"5.7+ \u652f\u6301 zstd"))),Object(r.b)("li",{parentName:"ul"},"\u9488\u5bf9 \u95ea\u5b58 \u4f18\u5316 - SSD\u3001TF\u3001USB"),Object(r.b)("li",{parentName:"ul"},"\u4e3b\u6d41 Android \u624b\u673a\u5747\u4f7f\u7528\u8be5\u7cfb\u7edf"))),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_cryptographic_file_systems"},"List of cryptographic file systems")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_file_systems"},"List of file systems")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_file_systems"},"Comparison of file system")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.howtogeek.com/howto/33552/htg-explains-which-linux-file-system-should-you-choose/"},"Which Linux File System Should You Use?"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u786e\u5b9a\u5c31\u7528 EXT4")))))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"N/A"),Object(r.b)("th",{parentName:"tr",align:null},"Minix"),Object(r.b)("th",{parentName:"tr",align:null},"Ext"),Object(r.b)("th",{parentName:"tr",align:null},"Ext2"),Object(r.b)("th",{parentName:"tr",align:null},"Xia"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Max FS size"),Object(r.b)("td",{parentName:"tr",align:null},"64 MB"),Object(r.b)("td",{parentName:"tr",align:null},"2 GB 4 TB 2 GB"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Max file size"),Object(r.b)("td",{parentName:"tr",align:null},"64 MB"),Object(r.b)("td",{parentName:"tr",align:null},"2 GB 2 GB 64 MB"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Max file name"),Object(r.b)("td",{parentName:"tr",align:null},"16/30 c"),Object(r.b)("td",{parentName:"tr",align:null},"255 c"),Object(r.b)("td",{parentName:"tr",align:null},"255 c"),Object(r.b)("td",{parentName:"tr",align:null},"248 c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"3 times support"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Extensible"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"No")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Var. block size"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"fs"),Object(r.b)("th",{parentName:"tr",align:null},"create"),Object(r.b)("th",{parentName:"tr",align:null},"grow"),Object(r.b)("th",{parentName:"tr",align:null},"shrink"),Object(r.b)("th",{parentName:"tr",align:null},"move"),Object(r.b)("th",{parentName:"tr",align:null},"copy"),Object(r.b)("th",{parentName:"tr",align:null},"check"),Object(r.b)("th",{parentName:"tr",align:null},"label"),Object(r.b)("th",{parentName:"tr",align:null},"uuid"),Object(r.b)("th",{parentName:"tr",align:null},"pkgs"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"btrfs"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"btrfs-progs/btrfs-tools")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"exfat"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ext2"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"e2fsprogs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ext2"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"e2fsprogs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ext2"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"e2fsprogs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"f2fs"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"f2fs-tools")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"fat16"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"dosfstools, mtools")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"fat32"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"dosfstools, mtools")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"hfs"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"hfsutils")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"hfs+"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"hfsutils")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"jfs"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"jfsutils")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"swap"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"util-linux")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"luks"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"cryptsetup, dmsetup")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"lvm2 pv"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"lvm2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"minix"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"util-linux")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"nilfs2"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"nilfs-utils/nilfs-tools")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ntfs"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"ntfs-3g/ntfsprogs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"reiser4"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"reiser4progs")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"reiserfs"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"reiserfsprogs/reiserfs-utils")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"udf"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"udftools")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"xfs"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u274c"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"xfsprogs, xfsdump")))),Object(r.b)("h2",{id:"\u57fa\u51c6\u6d4b\u8bd5"},"\u57fa\u51c6\u6d4b\u8bd5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# /dev/zero \u6700\u5feb,\u4f46\u53ef\u80fd\u4f1a\u88ab\u538b\u7f29\ntime cat /dev/zero | head -c $((1024*1024*500)) > /dev/null\nreal    0m0.439s\nuser    0m0.026s\nsys 0m0.747s\n\n# /dev/urandom \u6027\u80fd\u8f83\u6162\ntime cat /dev/urandom | head -c $((1024*1024*500)) > /dev/null\nreal    1m25.427s\nuser    0m0.097s\nsys 1m25.713s\n\n# openssl \u968f\u673a\u6570\u76f8\u5bf9\u66f4\u5feb\ntime openssl rand $((1024*1024*500)) | head -c $((1024*1024*500)) > /dev/null\nreal    0m9.721s\nuser    0m9.024s\nsys 0m1.284s\n\n# \u76d1\u63a7 IO \u72b6\u51b5\niostat -mx -d sda 1\n\ndd bs=16M count=64 if=test of=test1 conv=fdatasync\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://romanrm.net/dd-benchmark"},"dd benchmark"))),Object(r.b)("h2",{id:"\u5e38\u7528\u64cd\u4f5c"},"\u5e38\u7528\u64cd\u4f5c"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u67e5\u770b\u901f\u5ea6\npv /home/user/bigfile.iso | md5sum\n# 8.25 \u540e\u53ef\u67e5\u770b\u8fdb\u5ea6\ndd if=/dev/urandom of=/dev/null status=progress\n# urandom \u4f1a\u9650\u5236\u901f\u5ea6,\u53ef\u4ee5\u4f7f\u7528\u6587\u4ef6\u6765\u6d4b\u8bd5\ntruncat -s 10G test.data\ndd if=test.data of=/dev/null status=progress\n# \u4f3c\u4e4e\u4f1a\u66f4\u5feb\npv < /dev/sda > /dev/sdb\n# \u4f7f\u7528 PV \u76d1\u63a7\u901f\u5ea6\ndd if=/dev/urandom | pv | dd of=/dev/null\n# \u7b80\u5355\u4e00\u70b9\npv bigfile.iso | dd of=VirtualDisk.raw\n# \u5728 DD \u6267\u884c\u4ee5\u540e\u4e5f\u53ef\u4ee5\u67e5\u770b\u8fdb\u5ea6\nkill -USR1 $(pgrep ^dd)\nwatch -n5 'kill -USR1 $(pgrep ^dd)'\n# \u5728 BSD/MAC \u4e0b\u9700\u8981 INFO\nkill -INFO $(pgrep ^dd$)\n# \u540c\u4e0a\u7b80\u5355\u4e00\u70b9\npkill -usr1 dd\n\n# \u5c06\u78c1\u76d8\u5236\u4f5c\u4e3a\u955c\u50cf\u6587\u4ef6\ndd if=/dev/sdb of=./disk.img\n# \u4ece\u6587\u4ef6\u6062\u590d\u5230\u78c1\u76d8\ndd if=./disk.img of=/dev/sdb\n\n# \u6302\u8f7d smb\n# Windows \u5171\u4eab\u65e0\u5bc6\u7801\u65f6\u4f7f\u7528 guest\nmount_smbfs //guest:guest@192.168.8.1/share/ ~/mnt/share/\n# \u6216\u8005\u6302\u8f7d cifs \u4e5f\u53ef\u4ee5\nmount -t cifs -o username=guest,password=guest //192.168.8.1/share/ ~/mnt/share/\n\n# \u5982\u679c\u4f7f\u7528\u7684\u73af\u5883\u6ca1\u6709\u76f8\u5173\u7684 linux \u5de5\u5177,\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 docker\ndocker run --rm -it --privileged -v /:/host ubuntu\n\n")),Object(r.b)("h2",{id:"diskutil"},"diskutil"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/diskutil.8.html"},"diskutil.8"))),Object(r.b)("h2",{id:"os-x"},"OS X"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u76f8\u5f53\u4e8e fdisk -l\ndiskutil list\n# umount \u7ecf\u5e38\u65e0\u6cd5\u76f4\u63a5\u64cd\u4f5c\ndiskutil unmount /Volumes/<\u6302\u8f7d\u540d>\ndiskutil unmountdisk /dev/disk2\n# \u683c\u5f0f\u5316\u78c1\u76d8\ndiskutil eraseDisk HFS+ DISK disk2\n# \u78c1\u76d8\u5206\u533a\ndiskutil partitionDisk disk4 1 GPT HFS+ newdisk R\n\n# \u6dfb\u52a0 ext \u7c7b\u78c1\u76d8\u64cd\u4f5c\u5de5\u5177\nbrew install e2fsprogs\nls `brew --prefix e2fsprogs`/sbin\n")),Object(r.b)("h2",{id:"faq"},"FAQ"),Object(r.b)("h3",{id:"disk-vs-rdisk-on-bsd"},"disk vs rdisk on BSD"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"man hdiutil")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'/dev/rdisk nodes are character-special devices, but are "raw" in the BSD sense and force block-aligned I/O. They are closer to the physical disk than the buffer cache. /dev/disk nodes, on the other hand, are buffered block-special devices and are used primarily by the kernel\'s filesystem code.')),Object(r.b)("p",null,"\u5373 rdisk \u51e0\u4e4e\u662f\u76f4\u63a5\u8bbf\u95ee\u7269\u7406\u8bbe\u5907,disk \u8fd8\u4f1a\u7ecf\u8fc7\u7cfb\u7edf\u7f13\u5b58.\u5728\u80fd\u4f7f\u7528 rdisk \u65f6\u4e0d\u4f7f\u7528 disk."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://superuser.com/questions/631592"},"http://superuser.com/questions/631592")),Object(r.b)("h3",{id:"\u6587\u4ef6\u65f6\u95f4"},"\u6587\u4ef6\u65f6\u95f4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HN ",Object(r.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=12555160"},"Linus on btime: \u201cLet\u2019s wait five years\u201d (2010)"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u65f6\u95f4\u7f29\u5199"),Object(r.b)("th",{parentName:"tr",align:null},"\u5168\u79f0"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"atime"),Object(r.b)("td",{parentName:"tr",align:null},"Access Time"),Object(r.b)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u65f6\u95f4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ctime"),Object(r.b)("td",{parentName:"tr",align:null},"Change Time"),Object(r.b)("td",{parentName:"tr",align:null},"\u5f53\u8bbf\u95ee\u6743\u9650\u7b49\u4fee\u6539\u65f6,\u4f1a\u4fee\u6539\u8be5\u65f6\u95f4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"mtime"),Object(r.b)("td",{parentName:"tr",align:null},"Modify Time"),Object(r.b)("td",{parentName:"tr",align:null},"\u5f53\u4fee\u6539\u6587\u4ef6\u5185\u5bb9\u65f6\u4f1a\u4fee\u6539\u8be5\u65f6\u95f4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"btime"),Object(r.b)("td",{parentName:"tr",align:null},"Birth Time"),Object(r.b)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"}),Object(r.b)("th",{parentName:"tr",align:"center"},"windows"),Object(r.b)("th",{parentName:"tr",align:"center"},"linux"),Object(r.b)("th",{parentName:"tr",align:"center"},"solaris"),Object(r.b)("th",{parentName:"tr",align:"center"},"dragonfly"),Object(r.b)("th",{parentName:"tr",align:"center"},"nacl"),Object(r.b)("th",{parentName:"tr",align:"center"},"freebsd"),Object(r.b)("th",{parentName:"tr",align:"center"},"darwin"),Object(r.b)("th",{parentName:"tr",align:"center"},"netbsd"),Object(r.b)("th",{parentName:"tr",align:"center"},"openbsd"),Object(r.b)("th",{parentName:"tr",align:"center"},"plan9"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"atime"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"mtime"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"ctime"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713","*"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"btime"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"n/a"),Object(r.b)("td",{parentName:"tr",align:"center"},"n/a"),Object(r.b)("td",{parentName:"tr",align:"center"},"n/a"),Object(r.b)("td",{parentName:"tr",align:"center"},"n/a"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2713"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Windows XP \u4e0d\u652f\u6301 ctime, Vista \u4ee5\u4e0a\u652f\u6301."),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"stat \u6587\u4ef6\u540d")," \u67e5\u770b"),Object(r.b)("li",{parentName:"ul"},"\u8be5\u8868\u683c\u6458\u81ea ",Object(r.b)("a",{parentName:"li",href:"https://github.com/djherbis/times#supported-times"},"djherbis/times"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ stat sg_store.db\n  File: 'sg_store.db'\n  Size: 45056           Blocks: 88         IO Block: 4096   regular file\nDevice: 1000004h/16777220d      Inode: 45296478    Links: 1\nAccess: (0644/-rw-r--r--)  Uid: (  501/   root)   Gid: (   20/   root)\nAccess: 2016-09-22 15:26:54.000000000 +0800\nModify: 2016-09-22 15:26:54.000000000 +0800\nChange: 2016-09-22 15:27:20.000000000 +0800\n Birth: 2016-09-21 23:05:30.000000000 +0800\n\n# \u4fee\u6539 mtime \u548c ctime\n$ touch sg_store.db\n# \u4fee\u6539 ctime\n$ chown root:root sg_store.db\n")))}m.isMDXComponent=!0}}]);