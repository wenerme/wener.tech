"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58688],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,g=f["".concat(p,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25761:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return h},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const g={title:"grpc-gateway"},y="grpc-gateway",m={unversionedId:"service/api/grpc/grpc-gateway",id:"service/api/grpc/grpc-gateway",title:"grpc-gateway",description:"- \u6ce8\u610f\u4f18\u5148\u7ea7\u987a\u5e8f",source:"@site/../notes/service/api/grpc/grpc-gateway.md",sourceDirName:"service/api/grpc",slug:"/service/api/grpc/gateway",permalink:"/notes/service/api/grpc/gateway",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/grpc/grpc-gateway.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677222278,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"grpc-gateway"},sidebar:"docs",previous:{title:"gRPC FAQ",permalink:"/notes/service/api/grpc/faq"},next:{title:"gRPC Go",permalink:"/notes/service/api/grpc/go"}},v={},b=[{value:"optional field not allowed in field path",id:"optional-field-not-allowed-in-field-path",level:2}],w={toc:b},O="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,s(f(f({},w),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"grpc-gateway"}),"grpc-gateway"),(0,n.kt)("admonition",f({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u4f18\u5148\u7ea7\u987a\u5e8f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/v1/categories/{id} \u5e94\u8be5\u5b9a\u4e49\u5728 /v1/categories/search \u4e4b\u524d"))))),(0,n.kt)("h1",f({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",f({},{id:"optional-field-not-allowed-in-field-path"}),"optional field not allowed in field path"),(0,n.kt)("p",null,"\u7528\u4e8e path \u7684\u5b57\u6bb5\u4e0d\u53ef\u4ee5\u662f optional"))}h.isMDXComponent=!0}}]);