"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59305],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78282:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),l=["components"],i={title:"NodeJS"},p="NodeJS",s={unversionedId:"web/nodejs/README",id:"web/nodejs/README",title:"NodeJS",description:"| flag                               | for                 | seealso                                                                       |",source:"@site/../notes/web/nodejs/README.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/",permalink:"/notes/web/nodejs/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/nodejs/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"NodeJS"},sidebar:"docs",previous:{title:"capacitor",permalink:"/notes/web/native/capacitor"},next:{title:"fastify",permalink:"/notes/web/nodejs/fastify"}},u={},c=[{value:"NPM \u955c\u50cf",id:"npm-\u955c\u50cf",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodejs"},"NodeJS"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"flag"),(0,o.kt)("th",{parentName:"tr",align:null},"for"),(0,o.kt)("th",{parentName:"tr",align:null},"seealso"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--experimental-vm-modules"),(0,o.kt)("td",{parentName:"tr",align:null},"ESM"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--experimental-import-meta-resolve"),(0,o.kt)("td",{parentName:"tr",align:null},"import.meta.resolve"),(0,o.kt)("td",{parentName:"tr",align:null},"ponyfill ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/wooorm/import-meta-resolve"},"import-meta-resolve"))))),(0,o.kt)("h2",{id:"npm-\u955c\u50cf"},"NPM \u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'alias cnpm="npm --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npm.taobao.org/"},"CNPM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/browse/star"},"npm star"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -r ts-node/register -r tsconfig-paths/register\n")))}d.isMDXComponent=!0}}]);