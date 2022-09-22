"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78248],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||s;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31510:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))l.call(t,r)&&c(e,r,t[r]);return e};const d={title:"Kubernates \u9762\u677f"},b="Kubernates \u9762\u677f",m={unversionedId:"devops/kubernetes/k8s-dashboard",id:"devops/kubernetes/k8s-dashboard",title:"Kubernates \u9762\u677f",description:"- kubernetes/dashboard",source:"@site/../notes/devops/kubernetes/k8s-dashboard.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/dashboard",permalink:"/notes/devops/kubernetes/dashboard",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/k8s-dashboard.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637655206,formattedLastUpdatedAt:"Nov 23, 2021",frontMatter:{title:"Kubernates \u9762\u677f"},sidebar:"docs",previous:{title:"K8S Awesome",permalink:"/notes/devops/kubernetes/awesome"},next:{title:"K8S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/faq"}},k={},f=[{value:"TLS",id:"tls",level:2}],h={toc:f};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},h),c),s(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"kubernates-\u9762\u677f"}),"Kubernates \u9762\u677f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/kubernetes/dashboard"}),"kubernetes/dashboard"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u975e\u5e38\u7b80\u6d01\u7684 UI \u9762\u677f"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"}),"Web UI (Dashboard)"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# HELM \u5b89\u88c5\u53c2\u8003\n# ==========\n# https://hub.helm.sh/charts/k8s-dashboard/kubernetes-dashboard\nhelm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/\n# \u9ed8\u8ba4\u4e0d\u4f1a\u5b89\u88c5 metric scraper\nhelm install kubernetes-dashboard/kubernetes-dashboard --name kubernetes-dashboard --namespace kubernetes-dashboard\n\n# \u624b\u52a8\u5b89\u88c5\n# ==========\n# \u5b89\u88c5\u6700\u65b0\u53d1\u5e03\u7248\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/$(curl -Ls https://api.github.com/repos/kubernetes/dashboard/releases/latest | jq -r .tag_name)/aio/deploy/recommended.yaml\n\n# \u521b\u5efa\u7ba1\u7406\u5458\u7ea7\u522b\u8d26\u53f7\ncat <<YAML | kubectl apply -f -\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\nYAML\n\n# \u83b7\u53d6 Token\nkubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token\n# \u5982\u679c\u662f macos \u5219\u53ef\u4ee5\u5b89\u88c5 yq \u7136\u540e\u76f4\u63a5\u590d\u5236\n# kubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token | yq r - 'token' | pbcopy\n\n# \u5f00\u542f\u4ee3\u7406\nkubectl proxy\n# \u8bbf\u95ee\n# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:https/proxy/\n")),(0,n.kt)("h2",p({},{id:"tls"}),"TLS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/certificate-management.md"}),"Certificate management"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"'--tls-cert-file=/tls.crt'"),(0,n.kt)("li",{parentName:"ul"},"'--tls-key-file=/tls.key'"),(0,n.kt)("li",{parentName:"ul"},"'--auto-generate-certificates'"),(0,n.kt)("li",{parentName:"ul"},"'--namespace=kubernetes-dashboard'")))}y.isMDXComponent=!0}}]);