"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56369],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=u(n),m=a,d=k["".concat(o,".").concat(m)]||k[m]||p[m]||i;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],l={title:"\u8ba4\u8bc1\u6388\u6743"},o=void 0,u={unversionedId:"devops/kubernetes/ops/k8s-auth",id:"devops/kubernetes/ops/k8s-auth",title:"\u8ba4\u8bc1\u6388\u6743",description:"Tips",source:"@site/notes/devops/kubernetes/ops/k8s-auth.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/k8s-auth",permalink:"/notes/devops/kubernetes/ops/k8s-auth",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/ops/k8s-auth.md",tags:[],version:"current",frontMatter:{title:"\u8ba4\u8bc1\u6388\u6743"},sidebar:"docs",previous:{title:"Traefik Ingress",permalink:"/notes/devops/kubernetes/network/traefik-ingress"},next:{title:"kops",permalink:"/notes/devops/kubernetes/ops/kops"}},c={},p=[{value:"Tips",id:"tips",level:2},{value:"Authentication",id:"authentication",level:2},{value:"X509 Client Certs",id:"x509-client-certs",level:3},{value:"signer",id:"signer",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Admission Control",id:"admission-control",level:2}],k={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/"},"AuthN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/authorization/"},"AuthZ"))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6a21\u5757",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Client Certificates - v1.19",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981 API Server \u6709 CA - \u90fd\u4f1a\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"--client-ca-file=SOMEFILE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'openssl req -new -key jbeda.pem -out jbeda-csr.pem -subj "/CN=jbeda/O=app1/O=app2"')))),(0,i.kt)("li",{parentName:"ul"},"Password"),(0,i.kt)("li",{parentName:"ul"},"Plain Tokens",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981 API Server \u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"--token-auth-file=SOMEFILE.csv"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CSV ",(0,i.kt)("inlineCode",{parentName:"li"},'token,user,uid,"group1,group2,group3"')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer 31ada4fd-adec-460c-809a-9e56ceb75269")))),(0,i.kt)("li",{parentName:"ul"},"Bootstrap Tokens - v1.18+",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer 781292.db7bc3a58fc5f07e")))),(0,i.kt)("li",{parentName:"ul"},"Service Account",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl create serviceaccount jenkins")))),(0,i.kt)("li",{parentName:"ul"},"OIDC - \u9700\u8981\u914d\u7f6e API Server",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config set-credentials --auth-provider=oidc")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl --token=")))))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u65b9\u5f0f\uff0c\u6309\u987a\u5e8f\u5c1d\u8bd5\uff0c\u76f4\u5230\u6210\u529f"),(0,i.kt)("li",{parentName:"ul"},"\u9519\u8bef\u8fd4\u56de 401"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u5206\u4e3a Kubernetes \u7ba1\u7406\u7684\u670d\u52a1\u8d26\u53f7 \u548c \u4e00\u822c\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"dex \u53ef\u4ee5\u4f5c\u4e3a auth broker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"client -> dex -> provider",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dex -> k8s"))),(0,i.kt)("li",{parentName:"ul"},"API Server \u7edf\u4e00\u5bf9\u63a5 dex\uff0cdex \u5bf9\u63a5\u5176\u4ed6 provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mintel/dex-k8s-authenticator"},"mintel/dex-k8s-authenticator"))))),(0,i.kt)("h3",{id:"x509-client-certs"},"X509 Client Certs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# List CSR\nkubectl get csr\n# Approve/Deny CSR\nkubectl certificate approve myuser\nkubectl certificate deny myuser\n\n# CSR\nkubectl get csr/myuser -o yaml\n\nkubectl get csr myuser -o jsonpath='{.status.certificate}'| base64 -d > myuser.crt\n\n# RB\nkubectl create role developer --verb=create --verb=get --verb=list --verb=update --verb=delete --resource=pods\nkubectl create rolebinding developer-binding-myuser --role=developer --user=myuser\n\n# kubeconfig\nkubectl config set-credentials myuser --client-key=myuser.key --client-certificate=myuser.crt --embed-certs=true\nkubectl config set-context myuser --cluster=kubernetes --user=myuser\nkubectl config use-context myuser\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# username: wener groups: infra, dev\nopenssl req -new -key wener.pem -out wener-csr.pem -subj "/CN=wener/O=infra/O=dev"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u521b\u5efa CSR")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: myuser\nspec:\n  request: <csr-base64> # cat myuser.csr | base64 | tr -d "\\n" \u6216 {{file john.csr | b64enc}}\n  signerName: kubernetes.io/kube-apiserver-client\n  expirationSeconds: 86400 # one day\n  usages:\n    - client auth\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c CSR \u9700\u8981\u7684\u6743\u9650")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: csr-creator # \u521b\u5efa\nrules:\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests\n    verbs:\n      - create\n      - get\n      - list\n      - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: csr-approver # \u540c\u610f\nrules:\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests/approval\n    verbs:\n      - update\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - signers\n    resourceNames:\n      - example.com/my-signer-name # example.com/* can be used to authorize for all signers in the 'example.com' domain\n    verbs:\n      - approve\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: csr-signer # \u5141\u8bb8\u5bf9 CSR \u7b7e\u540d\nrules:\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - certificatesigningrequests/status\n    verbs:\n      - update\n  - apiGroups:\n      - certificates.k8s.io\n    resources:\n      - signers\n    resourceNames:\n      - example.com/my-signer-name # example.com/* can be used to authorize for all signers in the 'example.com' domain\n    verbs:\n      - sign\n")),(0,i.kt)("h3",{id:"signer"},"signer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kubernetes.io/kube-apiserver-client"),(0,i.kt)("li",{parentName:"ul"},"kubernetes.io/kube-apiserver-client-kubelet"),(0,i.kt)("li",{parentName:"ul"},"kubernetes.io/kubelet-serving"),(0,i.kt)("li",{parentName:"ul"},"kubernetes.io/legacy-unknown")),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5305\u542b\u8bf7\u6c42\u8005\u7684\u7528\u6237\u540d\u3001\u52a8\u4f5c\u3001\u5f71\u54cd\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u9519\u8bef\u8fd4\u56de 403"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u6a21\u5757",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ABAC"),(0,i.kt)("li",{parentName:"ul"},"RBAC"),(0,i.kt)("li",{parentName:"ul"},"Webhook")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b56\u7565")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "abac.authorization.kubernetes.io/v1beta1",\n  "kind": "Policy",\n  "spec": {\n    "user": "bob",\n    "namespace": "projectCaribou",\n    "resource": "pods",\n    "readonly": true\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5ba1\u6838")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "authorization.k8s.io/v1beta1",\n  "kind": "SubjectAccessReview",\n  "spec": {\n    "resourceAttributes": {\n      "namespace": "projectCaribou",\n      "verb": "get",\n      "group": "unicorn.example.org",\n      "resource": "pods"\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"admission-control"},"Admission Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u4fee\u6539\u6216\u9a73\u56de\u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e create, modify, delete, connect (proxy) \u5bf9\u8c61\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u5f71\u54cd\u8bfb\u53d6"),(0,i.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u8bbf\u95ee\u63a7\u5236\u6309\u987a\u5e8f\u5224\u65ad"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u4e00\u4e2a\u9a73\u56de\u5219\u9a6c\u4e0a\u9a73\u56de"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u8bbe\u7f6e\u590d\u6742\u7684\u5b57\u6bb5")))}m.isMDXComponent=!0}}]);