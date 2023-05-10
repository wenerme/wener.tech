"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96220],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,d=c["".concat(m,".").concat(f)]||c[f]||s[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25837:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return g}});var r=n(49613),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e};const c={tags:["Insight"]},f="MinIO Inside",d={unversionedId:"service/storage/minio/minio-inside",id:"service/storage/minio/minio-inside",title:"MinIO Inside",description:"- xl.meta",source:"@site/../notes/service/storage/minio/minio-inside.md",sourceDirName:"service/storage/minio",slug:"/service/storage/minio/inside",permalink:"/notes/service/storage/minio/inside",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/minio/minio-inside.md",tags:[{label:"Insight",permalink:"/notes/tags/insight"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1683689500,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{tags:["Insight"]},sidebar:"docs",previous:{title:"Minio FAQ",permalink:"/notes/service/storage/minio/faq"},next:{title:"mc",permalink:"/notes/service/storage/minio/mc"}},k={},g=[],b={toc:g};function y(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),u),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"minio-inside"}),"MinIO Inside"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"xl.meta",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"headers+msgpack+inline-data"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5c0f\u6587\u4ef6 - 128KiB"))),(0,r.kt)("li",{parentName:"ul"},".minio.sys/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"buckets/"),(0,r.kt)("li",{parentName:"ul"},"config/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"config.json/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"xl.meta"))),(0,r.kt)("li",{parentName:"ul"},"iam/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"format.json/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"xl.meta"))),(0,r.kt)("li",{parentName:"ul"},"sts/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<ID>"),"/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"identity.json/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"xl.meta"))))))))))),(0,r.kt)("li",{parentName:"ul"},"format.json"),(0,r.kt)("li",{parentName:"ul"},"multipart/"),(0,r.kt)("li",{parentName:"ul"},"tmp/"),(0,r.kt)("li",{parentName:"ul"},"tmp-old/"))),(0,r.kt)("li",{parentName:"ul"},"STS - Security Token Service",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u7968\u636e"),(0,r.kt)("li",{parentName:"ul"},"username, secret, token"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/minio/minio/blob/master/cmd/xl-storage.go"}),"cmd/xl-storage.go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://blog.min.io/minio-versioning-metadata-deep-dive/"}),"MinIO Versioning, Metadata and Storage Deep Dive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://blog.min.io/minio-optimizes-small-objects/"}),"MinIO Optimizes Small Object Storage and Adds .tar Auto-Extraction"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'mc cp <path-to-archive>.tar play/mybucket --disable-multipart --attr "X-Amz-Meta-Snowball-Auto-Extract=true"'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u89e3\u538b tar")))))))))}y.isMDXComponent=!0}}]);