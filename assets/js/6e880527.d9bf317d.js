/*! For license information please see 6e880527.d9bf317d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69788],{74776:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(2488),a=n(62780);const r={title:"Health Check"},l="Health Check",i={id:"os/alpine/alpine-health",title:"Health Check",description:"DISK",source:"@site/../notes/os/alpine/alpine-health.md",sourceDirName:"os/alpine",slug:"/os/alpine/health",permalink:"/notes/os/alpine/health",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-health.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639484090,formattedLastUpdatedAt:"Dec 14, 2021",frontMatter:{title:"Health Check"},sidebar:"docs",previous:{title:"Alpine GLIBC",permalink:"/notes/os/alpine/glibc"},next:{title:"Alpine Image",permalink:"/notes/os/alpine/image"}},o={},d=[{value:"DISK",id:"disk",level:2},{value:"\u5355\u4e2a\u78c1\u76d8",id:"\u5355\u4e2a\u78c1\u76d8",level:2},{value:"SCSI",id:"scsi",level:2},{value:"IO Load",id:"io-load",level:2},{value:"sar",id:"sar",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"health-check",children:"Health Check"}),"\n",(0,t.jsx)(s.h2,{id:"disk",children:"DISK"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apk add smartmontools\n# -a \u8f93\u51fa\u6240\u6709\u4fe1\u606f\nsmartctl -a /dev/sdb\n# -x \u8f93\u51fa\u66f4\u591a\u4fe1\u606f, \u5305\u542b\u975e smart \u4fe1\u606f\nsmartctl -x /dev/sdb\n# -H \u8f93\u51fa\u5065\u5eb7\u72b6\u6001\nsmartctl -H /dev/sdb\n# -t \u8fd0\u884c\u6d4b\u8bd5, -a \u67e5\u770b\u72b6\u6001\nsmartctl -t short /dev/sdb\n\n# \u574f\u5757\u68c0\u6d4b\napk add e2fsprogs-extra\n# \u6ce8\u610f: \u975e\u5e38\u6162\n# 1TB 4 runs(-w) \u5dee\u4e0d\u591a 70 \u5c0f\u65f6\nbadblocks -v /dev/sdb\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u5355\u4e2a\u78c1\u76d8",children:"\u5355\u4e2a\u78c1\u76d8"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"iotop \u4e0d\u652f\u6301\u6307\u5b9a\u78c1\u76d8"}),"\n",(0,t.jsxs)(s.li,{children:["dstat \u5df2\u7ecf\u4e0d\u518d\u7ef4\u62a4\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u53ef\u5c1d\u8bd5 ",(0,t.jsx)(s.a,{href:"https://github.com/scottchiefbaker/dool",children:"scottchiefbaker/dool"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"iostat -d 10 /dev/sdf\n\ndstat -D sda,sdc\ndstat -tdD /dev/sda --top-io\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# \u78c1\u76d8\u53ea\u8bfb\u72b6\u6001\ncat /sys/block/sda/sda2/ro\n# \u5c06\u78c1\u76d8\u8bbe\u7f6e\u4e3a\u53ea\u8bfb\necho 1 >/sys/block/sda/sda2/ro\n"})}),"\n",(0,t.jsx)(s.h2,{id:"scsi",children:"SCSI"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Power+Systems/page/SCSI+-+Hot+add,+remove,+rescan+of+SCSI+devices",children:"SCSI - Hot add, remove, rescan of SCSI devices"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'apk add lsscsi\n# \u67e5\u770b scsi \u8bbe\u5907\nlsscsi\ncat /proc/scsi/scsi\n\n# \u91cd\u65b0\u626b\u63cf\necho "- - -" > /sys/class/scsi_host/host0/scan\n# \u79fb\u9664\u8bbe\u5907\necho 1 > /sys/bus/scsi/drivers/sd/<SCSI-ID>/delete\n'})}),"\n",(0,t.jsx)(s.h2,{id:"io-load",children:"IO Load"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apk add sysstat\n# %iowait - CPU \u7b49\u5f85 IO \u7684\u65f6\u95f4 - CPU \u8d1f\u8f7d\u9ad8\u60c5\u51b5\u8be5\u503c\u610f\u4e49\u4e0d\u5927\niostat\n\napk add iotop\n# \u5206\u6790\u6bcf\u4e2a\u8fdb\u7a0b io \u60c5\u51b5\niotop\n"})}),"\n",(0,t.jsx)(s.h2,{id:"sar",children:"sar"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u6536\u96c6\u8bb0\u5f55 /proc, /sys \u4fe1\u606f\u8bb0\u5f55\u5230\u6587\u4ef6\uff0c\u7528\u4e8e\u9700\u8981\u7684\u65f6\u5019\u67e5\u770b"}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://man7.org/linux/man-pages/man1/sar.1.html",children:"sar.1"})}),"\n",(0,t.jsx)(s.li,{children:"\u914d\u7f6e /etc/sysconfig/sysstat"}),"\n",(0,t.jsxs)(s.li,{children:["\u9ed8\u8ba4\u65e5\u5fd7\u76ee\u5f55 - /var/log/sa\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"/var/log/sa/saDD"}),"\n",(0,t.jsx)(s.li,{children:"/var/log/sa/saYYYYMMDD"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# \u67e5\u770b - \u7c7b\u4f3c iostat \u7ed3\u679c\nsar\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u914d\u7f6e cron \u5b9a\u65f6\u751f\u6210"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# Run sar to gather stats\n*/2 * * * *   /usr/lib/sa/sa1 1 1\n# Additional run at 23:59 to rotate the statistics file\n59 23 * * *   /usr/lib/sa/sa1 60 2\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38088:(e,s,n)=>{var t=n(96651),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,r={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)l.call(s,t)&&!o.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:a,type:e,key:d,ref:c,props:r,_owner:i.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},2488:(e,s,n)=>{e.exports=n(38088)},62780:(e,s,n)=>{n.d(s,{I:()=>i,M:()=>l});var t=n(96651);const a={},r=t.createContext(a);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);