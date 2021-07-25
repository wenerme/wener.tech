(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},460:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1169)),c={title:"Hydra"},i={unversionedId:"service/auth/hydra",id:"service/auth/hydra",isDocsHomePage:!1,title:"Hydra",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/auth/hydra.md",slug:"/service/auth/hydra",permalink:"/notes/service/auth/hydra",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/hydra.md",version:"current",sidebar:"docs",previous:{title:"\u8bcd\u6c47",permalink:"/notes/service/auth/auth-glossary"},next:{title:"JWT",permalink:"/notes/service/auth/jwt"}},u=[],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"OIDC, OAuth2 Provider - IdP"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ory/hydra"},"ory/hydra")),Object(o.b)("li",{parentName:"ul"},"OAuth \u670d\u52a1\u7aef - \u7eaf\u63a5\u53e3\u670d\u52a1\uff0c\u65e0\u524d\u7aef",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e0d\u8d1f\u8d23\u767b\u9646\u767b\u51fa\uff0c\u7528\u6237\u4fe1\u606f\u7ba1\u7406"))),Object(o.b)("li",{parentName:"ul"},"\u573a\u666f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5141\u8bb8\u7b2c\u4e09\u65b9\u8bbf\u95ee API"),Object(o.b)("li",{parentName:"ul"},"\u4f5c\u4e3a IdP"),Object(o.b)("li",{parentName:"ul"},"\u5141\u8bb8 \u6d4f\u89c8\u5668\u3001\u79fb\u52a8\u7aef\u7b49\u5176\u4ed6\u8bbe\u5907\u8bbf\u95ee API - Service Account/Token"),Object(o.b)("li",{parentName:"ul"},"\u9650\u5236\u540e\u7aef\u670d\u52a1\u7d22\u53d6\u7684\u4fe1\u606f")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"go get -d github.com/ory/hydra\ndocker-compose -f quickstart.yml \\\n  -f quickstart-postgres.yml \\\n  up --build\n")))}p.isMDXComponent=!0}}]);