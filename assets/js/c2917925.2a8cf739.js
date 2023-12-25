/*! For license information please see c2917925.2a8cf739.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11010],{39843:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var l=s(11527),r=s(47214);const t={title:"MySQL \u914d\u7f6e"},c="MySQL Conf",o={id:"db/relational/mysql/mysql-conf",title:"MySQL \u914d\u7f6e",description:"mysqld",source:"@site/../notes/db/relational/mysql/mysql-conf.md",sourceDirName:"db/relational/mysql",slug:"/db/relational/mysql/conf",permalink:"/notes/db/relational/mysql/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/mysql/mysql-conf.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"MySQL \u914d\u7f6e"},sidebar:"docs",previous:{title:"Binary Log",permalink:"/notes/db/relational/mysql/binlog"},next:{title:"MySQL FAQ",permalink:"/notes/db/relational/mysql/faq"}},i={},a=[{value:"\u914d\u7f6e\u65b9\u5f0f",id:"\u914d\u7f6e\u65b9\u5f0f",level:2},{value:"query_cache_size",id:"query_cache_size",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"mysql-conf",children:"MySQL Conf"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mysqld --verbose --help\nmysqld --no-defaults --verbose --help\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW VARIABLES;\n\nselect * from performance_schema.persisted_variables;\nselect * from performance_schema.global_variables;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"mysqld"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"--character-set-server=utf8mb4\n--collation-server=utf8mb4_unicode_ci\n--max-connections=2000\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"my.cnf"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"--defaults-extra-file"})}),"\n",(0,l.jsxs)(n.li,{children:[".mylogin.cnf\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"--no-defaults"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["mysqld-auto.cnf\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"persisted_globals_load"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"SET PERSIST"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"mysql_config_editor"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/notes/db/relational/mysql/log",children:"MySQL Log"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html",children:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/option-files.html",children:"https://dev.mysql.com/doc/refman/8.0/en/option-files.html"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u65b9\u5f0f",children:"\u914d\u7f6e\u65b9\u5f0f"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u542f\u52a8\u53c2\u6570\u914d\u7f6e"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mysqld --sort-buffer-size=256K --max-allowed-packet=1G\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"my.cnf"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",children:"[mysqld]\nsort_buffer_size=256K\nmax_allowed_packet=1G\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u52a8\u6001\u914d\u7f6e"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SET GLOBAL max_connections = 1000;\nSET @@GLOBAL.max_connections = 1000;\n\n-- mysqld-auto.cnf\nSET PERSIST max_connections = 1000;\nSET @@PERSIST.max_connections = 1000;\n\n-- \u4e0d\u4fee\u6539\u5f53\u524d\nSET PERSIST_ONLY back_log = 1000;\nSET @@PERSIST_ONLY.back_log = 1000;\n\n-- \u4f1a\u8bdd\u7ef4\u5ea6\nSET SESSION sql_mode = 'TRADITIONAL';\nSET @@SESSION.sql_mode = 'TRADITIONAL';\nSET @@sql_mode = 'TRADITIONAL';\n"})}),"\n",(0,l.jsx)(n.h2,{id:"query_cache_size",children:"query_cache_size"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"8.0 \u79fb\u9664"}),"\n",(0,l.jsx)(n.li,{children:"5.6 \u7981\u7528"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://dba.stackexchange.com/a/217578/234272",children:"https://dba.stackexchange.com/a/217578/234272"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},3354:(e,n,s)=>{var l=s(50959),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var l,t={},a=null,d=null;for(l in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,l)&&!i.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===t[l]&&(t[l]=n[l]);return{$$typeof:r,type:e,key:a,ref:d,props:t,_owner:o.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var l=s(50959);const r={},t=l.createContext(r);function c(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);