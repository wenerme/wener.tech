/*! For license information please see 97ba46b2.cdfdf43b.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8464],{87472:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=r(2488),o=r(62780);const s={title:"PowerDNS LUA"},c="PowerDNS LUA",i={id:"service/dns/powerdns/powerdns-lua",title:"PowerDNS LUA",description:"- \u81ea 4.2 \u5f00\u59cb\u652f\u6301",source:"@site/../notes/service/dns/powerdns/powerdns-lua.md",sourceDirName:"service/dns/powerdns",slug:"/service/dns/powerdns/lua",permalink:"/notes/service/dns/powerdns/lua",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/powerdns/powerdns-lua.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"PowerDNS LUA"},sidebar:"docs",previous:{title:"PowerDNS FAQ",permalink:"/notes/service/dns/powerdns/faq"},next:{title:"PowerDNS Recursor",permalink:"/notes/service/dns/powerdns/rec"}},d={},a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"powerdns-lua",children:"PowerDNS LUA"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u81ea 4.2 \u5f00\u59cb\u652f\u6301"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://doc.powerdns.com/authoritative/lua-records/functions.html",children:"\u6240\u6709\u51fd\u6570"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://doc.powerdns.com/authoritative/lua-records/reference/index.html",children:"LUA Reference"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"return"}),"\uff0c\u5982\u679c\u8bed\u53e5\u4e0d\u662f\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:";"})," \u524d\u7f00\uff0c\u7136\u540e\u81ea\u5df1\u5199 ",(0,t.jsx)(n.code,{children:"return"}),"\u3002"]}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u9488\u5bf9\u57df\u540d\u542f\u7528 LUA\n-- \u6216\u914d\u7f6e\u6dfb\u52a0 enable-lua-records \u8fdb\u884c\u5168\u5c40\u542f\u7528\nINSERT INTO domainmetadata (domain_id, kind, content) VALUES (1, 'ENABLE-LUA-RECORDS', 1);\n\n-- \u6dfb\u52a0 LUA \u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES (\n  1,\n  'www.example.com',\n  'LUA',\n  'A \"pickclosest({''192.0.2.1'',''192.0.2.2'',''198.51.100.1''})',\n  600\n);\n\n-- \u914d\u7f6e\u8bb0\u5f55\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'config.example.com', 'LUA',\n  'LUA \"fallbackIp=''192.168.1.1''\"', 600\n);\n-- \u4f7f\u7528\u914d\u7f6e\nINSERT INTO records (domain_id, name, type, content, ttl)\nVALUES ( 1, 'www.example.com', 'LUA',\n  'A \";include(''config'');return fallbackIp\"', 600\n);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"-- \u8fd4\u56de\u8bf7\u6c42\u65b9 IP\nwho:toString()\n\n-- \u6839\u636e\u8bf7\u6c42\u65b9 IP \u4e0d\u540c\u8fd4\u56de\u4e0d\u540c\u5730\u5740\nview({\n  {{'10.10.0.0/16'}, {'10.10.1.1'}}\n  {{'0.0.0.0/0'}, {'192.0.2.1'}}\n})\n\n-- \u8fd4\u56de\u5b58\u6d3b\u7684 IP\n-- \u5f02\u6b65\u68c0\u6d4b - \u5982\u679c\u90fd\u4e0d\u5b58\u6d3b\u5219\u90fd\u8fd4\u56de\nifportup(443, {'192.0.2.1', '192.0.2.2'})\n-- \u4f7f\u7528 URL \u68c0\u6d4b\u5b58\u6d3b - stringmatch \u4e3a\u53ef\u9009\u7684\u5185\u5bb9\u5339\u914d\u6761\u4ef6\nifurlup(\"example.com/status\", { {\"192.0.2.20\", \"203.0.113.4\"}, {\"203.0.113.2\"} },{stringmatch='ok'})\n\n-- \u57fa\u4e8e\u8bf7\u6c42\u65b9\u7684 HASH(bestwho) \u8fdb\u884c\u8fd4\u56de\npickwhashed({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n-- \u968f\u673a\u8fd4\u56de - \u6709\u5e26\u6743\u91cd\u7248\npickrandom({{'192.168.0.1'},{'192.168.0.2'}})\npickwrandom({{10,'192.168.0.1'},{100,'192.168.0.2'}})\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},38088:(e,n,r)=>{var t=r(96651),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,s={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>i,M:()=>c});var t=r(96651);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);