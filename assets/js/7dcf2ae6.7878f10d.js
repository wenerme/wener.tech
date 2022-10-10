"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52610],{49613:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return k}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},o=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=m(r),k=n,N=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return r?a.createElement(N,u(u({ref:t},o),{},{components:r})):a.createElement(N,u({ref:t},o))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var m=2;m<l;m++)u[m]=r[m];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},42837:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return s},metadata:function(){return N},toc:function(){return b}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&o(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&o(e,r,t[r]);return e};const s={id:"queue",title:"Queue"},k="Queue",N={unversionedId:"queue/queue",id:"queue/queue",title:"Queue",description:"* Benchmarking Message Queue Latency",source:"@site/../notes/queue/README.md",sourceDirName:"queue",slug:"/queue/",permalink:"/notes/queue/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603358678,formattedLastUpdatedAt:"Oct 22, 2020",frontMatter:{id:"queue",title:"Queue"},sidebar:"docs",previous:{title:"Vercel",permalink:"/notes/platform/vercel"},next:{title:"ActiveMQ",permalink:"/notes/queue/activiemq"}},f={},b=[{value:"Notes",id:"notes",level:2},{value:"Nats vs NSQ",id:"nats-vs-nsq",level:2},{value:"Cherami",id:"cherami",level:2}],d={toc:b};function v(e){var t,r=e,{components:n}=r,o=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},d),o),l(t,u({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"queue"}),"Queue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"http://bravenewgeek.com/benchmarking-message-queue-latency/"}),"Benchmarking Message Queue Latency")),(0,a.kt)("li",{parentName:"ul"},"Dump pipe, Smart endpoint."),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u534f\u8bae",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AMQP - v1.0 2011",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache Qpid"),(0,a.kt)("li",{parentName:"ul"},"Apache ActiveMQ"),(0,a.kt)("li",{parentName:"ul"},"RabbitMQ"))),(0,a.kt)("li",{parentName:"ul"},"MQTT - v5.0 2019",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Mosquitto"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/emqx/emqx"}),"emqx/emqx"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u56fd\u4ea7\u3001erlang"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/hivemq/hivemq-community-edition"}),"hivemq/hivemq-community-edition")))),(0,a.kt)("li",{parentName:"ul"},"XMPP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Openfire"),(0,a.kt)("li",{parentName:"ul"},"ejabberd"))))),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1 IM \u534f\u8bae",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IRC"),(0,a.kt)("li",{parentName:"ul"},"Matrix"),(0,a.kt)("li",{parentName:"ul"},"MTProto - Telegram"),(0,a.kt)("li",{parentName:"ul"},"SIP/SIMPLE"),(0,a.kt)("li",{parentName:"ul"},"XMPP")))),(0,a.kt)("h2",c({},{id:"notes"}),"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6d88\u606f\u961f\u5217\u7684\u8003\u8651\u56e0\u7d20/\u7eac\u5ea6\u975e\u5e38\u591a"),(0,a.kt)("li",{parentName:"ul"},"\u961f\u5217\u53ea\u662f\u4e00\u79cd\u6570\u636e\u8bbf\u95ee\u5f62\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u573a\u666f\u548c\u76ee\u7684\u4e0d\u540c\uff0c\u4f1a\u9009\u62e9\u5b8c\u5168\u4e0d\u540c\u7684\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u573a\u666f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u603b\u7ebf - \u57fa\u4e8e Queue \u8fdb\u884c\u901a\u8baf"),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u7f16\u7a0b - Pub/Sub/Trigger"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8 - \u5148\u5b58\u518d\u5904\u7406\uff0cfan in/fan out"),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u961f\u5217 - \u652f\u6301\u4efb\u52a1\u8c03\u5ea6\u7684\u7279\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u901a\u8baf"))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u573a\u666f\u5bf9\u5bf9\u961f\u5217\u53c8\u6709\u4e0d\u540c\u7684\u6027\u8d28\u8981\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u7279\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u7ec4\u3001\u5355\u72ec\u6d88\u8d39"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u91cd\u590d\u6d88\u8d39"),(0,a.kt)("li",{parentName:"ul"},"\u6d88\u606f\u4f18\u5148\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u6d88\u606f\u6d88\u8d39\u7684\u4e8b\u52a1\u6027\u8d28 - \u81f3\u5c11\u4e00\u6b21\u3001\u81f3\u591a\u4e00\u6b21\u3001\u51c6\u786e\u4e00\u6b21"),(0,a.kt)("li",{parentName:"ul"},"\u961f\u5217\u670d\u52a1 HA \u7279\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u8bae\u7c7b\u578b")))),(0,a.kt)("h2",c({},{id:"nats-vs-nsq"}),"Nats vs NSQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nats",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e13\u6ce8 Pub/Sub"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5904\u7406"))),(0,a.kt)("li",{parentName:"ul"},"NSQ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u4e0d\u6301\u4e45\u5316\u7684")))),(0,a.kt)("h2",c({},{id:"cherami"}),"Cherami"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/uber/cherami-server"}),"uber/cherami-server")," - Distributed, scalable, durable, and highly available message queue system.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5df2\u5e9f\u5f03\uff0c\u9009\u62e9\u4e86 Kafka"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://eng.uber.com/cherami/"}),"Cherami: Uber Engineering\u2019s Durable and Scalable Task Queue in Go")),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8981\u6c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316,\u4e0d\u4e22\u5931,\u5141\u8bb8\u786c\u4ef6\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u51fa\u73b0\u7f51\u7edc\u5f02\u5e38\u65f6\u53ef\u4ee5\u5f88\u7075\u6d3b\u7684\u5728 AP \u548c CP \u4e4b\u95f4\u8c03\u6574"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u80fd\u591f\u5bf9\u6bcf\u4e2a\u961f\u5217\u8fdb\u884c\u6269\u7f29\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7ade\u4e89\u6d88\u8d39\u7684\u6d88\u8d39\u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u65e0\u5173"))),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u7406\u5ff5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6700\u7ec8\u4e00\u81f4. \u8fd9\u6837\u4fdd\u8bc1\u4e86\u9ad8\u53ef\u7528\u548c\u6301\u4e45\u5316, \u4f46\u727a\u7272\u4e86\u987a\u5e8f\u6027.\u4e0d\u8fc7\u8fd9\u6837\u4fdd\u8bc1\u4e86\u5373\u4f7f\u5728\u786c\u4ef6\u6216\u7f51\u7edc\u5f02\u5e38\u65f6\u4e5f\u80fd\u5904\u7406\u8bf7\u6c42."),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 partitioned consumer pattern, \u4e0d\u5c06\u5206\u7247\u66b4\u9732\u7ed9\u7528\u6237.\u7b80\u5316\u4e86\u6d88\u8d39\u8005\u7ba1\u7406,\u7b80\u5316\u914d\u7f6e\u4f7f\u5f97\u6d88\u8d39\u8005\u548c\u751f\u4ea7\u8005\u53ef\u4ee5\u72ec\u7acb\u6269\u5bb9.")))))}v.isMDXComponent=!0}}]);