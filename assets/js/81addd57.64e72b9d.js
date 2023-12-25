/*! For license information please see 81addd57.64e72b9d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55181],{11249:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=s(11527),t=s(47214);const l={title:"Ephemeral Volumes"},o="\u4e34\u65f6\u5377",i={id:"devops/kubernetes/storage/ephemeral-volume",title:"Ephemeral Volumes",description:"\u7528\u4e8e\u7f13\u5b58\u573a\u666f\uff0c\u4e0d\u4ecb\u610f\u91cd\u542f\u540e\u6570\u636e\u4e22\u5931\u3002",source:"@site/../notes/devops/kubernetes/storage/ephemeral-volume.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/ephemeral-volume",permalink:"/notes/devops/kubernetes/storage/ephemeral-volume",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/ephemeral-volume.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"Ephemeral Volumes"},sidebar:"docs",previous:{title:"Kubernates \u5b58\u50a8",permalink:"/notes/devops/kubernetes/storage/"},next:{title:"NFS",permalink:"/notes/devops/kubernetes/storage/k8s-nfs"}},a={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4e34\u65f6\u5377",children:"\u4e34\u65f6\u5377"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4e8e\u7f13\u5b58\u573a\u666f\uff0c\u4e0d\u4ecb\u610f\u91cd\u542f\u540e\u6570\u636e\u4e22\u5931\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"emptyDir"}),"\n",(0,r.jsxs)(n.li,{children:["configMap, downwardAPI, secret\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6ce8\u5165 K8S \u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["CSI \u63d0\u4f9b/CSIInlineVolume - \u9700\u8981 ",(0,r.jsx)(n.a,{href:"https://kubernetes-csi.github.io/docs/drivers.html",children:"\u9a71\u52a8\u652f\u6301"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1.16 BETA"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u901a\u7528\u4e34\u65f6\u5377/GenericEphemeralVolume\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1.19 ALPHA"}),"\n",(0,r.jsx)(n.li,{children:"\u7c7b\u4f3c\u4e8e emptyDir"}),"\n",(0,r.jsx)(n.li,{children:"\u5b58\u50a8\u53ef\u662f\u672c\u5730\u4e5f\u53ef\u4ee5\u662f NAS"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u9650\u5236\u5bb9\u91cf"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u6709\u521d\u59cb\u6570\u636e - \u53d6\u51b3\u4e8e\u9a71\u52a8\u548c\u53c2\u6570"}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301\u8fd0\u7ef4\u64cd\u4f5c - \u53d6\u51b3\u4e8e\u9a71\u52a8\u652f\u6301\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5feb\u7167\u3001\u514b\u9686\u3001\u6269\u7f29\u5bb9\u3001\u5bb9\u91cf\u8ddf\u8e2a"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"StorageClass \u6700\u597d\u4f7f\u7528 WaitForFirstConsumer \u8c03\u5ea6"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/",children:"Ephemeral Volumes"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# CSI\nkind: Pod\napiVersion: v1\nmetadata:\n  name: my-csi-app\nspec:\n  containers:\n    - name: my-frontend\n      image: busybox\n      volumeMounts:\n        - mountPath: '/data'\n          name: my-csi-inline-vol\n      command: ['sleep', '1000000']\n  volumes:\n    - name: my-csi-inline-vol\n      # CSI \u63d0\u4f9b\n      csi:\n        driver: inline.storage.kubernetes.io\n        # \u9a71\u52a8\u76f8\u5173\n        volumeAttributes:\n          foo: bar\n    # Genric\n    - name: scratch-volume\n      ephemeral:\n        # \u6ce8\u610f\u8fd9\u91cc\u662f\u6a21\u7248 - \u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u6839\u636e\u6a21\u7248\u521b\u5efa PVC\n        # Pod \u5220\u9664\u65f6\u4f1ap\u5220\u9664 PVC\n        volumeClaimTemplate:\n          metadata:\n            labels:\n              type: my-frontend-volume\n          spec:\n            accessModes: ['ReadWriteOnce']\n            storageClassName: 'scratch-storage-class'\n            resources:\n              requests:\n                storage: 1Gi\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,s)=>{var r=s(50959),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,l={},c=null,d=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:d,props:l,_owner:i.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var r=s(50959);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);