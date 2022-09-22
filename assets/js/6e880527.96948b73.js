"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11532],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4275:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(96600),r=n(27279),s=(n(59496),n(49613)),l=["components"],o={title:"Health Check"},i="Health Check",c={unversionedId:"os/alpine/alpine-health",id:"os/alpine/alpine-health",title:"Health Check",description:"DISK",source:"@site/../notes/os/alpine/alpine-health.md",sourceDirName:"os/alpine",slug:"/os/alpine/alpine-health",permalink:"/notes/os/alpine/alpine-health",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/alpine/alpine-health.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Health Check"},sidebar:"docs",previous:{title:"Alpine FAQ",permalink:"/notes/os/alpine/alpine-faq"},next:{title:"AlpineLinux Install",permalink:"/notes/os/alpine/alpine-install"}},p={},u=[{value:"DISK",id:"disk",level:2},{value:"\u5355\u4e2a\u78c1\u76d8",id:"\u5355\u4e2a\u78c1\u76d8",level:2},{value:"SCSI",id:"scsi",level:2},{value:"IO Load",id:"io-load",level:2},{value:"sar",id:"sar",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"health-check"},"Health Check"),(0,s.kt)("h2",{id:"disk"},"DISK"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"apk add smartmontools\n# -a \u8f93\u51fa\u6240\u6709\u4fe1\u606f\nsmartctl -a /dev/sdb\n# -x \u8f93\u51fa\u66f4\u591a\u4fe1\u606f, \u5305\u542b\u975e smart \u4fe1\u606f\nsmartctl -x /dev/sdb\n# -H \u8f93\u51fa\u5065\u5eb7\u72b6\u6001\nsmartctl -H /dev/sdb\n# -t \u8fd0\u884c\u6d4b\u8bd5, -a \u67e5\u770b\u72b6\u6001\nsmartctl -t short /dev/sdb\n\n# \u574f\u5757\u68c0\u6d4b\napk add e2fsprogs-extra\n# \u6ce8\u610f: \u975e\u5e38\u6162\n# 1TB 4 runs(-w) \u5dee\u4e0d\u591a 70 \u5c0f\u65f6\nbadblocks -v /dev/sdb\n")),(0,s.kt)("h2",{id:"\u5355\u4e2a\u78c1\u76d8"},"\u5355\u4e2a\u78c1\u76d8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"iotop \u4e0d\u652f\u6301\u6307\u5b9a\u78c1\u76d8"),(0,s.kt)("li",{parentName:"ul"},"dstat \u5df2\u7ecf\u4e0d\u518d\u7ef4\u62a4",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u53ef\u5c1d\u8bd5 ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/scottchiefbaker/dool"},"scottchiefbaker/dool"))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"iostat -d 10 /dev/sdf\n\ndstat -D sda,sdc\ndstat -tdD /dev/sda --top-io\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u78c1\u76d8\u53ea\u8bfb\u72b6\u6001\ncat /sys/block/sda/sda2/ro\n# \u5c06\u78c1\u76d8\u8bbe\u7f6e\u4e3a\u53ea\u8bfb\necho 1 >/sys/block/sda/sda2/ro\n")),(0,s.kt)("h2",{id:"scsi"},"SCSI"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Power+Systems/page/SCSI+-+Hot+add,+remove,+rescan+of+SCSI+devices"},"SCSI - Hot add, remove, rescan of SCSI devices"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'apk add lsscsi\n# \u67e5\u770b scsi \u8bbe\u5907\nlsscsi\ncat /proc/scsi/scsi\n\n# \u91cd\u65b0\u626b\u63cf\necho "- - -" > /sys/class/scsi_host/host0/scan\n# \u79fb\u9664\u8bbe\u5907\necho 1 > /sys/bus/scsi/drivers/sd/<SCSI-ID>/delete\n')),(0,s.kt)("h2",{id:"io-load"},"IO Load"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"apk add sysstat\n# %iowait - CPU \u7b49\u5f85 IO \u7684\u65f6\u95f4 - CPU \u8d1f\u8f7d\u9ad8\u60c5\u51b5\u8be5\u503c\u610f\u4e49\u4e0d\u5927\niostat\n\napk add iotop\n# \u5206\u6790\u6bcf\u4e2a\u8fdb\u7a0b io \u60c5\u51b5\niotop\n")),(0,s.kt)("h2",{id:"sar"},"sar"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6536\u96c6\u8bb0\u5f55 /proc, /sys \u4fe1\u606f\u8bb0\u5f55\u5230\u6587\u4ef6\uff0c\u7528\u4e8e\u9700\u8981\u7684\u65f6\u5019\u67e5\u770b"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/sar.1.html"},"sar.1")),(0,s.kt)("li",{parentName:"ul"},"\u914d\u7f6e /etc/sysconfig/sysstat"),(0,s.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u65e5\u5fd7\u76ee\u5f55 - /var/log/sa",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"/var/log/sa/saDD"),(0,s.kt)("li",{parentName:"ul"},"/var/log/sa/saYYYYMMDD")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b - \u7c7b\u4f3c iostat \u7ed3\u679c\nsar\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u914d\u7f6e cron \u5b9a\u65f6\u751f\u6210")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Run sar to gather stats\n*/2 * * * *   /usr/lib/sa/sa1 1 1\n# Additional run at 23:59 to rotate the statistics file\n59 23 * * *   /usr/lib/sa/sa1 60 2\n")))}m.isMDXComponent=!0}}]);