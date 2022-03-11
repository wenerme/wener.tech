"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78421],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,N=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33113:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"nextcloud",title:"NextCloud"},p=void 0,d={unversionedId:"service/file/nextcloud",id:"service/file/nextcloud",title:"NextCloud",description:"Tips",source:"@site/notes/service/file/nextcloud.md",sourceDirName:"service/file",slug:"/service/file/nextcloud",permalink:"/notes/service/file/nextcloud",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/file/nextcloud.md",tags:[],version:"current",frontMatter:{id:"nextcloud",title:"NextCloud"},sidebar:"docs",previous:{title:"filebrowser",permalink:"/notes/service/file/filebrowser"},next:{title:"Nextcloud \u914d\u7f6e",permalink:"/notes/service/file/nextcloud-conf"}},u=[{value:"Tips",id:"tips",children:[],level:2},{value:"Docker",id:"docker",children:[],level:2},{value:"ldap",id:"ldap",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.nextcloud.com/server/11/admin_manual/configuration_files/primary_storage.html"},"Primary Storage"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 S3 \u6216 Swift \u4f5c\u4e3a\u4e3b\u8981\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/server/tree/master/lib/private/Files/ObjectStore"},"lib/Files/ObjectStore")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.nextcloud.com/server/11/admin_manual/configuration_user/user_auth_ldap.html"},"User Authentication with LDAP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The LDAP app is not compatible with the User backend using remote HTTP servers app. You cannot use both of them at the same time."))),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u53ef\u4ee5\u4f7f\u7528 SQLite, MySQL, PostGreSQL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.nextcloud.com/server/12/admin_manual/configuration_server/config_sample_php_parameters.html"},"Config.php"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/server/blob/master/config/config.sample.php"},"config.sample.php")))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u63a8\u8350\u5e94\u7528 - calendar,contacts,talk,mail,collaborative editing"),(0,l.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u53d8\u66f4\u5185\u5bb9 ",(0,l.kt)("a",{parentName:"li",href:"https://nextcloud.com/changelog/"},"https://nextcloud.com/changelog/"))),(0,l.kt)("h2",{id:"docker"},"Docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/var/www/html - \u4e3b\u76ee\u5f55\uff0c\u9700\u8981\u66f4\u65b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/custom_apps")," - \u5e94\u7528\u76ee\u5f55 - \u5b89\u88c5\u6216\u66f4\u65b0\u7684\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/config")," - \u672c\u5730\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/data")," \u5b9e\u9645\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/themes/<THEME>")," \u4e3b\u9898")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQLITE_DATABASE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_DATABASE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_USER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL_HOST"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_DB"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_USER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_HOST"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5305\u542b\u7aef\u53e3\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"postgres:5432"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NEXTCLOUD_ADMIN_USER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NEXTCLOUD_ADMIN_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NEXTCLOUD_DATA_DIR"),(0,l.kt)("td",{parentName:"tr",align:null},"/var/www/html/data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u7528\u6237\u6570\u636e\u7684\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NEXTCLOUD_TRUSTED_DOMAINS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u683c\u5206\u5272\u53ef\u4fe1\u57df\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NEXTCLOUD_UPDATE"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u81ea\u5b9a\u4e49\u547d\u4ee4\u542f\u52a8\u9700\u8981\u5f00\u542f\u624d\u4f1a\u66f4\u65b0\uff0c\u4f7f\u7528\u9ed8\u8ba4 (apache-foreground, php-fpm) \u542f\u52a8\u7684\u65f6\u5019\u4f1a\u89e6\u53d1\u66f4\u65b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIS_HOST"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Redis \u7528\u4e8e\u6587\u4ef6\u9501")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIS_HOST_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"6379"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_HOST"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_SECURE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bbe\u7f6e\u4e3a ssl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_PORT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"25 \u6216 SSL 456")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_AUTHTYPE"),(0,l.kt)("td",{parentName:"tr",align:null},"LOGIN"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_NAME"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMTP_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAIL_FROM_ADDRESS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u4fe1\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAIL_DOMAIN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8bbe\u7f6e\u5219\u4e3a nextcloud \u7684\u57df\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"APACHE_DISABLE_REWRITE_IP"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e3a 1 \u7981\u7528 IP \u91cd\u5199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRUSTED_PROXIES"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u683c\u5206\u5272\u7684\u53ef\u4fe1\u4ee3\u7406\uff0c\u652f\u6301 CIDR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OVERWRITEHOST"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a host\uff0c\u7528\u4e8e TRUSTED_PROXIES \u672a\u751f\u6548\u7684\u65f6\u5019")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OVERWRITEPROTOCOL"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"http https")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OVERWRITEWEBROOT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OVERWRITECONDADDR"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u590d\u5199\u751f\u6548\u7684\u6765\u6e90\u5730\u5740")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6307\u5b9a\u6570\u636e\u5e93\u548c\u8d26\u53f7\u5bc6\u7801\u5219\u4e0d\u9700\u8981\u8fdb\u5165\u5230\u5b89\u88c5\u9875\u9762\n# SQLite \u6587\u4ef6\u5728 /var/www/html/data/nextcloud.db\n# \u542f\u52a8\u811a\u672c https://github.com/nextcloud/docker/blob/master/docker-entrypoint.sh\n# \u542f\u52a8\u4f1a\u68c0\u6d4b /var/www/html/version.php \u7248\u672c\u53f7 - \u5982\u679c\u6ca1\u6709\u5219\u8ba4\u4e3a\u662f\u65b0\u5b89\u88c5\n\n# \u5355\u72ec\u76ee\u5f55\u6620\u5c04\ndocker run -it --rm \\\n  -v $PWD/nextcloud/config:/var/www/html/config \\\n  -v $PWD/nextcloud/data:/var/www/html/data \\\n  -v $PWD/nextcloud/themes:/var/www/html/themes \\\n  -v $PWD/nextcloud/custom_apps:/var/www/html/custom_apps \\\n  -v $PWD/nextcloud/html:/var/www/html \\\n  -p 80:80 \\\n  -e SQLITE_DATABASE=nextcloud \\\n  -e NEXTCLOUD_ADMIN_USER=nextcloud \\\n  -e NEXTCLOUD_ADMIN_PASSWORD=nextcloud \\\n  --name nextcloud nextcloud:18\n\n# \u5355\u4e2a\u76ee\u5f55\u6620\u5c04 - \u4f1a\u5b89\u88c5 300M \u5de6\u53f3 - macos \u8f83\u6162\uff0c\u8bbf\u95ee\u4e5f\u4f1a\u6162\ndocker run -it --rm \\\n  -v $PWD/nextcloud:/var/www/html \\\n  -p 80:80 \\\n  -e SQLITE_DATABASE=nextcloud \\\n  -e NEXTCLOUD_ADMIN_USER=nextcloud \\\n  -e NEXTCLOUD_ADMIN_PASSWORD=nextcloud \\\n  --name nextcloud nextcloud:18\n\n# \u4f7f\u7528 www-data \u8d26\u53f7\u8fdb\u884c\u64cd\u4f5c\ndocker exec -it -u www-data nextcloud bash\n\n# \u7981\u7528\u610f\u4e49\u4e0d\u5927\u7684\u5e94\u7528\n./occ app:disable firstrunwizard federation nextcloud_announcements support survey_client updatenotification\n# \u7cbe\u9009\u5e38\u7528\u5e94\u7528\nfor i in announcementcenter external impersonate limit_login_to_ip files_automatedtagging files_accesscontrol groupfolders notes user_ldap user_saml; do\n  ./occ app:enable $i\ndone\n\n# \u5b89\u88c5\u5e38\u7528\u5e94\u7528\nfor i in admin_audit extract files_external files_texteditor group_everyone metadata user_ldap user_saml; do\n  ./occ app:enable $i\ndone\n\n# \u5b98\u65b9\u63a8\u8350\u5e94\u7528 - calendar,contacts,talk,mail,collaborative editing\n\n# \u793e\u4ea4\u5e94\u7528\nfor i in circles talk social; do\n  ./occ app:enable $i\ndone\n\n# \u4e8b\u52a1\u5e94\u7528\nfor i in calendar contacts mail deck tasks; do\n  ./occ app:enable $i\ndone\n\n# \u529e\u516c\u5e94\u7528 - \u529f\u80fd\u91cd\u590d\nfor i in onlyoffice richdocuments; do\n  ./occ app:enable $i\ndone\n\n# \u7ba1\u7406\u5e94\u7528\nfor i in occweb; do\n  ./occ app:enable $i\ndone\n\n# \u5de5\u5177\nfor i in files_rightclick checksum; do\n  ./occ app:enable $i\ndone\n")),(0,l.kt)("h2",{id:"ldap"},"ldap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ldap:set-config <configID> <configKey> <configValue>"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./occ ldap:set-config s01 ldapUserDisplayName2 displayName\n")),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.nextcloud.com/server/latest/admin_manual/index.html"},"admin manual"))))}c.isMDXComponent=!0}}]);