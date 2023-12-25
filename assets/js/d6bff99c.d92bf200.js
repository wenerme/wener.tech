/*! For license information please see d6bff99c.d92bf200.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34263],{54003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=n(11527),s=n(47214);const o={title:"procfs"},c="procfs",i={id:"os/linux/sys/procfs",title:"procfs",description:"Kernel to userver space communication",source:"@site/../notes/os/linux/sys/procfs.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/procfs",permalink:"/notes/os/linux/sys/procfs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/procfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1699003495,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{title:"procfs"},sidebar:"docs",previous:{title:"perf",permalink:"/notes/os/linux/sys/perf"},next:{title:"Swap",permalink:"/notes/os/linux/sys/swap"}},l={},a=[];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"procfs",children:"procfs"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Kernel to userver space communication"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'cat /proc/cpuinfo | grep "tsc_reliable"\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"/proc/mounts"}),"\n",(0,r.jsx)(t.li,{children:"/proc/uptime"}),"\n",(0,r.jsx)(t.li,{children:"/proc/net/tcp"}),"\n",(0,r.jsx)(t.li,{children:"/proc/$PID/status"}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/",children:"http://oliveryang.net/2015/09/pitfalls-of-TSC-usage/"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3354:(e,t,n)=>{var r=n(50959),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,o={},a=null,p=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(p=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:p,props:o,_owner:i.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(50959);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);