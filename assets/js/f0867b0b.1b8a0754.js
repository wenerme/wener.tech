"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46368],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,m=u["".concat(c,".").concat(b)]||u[b]||f[b]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},44661:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),b=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"axios"},d="axios",y={unversionedId:"web/script/lib/axios",id:"web/script/lib/axios",title:"axios",description:"- axios/axios",source:"@site/../notes/web/script/lib/axios.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/axios",permalink:"/notes/web/script/lib/axios",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/lib/axios.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669459050,formattedLastUpdatedAt:"Nov 26, 2022",frontMatter:{title:"axios"},sidebar:"docs",previous:{title:"awilix",permalink:"/notes/web/script/lib/awilix"},next:{title:"bignumber.js",permalink:"/notes/web/script/lib/bignumberjs"}},w={},O=[],x={toc:O},k="wrapper";function v(e){var t=e,{components:r}=t,o=b(t,["components"]);return(0,n.kt)(k,f(u(u({},x),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"axios"}),"axios"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/axios/axios"}),"axios/axios"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTTP client for the browser and node.js"),(0,n.kt)("li",{parentName:"ul"},"19kB/7kB"),(0,n.kt)("li",{parentName:"ul"},"deps",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"follow-redirects, form-data, proxy-from-env")))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note")," \u63a8\u8350\u4f7f\u7528"),(0,n.kt)("p",{parentName:"blockquote"},"axios \u5c01\u88c5\u4e86\u5927\u591a\u6b63\u5e38\u5f00\u53d1\u4f1a\u5bf9 fetch \u52a0\u7684\u529f\u80fd - \u5e8f\u5217\u5316 data\u3001\u5e8f\u5217\u5316 params\u3001\u62e6\u622a\u5668\u3001baseURL\u3001\u8d85\u65f6 \u7b49")),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"axios \u652f\u6301\u4e0a\u4f20\u3001\u4e0b\u8f7d\u8fdb\u5ea6\u4e8b\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u591a\u5b9e\u4f8b - ",(0,n.kt)("inlineCode",{parentName:"li"},"axios.create")))))}v.isMDXComponent=!0}}]);