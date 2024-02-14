/*! For license information please see 475e494b.7b844dc6.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3888],{95276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(2488),s=t(62780);const r={title:"payload"},a="payload",l={id:"service/cms/payload",title:"payload",description:"- payload - Headless CMS",source:"@site/../notes/service/cms/payload.md",sourceDirName:"service/cms",slug:"/service/cms/payload",permalink:"/notes/service/cms/payload",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/cms/payload.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690351481,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{title:"payload"},sidebar:"docs",previous:{title:"Outline",permalink:"/notes/service/cms/outline"},next:{title:"Strapi",permalink:"/notes/service/cms/strapi"}},i={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"payload",children:"payload"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://payloadcms.com/",children:"payload"})," - Headless CMS\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"GraphQL, REST API, Local API"}),"\n",(0,o.jsx)(n.li,{children:"MongoDB"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Local API\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u53ef\u4ee5\u4e0d\u542f\u52a8\u670d\u52a1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"v1 \u9700\u8981 commonjs"}),"\n",(0,o.jsx)(n.li,{children:"v2 \u8fd8\u5728\u5f00\u53d1\u4e2d"}),"\n"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# npx create-payload-app\npnpm add payload express dotenv # \u6dfb\u52a0\u5230\u73b0\u6709\u9879\u76ee\npnpm add -D ts-node typescript @types/node\n\ncat << EOF > .env\nPAYLOAD_SECRET=secret\nMONGODB_URI=mongodb://localhost:27017/payload\nEOF\nnpx tsc --init --target esnext --module esnext --moduleResolution node16\n# ts-node config with swc\n\nNODE_ENV=development pnpm node --loader ts-node/esm --watch ./src/server.ts\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="payload.config.ts"',children:"import { buildConfig } from 'payload/config';\nexport default buildConfig({\n  // By default, Payload will boot up normally\n  // and you will be provided with a base `User` collection.\n  // But, here is where you define how you'd like Payload to work!\n});\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://localhost:3000/admin",children:"http://localhost:3000/admin"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import express from 'express';\nimport payload from 'payload';\nimport dotenv from 'dotenv';\n\n\ndotenv.config();\nconst app = express();\n\nconst start = async () => {\n  await payload.init({\n    secret: process.env.PAYLOAD_SECRET,\n    mongoURL: process.env.MONGODB_URI,\n    express: app,\n  });\n\n  app.listen(3000, async () => {\n    console.log('Express is now listening for incoming connections on port 3000.');\n  });\n};\n\nstart();\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var o=t(96651),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,r={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,o)&&!i.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>a});var o=t(96651);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);