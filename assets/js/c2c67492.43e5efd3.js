"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56154],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66052:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const f={title:"chi"},m="chi",g={unversionedId:"languages/go/lib/chi",id:"languages/go/lib/chi",title:"chi",description:"- go-chi/chi",source:"@site/../notes/languages/go/lib/chi.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/chi",permalink:"/notes/languages/go/lib/chi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/chi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656388638,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{title:"chi"},sidebar:"docs",previous:{title:"bluge",permalink:"/notes/languages/go/lib/bluge"},next:{title:"colly",permalink:"/notes/languages/go/lib/colly"}},b={},d=[],y={toc:d};function h(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"chi"}),"chi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/go-chi/chi"}),"go-chi/chi"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u65b9\u6cd5\u66f4\u9002\u5408\u7528\u4e8e REST \u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3 < 1000 LOC"),(0,n.kt)("li",{parentName:"ul"},"0 \u5916\u90e8\u4f9d\u8d56 - \u81ea\u5df1\u5b9e\u73b0 pattern \u5339\u914d\u903b\u8f91",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Patricia Radix trie - \u6027\u80fd\u4f18\u4e8e\u904d\u5386")))))),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u989d\u5916\u7684 HTTP \u65b9\u6cd5\u9700\u8981\u5148\u63d0\u524d\u6ce8\u518c,\u5426\u5219\u4e0d\u4f1a\u8def\u7531",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chi.RegisterMethod"))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-go"}),'// \u901a\u914d \u6240\u6709\nr.Method("GET","/admin/*", func(w,r){\n  // \u83b7\u53d6\u901a\u914d\u53c2\u6570\n  chi.URLParam(r, "*")\n})\n')))}h.isMDXComponent=!0}}]);