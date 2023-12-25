/*! For license information please see 95e932df.ddca6370.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87761],{66054:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(11527),s=n(47214);const i={title:"ajv"},a="ajv",o={id:"web/script/lib/ajv",title:"ajv",description:"- ajv-validator/ajv",source:"@site/../notes/web/script/lib/ajv.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/ajv",permalink:"/notes/web/script/lib/ajv",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/lib/ajv.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1697457593,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{title:"ajv"},sidebar:"docs",previous:{title:"acorn",permalink:"/notes/web/script/lib/acorn"},next:{title:"awilix",permalink:"/notes/web/script/lib/awilix"}},l={},d=[{value:"due to error strict mode: unknown keyword",id:"due-to-error-strict-mode-unknown-keyword",level:2}];function c(e){const r={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"ajv",children:"ajv"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/ajv-validator/ajv",children:"ajv-validator/ajv"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"JSON Schema \u6821\u9a8c"}),"\n",(0,t.jsxs)(r.li,{children:["\u652f\u6301 JTD serialize/parse\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u7c7b\u4f3c\u4e8e ",(0,t.jsx)(r.a,{href:"https://github.com/fastify/fast-json-stringify",children:"fastify/fast-json-stringify"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/ajv-validator/ajv-keywords",children:"ajv-validator/ajv-keywords"}),"\n\u589e\u52a0\u81ea\u5b9a\u4e49\u5173\u952e\u5b57\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"typeof, instanceof"}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.del,{children:"select, selectCases, selectDefault"})," -> discriminator"]}),"\n",(0,t.jsx)(r.li,{children:"dynamicDefaults"}),"\n",(0,t.jsx)(r.li,{children:"number: range, exclusiveRange"}),"\n",(0,t.jsxs)(r.li,{children:["string: regexp, transform\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"transform \u5141\u8bb8\u9a8c\u8bc1\u65f6\u4fee\u6539\u5b57\u7b26\u4e32\u5185\u5bb9"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:"array: uniqueItemProperties"}),"\n",(0,t.jsx)(r.li,{children:"object: allRequired, anyRequired, oneRequired, patternRequired, prohibited, deepProperties, deepRequired"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://ajv.js.org/json-schema.html",children:"https://ajv.js.org/json-schema.html"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm add ajv ajv-formats ajv-keywords ajv-errors\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import addFormats from 'ajv-formats';\nimport addKeywords from 'ajv-keywords';\nimport Ajv2020 from 'ajv/dist/2020';\n\nconst ajv = new Ajv2020();\naddFormats(ajv);\naddKeywords(ajv);\n\n// \u6dfb\u52a0\u81ea\u5b9a\u4e49 keyword \u907f\u514d\u5931\u8d25\najv.addKeyword('x-meta');\n"})}),"\n",(0,t.jsx)(r.h2,{id:"due-to-error-strict-mode-unknown-keyword",children:"due to error strict mode: unknown keyword"})]})}function j(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3354:(e,r,n)=>{var t=n(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,t)&&!l.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:o.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},11527:(e,r,n)=>{e.exports=n(3354)},47214:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(50959);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);