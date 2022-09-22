"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80807],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return N}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),k=u(a),N=l,s=k["".concat(p,".").concat(N)]||k[N]||c[N]||n;return a?r.createElement(s,i(i({ref:t},o),{},{components:a})):r.createElement(s,i({ref:t},o))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=k;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:l,i[1]=m;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7909:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return c}});var r=a(96600),l=a(27279),n=(a(59496),a(49613)),i=["components"],m={title:"go-micro"},p="go-micro",u={unversionedId:"languages/go/lib/go-micro",id:"languages/go/lib/go-micro",title:"go-micro",description:"- asim/go-micro",source:"@site/../notes/languages/go/lib/go-micro.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/go-micro",permalink:"/notes/languages/go/lib/go-micro",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/lib/go-micro.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655100912,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{title:"go-micro"},sidebar:"docs",previous:{title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",permalink:"/notes/languages/go/lib/go-lib-faq"},next:{title:"go-zero",permalink:"/notes/languages/go/lib/go-zero"}},o={},c=[{value:"Components",id:"components",level:2},{value:"RPC",id:"rpc",level:2},{value:"protoc-gen-micro",id:"protoc-gen-micro",level:2},{value:"asim/go-micro vs micro/go-micro",id:"asimgo-micro-vs-microgo-micro",level:2}],k={toc:c};function N(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"go-micro"},"go-micro"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/asim/go-micro"},"asim/go-micro"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u672c\u63a5\u53e3\u5b9a\u4e49+Plugins \u63d0\u4f9b\u5e73\u53f0\u76f8\u5173\u5b9e\u73b0"))),(0,n.kt)("li",{parentName:"ul"},"Transport http :52980"),(0,n.kt)("li",{parentName:"ul"},"Broker http :52981"),(0,n.kt)("li",{parentName:"ul"},"GRPC server :53915"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/m3o/m3o"},"m3o/m3o")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/micro/services"},"micro/services"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e micro \u7684\u670d\u52a1\u793a\u4f8b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.infoq.com/podcasts/microservices-go-micro-paas3/"},"Asim Aslam on Microservices, go-micro, and PaaS 3.0")),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u9879\u76ee",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/go-cloud"},"google/go-cloud"))))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"gRPC \u4e0d\u652f\u6301 Client Stream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/asim/go-micro/issues/2212"},"asim/go-micro#2212")))),(0,n.kt)("li",{parentName:"ul"},"gRPC \u670d\u52a1\u7aef\u65e0\u6cd5\u63a5\u6536 metadata",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/asim/go-micro/issues/574"},"asim/go-micro#574")))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport "go-micro.dev/v4"\n\nfunc main()  {\n  // create a new service\n  service := micro.NewService(\n      micro.Name("helloworld"),\n  )\n\n  // initialise flags\n  service.Init()\n\n  // start the service\n  service.Run()\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# micro \u5feb\u901f\u751f\u6210\u5de5\u5177\n# go install github.com/asim/go-micro/cmd/gomu@latest\n\ngo install go-micro.dev/v4/cmd/micro@master\nmicro generate skaffold\n\nmicro call helloworld Helloworld.Call \'{"name": "John"}\'\n')),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5206\u79bb New \u548c Init",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New \u63a5\u6536 Option \u4f46\u4e0d\u4f1a\u62a5\u9519"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u5f88\u591a\u914d\u7f6e\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u52a8\u6001")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"api - HTTP API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"api.Api - mux"),(0,n.kt)("li",{parentName:"ul"},"api.Service",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a Endpoint \u548c\u591a\u4e2a registry.Service"),(0,n.kt)("li",{parentName:"ul"},"Path -selector-> registry.Service"))),(0,n.kt)("li",{parentName:"ul"},"api.Endpoint",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5165\u53e3, Host+Method+Path"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c Path \u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"^")," \u5f00\u5934\u5219\u4e3a pcre"))),(0,n.kt)("li",{parentName:"ul"},"handler - http.Handler - \u5b9e\u9645\u5904\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"api - http <-> registry.Service"),(0,n.kt)("li",{parentName:"ul"},"event - http <-> client.Publish"),(0,n.kt)("li",{parentName:"ul"},"http - http <-> api.Service"),(0,n.kt)("li",{parentName:"ul"},"rpc - http <-proto/json-> api.Service -> registry.Service"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9 body \u548c\u670d\u52a1\u7684\u8bc6\u522b\u5904\u7406\u4e0d\u540c"))),(0,n.kt)("li",{parentName:"ul"},"server - API Gateway - path -> http.Handler",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"http - HTTP Server"))),(0,n.kt)("li",{parentName:"ul"},"router",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"router.Router",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6620\u5c04 http.Request -> api.Service"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c endpoint"))),(0,n.kt)("li",{parentName:"ul"},"registry",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"watch registry.Registry \u6240\u6709 Service \u7684\u6240\u6709 Endpoint"),(0,n.kt)("li",{parentName:"ul"},"\u7f51\u5173\u6027\u8d28"))))),(0,n.kt)("li",{parentName:"ul"},"resolver - http.Request -> resolver.Endpoint/Host+Method+Path",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u8bf7\u6c42\u4fe1\u606f"))))),(0,n.kt)("li",{parentName:"ul"},"auth - AuthN + AuthZ - API \u8d44\u6e90\u89d2\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"broker - PubSub",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f02\u6b65"))),(0,n.kt)("li",{parentName:"ul"},"events - \u4e8b\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Stream+Store"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 ACK"),(0,n.kt)("li",{parentName:"ul"},"nats, redis"))),(0,n.kt)("li",{parentName:"ul"},"cache - \u7f13\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"kv+\u65f6\u6548"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u6709 Get+Put+Delete \u64cd\u4f5c"))),(0,n.kt)("li",{parentName:"ul"},"client - \u5ba2\u6237\u7aef"),(0,n.kt)("li",{parentName:"ul"},"cmd - \u63d0\u4f9b\u547d\u4ee4\u884c\u5165\u53e3\u5904\u7406",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6301\u6709\u6240\u6709\u670d\u52a1\u7684\u5b9e\u73b0 - \u5168\u5c40\u4e0a\u4e0b\u6587"),(0,n.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u76f8\u5173\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"Before - \u5e94\u7528\u914d\u7f6e\u3001Init \u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Action \u6ca1\u6709\u4efb\u4f55\u64cd\u4f5c"))),(0,n.kt)("li",{parentName:"ul"},"codec - \u7f16\u7801"),(0,n.kt)("li",{parentName:"ul"},"config - \u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"encoder.Encoder - \u7f16\u7801\u89e3\u7801 - json,yaml,xml \u7b49"),(0,n.kt)("li",{parentName:"ul"},"source.Source - \u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u9879")," \u6765\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6307\u5411 path/\u8def\u5f84/\u6587\u4ef6/\u73af\u5883\u53d8\u91cf/flag"),(0,n.kt)("li",{parentName:"ul"},"source.ChangeSet - \u914d\u7f6e\u5185\u5bb9"))),(0,n.kt)("li",{parentName:"ul"},"loader.Loader - \u52a0\u8f7d\u5408\u5e76 source"),(0,n.kt)("li",{parentName:"ul"},"reader.Reader - \u5408\u5e76 source.ChangeSet",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 json \u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"format -> encoder.Encoder"),(0,n.kt)("li",{parentName:"ul"},"reader.Values - \u652f\u6301 get/set/del/scan \u7684\u914d\u7f6e\u9879"),(0,n.kt)("li",{parentName:"ul"},"reader.Value - \u914d\u7f6e\u9879\u503c"))))),(0,n.kt)("li",{parentName:"ul"},"debug",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"stats"),(0,n.kt)("li",{parentName:"ul"},"trace"),(0,n.kt)("li",{parentName:"ul"},"profile"))),(0,n.kt)("li",{parentName:"ul"},"errors"),(0,n.kt)("li",{parentName:"ul"},"logger"),(0,n.kt)("li",{parentName:"ul"},"metadata - KV \u5143\u6570\u636e - \u5176\u4ed6\u7528\u5230\u5143\u6570\u636e\u7684\u5730\u65b9\u90fd\u4f1a\u8f6c\u4e3a\u8be5\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"plugins - \u63d2\u4ef6\u4f53\u7cfb",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"plugins.Plugin - go plugin \u63a5\u53e3 - go build -buildmode=plugin"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7c7b\u578b broker, client, registry, selector, server, transport"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6ce8\u518c\u5230 cmd.DefaultXxx"))),(0,n.kt)("li",{parentName:"ul"},"registry - Service/\u670d\u52a1 \u6ce8\u518c\u4e2d\u5fc3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"registry.Service - \u6ce8\u518c\u7684\u670d\u52a1\u4fe1\u606f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u7684\u540d\u5b57\u4e3a server.DefaultName - \u4e5f\u5c31\u662f\u670d\u52a1\u7ef4\u5ea6 / micro.Service \u7ef4\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u591a\u4e2a Endpoint, Node"))),(0,n.kt)("li",{parentName:"ul"},"registry.Endpoint - \u7ec8\u7aef",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"server.Handler - \u6bcf\u4e2a\u65b9\u6cd5\u4f1a\u6ce8\u518c\u4e3a\u4e00\u4e2a Endpoint",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"relfect.Type Method"),(0,n.kt)("li",{parentName:"ul"},"name=type.method"))),(0,n.kt)("li",{parentName:"ul"},"server.Subscriber - \u6bcf\u4e2a Subscriber \u65b9\u6cd5 \u4f1a\u6ce8\u518c\u4e3a\u4e00\u4e2a Endpoint",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Func, reflect.Type.Name+.method.Name"))))),(0,n.kt)("li",{parentName:"ul"},"registry.Node"))),(0,n.kt)("li",{parentName:"ul"},"server - RPC \u670d\u52a1\u7aef",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"server.Server"),(0,n.kt)("li",{parentName:"ul"},"server.Router - \u7c7b\u4f3c http.Handler+mux \u89d2\u8272"),(0,n.kt)("li",{parentName:"ul"},"server.Request"),(0,n.kt)("li",{parentName:"ul"},"server.Response"),(0,n.kt)("li",{parentName:"ul"},"server.Message"),(0,n.kt)("li",{parentName:"ul"},"server.Stream"),(0,n.kt)("li",{parentName:"ul"},"server.Handler - opaque handler - \u5b9e\u73b0\u76f8\u5173",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406 Request -> Response"))),(0,n.kt)("li",{parentName:"ul"},"server.Subscriber - opaque subscriber - \u5b9e\u73b0\u76f8\u5173",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406 Message"),(0,n.kt)("li",{parentName:"ul"},"func",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"func(context.Context,Type)"))),(0,n.kt)("li",{parentName:"ul"},"struct",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"func(Type)"),(0,n.kt)("li",{parentName:"ul"},"func(context.Context,Type)"),(0,n.kt)("li",{parentName:"ul"},"func(context.Context,requestType,responseType) - grpc - \u4ee5 responseType \u4f5c\u4e3a Request"))))))),(0,n.kt)("li",{parentName:"ul"},"selector - \u670d\u52a1\u9009\u62e9\u673a\u5236"),(0,n.kt)("li",{parentName:"ul"},"transport - \u4f20\u8f93\u534f\u8bae\u62bd\u8c61"),(0,n.kt)("li",{parentName:"ul"},"runtime - \u8fd0\u884c\u65f6"),(0,n.kt)("li",{parentName:"ul"},"selector - \u8d1f\u8f7d\u9009\u62e9"),(0,n.kt)("li",{parentName:"ul"},"store - \u6570\u636e\u5b58\u50a8/\u5bf9\u8c61\u5b58\u50a8/KV \u5b58\u50a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"redis, memcached, mysql, consul, file(bolt),cockroach"),(0,n.kt)("li",{parentName:"ul"},"\u6709 database, table \u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u6709 offset,limit \u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u9ed8\u8ba4\u8fd4\u56de\u591a\u503c"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5305\u542b key,value,metadata,expire_at"),(0,n.kt)("li",{parentName:"ul"},"Read+Write+Delete+List \u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u73b0\u5728\u5df2\u7ecf\u6ca1\u6709 BlobStore \u4e86",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/asim/go-micro/blob/09d6d0e2d22b7d342de713b762b982afe93396c6/store/s3/s3.go"},"s3.go")))))),(0,n.kt)("li",{parentName:"ul"},"sync - \u5206\u5e03\u5f0f\u9501"),(0,n.kt)("li",{parentName:"ul"},"transport - \u4f20\u8f93\u5c42\u62bd\u8c61"),(0,n.kt)("li",{parentName:"ul"},"web",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"web.Service - path -> http.Handler",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6ce8\u518c"),(0,n.kt)("li",{parentName:"ul"},"\u6301\u6709 cmd.Cmd - \u5305\u542b\u6574\u4f53\u4e0a\u4e0b\u6587"),(0,n.kt)("li",{parentName:"ul"},"http.ServeMux"),(0,n.kt)("li",{parentName:"ul"},"http.Client"))))),(0,n.kt)("li",{parentName:"ul"},"micro - \u5fae\u670d\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"micro.Service - micro \u5e73\u53f0\u670d\u52a1\u89c4\u8303/Pattern",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6ce8\u518c"),(0,n.kt)("li",{parentName:"ul"},"client.Client"),(0,n.kt)("li",{parentName:"ul"},"server.Server"),(0,n.kt)("li",{parentName:"ul"},"Init",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u63d2\u4ef6 MICRO_PLUGIN"),(0,n.kt)("li",{parentName:"ul"},"cmd.Cmd.Init"),(0,n.kt)("li",{parentName:"ul"},"store.Store.Init"))),(0,n.kt)("li",{parentName:"ul"},"Start",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Server.Start"))),(0,n.kt)("li",{parentName:"ul"},"Run",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Client debug.Handler"),(0,n.kt)("li",{parentName:"ul"},"Profile.Start"),(0,n.kt)("li",{parentName:"ul"},"Start"),(0,n.kt)("li",{parentName:"ul"},"Context.Done()"),(0,n.kt)("li",{parentName:"ul"},"Stop"))))),(0,n.kt)("li",{parentName:"ul"},"micro.Function",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ee7\u627f micro.Service"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u8c03\u7528"))))),(0,n.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u7ec4\u4ef6\u90fd\u6709 Default"),(0,n.kt)("li",{parentName:"ul"},"Service",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"micro.Service - micro \u5e73\u53f0\u670d\u52a1\u89c4\u8303/Pattern"),(0,n.kt)("li",{parentName:"ul"},"micro.Function"),(0,n.kt)("li",{parentName:"ul"},"web.Service - path -> http.Handler"),(0,n.kt)("li",{parentName:"ul"},"api.Service - Endpoint -> rpc Service"),(0,n.kt)("li",{parentName:"ul"},"registry.Service - \u6ce8\u518c\u7684\u670d\u52a1\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"runtime.Service - \u8fd0\u884c\u65f6\u76f8\u5173\u670d\u52a1")))),(0,n.kt)("h2",{id:"rpc"},"RPC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"micro metadata \u4e0a\u4e0b\u6587\u5185\u5bb9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Remote"),(0,n.kt)("li",{parentName:"ul"},":authority"),(0,n.kt)("li",{parentName:"ul"},"content-type"),(0,n.kt)("li",{parentName:"ul"},"user-agent"))),(0,n.kt)("li",{parentName:"ul"},"grpc \u65f6\u5ba2\u6237\u7aef\u4f1a\u5c06 micro metadata \u7684\u6570\u636e\u8f6c\u5230 grpc \u5934 - \u5982\u679c\u8981\u6dfb\u52a0\u6388\u6743\u5219\u4f7f\u7528 micro metadata"),(0,n.kt)("li",{parentName:"ul"},"client",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WithServiceToken - authWrapper \u4f1a\u53d6 metadata \u91cc\u7684 Authorization"),(0,n.kt)("li",{parentName:"ul"},"\u6709 Auth \u4f1a\u7528\u5230 metadata \u91cc\u7684 Micro-Namespace"))),(0,n.kt)("li",{parentName:"ul"},"HeaderPrefix \u9ed8\u8ba4 Micro-",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Namespace"),(0,n.kt)("li",{parentName:"ul"},"From-Service")))),(0,n.kt)("h2",{id:"protoc-gen-micro"},"protoc-gen-micro"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"grpc \u9002\u914d micro")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# go install github.com/asim/go-micro/cmd/protoc-gen-micro/v3@latest\ngo install go-micro.dev/v4/cmd/protoc-gen-micro@latest\n")),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"asimgo-micro-vs-microgo-micro"},"asim/go-micro vs micro/go-micro"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"asim/go-micro",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u9879\u76ee"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u53d8\u5316\u5f88\u5927"),(0,n.kt)("li",{parentName:"ul"},"\u6d89\u53ca\u5230 License \u53d8\u5316"),(0,n.kt)("li",{parentName:"ul"},"micro/go-micro -> asim/go-micro"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/micro/go-micro/v3"},"micro/go-micro"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u516c\u53f8\u9879\u76ee - micro.mu"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u548c\u5b9e\u73b0\u6ee1\u8db3\u516c\u53f8\u9700\u8981")))))}N.isMDXComponent=!0}}]);