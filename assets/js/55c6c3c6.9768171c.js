"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11581],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=c(r),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},20768:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return b},metadata:function(){return d},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&s(e,r,t[r]);return e};const b={title:"cubestore"},m="cubestore",d={unversionedId:"service/bi/cubejs-store",id:"service/bi/cubejs-store",title:"cubestore",description:"- @cubejs-backend/cubestore cube-js/cube.js/rust",source:"@site/../notes/service/bi/cubejs-store.md",sourceDirName:"service/bi",slug:"/service/bi/cubejs-store",permalink:"/notes/service/bi/cubejs-store",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/bi/cubejs-store.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637477347,formattedLastUpdatedAt:"Nov 21, 2021",frontMatter:{title:"cubestore"},sidebar:"docs",previous:{title:"CubeJS Schema",permalink:"/notes/service/bi/cubejs-schema"},next:{title:"CubeJS",permalink:"/notes/service/bi/cubejs"}},k={},f=[],E={toc:f};function O(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},E),s),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"cubestore"}),"cubestore"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@cubejs-backend/cubestore ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/cube-js/cube.js/tree/master/rust"}),"cube-js/cube.js/rust"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"))),(0,n.kt)("li",{parentName:"ul"},"router",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5355\u4e2a"),(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u7ba1\u7406\u6570\u636e\u5e93\u5143\u6570\u636e\uff0c\u63d0\u4f9b\u7b80\u5355\u67e5\u8be2"))),(0,n.kt)("li",{parentName:"ul"},"worker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591a\u4e2a"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c SQL"))),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u5b58\u50a8\u4e3a Parquet \u683c\u5f0f")),(0,n.kt)("admonition",p({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u4ece github \u4e0b\u8f7d binary",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"npm config get https-proxy"),(0,n.kt)("li",{parentName:"ul"},"npm config get proxy"))))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker run -p 3030:3030 -v $PWD/.cubestore:/cube/data cubejs/cubestore\n\n# \u4f7f\u7528 cubestore\n# CUBEJS_EXT_DB_TYPE=cubestore\n# CUBEJS_EXT_DB_HOST=127.0.0.1\ndocker run -p 4000:4000 \\\n  -e CUBEJS_CUBESTORE_HOST=localhost \\\n  -v ${PWD}:/cube/conf \\\n  cubejs/cube\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"env"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"router"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"worker"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"CUBESTORE_SERVER_NAME"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"CUBESTORE_META_PORT"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"CUBESTORE_WORKERS"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"CUBESTORE_WORKER_PORT"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"CUBESTORE_META_ADDR"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Yes")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-ini",metastring:'title="router,env"',title:'"router,env"'}),"CUBESTORE_SERVER_NAME=cubestore_router:9999\nCUBESTORE_META_PORT=9999\nCUBESTORE_WORKERS=cubestore_worker_1:9001,cubestore_worker_2:9001\nCUBESTORE_REMOTE_DIR=/cube/data\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-ini",metastring:'title="worker.env"',title:'"worker.env"'}),"CUBESTORE_SERVER_NAME=cubestore_worker_1:9001\nCUBESTORE_WORKER_PORT=9001\nCUBESTORE_META_ADDR=cubestore_router:9999\nCUBESTORE_WORKERS=cubestore_worker_1:9001,cubestore_worker_2:9001\nCUBESTORE_REMOTE_DIR=/cube/data\n")))}O.isMDXComponent=!0}}]);