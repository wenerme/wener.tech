"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78248],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(96600),a=n(27279),s=(n(59496),n(49613)),o=["components"],u={title:"Kubernates \u9762\u677f"},i="Kubernates \u9762\u677f",c={unversionedId:"devops/kubernetes/k8s-dashboard",id:"devops/kubernetes/k8s-dashboard",title:"Kubernates \u9762\u677f",description:"- kubernetes/dashboard",source:"@site/../notes/devops/kubernetes/k8s-dashboard.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-dashboard",permalink:"/notes/devops/kubernetes/k8s-dashboard",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/k8s-dashboard.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Kubernates \u9762\u677f"},sidebar:"docs",previous:{title:"K8S Awesome",permalink:"/notes/devops/kubernetes/k8s-awesome"},next:{title:"K8S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/k8s-faq"}},l={},d=[{value:"TLS",id:"tls",level:2}],p={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"kubernates-\u9762\u677f"},"Kubernates \u9762\u677f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard"},"kubernetes/dashboard"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u975e\u5e38\u7b80\u6d01\u7684 UI \u9762\u677f"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Web UI (Dashboard)"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# HELM \u5b89\u88c5\u53c2\u8003\n# ==========\n# https://hub.helm.sh/charts/k8s-dashboard/kubernetes-dashboard\nhelm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/\n# \u9ed8\u8ba4\u4e0d\u4f1a\u5b89\u88c5 metric scraper\nhelm install kubernetes-dashboard/kubernetes-dashboard --name kubernetes-dashboard --namespace kubernetes-dashboard\n\n# \u624b\u52a8\u5b89\u88c5\n# ==========\n# \u5b89\u88c5\u6700\u65b0\u53d1\u5e03\u7248\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/$(curl -Ls https://api.github.com/repos/kubernetes/dashboard/releases/latest | jq -r .tag_name)/aio/deploy/recommended.yaml\n\n# \u521b\u5efa\u7ba1\u7406\u5458\u7ea7\u522b\u8d26\u53f7\ncat <<YAML | kubectl apply -f -\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\nYAML\n\n# \u83b7\u53d6 Token\nkubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token\n# \u5982\u679c\u662f macos \u5219\u53ef\u4ee5\u5b89\u88c5 yq \u7136\u540e\u76f4\u63a5\u590d\u5236\n# kubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token | yq r - 'token' | pbcopy\n\n# \u5f00\u542f\u4ee3\u7406\nkubectl proxy\n# \u8bbf\u95ee\n# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:https/proxy/\n")),(0,s.kt)("h2",{id:"tls"},"TLS"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/certificate-management.md"},"Certificate management"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"'--tls-cert-file=/tls.crt'"),(0,s.kt)("li",{parentName:"ul"},"'--tls-key-file=/tls.key'"),(0,s.kt)("li",{parentName:"ul"},"'--auto-generate-certificates'"),(0,s.kt)("li",{parentName:"ul"},"'--namespace=kubernetes-dashboard'")))}b.isMDXComponent=!0}}]);