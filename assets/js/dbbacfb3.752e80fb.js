"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98562],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(i,".").concat(g)]||u[g]||d[g]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return h}});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>s(e,o(t)),g=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"Messaging"},f="Messaging",b={unversionedId:"web/spec/messaging",id:"web/spec/messaging",title:"Messaging",description:"- MessagePort extends EventTarget",source:"@site/../notes/web/spec/messaging.md",sourceDirName:"web/spec",slug:"/web/spec/messaging",permalink:"/notes/web/spec/messaging",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/messaging.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641222557,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{title:"Messaging"},sidebar:"docs",previous:{title:"JavaScript \u5e38\u89c1\u95ee\u9898",permalink:"/notes/web/spec/js-faq"},next:{title:"PWA",permalink:"/notes/web/spec/pwa"}},y={},h=[{value:"MessagePort",id:"messageport",level:2},{value:"BroadcastChannel",id:"broadcastchannel",level:2},{value:"Port at index 0 is already neutered",id:"port-at-index-0-is-already-neutered",level:2}],v={toc:h},k="wrapper";function w(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(k,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"messaging"}),"Messaging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MessagePort extends EventTarget",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"postMessage"),(0,r.kt)("li",{parentName:"ul"},"start - \u5f00\u59cb\u53d1\u9001\u6d88\u606f - \u8bbe\u7f6e onmessage \u9690\u542b start"),(0,r.kt)("li",{parentName:"ul"},"close"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"message"),(0,r.kt)("li",{parentName:"ul"},"messageerror"))))),(0,r.kt)("li",{parentName:"ul"},"MessageChannel - port1 <-> port2"),(0,r.kt)("li",{parentName:"ul"},"BroadcastChannel - origin \u7eac\u5ea6 - \u591a\u7a97\u53e3\u4fe1\u606f\u4f20\u9012",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"close - \u505c\u6b62\u63a5\u53d7"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API"}),"Channel Messaging API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://html.spec.whatwg.org/multipage/web-messaging.html"}),"web-messaging"))))),(0,r.kt)("h1",u({},{id:"demo"}),"Demo"),(0,r.kt)("h2",u({},{id:"messageport"}),"MessagePort"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"MessagePort \u53ea\u6709 message \u4f1a\u4e92\u76f8\u4f20\u9012")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const ch = new MessageChannel();\n\n// \u975e message \u53ea\u662f\u76d1\u542c\u5f53\u524d target \u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\nch.port1.addEventListener('Ready', (e) => {\n  console.debug(`port 1`, e.type, e.detail);\n});\nch.port1.addEventListener('message', (e) => {\n  console.debug(`port 1`, e.type, e.data);\n});\n\nch.port2.addEventListener('Ready', (e) => {\n  console.debug(`port 2`, e.type, e.detail);\n});\nch.port2.addEventListener('message', (e) => {\n  console.debug(`port 2`, e.type, e.data);\n});\n\n// \u4f1a\u76f4\u63a5\u89e6\u53d1\nch.port1.dispatchEvent(new CustomEvent('Ready', { detail: 'to port2' }));\nch.port2.dispatchEvent(new CustomEvent('Ready', { detail: 'to port1' }));\n\n// \u4e0d\u4f1a\u89e6\u53d1 - \u6ca1\u6709 start\nch.port1.postMessage({ type: 'MessageReady', detail: 'to port2' });\nch.port2.postMessage({ type: 'MessageReady', detail: 'to port1' });\n\nconsole.debug(`setup`);\n\n// \u4f7f\u7528 addEventListener \u9700\u8981\u624b\u52a8 start\nch.port1.start();\nch.port2.start();\n")),(0,r.kt)("h2",u({},{id:"broadcastchannel"}),"BroadcastChannel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u8981\u540d\u5b57\u76f8\u540c\uff0c\u5728\u4e0d\u540c Tab \u90fd\u53ef\u4ee5\u63a5\u6536\u5230")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const a = new BroadcastChannel('Auth');\nconst b = new BroadcastChannel('Auth');\nconst c = new BroadcastChannel('Auth');\n\na.addEventListener('message', (e) => console.log(`a got`, e.data));\nb.addEventListener('message', (e) => console.log(`b got`, e.data));\nc.addEventListener('message', (e) => console.log(`c got`, e.data));\n\na.postMessage({ by: 'a' });\nb.postMessage({ by: 'b' });\nc.postMessage({ by: 'c' });\n")),(0,r.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",u({},{id:"port-at-index-0-is-already-neutered"}),"Port at index 0 is already neutered"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u91cd\u590d\u8fdb\u884c transfer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/a/38283644/1870054"}),"https://stackoverflow.com/a/38283644/1870054"))))}w.isMDXComponent=!0}}]);