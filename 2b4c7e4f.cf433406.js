(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1096:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),o=p(a),O=r,j=o["".concat(b,".").concat(O)]||o[O]||m[O]||l;return a?n.a.createElement(j,i(i({ref:t},u),{},{components:a})):n.a.createElement(j,i({ref:t},u))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var u=2;u<l;u++)b[u]=a[u];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},251:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),l=(a(0),a(1096)),b={title:"Queue Awesome"},i={unversionedId:"queue/queue-awesome",id:"queue/queue-awesome",isDocsHomePage:!1,title:"Queue Awesome",description:"Protocol",source:"@site/notes/queue/queue-awesome.md",slug:"/queue/queue-awesome",permalink:"/notes/queue/queue-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/queue-awesome.md",version:"current"},c=[{value:"Protocol",id:"protocol",children:[]},{value:"Server",id:"server",children:[]}],u={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"protocol"},"Protocol"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"STOMP - Simple Text Oriented Message Protocol",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 61613"),Object(l.b)("li",{parentName:"ul"},"\u7c7b HTTP"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u6587\u672c frame \u901a\u8baf"),Object(l.b)("li",{parentName:"ul"},"Client: SEND, SUBSCRIBE/UNSCRIBE, ACK/NACK"),Object(l.b)("li",{parentName:"ul"},"Server: MESSAGE, RECEIPT, ERROR"),Object(l.b)("li",{parentName:"ul"},"1.1 - \u652f\u6301\u5fc3\u8df3, NACK, Virtual Host"),Object(l.b)("li",{parentName:"ul"},"1.2 - 2012-10-22",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},"\\r\\n")," \u800c\u4e0d\u53ea\u662f ",Object(l.b)("inlineCode",{parentName:"li"},"\\n"),"\uff0c ACK \u5934"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u91cd\u590d Frame \u5934, content-length & content-type \u5934"),Object(l.b)("li",{parentName:"ul"},"\u8981\u6c42\u670d\u52a1\u7aef\u652f\u6301 STOMP frame"),Object(l.b)("li",{parentName:"ul"},"\u94fe\u63a5\u9a7b\u7559"),Object(l.b)("li",{parentName:"ul"},"\u8ba2\u9605\u548c\u4e8b\u52a1\u7684 Scope \u548c\u552f\u4e00\u6807\u8bc6"),Object(l.b)("li",{parentName:"ul"},"RECEIPT"))))),Object(l.b)("li",{parentName:"ul"},"MQTT - Message Queue Telemetry Transport",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 1883"),Object(l.b)("li",{parentName:"ul"},"\u7531 IBM \u4e3a\u5d4c\u5165\u5f0f\u8bbe\u5907 Telemetry \u8bbe\u8ba1"),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e Low Bandwid\u3001High Latency\u3001Data Limit\u3001Fragile Connection \u573a\u666f"),Object(l.b)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u683c\u5f0f - 2 byte \u5934"),Object(l.b)("li",{parentName:"ul"},"Pub/Sub"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u9760 - QOS"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u5168 - Auth\u3001TLS/SSL"),Object(l.b)("li",{parentName:"ul"},"\u7b80\u5355"),Object(l.b)("li",{parentName:"ul"},"Connect/Disconnect + Publish + Subscribe/Unscribe"))),Object(l.b)("li",{parentName:"ul"},"AMQP - Advanced Message Queue Protocol",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 5672"),Object(l.b)("li",{parentName:"ul"},"2006 JP Morgan"),Object(l.b)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4e2d\u95f4\u4ef6 - \u89e3\u51b3\u4e1a\u52a1\u8026\u5408\u95ee\u9898"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u8ba1\u4e3a\u53ef\u66ff\u4ee3\u7684\u6d88\u606f\u4e2d\u95f4\u4ef6 - \u5f88\u591a\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"0.9.1 \u548c 1.0 \u4e0d\u517c\u5bb9 - RabbitMQ \u4e3a 0.9.1, ActiveMQ \u4e3a 1.0"))),Object(l.b)("li",{parentName:"ul"},"Openwire",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 61616")))),Object(l.b)("h2",{id:"server"},"Server"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8003\u8651\u9009\u62e9\u7684\u6807\u51c6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u961f\u5217\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5206\u53d1\u4fdd\u8bc1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"At Least Once"),Object(l.b)("li",{parentName:"ul"},"At Most Once"),Object(l.b)("li",{parentName:"ul"},"Exactly Once"))),Object(l.b)("li",{parentName:"ul"},"\u6a21\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Pull"),Object(l.b)("li",{parentName:"ul"},"Push"),Object(l.b)("li",{parentName:"ul"},"Request/Replay"),Object(l.b)("li",{parentName:"ul"},"Consumer Group/\u8d1f\u8f7d\u5747\u8861"))),Object(l.b)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7"),Object(l.b)("li",{parentName:"ul"},"\u6d88\u606f\u4fdd\u7559\u548c\u6301\u4e45\u5316",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4ecb\u8d28 - \u6587\u4ef6\u3001\u5185\u5b58\u3001\u5206\u7247\u3001\u526f\u672c\u3001DB"),Object(l.b)("li",{parentName:"ul"},"TTL - Rentention"),Object(l.b)("li",{parentName:"ul"},"\u957f\u77ed\u671f\u5b58\u50a8 - \u5f52\u6863"))),Object(l.b)("li",{parentName:"ul"},"Filter"),Object(l.b)("li",{parentName:"ul"},"Dedup"),Object(l.b)("li",{parentName:"ul"},"Message Size"),Object(l.b)("li",{parentName:"ul"},"Flow control - rate matching/limiting"),Object(l.b)("li",{parentName:"ul"},"\u591a\u79df\u6237 - \u5206\u7247/Topic/Subject"))),Object(l.b)("li",{parentName:"ul"},"\u573a\u666f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e8b\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f"),Object(l.b)("li",{parentName:"ul"},"RPC"),Object(l.b)("li",{parentName:"ul"},"Event"),Object(l.b)("li",{parentName:"ul"},"IPC"))),Object(l.b)("li",{parentName:"ul"},"\u96c6\u6210\u80fd\u529b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AMQP, MQTT, STOMP, HTTP, WebSocket, Kafka"))),Object(l.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u5bb9\u9519"),Object(l.b)("li",{parentName:"ul"},"\u8def\u7531\u5206\u53d1\u80fd\u529b"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72\u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b89\u5168"),Object(l.b)("li",{parentName:"ul"},"AuthN"),Object(l.b)("li",{parentName:"ul"},"AuthZ"))))),Object(l.b)("li",{parentName:"ul"},"RabbitMQ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AMQP, MQTT, STOMP, HTTP"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-server"},"nats-io/nats-server"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/liftbridge-io/liftbridge"},"liftbridge-io/liftbridge")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-streaming-server"},"nats-io/nats-streaming-server"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5df2\u5e9f\u5f03 - \u4f7f\u7528 jetstream - nats \u542f\u52a8\u6dfb\u52a0 -js"),Object(l.b)("li",{parentName:"ul"},"Protocol Buffer \u7f16\u7801"),Object(l.b)("li",{parentName:"ul"},"\u6301\u4e45\u5316"),Object(l.b)("li",{parentName:"ul"},"QoS"),Object(l.b)("li",{parentName:"ul"},"\u6d41\u63a7"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/nsqio/nsq"},"nsqio/nsq"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f00\u53d1\u76f8\u5bf9\u6ca1\u6709\u90a3\u4e48\u6d3b\u8dc3")))))}p.isMDXComponent=!0}}]);