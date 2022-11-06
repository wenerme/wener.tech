"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86193],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,y=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26359:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={title:"\u8bbe\u8ba1\u6a21\u5f0f"},d="\u8bbe\u8ba1\u6a21\u5f0f",y={unversionedId:"dev/theory/design-pattern",id:"dev/theory/design-pattern",title:"\u8bbe\u8ba1\u6a21\u5f0f",description:"\u7f51\u7edc",source:"@site/../notes/dev/theory/design-pattern.md",sourceDirName:"dev/theory",slug:"/dev/theory/design-pattern",permalink:"/notes/dev/theory/design-pattern",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/theory/design-pattern.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1618644387,formattedLastUpdatedAt:"Apr 17, 2021",frontMatter:{title:"\u8bbe\u8ba1\u6a21\u5f0f"},sidebar:"docs",previous:{title:"CSP",permalink:"/notes/dev/theory/csp"},next:{title:"Durable Function",permalink:"/notes/dev/theory/durable-function"}},m={},v=[{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"\u5e76\u53d1",id:"\u5e76\u53d1",level:2},{value:"\u5206\u5e03\u5f0f",id:"\u5206\u5e03\u5f0f",level:2}],b={toc:v};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"\u8bbe\u8ba1\u6a21\u5f0f"}),"\u8bbe\u8ba1\u6a21\u5f0f"),(0,n.kt)("h2",s({},{id:"\u7f51\u7edc"}),"\u7f51\u7edc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Control plane & Data plane"),(0,n.kt)("li",{parentName:"ul"},"First path vs Fast path"),(0,n.kt)("li",{parentName:"ul"},"Slow path vs Fast path"),(0,n.kt)("li",{parentName:"ul"},"Queue based design"),(0,n.kt)("li",{parentName:"ul"},"Pipeline"),(0,n.kt)("li",{parentName:"ul"},"Finite State Machine"),(0,n.kt)("li",{parentName:"ul"},"Watchdog")),(0,n.kt)("h2",s({},{id:"\u5e76\u53d1"}),"\u5e76\u53d1"),(0,n.kt)("h2",s({},{id:"\u5206\u5e03\u5f0f"}),"\u5206\u5e03\u5f0f"))}O.isMDXComponent=!0}}]);