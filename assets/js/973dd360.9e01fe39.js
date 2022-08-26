"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64398],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43390:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"ajv"},u=void 0,c={unversionedId:"web/script/lib/ajv",id:"web/script/lib/ajv",title:"ajv",description:"- ajv-validator/ajv",source:"@site/notes/web/script/lib/ajv.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/ajv",permalink:"/notes/web/script/lib/ajv",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/script/lib/ajv.md",tags:[],version:"current",frontMatter:{title:"ajv"},sidebar:"docs",previous:{title:"JS Cookbook",permalink:"/notes/web/script/js-cookbook"},next:{title:"Ava",permalink:"/notes/web/script/lib/ava"}},s={},p=[{value:"due to error strict mode: unknown keyword",id:"due-to-error-strict-mode-unknown-keyword",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ajv-validator/ajv"},"ajv-validator/ajv")),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ajv-validator/ajv-keywords"},"ajv-validator/ajv-keywords"),"\n\u589e\u52a0\u81ea\u5b9a\u4e49\u5173\u952e\u5b57",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"typeof, instanceof"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"select, selectCases, selectDefault")," -> discriminator"),(0,o.kt)("li",{parentName:"ul"},"dynamicDefaults"),(0,o.kt)("li",{parentName:"ul"},"number: range, exclusiveRange"),(0,o.kt)("li",{parentName:"ul"},"string: regexp, transform",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"transform \u5141\u8bb8\u9a8c\u8bc1\u65f6\u4fee\u6539\u5b57\u7b26\u4e32\u5185\u5bb9"))),(0,o.kt)("li",{parentName:"ul"},"array: uniqueItemProperties"),(0,o.kt)("li",{parentName:"ul"},"object: allRequired, anyRequired, oneRequired, patternRequired, prohibited, deepProperties, deepRequired"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ajv.js.org/json-schema.html"},"https://ajv.js.org/json-schema.html"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm add ajv ajv-formats ajv-keywords ajv-errors\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import addFormats from 'ajv-formats';\nimport addKeyworks from 'ajv-keywords';\nimport Ajv2020 from 'ajv/dist/2020';\n\nconst ajv = new Ajv2020();\naddFormats(ajv);\naddKeyworks(ajv);\n\n// \u6dfb\u52a0\u81ea\u5b9a\u4e49 keyword \u907f\u514d\u5931\u8d25\najv.addKeyword('x-meta');\n")),(0,o.kt)("h2",{id:"due-to-error-strict-mode-unknown-keyword"},"due to error strict mode: unknown keyword"))}d.isMDXComponent=!0}}]);