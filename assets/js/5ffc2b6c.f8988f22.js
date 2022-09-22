"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81922],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13456:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={title:"gRPC Go"},f="gRPC Go",g={unversionedId:"service/api/grpc-go",id:"service/api/grpc-go",title:"gRPC Go",description:"- A new Go API for Protocol Buffers",source:"@site/../notes/service/api/grpc-go.md",sourceDirName:"service/api",slug:"/service/api/grpc-go",permalink:"/notes/service/api/grpc-go",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/grpc-go.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656950348,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"gRPC Go"},sidebar:"docs",previous:{title:"grpc-gateway",permalink:"/notes/service/api/grpc-gateway"},next:{title:"grpc-node",permalink:"/notes/service/api/grpc-node"}},d={},v=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"encoding",id:"encoding",level:3}],b={toc:v};function y(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"grpc-go"}),"gRPC Go"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://go.dev/blog/protobuf-apiv2"}),"A new Go API for Protocol Buffers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2020-03-02"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e reflect"),(0,n.kt)("li",{parentName:"ul"},"APIv2 google.golang.org/protobuf"),(0,n.kt)("li",{parentName:"ul"},"APIv1 github.com/golang/protobuf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.4 \u57fa\u4e8e APIv2 \u5b9e\u73b0"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/planetscale/vtprotobuf"}),"planetscale/vtprotobuf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e gogo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://vitess.io/blog/2021-06-03-a-new-protobuf-generator-for-go/"}),"A new Protocol Buffers generator for Go")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/srikrsna/protoc-gen-gotag"}),"srikrsna/protoc-gen-gotag")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/golang/protobuf/issues/52"}),"golang/protobuf#52"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 struct tag"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/favadi/protoc-go-inject-tag"}),"favadi/protoc-go-inject-tag")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf-go"}),"protocolbuffers/protobuf-go"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# debug\nexport GRPC_GO_LOG_VERBOSITY_LEVEL=99\nexport GRPC_GO_LOG_SEVERITY_LEVEL=info\n")),(0,n.kt)("h2",u({},{id:"\u5b9e\u73b0"}),"\u5b9e\u73b0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method - ",(0,n.kt)("inlineCode",{parentName:"li"},'"/<service>/<method>"'))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-go"}),"type ClientConn interface {\n  // \u8bf7\u6c42\n    Invoke(ctx context.Context, method string, args interface{}, reply interface{}, opts ...CallOption) error\n    NewStream(ctx context.Context, desc *StreamDesc, method string, opts ...CallOption) (ClientStream, error)\n}\n\n// \u751f\u6210\u7684 Stream \u63a5\u53e3 - BiStream - Send+Recv\n// <Service>_<Method>Client for Stream\ntype Service_MethodClient interface {\n  // \u6839\u636e Stream \u751f\u6210\u7684 \u8f93\u5165\u8f93\u51fa\n  // ClientStream.SendMsg(m)\n    Send(*ServerReflectionRequest) error\n  // ClientStream.RecvMsg(m)\n    Recv() (*ServerReflectionResponse, error)\n    grpc.ClientStream\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-go"}),"// grpc.Server \u66b4\u9732\u7684\u670d\u52a1\u4fe1\u606f\ntype ServiceInfo struct {\n    Methods []MethodInfo\n    // ServiceDesc\n    Metadata interface{}\n}\ntype MethodInfo struct {\n    Name string\n    IsClientStream bool\n    IsServerStream bool\n}\n\n// \u751f\u6210\u7684 Desc \u4fe1\u606f\n\ntype MethodDesc struct {\n    MethodName string\n    Handler    methodHandler\n}\ntype ServiceDesc struct {\n    ServiceName string\n  // \u6307\u5411 service \u63a5\u53e3\u5b9e\u73b0 - \u68c0\u6d4b\u63a5\u53e3\u662f\u5426\u5339\u914d\n    HandlerType interface{}\n    Methods     []MethodDesc\n    Streams     []StreamDesc\n    Metadata    interface{}\n}\n\ntype StreamHandler func(srv interface{}, stream ServerStream) error\ntype StreamDesc struct {\n    // \u6ce8\u518c\u65f6\u4f7f\u7528  \u540c Method \u540d\u5b57\n    StreamName string\n    Handler    StreamHandler\n\n    // \u7528\u4e8e NewClientStream,ClientConn.NewStream\n    ServerStreams bool\n    ClientStreams bool\n}\n\n// \u62e6\u622a\u5904\u7406\ntype UnaryClientInterceptor func(ctx context.Context, method string, req, reply interface{}, cc *ClientConn, invoker UnaryInvoker, opts ...CallOption) error\n\n// \u5355\u6b21\u8bf7\u6c42\u4f7f\u7528 clientStream \u903b\u8f91\u5b9e\u73b0\nvar unaryStreamDesc = &StreamDesc{ServerStreams: false, ClientStreams: false}\nfunc invoke(ctx context.Context, method string, req, reply interface{}, cc *ClientConn, opts ...CallOption) error {\n    cs, err := newClientStream(ctx, unaryStreamDesc, cc, method, opts...)\n    if err != nil {\n        return err\n    }\n    if err := cs.SendMsg(req); err != nil {\n        return err\n    }\n    return cs.RecvMsg(reply)\n}\n")),(0,n.kt)("h3",u({},{id:"encoding"}),"encoding"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"google.golang.org/grpc/encoding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RegisterCompressor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gzip"))),(0,n.kt)("li",{parentName:"ul"},"RegisterCodec",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"proto",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github.com/golang/protobuf/proto")))))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-go"}),"type Codec interface {\n    Name() string\n    Marshal(v interface{}) ([]byte, error)\n    Unmarshal(data []byte, v interface{}) error\n}\n\ntype Compressor interface {\n    Name() string\n    Compress(w io.Writer) (io.WriteCloser, error)\n    Decompress(r io.Reader) (io.Reader, error)\n  DecompressedSize(compressedBytes []byte) int // \u53ef\u9009\u5b9e\u73b0\n}\n\n// proto\n\n")))}y.isMDXComponent=!0}}]);