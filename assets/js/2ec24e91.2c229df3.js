"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26896],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},35274:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return N}});var n=a(49613),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&s(e,a,t[a]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const f={title:"nacos"},b="nacos",k={unversionedId:"service/api/nacos",id:"service/api/nacos",title:"nacos",description:"- \u975e Java \u7684 SDK \u8d28\u91cf\u5f88\u4f4e",source:"@site/../notes/service/api/nacos.md",sourceDirName:"service/api",slug:"/service/api/nacos",permalink:"/notes/service/api/nacos",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/nacos.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"nacos"},sidebar:"docs",previous:{title:"hoppscotch",permalink:"/notes/service/api/hoppscotch"},next:{title:"OpenAPI",permalink:"/notes/service/api/openapi/"}},h={},N=[{value:"Deploy",id:"deploy",level:2},{value:"No DataSource set",id:"no-datasource-set",level:2},{value:"\u5fd8\u8bb0\u5bc6\u7801",id:"\u5fd8\u8bb0\u5bc6\u7801",level:2}],v={toc:N},g="wrapper";function y(e){var t=e,{components:a}=t,r=d(t,["components"]);return(0,n.kt)(g,m(u(u({},v),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"nacos"}),"nacos"),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u975e Java \u7684 SDK \u8d28\u91cf\u5f88\u4f4e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4e00\u5b9a\u652f\u6301 auth\uff0c\u56e0\u6b64\u53ef\u80fd\u76f4\u63a5\u7528\u4e0d\u4e86"))),(0,n.kt)("li",{parentName:"ul"},"Java SDK",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"grpc \u4e0d\u652f\u6301 https - ",(0,n.kt)("inlineCode",{parentName:"li"},"UNAVAILABLE: Network closed for unknown reason"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GrpcClient \u5199\u6b7b usePlaintext"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/alibaba/nacos/issues/7842"}),"#7842")))),(0,n.kt)("li",{parentName:"ul"},"v2 \u65e0 http client"),(0,n.kt)("li",{parentName:"ul"},"nacos.server.grpc.port.offset=1000",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"grpc \u7aef\u53e3\u504f\u79fb\u91cf"),(0,n.kt)("li",{parentName:"ul"},"8848 + 1000 = 9848"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u9700\u8981\u4fee\u6539"))))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/alibaba/nacos"}),"alibaba/nacos"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dynamic Naming And COnfiguration Service"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u670d\u52a1\u7ba1\u7406"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/alibaba/nacos/blob/master/distribution/conf/application.properties"}),"https://github.com/alibaba/nacos/blob/master/distribution/conf/application.properties"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"server.servlet.contextPath=/nacos"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/alibaba/nacos/blob/master/distribution/bin/startup.sh"}),"https://github.com/alibaba/nacos/blob/master/distribution/bin/startup.sh"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"embedded",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"-DembeddedStorage=true"))),(0,n.kt)("li",{parentName:"ul"},"JAVA_OPT"),(0,n.kt)("li",{parentName:"ul"},"MODE=standalone",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"-Xms512m -Xmx512m -Xmn256m -Dnacos.standalone=true"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://127.0.0.1:8848/nacos/"}),"http://127.0.0.1:8848/nacos/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"nacos:nacos"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/alibaba/nacos/blob/develop/api/src/main/proto/nacos_grpc_service.proto"}),"https://github.com/alibaba/nacos/blob/develop/api/src/main/proto/nacos_grpc_service.proto"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-http-request"}),"### \u6ce8\u518c\nPOST http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080\n\n### \u670d\u52a1\u53d1\u73b0\nPOST http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName\n\n### \u53d1\u5e03\u914d\u7f6e\nPOST http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld\n\n### \u83b7\u53d6\u914d\u7f6e\nPOST http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test\n")),(0,n.kt)("h2",u({},{id:"deploy"}),"Deploy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://nacos.io/zh-cn/docs/quick-start-docker.html"}),"https://nacos.io/zh-cn/docs/quick-start-docker.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/nacos-group/nacos-docker"}),"nacos-group/nacos-docker"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u914d\u7f6e JAVA_OPT"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/nacos-group/nacos-k8s"}),"nacos-group/nacos-k8s"))),(0,n.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",u({},{id:"no-datasource-set"}),"No DataSource set"),(0,n.kt)("p",null,"\u53ef\u80fd\u662f\u6ca1\u5efa\u8868"),(0,n.kt)("h2",u({},{id:"\u5fd8\u8bb0\u5bc6\u7801"}),"\u5fd8\u8bb0\u5bc6\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"UPDATE users\nSET `password` = '$2a$10$eSH9UR8RJ2s8VV9mHPPkB.PhOeVaIGBLNAgQEVx3f.y9zK8svGYJW'\nWHERE `username` = 'nacos'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"jerryjin666")))}y.isMDXComponent=!0}}]);