"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76325],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39928:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const d={title:"ERD"},m="ERD",f={unversionedId:"languages/diagram/erd",id:"languages/diagram/erd",title:"ERD",description:"- BurntSushi/erd",source:"@site/../notes/languages/diagram/erd.md",sourceDirName:"languages/diagram",slug:"/languages/diagram/erd",permalink:"/notes/languages/diagram/erd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/diagram/erd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628424047,formattedLastUpdatedAt:"Aug 8, 2021",frontMatter:{title:"ERD"},sidebar:"docs",previous:{title:"Diagram Awesome",permalink:"/notes/languages/diagram/diagram-awesome"},next:{title:"kroki",permalink:"/notes/languages/diagram/kroki"}},g={},b=[],y={toc:b};function O(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"erd"}),"ERD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/BurntSushi/erd"}),"BurntSushi/erd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 graphviz \u751f\u6210"))),(0,n.kt)("li",{parentName:"ul"},"\u5c5e\u6027 - label, bgcolor, size, color, font, border, border-color"),(0,n.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u4fee\u9970",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"*")," \u4e3b\u952e\uff0c\u4e0b\u5212\u7ebf"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," \u5916\u952e\uff0c\u659c\u4f53")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-erd"}),'# \u5b9e\u4f53\u9ed8\u8ba4\nentity {bgcolor: "#ececfc", size: "20"}\n# \u6807\u9898\ntitle {label: "nfldb Entity-Relationship diagram (condensed)", size: "20"}\n\n# \u5b9e\u4f53 - \u4e4b\u540e\u4e3a\u5b9e\u4f53\u5c5e\u6027\n# \u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027\n[Person] {bgcolor: "#ececfc", size: "20"}\n# \u4e3b\u952e\n*name\nheight\n# label \u53ef\u5b9e\u73b0\u7c7b\u4f3c \u7c7b\u578b\nweight { label: "int" }\n`birth date`\n+birth_place_id\n\n# \u652f\u6301\u5f15\u53f7\n[`Birth Place`]\n*id\n`birth city`\n\'birth state\'\n"birth country"\n\n\n# \u5173\u8054\u5173\u7cfb\n#\n# Cardinality    Syntax\n# 0 or 1         ?\n# exactly 1      1\n# 0 or more      *\n# 1 or more      +\n# \u652f\u6301\u81ea\u5b9a\u4e49 label\nPerson *--1 `Birth Place` {label: "home"}\n')))}O.isMDXComponent=!0}}]);