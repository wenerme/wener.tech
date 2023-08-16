"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79371],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(a),s=r,N=c["".concat(p,".").concat(s)]||c[s]||k[s]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},71742:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return g}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&m(e,a,t[a]);return e};const c={title:"Kong"},s="Kong Gateway",N={unversionedId:"devops/web/kong/README",id:"devops/web/kong/README",title:"Kong",description:"- kong",source:"@site/../notes/devops/web/kong/README.md",sourceDirName:"devops/web/kong",slug:"/devops/web/kong/",permalink:"/notes/devops/web/kong/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/kong/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677222278,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Kong"},sidebar:"docs",previous:{title:"Apache HTTPD",permalink:"/notes/devops/web/httpd"},next:{title:"lighttpd",permalink:"/notes/devops/web/lighttpd"}},d={},g=[{value:"Notes",id:"notes",level:2},{value:"Awesome",id:"awesome",level:2},{value:"UI",id:"ui",level:3}],f={toc:g};function h(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=k(k({},f),m),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"kong-gateway"}),"Kong Gateway"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Kong/kong"}),"kong"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OpenResty + LUA + lua-kong-nginx-module"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.konghq.com/latest/admin-api/"}),"REST Admin API")),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Golang \u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Kong/kong/blob/master/CHANGELOG.md"}),"CHANGELOG")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Kong/kong/blob/master/kong.conf.default"}),"kong.conf.default")))),(0,n.kt)("li",{parentName:"ul"},"8000 - HTTP \u76d1\u542c\u7aef\u53e3"),(0,n.kt)("li",{parentName:"ul"},"8443 - HTTPS \u76d1\u542c\u7aef\u53e3"),(0,n.kt)("li",{parentName:"ul"},"8001 - \u7ba1\u7406\u63a5\u53e3 HTTP"),(0,n.kt)("li",{parentName:"ul"},"8444 - \u7ba1\u7406\u63a5\u53e3 HTTPS")),(0,n.kt)("admonition",k({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"v3 \u652f\u6301 db-less - \u76f4\u63a5\u901a\u8fc7 YAML \u914d\u7f6e"))),(0,n.kt)("admonition",k({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u9650\u5236\u975e\u5e38\u591a\uff0c \u4e0d\u5982\u7528 ",(0,n.kt)("a",k({parentName:"li"},{href:"/notes/devops/web/apisix"}),"apisix")),(0,n.kt)("li",{parentName:"ul"},"EE \u7248\u672c - ",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.konghq.com/gateway/latest/"}),"ee vs gateway"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ws,wss"),(0,n.kt)("li",{parentName:"ul"},"rbac"),(0,n.kt)("li",{parentName:"ul"},"GraphQL"),(0,n.kt)("li",{parentName:"ul"},"OAuth, OIDC, LDAP, JWT"),(0,n.kt)("li",{parentName:"ul"},"OPA AuthZ"),(0,n.kt)("li",{parentName:"ul"},"Secret"),(0,n.kt)("li",{parentName:"ul"},"API Analytics"))))),(0,n.kt)("h2",k({},{id:"notes"}),"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6982\u5ff5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Service",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5b9a\u4e49 - \u5305\u542b \u8def\u7531\u3001\u4e0a\u6e38\u3001\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u88ab\u8bf7\u6c42\u7684\u5bf9\u8c61"))),(0,n.kt)("li",{parentName:"ul"},"Route",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8def\u7531\u5b9a\u4e49 - \u5305\u542b \u4e3b\u673a\u3001\u8def\u5f84\u3001\u6765\u6e90\u3001\u76ee\u6807"),(0,n.kt)("li",{parentName:"ul"},"\u5173\u8054\u4e00\u4e2a\u670d\u52a1"))),(0,n.kt)("li",{parentName:"ul"},"Upstream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0a\u6e38\u5b9a\u4e49 - \u5305\u542b \u76ee\u6807\u3001\u5065\u5eb7\u68c0\u67e5\u3001\u8d1f\u8f7d\u5747\u8861"))),(0,n.kt)("li",{parentName:"ul"},"Consumer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005 - \u5373\u7528\u6237/\u5e94\u7528 - \u5305\u542b \u63d2\u4ef6\u3001\u5404\u79cd\u6388\u6743\u3001ACL \u5206\u7ec4"))),(0,n.kt)("li",{parentName:"ul"},"Plugin",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5b9a\u4e49 - \u5173\u8054\u9884\u5b9a\u4e49\u7684\u63d2\u4ef6\u3001\u670d\u52a1\u3001\u8def\u7531\u3001\u6d88\u8d39\u8005"))),(0,n.kt)("li",{parentName:"ul"},"Certificate",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bc1\u4e66 - \u8bc1\u4e66\u3001\u5bc6\u94a5\u3001SNI"))))),(0,n.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9274\u6743"),(0,n.kt)("li",{parentName:"ul"},"\u6d41\u63a7 - \u7ba1\u7406\u9650\u6d41\u8fdb\u51fa API \u6d41\u91cf"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u6790 - \u5ba1\u67e5\u548c\u76d1\u63a7\u5fae\u670d\u52a1\u63a5\u53e3\u6d41\u91cf"),(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u6362 - \u5b9e\u65f6\u8f6c\u6362\u8bf7\u6c42\u548c\u54cd\u5e94"),(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7 - \u53d1\u9001\u65e5\u5fd7\u5230\u65e5\u5fd7\u5b58\u50a8\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u670d\u52a1 - \u901a\u8fc7 API \u8bf7\u6c42\u51fd\u6570"))),(0,n.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GraphQL \u7f13\u5b58 - graphql-proxy-cache-advanced"),(0,n.kt)("li",{parentName:"ul"},"GraphQL \u6d41\u63a7 - graphql-rate-limiting-advanced"))),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://bintray.com/package/files/kong/kong-alpine-tar/alpine"}),"https://bintray.com/package/files/kong/kong-alpine-tar/alpine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.konghq.com/install/source"}),"\u6e90\u7801\u5b89\u88c5")),(0,n.kt)("li",{parentName:"ul"},"Alpine ",(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Kong/docker-kong/blob/master/alpine/Dockerfile"}),"https://github.com/Kong/docker-kong/blob/master/alpine/Dockerfile")))),(0,n.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/Kong/kong/issues/4490"}),"#4490")," - \u4e0d\u652f\u6301\u57fa\u4e8e\u7aef\u53e3\u8def\u7531")))),(0,n.kt)("h2",k({},{id:"awesome"}),"Awesome"),(0,n.kt)("h3",k({},{id:"ui"}),"UI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/pantsel/konga"}),"pantsel/konga"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4e0d\u592a\u6d3b\u8dc3"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"EJS"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/PGBI/kong-dashboard"}),"PGBI/kong-dashboard"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5728\u7ef4\u62a4"),(0,n.kt)("li",{parentName:"ul"},"Angular 1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/pocketdigi/kong-admin-ui"}),"pocketdigi/kong-admin-ui"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u600e\u4e48\u7ef4\u62a4"),(0,n.kt)("li",{parentName:"ul"},"Vue"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://kong-admin.pocketdigi.com/"}),"http://kong-admin.pocketdigi.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docker run -d --name kong-admin-ui -p 8899:80 pocketdigi/kong-admin-ui:0.4.0")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/ajaysreedhar/kongdash"}),"ajaysreedhar/kongdash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"electron \u5e94\u7528")))))}h.isMDXComponent=!0}}]);