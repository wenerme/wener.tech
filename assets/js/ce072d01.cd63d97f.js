"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76325],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),o=["components"],l={title:"ERD"},c="ERD",u={unversionedId:"languages/diagram/erd",id:"languages/diagram/erd",title:"ERD",description:"- BurntSushi/erd",source:"@site/../notes/languages/diagram/erd.md",sourceDirName:"languages/diagram",slug:"/languages/diagram/erd",permalink:"/notes/languages/diagram/erd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/diagram/erd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ERD"},sidebar:"docs",previous:{title:"Diagram Awesome",permalink:"/notes/languages/diagram/diagram-awesome"},next:{title:"kroki",permalink:"/notes/languages/diagram/kroki"}},s={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"erd"},"ERD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/erd"},"BurntSushi/erd"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 graphviz \u751f\u6210"))),(0,i.kt)("li",{parentName:"ul"},"\u5c5e\u6027 - label, bgcolor, size, color, font, border, border-color"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u4fee\u9970",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u4e3b\u952e\uff0c\u4e0b\u5212\u7ebf"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," \u5916\u952e\uff0c\u659c\u4f53")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-erd"},'# \u5b9e\u4f53\u9ed8\u8ba4\nentity {bgcolor: "#ececfc", size: "20"}\n# \u6807\u9898\ntitle {label: "nfldb Entity-Relationship diagram (condensed)", size: "20"}\n\n# \u5b9e\u4f53 - \u4e4b\u540e\u4e3a\u5b9e\u4f53\u5c5e\u6027\n# \u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027\n[Person] {bgcolor: "#ececfc", size: "20"}\n# \u4e3b\u952e\n*name\nheight\n# label \u53ef\u5b9e\u73b0\u7c7b\u4f3c \u7c7b\u578b\nweight { label: "int" }\n`birth date`\n+birth_place_id\n\n# \u652f\u6301\u5f15\u53f7\n[`Birth Place`]\n*id\n`birth city`\n\'birth state\'\n"birth country"\n\n\n# \u5173\u8054\u5173\u7cfb\n#\n# Cardinality    Syntax\n# 0 or 1         ?\n# exactly 1      1\n# 0 or more      *\n# 1 or more      +\n# \u652f\u6301\u81ea\u5b9a\u4e49 label\nPerson *--1 `Birth Place` {label: "home"}\n')))}m.isMDXComponent=!0}}]);