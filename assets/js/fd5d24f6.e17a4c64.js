/*! For license information please see fd5d24f6.e17a4c64.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52060],{48208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(11527),r=n(47214);const o={title:"turbopack"},i="turbopack",c={id:"web/dev/turbopack",title:"turbopack",description:"alpha \u9636\u6bb5\uff0c\u8fd8\u6709 \u592a\u591a\u592a\u591a \u7684\u95ee\u9898\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002",source:"@site/../notes/web/dev/turbopack.md",sourceDirName:"web/dev",slug:"/web/dev/turbopack",permalink:"/notes/web/dev/turbopack",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/turbopack.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666759874,formattedLastUpdatedAt:"Oct 26, 2022",frontMatter:{title:"turbopack"},sidebar:"docs",previous:{title:"Trigger",permalink:"/notes/web/dev/trigger"},next:{title:"turborepo",permalink:"/notes/web/dev/turborepo"}},a={},l=[{value:"tailwindcss",id:"tailwindcss",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"turbopack",children:"turbopack"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["alpha \u9636\u6bb5\uff0c\u8fd8\u6709 ",(0,s.jsx)(t.strong,{children:"\u592a\u591a\u592a\u591a"})," \u7684\u95ee\u9898\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002"]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"next dev --turbo\n# \u76ee\u524d tw \u9700\u8981\u989d\u5916\u5904\u7406\ntailwindcss -i styles/globals.css -o styles/dist.css\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u5728 app/layout.tsx import styles/dist.css"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="next.config.js"',children:"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.\n  swcMinify: true,\n  experimental: {\n    // Required:\n    appDir: true,\n  },\n};\n\nmodule.exports = nextConfig;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"tailwindcss",children:"tailwindcss"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",metastring:'title="src/styles/global.css"',children:"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm tailwindcss -i src/styles/globals.css -o src/styles/dist.css --watch\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "dev": "concurrently \\"next dev --turbo\\" \\"tailwindcss -i src/styles/globals.css -o src/styles/dist.css --watch\\"",\n    "build": "tailwindcss -i src/styles/globals.css -o src/styles/dist.css --watch && next build"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3354:(e,t,n)=>{var s=n(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!a.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(50959);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);