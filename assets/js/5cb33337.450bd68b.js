"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87304],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=c(a),s=l,h=g["".concat(i,".").concat(s)]||g[s]||u[s]||n;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76681:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=a(96600),l=a(27279),n=(a(59496),a(49613)),o=["components"],p={title:"gRPC Awesome",tags:["Awesome"]},i=void 0,c={unversionedId:"service/api/grpc-awesome",id:"service/api/grpc-awesome",title:"gRPC Awesome",description:"- grpc-ecosystem/grpc-gateway",source:"@site/notes/service/api/grpc-awesome.md",sourceDirName:"service/api",slug:"/service/api/grpc-awesome",permalink:"/notes/service/api/grpc-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/grpc-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"gRPC Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"GraphQL",permalink:"/notes/service/api/graphql"},next:{title:"channelz",permalink:"/notes/service/api/grpc-channelz"}},m={},u=[{value:"LB/Gateway/Proxy",id:"lbgatewayproxy",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"UI",id:"ui",level:2},{value:"Health",id:"health",level:2},{value:"RPC",id:"rpc",level:2},{value:"gen",id:"gen",level:2}],g={toc:u};function s(e){var t=e.components,a=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc-ecosystem/grpc-gateway"},"grpc-ecosystem/grpc-gateway"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gRPC -> OpenAPIv2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc-ecosystem/grpc-gateway/issues/441"},"grpc-ecosystem/grpc-gateway#441"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OpenAPIv3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc-ecosystem/protoc-gen-grpc-gateway-ts"},"grpc-ecosystem/protoc-gen-grpc-gateway-ts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/gnostic"},"google/gnostic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OpenAPI <-> gRPC"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 OpenAPIv3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc-web"},"grpc/grpc-web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gRPC in Web"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u4ee3\u7406"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/rejoiner"},"google/rejoiner"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Java"),(0,n.kt)("li",{parentName:"ul"},"gRPC -> GraphQL"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ysugimoto/grpc-graphql-gateway"},"ysugimoto/grpc-graphql-gateway")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc-ecosystem/awesome-grpc"},"grpc-ecosystem/awesome-grpc")),(0,n.kt)("li",{parentName:"ul"},"Web",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/protobuf-es"},"bufbuild/protobuf-es"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"protobuf-ts \u76f8\u540c\u4f5c\u8005\uff0c\u53ef\u80fd\u540e\u671f\u5de5\u4f5c\u4f1a\u66f4\u503e\u5411\u4e8e\u8be5\u9879\u76ee"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/protobuf-es/blob/main/docs/migrating.md#from-protobuf-ts"},"from protobuf-ts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 @bufbuild/protobuf \u4f7f\u7528 Well-known types \u800c\u4e0d\u662f\u672c\u5730\u751f\u6210\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e class"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/timostamm/protobuf-ts"},"timostamm/protobuf-ts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 tsc \u751f\u6210\u4ee3\u7801")))))),(0,n.kt)("h2",{id:"lbgatewayproxy"},"LB/Gateway/Proxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/master/src/proto/grpc/lb/v1/load_balancer.proto"},"grpc.lb.v1.LoadBalancer")),(0,n.kt)("li",{parentName:"ul"},"gRPC-aware proxy/Load balance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grpc.io/blog/grpc-load-balancing/"},"https://grpc.io/blog/grpc-load-balancing/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/reverse-proxy/articles/grpc.html"},"https://microsoft.github.io/reverse-proxy/articles/grpc.html")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/liyue201/grpc-lb"},"liyue201/grpc-lb"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f7f\u7528 google.golang.org/grpc/resolver.Register \u6ce8\u518c LB \u5b9e\u73b0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gotway/gotway"},"gotway/gotway")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mmontes11/go-grpc-routes"},"mmontes11/go-grpc-routes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grpc-ecosystem.github.io/grpc-gateway/"},"https://grpc-ecosystem.github.io/grpc-gateway/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.chromium.org/luci/grpc/discovery"},"https://pkg.go.dev/go.chromium.org/luci/grpc/discovery")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mwitkow/grpc-proxy"},"mwitkow/grpc-proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/siderolabs/grpc-proxy"},"siderolabs/grpc-proxy"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"one-to-many proxying and result aggregation."))),(0,n.kt)("li",{parentName:"ul"},"etcd ",(0,n.kt)("a",{parentName:"li",href:"https://etcd.io/docs/latest/op-guide/grpc_proxy/"},"grpc-proxy"))),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wenerme/grpc-protos"},"wenerme/grpc-protos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/practical-api-design-at-netflix-part-1-using-protobuf-fieldmask-35cfdc606518"},"Practical API Design at Netflix, Part 1: Using Protobuf FieldMask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/googleapis/googleapis"},"googleapis/googleapis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cri-api/blob/master/pkg/apis/runtime/v1/api.proto"},"https://github.com/kubernetes/cri-api/blob/master/pkg/apis/runtime/v1/api.proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/api/blob/master/core/v1/generated.proto"},"https://github.com/kubernetes/api/blob/master/core/v1/generated.proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tensorflow/serving/tree/master/tensorflow_serving/apis"},"https://github.com/tensorflow/serving/tree/master/tensorflow_serving/apis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/asim/go-micro/blob/master/api/proto/api.proto"},"https://github.com/asim/go-micro/blob/master/api/proto/api.proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/katib/tree/master/pkg/apis"},"https://github.com/kubeflow/katib/tree/master/pkg/apis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/p4lang/p4runtime/tree/main/proto/p4/v1"},"https://github.com/p4lang/p4runtime/tree/main/proto/p4/v1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/onosproject/onos-api/tree/master/proto"},"https://github.com/onosproject/onos-api/tree/master/proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thanos-io/thanos/search?p=1&q=in%3Apath+proto"},"https://github.com/thanos-io/thanos/search?p=1&q=in%3Apath+proto"))),(0,n.kt)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Kong/insomnia"},"Kong/insomnia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bloomrpc/bloomrpc"},"bloomrpc/bloomrpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GUI for GRPC"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/envoyproxy/protoc-gen-validate"},"envoyproxy/protoc-gen-validate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210\u6821\u9a8c\u89c4\u5219"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/buf"},"bufbuild/buf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/uber/prototool"},"uber/prototool"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5de5\u5177\u96c6 - \u4e0d\u6d3b\u8dc3 - \u63a8\u8350\u4f7f\u7528 buf"),(0,n.kt)("li",{parentName:"ul"},"lint, generate"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/improbable-eng/grpc-web"},"improbable-eng/grpc-web"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gRPC Web \u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Websocket \u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/improbable-eng/ts-protoc-gen"},"improbable-eng/ts-protoc-gen")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/gnostic"},"google/gnostic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OpenAPI <-> gRPC"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 OpenAPIv3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/googleapis/api-linter"},"googleapis/api-linter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tmc/grpcutil"},"tmc/grpcutil")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ktr0731/evans"},"ktr0731/evans"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"expressive universal gRPC client"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/containerd/ttrpc"},"containerd/ttrpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8f7b\u91cf grpc"),(0,n.kt)("li",{parentName:"ul"},"\u975e grpc \u534f\u8bae")))),(0,n.kt)("h2",{id:"ui"},"UI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/uw-labs/bloomrpc"},"uw-labs/bloomrpc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fullstorydev/grpcurl"},"fullstorydev/grpcurl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fullstorydev/grpcui"},"fullstorydev/grpcui"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Go,JS"),(0,n.kt)("li",{parentName:"ul"},"web UI for gRPC"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u57fa\u4e8e grpcurl")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# brew install grpcui\ngo install github.com/fullstorydev/grpcui/cmd/grpcui@latest\ngrpcui -plaintext localhost:12345\n\n# \u4f7f\u7528 \u53cd\u5c04 \u5219\u4e0d\u9700\u8981 proto \u4fe1\u606f\ngrpcui -use-reflection -base-path /api/rpc -plaintext localhost:18080\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rogchap/wombat"},"rogchap/wombat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/warmuuh/milkman"},"warmuuh/milkman")),(0,n.kt)("li",{parentName:"ul"},"IntelliJ IDEA v2021.3+ HTTP Client \u652f\u6301 gRPC")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"### helloworld\nGRPC localhost:8888/helloworld.Greeter/SayHello\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"### health\nGRPC localhost:8888/grpc.health.v1.Health/Check\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/master/doc/server-reflection.md"},"Reflection"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"grpc.reflection.v1.ServerReflection"),(0,n.kt)("li",{parentName:"ul"},"grpc.reflection.v1alpha.ServerReflection"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/connect-grpcreflect-go"},"bufbuild/connect-grpcreflect-go")))),(0,n.kt)("li",{parentName:"ul"},"grpc.health.v1.Health")),(0,n.kt)("h2",{id:"health"},"Health"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/master/doc/health-checking.md"},"https://github.com/grpc/grpc/blob/master/doc/health-checking.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grpc-ecosystem/grpc-health-probe"},"grpc-ecosystem/grpc-health-probe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apssouza22/grpc-production-go"},"apssouza22/grpc-production-go"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\npackage grpc.health.v1;\n\nmessage HealthCheckRequest {\n  string service = 1;\n}\n\nmessage HealthCheckResponse {\n  enum ServingStatus {\n    UNKNOWN = 0;\n    SERVING = 1;\n    NOT_SERVING = 2;\n    SERVICE_UNKNOWN = 3;  // Used only by the Watch method.\n  }\n  ServingStatus status = 1;\n}\n\nservice Health {\n  rpc Check(HealthCheckRequest) returns (HealthCheckResponse);\n\n  rpc Watch(HealthCheckRequest) returns (stream HealthCheckResponse);\n}\n')),(0,n.kt)("h2",{id:"rpc"},"RPC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/smallnest/rpcx"},"smallnest/rpcx"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u56fd\u5185\u9879\u76ee"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/twitchtv/twirp"},"twitchtv/twirp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 grpc \u7684\u670d\u52a1\u5b9a\u4e49\u548c\u5e8f\u5217\u5316")))),(0,n.kt)("h2",{id:"gen"},"gen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"protoc ",(0,n.kt)("a",{parentName:"li",href:"/notes/service/api/protoc#plugins"},"plugins")),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-go-grpc"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-grpc"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-grpc-gateway"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-grpc-java"),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-grpc-web",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/planetscale/vtprotobuf"},"planetscale/vtprotobuf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f18\u5316\u57fa\u4e8e gogo - \u4f7f\u7528 APIv2"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Pool"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u52a0\u4e00\u4e9b\u7b80\u5355\u7684\u8f85\u52a9\u65b9\u6cd5"))))),(0,n.kt)("li",{parentName:"ul"},"protoc-gen-go-drpc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/storj/drpc"},"storj/drpc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u66f4\u52a0\u7b80\u5355\u8f7b\u91cf\u7684 RPC \u534f\u8bae")))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go install google.golang.org/protobuf/cmd/protoc-gen-go@latest\ngo install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest\n\ngo install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest\ngo install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest\ngo install github.com/grpc-ecosystem/protoc-gen-grpc-gateway-ts@latest\ngo install github.com/envoyproxy/protoc-gen-validate@latest\n\n#\ngo install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@latest\ngo install github.com/planetscale/vtprotobuf/cmd/protoc-gen-go-vtproto@latest\ngo install github.com/srikrsna/protoc-gen-gotag@latest\ngo install github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema@latest\n\n# \u8c03\u7528\u5355\u4e2a \u63d2\u4ef6\nprotoc -I . helloworld.proto --doc_out .\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"version: v1\nmanaged:\n  enabled: true\n  go_package_prefix:\n    default: github.com/wenerme/torrenti/pkg/apis\n    except:\n      - buf.build/x/bundle\n      - buf.build/googleapis/googleapis\n      - buf.build/envoyproxy/protoc-gen-validate\nplugins:\n  - name: go\n    out: .\n    opt: paths=source_relative\n  #  - name: gotag\n  #    out: .\n  #    opt: paths=source_relative\n  - name: go-grpc\n    out: .\n    opt: paths=source_relative,require_unimplemented_servers=true\n  - name: grpc-gateway\n    out: .\n    opt:\n      - paths=source_relative\n      - generate_unbound_methods=true\n      #- grpc_api_configuration=path/to/config.yaml\n      #- standalone=true\n  - name: openapiv2\n    out: openapiv2\n  - name: grpc-gateway-ts\n    out: gen/web/api\n    opt: paths=source_relative\n\n  - name: doc\n    out: gen/doc\n    strategy: all\n    # <FORMAT>|<TEMPLATE_FILENAME>,<OUT_FILENAME>[,default|source_relative]\n    # FORMAT=docbook,html,markdown,json\n    # TEMPLATE_FILENAME Go template \u6587\u4ef6\n    # source_relative \u8f93\u51fa\u57fa\u4e8e input \u7684\u76f8\u5bf9\u8def\u5f84\n    opt: markdown,proto.md\n\n - name: micro # go micro - web proxy & service\n   out: .\n   opt:\n     - paths=source_relative\n     - require_unimplemented_servers=false\n\n - name: validate\n   out: .\n   opt:\n     - lang=go\n     - paths=source_relative\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\npackage acme.weather.v1;\n\noption go_package = "github.com/acme/weather/gen/proto/go/acme/weather/v1;weatherv1";\noption java_multiple_files = true;\noption java_outer_classname = "WeatherProto";\noption java_package = "com.acme.weather.v1";\n')))}s.isMDXComponent=!0}}]);