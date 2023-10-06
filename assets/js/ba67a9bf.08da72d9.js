"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54912],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45336:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return E},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return N}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&m(e,n,t[n]);return e},p=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={tags:["FAQ"]},b="MySQL FAQ",y={unversionedId:"db/relational/mysql/mysql-faq",id:"db/relational/mysql/mysql-faq",title:"MySQL FAQ",description:"\u9650\u5236",source:"@site/../notes/db/relational/mysql/mysql-faq.md",sourceDirName:"db/relational/mysql",slug:"/db/relational/mysql/faq",permalink:"/notes/db/relational/mysql/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/mysql/mysql-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"MySQL \u914d\u7f6e",permalink:"/notes/db/relational/mysql/conf"},next:{title:"MySQL GTID",permalink:"/notes/db/relational/mysql/gtid"}},k={},N=[{value:"\u9650\u5236",id:"limits",level:2},{value:"debug connections",id:"debug-connections",level:2},{value:"\u4fee\u6539\u5bc6\u7801",id:"\u4fee\u6539\u5bc6\u7801",level:2},{value:"\u4f30\u7b97\u8868\u5927\u5c0f",id:"\u4f30\u7b97\u8868\u5927\u5c0f",level:2},{value:"Backup",id:"backup",level:2},{value:"Expression of generated column &#39;status&#39; contains a disallowed function: curdate.",id:"expression-of-generated-column-status-contains-a-disallowed-function-curdate",level:2},{value:"\u5220\u9664\u6570\u636e\u4e0d\u4f1a\u91ca\u653e\u7a7a\u95f4",id:"\u5220\u9664\u6570\u636e\u4e0d\u4f1a\u91ca\u653e\u7a7a\u95f4",level:2},{value:"1418",id:"1418",level:2},{value:"dump",id:"dump",level:2}],g={toc:N},h="wrapper";function E(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(h,p(u(u({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"mysql-faq"}),"MySQL FAQ"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"select version();\n")),(0,a.kt)("h2",u({},{id:"limits"}),"\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bind \u53c2\u6570 65535"),(0,a.kt)("li",{parentName:"ul"},"max_prepared_stmt_count=16382",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6700\u5927 prepare \u6570\u91cf"))),(0,a.kt)("li",{parentName:"ul"},"4096 \u5217/\u8868"),(0,a.kt)("li",{parentName:"ul"},"65,535 byte/row",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"blob \u548c text \u5360\u7528 9-12 byte")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Maximum length"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"TINYTEXT"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"255 (2 8\u22121) bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"TEXT"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"65,535 (216\u22121) bytes = 64 KiB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"MEDIUMTEXT"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"16,777,215 (224\u22121) bytes = 16 MiB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"LONGTEXT"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"4,294,967,295 (232\u22121) bytes = 4 GiB")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/column-count-limit.html"}),"https://dev.mysql.com/doc/refman/8.0/en/column-count-limit.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/table-size-limit.html"}),"https://dev.mysql.com/doc/refman/8.0/en/table-size-limit.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"ALTER TABLE tbl_name MAX_ROWS=1000000000 AVG_ROW_LENGTH=nnn;\nSHOW TABLE STATUS FROM db_name LIKE 'tbl_name';\n")),(0,a.kt)("h2",u({},{id:"debug-connections"}),"debug connections"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"-- \u9ed8\u8ba4 151 - 150 \u666e\u901a\u7528\u6237, 1 super\nshow variables like 'max_connections';\nshow status where variable_name = 'threads_connected';\nshow processlist;\n\nselect id,\n       user,\n       host,\n       db,\n       command,\n       time,\n       state,\n       info\nfrom information_schema.processlist\n")),(0,a.kt)("h2",u({},{id:"\u4fee\u6539\u5bc6\u7801"}),"\u4fee\u6539\u5bc6\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"select user,host from mysql.user;\nselect user,host,db from mysql.db;\n\nALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';\n\n-- \u5141\u8bb8 root \u8fdc\u7a0b\n-- root@localhost -> root@%\nUPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='root';\nFLUSH PRIVILEGES;\n\n-- UPDATE mysql.db SET Host='%' WHERE Host='localhost' AND User='username';\n-- GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';\n-- GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';\n")),(0,a.kt)("h2",u({},{id:"\u4f30\u7b97\u8868\u5927\u5c0f"}),"\u4f30\u7b97\u8868\u5927\u5c0f"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-sql"}),'-- \u884c\u6570\nselect table_rows, TABLE_SCHEMA, TABLE_NAME\nfrom information_schema.tables\norder by TABLE_ROWS desc;\n\nselect (DATA_LENGTH / AVG_ROW_LENGTH) as total_rows, TABLE_NAME\nfrom INFORMATION_SCHEMA.TABLES\norder by total_rows desc;\n\n-- \u6570\u636e\u91cf\nselect sys.format_bytes(DATA_LENGTH), TABLE_NAME\nfrom INFORMATION_SCHEMA.TABLES\norder by DATA_LENGTH desc;\n\n-- DB \u5927\u5c0f\nSELECT table_schema                                            "DB Name",\n       ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) "DB Size in MB"\nFROM information_schema.tables\nGROUP BY table_schema;\n')),(0,a.kt)("h2",u({},{id:"backup"}),"Backup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://dba.stackexchange.com/a/91322/234272"}),"https://dba.stackexchange.com/a/91322/234272"))),(0,a.kt)("h2",u({},{id:"expression-of-generated-column-status-contains-a-disallowed-function-curdate"}),"Expression of generated column 'status' contains a disallowed function: curdate."),(0,a.kt)("p",null,"MySQL virtual \u5217\u4e0d\u80fd\u7528 CONNECTION_ID(), CURRENT_USER(), NOW()."),(0,a.kt)("h2",u({},{id:"\u5220\u9664\u6570\u636e\u4e0d\u4f1a\u91ca\u653e\u7a7a\u95f4"}),"\u5220\u9664\u6570\u636e\u4e0d\u4f1a\u91ca\u653e\u7a7a\u95f4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9664\u975e\u4f7f\u7528 innodb_file_per_table"),(0,a.kt)("li",{parentName:"ul"},"optimize table \u4f1a\u51cf\u5c0f .idb, \u4f46\u4e0d\u4f1a\u51cf\u5c0f ibdata1")),(0,a.kt)("h2",u({},{id:"1418"}),"1418"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-txt"}),"1418 - This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/stored-programs-logging.html"}),"https://dev.mysql.com/doc/refman/8.0/en/stored-programs-logging.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/a/26015334/1870054"}),"https://stackoverflow.com/a/26015334/1870054"))),(0,a.kt)("h2",u({},{id:"dump"}),"dump"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"mysqldump --single-transaction --routines --triggers --all-databases > MySQLData.sql\n")))}E.isMDXComponent=!0}}]);