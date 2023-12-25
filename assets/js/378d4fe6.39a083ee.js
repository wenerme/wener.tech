/*! For license information please see 378d4fe6.39a083ee.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55299],{36554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var l=s(11527),r=s(47214);const t={title:"Vault \u5bc6\u94a5\u5f15\u64ce"},i="Vault \u5bc6\u94a5\u5f15\u64ce",c={id:"service/security/vault/vault-secret",title:"Vault \u5bc6\u94a5\u5f15\u64ce",description:"- ad - Active Directory",source:"@site/../notes/service/security/vault/vault-secret.md",sourceDirName:"service/security/vault",slug:"/service/security/vault/secret",permalink:"/notes/service/security/vault/secret",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/security/vault/vault-secret.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Vault \u5bc6\u94a5\u5f15\u64ce"},sidebar:"docs",previous:{title:"Vault on Kubernetes",permalink:"/notes/service/security/vault/k8s"},next:{title:"SelfHost",permalink:"/notes/service/selfhost/"}},a={},o=[{value:"consul",id:"consul",level:2}];function d(e){const n={code:"code",del:"del",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"vault-\u5bc6\u94a5\u5f15\u64ce",children:"Vault \u5bc6\u94a5\u5f15\u64ce"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["ad - Active Directory\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"password rotation"}),"\n",(0,l.jsx)(n.li,{children:"service account check-out"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["alicloud - \u963f\u91cc\u4e91\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u57fa\u4e8e RAM \u7b56\u7565\u751f\u6210 token\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4f1a\u6709\u65f6\u95f4\u9650\u5236\uff0c\u81ea\u52a8 revoke"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u57fa\u4e8e RAM \u89d2\u8272\u751f\u6210 STS \u6388\u6743\u4fe1\u606f\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u77ed\u671f\u3001\u4e0d\u53ef\u5237\u65b0"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"cubbyhole - token \u72ec\u7acb\u7a7a\u95f4 - \u7c7b\u4f3c\u4e8e session/cookie"}),"\n",(0,l.jsxs)(n.li,{children:["consul\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u57fa\u4e8e\u7b56\u7565\u751f\u6210 Token"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6570\u636e\u5e93 - ",(0,l.jsx)(n.code,{children:"<type>-database-plugin"})," - \u57fa\u4e8e\u914d\u7f6e\u7684\u89d2\u8272\u52a8\u6001\u751f\u6210\u6388\u6743\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"cassandra"}),"\n",(0,l.jsx)(n.li,{children:"elasticsearch"}),"\n",(0,l.jsxs)(n.li,{children:["mysql\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"mysql-database-plugin"}),"\n",(0,l.jsx)(n.li,{children:"mysql-aurora-database-plugin"}),"\n",(0,l.jsx)(n.li,{children:"mysql-rds-database-plugin"}),"\n",(0,l.jsx)(n.li,{children:"mysql-legacy-database-plugin"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"postgresql"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"kv"}),"\n",(0,l.jsx)(n.li,{children:"identity - Vault \u81ea\u8eab\u6388\u6743"}),"\n",(0,l.jsx)(n.li,{children:"nomad"}),"\n",(0,l.jsx)(n.li,{children:"openldap - LDAP v3"}),"\n",(0,l.jsxs)(n.li,{children:["pki - \u52a8\u6001\u751f\u6210 X.509 \u8bc1\u4e66\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u51cf\u5c11\u8bc1\u4e66\u65f6\u9650\uff0c\u6bcf\u4e2a\u5e94\u7528\u53ef\u7528\u72ec\u7acb\u8bc1\u4e66\uff0c\u907f\u514d\u8bc1\u4e66\u5171\u4eab\u4ea4\u6362"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"rabbitmq"}),"\n",(0,l.jsxs)(n.li,{children:["ssh - SSH \u6388\u6743\u8ba4\u8bc1\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8bc1\u4e66\u7b7e\u53d1"}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u6b21\u6027\u5bc6\u7801"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.del,{children:"\u52a8\u6001 Key"})," - \u5e9f\u5f03"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"totp"}),"\n",(0,l.jsxs)(n.li,{children:["transit - \u63d0\u4f9b\u52a0\u5bc6\u89e3\u5bc6\u529f\u80fd\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"cryptography as a service / encryption as a service"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"consul",children:"consul"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"vault secrets enable consul\n\nvault write consul/config/access \\\n  address=127.0.0.1:8500 \\\n  token=E2A500CD-0599-409E-949B-E321135FAAD5\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},3354:(e,n,s)=>{var l=s(50959),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var l,t={},o=null,d=null;for(l in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,l)&&!a.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===t[l]&&(t[l]=n[l]);return{$$typeof:r,type:e,key:o,ref:d,props:t,_owner:c.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var l=s(50959);const r={},t=l.createContext(r);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);