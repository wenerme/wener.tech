"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89838],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44430:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={title:"TOTP"},c=void 0,l={unversionedId:"service/auth/authn/totp",id:"service/auth/authn/totp",title:"TOTP",description:"- Time-based One-time Passwords",source:"@site/notes/service/auth/authn/totp.md",sourceDirName:"service/auth/authn",slug:"/service/auth/authn/totp",permalink:"/notes/service/auth/authn/totp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/authn/totp.md",tags:[],version:"current",frontMatter:{title:"TOTP"},sidebar:"docs",previous:{title:"2FA",permalink:"/notes/service/auth/authn/2fa"},next:{title:"Authorization Awesome",permalink:"/notes/service/auth/authz/authz-awesome"}},p=[],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time-based One-time Passwords",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"SHA-1, rotates every 30 seconds"),(0,o.kt)("li",{parentName:"ul"},"otpauth://totp/ - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/google-authenticator/wiki/Key-Uri-Format"},"Key Uri Format"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"algorithm=sha1 - sha1,sha256,sha512"),(0,o.kt)("li",{parentName:"ul"},"digits=6 - 1-10"),(0,o.kt)("li",{parentName:"ul"},"period=30"))))),(0,o.kt)("li",{parentName:"ul"},"\u7528\u4e8e 2FA \u7684\u65b9\u5f0f\u4e4b\u4e00"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bitwarden.com/help/article/authenticator-keys/"},"Bitwarden Authenticator (TOTP)"))))))}m.isMDXComponent=!0}}]);