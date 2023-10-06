"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19854],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,u(u({ref:t},c),{},{components:n})):r.createElement(g,u({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var o=2;o<l;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return T}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>l(e,u(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&o.call(e,r)&&(n[r]=e[r]);return n};const g={title:"glauth"},h="glauth",b={unversionedId:"service/auth/ldap/glauth",id:"service/auth/ldap/glauth",title:"glauth",description:"- glauth/glauth",source:"@site/../notes/service/auth/ldap/glauth.md",sourceDirName:"service/auth/ldap",slug:"/service/auth/ldap/glauth",permalink:"/notes/service/auth/ldap/glauth",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/ldap/glauth.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1681281594,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{title:"glauth"},sidebar:"docs",previous:{title:"Apache Directory",permalink:"/notes/service/auth/ldap/apacheds"},next:{title:"LDAP Awesome",permalink:"/notes/service/auth/ldap/awesome"}},f={},T=[{value:"SQLite",id:"sqlite",level:2},{value:"PostgreSQL",id:"postgresql",level:2}],E={toc:T},N="wrapper";function y(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,d(p(p({},E),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"glauth"}),"glauth"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/glauth/glauth"}),"glauth/glauth"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"LDAP server for development, home use, or CI"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u7528\u4e8e Auth \u573a\u666f - \u53ea\u6709 user \u548c group"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u4f46\u4e0d\u53ef\u4ee5\u7528\u4e8e\u641c\u7d22"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 cn, ou -> user, group"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/glauth/glauth-postgres"}),"glauth/glauth-postgres")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/glauth/glauth-sqlite"}),"glauth/glauth-sqlite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/sonicnkt/glauth-ui"}),"sonicnkt/glauth-ui"))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'cat << CONF > config.cfg\n[backend]\n  datastore = "plugin"\n  plugin = "sqlite.so"\n  pluginhandler = "NewSQLiteHandler"\n  database = "/data/glauth.db"\n  baseDN = "dc=wener,dc=me"\n\n[ldap]\n  enabled = true\n  listen = "0.0.0.0:3893"\n[ldaps]\n  enabled = false\n[api]\n  enabled = true\n  internals = true\n  listen = "0.0.0.0:5555"\nCONF\n\ndocker run --rm -it \\\n  -v $PWD:/app/config/ \\\n  -v $PWD/data:/data \\\n  -p 3893:3893 -p 5555:5555 \\\n  --name glauth glauth/glauth-plugins\n\nsqlite3 data/glauth.db .schema\nsqlite3 data/glauth.db \'INSERT INTO groups(name, gidnumber) VALUES(\'users\', 5501);\'\nsqlite3 data/glauth.db \'INSERT INTO users(name,uidnumber,primarygroup,passsha256) VALUES("wener",1000,5501,"652c7dc687d98c9889304ed2e408c74b611e86a40caa51c4b43f1dd5913c5cd0")\'\nsqlite3 data/glauth.db \'INSERT INTO capabilities(userid, action, object) VALUES(5001, "search", "ou=users,dc=wener,dc=me");\'\n\n\n\nldapsearch -LLL -H ldap://localhost:3893 \\\n   -D cn=wener,ou=users,dc=wener,dc=me -w mysecret \\\n   -x -bdc=wener,dc=me cn=wener\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hardcode")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u6570\u636e\u5e93")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),'[backend]\n  datastore = "config"\n  baseDN = "dc=glauth,dc=com"\n[[users]]\n  name = "hackers"\n  uidnumber = 5001\n  primarygroup = 5501\n  passsha256 = "6478579e37aff45f013e14eeb30b3cc56c72ccdc310123bcdf53e0333e3f416a"   # dogood\n  sshkeys = [ "ssh-dss AAAAB3..." ]\n[[users]]\n  name = "uberhackers"\n  uidnumber = 5006\n  primarygroup = 5501\n  passbcrypt = "243261243130244B62463462656F7265504F762E794F324957746D656541326B4B46596275674A79336A476845764B616D65446169784E41384F4432"   # dogood\n[[groups]]\n  name = "superheros"\n  gidnumber = 5501\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/glauth/glauth/blob/master/v2/sample-simple.cfg"}),"https://github.com/glauth/glauth/blob/master/v2/sample-simple.cfg"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),'debug = true\n# syslog = true\n# structuredlog = true\n# \u914d\u7f6e\u70ed\u52a0\u8f7d - \u4e0d\u652f\u6301 [ldap], [ldaps], [backend], [api]\n# watchconfig = true\n# yubikeyclientid = "yubi-api-clientid"\n# yubikeysecret = "yubi-api-secret"\n\n[ldap]\n  enabled = true\n  listen = "0.0.0.0:3893"\n[ldaps]\n# to enable ldaps genrerate a certificate, eg. with:\n# openssl req -x509 -newkey rsa:4096 -keyout glauth.key -out glauth.crt -days 365 -nodes -subj \'/CN=`hostname`\'\n  enabled = false\n  listen = "0.0.0.0:3894"\n  cert = "glauth.crt"\n  key = "glauth.key"\n\n[backend]\n  datastore = "config"\n  baseDN = "dc=glauth,dc=com"\n  nameformat = "cn"\n  groupformat = "ou"\n\n# REST API\n[api]\n  enabled = true\n  internals = true # debug application performance\n  tls = false # enable TLS for production!!\n  listen = "0.0.0.0:5555"\n  cert = "cert.pem"\n  key = "key.pem"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"datastore",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"config"),(0,r.kt)("li",{parentName:"ul"},"ldap - \u6307\u5411\u5df2\u6709\u7684 LDAP")))),(0,r.kt)("h2",p({},{id:"sqlite"}),"SQLite"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE users (\n    id INTEGER PRIMARY KEY,\n    name TEXT NOT NULL,\n    uidnumber INTEGER NOT NULL,\n    primarygroup INTEGER NOT NULL,\n    othergroups TEXT DEFAULT '',\n    givenname TEXT DEFAULT '',\n    sn TEXT DEFAULT '',\n    mail TEXT DEFAULT '',\n    loginshell TYEXT DEFAULT '',\n    homedirectory TEXT DEFAULT '',\n    disabled SMALLINT  DEFAULT 0,\n    passsha256 TEXT DEFAULT '',\n    passbcrypt TEXT DEFAULT '',\n    otpsecret TEXT DEFAULT '',\n    yubikey TEXT DEFAULT '',\n    sshkeys TEXT DEFAULT '',\n    custattr TEXT DEFAULT '{}');\nCREATE UNIQUE INDEX idx_user_name on users(name);\nCREATE TABLE groups (id INTEGER PRIMARY KEY, name TEXT NOT NULL, gidnumber INTEGER NOT NULL);\nCREATE UNIQUE INDEX idx_group_name on groups(name);\nCREATE TABLE includegroups (id INTEGER PRIMARY KEY, parentgroupid INTEGER NOT NULL, includegroupid INTEGER NOT NULL);\nCREATE TABLE capabilities (id INTEGER PRIMARY KEY, userid INTEGER NOT NULL, action TEXT NOT NULL, object TEXT NOT NULL);\n")),(0,r.kt)("h2",p({},{id:"postgresql"}),"PostgreSQL"))}y.isMDXComponent=!0}}]);