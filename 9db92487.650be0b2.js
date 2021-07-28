(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{1172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,j=p["".concat(c,".").concat(u)]||p[u]||m[u]||l;return a?r.a.createElement(j,i(i({ref:t},b),{},{components:a})):r.a.createElement(j,i({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<l;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},744:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),l=(a(0),a(1172)),c={id:"keycloak-dev",title:"Keycloak \u5f00\u53d1"},i={unversionedId:"service/auth/keycloak/keycloak-dev",id:"service/auth/keycloak/keycloak-dev",isDocsHomePage:!1,title:"Keycloak \u5f00\u53d1",description:"- \u53c2\u8003",source:"@site/notes/service/auth/keycloak/keycloak-dev.md",slug:"/service/auth/keycloak/keycloak-dev",permalink:"/notes/service/auth/keycloak/keycloak-dev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-dev.md",version:"current",sidebar:"docs",previous:{title:"keycloak-config-cli",permalink:"/notes/service/auth/keycloak/keycloak-config-cli"},next:{title:"Keycloak \u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/auth/keycloak/keycloak-faq"}},o=[{value:"\u670d\u52a1\u7aef\u5f00\u53d1",id:"\u670d\u52a1\u7aef\u5f00\u53d1",children:[]},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[]},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",children:[]},{value:"SPI",id:"spi",children:[{value:"JavaScript Providers",id:"javascript-providers",children:[]}]},{value:"Authentication SPI",id:"authentication-spi",children:[]},{value:"Event Listener SPI",id:"event-listener-spi",children:[]},{value:"User Storage SPI",id:"user-storage-spi",children:[]},{value:"Vault SPI",id:"vault-spi",children:[]}],b={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u77ed\u4fe1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/gwallet/keycloak-sms-authenticator"},"gwallet/keycloak-sms-authenticator")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/search?q=keycloak+sms"},"https://github.com/search?q=keycloak+sms")))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/keycloak/keycloak/blob/master/services/src/main/java/org/keycloak/authentication/authenticators/resetcred/ResetCredentialChooseUser.java"},"https://github.com/keycloak/keycloak/blob/master/services/src/main/java/org/keycloak/authentication/authenticators/resetcred/ResetCredentialChooseUser.java"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5fae\u4fe1"),Object(l.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u5fae\u4fe1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kkzxak47/keycloak-services-social-wechatwork"},"kkzxak47/keycloak-services-social-wechatwork"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.kkzxak47.com/2019/07/30/%E4%BD%BF%E7%94%A8%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E7%99%BB%E5%BD%95keycloak"},"\u4f7f\u7528\u4f01\u4e1a\u5fae\u4fe1\u767b\u5f55 keycloak")))))),Object(l.b)("li",{parentName:"ul"},"\u9489\u9489"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u7684 attributes \u662f ",Object(l.b)("inlineCode",{parentName:"li"},"Map<String, List<String>> attributes;"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"user \u4f1a\u5904\u7406\u5bf9\u8c61\u8f6c\u6570\u7ec4"),Object(l.b)("li",{parentName:"ul"},"group \u4e0d\u4f1a\u5904\u7406\uff0c\u9700\u8981\u63d0\u524d\u5904\u7406\u597d"))))),Object(l.b)("li",{parentName:"ul"},"realm endpoints",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/protocol/openid-connect/auth"),Object(l.b)("li",{parentName:"ul"},"/protocol/openid-connect/token"),Object(l.b)("li",{parentName:"ul"},"/protocol/openid-connect/logout"),Object(l.b)("li",{parentName:"ul"},"/protocol/openid-connect/login-status-iframe.html"),Object(l.b)("li",{parentName:"ul"},"/protocol/openid-connect/3p-cookies/step1.html"),Object(l.b)("li",{parentName:"ul"},"/protocol/openid-connect/registrations'"),Object(l.b)("li",{parentName:"ul"},"/protocol/openid-connect/userinfo")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u5f00\u53d1\u5b9e\u4f8b\n# =========\n# \u7531\u4e8e\u542f\u52a8\u811a\u672c\u7684 --debug \u4e0d\u652f\u6301 java 11 \u6240\u4ee5 debug \u53c2\u6570\u81ea\u884c\u6dfb\u52a0\ndocker run --rm -it \\\n  -p 8080:8080 -p 8097:8097 \\\n  -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -e JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=0.0.0.0:8097 -Xms64m -Xmx512m -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=256m -Djava.net.preferIPv4Stack=true -Djboss.modules.system.pkgs=org.jboss.byteman -Djava.awt.headless=true" \\\n  -v $PWD/deployments:/opt/jboss/keycloak/standalone/deployments \\\n  -v $PWD/themes/dev:/opt/jboss/keycloak/standalone/themes/dev \\\n  --name keycloak jboss/keycloak\n\n# \u81ea\u5b9a\u4e49 identity \u65f6\u6dfb\u52a0\u81ea\u5b9a\u4e49\u8d44\u6e90\ndocker cp templates/realm-identity-provider-wechat.html keycloak:/opt/jboss/keycloak/themes/base/admin/resources/partials\ndocker cp templates/realm-identity-provider-wechat-ext.html keycloak:/opt/jboss/keycloak/themes/base/admin/resources/partials\n\n# \u542f\u52a8\u5f00\u53d1\u5b9e\u4f8b - \u4e3b\u9898\u5f00\u53d1\n# =========\n# \u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1 - \u53ef\u4ee5\u6620\u5c04\u6574\u4e2a themes \u76ee\u5f55\n# \u9ed8\u8ba4\u4e0d\u80fd\u6574\u4e2a\u6620\u5c04 themes \u76ee\u5f55 - \u56e0\u4e3a\u76ee\u5f55\u4e0b\u662f\u6709\u5185\u5bb9\u7684 - \u9664\u975e\u5148\u62f7\u8d1d\u51fa\u6765\n\ndocker run --rm -it --name temp jboss/keycloak\ndocker cp temp:/opt/jboss/keycloak/themes .\ndocker rm -f temp\n\ndocker run --rm -it \\\n  -p 8080:8080 -p 8097:8097 \\\n  -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -e JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=0.0.0.0:8097 -Xms64m -Xmx512m -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=256m -Djava.net.preferIPv4Stack=true -Djboss.modules.system.pkgs=org.jboss.byteman -Djava.awt.headless=true" \\\n  -v $PWD/deployments:/opt/jboss/keycloak/standalone/deployments \\\n  -v $PWD/themes:/opt/jboss/keycloak/themes \\\n  --name keycloak jboss/keycloak\n')),Object(l.b)("h2",{id:"\u670d\u52a1\u7aef\u5f00\u53d1"},"\u670d\u52a1\u7aef\u5f00\u53d1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/server_development/"},"\u5f00\u53d1\u6587\u6863"))),Object(l.b)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Java keycloak-admin-client")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'Keycloak keycloak = Keycloak.getInstance(\n    "http://localhost:8080/auth",\n    "master",\n    "admin",\n    "password",\n    "admin-cli");\nRealmRepresentation realm = keycloak.realm("master").toRepresentation();\n')),Object(l.b)("h2",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/server_development/#_themes"},"\u4e3b\u9898\u5f00\u53d1")),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u9898\u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Account - \u8d26\u53f7\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"Admin - \u7ba1\u7406\u63a7\u5236\u53f0"),Object(l.b)("li",{parentName:"ul"},"Email"),Object(l.b)("li",{parentName:"ul"},"Login - \u767b\u9646\u8868\u5355"),Object(l.b)("li",{parentName:"ul"},"Welcome - \u6b22\u8fce\u9875"))),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u9898\u5305\u542b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"HTML \u6a21\u677f - Freemaker"),Object(l.b)("li",{parentName:"ul"},"\u56fe\u7247"),Object(l.b)("li",{parentName:"ul"},"Message bundles - \u7ffb\u8bd1/I18N"),Object(l.b)("li",{parentName:"ul"},"CSS"),Object(l.b)("li",{parentName:"ul"},"\u811a\u672c"),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u9898\u5c5e\u6027"))),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u9898\u90e8\u7f72\u65b9\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u76f4\u63a5\u590d\u5236\u5230 themes \u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6253\u5305\u4e3a jar \u8fdb\u884c\u90e8\u7f72 - \u63a8\u8350"))),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u9898\u5305",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"META-INF/keycloak-themes.json")," - \u5305\u6362\u4e3b\u9898\u5217\u8868\u548c\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u4e3b\u9898"),Object(l.b)("li",{parentName:"ul"},"\u5c06\u4e3b\u9898\u5305\u653e\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"standalone/deployments/")," \u76ee\u5f55\u4f1a\u81ea\u52a8\u52a0\u8f7d")))),Object(l.b)("p",null,"\u4f8b\u5982\u5305\u5185\u5bb9"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"META-INF/keycloak-themes.json\ntheme/mytheme/login/theme.properties\ntheme/mytheme/login/login.ftl\ntheme/mytheme/login/resources/css/styles.css\ntheme/mytheme/login/resources/img/image.png\ntheme/mytheme/login/messages/messages_en.properties\ntheme/mytheme/email/messages/messages_en.properties\n")),Object(l.b)("p",null,"\u5219\u5c5e\u6027\u4e3a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "themes": [\n    {\n      "name": "mytheme",\n      "types": ["login", "email"]\n    }\n  ]\n}\n')),Object(l.b)("h2",{id:"spi"},"SPI"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 jar \u653e\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"standalone/deployments/")," \u8fdb\u884c\u70ed\u90e8\u7f72")),Object(l.b)("h3",{id:"javascript-providers"},"JavaScript Providers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u7ba1\u7406\u5458\u81ea\u5b9a\u4e49\u7279\u6b8a\u529f\u80fd"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u529f\u80fd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"OpenID Connect Script Protocol Mapper"),Object(l.b)("li",{parentName:"ul"},"OpenID Connect Script Authenticator"),Object(l.b)("li",{parentName:"ul"},"JavaScript Policy"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-Dkeycloak.profile.feature.upload_scripts=enable")," \u5f00\u542f\u63a7\u5236\u53f0\u811a\u672c\u4e0a\u4f20")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6587\u4ef6\u7ed3\u6784")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"META-INF/keycloak-scripts.json\n\nmy-script-authenticator.js\nmy-script-policy.js\nmy-script-mapper.js\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u914d\u7f6e\u5185\u5bb9")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "authenticators": [\n    {\n      "name": "My Authenticator",\n      "fileName": "my-authenticator.js",\n      "description": "My Authenticator from a JS file"\n    }\n  ],\n  "policies": [\n    {\n      "name": "My Policy",\n      "fileName": "my-policy.js",\n      "description": "My Policy from a JS file"\n    }\n  ],\n  "mappers": [\n    {\n      "name": "My Mapper",\n      "fileName": "my-mapper.js",\n      "description": "My Mapper from a JS file"\n    }\n  ]\n}\n')),Object(l.b)("h2",{id:"authentication-spi"},"Authentication SPI"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9274\u6743")),Object(l.b)("h2",{id:"event-listener-spi"},"Event Listener SPI"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"org.keycloak.events.EventListenerProvider"))),Object(l.b)("h2",{id:"user-storage-spi"},"User Storage SPI"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7528\u6237\u6570\u636e\u5e93\u548c\u6388\u6743\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa LDAP \u548c AD")),Object(l.b)("h2",{id:"vault-spi"},"Vault SPI"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/keycloak/keycloak-community/blob/master/design/secure-credentials-store.md"},"Secure Credentials Store - Vault SPI"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5173\u4e8e\u96c6\u6210\u5916\u90e8 Vault \u7684\u8ba8\u8bba"))),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u5b9e\u73b0 ",Object(l.b)("inlineCode",{parentName:"li"},"org.keycloak.vault.VaultProvider")," SPI \u53ef\u4ee5\u505a\u5230\u548c\u5916\u90e8\u7cfb\u7edf\u96c6\u6210"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u9694\u79bb\u4e00\u4e9b\u654f\u611f\u4fe1\u606f")))}s.isMDXComponent=!0}}]);