"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26023],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,h=m["".concat(u,".").concat(f)]||m[f]||c[f]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"FleetCD"},u="Rancher Fleet",p={unversionedId:"devops/kubernetes/app/fleet",id:"devops/kubernetes/app/fleet",title:"FleetCD",description:"* rancher/fleet",source:"@site/../notes/devops/kubernetes/app/fleet.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/fleet",permalink:"/notes/devops/kubernetes/app/fleet",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/app/fleet.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1606055087,formattedLastUpdatedAt:"Nov 22, 2020",frontMatter:{title:"FleetCD"},sidebar:"docs",previous:{title:"external-secrets",permalink:"/notes/devops/kubernetes/app/external-secrets"},next:{title:"FluxCD",permalink:"/notes/devops/kubernetes/app/flux"}},s={},c=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"fleet.yaml",id:"fleetyaml",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rancher-fleet"},"Rancher Fleet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/fleet"},"rancher/fleet"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4 GitOps",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 clusterSelector, clusterGroupSelector, clusterGroup \u4e3a GitRepo \u9009\u62e9\u96c6\u7fa4 - \u76f4\u63a5\u5e94\u7528\u5230\u591a\u4e2a\u96c6\u7fa4"))),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u81ea\u52a8\u53d1\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u68c0\u6d4b fleet.yaml"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u81ea\u52a8\u90e8\u7f72"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 helm+kustomize \u540c\u65f6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fleet.rancher.io/"},"\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5 rancher 2.5+ \u4f1a\u9ed8\u8ba4\u5b89\u88c5 fleet"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u8981\u6c42\u538b\u7f29\u540e\u7684 Repo < 1MB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u975e Helm \u5e94\u7528\uff0c 1 MB \u9650\u5236\u5c31\u6bd4\u8f83\u5c0f\uff0c\u56e0\u4e3a CDR \u5305\u542b\u4e86\u5f88\u591a\u5185\u5bb9\uff0c\u4f8b\u5982 cert-manager 1.6 MB"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fleet.rancher.io/gitrepo-structure/"},"https://fleet.rancher.io/gitrepo-structure/")))),(0,l.kt)("li",{parentName:"ul"},"ssh \u5bc6\u94a5\u4f1a\u76f4\u63a5\u5b58\u50a8\u5230\u5bf9\u5e94\u7a7a\u95f4\u4e0b\u7684 secret"),(0,l.kt)("li",{parentName:"ul"},"namespace \u5fc5\u987b\u8981\u5148\u4e0d\u5b58\u5728",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"fleet \u76f8\u5f53\u4e8e\u662f\u5f3a\u5236\u53d7\u7ba1\u7406\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"argocd \u4f1a\u5408\u5e76"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/fleet-examples"},"rancher/fleet-examples"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# fleet \u5bf9 ssh \u5bc6\u94a5\u6709\u4e00\u5b9a\u8981\u6c42\uff0c\u683c\u5f0f\u5fc5\u987b\u4e3a EC PRIVATE KEY, RSA PRIVATE KEY, PRIVATE KEY \u56e0\u6b64\u9700\u8981 -m pem\n# \u751f\u6210 SSH \u5bc6\u94a5\u5230 /tmp/fleet /tmp/fleet.pub\nssh-keygen -t rsa -b 4096 -m pem -C "fleet@example" -q -N "" -f /tmp/fleet\n\n# fleet \u7528\u7684 ssh secret\nkubectl create secret generic --dry-run=client -o yaml \\\n  fleet-ssh \\\n  --type kubernetes.io/ssh-auth \\\n  --from-file=ssh-privatekey=/tmp/fleet \\\n  --from-file=ssh-publickey=/tmp/fleet.pub > fleet-ssh.secret.yaml\n')),(0,l.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fleet Manager",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u63a7 - \u591a\u96c6\u7fa4\u53ea\u9700\u8981\u542f\u4e00\u4e2a"))),(0,l.kt)("li",{parentName:"ul"},"Fleet controller",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u662f\u6982\u5ff5\u5c42\uff0c\u5b9e\u9645\u4f7f\u7528 manager \u4e0e controller \u65e0\u533a\u522b"))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u96c6\u7fa4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Manager \u4e0e\u53d7\u63a7\u96c6\u7fa4\u5728\u4e00\u8d77"))),(0,l.kt)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Manager \u4f4d\u4e8e\u5176\u4ed6\u96c6\u7fa4\uff0cController \u5728\u53d7\u63a7\u96c6\u7fa4"))),(0,l.kt)("li",{parentName:"ul"},"Fleet agent",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53d7\u63a7\u96c6\u7fa4\u7684\u4ee3\u7406\uff0c\u4e0e manager \u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u7ec4\u7ec4\u4ef6")))),(0,l.kt)("h2",{id:"\u7ed3\u6784"},"\u7ed3\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chart.yaml"),(0,l.kt)("li",{parentName:"ul"},"kustomization.yaml"))),(0,l.kt)("li",{parentName:"ul"},"\u4efb\u610f\u76ee\u5f55/fleet.yaml"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*.yaml")," - \u6ca1\u6709 Chart \u548c kustomization \u5219\u4f1a\u90e8\u7f72\u6240\u6709 yaml"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overlays/{name}"))),(0,l.kt)("h2",{id:"fleetyaml"},"fleet.yaml"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fleet.rancher.io/gitrepo-structure/#fleetyaml"},"fleet.yaml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u53ef\u5728\u914d\u7f6e\u65f6\u4fee\u6539\ndefaultNamespace: default\n\n# \u5f3a\u5236\u6307\u5b9a - \u8d44\u6e90\u5df2\u5b58\u5728\u4f1a\u90e8\u7f72\u5931\u8d25\nnamespace: ""\n\n# kustomize \u90e8\u7f72\nkustomize:\n  # \u76ee\u5f55\u4e0b\u5305\u542b kustomization.yaml\n  dir: ./kustomize\n\n# helm \u90e8\u7f72\nhelm:\n  # chart \u4f4d\u7f6e - \u652f\u6301 https://github.com/hashicorp/go-getter URL\n  chart: ./chart\n  # \u6307\u5b9a chart \u4ed3\u5e93 - \u6307\u5b9a\u540e chart \u5219\u53d8\u4e3a\u4ed3\u5e93\u4e2d\u7684 chart \u540d\u800c\u975e chart \u4f4d\u7f6e\n  repo: https://charts.rancher.io\n  # release \u540d\u5b57 - \u4e0d\u6307\u5b9a\u4f1a\u751f\u6210\n  releaseName: my-release\n  # chart \u7248\u672c - \u652f\u6301 semver \u7248\u672c \u8303\u56f4\u9650\u5b9a\n  version: 0.1.0\n  # inline \u7684 value \u503c\n  values:\n    any-custom: value\n  # \u8986\u76d6\u4e0d\u53ef\u53d8\u8d44\u6e90 - \u5f00\u542f\u6709\u4e00\u5b9a\u5371\u9669\n  force: false\n\n# \u5982\u679c\u6682\u505c\uff0c\u5219\u9700\u8981\u624b\u52a8\u540c\u6b65\npaused: false\n\nrolloutStrategy:\n    # A number or percentage of clusters that can be unavailable during an update\n    # of a bundle. This follows the same basic approach as a deployment rollout\n    # strategy.\n    # default: 10%\n    maxUnavailable: 15%\n    # A number or percentage of cluster partitions that can be unavailable during\n    # an update of a bundle.\n    # default: 0\n    maxUnavailablePartitions: 20%\n    # A number of percentage of how to automatically partition clusters if not\n    # specific partitioning strategy is configured.\n    # default: 25%\n    autoPartitionSize: 10%\n    # A list of definitions of partitions.  If any target clusters do not match\n    # the configuration they are added to partitions at the end following the\n    # autoPartitionSize.\n    partitions:\n      # A user friend name given to the partition used for Display (optional).\n      # default: ""\n    - name: canary\n      # A number or percentage of clusters that can be unavailable in this\n      # partition before this partition is treated as done.\n      # default: 10%\n      maxUnavailable: 10%\n      # Selector matching cluster labels to include in this partition\n      clusterSelector:\n        matchLabels:\n          env: prod\n      # A cluster group name to include in this partition\n      clusterGroup: agroup\n      # Selector matching cluster group labels to include in this partition\n      clusterGroupSelector: agroup\n\n# \u9009\u62e9\u76ee\u6807\u81ea\u5b9a\u4e49 - \u76ee\u6807\u6309\u5e8f\u9009\u62e9\ntargetCustomizations:\n- name: prod # \u540d\u5b57\u4ec5\u7528\u4e8e\u5c55\u793a - \u4e0d\u8bbe\u7f6e\u4f1a\u751f\u6210\n  # \u8986\u76d6\u547d\u540d\u7a7a\u95f4\n  namespace: newvalue\n  # \u8986\u76d6 kustomize \u9009\u9879\n  kustomize: {}\n  # \u8986\u76d6 helm \u9009\u9879\n  helm: {}\n  # YAML \u6e05\u5355\u90e8\u7f72\n  # \u5b9a\u4e49 overlays/{name} \u8986\u76d6\u7684\u540d\u5b57\u5217\u8868 - \u7528\u4e8e\u4fee\u6539\u548c\u6dfb\u52a0\u8d44\u6e90\n  # \u4f8b\u5982\n  #   ./overlays/myoverlay/subdir/resource.yaml \u4f1a\u66ff\u4ee3 ./subdir/resource.yaml\n  #   ./overlays/myoverlay/subdir/resource_patch.yaml \u4f1a\u4fee\u6539 ./subdir/resource.yaml\n  yaml:\n    overlays:\n    - custom2\n    - custom3\n  # \u96c6\u7fa4\u9009\u62e9\u5668 - metav1.LabelSelector\n  clusterSelector:\n    matchLabels:\n      env: prod\n  # \u96c6\u7fa4\u5206\u7ec4\u9009\u62e9\u5668\n  clusterGroupSelector:\n    matchLabels:\n      region: us-east\n  # \u9009\u62e9\u6307\u5b9a\u5206\u7ec4\n  clusterGroup: group1\n')),(0,l.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# \u5b9a\u4e49 Repo\nkind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: helm\n  namespace: fleet-local\nspec:\n  repo: https://github.com/rancher/fleet-examples/\n  paths:\n  - single-cluster/helm\n---\n# \u590d\u6742 Repo\napiVersion: fleet.cattle.io/v1alpha1\nkind: GitRepo\nmetadata:\n  name: my-deploy\n  # fleet \u7a7a\u95f4\n  namespace: fleet-default\nspec:\n  branch: master\n  # ssh \u5bc6\u94a5\n  clientSecretName: fleet-ssh-secret\n  paths:\n  - subpath\n  repo: git@gitea-ssh.gitea:my/repo\n  # \u9009\u62e9\u76ee\u6807\u96c6\u7fa4\n  targets:\n  - clusterSelector: {}\n---\n# \u5b9a\u4e49\u96c6\u7fa4\u5206\u7ec4\napiVersion: fleet.cattle.io/v1alpha1\nkind: ClusterGroup\nmetadata:\n  name: default\n  namespace: fleet-default\nspec:\n  selector:\n    matchLabels:\n      env: prod\n    matchExpressions:\n#      - key: string\n#        operator: string\n#        values:\n#          - string\n")))}f.isMDXComponent=!0}}]);