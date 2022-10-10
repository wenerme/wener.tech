"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43394],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={title:"ts-node"},f="ts-node",m={unversionedId:"web/nodejs/ts-node",id:"web/nodejs/ts-node",title:"ts-node",description:"\u63a8\u8350\u4f7f\u7528 tsx",source:"@site/../notes/web/nodejs/ts-node.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/ts-node",permalink:"/notes/web/nodejs/ts-node",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/ts-node.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"ts-node"},sidebar:"docs",previous:{title:"sequelize",permalink:"/notes/web/nodejs/sequelize"},next:{title:"tsx",permalink:"/notes/web/nodejs/tsx"}},b={},g=[],y={toc:g};function O(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),c),a(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"ts-node"}),"ts-node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",u({parentName:"p"},{href:"/notes/web/nodejs/tsx"}),"tsx"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/TypeStrong/ts-node"}),"TypeStrong/ts-node"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"node \u76f4\u63a5\u6267\u884c ts")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx ts-node main.ts # \u76f4\u63a5\u6267\u884c ts\n\nnpm i -D tsconfig-paths\nnpx ts-node -r tsconfig-paths/register main.ts              # tsconfig \u91cc\u7684 path \u80fd\u751f\u6548\nnode -r ts-node/register -r tsconfig-paths/register main.ts # \u4f7f\u7528 node\n\nnpx ts-node --showConfig\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tsconfig.json#ts-node")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "extends": "ts-node/node16/tsconfig.json",\n  // \u9488\u5bf9 ts-node \u7684\u914d\u7f6e\n  "ts-node": {\n    "transpileOnly": true, // \u5ffd\u7565\u7c7b\u578b\u68c0\u67e5\uff0c\u66f4\u5feb\n    "files": true, // \u4ece tsconfig.json \u8bfb\u53d6 files, include, exclude\n    "require": ["tsconfig-paths/register"],\n    "compilerOptions": {\n      "module": "commonjs"\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"env"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"demo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"TS_NODE_COMPILER_OPTIONS"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'{"module":"commonjs"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"TS_NODE_PROJECT"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"./tsconfig.commonjs.json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"NODE_OPTIONS"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"--trace-deprecation --abort-on-uncaught-exception")))))}O.isMDXComponent=!0}}]);