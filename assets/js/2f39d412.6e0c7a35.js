"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35425],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=u(n),s=a,d=k["".concat(p,".").concat(s)]||k[s]||c[s]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"Electron Dev"},p=void 0,u={unversionedId:"web/framework/electron-dev",id:"web/framework/electron-dev",title:"Electron Dev",description:"- preload",source:"@site/notes/web/framework/electron-dev.md",sourceDirName:"web/framework",slug:"/web/framework/electron-dev",permalink:"/notes/web/framework/electron-dev",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/electron-dev.md",tags:[],version:"current",frontMatter:{title:"Electron Dev"},sidebar:"docs",previous:{title:"electron-builder",permalink:"/notes/web/framework/electron-builder"},next:{title:"Electron FAQ",permalink:"/notes/web/framework/electron-faq"}},m={},c=[{value:"Debug app",id:"debug-app",level:2},{value:"\u4e3b\u8fdb\u7a0b\u6a21\u5757",id:"\u4e3b\u8fdb\u7a0b\u6a21\u5757",level:2},{value:"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757",id:"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757",level:2},{value:"\u516c\u5171\u6a21\u5757",id:"\u516c\u5171\u6a21\u5757",level:2},{value:"\u65e0\u6846\u7a97\u53e3",id:"\u65e0\u6846\u7a97\u53e3",level:3}],k={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"preload",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"modules",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"electron - renderer process modules"),(0,l.kt)("li",{parentName:"ul"},"events"),(0,l.kt)("li",{parentName:"ul"},"timers"),(0,l.kt)("li",{parentName:"ul"},"url"))),(0,l.kt)("li",{parentName:"ul"},"polyfills",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Buffer"),(0,l.kt)("li",{parentName:"ul"},"process"),(0,l.kt)("li",{parentName:"ul"},"clearImmediate"),(0,l.kt)("li",{parentName:"ul"},"setImmediate"))))),(0,l.kt)("li",{parentName:"ul"},"sandboxed",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"app.enableSandbox()"),(0,l.kt)("li",{parentName:"ul"},"webPreferences.sandbox"))),(0,l.kt)("li",{parentName:"ul"},"process.sandboxed"),(0,l.kt)("li",{parentName:"ul"},"process.contextIsolated"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a JS \u4e3a\u4e00\u4e2a \u4e0a\u4e0b\u6587"),(0,l.kt)("li",{parentName:"ul"},"app",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"web-contents-created"),(0,l.kt)("li",{parentName:"ul"},"before-input-event"))),(0,l.kt)("li",{parentName:"ul"},"BrowserWindow.getFocusedWindow()")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ipcMain"),(0,l.kt)("th",{parentName:"tr",align:null},"ipcRenderer"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on,once"),(0,l.kt)("td",{parentName:"tr",align:null},"send")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on,once"),(0,l.kt)("td",{parentName:"tr",align:null},"postMessage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on,once"),(0,l.kt)("td",{parentName:"tr",align:null},"sendSync")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on,once"),(0,l.kt)("td",{parentName:"tr",align:null},"sendTo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on,once"),(0,l.kt)("td",{parentName:"tr",align:null},"sendToHost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handle"),(0,l.kt)("td",{parentName:"tr",align:null},"invoke")))),(0,l.kt)("h2",{id:"debug-app"},"Debug app"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u4e00\u4e2a DEBUG_PROD \u53d8\u91cf\u505a\u7279\u6b8a\u5904\u7406"),(0,l.kt)("li",{parentName:"ol"},"remote inspect")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# https://localhost:8315\nopen /Applications/WhatsApp.app --args --remote-debugging-port=8315\n")),(0,l.kt)("h2",{id:"\u4e3b\u8fdb\u7a0b\u6a21\u5757"},"\u4e3b\u8fdb\u7a0b\u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BrowserWindow - \u7a97\u53e3"),(0,l.kt)("li",{parentName:"ul"},"BrowserView - \u89c6\u56fe"),(0,l.kt)("li",{parentName:"ul"},"ipcMain - \u901a\u8baf"),(0,l.kt)("li",{parentName:"ul"},"webContents - \u9875\u9762\u6e32\u67d3\u548c\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"webFrame - \u81ea\u5b9a\u4e49\u5f53\u524d\u9875\u9762\u6e32\u67d3"),(0,l.kt)("li",{parentName:"ul"},"webFrameMain - \u63a7\u5236\u9875\u9762\u4e5f iframe"),(0,l.kt)("li",{parentName:"ul"},"WebRequest - \u62e6\u622a\u548c\u4fee\u6539\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"session - \u7ba1\u7406\u6d4f\u89c8\u5668\u4f1a\u8bdd\u3001cookie\u3001\u7f13\u5b58\u3001\u4ee3\u7406\u8bbe\u7f6e")),(0,l.kt)("h2",{id:"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757"},"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"contextBridge - \u9694\u79bb\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u53cc\u5411\u540c\u6b65\u6865\u63a5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"preload <-> renderer"),(0,l.kt)("li",{parentName:"ul"},"electron 12+ \u9ed8\u8ba4\u542f\u7528 contextIsolation"),(0,l.kt)("li",{parentName:"ul"},"isolated \u4e0a\u4e0b\u6587 - preload \u4e0a\u4e0b\u6587 - \u5728\u6e32\u67d3\u8fdb\u7a0b\u4e2d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 node \u6a21\u5757"))))),(0,l.kt)("li",{parentName:"ul"},"ipcRenderer - renderer \u548c main \u8fdb\u7a0b\u5f02\u6b65\u901a\u8baf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"EventEmitter + MessageChannel + invoke/sendSync + sendTo/sendToHost"),(0,l.kt)("li",{parentName:"ul"},"invoke \u8fd4\u56de Promise \u53ef\u7528\u4e8e RPC"))),(0,l.kt)("li",{parentName:"ul"},"webFrame - \u81ea\u5b9a\u4e49\u6e32\u67d3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f29\u653e\u3001\u62fc\u5199\u68c0\u67e5\u3001CSS \u4fee\u6539\u3001\u6267\u884c JS\u3001\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3001\u7f13\u5b58")))),(0,l.kt)("h2",{id:"\u516c\u5171\u6a21\u5757"},"\u516c\u5171\u6a21\u5757"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"main \u548c renderer \u90fd\u53ef\u4ee5\u4f7f\u7528\u7684\u6a21\u5757")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"clipboard"),(0,l.kt)("li",{parentName:"ul"},"crashReporter"),(0,l.kt)("li",{parentName:"ul"},"desktopCapturer"),(0,l.kt)("li",{parentName:"ul"},"nativeImage"),(0,l.kt)("li",{parentName:"ul"},"shell")),(0,l.kt)("h3",{id:"\u65e0\u6846\u7a97\u53e3"},"\u65e0\u6846\u7a97\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/api/frameless-window"},"frameless-window"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".titlebar {\n  /* \u62d6\u52a8 - \u5b50\u5143\u7d20\u53ef\u8bbe\u7f6e no-drag */\n  -webkit-app-region: drag;\n  /* \u907f\u514d\u62d6\u52a8\u548c\u9009\u62e9\u51b2\u7a81 */\n  -webkit-user-select: none;\n}\n")))}s.isMDXComponent=!0}}]);