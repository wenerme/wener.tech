/*! For license information please see 2697ea4b.7ebeff7c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78998],{86769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var r=t(11527),s=t(47214);const d={title:"SDR"},a="SDR",i={id:"hardware/server/hpe/sdr",title:"SDR",description:"- SUM - Smart Update Manager",source:"@site/../notes/hardware/server/hpe/sdr.md",sourceDirName:"hardware/server/hpe",slug:"/hardware/server/hpe/sdr",permalink:"/notes/hardware/server/hpe/sdr",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/server/hpe/sdr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"SDR"},sidebar:"docs",previous:{title:"iLO",permalink:"/notes/hardware/server/hpe/ilo"},next:{title:"Service Pack for ProLiant",permalink:"/notes/hardware/server/hpe/spp"}},l={},h=[];function o(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sdr",children:"SDR"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SUM - Smart Update Manager"}),"\n",(0,r.jsx)(n.li,{children:"\u60e0\u666e\u63d0\u4f9b\u5f88\u591a\u8f6f\u4ef6\u6765\u63a7\u5236\u670d\u52a1\u5668"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://downloads.linux.hpe.com/",children:"https://downloads.linux.hpe.com/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://downloads.linux.hpe.com/SDR/repo/",children:"https://downloads.linux.hpe.com/SDR/repo/"})}),"\n",(0,r.jsxs)(n.li,{children:["\u6ce8\u610f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u56fa\u4ef6\u5347\u7ea7\u53ea\u652f\u6301 RPM \u7c7b\u7684\u7cfb\u7edf,\u4e0d\u652f\u6301 DEB \u7cfb\u5217\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.li,{children:"\u56fd\u5185\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"mcp"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5305"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hp-health"}),(0,r.jsx)(n.td,{children:"HPE System Health Application and Command line Utilities"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hponcfg"}),(0,r.jsx)(n.td,{children:"HPE RILOE II/iLO online configuration utility"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hp-ams"}),(0,r.jsx)(n.td,{children:"HPE Agentless Management Service"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hp-snmp-agents"}),(0,r.jsx)(n.td,{children:"Insight Management SNMP Agents for HPE ProLiant Systems"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hpsmh"}),(0,r.jsx)(n.td,{children:"HPE System Management Homepage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hp-smh-templates"}),(0,r.jsx)(n.td,{children:"HPE System Management Homepage Templates"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hpssacli"}),(0,r.jsx)(n.td,{children:"HPE Command Line Smart Storage Administration Utility"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hpssaducli"}),(0,r.jsx)(n.td,{children:"HPE Command Line Smart Storage Administration Diagnostics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hpssa"}),(0,r.jsx)(n.td,{children:"HPE Array Smart Storage Administration Service"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#########\n# DEB\n#########\n# \u6dfb\u52a0 Key\n# https://downloads.linux.hpe.com/SDR/keys.html\ncurl http://downloads.linux.hpe.com/SDR/hpPublicKey1024.pub | apt-key add -\ncurl http://downloads.linux.hpe.com/SDR/hpPublicKey2048.pub | apt-key add -\ncurl http://downloads.linux.hpe.com/SDR/hpPublicKey2048_key1.pub | apt-key add -\ncurl http://downloads.linux.hpe.com/SDR/hpePublicKey2048_key1.pub | apt-key add -\n\n# \u6dfb\u52a0\u4ed3\u5e93\n# \u80fd\u5728 DEB \u7c7b\u7cfb\u7edf\u4e0b\u4f7f\u7528\u7684\u4e3b\u8981\u6709 mcp,minnow,stk\nwget https://downloads.linux.hpe.com/SDR/add_repo.sh\n# -n \u53c2\u6570\u53ef\u4ee5\u4e0d\u6dfb\u52a0\u4ed3\u5e93,\u800c\u8f93\u51fa\u4f1a\u6dfb\u52a0\u7684\u4ed3\u5e93\nsh ./add_repo.sh -v mcp\nsh ./add_repo.sh -v minnow\nsh ./add_repo.sh -v stk\n# \u66f4\u65b0\u7d22\u5f15\napt update\n# \u5b89\u88c5\u5305\napt install -y hp-health hpssacli hp-snmp-agents hpssa hpssacli hp-smh-templates hpsmh hponcfg\n# \u90e8\u5206\u5185\u5bb9\u4f1a\u5b89\u88c5\u5230 /opt/hp\n\n#########\n# mcp - Management Component Pack\n#########\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},3354:(e,n,t)=>{var r=t(50959),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,t){var r,d={},h=null,o=null;for(r in void 0!==t&&(h=""+t),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:h,ref:o,props:d,_owner:i.current}}n.Fragment=d,n.jsx=h,n.jsxs=h},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(50959);const s={},d=r.createContext(s);function a(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);