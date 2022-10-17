"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2153],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,w=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(w,l(l({ref:t},p),{},{components:n})):r.createElement(w,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return m},metadata:function(){return w},toc:function(){return b}});var r=n(49613),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e};const m={title:"CSS Unit"},f="CSS Unit",w={unversionedId:"web/style/css-unit",id:"web/style/css-unit",title:"CSS Unit",description:"- container query - https://www.w3.org/TR/css-contain-3/#container-lengths",source:"@site/../notes/web/style/css-unit.md",sourceDirName:"web/style",slug:"/web/style/css-unit",permalink:"/notes/web/style/css-unit",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/style/css-unit.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666003394,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"CSS Unit"},sidebar:"docs",previous:{title:"CSS Selector",permalink:"/notes/web/style/css-selector"},next:{title:"CSS",permalink:"/notes/web/style/css"}},d={},b=[],y={toc:b};function k(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"css-unit"}),"CSS Unit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"container query - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.w3.org/TR/css-contain-3/#container-lengths"}),"https://www.w3.org/TR/css-contain-3/#container-lengths"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cq{w,h}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e9\u671f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"q{w,h}")))),(0,r.kt)("li",{parentName:"ul"},"cqi - inline size"),(0,r.kt)("li",{parentName:"ul"},"cqb - block size"),(0,r.kt)("li",{parentName:"ul"},"cqmin - ",(0,r.kt)("inlineCode",{parentName:"li"},"min(cqi,cqb)")),(0,r.kt)("li",{parentName:"ul"},"cqmax - ",(0,r.kt)("inlineCode",{parentName:"li"},"max(cqi,cqb)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://drafts.csswg.org/css-values-4/#viewport-relative-lengths"}),"CSS Values and Units Level 4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dv{w,h}")," - Large Viewport Units"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lv{w,h}")," - Small Viewport Units"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sv{w,h}")," - Dynamic Viewport Units"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.w3.org/TR/css-writing-modes-4"}),"https://www.w3.org/TR/css-writing-modes-4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"writing modes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6c34\u5e73\u548c\u5782\u76f4\uff0c\u5f71\u54cd block \u548c inline \u5224\u5b9a"))),(0,r.kt)("li",{parentName:"ul"},"block size, logical height",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"physical height, vertical dimension"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a block \u90fd\u662f\u5360\u6574\u884c\uff0c\u6240\u4ee5 block size \u662f\u6307\u4ee3 \u9ad8"))),(0,r.kt)("li",{parentName:"ul"},"inline size, logical width",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"physical width - horizontal dimension")))))))}k.isMDXComponent=!0}}]);