"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67618],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,m=d["".concat(u,".").concat(b)]||d[b]||c[b]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96858:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(22122),a=r(19756),s=(r(67294),r(3905)),o=["components"],i={id:"k8s-dashboard",title:"Kubernates \u9762\u677f"},u=void 0,l={unversionedId:"devops/kubernetes/k8s-dashboard",id:"devops/kubernetes/k8s-dashboard",isDocsHomePage:!1,title:"Kubernates \u9762\u677f",description:"Tips",source:"@site/notes/devops/kubernetes/k8s-dashboard.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-dashboard",permalink:"/notes/devops/kubernetes/k8s-dashboard",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-dashboard.md",version:"current",frontMatter:{id:"k8s-dashboard",title:"Kubernates \u9762\u677f"},sidebar:"docs",previous:{title:"K8S Awesome",permalink:"/notes/devops/kubernetes/k8s-awesome"},next:{title:"K8S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/k8s-faq"}},p=[{value:"Tips",id:"tips",children:[]},{value:"TLS",id:"tls",children:[]}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"tips"},"Tips"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard"},"kubernetes/dashboard"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u975e\u5e38\u7b80\u6d01\u7684 UI \u9762\u677f"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Web UI (Dashboard)")),(0,s.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kube-web-view.readthedocs.io/en/latest/alternatives.html"},"\u5176\u4ed6\u7684 UI"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vmware-tanzu/octant"},"https://github.com/vmware-tanzu/octant"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Highly extensible platform for developers to better understand the complexity of Kubernetes clusters. "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/scope"},"https://github.com/weaveworks/scope"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Monitoring, visualisation & management for Docker & Kubernetes"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/indeedeng/k8dash"},"https://github.com/indeedeng/k8dash")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/hjacobs/kube-ops-view"},"https://github.com/hjacobs/kube-ops-view"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Kubernetes Operational View - read-only system dashboard for multiple K8s clusters"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/hjacobs/kube-resource-report/"},"https://github.com/hjacobs/kube-resource-report/"))))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# HELM \u5b89\u88c5\u53c2\u8003 \n# ==========\n# https://hub.helm.sh/charts/k8s-dashboard/kubernetes-dashboard\nhelm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/\n# \u9ed8\u8ba4\u4e0d\u4f1a\u5b89\u88c5 metric scraper\nhelm install kubernetes-dashboard/kubernetes-dashboard --name kubernetes-dashboard --namespace kubernetes-dashboard\n\n# \u624b\u52a8\u5b89\u88c5\n# ==========\n# \u5b89\u88c5\u6700\u65b0\u53d1\u5e03\u7248\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/$(curl -Ls https://api.github.com/repos/kubernetes/dashboard/releases/latest | jq -r .tag_name)/aio/deploy/recommended.yaml\n\n# \u521b\u5efa\u7ba1\u7406\u5458\u7ea7\u522b\u8d26\u53f7\ncat <<YAML | kubectl apply -f -\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\nYAML\n\n# \u83b7\u53d6 Token\nkubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token\n# \u5982\u679c\u662f macos \u5219\u53ef\u4ee5\u5b89\u88c5 yq \u7136\u540e\u76f4\u63a5\u590d\u5236\n# kubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token | yq r - 'token' | pbcopy\n\n# \u5f00\u542f\u4ee3\u7406\nkubectl proxy\n# \u8bbf\u95ee\n# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:https/proxy/\n")),(0,s.kt)("h2",{id:"tls"},"TLS"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/certificate-management.md"},"Certificate management"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"'--tls-cert-file=/tls.crt'"),(0,s.kt)("li",{parentName:"ul"},"'--tls-key-file=/tls.key'"),(0,s.kt)("li",{parentName:"ul"},"'--auto-generate-certificates'"),(0,s.kt)("li",{parentName:"ul"},"'--namespace=kubernetes-dashboard'")))}d.isMDXComponent=!0}}]);