"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71093],{49613:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return N}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),o=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,c=k["".concat(s,".").concat(N)]||k[N]||m[N]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},14486:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return N},default:function(){return b},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&p(t,a,e[a]);if(u)for(var a of u(e))o.call(e,a)&&p(t,a,e[a]);return t};const k={title:"Nats Version",tags:["Version"]},N="Nats Version",c={unversionedId:"queue/nats/nats-version",id:"queue/nats/nats-version",title:"Nats Version",description:"- nats.go \u6700\u597d\u5339\u914d\u670d\u52a1\u7aef\u7248\u672c",source:"@site/../notes/queue/nats/nats-version.md",sourceDirName:"queue/nats",slug:"/queue/nats/version",permalink:"/notes/queue/nats/version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nats-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"Nats Version",tags:["Version"]},sidebar:"docs",previous:{title:"Nats on K8S",permalink:"/notes/queue/nats/k8s"},next:{title:"nsc",permalink:"/notes/queue/nats/nsc"}},d={},f=[{value:"Nats 2.8",id:"nats-28",level:2},{value:"Nats 2.7",id:"nats-27",level:2},{value:"Nats 2.6",id:"nats-26",level:2},{value:"Nats 2.5",id:"nats-25",level:2},{value:"Nats 2.4",id:"nats-24",level:2},{value:"Nats 2.3",id:"nats-23",level:2},{value:"Nats 2.2",id:"nats-22",level:2},{value:"Nats 2.1",id:"nats-21",level:2},{value:"Nats 2.0",id:"nats-20",level:2}],g={toc:f};function b(t){var e,a=t,{components:r}=a,p=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=m(m({},g),p),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"nats-version"}),"Nats Version"),(0,n.kt)("admonition",m({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"nats.go \u6700\u597d\u5339\u914d\u670d\u52a1\u7aef\u7248\u672c"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"ver"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"date"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"nats.go"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-28"}),"Nats 2.8")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2022-04-19"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-27"}),"Nats 2.7")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2022-01-04"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-26"}),"Nats 2.6")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2021-09-22"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"v1.13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-25"}),"Nats 2.5")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2021-09-10"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"v1.12.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-24"}),"Nats 2.4")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2021-08-27"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"v1.12.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-23"}),"Nats 2.3")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2021-06-24"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"v1.11.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-22"}),"Nats 2.2")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2021-03-15"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"v1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-21"}),"Nats 2.1")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2019-09-21"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"#nats-20"}),"Nats 2.0")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2019-05-05"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",m({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"JetStream based Key-Value Stores - ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/nats-io/nats-architecture-and-design/blob/main/adr/ADR-8.md"}),"ADR-8"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"KV: \u652f\u6301\u5386\u53f2\u8bb0\u5f55\uff0c\u652f\u6301\u9650\u5b9a\u5927\u5c0f\uff0cWatch"),(0,n.kt)("li",{parentName:"ul"},"Object Store: \u652f\u6301 Chunks\uff0cWatch"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/nats-io/nats-server/releases"}),"https://github.com/nats-io/nats-server/releases")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/nats-io/nats-architecture-and-design/tree/main/adr"}),"https://github.com/nats-io/nats-architecture-and-design/tree/main/adr"))),(0,n.kt)("h2",m({},{id:"nats-28"}),"Nats 2.8"),(0,n.kt)("h2",m({},{id:"nats-27"}),"Nats 2.7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JetStream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e\u914d\u7f6e max_file_store, max_memory_store"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5ba2\u6237\u7aef \u4e34\u65f6 Pull \u6d88\u8d39"))),(0,n.kt)("li",{parentName:"ul"},"MQTT",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 WebSocket - /mqtt"))),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e\u914d\u7f6e: max_connections, max_subscriptions, max_payload, max_leafnodes")),(0,n.kt)("admonition",m({},{type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"JetStream LeafNode domains ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/nats-io/nats-server/pull/2693#issuecomment-996212582"}),"#2693")))),(0,n.kt)("h2",m({},{id:"nats-26"}),"Nats 2.6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JetStream's reserved memory and memory used",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/jsz, /varz")))),(0,n.kt)("h2",m({},{id:"nats-25"}),"Nats 2.5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MQTT/Monitoring",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/connz")))),(0,n.kt)("h2",m({},{id:"nats-24"}),"Nats 2.4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JetStream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Push Consumer \u884c\u4e3a\u53d1\u751f\u53d8\u5316 - ",(0,n.kt)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u90fd\u9700\u8981\u5347\u7ea7"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u76f8\u540c durable consumer \u91cd\u590d sub"),(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u76f8\u540c durable consumer \u521b\u5efa\u591a\u4e2a queue group"),(0,n.kt)("li",{parentName:"ul"},"queue sub \u65f6\uff0c\u5982\u679c\u6ca1\u6709 consumer \u548c durable \u5219\u521b\u5efa\u4e34\u65f6 js consumer"))),(0,n.kt)("li",{parentName:"ul"},"ConsumerConfig.DeliverGroup consumer \u5173\u8054 queue"),(0,n.kt)("li",{parentName:"ul"},"ConsumerInfo.PushBound \u8868\u793a\u5df2\u7ecf\u7ed1\u5b9a push \u5173\u7cfb"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/nats-io/nats-server/releases/tag/v2.4.0"}),"v2.4.0"))),(0,n.kt)("h2",m({},{id:"nats-23"}),"Nats 2.3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OCSP - Online Certificate Status Protocol"),(0,n.kt)("li",{parentName:"ul"},"JetStream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"stream purge by subject"),(0,n.kt)("li",{parentName:"ul"},"per-subject message limit"),(0,n.kt)("li",{parentName:"ul"},"encryption data at rest")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"[ ext_ca ]\nauthorityInfoAccess = OCSP;URI:http://ocsp.example.net:80\ntlsfeature = status_request\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),'# ocsp: true\n\nocsp {\n  # auto, must, always, never\n  mode: must\n  url: "http://ocsp.example.net"\n}\n')),(0,n.kt)("h2",m({},{id:"nats-22"}),"Nats 2.2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e JetStream"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 MQTT 3.1.1"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 WebSocket \u94fe\u63a5"),(0,n.kt)("li",{parentName:"ul"},"Message Header"),(0,n.kt)("li",{parentName:"ul"},"Security & Account",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CIDR Block"),(0,n.kt)("li",{parentName:"ul"},"Time-Based Account Restrictions"),(0,n.kt)("li",{parentName:"ul"},"Default User Permissions"))),(0,n.kt)("li",{parentName:"ul"},"Monitoring",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jsz"),(0,n.kt)("li",{parentName:"ul"},"/accountz"),(0,n.kt)("li",{parentName:"ul"},"/varz"),(0,n.kt)("li",{parentName:"ul"},"/leafz"))),(0,n.kt)("li",{parentName:"ul"},"JWT")),(0,n.kt)("h2",m({},{id:"nats-21"}),"Nats 2.1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add rtt /routez"),(0,n.kt)("li",{parentName:"ul"},"/leafz")),(0,n.kt)("h2",m({},{id:"nats-20"}),"Nats 2.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NKey"),(0,n.kt)("li",{parentName:"ul"},"Accounts"),(0,n.kt)("li",{parentName:"ul"},"JWT"),(0,n.kt)("li",{parentName:"ul"},"Gateway"),(0,n.kt)("li",{parentName:"ul"},"Lean Nodes"),(0,n.kt)("li",{parentName:"ul"},"System events"),(0,n.kt)("li",{parentName:"ul"},"new route protocol")))}b.isMDXComponent=!0}}]);