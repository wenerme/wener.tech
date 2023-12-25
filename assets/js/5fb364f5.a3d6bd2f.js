/*! For license information please see 5fb364f5.a3d6bd2f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50314],{28479:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(11527),s=r(47214);const i={title:"vaultwarden"},a="vaultwarden",l={id:"service/password/vaultwarden",title:"vaultwarden",description:"- dani-garcia/vaultwarden",source:"@site/../notes/service/password/vaultwarden.md",sourceDirName:"service/password",slug:"/service/password/vaultwarden",permalink:"/notes/service/password/vaultwarden",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/password/vaultwarden.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1687760370,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"vaultwarden"},sidebar:"docs",previous:{title:"bitwarden",permalink:"/notes/service/password/bitwarden"},next:{title:"Realtime",permalink:"/notes/service/realtime/"}},d={},c=[{value:"\u65e0\u90ae\u4ef6\u64cd\u4f5c\u6d41\u7a0b",id:"\u65e0\u90ae\u4ef6\u64cd\u4f5c\u6d41\u7a0b",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vaultwarden",children:"vaultwarden"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/dani-garcia/vaultwarden",children:"dani-garcia/vaultwarden"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GPL-3.0, Rust"}),"\n",(0,t.jsx)(n.li,{children:"\u975e\u5b98\u65b9 bitwarden \u517c\u5bb9\u670d\u52a1\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 LDAP"}),"\n",(0,t.jsx)(n.li,{children:"\u5fc5\u987b\u8981\u6c42 HTTPS"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 SQLite, MySQL, PostgreSQL"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb",children:"https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Chrome"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://apps.apple.com/cn/app/bitwarden-password-manager/id1137397744",children:"https://apps.apple.com/cn/app/bitwarden-password-manager/id1137397744"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"iOS"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Feature Requests ",(0,t.jsx)(n.a,{href:"https://github.com/dani-garcia/vaultwarden/issues/246",children:"dani-garcia/vaultwarden#246"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0d\u652f\u6301 SSO"}),"\n",(0,t.jsx)(n.li,{children:"\u6682\u4e0d\u652f\u6301 2FA \u7ba1\u7406"}),"\n"]}),"\n"]}),"\n"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"env"}),(0,t.jsx)(n.th,{children:"default"}),(0,t.jsx)(n.th,{children:"for"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SIGNUPS_ALLOWED"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"\u7981\u6b62\u6ce8\u518c - \u4f46\u8fd8\u662f\u53ef\u4ee5\u9080\u8bf7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"INVITATIONS_ALLOWED"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"\u662f\u5426\u5141\u8bb8\u9080\u8bf7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ADMIN_TOKEN"}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["\u5f00\u542f admin - ",(0,t.jsx)(n.a,{href:"https://localhost/admin",children:"https://localhost/admin"})]})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run --rm -it \\\n  -v $PWD/bitwarden/data/:/data/ \\\n  -p 80:80 \\\n  --name bitwarden bitwardenrs/server:latest\n\n# \u751f\u6210 admin token\nopenssl rand -base64 48\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["data/\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"db.sqlite3"}),"\n",(0,t.jsx)(n.li,{children:"rsa_key.der"}),"\n",(0,t.jsx)(n.li,{children:"rsa_key.pem"}),"\n",(0,t.jsx)(n.li,{children:"rsa_key.pub.der"}),"\n",(0,t.jsx)(n.li,{children:"icon_cache/"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u65e0\u90ae\u4ef6\u64cd\u4f5c\u6d41\u7a0b",children:"\u65e0\u90ae\u4ef6\u64cd\u4f5c\u6d41\u7a0b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"admin \u6dfb\u52a0\u7528\u6237"}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u6dfb\u52a0\u7684 email \u521b\u5efa\u8d26\u53f7"}),"\n",(0,t.jsx)(n.li,{children:"\u9080\u8bf7\u65b0\u7684\u7528\u6237\u52a0\u5165\u7ec4\u7ec7\uff0c\u5728\u65b0\u8d26\u53f7\u521b\u5efa\u597d\u540e\u70b9\u786e\u8ba4"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},3354:(e,n,r)=>{var t=r(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,i={},c=null,o=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,t)&&!d.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:o,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var t=r(50959);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);