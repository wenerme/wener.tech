/*! For license information please see 261a87f4.05cbfdbd.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47268],{24684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(2488),r=t(62780);const s={title:"ifupdown"},i="ifupdown",c={id:"os/busybox/ifupdown",title:"ifupdown",description:"- networking/ifupdown.c",source:"@site/../notes/os/busybox/ifupdown.md",sourceDirName:"os/busybox",slug:"/os/busybox/ifupdown",permalink:"/notes/os/busybox/ifupdown",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/busybox/ifupdown.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642767775,formattedLastUpdatedAt:"Jan 21, 2022",frontMatter:{title:"ifupdown"},sidebar:"docs",previous:{title:"Busybox",permalink:"/notes/os/busybox/"},next:{title:"mdev",permalink:"/notes/os/busybox/mdev"}},l={},d=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ifupdown",children:"ifupdown"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://sourcegraph.com/github.com/mirror/busybox/-/blob/networking/ifupdown.c",children:"networking/ifupdown.c"})}),"\n",(0,o.jsxs)(n.li,{children:["\u5904\u7406 ",(0,o.jsx)(n.code,{children:"/etc/network/interfaces"})]}),"\n",(0,o.jsx)(n.li,{children:"\u63d0\u4f9b ifup \u548c ifdown"}),"\n",(0,o.jsx)(n.li,{children:"\u53ea\u5904\u7406 auto"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/var/run/ifstate"})," \u8bb0\u5f55\u72b6\u6001 - \u6709\u53ef\u80fd\u5728 ",(0,o.jsx)(n.code,{children:"/etc/network/run/ifstate"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u652f\u6301\u65b9\u6cd5\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"inet - manual wvdial ppp static bootp dhcp loopback"}),"\n",(0,o.jsx)(n.li,{children:"inet6 - static manual loopback v4tunnel"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"\u4f7f\u7528 ip \u6216 ifconfig \u8fdb\u884c\u914d\u7f6e"}),"\n",(0,o.jsx)(n.li,{children:"dhcp \u5ba2\u6237\u7aef\u652f\u6301 - dhcpcd dhclient pump udhcpc"}),"\n",(0,o.jsxs)(n.li,{children:["\u6ce8\u610f\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u4e0d\u652f\u6301 hotplug"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},38088:(e,n,t)=>{var o=t(96651),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,s={},d=null,u=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:u,props:s,_owner:c.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>i});var o=t(96651);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);