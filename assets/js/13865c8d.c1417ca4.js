/*! For license information please see 13865c8d.c1417ca4.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4480],{21780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(2488),s=t(62780);const o={title:"tekton"},i="tekton",l={id:"devops/kubernetes/app/tekton",title:"tekton",description:"- tektoncd/pipeline",source:"@site/../notes/devops/kubernetes/app/tekton.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/tekton",permalink:"/notes/devops/kubernetes/app/tekton",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/tekton.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693804740,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{title:"tekton"},sidebar:"docs",previous:{title:"stolon",permalink:"/notes/devops/kubernetes/app/stolon"},next:{title:"zalando/postgres-operator",permalink:"/notes/devops/kubernetes/app/zalando-postgres-operator"}},c={},d=[{value:"tekton vs argo",id:"tekton-vs-argo",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",hr:"hr",li:"li",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tekton",children:"tekton"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/tektoncd/pipeline",children:"tektoncd/pipeline"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Apache-2.0, Golang"}),"\n",(0,r.jsx)(n.li,{children:"cloud-native Pipeline"}),"\n",(0,r.jsx)(n.li,{children:"\u7c7b\u4f3c shell on k8s"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["CDR\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Task"}),"\n",(0,r.jsx)(n.li,{children:"TaskRun"}),"\n",(0,r.jsx)(n.li,{children:"Pipeline"}),"\n",(0,r.jsx)(n.li,{children:"PipelineRun"}),"\n",(0,r.jsx)(n.li,{children:"Run"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Pipeline -> Task -> Step/Run"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/tektoncd/dashboard",children:"tektoncd/dashboard"})}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hub.tekton.dev/",children:"https://hub.tekton.dev/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"tekton-vs-argo",children:"tekton vs argo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Tekton\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"focuses on source based workflows - CI"}),"\n",(0,r.jsx)(n.li,{children:"Tekton \u80fd\u5904\u7406 CI \u90e8\u5206"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Argo Workflows\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u66f4\u901a\u7528 - ETL\u3001ML\u3001Data"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7 Argo Events \u5904\u7406 git webhook"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/tektoncd/pipeline/graphs/contributors",children:"https://github.com/tektoncd/pipeline/graphs/contributors"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/argoproj/argo-workflows/graphs/contributors",children:"https://github.com/argoproj/argo-workflows/graphs/contributors"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:l.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var r=t(96651);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);