"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45486],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},27486:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),i=["components"],o={id:"lmdb",title:"LMDB"},u="LMDB - Lighting Memory-Maped Database",p={unversionedId:"db/kv/lmdb",id:"db/kv/lmdb",title:"LMDB",description:"- Key/value \u5b58\u50a8",source:"@site/notes/db/kv/lmdb.md",sourceDirName:"db/kv",slug:"/db/kv/lmdb",permalink:"/notes/db/kv/lmdb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/kv/lmdb.md",tags:[],version:"current",frontMatter:{id:"lmdb",title:"LMDB"},sidebar:"docs",previous:{title:"LevelDB",permalink:"/notes/db/kv/leveldb"},next:{title:"Redis FAQ",permalink:"/notes/db/kv/redis-faq"}},m={},c=[],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lmdb---lighting-memory-maped-database"},"LMDB - Lighting Memory-Maped Database"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key/value \u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6620\u5c04"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5168\u5c40\u9012\u589e ID \u6807\u793a\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u6620\u5c04\u9875\u7ba1\u7406\u548c\u91cd\u590d\u5229\u7528 - \u4f7f\u7528 ID \u8ddf\u8e2a\u9875\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"Write-On-Copy"),(0,l.kt)("li",{parentName:"ul"},"B+Tree",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9875\u53d8\u957f - \u5206\u9694\u6216\u5408\u5e76"),(0,l.kt)("li",{parentName:"ul"},"\u9875\u4e0d\u4e00\u5b9a\u6709\u552f\u4e00\u7684\u7236\u8282\u70b9\u548c\u5144\u5f1f\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u4e00\u4e2a\u8bb0\u5f55\u65f6\u4e3b\u52a8\u66f4\u65b0\u5176\u4ed6\u76f8\u5e94\u6307\u9488,\u5176\u4ed6\u6307\u9488\u7acb\u5373\u53ef\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BDB \u4f1a\u8bbe\u7f6e\u4e00\u4e2a tombstone,\u5176\u4ed6\u6307\u6b63\u4e0d\u9700\u8981\u4efb\u4f55\u64cd\u4f5c,\u4f46\u9700\u8981\u5b9a\u671f\u56de\u6536\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"SQLite3 \u4f1a\u8ba9\u6240\u6709\u6307\u5411\u7684\u6307\u9488\u65f6\u6548,\u5176\u4ed6\u6307\u9488\u5fc5\u987b\u5728\u4e0b\u6b21\u4f7f\u7528\u524d\u8df3\u8f6c\u5230\u65e7\u7684\u4f4d\u7f6e"))))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u5199\u591a\u8bfb - \u5e8f\u5217\u5316\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u9501"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u7f13\u5b58\u7ba1\u7406 - \u4ea4\u7531 OS \u5c42\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"ACID",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u4f7f\u7528\u552f\u4e00 ID \u8fdb\u884c\u6807\u793a"),(0,l.kt)("li",{parentName:"ul"},"\u5148\u5199 Data Page \u518d\u5199 Meta Page"),(0,l.kt)("li",{parentName:"ul"},"Meta Page \u4e0e CPU \u9875\u5bf9\u9f50"))),(0,l.kt)("li",{parentName:"ul"},"MVCC",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u4fdd\u7559\u4e24\u4e2a\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5728\u8bfb\u7684\u9875\u4f1a\u7ee7\u7eed\u4fdd\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u8f83\u957f\u7684\u8bfb\u4f1a\u8bdd"),(0,l.kt)("li",{parentName:"ul"},"\u8ffd\u8e2a\u8bfb ID \u7684\u6570\u7ec4\u4e0e\u6570\u636e\u6620\u5c04\u5206\u79bb"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e CPU \u9875\u5bf9\u9f50"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u8bfb\u5230\u810f\u6570\u636e")))))}d.isMDXComponent=!0}}]);