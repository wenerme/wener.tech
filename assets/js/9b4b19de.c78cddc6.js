"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99196],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63227:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const f={title:"centrifugo"},m="centrifugo",g={unversionedId:"service/messaging/centrifugo",id:"service/messaging/centrifugo",title:"centrifugo",description:"- centrifugal/centrifugo",source:"@site/../notes/service/messaging/centrifugo.md",sourceDirName:"service/messaging",slug:"/service/messaging/centrifugo",permalink:"/notes/service/messaging/centrifugo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/messaging/centrifugo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"centrifugo"},sidebar:"docs",previous:{title:"vips",permalink:"/notes/service/media/vips"},next:{title:"\u7f51\u7edc\u670d\u52a1",permalink:"/notes/service/network/"}},b={},k=[],y={toc:k};function d(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"centrifugo"}),"centrifugo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/centrifugal/centrifugo"}),"centrifugal/centrifugo"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u6d88\u606f\u670d\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u72ec\u7acb\u670d\u52a1\u5b58\u5728"),(0,n.kt)("li",{parentName:"ul"},"JWT \u8ba4\u8bc1"),(0,n.kt)("li",{parentName:"ul"},"\u66b4\u9732 HTTP, GRPC \u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 RPC Websocket \u8bf7\u6c42\u8f6c\u6362\u4e3a HTTP \u8bf7\u6c42"))),(0,n.kt)("li",{parentName:"ul"},"MIT \u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"language-agnostic - \u8bed\u8a00\u65e0\u5173"),(0,n.kt)("li",{parentName:"ul"},"Websocket - JSON, Protobuf"),(0,n.kt)("li",{parentName:"ul"},"SockJS - polyfill"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u5546\u4e1a\u4ea7\u54c1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://pusher.com/websockets"}),"https://pusher.com/websockets")))),(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"php+html - php \u4e0d\u6613\u5904\u7406 ws\uff0c\u4f46\u4f7f\u7528\u8be5\u670d\u52a1\u53ef\u4ee5 php --POST-> centrifugo --WS-> html"),(0,n.kt)("li",{parentName:"ul"},"vercel \u90e8\u7f72\u8bf7\u6c42\u5fc5\u987b 10s \u5185 - \u5219\u53ef\u4ee5 NextJS \u540e\u7aef -> centrifugo -> \u524d\u7aef"),(0,n.kt)("li",{parentName:"ul"},"AWS Lambda \u573a\u666f - \u6ca1\u6709\u957f\u94fe\u63a5\uff0c\u9700\u8981\u652f\u6301\u901a\u77e5"),(0,n.kt)("li",{parentName:"ul"},"Function as a Service \u573a\u666f - \u6ca1\u6709\u94fe\u63a5\u6982\u5ff5\uff0c\u9700\u8981\u652f\u6301\u901a\u77e5"),(0,n.kt)("li",{parentName:"ul"},"\u804a\u5929\u4ea7\u54c1\u3001\u5b9e\u65f6\u901a\u77e5\u3001\u6d88\u606f\u96c6\u6210\u3001\u4e8b\u4ef6\u9a71\u52a8"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Kafka\uff0c\u4f46\u662f\u662f\u9762\u5411 C \u7aef\u4ea7\u54c1"))))),(0,n.kt)("li",{parentName:"ul"},"HTTP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"X-API-Key"))),(0,n.kt)("li",{parentName:"ul"},"GRPC")))}d.isMDXComponent=!0}}]);