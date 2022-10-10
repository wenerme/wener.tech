"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5302],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63418:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(d)for(var r of d(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={id:"mdadm",title:"mdadm"},u="Multi Device Administration",f={unversionedId:"ops/storage/block/mdadm",id:"ops/storage/block/mdadm",title:"mdadm",description:"Tips",source:"@site/../notes/ops/storage/block/mdadm.md",sourceDirName:"ops/storage/block",slug:"/ops/storage/block/mdadm",permalink:"/notes/ops/storage/block/mdadm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/storage/block/mdadm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"mdadm",title:"mdadm"},sidebar:"docs",previous:{title:"LVM",permalink:"/notes/ops/storage/block/lvm"},next:{title:"NBD",permalink:"/notes/ops/storage/block/nbd"}},v={},b=[{value:"Tips",id:"tips",level:2},{value:"RAID \u6587\u4ef6\u7cfb\u7edf",id:"raid-\u6587\u4ef6\u7cfb\u7edf",level:2}],k={toc:b};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},k),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"multi-device-administration"}),"Multi Device Administration"),(0,n.kt)("h2",p({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://raid.wiki.kernel.org/index.php/A_guide_to_mdadm"}),"Guide to mdadm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://wiki.mikejung.biz/Software_RAID"}),"Software RAID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://raid.wiki.kernel.org"}),"Linux Raid"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://raid.wiki.kernel.org/index.php/RAID_setup"}),"RAID setup")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Software_RAID_and_LVM"}),"Software RAID and LVM"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u7ebf\u6027\u6a21\u5f0f\n# \u5408\u5e76\u4e24\u4e2a\u5206\u533a\uff0c\u5206\u533a\u5927\u5c0f\u4efb\u610f\nmdadm --create --verbose /dev/md0 --level=linear --raid-devices=2 /dev/sda1 /dev/sdb2\n\n# RAID 0\n# stripe \u6a21\u5f0f\uff0c\u5207\u5206\u6570\u636e\u6563\u843d\u5230\u4e2a\u4e2a\u78c1\u76d8\uff0c\u5229\u7528\u5e76\u53d1\u8bbf\u95ee\u80fd\u529b\uff0c\u6bcf\u4e2a\u5206\u533a\u5927\u5c0f\u76f8\u8fd1\n# --spare-devices=1 /dev/sdd1 \u6307\u5b9a\u4e86\u4e00\u4e2a\u7a7a\u95f2\u76d8\nmdadm --create --verbose /dev/md0 --level=mirror --raid-devices=2 /dev/sdb1 /dev/sdc1 --spare-devices=1 /dev/sdd1\n\n# RAID 4/5/6\n# \u9ed8\u8ba4\u5757\u5927\u5c0f 128k \u8bfb\u5199\u573a\u666f\u4e0d\u540c\uff0c\u5bf9\u6027\u80fd\u5f71\u54cd\u4e0d\u540c\nmdadm --create --verbose /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1 --spare-devices=1 /dev/sde1\n\nmdadm --create --verbose /dev/md/main --level=6 --raid-devices=8 /dev/sd{a,b,c,d,e,f,g,h} --assume-clean\n\n# \u67e5\u770b\u91cd\u6784\u72b6\u6001\ncat /proc/mdstat\n# \u626b\u63cf\u751f\u6210\u914d\u7f6e\u6587\u4ef6\nmdadm --detail --scan >> /etc/mdadm/mdadm.conf\n\n# \u626b\u63cf\u73b0\u6709 raid \u914d\u7f6e\nmdadm --assemble --scan \n# \u626b\u63cf\u6307\u5b9a\u7684\nmdadm --scan --assemble --uuid=a26bf396:31389f83:0df1722d:f404fe4c\n\n# \u505c\u6b62\nmdadm --stop /dev/md0\n\n")),(0,n.kt)("h2",p({},{id:"raid-\u6587\u4ef6\u7cfb\u7edf"}),"RAID \u6587\u4ef6\u7cfb\u7edf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8003\u91cf\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728\u7ebf\u6269\u7f29\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 stride \u548c stripe-width \u6765\u4f18\u5316\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"RAID \u5757\u5927\u5c0f\u662f\u6027\u80fd\u5173\u952e"))),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4e3a\u4e86\u652f\u6491\u7075\u6d3b\u6269\u7f29\u5bb9\u4f1a\u4f7f\u7528 LVM"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9 FS \u8fd8\u9700\u8981\u8003\u8651\u662f\u5426\u652f\u6301\u6821\u9a8c"),(0,n.kt)("li",{parentName:"ul"},"XFS \u662f\u76f8\u5bf9\u6bd4\u8f83\u597d\u7684\u9009\u62e9")))}y.isMDXComponent=!0}}]);