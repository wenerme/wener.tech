"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12082],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),m=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=m(a),k=l,N=c["".concat(u,".").concat(k)]||c[k]||s[k]||n;return a?r.createElement(N,i(i({ref:t},o),{},{components:a})):r.createElement(N,i({ref:t},o))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9717:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var r=a(87462),l=a(63366),n=(a(67294),a(3905)),i=["components"],p={title:"Service Awesome",tags:["Awesome"]},u=void 0,m={unversionedId:"devops/service/service-awesome",id:"devops/service/service-awesome",title:"Service Awesome",description:"- meshery/meshery",source:"@site/notes/devops/service/service-awesome.md",sourceDirName:"devops/service",slug:"/devops/service/service-awesome",permalink:"/notes/devops/service/service-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/service-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Service Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Serverless Awesome",permalink:"/notes/devops/service/serverless-awesome"},next:{title:"Service governance",permalink:"/notes/devops/service/service-governance"}},o={},s=[{value:"Service Mesh",id:"service-mesh",level:2},{value:"API Gateway",id:"api-gateway",level:2},{value:"RPC",id:"rpc",level:2},{value:"Event",id:"event",level:2},{value:"Comment",id:"comment",level:2}],c={toc:s};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/meshery/meshery"},"meshery/meshery"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"service mesh management plane"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u73b0\u6709 mesh \u4e4b\u4e0a\u63d0\u4f9b\u7ba1\u7406\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 SMI"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u6210 WASM \u8fc7\u6ee4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://smp-spec.io/"},"https://smp-spec.io/")))),(0,n.kt)("li",{parentName:"ul"},"Service Mesh",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u8c03 \u7f16\u6392\u670d\u52a1\u3001Rollout \u6d41\u91cf\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8\u670d\u52a1\u3001\b \u8de8\u8fb9\u754c\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8003\u8651\u7ef4\u5ea6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VM \u652f\u6301 - \u662f\u5426\u6709\u88f8\u673a\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4fb5\u5165\u6027"),(0,n.kt)("li",{parentName:"ul"},"Sidecar \u8d44\u6e90\u5360\u7528"),(0,n.kt)("li",{parentName:"ul"},"Observability \u652f\u6301\u60c5\u51b5 - \u4e00\u822c\u90fd\u4f1a\u652f\u6301"))))),(0,n.kt)("li",{parentName:"ul"},"API Gateway",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u8c03 \u7f16\u6392\u63a5\u53e3\u3001\u6d41\u91cf\u9650\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u66b4\u9732\u5185\u90e8\u670d\u52a1 - Ingress + API \u611f\u77e5"))),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6cbb\u7406 - ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SOA_governance"},"SOA governance"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3 - \u53d1\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u914d\u7f6e\u4e2d\u5fc3"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u751f\u547d\u5468\u671f"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53ef\u89c2\u5bdf"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1 Schema"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1 Portal"),(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u4f9d\u8d56\u4f7f\u7528\u7684 RPC \u534f\u8bae"))),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6ce8\u518c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"eurake"),(0,n.kt)("li",{parentName:"ul"},"consul"),(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"zk"),(0,n.kt)("li",{parentName:"ul"},"nacos")))),(0,n.kt)("h2",{id:"service-mesh"},"Service Mesh"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"linkerd"),(0,n.kt)("li",{parentName:"ul"},"istio"),(0,n.kt)("li",{parentName:"ul"},"consul"),(0,n.kt)("li",{parentName:"ul"},"kuma"),(0,n.kt)("li",{parentName:"ul"},"traefik mesh")),(0,n.kt)("h2",{id:"api-gateway"},"API Gateway"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CNCF ",(0,n.kt)("a",{parentName:"li",href:"https://landscape.cncf.io/card-mode?category=api-gateway&grouping=category"},"API Gateway Landscape")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/"},"Kubernetes Gateway API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GatewayClass, Gateway, HTTPRoute"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/references/implementations/"},"Implementations")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"apache/apisix"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"etcd+nginx"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Kong/kong"},"Kong/kong"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Lua+nginx"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/emissary-ingress/emissary"},"emissary-ingress/emissary"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Python+Go+Envoy"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/megaease/easegress"},"megaease/easegress"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,n.kt)("li",{parentName:"ul"},"\u56fd\u4ea7"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/solo-io/gloo"},"solo-io/gloo"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go+Envoy"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/luraproject/lura"},"luraproject/lura"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go")))),(0,n.kt)("h2",{id:"rpc"},"RPC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc"},"grpc/grpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Google"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/thrift"},"apache/thrift"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Facebook"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/fbthrift"},"facebook/fbthrift")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/twitter/finagle"},"twitter/finagle"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Twitter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/twitchtv/twirp"},"twitchtv/twirp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Twitch TV"),(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/dubbo"},"apache/dubbo"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Java"),(0,n.kt)("li",{parentName:"ul"},"\u963f\u91cc - \u5185\u90e8\u4f7f\u7528 HSF"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/dubbo-go"},"apache/dubbo-go"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u7ef4\u62a4"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-brpc"},"apache/incubator-brpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u767e\u5ea6"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TarsCloud/Tars"},"TarsCloud/Tars"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u817e\u8baf"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Meituan-Dianping/octo-rpc"},"Meituan-Dianping/octo-rpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7f8e\u56e2"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dianping/cat"},"dianping/cat"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,n.kt)("li",{parentName:"ul"},"\u70b9\u8bc4"),(0,n.kt)("li",{parentName:"ul"},"MVC, RPC, DB, Cache, Queue, Conf"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos"},"go-kratos/kratos"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bilibili"),(0,n.kt)("li",{parentName:"ul"},"\u8d28\u91cf\u4e00\u822c"),(0,n.kt)("li",{parentName:"ul"},"gRPC \u811a\u624b\u67b6 + \u914d\u7f6e + \u670d\u52a1\u53d1\u73b0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/smallnest/rpcx"},"smallnest/rpcx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kiss/sniper"},"go-kiss/sniper"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bilibili"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Snailclimb/guide-rpc-framework"},"Snailclimb/guide-rpc-framework"))))),(0,n.kt)("h2",{id:"event"},"Event"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cloudevents"},"cloudevents")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/knative/serving"},"knative/serving")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kedacore/keda"},"kedacore/keda"))),(0,n.kt)("h2",{id:"comment"},"Comment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/laymonage/giscus"},"laymonage/giscus"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Github Discussion"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/utterance/utterances"},"utterance/utterances"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Github Issues"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/utterance/utterances/issues/324"},"#324"),"\nGithub Discussion")))))}k.isMDXComponent=!0}}]);