/*! For license information please see 0852b567.47e41eae.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68511],{17334:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>_,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var t=s(11527),i=s(47214);const a={title:"\u80fd\u529b\u7ba1\u7406"},c="Capabilities",r={id:"os/linux/sys/capabilities",title:"\u80fd\u529b\u7ba1\u7406",description:"- capabilities.7",source:"@site/../notes/os/linux/sys/capabilities.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/capabilities",permalink:"/notes/os/linux/sys/capabilities",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/capabilities.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642517272,formattedLastUpdatedAt:"Jan 18, 2022",frontMatter:{title:"\u80fd\u529b\u7ba1\u7406"},sidebar:"docs",previous:{title:"audit",permalink:"/notes/os/linux/sys/audit"},next:{title:"cgroup",permalink:"/notes/os/linux/sys/cgroup"}},l={},o=[];function p(n){const e={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"http://man7.org/linux/man-pages/man7/capabilities.7.html",children:"capabilities.7"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u81ea 2.2 \u5c06 root \u6743\u9650\u62c6\u5206\u4e3a\u591a\u4e2a\u80fd\u529b"}),"\n",(0,t.jsx)(e.li,{children:"\u80fd\u529b\u662f\u7ebf\u7a0b\u7ea7\u522b\u7684\u5c5e\u6027"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u4e3b\u8981\u80fd\u529b\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["CAP_NET_ADMIN\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f51\u5361\u914d\u7f6e"}),"\n",(0,t.jsx)(e.li,{children:"IP \u7ba1\u7406"}),"\n",(0,t.jsx)(e.li,{children:"\u8def\u7531\u8868"}),"\n",(0,t.jsx)(e.li,{children:"\u5efa\u7acb\u5e7f\u64ad"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["CAP_SYS_ADMIN\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6302\u8f7d\u3001\u8d54\u989d"}),"\n",(0,t.jsx)(e.li,{children:"\u4e3b\u673a\u540d"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:'"cap_chown",\n"cap_dac_override",\n"cap_dac_read_search",\n"cap_fowner",\n"cap_fsetid",\n"cap_kill",\n"cap_setgid",\n"cap_setuid",\n"cap_setpcap",\n"cap_linux_immutable",\n"cap_net_bind_service",\n"cap_net_broadcast",\n"cap_net_admin",\n"cap_net_raw",\n"cap_ipc_lock",\n"cap_ipc_owner",\n"cap_sys_module",\n"cap_sys_rawio",\n"cap_sys_chroot",\n"cap_sys_ptrace",\n"cap_sys_pacct",\n"cap_sys_admin",\n"cap_sys_boot",\n"cap_sys_nice",\n"cap_sys_resource",\n"cap_sys_time",\n"cap_sys_tty_config",\n"cap_mknod",\n"cap_lease",\n"cap_audit_write",\n"cap_audit_control",\n"cap_setfcap",\n"cap_mac_override",\n"cap_mac_admin",\n"cap_syslog",\n"35",\n"36+ep"'})]})}function _(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},3354:(n,e,s)=>{var t=s(50959),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var t,a={},o=null,p=null;for(t in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(p=e.ref),e)c.call(e,t)&&!l.hasOwnProperty(t)&&(a[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===a[t]&&(a[t]=e[t]);return{$$typeof:i,type:n,key:o,ref:p,props:a,_owner:r.current}}e.Fragment=a,e.jsx=o,e.jsxs=o},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>r,a:()=>c});var t=s(50959);const i={},a=t.createContext(i);function c(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);