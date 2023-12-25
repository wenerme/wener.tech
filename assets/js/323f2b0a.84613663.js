/*! For license information please see 323f2b0a.84613663.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7241],{26211:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var l=r(11527),s=r(47214);const i={title:"Electron Dev",tags:["Devlopment"]},t="Electron Dev",d={id:"web/framework/electron/electron-dev",title:"Electron Dev",description:"- preload",source:"@site/../notes/web/framework/electron/electron-dev.md",sourceDirName:"web/framework/electron",slug:"/web/framework/electron/dev",permalink:"/notes/web/framework/electron/dev",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/electron/electron-dev.md",tags:[{label:"Devlopment",permalink:"/notes/tags/devlopment"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"Electron Dev",tags:["Devlopment"]},sidebar:"docs",previous:{title:"electron-builder",permalink:"/notes/web/framework/electron/builder"},next:{title:"Electron FAQ",permalink:"/notes/web/framework/electron/faq"}},c={},o=[{value:"Debug app",id:"debug-app",level:2},{value:"\u4e3b\u8fdb\u7a0b\u6a21\u5757",id:"\u4e3b\u8fdb\u7a0b\u6a21\u5757",level:2},{value:"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757",id:"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757",level:2},{value:"\u516c\u5171\u6a21\u5757",id:"\u516c\u5171\u6a21\u5757",level:2},{value:"\u65e0\u6846\u7a97\u53e3",id:"\u65e0\u6846\u7a97\u53e3",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"electron-dev",children:"Electron Dev"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["preload\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["modules\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"electron - renderer process modules"}),"\n",(0,l.jsx)(n.li,{children:"events"}),"\n",(0,l.jsx)(n.li,{children:"timers"}),"\n",(0,l.jsx)(n.li,{children:"url"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["polyfills\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Buffer"}),"\n",(0,l.jsx)(n.li,{children:"process"}),"\n",(0,l.jsx)(n.li,{children:"clearImmediate"}),"\n",(0,l.jsx)(n.li,{children:"setImmediate"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["sandboxed\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"app.enableSandbox()"}),"\n",(0,l.jsx)(n.li,{children:"webPreferences.sandbox"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"process.sandboxed"}),"\n",(0,l.jsx)(n.li,{children:"process.contextIsolated"}),"\n",(0,l.jsx)(n.li,{children:"\u6bcf\u4e2a JS \u4e3a\u4e00\u4e2a \u4e0a\u4e0b\u6587"}),"\n",(0,l.jsxs)(n.li,{children:["app\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"web-contents-created"}),"\n",(0,l.jsx)(n.li,{children:"before-input-event"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"BrowserWindow.getFocusedWindow()"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"ipcMain"}),(0,l.jsx)(n.th,{children:"ipcRenderer"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"on,once"}),(0,l.jsx)(n.td,{children:"send"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"on,once"}),(0,l.jsx)(n.td,{children:"postMessage"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"on,once"}),(0,l.jsx)(n.td,{children:"sendSync"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"on,once"}),(0,l.jsx)(n.td,{children:"sendTo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"on,once"}),(0,l.jsx)(n.td,{children:"sendToHost"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"handle"}),(0,l.jsx)(n.td,{children:"invoke"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"debug-app",children:"Debug app"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u4e00\u4e2a DEBUG_PROD \u53d8\u91cf\u505a\u7279\u6b8a\u5904\u7406"}),"\n",(0,l.jsx)(n.li,{children:"remote inspect"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# https://localhost:8315\nopen /Applications/WhatsApp.app --args --remote-debugging-port=8315\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4e3b\u8fdb\u7a0b\u6a21\u5757",children:"\u4e3b\u8fdb\u7a0b\u6a21\u5757"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"BrowserWindow - \u7a97\u53e3"}),"\n",(0,l.jsx)(n.li,{children:"BrowserView - \u89c6\u56fe"}),"\n",(0,l.jsx)(n.li,{children:"ipcMain - \u901a\u8baf"}),"\n",(0,l.jsx)(n.li,{children:"webContents - \u9875\u9762\u6e32\u67d3\u548c\u63a7\u5236"}),"\n",(0,l.jsx)(n.li,{children:"webFrame - \u81ea\u5b9a\u4e49\u5f53\u524d\u9875\u9762\u6e32\u67d3"}),"\n",(0,l.jsx)(n.li,{children:"webFrameMain - \u63a7\u5236\u9875\u9762\u4e5f iframe"}),"\n",(0,l.jsx)(n.li,{children:"WebRequest - \u62e6\u622a\u548c\u4fee\u6539\u8bf7\u6c42"}),"\n",(0,l.jsx)(n.li,{children:"session - \u7ba1\u7406\u6d4f\u89c8\u5668\u4f1a\u8bdd\u3001cookie\u3001\u7f13\u5b58\u3001\u4ee3\u7406\u8bbe\u7f6e"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757",children:"\u6e32\u67d3\u8fdb\u7a0b\u6a21\u5757"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["contextBridge - \u9694\u79bb\u4e0a\u4e0b\u6587\u4e4b\u95f4\u7684\u53cc\u5411\u540c\u6b65\u6865\u63a5\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"preload <-> renderer"}),"\n",(0,l.jsx)(n.li,{children:"electron 12+ \u9ed8\u8ba4\u542f\u7528 contextIsolation"}),"\n",(0,l.jsxs)(n.li,{children:["isolated \u4e0a\u4e0b\u6587 - preload \u4e0a\u4e0b\u6587 - \u5728\u6e32\u67d3\u8fdb\u7a0b\u4e2d\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u53ef\u4f7f\u7528 node \u6a21\u5757"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["ipcRenderer - renderer \u548c main \u8fdb\u7a0b\u5f02\u6b65\u901a\u8baf\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"EventEmitter + MessageChannel + invoke/sendSync + sendTo/sendToHost"}),"\n",(0,l.jsx)(n.li,{children:"invoke \u8fd4\u56de Promise \u53ef\u7528\u4e8e RPC"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["webFrame - \u81ea\u5b9a\u4e49\u6e32\u67d3\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f29\u653e\u3001\u62fc\u5199\u68c0\u67e5\u3001CSS \u4fee\u6539\u3001\u6267\u884c JS\u3001\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3001\u7f13\u5b58"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u516c\u5171\u6a21\u5757",children:"\u516c\u5171\u6a21\u5757"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"main \u548c renderer \u90fd\u53ef\u4ee5\u4f7f\u7528\u7684\u6a21\u5757"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"clipboard"}),"\n",(0,l.jsx)(n.li,{children:"crashReporter"}),"\n",(0,l.jsx)(n.li,{children:"desktopCapturer"}),"\n",(0,l.jsx)(n.li,{children:"nativeImage"}),"\n",(0,l.jsx)(n.li,{children:"shell"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u65e0\u6846\u7a97\u53e3",children:"\u65e0\u6846\u7a97\u53e3"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.electronjs.org/docs/api/frameless-window",children:"frameless-window"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:".titlebar {\n  /* \u62d6\u52a8 - \u5b50\u5143\u7d20\u53ef\u8bbe\u7f6e no-drag */\n  -webkit-app-region: drag;\n  /* \u907f\u514d\u62d6\u52a8\u548c\u9009\u62e9\u51b2\u7a81 */\n  -webkit-user-select: none;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},3354:(e,n,r)=>{var l=r(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var l,i={},o=null,h=null;for(l in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)t.call(n,l)&&!c.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===i[l]&&(i[l]=n[l]);return{$$typeof:s,type:e,key:o,ref:h,props:i,_owner:d.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>t});var l=r(50959);const s={},i=l.createContext(s);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);