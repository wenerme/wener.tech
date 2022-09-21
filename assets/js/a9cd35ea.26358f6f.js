"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26120],{4920:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return k},metadata:function(){return p},toc:function(){return u}});var n=a(96600),r=a(27279),l=(a(59496),a(3905)),o=["components"],k={title:"Keycloak Legacy"},i=void 0,p={unversionedId:"service/auth/keycloak/keycloak-legacy",id:"service/auth/keycloak/keycloak-legacy",title:"Keycloak Legacy",description:"- Keycloak 17+ \u4e3a Quakus, Docker \u542f\u52a8\u53d1\u751f\u53d8\u5316, \u5185\u90e8\u7ed3\u6784\u53d8\u5316",source:"@site/notes/service/auth/keycloak/keycloak-legacy.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-legacy",permalink:"/notes/service/auth/keycloak/keycloak-legacy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-legacy.md",tags:[],version:"current",frontMatter:{title:"Keycloak Legacy"},sidebar:"docs",previous:{title:"KeyCloak LDAP",permalink:"/notes/service/auth/keycloak/keycloak-ldap"},next:{title:"keycloak-operator",permalink:"/notes/service/auth/keycloak/keycloak-operator"}},c={},u=[{value:"Keycloak 16 vs Keycloak 17+",id:"keycloak-16-vs-keycloak-17",level:2},{value:"Keycloak &lt; 16 Docker",id:"keycloak--16-docker",level:2}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keycloak 17+ \u4e3a Quakus, Docker \u542f\u52a8\u53d1\u751f\u53d8\u5316, \u5185\u90e8\u7ed3\u6784\u53d8\u5316")),(0,l.kt)("h2",{id:"keycloak-16-vs-keycloak-17"},"Keycloak 16 vs Keycloak 17+"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DB_")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"KC_DB_")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/auth")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--http-relative-path /auth")," \u6062\u590d\u4e3a\u4e4b\u524d\u914d\u7f6e")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.keycloak.org/migration/migrating-to-quarkus"},"https://www.keycloak.org/migration/migrating-to-quarkus"))),(0,l.kt)("h2",{id:"keycloak--16-docker"},"Keycloak < 16 Docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/opt/jboss/keycloak/themes - \u4e3b\u9898\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"/opt/jboss/keycloak/standalone/deployments - \u81ea\u5b9a\u4e49 provider \u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"/opt/jboss/startup-scripts - \u542f\u52a8\u8fd0\u884c\u811a\u672c\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"quay ",(0,l.kt)("a",{parentName:"li",href:"https://quay.io/repository/keycloak/keycloak"},"keycloak/keycloak")),(0,l.kt)("li",{parentName:"ul"},"dockerhub ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/jboss/keycloak"},"jboss/keycloak"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_USER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_USER_FILE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_PASSWORD_FILE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_VENDOR"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"h2,postgres,mysql,mariadb,oracle,mssql",(0,l.kt)("br",null),"\u9ed8\u8ba4\u81ea\u52a8\u68c0\u6d4b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_ADDR"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PORT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_DATABASE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_SCHEMA"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_USER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_USER_FILE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PASSWORD_FILE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PROXY_ADDRESS_FORWARDING"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u4ee3\u7406\u4e4b\u540e\u9700\u8981\u63a5\u53d7\u53cd\u5411\u4ee3\u7406\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_FRONTEND_URL"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u524d\u7aef\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_LOGLEVEL"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"ALL, DEBUG, ERROR, FATAL, INFO, OFF, TRACE, WARN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROOT_LOGLEVEL"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_STATISTICS"),(0,l.kt)("td",{parentName:"tr",align:null},"db,http"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/metrics")," \u66b4\u9732\u7684\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_WELCOME_THEME"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_DEFAULT_THEME"),(0,l.kt)("td",{parentName:"tr",align:null},"keycloak"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KEYCLOAK_IMPORT"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u6307\u5b9a\u4e00\u4e2a realm json \u6587\u4ef6\u5bfc\u5165")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4\u542f\u52a8\u4f7f\u7528 H2\n# \u6620\u5c04\u51fa\u6570\u636e\u53ef\u91cd\u590d\u542f\u52a8\u4e0d\u4e22\u914d\u7f6e\n# \u9700\u8981\u6dfb\u52a0\u7684\u7528\u6237\u4f1a\u751f\u6210\u914d\u7f6e\u5230 /opt/jboss/keycloak/standalone/configuration/keycloak-add-user.json\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -v $PWD/keycloak/data:/opt/jboss/keycloak/standalone/data \\\n  --name keycloak jboss/keycloak\n\ndocker run --rm -it --entrypoint bash \\\n  -e -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -v $PWD/keycloak:/opt/jboss/.keycloak \\\n  -v $PWD:/host -w /host \\\n  --name keycloak jboss/keycloak\n\n# \u914d\u7f6e\u6587\u4ef6\n# $HOME/.keycloak/kcadm.config\ndocker run --rm -it --entrypoint bash \\\n  -v $PWD/keycloak:/opt/jboss/.keycloak \\\n  -v $PWD:/host -w /host \\\n  --name keycloak jboss/keycloak\n\nexport PATH=/opt/jboss/keycloak/bin:$PATH\n\n# master \u6388\u6743\nkcadm.sh config credentials --server http://localhost:8080/auth --realm master --user admin --password admin\n\n# \u6388\u6743\u4fe1\u606f\nkcadm.sh config credentials --server http://localhost:8080/auth --realm demo --user admin --client admin\n# \u521b\u5efa\u57df\nkcadm.sh create realms -s realm=demorealm -s enabled=true -o\n# \u521b\u5efa Client\nCID=$(kcadm.sh create clients -r demorealm -s clientId=my_client -s 'redirectUris=[\"http://localhost:8980/myapp/*\"]' -i)\n\n# \u83b7\u53d6 oidc \u8fde\u63a5\u4fe1\u606f\nkcadm.sh get clients/$CID/installation/providers/keycloak-oidc-keycloak-json\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# H2 Console\njar="./modules/system/layers/base/com/h2database/h2/main/h2-*.jar"\nurl="jdbc:h2:./standalone/data/keycloak;AUTO_SERVER=TRUE"\n\njava -cp $jar org.h2.tools.Console -url "$url" -user sa -password sa\n')))}d.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{kt:function(){return m}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=k(t,["components","mdxType","originalType","parentName"]),m=p(a),d=r,s=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(s,o(o({ref:e},u),{},{components:a})):n.createElement(s,o({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var k={};for(var i in e)hasOwnProperty.call(e,i)&&(k[i]=e[i]);k.originalType=t,k.mdxType="string"==typeof t?t:r,o[1]=k;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);