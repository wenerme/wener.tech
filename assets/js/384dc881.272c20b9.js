"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57779],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,v=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(v,u(u({ref:t},p),{},{components:r})):n.createElement(v,u({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<i;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},64568:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),u=["components"],l={title:"ActiveMQ"},o="ActiveMQ",c={unversionedId:"queue/activiemq",id:"queue/activiemq",title:"ActiveMQ",description:"- apache/activemq \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/queue/activiemq.md",sourceDirName:"queue",slug:"/queue/activiemq",permalink:"/notes/queue/activiemq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/queue/activiemq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ActiveMQ"},sidebar:"docs",previous:{title:"Queue",permalink:"/notes/queue/"},next:{title:"EMQX",permalink:"/notes/queue/emqx"}},p={},m=[{value:"Queue vs Topic",id:"queue-vs-topic",level:2}],s={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activemq"},"ActiveMQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/activemq"},"apache/activemq")," \u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u8bae OpenWire, STOMP 1.0/1.1/1.2, MQTT, AMQP 1.0, REST, WebSockets"),(0,i.kt)("li",{parentName:"ul"},"\u539f\u751f\u534f\u8bae Openwire \u529f\u80fd\u6700\u4e3a\u5b8c\u5584 - \u7aef\u53e3 61616"),(0,i.kt)("li",{parentName:"ul"},"WebUI \u7aef\u53e3 8161"))),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u534f\u8bae\u90fd\u53ef\u4ee5\u5728 61616"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/disaster37/activemq"},"disaster37/activemq"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"5.14.3")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# STOMP 61613\ndocker run --rm -it \\\n  -p 8161:8161 -p 61613:61613 -p 61616:61616 \\\n  --name activemq webcenter/activemq\n")),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"queue-vs-topic"},"Queue vs Topic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Topic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 Pub, Sub \u8bed\u4e49"),(0,i.kt)("li",{parentName:"ul"},"\u5148 Sub \u540e Pub"),(0,i.kt)("li",{parentName:"ul"},"Pub \u65f6\u6240\u6709 Sub \u90fd\u4f1a\u63a5\u6536\u6d88\u606f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Queue"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u8bed\u4e49 - fanout"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6d88\u606f\u53ea\u80fd\u88ab\u6d88\u8d39\u4e00\u6b21"),(0,i.kt)("li",{parentName:"ul"},"\u88ab\u6d88\u8d39\u7684\u6d88\u606f\u6ca1\u6709\u88ab Ack \u4f1a\u4ece\u65b0\u5206\u53d1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53c2\u8003"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://activemq.apache.org/how-does-a-queue-compare-to-a-topic.html"},"https://activemq.apache.org/how-does-a-queue-compare-to-a-topic.html"))))))}f.isMDXComponent=!0}}]);