"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76628],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(t),d=o,m=k["".concat(l,".").concat(d)]||k[d]||p[d]||a;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=k;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},22963:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return k},metadata:function(){return m},toc:function(){return b}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&u(e,t,r[t]);return e};const k={title:"K3S Cookbook",hide_title:!0},d="K3S \u64cd\u4f5c\u624b\u518c",m={unversionedId:"devops/kubernetes/distro/k3s-cookbook",id:"devops/kubernetes/distro/k3s-cookbook",title:"K3S Cookbook",description:"- \u5185\u90e8\u900f\u4f20\u914d\u7f6e\u9879",source:"@site/../notes/devops/kubernetes/distro/k3s-cookbook.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k3s-cookbook",permalink:"/notes/devops/kubernetes/distro/k3s-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k3s-cookbook.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1605620776,formattedLastUpdatedAt:"Nov 17, 2020",frontMatter:{title:"K3S Cookbook",hide_title:!0},sidebar:"docs",previous:{title:"K3S \u914d\u7f6e",permalink:"/notes/devops/kubernetes/distro/k3s-conf"},next:{title:"K3S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/distro/k3s-faq"}},f={},b=[{value:"\u7b80\u5355\u542f\u52a8",id:"\u7b80\u5355\u542f\u52a8",level:2},{value:"Tinc Host GW",id:"tinc-host-gw",level:2},{value:"registry",id:"registry",level:2},{value:"\u6e05\u7a7a K3S \u670d\u52a1",id:"\u6e05\u7a7a-k3s-\u670d\u52a1",level:2}],g={toc:b};function y(e){var r,t=e,{components:o}=t,u=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=p(p({},g),u),a(r,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"k3s-\u64cd\u4f5c\u624b\u518c"}),"K3S \u64cd\u4f5c\u624b\u518c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8\u900f\u4f20\u914d\u7f6e\u9879",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kube-apiserver-arg - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"}),"kube-apiserver")),(0,n.kt)("li",{parentName:"ul"},"kube-cloud-controller-manager-arg - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-cloud-controller-manager/"}),"kube-cloud-controller-manager")),(0,n.kt)("li",{parentName:"ul"},"kube-controller-manager-arg - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"}),"kube-controller-manager")),(0,n.kt)("li",{parentName:"ul"},"kube-proxy-arg - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"}),"kube-proxy")),(0,n.kt)("li",{parentName:"ul"},"kube-scheduler-arg - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/"}),"kube-scheduler")),(0,n.kt)("li",{parentName:"ul"},"kubelet-arg - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"}),"kubelet"))))),(0,n.kt)("admonition",p({},{type:"info"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 Yaml \u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u5c3d\u91cf\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"))),(0,n.kt)("h2",p({},{id:"\u7b80\u5355\u542f\u52a8"}),"\u7b80\u5355\u542f\u52a8"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/config.yaml\n# \u63a8\u8350 docker \u542f\u52a8\ndocker: true\n# \u4e3b\u673a\u540d\u4f5c\u4e3a\u8282\u70b9\u540d\u5b57\nnode-name: $(hostname)\n\n# server \u52a0\u5165\u7684 token\ntoken: $(uuidgen)\n# agent \u52a0\u5165\u7684 token\nagent-token: $(uuidgen)\nYAML\n\nservice k3s start\n")),(0,n.kt)("h2",p({},{id:"tinc-host-gw"}),"Tinc Host GW"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/config.yaml\ndocker: true\n# \u5d4c\u5165 etcd\ndatastore-endpoint: etcd\n# \u5916\u90e8\u6570\u636e\u5e93\n# datastore-endpoint: postgresql://user:password@postgres:5432/k3s\nwrite-kubeconfig-mode: '0644'\n\ntoken: $(uuidgen)\nagent-token: $(uuidgen)\n\ndisable:\n- traefik\n- servicelb\nflannel-backend: host-gw\nflannel-iface: kubenet\nnode-ip: 10.10.1.1\nnode-name: $(hostname)\n# \u8bc1\u4e66\u6dfb\u52a0\u989d\u5916\u57df\u540d\n# tls-san: kube.my.org\nYAML\n\n# \u53ef\u7528\u4e8e\u524d\u7aef DEBUG \u542f\u52a8\u770b\u65e5\u5fd7\n# PATH=\"/usr/libexec/cni/:$PATH\" k3s server --cluster-init\n\nservice k3s start\n")),(0,n.kt)("h2",p({},{id:"registry"}),"registry"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/registries.yaml\nmirrors:\n  docker.io:\n    endpoint:\n      - https://fogjl973.mirror.aliyuncs.com\n      - https://8x40wsit.mirror.aliyuncs.com\n      - https://docker.mirrors.ustc.edu.cn\n      - https://registry-1.docker.io\nYAML\n")),(0,n.kt)("h2",p({},{id:"\u6e05\u7a7a-k3s-\u670d\u52a1"}),"\u6e05\u7a7a K3S \u670d\u52a1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u524d\u63d0\u662f\u7528\u7684 docker"),(0,n.kt)("li",{parentName:"ul"},"containerd \u5f97 kill \u8fdb\u7a0b")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u505c\u6b62 k3s \u907f\u514d\u521b\u5efa pod\nservice k3s stop\n# \u91cd\u542f docker \u4f7f\u5f97\u73b0\u6709 pod \u505c\u6b62\nserver docker restart\n# \u6e05\u7406\u4e0d\u5fc5\u8981\u7684\u5185\u5bb9 - --all \u4e5f\u4f1a\u6e05\u7406\u955c\u50cf\ndocker system prune\n")))}y.isMDXComponent=!0}}]);