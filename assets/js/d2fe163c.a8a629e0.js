/*! For license information please see d2fe163c.a8a629e0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83424],{65692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(11527),i=t(47214);const s={title:"AlpineJS"},l="AlpineJS",o={id:"web/framework/alpinejs",title:"AlpineJS",description:"- alpinejs/alpine \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/web/framework/alpinejs.md",sourceDirName:"web/framework",slug:"/web/framework/alpinejs",permalink:"/notes/web/framework/alpinejs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/alpinejs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634945411,formattedLastUpdatedAt:"Oct 22, 2021",frontMatter:{title:"AlpineJS"},sidebar:"docs",previous:{title:"favicon",permalink:"/notes/web/favicon"},next:{title:"Angular",permalink:"/notes/web/framework/angular/"}},a={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alpinejs",children:"AlpineJS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/alpinejs/alpine",children:"alpinejs/alpine"})," \u662f\u4ec0\u4e48\uff1f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7\u5728\u7eaf HTML \u4e2d\u6dfb\u52a0\u63a7\u5236\u5c5e\u6027\u6765\u9a71\u52a8\u9875\u9762\u7684\u6846\u67b6"}),"\n",(0,r.jsx)(n.li,{children:"\u8bed\u6cd5\u7c7b\u4f3c Vue \u4f46\u4e0d\u9700\u8981\u989d\u5916\u7f16\u8bd1\u3001\u811a\u672c\u7b49"}),"\n",(0,r.jsx)(n.li,{children:"\u76f8\u5f53\u4e8e\u589e\u5f3a HTML \u8bed\u6cd5"}),"\n",(0,r.jsxs)(n.li,{children:["\u914d\u5408 tailwind \u5728\u4e0d\u9700\u8981\u989d\u5916 js \u7684\u524d\u63d0\u4e0b\u5373\u53ef\u5b9e\u73b0\u8f83\u4e3a\u4e30\u5bcc\u7684\u524d\u7aef\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9879\u76ee\u53d7 tailwind \u8d44\u52a9"}),"\n",(0,r.jsxs)(n.li,{children:["codepen ",(0,r.jsx)(n.a,{href:"https://codepen.io/wenerme/pen/MWjemLX",children:"AlpineJS+TailwindCSS"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/ryangjchandler/spruce",children:"ryangjchandler/spruce"})," - \u5168\u5c40\u72b6\u6001\u7ba1\u7406"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f4d\u7f6e\u4e0e React \u7b49\u6846\u67b6\u76f8\u540c\uff0c\u56e0\u6b64\u4e0d\u6613\u5171\u5b58 - React \u53ef\u4ee5\u901a\u8fc7 dangerouslySetInnerHTML \u4f7f\u7528 alpinejs"}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'\x3c!-- \u5f15\u5165 --\x3e\n<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script>\n\n\x3c!-- \u5b9a\u4e49\u6570\u636e/\u72b6\u6001 --\x3e\n<div x-data="{ open: false }">\n  \x3c!-- \u4e8b\u4ef6\u9a71\u52a8 --\x3e\n  <button @click="open = true">Open Dropdown</button>\n  \x3c!-- \u72b6\u6001\u63a7\u5236 --\x3e\n  <ul x-show="open" @click.away="open = false">\n    Dropdown Body\n  </ul>\n</div>\n\n\x3c!-- init \u8bf7\u6c42\u540e\u53f0\u6570\u636e --\x3e\n<div x-data="{ posts: [] }" x-init="posts = await (await fetch(\'/posts\')).json()"></div>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var r=t(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(50959);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);