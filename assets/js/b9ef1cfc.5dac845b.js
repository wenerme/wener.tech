"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20806],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,d=m["".concat(o,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76095:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return k}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),s=["components"],i={title:"K8S Network FAQ",tags:["FAQ"]},o="K8S Network FAQ",u={unversionedId:"devops/kubernetes/network/k8s-network-faq",id:"devops/kubernetes/network/k8s-network-faq",title:"K8S Network FAQ",description:"NodePort \u7aef\u53e3\u8303\u56f4",source:"@site/../notes/devops/kubernetes/network/k8s-network-faq.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-network-faq",permalink:"/notes/devops/kubernetes/network/k8s-network-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/network/k8s-network-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656950348,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"K8S Network FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Kubernetes Networking Awesome",permalink:"/notes/devops/kubernetes/network/k8s-network-awesome"},next:{title:"Kong Ingress",permalink:"/notes/devops/kubernetes/network/kong-ingress"}},p={},k=[{value:"NodePort \u7aef\u53e3\u8303\u56f4",id:"nodeport-\u7aef\u53e3\u8303\u56f4",level:2},{value:"Service \u5148\u8d70\u672c\u8282\u70b9 Endpoint",id:"service-\u5148\u8d70\u672c\u8282\u70b9-endpoint",level:2},{value:"Endpoints vs EndpointSlices",id:"endpoints-vs-endpointslices",level:2},{value:"\u9ed8\u8ba4 IngressClass",id:"\u9ed8\u8ba4-ingressclass",level:2},{value:"Ingress vs Gateway",id:"ingress-vs-gateway",level:2},{value:"LB/Load Balance vs Ingress vs ClusterIP vs API Gateway",id:"lbload-balance-vs-ingress-vs-clusterip-vs-api-gateway",level:2},{value:"\u901a\u8fc7 DNS \u540d\u5b57\u8bbf\u95ee StatusfulSet Pod",id:"\u901a\u8fc7-dns-\u540d\u5b57\u8bbf\u95ee-statusfulset-pod",level:2}],m={toc:k};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"k8s-network-faq"},"K8S Network FAQ"),(0,l.kt)("h2",{id:"nodeport-\u7aef\u53e3\u8303\u56f4"},"NodePort \u7aef\u53e3\u8303\u56f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"30000\u201332767")),(0,l.kt)("h2",{id:"service-\u5148\u8d70\u672c\u8282\u70b9-endpoint"},"Service \u5148\u8d70\u672c\u8282\u70b9 Endpoint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: keydb\n  annotations:\n    # Topology Aware Hints\n    # Kubernetes v1.23 Beta\n    # \u4e4b\u524d\u4e3a topology-aware-hints\n    # \u503c\u4e3a Auto|Disabled\n    service.kubernetes.io/topology-aware-routing: auto\nspec:\n  selector:\n    app: keydb\n  ports:\n    - port: 6379\n  # Kubernetes v1.21 \u5e9f\u5f03\n  topologyKeys:\n    - 'kubernetes.io/hostname'\n    - 'kubernetes.io/hostname'\n    - 'topology.kubernetes.io/zone'\n    - 'topology.kubernetes.io/region'\n    - '*'\n")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/enhancements/blob/master/keps/sig-network/2433-topology-aware-hints/README.md"},"KEP#2433")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/"},"Topology Aware Hints"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes v1.23 Beta")))),(0,l.kt)("h2",{id:"endpoints-vs-endpointslices"},"Endpoints vs EndpointSlices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EndpointSlices \u66ff\u4ee3 Endpoints - v1.21"),(0,l.kt)("li",{parentName:"ul"},"Endpoints will be mirrored to EndpointSlices for Services with no spec.selector")),(0,l.kt)("h2",{id:"\u9ed8\u8ba4-ingressclass"},"\u9ed8\u8ba4 IngressClass"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ingressclasses\nkubectl describe ingressclasses nginx\nkubectl annotate ingressclasses nginx ingressclass.kubernetes.io/is-default-class=true\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ingress does not contain a valid IngressClass")),(0,l.kt)("h2",{id:"ingress-vs-gateway"},"Ingress vs Gateway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ingress",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u5bb9\u66f4\u591a - \u5305\u542b\u4e86 Host \u914d\u7f6e\u548c \u89c4\u5219\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u5b9a\u4e49\u4e86 HTTP Host+Path \u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u66b4\u9732 80 \u548c 443 \u4e24\u4e2a\u7aef\u53e3"))),(0,l.kt)("li",{parentName:"ul"},"Gateway - gateway.networking.k8s.io",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u533a\u5206\u4e86 Gateway \u548c HTTPRoute - \u6253\u6563\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"Gateway \u901a\u8fc7 selector \u9009\u62e9\u8981\u5305\u542b\u7684 HTTPRoute"),(0,l.kt)("li",{parentName:"ul"},"Gateway \u548c Route \u662f \u5bf9\u5bf9\u591a \u5173\u7cfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u4e00\u4e2a dev \u4e00\u4e2a test \u4f46\u4f7f\u7528\u90e8\u5206\u76f8\u540c Route"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 HTTPRoute \u7684\u914d\u7f6e\u4e0b\u653e\u5230\u5f00\u53d1\u4eba\u5458"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e HTTP \u8def\u7531",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TLSRoute - \u57fa\u4e8e SNI \u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"TCPRoute, UDPRoute - \u57fa\u4e8e\u76ee\u6807\u7aef\u53e3\u8def\u7531"))),(0,l.kt)("li",{parentName:"ul"},"\u660e\u786e\u652f\u6301\u900f\u4f20 HTTPS"),(0,l.kt)("li",{parentName:"ul"},"\u66b4\u5728 80 \u548c 443 \u4e4b\u4e0a\u652f\u6301\u66b4\u9732\u989d\u5916\u7aef\u53e3")))),(0,l.kt)("h2",{id:"lbload-balance-vs-ingress-vs-clusterip-vs-api-gateway"},"LB/Load Balance vs Ingress vs ClusterIP vs API Gateway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LB/Load Balance - \u8d1f\u8f7d\u5747\u8861",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u662f\u4e00\u79cd\u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u8868\u793a\u805a\u5408\u4e86\u540e\u7aef\u591a\u4e2a\u670d\u52a1/\u8282\u70b9\uff0c\u5bf9\u5916\u8fdb\u884c\u7edf\u4e00\u66b4\u9732"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u529f\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u6e38\u76d1\u63a7\u72b6\u6001\u76d1\u63a7 - \u5ffd\u7565\u5f02\u5e38\u8282\u70b9/\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u8f6e\u8be2"))))),(0,l.kt)("li",{parentName:"ul"},"Ingress - \u6d41\u91cf\u5165\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u80fd\u611f\u77e5 7 \u5c42\u534f\u8bae\u7684 LB - TCP/UDP/HTTP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e 4 \u5c42\u5b9e\u73b0 7 \u5c42"))),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u80fd\u611f\u77e5 7 \u5c42\u534f\u8bae\uff0c\u6240\u4ee5\u53ef\u4ee5\u652f\u6301\u66f4\u591a\u7684\u8def\u7531\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u529f\u80fd - \u57fa\u4e8e HTTP \u534f\u8bae Host+Path \u7684 LB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Hots/\u4e3b\u673a\u540d \u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e \u8def\u5f84 \u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"TLS Offload"))),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5b9e\u73b0: nginx, haproxy, envoy, traefik"))),(0,l.kt)("li",{parentName:"ul"},"ClusterIP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"4 \u5c42\u534f\u8bae\u7684 LB - IP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u57fa\u4e8e 2 \u5c42\u5b9e\u73b0 4 \u5c42 - MAC"))),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u865a\u62df IP - \u8be5 IP \u53ef\u4ee5\u662f\u79c1\u6709\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u5e73\u53f0\u63d0\u4f9b\u7684\u516c\u7f51 IP"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u79cd\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u529f\u80fd - \u57fa\u4e8e IP \u7684 LB"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5b9e\u73b0: metallb"))),(0,l.kt)("li",{parentName:"ul"},"API Gateway - \u63a5\u53e3\u7f51\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u5e94\u7528\u5c42\u534f\u8bae\u4e4b\u4e0a\u96c6\u6210\u66f4\u591a\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"API Gateway \u662f Ingress \u8d85\u96c6"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u66f4\u4e0a\u5c42\u7684\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u611f\u77e5\u66f4\u591a\u534f\u8bae - \u4f8b\u5982 gRPC/MQTT/MySQL/PostgreSQL/GraphQL"),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u57fa\u4e8e\u670d\u52a1\u8fdb\u884c\u8def\u7531",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gRPC \u4e0d\u540c\u670d\u52a1\u8fdb\u884c\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"MQTT \u8def\u7531"))),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u611f\u77e5\u5ba2\u6237\u7aef\u66f4\u591a\u4fe1\u606f - \u4f8b\u5982 \u5b9e\u73b0 Auth\u3001\u9650\u6d41 \u7b49\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u5bf9\u8f93\u5165\u8f93\u51fa\u8fdb\u884c\u64cd\u4f5c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539 HTTP \u8fd4\u56de JSON \u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8bf7\u6c42\u54cd\u5e94\u8fdb\u884c Instrument - \u4f8b\u5982 tracing"))),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u63a5\u8fd1\u5f00\u53d1 - \u901a\u5e38\u652f\u6301 Hook \u4ee3\u7801\u6216\u5916\u90e8\u5e94\u7528\u8fdb\u884c\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u6392\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4e0e\u670d\u52a1\u53d1\u73b0\u7ed3\u5408\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4f1a\u62bd\u8c61\u66f4\u9ad8\u5c42\u7684\u6982\u5ff5 - \u670d\u52a1\u3001\u8def\u7531\u3001Consumer\u3001Plugin"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5b9e\u73b0: ambassador, kong, apisix")))),(0,l.kt)("h2",{id:"\u901a\u8fc7-dns-\u540d\u5b57\u8bbf\u95ee-statusfulset-pod"},"\u901a\u8fc7 DNS \u540d\u5b57\u8bbf\u95ee StatusfulSet Pod"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd headless service \u5b58\u5728 - \u4f8b\u5982: redis"),(0,l.kt)("li",{parentName:"ul"},"serviceName=redis"),(0,l.kt)("li",{parentName:"ul"},"metadata.name=redis"),(0,l.kt)("li",{parentName:"ul"},"clusterIP: None"),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"redis-0.redis.NAMESPACE.svc.cluster.local")," \u8bbf\u95ee",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u591a\u4e86\u4e00\u5c42 stateful \u7684\u540d\u5b57"))),(0,l.kt)("li",{parentName:"ul"},"\u8981 ready \u540e\u624d\u6709\u8bb0\u5f55")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id"},"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/45779"},"https://github.com/kubernetes/kubernetes/issues/45779")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/92559"},"https://github.com/kubernetes/kubernetes/issues/92559"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Headless \u6709 30s \u7684 cache-miss \u7f13\u5b58\uff0c\u65b0\u7684 pod \u8981 30s DNS \u624d\u80fd\u8bbf\u95ee")))))}c.isMDXComponent=!0}}]);