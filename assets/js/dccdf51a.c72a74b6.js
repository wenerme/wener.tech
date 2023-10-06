"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31874],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12046:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return d},metadata:function(){return w},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={title:"Camunda"},b="Camunda",w={unversionedId:"service/workflow/bpms/camunda",id:"service/workflow/bpms/camunda",title:"Camunda",description:"- camunda/camunda-bpm-platform",source:"@site/../notes/service/workflow/bpms/camunda.md",sourceDirName:"service/workflow/bpms",slug:"/service/workflow/bpms/camunda",permalink:"/notes/service/workflow/bpms/camunda",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/workflow/bpms/camunda.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Camunda"},sidebar:"docs",previous:{title:"BPMN Awesome",permalink:"/notes/service/workflow/bpms/awesome"},next:{title:"Cadence",permalink:"/notes/service/workflow/cadence"}},y={},v=[],O={toc:v},k="wrapper";function g(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,s(m(m({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"camunda"}),"Camunda"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/camunda/camunda-bpm-platform"}),"camunda/camunda-bpm-platform"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache License 2.0, Java"),(0,n.kt)("li",{parentName:"ul"},"Camunda 7"))),(0,n.kt)("li",{parentName:"ul"},"Camunda 8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f15\u64ce Zeebe engine"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://camunda.com/blog/2022/05/how-open-is-camunda-platform-8/"}),"How Open is Camunda Platform 8?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7ec4\u4ef6\u4e3a Source-available"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://forum.camunda.io/t/camunda-8-community-version-what-does-it-entail/37441/9"}),"https://forum.camunda.io/t/camunda-8-community-version-what-does-it-entail/37441/9"))))))}g.isMDXComponent=!0}}]);