"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30033],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,y=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74002:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],u={title:"Hydra"},c=void 0,l={unversionedId:"service/auth/hydra",id:"service/auth/hydra",isDocsHomePage:!1,title:"Hydra",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/auth/hydra.md",sourceDirName:"service/auth",slug:"/service/auth/hydra",permalink:"/notes/service/auth/hydra",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/hydra.md",version:"current",frontMatter:{title:"Hydra"},sidebar:"docs",previous:{title:"\u8bcd\u6c47",permalink:"/notes/service/auth/auth-glossary"},next:{title:"JWT",permalink:"/notes/service/auth/jwt"}},p=[],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OIDC, OAuth2 Provider - IdP"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/hydra"},"ory/hydra")),(0,o.kt)("li",{parentName:"ul"},"OAuth \u670d\u52a1\u7aef - \u7eaf\u63a5\u53e3\u670d\u52a1\uff0c\u65e0\u524d\u7aef",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u8d1f\u8d23\u767b\u9646\u767b\u51fa\uff0c\u7528\u6237\u4fe1\u606f\u7ba1\u7406"))),(0,o.kt)("li",{parentName:"ul"},"\u573a\u666f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u7b2c\u4e09\u65b9\u8bbf\u95ee API"),(0,o.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a IdP"),(0,o.kt)("li",{parentName:"ul"},"\u5141\u8bb8 \u6d4f\u89c8\u5668\u3001\u79fb\u52a8\u7aef\u7b49\u5176\u4ed6\u8bbe\u5907\u8bbf\u95ee API - Service Account/Token"),(0,o.kt)("li",{parentName:"ul"},"\u9650\u5236\u540e\u7aef\u670d\u52a1\u7d22\u53d6\u7684\u4fe1\u606f")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get -d github.com/ory/hydra\ndocker-compose -f quickstart.yml \\\n  -f quickstart-postgres.yml \\\n  up --build\n")))}m.isMDXComponent=!0}}]);