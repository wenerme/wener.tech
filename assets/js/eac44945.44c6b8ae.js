"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49587],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),k=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=k(a),c=r,N=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20993:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return o},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"k3s",title:"K3S"},p=void 0,k={unversionedId:"devops/kubernetes/distro/k3s",id:"devops/kubernetes/distro/k3s",isDocsHomePage:!1,title:"K3S",description:"- \u8282\u70b9\u7684\u540d\u5b57\u9700\u8981\u552f\u4e00",source:"@site/notes/devops/kubernetes/distro/k3s.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k3s",permalink:"/notes/devops/kubernetes/distro/k3s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s.md",tags:[],version:"current",frontMatter:{id:"k3s",title:"K3S"},sidebar:"docs",previous:{title:"Kubernetes \u7248\u672c",permalink:"/notes/devops/kubernetes/k8s-version"},next:{title:"K3S \u914d\u7f6e",permalink:"/notes/devops/kubernetes/distro/k3s-conf"}},o=[{value:"k3s server",id:"k3s-server",children:[{value:"get.k3s.io",id:"getk3sio",children:[]}]},{value:"\u624b\u52a8\u5b89\u88c5\u542f\u52a8",id:"\u624b\u52a8\u5b89\u88c5\u542f\u52a8",children:[]},{value:"containerd",id:"containerd",children:[]},{value:"registries",id:"registries",children:[]},{value:"\u7b14\u8bb0",id:"\u7b14\u8bb0",children:[{value:"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91",id:"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91",children:[]}]}],m={toc:o};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u7684\u540d\u5b57\u9700\u8981\u552f\u4e00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 hostname"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"K3S_NODE_NAME")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"--node-name")," \u4fee\u6539"))),(0,l.kt)("li",{parentName:"ul"},"k3s \u4f1a\u8bfb\u53d6 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/machine-id")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/dbus/machine-id")," \u4f5c\u4e3a\u8282\u70b9 UUID"),(0,l.kt)("li",{parentName:"ul"},"kubconfig \u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72 traefik \u4f5c\u4e3a ingress")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/"},"\u73af\u5883\u8981\u6c42"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux 3.10+"),(0,l.kt)("li",{parentName:"ul"},"Server \u5185\u5b58 512 MB+"),(0,l.kt)("li",{parentName:"ul"},"Agent \u5185\u5b58 75 MB"),(0,l.kt)("li",{parentName:"ul"},"\u78c1\u76d8 200 MB"),(0,l.kt)("li",{parentName:"ul"},"\u67b6\u6784 x86_64, ARMv7, ARM64"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"},"AlpineLinux \u989d\u5916\u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},"Production",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Small <= 10 \u8282\u70b9 - Server 2C4G - Database 1C2G"),(0,l.kt)("li",{parentName:"ul"},"Medium <= 100 \u8282\u70b9 - Server 4C8G - Database 2C8G"))))),(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"6443 - server - \u8282\u70b9\u901a\u4fe1 - Kubernetes API"),(0,l.kt)("li",{parentName:"ul"},"6444"),(0,l.kt)("li",{parentName:"ul"},"8472/udp - server/agent - Flannel VXLAN"),(0,l.kt)("li",{parentName:"ul"},"10250 - server/agent - kubelet"),(0,l.kt)("li",{parentName:"ul"},"10251"),(0,l.kt)("li",{parentName:"ul"},"10010 - containerd"),(0,l.kt)("li",{parentName:"ul"},"10248 - 10252"),(0,l.kt)("li",{parentName:"ul"},"10249"),(0,l.kt)("li",{parentName:"ul"},"30518"),(0,l.kt)("li",{parentName:"ul"},"30643"),(0,l.kt)("li",{parentName:"ul"},"46517"))),(0,l.kt)("li",{parentName:"ul"},"K3S \u7ec4\u4ef6 - \u5b89\u88c5\u65f6\u53ef\u7981\u7528\u5185\u7f6e\u7ec4\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"containerd - \u53ef\u9009\u7528 docker"),(0,l.kt)("li",{parentName:"ul"},"Flannel"),(0,l.kt)("li",{parentName:"ul"},"coredns - CoreDNS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf ",(0,l.kt)("inlineCode",{parentName:"li"},"rancher/coredns-coredns")))),(0,l.kt)("li",{parentName:"ul"},"CNI"),(0,l.kt)("li",{parentName:"ul"},"traefik - Ingress \u63a7\u5236\u5668",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf ",(0,l.kt)("inlineCode",{parentName:"li"},"rancher/library-traefik")),(0,l.kt)("li",{parentName:"ul"},"Traefik 2.0 integration - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/issues/1141"},"#1141"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"http 80"),(0,l.kt)("li",{parentName:"ul"},"https 443"),(0,l.kt)("li",{parentName:"ul"},"dash 8080"),(0,l.kt)("li",{parentName:"ul"},"metric 9100"),(0,l.kt)("li",{parentName:"ul"},"httpn 8880"))))),(0,l.kt)("li",{parentName:"ul"},"servicelb - \u5185\u5d4c\u8d1f\u8f7d\u5747\u8861",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/klipper-lb"},"rancher/klipper-lb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/klipper-lb/blob/master/entry"},"https://github.com/rancher/klipper-lb/blob/master/entry")),(0,l.kt)("li",{parentName:"ul"},"This works by using a host port for each service load balancer and setting up iptables to forward the request to the cluster IP. The regular k8s scheduler will find a free host port. If there are no free host ports, the service load balancer will stay in pending."))))),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5d4c\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668"),(0,l.kt)("li",{parentName:"ul"},"local-storage"),(0,l.kt)("li",{parentName:"ul"},"metrics-server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/rancher/metrics-server"},"rancher/metrics-server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server"},"kubernetes-sigs/metrics-server")))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/better-programming/b0b035c291a9"},"Using a k3s Kubernetes Cluster for Your GitLab Project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/architecture"},"\u67b6\u6784")))),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Nginx \u66ff\u4ee3 Traefik - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/pull/1466/files"},"#1466"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u88ab\u56de\u9000"))),(0,l.kt)("li",{parentName:"ul"},"K3S \u6709 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/issues/684#issuecomment-517032871"},"server-ca \u548c client-ca"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 CSR \u662f\u4f7f\u7528 servert-ca\uff0c\u5bfc\u81f4\u521b\u5efa\u7684\u8bc1\u4e66\u65e0\u6cd5\u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"issuer \u662f k3s-server-ca"))),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u4ece\u670d\u52a1\u5668\u53d6 client-ca \u521b\u5efa\u8bc1\u4e66"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/pull/1768"},"#1768")," - \u9ed8\u8ba4\u4f7f\u7528 ClientCA \u800c\u4e0d\u662f ServerCA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/issues/684#issuecomment-517501120"},"\u81ea\u884c\u521b\u5efa\u811a\u672c")))),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d(1.18) admin \u9ed8\u8ba4\u662f\u5bc6\u7801 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/issues/1616"},"#1616")," - \u9ed8\u8ba4\u4f7f\u7528\u8bc1\u4e66")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apk add util-linux\n[ -f /etc/machine-id ] || ( uuidgen | sudo tee -a /etc/machine-id )\n\napk add wireguard-virt wireguard-tools\n\n# INSTALL_K3S_EXEC \u9ed8\u8ba4\u4e3a agent\n# flannel wireguard - https://github.com/coreos/flannel/blob/master/dist/extension-wireguard\nK3S_NODE_NAME=k3s-server INSTALL_K3S_EXEC="server --flannel-backend=wireguard" INSTALL_K3S_SKIP_START=true INSTALL_K3S_BIN_DIR=/opt/k3s/bin curl -sfL https://get.k3s.io | sh -\n\nk3s server --flannel-backend=wireguard\n\n# \u5982\u679c\u662f root \u5b89\u88c5 - \u4fee\u6539\u4e0b kubeconfig \u6743\u9650\nsudo chmod a+r /etc/rancher/k3s/k3s.yaml\n# k3s \u9ed8\u8ba4\u4f1a\u8bbf\u95ee\u8be5\u6587\u4ef6\n\n# \u5176\u4ed6\u8bbf\u95ee\nexport KUBECONFIG=/etc/rancher/k3s/k3s.yaml\n')),(0,l.kt)("h2",{id:"k3s-server"},"k3s server"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/server-config/"},"k3s server \u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/advanced/"},"Advanced Options and Configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--docker")," - \u4f7f\u7528 docker - \u9ed8\u8ba4 ",(0,l.kt)("a",{parentName:"li",href:"https://containerd.io/"},"containerd")),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/manifests")," \u4e0b\u9762\u7684\u6587\u4ef6\u4f1a\u88ab\u81ea\u52a8\u90e8\u7f72 - kubectl apply",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u5185\u5bb9 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/tree/master/manifests"},"rancher/k3s/tree/master/manifests")))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"containerd"),", \u542f\u52a8 agent \u7684\u65f6\u5019\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"--docker")," \u53ef\u4f7f\u7528 docker"),(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"containerd")," \u751f\u6210\u7684\u914d\u7f6e\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/etc/containerd/config.toml"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u76ee\u5f55\u4e0b\u521b\u5efa\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"config.toml.tmpl")," \u5219\u4f1a\u88ab\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u677f\u53ef\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"li"},"config.Node")," \u5bf9\u8c61 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/blob/master/pkg/agent/templates/templates.go#L16-L32"},"https://github.com/rancher/k3s/blob/master/pkg/agent/templates/templates.go#L16-L32")))),(0,l.kt)("li",{parentName:"ul"},"AlpineLinux \u9700\u8981\u989d\u5916\u7684\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/update-extlinux.conf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"default_kernel_opts \u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory")),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"update-extlinux && reboot")))),(0,l.kt)("li",{parentName:"ul"},"\u975e root \u6570\u636e\u5b58\u653e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.rancher/k3s/data")),(0,l.kt)("li",{parentName:"ul"},"root \u6570\u636e\u5b58\u653e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/data")),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4 cidr ",(0,l.kt)("inlineCode",{parentName:"li"},"10.42.0.0/16"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9 IP"),(0,l.kt)("li",{parentName:"ul"},"cni0 - \u672c\u5730\u7f51\u53e3 - \u9644\u5e26 IP"),(0,l.kt)("li",{parentName:"ul"},"flannel1.1 - \u96c6\u7fa4\u901a\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u5206\u914d\u7ed9\u6bcf\u4e2a Pod"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"/24")," \u5730\u5740 - \u4e0d\u540c\u8282\u70b9\u4e4b\u95f4\u8fdb\u884c\u8f6c\u53d1"))),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1 cidr ",(0,l.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1 IP"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd ping"),(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u5730\u5740\uff0c\u901a\u8fc7 iptables \u914d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u57df\u540d cluster.local"),(0,l.kt)("li",{parentName:"ul"},"coredns ",(0,l.kt)("inlineCode",{parentName:"li"},"10.43.0.10")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/networking/"},"\u7f51\u7edc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 flannel \u4f5c\u4e3a CNI\uff0c\u4f7f\u7528 VXLAN \u540e\u7aef"),(0,l.kt)("li",{parentName:"ul"},"flannel ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/blob/fe7337937155af41f1aebeb87d1acd07091b71de/pkg/agent/flannel/setup.go#L42"},"\u914d\u7f6e")))),(0,l.kt)("li",{parentName:"ul"},"\u79c1\u6709\u4ed3\u5e93 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/registries.yaml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/server-config/"},"\u670d\u52a1\u914d\u7f6e"))),(0,l.kt)("h3",{id:"getk3sio"},"get.k3s.io"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"get.k3s.io")," \u5b89\u88c5\u811a\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5730\u5740\u4e3a STORAGE_URL=",(0,l.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/k3s-ci-builds"},"https://storage.googleapis.com/k3s-ci-builds")),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u5b89\u88c5 openrc \u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/k3s.env"),(0,l.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/k3s-agent.env"),(0,l.kt)("li",{parentName:"ul"},"/etc/init.d/k3s"),(0,l.kt)("li",{parentName:"ul"},"/etc/init.d/k3s-agent"))),(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u6587\u4ef6 /var/log/k3s.log"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"\u5b89\u88c5\u9009\u9879"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u4e3a server \u542f\u52a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"K3S_URL")," \u4e14\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"K3S_TOKEN")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"K3S_CLUSTER_SECRET")),(0,l.kt)("li",{parentName:"ul"},"\u6216\u76f4\u63a5\u540e\u9762\u6307\u5b9a agent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_SKIP_DOWNLOAD")," - \u4e0d\u4e0b\u8f7d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_SYMLINK")," - \u521b\u5efa kubectl\uff0ccrictl\uff0cctr \u7b26\u53f7\u94fe\u63a5 - \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"skip")," \u4f1a\u8c03\u8fc7\uff0c\u8bbe\u7f6e\u4e3a force \u4f1a\u8986\u76d6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_SKIP_ENABLE")," - \u4e0d\u542f\u7528\u548c\u542f\u52a8 k3s - \u5373\u4e0d\u4f1a add openrc \u7684 service \u4e5f\u4e0d\u4f1a start"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_SKIP_START")," - \u4e0d\u542f\u52a8\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_BIN_DIR")," - \u5b89\u88c5\u76ee\u5f55 - \u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_EXEC")," - \u6307\u5411\u547d\u4ee4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 agent \u9664\u975e\u6709 K3S_URL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_CHANNEL_URL")," - \u9ed8\u8ba4 ",(0,l.kt)("a",{parentName:"li",href:"https://update.k3s.io/v1-release/channels"},"https://update.k3s.io/v1-release/channels")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSTALL_K3S_CHANNEL")," - \u9ed8\u8ba4 stable"),(0,l.kt)("li",{parentName:"ul"},"\u989d\u5916\u5b89\u88c5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s-killall.sh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"service k3s stop")),(0,l.kt)("li",{parentName:"ul"},"umount",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/run/k3s")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/kubelet/pods")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/run/netns/cni-")))),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"cni0")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"flannel1.1")),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/cni/")),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664 iptables \u91cc\u7684 KUBE \u548c CNI \u5185\u5bb9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s-uninstall.sh")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.env"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"service \u542f\u52a8\u4f1a source \u8fd9\u4e2a\u6587\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/etc/init.d/k3s"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u53c2\u6570\u4f1a\u76f4\u63a5\u5728\u8fd9\u91cc"),(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u6587\u4ef6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/log/k3s.log")))))))),(0,l.kt)("li",{parentName:"ul"},'INSTALL_K3S_EXEC="--disable=traefik" \u53ef\u7981\u7528\u5b89\u88c5\u67d0\u4e9b\u670d\u52a1')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | sh -\n\n# \u53ef\u76f4\u63a5\u6307\u5b9a\u53c2\u6570\ncurl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644\n# \u4e5f\u53ef\u4ee5\u73af\u5883\u53d8\u91cf\u6307\u5b9a\ncurl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" sh -s -\n\n# INSTALL_K3S_EXEC \u6307\u5b9a\u547d\u4ee4\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--no-flannel" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --no-flannel" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server" sh -s - --no-flannel\ncurl -sfL https://get.k3s.io | sh -s - server --no-flannel\ncurl -sfL https://get.k3s.io | sh -s - --no-flannel\ncurl -sfL https://get.k3s.io | INSTALL_K3S_SKIP_ENABLE=1 sh -s -\n')),(0,l.kt)("h2",{id:"\u624b\u52a8\u5b89\u88c5\u542f\u52a8"},"\u624b\u52a8\u5b89\u88c5\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/k3s\ncd /opt/k3s\n# https://github.com/rancher/k3s/releases\nver=$(curl -sL https://api.github.com/repos/rancher/k3s/releases/latest | jq .tag_name -r)\n\ncurl -LOC- https://github.com/rancher/k3s/releases/download/$ver/k3s\ncurl -LOC- https://github.com/rancher/k3s/releases/download/$ver/k3s-images.txt\n\nssh k3s -- \"sudo sh -c 'mkdir -p /opt/k3s && chown admin:admin /opt/k3s'\"\nscp k3s k3s:/opt/k3s\nscp k3s-images.txt k3s:/opt/k3s\n\n# ssh k3s --\ncat /opt/k3s/k3s-images.txt | xargs -n 1 docker pull\n\nk3s server --cluster-init --alsologtostderr --log $PWD/k3s-server.log --docker\n")),(0,l.kt)("h2",{id:"containerd"},"containerd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u751f\u6210\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/var/lib/rancher/k3s/agent/etc/containerd/config.toml"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709 config.toml.tmpl \u5219\u4f1a\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6a21\u677f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/blob/master/pkg/agent/templates/templates.go#L16-L72"},"templates.go#ContainerdConfigTemplate")))),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709 docker \u53ef\u4ee5\u5c11 80m \u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a containerd-shim \u6bd4 containerd-shim-runc-v2 \u5c11\u51e0 m \u5185\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"containerd-shim \u662f docker \u7684"),(0,l.kt)("li",{parentName:"ul"},"containerd-shim-runc-v2 \u662f containerd \u7684")))),(0,l.kt)("h2",{id:"registries"},"registries"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/registries.yaml")),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u68c0\u6d4b\uff0ccontainerd \u4f1a\u4f7f\u7528\u8fd9\u91cc\u7684\u5b9a\u4e49")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"mirrors:\n  # \u955c\u50cf DockerHub\n  docker.io:\n    endpoint:\n      - 'https://mycustomreg.com:5000'\nconfigs:\n  # \u6dfb\u52a0\u6388\u6743\u548c\u8bc1\u4e66\n  'mycustomreg:5000':\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file: # path to the key file used in the registry\n      ca_file: # path to the ca file used in the registry\n")),(0,l.kt)("h2",{id:"\u7b14\u8bb0"},"\u7b14\u8bb0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kubeconfig \u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")),(0,l.kt)("li",{parentName:"ul"},"K3S_TOKEN \u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/node-token")),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u9700\u8981\u6709\u552f\u4e00\u4e3b\u673a\u540d - ",(0,l.kt)("inlineCode",{parentName:"li"},"K3S_NODE_NAME"))),(0,l.kt)("h3",{id:"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91"},"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"k3s agent \u521d\u59cb\u5316 Agent \u8282\u70b9\u7684 websocket \u94fe\u63a5\u3002\u94fe\u63a5\u4f1a\u6709\u5ba2\u6237\u7aef\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002"),(0,l.kt)("li",{parentName:"ul"},"Agent \u4f1a\u4f7f\u7528\u96c6\u7fa4\u7684\u5bc6\u94a5\u548c\u968f\u673a\u751f\u6210\u7684\u5bc6\u7801\u6ce8\u518c\uff0c\u5bc6\u7801\u5b58\u50a8\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/node/password"),"\uff0c\u670d\u52a1\u7aef\u4f1a\u5b58\u50a8\u8282\u70b9\u7684\u5bc6\u7801\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/cred/node-passwd"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/node")," \u76ee\u5f55\u88ab\u79fb\u9664\u540e\u5bc6\u7801\u4f1a\u88ab\u4ece\u65b0\u751f\u6210\uff0c\u6216\u7531\u670d\u52a1\u7aef\u79fb\u9664\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u53ef\u4e3a\u8282\u70b9\u9644\u52a0\u552f\u4e00\u8282\u70b9\u6807\u793a\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"--with-node-id"),"\u3002")))}u.isMDXComponent=!0}}]);