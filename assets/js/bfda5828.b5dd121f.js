"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24716],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),k=a,f=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85765:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],i={title:"K8S \u4f7f\u7528\u7ecf\u9a8c"},u="K8S Story",p={unversionedId:"devops/kubernetes/k8s-story",id:"devops/kubernetes/k8s-story",title:"K8S \u4f7f\u7528\u7ecf\u9a8c",description:"Kubernetes is a platform for building platforms. It's a better place to start: not the endgame.",source:"@site/../notes/devops/kubernetes/k8s-story.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-story",permalink:"/notes/devops/kubernetes/k8s-story",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/k8s-story.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"K8S \u4f7f\u7528\u7ecf\u9a8c"},sidebar:"docs",previous:{title:"\u6211\u7684 K8S \u5b9e\u8df5",permalink:"/notes/devops/kubernetes/k8s-my-practice"},next:{title:"Kubernetes \u7248\u672c",permalink:"/notes/devops/kubernetes/k8s-version"}},s={},m=[{value:"\u4e24\u5e74 K8S \u5fc3\u5f97",id:"\u4e24\u5e74-k8s-\u5fc3\u5f97",level:2}],c={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"k8s-story"},"K8S Story"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Kubernetes is a platform for building platforms. It's a better place to start: not the endgame."),(0,l.kt)("p",{parentName:"blockquote"},"-- Kelsey Hightower")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.eficode.com/blog/the-future-of-kubernetes-and-why-developers-should-look-beyond-kubernetes-in-2022"},"The future of Kubernetes \u2013 and why developers should look beyond Kubernetes in 2022"))),(0,l.kt)("h2",{id:"\u4e24\u5e74-k8s-\u5fc3\u5f97"},"\u4e24\u5e74 K8S \u5fc3\u5f97"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u7528\u4e86 Traefik + Cert-Manager + Ext-DNS"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e86 Prometheus-Operator \u4f46\u89c9\u5f97 Thanos \u4e5f\u5f88\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u63a8\u5d07 ",(0,l.kt)("a",{parentName:"li",href:"https://www.gitops.tech/"},"GitOps"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9009\u7528\u4e86 ",(0,l.kt)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/"},"ArgoCD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fluxcd/flux"},"FluxCD")),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5b58\u50a8\u5230 Git \u7684\u8003\u8651\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://velero.io/"},"velero")," \u5907\u4efd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 cert-manager \u8bc1\u4e66"))),(0,l.kt)("li",{parentName:"ul"},"\u89c9\u5f97\u5355\u4e2a Git \u4ed3\u5e93\u597d\uff0c\u4f46\u662f\u5e0c\u671b\u80fd\u5207\u5206\u4e3a\u591a\u4e2a ArgoCD \u5e94\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u591a\u4f7f\u7528 Operator \u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u8d44\u6e90\u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u72b6\u6001 - \u4f8b\u5982\u5e94\u7528 SQL \u8fc1\u79fb"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://book.kubebuilder.io/"},"kubebuilder")))),(0,l.kt)("li",{parentName:"ul"},"Secret \u7ba1\u7406\u4f9d\u7136\u56f0\u96be",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mozilla/sops"},"mozilla/sops")))),(0,l.kt)("li",{parentName:"ul"},"K8S \u539f\u751f CI \u548c\u65e5\u5fd7\u5206\u6790\u4f9d\u7136\u4e0d\u592a\u660e\u786e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u539f\u751f CI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JenkinsX \u63a5\u8fd1\u4f46\u8fc7\u4e8e\u590d\u6742"),(0,l.kt)("li",{parentName:"ul"},"Tekton Pipelines \u548c Argo Workflows \u90fd\u63a5\u8fd1\u539f\u751f\uff0c\u4f46\u65e0\u6cd5\u66b4\u9732\u7ed9\u56e2\u961f"))),(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u5206\u6790",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fluentbit.io/"},"fluentbit")," \u4f5c\u4e3a DaemonSet \u91c7\u96c6\u5230 ",(0,l.kt)("a",{parentName:"li",href:"https://www.fluentd.org/"},"fluentd")," Pod"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u9009\u7528 ES \u6216 Loki"),(0,l.kt)("li",{parentName:"ul"},"Kibana",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u7248\u7528\u6237\u8ba4\u8bc1\u548c\u6bcf\u4e2a\u7528\u6237\u7684\u6743\u9650\u90fd\u4e0d\u5bb9\u6613\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u6790\u529f\u80fd\u5f3a"))),(0,l.kt)("li",{parentName:"ul"},"Grafana",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u5206\u6790\u529f\u80fd\u975e\u5e38\u5f31"),(0,l.kt)("li",{parentName:"ul"},"substring searching and per-line tag searching")))))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://coderanger.net/lessons-learned/"},"Lessons Learned From Two Years Of Kubernetes"))))}k.isMDXComponent=!0}}]);