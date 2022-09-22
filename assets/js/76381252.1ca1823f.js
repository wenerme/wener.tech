"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37057],{49613:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(u,".").concat(h)]||m[h]||s[h]||l;return r?n.createElement(d,i(i({ref:e},p),{},{components:r})):n.createElement(d,i({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8428:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),i=["components"],o={title:"Auth"},u="Auth",c={unversionedId:"service/auth/README",id:"service/auth/README",title:"Auth",description:"- AuthN - Authentication - \u9274\u6743",source:"@site/../notes/service/auth/README.md",sourceDirName:"service/auth",slug:"/service/auth/",permalink:"/notes/service/auth/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/auth/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Auth"},sidebar:"docs",previous:{title:"xds",permalink:"/notes/service/api/xds"},next:{title:"Auth Awesome",permalink:"/notes/service/auth/auth-awesome"}},p={},s=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"bcrypt",id:"bcrypt",level:2},{value:"CAS",id:"cas",level:2},{value:"ACL",id:"acl",level:2},{value:"OAuth",id:"oauth",level:2}],m={toc:s};function h(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"auth"},"Auth"),(0,l.kt)("admonition",{title:"AAA",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"AuthN - Authentication - \u9274\u6743"),(0,l.kt)("li",{parentName:"ul"},"AuthZ - Authorization - \u6388\u6743"),(0,l.kt)("li",{parentName:"ul"},"Accounting - Audit - \u5ba1\u8ba1"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u534f\u8bae",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LDAP"),(0,l.kt)("li",{parentName:"ul"},"OAuth"),(0,l.kt)("li",{parentName:"ul"},"OIDC"),(0,l.kt)("li",{parentName:"ul"},"RADIUS"),(0,l.kt)("li",{parentName:"ul"},"SAML"),(0,l.kt)("li",{parentName:"ul"},"TACACS - Terminal Access Controller Access-Control System"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Authentication_protocol"},"Authentication protocol"))))),(0,l.kt)("h1",{id:"\u9a8c\u8bc1\u6388\u6743"},"\u9a8c\u8bc1\u6388\u6743"),(0,l.kt)("p",null,"\u6388\u6743\u9a8c\u8bc1\u662f\u4e00\u4e2a\u5f88\u654f\u611f\u7684\u8bdd\u9898,\u5728\u4e00\u4e2a\u5927\u578b\u4f01\u4e1a\u91cc\u5f80\u5f80\u9700\u8981\u4e00\u4e2a\u4e13\u95e8\u7684\u56e2\u961f\u6765\u8d1f\u8d23,\u8fd9\u91cc\u6574\u7406\u4e00\u4e9b\u548c\u6388\u6743\u9a8c\u8bc1\u76f8\u5173\u7684\u57fa\u672c\u5185\u5bb9."),(0,l.kt)("h2",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,l.kt)("p",null,"\u4e0d\u7ba1\u662f\u91c7\u7528\u4f55\u79cd\u65b9\u5f0f,\u90fd\u8981\u9996\u5148\u4fdd\u8bc1\u94fe\u63a5\u5b89\u5168,\u5373\u81f3\u5c11\u662f\u4f7f\u7528 HTTPS,\u4e3a\u4e86\u7b80\u5316\u5f00\u53d1\u548c\u5feb\u901f\u4f7f\u7528\u53ef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"letsencrypt")," \u63d0\u4f9b\u7684\u8bc1\u4e66\u6765\u63d0\u4f9b\u5b89\u5168\u94fe\u63a5."),(0,l.kt)("p",null,"\u51fa\u4e8e\u5b89\u5168\u8003\u8651,\u4e5f\u53ef\u4ee5\u9009\u62e9\u5728\u5ba2\u6237\u7aef\u52a0\u5bc6,\u5373\u7528\u6237\u63d0\u4ea4\u5230\u670d\u52a1\u5668\u7684\u7684\u5bc6\u7801\u5df2\u7ecf\u662f\u52a0\u5bc6\u8fc7\u7684,\u4f8b\u5982 sha1 \u7528\u6237\u7684\u5bc6\u7801,\u8fd9\u6837\u4e5f\u80fd\u907f\u514d\u7528\u6237\u5bc6\u7801\u7684\u76f4\u63a5\u6cc4\u9732."),(0,l.kt)("h2",{id:"bcrypt"},"bcrypt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u6d4b\u8bd5\u548c\u751f\u6210\u5de5\u5177 ",(0,l.kt)("a",{parentName:"li",href:"https://www.dailycred.com/article/bcrypt-calculator"},"https://www.dailycred.com/article/bcrypt-calculator"))),(0,l.kt)("h2",{id:"cas"},"CAS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apereo/cas"},"apereo/cas")," - Apereo CAS - Enterprise Single Sign On for all earthlings and beyond.")),(0,l.kt)("h2",{id:"acl"},"ACL"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb3/ACL-REST-API.html"},"https://loopback.io/doc/en/lb3/ACL-REST-API.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/acl-using-rest-api.html"},"http://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/acl-using-rest-api.html")),(0,l.kt)("h2",{id:"oauth"},"OAuth"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u662f\u6388\u6743(Authorization)\u534f\u8bae\u800c\u4e0d\u662f\u8ba4\u8bc1\u534f\u8bae(Authentication)"),(0,l.kt)("li",{parentName:"ul"},"\u6388\u6743\u7ed9\u5176\u4ed6\u670d\u52a1\u8bbf\u95ee\u7528\u6237 \u8bbe\u5907/\u5e94\u7528/\u5b9e\u4f53 \u7684\u6743\u9650 - \u88ab\u6388\u6743\u670d\u52a1\u901a\u8fc7\u8d44\u6e90\u63a5\u53e3\u4ee3\u66ff\u7528\u6237\u8fdb\u884c\u64cd\u4f5c")))}h.isMDXComponent=!0}}]);