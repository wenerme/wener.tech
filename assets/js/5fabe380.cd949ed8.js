"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46307],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),f=a,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(g,u(u({ref:t},p),{},{components:r})):n.createElement(g,u({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50632:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>o(e,u(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const g={title:"mapstructure"},b="mapstructure",y={unversionedId:"languages/go/lib/mapstructure",id:"languages/go/lib/mapstructure",title:"mapstructure",description:"- mitchellh/mapstructure",source:"@site/../notes/languages/go/lib/mapstructure.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/mapstructure",permalink:"/notes/languages/go/lib/mapstructure",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/mapstructure.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1654595483,formattedLastUpdatedAt:"Jun 7, 2022",frontMatter:{title:"mapstructure"},sidebar:"docs",previous:{title:"machinery",permalink:"/notes/languages/go/lib/machinery"},next:{title:"migrate",permalink:"/notes/languages/go/lib/migrate"}},d={},O=[],v={toc:O},h="wrapper";function w(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,m(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"mapstructure"}),"mapstructure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/mitchellh/mapstructure"}),"mitchellh/mapstructure"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u6620\u5c04")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-go"}),'type Person struct {\n  Family    `mapstructure:",squash"` // embed\n  Location  `mapstructure:",squash"`\n  Pref      `mapstructure:",omitempty"`\n  FirstName string\n  Other map[string]interface{} `mapstructure:",remain"` // \u5176\u4ed6\u5269\u4f59\n}\n')))}w.isMDXComponent=!0}}]);