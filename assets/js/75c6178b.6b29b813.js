"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22861],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71306:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return h}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&l(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&l(e,r,t[r]);return e};const f={title:"ssh-audit"},d="ssh-audit",m={unversionedId:"security/ssh-audit",id:"security/ssh-audit",title:"ssh-audit",description:"- jtesta/ssh-audit",source:"@site/../notes/security/ssh-audit.md",sourceDirName:"security",slug:"/security/ssh-audit",permalink:"/notes/security/ssh-audit",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/ssh-audit.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1623313312,formattedLastUpdatedAt:"Jun 10, 2021",frontMatter:{title:"ssh-audit"},sidebar:"docs",previous:{title:"smallstep",permalink:"/notes/security/smallstep"},next:{title:"TLS",permalink:"/notes/security/tls"}},y={},h=[],b={toc:h};function O(e){var t,r=e,{components:a}=r,l=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),l),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"ssh-audit"}),"ssh-audit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/jtesta/ssh-audit"}),"jtesta/ssh-audit"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.ssh-audit.com/"}),"ssh-audit.com")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://www.ssh-audit.com/hardening_guides.html"}),"SSH Hardening Guides"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"brew install ssh-audit\n\ndocker run -it -p 2222:2222 positronsecurity/ssh-audit 10.1.1.1\n")))}O.isMDXComponent=!0}}]);