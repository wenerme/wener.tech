"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77685],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),s=r,h=c["".concat(o,".").concat(s)]||c[s]||k[s]||l;return a?n.createElement(h,u(u({ref:t},m),{},{components:a})):n.createElement(h,u({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var p=2;p<l;p++)u[p]=a[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39576:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),u=["components"],i={title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},o=void 0,p={unversionedId:"service/auth/auth-faq",id:"service/auth/auth-faq",title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898",description:"OIDC vs OAuth",source:"@site/notes/service/auth/auth-faq.md",sourceDirName:"service/auth",slug:"/service/auth/auth-faq",permalink:"/notes/service/auth/auth-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/auth-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Auth Awesome",permalink:"/notes/service/auth/auth-awesome"},next:{title:"\u8bcd\u6c47",permalink:"/notes/service/auth/auth-glossary"}},m={},k=[{value:"OIDC vs OAuth",id:"oidc-vs-oauth",level:2},{value:"OIDC vs OpenID",id:"oidc-vs-openid",level:2},{value:"Authentication vs Authorization",id:"authentication-vs-authorization",level:2},{value:"Proxy Auth vs Forward Auth",id:"proxy-auth-vs-forward-auth",level:2},{value:"louketo-proxy vs oauth2-proxy",id:"louketo-proxy-vs-oauth2-proxy",level:2},{value:"RADIUS vs TACACS",id:"radius-vs-tacacs",level:2},{value:"Tokens",id:"tokens",level:2}],c={toc:k};function s(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"oidc-vs-oauth"},"OIDC vs OAuth"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OIDC - OpenID Connect",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6807\u51c6\u5316\u4e86\u4f7f\u7528 OAuth 2.0 \u8ba4\u8bc1\u7684\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u88ab \u6388\u6743/\u7528\u6237/subject \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u6709 subject \u7684\u57fa\u7840\u5c5e\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"profile, emial, \u552f\u4e00\u6807\u8bc6\u7b26, group"))),(0,l.kt)("li",{parentName:"ul"},"\u6709 subject \u6388\u6743\u4e0a\u4e0b\u6587",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"issuer, \u65f6\u95f4"))))),(0,l.kt)("li",{parentName:"ul"},"OAuth 2.0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u8ba4\u8bc1\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5728\u4e8e \u4ee3\u7406/\u59d4\u6258/delegated \u8bbf\u95ee\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u88ab\u6388\u6743\u5bf9\u8c61/\u7528\u6237 \u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5ba2\u6237\u7aef\u573a\u666f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://oauth.net/articles/authentication/"},"User Authentication with OAuth 2.0"))),(0,l.kt)("h2",{id:"oidc-vs-openid"},"OIDC vs OpenID"),(0,l.kt)("p",null,"\u4e24\u8005\u90fd\u57fa\u4e8e OAuth 2.0\uff0c\u6dfb\u52a0\u989d\u5916\u7684\u9644\u5c5e\u4fe1\u606f\u3002OAuth 2.0 \u53ea\u7528\u4e8e AuthZ/\u6388\u6743\uff0c\u800c OIDC \u7528\u4e8e AuthN/\u8ba4\u8bc1\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OIDC - OpenID Connect",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bd4 OAuth 2.0 \u66f4\u7b80\u5355\u660e\u4e86"))),(0,l.kt)("li",{parentName:"ul"},"OpenID 2.0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u5e9f\u5f03"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 XML")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openid.net/connect/faq/"},"https://openid.net/connect/faq/"))),(0,l.kt)("h2",{id:"authentication-vs-authorization"},"Authentication vs Authorization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Authentication",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d\u7528\u6237\u662f\u4e0d\u662f\u5b83\u6240\u4ee3\u8868\u7684\u7528\u6237",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u4e00\u4e2a\u58f0\u79f0 admin \u7684 token \u662f\u4e0d\u662f\u4ee3\u8868\u7684\u5b9e\u9645\u7684 admin"))))),(0,l.kt)("li",{parentName:"ul"},"Authorization",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5df2\u7ecf Authentication"),(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u6709\u6743\u9650")))),(0,l.kt)("h2",{id:"proxy-auth-vs-forward-auth"},"Proxy Auth vs Forward Auth"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Proxy - \u4ee3\u7406\u6388\u6743",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u62e6\u622a\u6240\u6709\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u4e0a\u6e38"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u989d\u5916\u53cd\u5411\u4ee3\u7406\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42\u5b8c\u6210\u9a8c\u8bc1"))),(0,l.kt)("li",{parentName:"ul"},"\u52a3\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u66f4\u590d\u6742",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9664\u4e86\u9700\u8981\u5b9e\u73b0 auth \u80fd\u529b\u8fd8\u9700\u8981\u5b9e\u73b0 proxy \u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u4f9d\u8d56\u989d\u5916 Nginx/\u53cd\u5411\u4ee3\u7406 - \u4f46\u4e00\u822c\u90fd\u4f1a\u6709",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u8fd8\u662f\u7b49\u540c\u4e8e\u591a\u4e00\u6b21\u8bf7\u6c42"))),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e0a\u6e38\u90e8\u7f72\u4e00\u4e2a"))))),(0,l.kt)("li",{parentName:"ul"},"Forward - \u8f6c\u53d1\u6388\u6743",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f51\u5173\u8bf7\u6c42\u65f6\u53d1\u8d77\u4e00\u4e2a\u989d\u5916\u7684\u8ba4\u8bc1\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u914d\u7f6e\u989d\u5916\u7684\u53cd\u5411\u4ee3\u7406 - \u4f46\u4e00\u822c\u4e00\u4e2a\u57df\u540d\u4e00\u6b21\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u4e00\u4e2a\u7ed9\u591a\u4e2a\u4e0a\u6e38\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u52a3\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e00\u6b21\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4f20\u9012\u989d\u5916\u4fe1\u606f\u5230\u4e0a\u6e38",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u65e0\u6cd5\u4f20\u9012 JWT \u5934")))))))),(0,l.kt)("h2",{id:"louketo-proxy-vs-oauth2-proxy"},"louketo-proxy vs oauth2-proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"louketo",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u6388\u6743\u4e3a\u4e3b"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u4e00\u4e2a Nginx \u7f51\u5173\uff0c\u6d41\u91cf\u4ece\u4e2d\u8fc7"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u96c6\u6210 Keycloak \u4e3a\u4e3b"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e0a\u6e38\u90fd\u9700\u8981\u90e8\u7f72\u4e00\u4e2a"),(0,l.kt)("li",{parentName:"ul"},"\u8131\u80ce\u4e8e Keycloak Gateway - \u56e0\u6b64\u80fd\u66f4\u597d\u4e0e KC \u96c6\u6210",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b80\u6613\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u89d2\u8272"),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u8def\u5f84\u8d44\u6e90\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u900f\u4f20 logout \u5230 KC"))))),(0,l.kt)("li",{parentName:"ul"},"oauth2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f6c\u53d1\u6388\u6743\u4e3a\u4e3b"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u4e09\u65b9 Oauth2 \u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"Nginx \u8bf7\u6c42\u4e4b\u524d\u9a8c\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u9a8c\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u53ea\u90e8\u7f72\u4e00\u4e2a\u7ed9\u591a\u4e2a\u4e0a\u6e38\u4f7f\u7528 - \u8f6c\u53d1\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"Keycloak \u96c6\u6210",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ec5\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"--keycloak-group")),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 cookie-refresh"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u8bbf\u95ee\u539f\u59cb jwt \u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u6b63\u786e logout")))))),(0,l.kt)("h2",{id:"radius-vs-tacacs"},"RADIUS vs TACACS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cisco.com/c/en/us/support/docs/security-vpn/remote-authentication-dial-user-service-radius/13838-10.html"},"TACACS+ and RADIUS Comparison"))),(0,l.kt)("h2",{id:"tokens"},"Tokens"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.c-sharpcorner.com/article/accesstoken-vs-id-token-vs-refresh-token-what-whywhen/"},"https://www.c-sharpcorner.com/article/accesstoken-vs-id-token-vs-refresh-token-what-whywhen/"))))}s.isMDXComponent=!0}}]);