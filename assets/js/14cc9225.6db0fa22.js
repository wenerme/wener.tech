/*! For license information please see 14cc9225.6db0fa22.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36274],{80611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(11527),s=t(47214);const r={title:"GitOps"},l="GitOps",o={id:"ops/gitops",title:"GitOps",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/ops/gitops.md",sourceDirName:"ops",slug:"/ops/gitops",permalink:"/notes/ops/gitops",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/gitops.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641222557,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{title:"GitOps"},sidebar:"docs",previous:{title:"Cache",permalink:"/notes/ops/cache"},next:{title:"\u4ee5\u592a\u7f51\u4f9b\u7535",permalink:"/notes/ops/hardware/network/cable/poe"}},c={},d=[];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",li:"li",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gitops",children:"GitOps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u662f\u4ec0\u4e48\uff1f\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Works by using ",(0,i.jsx)(n.strong,{children:"Git"})," as a ",(0,i.jsx)(n.strong,{children:"single source of truth"})," for ",(0,i.jsx)(n.strong,{children:"declarative"})," infrastructure and applications"]}),"\n",(0,i.jsx)(n.li,{children:"\u7cfb\u7edf\u72b6\u6001\u4ee5\u58f0\u660e\u5f0f\u5b9a\u4e49 - \u64cd\u4f5c\u5e42\u7b49"}),"\n",(0,i.jsx)(n.li,{children:"\u5b8c\u6574\u7684\u671f\u671b\u72b6\u6001\u5728 Git \u7248\u672c"}),"\n",(0,i.jsx)(n.li,{children:"\u5141\u8bb8\u4fee\u6539\u7684\u53d8\u5316\u53ef\u81ea\u52a8\u5e94\u7528\u5230\u7cfb\u7edf"}),"\n",(0,i.jsx)(n.li,{children:"\u8f6f\u4ef6 Agent \u4fdd\u8bc1\u72b6\u6001\u6b63\u786e\u548c\u544a\u77e5 divergence"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"ansible-pull"}),"\n",(0,i.jsx)(n.li,{children:"fluxcd"}),"\n",(0,i.jsxs)(n.li,{children:["Kubernetes\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"argocd"}),"\n",(0,i.jsx)(n.li,{children:"fleet"}),"\n",(0,i.jsx)(n.li,{children:"tekton"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u63a8\u62c9\u6a21\u5f0f"}),"\n",(0,i.jsxs)(n.li,{children:["\u597d\u5904\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Productivity"}),"\n",(0,i.jsx)(n.li,{children:"Developer Experiebce"}),"\n",(0,i.jsx)(n.li,{children:"Stability"}),"\n",(0,i.jsx)(n.li,{children:"Reliability"}),"\n",(0,i.jsx)(n.li,{children:"Consistency & Standardization"}),"\n",(0,i.jsx)(n.li,{children:"Security Guarantees"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u56e0\u4e3a GitOps \u5de5\u5177\u4f1a\u9891\u7e41\u8bbf\u95ee git\uff0c\u56e0\u6b64\u5efa\u8bae\u63d0\u4f9b\u7a33\u5b9a\u7684 git \u670d\u52a1\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u907f\u514d\u4f7f\u7528 gitlab.com \u3001github.com - \u5efa\u8bae\u955c\u50cf\u4ed3\u5e93\u5230 gitea \u6216\u8005 self-host gitlab \u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u5de5\u5177\u65e0\u6cd5\u6b63\u5e38\u68c0\u6d4b Git \u4fe1\u606f\u65f6\u5c31\u4f1a\u5bfc\u81f4\u72b6\u6001\u4e0d\u53ef\u77e5\uff0c\u4e14\u5bb9\u6613\u8d85\u65f6"}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://opengitops.dev/",children:"OpenGitOps"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,n,t)=>{var i=t(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,r={},d=null,a=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:d,ref:a,props:r,_owner:o.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(50959);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);