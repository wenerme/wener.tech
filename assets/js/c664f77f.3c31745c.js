"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37560],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],o={id:"mysql-gtid",title:"MySQL GTID"},p="GTID",m={unversionedId:"db/relational/mysql-gtid",id:"db/relational/mysql-gtid",title:"MySQL GTID",description:"\u8fd9\u91cc\u4e3b\u8981\u7b80\u5355\u63cf\u8ff0\u4e0b\u5b9e\u73b0 GTID \u9047\u5230\u7684\u95ee\u9898",source:"@site/../notes/db/relational/mysql-gtid.md",sourceDirName:"db/relational",slug:"/db/relational/mysql-gtid",permalink:"/notes/db/relational/mysql-gtid",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/mysql-gtid.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"mysql-gtid",title:"MySQL GTID"},sidebar:"docs",previous:{title:"H2 Database",permalink:"/notes/db/relational/h2"},next:{title:"MySQL",permalink:"/notes/db/relational/mysql"}},u={},c=[{value:"MySQL vs MariaDB",id:"mysql-vs-mariadb",level:2},{value:"Reference",id:"reference",level:2}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gtid"},"GTID"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u7b80\u5355\u63cf\u8ff0\u4e0b\u5b9e\u73b0 GTID \u9047\u5230\u7684\u95ee\u9898"),(0,l.kt)("h2",{id:"mysql-vs-mariadb"},"MySQL vs MariaDB"),(0,l.kt)("p",null,"MariaDB 10.0.2 \u5f00\u59cb\u652f\u6301 GTID, MySQL 5.6 \u5f00\u59cb\u652f\u6301GTID,\u56e0\u4e3a MariaDB \u662f\u57fa\u4e8e MySQL 5.5.5, \u56e0\u6b64 MariaDB \u7684 GTID \u4e0e MySQL \u7684 GTID \u59ff\u52bf\u5e76\u4e0d\u4e00\u6837."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GTID \u683c\u5f0f\u4e0d\u4e00\u6837",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MySQL:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"UUID SET",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"3E11FA47-71CA-11E1-9E33-C80AA9429562:23")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"server_uuid:interval")))),(0,l.kt)("li",{parentName:"ul"},"GTID SET",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uuid_set[, uuid_set] ... | ''")))))),(0,l.kt)("li",{parentName:"ul"},"MariaDB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0-3306-123")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DomainID-ServerID-Sequence")))))),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb GTID \u590d\u5236\u7684\u6d41\u7a0b\u4e0d\u4e00\u6837",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MySQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528  ",(0,l.kt)("a",{parentName:"li",href:"http://dev.mysql.com/doc/internals/en/com-binlog-dump-gtid.html"},"COM_BINLOG_DUMP_GTID")," \u5f00\u59cb\u590d\u5236\u6d41\u7a0b,\u5728\u5305\u4e2d\u6307\u5b9a GTID SET"),(0,l.kt)("li",{parentName:"ul"},"COM_BINLOG_DUMP_GTID \u662f 5.6 \u652f\u6301\u7684\u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},"MariaDB")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-- \u5bf9\u4e8e\u4e0d\u540c\u7684\u590d\u5236\u9700\u6c42,\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u4e2d\u7684\u53d8\u91cf\u6307\u5b9a\n-- \u53ef\u901a\u8fc7\u6293\u5305\u770b\u5230 MaraDB \u5f00\u59cb\u590d\u5236\u7684\u6d41\u7a0b\n-- \u4e3b\u8981\u4e0e GTID \u76f8\u5173\u7684\u53d8\u91cf\nSET @mariadb_slave_capability = 4;-- \u8868\u660e\u80fd\u63a5\u53d7 GTID\nSET @slave_connect_state = '0-3311-90';-- \u6307\u5b9a GTID\n-- \u7136\u540e\u53d1\u9001 REGISTER_SLAVE\n-- MySQL \u662f\u53d1\u9001 BINLOG_DUMP.REGISTER_SLAVE \u662f\u53ef\u9009\u7684\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MariaDB \u7684 GTID \u4e8b\u4ef6\u5305\u4e0e MySQL \u7684\u4e0d\u540c,\u76ee\u524d\u53ea\u6709\u901a\u8fc7\u6293\u5305\u5206\u6790."),(0,l.kt)("li",{parentName:"ul"},"MySQL \u7684\u534f\u8bae\u6709\u76f8\u5bf9\u5b8c\u5584\u7684\u6587\u6863, MariaDB \u4ec0\u4e48\u7684\u534f\u8bae,\u6587\u6863\u6ef4\u6ca1\u6709",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MariaDB \u5927\u90e8\u5206\u534f\u8bae\u4e0e MySQL \u76f8\u540c, \u4f46\u662f\u8fd9\u90e8\u5206\u4e0d\u540c")))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wenerme/mysql-binlog-connector-java"},"wenerme/mysql-binlog-connector-java"),"\n\u652f\u6301 Mariadb GTID \u7684\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"MySQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.6/en/replication-gtids.html"},"Replication with Global Transaction Identifiers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://dev.mysql.com/doc/internals/en/com-binlog-dump-gtid.html"},"COM_BINLOG_DUMP_GTID")))),(0,l.kt)("li",{parentName:"ul"},"MariaDB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/mariadb/global-transaction-id/"},"Global Transaction ID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mariadb.com/blog/mariadb-10-gtid-explained"},"MariaDB 1- GTID explain")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mariadb.com/blog/enabling-gtids-server-replication-mariadb-100"},"Enabling GTIDs for server replication in MariaDB 10.0"))))))}d.isMDXComponent=!0}}]);