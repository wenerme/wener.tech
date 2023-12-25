/*! For license information please see 388fe714.1fbd79d8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27593],{74182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(11527),r=n(47214);const s={title:"Gitea"},o="Gitea",a={id:"service/forge/gitea/README",title:"Gitea",description:"- go-gitea/gitea",source:"@site/../notes/service/forge/gitea/README.md",sourceDirName:"service/forge/gitea",slug:"/service/forge/gitea/",permalink:"/notes/service/forge/gitea/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitea/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685087225,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Gitea"},sidebar:"docs",previous:{title:".gitignore",permalink:"/notes/service/forge/git/gitignore"},next:{title:"Gitea Action",permalink:"/notes/service/forge/gitea/action"}},c={},l=[{value:"API",id:"api",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"gitea",children:"Gitea"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/go-gitea/gitea",children:"go-gitea/gitea"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"MIT, Golang"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u5982\u679c\u7528\u6237\u4e3a\u516c\u5f00\uff0c\u5219\u6240\u6709 ",(0,i.jsx)(t.strong,{children:"\u955c\u50cf"})," \u4e5f\u662f\u516c\u5f00\u7684"]}),"\n",(0,i.jsxs)(t.li,{children:["mirror\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u53ea\u80fd username+password"}),"\n",(0,i.jsx)(t.li,{children:"cron \u9ed8\u8ba4 8h\uff0c\u81f3\u5c11 10m"}),"\n",(0,i.jsxs)(t.li,{children:["webhook \u89e6\u53d1 ",(0,i.jsx)(t.a,{href:"https://github.com/go-gitea/gitea/issues/5342",children:"#5342"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"curl -X POST https://gitea.com/api/v1/repos/{owner}/{repo}/mirror-sync?token={pta}"})}),"\n",(0,i.jsxs)(t.li,{children:["PTA \u53ea\u9700\u8981 ",(0,i.jsx)(t.code,{children:"repo"})," scope"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["PTA \u6ca1\u6709 scope Gitea 1.19 - ",(0,i.jsx)(t.a,{href:"https://github.com/go-gitea/gitea/commit/de484e86bc495a67d2f122ed438178d587a92526",children:"https://github.com/go-gitea/gitea/commit/de484e86bc495a67d2f122ed438178d587a92526"})]}),"\n"]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"docker run -d --name=gitea -p 2222:22 -p 8080:3000 -v $PWD/gitea/data:/data gitea/gitea:latest\n"})}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Auth \u65b9\u5f0f\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Basic Auth"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"?token="})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"?access_token="})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Authorization: token TOKEN"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.gitea.com/next/development/api-usage",children:"https://docs.gitea.com/next/development/api-usage"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,t,n)=>{var i=n(50959),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(50959);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);