"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58920],{49613:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return r?n.createElement(d,o(o({ref:t},f),{},{components:r})):n.createElement(d,o({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90606:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return b}});var n=r(49613),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&f(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&f(e,r,t[r]);return e};const p={tags:["Utility"]},m="find",d={unversionedId:"os/linux/shell/find",id:"os/linux/shell/find",title:"find",description:"- find.1",source:"@site/../notes/os/linux/shell/find.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/find",permalink:"/notes/os/linux/shell/find",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/find.md",tags:[{label:"Utility",permalink:"/notes/tags/utility"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{tags:["Utility"]},sidebar:"docs",previous:{title:"expect",permalink:"/notes/os/linux/shell/expect"},next:{title:"lsof",permalink:"/notes/os/linux/shell/lsof"}},y={},b=[],h={toc:b};function O(e){var t,r=e,{components:i}=r,f=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},h),f),l(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"find"}),"find"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://man7.org/linux/man-pages/man1/find.1.html"}),"find.1")),(0,n.kt)("li",{parentName:"ul"},"regex",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u8981\u5168\u90e8\u5339\u914d"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684 regex \u662f\u5f88 emacs flavor - \u5f88\u591a\u8f6c\u4e49"),(0,n.kt)("li",{parentName:"ul"},"gnu \u7684 find \u53ef\u4ee5\u6539 -regextype \u4e3a sed,posix-egrep"))),(0,n.kt)("li",{parentName:"ul"},"newer??",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"a \u2013 The access time of the file reference"),(0,n.kt)("li",{parentName:"ul"},"B \u2013 The birth time of the file reference"),(0,n.kt)("li",{parentName:"ul"},"c \u2013 The inode status change time of reference"),(0,n.kt)("li",{parentName:"ul"},"m \u2013 The modification time of the file reference"),(0,n.kt)("li",{parentName:"ul"},"t \u2013 reference is interpreted directly as a time")))))}O.isMDXComponent=!0}}]);