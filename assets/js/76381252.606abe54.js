"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37057],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83434:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={title:"Auth"},f="Auth",h={unversionedId:"service/auth/README",id:"service/auth/README",title:"Auth",description:"- AuthN - Authentication - \u9274\u6743",source:"@site/../notes/service/auth/README.md",sourceDirName:"service/auth",slug:"/service/auth/",permalink:"/notes/service/auth/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653992153,formattedLastUpdatedAt:"May 31, 2022",frontMatter:{title:"Auth"},sidebar:"docs",previous:{title:"xds",permalink:"/notes/service/api/xds"},next:{title:"Auth Awesome",permalink:"/notes/service/auth/awesome"}},d={},y=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"bcrypt",id:"bcrypt",level:2},{value:"CAS",id:"cas",level:2},{value:"ACL",id:"acl",level:2},{value:"OAuth",id:"oauth",level:2}],k={toc:y};function b(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},k),p),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"auth"}),"Auth"),(0,n.kt)("admonition",s({},{title:"AAA",type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"AuthN - Authentication - \u9274\u6743"),(0,n.kt)("li",{parentName:"ul"},"AuthZ - Authorization - \u6388\u6743"),(0,n.kt)("li",{parentName:"ul"},"Accounting - Audit - \u5ba1\u8ba1"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u534f\u8bae",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LDAP"),(0,n.kt)("li",{parentName:"ul"},"OAuth"),(0,n.kt)("li",{parentName:"ul"},"OIDC"),(0,n.kt)("li",{parentName:"ul"},"RADIUS"),(0,n.kt)("li",{parentName:"ul"},"SAML"),(0,n.kt)("li",{parentName:"ul"},"TACACS - Terminal Access Controller Access-Control System"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Authentication_protocol"}),"Authentication protocol"))))),(0,n.kt)("h1",s({},{id:"\u9a8c\u8bc1\u6388\u6743"}),"\u9a8c\u8bc1\u6388\u6743"),(0,n.kt)("p",null,"\u6388\u6743\u9a8c\u8bc1\u662f\u4e00\u4e2a\u5f88\u654f\u611f\u7684\u8bdd\u9898,\u5728\u4e00\u4e2a\u5927\u578b\u4f01\u4e1a\u91cc\u5f80\u5f80\u9700\u8981\u4e00\u4e2a\u4e13\u95e8\u7684\u56e2\u961f\u6765\u8d1f\u8d23,\u8fd9\u91cc\u6574\u7406\u4e00\u4e9b\u548c\u6388\u6743\u9a8c\u8bc1\u76f8\u5173\u7684\u57fa\u672c\u5185\u5bb9."),(0,n.kt)("h2",s({},{id:"\u57fa\u7840"}),"\u57fa\u7840"),(0,n.kt)("p",null,"\u4e0d\u7ba1\u662f\u91c7\u7528\u4f55\u79cd\u65b9\u5f0f,\u90fd\u8981\u9996\u5148\u4fdd\u8bc1\u94fe\u63a5\u5b89\u5168,\u5373\u81f3\u5c11\u662f\u4f7f\u7528 HTTPS,\u4e3a\u4e86\u7b80\u5316\u5f00\u53d1\u548c\u5feb\u901f\u4f7f\u7528\u53ef\u4f7f\u7528 ",(0,n.kt)("a",s({parentName:"p"},{href:"https://letsencrypt.org/"}),"letsencrypt")," \u63d0\u4f9b\u7684\u8bc1\u4e66\u6765\u63d0\u4f9b\u5b89\u5168\u94fe\u63a5."),(0,n.kt)("p",null,"\u51fa\u4e8e\u5b89\u5168\u8003\u8651,\u4e5f\u53ef\u4ee5\u9009\u62e9\u5728\u5ba2\u6237\u7aef\u52a0\u5bc6,\u5373\u7528\u6237\u63d0\u4ea4\u5230\u670d\u52a1\u5668\u7684\u7684\u5bc6\u7801\u5df2\u7ecf\u662f\u52a0\u5bc6\u8fc7\u7684,\u4f8b\u5982 sha1 \u7528\u6237\u7684\u5bc6\u7801,\u8fd9\u6837\u4e5f\u80fd\u907f\u514d\u7528\u6237\u5bc6\u7801\u7684\u76f4\u63a5\u6cc4\u9732."),(0,n.kt)("h2",s({},{id:"bcrypt"}),"bcrypt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u6d4b\u8bd5\u548c\u751f\u6210\u5de5\u5177 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://www.dailycred.com/article/bcrypt-calculator"}),"https://www.dailycred.com/article/bcrypt-calculator"))),(0,n.kt)("h2",s({},{id:"cas"}),"CAS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/apereo/cas"}),"apereo/cas")," - Apereo CAS - Enterprise Single Sign On for all earthlings and beyond.")),(0,n.kt)("h2",s({},{id:"acl"}),"ACL"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"https://loopback.io/doc/en/lb3/ACL-REST-API.html"}),"https://loopback.io/doc/en/lb3/ACL-REST-API.html"),"\n",(0,n.kt)("a",s({parentName:"p"},{href:"http://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/acl-using-rest-api.html"}),"http://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/acl-using-rest-api.html")),(0,n.kt)("h2",s({},{id:"oauth"}),"OAuth"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u662f\u6388\u6743(Authorization)\u534f\u8bae\u800c\u4e0d\u662f\u8ba4\u8bc1\u534f\u8bae(Authentication)"),(0,n.kt)("li",{parentName:"ul"},"\u6388\u6743\u7ed9\u5176\u4ed6\u670d\u52a1\u8bbf\u95ee\u7528\u6237 \u8bbe\u5907/\u5e94\u7528/\u5b9e\u4f53 \u7684\u6743\u9650 - \u88ab\u6388\u6743\u670d\u52a1\u901a\u8fc7\u8d44\u6e90\u63a5\u53e3\u4ee3\u66ff\u7528\u6237\u8fdb\u884c\u64cd\u4f5c")))}b.isMDXComponent=!0}}]);