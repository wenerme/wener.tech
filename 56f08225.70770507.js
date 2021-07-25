(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{1169:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=b(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},458:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(8),a=(t(0),t(1169)),c={title:"K3S Cookbook",hide_title:!0},i={unversionedId:"devops/kubernetes/distro/k3s-cookbook",id:"devops/kubernetes/distro/k3s-cookbook",isDocsHomePage:!1,title:"K3S Cookbook",description:"K3S \u64cd\u4f5c\u624b\u518c",source:"@site/notes/devops/kubernetes/distro/k3s-cookbook.md",slug:"/devops/kubernetes/distro/k3s-cookbook",permalink:"/notes/devops/kubernetes/distro/k3s-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s-cookbook.md",version:"current",sidebar:"docs",previous:{title:"K3S \u914d\u7f6e",permalink:"/notes/devops/kubernetes/distro/k3s-conf"},next:{title:"K3S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/distro/k3s-faq"}},s=[{value:"\u7b80\u5355\u542f\u52a8",id:"\u7b80\u5355\u542f\u52a8",children:[]},{value:"Tinc Host GW",id:"tinc-host-gw",children:[]},{value:"registry",id:"registry",children:[]},{value:"\u6e05\u7a7a K3S \u670d\u52a1",id:"\u6e05\u7a7a-k3s-\u670d\u52a1",children:[]}],l={toc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"k3s-\u64cd\u4f5c\u624b\u518c"},"K3S \u64cd\u4f5c\u624b\u518c"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5185\u90e8\u900f\u4f20\u914d\u7f6e\u9879",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"kube-apiserver-arg - ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"},"kube-apiserver")),Object(a.b)("li",{parentName:"ul"},"kube-cloud-controller-manager-arg - ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-cloud-controller-manager/"},"kube-cloud-controller-manager")),Object(a.b)("li",{parentName:"ul"},"kube-controller-manager-arg - ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"kube-controller-manager")),Object(a.b)("li",{parentName:"ul"},"kube-proxy-arg - ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"},"kube-proxy")),Object(a.b)("li",{parentName:"ul"},"kube-scheduler-arg - ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/"},"kube-scheduler")),Object(a.b)("li",{parentName:"ul"},"kubelet-arg - ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"kubelet"))))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 Yaml \u914d\u7f6e"),Object(a.b)("li",{parentName:"ul"},"\u63a8\u8350\u5c3d\u91cf\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e")))),Object(a.b)("h2",{id:"\u7b80\u5355\u542f\u52a8"},"\u7b80\u5355\u542f\u52a8"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/config.yaml\n# \u63a8\u8350 docker \u542f\u52a8\ndocker: true\n# \u4e3b\u673a\u540d\u4f5c\u4e3a\u8282\u70b9\u540d\u5b57\nnode-name: $(hostname)\n\n# server \u52a0\u5165\u7684 token\ntoken: $(uuidgen)\n# agent \u52a0\u5165\u7684 token\nagent-token: $(uuidgen)\nYAML\n\nservice k3s start\n")),Object(a.b)("h2",{id:"tinc-host-gw"},"Tinc Host GW"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/config.yaml\ndocker: true\n# \u5d4c\u5165 etcd\ndatastore-endpoint: etcd\n# \u5916\u90e8\u6570\u636e\u5e93\n# datastore-endpoint: postgresql://user:password@postgres:5432/k3s\nwrite-kubeconfig-mode: '0644'\n\ntoken: $(uuidgen)\nagent-token: $(uuidgen)\n\ndisable:\n- traefik\n- servicelb\nflannel-backend: host-gw\nflannel-iface: kubenet\nnode-ip: 10.10.1.1\nnode-name: $(hostname)\n# \u8bc1\u4e66\u6dfb\u52a0\u989d\u5916\u57df\u540d\n# tls-san: kube.my.org\nYAML\n\n# \u53ef\u7528\u4e8e\u524d\u7aef DEBUG \u542f\u52a8\u770b\u65e5\u5fd7\n# PATH=\"/usr/libexec/cni/:$PATH\" k3s server --cluster-init\n\nservice k3s start\n")),Object(a.b)("h2",{id:"registry"},"registry"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/rancher/k3s\ncat <<YAML > /etc/rancher/k3s/registries.yaml\nmirrors:\n  docker.io:\n    endpoint:\n      - https://fogjl973.mirror.aliyuncs.com\n      - https://8x40wsit.mirror.aliyuncs.com\n      - https://docker.mirrors.ustc.edu.cn\n      - https://registry-1.docker.io\nYAML\n")),Object(a.b)("h2",{id:"\u6e05\u7a7a-k3s-\u670d\u52a1"},"\u6e05\u7a7a K3S \u670d\u52a1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u524d\u63d0\u662f\u7528\u7684 docker"),Object(a.b)("li",{parentName:"ul"},"containerd \u5f97 kill \u8fdb\u7a0b")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u505c\u6b62 k3s \u907f\u514d\u521b\u5efa pod\nservice k3s stop\n# \u91cd\u542f docker \u4f7f\u5f97\u73b0\u6709 pod \u505c\u6b62\nserver docker restart\n# \u6e05\u7406\u4e0d\u5fc5\u8981\u7684\u5185\u5bb9 - --all \u4e5f\u4f1a\u6e05\u7406\u955c\u50cf\ndocker system prune\n")))}b.isMDXComponent=!0}}]);