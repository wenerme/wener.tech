"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90012],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,b=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83497:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={title:"Redis FAQ",tags:["FAQ"]},l=void 0,s={unversionedId:"db/kv/redis-faq",id:"db/kv/redis-faq",title:"Redis FAQ",description:"List vs PubSub vs Stream",source:"@site/notes/db/kv/redis-faq.md",sourceDirName:"db/kv",slug:"/db/kv/redis-faq",permalink:"/notes/db/kv/redis-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/kv/redis-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Redis FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Redis",permalink:"/notes/db/kv/redis"},next:{title:"Redis Version",permalink:"/notes/db/kv/redis-version"}},c=[{value:"List vs PubSub vs Stream",id:"list-vs-pubsub-vs-stream",children:[],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-vs-pubsub-vs-stream"},"List vs PubSub vs Stream"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"List",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u91cd\u590d\u6d88\u8d39 - POP \u540e\u4e45\u4e0d\u5b58\u5728\u4e86"))),(0,i.kt)("li",{parentName:"ul"},"Pub/Sub",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u5b58\u50a8\u6570\u636e - \u7528\u4e8e\u4f20\u9012\u4fe1\u606f - \u5b9e\u73b0\u5f02\u6b65/\u540c\u6b65\u901a\u8baf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"at-most-once, fire & forget, fan-out"))),(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709 Sub \u65f6 Pub \u662f\u65e0\u610f\u4e49\u7684"))),(0,i.kt)("li",{parentName:"ul"},"Stream",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e - \u6709\u6d88\u8d39\u8005\u3001\u6d88\u8d39\u7ec4\u6982\u5ff5"),(0,i.kt)("li",{parentName:"ul"},"\u80fd\u91cd\u590d\u6d88\u8d39 - at-most-once \u6216 at-least-once"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u66f4\u591a\u6d88\u606f\u961f\u5217\u7684\u6982\u5ff5 - \u4f8b\u5982: \u6d88\u606fID\u3001\u65f6\u95f4\u6233, ACK"),(0,i.kt)("li",{parentName:"ul"},"\u80fd\u5b9e\u73b0 List \u548c Pub/Sub \u7684\u6240\u6709\u8bed\u4e49"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u963b\u585e")))))}m.isMDXComponent=!0}}]);