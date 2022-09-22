"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92136],{49613:function(t,e,r){r.d(e,{Zo:function(){return o},kt:function(){return d}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),m=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},o=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=m(r),d=a,c=s["".concat(u,".").concat(d)]||s[d]||N[d]||i;return r?n.createElement(c,l(l({ref:e},o),{},{components:r})):n.createElement(c,l({ref:e},o))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},16875:function(t,e,r){r.r(e),r.d(e,{assets:function(){return o},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return N}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),l=["components"],p={title:"NiFi Registry"},u=void 0,m={unversionedId:"service/data/nifi-registry",id:"service/data/nifi-registry",title:"NiFi Registry",description:"- nifi-registry",source:"@site/notes/service/data/nifi-registry.md",sourceDirName:"service/data",slug:"/service/data/nifi-registry",permalink:"/notes/service/data/nifi-registry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/data/nifi-registry.md",tags:[],version:"current",frontMatter:{title:"NiFi Registry"},sidebar:"docs",previous:{title:"IMDB",permalink:"/notes/service/data/imdb"},next:{title:"Apache NiFi",permalink:"/notes/service/data/nifi"}},o={},N=[],s={toc:N};function d(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/nifi/tree/main/nifi-registry"},"nifi-registry"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3a NiFi \u6d41\u7a0b\u63d0\u4f9b \u4ed3\u5e93 \u548c \u7248\u672c\u63a7\u5236 \u80fd\u529b")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\ncurl -O https://mirror.sjtu.edu.cn/apache/nifi/1.15.3/nifi-registry-1.15.3-bin.zip\nunzi nifi-registry-1.15.3-bin.zip\ncd nifi-registry-1.15.3\n\n# \u672c\u5730\u542f\u52a8\n# http://localhost:18080/nifi-registry/\n./bin/nifi-registry.sh start\n\n# Docker\n# https://hub.docker.com/r/apache/nifi-registry/\n# https://github.com/apache/nifi/blob/main/nifi-registry/nifi-registry-docker-maven/dockermaven/sh/start.sh\n# http://127.0.0.1:18080/nifi-registry/\ndocker run --rm -it \\\n  -p 18080:18080 \\\n  --name nifi-registry apache/nifi-registry:1.15.3\n\n# Docker \u4fdd\u7559\u72b6\u6001,\u4f7f\u7528 HTTP\ndocker run --rm -it \\\n  -p 18080:18080 \\\n  -v $PWD/nifi-registry-1.15.3:/opt/nifi-registry/nifi-registry-current \\\n  --name nifi-registry apache/nifi-registry:1.15.3\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"default"),(0,i.kt)("th",{parentName:"tr",align:null},"env"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.web.http.port"),(0,i.kt)("td",{parentName:"tr",align:null},"18080"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_WEB_HTTP_PORT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.web.http.host"),(0,i.kt)("td",{parentName:"tr",align:null},"$HOSTNAME"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_WEB_HTTP_HOST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.web.https.port"),(0,i.kt)("td",{parentName:"tr",align:null},"18443"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_WEB_HTTPS_PORT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.web.https.host"),(0,i.kt)("td",{parentName:"tr",align:null},"$HOSTNAME"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_WEB_HTTPS_HOST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_FLOW_PROVIDER")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_FLOW_STORAGE_DIR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.db.url"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2935\ufe0e"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_DB_URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.db.driver.class"),(0,i.kt)("td",{parentName:"tr",align:null},"org.h2.Driver"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_DB_CLASS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.db.driver.directory"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_DB_DIR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.db.username"),(0,i.kt)("td",{parentName:"tr",align:null},"nifireg"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_DB_USER")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.db.password"),(0,i.kt)("td",{parentName:"tr",align:null},"nifireg"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_DB_PASS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.db.maxConnections"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_DB_MAX_CONNS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nifi.registry.db.sql.debug"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_DB_DEBUG_SQL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_BUNDLE_PROVIDER")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"./extension_bundles"),(0,i.kt)("td",{parentName:"tr",align:null},"NIFI_REGISTRY_BUNDLE_STORAGE_DIR")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_DB_URL",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"jdbc:h2:./database/nifi-registry-primary;AUTOCOMMIT=OFF;DB_CLOSE_ON_EXIT=FALSE;LOCK_MODE=3;LOCK_TIMEOUT=25000;WRITE_DELAY=0;AUTO_SERVER=FALSE"))),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_FLOW_PROVIDER",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"conf/providers.xml"),(0,i.kt)("li",{parentName:"ul"},"file"),(0,i.kt)("li",{parentName:"ul"},"git",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_GIT_REMOTE"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_GIT_USER"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_GIT_PASSWORD"))))),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_BUNDLE_PROVIDER",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"file"),(0,i.kt)("li",{parentName:"ul"},"s3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_REGION"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_BUCKET_NAME"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_KEY_PREFIX"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_CREDENTIALS_PROVIDER - $DEFAULT_CHAIN"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_ACCESS_KEY"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_SECRET_ACCESS_KEY"),(0,i.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_ENDPOINT_URL")))))))}d.isMDXComponent=!0}}]);