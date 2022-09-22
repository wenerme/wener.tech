"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10313],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88082:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(96600),i=r(27279),a=(r(59496),r(49613)),l=["components"],o={title:"ulid"},u="ulid",p={unversionedId:"db/ulid",id:"db/ulid",title:"ulid",description:"- ulid/spec - Universally Unique Lexicographically Sortable Identifier",source:"@site/../notes/db/ulid.md",sourceDirName:"db",slug:"/db/ulid",permalink:"/notes/db/ulid",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/ulid.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ulid"},sidebar:"docs",previous:{title:"\u805a\u5408",permalink:"/notes/db/theory/aggregate"},next:{title:"\u8bbe\u8ba1",permalink:"/notes/design/"}},c={},s=[],m={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ulid"},"ulid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ulid/spec"},"ulid/spec")," - Universally Unique Lexicographically Sortable Identifier"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"01ARZ3NDEKTSV4RRFFQ69G5FAV")),(0,a.kt)("li",{parentName:"ul"},"128bit - \u7f16\u7801\u540e 26 \u5b57\u7b26",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"timestamp 48bits + \u968f\u673a 80bits"),(0,a.kt)("li",{parentName:"ul"},"Crockford base32 - 5 bit/char"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ttttttttttrrrrrrrrrrrrrrrr")," - t \u65f6\u95f4\u6233, r \u968f\u673a"),(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u6233\u4fdd\u7559\u5230 \u6beb\u79d2"))),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6392\u5e8f - \u5355\u8c03\u9012\u589e - Monotonicity \u4fdd\u8bc1\u540c ms \u5185\u9012\u589e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u5b9e\u73b0\u4e0d\u4e00\u5b9a\u80fd\u4fdd\u8bc1 - \u56e0\u4e3a\u9700\u8981\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5df2\u7ecf\u6709 \u65f6\u95f4 \u4fe1\u606f\u53ef\u76f4\u63a5\u7528\u4e8e\u751f\u6210 ULID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 create_at \u5217, \u521b\u5efa\u65f6\u95f4, \u4e00\u4e2a\u80fd\u6807\u8bc6\u6d88\u606f\u4e14\u4e0d\u4f1a\u53d8\u7684\u65f6\u95f4"))))),(0,a.kt)("li",{parentName:"ul"},"\u5927\u5c0f\u5199\u65e0\u5173 - Crockford base32",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"encode \u4e3a\u5927\u5199"),(0,a.kt)("li",{parentName:"ul"},"decode \u63a5\u53d7\u5927\u5199\u548c\u5c0f\u5199 - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ulid/spec/issues/3#issuecomment-406077611"},"https://github.com/ulid/spec/issues/3#issuecomment-406077611")),(0,a.kt)("li",{parentName:"ul"},"\u5927\u591a\u5b9e\u73b0\u4f7f\u7528 \u5927\u5199 - \u4f46\u4e2a\u4eba\u503e\u5411\u5c0f\u5199"))),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u7279\u6b8a\u5b57\u7b26 - URL \u5b89\u5168 - ",(0,a.kt)("inlineCode",{parentName:"li"},"0123456789ABCDEFGHJKMNPQRSTVWXYZ"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"ULID \u4f7f\u7528 base32 \u65e0\u5173\u5927\u5c0f - \u5927\u591a\u5b9e\u73b0\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"\u5927\u5199")," - \u4e2a\u4eba\u559c\u6b22\u5c0f\u5199",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ulid/spec/issues/3#issuecomment-944452084"},"ulid#3")))))))}d.isMDXComponent=!0}}]);