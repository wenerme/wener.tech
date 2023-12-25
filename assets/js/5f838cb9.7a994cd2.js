/*! For license information please see 5f838cb9.7a994cd2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23263],{88465:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(11527),o=r(47214);const s={title:"Longhorn \u7248\u672c"},i="Longhorn \u7248\u672c",l={id:"devops/kubernetes/storage/longhorn-version",title:"Longhorn \u7248\u672c",description:"v1.1",source:"@site/../notes/devops/kubernetes/storage/longhorn-version.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/longhorn-version",permalink:"/notes/devops/kubernetes/storage/longhorn-version",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/longhorn-version.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1614351896,formattedLastUpdatedAt:"Feb 26, 2021",frontMatter:{title:"Longhorn \u7248\u672c"},sidebar:"docs",previous:{title:"Longhorn \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/storage/longhorn-faq"},next:{title:"Longhorn",permalink:"/notes/devops/kubernetes/storage/longhorn"}},a={},c=[{value:"v1.1",id:"v11",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"longhorn-\u7248\u672c",children:"Longhorn \u7248\u672c"}),"\n",(0,t.jsx)(n.h2,{id:"v11",children:"v1.1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"2020-10-18"}),"\n",(0,t.jsxs)(n.li,{children:["\u8bd5\u9a8c\u6027 ",(0,t.jsx)(n.a,{href:"https://longhorn.io/docs/1.1.0/advanced-resources/rwx-workloads/",children:"RWX"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f1a\u542f\u52a8 NFSv4 \u63d0\u4f9b\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"ARM64"}),"\n",(0,t.jsxs)(n.li,{children:["CSI Snapshotter\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"longhornio/csi-provisioner:v1.6.0"}),"\n",(0,t.jsx)(n.li,{children:"longhornio/csi-snapshotter:v2.1.1"}),"\n",(0,t.jsxs)(n.li,{children:["CRD ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-csi/external-snapshotter/tree/master/client/config/crd",children:"kubernetes-csi/external-snapshotter/client/config/crd"})]}),"\n",(0,t.jsxs)(n.li,{children:["Controller - ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-csi/external-snapshotter/tree/master/deploy/kubernetes/snapshot-controller",children:"kubernetes-csi/external-snapshotter/deploy/kubernetes/snapshot-controller"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Prometheus Metrics"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://longhorn.io/docs/1.1.0/high-availability/data-locality/",children:"Data Locality"})}),"\n",(0,t.jsx)(n.li,{children:"K8S v1.16+"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# k8s >= 1.17\nkind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1beta1\nmetadata:\n  name: longhorn\ndriver: driver.longhorn.io\ndeletionPolicy: Delete\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,n,r)=>{var t=r(50959),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,s={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(50959);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);