"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90238],{23745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(96600),a=n(27279),l=(n(59496),n(3905)),o=["components"],c={title:"Connect"},i=void 0,u={unversionedId:"service/api/connect",id:"service/api/connect",title:"Connect",description:"- https://connect.build/",source:"@site/notes/service/api/connect.md",sourceDirName:"service/api",slug:"/service/api/connect",permalink:"/notes/service/api/connect",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/connect.md",tags:[],version:"current",frontMatter:{title:"Connect"},sidebar:"docs",previous:{title:"CBOR",permalink:"/notes/service/api/cbor"},next:{title:"Dubbo",permalink:"/notes/service/api/dubbo"}},p={},m=[{value:"Connect \u534f\u8bae",id:"connect-\u534f\u8bae",level:2},{value:"connect-web",id:"connect-web",level:2},{value:"connect-go",id:"connect-go",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"Why Connect",id:"why-connect",level:2}],s={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://connect.build/"},"https://connect.build/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gRPC \u7ade\u54c1"),(0,l.kt)("li",{parentName:"ul"},"\u517c\u5bb9 gRPC, gRPC-Web \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 bi-streaming - \u4f7f\u7528 gRPC \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 JSON- \u548c binary-encoded Protobuf"),(0,l.kt)("li",{parentName:"ul"},"Connect \u81ea\u8eab\u534f\u8bae - \u57fa\u4e8e POST - application/connect+proto",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Stream - \u4e00\u884c\u4e00\u4e2a\u8bf7\u6c42\uff0c\u7c7b\u4f3c SSE"),(0,l.kt)("li",{parentName:"ul"},"\u534f\u8bae\u548c\u5b9e\u73b0\u66f4\u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 HTTP1"))),(0,l.kt)("li",{parentName:"ul"},"\u9884\u8ba1\u652f\u6301 go, ts, express, rails, django, laravel"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://connect.build/docs/protocol/"},"Connect Protocol Reference")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/protobuf-es"},"bufbuild/protobuf-es"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JS PB \u5b9e\u73b0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/connect-crosstest"},"bufbuild/connect-crosstest"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6d4b\u8bd5")))))),(0,l.kt)("h2",{id:"connect-\u534f\u8bae"},"Connect \u534f\u8bae"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"POST /<Package>.<Service>/<Method>\n")),(0,l.kt)("h2",{id:"connect-web"},"connect-web"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/connect-web"},"bufbuild/connect-web")),(0,l.kt)("li",{parentName:"ul"},"@bufbuild/connect-web",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"16kB/5kB")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @bufbuild/protoc-gen-es @bufbuild/protoc-gen-connect-web\n\nPATH=$PATH:$(pwd)/node_modules/.bin\n\n")),(0,l.kt)("h2",{id:"connect-go"},"connect-go"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bufbuild/connect-go"},"bufbuild/connect-go"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 net/http"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u4f7f\u7528\u6cdb\u578b"),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf1f Client \u548c Server \u63a5\u53e3\u76f8\u540c - \u65b9\u4fbf\u64cd\u4f5c")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u57fa\u4e8e POST \u7684 connect \u534f\u8bae\ncurl \\\n  --header "Content-Type: application/json" \\\n  --data \'{"sentence": "I feel happy."}\' \\\n  https://demo.connect.build/buf.connect.demo.eliza.v1.ElizaService/Say\n\n# \u517c\u5bb9 gRPC \u534f\u8bae\ngrpcurl \\\n  -d \'{"sentence": "I feel happy."}\' \\\n  demo.connect.build:443 \\\n  buf.connect.demo.eliza.v1.ElizaService/Say\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/bufbuild/buf/cmd/buf@latest\ngo install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest\ngo install google.golang.org/protobuf/cmd/protoc-gen-go@latest\ngo install github.com/bufbuild/connect-go/cmd/protoc-gen-connect-go@latest\ngo install github.com/bufbuild/protobuf-es/cmd/protoc-gen-es@latest\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="buf.gen.yaml:"',title:'"buf.gen.yaml:"'},"version: v1\nplugins:\n  - name: go\n    out: gen\n    opt: paths=source_relative\n  - name: connect-go\n    out: gen\n    opt: paths=source_relative\n")),(0,l.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Handler - \u5f53\u4e2a RPC \u65b9\u6cd5\u5904\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 Connect, gRPC, gRPC-Web \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b  ServeHTTP"),(0,l.kt)("li",{parentName:"ul"},"\u6784\u9020",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NewBidiStreamHandler"),(0,l.kt)("li",{parentName:"ul"},"NewClientStreamHandler"),(0,l.kt)("li",{parentName:"ul"},"NewServerStreamHandler"),(0,l.kt)("li",{parentName:"ul"},"NewUnaryHandler")))))),(0,l.kt)("h2",{id:"why-connect"},"Why Connect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"gRPC \u56e0\u4e3a\u8003\u8651 Google \u5185\u90e8\u4f7f\u7528\u548c\u5f00\u6e90\u793e\u533a\u4f7f\u7528\uff0c\u4e00\u4e9b\u8bbe\u8ba1\u4e0a\u5f88\u4e71\u5f88\u5947\u602a"),(0,l.kt)("li",{parentName:"ul"},"gRPC \u5c0f\u7248\u672c\u4e5f\u53ef\u80fd\u4e0d\u51fa\u73b0\u517c\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"gRPC \u5728 Web \u73af\u5883\u975e\u5e38\u9ebb\u70e6"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42 HTTP/2 Trailer - \u5bf9\u4f7f\u7528\u73af\u5883\u3001\u5b9e\u73b0\u8981\u6c42\u82db\u523b"),(0,l.kt)("li",{parentName:"ul"},"vs golang grpc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u517c\u5bb9 net/http"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u590d\u6742")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://buf.build/blog/connect-a-better-grpc"},"https://buf.build/blog/connect-a-better-grpc"))))}b.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(n),b=a,g=s["".concat(i,".").concat(b)]||s[b]||p[b]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);