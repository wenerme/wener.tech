/*! For license information please see f0f3723d.d9dce48f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99077],{55685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(11527),i=r(47214);const s={title:"tauri"},a="tauri",o={id:"web/framework/tauri",title:"tauri",description:"- tauri-apps/tauri",source:"@site/../notes/web/framework/tauri.md",sourceDirName:"web/framework",slug:"/web/framework/tauri",permalink:"/notes/web/framework/tauri",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/tauri.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677332073,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{title:"tauri"},sidebar:"docs",previous:{title:"taro",permalink:"/notes/web/framework/taro"},next:{title:"ts-patch",permalink:"/notes/web/framework/ts-patch"}},c={},l=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tauri",children:"tauri"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/tauri-apps/tauri",children:"tauri-apps/tauri"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u652f\u6301 \u591a WebView - core+WebView \u8fdb\u7a0b"}),"\n",(0,n.jsx)(t.li,{children:"IPC \u8d70 core \u8fdb\u7a0b\u8def\u7531 - \u5168\u5c40\u72b6\u6001\u5e94\u8be5\u5728 core \u8fdb\u7a0b\u7ef4\u62a4"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Windows WebView2"}),"\n",(0,n.jsx)(t.li,{children:"macOS 10.13+ WKWebView"}),"\n",(0,n.jsx)(t.li,{children:"Linux webkitgtk"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u4e0d\u652f\u6301\u7c7b\u4f3c Electron \u53e0\u52a0 BrowserView/webview ",(0,n.jsx)(t.a,{href:"https://github.com/tauri-apps/tauri/issues/2709",children:"#2709"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u4e0d\u80fd\u7528\u6765\u5b9e\u73b0\u6d4f\u89c8\u5668"}),"\n",(0,n.jsxs)(t.li,{children:["\u4e0d\u53ef\u4ee5\u591a\u4e2a WebView ",(0,n.jsx)(t.a,{href:"https://github.com/tauri-apps/tauri/issues/2975",children:"#2975"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"\u4e0d\u652f\u6301\u591a\u7a97\u53e3"}),"\n"]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# {x86_64,aarch64,universal}-apple-darwin\n# i686-pc-windows-msvc\ntauri build --target x86_64-apple-darwin\n\n# 32bit windows\n# rustup target add i686-pc-windows-msvc\nrustup target list\nrustc --version\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3354:(e,t,r)=>{var n=r(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},11527:(e,t,r)=>{e.exports=r(3354)},47214:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(50959);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);