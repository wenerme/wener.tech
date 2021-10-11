"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66206],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var k=n.createContext({}),u=function(t){var e=n.useContext(k),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,k=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=u(r),d=a,N=m["".concat(k,".").concat(d)]||m[d]||o[d]||l;return r?n.createElement(N,i(i({ref:e},s),{},{components:r})):n.createElement(N,i({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83185:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return k},metadata:function(){return u},assets:function(){return s},toc:function(){return o},default:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],p={title:"K3S vs K0S",slug:"k8s-distro-compare",tags:["Kubernetes","DevOps"]},k="K8S Distro K3S vs K0S",u={permalink:"/story/k8s-distro-compare",editUrl:"https://github.com/wenerme/wener/edit/master/story/2021/2021-07-25-k8s-distro-compare.md",source:"@site/story/2021/2021-07-25-k8s-distro-compare.md",title:"K3S vs K0S",description:"K8S \u4f5c\u4e3a\u6700\u539f\u59cb\u7684\u9879\u76ee\uff0c\u6d3e\u751f\u51fa\u6765\u5f88\u591a \u5206\u652f/\u53d1\u5e03\u7248\u3002",date:"2021-10-11T08:29:38.150Z",formattedDate:"October 11, 2021",tags:[{label:"Kubernetes",permalink:"/story/tags/kubernetes"},{label:"DevOps",permalink:"/story/tags/dev-ops"}],readingTime:4.165,truncated:!0,authors:[],prevItem:{title:"\u65e5\u5e38\u5de5\u4f5c\u4e4b\u5916",permalink:"/story/out-of-daily-work"},nextItem:{title:"PostgreSQL ORDER BY+LIMIT \u65f6\u7684\u7d22\u5f15\u9009\u62e9",permalink:"/story/postgresql-use-wrong-index-with-order-and-limit"}},s={authorsImageUrls:[]},o=[{value:"K8S \u8981\u6c42",id:"k8s-\u8981\u6c42",children:[]},{value:"K8S \u90e8\u7f72",id:"k8s-\u90e8\u7f72",children:[]},{value:"\u5bf9\u6bd4",id:"\u5bf9\u6bd4",children:[{value:"k3s &amp; k0s",id:"k3s--k0s",children:[]}]},{value:"\u7ec4\u4ef6\u7b80\u4ecb",id:"\u7ec4\u4ef6\u7b80\u4ecb",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],m={toc:o};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"K8S \u4f5c\u4e3a\u6700\u539f\u59cb\u7684\u9879\u76ee\uff0c\u6d3e\u751f\u51fa\u6765\u5f88\u591a \u5206\u652f/\u53d1\u5e03\u7248\u3002"),(0,l.kt)("p",null,"Kubernetes \u7684\u6838\u5fc3\u80fd\u529b\u4e3a\u8d44\u6e90\u8c03\u5ea6\uff0c\u4e3b\u8981\u8d44\u6e90\u4e3a Pod/\u5bb9\u5668\u7ec4/\u8ba1\u7b97\u8d44\u6e90\u3002\n\u56e0\u4e3a\u662f\u5206\u5e03\u5f0f\u591a\u8282\u70b9\uff0c\u6240\u4ee5\u5bf9\u7f51\u7edc\u6709\u8981\u6c42\u3002Pod \u8c03\u5ea6\u4e3b\u8981\u63d0\u4f9b\u8ba1\u7b97\u80fd\u529b\uff0c\u5b9e\u9645\u4f7f\u7528\u8fd8\u4f1a\u9700\u8981\u5b58\u50a8\u80fd\u529b\u3002\n\u4e5f\u5c31\u662f\u8bf4 Kubernetes \u6d89\u53ca\u5230\u6838\u5fc3\u7684\u4e09\u5143\u7d20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8")),(0,l.kt)("p",null,"Kubernetes \u6838\u5fc3\u8c03\u5ea6\u8ba1\u7b97\u8d44\u6e90\uff0c\u4f46\u5bf9\u4e8e\u7f51\u7edc\u548c\u5b58\u50a8\u662f \u65e0\u610f\u89c1/Unopinioned \uff0c\u4f46\u5b9e\u9645\u90e8\u7f72\u4f7f\u7528\u65f6\u8fd9\u65f6\u5019\u53c8\u4e0d\u53ef\u907f\u514d\u7684\u8981\u9762\u5bf9\u8fd9\u4e9b\u95ee\u9898\u3002\n\u56e0\u6b64\u4e0d\u540c\u7684 \u53d1\u5e03\u7248/Distribution \u5c31\u662f\u5bf9\u8fd9\u4e9b\u95ee\u9898\u4e0d\u540c\u7684\u770b\u6cd5\u3002"),(0,l.kt)("h2",{id:"k8s-\u8981\u6c42"},"K8S \u8981\u6c42"),(0,l.kt)("p",null,"Kubernetes \u7531 Google \u5f00\u53d1\uff0c\u4f46\u4e0d\u662f\u6240\u6709\u4eba\u90fd\u6709\u90a3\u4e48\u5927\u89c4\u6a21\u7684\u95ee\u9898\uff0c\u800c\u5927\u591a\u6570\u65f6\u5019\u90fd\u662f\u5c0f\u89c4\u6a21\uff0c\u5148\u8ba9 K8S \u201c\u8dd1\u8d77\u6765\u201d\u3002"),(0,l.kt)("p",null,"Kubernetes \u81ea\u8eab\u56e0\u4e3a\u5bf9\u57fa\u7840\u8bbe\u65bd\u5c42 \u65e0\u610f\u89c1/Unopinioned\uff0c\u56e0\u6b64\u9ed8\u8ba4\u662f\u6ca1\u6709\u90e8\u7f72\u5de5\u5177\uff0c\u53ea\u6709\u8981\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u8282\u70b9\u8fd0\u884c\u5728\u5e73\u5766\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42 etcd \u80fd\u529b\u7684\u72b6\u6001\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42 cloud-controller \u63d0\u4f9b\u8282\u70b9\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42 \u5bb9\u5668\u8fd0\u884c\u65f6")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e9b\u57fa\u7840\u4e4b\u4e0a\uff0cKubernetes \u63d0\u4f9b\u57fa\u4e8e\u72b6\u6001\u7684 \u63a5\u53e3 \u8fdb\u884c\u8d44\u6e90\u8c03\u5ea6\u3002"),(0,l.kt)("h2",{id:"k8s-\u90e8\u7f72"},"K8S \u90e8\u7f72"),(0,l.kt)("p",null,"\u9664\u4e86\u6ee1\u8db3 K8S \u7684\u8981\u6c42\uff0c\u5728\u5b9e\u9645\u4f7f\u7528\u65f6\u8fd8\u5e0c\u671b\u80fd\u65b9\u4fbf\u5feb\u6377\u7684\u7ba1\u7406\u90e8\u7f72\u3002\nK8S \u63d0\u4f9b\u4e86 kubeadm \u8fdb\u884c\u5b89\u88c5\uff0c\u4e0d\u540c\u7684\u53d1\u5e03\u7248\u4e5f\u9700\u8981\u63d0\u4f9b\u7c7b\u4f3c\u7684\u5de5\u5177\uff0c\u4f46\u5de5\u5177\u533a\u5206\u4e3a\u4e24\u90e8\u5206"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdc\u7a0b\u5f00\u901a\u90e8\u7f72",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SSH"),(0,l.kt)("li",{parentName:"ul"},"\u63a7\u5236\u8282\u70b9\u901a\u8fc7\u5de5\u5177\u90e8\u7f72\u5230\u591a\u4e2a\u8282\u70b9"))),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u901a\u90e8\u7f72\u7684\u63d0\u524d\u51c6\u5907",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CA \u8bc1\u4e66"),(0,l.kt)("li",{parentName:"ul"},"ETCD/\u5b58\u50a8\u521d\u59cb\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"Bootstrap")))),(0,l.kt)("p",null,"kubeadm \u548c k0s, k3s \u90fd\u5c5e\u4e8e\u7b2c\u4e8c\u79cd\u573a\u666f\uff0c\u7b2c\u4e00\u79cd\u573a\u666f\u7684\u5de5\u5177\u4f8b\u5982"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"autok3s"),(0,l.kt)("li",{parentName:"ul"},"rke"),(0,l.kt)("li",{parentName:"ul"},"ansible")),(0,l.kt)("h2",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"vs."),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://wener.me/notes/devops/kubernetes/distro/k0s"},"k0s")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://wener.me/notes/devops/kubernetes/distro/k3s"},"k3s")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7248\u672c\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u7248\u672c",(0,l.kt)("br",null),"\u4f8b\u5982 v1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7248\u672c\u57fa\u4e8e k8s ",(0,l.kt)("br",null)," \u4f8b\u5982 1.19.1+k3s1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5546\u4e1a\u516c\u53f8"),(0,l.kt)("td",{parentName:"tr",align:null},"Mirants"),(0,l.kt)("td",{parentName:"tr",align:null},"Rancher/SUSE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Since"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-06"),(0,l.kt)("td",{parentName:"tr",align:null},"2019")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Stars"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k0sproject/k0s"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/k0sproject/k0s",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/k3s"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/k3s-io/k3s",alt:null})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issues"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k0sproject/k0s"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/issues/k0sproject/k0s",alt:null}))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/k3s-io/k3s"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/github/issues/k3s-io/k3s",alt:null})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ETCD"),(0,l.kt)("td",{parentName:"tr",align:null},"kine"),(0,l.kt)("td",{parentName:"tr",align:null},"kine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u7ec4\u4ef6/CNI"),(0,l.kt)("td",{parentName:"tr",align:null},"Kube-Router/calico"),(0,l.kt)("td",{parentName:"tr",align:null},"flannel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u7f51\u7edc"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"10.42.0.0/16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7f51\u7edc"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"10.43.0.0/16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"coredns"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"10.43.0.10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cri"),(0,l.kt)("td",{parentName:"tr",align:null},"containerd"),(0,l.kt)("td",{parentName:"tr",align:null},"containerd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6253\u5305"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u53ef\u6267\u884c\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u53ef\u6267\u884c\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u6863"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u719f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5185\u7f6e\u7ec4\u4ef6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wener.me/notes/devops/kubernetes/distro/k3s"},"k3s")," - \u901a\u8fc7 helm \u90e8\u7f72",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"helm-controller"),(0,l.kt)("li",{parentName:"ul"},"traefik"),(0,l.kt)("li",{parentName:"ul"},"klipper-lb"),(0,l.kt)("li",{parentName:"ul"},"local-path-provisioner"),(0,l.kt)("li",{parentName:"ul"},"metrics-server"),(0,l.kt)("li",{parentName:"ul"},"coredns"),(0,l.kt)("li",{parentName:"ul"},"kube-router"))),(0,l.kt)("li",{parentName:"ul"},"k0s",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"metrics-server"),(0,l.kt)("li",{parentName:"ul"},"coredns"),(0,l.kt)("li",{parentName:"ul"},"kube-router")))),(0,l.kt)("p",null,"k3s \u9ed8\u8ba4\u5305\u542b\u8f83\u591a\u7ec4\u4ef6\uff0c\u90e8\u7f72\u540e \u53ef\u4f7f\u7528\u6027 \u66f4\u9ad8\uff0c\u4f46\u90e8\u5206\u7ec4\u4ef6\uff08 traefik,klipper-lb,local-path-provisioner \uff09\u4e0d\u5efa\u8bae\u751f\u4ea7\u4f7f\u7528\uff0c\u63d0\u4f9b\u8fd9\u4e9b\u7ec4\u4ef6\u66f4\u591a\u662f\u4fdd\u8bc1\u529f\u80fd\u5b8c\u6574\u3002"),(0,l.kt)("h3",{id:"k3s--k0s"},"k3s & k0s"),(0,l.kt)("p",null,"\u9762\u5411\u76f8\u540c\u7528\u6237\u7fa4\u4f53\u548c\u4f7f\u7528\u573a\u666f\uff0c\u56e0\u6b64\u975e\u5e38\u7c7b\u4f3c\u3002"),(0,l.kt)("p",null,"k0s \u4e5f\u4f7f\u7528 k3s \u7684 kine\uff0c\u6838\u5fc3\u7ec4\u4ef6\u76f8\u540c\uff0c\u4e24\u8005\u533a\u522b\u4e0d\u5927\uff0c\u53ea\u662f k3s \u4e8b\u4ef6\u66f4\u957f\u66f4\u6210\u719f\uff0c\u9ed8\u8ba4\u5b89\u88c5\u540e\u53ef\u7528\u7684\u7ec4\u4ef6\u66f4\u591a\u3002"),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u7b80\u4ecb"},"\u7ec4\u4ef6\u7b80\u4ecb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wener.me/notes/devops/kubernetes/distro/kine"},"kine"),"\nk3s \u548c k0s \u6700\u6838\u5fc3\u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b kine \u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u652f\u6301 etcd,sqlite,mysql,postgresql,dqlite"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wener.me/notes/devops/kubernetes/network/traefik-ingress"},"traefik"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b Ingress \u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wener.me/notes/devops/kubernetes/storage/local-path-provisioner/"},"local-path-provisioner"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u672c\u5730\u8def\u5f84\u63d0\u4f9b volume"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/klipper-lb"},"k3s-io/klipper-lb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e iptable \u63d0\u4f9b ClusterIP \u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u7ec4\u4ef6 ",(0,l.kt)("a",{parentName:"li",href:"https://wener.me/notes/devops/kubernetes/network/metallb/"},"metallb")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/helm-controller"},"k3s-io/helm-controller"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u90e8\u7f72 helm chart"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 CDR \u63a7\u5236"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cloudnativelabs/kube-router"},"cloudnativelabs/kube-router"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u89e3\u51b3\u65b9\u6848")))),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://landscape.cncf.io/card-mode?category=certified-kubernetes-installer&grouping=category"},"certified-kubernetes-installer"))))}d.isMDXComponent=!0}}]);