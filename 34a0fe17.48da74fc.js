(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),l=(r(0),r(557)),i={id:"lmdb",title:"LMDB"},c={unversionedId:"db/kv/lmdb",id:"db/kv/lmdb",isDocsHomePage:!1,title:"LMDB",description:"LMDB - Lighting Memory-Maped Database",source:"@site/contents/notes/db/kv/lmdb.md",slug:"/db/kv/lmdb",permalink:"/notes/db/kv/lmdb",version:"current",sidebar:"docs",previous:{title:"Redis",permalink:"/notes/db/kv/redis"},next:{title:"LevelDB",permalink:"/notes/db/kv/leveldb"}},b=[{value:"Tips",id:"tips",children:[]}],o={rightToc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"lmdb---lighting-memory-maped-database"},"LMDB - Lighting Memory-Maped Database"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Key/value \u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5b58\u6620\u5c04"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5168\u5c40\u9012\u589e ID \u6807\u793a\u7248\u672c"),Object(l.b)("li",{parentName:"ul"},"\u6620\u5c04\u9875\u7ba1\u7406\u548c\u91cd\u590d\u5229\u7528 - \u4f7f\u7528 ID \u8ddf\u8e2a\u9875\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"Write-On-Copy"),Object(l.b)("li",{parentName:"ul"},"B+Tree",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9875\u53d8\u957f - \u5206\u9694\u6216\u5408\u5e76"),Object(l.b)("li",{parentName:"ul"},"\u9875\u4e0d\u4e00\u5b9a\u6709\u552f\u4e00\u7684\u7236\u8282\u70b9\u548c\u5144\u5f1f\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u5220\u9664\u4e00\u4e2a\u8bb0\u5f55\u65f6\u4e3b\u52a8\u66f4\u65b0\u5176\u4ed6\u76f8\u5e94\u6307\u9488,\u5176\u4ed6\u6307\u9488\u7acb\u5373\u53ef\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"BDB \u4f1a\u8bbe\u7f6e\u4e00\u4e2a tombstone,\u5176\u4ed6\u6307\u6b63\u4e0d\u9700\u8981\u4efb\u4f55\u64cd\u4f5c,\u4f46\u9700\u8981\u5b9a\u671f\u56de\u6536\u7a7a\u95f4"),Object(l.b)("li",{parentName:"ul"},"SQLite3 \u4f1a\u8ba9\u6240\u6709\u6307\u5411\u7684\u6307\u9488\u65f6\u6548,\u5176\u4ed6\u6307\u9488\u5fc5\u987b\u5728\u4e0b\u6b21\u4f7f\u7528\u524d\u8df3\u8f6c\u5230\u65e7\u7684\u4f4d\u7f6e"))))),Object(l.b)("li",{parentName:"ul"},"\u5355\u5199\u591a\u8bfb - \u5e8f\u5217\u5316\u64cd\u4f5c"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u9501"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u7f13\u5b58\u7ba1\u7406 - \u4ea4\u7531 OS \u5c42\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"ACID",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e8b\u52a1\u4f7f\u7528\u552f\u4e00 ID \u8fdb\u884c\u6807\u793a"),Object(l.b)("li",{parentName:"ul"},"\u5148\u5199 Data Page \u518d\u5199 Meta Page"),Object(l.b)("li",{parentName:"ul"},"Meta Page \u4e0e CPU \u9875\u5bf9\u9f50"))),Object(l.b)("li",{parentName:"ul"},"MVCC",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ea\u4fdd\u7559\u4e24\u4e2a\u7248\u672c"),Object(l.b)("li",{parentName:"ul"},"\u6b63\u5728\u8bfb\u7684\u9875\u4f1a\u7ee7\u7eed\u4fdd\u6301"),Object(l.b)("li",{parentName:"ul"},"\u907f\u514d\u8f83\u957f\u7684\u8bfb\u4f1a\u8bdd"),Object(l.b)("li",{parentName:"ul"},"\u8ffd\u8e2a\u8bfb ID \u7684\u6570\u7ec4\u4e0e\u6570\u636e\u6620\u5c04\u5206\u79bb"),Object(l.b)("li",{parentName:"ul"},"\u4e0e CPU \u9875\u5bf9\u9f50"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u8bfb\u5230\u810f\u6570\u636e")))))}p.isMDXComponent=!0},557:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(r),O=n,s=u["".concat(i,".").concat(O)]||u[O]||m[O]||l;return r?a.a.createElement(s,c(c({ref:t},o),{},{components:r})):a.a.createElement(s,c({ref:t},o))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);