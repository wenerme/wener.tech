/*! For license information please see 03e893e2.ba83c5d3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99481],{85945:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=r(11527),s=r(47214);const l={title:"Harbor"},t="Habor",o={id:"devops/kubernetes/app/harbor",title:"Harbor",description:"- goharbor/harbor",source:"@site/../notes/devops/kubernetes/app/harbor.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/harbor",permalink:"/notes/devops/kubernetes/app/harbor",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/harbor.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"Harbor"},sidebar:"docs",previous:{title:"FluxCD",permalink:"/notes/devops/kubernetes/app/flux"},next:{title:"Kubernetest Application FAQ",permalink:"/notes/devops/kubernetes/app/k8s-app-faq"}},d={},a=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"Helm",id:"helm",level:2},{value:"\u5b50\u57df\u540d",id:"\u5b50\u57df\u540d",level:2},{value:"flag provided but not defined: -format",id:"flag-provided-but-not-defined--format",level:2},{value:"Trust not fully operational",id:"trust-not-fully-operational",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"habor",children:"Habor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/goharbor/harbor",children:"goharbor/harbor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kubernetes \u4e0a\u7684\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/goharbor/harbor-helm",children:"goharbor/harbor-helm"})," - trusted cloud native repository for Kubernetes"]}),"\n",(0,i.jsx)(n.li,{children:"\u5c5e\u4e8e CI \u548c CD \u4e4b\u95f4\uff0cNexus \u504f\u5411\u5f00\u53d1\uff0cHarbor \u504f\u5411\u751f\u4ea7\u90e8\u7f72\u4ea4\u4ed8"}),"\n",(0,i.jsxs)(n.li,{children:["\u7279\u6027\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"trivy \u5b89\u5168\u5206\u6790"}),"\n",(0,i.jsx)(n.li,{children:"\u8d26\u53f7\u7ba1\u7406\u3001\u591a\u79df\u6237\u3001RBAC"}),"\n",(0,i.jsx)(n.li,{children:"\u955c\u50cf\u526f\u672c\u3001Harbor \u4e4b\u95f4\u526f\u672c\u590d\u5236"}),"\n",(0,i.jsx)(n.li,{children:"WebUI"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u914d\u7f6e\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9ed8\u8ba4\u4f1a\u90e8\u7f72 ingress"}),"\n",(0,i.jsx)(n.li,{children:"\u8981\u6307\u5b9a externalURL \u786e\u4fdd\u751f\u6210\u5730\u5740\u6b63\u786e"}),"\n",(0,i.jsx)(n.li,{children:"\u9ed8\u8ba4\u5173\u95ed\u5185\u90e8 TLS - internalTLS"}),"\n",(0,i.jsxs)(n.li,{children:["\u5b58\u50a8\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"registry - 5Gi"}),"\n",(0,i.jsx)(n.li,{children:"chartmuseum - 5Gi"}),"\n",(0,i.jsx)(n.li,{children:"jobservice - 1Gi"}),"\n",(0,i.jsxs)(n.li,{children:["database - 1Gi - \u53ef\u7528\u5916\u90e8\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u4f7f\u7528\u5185\u90e8\u6570\u636e\u5e93\u8bb0\u5f97\u4fee\u6539\u8d26\u53f7\u5bc6\u7801"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"redis - 1Gi - \u53ef\u7528\u5916\u90e8"}),"\n",(0,i.jsx)(n.li,{children:"trivy - 2Gi"}),"\n",(0,i.jsxs)(n.li,{children:["imageChartStorage\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 azure,gcs,s3,swift,oss"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7aef\u53e3\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"443"}),"\n",(0,i.jsx)(n.li,{children:"80"}),"\n",(0,i.jsxs)(n.li,{children:["4443\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Notary - Docker Content Trust"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6587\u6863\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://goharbor.io/docs/2.2.0/install-config/harbor-compatibility-list/",children:"Harbor Compatibility List"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u57df\u540d\u6620\u5c04 Project ",(0,i.jsx)(n.a,{href:"https://github.com/goharbor/harbor/issues/13579",children:"#13579"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u955c\u50cf docker \u65e0\u6cd5\u81ea\u52a8\u6dfb\u52a0 library ",(0,i.jsx)(n.a,{href:"https://github.com/goharbor/harbor/issues/12719",children:"#12719"})]}),"\n"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Resource"}),(0,i.jsx)(n.th,{children:"Minimum"}),(0,i.jsx)(n.th,{children:"Recommended"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CPU"}),(0,i.jsx)(n.td,{children:"2 CPU"}),(0,i.jsx)(n.td,{children:"4 CPU"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Mem"}),(0,i.jsx)(n.td,{children:"4 GB"}),(0,i.jsx)(n.td,{children:"8 GB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Disk"}),(0,i.jsx)(n.td,{children:"40 GB"}),(0,i.jsx)(n.td,{children:"160 GB"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"helm repo add harbor https://helm.goharbor.io\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["docker \u5b89\u88c5\u8fc7\u7a0b\u4f1a\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"goharbor/prepare"})," \u8fdb\u884c\u6784\u5efa\u9700\u8981\u7684 docker compose"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/",children:"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ec4\u4ef6",children:"\u7ec4\u4ef6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"postgresql"}),"\n",(0,i.jsx)(n.li,{children:"redis"}),"\n",(0,i.jsx)(n.li,{children:"clari"}),"\n",(0,i.jsx)(n.li,{children:"beego"}),"\n",(0,i.jsx)(n.li,{children:"chartmuseum"}),"\n",(0,i.jsx)(n.li,{children:"docker/distribution"}),"\n",(0,i.jsx)(n.li,{children:"docker/notary"}),"\n",(0,i.jsx)(n.li,{children:"helm"}),"\n",(0,i.jsx)(n.li,{children:"swagger-ui"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"helm",children:"Helm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"harborAdminPassword: 'Harbor12345'\n\n# \u90e8\u7f72\u7ec4\u4ef6\n# =========\n# \u4e0d\u4f7f\u7528 Ingress \u5219\u4f1a\u90e8\u7f72 nginx\nnginx:\nportal:\ncore:\njobservice:\nregistry:\nchartmuseum:\nclair:\ntrivy:\nnotary:\n\ndatabase:\n  # \u8bbe\u7f6e\u4e3a external \u4f7f\u7528\u5916\u90e8\u6570\u636e\u5e93\n  type: internal\n  # \u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93\n  external:\n    host: '192.168.0.1'\n    port: '5432'\n    username: 'user'\n    password: 'password'\n    # coreDatabase: \"registry\"\n    # clairDatabase: \"clair\"\n    # notaryServerDatabase: \"notary_server\"\n    # notarySignerDatabase: \"notary_signer\"\nredis:\n  type: internal\n"})}),"\n",(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h2,{id:"\u5b50\u57df\u540d",children:"\u5b50\u57df\u540d"}),"\n",(0,i.jsx)(n.h2,{id:"flag-provided-but-not-defined--format",children:"flag provided but not defined: -format"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Trivy \u63a5\u53e3\u53d8\u5316\uff0charbor \u672a\u5339\u914d - v2.4.2/2.5.0"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u76f4\u63a5\u6307\u5b9a aquasec/harbor-scanner-trivy v0.25.0+"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/aquasecurity/trivy/issues/1656",children:"aquasecurity/trivy#1656"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/goharbor/harbor/issues/16554",children:"goharbor/harbor#16554"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"trust-not-fully-operational",children:"Trust not fully operational"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/bitnami/charts/issues/3545",children:"https://github.com/bitnami/charts/issues/3545"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3354:(e,n,r)=>{var i=r(50959),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var i,l={},a=null,h=null;for(i in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)t.call(n,i)&&!d.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:s,type:e,key:a,ref:h,props:l,_owner:o.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var i=r(50959);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);