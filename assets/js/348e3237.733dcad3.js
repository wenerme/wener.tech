/*! For license information please see 348e3237.733dcad3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83671],{69467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(11527),r=n(47214);const o={title:"tsx"},i="tsx",d={id:"web/nodejs/tsx",title:"tsx",description:"- esbuild-kit/tsx",source:"@site/../notes/web/nodejs/tsx.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/tsx",permalink:"/notes/web/nodejs/tsx",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/tsx.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685890478,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{title:"tsx"},sidebar:"docs",previous:{title:"ts-node",permalink:"/notes/web/nodejs/ts-node"},next:{title:"typeorm",permalink:"/notes/web/nodejs/typeorm"}},l={},c=[];function a(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tsx",children:"tsx"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/esbuild-kit/tsx",children:"esbuild-kit/tsx"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"MIT, TS"}),"\n",(0,s.jsx)(t.li,{children:"\u57fa\u4e8e ESBuild Transform API - \u4e0d\u652f\u6301\u63d2\u4ef6"}),"\n",(0,s.jsx)(t.li,{children:"\u652f\u6301 ts path"}),"\n",(0,s.jsxs)(t.li,{children:["\u4e0d\u652f\u6301 emitDecoratorMetadata - ",(0,s.jsx)(t.a,{href:"https://github.com/esbuild-kit/core-utils/issues/14",children:"esbuild-kit/core-utils#14"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"tsx run.ts\n# \u7b49\u540c\u4e8e\nts-node --esm --transpileOnly run.ts\n\n# \u6309\u56de\u8f66\u53ef\u624b\u52a8\u91cd\u65b0\u8fd0\u884c\n# --clear-screen=false\ntsx watch ./file.ts\n\nNODE_OPTIONS='--loader tsx' node ./file.ts\n\n# transpile\n# \u5047\u8bbe\u7528\u5230\u7684\u5305 \u5b9a\u4e49\u4e86 package.json#exports[.].typescript \u6307\u5411\u6e90\u7801\ntsx --conditions=typescript ./src/server.ts\ntsx watch --conditions=typescript ./src/server.ts\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"flag"}),(0,s.jsx)(t.th,{children:"for"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["--tsconfig ",(0,s.jsx)(t.code,{children:"<FILE>"})]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--no-cache"}),(0,s.jsx)(t.td,{})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3354:(e,t,n)=>{var s=n(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,o={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:a,props:o,_owner:d.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(50959);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);