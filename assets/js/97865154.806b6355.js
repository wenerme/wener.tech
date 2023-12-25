/*! For license information please see 97865154.806b6355.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68619],{35644:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var r=l(11527),s=l(47214);const t={title:"colly"},i="colly",o={id:"languages/go/lib/colly",title:"colly",description:"- gocolly/colly",source:"@site/../notes/languages/go/lib/colly.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/colly",permalink:"/notes/languages/go/lib/colly",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/colly.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1649946978,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"colly"},sidebar:"docs",previous:{title:"chi",permalink:"/notes/languages/go/lib/chi"},next:{title:"entgo",permalink:"/notes/languages/go/lib/ent"}},c={},a=[{value:"Notes",id:"notes",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"colly",children:"colly"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gocolly/colly",children:"gocolly/colly"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Apache-2.0, Golang"}),"\n",(0,r.jsx)(n.li,{children:"\u7b80\u5355\u8f7b\u91cf\u7684\u722c\u866b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301 cache \u63d2\u4ef6\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 httpcache"}),"\n",(0,r.jsxs)(n.li,{children:["\u4e0d\u8981\u4f7f\u7528 dircache\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6587\u4ef6\u591a\u4e86\u8fc7\u540e fs \u8bbf\u95ee\u4f1a\u5f88\u6162 - \u5efa\u8bae sqlite - \u9002\u5408\u5c0f\u6587\u4ef6\u5f88\u591a\u7684\u573a\u666f"}),"\n",(0,r.jsx)(n.li,{children:"\u7f13\u5b58\u7684\u6570\u636e\u5305\u542b\u7684\u4fe1\u606f\u597d - \u4e0d\u597d\u5206\u6790\u5220\u9664"}),"\n",(0,r.jsx)(n.li,{children:"\u4f5c\u4e3a\u53c2\u8003 - 20w \u6587\u4ef6\uff0czfs\uff0c\u8bfb\u53d6\u4e00\u4e2a\u6587\u4ef6\u5e73\u5747 ~20ms - \u6ce2\u52a8\u5f88\u5927"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cache\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8def\u5f84 hex(sha1(url))"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5bb9 gob.NewDecoder(file).Decode(resp)"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 Rename \u786e\u4fdd\u539f\u5b50\u5199\u5165"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u56de\u8c03 - 6\u79cd\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OnRequest"}),"\n",(0,r.jsx)(n.li,{children:"OnError"}),"\n",(0,r.jsx)(n.li,{children:"OnResponse"}),"\n",(0,r.jsxs)(n.li,{children:["OnHTML\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OnError"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["OnXML\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OnError"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"OnScraped"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,l)=>{var r=l(50959),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,l){var r,t={},a=null,d=null;for(r in void 0!==l&&(a=""+l),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:d,props:t,_owner:o.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},11527:(e,n,l)=>{e.exports=l(3354)},47214:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>i});var r=l(50959);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);