"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29859],{96255:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var r=a(96600),l=a(27279),n=(a(59496),a(3905)),s=["components"],i={title:"Database FAQ",tags:["FAQ"]},p=void 0,o={unversionedId:"db/db-faq",id:"db/db-faq",title:"Database FAQ",description:"OLTP vs OLAP vs NoSQL vs NewSQL vs Data Warehouse vs Data Mart vs Data Lake",source:"@site/notes/db/db-faq.md",sourceDirName:"db",slug:"/db/db-faq",permalink:"/notes/db/db-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/db-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Database FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Database Awesome",permalink:"/notes/db/db-awesome"},next:{title:"\u6570\u636e\u5e93\u672f\u8bed",permalink:"/notes/db/db-glossary"}},m={},u=[{value:"OLTP vs OLAP vs NoSQL vs NewSQL vs Data Warehouse vs Data Mart vs Data Lake",id:"oltp-vs-olap-vs-nosql-vs-newsql-vs-data-warehouse-vs-data-mart-vs-data-lake",level:3},{value:"OLTP vs OLAP",id:"oltp-vs-olap",level:2},{value:"Connect String / DSN",id:"connect-string--dsn",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"SQLite",id:"sqlite",level:3},{value:"JDBC",id:"jdbc",level:2},{value:"page size",id:"page-size",level:2}],c={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"oltp-vs-olap-vs-nosql-vs-newsql-vs-data-warehouse-vs-data-mart-vs-data-lake"},"OLTP vs OLAP vs NoSQL vs NewSQL vs Data Warehouse vs Data Mart vs Data Lake"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OLTP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u4ea4\u6613\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u4e8b\u52a1\uff0c\u5f3a\u4e00\u81f4\uff0c\u8f83\u4f4e RT\uff0c\u4f4e\u9891\u5ea6\u66f4\u65b0"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5b9e\u65f6\u6570\u636e\uff0c\u6570\u636e\u91cf\u5c0f"))),(0,n.kt)("li",{parentName:"ul"},"OLAP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u5206\u6790\u62a5\u8868\u7edf\u8ba1\uff0c\u4ee5\u8bfb\u4e3a\u4e3b"),(0,n.kt)("li",{parentName:"ul"},"\u5f31\u4e8b\u52a1\uff0c\u5f31\u4e00\u81f4\u6027\uff0c\u5bf9\u54cd\u5e94\u6709\u4e00\u5b9a\u8981\u6c42"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u660e\u7ec6\u6570\u636e\uff0c\u5386\u53f2\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927"))),(0,n.kt)("li",{parentName:"ul"},"NoSQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e94\u4ed8\u7279\u6b8a\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a\u541e\u5410\u3001\u5ef6\u65f6\u3001\u64cd\u4f5c\u4fbf\u643a\u3001\u6570\u636e\u91cf\u3001\u5b9e\u65f6\u3001\u5e76\u53d1\u3001\u641c\u7d22\u3001\u5916\u90e8\u96c6\u6210\u3001\u6570\u636e\u7ec4\u7ec7\u6a21\u5f0f\uff08\u56fe\u3001\u7a7a\u95f4\u3001\u65f6\u5e8f\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u5f62\u5f0f\u5404\u4e0d\u76f8\u540c\uff0c\u4e8b\u52a1\u4fdd\u969c\u5404\u90e8\u76f8\u540c"))),(0,n.kt)("li",{parentName:"ul"},"NewSQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u662f SQL \u6807\u51c6\u7684 NoSQL"),(0,n.kt)("li",{parentName:"ul"},"\u5177\u6709 OLTP \u7684\u5c5e\u6027\uff0c\u80fd\u6a2a\u5411\u6269\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c SQL \u5f15\u64ce + \u5206\u5e03\u5f0f KV \u5b58\u50a8\u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4f1a\u5b9e\u73b0 MySQL \u6216 PostgreSQL \u7684\u534f\u8bae"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_warehouse"},"Data Warehouse"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u4ed3\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7eac\u5ea6\u7684\u6570\u636e\u7ba1\u63a7"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u5957\u7cfb\u7edf\uff0c\u4f53\u7cfb\u5316\u7684\u89e3\u51b3\u4f01\u4e1a\u5185\u90e8\u6570\u636e\u5b58\u50a8\u3001\u5904\u7406\u3001\u5206\u6790\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5de8\u5927\uff0c\u5bf9\u54cd\u5e94\u8981\u6c42\u4f4e"),(0,n.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u5e73\u53f0\uff0c\u7531\u5f88\u591a\u90e8\u5206\u7ec4\u6210\uff0c\u6709\u5f00\u53d1\u5e73\u53f0"),(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u5f00\u53d1\u548c BI"),(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u4f01\u4e1a\u6574\u4f53"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u6709\u4e00\u5b9a\u7ed3\u6784"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_mart"},"Data Mart"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u4ed3\u5e93\u7684\u4e00\u79cd\u7279\u6b8a\u5f62\u5f0f\uff0c\u6570\u636e\u4ed3\u5e93\u7684\u5b50\u96c6"),(0,n.kt)("li",{parentName:"ul"},"\u9762\u5411\u4e1a\u52a1\u3001\u7ec4\u7ec7\u90e8\u95e8\u3001\u67d0\u4e00\u9886\u57df"),(0,n.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5185\u4e00\u5b9a\u6570\u636e\u5171\u4eab\uff0c\u6570\u636e\u5177\u6709\u7ed3\u6784\u6027"))),(0,n.kt)("li",{parentName:"ul"},"Data Lake",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u539f\u59cb\u6570\u636e\uff0c\u4fdd\u6301\u4f4e\u5ec9\u7684\u5b58\u50a8\u6210\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u89c4\u6a21\u548c\u6570\u636e\u91cf\u6bd4 DW \u5927\uff0c\u5904\u7406\u66f4\u6162\uff0c\u8bfb\u53d6\u65f6\u5b9a\u4e49\u6570\u636e\u7ed3\u6784"),(0,n.kt)("li",{parentName:"ul"},"Hadoop \u662f DL\uff0c\u800c\u5728\u8fd9\u4e4b\u4e0a\u7684 HBase \u5219\u662f DW"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6570\u636e\u4e0d\u5141\u8bb8\u66f4\u65b0")))),(0,n.kt)("h2",{id:"oltp-vs-olap"},"OLTP vs OLAP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.stitchdata.com/resources/oltp-vs-olap/"},"https://www.stitchdata.com/resources/oltp-vs-olap/"))),(0,n.kt)("h2",{id:"connect-string--dsn"},"Connect String / DSN"),(0,n.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING"},"libpq connect")),(0,n.kt)("li",{parentName:"ul"},"host, hostaddr, port, dbname, user, password, passfile"),(0,n.kt)("li",{parentName:"ul"},"channel_binding, connect_timeout, client_encoding"),(0,n.kt)("li",{parentName:"ul"},"options"),(0,n.kt)("li",{parentName:"ul"},"application_name, fallback_application_name"),(0,n.kt)("li",{parentName:"ul"},"keepalives, keepalives_idle, keepalives_interval, keepalives_count"),(0,n.kt)("li",{parentName:"ul"},"tcp_user_timeout, tty"),(0,n.kt)("li",{parentName:"ul"},"replication"),(0,n.kt)("li",{parentName:"ul"},"gssencmode, krbsrvname, gsslib"),(0,n.kt)("li",{parentName:"ul"},"sslmode - prefer,disable,allow,require,verify-ca,verify-full"),(0,n.kt)("li",{parentName:"ul"},"requiressl, sslcompression, sslcert, sslkey, sslpassword, sslrootcert, sslcrl"),(0,n.kt)("li",{parentName:"ul"},"ssl_min_protocol_version, ssl_max_protocol_version"),(0,n.kt)("li",{parentName:"ul"},"requirepeer"),(0,n.kt)("li",{parentName:"ul"},"service"),(0,n.kt)("li",{parentName:"ul"},"target_session_attrs")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"# postgres\nhost=localhost port=5432 dbname=mydb connect_timeout=10\n# postgresql://[user[:password]@][host][:port][,...][/dbname][?param1=value1&...]\npostgresql://\npostgres://\n\npostgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp\npostgresql://host1:123,host2:456/somedb?target_session_attrs=any&application_name=myapp\n\npostgresql:///dbname?host=/var/lib/postgresql\n\n# golang \u652f\u6301 search path\n# https://github.com/jackc/pgx\npostgresql://example.com/mydatabase?search_path=myschema\nhost=192.168.1.1 database=apps user=apps password=apps search_path=apps,public\n")),(0,n.kt)("p",null,"\u4e0d\u652f\u6301\u8bbe\u7f6e schema\uff0c\u53ef\u670d\u52a1\u7aef\u63a7\u5236"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u9488\u5bf9\u7528\u6237\u4fee\u6539\nALTER ROLE username SET search_path TO a,b,c;\n-- \u9488\u5bf9 db \u4fee\u6539\nALTER DATABASE database_name SET search_path TO schema1,schema2;\n-- \u5168\u90e8\u53ea\u5141\u8bb8\u8bbf\u95ee\u81ea\u5df1 schema\nALTER ROLE ALL SET search_path = \"$user\";\n\nSELECT pg_catalog.set_config('search_path', '', false);\n")),(0,n.kt)("h3",{id:"sqlite"},"SQLite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cache",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"shared"),(0,n.kt)("li",{parentName:"ul"},"private"))),(0,n.kt)("li",{parentName:"ul"},"mode=ro|rw|rwc|memory"),(0,n.kt)("li",{parentName:"ul"},"immutable=1"),(0,n.kt)("li",{parentName:"ul"},"modeof=",(0,n.kt)("em",{parentName:"li"},"filename")," - \u751f\u6210\u7684 db \u5339\u914d\u6307\u5b9a\u6587\u4ef6\u7684 mode")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sqlite.org/uri.html"},"https://www.sqlite.org/uri.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sqlite.org/c3ref/open.html"},"https://www.sqlite.org/c3ref/open.html"))),(0,n.kt)("h2",{id:"jdbc"},"JDBC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"org.postgresql.Driver"),(0,n.kt)("li",{parentName:"ul"},"org.sqlite.JDBC"),(0,n.kt)("li",{parentName:"ul"},"org.mariadb.jdbc.JDBC"),(0,n.kt)("li",{parentName:"ul"},"com.mysql.jdbc.Driver - MySQL 5.1"),(0,n.kt)("li",{parentName:"ul"},"com.mysql.cj.jdbc.Driver"),(0,n.kt)("li",{parentName:"ul"},"org.h2.Driver")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="DataGrid URL Template"',title:'"DataGrid',URL:!0,'Template"':!0},"jdbc:postgresql://[{host::localhost}[:{port::5432}]][/{database:database/[^?]+:postgres}?][\\?<&,user={user:param},password={password:param},{:identifier}={:param}>]\njdbc:postgresql://\\[{host:ipv6:\\:\\:1}\\][:{port::5432}][/{database:database/[^?]+:postgres}?][\\?<&,user={user:param},password={password:param},{:identifier}={:param}>]\njdbc:postgresql:{database:database/(?!//)[^?]+:postgres}[\\?<&,user={user:param},password={password:param},{:identifier}={:param}>]\n\njdbc:sqlite:!(:memory:){file::identifier.sqlite}?\njdbc:sqlite::memory:\n\njdbc:mysql://{host::localhost}?[:{port::3306}][/{database}?][\\?<&,user={user},password={password},{:identifier}={:param}>]\njdbc:mysql://address=\\(protocol=tcp\\)\\(<\\)\\(,host={host:host_ipv6:localhost},port={port::3306},user={user},password={password},{:identifier}={:param}>\\)[/{database}][\\?<&,{:identifier}={:param}>]\njdbc:mysql:///{database}?[\\?<&,user={user},password={password},junixsocket.file={mysql.socket::/tmp/mysqld.sock},socketFactory={socketFactory:#param:org.newsclub.net.mysql.AFUNIXDatabaseSocketFactoryCJ},{:identifier}={:param}>]\n\njdbc:h2:tcp://{host::localhost}[:{port::9092}]/{database::default}[;<;,user={user:param},password={password:param},{:identifier}={:param}>]\njdbc:h2:mem:{database::default}?[;<;,{:identifier}={:param}>]\njdbc:h2:!(mem:)!(tcp://)[file:]{path:h2_db_file}[;<;,user={user:param},password={password:param},MV_STORE={MV_STORE:#param},{:identifier}={:param}>]\n")),(0,n.kt)("h2",{id:"page-size"},"page size"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sqlite - 4096 - 4k"),(0,n.kt)("li",{parentName:"ul"},"postgres - 8192 - 8k"),(0,n.kt)("li",{parentName:"ul"},"mysql innodb 16k",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"innodb_page_size")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- SQLite\nPRAGMA page_size;\n-- PostgreSQL\nSELECT current_setting('block_size');\n-- MySQL\nSHOW TABLE STATUS;\n")))}d.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{kt:function(){return c}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(a),d=l,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||n;return a?r.createElement(k,s(s({ref:t},u),{},{components:a})):r.createElement(k,s({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var o=2;o<n;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);