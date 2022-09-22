"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99505],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,N=m["".concat(l,".").concat(f)]||m[f]||p[f]||u;return n?r.createElement(N,i(i({ref:t},c),{},{components:n})):r.createElement(N,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,i=new Array(u);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<u;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(96600),a=n(27279),u=(n(59496),n(49613)),i=["components"],o={title:"NATS FAQ",tags:["FAQ"]},l=void 0,s={unversionedId:"queue/nats/nats-faq",id:"queue/nats/nats-faq",title:"NATS FAQ",description:"NATS vs NATS Streaming vs NATS JetStream",source:"@site/notes/queue/nats/nats-faq.md",sourceDirName:"queue/nats",slug:"/queue/nats/nats-faq",permalink:"/notes/queue/nats/nats-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/nats/nats-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"NATS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"nats",permalink:"/notes/queue/nats/nats-cli"},next:{title:"NATS JetStream",permalink:"/notes/queue/nats/nats-jetstream"}},c={},p=[{value:"NATS vs NATS Streaming vs NATS JetStream",id:"nats-vs-nats-streaming-vs-nats-jetstream",level:2},{value:"cannot create a queue subscription for a consumer without a deliver group",id:"cannot-create-a-queue-subscription-for-a-consumer-without-a-deliver-group",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"nats-vs-nats-streaming-vs-nats-jetstream"},"NATS vs NATS Streaming vs NATS JetStream"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"NATS",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"PubSub"),(0,u.kt)("li",{parentName:"ul"},'most once - "send-and-pray" - \u7c7b\u4f3c UDP'))),(0,u.kt)("li",{parentName:"ul"},"NATS Streaming - STAN",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"least once - \u7c7b\u4f3c TCP"),(0,u.kt)("li",{parentName:"ul"},"request-reply over nats core - protobuf"),(0,u.kt)("li",{parentName:"ul"},"Streaming Module is a client to a NATS Server"),(0,u.kt)("li",{parentName:"ul"},"\u6d88\u606f\u5b58\u50a8\u3001\u6d88\u606f ACK"),(0,u.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u670d\u52a1\u3001\u534f\u8bae\u4e0d\u540c"),(0,u.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u79fb\u9664\u5df2\u7ecf ACK \u6d88\u606f"),(0,u.kt)("li",{parentName:"ul"},"\u4e0d\u80fd NAck"),(0,u.kt)("li",{parentName:"ul"},"\u4e0d\u80fd Pull"),(0,u.kt)("li",{parentName:"ul"},"\u4e0e NATS 2.0 \u8d26\u53f7\u5b89\u5168\u96c6\u6210\u8f83\u5dee"),(0,u.kt)("li",{parentName:"ul"},"\u4e0d\u80fd \u9650\u5236\u5ba2\u6237\u7aef\u8ba2\u9605"),(0,u.kt)("li",{parentName:"ul"},"\u4e0d\u80fd \u6c34\u5e73\u6269\u5bb9"))))),(0,u.kt)("li",{parentName:"ul"},"NATS JetStream - \u53d6\u4ee3 NATS Streaming",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"nats \u5185\u7f6e"),(0,u.kt)("li",{parentName:"ul"},"STAN \u6240\u6709\u80fd\u529b+\u65b0\u7684\u529f\u80fd"))),(0,u.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://gcoolinfo.medium.com/ec2d9f426dc8"},"Comparing NATS, NATS Streaming and NATS JetStream"))))),(0,u.kt)("h2",{id:"cannot-create-a-queue-subscription-for-a-consumer-without-a-deliver-group"},"cannot create a queue subscription for a consumer without a deliver group"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"2.4+ nats")))}f.isMDXComponent=!0}}]);