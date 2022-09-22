"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94233],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90566:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=t(96600),r=t(27279),l=(t(59496),t(49613)),i=["components"],o={title:"Kubernetes \u8c03\u5ea6"},u="Kubernetes \u8c03\u5ea6",s={unversionedId:"devops/kubernetes/internal/k8s-scheduling",id:"devops/kubernetes/internal/k8s-scheduling",title:"Kubernetes \u8c03\u5ea6",description:"- /etc/kubernetes/config/kube-scheduler.yaml",source:"@site/../notes/devops/kubernetes/internal/k8s-scheduling.md",sourceDirName:"devops/kubernetes/internal",slug:"/devops/kubernetes/internal/k8s-scheduling",permalink:"/notes/devops/kubernetes/internal/k8s-scheduling",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/internal/k8s-scheduling.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Kubernetes \u8c03\u5ea6"},sidebar:"docs",previous:{title:"Kubernetes \u6807\u7b7e",permalink:"/notes/devops/kubernetes/internal/k8s-labels"},next:{title:"K8S Awesome",permalink:"/notes/devops/kubernetes/k8s-awesome"}},p={},d=[{value:"\u8282\u70b9\u9009\u62e9",id:"\u8282\u70b9\u9009\u62e9",level:2},{value:"Node affinity per scheduling profile",id:"node-affinity-per-scheduling-profile",level:2},{value:"RuntimeClass",id:"runtimeclass",level:2},{value:"Taints and Tolerations",id:"taints-and-tolerations",level:2},{value:"\u4f18\u5148\u7ea7\u548c\u62a2\u5360",id:"\u4f18\u5148\u7ea7\u548c\u62a2\u5360",level:2},{value:"Probe",id:"probe",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"cordon vs drain",id:"cordon-vs-drain",level:2},{value:"region vs zone",id:"region-vs-zone",level:2}],m={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubernetes-\u8c03\u5ea6"},"Kubernetes \u8c03\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/etc/kubernetes/config/kube-scheduler.yaml",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/config-api/kube-scheduler-config.v1beta1/"},"kube-scheduler-config.v1beta1")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/"},"Node-pressure Eviction")),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"topology.kubernetes.io/zone"),(0,l.kt)("li",{parentName:"ul"},"topology.kubernetes.io/region")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n kube-system | grep kube-scheduler\n")),(0,l.kt)("h2",{id:"\u8282\u70b9\u9009\u62e9"},"\u8282\u70b9\u9009\u62e9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nodeName - \u9009\u62e9\u8282\u70b9\u540d\u5b57"),(0,l.kt)("li",{parentName:"ul"},"nodeSelector - \u5f3a\u5236\u9009\u62e9\u8282\u70b9 - \u7b80\u5355\u7684\u901a\u8fc7 Label \u5339\u914d\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"namespaceSelector - v1.21 alpha - Namespace Label"),(0,l.kt)("li",{parentName:"ul"},"NodeRestriction - \u8282\u70b9\u9650\u5236 Label \u53ef\u7528\u4e8e\u8f85\u52a9\u9009\u62e9\u8282\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node-restriction.kubernetes.io/")))),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4eb2\u548c - \u57fa\u4e8e Node Label \u9009\u62e9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"requiredDuringSchedulingIgnoredDuringExecution - hard"),(0,l.kt)("li",{parentName:"ul"},"preferredDuringSchedulingIgnoredDuringExecution - soft"),(0,l.kt)("li",{parentName:"ul"},"IgnoredDuringExecution - \u6307\u5728 Pod \u8fd0\u884c\u540e\u4e0d\u5728\u5173\u7cfb\u8282\u70b9 Label \u53d8\u5316\u662f\u5426\u6ee1\u8db3\u8981\u6c42"),(0,l.kt)("li",{parentName:"ul"},"RequiredDuringExecution - \u672a\u6765\u652f\u6301\uff0c\u8fd0\u884c\u540e\u5982\u679c\u4e0d\u518d\u5339\u914d\u5219\u9a71\u9010 Pod"))),(0,l.kt)("li",{parentName:"ul"},"Pod \u4e4b\u95f4\u4eb2\u548c - \u57fa\u4e8e Pod Label \u9009\u62e9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd0\u884c\u4e86 Pod A \u5219 \u5e94\u8be5/\u4e0d\u5e94\u8be5 \u8fd0\u884c Pod B"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u4f7f\u7528 topologyKey \u9009\u62e9\u76f8\u540c\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4fee\u6539\u8282\u70b9 topologyKey\uff0c\u53ef\u80fd\u5bfc\u81f4\u672a\u77e5\u884c\u4e3a"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u767e\u8282\u70b9\u5927\u96c6\u7fa4\u4e0d\u5efa\u8bae\u4f7f\u7528 - \u8ba1\u7b97\u590d\u6742\u5f71\u54cd\u6027\u80fd")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b Label\nkubectl get nodes --show-labels\n# \u6dfb\u52a0 Label\nkubectl label nodes <your-node-name> disktype=ssd\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      imagePullPolicy: IfNotPresent\n  # \u8282\u70b9\u540d\u5b57\u9009\u62e9\n  nodeName: kube-01\n  # \u8282\u70b9 Label \u9009\u62e9\n  nodeSelector:\n    disktype: ssd\n\n  # \u4efb\u610f NS\n  namespaceSelector: {}\n  # \u5f53\u524d Pod NS\n  namespaceSelector: null\n  # \u5339\u914d Label\n  namespaceSelector:\n    key: val\n\n  affinity:\n    # \u8282\u70b9\u4eb2\u548c - \u540c\u65f6\u6ee1\u8db3 nodeSelector\n    nodeAffinity:\n      # \u5f3a\u5236\u8981\u6c42\n      requiredDuringSchedulingIgnoredDuringExecution:\n        # \u6307\u5b9a\u4e2a\u6ee1\u8db3\u4e00\u4e2a\u5373\u53ef\n        nodeSelectorTerms:\n          - matchExpressions: # \u8981\u6c42\u6240\u6709\u6761\u4ef6\u6ee1\u8db3\n              - key: kubernetes.io/e2e-az-name\n                operator: In # In, NotIn, Exists, DoesNotExist, Gt, Lt\n                values:\n                  - e2e-az1\n                  - e2e-az2\n      # \u8f6f\u8981\u6c42 - \u503e\u5411\u6ee1\u8db3\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - weight: 1 # 1-100, \u591a\u4e2a\u6761\u4ef6\u7d2f\u52a0, \u9009\u62e9\u7d2f\u52a0\u6743\u91cd\u6700\u9ad8\u7684\u8282\u70b9\n          preference:\n            matchExpressions:\n              - key: another-node-label-key\n                operator: In\n                values:\n                  - another-node-label-value\n    # Pod \u4eb2\u548c\n    podAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n      - labelSelector:\n          matchExpressions:\n          - key: security\n            operator: In\n            values:\n            - S1\n        topologyKey: topology.kubernetes.io/zone\n    # Pod \u53cd\u4eb2\u548c\n    podAntiAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - weight: 100\n        podAffinityTerm:\n          labelSelector:\n            matchExpressions:\n            - key: security\n              operator: In\n              values:\n              - S2\n          topologyKey: topology.kubernetes.io/zone\n")),(0,l.kt)("h2",{id:"node-affinity-per-scheduling-profile"},"Node affinity per scheduling profile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1.20 beta")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kubescheduler.config.k8s.io/v1beta1\nkind: KubeSchedulerConfiguration\n\nprofiles:\n  - schedulerName: default-scheduler\n  - schedulerName: foo-scheduler\n    pluginConfig:\n      - name: NodeAffinity\n        args:\n          addedAffinity:\n            requiredDuringSchedulingIgnoredDuringExecution:\n              nodeSelectorTerms:\n                - matchExpressions:\n                    - key: scheduler-profile\n                      operator: In\n                      values:\n                        - foo\n")),(0,l.kt)("h2",{id:"runtimeclass"},"RuntimeClass"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 Pod \u56fa\u6709\u8d44\u6e90 - \u76f8\u5f53\u4e8e\u9ed8\u8ba4\u8d44\u6e90\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: RuntimeClass\napiVersion: node.k8s.io/v1\nmetadata:\n  name: kata-fc\nhandler: kata-fc\noverhead:\n  podFixed:\n    memory: '120Mi'\n    cpu: '250m'\n")),(0,l.kt)("h2",{id:"taints-and-tolerations"},"Taints and Tolerations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6c61\u70b9 - \u8282\u70b9\u7ef4\u5ea6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u4eb2\u548c\u76f8\u53cd - \u6392\u9664\u4e0d\u80fd\u5fcd\u53d7\u6c61\u70b9\u7684 Pod"),(0,l.kt)("li",{parentName:"ul"},"\u6c61\u70b9\u6709\u6307\u5b9a\u6548\u679c"))),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u5fcd - Pod \u7ef4\u5ea6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u5fcd \u8282\u70b9 \u6c61\u70b9"))),(0,l.kt)("li",{parentName:"ul"},"operator - \u5bb9\u5fcd\u5339\u914d\u64cd\u4f5c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Equal - \u9ed8\u8ba4 kv \u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"Exists - \u5339\u914d k \u5b58\u5728",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c k \u4e3a\u7a7a\uff0c\u5219\u5bb9\u5fcd\u6240\u6709"))))),(0,l.kt)("li",{parentName:"ul"},"effect - \u6c61\u70b9\u6548\u679c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NoSchedule - \u4e0d\u8c03\u5ea6 - \u8c03\u5ea6\u9636\u6bb5\uff0c\u5df2\u7ecf\u8fd0\u884c\u4e0d\u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"PreferNoSchedule - \u5c3d\u91cf\u4e0d\u8c03\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"NoExecute - \u4e0d\u6267\u884c - \u4f1a\u4ece\u8282\u70b9\u9a71\u9010\uff0c\u8fd0\u884c\u9636\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tolerationSeconds \u53ef\u4ee5\u914d\u7f6e\u5bb9\u5fcd\u65f6\u95f4\uff0c\u800c\u4e0d\u662f\u7acb\u5373\u9a71\u9010"))))),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e13\u7528\u8282\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u8fb9\u7f18\u8282\u70b9 PreferNoSchedule - \u9ed8\u8ba4\u5c3d\u91cf\u4e0d\u8c03\u5ea6\u8ba1\u7b97 Pod"))),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u786c\u4ef6\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6c61\u70b9\u8fdb\u884c\u9a71\u9010 - v1.18+ - \u8282\u70b9\u72b6\u6001",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/not-ready - \u8282\u70b9\u672a\u51c6\u5907\u597d"),(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/unreachable - \u8282\u70b9\u65e0\u6cd5\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/memory-pressure"),(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/disk-pressure"),(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/pid-pressure"),(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/network-unavailable"),(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/unschedulable"),(0,l.kt)("li",{parentName:"ul"},"node.cloudprovider.kubernetes.io/uninitialized"),(0,l.kt)("li",{parentName:"ul"},"DaemonSet",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u5fcd unreachable \u548c not-ready NoExecute"),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u5fcd \u5176\u4ed6\u6761\u4ef6\u7684 NoSchedule"))))))),(0,l.kt)("li",{parentName:"ul"},"QoS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BestEffort"),(0,l.kt)("li",{parentName:"ul"},"Guaranteed"),(0,l.kt)("li",{parentName:"ul"},"Burstable")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u6c61\u70b9 - \u5982\u679c\u4e0d\u80fd\u5bb9\u5fcd key1=value1 \u5219\u4e0d\u8c03\u5ea6\nkubectl taint nodes node1 key1=value1:NoSchedule\n# \u79fb\u9664\u6c61\u70b9\nkubectl taint nodes node1 key1=value1:NoSchedule-\n\n# \u53ef\u5728 master \u4e0a\u6253\u4e0a\u8981\u6c42\u6307\u5b9a\u4e86 master \u624d\u8fd0\u884c\nkubectl taint node MASTER node-role.kubernetes.io/master=:NoSchedule-\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      imagePullPolicy: IfNotPresent\n  tolerations: # \u5bb9\u5fcd\u914d\u7f6e\n    - key: 'key1'\n      operator: 'Equal' # Exists\n      value: 'value1'\n      effect: 'NoSchedule'\n")),(0,l.kt)("h2",{id:"\u4f18\u5148\u7ea7\u548c\u62a2\u5360"},"\u4f18\u5148\u7ea7\u548c\u62a2\u5360"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PriorityClass - v1.14+",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"value 1 - 10^10"),(0,l.kt)("li",{parentName:"ul"},"globalDefault - \u8be5 class \u4f5c\u4e3a\u9ed8\u8ba4 - pod \u7f3a\u7701 priorityClassName \u65f6"))),(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e PriorityClass",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"system-cluster-critical"),(0,l.kt)("li",{parentName:"ul"},"system-node-critical"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u786e\u4fdd Pod \u6c38\u8fdc\u4f1a\u6267\u884c - \u4f8b\u5982\u7f51\u7edc\u7ec4\u4ef6 metallb"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e0c\u671b\u8282\u70b9\u5728\u67d0\u4e2a Pod \u603b\u4f1a\u6267\u884c\u53ef\u6dfb\u52a0"))),(0,l.kt)("li",{parentName:"ul"},"Pod priorityClassName")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: high-priority\nvalue: 1000000\nglobalDefault: false\ndescription: 'This priority class should be used for XYZ service pods only.'\n# \u62a2\u5360\u7b56\u7565 - \u9ed8\u8ba4 PreemptLowerPriority\n# Never \u4e0d\u88ab\u62a2\u5360 - \u4f8b\u5982 Job \u4e0d\u60f3\u88ab\u4e2d\u65ad\u573a\u666f\n# 1.19+ beta\npreemptionPolicy: Never\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      imagePullPolicy: IfNotPresent\n  # \u9488\u5bf9 Pod\n  priorityClassName: system-node-critical\n")),(0,l.kt)("h2",{id:"probe"},"Probe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"startupProbe - 1.16+",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u542f\u52a8\uff0c\u53ea\u4f1a\u5224\u65ad ",(0,l.kt)("strong",{parentName:"li"},"\u4e00\u6b21")),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u4fdd\u62a4\u542f\u52a8\u6162\u7684\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"startup \u540e\u624d\u4f1a\u5f00\u59cb livenessProbe \u548c readinessProbe"))),(0,l.kt)("li",{parentName:"ul"},"livenessProbe",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u5b58\u6d3b\uff0c\u672a\u5b58\u6d3b\u4f1a\u88ab kill \u91cd\u542f"))),(0,l.kt)("li",{parentName:"ul"},"readinessProbe",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u51c6\u5907\u597d\uff0c\u672a\u51c6\u5907\u597d\u4e0d\u4f1a\u63a5\u6536\u6d41\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u672a\u51c6\u5907: dns \u8bb0\u5f55\u4f1a\u65e0\u6cd5\u65b9\u6cd5")))),(0,l.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u9650\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CPU ",(0,l.kt)("inlineCode",{parentName:"li"},'sum by (namespace)(count by (namespace,pod,container)(kube_pod_container_info{container!=""}) unless sum by (namespace,pod,container)(kube_pod_container_resource_limits{resource="cpu"}))')),(0,l.kt)("li",{parentName:"ul"},"Memory ",(0,l.kt)("inlineCode",{parentName:"li"},'sum by (namespace)(count by (namespace,pod,container)(kube_pod_container_info{container!=""}) unless sum by (namespace,pod,container)(kube_pod_container_resource_limits{resource="memory"}))')))),(0,l.kt)("li",{parentName:"ul"},"limits"),(0,l.kt)("li",{parentName:"ul"},"requests")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sysdig.com/blog/kubernetes-resource-limits"},"https://sysdig.com/blog/kubernetes-resource-limits"))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"cordon-vs-drain"},"cordon vs drain"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cordon - \u6807\u8bb0\u8282\u70b9\u4e0d\u53ef\u8c03\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"drain - \u9a71\u9010 pod - \u5305\u542b cordon \u884c\u4e3a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8282\u70b9\u5347\u7ea7\u3001\u7ef4\u62a4"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u6062\u590d\u540e uncordon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"))),(0,l.kt)("h2",{id:"region-vs-zone"},"region vs zone"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"region - \u533a\u57df - \u7531\u591a\u4e2a\u5730\u533a\u7ec4\u6210",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u5730\u7406\u4f4d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"zone - \u5730\u533a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6545\u969c\u7f51\u57df"))),(0,l.kt)("li",{parentName:"ul"},"Regions are independent geographic areas that consist of zones. Zones and regions are logical abstractions of underlying physical resources provided in one or more physical data centers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/docs/geography-and-regions"},"https://cloud.google.com/docs/geography-and-regions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/regions-zones"},"https://cloud.google.com/compute/docs/regions-zones"))))}c.isMDXComponent=!0}}]);