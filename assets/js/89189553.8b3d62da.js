/*! For license information please see 89189553.8b3d62da.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51811],{83443:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=l(11527),r=l(47214);const i={title:"graphql"},s=void 0,o={id:"languages/go/lib/graphql",title:"graphql",description:"graphql-go/graphql",source:"@site/../notes/languages/go/lib/graphql.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/graphql",permalink:"/notes/languages/go/lib/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/graphql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1626078012,formattedLastUpdatedAt:"Jul 12, 2021",frontMatter:{title:"graphql"},sidebar:"docs",previous:{title:"gqlgen",permalink:"/notes/languages/go/lib/gqlgen"},next:{title:"ko",permalink:"/notes/languages/go/lib/ko"}},c={},a=[{value:"graphql-go/graphql",id:"graphql-gographql",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"graphql-gographql",children:"graphql-go/graphql"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/graphql-go/graphql",children:"graphql-go/graphql"})," \u662f\u4ec0\u4e48\uff1f\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Golang GraphQL \u89e3\u6790\u3001\u6267\u884c\u5e93"}),"\n",(0,t.jsx)(n.li,{children:"Code First - \u5148 Go \u4ee3\u7801\uff0c\u7136\u540e\u751f\u6210 GraphQL"}),"\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7 struct \u6784\u5efa\u5185\u5bb9\u751f\u6210 graphql schema"}),"\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7 struct \u6784\u5efa resolver \u548c\u7c7b\u578b\u5b57\u6bb5\u5904\u7406"}),"\n",(0,t.jsx)(n.li,{children:"\u6784\u5efa\u8fc7\u7a0b\u548c\u6267\u884c\u8fc7\u7a0b\u53ef\u4ee5\u4f7f\u7528 thunk \u6a21\u5f0f - \u8fd4\u56de\u51fd\u6570\uff0c\u7528\u5230\u7684\u65f6\u5019\u518d\u6267\u884c"}),"\n",(0,t.jsx)(n.li,{children:"\u56e0\u4e3a\u5b58\u5728\u5faa\u73af\u4f9d\u8d56\uff0c\u5ef6\u8fdf\u6267\u884c\u4e5f\u80fd\u8fdb\u884c\u5176\u4ed6\u4f18\u5316"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["resolve - ",(0,t.jsx)(n.code,{children:"func(p ResolveParams) (interface{}, error)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["DefaultResolveFn - field \u9ed8\u8ba4 resolve\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 map \u548c struct - \u4e0d\u652f\u6301 Embed struct"}),"\n",(0,t.jsx)(n.li,{children:"\u5b57\u6bb5\u6bd4\u8f83\u5ffd\u7565\u5927\u5c0f\u5199"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"source \u4e5f\u53ef\u4ee5\u5b9e\u73b0 FieldResolver - \u8fd9\u6837\u53ef\u4ee5\u4ea4\u7531\u8fd4\u56de\u7ed3\u679c\u5224\u65ad\u5982\u4f55 resolve"}),"\n",(0,t.jsxs)(n.li,{children:["\u6267\u884c\u8fc7\u7a0b\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6536\u96c6\u5b57\u6bb5"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u5b57\u6bb5"}),"\n",(0,t.jsx)(n.li,{children:"resolve \u5b57\u6bb5"}),"\n",(0,t.jsxs)(n.li,{children:["\u8ba1\u7b97\u503c - \u5904\u7406 promise\u3001\u5e8f\u5217\u5316 scalars\u3001\u6267\u884c\u4e0b\u7ea7\u5b57\u6bb5\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"thunk \u5ef6\u8fdf"}),"\n",(0,t.jsx)(n.li,{children:"null \u68c0\u67e5"}),"\n",(0,t.jsx)(n.li,{children:"list \u5c55\u5f00"}),"\n",(0,t.jsx)(n.li,{children:"union \u548c interface \u5b9e\u9645\u7c7b\u578b\u68c0\u6d4b"}),"\n",(0,t.jsx)(n.li,{children:"object \u5c55\u5f00 - \u5411\u4e0b\u6c42\u503c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6269\u5c55\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ParseDidStart(context.Context) (context.Context, ParseFinishFunc)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ValidationDidStart(context.Context) (context.Context, ValidationFinishFunc)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ExecutionDidStart(context.Context) (context.Context, ExecutionFinishFunc)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ResolveFieldDidStart(context.Context, *ResolveInfo) (context.Context, ResolveFieldFinishFunc)"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,n,l)=>{var t=l(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,l){var t,i={},a=null,d=null;for(t in void 0!==l&&(a=""+l),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:a,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},11527:(e,n,l)=>{e.exports=l(3354)},47214:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>s});var t=l(50959);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);