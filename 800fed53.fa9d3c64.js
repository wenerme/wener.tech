(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(b,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(O,c(c({ref:t},o),{},{components:n})):a.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<l;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},547:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),l=(n(0),n(1021)),b={id:"pgbouncer",title:"PgBouncer"},c={unversionedId:"db/relational/postgresql/pgbouncer",id:"db/relational/postgresql/pgbouncer",isDocsHomePage:!1,title:"PgBouncer",description:"Tips",source:"@site/notes/db/relational/postgresql/pgbouncer.md",slug:"/db/relational/postgresql/pgbouncer",permalink:"/notes/db/relational/postgresql/pgbouncer",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/pgbouncer.md",version:"current",sidebar:"docs",previous:{title:"pgadmin4",permalink:"/notes/db/relational/postgresql/pgadmin4"},next:{title:"PostGraphile",permalink:"/notes/db/relational/postgresql/postgraphile"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",children:[]}]},{value:"\u7ba1\u7406",id:"\u7ba1\u7406",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/pgbouncer/pgbouncer"},"pgbouncer/pgbouncer"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pgbouncer.org/features.html"},"\u7279\u6027")),Object(l.b)("li",{parentName:"ul"},"Session pooling",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u94fe\u63a5\u7eac\u5ea6"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u6240\u6709\u7279\u6027"))),Object(l.b)("li",{parentName:"ul"},"Transaction pooling",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f1a\u8bdd\u7eac\u5ea6"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SET/RESET"),Object(l.b)("li",{parentName:"ul"},"LISTEN/NOTIFY"),Object(l.b)("li",{parentName:"ul"},"WITH HOLD CURSOR"),Object(l.b)("li",{parentName:"ul"},"Protocol-level prepared plans"),Object(l.b)("li",{parentName:"ul"},"PREPARE / DEALLOCATE"),Object(l.b)("li",{parentName:"ul"},"PRESERVE/DELETE ROWS temp tables"),Object(l.b)("li",{parentName:"ul"},"LOAD"))))),Object(l.b)("li",{parentName:"ul"},"Statement pooling",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bed\u53e5\u7eac\u5ea6"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e8b\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u5f3a\u5236 autocommit"))),Object(l.b)("li",{parentName:"ul"},"2 kB per connection by default"),Object(l.b)("li",{parentName:"ul"},"\u591a\u540e\u7aef\u670d\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u5728\u7ebf\u4ece\u65b0\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u5728\u7ebf restart/upgrade"))),Object(l.b)("li",{parentName:"ul"},"\u7ba1\u7406",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kwent/pgbouncerhero"},"kwent/pgbouncerhero")," - PgBouncer WebUI"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prepared statements \u53ea\u80fd\u5728 session \u6a21\u5f0f\u4e0b\uff0c\u4e14 ",Object(l.b)("inlineCode",{parentName:"li"},"server_reset_query = DISCARD ALL;")," \u6216 ",Object(l.b)("inlineCode",{parentName:"li"},"DEALLOCATE ALL;"))))),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.pgbouncer.org/config.html"},"\u914d\u7f6e"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"# \u5f15\u5165\u5176\u4ed6\u914d\u7f6e\n%include filename\n")),Object(l.b)("h3",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/pgbouncer/pgbouncer.ini")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"[databases]\nmydbuser = host=192.168.1.2 port=5433 user=mydb\n\n[pgbouncer]\nlisten_addr = 0.0.0.0\n# \u4e0d\u540c\u7aef\u53e3\nlisten_port = 15432\nunix_socket_dir =\nuser = postgres\nauth_file = /etc/pgbouncer/userlist.txt\nauth_type = md5\nignore_startup_parameters = extra_float_digits\n\nadmin_users = postgres\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/pgbouncer/userlist.txt")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},'"mydbuser" "password"\n')),Object(l.b)("h2",{id:"\u7ba1\u7406"},"\u7ba1\u7406"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e admin_users"),Object(l.b)("li",{parentName:"ul"},"\u94fe\u63a5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5916\u90e8 ",Object(l.b)("inlineCode",{parentName:"li"},"postgres://postgres@hostname-of-container/pgbouncer")),Object(l.b)("li",{parentName:"ul"},"\u5185\u90e8 ",Object(l.b)("inlineCode",{parentName:"li"},"postgres://postgres://127.0.0.1/pgbouncer"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u81ea\u5b9a\u4e49\u914d\u7f6e\nSHOW STATS;\nSHOW SERVERS;\nSHOW CLIENTS;\nSHOW POOLS;\n\n# \u53ef\u4ee5\u96f6\u65f6\u65ad\u5f00\u540e\u7aef\u94fe\u63a5\uff0c\u4f8b\u5982\u540e\u7aef\u5347\u7ea7\uff0c\u524d\u7aef\u94fe\u63a5\u4e0d\u65ad\nPAUSE;\nRESUME;\n")))}p.isMDXComponent=!0}}]);