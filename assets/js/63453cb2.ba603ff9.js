"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50904],{49613:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return d}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),o=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=o(r),d=a,c=N["".concat(u,".").concat(d)]||N[d]||s[d]||i;return r?n.createElement(c,l(l({ref:e},m),{},{components:r})):n.createElement(c,l({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}N.displayName="MDXCreateElement"},49117:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return N},metadata:function(){return c},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&m(t,r,e[r]);if(p)for(var r of p(e))o.call(e,r)&&m(t,r,e[r]);return t};const N={title:"NiFi Registry"},d="NiFi Registry",c={unversionedId:"service/data/nifi-registry",id:"service/data/nifi-registry",title:"NiFi Registry",description:"- nifi-registry",source:"@site/../notes/service/data/nifi-registry.md",sourceDirName:"service/data",slug:"/service/data/nifi-registry",permalink:"/notes/service/data/nifi-registry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/data/nifi-registry.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645427777,formattedLastUpdatedAt:"Feb 21, 2022",frontMatter:{title:"NiFi Registry"},sidebar:"docs",previous:{title:"IMDB",permalink:"/notes/service/data/imdb"},next:{title:"Apache NiFi",permalink:"/notes/service/data/nifi"}},g={},f=[],k={toc:f};function _(t){var e,r=t,{components:a}=r,m=((t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&o.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=s(s({},k),m),i(e,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"nifi-registry"}),"NiFi Registry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/apache/nifi/tree/main/nifi-registry"}),"nifi-registry"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3a NiFi \u6d41\u7a0b\u63d0\u4f9b \u4ed3\u5e93 \u548c \u7248\u672c\u63a7\u5236 \u80fd\u529b")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\ncurl -O https://mirror.sjtu.edu.cn/apache/nifi/1.15.3/nifi-registry-1.15.3-bin.zip\nunzi nifi-registry-1.15.3-bin.zip\ncd nifi-registry-1.15.3\n\n# \u672c\u5730\u542f\u52a8\n# http://localhost:18080/nifi-registry/\n./bin/nifi-registry.sh start\n\n# Docker\n# https://hub.docker.com/r/apache/nifi-registry/\n# https://github.com/apache/nifi/blob/main/nifi-registry/nifi-registry-docker-maven/dockermaven/sh/start.sh\n# http://127.0.0.1:18080/nifi-registry/\ndocker run --rm -it \\\n  -p 18080:18080 \\\n  --name nifi-registry apache/nifi-registry:1.15.3\n\n# Docker \u4fdd\u7559\u72b6\u6001,\u4f7f\u7528 HTTP\ndocker run --rm -it \\\n  -p 18080:18080 \\\n  -v $PWD/nifi-registry-1.15.3:/opt/nifi-registry/nifi-registry-current \\\n  --name nifi-registry apache/nifi-registry:1.15.3\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"prop"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"default"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"env"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.web.http.port"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"18080"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_WEB_HTTP_PORT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.web.http.host"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"$HOSTNAME"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_WEB_HTTP_HOST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.web.https.port"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"18443"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_WEB_HTTPS_PORT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.web.https.host"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"$HOSTNAME"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_WEB_HTTPS_HOST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_FLOW_PROVIDER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_FLOW_STORAGE_DIR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.db.url"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u2935\ufe0e"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_DB_URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.db.driver.class"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"org.h2.Driver"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_DB_CLASS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.db.driver.directory"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_DB_DIR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.db.username"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifireg"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_DB_USER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.db.password"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifireg"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_DB_PASS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.db.maxConnections"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_DB_MAX_CONNS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"nifi.registry.db.sql.debug"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_DB_DEBUG_SQL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_BUNDLE_PROVIDER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"./extension_bundles"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"NIFI_REGISTRY_BUNDLE_STORAGE_DIR")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_DB_URL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jdbc:h2:./database/nifi-registry-primary;AUTOCOMMIT=OFF;DB_CLOSE_ON_EXIT=FALSE;LOCK_MODE=3;LOCK_TIMEOUT=25000;WRITE_DELAY=0;AUTO_SERVER=FALSE"))),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_FLOW_PROVIDER",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"conf/providers.xml"),(0,n.kt)("li",{parentName:"ul"},"file"),(0,n.kt)("li",{parentName:"ul"},"git",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_GIT_REMOTE"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_GIT_USER"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_GIT_PASSWORD"))))),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_BUNDLE_PROVIDER",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"file"),(0,n.kt)("li",{parentName:"ul"},"s3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_REGION"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_BUCKET_NAME"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_KEY_PREFIX"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_CREDENTIALS_PROVIDER - $DEFAULT_CHAIN"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_ACCESS_KEY"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_SECRET_ACCESS_KEY"),(0,n.kt)("li",{parentName:"ul"},"NIFI_REGISTRY_S3_ENDPOINT_URL")))))))}_.isMDXComponent=!0}}]);