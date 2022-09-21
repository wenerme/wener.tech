"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77819],{80725:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return k}});var n=r(96600),o=r(27279),a=(r(59496),r(3905)),s=["components"],i={title:"K3S Cookbook",hide_title:!0},c="K3S \u64cd\u4f5c\u624b\u518c",l={unversionedId:"devops/kubernetes/distro/k3s-cookbook",id:"devops/kubernetes/distro/k3s-cookbook",title:"K3S Cookbook",description:"- \u5185\u90e8\u900f\u4f20\u914d\u7f6e\u9879",source:"@site/notes/devops/kubernetes/distro/k3s-cookbook.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k3s-cookbook",permalink:"/notes/devops/kubernetes/distro/k3s-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s-cookbook.md",tags:[],version:"current",frontMatter:{title:"K3S Cookbook",hide_title:!0},sidebar:"docs",previous:{title:"K3S \u914d\u7f6e",permalink:"/notes/devops/kubernetes/distro/k3s-conf"},next:{title:"K3S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/distro/k3s-faq"}},u={},k=[{value:"\u7b80\u5355\u542f\u52a8",id:"\u7b80\u5355\u542f\u52a8",level:2},{value:"Tinc Host GW",id:"tinc-host-gw",level:2},{value:"registry",id:"registry",level:2},{value:"\u6e05\u7a7a K3S \u670d\u52a1",id:"\u6e05\u7a7a-k3s-\u670d\u52a1",level:2}],p={toc:k};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k3s-\u64cd\u4f5c\u624b\u518c"},"K3S \u64cd\u4f5c\u624b\u518c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u900f\u4f20\u914d\u7f6e\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"kube-apiserver-arg - ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"},"kube-apiserver")),(0,a.kt)("li",{parentName:"ul"},"kube-cloud-controller-manager-arg - ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-cloud-controller-manager/"},"kube-cloud-controller-manager")),(0,a.kt)("li",{parentName:"ul"},"kube-controller-manager-arg - ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"kube-controller-manager")),(0,a.kt)("li",{parentName:"ul"},"kube-proxy-arg - ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},"kube-scheduler-arg - ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/"},"kube-scheduler")),(0,a.kt)("li",{parentName:"ul"},"kubelet-arg - ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"kubelet"))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 Yaml \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u5c3d\u91cf\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"))),(0,a.kt)("h2",{id:"\u7b80\u5355\u542f\u52a8"},"\u7b80\u5355\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/config.yaml\n# \u63a8\u8350 docker \u542f\u52a8\ndocker: true\n# \u4e3b\u673a\u540d\u4f5c\u4e3a\u8282\u70b9\u540d\u5b57\nnode-name: $(hostname)\n\n# server \u52a0\u5165\u7684 token\ntoken: $(uuidgen)\n# agent \u52a0\u5165\u7684 token\nagent-token: $(uuidgen)\nYAML\n\nservice k3s start\n")),(0,a.kt)("h2",{id:"tinc-host-gw"},"Tinc Host GW"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/config.yaml\ndocker: true\n# \u5d4c\u5165 etcd\ndatastore-endpoint: etcd\n# \u5916\u90e8\u6570\u636e\u5e93\n# datastore-endpoint: postgresql://user:password@postgres:5432/k3s\nwrite-kubeconfig-mode: '0644'\n\ntoken: $(uuidgen)\nagent-token: $(uuidgen)\n\ndisable:\n- traefik\n- servicelb\nflannel-backend: host-gw\nflannel-iface: kubenet\nnode-ip: 10.10.1.1\nnode-name: $(hostname)\n# \u8bc1\u4e66\u6dfb\u52a0\u989d\u5916\u57df\u540d\n# tls-san: kube.my.org\nYAML\n\n# \u53ef\u7528\u4e8e\u524d\u7aef DEBUG \u542f\u52a8\u770b\u65e5\u5fd7\n# PATH=\"/usr/libexec/cni/:$PATH\" k3s server --cluster-init\n\nservice k3s start\n")),(0,a.kt)("h2",{id:"registry"},"registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/registries.yaml\nmirrors:\n  docker.io:\n    endpoint:\n      - https://fogjl973.mirror.aliyuncs.com\n      - https://8x40wsit.mirror.aliyuncs.com\n      - https://docker.mirrors.ustc.edu.cn\n      - https://registry-1.docker.io\nYAML\n")),(0,a.kt)("h2",{id:"\u6e05\u7a7a-k3s-\u670d\u52a1"},"\u6e05\u7a7a K3S \u670d\u52a1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u524d\u63d0\u662f\u7528\u7684 docker"),(0,a.kt)("li",{parentName:"ul"},"containerd \u5f97 kill \u8fdb\u7a0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u505c\u6b62 k3s \u907f\u514d\u521b\u5efa pod\nservice k3s stop\n# \u91cd\u542f docker \u4f7f\u5f97\u73b0\u6709 pod \u505c\u6b62\nserver docker restart\n# \u6e05\u7406\u4e0d\u5fc5\u8981\u7684\u5185\u5bb9 - --all \u4e5f\u4f1a\u6e05\u7406\u955c\u50cf\ndocker system prune\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return p}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(m,s(s({ref:t},k),{},{components:r})):n.createElement(m,s({ref:t},k))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);