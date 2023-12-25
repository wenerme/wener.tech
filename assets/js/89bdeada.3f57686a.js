/*! For license information please see 89bdeada.3f57686a.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68422],{7900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=n(11527),o=n(47214);const l={title:"firewalld"},s="firewalld",a={id:"os/linux/network/firewalld",title:"firewalld",description:"",source:"@site/../notes/os/linux/network/firewalld.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/firewalld",permalink:"/notes/os/linux/network/firewalld",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/firewalld.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677222278,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"firewalld"},sidebar:"docs",previous:{title:"\u6865\u63a5\u7f51\u7edc",permalink:"/notes/os/linux/network/bridge"},next:{title:"ifupdown-ng",permalink:"/notes/os/linux/network/ifupdown-ng"}},i={},d=[];function c(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"firewalld",children:"firewalld"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"systemctl status firewalld\n\n# 'tcp'|'udp'|'sctp'|'dccp'\nfirewall-cmd --permanent --add-port=22/tcp\n\nfirewall-cmd --permanent --add-source=192.168.1.0/24\n\nfirewall-cmd --permanent --add-rich-rule='rule family=\"ipv4\" source address=\"192.168.1.100\" port protocol=\"tcp\" port=\"3306\" accept'\n\n# \u4fdd\u5b58 \u751f\u6548\nfirewall-cmd --reload\nfirewall-cmd --list-all\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3354:(e,t,n)=>{var r=n(50959),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,l={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=d,t.jsxs=d},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(50959);const o={},l=r.createContext(o);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);