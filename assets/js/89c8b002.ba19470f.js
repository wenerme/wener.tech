"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81356],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56476:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),i=["components"],l={title:"Jotai"},u="Jotai",p={unversionedId:"web/react/jotai",id:"web/react/jotai",title:"Jotai",description:"- pmndrs/jotai \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/web/react/jotai.md",sourceDirName:"web/react",slug:"/web/react/jotai",permalink:"/notes/web/react/jotai",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/react/jotai.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Jotai"},sidebar:"docs",previous:{title:"history",permalink:"/notes/web/react/history"},next:{title:"preact",permalink:"/notes/web/react/preact"}},c={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jotai"},"Jotai"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/jotai"},"pmndrs/jotai")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"8.5kB/3.3kB"),(0,o.kt)("li",{parentName:"ul"},"\u5927\u72b6\u6001\u62c6\u5206\u5c0f(\u539f\u5b50/atom)\u72b6\u6001 - \u539f\u5b50\u72b6\u6001\u66f4\u5229\u4e8e\u590d\u7528\u548c\u51cf\u5c0f\u53d8\u5316\u5f71\u54cd\u8303\u56f4"),(0,o.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u63a5\u53e3 atom, Provider, useAtom",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"jotai/utils \u5305\u542b\u5176\u4ed6\u5de5\u5177 atom"),(0,o.kt)("li",{parentName:"ul"},"jotai/\u96c6\u6210 \u5305\u542b\u4e0e\u5176\u4ed6\u5e93\u96c6\u6210\u7684\u903b\u8f91 - zustand, xstate, react-query, redux, immer, valtio"),(0,o.kt)("li",{parentName:"ul"},"jotai/devtools - Redux devtool \u96c6\u6210 - ",(0,o.kt)("inlineCode",{parentName:"li"},"useAtomDevtools(tasksAtom)")," - \u4f9d\u8d56 debugLabel"))),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c Recoli \u4f46\u4f7f\u7528\u4e0a\u66f4\u7b80\u5355"),(0,o.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 ",(0,o.kt)("inlineCode",{parentName:"li"},"useState"),"+",(0,o.kt)("inlineCode",{parentName:"li"},"useContext")),(0,o.kt)("li",{parentName:"ul"},"Suspense"),(0,o.kt)("li",{parentName:"ul"},"vs Recoil",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"jotai: \u6700\u5c0f\u5316\u63a5\u53e3, \u4e0d\u4f7f\u7528\u5b57\u7b26\u4e32\u6807\u8bc6, TypeScript",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Jotai advantages over Recoil ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/jotai/issues/420"},"#420")))),(0,o.kt)("li",{parentName:"ul"},"recoil: string key, \u5e8f\u5217\u5316\u652f\u6301\u66f4\u597d"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/jotai/blob/master/docs/introduction/comparison.md"},"vs zustand"))))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"jotai \u63d0\u4f9b\u539f\u5b50\u80fd\u529b\uff0c\u53ef\u4ee5\u4e0e\u73b0\u6709\u72b6\u6001\u7ba1\u7406\u96c6\u6210\u4f7f\u7528 - ",(0,o.kt)("a",{parentName:"li",href:"/notes/web/react/zustand"},"zustand"),", ",(0,o.kt)("a",{parentName:"li",href:"/notes/web/react/valtio"},"valtio"),", xstate, redux, ",(0,o.kt)("a",{parentName:"li",href:"/notes/service/api/urql"},"urql")),(0,o.kt)("li",{parentName:"ul"},"\u72b6\u6001\u62c6\u5206 splitAtom, selectAtom, focusAtom ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/akheron/optics-ts"},"optics-ts")," 9kB/3kB"))))}f.isMDXComponent=!0}}]);