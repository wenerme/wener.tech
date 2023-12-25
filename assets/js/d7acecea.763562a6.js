/*! For license information please see d7acecea.763562a6.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27557],{8598:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=s(11527),i=s(47214);const l={title:"DOM FAQ"},r="DOM FAQ",o={id:"web/dom-faq",title:"DOM FAQ",description:"- FOUC - flash of unstyled content",source:"@site/../notes/web/dom-faq.md",sourceDirName:"web",slug:"/web/dom-faq",permalink:"/notes/web/dom-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dom-faq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1703483037,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{title:"DOM FAQ"},sidebar:"docs",previous:{title:"workerd",permalink:"/notes/web/dev/workerd"},next:{title:"DOM",permalink:"/notes/web/dom"}},d={},c=[{value:"ShadowRoot rem &amp; font-size",id:"shadowroot-rem--font-size",level:2},{value:"ShadowRoot.mode",id:"shadowrootmode",level:2},{value:"shadow dom \u91cd\u7f6e host \u6837\u5f0f",id:"shadow-dom-\u91cd\u7f6e-host-\u6837\u5f0f",level:2},{value:"\u521d\u59cb\u5316 style",id:"\u521d\u59cb\u5316-style",level:2},{value:"a \u7684 download \u4e0d\u751f\u6548",id:"a-\u7684-download-\u4e0d\u751f\u6548",level:2},{value:"key vs code",id:"key-vs-code",level:2},{value:"\u5b57\u4f53\u68c0\u6d4b",id:"\u5b57\u4f53\u68c0\u6d4b",level:2},{value:"\u76d1\u542c URL \u53d8\u5316",id:"\u76d1\u542c-url-\u53d8\u5316",level:2},{value:"The target origin provided  does not match the recipient window&#39;s origin",id:"the-target-origin-provided--does-not-match-the-recipient-windows-origin",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dom-faq",children:"DOM FAQ"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["FOUC - flash of unstyled content\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5e94\u7528 style \u65f6"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://w3c.github.io/uievents/tools/main.html",children:"UI Events Testing Tools"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Comparison of Event Targets\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets",children:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"shadowroot-rem--font-size",children:"ShadowRoot rem & font-size"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u65e0\u6cd5\u8986\u76d6"}),"\n",(0,t.jsx)(n.li,{children:"\u5bfc\u81f4 rem \u53d7\u5916\u90e8\u5f71\u54cd - html font-size"}),"\n",(0,t.jsx)(n.li,{children:"\u53ef\u8003\u8651\u4f7f\u7528 em"}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://lamplightdev.com/blog/2019/03/26/why-is-my-web-component-inheriting-styles/",children:"Why is my Web Component inheriting styles?"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss/issues/1232#issuecomment-754804258",children:"\u4fee\u6539 tailwindcss \u4f7f\u7528 px \u800c\u4e0d\u662f rem"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7",children:"defaultConfig.stub.js"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"shadowrootmode",children:"ShadowRoot.mode"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["open\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8bb0\u5f55 element.shadowRoot"}),"\n",(0,t.jsx)(n.li,{children:"\u53d7\u5916\u90e8 style \u5f71\u54cd"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["closed\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0d\u4f1a\u8bb0\u5f55 root"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u6709\u9700\u8981\u9700\u8981\u81ea\u5df1\u4f7f\u7528 WeakMap \u8ddf\u8e2a\u5f15\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"shadow-dom-\u91cd\u7f6e-host-\u6837\u5f0f",children:"shadow dom \u91cd\u7f6e host \u6837\u5f0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:":host {\n  all: initial;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u521d\u59cb\u5316-style",children:"\u521d\u59cb\u5316 style"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u65b0\u7684\u65b9\u5f0f - 2019, Chrome 73+\nvar sheet = new CSSStyleSheet();\nsheet.replaceSync(`.color { color: pink }`);\nhost.shadowRoot.adoptedStyleSheets = [sheet];\n\n// \u65e7\u7684\u65b9\u5f0f\nlet style = document.createElement('style');\nstyle.textContent = css;\ncontainer.appendChild(style);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"a-\u7684-download-\u4e0d\u751f\u6548",children:"a \u7684 download \u4e0d\u751f\u6548"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679c HTTP \u6709 Content-Disposition \u5934 \u5219\u4f18\u5148"}),"\n",(0,t.jsx)(n.li,{children:"\u975e same-origin download \u5c5e\u6027\u65e0\u6548"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u9009\u62e9\u9884\u5148\u4e0b\u8f7d base64 \u7136\u540e\u4e0b\u8f7d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- same orgin --\x3e\n<a href="/wp-content/uploads/file.mp4" download="file.mp4">\n  \x3c!-- pre-download --\x3e\n  <a download href="data:application/octet-stream;base64,PD94ANDSOON">Download Me</a></a\n>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"key-vs-code",children:"key vs code"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["key - \u5b9e\u9645\u8f93\u5165\u5185\u5bb9\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7528\u4e8e\u6587\u672c\u8f93\u5165"}),"\n",(0,t.jsx)(n.li,{children:"\u53d7\u952e\u76d8\u5e03\u5c40\u5f71\u54cd"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["code - \u8f93\u5165\u7684\u7269\u7406\u5e03\u5c40\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7528\u4e8e\u64cd\u4f5c\u63a7\u5236"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0d\u53d7\u952e\u76d8\u5e03\u5c40\u5f71\u54cd"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://w3c.github.io/uievents/tools/key-event-viewer.html",children:"Keyboard Event Viewer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.google.com/web/updates/2016/04/keyboardevent-keys-codes",children:"What\u2019s New with KeyboardEvents? Keys and Codes!"})}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"key"}),(0,t.jsx)(n.th,{children:"code"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"a"}),(0,t.jsx)(n.td,{children:"KeyA"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"A"}),(0,t.jsx)(n.td,{children:"KeyA"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Digit1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"!"})}),(0,t.jsx)(n.td,{children:"Digit1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"-"})}),(0,t.jsx)(n.td,{children:"Minus"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Enter"}),(0,t.jsx)(n.td,{children:"Enter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Shift"}),(0,t.jsx)(n.td,{children:"ShiftLeft"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b57\u4f53\u68c0\u6d4b",children:"\u5b57\u4f53\u68c0\u6d4b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"document.fonts.check('12px ui-serif');\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Safari \u56e0\u4e3a\u9690\u79c1\u539f\u56e0\uff0c\u4e0d\u652f\u6301\uff0c\u8fd4\u56de\u9519\u8bef\u7ed3\u679c"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u76d1\u542c-url-\u53d8\u5316",children:"\u76d1\u542c URL \u53d8\u5316"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u76ee\u524d\u65e0\u6cd5\u53ef\u9760\u7684\u68c0\u6d4b url \u53d8\u5316"}),"\n",(0,t.jsxs)(n.li,{children:["patch history \u7684\u65b9\u5f0f ",(0,t.jsx)(n.a,{href:"https://github.com/streamich/react-use/blob/master/src/useLocation.ts",children:"https://github.com/streamich/react-use/blob/master/src/useLocation.ts"})]}),"\n",(0,t.jsx)(n.li,{children:"observe \u4efb\u4f55\u4fee\u6539\u7136\u540e\u68c0\u6d4b"}),"\n",(0,t.jsx)(n.li,{children:"Chrome 102+ window.navigation \u63a5\u53e3"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let last = document.location.href;\nconst observer = new MutationObserver(function (mutations) {\n  mutations.forEach(function (mutation) {\n    if (last !== document.location.href) {\n      last = document.location.href;\n      /* Changed */\n    }\n  });\n});\n\nobserver.observe(document.querySelector('body'), {\n  childList: true,\n  subtree: true,\n});\n\n// Chrome 102+\nnavigation.addEventListener('navigate', (e) => {\n  console.log(`navigate ->`, e.destination.url);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"the-target-origin-provided--does-not-match-the-recipient-windows-origin",children:"The target origin provided  does not match the recipient window's origin"})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3354:(e,n,s)=>{var t=s(50959),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,l={},c=null,h=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)r.call(n,t)&&!d.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:h,props:l,_owner:o.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(50959);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);