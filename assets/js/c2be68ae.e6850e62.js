"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20527],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,N=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(N,u(u({ref:t},p),{},{components:n})):a.createElement(N,u({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),u=["components"],i={title:"NATS"},o=void 0,s={unversionedId:"queue/nats/README",id:"queue/nats/README",title:"NATS",description:"- nats-io/nats-server \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/queue/nats/README.md",sourceDirName:"queue/nats",slug:"/queue/nats/",permalink:"/notes/queue/nats/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/nats/README.md",tags:[],version:"current",frontMatter:{title:"NATS"},sidebar:"docs",previous:{title:"mosquitto",permalink:"/notes/queue/mosquitto"},next:{title:"nats-account-server",permalink:"/notes/queue/nats/nats-account-server"}},p={},m=[{value:"Notes",id:"notes",level:2},{value:"nats-top",id:"nats-top",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nats-io/nats-server"},"nats-io/nats-server")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u504f\u5411\u901a\u8baf\u534f\u8bae\uff0c\u7528\u4f5c \u6d88\u606f\u961f\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6ca1\u6709\u6301\u4e45\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u534f\u8bae\u652f\u6301 MQTT, NATS, WebSocket"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u6210 JetStream - \u66ff\u4ee3 STAN",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 KV\u3001ObjectStore"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 \u6301\u4e45\u5316"))))),(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"4222 \u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ul"},"8222 HTTP \u7ba1\u7406\u548c\u4fe1\u606f\u4e0a\u62a5"),(0,l.kt)("li",{parentName:"ul"},"6222 \u96c6\u7fa4\u8def\u7531"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nats-io/natscli"},"nats-io/natscli"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5de5\u5177"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nats-io/nsc"},"nats-io/nsc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"nats \u8d26\u53f7\u7ba1\u7406\u529f\u80fd"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.nats.io/compare-nats"},"compare-nats")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.nats.io/nats-protocol/nats-protocol"},"Client Protocol"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Docker\n# \u670d\u52a1\u7aef - \u5927\u7ea6 10mb\ndocker run --rm -it --name nats -p 4222:4222 -p 6222:6222 -p 8222:8222 nats:alpine -js\n\n# macOS\nbrew install nats-server\nnats-server\n\n# nats \u5de5\u5177\u9700\u8981\u989d\u5916 tap \u6216\u8005\u76f4\u63a5\u4e0b\u8f7d https://github.com/nats-io/natscli/releases\nbrew tap nats-io/nats-tools\nbrew install nats-io/nats-tools/nats\nnats --help\n\nnats account info\nnats rtt\n")),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Subject-Based Messaging",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Subject \u540d\u5b57 ",(0,l.kt)("inlineCode",{parentName:"li"},"[a-z0-9.]+")),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"time.us")," \u65b9\u5f0f\u5b9e\u73b0\u7ea7\u8054"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u5c42\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"time.*.east")),(0,l.kt)("li",{parentName:"ul"},"\u591a\u5c42\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"time.us.>")))),(0,l.kt)("li",{parentName:"ul"},"Publish-Subscribe"),(0,l.kt)("li",{parentName:"ul"},"Request-Reply"),(0,l.kt)("li",{parentName:"ul"},"Queue Groups / Queue Subscribe / Consumer Group",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kafka Consumer Group \u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e2a consumer \u5171\u4eab\u6d88\u8d39\u4f4d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"queue \u8868\u793a\u8fd9\u4e2a group - \u6709\u552f\u4e00\u7684\u540d\u5b57"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8bbe\u7f6e durable \u5219\u4f1a\u5728 consumer \u5173\u95ed\u5b8c\u65f6\u79fb\u9664 queue \u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"durable \u4e3a\u4e00\u4e2a consumer \u7684\u540d\u5b57"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6240\u6709 consumer unsub \u65f6\uff0c\u4e5f\u4f1a\u79fb\u9664 queue \u4fe1\u606f"))),(0,l.kt)("li",{parentName:"ul"},"ACK",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u4e00\u6761\u6d88\u8d39\u7684\u6d88\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"+ACK")))),(0,l.kt)("li",{parentName:"ul"},"Sequence Numbers"),(0,l.kt)("li",{parentName:"ul"},"Leaf Nodes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u6d88\u606f\u5230\u5176\u4ed6\u96c6\u7fa4"))),(0,l.kt)("li",{parentName:"ul"},"gateways",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u591a\u4e2a\u96c6\u7fa4\u7ec4\u6210 full mesh")))),(0,l.kt)("h2",{id:"nats-top"},"nats-top"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nats-io/nats-top"},"nats-io/nats-top"))))}k.isMDXComponent=!0}}]);