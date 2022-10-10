"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89444],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(a),c=l,d=k["".concat(o,".").concat(c)]||k[c]||s[c]||n;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},33111:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return c},default:function(){return A},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return f}});var r=a(49613),l=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e};const k={title:"RAID"},c="RAID",d={unversionedId:"ops/storage/block/raid",id:"ops/storage/block/raid",title:"RAID",description:"- RAID",source:"@site/../notes/ops/storage/block/raid.md",sourceDirName:"ops/storage/block",slug:"/ops/storage/block/raid",permalink:"/notes/ops/storage/block/raid",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/block/raid.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"RAID"},sidebar:"docs",previous:{title:"NBD",permalink:"/notes/ops/storage/block/nbd"},next:{title:"Encryption",permalink:"/notes/ops/storage/encryption/"}},N={},f=[{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:2},{value:"\u5982\u4f55\u9009\u62e9 RAID",id:"\u5982\u4f55\u9009\u62e9-raid",level:2},{value:"\u9635\u5217\u5361 vs \u76f4\u901a\u5361",id:"\u9635\u5217\u5361-vs-\u76f4\u901a\u5361",level:2},{value:"JBOD vs HBA",id:"jbod-vs-hba",level:2},{value:"\u6545\u969c/\u635f\u574f/\u53ef\u7528",id:"\u6545\u969c\u635f\u574f\u53ef\u7528",level:2}],h={toc:f};function A(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=s(s({},h),m),n(t,i({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"raid"}),"RAID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/RAID"}),"RAID"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Redundant Array of Independent Disks - \u72ec\u7acb\u786c\u76d8\u5197\u4f59\u9635\u5217"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Standard_RAID_levels"}),"Standard_RAID_levels"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RAID 0"),(0,r.kt)("li",{parentName:"ul"},"RAID 1"),(0,r.kt)("li",{parentName:"ul"},"RAID 2"),(0,r.kt)("li",{parentName:"ul"},"RAID 3"),(0,r.kt)("li",{parentName:"ul"},"RAID 4"),(0,r.kt)("li",{parentName:"ul"},"RAID 5"),(0,r.kt)("li",{parentName:"ul"},"write hole",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in which data and parity become inconsistent after a power loss"))),(0,r.kt)("li",{parentName:"ul"},"RAID 6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Nested_RAID_levels"}),"Nested RAID levels"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RAID 01 (RAID 0+1)"),(0,r.kt)("li",{parentName:"ul"},"RAID 03 (RAID 0+3)"),(0,r.kt)("li",{parentName:"ul"},"RAID 10 (RAID 1+0)"),(0,r.kt)("li",{parentName:"ul"},"RAID 50 (RAID 5+0)"),(0,r.kt)("li",{parentName:"ul"},"RAID 60 (RAID 6+0)"),(0,r.kt)("li",{parentName:"ul"},"RAID 100 (RAID 10+0)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Data_striping"}),"Data striping")," - \u6570\u636e\u5206\u6761",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"segmenting logically sequential data, such as a file, so that consecutive segments are stored on different physical storage devices."),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u541e\u5410\u91cf"),(0,r.kt)("li",{parentName:"ul"},"IO \u8d1f\u8f7d"))),(0,r.kt)("li",{parentName:"ul"},"archlinux ",(0,r.kt)("a",s({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/RAID"}),"RAID"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u4f7f\u7528\u65f6\u95f4\n# Power_On_Hours\nsmartctl --all /dev/sdj  | command grep -i Power\n\n# RM, HOTPLUG \u4e0d\u51c6\u786e\n# HOTPLUG - removable or hotplug device (usb, pcmcia, ...)\n# ROTA - rotatable\n# RM - removable\nlsblk -d -o NAME,MAJ:MIN,RM,HOTPLUG,MODEL,ROTA,TYPE,TRAN,SUBSYSTEMS,VENDOR\n")),(0,r.kt)("h2",s({},{id:"\u786c\u4ef6"}),"\u786c\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JBOD - Just Bunch Of Disk - RAID \u5361\u7684\u4e00\u79cd\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"HBA - Host Bus Adapter - \u76f4\u901a\u5361 - Dell HBA"),(0,r.kt)("li",{parentName:"ul"},"IT - Initiator Target - LSI \u56fa\u4ef6\u80fd\u529b\uff0c\u7c7b\u4f3c HBA"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e IOC \u7684\u4ea7\u54c1\uff0c\u4e00\u822c\u79f0\u4e3a HBA \u5361\uff0c\u4e5f\u5c31\u662f\u5e38\u8bf4\u7684\u76f4\u8fde\u5361\uff0c\u4e00\u822c\u652f\u6301 Raid0/1/10/1E"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ROC \u7684\u4ea7\u54c1\uff0c\u4e00\u822c\u79f0\u4e3a Raid \u5361\uff0c\u4e00\u822c\u5e26\u6709\u7f13\u5b58\uff0c\u652f\u6301 Raid0/1/10/1E/5/50/6/60\uff0c\u53ef\u9009 BBU\uff0c\u9644\u5e26\u7684\u9ad8\u7ea7\u8f6f\u4ef6\u5305\u62ec\uff1aCacheCade\u3001FashPath\u3001SafeStore \u7b49"),(0,r.kt)("li",{parentName:"ul"},"1064\u30011064e\u30011068\u30011068e\u30012008\u30012308\u30013008 \u5c5e\u4e8e IOC\uff1b2108\u30012208 \u5c5e\u4e8e ROC\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u535a\u901a\u6536\u8d2d\u4e86 Mega LSI"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://raid.wiki.kernel.org/index.php/Hardware_Raid_Setup_using_MegaCli"}),"Hardware Raid Setup using MegaCli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://hwraid.le-vert.net/wiki/LSIMegaRAIDSAS"}),"LSI MegaRAID SAS")),(0,r.kt)("li",{parentName:"ul"},"\u535a\u901a ",(0,r.kt)("a",s({parentName:"li"},{href:"https://www.broadcom.com/products/storage/raid-controllers/"}),"RAID \u63a7\u5236\u5668")),(0,r.kt)("li",{parentName:"ul"},"\u535a\u901a ",(0,r.kt)("a",s({parentName:"li"},{href:"https://www.broadcom.com/products/storage/host-bus-adapters/"}),"HAB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.cisco.com/c/en/us/support/docs/servers-unified-computing/ucs-c-series-rack-servers/115020-intro-lsi-megacli-00.html"}),"Introduction to LSI's MegaCLI Utility")),(0,r.kt)("li",{parentName:"ul"},"ftp://download2.boulder.ibm.com/ecc/sar/CMA/XSA/ibm_utl_sraidmr_megacli-8.00.48_linux_32-64.zip"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.thomas-krenn.com/en/wiki/StorCLI"}),"Note that MegaCLI is now called StorCLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.thomas-krenn.com/en/download.html?product=12190"}),"MegaRAID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://docs.broadcom.com/docs/12352476"}),"StorCLI Reference Manual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://blog.51cto.com/mofesi/1309251"}),"Storcli \u5e38\u7528\u547d\u4ee4"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"./storcli64 show\n")),(0,r.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",s({},{id:"\u5982\u4f55\u9009\u62e9-raid"}),"\u5982\u4f55\u9009\u62e9 RAID"),(0,r.kt)("p",null,"\u505a RAID \u9996\u5148\u8981\u8003\u8651\u76ee\u7684"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u591a\u78c1\u76d8\u5e76\u53d1 IO"),(0,r.kt)("li",{parentName:"ul"},"RAID 10"))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u5229\u7528\u7387",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u526f\u672c\u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},"RAID 5"))),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u574f\u591a\u5c11\u786c\u76d8"),(0,r.kt)("li",{parentName:"ul"},"RAID 6 - \u76ee\u524d\u4f7f\u7528\u8f83\u591a\uff0c\u5b58\u50a8\u6210\u672c\u4f4e")))),(0,r.kt)("p",null,"\u5176\u6b21\u8fd8\u9700\u8981\u8003\u8651\u6709\u4ec0\u4e48\u786c\u4ef6\uff0cSSD\u3001\u5927\u5bb9\u91cf 3.5 SATA\u3001\u5927\u5bb9\u91cf 3.5 SAS\u3001\u5c0f\u5bb9\u91cf 2.5 SAS\uff0c\u786c\u4ef6\u4e0d\u540c\u53ef\u80fd\u5bfc\u81f4\u7ec4\u5efa RAID \u7684\u65b9\u5f0f\u548c\u7ed3\u679c\u4e0d\u540c\u3002\n\u4e00\u822c\u4e3a\u4e86\u52a0\u901f RAID \u53ef\u80fd\u4f1a\u52a0 SSD \u6765\u505a\u65e5\u5fd7\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u7ec4\u5efa RAID \u53ef\u80fd\u8fd8\u9700\u8981\u989d\u5916\u7684\u5185\u5b58\u548c CPU\uff0c\u6839\u636e\u9700\u8981\u7684\u7279\u6027\u6765\u8fdb\u884c\u9009\u62e9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ZFS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5360\u7528\u8f83\u591a\u5185\u5b58\uff0c\u81f3\u5c11 1T 1G\uff0c\u9ed8\u8ba4\u4f7f\u7528 50%"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8fdb\u884c LZ4 \u538b\u7f29\uff0c\u4e0d\u5360\u7528\u592a\u591a CPU"))),(0,r.kt)("li",{parentName:"ul"},"mdadm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u592a\u591a\u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u9644\u52a0\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u5e73\u6ed1\u8fc1\u79fb"))),(0,r.kt)("li",{parentName:"ul"},"\u786c\u4ef6 - \u73b0\u5728\u5df2\u7ecf\u4e0d\u63a8\u8350",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e0\u9700\u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206 RAID \u5361\u81ea\u5e26\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u9644\u52a0\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u4e0e\u786c\u4ef6\u7ed1\u5b9a\uff0c\u96be\u4ee5\u76d1\u63a7\u7ba1\u7406\uff0c\u5b58\u50a8\u4e0d\u6613\u8fc1\u79fb")))),(0,r.kt)("p",null,"\u9664\u4e86\u57fa\u7840\u7684 RAID \u80fd\u529b\uff0c\u5982\u679c\u8fd8\u9700\u8981\u66f4\u591a\u7684\u9644\u52a0\u80fd\u529b\uff0c\u5219\u4e0d\u5728\u666e\u901a RAID \u7684\u8303\u7574\u5185\uff0c\u53ef\u8003\u8651 ZFS\uff0c\u4f8b\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u589e\u91cf\u5907\u4efd"),(0,r.kt)("li",{parentName:"ul"},"\u5feb\u7167"),(0,r.kt)("li",{parentName:"ul"},"\u53bb\u91cd")),(0,r.kt)("h2",s({},{id:"\u9635\u5217\u5361-vs-\u76f4\u901a\u5361"}),"\u9635\u5217\u5361 vs \u76f4\u901a\u5361"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8f6f RAID \u63a8\u8350\u4f7f\u7528\u76f4\u901a\u5361 HBA")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JBOD \u6bd4 MD RAID0 \u5feb\u7ea6 30%"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://tobert.github.io/post/2014-06-17-jbod-vs-raid.html"}),"JOBD vs RAID"))),(0,r.kt)("h2",s({},{id:"jbod-vs-hba"}),"JBOD vs HBA"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JBOD",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RAID \u5361\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u7cca\u4e86 HBA \u754c\u7ebf"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6ca1\u6709 HBA \u5361\u7684\u65f6\u5019\u4f7f\u7528 RAID \u5361\u7684 JBOD \u8fbe\u5230\u76f8\u540c\u7684\u76ee\u7684"))),(0,r.kt)("li",{parentName:"ul"},"HBA",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f4\u901a\u5361")))),(0,r.kt)("h2",s({},{id:"\u6545\u969c\u635f\u574f\u53ef\u7528"}),"\u6545\u969c/\u635f\u574f/\u53ef\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Annualized_failure_rate"}),"AFR")," - Annualized failure rate",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e74\u635f\u574f\u7387"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.backblaze.com/b2/hard-drive-test-data.html"}),"Hard Drive Data and Stats"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.backblaze.com/blog/backblaze-drive-stats-for-q1-2022/"}),"Backblaze Drive Stats for Q1 2022"))))))}A.isMDXComponent=!0}}]);