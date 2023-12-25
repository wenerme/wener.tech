/*! For license information please see 20db5cf8.e1d32ad2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17813],{98571:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=r(11527),s=r(47214);const t={tags:["FAQ"]},l="Gitea FAQ",o={id:"service/forge/gitea/gitea-faq",title:"Gitea FAQ",description:"OIDC Mapping",source:"@site/../notes/service/forge/gitea/gitea-faq.md",sourceDirName:"service/forge/gitea",slug:"/service/forge/gitea/faq",permalink:"/notes/service/forge/gitea/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitea/gitea-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"\u914d\u7f6e",permalink:"/notes/service/forge/gitea/conf"},next:{title:"Package",permalink:"/notes/service/forge/gitea/package"}},c={},a=[{value:"OIDC Mapping",id:"oidc-mapping",level:2},{value:"Trigger Mirror Sync / WebHook",id:"trigger-mirror-sync--webhook",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gitea-faq",children:"Gitea FAQ"}),"\n",(0,i.jsx)(n.h2,{id:"oidc-mapping",children:"OIDC Mapping"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"GITEA__service__DISABLE_REGISTRATION=true\nGITEA__service__ALLOW_ONLY_EXTERNAL_REGISTRATION=true\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Keycloak\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65b0\u5efa ",(0,i.jsx)(n.code,{children:"gitea"})," Client Mapper\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6620\u5c04 claims ",(0,i.jsx)(n.code,{children:"gitea_groups"})," -> \u7528\u6237\u5c5e\u6027 ",(0,i.jsx)(n.code,{children:"GITEA_GROUPS"}),", \u503c\u4e3a JSON"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["User\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'GITEA_GROUPS=["admin","wener"]'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Gitea\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u81ea\u52a8\u53d1\u73b0 ",(0,i.jsx)(n.code,{children:"https://wener.me/realms/wener/.well-known/openid-configuration"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u9644\u52a0\u6388\u6743\u8303\u56f4\uff08Scopes\uff09\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"openid email profile gitea"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7528\u4e8e\u63d0\u4f9b\u7528\u6237\u7ec4\u540d\u79f0\u7684 Claim \u58f0\u660e\u540d\u79f0\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"gitea_groups"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7ba1\u7406\u5458\u7528\u6237\u7ec4\u7684 Claim \u58f0\u660e\u503c\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"admin"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6620\u5c04\u58f0\u660e\u7684\u7ec4\u5230\u7ec4\u7ec7\u56e2\u961f\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'{"wener":{"wener":["owners"]}}'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6620\u5c04 wener \u7ec4\u4e3a wener \u7ec4\u7ec7\u7684 owners \u56e2\u961f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"trigger-mirror-sync--webhook",children:"Trigger Mirror Sync / WebHook"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X POST https://gitea.com/api/v1/repos/{owner}/{repo}/mirror-sync?token={pta}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,n,r)=>{var i=r(50959),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var i,t={},a=null,d=null;for(i in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,i)&&!c.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:a,ref:d,props:t,_owner:o.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var i=r(50959);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);