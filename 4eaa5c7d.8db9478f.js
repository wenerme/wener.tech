(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1172:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,O=u["".concat(b,".").concat(m)]||u[m]||s[m]||l;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},410:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(1172)),b={id:"network",title:"Kubernates \u7f51\u7edc"},c={unversionedId:"devops/kubernetes/network/network",id:"devops/kubernetes/network/network",isDocsHomePage:!1,title:"Kubernates \u7f51\u7edc",description:"Kubernates Network",source:"@site/notes/devops/kubernetes/network/README.md",slug:"/devops/kubernetes/network/network",permalink:"/notes/devops/kubernetes/network/network",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/README.md",version:"current",sidebar:"docs",previous:{title:"Kubernetes \u7248\u672c",permalink:"/notes/devops/kubernetes/k8s-version"},next:{title:"Flannel",permalink:"/notes/devops/kubernetes/network/flannel"}},i=[{value:"\u7f51\u7edc\u8bbe\u8ba1",id:"\u7f51\u7edc\u8bbe\u8ba1",children:[]},{value:"\u96c6\u7fa4\u7f51\u7edc",id:"\u96c6\u7fa4\u7f51\u7edc",children:[]},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",children:[]},{value:"resolv.conf",id:"resolvconf",children:[]},{value:"\u670d\u52a1\u7f51\u7edc",id:"\u670d\u52a1\u7f51\u7edc",children:[{value:"ClusterIP",id:"clusterip",children:[]},{value:"NodePort",id:"nodeport",children:[]},{value:"LoadBalancer",id:"loadbalancer",children:[]},{value:"Ingress",id:"ingress",children:[]},{value:"ExternalName",id:"externalname",children:[]},{value:"ExternalIPs",id:"externalips",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"NodePort vs HostPort vs HostNetwork",id:"nodeport-vs-hostport-vs-hostnetwork",children:[]}]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"kubernates-network"},"Kubernates Network"),Object(l.b)("h2",{id:"\u7f51\u7edc\u8bbe\u8ba1"},"\u7f51\u7edc\u8bbe\u8ba1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7269\u7406\u7f51\u7edc - Phycial Net - OS Net",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9\u4e4b\u9645\u7f51\u7edc\u901a\u4fe1"),Object(l.b)("li",{parentName:"ul"},"\u5bbf\u4e3b\u673a\u5b9e\u9645\u7f51\u7edc - \u4f8b\u5982 eth0"),Object(l.b)("li",{parentName:"ul"},"\u5730\u5740\u4e3a node-ip"))),Object(l.b)("li",{parentName:"ul"},"\u5bb9\u5668\u7f51\u7edc - Pod Net",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bb9\u5668\u4e4b\u95f4\u4e92\u901a\u7684\u7f51\u7edc"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5bb9\u5668\u90fd\u6709\u552f\u4e00\u72ec\u7acb IP"),Object(l.b)("li",{parentName:"ul"},"\u901a\u5e38\u5b9e\u73b0\u662f\u4e00\u4e2a\u8282\u70b9\u4e00\u4e2a\u5b50\u7f51\uff0c\u8ba9\u7ed9 Pod \u5206\u914d\u5b50\u7f51\u8fdb\u884c\u901a\u4fe1"),Object(l.b)("li",{parentName:"ul"},"Pod \u7f51\u7edc\u6d41\u91cf\u5728\u7269\u7406\u7f51\u7edc\u4e0a\u770b\u4e0d\u5230 - \u4f8b\u5982 eth0 \u4e0a\u770b\u4e0d\u5230"),Object(l.b)("li",{parentName:"ul"},"CNI - Container Network Interface - \u5bb9\u5668\u7f51\u7edc\u63a5\u53e3 - \u6807\u51c6\u5316\u4e86\u5bb9\u5668\u4e4b\u95f4\u7f51\u7edc\u5b9e\u73b0\u63a5\u53e3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"JSON \u914d\u7f6e - \u63d2\u4ef6\u5316"),Object(l.b)("li",{parentName:"ul"},"kubelet \u5728\u6bcf\u6b21\u542f\u52a8 pod \u524d\u90fd\u4f1a\u8c03\u7528 cni \u63d2\u4ef6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/cni/net.d")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/opt/cni/bin")),Object(l.b)("li",{parentName:"ul"},"\u5e38\u89c1\u540e\u7aef",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"linux-bridge"),Object(l.b)("li",{parentName:"ul"},"ipvlan"),Object(l.b)("li",{parentName:"ul"},"macvlan"),Object(l.b)("li",{parentName:"ul"},"Open vSwitch"))))),Object(l.b)("li",{parentName:"ul"},"\u6709\u975e\u5e38\u591a\u4e0d\u540c\u7684\u5b9e\u73b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"flannel - \u4f1a\u5728\u8282\u70b9\u4e0a\u521b\u5efa flannel1.1 \u7f51\u5361\u6765\u901a\u4fe1"))))),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u7f51\u7edc - Service Net",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u5185\u90e8\u670d\u52a1\u53d1\u73b0\u3001\u6d41\u91cf\u5206\u53d1"),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0 - \u4f8b\u5982 nginx.default.svc.cluser.local \u57df\u540d"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u8bbf\u95ee\u63a7\u5236\u3001\u6ca1\u6709\u6d41\u91cf\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u865a\u62df\u5730\u5740 - VIP - Virtual IP"),Object(l.b)("li",{parentName:"ul"},"\u4e09\u79cd\u6a21\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ClusterIP"),Object(l.b)("li",{parentName:"ul"},"LoadBalancer"),Object(l.b)("li",{parentName:"ul"},"NodePort"))),Object(l.b)("li",{parentName:"ul"},"kube-proxy - \u914d\u7f6e iptables \u66b4\u9732\u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u4fee\u6539 iptables \u6765\u5b9e\u73b0\u6d41\u91cf\u8f6c\u53d1"),Object(l.b)("li",{parentName:"ul"},"iptables \u6307\u5411\u6bcf\u4e2a endpoint"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5305\u6253\u968f\u673a\u6570\u7528\u6765\u5b9e\u73b0\u8d1f\u8f7d - \u4f46\u4e0d\u7cbe\u786e"))),Object(l.b)("li",{parentName:"ul"},"iptables-save \u4f1a\u770b\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"KUBE-SERVICE")," \u76f8\u5173\u7684\u89c4\u5219"),Object(l.b)("li",{parentName:"ul"},"service-cird \u6307\u5b9a\u4e86 ClusterIP \u7684\u5730\u5740\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u4e4b\u4e0b\u4e3a Endpoint - \u901a\u5e38\u4e3a Pod\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4e49 Endpoint"))),Object(l.b)("li",{parentName:"ul"},"Ingress",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kubernates \u7684\u7f51\u7edc\u5165\u53e3\uff0c\u5c06\u670d\u52a1\u66b4\u9732\u5230\u5916\u90e8"),Object(l.b)("li",{parentName:"ul"},"\u76f4\u63a5\u4e0e Pod \u901a\u4fe1\u800c\u4e0d\u662f\u4e0e\u670d\u52a1\u901a\u4fe1"),Object(l.b)("li",{parentName:"ul"},"\u901a\u5e38\u4e3a 7 \u5c42 HTTP - \u90e8\u5206\u652f\u6301 4 \u5c42 TCP"),Object(l.b)("li",{parentName:"ul"},"\u5927\u591a\u5b9e\u73b0\u4e5f\u652f\u6301 CRD \u65b9\u5f0f\uff0c\u652f\u6301\u66f4\u590d\u6742\u7684\u5b9a\u4e49\u903b\u8f91"))),Object(l.b)("li",{parentName:"ul"},"Egress - \u51fa\u53e3\u6d41\u91cf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u8f83\u5c11\uff0c\u76ee\u524d calico \u652f\u6301"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=H5Zl_kDOwBU"},"The Easy--Don't Drive Yourself Crazy--Way to Kubernetes Networking [B] - Gerard Hickey")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://itnext.io/an-illustrated-guide-to-kubernetes-networking-part-1-d1ede3322727"},"An illustrated guide to Kubernetes Networking"))))),Object(l.b)("h2",{id:"\u96c6\u7fa4\u7f51\u7edc"},"\u96c6\u7fa4\u7f51\u7edc"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Cluster Networking")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/network/networking.md"},"\u7f51\u7edc\u8bbe\u8ba1\u6587\u6863")),Object(l.b)("li",{parentName:"ul"},"\u56db\u79cd\u7f51\u7edc\u7c7b\u578b",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u5bb9\u5668 \u5230 \u5bb9\u5668")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5bb9\u5668\u672c\u8eab\u6765\u8bf4\u5b83\u5c31\u50cf\u8fd0\u884c\u5728\u540c\u4e00\u4e2a\u4e3b\u673a\u4e0a")),Object(l.b)("ol",{parentName:"li",start:2},Object(l.b)("li",{parentName:"ol"},"Pod \u5230 Pod")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u90fd\u6709\u771f\u5b9e\u72ec\u7acb IP"),Object(l.b)("li",{parentName:"ul"},"IP \u8de8\u8282\u70b9\u552f\u4e00\u3001\u901a\u4fe1")),Object(l.b)("ol",{parentName:"li",start:3},Object(l.b)("li",{parentName:"ol"},"Pod \u5230 Service"),Object(l.b)("li",{parentName:"ol"},"\u5916\u90e8 \u5230 Service"))),Object(l.b)("li",{parentName:"ul"},"\u8981\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Pod \u4e4b\u95f4\u4e92\u901a - \u65e0 NAT"),Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9\u4e0a Agent \u548c Pod \u4e92\u901a"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Host \u7f51\u7edc\u7684\u5e73\u53f0 - Pod \u5728\u4e3b\u673a\u7f51\u7edc\u4e0b\u80fd\u4e0e\u5176\u4ed6 Pod \u4e92\u901a - \u65e0 NAT"))),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Linux L2 \u5c42\u6865\u63a5\u7f51\u7edc",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.tinc-vpn.org/"},"Tinc")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/coreos/flannel"},"coreos/flannel")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/projectcalico/calico"},"projectcalico/calico")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/ovn-org/ovn-kubernetes"},"ovn-org/ovn-kubernetes"))))),Object(l.b)("h2",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/network/service-discovery.md"},"Service Discovery Proposal"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u63a8\u8350 Annotation")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "api.service.kubernetes.io/protocol": "REST",\n  "api.service.kubernetes.io/scheme": "http",\n  "api.service.kubernetes.io/path": "cxfcdi",\n  "api.service.kubernetes.io/description-path": "cxfcdi/swagger.json",\n  "api.service.kubernetes.io/description-language": "SwaggerJSON"\n}\n')),Object(l.b)("h2",{id:"resolvconf"},"resolv.conf"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/network/pod-resolv-conf.md"},"Custom /etc/resolv.conf"))),Object(l.b)("h2",{id:"\u670d\u52a1\u7f51\u7edc"},"\u670d\u52a1\u7f51\u7edc"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://medium.com/google-cloud/922f010849e0"},"Kubernetes NodePort vs LoadBalancer vs Ingress? When should I use what?"))),Object(l.b)("h3",{id:"clusterip"},"ClusterIP"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65e0\u5916\u90e8\u8bbf\u95ee"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"li"},"kubectl proxy --port=8080")," \u8fdb\u884c\u8bbf\u95ee - \u5730\u5740\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"http://localhost:8080/api/v1/proxy/namespaces/<NAMESPACE>/services/<SERVICE-NAME>:<PORT-NAME>/")),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u8c03\u8bd5\u548c\u66b4\u9732\u5185\u90e8\u670d\u52a1")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-internal-service\nspec:\n  selector:\n    app: my-app\n  type: ClusterIP\n  ports:\n    - name: http\n      port: 80\n      targetPort: 80\n      protocol: TCP\n")),Object(l.b)("h3",{id:"nodeport"},"NodePort"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5916\u90e8\u8bbf\u95ee\u6700\u539f\u59cb\u7684\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},"\u5728\u6240\u6709\u8282\u70b9\u5f00\u542f\u76f8\u540c\u7aef\u53e3\u8fdb\u884c\u8f6c\u53d1"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u670d\u52a1\u53ea\u80fd\u66b4\u9732\u4e00\u4e2a\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3\u9650\u5b9a\u5728 30000\u201332767"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u5173\u6ce8\u8282\u70b9\u5730\u5740\u53d8\u5316"))),Object(l.b)("li",{parentName:"ul"},"\u573a\u666f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6f14\u793a\u670d\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u5355\u7aef\u53e3\u670d\u52a1 - \u4f8b\u5982 DNS")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-nodeport-service\nspec:\n  selector:\n    app: my-app\n  type: NodePort\n  ports:\n    - name: http\n      port: 80\n      targetPort: 80\n      # \u4e0d\u6307\u5b9a\u5219\u968f\u673a\u5206\u914d\n      # 30000-32767\n      nodePort: 30036\n      protocol: TCP\n")),Object(l.b)("h3",{id:"loadbalancer"},"LoadBalancer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6807\u51c6\u7684\u66b4\u9732\u670d\u52a1\u65b9\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u670d\u52a1\u90fd\u4f1a\u83b7\u53d6\u5230\u81ea\u5df1\u7684 IP - \u56e0\u6b64\u6bcf\u4e2a\u66b4\u9732\u7684\u670d\u52a1\u90fd\u4f1a\u9700\u8981\u5bf9\u8d1f\u8f7d\u5747\u8861\u4ed8\u8d39"),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861\u662f\u7531\u5e73\u53f0\u63d0\u4f9b\u4e14\u4f34\u968f\u8d39\u7528"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/danderson/metallb"},"danderson/metallb")," - \u57fa\u4e8e\u8def\u7531\u7684\u5185\u90e8 LB \u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49 ",Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/developing-cloud-controller-manager/"},"Cloud Controller Manager")," \u6765\u63d0\u4f9b LoadBalancer"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer"},"Create an External Load Balancer")),Object(l.b)("li",{parentName:"ul"},"NGINX Ingress Controller ",Object(l.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/deploy/baremetal"},"Bare-metal considerations"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: example-service\nspec:\n  selector:\n    app: example\n  ports:\n    - port: 8765\n      targetPort: 9376\n  type: LoadBalancer\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u67d0\u4e2a\u670d\u52a1\u901a\u8fc7\u8d1f\u8f7d\u5747\u8861\u7684\u65b9\u5f0f\u8fdb\u884c\u7aef\u53e3\u66b4\u9732\nkubectl expose svc web --type=LoadBalancer --port=80 --target-port=8080 --external-ip=192.168.1.2 --name=web-lb\n\n# \u67e5\u770b\u670d\u52a1\u72b6\u6001\u5305\u542b\u5730\u5740\u4fe1\u606f\nkubectl describe svc ingress-nginx-ingress-controller\n")),Object(l.b)("h3",{id:"ingress"},"Ingress"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e0d\u662f\u4e00\u4e2a\u670d\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u5c42\u8def\u7531 - \u5206\u4e3a Ingress \u5b9a\u4e49\u548c IngressController \u63a7\u5236\u5668"),Object(l.b)("li",{parentName:"ul"},"\u5e38\u89c1\u5b9e\u73b0 Nginx\u3001Istio\u3001",Object(l.b)("a",{parentName:"li",href:"https://github.com/containous/traefik"},"Traefik"),"\u3001",Object(l.b)("a",{parentName:"li",href:"https://github.com/projectcontour/contour"},"Contour")),Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c\u9700\u8981\u914d\u5957 cert-manager \u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u80fd\u9644\u5e26\u5176\u5b83\u80fd\u529b SSL\u3001\u9274\u6743\u3001\u8def\u7531\u7b49"),Object(l.b)("li",{parentName:"ul"},"\u573a\u666f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 HTTP \u534f\u8bae"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u540e\u7aef\u66b4\u9732\u591a\u4e2a\u670d\u52a1")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: my-ingress\nspec:\n  backend:\n    serviceName: other\n    servicePort: 8080\n  rules:\n    - host: foo.mydomain.com\n      http:\n        paths:\n          - backend:\n              serviceName: foo\n              servicePort: 8080\n    - host: mydomain.com\n      http:\n        paths:\n          - path: /bar/*\n            backend:\n              serviceName: bar\n              servicePort: 8080\n")),Object(l.b)("h3",{id:"externalname"},"ExternalName"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f1a\u5c06 ",Object(l.b)("inlineCode",{parentName:"li"},"my-service.prod.svc.cluster.local")," CNAME \u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"my.database.example.com")),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 SSL \u4f1a\u6709\u8bc1\u4e66\u95ee\u9898"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u7684\u73af\u5883 DNS \u4e0d\u4e92\u901a\u4e5f\u4f1a\u6709\u95ee\u9898")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\n  namespace: prod\nspec:\n  type: ExternalName\n  externalName: my.database.example.com\n")),Object(l.b)("h3",{id:"externalips"},"ExternalIPs"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n    - name: http\n      protocol: TCP\n      port: 80\n      targetPort: 9376\n  externalIPs:\n    - 80.11.12.10\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"nodeport-vs-hostport-vs-hostnetwork"},"NodePort vs HostPort vs HostNetwork"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u90fd\u662f\u4e3a\u4e86\u5728\u865a\u62df\u8282\u70b9\u4e0a\u66b4\u9732\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"TLS \u573a\u666f\u5982\u679c\u60f3\u8981\u83b7\u53d6\u5230\u5ba2\u6237\u7aef IP \u5219\u9700\u8981\u66b4\u9732\u7aef\u53e3\u5230\u4e3b\u673a - \u5426\u5219\u4f7f\u7528 tcp proxy - \u5f88\u9ebb\u70e6"),Object(l.b)("li",{parentName:"ul"},"NodePort",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u63a8\u8350\u65b9\u5f0f"),Object(l.b)("li",{parentName:"ul"},"Kubernetes \u7ba1\u7406 - \u7aef\u53e3\u8303\u56f4 30000\u201332767"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8f6c\u53d1\u670d\u52a1 - \u4e0d\u9700\u8981\u8282\u70b9\u8fd0\u884c POD"))),Object(l.b)("li",{parentName:"ul"},"HostPort",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u63a8\u8350\u4f7f\u7528 - \u9664\u975e\u4e0d\u5f97\u5df2 - node daemon"),Object(l.b)("li",{parentName:"ul"},"Kubernetes \u9884\u7559\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9\u9700\u8981\u8fd0\u884c POD"),Object(l.b)("li",{parentName:"ul"},"\u53d6\u51b3\u4e8e CNI \u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u5f71\u54cd pod \u8c03\u5ea6 - \u56e0\u4e3a\u7aef\u53e3\u51b2\u7a81"))),Object(l.b)("li",{parentName:"ul"},"HostNetwork",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56 CNI"),Object(l.b)("li",{parentName:"ul"},"\u5728\u5bbf\u4e3b\u673a\u7f51\u7edc\u7a7a\u95f4"),Object(l.b)("li",{parentName:"ul"},"\u80fd\u8bbf\u95ee lookback \u8bbe\u5907\u3001\u670d\u52a1 \u7b49"),Object(l.b)("li",{parentName:"ul"},"\u80fd\u591f\u83b7\u53d6\u8282\u70b9\u4e0a\u7684\u7f51\u7edc\u6d3b\u52a8"),Object(l.b)("li",{parentName:"ul"},"DaemonSet \u65f6\u53ef\u4ee5\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/23920"},"https://github.com/kubernetes/kubernetes/issues/23920"))))))}p.isMDXComponent=!0}}]);