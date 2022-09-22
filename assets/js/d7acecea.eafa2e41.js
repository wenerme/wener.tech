"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27557],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58327:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"DOM FAQ"},p="DOM FAQ",s={unversionedId:"web/dom-faq",id:"web/dom-faq",title:"DOM FAQ",description:"- FOUC - flash of unstyled content",source:"@site/../notes/web/dom-faq.md",sourceDirName:"web",slug:"/web/dom-faq",permalink:"/notes/web/dom-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/dom-faq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"DOM FAQ"},sidebar:"docs",previous:{title:"Web Dev FAQ",permalink:"/notes/web/dev/web-dev-faq"},next:{title:"DOM",permalink:"/notes/web/dom"}},m={},u=[{value:"ShadowRoot rem &amp; font-size",id:"shadowroot-rem--font-size",level:2},{value:"ShadowRoot.mode",id:"shadowrootmode",level:2},{value:"shadow dom \u91cd\u7f6e host \u6837\u5f0f",id:"shadow-dom-\u91cd\u7f6e-host-\u6837\u5f0f",level:2},{value:"\u521d\u59cb\u5316 style",id:"\u521d\u59cb\u5316-style",level:2},{value:"a \u7684 download \u4e0d\u751f\u6548",id:"a-\u7684-download-\u4e0d\u751f\u6548",level:2},{value:"key vs code",id:"key-vs-code",level:2},{value:"\u5b57\u4f53\u68c0\u6d4b",id:"\u5b57\u4f53\u68c0\u6d4b",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dom-faq"},"DOM FAQ"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FOUC - flash of unstyled content",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528 style \u65f6"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://w3c.github.io/uievents/tools/main.html"},"UI Events Testing Tools")))),(0,l.kt)("li",{parentName:"ul"},"Comparison of Event Targets",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets"},"https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets"))))),(0,l.kt)("h2",{id:"shadowroot-rem--font-size"},"ShadowRoot rem & font-size"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u8986\u76d6"),(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u81f4 rem \u53d7\u5916\u90e8\u5f71\u54cd - html font-size"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u8003\u8651\u4f7f\u7528 em"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lamplightdev.com/blog/2019/03/26/why-is-my-web-component-inheriting-styles/"},"Why is my Web Component inheriting styles?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tailwindlabs/tailwindcss/issues/1232#issuecomment-754804258"},"\u4fee\u6539 tailwindcss \u4f7f\u7528 px \u800c\u4e0d\u662f rem"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7"},"defaultConfig.stub.js"))))))),(0,l.kt)("h2",{id:"shadowrootmode"},"ShadowRoot.mode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"open",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f55 element.shadowRoot"),(0,l.kt)("li",{parentName:"ul"},"\u53d7\u5916\u90e8 style \u5f71\u54cd"))),(0,l.kt)("li",{parentName:"ul"},"closed",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u8bb0\u5f55 root"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u6709\u9700\u8981\u9700\u8981\u81ea\u5df1\u4f7f\u7528 WeakMap \u8ddf\u8e2a\u5f15\u7528")))),(0,l.kt)("h2",{id:"shadow-dom-\u91cd\u7f6e-host-\u6837\u5f0f"},"shadow dom \u91cd\u7f6e host \u6837\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},":host {\n  all: initial;\n}\n")),(0,l.kt)("h2",{id:"\u521d\u59cb\u5316-style"},"\u521d\u59cb\u5316 style"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u65b0\u7684\u65b9\u5f0f - 2019, Chrome 73+\nvar sheet = new CSSStyleSheet();\nsheet.replaceSync(`.color { color: pink }`);\nhost.shadowRoot.adoptedStyleSheets = [sheet];\n\n// \u65e7\u7684\u65b9\u5f0f\nlet style = document.createElement('style');\nstyle.textContent = css;\ncontainer.appendChild(style);\n")),(0,l.kt)("h2",{id:"a-\u7684-download-\u4e0d\u751f\u6548"},"a \u7684 download \u4e0d\u751f\u6548"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c HTTP \u6709 Content-Disposition \u5934 \u5219\u4f18\u5148"),(0,l.kt)("li",{parentName:"ul"},"\u975e same-origin download \u5c5e\u6027\u65e0\u6548")),(0,l.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u9884\u5148\u4e0b\u8f7d base64 \u7136\u540e\u4e0b\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- same orgin --\x3e\n<a href="/wp-content/uploads/file.mp4" download="file.mp4">\n  \x3c!-- pre-download --\x3e\n  <a download href="data:application/octet-stream;base64,PD94ANDSOON">Download Me</a></a\n>\n')),(0,l.kt)("h2",{id:"key-vs-code"},"key vs code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key - \u5b9e\u9645\u8f93\u5165\u5185\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6587\u672c\u8f93\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u53d7\u952e\u76d8\u5e03\u5c40\u5f71\u54cd"))),(0,l.kt)("li",{parentName:"ul"},"code - \u8f93\u5165\u7684\u7269\u7406\u5e03\u5c40",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u64cd\u4f5c\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53d7\u952e\u76d8\u5e03\u5c40\u5f71\u54cd"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://w3c.github.io/uievents/tools/key-event-viewer.html"},"Keyboard Event Viewer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/web/updates/2016/04/keyboardevent-keys-codes"},"What\u2019s New with KeyboardEvents? Keys and Codes!"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"code"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"a"),(0,l.kt)("td",{parentName:"tr",align:null},"KeyA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"KeyA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Digit1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!")),(0,l.kt)("td",{parentName:"tr",align:null},"Digit1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"Minus")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enter"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shift"),(0,l.kt)("td",{parentName:"tr",align:null},"ShiftLeft")))),(0,l.kt)("h2",{id:"\u5b57\u4f53\u68c0\u6d4b"},"\u5b57\u4f53\u68c0\u6d4b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"document.fonts.check('12px ui-serif');\n")))}c.isMDXComponent=!0}}]);