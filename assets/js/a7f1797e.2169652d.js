/*! For license information please see a7f1797e.2169652d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99804],{72672:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(2488),i=r(62780);const t={title:"PowerDNS Version",tags:["Version"]},o="PowerDNS Version",l={id:"service/dns/powerdns/powerdns-version",title:"PowerDNS Version",description:"- Changelogs",source:"@site/../notes/service/dns/powerdns/powerdns-version.md",sourceDirName:"service/dns/powerdns",slug:"/service/dns/powerdns/version",permalink:"/notes/service/dns/powerdns/version",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/powerdns/powerdns-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"PowerDNS Version",tags:["Version"]},sidebar:"docs",previous:{title:"PowerDNS Recursor",permalink:"/notes/service/dns/powerdns/rec"},next:{title:"unbound",permalink:"/notes/service/dns/unbound"}},d={},c=[{value:"4.5",id:"45",level:2},{value:"4.4",id:"44",level:2},{value:"4.3",id:"43",level:2},{value:"4.2",id:"42",level:2},{value:"4.1",id:"41",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"powerdns-version",children:"PowerDNS Version"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://doc.powerdns.com/authoritative/changelog/index.html",children:"Changelogs"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"45",children:"4.5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"rrtype CSYNC, NID, L32, L64, LP"}),"\n",(0,s.jsx)(n.li,{children:"LUA filterForward \u51fd\u6570"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"44",children:"4.4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"LMDB \u652f\u6301\u957f\u8bb0\u5f55 - production ready"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301 SVCB HTTPS \u8bb0\u5f55"}),"\n",(0,s.jsx)(n.li,{children:"\u9a8c\u8bc1 slave zone"}),"\n",(0,s.jsx)(n.li,{children:"\u79fb\u9664 GSS/TSIG \u652f\u6301"}),"\n",(0,s.jsx)(n.li,{children:"auth server \u589e\u52a0 /api/docs \u63a5\u53e3"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"43",children:"4.3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u589e\u52a0 default-publish-{cds|cdnskey} \u914d\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u7ba1\u7406\u672a\u53d1\u5e03\u7684 DNSSEC Key"}),"\n",(0,s.jsx)(n.li,{children:"pdnsutil \u652f\u6301\u5728 edit-zone \u65f6\u589e\u52a0 serial"}),"\n",(0,s.jsx)(n.li,{children:"zone \u589e\u52a0 edited_serial"}),"\n",(0,s.jsx)(n.li,{children:"\u79fb\u9664\u540e\u7aef goracle, lua, mydns, opendbx, oracle"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"42",children:"4.2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"LUA \u8bb0\u5f55\u652f\u6301"}),"\n",(0,s.jsx)(n.li,{children:"LMDB \u540e\u7aef\u652f\u6301"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://doc.powerdns.com/authoritative/changelog/4.2.html",children:"changelog"})," / ",(0,s.jsx)(n.a,{href:"https://blog.powerdns.com/2019/08/30/powerdns-authoritative-server-4-2-0/",children:"\u53d1\u5e03\u7533\u660e"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"41",children:"4.1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"api \u6dfb\u52a0 metadata \u63a5\u53e3"}),"\n",(0,s.jsxs)(n.li,{children:["\u79fb\u9664\u4e86 as \u4e2d\u7684 recursor\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7 recursor \u8f6c\u53d1\u5230 as"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7 dnsdist \u8d1f\u8f7d\u5747\u8861\u57fa\u4e8e\u89c4\u5219\u8fdb\u884c\u5206\u53d1"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://doc.powerdns.com/authoritative/guides/recursion.html",children:"Migrating from using recursion on the Authoritative Server to using a Recursor"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://doc.powerdns.com/authoritative/changelog/4.1.html",children:"changelog"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},38088:(e,n,r)=>{var s=r(96651),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,t={},c=null,a=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:a,props:t,_owner:l.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var s=r(96651);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);