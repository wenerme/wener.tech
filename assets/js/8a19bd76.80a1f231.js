/*! For license information please see 8a19bd76.80a1f231.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81320],{79780:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(2488),i=s(62780);const t={title:"Wiki.js"},l="Wiki.js",o={id:"service/cms/wikijs",title:"Wiki.js",description:"- Requarks/wiki \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/cms/wikijs.md",sourceDirName:"service/cms",slug:"/service/cms/wikijs",permalink:"/notes/service/cms/wikijs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/cms/wikijs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"Wiki.js"},sidebar:"docs",previous:{title:"Strapi",permalink:"/notes/service/cms/strapi"},next:{title:"CN",permalink:"/notes/service/cn/"}},a={},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Kubernetes",id:"kubernetes",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"wikijs",children:"Wiki.js"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Requarks/wiki",children:"Requarks/wiki"})," \u662f\u4ec0\u4e48\uff1f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AGPL-3.0"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 Markdown \u7684 Wiki"}),"\n",(0,r.jsx)(n.li,{children:"\u7c7b\u4f3c\u4e8e\u8bed\u96c0\u4f46\u662f\u652f\u6301 Markdown"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u6587\u4ef6\uff0c\u652f\u6301\u56fe\u7247\uff0c\u652f\u6301 Git \u540e\u7aef\uff0c\u652f\u6301\u641c\u7d22"}),"\n",(0,r.jsx)(n.li,{children:"Nodejs 10.12+"}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301 MySQL, MariaDB, PostgreSQL, MSSQL, SQLite3\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u63a8\u8350\u4f7f\u7528 PostgreSQL"}),"\n",(0,r.jsx)(n.li,{children:"\u591a\u526f\u672c\u53ea\u652f\u6301 PostgreSQL"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8981\u6c42\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"2 CPU 1G \u5185\u5b58"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.requarks.io/auth",children:"\u6388\u6743"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CAS\u3001LDAP/AD\u3001SAML 2.0\u3001Local"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Docker \u5b89\u88c5\n# https://docs.requarks.io/install/docker\n# SQLite \u542f\u52a8\ndocker run --rm -it \\\n  -p 8080:3000 \\\n  -v $PWD/wiki:/data \\\n  -e "DB_TYPE=sqlite" \\\n  -e "DB_FILEPATH=/data/wiki.sqlite" \\\n  --name wiki requarks/wiki:2\n\n# PG \u542f\u52a8\ndocker run -d --restart unless-stopped \\\n  -p 8080:3000 \\\n  -e "DB_TYPE=postgres"\n  -e "DB_HOST=db"\n  -e "DB_PORT=5432"\n  -e "DB_USER=wikijs"\n  -e "DB_PASS=wikijsrocks"\n  -e "DB_NAME=wiki" \\\n  --name wiki requarks/wiki:2\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.requarks.io/install/config",children:"Configuration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Requarks/wiki/blob/dev/config.sample.yml",children:"config.sample.yml"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"bindIP: 0.0.0.0\nport: 3000\n# error, warn, info, verbose, debug, silly\nlogLevel: info\nuploads:\n  # \u9ed8\u8ba4 5 MB\n  maxFileSize: 5242880\n  maxFiles: 10\n\n# \u79bb\u7ebf\u6a21\u5f0f - \u907f\u514d\u4e0b\u8f7d\u66f4\u65b0\noffline: true\n\n# HA \u6a21\u5f0f - \u9700\u8981 PostgreSQL\nha: true\n\n# \u4e34\u65f6\u6570\u636e\u76ee\u5f55\ndataPath: ./data\n---\ndb:\n  type: postgres\n  host: localhost\n  port: 5432\n  user: wikijs\n  pass: wikijsrocks\n  db: wiki\n  # SQLite\n  # type: sqlite\n  # storage: db.sqlite\n# DB \u8fde\u63a5\u6c60\npool:\n  min: 2\n  max: 10\n\n---\nssl:\n  enabled: true\n  port: 3443\n  provider: custom\n\n  format: pem\n  key: path/to/key.pem\n  cert: path/to/cert.pem\n  passphrase: null\n  dhparam: null\n\n  # format: pfx\n  # pfx: path/to/cert.pfx\n---\n# ACME\nssl:\n  enabled: true\n  port: 3443\n  provider: letsencrypt\n\n  domain: wiki.yourdomain.com\n  subscriberEmail: admin@example.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Requarks/wiki/tree/dev/dev/helm",children:"dev/helm"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"values.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"image:\n  # \u9ed8\u8ba4\u662f latest\n  tag: latest\npostgresql:\n  # \u4f7f\u7528\u5df2\u6709\u7684\n  enabled: false\n  postgresqlHost:\n  postgresqlPort: 5432\n  postgresqlDatabase: wiki\n  postgresqlUser: postgres\n  postgresqlPassword:\n  # \u5b58\u50a8 Password \u7684 secret\n  existingSecret:\n  secretKey: postgresql-password\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,s)=>{var r=s(96651),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,t={},c=null,d=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:t,_owner:o.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>l});var r=s(96651);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);