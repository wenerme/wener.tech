(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,f=b["".concat(i,".").concat(m)]||b[m]||s[m]||c;return r?a.a.createElement(f,o(o({ref:t},u),{},{components:r})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},219:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1152)),i={title:"SAML"},o={unversionedId:"service/auth/saml",id:"service/auth/saml",isDocsHomePage:!1,title:"SAML",description:"- SAML - Security Assertion Markup Language",source:"@site/notes/service/auth/saml.md",slug:"/service/auth/saml",permalink:"/notes/service/auth/saml",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/saml.md",version:"current",sidebar:"docs",previous:{title:"\u534f\u8bae",permalink:"/notes/service/auth/auth-protocol"},next:{title:"SSO",permalink:"/notes/service/auth/sso"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"SAML - Security Assertion Markup Language",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"SAML 1.0 2002"),Object(c.b)("li",{parentName:"ul"},"SAML 1.1 2003"),Object(c.b)("li",{parentName:"ul"},"SAML 2.0 2005"))),Object(c.b)("li",{parentName:"ul"},"federated single sign on"),Object(c.b)("li",{parentName:"ul"},"IDP XML <-> SP XML - \u4ea4\u6362\u914d\u7f6e\u521b\u5efa\u4fe1\u4efb\u5173\u7cfb"),Object(c.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 IdP \u53d1\u8d77\u4e5f\u53ef\u4ee5\u901a\u8fc7 SP \u53d1\u8d77",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"IdP \u53d1\u8d77",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5c06\u5185\u90e8\u6388\u6743\u7528\u6237\u4ea4\u7ed9\u5916\u90e8\u670d\u52a1"),Object(c.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u5728\u7edf\u4e00\u6388\u6743\u767b\u9646\u540e\u4fbf\u80fd\u8bbf\u95ee\u5176\u4ed6\u670d\u52a1"))),Object(c.b)("li",{parentName:"ul"},"SP \u53d1\u8d77",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u5728\u8bbf\u95ee\u5177\u4f53\u670d\u52a1\u65f6\u76f4\u63a5\u8fdb\u884c\u8ba4\u8bc1"))))),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Chrome ",Object(c.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/saml-tracer/mpdajninpobndbfcldcmbpnnbhibjmch"},"SAML Tracker")," \u6269\u5c55\u53ef\u7528\u4e8e\u8c03\u8bd5"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=i8wFExDSZv0"},"SAML Overview"))))))}p.isMDXComponent=!0}}]);