(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(1021)),i={id:"auth-protocol",title:"\u534f\u8bae"},c={unversionedId:"service/auth/auth-protocol",id:"service/auth/auth-protocol",isDocsHomePage:!1,title:"\u534f\u8bae",description:"\u9274\u6743\u534f\u8bae",source:"@site/notes/service/auth/protocol.md",slug:"/service/auth/auth-protocol",permalink:"/notes/service/auth/auth-protocol",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/protocol.md",version:"current",sidebar:"docs",previous:{title:"OpenLDAP",permalink:"/notes/service/auth/openldap"},next:{title:"UMA",permalink:"/notes/service/auth/uma"}},l=[{value:"Tips",id:"tips",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u9274\u6743\u534f\u8bae"},"\u9274\u6743\u534f\u8bae"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Authentication_protocol"},"Authentication protocol")),Object(a.b)("li",{parentName:"ul"},"\u534f\u8bae\u7c7b\u578b",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u70b9\u5bf9\u70b9",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5bc6\u7801\u8ba4\u8bc1"),Object(a.b)("li",{parentName:"ul"},"CHAP - Challenge-handshake authentication protocol - \u63e1\u624b\u8ba4\u8bc1\u534f\u8bae"),Object(a.b)("li",{parentName:"ul"},"EAP - Extensible Authentication Protocol"))),Object(a.b)("li",{parentName:"ul"},"AAA - \u8ba4\u8bc1\u3001\u6388\u6743\u3001\u5ba1\u8ba1",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"TACACS\u3001XTACACS\u3001TACACS+"),Object(a.b)("li",{parentName:"ul"},"RADIUS - Remote Authentication Dial-In User Service"),Object(a.b)("li",{parentName:"ul"},"DIAMETER"))),Object(a.b)("li",{parentName:"ul"},"Kerberos"))),Object(a.b)("li",{parentName:"ul"},"SSO",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"OIDC"),Object(a.b)("li",{parentName:"ul"},"SAML")))),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://spin.atomicobject.com/2016/05/30/openid-oauth-saml/"},"https://spin.atomicobject.com/2016/05/30/openid-oauth-saml/"),"\n",Object(a.b)("a",{parentName:"p",href:"https://openappstack.net/2019/01/31/comparison-of-free-and-open-source-single-sign-on-solutions.html"},"https://openappstack.net/2019/01/31/comparison-of-free-and-open-source-single-sign-on-solutions.html")))}u.isMDXComponent=!0}}]);