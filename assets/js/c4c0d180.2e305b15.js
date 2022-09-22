"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76102],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(r),s=a,f=m["".concat(i,".").concat(s)]||m[s]||c[s]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57950:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],p={title:"Drag & Drop"},i="Drag & Drop",d={unversionedId:"web/spec/dnd",id:"web/spec/dnd",title:"Drag & Drop",description:"- HTML Drag and Drop API",source:"@site/../notes/web/spec/dnd.md",sourceDirName:"web/spec",slug:"/web/spec/dnd",permalink:"/notes/web/spec/dnd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/spec/dnd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Drag & Drop"},sidebar:"docs",previous:{title:"URLPattern",permalink:"/notes/web/spec/URLPattern"},next:{title:"ECMAScript Version",permalink:"/notes/web/spec/ecmascript-version"}},u={},c=[],m={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"drag--drop"},"Drag & Drop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API"},"HTML Drag and Drop API"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"event"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drag"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62d6\u52a8\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragend"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62d6\u52a8\u7ed3\u675f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragenter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62d6\u52a8\u5143\u7d20\u8fdb\u5165 \u53ef drop \u533a\u57df")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragleave"),(0,l.kt)("td",{parentName:"tr",align:null},"\u79bb\u5f00 drop \u76ee\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragover"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragstart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u59cb\u62d6\u52a8\u4e00\u4e2a\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drop"),(0,l.kt)("td",{parentName:"tr",align:null},"drop \u5143\u7d20")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e86 ondragover, ondrop \u8868\u793a\u4e3a\u53ef drop \u533a\u57df"),(0,l.kt)("li",{parentName:"ul"},"drop \u4e4b\u524d\uff0c dragstart\u3001dragover \u65f6\u662f\u65e0\u6cd5\u8bbf\u95ee\u6587\u4ef6"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e.dataTransfer.types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Files - \u8868\u793a\u4e3a\u6587\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"e.dataTransfer.dropEffect",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"copy"),(0,l.kt)("li",{parentName:"ul"},"move"),(0,l.kt)("li",{parentName:"ul"},"link"),(0,l.kt)("li",{parentName:"ul"},"none - \u7981\u6b62 drop")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function onDragStart(ev) {\n  // \u9650\u5b9a\n  ev.dataTransfer.setData('application/my-app', ev.target.id);\n  ev.dataTransfer.effectAllowed = 'move';\n\n  // \u68c0\u6d4b\u6587\u4ef6\n  const isFiles = ev.dataTransfer.types.indexOf('Files') >= 0;\n}\n")))}s.isMDXComponent=!0}}]);