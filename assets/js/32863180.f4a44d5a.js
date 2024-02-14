/*! For license information please see 32863180.f4a44d5a.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4484],{36952:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=l(2488),r=l(62780);const t={title:"MySQL \u65e5\u5fd7",tags:["Debug"]},i="MySQL Log",o={id:"db/relational/mysql/mysql-log",title:"MySQL \u65e5\u5fd7",description:"| conf                          | default               | for                                               |",source:"@site/../notes/db/relational/mysql/mysql-log.md",sourceDirName:"db/relational/mysql",slug:"/db/relational/mysql/log",permalink:"/notes/db/relational/mysql/log",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/mysql/mysql-log.md",tags:[{label:"Debug",permalink:"/notes/tags/debug"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690351481,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{title:"MySQL \u65e5\u5fd7",tags:["Debug"]},sidebar:"docs",previous:{title:"InnoDB",permalink:"/notes/db/relational/mysql/innodb"},next:{title:"MySQL \u6027\u80fd",permalink:"/notes/db/relational/mysql/perf"}},d={},c=[{value:"general log",id:"general-log",level:2},{value:"slow log",id:"slow-log",level:2},{value:"maintain",id:"maintain",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mysql-log",children:"MySQL Log"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"conf"}),(0,s.jsx)(n.th,{children:"default"}),(0,s.jsx)(n.th,{children:"for"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_output"}),(0,s.jsx)(n.td,{children:"FILE"}),(0,s.jsx)(n.td,{children:"TABLE,FILE,NONE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"slow_query_log"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"slow_query_log_file"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<HOSTNAME>-slow.log"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"general_log"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"general_log_file"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<HOSTNAME>.log"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sql_log_off"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsx)(n.td,{children:"\u63a7\u5236\u5f53\u524d\u4f1a\u8bdd\u7684 general log"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"long_query_time"}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"\u6162\u67e5\u8be2 \u9600\u503c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_slow_admin_statements"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_queries_not_using_indexes"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsxs)(n.td,{children:["e.g ",(0,s.jsx)(n.code,{children:"[ALTER,ANALYZE,CHECK,OPTIMIZE,REPAIR] TABLE"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_slow_extra"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsx)(n.td,{children:"\u5728 FILE \u8f93\u51fa\u4e2d\u5305\u542b\u989d\u5916\u4fe1\u606f"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select *\nfrom performance_schema.global_variables\nwhere VARIABLE_NAME in (\n                        'log_output', 'slow_query_log', 'long_query_time', 'slow_query_log_file',\n                        'log_queries_not_using_indexes', 'log_throttle_queries_not_using_indexes',\n                        'general_log', 'general_log_file'\n    )\norder by VARIABLE_NAME;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mysql.slow_log"})," \u8868\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9e\u9645\u5bf9\u5e94 csv - \u67e5\u8be2\u5f88\u6162 - CSV storage engine"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/log-destinations.html",children:"https://dev.mysql.com/doc/refman/8.0/en/log-destinations.html"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"show variables like 'log_queries_not_using_indexes';\n\n\nset global log_queries_not_using_indexes = 'ON'\n\n--\nset global general_log = 'ON';\nselect * from mysql.general_log\norder by event_time desc;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"head /var/lib/mysql/mysql/slow_log.CSV\nwc -l /var/lib/mysql/mysql/slow_log.CSV\n\napk add mariadb-client\nmysqldumpslow -t 10 slow.log\n\n# percona-toolkit\ncurl -LO http://www.percona.com/get/pt-query-digest\nchmod +x pt-query-digest\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.percona.com/percona-toolkit/pt-query-digest.html",children:"https://docs.percona.com/percona-toolkit/pt-query-digest.html"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Analyze MySQL queries from logs, processlist, and tcpdump"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"general-log",children:"general log"}),"\n",(0,s.jsx)(n.h2,{id:"slow-log",children:"slow log"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"var"}),(0,s.jsx)(n.th,{children:"for"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_slow_admin_statements"}),(0,s.jsx)(n.td,{children:"OFF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_slow_extra"}),(0,s.jsx)(n.td,{children:"OFF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_slow_replica_statements"}),(0,s.jsx)(n.td,{children:"OFF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_slow_slave_statements"}),(0,s.jsx)(n.td,{children:"OFF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"slow_launch_time"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"slow_query_log"}),(0,s.jsx)(n.td,{children:"ON"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"slow_query_log_file"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"long_query_time"}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_output"}),(0,s.jsx)(n.td,{children:"FILE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"log_queries_not_using_indexes"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"show variables like '%slow%';\nshow variables like 'long_query_time';-- \u9ed8\u8ba4 10s\nshow variables like 'log_output';-- \u9ed8\u8ba4 FILE\nshow variables like 'log_queries_not_using_indexes';\nshow variables like 'slow_query_log_file';\n\n-- slow_query_log_file \u63a7\u5236\u6587\u4ef6\u8def\u5f84\nset global log_output = 'FILE,TABLE';\nset global slow_query_log='ON';\nset global log_queries_not_using_indexes = 'ON';\n\nset global long_query_time=3;\nset session long_query_time=3;\n\n-- \u6d4b\u8bd5\nselect sleep(5);\nselect * from mysql.slow_log limit 2;\n\n\n-- \u6392\u67e5\u5176\u4ed6\nshow processlist;\nshow engine innodb status;\n\nflush logs;\nflush slow logs;\ntruncate mysql.slow_log;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://mariadb.com/kb/en/mariadb/writing-logs-into-tables/",children:"Write logs into tables"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://mariadb.com/kb/en/mariadb/mysqlslow_log-table/",children:"TABLE mysql.slow_log"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://mariadb.com/kb/en/mariadb/slow-query-log-overview/",children:"Slow Query Log Overview"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log_file",children:"http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log_file"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html",children:"http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"maintain",children:"maintain"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"binlog_expire_logs_seconds \u9ed8\u8ba4 30 \u5929"}),"\n",(0,s.jsx)(n.li,{children:"binlog_expire_logs_auto_purge=ON"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"PURGE { BINARY | MASTER } LOGS {\n    TO 'log_name'\n  | BEFORE datetime_expr\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"FLUSH LOGS ;\nFLUSH BINARY LOGS;\n\nSHOW BINARY LOGS;\nSHOW MASTER LOGS;\nPURGE BINARY LOGS BEFORE now();\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysqladmin flush-logs\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},38088:(e,n,l)=>{var s=l(96651),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,l){var s,t={},c=null,a=null;for(s in void 0!==l&&(c=""+l),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:a,props:t,_owner:o.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},2488:(e,n,l)=>{e.exports=l(38088)},62780:(e,n,l)=>{l.d(n,{I:()=>o,M:()=>i});var s=l(96651);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);