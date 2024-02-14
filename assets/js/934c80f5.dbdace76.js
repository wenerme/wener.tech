/*! For license information please see 934c80f5.dbdace76.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94748],{30332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(2488),i=n(62780);const r={title:"mitigations"},o="mitigations",l={id:"os/linux/sys/mitigations",title:"mitigations",description:"- \u4e3b\u8981\u5f71\u54cd\u65e7\u7684 Intel CPU",source:"@site/../notes/os/linux/sys/mitigations.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/mitigations",permalink:"/notes/os/linux/sys/mitigations",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/mitigations.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688543048,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{title:"mitigations"},sidebar:"docs",previous:{title:"memtest",permalink:"/notes/os/linux/sys/memtest"},next:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"}},a={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"mitigations",children:"mitigations"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"lscpu # \u67e5\u770b\u7528\u4e86\u54ea\u4e9b mitigation\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4e3b\u8981\u5f71\u54cd\u65e7\u7684 Intel CPU"}),"\n",(0,s.jsxs)(t.li,{children:["Linux \u9ed8\u8ba4\u5f00\u542f\u4e86 mitigations=on - \u53ef\u4ee5\u8003\u8651\u5173\u95ed\u4ee5\u63d0\u9ad8\u6027\u80fd\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u524d\u63d0\u662f\u8fd0\u884c\u7684 ",(0,s.jsx)(t.strong,{children:"\u53ef\u4fe1"})," \u7684 VM"]}),"\n",(0,s.jsx)(t.li,{children:"Spectre\u3001Meltdown\u3001L1TF\uff08Foreshadow\uff09\u3001ZombieLoad"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.phoronix.com/review/3-years-specmelt/2",children:"https://www.phoronix.com/review/3-years-specmelt/2"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},38088:(e,t,n)=>{var s=n(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,r={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>o});var s=n(96651);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);