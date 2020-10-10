(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{507:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(9),a=(r(0),r(618)),o={id:"supervision",title:"Process supervision"},c={id:"ops/os/linux/init/supervision",title:"Process supervision",description:"# Process supervision",source:"@site/../tricks/ops/os/linux/init/supervision.md",permalink:"/notes/ops/os/linux/init/supervision"},p=[{value:"Tips",id:"tips",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"process-supervision"},"Process supervision"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Process_supervision"}),"Process supervision")),Object(a.b)("li",{parentName:"ul"},"\u901a\u5e38 init \u7cfb\u7edf\u90fd\u5305\u542b "),Object(a.b)("li",{parentName:"ul"},"supervision \u6bd4 init \u6709\u4f18\u52bf",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u670d\u52a1\u91cd\u542f"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 pid \u6587\u4ef6"),Object(a.b)("li",{parentName:"ul"},"\u6e05\u9664\u8fdb\u7a0b\u72b6\u6001"),Object(a.b)("li",{parentName:"ul"},"\u66f4\u53ef\u9760\u7684\u65e5\u5fd7 - \u4f1a\u6355\u83b7 stdout\u3001stderr"),Object(a.b)("li",{parentName:"ul"},"\u66f4\u5feb - \u5e76\u884c"),Object(a.b)("li",{parentName:"ul"},"\u76d1\u63a7\u544a\u8b66"))),Object(a.b)("li",{parentName:"ul"},"\u7eaf\u7cb9\u7684 supervision",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"monit"),Object(a.b)("li",{parentName:"ul"},"pm2"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.skarnet.org/software/s6/"}),"s6")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://immortal.run/"}),"immortal")," ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/immortal/immortal/"}),"immortal/immortal"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Go \u8bed\u8a00\u5b9e\u73b0")))))))}u.isMDXComponent=!0},618:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,O=s["".concat(o,".").concat(m)]||s[m]||b[m]||a;return r?i.a.createElement(O,c(c({ref:t},l),{},{components:r})):i.a.createElement(O,c({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);