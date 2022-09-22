"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90963],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,h=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],l={title:"\u534f\u8bae"},u="\u9274\u6743\u534f\u8bae",c={unversionedId:"service/auth/auth-protocol",id:"service/auth/auth-protocol",title:"\u534f\u8bae",description:"- Authentication protocol",source:"@site/../notes/service/auth/auth-protocol.md",sourceDirName:"service/auth",slug:"/service/auth/auth-protocol",permalink:"/notes/service/auth/auth-protocol",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/auth/auth-protocol.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627904182,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"\u534f\u8bae"},sidebar:"docs",previous:{title:"\u8bcd\u6c47",permalink:"/notes/service/auth/auth-glossary"},next:{title:"2FA",permalink:"/notes/service/auth/authn/2fa"}},p={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9274\u6743\u534f\u8bae"},"\u9274\u6743\u534f\u8bae"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Authentication_protocol"},"Authentication protocol")),(0,o.kt)("li",{parentName:"ul"},"\u534f\u8bae\u7c7b\u578b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u70b9\u5bf9\u70b9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u8ba4\u8bc1"),(0,o.kt)("li",{parentName:"ul"},"CHAP - Challenge-handshake authentication protocol - \u63e1\u624b\u8ba4\u8bc1\u534f\u8bae"),(0,o.kt)("li",{parentName:"ul"},"EAP - Extensible Authentication Protocol"))),(0,o.kt)("li",{parentName:"ul"},"AAA - \u8ba4\u8bc1\u3001\u6388\u6743\u3001\u5ba1\u8ba1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"TACACS\u3001XTACACS\u3001TACACS+"),(0,o.kt)("li",{parentName:"ul"},"RADIUS - Remote Authentication Dial-In User Service"),(0,o.kt)("li",{parentName:"ul"},"DIAMETER"))),(0,o.kt)("li",{parentName:"ul"},"Kerberos"))),(0,o.kt)("li",{parentName:"ul"},"SSO",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OIDC"),(0,o.kt)("li",{parentName:"ul"},"SAML"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spin.atomicobject.com/2016/05/30/openid-oauth-saml/"},"https://spin.atomicobject.com/2016/05/30/openid-oauth-saml/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openappstack.net/2019/01/31/comparison-of-free-and-open-source-single-sign-on-solutions.html"},"https://openappstack.net/2019/01/31/comparison-of-free-and-open-source-single-sign-on-solutions.html"))))))}f.isMDXComponent=!0}}]);