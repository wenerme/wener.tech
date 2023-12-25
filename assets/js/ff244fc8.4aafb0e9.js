/*! For license information please see ff244fc8.4aafb0e9.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73209],{40185:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(11527),i=s(47214);const t={title:"\u8ba4\u8bc1\u6388\u6743"},c="\u8ba4\u8bc1\u6388\u6743",l={id:"devops/kubernetes/ops/k8s-auth",title:"\u8ba4\u8bc1\u6388\u6743",description:"Tips",source:"@site/../notes/devops/kubernetes/ops/k8s-auth.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/k8s-auth",permalink:"/notes/devops/kubernetes/ops/k8s-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/ops/k8s-auth.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629019137,formattedLastUpdatedAt:"Aug 15, 2021",frontMatter:{title:"\u8ba4\u8bc1\u6388\u6743"},sidebar:"docs",previous:{title:"HELM2 - \u4e0d\u63a8\u8350",permalink:"/notes/devops/kubernetes/ops/helm2"},next:{title:"kops",permalink:"/notes/devops/kubernetes/ops/kops"}},o={},a=[{value:"Tips",id:"tips",level:2},{value:"Authentication",id:"authentication",level:2},{value:"X509 Client Certs",id:"x509-client-certs",level:3},{value:"signer",id:"signer",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Admission Control",id:"admission-control",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u8ba4\u8bc1\u6388\u6743",children:"\u8ba4\u8bc1\u6388\u6743"}),"\n",(0,r.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/",children:"AuthN"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authorization/",children:"AuthZ"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301\u6a21\u5757\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Client Certificates - v1.19\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9700\u8981 API Server \u6709 CA - \u90fd\u4f1a\u6709 ",(0,r.jsx)(n.code,{children:"--client-ca-file=SOMEFILE"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'openssl req -new -key jbeda.pem -out jbeda-csr.pem -subj "/CN=jbeda/O=app1/O=app2"'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Password"}),"\n",(0,r.jsxs)(n.li,{children:["Plain Tokens\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9700\u8981 API Server \u914d\u7f6e ",(0,r.jsx)(n.code,{children:"--token-auth-file=SOMEFILE.csv"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CSV ",(0,r.jsx)(n.code,{children:'token,user,uid,"group1,group2,group3"'})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer 31ada4fd-adec-460c-809a-9e56ceb75269"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Bootstrap Tokens - v1.18+\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer 781292.db7bc3a58fc5f07e"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Service Account\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kubectl create serviceaccount jenkins"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["OIDC - \u9700\u8981\u914d\u7f6e API Server\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kubectl config set-credentials --auth-provider=oidc"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kubectl --token="})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u591a\u79cd\u65b9\u5f0f\uff0c\u6309\u987a\u5e8f\u5c1d\u8bd5\uff0c\u76f4\u5230\u6210\u529f"}),"\n",(0,r.jsx)(n.li,{children:"\u9519\u8bef\u8fd4\u56de 401"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u5206\u4e3a Kubernetes \u7ba1\u7406\u7684\u670d\u52a1\u8d26\u53f7 \u548c \u4e00\u822c\u7528\u6237"}),"\n",(0,r.jsxs)(n.li,{children:["dex \u53ef\u4ee5\u4f5c\u4e3a auth broker\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["client -> dex -> provider\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"dex -> k8s"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"API Server \u7edf\u4e00\u5bf9\u63a5 dex\uff0cdex \u5bf9\u63a5\u5176\u4ed6 provider"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/mintel/dex-k8s-authenticator",children:"mintel/dex-k8s-authenticator"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"x509-client-certs",children:"X509 Client Certs"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# List CSR\nkubectl get csr\n# Approve/Deny CSR\nkubectl certificate approve myuser\nkubectl certificate deny myuser\n\n# CSR\nkubectl get csr/myuser -o yaml\n\nkubectl get csr myuser -o jsonpath='{.status.certificate}'| base64 -d > myuser.crt\n\n# RB\nkubectl create role developer --verb=create --verb=get --verb=list --verb=update --verb=delete --resource=pods\nkubectl create rolebinding developer-binding-myuser --role=developer --user=myuser\n\n# kubeconfig\nkubectl config set-credentials myuser --client-key=myuser.key --client-certificate=myuser.crt --embed-certs=true\nkubectl config set-context myuser --cluster=kubernetes --user=myuser\nkubectl config use-context myuser\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# username: wener groups: infra, dev\nopenssl req -new -key wener.pem -out wener-csr.pem -subj "/CN=wener/O=infra/O=dev"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u521b\u5efa CSR"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: myuser\nspec:\n  request: <csr-base64> # cat myuser.csr | base64 | tr -d "\\n" \u6216 {{file john.csr | b64enc}}\n  signerName: kubernetes.io/kube-apiserver-client\n  expirationSeconds: 86400 # one day\n  usages:\n    - client auth\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u64cd\u4f5c CSR \u9700\u8981\u7684\u6743\u9650"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: csr-creator # \u521b\u5efa\nrules:\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests\n    verbs:\n      - create\n      - get\n      - list\n      - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: csr-approver # \u540c\u610f\nrules:\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests/approval\n    verbs:\n      - update\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - signers\n    resourceNames:\n      - example.com/my-signer-name # example.com/* can be used to authorize for all signers in the 'example.com' domain\n    verbs:\n      - approve\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: csr-signer # \u5141\u8bb8\u5bf9 CSR \u7b7e\u540d\nrules:\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests/status\n    verbs:\n      - update\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - signers\n    resourceNames:\n      - example.com/my-signer-name # example.com/* can be used to authorize for all signers in the 'example.com' domain\n    verbs:\n      - sign\n"})}),"\n",(0,r.jsx)(n.h3,{id:"signer",children:"signer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"kubernetes.io/kube-apiserver-client"}),"\n",(0,r.jsx)(n.li,{children:"kubernetes.io/kube-apiserver-client-kubelet"}),"\n",(0,r.jsx)(n.li,{children:"kubernetes.io/kubelet-serving"}),"\n",(0,r.jsx)(n.li,{children:"kubernetes.io/legacy-unknown"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bf7\u6c42\u5305\u542b\u8bf7\u6c42\u8005\u7684\u7528\u6237\u540d\u3001\u52a8\u4f5c\u3001\u5f71\u54cd\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.li,{children:"\u9519\u8bef\u8fd4\u56de 403"}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301\u6a21\u5757\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ABAC"}),"\n",(0,r.jsx)(n.li,{children:"RBAC"}),"\n",(0,r.jsx)(n.li,{children:"Webhook"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7b56\u7565"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "abac.authorization.kubernetes.io/v1beta1",\n  "kind": "Policy",\n  "spec": {\n    "user": "bob",\n    "namespace": "projectCaribou",\n    "resource": "pods",\n    "readonly": true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf7\u6c42\u5ba1\u6838"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "apiVersion": "authorization.k8s.io/v1beta1",\n  "kind": "SubjectAccessReview",\n  "spec": {\n    "resourceAttributes": {\n      "namespace": "projectCaribou",\n      "verb": "get",\n      "group": "unicorn.example.org",\n      "resource": "pods"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"admission-control",children:"Admission Control"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e\u4fee\u6539\u6216\u9a73\u56de\u8bf7\u6c42"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e create, modify, delete, connect (proxy) \u5bf9\u8c61\u65f6"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u5f71\u54cd\u8bfb\u53d6"}),"\n",(0,r.jsx)(n.li,{children:"\u591a\u4e2a\u8bbf\u95ee\u63a7\u5236\u6309\u987a\u5e8f\u5224\u65ad"}),"\n",(0,r.jsx)(n.li,{children:"\u6709\u4e00\u4e2a\u9a73\u56de\u5219\u9a6c\u4e0a\u9a73\u56de"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u8bbe\u7f6e\u590d\u6742\u7684\u5b57\u6bb5"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,s)=>{var r=s(50959),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,t={},a=null,d=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!o.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:a,ref:d,props:t,_owner:l.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(50959);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);