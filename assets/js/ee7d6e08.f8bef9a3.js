"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6843],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,k=c["".concat(o,".").concat(g)]||c[g]||m[g]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],p={title:"PgBouncer"},o="PgBouncer",u={unversionedId:"db/relational/postgresql/pgbouncer",id:"db/relational/postgresql/pgbouncer",title:"PgBouncer",description:"- pgbouncer/pgbouncer",source:"@site/../notes/db/relational/postgresql/pgbouncer.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pgbouncer",permalink:"/notes/db/relational/postgresql/pgbouncer",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/postgresql/pgbouncer.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656205646,formattedLastUpdatedAt:"Jun 26, 2022",frontMatter:{title:"PgBouncer"},sidebar:"docs",previous:{title:"pgadmin4",permalink:"/notes/db/relational/postgresql/pgadmin4"},next:{title:"pgloader",permalink:"/notes/db/relational/postgresql/pgloader"}},s={},m=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:3},{value:"\u7ba1\u7406",id:"\u7ba1\u7406",level:2},{value:"bitnami/pgbouncer",id:"bitnamipgbouncer",level:2},{value:"unsupported startup parameter: extra_float_digits",id:"unsupported-startup-parameter-extra_float_digits",level:2}],c={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pgbouncer"},"PgBouncer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pgbouncer/pgbouncer"},"pgbouncer/pgbouncer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pgbouncer.org/features.html"},"\u7279\u6027")),(0,l.kt)("li",{parentName:"ul"},"Session pooling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u94fe\u63a5\u7eac\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6240\u6709\u7279\u6027"))),(0,l.kt)("li",{parentName:"ul"},"Transaction pooling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd\u7eac\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SET/RESET"),(0,l.kt)("li",{parentName:"ul"},"LISTEN/NOTIFY"),(0,l.kt)("li",{parentName:"ul"},"WITH HOLD CURSOR"),(0,l.kt)("li",{parentName:"ul"},"Protocol-level prepared plans"),(0,l.kt)("li",{parentName:"ul"},"PREPARE / DEALLOCATE"),(0,l.kt)("li",{parentName:"ul"},"PRESERVE/DELETE ROWS temp tables"),(0,l.kt)("li",{parentName:"ul"},"LOAD"))))),(0,l.kt)("li",{parentName:"ul"},"Statement pooling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u7eac\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e8b\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236 autocommit"))),(0,l.kt)("li",{parentName:"ul"},"2 kB per connection by default"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u540e\u7aef\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u4ece\u65b0\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf restart/upgrade"))),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kwent/pgbouncerhero"},"kwent/pgbouncerhero")," - PgBouncer WebUI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIG, RoR"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u505c\u6ede")))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"pgbouncer \u7684\u6700\u5927\u6536\u76ca\u6765\u81ea\u4e8e tx \u6a21\u5f0f - \u5bf9\u5e94\u7528\u6709\u5f88\u591a\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f9d\u8d56 session \u53d8\u91cf - \u4e0d\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"SET"),", \u53ea\u80fd ",(0,l.kt)("inlineCode",{parentName:"li"},"SET LOCAL"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"search_path - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pgbouncer/pgbouncer/pull/73"},"#73")),(0,l.kt)("li",{parentName:"ul"},"role"))),(0,l.kt)("li",{parentName:"ul"},"prepared statements \u53ea\u80fd\u5728 session \u6a21\u5f0f\u4e0b\uff0c\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"server_reset_query = DISCARD ALL;")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"DEALLOCATE ALL;")),(0,l.kt)("li",{parentName:"ul"},"transaction \u4e0d\u652f\u6301 prepare - \u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u7981\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JDBC - prepareThreshold=0"),(0,l.kt)("li",{parentName:"ul"},"PHP/PDD",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'new PDO("dsn", "user", "pass", array(PDO::ATTR_EMULATE_PREPARES => true));')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);")))))))),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.pgbouncer.org/config.html"},"\u914d\u7f6e"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"# \u5f15\u5165\u5176\u4ed6\u914d\u7f6e\n%include filename\n")),(0,l.kt)("h3",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/pgbouncer/pgbouncer.ini")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[databases]\nmydbuser = host=192.168.1.2 port=5433 user=mydb\n\n[pgbouncer]\nlisten_addr = 0.0.0.0\n# \u4e0d\u540c\u7aef\u53e3\nlisten_port = 15432\nunix_socket_dir =\nuser = postgres\nauth_file = /etc/pgbouncer/userlist.txt\nauth_type = md5\nignore_startup_parameters = extra_float_digits\n\nadmin_users = postgres\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/pgbouncer/userlist.txt")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'"mydbuser" "password"\n')),(0,l.kt)("h2",{id:"\u7ba1\u7406"},"\u7ba1\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e admin_users"),(0,l.kt)("li",{parentName:"ul"},"\u94fe\u63a5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8 ",(0,l.kt)("inlineCode",{parentName:"li"},"postgres://postgres@hostname-of-container/pgbouncer")),(0,l.kt)("li",{parentName:"ul"},"\u5185\u90e8 ",(0,l.kt)("inlineCode",{parentName:"li"},"postgres://127.0.0.1/pgbouncer"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u81ea\u5b9a\u4e49\u914d\u7f6e\nSHOW STATS;\nSHOW SERVERS;\nSHOW CLIENTS;\nSHOW POOLS;\n\n# \u53ef\u4ee5\u96f6\u65f6\u65ad\u5f00\u540e\u7aef\u94fe\u63a5\uff0c\u4f8b\u5982\u540e\u7aef\u5347\u7ea7\uff0c\u524d\u7aef\u94fe\u63a5\u4e0d\u65ad\nPAUSE;\nRESUME;\n")),(0,l.kt)("h2",{id:"bitnamipgbouncer"},"bitnami/pgbouncer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/opt/bitnami/pgbouncer/bin/pgbouncer"),(0,l.kt)("li",{parentName:"ul"},"/opt/bitnami/pgbouncer/conf/pgbouncer.ini"),(0,l.kt)("li",{parentName:"ul"},"PGBOUNCER_IGNORE_STARTUP_PARAMETERS=extra_float_digits")),(0,l.kt)("h2",{id:"unsupported-startup-parameter-extra_float_digits"},"unsupported startup parameter: extra_float_digits"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"ignore_startup_parameters = extra_float_digits\n")))}g.isMDXComponent=!0}}]);