"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15237],{94048:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var n=a(96600),r=a(27279),l=(a(59496),a(3905)),i=["components"],p={title:"go-kit"},u=void 0,o={unversionedId:"languages/go/lib/go-kit",id:"languages/go/lib/go-kit",title:"go-kit",description:"- go-kit/kit",source:"@site/notes/languages/go/lib/go-kit.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/go-kit",permalink:"/notes/languages/go/lib/go-kit",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/go-kit.md",tags:[],version:"current",frontMatter:{title:"go-kit"},sidebar:"docs",previous:{title:"go-cloud",permalink:"/notes/languages/go/lib/go-cloud"},next:{title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",permalink:"/notes/languages/go/lib/go-lib-faq"}},m={},k=[{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2}],s={toc:k};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/go-kit/kit"},"go-kit/kit"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4e0d\u6d3b\u8dc3\u3001\u8bbe\u8ba1\u53ef\u4f5c\u53c2\u8003"),(0,l.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u5f00\u53d1\u5957\u4ef6/\u5e93"),(0,l.kt)("li",{parentName:"ul"},"Unopinioned"),(0,l.kt)("li",{parentName:"ul"},"\u4e09\u5c42",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Transport"),(0,l.kt)("li",{parentName:"ul"},"Endpoint"),(0,l.kt)("li",{parentName:"ul"},"Service")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Layer"),(0,l.kt)("th",{parentName:"tr",align:null},"Impl"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transport"),(0,l.kt)("td",{parentName:"tr",align:null},"http",(0,l.kt)("br",null),"nats",(0,l.kt)("br",null),"jsonrpc",(0,l.kt)("br",null),"grpc",(0,l.kt)("br",null),"thrift",(0,l.kt)("br",null),"amqp",(0,l.kt)("br",null),"httprp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"metrics",(0,l.kt)("br",null),"balance",(0,l.kt)("br",null),"limiting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Service"),(0,l.kt)("td",{parentName:"tr",align:null},"business analytics",(0,l.kt)("br",null),"application logging",(0,l.kt)("br",null),"service metrics",(0,l.kt)("br",null),"business login")))),(0,l.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"auth - \u8ba4\u8bc1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"basic"),(0,l.kt)("li",{parentName:"ul"},"casbin - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/casbin/casbin"},"casbin/casbin")," \u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"jwt"))),(0,l.kt)("li",{parentName:"ul"},"circuitbreaker - \u7194\u65ad",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Gobreaker - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sony/gobreaker"},"sony/gobreaker")),(0,l.kt)("li",{parentName:"ul"},"HandyBreaker - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/streadway/handy"},"streadway/handy/breaker")),(0,l.kt)("li",{parentName:"ul"},"Hystrix - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/afex/hystrix-go"},"afex/hystrix-go")))),(0,l.kt)("li",{parentName:"ul"},"endpoint - \u7ec8\u7aef\u63a5\u53e3\u5b9a\u4e49",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Endpoint - ",(0,l.kt)("inlineCode",{parentName:"li"},"func(ctx context.Context, request interface{}) (response interface{}, err error)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42 -> \u54cd\u5e94"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u5176\u4ed6\u529f\u80fd\u901a\u8fc7\u5c01\u88c5\u8be5\u63a5\u53e3\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8868\u793a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef"))),(0,l.kt)("li",{parentName:"ul"},"Middleware - ",(0,l.kt)("inlineCode",{parentName:"li"},"func(Endpoint) Endpoint")))),(0,l.kt)("li",{parentName:"ul"},"log - \u65e5\u5fd7",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Logger\uff0cLoggerFunc - \u65e5\u5fd7\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"level - \u65e5\u5fd7\u7ea7\u522b Debug Info Warn Error"),(0,l.kt)("li",{parentName:"ul"},"logrus - logrus \u65e5\u5fd7\u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"syslog - syslog \u65e5\u5fd7"),(0,l.kt)("li",{parentName:"ul"},"term - \u7ec8\u7aef\u65e5\u5fd7\uff0c\u652f\u6301\u989c\u8272"),(0,l.kt)("li",{parentName:"ul"},"zap - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/uber-go/zap"},"uber-go/zap")," \u7ed3\u6784\u5316\u65e5\u5fd7"))),(0,l.kt)("li",{parentName:"ul"},"metrics - \u6307\u6807\u76d1\u63a7",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Counter\u3001Gauge\u3001Histogram\u3001Timer - \u6307\u6807\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"expvar"),(0,l.kt)("li",{parentName:"ul"},"prometheus"),(0,l.kt)("li",{parentName:"ul"},"statsd"))),(0,l.kt)("li",{parentName:"ul"},"ratelimit - \u9650\u6d41"),(0,l.kt)("li",{parentName:"ul"},"sd - \u670d\u52a1\u53d1\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Endpointer - \u8fd4\u56de\u591a\u4e2a Endpoint\uff0c\u53d1\u73b0\u7684\u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53d1\u73b0\u7684 Endpoint"))),(0,l.kt)("li",{parentName:"ul"},"Factory - \u5b9e\u4f8b\u5b9a\u4e49 \u4f8b\u5982 host:port -> Endpoint"),(0,l.kt)("li",{parentName:"ul"},"Instancer - \u5ba2\u6237\u7aef\u53d1\u73b0\u7684\u670d\u52a1\u5b9e\u4f8b\u4fe1\u606f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0"),(0,l.kt)("li",{parentName:"ul"},"Event \u5305\u542b\u5b9e\u4f8b\u5b57\u7b26\u4e32\u548c\u5f02\u5e38\uff0c\u5b9e\u4f8b\u5b57\u7b26\u4e32\u901a\u8fc7 Factory \u83b7\u53d6\u5230\u5b9e\u9645 Endpoint"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u540e\u4f1a\u4e00\u822c\u4f1a\u540e\u53f0\u6301\u7eed\u5237\u65b0"))),(0,l.kt)("li",{parentName:"ul"},"Registrar - \u670d\u52a1\u6ce8\u518c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0"))),(0,l.kt)("li",{parentName:"ul"},"consul",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Instancer"),(0,l.kt)("li",{parentName:"ul"},"Registrar",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u518c agent service"))))),(0,l.kt)("li",{parentName:"ul"},"dnssrv",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Instancer"))),(0,l.kt)("li",{parentName:"ul"},"etcd"),(0,l.kt)("li",{parentName:"ul"},"eureka"),(0,l.kt)("li",{parentName:"ul"},"zk - Zookeeper"),(0,l.kt)("li",{parentName:"ul"},"lb - \u8d1f\u8f7d\u5747\u8861",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Balancer - \u8fd4\u56de\u5355\u4e2a Endpoint\uff0c\u8d1f\u8f7d\u5747\u8861\u9009\u62e9\u7ed3\u679c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u901a\u8fc7 sd.Endpointer \u521b\u5efa"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7b56\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Random"),(0,l.kt)("li",{parentName:"ul"},"Retry"),(0,l.kt)("li",{parentName:"ul"},"RoundRobin"))))))),(0,l.kt)("li",{parentName:"ul"},"tracing - \u8ddf\u8e2a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"opencensus"),(0,l.kt)("li",{parentName:"ul"},"opentracing"),(0,l.kt)("li",{parentName:"ul"},"zipkin"))),(0,l.kt)("li",{parentName:"ul"},"transport - \u4f20\u8f93\u534f\u8bae",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"amqp"),(0,l.kt)("li",{parentName:"ul"},"grpc"),(0,l.kt)("li",{parentName:"ul"},"http",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"jsonrpc - JSON RPC \u5e8f\u5217\u5316"),(0,l.kt)("li",{parentName:"ul"},"proto - Protobuf \u5e8f\u5217\u5316"))),(0,l.kt)("li",{parentName:"ul"},"httprp - HTTP \u53cd\u5411\u4ee3\u7406"),(0,l.kt)("li",{parentName:"ul"},"nats"),(0,l.kt)("li",{parentName:"ul"},"thrift")))))}c.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{kt:function(){return s}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),s=o(a),c=r,N=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(N,i(i({ref:e},k),{},{components:a})):n.createElement(N,i({ref:e},k))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);