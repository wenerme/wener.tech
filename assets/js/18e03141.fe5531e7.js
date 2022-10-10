"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46184],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),g=o,m=f["".concat(i,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97197:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return d}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const f={title:"Concurrent"},g="Go Concurrent",m={unversionedId:"languages/go/go-concurrent",id:"languages/go/go-concurrent",title:"Concurrent",description:"- sync",source:"@site/../notes/languages/go/go-concurrent.md",sourceDirName:"languages/go",slug:"/languages/go/concurrent",permalink:"/notes/languages/go/concurrent",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-concurrent.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1643905121,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"Concurrent"},sidebar:"docs",previous:{title:"CGO",permalink:"/notes/languages/go/cgo"},next:{title:"Go Cookbook",permalink:"/notes/languages/go/cookbook"}},y={},d=[],b={toc:d};function O(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),p),a(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"go-concurrent"}),"Go Concurrent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://pkg.go.dev/sync"}),"sync")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://pkg.go.dev/golang.org/x/sync"}),"golang.org/x/sync"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"errgroup"),(0,n.kt)("li",{parentName:"ul"},"semaphore"),(0,n.kt)("li",{parentName:"ul"},"singleflight"),(0,n.kt)("li",{parentName:"ul"},"syncmap"))),(0,n.kt)("li",{parentName:"ul"},"distributed",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/bsm/redislock"}),"bsm/redislock"))))))}O.isMDXComponent=!0}}]);