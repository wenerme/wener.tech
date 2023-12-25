/*! For license information please see f1c605d3.28df500d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64296],{76981:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=o(11527),s=o(47214);const r={title:"ArgoCD Extensions"},a="ArgoCD Extensions",i={id:"devops/kubernetes/app/argocd/argocd-extensions",title:"ArgoCD Extensions",description:"- argoproj-labs/argocd-extensions",source:"@site/../notes/devops/kubernetes/app/argocd/argocd-extensions.md",sourceDirName:"devops/kubernetes/app/argocd",slug:"/devops/kubernetes/app/argocd/extensions",permalink:"/notes/devops/kubernetes/app/argocd/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/argocd/argocd-extensions.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685087225,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"ArgoCD Extensions"},sidebar:"docs",previous:{title:"CDR",permalink:"/notes/devops/kubernetes/app/argocd/cdr"},next:{title:"ArgoCD FAQ",permalink:"/notes/devops/kubernetes/app/argocd/faq"}},d={},c=[{value:"Sources has not been downloaded yet, redownloading",id:"sources-has-not-been-downloaded-yet-redownloading",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"argocd-extensions",children:"ArgoCD Extensions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/argoproj-labs/argocd-extensions",children:"argoproj-labs/argocd-extensions"})}),"\n",(0,t.jsx)(n.li,{children:"ghcr.io/argoproj-labs/argocd-extensions:latest"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\n\nresources:\n# base Argo CD components\n#- https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml\n- https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n\ncomponents:\n# extensions controller component\n- https://github.com/argoproj-labs/argocd-extensions/manifests\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kustomize build customize -o install.yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"sources-has-not-been-downloaded-yet-redownloading",children:"Sources has not been downloaded yet, redownloading"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3354:(e,n,o)=>{var t=o(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var t,r={},c=null,l=null;for(t in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!d.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:l,props:r,_owner:i.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},11527:(e,n,o)=>{e.exports=o(3354)},47214:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>a});var t=o(50959);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);