"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92562],{28703:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(96600),a=t(27279),i=(t(59496),t(3905)),o=["components"],l={title:"ERD"},c=void 0,u={unversionedId:"languages/diagram/erd",id:"languages/diagram/erd",title:"ERD",description:"- BurntSushi/erd",source:"@site/notes/languages/diagram/erd.md",sourceDirName:"languages/diagram",slug:"/languages/diagram/erd",permalink:"/notes/languages/diagram/erd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/diagram/erd.md",tags:[],version:"current",frontMatter:{title:"ERD"},sidebar:"docs",previous:{title:"Diagram Awesome",permalink:"/notes/languages/diagram/diagram-awesome"},next:{title:"kroki",permalink:"/notes/languages/diagram/kroki"}},s={},p=[],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/erd"},"BurntSushi/erd"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 graphviz \u751f\u6210"))),(0,i.kt)("li",{parentName:"ul"},"\u5c5e\u6027 - label, bgcolor, size, color, font, border, border-color"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u4fee\u9970",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u4e3b\u952e\uff0c\u4e0b\u5212\u7ebf"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," \u5916\u952e\uff0c\u659c\u4f53")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-erd"},'# \u5b9e\u4f53\u9ed8\u8ba4\nentity {bgcolor: "#ececfc", size: "20"}\n# \u6807\u9898\ntitle {label: "nfldb Entity-Relationship diagram (condensed)", size: "20"}\n\n# \u5b9e\u4f53 - \u4e4b\u540e\u4e3a\u5b9e\u4f53\u5c5e\u6027\n# \u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027\n[Person] {bgcolor: "#ececfc", size: "20"}\n# \u4e3b\u952e\n*name\nheight\n# label \u53ef\u5b9e\u73b0\u7c7b\u4f3c \u7c7b\u578b\nweight { label: "int" }\n`birth date`\n+birth_place_id\n\n# \u652f\u6301\u5f15\u53f7\n[`Birth Place`]\n*id\n`birth city`\n\'birth state\'\n"birth country"\n\n\n# \u5173\u8054\u5173\u7cfb\n#\n# Cardinality    Syntax\n# 0 or 1         ?\n# exactly 1      1\n# 0 or more      *\n# 1 or more      +\n# \u652f\u6301\u81ea\u5b9a\u4e49 label\nPerson *--1 `Birth Place` {label: "home"}\n')))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);