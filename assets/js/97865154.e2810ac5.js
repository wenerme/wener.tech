"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68619],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=l,y=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20825:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return b}});var n=r(49613),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e};const m={title:"colly"},f="colly",y={unversionedId:"languages/go/lib/colly",id:"languages/go/lib/colly",title:"colly",description:"- gocolly/colly",source:"@site/../notes/languages/go/lib/colly.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/colly",permalink:"/notes/languages/go/lib/colly",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/colly.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1649946978,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"colly"},sidebar:"docs",previous:{title:"chi",permalink:"/notes/languages/go/lib/chi"},next:{title:"entgo",permalink:"/notes/languages/go/lib/ent"}},g={},b=[{value:"Notes",id:"notes",level:2}],d={toc:b};function O(e){var t,r=e,{components:l}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},d),p),a(t,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"colly"}),"colly"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/gocolly/colly"}),"gocolly/colly"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"),(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5355\u8f7b\u91cf\u7684\u722c\u866b")))),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 cache \u63d2\u4ef6\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 httpcache"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528 dircache",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u591a\u4e86\u8fc7\u540e fs \u8bbf\u95ee\u4f1a\u5f88\u6162 - \u5efa\u8bae sqlite - \u9002\u5408\u5c0f\u6587\u4ef6\u5f88\u591a\u7684\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7684\u6570\u636e\u5305\u542b\u7684\u4fe1\u606f\u597d - \u4e0d\u597d\u5206\u6790\u5220\u9664"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u53c2\u8003 - 20w \u6587\u4ef6\uff0czfs\uff0c\u8bfb\u53d6\u4e00\u4e2a\u6587\u4ef6\u5e73\u5747 ~20ms - \u6ce2\u52a8\u5f88\u5927"))))),(0,n.kt)("h2",s({},{id:"notes"}),"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cache",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8def\u5f84 hex(sha1(url))"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5bb9 gob.NewDecoder(file).Decode(resp)"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Rename \u786e\u4fdd\u539f\u5b50\u5199\u5165"))),(0,n.kt)("li",{parentName:"ul"},"\u56de\u8c03 - 6\u79cd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OnRequest"),(0,n.kt)("li",{parentName:"ul"},"OnError"),(0,n.kt)("li",{parentName:"ul"},"OnResponse"),(0,n.kt)("li",{parentName:"ul"},"OnHTML",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OnError"))),(0,n.kt)("li",{parentName:"ul"},"OnXML",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OnError"))),(0,n.kt)("li",{parentName:"ul"},"OnScraped")))))}O.isMDXComponent=!0}}]);