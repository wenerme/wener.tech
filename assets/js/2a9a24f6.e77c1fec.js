"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97879],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),b=o,m=f["".concat(l,".").concat(b)]||f[b]||u[b]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81843:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e};const f={title:"WebSocket"},b="websocket",m={unversionedId:"web/websocket",id:"web/websocket",title:"WebSocket",description:"WebSockets over HTTP/2",source:"@site/../notes/web/websocket.md",sourceDirName:"web",slug:"/web/websocket",permalink:"/notes/web/websocket",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/websocket.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641222557,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{title:"WebSocket"},sidebar:"docs",previous:{title:"WebRTC Awesome",permalink:"/notes/web/webrtc-awesome"}},w={},y=[{value:"WebSockets over HTTP/2",id:"websockets-over-http2",level:2}],d={toc:y};function k(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},d),p),a(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"websocket"}),"websocket"),(0,n.kt)("h2",u({},{id:"websockets-over-http2"}),"WebSockets over HTTP/2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc8441"}),"rfc8441")," Bootstrapping WebSockets with HTTP/2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.chromestatus.com/feature/6251293127475200"}),"Chrome 91")),(0,n.kt)("li",{parentName:"ul"},"HAProxy 2.4.9 - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/haproxy/haproxy/issues/1364"}),"haproxy#1364")),(0,n.kt)("li",{parentName:"ul"},"Golang \u6682\u4e0d\u652f\u6301",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/golang/go/issues/32763"}),"golang/go#32763")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/nhooyr/websocket/issues/4"}),"nhooyr/websocket#4"))))))}k.isMDXComponent=!0}}]);