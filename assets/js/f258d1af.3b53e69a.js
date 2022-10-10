"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70961],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73e3:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={title:"ArgoCD ApplicationSet"},g="ArgoCD ApplicationSet",d={unversionedId:"devops/kubernetes/app/argocd-applicationset",id:"devops/kubernetes/app/argocd-applicationset",title:"ArgoCD ApplicationSet",description:"- argoproj-labs/applicationset",source:"@site/../notes/devops/kubernetes/app/argocd-applicationset.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/argocd-applicationset",permalink:"/notes/devops/kubernetes/app/argocd-applicationset",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/argocd-applicationset.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"ArgoCD ApplicationSet"},sidebar:"docs",previous:{title:"Argo Workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow"},next:{title:"ArgoCD Image Updater",permalink:"/notes/devops/kubernetes/app/argocd-image-updater"}},f={},b=[],k={toc:b};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),c),o(t,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"argocd-applicationset"}),"ArgoCD ApplicationSet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/argoproj-labs/applicationset"}),"argoproj-labs/applicationset"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u73b0\u5728 ArgoCD app of app \u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"ApplicationSet CRD"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u591a\u96c6\u7fa4\u591a\u79df\u6237\uff0c\u9002\u7528\u4e8e monorepo \u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6a21\u7248\u751f\u6210\u64cd\u4f5c Application"))),(0,n.kt)("li",{parentName:"ul"},"generator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"list"),(0,n.kt)("li",{parentName:"ul"},"cluster"),(0,n.kt)("li",{parentName:"ul"},"git"),(0,n.kt)("li",{parentName:"ul"},"matrix - \u591a\u4e2a generator \u540c\u65f6\u751f\u6210"),(0,n.kt)("li",{parentName:"ul"},"scmProvider",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github, gitlab"),(0,n.kt)("li",{parentName:"ul"},"\u626b\u63cf\u4ed3\u5e93\u548c\u7ec4\u7ec7\u7ed3\u6784"))),(0,n.kt)("li",{parentName:"ul"},"clusterDecisionResource",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e external custom resource"),(0,n.kt)("li",{parentName:"ul"},"configMap"))),(0,n.kt)("li",{parentName:"ul"},"pullRequest"),(0,n.kt)("li",{parentName:"ul"},"mergeKeys - Merge generator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5b57\u6bb5\u5408\u5e76 generator")))))),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"argocd 2.3 \u540e\u9ed8\u8ba4\u5b89\u88c5 applicationset\uff0c\u4e0d\u518d\u9700\u8981\u989d\u5916\u5b89\u88c5\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5 applicationset - \u8981\u786e\u4fdd\u5148\u5b89\u88c5\u4e86 argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj-labs/applicationset/master/manifests/install.yaml\n\n# \u9ed8\u8ba4\u5220\u9664 ApplicationSet \u4f1a\u5220\u9664\u751f\u6210\u7684 Application\n# \u4e0d\u7ea7\u8054\u5220\u9664\nkubectl delete ApplicationSet <NAME> --cascade=false\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"apiVersion: argoproj.io/v1alpha1\nkind: ApplicationSet\nmetadata:\n  name: guestbook\nspec:\n  generators:\n    # List \u751f\u6210\uff0c\u53d8\u91cf\u66ff\u4ee3\n    - list:\n        elements:\n          - cluster: engineering-dev\n            url: https://kubernetes.default.svc\n      # generator \u4e5f\u53ef\u4ee5\u5b9a\u4e49 \u6a21\u677f - \u4f18\u5148 - \u4f1a\u8fdb\u884c\u5408\u5e76\n      template:\n    # \u57fa\u4e8e\u96c6\u7fa4\u751f\u6210\n    # secret argocd.argoproj.io/secret-type=cluster\n    # \u80fd\u4f7f\u7528 secret \u91cc\u7684\u53d8\u91cf\uff0c\u4e3b\u8981\u662f server \u548c name\n    - clusters:\n        # \u7b5b\u9009\u96c6\u7fa4 - \u9ed8\u8ba4\u6240\u6709\n        selector:\n          # \u5339\u914d \u96c6\u7fa4 secret \u7684 label\n          matchLabels:\n            staging: true\n    # \u57fa\u4e8e git \u751f\u6210\n    - git:\n        repoURL: https://github.com/argoproj-labs/applicationset.git\n        revision: HEAD\n        directories:\n          # \u57fa\u4e8e\u76ee\u5f55\u751f\u6210\n          # \u53ef\u7528\u53d8\u91cf path, path.basename\n          - path: examples/git-generator-directory/cluster-addons/*\n          # \u57fa\u4e8e\u6587\u4ef6\u751f\u6210\n          # \u652f\u6301\u89e3\u6790 JSON,YAML(0.2+)\n          # \u53ef\u4ee5\u4f7f\u7528 json \u91cc\u5b9a\u4e49\u7684\u6570\u636e\u4f5c\u4e3a\u53d8\u91cf\n          - path: 'examples/git-generator-files-discovery/cluster-config/**/config.json'\n  # Application \u6a21\u677f\n  template:\n    metadata:\n      name: '{{cluster}}-guestbook'\n    spec:\n      project: default\n      source:\n        repoURL: https://github.com/argoproj-labs/applicationset.git\n        targetRevision: HEAD\n        path: examples/list-generator/guestbook/{{cluster}}\n      destination:\n        # name \u548c server \u4e8c\u9009\u4e00\n        # name: # cluster name\n        server: '{{url}}' # \u9ed8\u8ba4 https://kubernetes.default.svc\n        namespace: guestbook\n")))}y.isMDXComponent=!0}}]);