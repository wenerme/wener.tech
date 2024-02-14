/*! For license information please see c8856f96.f9b1230b.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88784],{12579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(2488),o=n(62780);const s={title:"tuntap"},i="tuntap",a={id:"os/linux/network/tuntap",title:"tuntap",description:"- tun",source:"@site/../notes/os/linux/network/tuntap.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/tuntap",permalink:"/notes/os/linux/network/tuntap",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/tuntap.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"tuntap"},sidebar:"docs",previous:{title:"tshark",permalink:"/notes/os/linux/network/tshark"},next:{title:"veth",permalink:"/notes/os/linux/network/veth"}},l={},u=[];function p(e){const t={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tuntap",children:"tuntap"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["tun\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"L3 - TCI/IP"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["tap\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"L2 - Ethernet"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ip tuntap add tap0 mode tap         # user $(id -u) group $(id -g)\nip addr add 172.20.0.1/24 dev tap0\nip link set tap0 up\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},38088:(e,t,n)=>{var r=n(96651),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,p=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:p,props:s,_owner:a.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>i});var r=n(96651);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);