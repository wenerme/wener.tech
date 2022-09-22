"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96779],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2449:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],o={title:"Vlang Build"},u="Vlang Build",p={unversionedId:"languages/v/v-build",id:"languages/v/v-build",title:"Vlang Build",description:"pseudo variables",source:"@site/../notes/languages/v/v-build.md",sourceDirName:"languages/v",slug:"/languages/v/v-build",permalink:"/notes/languages/v/v-build",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/v/v-build.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Vlang Build"},sidebar:"docs",previous:{title:"V",permalink:"/notes/languages/v/"},next:{title:"Vlang FAQ",permalink:"/notes/languages/v/v-faq"}},s={},d=[],c={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vlang-build"},"Vlang Build"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n# \u652f\u6301\u4ee3\u7801\u70ed\u91cd\u8f7d\n# \u51fd\u6570\u6dfb\u52a0 [live]\nv -live message.v\n\n# \u4ea4\u53c9\u7f16\u8bd1\nv -os windows .\nv -os linux .\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"pseudo variables")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"var"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@FN"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the current V function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@METHOD"),(0,l.kt)("td",{parentName:"tr",align:null},"replaced with ReceiverType.MethodName")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@MOD"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the current V module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@STRUCT"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the current V struct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@FILE"),(0,l.kt)("td",{parentName:"tr",align:null},"path of the V source file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@LINE"),(0,l.kt)("td",{parentName:"tr",align:null},"V line number where it appears (as a string).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@COLUMN"),(0,l.kt)("td",{parentName:"tr",align:null},"column where it appears (as a string).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@VEXE"),(0,l.kt)("td",{parentName:"tr",align:null},"path to the V compiler")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@VEXEROOT"),(0,l.kt)("td",{parentName:"tr",align:null},"folder, where the V executable is (as a string).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@VHASH"),(0,l.kt)("td",{parentName:"tr",align:null},"shortened commit hash of the V compiler (as a string).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@VMOD_FILE"),(0,l.kt)("td",{parentName:"tr",align:null},"contents of the nearest v.mod file (as a string).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@VMODROOT"),(0,l.kt)("td",{parentName:"tr",align:null},"folder, where the nearest v.mod file is (as a string).")))))}m.isMDXComponent=!0}}]);