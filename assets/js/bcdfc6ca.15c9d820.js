"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89602],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),i=["components"],u={id:"db-schema",title:"Tenant DB Schema"},o="Database Schema for multi-tendency",p={unversionedId:"devops/xaas/db-schema",id:"devops/xaas/db-schema",title:"Tenant DB Schema",description:"FAQ",source:"@site/notes/devops/xaas/db-schema.md",sourceDirName:"devops/xaas",slug:"/devops/xaas/db-schema",permalink:"/notes/devops/xaas/db-schema",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/xaas/db-schema.md",tags:[],version:"current",frontMatter:{id:"db-schema",title:"Tenant DB Schema"},sidebar:"docs",previous:{title:"varnish",permalink:"/notes/devops/web/varnish"},next:{title:"Dokku",permalink:"/notes/devops/xaas/paas/dokku"}},m={},s=[{value:"FAQ",id:"faq",level:2},{value:"Tenant Schema vs Shared Table vs Tenant View",id:"tenant-schema-vs-shared-table-vs-tenant-view",level:3}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"database-schema-for-multi-tendency"},"Database Schema for multi-tendency"),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"tenant-schema-vs-shared-table-vs-tenant-view"},"Tenant Schema vs Shared Table vs Tenant View"),(0,l.kt)("p",null,"\u79df\u6237\u6570\u636e\u5e93\u8bbe\u8ba1\u4e0e\u79df\u6237\u573a\u666f\u5173\u7cfb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5e94\u7528\u573a\u666f"),(0,l.kt)("th",{parentName:"tr",align:null},"Tenant Schema",(0,l.kt)("br",null),"\u79df\u6237\u5e93"),(0,l.kt)("th",{parentName:"tr",align:null},"Shared Table",(0,l.kt)("br",null),"\u5171\u4eab\u8868"),(0,l.kt)("th",{parentName:"tr",align:null},"Tenant View",(0,l.kt)("br",null),"\u79df\u6237\u89c6\u56fe"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79df\u6237\u591a\u5c11"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c11"),(0,l.kt)("td",{parentName:"tr",align:null},"\u591a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u591a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79df\u6237\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5927"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79df\u6237\u5b9a\u5236"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7ef4\u62a4\u6210\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u6210\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u9694\u79bb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tenant Schema",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5f00\u53d1\u53cb\u597d\uff0c\u9002\u7528\u4e8e\u5927\u578b\u5f3a\u4e1a\u52a1\u79df\u6237"),(0,l.kt)("li",{parentName:"ul"},"\u79df\u6237\u591a\u65f6 Schema \u5347\u7ea7\u96be"))),(0,l.kt)("li",{parentName:"ul"},"Shared Table",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u79df\u6237\u5185\u5bb9\u76f8\u5bf9\u7b80\u5355\uff0c\u4f46\u79df\u6237\u91cf\u7279\u522b\u591a\u7684\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e00 Schema\uff0c\u7ed3\u6784\u7ef4\u62a4\u7b80\u5355\uff0c\u4f46\u53ea\u80fd\u4f7f\u7528\u540c\u4e00\u7248\u672c\u7ed3\u6784\uff0c\u4e0d\u80fd\u5b9a\u5236\u8868\u5217"))),(0,l.kt)("li",{parentName:"ul"},"Tenant View",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 DB \u7279\u6027\uff0c\u4f8b\u5982 PG \u7684\u53ef\u5199\u89c6\u56fe\uff0cMySQL \u4e0d\u652f\u6301\u8fd9\u79cd\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u4e24\u8005\u7684\u4e00\u4e2a\u7efc\u5408\uff0c\u96c6\u6210\u4e86\u4e24\u8005\u4e0d\u597d\u7684\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u4f46\u5bf9\u5f00\u53d1\u76f8\u5bf9\u53cb\u597d\u4e00\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u5236\u5316\u53ef\u901a\u8fc7\u8868\u7684 JSON \u5b57\u6bb5\uff0c\u5728 \u79df\u6237\u89c6\u56fe \u4e2d\u4f5c\u4e3a\u5217\uff0c\u4f46\u65e0\u6cd5\u66f4\u65b0 - \u5b9e\u73b0\u66f4\u65b0\u53ef\u4ee5\u4f7f\u7528 trigger \u6216 rule\uff0c\u4f46\u76f8\u5bf9\u9ebb\u70e6"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u5236\u5316\u4e5f\u53ef\u4ee5\u901a\u8fc7 JOIN \u5916\u90e8\u8868\u5b9e\u73b0"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/44524364"},"PostgreSQL's schemas for multi-tenant applications")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.citusdata.com/en/latest/articles/designing_saas.html"},"Designing your SaaS Database for Scale with Postgres"))))))}d.isMDXComponent=!0}}]);