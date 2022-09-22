"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37947],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(a),k=r,c=d["".concat(o,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42528:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),i=["components"],p={title:"Dapr"},o="Dapr",u={unversionedId:"dev/cloud/dapr",id:"dev/cloud/dapr",title:"Dapr",description:"Dapr \u63d0\u4f9b\u4e91\u670d\u52a1\u62bd\u8c61\uff0c\u8ba9\u5b9e\u73b0\u5e95\u5c42\u89e3\u8026\u53ef\u66ff\u6362\u3002",source:"@site/../notes/dev/cloud/dapr.md",sourceDirName:"dev/cloud",slug:"/dev/cloud/dapr",permalink:"/notes/dev/cloud/dapr",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/cloud/dapr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Dapr"},sidebar:"docs",previous:{title:"Dapr Version",permalink:"/notes/dev/cloud/dapr-version"},next:{title:"Code FAQ",permalink:"/notes/dev/code-faq"}},m={},s=[{value:"SDK",id:"sdk",level:2},{value:"Sidecar",id:"sidecar",level:2},{value:"Actor",id:"actor",level:2},{value:"Notes",id:"notes",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],d={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dapr"},"Dapr"),(0,l.kt)("p",null,"Dapr \u63d0\u4f9b\u4e91\u670d\u52a1\u62bd\u8c61\uff0c\u8ba9\u5b9e\u73b0\u5e95\u5c42\u89e3\u8026\u53ef\u66ff\u6362\u3002\n\u867d\u7136 Dapr \u770b\u4f3c\u63d0\u53d6\u4e86\u5f88\u591a\u5e38\u7528\u7684\u670d\u52a1\u529f\u80fd\uff0c\u4f46\u90fd\u662f\u5bf9\u6807\u4e91\u5e73\u53f0\u670d\u52a1\u7684\u3002\n\u56e0\u4e3a Dapr \u662f \u5fae\u8f6f \u548c \u963f\u91cc \u8054\u5408\u5f00\u53d1\u7684\uff0c\u4e5f\u5c31\u662f\u4e3a\u4e86\u628a Azure \u548c Aliyun \u7684\u529f\u80fd\u96c6\u6210\u8fdb\u6765\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u9002\u7528\u573a\u666f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"self-host - \u4e0d\u4f9d\u8d56\u4e91\u5e73\u53f0\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u529f\u80fd\u660e\u786e - \u62bd\u8c61\u65e0\u610f\u4e49")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tradeoff")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sidecar \u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u66f4\u597d\u652f\u6301\u591a\u8bed\u8a00 - \u524d\u63d0\u662f\u6d89\u53ca\u5230\u90a3\u4e48\u591a\u8bed\u8a00"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u989d\u5916\u7684\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4f53\u9a8c\u4f1a\u6709\u5f71\u54cd")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dapr/dapr"},"dapr/dapr")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751f\u5f00\u53d1\u5de5\u5177\u96c6"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u8bed\u8a00 - sidecar \u66b4\u9732 http \u548c grpc \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u73af\u5883 - \u4e0d\u9650\u5236\u5728 kube \u96c6\u7fa4"),(0,l.kt)("li",{parentName:"ul"},"Sidecar \u6a21\u5f0f - \u8f7b sdk \u91cd sidecar"),(0,l.kt)("li",{parentName:"ul"},"CNCF \u5b75\u5316\u9879\u76ee")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"http-max-request-size \u9ed8\u8ba4\u9650\u5236 4m",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u5355\u4e2a gRPC/HTTP \u8bf7\u6c42\u6700\u5927 4mb"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Go SDK \u4e0d\u652f\u6301 actor - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dapr/go-sdk/issues/21"},"dapr/go-sdk#21")),(0,l.kt)("li",{parentName:"ul"},"WIP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Configuration - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dapr/dapr/issues/2988"},"dapr/dapr#2988")),(0,l.kt)("li",{parentName:"ul"},"Lock"),(0,l.kt)("li",{parentName:"ul"},"Circuit Breaking"),(0,l.kt)("li",{parentName:"ul"},"Search"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS \u5b89\u88c5 dapr \u547d\u4ee4\u884c\nbrew install dapr/tap/dapr-cli\n\n# \u672c\u5730\u542f\u52a8 Go \u5e94\u7528\ndapr run --app-id example-service \\\n  --app-protocol grpc \\\n  --app-port 50001 \\\n  go run main.go\n\n# \u542f\u52a8 JS \u5e94\u7528\ndapr run --app-id nodeapp --app-port 3000 --dapr-http-port 3500 app.js\n")),(0,l.kt)("h2",{id:"sdk"},"SDK"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Client"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Server"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Actor"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},".NET"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ASP.NET Core"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gRPC"),(0,l.kt)("td",{parentName:"tr",align:"center"},"FastAPI",(0,l.kt)("br",null),"Flask")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Spring Boot"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Go"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PHP"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Client",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u65b9\u6cd5\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"PubSub"),(0,l.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"Secret \u83b7\u53d6"),(0,l.kt)("li",{parentName:"ul"},"Virtual Actor \u4ea4\u4e92"))),(0,l.kt)("li",{parentName:"ul"},"Server \u6269\u5c55 - Dapr \u670d\u52a1\u6269\u5c55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u80fd\u88ab\u5176\u4ed6\u670d\u52a1\u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u4e3b\u9898"))),(0,l.kt)("li",{parentName:"ul"},"Actor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u88ab\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u4fdd\u5b58\u83b7\u53d6"),(0,l.kt)("li",{parentName:"ul"},"Timer \u56de\u8c03"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316 reminder"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/sdks/"},"SDKs"))),(0,l.kt)("h2",{id:"sidecar"},"Sidecar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 3500"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e - /v1.0/metadata",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u81ea\u7701"))),(0,l.kt)("li",{parentName:"ul"},"\u5065\u5eb7 - /v1.0/healthz"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8c03\u7528 - /v1.0/invoke",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gRPC, HTTP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/v1.0/invoke/<appId>/method/<method-name>"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1.0/invoke/nodeapp.production/method/neworder"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"production \u4e3a namespace"))))),(0,l.kt)("li",{parentName:"ul"},"NameResolution - consul, kubernetes, mdns"))),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406 - /v1.0/state",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Redis, PostgreSQL, MySQL, Hazelcast, Consul, MongoDB, Zookeeper"))),(0,l.kt)("li",{parentName:"ul"},"PubSub - /v1.0/publish, /v1.0/subscribe",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Kafka, Hazelcast, MQTT, NATS Streaming, Pulsar, RabbitMQ, Redis"))),(0,l.kt)("li",{parentName:"ul"},"Binding - /v1.0/bindings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 APN, Cron, HTTP, Kafka, MQTT, MySQL, PostgreSQL, RabbitMQ, Redis, SMTP, Local Storage, AliOSS"),(0,l.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u5916\u90e8\u670d\u52a1\u4e3a REST \u63a5\u53e3 - \u5916\u90e8\u670d\u52a1\u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u670d\u52a1\u4e0d\u540c\u63d0\u4f9b\u4e0d\u540c\u64cd\u4f5c\u63a5\u53e3 - \u8f93\u5165\u8f93\u51fa"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /<binding>")),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /v1.0/bindings/<bidning>"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{ "data": {}, "operation": "create" }')))))),(0,l.kt)("li",{parentName:"ul"},"Actor - /v1.0/actors",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 state - etag, tx \u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/v1.0/actors/<actorType>/<actorId>/<method/state/timers/reminders>")))),(0,l.kt)("li",{parentName:"ul"},"Observability"),(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u94a5\u7ba1\u7406 - /v1.0/secrets",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Env, File, Vault, Kubernetes Vault")))),(0,l.kt)("h2",{id:"actor"},"Actor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Actor_model"},"Actor")," - lowest-level \u201cunit of computation\u201d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/project/orleans-virtual-actors/"},"Virtual Actors")),(0,l.kt)("li",{parentName:"ul"},"actor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 state"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 sub - \u53ef\u4ee5 pub")))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dapr - \u547d\u4ee4\u884c"),(0,l.kt)("li",{parentName:"ul"},"daprd - sidecar"),(0,l.kt)("li",{parentName:"ul"},"dashboard - \u9762\u677f"),(0,l.kt)("li",{parentName:"ul"},"placement",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"distributed hashing - distribute the actor instances across various pods of the user service"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u7528\u4e8e actor"))))),(0,l.kt)("li",{parentName:"ul"},"SDK - Go, Java, PHP, Python, .NET - WIP JS, Rust, C++",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/sdks/sdk-serialization/"},"Serialization")))),(0,l.kt)("li",{parentName:"ul"},"Middleware",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9650\u6d41\u3001OAuth2\u3001OAuth2 client credentials\u3001Bearer\u3001OPA"),(0,l.kt)("li",{parentName:"ul"},"Uppercase - \u6d4b\u8bd5\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"~/.dapr/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"config.yaml"),(0,l.kt)("li",{parentName:"ul"},"components/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pubsub.yaml"),(0,l.kt)("li",{parentName:"ul"},"statestore.yaml"))),(0,l.kt)("li",{parentName:"ul"},"bin/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"daprd"),(0,l.kt)("li",{parentName:"ul"},"dashboard"),(0,l.kt)("li",{parentName:"ul"},"web/"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.dapr.io/reference/"},"Dapr Reference"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# self-host \u521d\u59cb\u5316 - docker - placement :50005, redis :6379, zipkin :9411\n# --network \u6307\u5b9a docker network\ndapr init\n# \u4e0d\u9700\u8981 docker\n# \u53ef\u624b\u52a8\u542f\u52a8 $HOME/.dapr/bin/placement\ndapr init -s # slim self-hosted - \u4e0d\u542f\u52a8 placement service, Redis, Zipkin\n\n# k8s \u521d\u59cb\u5316\n# --enable-ha\n# --enable-mtls - \u9ed8\u8ba4\u5f00\u542f\n# -n dapr-system\ndapr init -k\ndapr init -k --wait --timeout 600 --runtime-version 1.3.0 # \u6307\u5b9a\u7248\u672c\u3001\u8d85\u65f6\u3001\u7b49\u5f85\u5b8c\u6210\n\n# \u9762\u677f - \u76ee\u524d\u529f\u80fd\u6bd4\u8f83\u7b80\u5355\ndapr dashboard -p 9999\n\n# \u5b9e\u9a8c sidecar\ndapr run --app-id myapp --dapr-http-port 3500\n# \u5b58\u50a8\u72b6\u6001\ncurl -X POST -H "Content-Type: application/json" -d \'[{ "key": "name", "value": "Bruce Wayne"}]\' http://localhost:3500/v1.0/state/statestore\ndocker exec -it dapr_redis redis-cli keys \'*\'\n# hash "myapp||name"\n\n# \u5b9e\u9a8c\u5b9a\u4e49 secret \u7ec4\u4ef6\necho \'{"my-secret" : "Secret here"}\' > mysecrets.json\nmkdir my-components\ncat << CONF > my-components/localSecretStore.yaml\napiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: my-secret-store\n  namespace: default\nspec:\n  type: secretstores.local.file\n  version: v1\n  metadata:\n  - name: secretsFile\n    value: $PWD/mysecrets.json\n  - name: nestedSeparator\n    value: ":"\nCONF\ndapr run --app-id myapp --dapr-http-port 3500 --components-path ./my-components\n# \u8bf7\u6c42 json \u4e2d\u7684\u5185\u5bb9\ncurl http://localhost:3500/v1.0/secrets/my-secret-store/my-secret\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CDR Configuration"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},'dapr.io/config: "zipkin"')," \u4f7f\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: dapr.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: zipkin\n  namespace: default\nspec:\n  tracing:\n    samplingRate: "1"\n    zipkin:\n      # \u53ef\u4ee5 selfhost\n      endpointAddress: "http://localhost:9411/api/v2/spans"\n      # k8s\n      endpointAddress: "http://zipkin.default.svc.cluster.local:9411/api/v2/spans"\n\n  # API ACL\n  api:\n    allowed:\n    - name: state # state, invoke, secrets, bindings, publish, actors, metadata\n      version: v1.0\n      protocol: http # http, grpc\n\n  # \u670d\u52a1\u8bbf\u95ee\u63a7\u5236\n  accessControl:\n    defaultAction: deny\n    trustDomain: "public"\n    policies:\n    - appId: app1\n      defaultAction: allow\n      trustDomain: \'public\'\n      namespace: "default"\n    - appId: app1\n      defaultAction: deny\n      trustDomain: \'public\'\n      namespace: "default"\n      operations:\n      - name: /op1 # /op1/*\n        httpVerb: [\'POST\', \'PUT\'] # [\'*\']\n        action: allow\n\n  # \u9884\u89c8\u7279\u6027\n  features:\n  - name: Feature1\n    enabled: true\n')))}k.isMDXComponent=!0}}]);