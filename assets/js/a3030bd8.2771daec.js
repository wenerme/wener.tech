"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41653],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=c(r),m=n,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||l;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},46091:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"Web FAQ",tags:["FAQ"]},s=void 0,c={unversionedId:"web/web-faq",id:"web/web-faq",title:"Web FAQ",description:"web worker vs serviceWorker vs worklet",source:"@site/notes/web/web-faq.md",sourceDirName:"web",slug:"/web/web-faq",permalink:"/notes/web/web-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/web-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Web FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Web Awesome",permalink:"/notes/web/web-awesome"},next:{title:"AlpineJS",permalink:"/notes/web/framework/alpinejs"}},p=[{value:"web worker vs serviceWorker vs worklet",id:"web-worker-vs-serviceworker-vs-worklet",children:[],level:2},{value:"\u56fe\u7247\u61d2\u52a0\u8f7d",id:"\u56fe\u7247\u61d2\u52a0\u8f7d",children:[],level:2},{value:"URL \u5b89\u5168\u5b57\u7b26 / URL Safe characters",id:"url-\u5b89\u5168\u5b57\u7b26--url-safe-characters",children:[],level:2},{value:"HTTP Headers",id:"http-headers",children:[{value:"cache",id:"cache",children:[],level:3},{value:"websocket",id:"websocket",children:[],level:3}],level:2},{value:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61",id:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61",children:[],level:2},{value:"sessionStorage vs localStorage",id:"sessionstorage-vs-localstorage",children:[],level:2},{value:"origin",id:"origin",children:[],level:2},{value:"window \u4e8b\u4ef6",id:"window-\u4e8b\u4ef6",children:[],level:2},{value:"websocket auth",id:"websocket-auth",children:[],level:2},{value:"cross-origin vs. same-site",id:"cross-origin-vs-same-site",children:[],level:2}],u={toc:p};function k(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"web-worker-vs-serviceworker-vs-worklet"},"web worker vs serviceWorker vs worklet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Worklets",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5904\u7406 pipeline hook"),(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528\u6d4f\u89c8\u5668\u5e95\u5c42\u673a\u5236 - styling, layout, audio"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://drafts.css-houdini.org/css-animation-worklet/"},"CSS Animation Worklet API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://drafts.css-houdini.org/css-layout-api-1/#layout-worklet"},"Layout Worklet")))),(0,l.kt)("li",{parentName:"ul"},"Service workers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668 \u7f51\u7edc\u7684\u4ee3\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u62e6\u622a\u8bf7\u6c42\uff0c\u91cd\u5b9a\u5411\u5230\u7f13\u5b58\uff0c\u5b9e\u73b0\u79bb\u7ebf\u8bbf\u95ee\u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},"Web workers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// web worker\nconst myWorker = new Worker('worker.js');\nmyWorker.postMessage('Hello!');\nmyWorker.onmessage = function (e) {\n  console.log(e.data);\n};\n\n// serviceWorker\nnavigator.serviceWorker.register('/service-worker.js');\n\n// worklet\nCSS.paintWorklet.addModule('myWorklet.js');\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Web Workers"),(0,l.kt)("th",{parentName:"tr",align:null},"Service Workers"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instances"),(0,l.kt)("td",{parentName:"tr",align:null},"Many per tab"),(0,l.kt)("td",{parentName:"tr",align:null},"One for all tabs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lifespan"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as tab"),(0,l.kt)("td",{parentName:"tr",align:null},"Independent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Intended use"),(0,l.kt)("td",{parentName:"tr",align:null},"Parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"Offline support")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://html5workertest.com/"},"https://html5workertest.com/"))),(0,l.kt)("h2",{id:"\u56fe\u7247\u61d2\u52a0\u8f7d"},"\u56fe\u7247\u61d2\u52a0\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<img loading="lazy" src="https://" />\n')),(0,l.kt)("h2",{id:"url-\u5b89\u5168\u5b57\u7b26--url-safe-characters"},"URL \u5b89\u5168\u5b57\u7b26 / URL Safe characters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unreserved / \u672a\u4fdd\u7559\u5b57\u7b26 / \u5b89\u5168\u5b57\u7b26",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[0-9a-zA-Z-._~]")))),(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u7559",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'ampersand ("&")'),(0,l.kt)("li",{parentName:"ul"},'dollar ("$")'),(0,l.kt)("li",{parentName:"ul"},'plus sign ("+")'),(0,l.kt)("li",{parentName:"ul"},'comma (",")'),(0,l.kt)("li",{parentName:"ul"},'forward slash ("/")'),(0,l.kt)("li",{parentName:"ul"},'colon (":")'),(0,l.kt)("li",{parentName:"ul"},'semi-colon (";")'),(0,l.kt)("li",{parentName:"ul"},'equals ("=")'),(0,l.kt)("li",{parentName:"ul"},'question mark ("?")'),(0,l.kt)("li",{parentName:"ul"},"'At' symbol (\"@\")"),(0,l.kt)("li",{parentName:"ul"},'pound ("#").'))),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u8ba4\u4e3a\u4e0d\u5b89\u5168",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'space (" ")'),(0,l.kt)("li",{parentName:"ul"},"less than and greater than (",(0,l.kt)("inlineCode",{parentName:"li"},"<>"),")"),(0,l.kt)("li",{parentName:"ul"},"open and close brackets (",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),")"),(0,l.kt)("li",{parentName:"ul"},"open and close braces (",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),")"),(0,l.kt)("li",{parentName:"ul"},"pipe (",(0,l.kt)("inlineCode",{parentName:"li"},"|"),")"),(0,l.kt)("li",{parentName:"ul"},"backslash (",(0,l.kt)("inlineCode",{parentName:"li"},"\\"),")"),(0,l.kt)("li",{parentName:"ul"},"caret (",(0,l.kt)("inlineCode",{parentName:"li"},"^"),")"),(0,l.kt)("li",{parentName:"ul"},"percent (",(0,l.kt)("inlineCode",{parentName:"li"},"%"),")"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc3986#section-2"},"rfc3986#section-2"))))),(0,l.kt)("h2",{id:"http-headers"},"HTTP Headers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"\nsec-ch-ua-mobile: ?0\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: same-site\n')),(0,l.kt)("h3",{id:"cache"},"cache"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MDN ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"Cache-Control"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Cache-Control: max-age=<seconds>\nCache-Control: max-stale[=<seconds>]\nCache-Control: min-fresh=<seconds>\nCache-Control: no-cache\nCache-Control: no-store\nCache-Control: no-transform\nCache-Control: only-if-cached\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Cache-Control: must-revalidate\nCache-Control: no-cache\nCache-Control: no-store\nCache-Control: no-transform\nCache-Control: public\nCache-Control: private\nCache-Control: proxy-revalidate\nCache-Control: max-age=<seconds>\nCache-Control: s-maxage=<seconds>\n\nCache-Control: immutable\nCache-Control: stale-while-revalidate=<seconds>\nCache-Control: stale-if-error=<seconds>\n")),(0,l.kt)("h3",{id:"websocket"},"websocket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits\nSec-WebSocket-Key: R9DINzhe/9zYRFOjZEd41A==\nSec-WebSocket-Protocol: sip\nSec-WebSocket-Version: 13\nUpgrade: websocket\n")),(0,l.kt)("h2",{id:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61"},"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"document.currentScript")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script data-option="value" src="lib.js"><\/script>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lib.js"',title:'"lib.js"'},"console.log(document.currentScript.dataset.option);\n")),(0,l.kt)("h2",{id:"sessionstorage-vs-localstorage"},"sessionStorage vs localStorage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sessionStorage",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tab/window \u7eac\u5ea6 - \u5173\u95ed\u5219\u6e05\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u65b0 tab/window \u4f1a copy \u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e92\u76f8\u4e0d\u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"\u9650\u5236 5 MB"))),(0,l.kt)("li",{parentName:"ul"},"localStorage",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"origin \u7eac\u5ea6 - \u6301\u4e45\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u53ef\u8de8 tab \u4f20\u9012"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u76d1\u542c\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"10 MB per origin")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u76d1\u542c localStorage\nwindow.addEventListener('storage', (e) => console.log(e));\n")),(0,l.kt)("h2",{id:"origin"},"origin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5b89\u5168\u9694\u79bb\u7684\u4e00\u4e2a\u7eac\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"schema+host - \u4e0d\u5305\u542b\u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin"},"https://developer.mozilla.org/en-US/docs/Glossary/Origin"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"location.origin;\n")),(0,l.kt)("h2",{id:"window-\u4e8b\u4ef6"},"window \u4e8b\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers"},"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers"))),(0,l.kt)("h2",{id:"websocket-auth"},"websocket auth"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"cookie - \u6700\u7b80\u5355"),(0,l.kt)("li",{parentName:"ol"},"\u534f\u8bae\u5185\u6388\u6743"),(0,l.kt)("li",{parentName:"ol"},"otp \u65b9\u5f0f")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/websocket-security"},"https://devcenter.heroku.com/articles/websocket-security"))),(0,l.kt)("h2",{id:"cross-origin-vs-same-site"},"cross-origin vs. same-site"))}k.isMDXComponent=!0}}]);