"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10883],{29028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(96600),r=n(27279),s=(n(59496),n(3905)),o=["components"],l={title:"Messaging"},i=void 0,p={unversionedId:"web/spec/messaging",id:"web/spec/messaging",title:"Messaging",description:"- MessagePort extends EventTarget",source:"@site/notes/web/spec/messaging.md",sourceDirName:"web/spec",slug:"/web/spec/messaging",permalink:"/notes/web/spec/messaging",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/spec/messaging.md",tags:[],version:"current",frontMatter:{title:"Messaging"},sidebar:"docs",previous:{title:"JavaScript \u5e38\u89c1\u95ee\u9898",permalink:"/notes/web/spec/js-faq"},next:{title:"PWA",permalink:"/notes/web/spec/pwa"}},c={},u=[{value:"MessagePort",id:"messageport",level:2},{value:"BroadcastChannel",id:"broadcastchannel",level:2},{value:"Port at index 0 is already neutered",id:"port-at-index-0-is-already-neutered",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"MessagePort extends EventTarget",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"postMessage"),(0,s.kt)("li",{parentName:"ul"},"start - \u5f00\u59cb\u53d1\u9001\u6d88\u606f - \u8bbe\u7f6e onmessage \u9690\u542b start"),(0,s.kt)("li",{parentName:"ul"},"close"),(0,s.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"message"),(0,s.kt)("li",{parentName:"ul"},"messageerror"))))),(0,s.kt)("li",{parentName:"ul"},"MessageChannel - port1 <-> port2"),(0,s.kt)("li",{parentName:"ul"},"BroadcastChannel - origin \u7eac\u5ea6 - \u591a\u7a97\u53e3\u4fe1\u606f\u4f20\u9012",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"close - \u505c\u6b62\u63a5\u53d7"))),(0,s.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API"},"Channel Messaging API")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/web-messaging.html"},"web-messaging"))))),(0,s.kt)("h1",{id:"demo"},"Demo"),(0,s.kt)("h2",{id:"messageport"},"MessagePort"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"MessagePort \u53ea\u6709 message \u4f1a\u4e92\u76f8\u4f20\u9012")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const ch = new MessageChannel();\n\n// \u975e message \u53ea\u662f\u76d1\u542c\u5f53\u524d target \u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\nch.port1.addEventListener('Ready', (e) => {\n  console.debug(`port 1`, e.type, e.detail);\n});\nch.port1.addEventListener('message', (e) => {\n  console.debug(`port 1`, e.type, e.data);\n});\n\nch.port2.addEventListener('Ready', (e) => {\n  console.debug(`port 2`, e.type, e.detail);\n});\nch.port2.addEventListener('message', (e) => {\n  console.debug(`port 2`, e.type, e.data);\n});\n\n// \u4f1a\u76f4\u63a5\u89e6\u53d1\nch.port1.dispatchEvent(new CustomEvent('Ready', { detail: 'to port2' }));\nch.port2.dispatchEvent(new CustomEvent('Ready', { detail: 'to port1' }));\n\n// \u4e0d\u4f1a\u89e6\u53d1 - \u6ca1\u6709 start\nch.port1.postMessage({ type: 'MessageReady', detail: 'to port2' });\nch.port2.postMessage({ type: 'MessageReady', detail: 'to port1' });\n\nconsole.debug(`setup`);\n\n// \u4f7f\u7528 addEventListener \u9700\u8981\u624b\u52a8 start\nch.port1.start();\nch.port2.start();\n")),(0,s.kt)("h2",{id:"broadcastchannel"},"BroadcastChannel"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u53ea\u8981\u540d\u5b57\u76f8\u540c\uff0c\u5728\u4e0d\u540c Tab \u90fd\u53ef\u4ee5\u63a5\u6536\u5230")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const a = new BroadcastChannel('Auth');\nconst b = new BroadcastChannel('Auth');\nconst c = new BroadcastChannel('Auth');\n\na.addEventListener('message', (e) => console.log(`a got`, e.data));\nb.addEventListener('message', (e) => console.log(`b got`, e.data));\nc.addEventListener('message', (e) => console.log(`c got`, e.data));\n\na.postMessage({ by: 'a' });\nb.postMessage({ by: 'b' });\nc.postMessage({ by: 'c' });\n")),(0,s.kt)("h1",{id:"faq"},"FAQ"),(0,s.kt)("h2",{id:"port-at-index-0-is-already-neutered"},"Port at index 0 is already neutered"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u91cd\u590d\u8fdb\u884c transfer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/38283644/1870054"},"https://stackoverflow.com/a/38283644/1870054"))))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);