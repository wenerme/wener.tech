(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1083:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=b(t),m=r,O=i["".concat(s,".").concat(m)]||i[m]||p[m]||c;return t?a.a.createElement(O,o(o({ref:n},u),{},{components:t})):a.a.createElement(O,o({ref:n},u))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,s=new Array(c);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<c;u++)s[u]=t[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},514:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),c=(t(0),t(1083)),s={title:"NATS"},o={unversionedId:"queue/nats",id:"queue/nats",isDocsHomePage:!1,title:"NATS",description:"- nats-io/nats-server \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/queue/nats.md",slug:"/queue/nats",permalink:"/notes/queue/nats",editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/nats.md",version:"current"},l=[{value:"nats-server.conf",id:"nats-serverconf",children:[]},{value:"Notes",id:"notes",children:[]},{value:"nsc",id:"nsc",children:[]},{value:"nats-account-server",id:"nats-account-server",children:[]},{value:"nats-top",id:"nats-top",children:[]}],u={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-server"},"nats-io/nats-server")," \u662f\u4ec0\u4e48\uff1f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\b\u504f\u5411\u901a\u8baf\u534f\u8bae\uff0c\u7528\u4f5c \u6d88\u606f\u961f\u5217"),Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6ca1\u6709\u6301\u4e45\u5316"),Object(c.b)("li",{parentName:"ul"},"\u534f\u8bae\u652f\u6301 MQTT, NATS, WebSocket"))),Object(c.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"4222 \u5ba2\u6237\u7aef"),Object(c.b)("li",{parentName:"ul"},"8222 HTTP \u7ba1\u7406\u548c\u4fe1\u606f\u4e0a\u62a5"),Object(c.b)("li",{parentName:"ul"},"6222 \u96c6\u7fa4\u8def\u7531"))),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/nats-io/natscli"},"nats-io/natscli"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5de5\u5177"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/nats-io/nsc"},"nats-io/nsc"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"nats \u8d26\u53f7\u7ba1\u7406\u529f\u80fd"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.nats.io/compare-nats"},"compare-nats")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.nats.io/nats-protocol/nats-protocol"},"Client Protocol"))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u670d\u52a1\u7aef - \u5927\u7ea6 10mb\n# docker \u542f\u52a8\ndocker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats:alpine\n# macOS \u5b89\u88c5\u542f\u52a8\nbrew install nats-server\nnats-server\n\n# nats \u5de5\u5177\u9700\u8981\u989d\u5916 tap \u6216\u8005\u76f4\u63a5\u4e0b\u8f7d https://github.com/nats-io/natscli/releases\nbrew tap nats-io/nats-tools\nbrew install nats-io/nats-tools/nats\nnats --help\n\nnats account info\nnats rtt\n")),Object(c.b)("h2",{id:"nats-serverconf"},"nats-server.conf"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-conf"},"# Client port of 4222 on all interfaces\nport: 4222\n\n# HTTP monitoring port\nmonitor_port: 8222\n\n# NSC \u751f\u6210\u7684 Operator JWT\noperator: $HOME/.nsc/nats/O/O.jwt\n# Account Server\nresolver: URL(http://localhost:9090/jwt/v1/accounts/)\n\n# This is for clustering multiple servers together.\ncluster {\n\n  # Route connections to be received on any interface on port 6222\n  port: 6222\n\n  # Routes are protected, so need to use them with --routes flag\n  # e.g. --routes=nats-route://ruser:T0pS3cr3t@otherdockerhost:6222\n  authorization {\n    user: ruser\n    password: T0pS3cr3t\n    timeout: 2\n  }\n\n  # Routes are actively solicited and connected to from this server.\n  # This Docker image has none by default, but you can pass a\n  # flag to the gnatsd docker image to create one to an existing server.\n  routes = []\n}\n")),Object(c.b)("h2",{id:"notes"},"Notes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Subject-Based Messaging",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Subject \u540d\u5b57 ",Object(c.b)("inlineCode",{parentName:"li"},"[a-z0-9.]+")),Object(c.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"time.us")," \u65b9\u5f0f\u5b9e\u73b0\u7ea7\u8054"),Object(c.b)("li",{parentName:"ul"},"\u5355\u5c42\u5339\u914d ",Object(c.b)("inlineCode",{parentName:"li"},"time.*.east")),Object(c.b)("li",{parentName:"ul"},"\u591a\u5c42\u5339\u914d ",Object(c.b)("inlineCode",{parentName:"li"},"time.us.>")))),Object(c.b)("li",{parentName:"ul"},"Publish-Subscribe"),Object(c.b)("li",{parentName:"ul"},"Request-Reply"),Object(c.b)("li",{parentName:"ul"},"Queue Groups / Queue Subscribe / Consumer Group",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Kafka Consumer Group \u6982\u5ff5"),Object(c.b)("li",{parentName:"ul"},"\u591a\u4e2a consumer \u5171\u4eab\u6d88\u8d39\u4f4d\u7f6e"),Object(c.b)("li",{parentName:"ul"},"queue \u8868\u793a\u8fd9\u4e2a group - \u6709\u552f\u4e00\u7684\u540d\u5b57"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8bbe\u7f6e durable \u5219\u4f1a\u5728 consumer \u5173\u95ed\u5b8c\u65f6\u79fb\u9664 queue \u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},"durable \u4e3a\u4e00\u4e2a consumer \u7684\u540d\u5b57"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u6240\u6709 consumer unsub \u65f6\uff0c\u4e5f\u4f1a\u79fb\u9664 queue \u4fe1\u606f"))),Object(c.b)("li",{parentName:"ul"},"ACK",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u54cd\u5e94\u4e00\u6761\u6d88\u8d39\u7684\u6d88\u606f"),Object(c.b)("li",{parentName:"ul"},"\u8fd4\u56de ",Object(c.b)("inlineCode",{parentName:"li"},"+ACK")))),Object(c.b)("li",{parentName:"ul"},"Sequence Numbers"),Object(c.b)("li",{parentName:"ul"},"Leaf Nodes",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u8def\u7531\u6d88\u606f\u5230\u5176\u4ed6\u96c6\u7fa4")))),Object(c.b)("h2",{id:"nsc"},"nsc"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/nats-io/nsc"},"nats-io/nsc"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'# \u53ef\u76f4\u63a5\u4e0b\u8f7d https://github.com/nats-io/nsc/releases\n# \u53ef docker \u542f\u52a8\u4f7f\u7528\ndocker run --rm -it -v $(pwd)/nsc:/nsc synadia/nats-box:latest\n\n# \u73af\u5883\u914d\u7f6e\nnsc env\n\nnsc add operator O\nnsc edit operator --service-url nats://localhost:4222\nnsc add account A\n# ~/.nkeys/creds/O/A/U.creds\nnsc add user U\n\nnsc list keys\n# \u79c1\u94a5\nnsc list keys --show-seeds\n\nnsc describe operator\nnsc describe account\n\nnats-account-server -nsc ~/.nsc/nats/O\n\n# \u4f7f\u7528\u8bc1\u4e66\u76d1\u542c\nnats-sub -creds ~/.nkeys/creds/O/A/U.creds ">"\n# \u4f7f\u7528\u8bc1\u4e66\u53d1\u5e03\nnats-pub -creds ~/.nkeys/creds/O/A/U.creds hello NATS\n\nnsc sub --user U ">"\nnsc pub --user U hello NATS\n\n# \u9650\u5b9a s \u53ef\u4ee5 sub, c \u53ef\u4ee5 pub\nnsc add user s --allow-pub "_INBOX.>" --allow-sub q\nnsc describe user s\nnsc add user c --allow-pub q --allow-sub "_INBOX.>"\nnsc describe user c\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"~/.nsc/nats\n\u2514\u2500\u2500 O\n    \u251c\u2500\u2500 O.jwt\n    \u2514\u2500\u2500 accounts\n        \u2514\u2500\u2500 A\n            \u251c\u2500\u2500 A.jwt\n            \u2514\u2500\u2500 users\n                \u2514\u2500\u2500 U.jwt\n")),Object(c.b)("p",null,"nkeys \u5305\u542b\u79c1\u94a5\u4fe1\u606f"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"~/.nkeys\n\u251c\u2500\u2500 creds\n\u2502   \u2514\u2500\u2500 O\n\u2502       \u2514\u2500\u2500 A\n\u2502           \u2514\u2500\u2500 U.creds\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 A\n    \u2502   \u2514\u2500\u2500 DE\n    \u2502       \u2514\u2500\u2500 ADETPT36WBIBUKM3IBCVM4A5YUSDXFEJPW4M6GGVBYCBW7RRNFTV5NGE.nk\n    \u251c\u2500\u2500 O\n    \u2502   \u2514\u2500\u2500 AF\n    \u2502       \u2514\u2500\u2500 OAFEEYZSYYVI4FXLRXJTMM32PQEI3RGOWZJT7Y3YFM4HB7ACPE4RTJPG.nk\n    \u2514\u2500\u2500 U\n        \u2514\u2500\u2500 DB\n            \u2514\u2500\u2500 UDBD5FNQPSLIO6CDMIS5D4EBNFKYWVDNULQTFTUZJXWFNYLGFF52VZN7.nk\n")),Object(c.b)("h2",{id:"nats-account-server"},"nats-account-server"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-account-server"},"nats-io/nats-account-server"))),Object(c.b)("h2",{id:"nats-top"},"nats-top"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-top"},"nats-io/nats-top"))))}b.isMDXComponent=!0}}]);