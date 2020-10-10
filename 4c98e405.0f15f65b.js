(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{274:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),l=(a(0),a(618)),b={id:"nextcloud",title:"NextCloud"},c={id:"service/file/nextcloud",title:"NextCloud",description:"# NextCloud",source:"@site/../tricks/service/file/nextcloud.md",permalink:"/notes/service/file/nextcloud",sidebar:"docs",previous:{title:"\u7406\u89e3 CRM",permalink:"/notes/service/crm/crm-insight"},next:{title:"Nextcloud \u914d\u7f6e",permalink:"/notes/service/file/nextcloud-config"}},i=[{value:"Tips",id:"tips",children:[]},{value:"Docker",id:"docker",children:[]},{value:"ldap",id:"ldap",children:[]}],O={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"nextcloud"},"NextCloud"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.nextcloud.com/server/11/admin_manual/configuration_files/primary_storage.html"}),"Primary Storage"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 S3 \u6216 Swift \u4f5c\u4e3a\u4e3b\u8981\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/nextcloud/server/tree/master/lib/private/Files/ObjectStore"}),"lib/Files/ObjectStore")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.nextcloud.com/server/11/admin_manual/configuration_user/user_auth_ldap.html"}),"User Authentication with LDAP"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The LDAP app is not compatible with the User backend using remote HTTP servers app. You cannot use both of them at the same time."))),Object(l.b)("li",{parentName:"ul"},"\b \u6570\u636e\u5e93\u53ef\u4ee5\u4f7f\u7528 SQLite, MySQL, PostGreSQL"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.nextcloud.com/server/12/admin_manual/configuration_server/config_sample_php_parameters.html"}),"Config.php"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/nextcloud/server/blob/master/config/config.sample.php"}),"config.sample.php")))),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u63a8\u8350\u5e94\u7528 - calendar,contacts,talk,mail,collaborative editing"),Object(l.b)("li",{parentName:"ul"},"\u53d1\u5e03\u53d8\u66f4\u5185\u5bb9 ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://nextcloud.com/changelog/"}),"https://nextcloud.com/changelog/"))),Object(l.b)("h2",{id:"docker"},"Docker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/var/www/html - \u4e3b\u76ee\u5f55\uff0c\u9700\u8981\u66f4\u65b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/custom_apps")," - \u5e94\u7528\u76ee\u5f55 - \u5b89\u88c5\u6216\u66f4\u65b0\u7684\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/config")," - \u672c\u5730\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/data")," \u5b9e\u9645\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/themes/<THEME>")," \u4e3b\u9898")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Env"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SQLITE_DATABASE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MYSQL_DATABASE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MYSQL_USER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MYSQL_PASSWORD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MYSQL_HOST"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POSTGRES_DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POSTGRES_USER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POSTGRES_PASSWORD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POSTGRES_HOST"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u53ef\u4ee5\u5305\u542b\u7aef\u53e3\uff0c\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"td"},"postgres:5432"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NEXTCLOUD_ADMIN_USER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NEXTCLOUD_ADMIN_PASSWORD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NEXTCLOUD_DATA_DIR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/var/www/html/data"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5b58\u50a8\u7528\u6237\u6570\u636e\u7684\u76ee\u5f55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NEXTCLOUD_TRUSTED_DOMAINS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7a7a\u683c\u5206\u5272\u53ef\u4fe1\u57df\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NEXTCLOUD_UPDATE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5982\u679c\u81ea\u5b9a\u4e49\u547d\u4ee4\u542f\u52a8\u9700\u8981\u5f00\u542f\u624d\u4f1a\u66f4\u65b0\uff0c\u4f7f\u7528\u9ed8\u8ba4 (apache-foreground, php-fpm) \u542f\u52a8\u7684\u65f6\u5019\u4f1a\u89e6\u53d1\u66f4\u65b0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"REDIS_HOST"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Redis \u7528\u4e8e\u6587\u4ef6\u9501")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"REDIS_HOST_PORT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6379"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SMTP_HOST"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SMTP_SECURE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u53ef\u8bbe\u7f6e\u4e3a ssl")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SMTP_PORT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"25 \u6216 SSL 456")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SMTP_AUTHTYPE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LOGIN"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SMTP_NAME"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SMTP_PASSWORD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MAIL_FROM_ADDRESS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u53d1\u4fe1\u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MAIL_DOMAIN"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e0d\u8bbe\u7f6e\u5219\u4e3a nextcloud \u7684\u57df\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"APACHE_DISABLE_REWRITE_IP"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e3a 1 \u7981\u7528 IP \u91cd\u5199")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TRUSTED_PROXIES"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7a7a\u683c\u5206\u5272\u7684\u53ef\u4fe1\u4ee3\u7406\uff0c\u652f\u6301 CIDR")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OVERWRITEHOST"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6307\u5b9a host\uff0c\u7528\u4e8e TRUSTED_PROXIES \u672a\u751f\u6548\u7684\u65f6\u5019")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OVERWRITEPROTOCOL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"http https")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OVERWRITEWEBROOT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OVERWRITECONDADDR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u590d\u5199\u751f\u6548\u7684\u6765\u6e90\u5730\u5740")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u6307\u5b9a\u6570\u636e\u5e93\u548c\u8d26\u53f7\u5bc6\u7801\u5219\u4e0d\u9700\u8981\u8fdb\u5165\u5230\u5b89\u88c5\u9875\u9762\n# SQLite \u6587\u4ef6\u5728 /var/www/html/data/nextcloud.db\n# \u542f\u52a8\u811a\u672c https://github.com/nextcloud/docker/blob/master/docker-entrypoint.sh\n# \u542f\u52a8\u4f1a\u68c0\u6d4b /var/www/html/version.php \u7248\u672c\u53f7 - \u5982\u679c\u6ca1\u6709\u5219\u8ba4\u4e3a\u662f\u65b0\u5b89\u88c5\n\n# \u5355\u72ec\u76ee\u5f55\u6620\u5c04\ndocker run -it --rm \\\n  -v $PWD/nextcloud/config:/var/www/html/config \\\n  -v $PWD/nextcloud/data:/var/www/html/data \\\n  -v $PWD/nextcloud/themes:/var/www/html/themes \\\n  -v $PWD/nextcloud/custom_apps:/var/www/html/custom_apps \\\n  -v $PWD/nextcloud/html:/var/www/html \\\n  -p 80:80 \\\n  -e SQLITE_DATABASE=nextcloud \\\n  -e NEXTCLOUD_ADMIN_USER=nextcloud \\\n  -e NEXTCLOUD_ADMIN_PASSWORD=nextcloud \\\n  --name nextcloud nextcloud:18\n\n# \u5355\u4e2a\u76ee\u5f55\u6620\u5c04 - \u4f1a\u5b89\u88c5 300M \u5de6\u53f3 - macos \u8f83\u6162\uff0c\u8bbf\u95ee\u4e5f\u4f1a\u6162\ndocker run -it --rm \\\n  -v $PWD/nextcloud:/var/www/html \\\n  -p 80:80 \\\n  -e SQLITE_DATABASE=nextcloud \\\n  -e NEXTCLOUD_ADMIN_USER=nextcloud \\\n  -e NEXTCLOUD_ADMIN_PASSWORD=nextcloud \\\n  --name nextcloud nextcloud:18\n\n# \u4f7f\u7528 www-data \u8d26\u53f7\u8fdb\u884c\u64cd\u4f5c\ndocker exec -it -u www-data nextcloud bash\n\n# \u7981\u7528\u610f\u4e49\u4e0d\u5927\u7684\u5e94\u7528\n./occ app:disable firstrunwizard federation nextcloud_announcements support survey_client updatenotification\n# \u7cbe\u9009\u5e38\u7528\u5e94\u7528\nfor i in announcementcenter external impersonate limit_login_to_ip files_automatedtagging files_accesscontrol groupfolders notes user_ldap user_saml; do \n  ./occ app:enable $i\ndone\n\n# \u5b89\u88c5\u5e38\u7528\u5e94\u7528\nfor i in admin_audit extract files_external files_texteditor group_everyone metadata user_ldap user_saml; do \n  ./occ app:enable $i\ndone\n\n# \u5b98\u65b9\u63a8\u8350\u5e94\u7528 - calendar,contacts,talk,mail,collaborative editing\n\n# \u793e\u4ea4\u5e94\u7528\nfor i in circles talk social; do \n  ./occ app:enable $i\ndone\n\n# \u4e8b\u52a1\u5e94\u7528\nfor i in calendar contacts mail deck tasks; do \n  ./occ app:enable $i\ndone\n\n# \u529e\u516c\u5e94\u7528 - \u529f\u80fd\u91cd\u590d\nfor i in onlyoffice richdocuments; do \n  ./occ app:enable $i\ndone\n\n# \u7ba1\u7406\u5e94\u7528\nfor i in occweb; do \n  ./occ app:enable $i\ndone\n\n# \u5de5\u5177\nfor i in files_rightclick checksum; do \n  ./occ app:enable $i\ndone\n")),Object(l.b)("h2",{id:"ldap"},"ldap"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ldap:set-config <configID> <configKey> <configValue>"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./occ ldap:set-config s01 ldapUserDisplayName2 displayName\n")))}p.isMDXComponent=!0},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),p=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=p(a),d=n,u=o["".concat(b,".").concat(d)]||o[d]||j[d]||l;return a?r.a.createElement(u,c(c({ref:t},O),{},{components:a})):r.a.createElement(u,c({ref:t},O))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var O=2;O<l;O++)b[O]=a[O];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);