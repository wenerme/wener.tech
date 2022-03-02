"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69389],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?t.createElement(g,s(s({ref:n},p),{},{components:r})):t.createElement(g,s({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59721:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"app-cookbook",title:"K8S Apps"},c=void 0,i={unversionedId:"devops/kubernetes/app/app-cookbook",id:"devops/kubernetes/app/app-cookbook",title:"K8S Apps",description:"debug",source:"@site/notes/devops/kubernetes/app/app-cookbook.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/app-cookbook",permalink:"/notes/devops/kubernetes/app/app-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/app-cookbook.md",tags:[],version:"current",frontMatter:{id:"app-cookbook",title:"K8S Apps"},sidebar:"docs",previous:{title:"Rancher Version",permalink:"/notes/devops/kubernetes/platform/rancher-version"},next:{title:"Argo Workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow"}},p=[{value:"debug",id:"debug",children:[],level:2},{value:"helm",id:"helm",children:[],level:2},{value:"metallb",id:"metallb",children:[],level:2},{value:"cert-manager",id:"cert-manager",children:[],level:2},{value:"ingress-nginx",id:"ingress-nginx",children:[],level:2},{value:"rancher",id:"rancher",children:[],level:2}],u={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"debug"},"debug"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -w --all-namespaces\nkubectl get events -w --all-namespaces\n\nsource <(kubectl completion bash)\nsource <(helm completion bash)\n")),(0,o.kt)("h2",{id:"helm"},"helm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# alpine 3.12 \u5b89\u88c5 helm\napk add helm -X https://mirrors.aliyun.com/alpine/edge/testing/\n\n# K3S\nexport KUBECONFIG=/etc/rancher/k3s/k3s.yaml\n\nhelm repo add wener https://charts.wener.tech\nhelm search repo wener/\n\n# \u8865\u5168\nsource <(helm completion bash)\n")),(0,o.kt)("h2",{id:"metallb"},"metallb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# registry \u9ed8\u8ba4\u5199\u4e86 docker.io\ncat <<YAML > metallb.values.yaml\ncontroller:\n  image:\n    registry: docker.mirrors.ustc.edu.cn\nspeaker:\n  image:\n    registry: docker.mirrors.ustc.edu.cn\nconfigInline:\n  address-pools:\n  - name: default\n    protocol: layer2\n    # default address space\n    addresses:\n    - 10.10.128.0/18\nYAML\n\nhelm upgrade -i metallb wener/metallb -n metallb-system --create-namespace -f metallb.values.yaml\n")),(0,o.kt)("h2",{id:"cert-manager"},"cert-manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# direct install crd\ncat <<YAML > cert-manager.values.yaml\ninstallCRDs: true\nYAML\n\nhelm upgrade -i cert-manager wener/cert-manager -n cert-manager --create-namespace -f cert-manager.values.yaml\n")),(0,o.kt)("h2",{id:"ingress-nginx"},"ingress-nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# DaemonSet hostPort 80\ncat <<YAML > ingress-nginx.values.yaml\nconfig:\n  hide-headers: "Server"\ncontroller:\n  image:\n    # use mirror\n    # k8s.gcr.io/ingress-nginx/controller\n    repository: registry.cn-hongkong.aliyuncs.com/cmi/ingress-nginx_controller\n    # disable digest\n    digest: ""\n  kind: DaemonSet\n  hostPort:\n    enabled: true\n  metrics:\n    enabled: false\n    # kube-prometheus\n    serviceMonitor:\n      enabled: true\n  prometheusRule:\n    enabled: false\n  admissionWebhooks:\n    patch:\n      image:\n        repository: registry.cn-hongkong.aliyuncs.com/cmi/jettech_kube-webhook-certgen\nYAML\n\nhelm upgrade -i ingress-nginx wener/ingress-nginx -n ingress-nginx --create-namespace -f ingress-nginx.values.yaml\n')),(0,o.kt)("h2",{id:"rancher"},"rancher"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n# latest\n# helm repo add rancher https://releases.rancher.com/server-charts/latest\n# stable\nhelm repo add rancher https://releases.rancher.com/server-charts/stable\n\n# https://rancher.com/docs/rancher/v2.x/en/installation/resources/chart-options\ncat <<YAML > rancher.values.yaml\nhostname: rancher.my.corp\n\n# use cert-manager\n# privateCA: true\n# rancher mirror\nsystemDefaultRegistry: registry.cn-hangzhou.aliyuncs.com\n# 1 for test only - default 3\nreplicas: 1\nYAML\n\nhelm upgrade -i rancher rancher/rancher -n cattle-system --create-namespace -f rancher.values.yaml\n\n# \u67e5\u770b\u5b89\u88c5\u72b6\u6001\nkubectl -n cattle-system rollout status deploy/rancher\n# \u9a8c\u8bc1\u5b89\u88c5\nkubectl -n cattle-system get deploy rancher\n\n# \u8f6c\u53d1\u8bbf\u95ee rancher\nkubectl port-forward -n cattle-system svc/rancher --address 0.0.0.0 8080:80\n")))}m.isMDXComponent=!0}}]);