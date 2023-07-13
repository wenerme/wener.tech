"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79737],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(p,".").concat(d)]||m[d]||k[d]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return c}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={title:"Kubernetes \u6807\u7b7e"},d="Kubernetes \u6807\u7b7e",b={unversionedId:"devops/kubernetes/internal/k8s-labels",id:"devops/kubernetes/internal/k8s-labels",title:"Kubernetes \u6807\u7b7e",description:"- https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints",source:"@site/../notes/devops/kubernetes/internal/k8s-labels.md",sourceDirName:"devops/kubernetes/internal",slug:"/devops/kubernetes/internal/k8s-labels",permalink:"/notes/devops/kubernetes/internal/k8s-labels",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/internal/k8s-labels.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"Kubernetes \u6807\u7b7e"},sidebar:"docs",previous:{title:"Kubernetes DNS",permalink:"/notes/devops/kubernetes/internal/k8s-dns"},next:{title:"Metrics",permalink:"/notes/devops/kubernetes/internal/k8s-metrics"}},N={},c=[{value:"\u8282\u70b9\u6807\u7b7e",id:"\u8282\u70b9\u6807\u7b7e",level:2},{value:"Deprecated",id:"deprecated",level:3},{value:"\u8d44\u6e90\u6807\u7b7e",id:"\u8d44\u6e90\u6807\u7b7e",level:2},{value:"\u5e94\u7528\u6807\u7b7e",id:"\u5e94\u7528\u6807\u7b7e",level:2},{value:"Helm \u6807\u7b7e",id:"helm-\u6807\u7b7e",level:2},{value:"Helm \u6ce8\u89e3",id:"helm-\u6ce8\u89e3",level:2},{value:"LabelSelector",id:"labelselector",level:2},{value:"region vs zone",id:"region-vs-zone",level:2}],g={toc:c};function h(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},g),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",k({},{id:"kubernetes-\u6807\u7b7e"}),"Kubernetes \u6807\u7b7e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints"}),"https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/reference/labels-annotations-taints/"}),"https://kubernetes.io/docs/reference/labels-annotations-taints/"))),(0,a.kt)("h2",k({},{id:"\u8282\u70b9\u6807\u7b7e"}),"\u8282\u70b9\u6807\u7b7e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubernetes.io/ingress.class")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"label"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"demo"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"k3s.io/hostname"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"node-3"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"k3s.io/internal-ip"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"10.10.1.1"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"kubernetes.io/arch"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"amd64"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"+v1.14")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"kubernetes.io/hostname"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"node-3"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"kubernetes.io/os"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"linux"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"+v1.14")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"node-role.kubernetes.io/",(0,a.kt)("inlineCode",{parentName:"td"},"<role>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"node-role.kubernetes.io/master"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Master node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"node-role.kubernetes.io/control-plane"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"cp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"node.kubernetes.io/instance-type"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"k3s"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"topology.kubernetes.io/region"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"+v1.17")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"topology.kubernetes.io/zone"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"+v1.17")))),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# \u8bbe\u7f6e node role \u4e3a worker\n# role \u540d\u5b57\u4efb\u610f\n# value \u4e0d\u91cd\u8981\uff0c\u4e3b\u8981\u662f\u5b58\u5728\u8be5 label\nkubectl label node node-2 node-role.kubernetes.io/worker=true\n# \u89c4\u5212 region \u548c zone\nkubectl label node master-1 topology.kubernetes.io/region=sh\nkubectl label node master-1 topology.kubernetes.io/zone=sh-dc1\n")),(0,a.kt)("h3",k({},{id:"deprecated"}),"Deprecated"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"label"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"demo"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"beta.kubernetes.io/arch"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"amd64"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"!v1.14, -v1.18")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"beta.kubernetes.io/instance-type"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"k3s"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"!v1.17")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"beta.kubernetes.io/os"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"linux"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"!v1.14, -v1.18")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"failure-domain.beta.kubernetes.io/region"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"!v1.17")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"failure-domain.beta.kubernetes.io/zone"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"!v1.17")))),(0,a.kt)("h2",k({},{id:"\u8d44\u6e90\u6807\u7b7e"}),"\u8d44\u6e90\u6807\u7b7e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"kind"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"annotation"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"demo"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"StorageClass"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"storageclass.kubernetes.io/is-default-class"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 StorageClass")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"VolumeSnapshotClass"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"snapshot.storage.kubernetes.io/is-default-class"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Ingress"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"kubernetes.io/ingress.class"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"nginx"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5e9f\u5f03"),",spec.ingressClassName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"IngressClass"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"ingressclass.kubernetes.io/is-default-class"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"kind"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"label"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"demo"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Namespace"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"kubernetes.io/metadata.name"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"kube-system"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"namespace \u7684\u540d\u5b57")))),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-bash"}),'kubectl get storageclass\n\n# \u53d6\u6d88 sc \u7684\u9ed8\u8ba4\u503c\nkubectl patch storageclass local-path -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}\'\n# \u8bbe\u7f6e\u9ed8\u8ba4\nkubectl patch storageclass longhorn -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),(0,a.kt)("h2",k({},{id:"\u5e94\u7528\u6807\u7b7e"}),"\u5e94\u7528\u6807\u7b7e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/"}),"Recommanded Lables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://helm.sh/docs/chart_best_practices/labels/"}),"Helm Labels"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"label"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"app.kubernetes.io/name"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mysql"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"app.kubernetes.io/instance"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mysql-abcd"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"app.kubernetes.io/version"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"5.7"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"app.kubernetes.io/component"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"database"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"app.kubernetes.io/part-of"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ghost"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"app.kubernetes.io/managed-by"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"helm"))))),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-yaml"}),"podAntiAffinity:\n  preferredDuringSchedulingIgnoredDuringExecution:\n    - weight: 100\n      podAffinityTerm:\n        labelSelector:\n          matchLabels:\n            app.kubernetes.io/component: prometheus\n            app.kubernetes.io/instance: kube-prometheus\n            app.kubernetes.io/name: kube-prometheus\n        topologyKey: kubernetes.io/hostname\n")),(0,a.kt)("h2",k({},{id:"helm-\u6807\u7b7e"}),"Helm \u6807\u7b7e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"label"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"app.kubernetes.io/managed-by"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Helm")))),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-yaml"}),"# \u8d44\u6e90 label\nlabels:\n  app.kubernetes.io/component: controller\n  app.kubernetes.io/instance: ingress-nginx\n  app.kubernetes.io/managed-by: Helm\n  app.kubernetes.io/name: ingress-nginx\n  app.kubernetes.io/version: 0.35.0\n  helm.sh/chart: ingress-nginx-2.16.0\n\n# selector label\nmatchLabels:\n  app.kubernetes.io/component: controller\n  app.kubernetes.io/instance: ingress-nginx\n  app.kubernetes.io/name: ingress-nginx\n")),(0,a.kt)("h2",k({},{id:"helm-\u6ce8\u89e3"}),"Helm \u6ce8\u89e3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"annotation"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"value"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"meta.helm.sh/release-name"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"linkerd2"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"meta.helm.sh/release-namespace"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"linkerd"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",k({},{id:"labelselector"}),"LabelSelector"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"labelSelector - \u6570\u7ec4\u5185\u4e3a OR \u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"matchLabels",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"label: value"))),(0,a.kt)("li",{parentName:"ul"},"matchExpressions - \u6570\u7ec4\u5185\u4e3a AND \u5173\u7cfb",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"key"),(0,a.kt)("li",{parentName:"ul"},"operator: In, NotIn, Exists, DoesNotExist"),(0,a.kt)("li",{parentName:"ul"},"values: []")))),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-yaml"}),"dashboardLabelSelector: # OR\n  - matchExpressions: # AND\n      - { key: app, operator: In, values: [grafana] }\n      - { key: group, operator: In, values: [grafana] }\n")),(0,a.kt)("h1",k({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",k({},{id:"region-vs-zone"}),"region vs zone"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"region - \u533a\u57df",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5730\u533a/zone \u96c6\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u533a\u57df \u9ad8\u5e26\u5bbd\u3001\u4f4e\u5ef6\u8fdf"))),(0,a.kt)("li",{parentName:"ul"},"zone - \u53ef\u7528\u533a ",(0,a.kt)("inlineCode",{parentName:"li"},"<region>-<zone>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"us-central1"),(0,a.kt)("li",{parentName:"ul"},"us-central1-a - zone \u5185\u533a\u57df"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://cloud.google.com/compute/docs/regions-zones"}),"https://cloud.google.com/compute/docs/regions-zones")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"https://kubernetes.io/docs/setup/best-practices/multiple-zones/"}),"https://kubernetes.io/docs/setup/best-practices/multiple-zones/"))))}h.isMDXComponent=!0}}]);