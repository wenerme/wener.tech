"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33913],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67755:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],u={title:"Security FAQ",tags:["FAQ"]},c=void 0,l={unversionedId:"security/security-faq",id:"security/security-faq",isDocsHomePage:!1,title:"Security FAQ",description:"X.509 vs PEM",source:"@site/notes/security/security-faq.md",sourceDirName:"security",slug:"/security/security-faq",permalink:"/notes/security/security-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/security/security-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Security FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Security Awesome",permalink:"/notes/security/security-awesome"},next:{title:"Security Glossary",permalink:"/notes/security/security-glossary"}},s=[{value:"X.509 vs PEM",id:"x509-vs-pem",children:[]}],p={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"x509-vs-pem"},"X.509 vs PEM"),(0,a.kt)("p",null,"\u90fd\u7528\u4e8e\u5bf9\u8bc1\u4e66\u8fdb\u884c\u7f16\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"X.509",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u5217\u5b89\u5168\u76f8\u5173\u6807\u51c6"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709 X.509 object presentation \u4e0e PEM \u76f8\u5173"),(0,a.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u65f6\u57fa\u4e8e ASN.1 \u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u5206\u6790\u5185\u5bb9\u624d\u77e5\u9053\u7f16\u7801\u7684\u662f\u4ec0\u4e48"),(0,a.kt)("li",{parentName:"ul"},"bytes - \u9762\u5411\u673a\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7f00\u4e00\u822c\u4e3a .der"),(0,a.kt)("li",{parentName:"ul"},".cer \u548c .crt \u90fd\u662f ASN.1 \u7f16\u7801 - \u540e\u7f00\u7528\u4e8e\u6807\u8bc6\u4f5c\u7528\uff0c\u4fbf\u4e8e\u7cfb\u7edf\u533a\u5206"))),(0,a.kt)("li",{parentName:"ul"},"PEM - Privacy Enhanced Mail - RFC1421",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u989d\u5916\u5d4c\u5957\u5bf9\u8c61\u6807\u8bc6\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u672c\u683c\u5f0f - \u9762\u5411\u4eba"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7f00\u4e00\u822c\u4e3a .pem")))))}f.isMDXComponent=!0}}]);