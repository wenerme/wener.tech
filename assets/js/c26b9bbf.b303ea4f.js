"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36145],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),v=a,m=f["".concat(c,".").concat(v)]||f[v]||u[v]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54241:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return v},default:function(){return O},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e};const f={id:"servlet",title:"Servlet"},v="Servlet",m={unversionedId:"java/spec/servlet",id:"java/spec/servlet",title:"Servlet",description:"Tips",source:"@site/../notes/java/spec/servlet.md",sourceDirName:"java/spec",slug:"/java/spec/servlet",permalink:"/notes/java/spec/servlet",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spec/servlet.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"servlet",title:"Servlet"},sidebar:"docs",previous:{title:"Maven",permalink:"/notes/java/maven"},next:{title:"Spring",permalink:"/notes/java/spring/"}},d={},y=[{value:"Tips",id:"tips",level:2}],b={toc:y};function O(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"servlet"}),"Servlet"),(0,n.kt)("h2",u({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Good old tech",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e60\u60ef\u4e86 Spring \u7684\u5f00\u53d1\u8005\u8bf4\u4e0d\u5b9a\u90fd\u4e0d\u61c2 Servlet\uff0c\u56e0\u4e3a\u6ca1\u5fc5\u8981")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u7528\u7684\u7ed3\u6784")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"my-web\n  src\n    main\n      java\n      resources\n        webapp - \u9759\u6001 - \u542f\u52a8\u65f6\u5019\u9700\u8981\u914d\u7f6e\u8def\u5f84\n          WEB-INF\n            web.xml - servlet \u914d\u7f6e\n            index.html\n")))}O.isMDXComponent=!0}}]);