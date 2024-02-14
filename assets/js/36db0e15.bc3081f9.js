/*! For license information please see 36db0e15.bc3081f9.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85124],{25352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(2488),s=t(62780);const i={title:"timezone"},o="timezone",l={id:"dev/timezone",title:"timezone",description:"Java",source:"@site/../notes/dev/timezone.md",sourceDirName:"dev",slug:"/dev/timezone",permalink:"/notes/dev/timezone",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/timezone.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680154821,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{title:"timezone"},sidebar:"docs",previous:{title:"\u7c7b\u578b",permalink:"/notes/dev/theory/typing"},next:{title:"\u803b\u8fb1\u5899",permalink:"/notes/dev/wall-of-shame"}},a={},d=[{value:"Java",id:"java",level:2},{value:"MySQL",id:"mysql",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"timezone",children:"timezone"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"adjtimex  # \u786e\u8ba4\u65f6\u95f4\u540c\u6b65\ndate +%z  # +0800\ndate +%:z # +08:00\ndate +%Z  # CST\nTZ=UTC date\nTZ=Asia/Shanghai date\n"})}),"\n",(0,r.jsx)(n.h2,{id:"java",children:"Java"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JVM ",(0,r.jsx)(n.code,{children:"-Duser.timezone=Asia/Shanghai"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"sprintboot"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<properties>\n  <spring-boot.run.jvmArguments>-Duser.timezone=UTC</spring-boot.run.jvmArguments>\n</properties>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mysql",children:"MySQL"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mysql",children:"show global variables like '%time_zone';\n\nselect now();\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"var"}),(0,r.jsx)(n.th,{children:"val"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"system_time_zone"}),(0,r.jsx)(n.td,{children:"CST"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time_zone"}),(0,r.jsx)(n.td,{children:"SYSTEM"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"UTC - Coordinated Universal Time - \u4e16\u754c\u6807\u51c6\u65f6\u95f4"}),"\n",(0,r.jsx)(n.li,{children:"GMT - Greenwich Mean Time - \u683c\u6797\u5c3c\u6cbb\u6807\u51c6\u65f6\u95f4"}),"\n",(0,r.jsxs)(n.li,{children:["CST\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"China Standard Time - \u4e2d\u56fd\u6807\u51c6\u65f6\u95f4 - UT+8:00"}),"\n",(0,r.jsx)(n.li,{children:"Central Time Zone - \u5317\u7f8e\u4e2d\u90e8\u65f6\u95f4 USA - UT-6:00"}),"\n",(0,r.jsx)(n.li,{children:"Cuba Standard Time UT-4:00"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"EST - Eastern Time Zone"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://timezonedb.com/time-zones/Asia/Shanghai",children:"https://timezonedb.com/time-zones/Asia/Shanghai"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var r=t(96651);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);