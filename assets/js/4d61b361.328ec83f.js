/*! For license information please see 4d61b361.328ec83f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61351],{25611:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=s(11527),r=s(47214);const i={title:"NestJS Zod"},o="NestJS Zod",d={id:"web/framework/nestjs/nestjs-zod",title:"NestJS Zod",description:"zod-plugins",source:"@site/../notes/web/framework/nestjs/nestjs-zod.md",sourceDirName:"web/framework/nestjs",slug:"/web/framework/nestjs/zod",permalink:"/notes/web/framework/nestjs/zod",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/nestjs/nestjs-zod.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"NestJS Zod"},sidebar:"docs",previous:{title:"NestJS Version",permalink:"/notes/web/framework/nestjs/version"},next:{title:"NextJS",permalink:"/notes/web/framework/nextjs/"}},l={},a=[{value:"zod-plugins",id:"zod-plugins",level:2},{value:"nestjs-zod",id:"nestjs-zod-1",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nestjs-zod",children:"NestJS Zod"}),"\n",(0,t.jsx)(n.h2,{id:"zod-plugins",children:"zod-plugins"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/anatine/zod-plugins",children:"anatine/zod-plugins"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u80fd\u6b63\u5e38\u5904\u7406 Query \u53c2\u6570"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["@anatine/zod-openapi\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u53ea\u4f9d\u8d56 ts-deepmerge"}),"\n",(0,t.jsx)(n.li,{children:"\u4ee3\u7801\u91cf\u5c11"}),"\n",(0,t.jsxs)(n.li,{children:["\u4e3a ZodSchema patch \u4e86 openapi \u65b9\u6cd5\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7b49\u540c\u4e8e ",(0,t.jsx)(n.code,{children:"extendApi(this, metadata)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u63d0\u4f9b\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"generateSchema"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"extenndApi"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5408\u5e76 metaOpenApi \u5c5e\u6027"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["@anatine/zod-nestjs\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"patchNestjsSwagger"}),"\n",(0,t.jsx)(n.li,{children:"createZodDto"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm add openapi3-ts zod @anatine/zod-openapi @anatine/zod-nestjs\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nestjs-zod-1",children:"nestjs-zod"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/risen228/nestjs-zod",children:"risen228/nestjs-zod"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Query \u53c2\u6570\u6ca1\u751f\u6210\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/risen228/nestjs-zod/issues/23",children:"https://github.com/risen228/nestjs-zod/issues/23"})}),"\n",(0,t.jsx)(n.li,{children:"\u53ea\u80fd\u7528 DTO - \u4f46\u5b9a\u4e49\u7684\u989d\u5916\u53c2\u6570\u4f1a\u88ab filter\uff0c\u83b7\u53d6\u4e0d\u5230"}),"\n",(0,t.jsxs)(n.li,{children:["\u989d\u5916\u7684\u53c2\u6570\u53ef\u4ee5\u8003\u8651 ",(0,t.jsx)(n.code,{children:"@ApiParam({ name: 'id', schema: paramsSchema.properties.id })"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u6216\u8005\u63a7\u5236 ",(0,t.jsx)(n.code,{children:"@UsePipes(ZodValidationPipe)"})," \u4f5c\u7528\u8303\u56f4"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3354:(e,n,s)=>{var t=s(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,i={},a=null,c=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:a,ref:c,props:i,_owner:d.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var t=s(50959);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);