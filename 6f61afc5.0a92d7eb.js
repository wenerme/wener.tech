(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1151:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},i=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),i=l(t),m=r,O=i["".concat(c,".").concat(m)]||i[m]||p[m]||s;return t?a.a.createElement(O,u(u({ref:n},b),{},{components:t})):a.a.createElement(O,u({ref:n},b))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var b=2;b<s;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},543:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),s=(t(0),t(1151)),c={title:"NATS"},u={unversionedId:"queue/nats",id:"queue/nats",isDocsHomePage:!1,title:"NATS",description:"- nats-io/nats-server \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/queue/nats.md",slug:"/queue/nats",permalink:"/notes/queue/nats",editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/nats.md",version:"current"},o=[{value:"nats-server.conf",id:"nats-serverconf",children:[]},{value:"Notes",id:"notes",children:[]},{value:"auth",id:"auth",children:[]},{value:"nsc",id:"nsc",children:[]},{value:"nats-account-server",id:"nats-account-server",children:[]},{value:"nats-top",id:"nats-top",children:[]}],b={toc:o};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-server"},"nats-io/nats-server")," \u662f\u4ec0\u4e48\uff1f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\b \u504f\u5411\u901a\u8baf\u534f\u8bae\uff0c\u7528\u4f5c \u6d88\u606f\u961f\u5217"),Object(s.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6ca1\u6709\u6301\u4e45\u5316"),Object(s.b)("li",{parentName:"ul"},"\u534f\u8bae\u652f\u6301 MQTT, NATS, WebSocket"))),Object(s.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"4222 \u5ba2\u6237\u7aef"),Object(s.b)("li",{parentName:"ul"},"8222 HTTP \u7ba1\u7406\u548c\u4fe1\u606f\u4e0a\u62a5"),Object(s.b)("li",{parentName:"ul"},"6222 \u96c6\u7fa4\u8def\u7531"))),Object(s.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/natscli"},"nats-io/natscli"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5de5\u5177"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/nsc"},"nats-io/nsc"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"nats \u8d26\u53f7\u7ba1\u7406\u529f\u80fd"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.nats.io/compare-nats"},"compare-nats")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.nats.io/nats-protocol/nats-protocol"},"Client Protocol"))))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"# \u670d\u52a1\u7aef - \u5927\u7ea6 10mb\n# docker \u542f\u52a8\ndocker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats:alpine\n# macOS \u5b89\u88c5\u542f\u52a8\nbrew install nats-server\nnats-server\n\n# nats \u5de5\u5177\u9700\u8981\u989d\u5916 tap \u6216\u8005\u76f4\u63a5\u4e0b\u8f7d https://github.com/nats-io/natscli/releases\nbrew tap nats-io/nats-tools\nbrew install nats-io/nats-tools/nats\nnats --help\n\nnats account info\nnats rtt\n")),Object(s.b)("h2",{id:"nats-serverconf"},"nats-server.conf"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-conf"},"# Client port of 4222 on all interfaces\nport: 4222\n\n# HTTP monitoring port\nmonitor_port: 8222\n\n# NSC \u751f\u6210\u7684 Operator JWT\noperator: $HOME/.nsc/nats/O/O.jwt\n# Account Server\nresolver: URL(http://localhost:9090/jwt/v1/accounts/)\n\n# This is for clustering multiple servers together.\ncluster {\n\n  # Route connections to be received on any interface on port 6222\n  port: 6222\n\n  # Routes are protected, so need to use them with --routes flag\n  # e.g. --routes=nats-route://ruser:T0pS3cr3t@otherdockerhost:6222\n  authorization {\n    user: ruser\n    password: T0pS3cr3t\n    timeout: 2\n  }\n\n  # Routes are actively solicited and connected to from this server.\n  # This Docker image has none by default, but you can pass a\n  # flag to the gnatsd docker image to create one to an existing server.\n  routes = []\n}\n")),Object(s.b)("h2",{id:"notes"},"Notes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Subject-Based Messaging",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Subject \u540d\u5b57 ",Object(s.b)("inlineCode",{parentName:"li"},"[a-z0-9.]+")),Object(s.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(s.b)("inlineCode",{parentName:"li"},"time.us")," \u65b9\u5f0f\u5b9e\u73b0\u7ea7\u8054"),Object(s.b)("li",{parentName:"ul"},"\u5355\u5c42\u5339\u914d ",Object(s.b)("inlineCode",{parentName:"li"},"time.*.east")),Object(s.b)("li",{parentName:"ul"},"\u591a\u5c42\u5339\u914d ",Object(s.b)("inlineCode",{parentName:"li"},"time.us.>")))),Object(s.b)("li",{parentName:"ul"},"Publish-Subscribe"),Object(s.b)("li",{parentName:"ul"},"Request-Reply"),Object(s.b)("li",{parentName:"ul"},"Queue Groups / Queue Subscribe / Consumer Group",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Kafka Consumer Group \u6982\u5ff5"),Object(s.b)("li",{parentName:"ul"},"\u591a\u4e2a consumer \u5171\u4eab\u6d88\u8d39\u4f4d\u7f6e"),Object(s.b)("li",{parentName:"ul"},"queue \u8868\u793a\u8fd9\u4e2a group - \u6709\u552f\u4e00\u7684\u540d\u5b57"),Object(s.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8bbe\u7f6e durable \u5219\u4f1a\u5728 consumer \u5173\u95ed\u5b8c\u65f6\u79fb\u9664 queue \u4fe1\u606f"),Object(s.b)("li",{parentName:"ul"},"durable \u4e3a\u4e00\u4e2a consumer \u7684\u540d\u5b57"),Object(s.b)("li",{parentName:"ul"},"\u5f53\u6240\u6709 consumer unsub \u65f6\uff0c\u4e5f\u4f1a\u79fb\u9664 queue \u4fe1\u606f"))),Object(s.b)("li",{parentName:"ul"},"ACK",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u54cd\u5e94\u4e00\u6761\u6d88\u8d39\u7684\u6d88\u606f"),Object(s.b)("li",{parentName:"ul"},"\u8fd4\u56de ",Object(s.b)("inlineCode",{parentName:"li"},"+ACK")))),Object(s.b)("li",{parentName:"ul"},"Sequence Numbers"),Object(s.b)("li",{parentName:"ul"},"Leaf Nodes",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u8def\u7531\u6d88\u606f\u5230\u5176\u4ed6\u96c6\u7fa4")))),Object(s.b)("h2",{id:"auth"},"auth"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"nats \u901a\u8fc7 account \u5b9e\u73b0\u79df\u6237\u9694\u79bb"),Object(s.b)("li",{parentName:"ul"},"\u4f7f\u7528 account \u9700\u8981\u8bbe\u7f6e auth"),Object(s.b)("li",{parentName:"ul"},"\u8ba4\u8bc1\u65b9\u5f0f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"token - \u53ef\u4ee5\u914d\u7f6e\u660e\u6587\u6216 bcrypt \u52a0\u5bc6\u7684 token"),Object(s.b)("li",{parentName:"ul"},"user+password - \u5bc6\u7801\u652f\u6301 bcrypt \u52a0\u5bc6"),Object(s.b)("li",{parentName:"ul"},"tls"),Object(s.b)("li",{parentName:"ul"},"nkey"))),Object(s.b)("li",{parentName:"ul"},"\u6388\u6743",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"publish"),Object(s.b)("li",{parentName:"ul"},"subscribe"),Object(s.b)("li",{parentName:"ul"},"allow_responses - max,expires")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'authorization {\n  default_permissions = {\n    publish = "SANDBOX.*"\n    subscribe = ["PUBLIC.>", "_INBOX.>"]\n  }\n  ADMIN = {\n    publish = ">"\n    subscribe = ">"\n  }\n  REQUESTOR = {\n    publish = ["req.a", "req.b"]\n    subscribe = "_INBOX.>"\n  }\n  RESPONDER = {\n    subscribe = ["req.a", "req.b"]\n    publish = "_INBOX.>"\n  }\n  users = [\n    {user: admin,   password: $ADMIN_PASS, permissions: $ADMIN}\n    {user: client,  password: $CLIENT_PASS, permissions: $REQUESTOR}\n    {user: service,  password: $SERVICE_PASS, permissions: $RESPONDER}\n    {user: other, password: $OTHER_PASS}\n    {\n      user: test\n      password: test\n      permissions: {\n          publish: {\n              deny: ">"\n          },\n          subscribe: {\n              allow: "client.>"\n          }\n      }\n    }\n    { user: b, password: b, permissions: {subscribe: "q", allow_responses: true } },\n    { user: c, password: c, permissions: {subscribe: "q", allow_responses: { max: 5, expires: "1m" } } }\n  ]\n}\n\naccounts: {\n  A: {\n    users: [\n      {user: a, password: a}\n    ]\n    exports: [\n      {stream: puba.>}\n      {service: pubq.>}\n      {stream: b.>, accounts: [B]}\n      {service: q.b, accounts: [B]}\n    ]\n  },\n  B: {\n    users: [\n      {user: b, password: b}\n    ]\n    imports: [\n      {stream: {account: A, subject: b.>}}\n      {service: {account: A, subject: q.b}}\n    ]\n  },\n  C: {\n    users: [\n      {user: c, password: c}\n    ]\n    imports: [\n      {stream: {account: A, subject: puba.>}, prefix: from_a}\n      {service: {account: A, subject: pubq.C}, to: Q}\n    ]\n  }\n}\nno_auth_user: a\n')),Object(s.b)("h2",{id:"nsc"},"nsc"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/nsc"},"nats-io/nsc"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'# \u53ef\u76f4\u63a5\u4e0b\u8f7d https://github.com/nats-io/nsc/releases\n# \u53ef docker \u542f\u52a8\u4f7f\u7528\ndocker run --rm -it -v $(pwd)/nsc:/nsc synadia/nats-box:latest\n\n# \u73af\u5883\u914d\u7f6e\nnsc env\n\nnsc add operator O\nnsc edit operator --service-url nats://localhost:4222\nnsc add account A\n# ~/.nkeys/creds/O/A/U.creds\nnsc add user U\n\nnsc list keys\n# \u79c1\u94a5\nnsc list keys --show-seeds\n\nnsc describe operator\nnsc describe account\n\nnats-account-server -nsc ~/.nsc/nats/O\n\n# \u4f7f\u7528\u8bc1\u4e66\u76d1\u542c\nnats-sub -creds ~/.nkeys/creds/O/A/U.creds ">"\n# \u4f7f\u7528\u8bc1\u4e66\u53d1\u5e03\nnats-pub -creds ~/.nkeys/creds/O/A/U.creds hello NATS\n\nnsc sub --user U ">"\nnsc pub --user U hello NATS\n\n# \u9650\u5b9a s \u53ef\u4ee5 sub, c \u53ef\u4ee5 pub\nnsc add user s --allow-pub "_INBOX.>" --allow-sub q\nnsc describe user s\nnsc add user c --allow-pub q --allow-sub "_INBOX.>"\nnsc describe user c\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"~/.nsc/nats\n\u2514\u2500\u2500 O\n    \u251c\u2500\u2500 O.jwt\n    \u2514\u2500\u2500 accounts\n        \u2514\u2500\u2500 A\n            \u251c\u2500\u2500 A.jwt\n            \u2514\u2500\u2500 users\n                \u2514\u2500\u2500 U.jwt\n")),Object(s.b)("p",null,"nkeys \u5305\u542b\u79c1\u94a5\u4fe1\u606f"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"~/.nkeys\n\u251c\u2500\u2500 creds\n\u2502   \u2514\u2500\u2500 O\n\u2502       \u2514\u2500\u2500 A\n\u2502           \u2514\u2500\u2500 U.creds\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 A\n    \u2502   \u2514\u2500\u2500 DE\n    \u2502       \u2514\u2500\u2500 ADETPT36WBIBUKM3IBCVM4A5YUSDXFEJPW4M6GGVBYCBW7RRNFTV5NGE.nk\n    \u251c\u2500\u2500 O\n    \u2502   \u2514\u2500\u2500 AF\n    \u2502       \u2514\u2500\u2500 OAFEEYZSYYVI4FXLRXJTMM32PQEI3RGOWZJT7Y3YFM4HB7ACPE4RTJPG.nk\n    \u2514\u2500\u2500 U\n        \u2514\u2500\u2500 DB\n            \u2514\u2500\u2500 UDBD5FNQPSLIO6CDMIS5D4EBNFKYWVDNULQTFTUZJXWFNYLGFF52VZN7.nk\n")),Object(s.b)("h2",{id:"nats-account-server"},"nats-account-server"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-account-server"},"nats-io/nats-account-server"))),Object(s.b)("h2",{id:"nats-top"},"nats-top"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-top"},"nats-io/nats-top"))))}l.isMDXComponent=!0}}]);