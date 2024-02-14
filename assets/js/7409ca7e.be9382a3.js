/*! For license information please see 7409ca7e.be9382a3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25324],{276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=n(2488),r=n(62780);const l={title:"ECH"},c="ECH",i={id:"security/tls/ech",title:"ECH",description:"- \u52a0\u5bc6 SNI - ESNI -> ECH - Encrypted Client Hello",source:"@site/../notes/security/tls/ech.md",sourceDirName:"security/tls",slug:"/security/tls/ech",permalink:"/notes/security/tls/ech",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/tls/ech.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"ECH"},sidebar:"docs",previous:{title:"ssh-audit",permalink:"/notes/security/ssh-audit"},next:{title:"virustotal",permalink:"/notes/security/virustotal"}},o={},h=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"ech",children:"ECH"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u52a0\u5bc6 SNI - ESNI -> ECH - Encrypted Client Hello"}),"\n",(0,s.jsx)(t.li,{children:"\u4f9d\u8d56 HTTPS DNS \u8bb0\u5f55"}),"\n",(0,s.jsxs)(t.li,{children:["HAProxy - ",(0,s.jsx)(t.a,{href:"https://github.com/haproxy/haproxy/issues/1924",children:"#1924"})]}),"\n",(0,s.jsxs)(t.li,{children:["OpenSSL ",(0,s.jsx)(t.a,{href:"https://github.com/openssl/openssl/issues/7482",children:"#7482"})]}),"\n",(0,s.jsxs)(t.li,{children:["WolfSSL v5.6.0 --enable-hpke\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.wolfssl.com/encrypted-client-hello-ech-now-supported-wolfssl/",children:"https://www.wolfssl.com/encrypted-client-hello-ech-now-supported-wolfssl/"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Nginx ",(0,s.jsx)(t.a,{href:"https://trac.nginx.org/nginx/ticket/2275",children:"#2275"})]}),"\n",(0,s.jsxs)(t.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://blog.cloudflare.com/encrypted-client-hello/",children:"https://blog.cloudflare.com/encrypted-client-hello/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.cloudflare.com/zh-cn/ssl/encrypted-sni/",children:"https://www.cloudflare.com/zh-cn/ssl/encrypted-sni/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/draft-ietf-tls-esni",children:"https://datatracker.ietf.org/doc/html/draft-ietf-tls-esni"})}),"\n",(0,s.jsxs)(t.li,{children:["Chrome 117 - ",(0,s.jsx)(t.a,{href:"https://chromestatus.com/feature/6196703843581952",children:"https://chromestatus.com/feature/6196703843581952"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"chrome://flags/#encrypted-client-hello"}),"\n",(0,s.jsx)(t.li,{children:"2023-09"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://tls-ech.dev",children:"https://tls-ech.dev"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://defo.ie/ech-check.php",children:"https://defo.ie/ech-check.php"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# \u56fd\u5185\u88ab\u62e6\u622a\ndig tls-ech.dev HTTPS +short\n# \u9700\u8981\u4ee3\u7406\ncurl -s -H 'accept: application/dns+json' 'https://dns.google.com/resolve?name=tls-ech.dev&type=HTTPS' | jq '.Answer[].data' -r\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1 . ech=AEn+DQBFKwAgACABWIHUGj4u+PIggYXcR5JF0gYk3dCRioBW8uJq9H4mKAAIAAEAAQABAANAEnB1YmxpYy50bHMtZWNoLmRldgAA\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},38088:(e,t,n)=>{var s=n(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var s,l={},h=null,d=null;for(s in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,s)&&!o.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:h,ref:d,props:l,_owner:i.current}}t.Fragment=l,t.jsx=h,t.jsxs=h},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>c});var s=n(96651);const r={},l=s.createContext(r);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);