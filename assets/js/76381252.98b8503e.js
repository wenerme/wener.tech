/*! For license information please see 76381252.98b8503e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37057],{87081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(11527),i=n(47214);const s={title:"Auth"},l="Auth",c={id:"service/auth/README",title:"Auth",description:"- AuthN - Authentication - \u9274\u6743",source:"@site/../notes/service/auth/README.md",sourceDirName:"service/auth",slug:"/service/auth/",permalink:"/notes/service/auth/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653992153,formattedLastUpdatedAt:"May 31, 2022",frontMatter:{title:"Auth"},sidebar:"docs",previous:{title:"xds",permalink:"/notes/service/api/xds"},next:{title:"Auth Awesome",permalink:"/notes/service/auth/awesome"}},o={},a=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"bcrypt",id:"bcrypt",level:2},{value:"CAS",id:"cas",level:2},{value:"ACL",id:"acl",level:2},{value:"OAuth",id:"oauth",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"auth",children:"Auth"}),"\n",(0,r.jsx)(t.admonition,{title:"AAA",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"AuthN - Authentication - \u9274\u6743"}),"\n",(0,r.jsx)(t.li,{children:"AuthZ - Authorization - \u6388\u6743"}),"\n",(0,r.jsx)(t.li,{children:"Accounting - Audit - \u5ba1\u8ba1"}),"\n"]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u5e38\u89c1\u534f\u8bae\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"LDAP"}),"\n",(0,r.jsx)(t.li,{children:"OAuth"}),"\n",(0,r.jsx)(t.li,{children:"OIDC"}),"\n",(0,r.jsx)(t.li,{children:"RADIUS"}),"\n",(0,r.jsx)(t.li,{children:"SAML"}),"\n",(0,r.jsx)(t.li,{children:"TACACS - Terminal Access Controller Access-Control System"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Authentication_protocol",children:"Authentication protocol"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"\u9a8c\u8bc1\u6388\u6743",children:"\u9a8c\u8bc1\u6388\u6743"}),"\n",(0,r.jsx)(t.p,{children:"\u6388\u6743\u9a8c\u8bc1\u662f\u4e00\u4e2a\u5f88\u654f\u611f\u7684\u8bdd\u9898,\u5728\u4e00\u4e2a\u5927\u578b\u4f01\u4e1a\u91cc\u5f80\u5f80\u9700\u8981\u4e00\u4e2a\u4e13\u95e8\u7684\u56e2\u961f\u6765\u8d1f\u8d23,\u8fd9\u91cc\u6574\u7406\u4e00\u4e9b\u548c\u6388\u6743\u9a8c\u8bc1\u76f8\u5173\u7684\u57fa\u672c\u5185\u5bb9."}),"\n",(0,r.jsx)(t.h2,{id:"\u57fa\u7840",children:"\u57fa\u7840"}),"\n",(0,r.jsxs)(t.p,{children:["\u4e0d\u7ba1\u662f\u91c7\u7528\u4f55\u79cd\u65b9\u5f0f,\u90fd\u8981\u9996\u5148\u4fdd\u8bc1\u94fe\u63a5\u5b89\u5168,\u5373\u81f3\u5c11\u662f\u4f7f\u7528 HTTPS,\u4e3a\u4e86\u7b80\u5316\u5f00\u53d1\u548c\u5feb\u901f\u4f7f\u7528\u53ef\u4f7f\u7528 ",(0,r.jsx)(t.a,{href:"https://letsencrypt.org/",children:"letsencrypt"})," \u63d0\u4f9b\u7684\u8bc1\u4e66\u6765\u63d0\u4f9b\u5b89\u5168\u94fe\u63a5."]}),"\n",(0,r.jsx)(t.p,{children:"\u51fa\u4e8e\u5b89\u5168\u8003\u8651,\u4e5f\u53ef\u4ee5\u9009\u62e9\u5728\u5ba2\u6237\u7aef\u52a0\u5bc6,\u5373\u7528\u6237\u63d0\u4ea4\u5230\u670d\u52a1\u5668\u7684\u7684\u5bc6\u7801\u5df2\u7ecf\u662f\u52a0\u5bc6\u8fc7\u7684,\u4f8b\u5982 sha1 \u7528\u6237\u7684\u5bc6\u7801,\u8fd9\u6837\u4e5f\u80fd\u907f\u514d\u7528\u6237\u5bc6\u7801\u7684\u76f4\u63a5\u6cc4\u9732."}),"\n",(0,r.jsx)(t.h2,{id:"bcrypt",children:"bcrypt"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u5728\u7ebf\u6d4b\u8bd5\u548c\u751f\u6210\u5de5\u5177 ",(0,r.jsx)(t.a,{href:"https://www.dailycred.com/article/bcrypt-calculator",children:"https://www.dailycred.com/article/bcrypt-calculator"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"cas",children:"CAS"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/apereo/cas",children:"apereo/cas"})," - Apereo CAS - Enterprise Single Sign On for all earthlings and beyond."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"acl",children:"ACL"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://loopback.io/doc/en/lb3/ACL-REST-API.html",children:"https://loopback.io/doc/en/lb3/ACL-REST-API.html"}),"\n",(0,r.jsx)(t.a,{href:"http://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/acl-using-rest-api.html",children:"http://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/acl-using-rest-api.html"})]}),"\n",(0,r.jsx)(t.h2,{id:"oauth",children:"OAuth"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u672c\u8d28\u4e0a\u662f\u6388\u6743(Authorization)\u534f\u8bae\u800c\u4e0d\u662f\u8ba4\u8bc1\u534f\u8bae(Authentication)"}),"\n",(0,r.jsx)(t.li,{children:"\u6388\u6743\u7ed9\u5176\u4ed6\u670d\u52a1\u8bbf\u95ee\u7528\u6237 \u8bbe\u5907/\u5e94\u7528/\u5b9e\u4f53 \u7684\u6743\u9650 - \u88ab\u6388\u6743\u670d\u52a1\u901a\u8fc7\u8d44\u6e90\u63a5\u53e3\u4ee3\u66ff\u7528\u6237\u8fdb\u884c\u64cd\u4f5c"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3354:(e,t,n)=>{var r=n(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,h=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(h=t.ref),t)l.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:h,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var r=n(50959);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);