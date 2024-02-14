/*! For license information please see 5259b492.ff32a6e8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88664],{13240:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=s(2488),i=s(62780);const r={title:"elysia"},t="elysia",c={id:"web/dev/elysia",title:"elysia",description:"- elysiajs/elysia",source:"@site/../notes/web/dev/elysia.md",sourceDirName:"web/dev",slug:"/web/dev/elysia",permalink:"/notes/web/dev/elysia",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/elysia.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701146597,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"elysia"},sidebar:"docs",previous:{title:"edge-runtime",permalink:"/notes/web/dev/edge-runtime"},next:{title:"eslint",permalink:"/notes/web/dev/eslint"}},a={},d=[{value:"Notes",id:"notes",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"elysia",children:"elysia"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/elysiajs/elysia",children:"elysiajs/elysia"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u57fa\u4e8e ",(0,l.jsx)(n.a,{href:"/notes/web/dev/bun",children:"bun"})," \u7684 Web \u6846\u67b6"]}),"\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528 @sinclair/typebox"}),"\n",(0,l.jsx)(n.li,{children:"\u4ee3\u7801\u91cf\u5f88\u5c11\uff0c\u903b\u8f91\u7b80\u5355"}),"\n",(0,l.jsxs)(n.li,{children:["AOT\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u751f\u6210\u4ee3\u7801\u6765\u8fdb\u884c route"}),"\n",(0,l.jsx)(n.li,{children:"route \u53d8\u6210\u4e00\u4e2a\u5927 switch"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0e ",(0,l.jsx)(n.a,{href:"/notes/web/dev/hono",children:"hono"})," \u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u9762\u5411 bun \u4e3a\u4e3b\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"hono \u66f4\u65e9\uff0c\u652f\u6301\u66f4\u591a \u73af\u5883"}),"\n",(0,l.jsx)(n.li,{children:"\u6ca1\u6709 AOT"}),"\n",(0,l.jsx)(n.li,{children:"\u6ca1\u9ed8\u8ba4 typebox - \u652f\u6301\u591a\u79cd validator"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/bogeychan/elysia-polyfills",children:"bogeychan/elysia-polyfills"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u53ef\u4ee5\u5728 node \u73af\u5883\u4e0b\u4f7f\u7528 elysia"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm add elysia @elysiajs/swagger @elysiajs/static\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",metastring:'title="server.ts"',children:"import { Elysia, t } from 'elysia';\nimport { swagger } from '@elysiajs/swagger';\n\nconst app = new Elysia()\n  .use(swagger())\n  .post('/sign-in', ({ body }) => signIn(body), {\n    body: t.Object({\n      username: t.String(),\n      password: t.String(),\n    }),\n  })\n  .listen(8080);\n\nexport type App = typeof app;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",metastring:'title="client.ts"',children:"import { edenTreaty } from '@elysiajs/eden';\nimport type { App } from './server';\n\nconst app = edenTreaty<App>('http://localhost:8080');\n\napp.signIn\n  .post({\n    username: 'saltyaom',\n    password: 12345678,\n  })\n  .then(console.log);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5b8c\u6574\u6d41\u7a0b ",(0,l.jsx)(n.a,{href:"https://github.com/elysiajs/elysia/blob/main/src/dynamic-handle.ts",children:"https://github.com/elysiajs/elysia/blob/main/src/dynamic-handle.ts"})]}),"\n",(0,l.jsxs)(n.li,{children:["decorator\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u589e\u52a0\u5728 context \u4e0a"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["state\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u589e\u52a0\u5728 store \u4e0a"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["context\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"request"}),"\n",(0,l.jsx)(n.li,{children:"set"}),"\n",(0,l.jsx)(n.li,{children:"store"}),"\n",(0,l.jsx)(n.li,{children:"body"}),"\n",(0,l.jsx)(n.li,{children:"query"}),"\n",(0,l.jsx)(n.li,{children:"params"}),"\n",(0,l.jsx)(n.li,{children:"headers"}),"\n",(0,l.jsx)(n.li,{children:"cookies"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["handler - \u4e00\u6761\u8def\u7531\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["store - \u6784\u5efa\u65f6\u7684\u914d\u7f6e\u4fe1\u606f\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"handle"}),"\n",(0,l.jsxs)(n.li,{children:["hooks\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"transform"}),"\n",(0,l.jsx)(n.li,{children:"beforeHandle"}),"\n",(0,l.jsx)(n.li,{children:"afterHandle"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["validator\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"body"}),"\n",(0,l.jsx)(n.li,{children:"headers"}),"\n",(0,l.jsx)(n.li,{children:"query"}),"\n",(0,l.jsx)(n.li,{children:"params"}),"\n",(0,l.jsx)(n.li,{children:"cookie"}),"\n",(0,l.jsx)(n.li,{children:"response"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["content - ContentType\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"application/octet-stream \u4f1a\u8ba9 body \u4e3a arrayBuffer"}),"\n",(0,l.jsx)(n.li,{children:"\u6ca1\u6709\u5219\u4f1a\u89e6\u53d1 onParse"}),"\n",(0,l.jsx)(n.li,{children:"fallback \u4e3a\u57fa\u4e8e header \u91cc\u7684 content-type \u8fdb\u884c parse"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["gen eden types\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/elysiajs/elysia/issues/257#issuecomment-1752547939",children:"https://github.com/elysiajs/elysia/issues/257#issuecomment-1752547939"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},38088:(e,n,s)=>{var l=s(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var l,r={},d=null,o=null;for(l in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,l)&&!a.hasOwnProperty(l)&&(r[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===r[l]&&(r[l]=n[l]);return{$$typeof:i,type:e,key:d,ref:o,props:r,_owner:c.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>t});var l=s(96651);const i={},r=l.createContext(i);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);