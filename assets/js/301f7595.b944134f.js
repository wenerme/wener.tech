"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21786],{49613:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return d}});var l=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=l.createContext({}),m=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return l.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=m(a),d=n,N=k["".concat(u,".").concat(d)]||k[d]||s[d]||r;return a?l.createElement(N,i(i({ref:e},o),{},{components:a})):l.createElement(N,i({ref:e},o))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73115:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return f}});var l=a(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&o(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&o(t,a,e[a]);return t};const k={title:"ZFS \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},d="ZFS \u5e38\u89c1\u95ee\u9898",N={unversionedId:"ops/storage/fs/zfs-faq",id:"ops/storage/fs/zfs-faq",title:"ZFS \u5e38\u89c1\u95ee\u9898",description:"- renameat2/overlayfs #8648",source:"@site/../notes/ops/storage/fs/zfs-faq.md",sourceDirName:"ops/storage/fs",slug:"/ops/storage/fs/zfs-faq",permalink:"/notes/ops/storage/fs/zfs-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/fs/zfs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ZFS \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"ZFS Awesome",permalink:"/notes/ops/storage/fs/zfs-awesome"},next:{title:"ZFS \u8c03\u4f18",permalink:"/notes/ops/storage/fs/zfs-tuning"}},c={},f=[{value:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f",id:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f",level:2},{value:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162",id:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162",level:2},{value:"dRAID - Distributed RAID",id:"draid---distributed-raid",level:2},{value:"Expansion",id:"expansion",level:2},{value:"cannot create &#39;/data/db&#39;: pool must be upgraded to set this property or value",id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value",level:2},{value:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",level:2},{value:"zfs compression vs application compression",id:"zfs-compression-vs-application-compression",level:2},{value:"ZFS \u7f13\u5b58",id:"zfs-\u7f13\u5b58",level:2},{value:"ZFS \u6027\u80fd\u4f30\u7b97",id:"zfs-\u6027\u80fd\u4f30\u7b97",level:2},{value:"zfs import",id:"zfs-import",level:2},{value:"\u5173\u95ed\u6240\u6709 atime",id:"\u5173\u95ed\u6240\u6709-atime",level:2},{value:"zvol vs zfs",id:"zvol-vs-zfs",level:2},{value:"High System Usage",id:"high-system-usage",level:2},{value:"zfs list slow",id:"zfs-list-slow",level:2}],g={toc:f};function h(t){var e,a=t,{components:n}=a,o=((t,e)=>{var a={};for(var l in t)u.call(t,l)&&e.indexOf(l)<0&&(a[l]=t[l]);if(null!=t&&p)for(var l of p(t))e.indexOf(l)<0&&m.call(t,l)&&(a[l]=t[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(e=s(s({},g),o),r(e,i({components:n,mdxType:"MDXLayout"}))),(0,l.kt)("h1",s({},{id:"zfs-\u5e38\u89c1\u95ee\u9898"}),"ZFS \u5e38\u89c1\u95ee\u9898"),(0,l.kt)("admonition",s({},{type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"renameat2/overlayfs ",(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/openzfs/zfs/issues/8648"}),"#8648"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pr ",(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/openzfs/zfs/pull/12209"}),"#12209")))))),(0,l.kt)("h2",s({},{id:"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f"}),"\u67e5\u770b\u5b9e\u9645\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u538b\u7f29\u540e\u7684\u5927\u5c0f\ndu -h .\n# \u67e5\u770b\u5b9e\u9645\u5927\u5c0f\ndu --apparent-size -h .\n")),(0,l.kt)("h2",s({},{id:"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162"}),"\u76ee\u5f55\u4e0b\u5f88\u591a\u6587\u4ef6\u65f6\u975e\u5e38\u6162"),(0,l.kt)("p",null,"\u5c1d\u8bd5\u5173\u95ed atime"),(0,l.kt)("h2",s({},{id:"draid---distributed-raid"}),"dRAID - Distributed RAID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OpenZFS 2.1+"),(0,l.kt)("li",{parentName:"ul"},"dRAID \u533a\u522b\u4e8e\u4e4b\u524d\u7684 RAIDz \u65b9\u5f0f\u5904\u7406\u5907\u76d8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u662f\u7269\u7406\u5907\u76d8\uff0c\u73b0\u5728\u662f\u903b\u8f91\u5907\u76d8"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5907\u76d8\u6982\u5ff5\uff0c\u6709\u5bb9\u707e\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5907\u76d8 - \u51b7\u5907\u4efd"),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u707e - \u4ece\u5f02\u5e38\u6062\u590d"))),(0,l.kt)("li",{parentName:"ul"},"\u4f4d\u7f6e\u52a8\u6001\u5206\u914d - \u4f20\u7edf RAID \u76d8\u4f4d\u89d2\u8272\u56fa\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5927\u89c4\u6a21\u5b58\u50a8\uff0c\u5c0f\u89c4\u6a21\u5efa\u8bae\u4f7f\u7528\u4f20\u7edf RAIDz"),(0,l.kt)("li",{parentName:"ul"},"group into rows - 16MB"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u57fa\u4e8e RAIDz\uff0c\u4f46 allocate \u65b9\u5f0f\u6709\u533a\u522b"))),(0,l.kt)("li",{parentName:"ul"},"dRAID \u76f8\u5f53\u4e8e\u662f\u5728\u4e00\u7ec4\u6570\u636e\u91cc\u589e\u52a0\u4e86\u4e00\u4e2a strip \u4f5c\u4e3a\u5907\u7528\u6253\u6563\u5230\u6240\u6709\u76d8"),(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f ",(0,l.kt)("inlineCode",{parentName:"li"},"draid[<parity>][:<data>d][:<children>c][:<spares>s]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"parity - 1-3, \u9ed8\u8ba4 1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6821\u9a8c\u6570\u636e/\u4e3b\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"data - \u6bcf\u4e2a\u5197\u4f59\u7ec4\u7684\u786c\u76d8\u6570\u91cf \u9ed8\u8ba4 8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u91cf\u5c0f - IOPS \u9ad8\uff0c\u538b\u7f29\u6bd4\u9ad8\uff0c\u6062\u590d\u901f\u5ea6\u5feb"))),(0,l.kt)("li",{parentName:"ul"},"children - \u4ea4\u53c9\u9a8c\u8bc1\u78c1\u76d8\u6570\u91cf\uff0c\u907f\u514d\u78c1\u76d8\u591a\u7684\u65f6\u5019\u914d\u7f6e\u9519\u8bef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u603b\u7684\u78c1\u76d8\u6570\u91cf"))),(0,l.kt)("li",{parentName:"ul"},"spares - \u5206\u5e03\u5f0f\u70ed\u5907\u6570\u91cf - \u9ed8\u8ba4 0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f02\u5e38\u5feb\u901f\u6062\u590d - S -> D,P"))),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7684\u662f\u6bcf strip"),(0,l.kt)("li",{parentName:"ul"},"draid1:2:0 -> RAIDz1"),(0,l.kt)("li",{parentName:"ul"},"D+P \u4e3a\u4e00\u4e2a\u7ec4\uff0c\u5206\u5e03\u5230 C-S \u4e2a\u786c\u76d8\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"S \u4e3a\u5168\u5c40 - \u6240\u6709\u7ec4\u5171\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u6062\u590d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u6a21\u5f0f\u7684\u6027\u80fd\u74f6\u9888\u5728\u4e8e\u5355\u76d8 - \u901f\u5ea6\u6162"),(0,l.kt)("li",{parentName:"ul"},"spare \u5206\u6563\u540e\u6240\u6709\u76d8\u90fd\u5728\u6062\u590d - \u6ca1\u6709\u74f6\u9888"),(0,l.kt)("li",{parentName:"ul"},"dRAID \u6362\u76d8\u74f6\u9888\u4e5f\u5728 - \u4f46\u662f\u573a\u666f\u4e0a\u6765\u8bf4\u6bcf\u90a3\u4e48\u91cd\u8981"))),(0,l.kt)("li",{parentName:"ul"},"\u786c\u76d8\u6027\u80fd\u5229\u7528\u7387\u66f4\u9ad8"))),(0,l.kt)("li",{parentName:"ul"},"\u52a3\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"fixed strip width - \u53ef\u80fd\u7528\u66f4\u591a\u7a7a\u95f4\uff0c\u538b\u7f29\u6bd4\u4f1a\u4f4e\u4e00\u4e9b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"draid2:4:1 - 4kn - 24KiB meta"),(0,l.kt)("li",{parentName:"ul"},"draid2:8:1 - 4kn - 40KiB meta",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u7279\u6b8a vdev \u7a7a\u95f4\u5206\u914d - 12KiB"))),(0,l.kt)("li",{parentName:"ul"},"RAIDz2 - 12KiB"))),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u9519\u6027\u4f4e\u4e8e\u4f20\u7edf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 9 \u76d8 draid1:2:0 / RAIDz1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"draid1:2:0 \u6700\u591a\u53ea\u80fd\u574f 1 \u4e2a - \u7b2c\u4e8c\u4e2a\u574f\u4f1a\u5f71\u54cd\u6570\u636e - \u6ca1\u6709\u76d8\u4f4d\u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"RAIDz1 - \u7b2c\u4e8c\u4e2a\u574f\u53ef\u80fd\u4e0d\u5f71\u54cd\uff0c\u53ea\u8981\u4e0d\u5728\u4e00\u4e2a\u5206\u7ec4 - 9 \u76d8 3 \u5206\u7ec4 - \u56fa\u5b9a\u76d8\u4f4d"))))))),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 draid1:4d:11c:1s",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"11 \u4e2a\u76d8"),(0,l.kt)("li",{parentName:"ul"},"1p 4d 1s - \u6bcf\u4e2a strip \u4f7f\u7528 5 \u4e2a\u76d8 + \u4e00\u4e2a\u5907\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/openzfs/zfs/blob/c14ad80fcbcfc011686f01a89644eea7c028a879/module/zfs/vdev_draid.c#L45-L167"}),"module/zfs/vdev_draid.c#L45-L167")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://openzfs.github.io/openzfs-docs/Basic%20Concepts/dRAID%20Howto.html"}),"dRAID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://arstechnica.com/gadgets/2021/07/a-deep-dive-into-openzfs-2-1s-new-distributed-raid-topology/"}),"OpenZFS 2.1 is out\u2014let\u2019s talk about its brand-new dRAID vdevs"))))),(0,l.kt)("admonition",s({},{title:"\u4f7f\u7528\u573a\u666f",type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"dRAID \u7528\u4e8e\u78c1\u76d8\u975e\u5e38\u591a\u7684\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u727a\u7272\u4e00\u70b9\u4f7f\u7528\u7a7a\u95f4\u6362\u53d6\u66f4\u5feb\u7684\u6062\u590d\u901f\u5ea6"))),(0,l.kt)("li",{parentName:"ul"},"vdev >= 20 dRAID"),(0,l.kt)("li",{parentName:"ul"},"vdev 10-20 - \u914c\u60c5"),(0,l.kt)("li",{parentName:"ul"},"vdev <= 8 \u9009\u62e9 RAIDz"))),(0,l.kt)("h2",s({},{id:"expansion"}),"Expansion"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://www.youtube.com/watch?v=yF2KgQGmUic"}),"Raid-Z Expansion"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f20\u7edf RAID 4/5/6")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sda"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdb"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdc"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"1"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"3"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"P1-3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"4"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"5"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"6"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"P4-6")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sda"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdb"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdc"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdd"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sde"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"1"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"3"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"4"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"P1-4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"5"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"6"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"7"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"8"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"P5-8")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"P - parity group - strip"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u7ec4\u53d8\u5316")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RAID-Z expansion: reflow")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sda"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdb"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdc"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"1P"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"3"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"5P"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"6"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"7"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"9P"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"10"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"11"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"12")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sda"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdb"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdc"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sdd"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"sde"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"1P"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"3"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"4"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"5P")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"6"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"7"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"8"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"9P"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"10")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"P - parity group - logical strip"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u7ec4\u6ca1\u53d8 - \u5bb9\u707e\u80fd\u529b\u6ca1\u53d8"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4fee\u6539 block \u6307\u9488"),(0,l.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u8bfb\u5199"),(0,l.kt)("li",{parentName:"ul"},"strip \u72ec\u7acb"),(0,l.kt)("li",{parentName:"ul"},"parity group \u8fc1\u79fb\u65f6\u4f1a\u786e\u4fdd\u4e4b\u524d\u6570\u636e\u4e0d\u88ab\u8986\u76d6 - \u907f\u514d\u8fc1\u79fb\u8fc7\u7a0b\u5f02\u5e38\uff0c\u4e22\u5931\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u8fc7\u7a0b\u6162 - \u56e0\u4e3a\u5168\u90e8\u6570\u636e\u90fd\u4f1a\u52a8")),(0,l.kt)("h2",s({},{id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value"}),"cannot create '/data/db': pool must be upgraded to set this property or value"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"sudo zpool upgrade -a\n")),(0,l.kt)("h2",s({},{id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4"}),"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"compressratio - \u538b\u7f29\u7387",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1/compressratio = \u538b\u7f29\u6bd4"),(0,l.kt)("li",{parentName:"ul"},"compressratio=logicalused/used"))),(0,l.kt)("li",{parentName:"ul"},"used - \u5b9e\u9645\u5360\u7528\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"logicalused - \u903b\u8f91\u5360\u7528\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u4e5f\u548c\u4ec0\u4e48\u65f6\u5019\u5f00\u542f\u7684 compression \u6709\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u542f compression \u4e4b\u540e\u65b0\u5199\u5165\u6570\u636e\u4f1a\u538b\u7f29"))),(0,l.kt)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u4f1a\u5bf9\u9f50\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u6bd4\u903b\u8f91\u66f4\u591a")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"zfs get all | egrep 'used\\b|logicalused|compression|\\bcompress'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{}),"data                 used                  884G                  -\ndata                 compressratio         1.47x                 -\ndata                 compression           lz4                   local\ndata                 logicalused           1.24T                 -\n")),(0,l.kt)("h2",s({},{id:"zfs-compression-vs-application-compression"}),"zfs compression vs application compression"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"zfs \u538b\u7f29",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5168\u91cf\u538b\u7f29\uff0c\u7b80\u5355\u6613\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u7387\u53d7 block \u5927\u5c0f\u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 lz4\u3001zstd"))),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528 \u538b\u7f29",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6d89\u53ca\u5230\u5e94\u7528\u529f\u80fd\u662f\u5426\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u7684\u8303\u56f4\u548c ZFS \u538b\u7f29\u7684\u8303\u56f4\u4e0d\u540c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u5e94\u7528\u53ea\u538b\u7f29 \u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u7387 \u4e0d\u4e00\u5b9a\u5c31\u6bd4 ZFS \u538b\u7f29\u7387 \u9ad8")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"zfs vs pg",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PostgreSQL 14 \u652f\u6301 LZ4 TOAST",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"default_toast_compression=lz4"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"col1 text COMPRESSION lz4")))),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL 15 \u652f\u6301 LZ4 WAL")))),(0,l.kt)("h2",s({},{id:"zfs-\u7f13\u5b58"}),"ZFS \u7f13\u5b58"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZIL - ZFS Intent Log - \u7f13\u51b2 WRITE \u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"SLOG - Separate Intent Log",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zpool add tank log")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u7279\u522b\u5927\u7684\u8bbe\u5907 - \u4f8b\u5982 16G, 64G SSD \u8db3\u77e3"))),(0,l.kt)("li",{parentName:"ul"},"ARC - \u7f13\u5b58 READ \u64cd\u4f5c - Adaptive Replacement Cache",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58"))),(0,l.kt)("li",{parentName:"ul"},"L2ARC",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zpool add tank cache")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u7279\u522b\u5927\u7684\u8bbe\u5907 - \u4f8b\u5982 128G SSD"),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u91cd\u542f\u540e\u7f13\u5b58\u4f9d\u7136\u53ef\u7528")))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"zpool add tank log ada3             # \u6dfb\u52a0 ZIL - \u5355\u78c1\u76d8\nzpool add tank log mirror ada3 ada4 # \u6dfb\u52a0 ZIL - RAID1 - \u574f\u4e00\u4e2a SSD \u5199\u5165\u7684\u6570\u636e\u4e5f\u4e0d\u4f1a\u4e22\nzpool add tank cache ada3           # \u6dfb\u52a0 L2ARC\n")),(0,l.kt)("h2",s({},{id:"zfs-\u6027\u80fd\u4f30\u7b97"}),"ZFS \u6027\u80fd\u4f30\u7b97"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8c03\u4f18\u5e94\u5148\u627e\u5230\u74f6\u9888\u5728\u54ea\u91cc\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RAIDZn \u987a\u5e8f 4KB \u8bfb\u53d6 - \u65e0 cache \u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RAIDZ1 - ",(0,l.kt)("inlineCode",{parentName:"li"},"N/(N-1) * IOPS")),(0,l.kt)("li",{parentName:"ul"},"RAIDZ2 - ",(0,l.kt)("inlineCode",{parentName:"li"},"N/(N-2) * IOPS")),(0,l.kt)("li",{parentName:"ul"},"RAIDZ3 - ",(0,l.kt)("inlineCode",{parentName:"li"},"N/(N-3) * IOPS")),(0,l.kt)("li",{parentName:"ul"},"\u6709 cache \u65f6\uff0c\u5219\u4e0a\u9650\u4e3a cache \u78c1\u76d8\u7684 IOPS"))),(0,l.kt)("li",{parentName:"ul"},"\u5199\u5165\u6027\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u76f4\u63a5\u4f30\u7b97\uff0czfs \u5185\u90e8 zil \u4e3a\u5f02\u6b65\u5199\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u989d\u5916\u7684 ZIL \u8bbe\u5907\u53ef\u63d0\u5347 write \u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u5728\u6bcf\u4e2a\u78c1\u76d8\u9884\u7559\u7a7a\u95f4\u5b58\u50a8 ZIL"))),(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd\u5f71\u54cd\u56e0\u7d20",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"recordsize - \u9ed8\u8ba4 128k"),(0,l.kt)("li",{parentName:"ul"},"compression"),(0,l.kt)("li",{parentName:"ul"},"ashift"),(0,l.kt)("li",{parentName:"ul"},"dedup - \u9ed8\u8ba4\u5173\u95ed - \u7279\u6b8a\u573a\u666f\u53bb\u91cd\u80fd\u63d0\u5347\u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"atime - \u9ed8\u8ba4\u5f00\u542f - \u4e00\u822c\u4e0d\u9700\u8981\uff0c\u53ef\u5173\u95ed\u63d0\u5347\u8bfb\u53d6\u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"logbias - \u9ed8\u8ba4 latency, \u53ef\u8bbe\u7f6e\u4e3a throughput, \u51cf\u5c11\u4f7f\u7528\u989d\u5916 zil \u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"sync",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5173\u95ed\u6700\u591a\u4e22\u5931 30s \u6570\u636e - \u5982\u679c\u573a\u666f\u5141\u8bb8\u4e22\u5931\uff0c\u5219\u4e0d\u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 UPS \u786e\u4fdd\u5b58\u50a8 \u6bd4 \u7f51\u7edc\u540e\u5f02\u5e38 \u53ef\u8003\u8651\u5173\u95ed sync"))),(0,l.kt)("li",{parentName:"ul"},"primarycache"),(0,l.kt)("li",{parentName:"ul"},"secondarycache")))),(0,l.kt)("h2",s({},{id:"zfs-import"}),"zfs import"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u7cfb\u7edf\u542f\u52a8\u4f1a\u4ece\u7f13\u5b58 \u5bfc\u5165 - zfs import -c /etc/zfs/zpool.cache"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7f13\u5b58\u4e22\u5931\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u641c\u7d22\u78c1\u76d8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u66f4\u6362\u4e86\u7cfb\u7edf"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://openzfs.github.io/openzfs-docs/man/8/zpool-import.8.html"}),"zpool-import.8"))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b \u53ef\u5bfc\u5165 \u7684 pool\n# \u4f7f\u7528 lsblk \u641c\u7d22\nzpool import\n# \u6267\u884c\u5bfc\u5165 - \u5bfc\u5165\u6240\u7684\nzpool import -a\n\n# \u624b\u52a8\u6307\u5b9a\u641c\u7d22\u76ee\u5f55\nzpool import -d /dev/disk/by-id\n")),(0,l.kt)("h2",s({},{id:"\u5173\u95ed\u6240\u6709-atime"}),"\u5173\u95ed\u6240\u6709 atime"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"zfs get atime | grep '\\son\\s' | cut -d ' ' -f 1 | xargs -n1 sudo zfs set atime=off\n")),(0,l.kt)("h2",s({},{id:"zvol-vs-zfs"}),"zvol vs zfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"zvol - \u5757\u8bbe\u5907",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"raidz\u3001\u538b\u7f29"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u6240\u6709 zfs \u4f34\u968f\u7684\u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},"zfs - \u6587\u4ef6\u7cfb\u7edf - dataset",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5feb\u7167\u3001\u514b\u9686"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7edf\u6709\u4e00\u5b9a\u7279\u6027 - \u4e5f\u6709\u7f3a\u9677",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7f3a\u9677: \u4e0d\u652f\u6301 rename2/overlay")))))),(0,l.kt)("h2",s({},{id:"high-system-usage"}),"High System Usage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"z_wr_iss"),(0,l.kt)("li",{parentName:"ul"},"spl_dynamic_tas"),(0,l.kt)("li",{parentName:"ul"},"z_wr_iss_h"),(0,l.kt)("li",{parentName:"ul"},"l2arc_feed"),(0,l.kt)("li",{parentName:"ul"},"z_wr_int_h"),(0,l.kt)("li",{parentName:"ul"},"rcu_sched"),(0,l.kt)("li",{parentName:"ul"},"txg_sync"),(0,l.kt)("li",{parentName:"ul"},"z_ioctl_int"),(0,l.kt)("li",{parentName:"ul"},"kworker/0:1-events"),(0,l.kt)("li",{parentName:"ul"},"z_null_iss"),(0,l.kt)("li",{parentName:"ul"},"z_null_int"),(0,l.kt)("li",{parentName:"ul"},"dp_sync_taskq"),(0,l.kt)("li",{parentName:"ul"},"z_wr_int"),(0,l.kt)("li",{parentName:"ul"},"arc_reap"),(0,l.kt)("li",{parentName:"ul"},"ksoftirqd"),(0,l.kt)("li",{parentName:"ul"},"dbuf_evict"),(0,l.kt)("li",{parentName:"ul"},"mmp"),(0,l.kt)("li",{parentName:"ul"},"migration/0")),(0,l.kt)("h2",s({},{id:"zfs-list-slow"}),"zfs list slow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dataset \u591a\u4e86\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"zfs list")," \u975e\u5e38\u6162")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"time zfs list | wc -l\n\n# docker zfs volume \u4f7f\u7528\u7684\u547d\u4ee4\nzfs list -s name -o name,guid,available -H -p\nzfs list -r -t all -Hp -o name,origin,used,available,mountpoint,compression,type,volsize,quota,referenced,written,logicalused,usedbydataset main/docker\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{}),"758\n\nreal    0m1.777s\nuser    0m0.177s\nsys     0m1.599s\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/openzfs/zfs/discussions/8898"}),"https://github.com/openzfs/zfs/discussions/8898"))),(0,l.kt)("h1",s({},{id:"glossary"}),"Glossary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SPA - Storage Pool Allocator")))}h.isMDXComponent=!0}}]);