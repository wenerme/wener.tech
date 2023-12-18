"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[691],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(r),d=a,k=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79576:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))o.call(t,r)&&m(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),d=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&o.call(e,n)&&(r[n]=e[n]);return r};const k={title:"jumpserver"},f="jumpserver",N={unversionedId:"devops/infra/jumpserver/README",id:"devops/infra/jumpserver/README",title:"jumpserver",description:"- jumpserver/jumpserver",source:"@site/../notes/devops/infra/jumpserver/README.md",sourceDirName:"devops/infra/jumpserver",slug:"/devops/infra/jumpserver/",permalink:"/notes/devops/infra/jumpserver/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/infra/jumpserver/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1700666411,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"jumpserver"},sidebar:"docs",previous:{title:"elemental",permalink:"/notes/devops/infra/elemental"},next:{title:"Nomad",permalink:"/notes/devops/infra/nomad"}},v={},g=[{value:"OpenID",id:"openid",level:2},{value:"Install",id:"install",level:2},{value:"Conf",id:"conf",level:2}],h={toc:g},b="wrapper";function y(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(b,c(s(s({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"jumpserver"}),"jumpserver"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/jumpserver/jumpserver"}),"jumpserver/jumpserver"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GPLv3, Python"),(0,n.kt)("li",{parentName:"ul"},"Magnus \u7ec4\u4ef6\u95ed\u6e90"))),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"Helm",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/jumpserver/helm-charts"}),"jumpserver/helm-charts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://jumpserver.github.io/helm-charts"}),"https://jumpserver.github.io/helm-charts")))),(0,n.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248\u529f\u80fd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u89d2\u8272\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u5de5\u5355"),(0,n.kt)("li",{parentName:"ul"},"\u6743\u9650 -  \u8d44\u4ea7\u767b\u5f55\u3001\u8fde\u63a5\u65b9\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u6536\u96c6\u3001\u8d26\u53f7\u6539\u5bc6\u3001\u8d26\u53f7\u5907\u4efd"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u7ba1\u7406\u3001\u754c\u9762\u8bbe\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"Auth - SSO\u3001OpenID\u3001SAML2\u3001")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"port"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"22"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"SSH, \u5b89\u88c5\u5347\u7ea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"80"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"443"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"3306"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"6379"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"3389"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Razor, RDP Client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"2222"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"SSH Client for JumpServer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"33061"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Magnus MySQL Client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"33062"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Magnus MariaDB Client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"54320"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Magnus PostgreSQL Client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"63709"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Magnus Redis Client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"30000-30100"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Magnus Oracle Client")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4f7f\u7528 MySQL+Redis"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"core",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JumpServer, Python, Django, Gunicorn, Celery, Beat, Flower, Daphne",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Gunicorn - WSGI HTTP Server"),(0,n.kt)("li",{parentName:"ul"},"Flower - Real-time monitor and web admin for Celery"),(0,n.kt)("li",{parentName:"ul"},"Daphne - Django Channels HTTP/WebSocket server"))))),(0,n.kt)("li",{parentName:"ul"},"Lina - WebUI - Vue, ElementUI"),(0,n.kt)("li",{parentName:"ul"},"luna - Web Terminal - Angular"),(0,n.kt)("li",{parentName:"ul"},"koko - Coco in Golang - SSH/SFTP/Web Terminal \u670d\u52a1\u7aef"),(0,n.kt)("li",{parentName:"ul"},"Lion - Apache Guacamole"),(0,n.kt)("li",{parentName:"ul"},"Magnus - ",(0,n.kt)("strong",{parentName:"li"},"\u95ed\u6e90")),(0,n.kt)("li",{parentName:"ul"},"Nginx")))),(0,n.kt)("h2",s({},{id:"openid"}),"OpenID"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.jumpserver.org/zh/master/admin-guide/authentication/openid"}),"https://docs.jumpserver.org/zh/master/admin-guide/authentication/openid"))),(0,n.kt)("h2",s({},{id:"install"}),"Install"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://jumpserver.github.io/helm-charts"}),"https://jumpserver.github.io/helm-charts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.jumpserver.org/zh/master/install/setup_by_fast/"}),"https://docs.jumpserver.org/zh/master/install/setup_by_fast/"))),(0,n.kt)("h2",s({},{id:"conf"}),"Conf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.jumpserver.org/zh/master/admin-guide/env/"}),"https://docs.jumpserver.org/zh/master/admin-guide/env/"))))}y.isMDXComponent=!0}}]);