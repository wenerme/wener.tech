"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26774],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97899:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),p=["components"],i={title:"ArgoCD ApplicationSet"},l=void 0,s={unversionedId:"devops/kubernetes/app/argocd-applicationset",id:"devops/kubernetes/app/argocd-applicationset",title:"ArgoCD ApplicationSet",description:"- argoproj-labs/applicationset",source:"@site/notes/devops/kubernetes/app/argocd-applicationset.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/argocd-applicationset",permalink:"/notes/devops/kubernetes/app/argocd-applicationset",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argocd-applicationset.md",tags:[],version:"current",frontMatter:{title:"ArgoCD ApplicationSet"},sidebar:"docs",previous:{title:"Argo Workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow"},next:{title:"ArgoCD Image Updater",permalink:"/notes/devops/kubernetes/app/argocd-image-updater"}},c={},u=[],m={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/argoproj-labs/applicationset"},"argoproj-labs/applicationset"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u73b0\u5728 ArgoCD app of app \u95ee\u9898"),(0,o.kt)("li",{parentName:"ul"},"ApplicationSet CRD"),(0,o.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u591a\u96c6\u7fa4\u591a\u79df\u6237\uff0c\u9002\u7528\u4e8e monorepo \u573a\u666f"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6a21\u7248\u751f\u6210\u64cd\u4f5c Application"))),(0,o.kt)("li",{parentName:"ul"},"generator",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"list"),(0,o.kt)("li",{parentName:"ul"},"cluster"),(0,o.kt)("li",{parentName:"ul"},"git"),(0,o.kt)("li",{parentName:"ul"},"matrix - \u591a\u4e2a generator \u540c\u65f6\u751f\u6210"),(0,o.kt)("li",{parentName:"ul"},"scmProvider",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"github, gitlab"),(0,o.kt)("li",{parentName:"ul"},"\u626b\u63cf\u4ed3\u5e93\u548c\u7ec4\u7ec7\u7ed3\u6784"))),(0,o.kt)("li",{parentName:"ul"},"clusterDecisionResource",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e external custom resource"),(0,o.kt)("li",{parentName:"ul"},"configMap"))),(0,o.kt)("li",{parentName:"ul"},"pullRequest"),(0,o.kt)("li",{parentName:"ul"},"mergeKeys - Merge generator",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5b57\u6bb5\u5408\u5e76 generator")))))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"argocd 2.3 \u540e\u9ed8\u8ba4\u5b89\u88c5 applicationset\uff0c\u4e0d\u518d\u9700\u8981\u989d\u5916\u5b89\u88c5\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 applicationset - \u8981\u786e\u4fdd\u5148\u5b89\u88c5\u4e86 argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj-labs/applicationset/master/manifests/install.yaml\n\n# \u9ed8\u8ba4\u5220\u9664 ApplicationSet \u4f1a\u5220\u9664\u751f\u6210\u7684 Application\n# \u4e0d\u7ea7\u8054\u5220\u9664\nkubectl delete ApplicationSet <NAME> --cascade=false\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: ApplicationSet\nmetadata:\n  name: guestbook\nspec:\n  generators:\n    # List \u751f\u6210\uff0c\u53d8\u91cf\u66ff\u4ee3\n    - list:\n        elements:\n          - cluster: engineering-dev\n            url: https://kubernetes.default.svc\n      # generator \u4e5f\u53ef\u4ee5\u5b9a\u4e49 \u6a21\u677f - \u4f18\u5148 - \u4f1a\u8fdb\u884c\u5408\u5e76\n      template:\n    # \u57fa\u4e8e\u96c6\u7fa4\u751f\u6210\n    # secret argocd.argoproj.io/secret-type=cluster\n    # \u80fd\u4f7f\u7528 secret \u91cc\u7684\u53d8\u91cf\uff0c\u4e3b\u8981\u662f server \u548c name\n    - clusters:\n        # \u7b5b\u9009\u96c6\u7fa4 - \u9ed8\u8ba4\u6240\u6709\n        selector:\n          # \u5339\u914d \u96c6\u7fa4 secret \u7684 label\n          matchLabels:\n            staging: true\n    # \u57fa\u4e8e git \u751f\u6210\n    - git:\n        repoURL: https://github.com/argoproj-labs/applicationset.git\n        revision: HEAD\n        directories:\n          # \u57fa\u4e8e\u76ee\u5f55\u751f\u6210\n          # \u53ef\u7528\u53d8\u91cf path, path.basename\n          - path: examples/git-generator-directory/cluster-addons/*\n          # \u57fa\u4e8e\u6587\u4ef6\u751f\u6210\n          # \u652f\u6301\u89e3\u6790 JSON,YAML(0.2+)\n          # \u53ef\u4ee5\u4f7f\u7528 json \u91cc\u5b9a\u4e49\u7684\u6570\u636e\u4f5c\u4e3a\u53d8\u91cf\n          - path: 'examples/git-generator-files-discovery/cluster-config/**/config.json'\n  # Application \u6a21\u677f\n  template:\n    metadata:\n      name: '{{cluster}}-guestbook'\n    spec:\n      project: default\n      source:\n        repoURL: https://github.com/argoproj-labs/applicationset.git\n        targetRevision: HEAD\n        path: examples/list-generator/guestbook/{{cluster}}\n      destination:\n        # name \u548c server \u4e8c\u9009\u4e00\n        # name: # cluster name\n        server: '{{url}}' # \u9ed8\u8ba4 https://kubernetes.default.svc\n        namespace: guestbook\n")))}g.isMDXComponent=!0}}]);