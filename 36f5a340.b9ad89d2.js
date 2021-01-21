(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(7),l=(a(0),a(718)),b={title:"ArgoCD"},c={unversionedId:"devops/kubernetes/app/argocd",id:"devops/kubernetes/app/argocd",isDocsHomePage:!1,title:"ArgoCD",description:"ArgoCD",source:"@site/notes/devops/kubernetes/app/argocd.md",slug:"/devops/kubernetes/app/argocd",permalink:"/notes/devops/kubernetes/app/argocd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argocd.md",version:"current"},i=[{value:"\u5e94\u7528\u53d1\u73b0",id:"\u5e94\u7528\u53d1\u73b0",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"\u5bc6\u94a5\u7ba1\u7406",id:"\u5bc6\u94a5\u7ba1\u7406",children:[]},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[]},{value:"1.8",id:"18",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"argocd"},"ArgoCD"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f K8S \u6301\u7eed\u96c6\u6210/CD \u670d\u52a1/\u63a7\u5236\u5668"),Object(l.b)("li",{parentName:"ul"},"GitOps"),Object(l.b)("li",{parentName:"ul"},"\u6709 ",Object(l.b)("strong",{parentName:"li"},"\u76f4\u89c2\u7684")," WebUI \u53ef\u4f9b\u7ba1\u7406\u548c\u95ee\u9898\u6392\u67e5"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u96c6\u7fa4\u3001\u7edf\u4e00\u767b\u5f55\u3001\u6743\u9650\u7ba1\u7406"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd"}),"argoproj/argo-cd"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://cd.apps.argoproj.io/"}),"DEMO")))),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u90e8\u7f72\u5e94\u7528\u5230\u6307\u5b9a\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u914d\u7f6e - Kustomize, Helm, Ksonnet, Jsonnet, plain-YAML"),Object(l.b)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4"),Object(l.b)("li",{parentName:"ul"},"SSO - OIDC, OAuth2, LDAP, SAML 2.0, GitHub, GitLab, Microsoft, LinkedIn"),Object(l.b)("li",{parentName:"ul"},"\u591a\u79df\u6237\uff0cRBAC"),Object(l.b)("li",{parentName:"ul"},"\u56de\u6eda"),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u8d44\u6e90\u5065\u5eb7\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"\u68c0\u6d4b\u672a\u540c\u6b65\u60c5\u51b5"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u6216\u624b\u52a8\u540c\u6b65"),Object(l.b)("li",{parentName:"ul"},"Web UI \u67e5\u770b\u5b9e\u65f6\u60c5\u51b5\u548c\u5e94\u7528\u6d3b\u52a8"),Object(l.b)("li",{parentName:"ul"},"CLI \u7528\u4e8e CI \u96c6\u6210"),Object(l.b)("li",{parentName:"ul"},"Webhook - GitHub, BitBucket, GitLab"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u81ea\u52a8\u5316\u7684 Access tokens"),Object(l.b)("li",{parentName:"ul"},"PreSync, Sync, PostSync \u94a9\u5b50\u652f\u6301\u590d\u6742\u5e94\u7528 - blue/green & canary upgrades"),Object(l.b)("li",{parentName:"ul"},"Audit trails for application events and API calls"),Object(l.b)("li",{parentName:"ul"},"Prometheus metrics"),Object(l.b)("li",{parentName:"ul"},"Parameter overrides for overriding ksonnet/helm parameters in Git"))),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u5b9a\u4e49",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kustomize"),Object(l.b)("li",{parentName:"ul"},"Helm"),Object(l.b)("li",{parentName:"ul"},"A directory of YAML/JSON/Jsonnet manifests, including Jsonnet"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("del",{parentName:"li"},"Ksonnet"))))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u540d\u5b57\u8981\u6c42\u5168\u5c40\u552f\u4e00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u5c31\u662f helm \u7684 release \u540d\u5b57 - helm \u4e0d\u8981\u6c42\u5168\u5c40\u552f\u4e00\uff0c\u56e0\u6b64\u8fc1\u79fb\u8fc7\u7a0b\u53ef\u80fd\u51b2\u7a81"))),Object(l.b)("li",{parentName:"ul"},"Kustomize \u4e0d\u53ef\u4ee5\u540e\u5904\u7406 Helm",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u5b9a\u9700\u8981\uff0c\u53ef\u4ee5\u8003\u8651",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://dev.to/camptocamp-ops/use-kustomize-to-post-render-helm-charts-in-argocd-2ml6"}),"\u63d2\u4ef6")),Object(l.b)("li",{parentName:"ul"},"\u6216\u8005\u9884\u5148\u751f\u6210\u597d"))),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7a33\u5b9a\u7684 Git \u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528 Gitlab, Github - \u56e0\u4e3a\u8bbf\u95ee\u4e0d\u7a33\u5b9a\u4f1a\u5bfc\u81f4 argocd \u5f88\u6162\u6216\u8005\u540c\u6b65\u72b6\u6001\u4e0d\u53ef\u77e5"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u96c6\u7fa4\u5185\u90e8\u7f72 gitea \u7136\u540e\u955c\u50cf\u5916\u90e8\u4ed3\u5e93 - \u914d\u7f6e\u597d Webhook \u89e6\u53d1\u53ef\u5b9e\u73b0\u79d2\u7ea7\u540c\u6b65")))))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\nkubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n# HA\n# kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml\n\n# \u8f6c\u53d1\u5230\u672c\u5730\u76f4\u63a5\u8bbf\u95ee\n# https://localhost:8080\nkubectl port-forward svc/argocd-server -n argocd 8443:443\n# \u8d26\u53f7 admin\n# \u5bc6\u7801\nkubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2\n\n# argocd \u547d\u4ee4\u884c\u5de5\u5177\nbrew install argocd\n# \u767b\u9646\nargocd login localhost:8080\n\n# \u5982\u679c\u914d\u7f6e\u4e86 ingress \u9700\u8981 grpc-web \u8bbf\u95ee\n# \u9664\u975e\u5f00\u542f ssl-paththrough - nginx \u5f00\u542f\u5bf9\u6027\u80fd\u5f71\u54cd\u5f88\u5927\nargocd login argocd.my.lan:443 --grpc-web\n")),Object(l.b)("h2",{id:"\u5e94\u7528\u53d1\u73b0"},"\u5e94\u7528\u53d1\u73b0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301\uff0c\u4f7f\u7528 app-in-app \u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/cluster-bootstrapping/"}),"Cluster Bootstrapping")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd/issues/1766"}),"#1766")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj-labs/applicationset"}),"argoproj-labs/applicationset"))),Object(l.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"argocd-server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ArgoCD API server"))),Object(l.b)("li",{parentName:"ul"},"argocd-application-controller",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6301\u7eed\u5065\u5eb7\u8fd0\u884c\u7684\u5e94\u7528\uff0c\u5bf9\u6bd4\u72b6\u6001"))),Object(l.b)("li",{parentName:"ul"},"argocd-repo-server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7ba1\u7406 Git \u672c\u5730\u7f13\u5b58\uff0c\u7ba1\u7406\u5e94\u7528\u6e05\u5355")))),Object(l.b)("h2",{id:"\u5bc6\u94a5\u7ba1\u7406"},"\u5bc6\u94a5\u7ba1\u7406"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898\u6839\u6e90",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a GitOps \u8981\u6c42\u6240\u6709\u5185\u5bb9\u90fd\u5728\u4ed3\u5e93\uff0c\u56e0\u6b64\u5bc6\u94a5\u4e5f\u9700\u8981\u5b58\u50a8\u5728\u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u4e0d\u80fd\u76f4\u63a5\u653e\u660e\u6587\u7684 Secret\uff0c\u56e0\u6b64\u9700\u8981\u66f2\u7ebf\u63d0\u4f9b Secret"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u5206\u8981\u6c42\u5728 helm values.yaml \u63d0\u4f9b\u5bc6\u94a5\u7684\u8fd8\u9700\u8981\u5148\u751f\u6210 chart \u7136\u540e\u4fee\u6539\u4e3a\u53e6\u5916\u7684\u65b9\u5f0f\u63d0\u4f9b\u5bc6\u94a5"))),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6848",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/bitnami-labs/sealed-secrets"}),"bitnami-labs/sealed-secrets"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u751f\u6210\u4e0d\u53ef\u9006\u7684\u5bc6\u94a5\u5b58\u50a8\u5728\u4ed3\u5e93\uff0c\u63a7\u5236\u5668\u751f\u6210\u5bf9\u5e94 Secret - \u975e\u5bf9\u79f0\u52a0\u5bc6"),Object(l.b)("li",{parentName:"ul"},"\u6700\u7b80\u5355\u5b9e\u7528"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/secret-management/"}),"Secret Management"))))),Object(l.b)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/user-guide/commands/argocd/"}),"https://argoproj.github.io/argo-cd/user-guide/commands/argocd/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"~/.argocd/config"))),Object(l.b)("h1",{id:"\u7248\u672c"},"\u7248\u672c"),Object(l.b)("h2",{id:"18"},"1.8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"mono-repository \u5904\u7406\u6548\u7387\u589e\u5f3a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u76f8\u540c commit \u5e76\u884c\u5904\u7406 - \u4e4b\u524d\u662f\u6bcf\u4e2a\u90fd\u8981\u5904\u7406\u4e00\u904d"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"argocd.argoproj.io/manifest-generate-paths")),Object(l.b)("li",{parentName:"ul"},"argocd-application-controller \u7ec4\u4ef6\u652f\u6301\u6c34\u5e73\u6269\u5bb9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u66f4\u597d\u7ba1\u7406\u591a\u96c6\u7fa4"),Object(l.b)("li",{parentName:"ul"},"depolyment -> statuefulset"))),Object(l.b)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u5065\u5eb7\u72b6\u6001\u4e0d\u5f71\u54cd\u7236\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},"\u5168\u5c40 Project"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/upgrading/1.7-1.8/"}),"v1.7 to 1.8"))))}p.isMDXComponent=!0},718:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,O=u["".concat(b,".").concat(s)]||u[s]||m[s]||l;return a?n.a.createElement(O,c(c({ref:t},o),{},{components:a})):n.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);