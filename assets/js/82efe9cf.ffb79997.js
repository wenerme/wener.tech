/*! For license information please see 82efe9cf.ffb79997.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55696],{75376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>i,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(2488),o=r(62780);const a={title:"Reloader"},s="Reloader",l={id:"devops/kubernetes/app/reloader",title:"Reloader",description:"- stakater/Reloader",source:"@site/../notes/devops/kubernetes/app/reloader.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/reloader",permalink:"/notes/devops/kubernetes/app/reloader",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/reloader.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"Reloader"},sidebar:"docs",previous:{title:"prometheus-config-reloader",permalink:"/notes/devops/kubernetes/app/prometheus-config-reloader"},next:{title:"sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets"}},d={},c=[];function p(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"reloader",children:"Reloader"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/stakater/Reloader",children:"stakater/Reloader"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"ConfigMap, Secret -> DeploymentConfig, Deployment, Daemonset, Statefulset, Rollout"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"kind: Deployment\nmetadata:\n  name: foo\n  annotations:\n    # \u5339\u914d  foo-configmap, foo-secret\n    reloader.stakater.com/auto: 'true'\n    # \u9650\u5b9a\u5339\u914d\u76ee\u6807\n    reloader.stakater.com/search: 'true'\n    # \u81ea\u5b9a\u4e49 \u9009\u62e9\n    configmap.reloader.stakater.com/reload: 'foo-configmap,bar-configmap'\n    secret.reloader.stakater.com/reload: 'foo-secret'\n---\nkind: ConfigMap\nmetadata:\n  annotations:\n    # \u5bf9\u5e94 reloader.stakater.com/search: \"true\"\n    reloader.stakater.com/match: 'true'\n"})})]})}function i(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},38088:(e,t,r)=>{var n=r(96651),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,p=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:p,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},2488:(e,t,r)=>{e.exports=r(38088)},62780:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>s});var n=r(96651);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);