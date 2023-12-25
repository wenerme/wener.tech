/*! For license information please see 9dc87c09.055a3e20.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25976],{41669:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(11527),i=r(47214);const s={title:"netbird"},l="netbird",d={id:"service/network/vpn/netbird",title:"netbird",description:"- netbirdio/netbird",source:"@site/../notes/service/network/vpn/netbird.md",sourceDirName:"service/network/vpn",slug:"/service/network/vpn/netbird",permalink:"/notes/service/network/vpn/netbird",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn/netbird.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"netbird"},sidebar:"docs",previous:{title:"nebula",permalink:"/notes/service/network/vpn/nebula"},next:{title:"sshuttle",permalink:"/notes/service/network/vpn/sshuttle"}},o={},c=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"netbird",children:"netbird"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/netbirdio/netbird",children:"netbirdio/netbird"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BSD-3, Go"}),"\n",(0,t.jsx)(n.li,{children:"\u4e4b\u524d\u53eb wiretrustee"}),"\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e WebRTC, STUN, TURN \u7684 P2P \u7f51\u7edc\u901a\u9053"}),"\n",(0,t.jsx)(n.li,{children:"P2P - WireGuard+WebRTC"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301  relay"}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528 OIDC \u767b\u9646"}),"\n",(0,t.jsxs)(n.li,{children:["WebUI\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/netbirdio/dashboard",children:"netbirdio/dashboard"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BSD-3, TS, React, AndD"}),"\n",(0,t.jsx)(n.li,{children:"WebUI"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5e73\u53f0\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7ba1\u7406\u670d\u52a1 - api.wiretrustee.com"}),"\n",(0,t.jsx)(n.li,{children:"Signal - signal2.wiretrustee.com"}),"\n",(0,t.jsx)(n.li,{children:"Relay/TURN - turn.netbird.io"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"--disable-anonymous-metrics=true"})}),"\n",(0,t.jsxs)(n.li,{children:["\u7ba1\u7406\u670d\u52a1\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6ce8\u518c\u3001\u8ba4\u8bc1"}),"\n",(0,t.jsx)(n.li,{children:"\u7f51\u7edc Map"}),"\n",(0,t.jsx)(n.li,{children:"\u7ba1\u7406 IP \u5730\u5740"}),"\n",(0,t.jsx)(n.li,{children:"\u540c\u6b65\u7f51\u7edc\u5230 Peer"}),"\n",(0,t.jsx)(n.li,{children:"\u7ba1\u7406 ACLs"}),"\n",(0,t.jsx)(n.li,{children:"\u7ba1\u7406 DNS"}),"\n",(0,t.jsx)(n.li,{children:"\u76d1\u63a7"}),"\n",(0,t.jsx)(n.li,{children:"Wgireguard key rotation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.del,{children:["\u76ee\u524d\u5f3a\u5236\u4f9d\u8d56 Auth0 ",(0,t.jsx)(n.a,{href:"https://github.com/netbirdio/netbird/issues/126",children:"#126"})]})}),"\n",(0,t.jsxs)(n.li,{children:["\u76ee\u524d\u6ca1\u6709 iOS & Android \u5e94\u7528 - ",(0,t.jsx)(n.a,{href:"https://github.com/netbirdio/netbird/issues/115",children:"#115"})]}),"\n",(0,t.jsx)(n.li,{children:"\u4f9d\u8d56\u5916\u90e8 STUN \u548c TURN"}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo wiretrustee init \\\n  --stunURLs stun:stun.wiretrustee.com:3468,stun:stun.l.google.com:19302 \\\n  --turnURLs <TURN User>:<TURN password>@turn:stun.wiretrustee.com:3468  \\\n  --signalAddr signal.wiretrustee.com:10000  \\\n  --wgLocalAddr 10.30.30.1/24  \\\n  --log-level info\n\nsudo wiretrustee add-peer --allowedIPs 10.30.30.2/32 --key '<REMOTE PEER WIREUARD PUBLIC KEY>'\nsudo wiretrustee up --log-level info\n\nwiretrustee signal --log-level INFO\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Docker\ndocker run -it --rm \\\n  -p 80:80 -p 443:443 \\\n  -e AUTH0_DOMAIN=<SET YOUR AUTH DOMAIN> \\\n  -e AUTH0_CLIENT_ID=<SET YOUR CLIENT ID> \\\n  -e AUTH0_AUDIENCE=<SET YOUR AUDIENCE> \\\n  -e WIRETRUSTEE_MGMT_API_ENDPOINT=<SET YOUR MANAGEMETN API URL> \\\n  --name wiretrustee-dashboard wiretrustee/dashboard:main\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3354:(e,n,r)=>{var t=r(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,s={},c=null,a=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,t)&&!o.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>l});var t=r(50959);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);