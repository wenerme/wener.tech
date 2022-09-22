"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50385],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),s=l,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87610:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(96600),l=r(27279),a=(r(59496),r(49613)),o=["components"],i={id:"leveldb",title:"LevelDB"},u="LevelDB",c={unversionedId:"db/kv/leveldb",id:"db/kv/leveldb",title:"LevelDB",description:"- c.h - C API",source:"@site/../notes/db/kv/leveldb.md",sourceDirName:"db/kv",slug:"/db/kv/leveldb",permalink:"/notes/db/kv/leveldb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/kv/leveldb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"leveldb",title:"LevelDB"},sidebar:"docs",previous:{title:"KV DB Awesome",permalink:"/notes/db/kv/kv-awesome"},next:{title:"LMDB",permalink:"/notes/db/kv/lmdb"}},p={},d=[],m={toc:d};function s(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"leveldb"},"LevelDB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/leveldb/blob/master/include/leveldb/c.h"},"c.h")," - C API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u770b\u5230\u6838\u5fc3\u63a5\u53e3\u548c\u80fd\u529b\uff0c\u5176\u4ed6\u8bed\u8a00\u7684\u5c01\u88c5\u4e3b\u8981\u57fa\u4e8e C"),(0,a.kt)("li",{parentName:"ul"},"KV \u8bfb\u5199\u5220\u3001\u8fed\u4ee3\u5668\u3001\u6279\u91cf\u5199\u3001\u5feb\u7167\u3001\u538b\u7f29\u3001\u6bd4\u8f83\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u66b4\u9732 Slice \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u539f\u5b50\u64cd\u4f5c\u901a\u8fc7\u6279\u91cf\u64cd\u4f5c\u5b9e\u73b0"))),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5355\u7ebf\u7a0b\uff0cDB \u5bf9\u8c61\u7ebf\u7a0b\u5b89\u5168"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e LevelDB \u505a KKV \u7684\u4e00\u822c\u662f\u4f7f\u7528 Prefix \u5b9e\u73b0\uff0c\u67e5\u8be2\u65f6\u4f7f\u7528\u8fed\u4ee3\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u5feb\u7167\u4e0b\uff0c\u770b\u5230\u7684\u6570\u636e\u4e0d\u53d8"),(0,a.kt)("li",{parentName:"ul"},"KV \u5141\u8bb8\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"\\0")),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u672a\u9488\u5bf9 SSD \u505a\u4f18\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5931\u6548")))))}s.isMDXComponent=!0}}]);