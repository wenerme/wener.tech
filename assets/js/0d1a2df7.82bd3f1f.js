/*! For license information please see 0d1a2df7.82bd3f1f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20233],{72838:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>h});var s=i(11527),l=i(47214);const r={title:"Auth"},c="Auth",t={id:"dev/design/design-auth",title:"Auth",description:"1. \u8d44\u6e90\u8bbf\u95ee",source:"@site/../notes/dev/design/design-auth.md",sourceDirName:"dev/design",slug:"/dev/design/auth",permalink:"/notes/dev/design/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/design/design-auth.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1697457593,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{title:"Auth"},sidebar:"docs",previous:{title:"Design",permalink:"/notes/dev/design/"},next:{title:"\u54cd\u5e94\u5f0f\u65ad\u70b9",permalink:"/notes/dev/design/breakpoint"}},d={},h=[{value:"API Key",id:"api-key",level:2},{value:"OpenAI",id:"openai",level:3},{value:"Service Account",id:"service-account",level:2},{value:"Principal vs Subject",id:"principal-vs-subject",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"auth",children:"Auth"}),"\n",(0,s.jsxs)(n.admonition,{title:"\u573a\u666f",type:"tip",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8d44\u6e90\u8bbf\u95ee"}),"\n"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6709 Owner \u5bf9\u8c61"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u5e38\u901a\u8fc7 Agent/Browser \u65b9\u5f0f"}),"\n",(0,s.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u4e0d\u53d7\u4fe1"}),"\n",(0,s.jsx)(n.li,{children:"\u4ea4\u6362\u83b7\u53d6 Token"}),"\n",(0,s.jsx)(n.li,{children:"Token \u4f1a\u5931\u6548"}),"\n"]}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u670d\u52a1\u8bbf\u95ee - \u540e\u7aef-\u540e\u7aef"}),"\n"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u53d7\u4fe1"}),"\n",(0,s.jsx)(n.li,{children:"API Key"}),"\n",(0,s.jsx)(n.li,{children:"Service Account"}),"\n",(0,s.jsx)(n.li,{children:"Basic Auth"}),"\n"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"API Auth"}),"\n",(0,s.jsx)(n.li,{children:"Service Auth"}),"\n",(0,s.jsx)(n.li,{children:"Service Account - SA"}),"\n",(0,s.jsx)(n.li,{children:"API Key"}),"\n",(0,s.jsxs)(n.li,{children:["HTTP Auth ",(0,s.jsx)(n.a,{href:"https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml",children:"HTTP Authentication Schemes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Basic RFC7617"}),"\n",(0,s.jsx)(n.li,{children:"Bearer RFC6750"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"PAT - Persional Access Token"}),"\n",(0,s.jsx)(n.li,{children:"Bearer - Opaque \u7684\u5185\u5bb9"}),"\n",(0,s.jsx)(n.li,{children:"JWT \u5bf9 Token \u5185\u5bb9\u505a\u5b9a\u4e49"}),"\n",(0,s.jsxs)(n.li,{children:["ACL\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Subject, Object, Action, Condition, Effect, Priority"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://swagger.io/docs/specification/authentication/",children:"Swagger Aith"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"api-key",children:"API Key"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://swagger.io/docs/specification/authentication/api-keys/",children:"Swagger API Key"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"?api_key=$KEY"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"X-API-Key: $KEY"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Cookie: X-API-KEY=KEY"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://apisix.apache.org/docs/apisix/plugins/key-auth/",children:"key-auth"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"X-API-KEY: "})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"apikey: "})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"?apikey="})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"openai",children:"OpenAI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GET https://api.openai.com/v1/models\nAuthorization: Bearer $OPENAI_API_KEY\nOpenAI-Organization: $ORG_ID\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ORG_ID \u6709\u9ed8\u8ba4\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"org-ID"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Secret Key\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sk-KEY"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"service-account",children:"Service Account"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["client_id + client_secret\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"grant=client_credential -> AccessToken"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u4ee5\u83b7\u53d6\u7528\u6237\u76f8\u5173\u7684 AccessToken"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"principal-vs-subject",children:"Principal vs Subject"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Subject - \u8bbf\u95ee\u4e3b\u4f53 - \u8bf7\u6c42\u8bbf\u95ee\u5bf9\u8c61\u6216\u8005\u6267\u884c\u64cd\u4f5c\u7684\u53d1\u8d77\u65b9\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u901a\u7528\u6982\u5ff5 - \u66f4\u62bd\u8c61"}),"\n",(0,s.jsx)(n.li,{children:"\u4e3b\u52a8\u53d1\u8d77"}),"\n",(0,s.jsx)(n.li,{children:"\u5f53\u524d\u72b6\u6001"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u573a\u666f: ACL, \u4e34\u65f6\u6388\u6743, \u4e3b\u4f53\u9694\u79bb, \u4ee3\u7406\u8bbf\u95ee, \u4f1a\u8bdd\u7ba1\u7406, \u5ba1\u8ba1\u8ddf\u8e2a"}),"\n",(0,s.jsx)(n.li,{children:"\u5e38\u89c1\u4e3b\u4f53: User, Department, Customer, Process, Group, Service Account, System, Device"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Principal - \u660e\u786e\u8eab\u4efd\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u662f\u4e00\u4e2a\u9a8c\u8bc1\u8fc7\u7684\u8eab\u4efd,\u901a\u5e38\u662f\u4e00\u4e2a\u6307\u5b9a\u7684\u7528\u6237 - \u66f4\u5177\u4f53"}),"\n",(0,s.jsx)(n.li,{children:"\u88ab\u52a8\u7ed1\u5b9a"}),"\n",(0,s.jsx)(n.li,{children:"\u6301\u4e45\u6807\u8bc6"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u573a\u666f: \u8ba4\u8bc1, \u6388\u6743, \u8ddf\u8e2a\u5ba1\u8ba1, \u8eab\u4efd\u9694\u79bb, \u6743\u9650\u59d4\u6258, \u8d44\u6e90\u5f52\u5c5e, \u8d23\u4efb\u8ffd\u7a76, \u957f\u4f1a\u8bdd"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},3354:(e,n,i)=>{var s=i(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,i){var s,r={},h=null,o=null;for(s in void 0!==i&&(h=""+i),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)c.call(n,s)&&!d.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:l,type:e,key:h,ref:o,props:r,_owner:t.current}}n.Fragment=r,n.jsx=h,n.jsxs=h},11527:(e,n,i)=>{e.exports=i(3354)},47214:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>c});var s=i(50959);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);