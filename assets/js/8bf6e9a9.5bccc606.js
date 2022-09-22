"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75392],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),g=a,f=s["".concat(u,".").concat(g)]||s[g]||m[g]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},51583:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"\u805a\u5408"},u="\u805a\u5408",p={unversionedId:"db/theory/aggregate",id:"db/theory/aggregate",title:"\u805a\u5408",description:"\u5c06\u6240\u6709\u6570\u636e\u5904\u7406\u4e3a\u4e00\u4e2a\u6570\u636e\u7684\u8fc7\u7a0b\u3002",source:"@site/../notes/db/theory/aggregate.md",sourceDirName:"db/theory",slug:"/db/theory/aggregate",permalink:"/notes/db/theory/aggregate",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/theory/aggregate.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641222557,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{title:"\u805a\u5408"},sidebar:"docs",previous:{title:"sonic",permalink:"/notes/db/search/sonic"},next:{title:"ulid",permalink:"/notes/db/ulid"}},c={},m=[],s={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u805a\u5408"},"\u805a\u5408"),(0,i.kt)("p",null,"\u5c06\u6240\u6709\u6570\u636e\u5904\u7406\u4e3a\u4e00\u4e2a\u6570\u636e\u7684\u8fc7\u7a0b\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u805a\u5408\u51fd\u6570 - ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Aggregate_function"},"Aggregate function"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"avg"),(0,i.kt)("li",{parentName:"ul"},"count"),(0,i.kt)("li",{parentName:"ul"},"max"),(0,i.kt)("li",{parentName:"ul"},"mean"),(0,i.kt)("li",{parentName:"ul"},"min"),(0,i.kt)("li",{parentName:"ul"},"mode"),(0,i.kt)("li",{parentName:"ul"},"range"),(0,i.kt)("li",{parentName:"ul"},"sum"),(0,i.kt)("li",{parentName:"ul"},"NanMean - mean ignore NaN"),(0,i.kt)("li",{parentName:"ul"},"stddev"))),(0,i.kt)("li",{parentName:"ul"},"\u805a\u5408\u6570\u636e - ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Aggregate_data"},"Aggregate data"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u89c6\u56fe"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Aggregate_(data_warehouse)"},"OLAP Aggregate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e\u7684 rollup \u8fc7\u7a0b")))))}g.isMDXComponent=!0}}]);