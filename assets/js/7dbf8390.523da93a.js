"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75048],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,b=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20403:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return q},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const b={title:"mosquitto"},d="mosquitto",k={unversionedId:"queue/mosquitto",id:"queue/mosquitto",title:"mosquitto",description:"- mosquitto - MQTT broker",source:"@site/../notes/queue/mosquitto.md",sourceDirName:"queue",slug:"/queue/mosquitto",permalink:"/notes/queue/mosquitto",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/mosquitto.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"mosquitto"},sidebar:"docs",previous:{title:"Kafka",permalink:"/notes/queue/kafka/"},next:{title:"NATS",permalink:"/notes/queue/nats/"}},y={},O=[],v={toc:O},N="wrapper";function q(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(N,m(c(c({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"mosquitto"}),"mosquitto"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://mosquitto.org/"}),"mosquitto")," - MQTT broker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/eclipse/mosquitto"}),"eclipse/mosquitto")))),(0,n.kt)("li",{parentName:"ul"},"Topic",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sensors/COMPUTER_NAME/temperature/HARDDRIVE_NAME",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ea7\u8054\u5173\u7cfb"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sensors/+/temperature/+"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5339\u914d sensors/a/temperature/b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"a/b/#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5339\u914d a/b/c, a/b/c/d"))))),(0,n.kt)("li",{parentName:"ul"},"QoS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u65b9\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"0 - \u53d1\u9001\u4e00\u6b21"),(0,n.kt)("li",{parentName:"ul"},"1 - \u81f3\u5c11\u4e00\u6b21\uff0c\u4f1a\u8bf7\u6c42\u786e\u8ba4"),(0,n.kt)("li",{parentName:"ul"},"2 - \u51c6\u786e\u4e00\u6b21\uff0c\u4f7f\u7528 4 \u6b21\u63e1\u624b\u4fdd\u8bc1"))),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 1883")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew install mosquitto\n# AlpineLinux\napk add mosquitto mosquitto-clients\n\n# \u542f\u52a8 broker\nmosquitto\n\n# \u8ba2\u9605\nmosquitto_sub -t 'test/topic' -v\n# \u53d1\u5e03\nmosquitto_pub -t 'test/topic' -m 'hello world'\n\n# \u8ba2\u9605\u6240\u6709\nmosquitto_sub -t '#' -v\n")))}q.isMDXComponent=!0}}]);