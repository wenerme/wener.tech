/*! For license information please see 7f816c19.3d26b6d1.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6917],{19376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(11527),r=t(47214);const s={tags:["Configuration"]},a="\u914d\u7f6e",o={id:"service/forge/gitea/gitea-conf",title:"\u914d\u7f6e",description:"- docker \u73af\u5883\u53d8\u91cf\u914d\u7f6e - GITEA{name}",source:"@site/../notes/service/forge/gitea/gitea-conf.md",sourceDirName:"service/forge/gitea",slug:"/service/forge/gitea/conf",permalink:"/notes/service/forge/gitea/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitea/gitea-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"Gitea Action",permalink:"/notes/service/forge/gitea/action"},next:{title:"Gitea FAQ",permalink:"/notes/service/forge/gitea/faq"}},c={},l=[{value:"action",id:"action",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["docker \u73af\u5883\u53d8\u91cf\u914d\u7f6e - ",(0,i.jsx)(n.code,{children:"GITEA__{section}__{name}"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GITEA__database__DB_TYPE"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"APP_NAME=Gitea\nRUN_USER=git\nRUN_MODE=prod\n\n[database]\n# PostgreSQL\nDB_TYPE = postgres\nHOST = RELEASE-NAME-postgresql.default.svc.cluster.local:5432\nNAME = gitea\nPASSWD = gitea\nUSER = gitea\nSCHEMA =\nSSL_MODE=disable ; disable, require, verify-full\n\n# SQLite\nDB_TYPE = sqlite3\nPATH = data/gitea.db\nSQLITE_TIMEOUT = 500\n# https://www.sqlite.org/pragma.html#pragma_journal_mode\n# DELETE | TRUNCATE | PERSIST | MEMORY | WAL | OFF\n# \u63a8\u8350 WAL\nSQLITE_JOURNAL_MODE = DELETE\n\n# \u5176\u4ed6\nITERATE_BUFFER_SIZE = 50\nLOG_SQL = false\nDB_RETRIES = 10\nDB_RETRY_BACKOFF = 3s\nMAX_IDLE_CONNS = 2\nCONN_MAX_LIFETIME = 3s\nMAX_OPEN_CONNS = 0\nAUTO_MIGRATION = true\n\n[service]\n# \u65b0\u6ce8\u518c\u7528\u6237\u5fc5\u987b\u7531\u7ba1\u7406\u5458\u624b\u52a8\u6fc0\u6d3b,\u542f\u7528\u6b64\u9009\u9879\u9700\u53d6\u6d88\nREGISTER_MANUAL_CONFIRM=false\n# \u7981\u7528\u6ce8\u518c\uff0c\u542f\u7528\u540e\u53ea\u80fd\u7528\u7ba1\u7406\u5458\u6dfb\u52a0\u7528\u6237\nDISABLE_REGISTRATION=false\n# \u662f\u5426\u6240\u6709\u9875\u9762\u90fd\u5fc5\u987b\u767b\u5f55\u540e\u624d\u53ef\u8bbf\u95ee\u3002\nREQUIRE_SIGNIN_VIEW=false\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GITEA_WORK_DIR"}),"\n",(0,i.jsxs)(n.li,{children:["\u8fc1\u79fb\u6570\u636e\u5e93 ",(0,i.jsx)(n.code,{children:"gitea migrate"}),", ",(0,i.jsx)(n.code,{children:"gitea dump"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.gitea.io/en-us/config-cheat-sheet/",children:"Configuration Cheat Sheet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.gitea.io/zh-cn/config-cheat-sheet/",children:"\u4e2d\u6587"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/go-gitea/gitea/blob/main/custom/conf/app.example.ini",children:"app.example.ini"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"action",children:"action"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[action]\nENABLED=false\n# github -> https://github.com\n# self -> \u5f53\u524d gitea - GITEA__server__ROOT_URL\nDEFAULT_ACTIONS_URL=github\n# minio, XYZ -> storage.XYZ\nSTORAGE_TYPE=local\nMINIO_BASE_PATH=actions_log/\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["DEFAULT_ACTIONS_URL\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e0d\u63a8\u8350 self\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9700\u8981 mirror \u592a\u591a\u4ed3\u5e93"}),"\n",(0,i.jsx)(n.li,{children:"\u9700\u8981 gitea \u516c\u5f00\u8bbf\u95ee"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u63a8\u8350 uses \u5199\u5b8c\u6574 url\uff0c\u4f8b\u5982: ",(0,i.jsx)(n.a,{href:"https://gitea.com/actions/checkout@v3",children:"https://gitea.com/actions/checkout@v3"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var i=t(50959),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,s={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(50959);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);