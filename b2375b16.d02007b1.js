(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(r),m=a,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return r?n.a.createElement(O,c(c({ref:t},p),{},{components:r})):n.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},851:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(8),l=(r(0),r(1169)),o={title:"ArgoCD \u7248\u672c"},c={unversionedId:"devops/kubernetes/app/argo-cd-version",id:"devops/kubernetes/app/argo-cd-version",isDocsHomePage:!1,title:"ArgoCD \u7248\u672c",description:"- \u955c\u50cf argoproj/argocd:v1.8.4",source:"@site/notes/devops/kubernetes/app/argo-cd-version.md",slug:"/devops/kubernetes/app/argo-cd-version",permalink:"/notes/devops/kubernetes/app/argo-cd-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argo-cd-version.md",version:"current",sidebar:"docs",previous:{title:"K8S Apps",permalink:"/notes/devops/kubernetes/app/app-cookbook"},next:{title:"ArgoCD",permalink:"/notes/devops/kubernetes/app/argo-cd"}},i=[{value:"2.0",id:"20",children:[]},{value:"1.8",id:"18",children:[]}],p={toc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf argoproj/argocd:v1.8.4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u63d0\u524d\u62c9\u597d"))),Object(l.b)("li",{parentName:"ul"},"2.0 \u955c\u50cf quay.io/argoproj/argocd")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u548c\u5347\u7ea7\u662f\u4e00\u6837\u7684 - \u4ed3\u5e93\u7684 stable tag \u603b\u662f\u6307\u5411\u6700\u65b0 stable \u7248\u672c\n# \u5347\u7ea7\u6ce8\u610f\u5904\u7406\u597d argocd-cm\n# \u666e\u901a\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n# HA\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml\n")),Object(l.b)("h2",{id:"20"},"2.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pods View",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b0\u589e Pod \u89c6\u56fe - \u53ef\u67e5\u770b Pod \u5206\u5e03\u60c5\u51b5"),Object(l.b)("li",{parentName:"ul"},"Pod \u975e\u5e38\u591a\u7684\u65f6\u5019\u5f88\u6709\u7528"))),Object(l.b)("li",{parentName:"ul"},"Logs Viewer",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5206\u9875\u3001\u8fc7\u6ee4\u3001Dark \u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u805a\u5408\u591a\u4e2a Pod \u65e5\u5fd7 - Deployment\u3001ReplicaSet\u3001STS"),Object(l.b)("li",{parentName:"ul"},"\u547d\u4ee4\u884c ",Object(l.b)("inlineCode",{parentName:"li"},"rgocd app logs")))),Object(l.b)("li",{parentName:"ul"},"\u65b0\u589e Banner",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ui.bannercontent"),Object(l.b)("li",{parentName:"ul"},"ui.bannerurl"))),Object(l.b)("li",{parentName:"ul"},"PrunePropagationPolicy=background",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u540c\u6b65\u65f6\u540e\u53f0\u6e05\u9664\u81ea\u613f - \u73b0\u5728\u7684\u903b\u8f91\u53ef\u80fd\u5bfc\u81f4 delet \u5361\u6b7b"),Object(l.b)("li",{parentName:"ul"},"Foreground - k8s \u5fc5\u987b\u5220\u9664\u6240\u6709 child \u8d44\u6e90\u624d\u80fd\u5220\u9664\u8d44\u6e90\u672c\u8eab"))),Object(l.b)("li",{parentName:"ul"},"finalizer resources-finalizer.argocd.argoproj.io:background",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5220\u9664\u5e94\u7528\u65f6\u540e\u53f0\u5904\u7406"))),Object(l.b)("li",{parentName:"ul"},"ApplyOutOfSyncOnly=true",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ea\u540c\u6b65\u4e0d\u540c\u6b65\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u662f kubectl apply \u6240\u6709 - \u6162"))),Object(l.b)("li",{parentName:"ul"},"PruneLast=true",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5728\u540c\u6b65\u6700\u540e\u6e05\u9664\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u6700\u540e\u5220\u9664\u914d\u7f6e\uff0c\u5148\u6e05\u7406 Pod \u7b49\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u72ec\u7acb\u8d44\u6e90\u914d\u7f6e - argocd.argoproj.io/sync-options"))),Object(l.b)("li",{parentName:"ul"},"\u5065\u5eb7\u68c0\u67e5\u652f\u6301",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sealed-secrets - \u4e4b\u524d\u5982\u679c secret \u9519\u8bef\u65e0\u6cd5\u53d1\u73b0"),Object(l.b)("li",{parentName:"ul"},"kubernetes-external-secrets"),Object(l.b)("li",{parentName:"ul"},"strimzi"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/releases/tag/v2.0.0"},"v2.0.0"))),Object(l.b)("h2",{id:"18"},"1.8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"mono-repository \u5904\u7406\u6548\u7387\u589e\u5f3a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u76f8\u540c commit \u5e76\u884c\u5904\u7406 - \u4e4b\u524d\u662f\u6bcf\u4e2a\u90fd\u8981\u5904\u7406\u4e00\u904d"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"argocd.argoproj.io/manifest-generate-paths")),Object(l.b)("li",{parentName:"ul"},"argocd-application-controller \u7ec4\u4ef6\u652f\u6301\u6c34\u5e73\u6269\u5bb9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u66f4\u597d\u7ba1\u7406\u591a\u96c6\u7fa4"),Object(l.b)("li",{parentName:"ul"},"\u26a0\ufe0f depolyment -> statuefulset",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5347\u7ea7\u540e\u9700\u8981\u624b\u52a8\u5220\u9664 ",Object(l.b)("inlineCode",{parentName:"li"},"kubectl -n argocd delete deploy argocd-application-controller")))))),Object(l.b)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u5065\u5eb7\u72b6\u6001\u4e0d\u5f71\u54cd\u7236\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},"\u5168\u5c40 Project"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/upgrading/1.7-1.8/"},"v1.7 to 1.8"))))}b.isMDXComponent=!0}}]);