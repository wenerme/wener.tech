/*! For license information please see fa55cd47.d4e7bdf8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19292],{12616:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(2488),l=s(62780);const r={title:"Web FAQ",tags:["FAQ"]},t="Web FAQ",o={id:"web/web-faq",title:"Web FAQ",description:"Headers",source:"@site/../notes/web/web-faq.md",sourceDirName:"web",slug:"/web/faq",permalink:"/notes/web/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/web-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1710413103,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Web FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Web Awesome",permalink:"/notes/web/awesome"},next:{title:"vitals",permalink:"/notes/web/vitals"}},c={},d=[{value:"Headers",id:"headers",level:2},{value:"global",id:"global",level:2},{value:"trailing slash",id:"trailing-slash",level:2},{value:"Content SecurityPolicy",id:"content-securitypolicy",level:2},{value:"web worker vs serviceWorker vs worklet",id:"web-worker-vs-serviceworker-vs-worklet",level:2},{value:"\u56fe\u7247\u61d2\u52a0\u8f7d",id:"\u56fe\u7247\u61d2\u52a0\u8f7d",level:2},{value:"HTTP Headers",id:"http-headers",level:2},{value:"websocket",id:"websocket",level:3},{value:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61",id:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61",level:2},{value:"sessionStorage vs localStorage",id:"sessionstorage-vs-localstorage",level:2},{value:"origin",id:"origin",level:2},{value:"window \u4e8b\u4ef6",id:"window-\u4e8b\u4ef6",level:2},{value:"websocket auth",id:"websocket-auth",level:2},{value:"cross-origin vs. same-site",id:"cross-origin-vs-same-site",level:2},{value:"Possible side-effect in debug-evaluate",id:"possible-side-effect-in-debug-evaluate",level:2},{value:"passive event listener",id:"passive-event-listener",level:2},{value:"Failed to execute &#39;postMessage&#39; on &#39;DOMWindow&#39;: The target origin provided does not match the recipient window&#39;s origin",id:"failed-to-execute-postmessage-on-domwindow-the-target-origin-provided-does-not-match-the-recipient-windows-origin",level:2},{value:"slug",id:"slug",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"web-faq",children:"Web FAQ"}),"\n",(0,i.jsx)(n.h2,{id:"headers",children:"Headers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["X-Response-Time\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5355\u4f4d ms"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"X-Powered-By"}),"\n",(0,i.jsx)(n.li,{children:"X-AspNet-Version"}),"\n",(0,i.jsx)(n.li,{children:"X-Frame-Options"}),"\n",(0,i.jsx)(n.li,{children:"Server-Timing"}),"\n",(0,i.jsx)(n.li,{children:"X-API-Key"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"global",children:"global"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["globalThis\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ECMAScript 2020"}),"\n",(0,i.jsx)(n.li,{children:"Chrome 71"}),"\n",(0,i.jsx)(n.li,{children:"NodeJS 12"}),"\n",(0,i.jsx)(n.li,{children:"Safari 12.1"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"global - Node.js"}),"\n",(0,i.jsx)(n.li,{children:"self - Web Worker"}),"\n",(0,i.jsx)(n.li,{children:"window - Browser"}),"\n",(0,i.jsx)(n.li,{children:"this - iife \u73af\u5883"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"trailing-slash",children:"trailing slash"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/slorber/trailing-slash-guide",children:"slorber/trailing-slash-guide"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"content-securitypolicy",children:"Content SecurityPolicy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; img-src https://*; child-src 'none';\" />\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"default-src 'self'; script-src 'none'; sandbox;"})}),"\n",(0,i.jsx)(n.li,{children:"Mitigating cross-site scripting"}),"\n",(0,i.jsx)(n.li,{children:"Mitigating packet sniffing attacks"}),"\n",(0,i.jsx)(n.li,{children:"XSS"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://content-security-policy.com/",children:"https://content-security-policy.com/"})}),"\n",(0,i.jsxs)(n.li,{children:["Content-Security-Policy\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",children:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"web-worker-vs-serviceworker-vs-worklet",children:"web worker vs serviceWorker vs worklet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Worklets\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6d4f\u89c8\u5668\u5904\u7406 pipeline hook"}),"\n",(0,i.jsx)(n.li,{children:"\u5229\u7528\u6d4f\u89c8\u5668\u5e95\u5c42\u673a\u5236 - styling, layout, audio"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://drafts.css-houdini.org/css-animation-worklet/",children:"CSS Animation Worklet API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://drafts.css-houdini.org/css-layout-api-1/#layout-worklet",children:"Layout Worklet"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Service workers\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6d4f\u89c8\u5668 \u7f51\u7edc\u7684\u4ee3\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u62e6\u622a\u8bf7\u6c42\uff0c\u91cd\u5b9a\u5411\u5230\u7f13\u5b58\uff0c\u5b9e\u73b0\u79bb\u7ebf\u8bbf\u95ee\u80fd\u529b"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Web workers\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u591a\u7ebf\u7a0b"}),"\n",(0,i.jsx)(n.li,{children:"\u901a\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// web worker\nconst myWorker = new Worker('worker.js');\nmyWorker.postMessage('Hello!');\nmyWorker.onmessage = function (e) {\n  console.log(e.data);\n};\n\n// serviceWorker\nnavigator.serviceWorker.register('/service-worker.js');\n\n// worklet\nCSS.paintWorklet.addModule('myWorklet.js');\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Web Workers"}),(0,i.jsx)(n.th,{children:"Service Workers"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Instances"}),(0,i.jsx)(n.td,{children:"Many per tab"}),(0,i.jsx)(n.td,{children:"One for all tabs"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Lifespan"}),(0,i.jsx)(n.td,{children:"Same as tab"}),(0,i.jsx)(n.td,{children:"Independent"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Intended use"}),(0,i.jsx)(n.td,{children:"Parallelism"}),(0,i.jsx)(n.td,{children:"Offline support"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://html5workertest.com/",children:"https://html5workertest.com/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u56fe\u7247\u61d2\u52a0\u8f7d",children:"\u56fe\u7247\u61d2\u52a0\u8f7d"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<img loading="lazy" src="https://" />\n'})}),"\n",(0,i.jsx)(n.h2,{id:"http-headers",children:"HTTP Headers"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"\nsec-ch-ua-mobile: ?0\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: same-site\n'})}),"\n",(0,i.jsx)(n.h3,{id:"websocket",children:"websocket"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits\nSec-WebSocket-Key: R9DINzhe/9zYRFOjZEd41A==\nSec-WebSocket-Protocol: sip\nSec-WebSocket-Version: 13\nUpgrade: websocket\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61",children:"\u83b7\u53d6\u5f53\u524d\u811a\u672c\u5bf9\u8c61"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"document.currentScript"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script data-option="value" src="lib.js"><\/script>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="lib.js"',children:"console.log(document.currentScript.dataset.option);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sessionstorage-vs-localstorage",children:"sessionStorage vs localStorage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["sessionStorage\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tab/window \u7eac\u5ea6 - \u5173\u95ed\u5219\u6e05\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u65b0 tab/window \u4f1a copy \u5185\u5bb9"}),"\n",(0,i.jsx)(n.li,{children:"\u4fee\u6539\u4e92\u76f8\u4e0d\u5f71\u54cd"}),"\n",(0,i.jsx)(n.li,{children:"\u9650\u5236 5 MB"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["localStorage\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"origin \u7eac\u5ea6 - \u6301\u4e45\u5316"}),"\n",(0,i.jsx)(n.li,{children:"\u4fee\u6539\u53ef\u8de8 tab \u4f20\u9012"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u76d1\u542c\u53d8\u5316"}),"\n",(0,i.jsx)(n.li,{children:"10 MB per origin"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// \u76d1\u542c localStorage\nwindow.addEventListener('storage', (e) => console.log(e));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"origin",children:"origin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6d4f\u89c8\u5668\u5b89\u5168\u9694\u79bb\u7684\u4e00\u4e2a\u7eac\u5ea6"}),"\n",(0,i.jsx)(n.li,{children:"schema+host - \u4e0d\u5305\u542b\u8def\u5f84"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin",children:"https://developer.mozilla.org/en-US/docs/Glossary/Origin"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"location.origin;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"window-\u4e8b\u4ef6",children:"window \u4e8b\u4ef6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers",children:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"websocket-auth",children:"websocket auth"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"cookie - \u6700\u7b80\u5355"}),"\n",(0,i.jsx)(n.li,{children:"\u534f\u8bae\u5185\u6388\u6743"}),"\n",(0,i.jsx)(n.li,{children:"otp \u65b9\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/websocket-security",children:"https://devcenter.heroku.com/articles/websocket-security"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cross-origin-vs-same-site",children:"cross-origin vs. same-site"}),"\n",(0,i.jsx)(n.h2,{id:"possible-side-effect-in-debug-evaluate",children:"Possible side-effect in debug-evaluate"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u80fd\u662f console.log \u65f6\u4f20\u5165\u7684\u503c\u5305\u542b\u4e86\u592a\u591a\u4e1c\u897f\uff0c\u5176\u4e2d\u90e8\u5206\u5728 eval \u65f6\u89e6\u53d1\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u4e8b\u60c5"}),"\n",(0,i.jsx)(n.li,{children:"Chrome \u7684\u68c0\u6d4b\u673a\u5236"}),"\n",(0,i.jsx)(n.li,{children:"\u76ee\u524d Promise reject \u4f1a\u51fa\u73b0\uff0c\u5373\u4fbf\u65e0 side-effect"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=1246911",children:"https://bugs.chromium.org/p/chromium/issues/detail?id=1246911"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"useOnClickOutside \u5904\u7406 touchstart \u65f6\u89e6\u53d1\uff0c\u9700\u8981\u4f20\u5165 passive \u53c2\u6570"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"passive-event-listener",children:"passive event listener"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e0d\u7b49\u5f85\u4e8b\u4ef6\u5904\u7406\u5b8c\u6210\uff0c\u76f4\u63a5\u6267\u884c\u4e0b\u4e00\u4e2a\u4e8b\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u56e0\u6b64 preventDefault \u4e0d\u4f1a\u751f\u6548"}),"\n",(0,i.jsxs)(n.li,{children:["\u5bf9\u4e8e\u6027\u80fd\u5f71\u54cd\u8f83\u5927\u7684 event listener\uff0c\u53ef\u4ee5\u4f7f\u7528 passive \u4f18\u5316\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f8b\u5982 scroll\u3001wheel\u3001touchstart\u3001touchmove"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Chrome 51+"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/facebook/react/issues/6436",children:"react#6436"})," Support Passive Event Listeners"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"failed-to-execute-postmessage-on-domwindow-the-target-origin-provided-does-not-match-the-recipient-windows-origin",children:"Failed to execute 'postMessage' on 'DOMWindow': The target origin provided does not match the recipient window's origin"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u786e\u4fdd iframe \u5b8c\u5168\u52a0\u8f7d"}),"\n",(0,i.jsx)(n.li,{children:"sandbox=allow-same-origin"}),"\n",(0,i.jsxs)(n.li,{children:["\u5c1d\u8bd5 ",(0,i.jsx)(n.code,{children:"frame.postMessage(\"hello world!\", '*')"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"slug",children:"slug"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e00\u4e2a\u7b80\u77ed\u800c\u660e\u786e\u7684\u6807\u7b7e"}),"\n",(0,i.jsx)(n.li,{children:"\u8868\u8fbe\u6838\u5fc3\u542b\u4e49"}),"\n",(0,i.jsx)(n.li,{children:"\u7f8e\u5316 URL - \u4ea7\u751f\u66f4\u53cb\u597d\u7684\u8def\u5f84"}),"\n",(0,i.jsx)(n.li,{children:"\u901a\u5e38\u662f\u552f\u4e00\u7684 - \u8f85\u52a9\u6807\u8bc6\u6570\u636e"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u80fd\u662f\u81ea\u52a8\u8f6c\u5316\u7684\uff0c\u4e5f\u53ef\u80fd\u662f\u624b\u52a8\u6307\u5b9a"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},38088:(e,n,s)=>{var i=s(96651),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,r={},d=null,h=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)t.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:l,type:e,key:d,ref:h,props:r,_owner:o.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>t});var i=s(96651);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);