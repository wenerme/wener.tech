"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73843],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,b=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94790:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const b={tags:["Awesome"]},d="Nats Awesome",y={unversionedId:"queue/nats/nats-awesome",id:"queue/nats/nats-awesome",title:"Nats Awesome",description:"- maxpert/marmot",source:"@site/../notes/queue/nats/nats-awesome.md",sourceDirName:"queue/nats",slug:"/queue/nats/awesome",permalink:"/notes/queue/nats/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nats-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{tags:["Awesome"]},sidebar:"docs",previous:{title:"Auth",permalink:"/notes/queue/nats/auth"},next:{title:"nats",permalink:"/notes/queue/nats/cli"}},w={},O=[],v={toc:O},g="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,m(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"nats-awesome"}),"Nats Awesome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/maxpert/marmot"}),"maxpert/marmot"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Go"),(0,n.kt)("li",{parentName:"ul"},"SQLite replicator built on top of NATS"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/voxoco/nqlite"}),"voxoco/nqlite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Typescript"),(0,n.kt)("li",{parentName:"ul"},"lightweight, relational database using SQLite and NATS JetStream"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/mprimi/nasefa"}),"mprimi/nasefa"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Go"),(0,n.kt)("li",{parentName:"ul"},"Send/Recv file over NATS")))))}h.isMDXComponent=!0}}]);