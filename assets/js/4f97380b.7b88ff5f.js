/*! For license information please see 4f97380b.7b88ff5f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33250],{93828:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(2488),r=s(62780);const i={title:"iostat"},o="iostat",a={id:"os/linux/stat/iostat",title:"iostat",description:"- iostat.1",source:"@site/../notes/os/linux/stat/iostat.md",sourceDirName:"os/linux/stat",slug:"/os/linux/stat/iostat",permalink:"/notes/os/linux/stat/iostat",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/stat/iostat.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685890478,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{title:"iostat"},sidebar:"docs",previous:{title:"htop",permalink:"/notes/os/linux/stat/htop"},next:{title:"sysstat",permalink:"/notes/os/linux/stat/sysstat"}},l={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"iostat",children:"iostat"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://man7.org/linux/man-pages/man1/iostat.1.html",children:"iostat.1"})}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"iostat -d -x 1\niostat -cdxy 2\n"})}),"\n",(0,n.jsx)(t.p,{children:"| column   |\n| -------- | -------------------------------------------------------------------------------------------------------- |\n| %user    | CPU usage at the normal user level                                                                       |\n| %nice    | CPU usage at the user level with priorities                                                              |\n| %system  | CPU utilization that occurred while executing at the system level (kernel)                               |\n| %iowait  | CPUs were idle and the system received I/O requests                                                      |\n| %steal   | involuntary wait by the virtual CPU or CPUs while the hypervisor was servicing another virtual processor |\n| %idle    | CPU or CPUs were idle and the system did not have an outstanding disk I/O request                        |\n| tps      | r/s+w/s+d/s+f/s                                                                                          |\n| r/s      | read/second                                                                                              |\n| w/s      | write/second                                                                                             |\n| d/s      | discard/second                                                                                           |\n| f/s      | flush/second                                                                                             |\n| %rrqm    | read requests merged                                                                                     |\n| %util    | Percentage of elapsed time during which I/O requests were issued to the device                           |\n| avgqu-sz |\n| svctm    | average amount of time an operation takes                                                                |"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u4e32\u884c\u548c\u5e76\u884c \u5b58\u50a8\u8bbe\u5907\u53c2\u8003\u903b\u8f91\u4e0a\u6709\u5dee\u5f02"}),"\n",(0,n.jsx)(t.li,{children:"\u5e76\u884c\u8bbe\u5907\u65e0\u53c2\u8003\u4ef7\u503c\u7684\u4fe1\u606f: svctm, %util"}),"\n",(0,n.jsxs)(t.li,{children:["\u53c2\u8003\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://brooker.co.za/blog/2014/07/04/iostat-pct.html",children:"Two traps in iostat: %util and svctm"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},38088:(e,t,s)=>{var n=s(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,i={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},2488:(e,t,s)=>{e.exports=s(38088)},62780:(e,t,s)=>{s.d(t,{I:()=>a,M:()=>o});var n=s(96651);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);