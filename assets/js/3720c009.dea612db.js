"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4492],{73892:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var a=r(96651),l=r(66548),n=r(82436),c=r(86691),o=r(42396),s=r(58524),i=r(95044),m=r(97392),u=Object.defineProperty,g=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))E.call(t,r)&&y(e,r,t[r]);return e},d=(e,t)=>g(e,p(t));function v({title:e}){return a.createElement(a.Fragment,null,a.createElement(n.U7,{title:e}),a.createElement(i.c,{tag:"doc_tags_list"}))}function O({tags:e,title:t}){return a.createElement(n.cr,{className:(0,l.c)(c.W.page.docsTagsListPage)},a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement(m.c,{as:"h1"},t),a.createElement(s.c,{tags:e})))))}function w(e){const t=(0,o.K)();return a.createElement(a.Fragment,null,a.createElement(v,d(h({},e),{title:t})),a.createElement(O,d(h({},e),{title:t})))}},58348:(e,t,r)=>{r.d(t,{c:()=>o});var a=r(96651),l=r(66548),n=r(58360);const c={tag:"tag_Wl4t",tagRegular:"tagRegular_PqGq",tagWithCount:"tagWithCount_hvEF"};function o({permalink:e,label:t,count:r}){return a.createElement(n.c,{href:e,className:(0,l.c)(c.tag,r?c.tagWithCount:c.tagRegular)},t,r&&a.createElement("span",null,r))}},58524:(e,t,r)=>{r.d(t,{c:()=>f});var a=r(96651),l=r(42396),n=r(58348),c=r(97392);const o={tag:"tag_j69K"};var s=Object.defineProperty,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&g(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&g(e,r,t[r]);return e};function b({letterEntry:e}){return a.createElement("article",null,a.createElement(c.c,{as:"h2",id:e.letter},e.letter),a.createElement("ul",{className:"padding--none"},e.tags.map((e=>a.createElement("li",{key:e.permalink,className:o.tag},a.createElement(n.c,p({},e)))))),a.createElement("hr",null))}function f({tags:e}){const t=(0,l.M)(e);return a.createElement("section",{className:"margin-vert--lg"},t.map((e=>a.createElement(b,{key:e.letter,letterEntry:e}))))}},42396:(e,t,r)=>{r.d(t,{K:()=>l,M:()=>n});var a=r(44816);const l=()=>(0,a.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);null!=t[r]||(t[r]=[]),t[r].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}}}]);