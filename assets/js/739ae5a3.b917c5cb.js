/*! For license information please see 739ae5a3.b917c5cb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87839],{75937:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=s(11527),r=s(47214);const l={title:"SMB"},t="SMB",o={id:"os/linux/fs/smb",title:"SMB",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/linux/fs/smb.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/smb",permalink:"/notes/os/linux/fs/smb",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/smb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"SMB"},sidebar:"docs",previous:{title:"sfdisk",permalink:"/notes/os/linux/fs/sfdisk"},next:{title:"ZFS",permalink:"/notes/os/linux/fs/zfs/"}},d={},c=[{value:"CIFS vs SMB",id:"cifs-vs-smb",level:2},{value:"mounting cifs: \u201cOperation not supported\u201d",id:"mounting-cifs-operation-not-supported",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"smb",children:"SMB"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u662f\u4ec0\u4e48\uff1f\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Server Message Block"}),"\n",(0,i.jsx)(e.li,{children:"1983 IBM \u521b\u5efa"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7248\u672c\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["1983 SMBv1\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u81ea Windows Server 2003\uff0cWindows 2000"}),"\n",(0,i.jsx)(e.li,{children:"Windows Server 2012 R2 \u5e9f\u5f03\u652f\u6301"}),"\n",(0,i.jsx)(e.li,{children:"Windows Server 2016\uff0cWindows 10 \u65e0 SMBv1 \u652f\u6301"}),"\n",(0,i.jsx)(e.li,{children:"Samba 4.11 \u9ed8\u8ba4\u7981\u7528"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["2006 SMBv2\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u81ea Windows Vista in 2006\uff0cWindows Server 2008"}),"\n",(0,i.jsx)(e.li,{children:"Samba 3.6"}),"\n",(0,i.jsx)(e.li,{children:"\u51cf\u5c11\u6307\u4ee4\uff0c\u652f\u6301\u7b26\u53f7\u94fe\u63a5\uff0c\u7f13\u5b58\u6587\u4ef6\u5c5e\u6027"}),"\n",(0,i.jsx)(e.li,{children:"\u5f00\u53d1\u534f\u8bae\u89c4\u8303"}),"\n",(0,i.jsx)(e.li,{children:"OS X 10.9 \u4ece afp \u8fc1\u79fb\u5230 SMBv2"}),"\n",(0,i.jsx)(e.li,{children:"Linux 3.7 CIFS \u652f\u6301 SMBv2"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["2009 SMBv2.1\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u81ea Windows 7, Windows Server 2008 R2"}),"\n",(0,i.jsx)(e.li,{children:"opportunistic locking mechanism"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["2012 SMBv3 - SMBv2.2\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"SMB Direct Protocol - SMB RDMA"}),"\n",(0,i.jsx)(e.li,{children:"\u591a\u901a\u9053 - \u4e00\u4e2a\u4f1a\u8bdd\u591a\u4e2a\u8fde\u63a5"}),"\n",(0,i.jsx)(e.li,{children:"\u4f20\u8f93\u5c42 Failover"}),"\n",(0,i.jsx)(e.li,{children:"\u7aef\u5230\u7aef\u52a0\u5bc6"}),"\n",(0,i.jsx)(e.li,{children:"\u65b0\u589e AES \u7b7e\u540d\u7b97\u6cd5 - \u4e4b\u524d\u662f HMAC SHA-256"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["2013 SMB 3.0.2 - 3.02\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u652f\u6301\u7981\u7528 SMBv1"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["2016 SMB 3.1.1\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728 AES-128 CCM \u65b0\u589e AES-128 GCM"}),"\n",(0,i.jsx)(e.li,{children:"SHA-512 \u6bcf\u6b21\u8ba4\u8bc1\u5b8c\u6574\u6027\u68c0\u67e5"}),"\n",(0,i.jsx)(e.li,{children:"\u5f3a\u5236\u5b89\u5168\u534f\u8bae\u534f\u5546"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(e.h2,{id:"cifs-vs-smb",children:"CIFS vs SMB"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["CIFS - Common Internet File System\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"SMB \u7684\u65b9\u8a00"}),"\n",(0,i.jsx)(e.li,{children:"SMB \u7531 IBM \u521b\u5efa"}),"\n",(0,i.jsx)(e.li,{children:"1996 \u5fae\u8f6f \u5c1d\u8bd5\u91cd\u547d\u540d\u4e3a CIFS\uff0c \u5bf9\u5e94 SMBv1\uff0c\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd"}),"\n",(0,i.jsx)(e.li,{children:"Linux \u7684 CIFS \u6a21\u5757\u652f\u6301 SMBv2"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u5efa\u8bae\u7edf\u4e00\u4f7f\u7528 SMB"}),"\n",(0,i.jsx)(e.li,{children:"Windows Vista/Windows 2006 SMBv2"}),"\n",(0,i.jsx)(e.li,{children:"Windows 8/Windows 2012 SMBv3"}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://blog.varonis.com/cifs-vs-smb/",children:"CIFS vs SMB"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"mounting-cifs-operation-not-supported",children:"mounting cifs: \u201cOperation not supported\u201d"}),"\n",(0,i.jsx)(e.p,{children:"\u5c1d\u8bd5\u6dfb\u52a0 vers=3.0 \u9009\u9879"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"mount -t cifs //192.168.1.1/share /mnt -o user=username,password=passwordd,vers=3.0\n"})})]})}function x(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},3354:(n,e,s)=>{var i=s(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,s){var i,l={},c=null,h=null;for(i in void 0!==s&&(c=""+s),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(h=e.ref),e)t.call(e,i)&&!d.hasOwnProperty(i)&&(l[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===l[i]&&(l[i]=e[i]);return{$$typeof:r,type:n,key:c,ref:h,props:l,_owner:o.current}}e.Fragment=l,e.jsx=c,e.jsxs=c},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>t});var i=s(50959);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);