/*! For license information please see 5f7a8972.b54729fa.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69540],{7860:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=s(2488),r=s(62780);const c={title:"nsc"},d="nsc",l={id:"queue/nats/nsc",title:"nsc",description:"- nats-io/nsc",source:"@site/../notes/queue/nats/nsc.md",sourceDirName:"queue/nats",slug:"/queue/nats/nsc",permalink:"/notes/queue/nats/nsc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nsc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675953425,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{title:"nsc"},sidebar:"docs",previous:{title:"Nats Version",permalink:"/notes/queue/nats/version"},next:{title:"Pulsar",permalink:"/notes/queue/pulsar"}},i={},o=[];function a(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"nsc",children:"nsc"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/nats-io/nsc",children:"nats-io/nsc"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"tool for creating nkey/jwt based configurations"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://nats-io.github.io/nsc",children:"nsc"})," manual"]}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"env"}),(0,t.jsx)(e.th,{children:"default"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"NKEYS_PATH"}),(0,t.jsx)(e.td,{children:"~/.nkeys"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"NSC_HOME"}),(0,t.jsx)(e.td,{children:"~/.nsc"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["~/.nkeys - \u79c1\u94a5\u3001credential\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"creds/{operator}/{account}/{user}.creds"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"keys/{O|A|U}/{..}/{....}.nk"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"S - seed"}),"\n",(0,t.jsx)(e.li,{children:"O - operator"}),"\n",(0,t.jsx)(e.li,{children:"A - account"}),"\n",(0,t.jsx)(e.li,{children:"U - user"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"$NSC_HOME/nats"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# Docker\ndocker run --rm -it -v $PWD/nsc:/nsc natsio/nats-box:latest\n# \u53ef\u76f4\u63a5\u4e0b\u8f7d https://github.com/nats-io/nsc/releases\n\n# Download\ncurl -LO https://ghproxy.com/https://github.com/nats-io/nsc/releases/download/v2.7.6/nsc-darwin-amd64.zip\nunzip nsc-darwin-amd64.zip\n\n# \u73af\u5883\u914d\u7f6e\nnsc env\n\nnsc add operator O\nnsc edit operator --service-url nats://localhost:4222\nnsc add account A\n# ~/.nkeys/creds/O/A/U.creds\nnsc add user U\n\nnsc list keys\n# \u79c1\u94a5\nnsc list keys --show-seeds\n\nnsc describe operator\nnsc describe account\n\nnats-account-server -nsc ~/.nsc/nats/O\n\n# \u4f7f\u7528\u8bc1\u4e66\u76d1\u542c\nnats-sub -creds ~/.nkeys/creds/O/A/U.creds ">"\n# \u4f7f\u7528\u8bc1\u4e66\u53d1\u5e03\nnats-pub -creds ~/.nkeys/creds/O/A/U.creds hello NATS\n\nnsc sub --user U ">"\nnsc pub --user U hello NATS\n\n# \u9650\u5b9a s \u53ef\u4ee5 sub, c \u53ef\u4ee5 pub\nnsc add user s --allow-pub "_INBOX.>" --allow-sub q\nnsc describe user s\nnsc add user c --allow-pub q --allow-sub "_INBOX.>"\nnsc describe user c\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"~/.nsc/nats\n\u2514\u2500\u2500 O\n    \u251c\u2500\u2500 O.jwt\n    \u2514\u2500\u2500 accounts\n        \u2514\u2500\u2500 A\n            \u251c\u2500\u2500 A.jwt\n            \u2514\u2500\u2500 users\n                \u2514\u2500\u2500 U.jwt\n"})}),"\n",(0,t.jsx)(e.p,{children:"nkeys \u5305\u542b\u79c1\u94a5\u4fe1\u606f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"~/.nkeys\n\u251c\u2500\u2500 creds\n\u2502   \u2514\u2500\u2500 O\n\u2502       \u2514\u2500\u2500 A\n\u2502           \u2514\u2500\u2500 U.creds\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 A\n    \u2502   \u2514\u2500\u2500 DE\n    \u2502       \u2514\u2500\u2500 ADETPT36WBIBUKM3IBCVM4A5YUSDXFEJPW4M6GGVBYCBW7RRNFTV5NGE.nk\n    \u251c\u2500\u2500 O\n    \u2502   \u2514\u2500\u2500 AF\n    \u2502       \u2514\u2500\u2500 OAFEEYZSYYVI4FXLRXJTMM32PQEI3RGOWZJT7Y3YFM4HB7ACPE4RTJPG.nk\n    \u2514\u2500\u2500 U\n        \u2514\u2500\u2500 DB\n            \u2514\u2500\u2500 UDBD5FNQPSLIO6CDMIS5D4EBNFKYWVDNULQTFTUZJXWFNYLGFF52VZN7.nk\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},38088:(n,e,s)=>{var t=s(96651),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var t,c={},o=null,a=null;for(t in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)d.call(e,t)&&!i.hasOwnProperty(t)&&(c[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===c[t]&&(c[t]=e[t]);return{$$typeof:r,type:n,key:o,ref:a,props:c,_owner:l.current}}e.Fragment=c,e.jsx=o,e.jsxs=o},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>l,M:()=>d});var t=s(96651);const r={},c=t.createContext(r);function d(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);