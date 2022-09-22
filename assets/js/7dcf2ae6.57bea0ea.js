"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52610],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return s}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),k=m(a),s=n,N=k["".concat(p,".").concat(s)]||k[s]||c[s]||l;return a?r.createElement(N,u(u({ref:t},o),{},{components:a})):r.createElement(N,u({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var m=2;m<l;m++)u[m]=a[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2200:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var r=a(96600),n=a(27279),l=(a(59496),a(49613)),u=["components"],i={id:"queue",title:"Queue"},p="Queue",m={unversionedId:"queue/queue",id:"queue/queue",title:"Queue",description:"* Benchmarking Message Queue Latency",source:"@site/../notes/queue/README.md",sourceDirName:"queue",slug:"/queue/",permalink:"/notes/queue/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/queue/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603358678,formattedLastUpdatedAt:"Oct 22, 2020",frontMatter:{id:"queue",title:"Queue"},sidebar:"docs",previous:{title:"Vercel",permalink:"/notes/platform/vercel"},next:{title:"ActiveMQ",permalink:"/notes/queue/activiemq"}},o={},c=[{value:"Notes",id:"notes",level:2},{value:"Nats vs NSQ",id:"nats-vs-nsq",level:2},{value:"Cherami",id:"cherami",level:2}],k={toc:c};function s(e){var t=e.components,a=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"queue"},"Queue"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://bravenewgeek.com/benchmarking-message-queue-latency/"},"Benchmarking Message Queue Latency")),(0,l.kt)("li",{parentName:"ul"},"Dump pipe, Smart endpoint."),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u534f\u8bae",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AMQP - v1.0 2011",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache Qpid"),(0,l.kt)("li",{parentName:"ul"},"Apache ActiveMQ"),(0,l.kt)("li",{parentName:"ul"},"RabbitMQ"))),(0,l.kt)("li",{parentName:"ul"},"MQTT - v5.0 2019",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mosquitto"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/emqx/emqx"},"emqx/emqx"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56fd\u4ea7\u3001erlang"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hivemq/hivemq-community-edition"},"hivemq/hivemq-community-edition")))),(0,l.kt)("li",{parentName:"ul"},"XMPP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Openfire"),(0,l.kt)("li",{parentName:"ul"},"ejabberd"))))),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1 IM \u534f\u8bae",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IRC"),(0,l.kt)("li",{parentName:"ul"},"Matrix"),(0,l.kt)("li",{parentName:"ul"},"MTProto - Telegram"),(0,l.kt)("li",{parentName:"ul"},"SIP/SIMPLE"),(0,l.kt)("li",{parentName:"ul"},"XMPP")))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6d88\u606f\u961f\u5217\u7684\u8003\u8651\u56e0\u7d20/\u7eac\u5ea6\u975e\u5e38\u591a"),(0,l.kt)("li",{parentName:"ul"},"\u961f\u5217\u53ea\u662f\u4e00\u79cd\u6570\u636e\u8bbf\u95ee\u5f62\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u573a\u666f\u548c\u76ee\u7684\u4e0d\u540c\uff0c\u4f1a\u9009\u62e9\u5b8c\u5168\u4e0d\u540c\u7684\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u603b\u7ebf - \u57fa\u4e8e Queue \u8fdb\u884c\u901a\u8baf"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u7f16\u7a0b - Pub/Sub/Trigger"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8 - \u5148\u5b58\u518d\u5904\u7406\uff0cfan in/fan out"),(0,l.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u961f\u5217 - \u652f\u6301\u4efb\u52a1\u8c03\u5ea6\u7684\u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u901a\u8baf"))),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u573a\u666f\u5bf9\u5bf9\u961f\u5217\u53c8\u6709\u4e0d\u540c\u7684\u6027\u8d28\u8981\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5206\u7ec4\u3001\u5355\u72ec\u6d88\u8d39"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u91cd\u590d\u6d88\u8d39"),(0,l.kt)("li",{parentName:"ul"},"\u6d88\u606f\u4f18\u5148\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"\u6d88\u606f\u6d88\u8d39\u7684\u4e8b\u52a1\u6027\u8d28 - \u81f3\u5c11\u4e00\u6b21\u3001\u81f3\u591a\u4e00\u6b21\u3001\u51c6\u786e\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u961f\u5217\u670d\u52a1 HA \u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u8bae\u7c7b\u578b")))),(0,l.kt)("h2",{id:"nats-vs-nsq"},"Nats vs NSQ"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nats",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e13\u6ce8 Pub/Sub"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5904\u7406"))),(0,l.kt)("li",{parentName:"ul"},"NSQ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u4e0d\u6301\u4e45\u5316\u7684")))),(0,l.kt)("h2",{id:"cherami"},"Cherami"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/uber/cherami-server"},"uber/cherami-server")," - Distributed, scalable, durable, and highly available message queue system.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5df2\u5e9f\u5f03\uff0c\u9009\u62e9\u4e86 Kafka"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eng.uber.com/cherami/"},"Cherami: Uber Engineering\u2019s Durable and Scalable Task Queue in Go")),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8981\u6c42",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316,\u4e0d\u4e22\u5931,\u5141\u8bb8\u786c\u4ef6\u9519\u8bef"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u51fa\u73b0\u7f51\u7edc\u5f02\u5e38\u65f6\u53ef\u4ee5\u5f88\u7075\u6d3b\u7684\u5728 AP \u548c CP \u4e4b\u95f4\u8c03\u6574"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u80fd\u591f\u5bf9\u6bcf\u4e2a\u961f\u5217\u8fdb\u884c\u6269\u7f29\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7ade\u4e89\u6d88\u8d39\u7684\u6d88\u8d39\u6a21\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u65e0\u5173"))),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u7406\u5ff5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6700\u7ec8\u4e00\u81f4. \u8fd9\u6837\u4fdd\u8bc1\u4e86\u9ad8\u53ef\u7528\u548c\u6301\u4e45\u5316, \u4f46\u727a\u7272\u4e86\u987a\u5e8f\u6027.\u4e0d\u8fc7\u8fd9\u6837\u4fdd\u8bc1\u4e86\u5373\u4f7f\u5728\u786c\u4ef6\u6216\u7f51\u7edc\u5f02\u5e38\u65f6\u4e5f\u80fd\u5904\u7406\u8bf7\u6c42."),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 partitioned consumer pattern, \u4e0d\u5c06\u5206\u7247\u66b4\u9732\u7ed9\u7528\u6237.\u7b80\u5316\u4e86\u6d88\u8d39\u8005\u7ba1\u7406,\u7b80\u5316\u914d\u7f6e\u4f7f\u5f97\u6d88\u8d39\u8005\u548c\u751f\u4ea7\u8005\u53ef\u4ee5\u72ec\u7acb\u6269\u5bb9.")))))}s.isMDXComponent=!0}}]);