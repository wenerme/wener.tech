"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77584],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,b=s["".concat(p,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47105:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return P},frontMatter:function(){return b},metadata:function(){return w},toc:function(){return O}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&l(e,r,t[r]);return e},f=(e,t)=>a(e,c(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={title:"ReactPDF"},m="ReactPDF",w={unversionedId:"web/react/react-pdf",id:"web/react/react-pdf",title:"ReactPDF",description:'The "windows-1252" encoding is not supported',source:"@site/../notes/web/react/react-pdf.md",sourceDirName:"web/react",slug:"/web/react/pdf",permalink:"/notes/web/react/pdf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/react-pdf.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"ReactPDF"},sidebar:"docs",previous:{title:"React Patterns",permalink:"/notes/web/react/patterns"},next:{title:"React Practice",permalink:"/notes/web/react/practice"}},y={},O=[{value:"The &quot;windows-1252&quot; encoding is not supported",id:"the-windows-1252-encoding-is-not-supported",level:2}],g={toc:O},v="wrapper";function P(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(v,f(s(s({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"reactpdf"}),"ReactPDF"),(0,n.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",s({},{id:"the-windows-1252-encoding-is-not-supported"}),'The "windows-1252" encoding is not supported'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fontkit")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-js"}),"new TextDecoder('ascii');\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),'RangeError [ERR_ENCODING_NOT_SUPPORTED]: The "windows-1252" encoding is not supported\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"fix")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"apk add icu-data-full\n")))}P.isMDXComponent=!0}}]);