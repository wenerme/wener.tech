"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25673],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},29685:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&p(e,r,t[r]);return e};const s={title:"EMQX"},f="EMQX",d={unversionedId:"queue/emqx",id:"queue/emqx",title:"EMQX",description:"- emqx/emqx \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/queue/emqx.md",sourceDirName:"queue",slug:"/queue/emqx",permalink:"/notes/queue/emqx",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/emqx.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"EMQX"},sidebar:"docs",previous:{title:"ActiveMQ",permalink:"/notes/queue/activiemq"},next:{title:"mosquitto",permalink:"/notes/queue/mosquitto"}},b={},y=[],O={toc:y};function v(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},O),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"emqx"}),"EMQX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/emqx/emqx"}),"emqx/emqx")," \u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u9ad8\u53ef\u7528 MQTT Broker"),(0,n.kt)("li",{parentName:"ul"},"Erlang"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u754c\u9762\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u8bae MQTT\u3001MQTT-SN\u3001CoAP\u3001 LwM2M\u3001LoRaWAN\u3001WebSocket"),(0,n.kt)("li",{parentName:"ul"},"\u56fd\u4ea7"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.emqx.net/broker/latest/cn/advanced/plugins.html"}),"\u63d2\u4ef6")),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b58\u50a8\u9700\u8981\u4f01\u4e1a\u7248 - redis\u3001mysql\u3001postgresql\u3001mongodb\u3001cassandra\u3001dynamodb\u3001influxdb\u3001opentsdb\u3001timescale"),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u606f\u6865\u63a5\u9700\u8981\u4f01\u4e1a\u7248 - mqtt\u3001emq rpc\u3001\u3001kafka\u3001rabbitmq\u3001plusar\u3001rocketmq")))))}v.isMDXComponent=!0}}]);