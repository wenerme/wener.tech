"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28042],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,b=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(b,s(s({ref:r},p),{},{components:t})):n.createElement(b,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24848:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return h}});var n=t(49613),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&p(e,t,r[t]);return e};const f={title:"json-schema-faker",tags:["JSONSchema"]},m="json-schema-faker",b={unversionedId:"web/script/lib/json-schema-faker",id:"web/script/lib/json-schema-faker",title:"json-schema-faker",description:"- json-schema-faker",source:"@site/../notes/web/script/lib/json-schema-faker.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/json-schema-faker",permalink:"/notes/web/script/lib/json-schema-faker",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/lib/json-schema-faker.md",tags:[{label:"JSONSchema",permalink:"/notes/tags/json-schema"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"json-schema-faker",tags:["JSONSchema"]},sidebar:"docs",previous:{title:"jsdom",permalink:"/notes/web/script/lib/jsdom"},next:{title:"json-schema-ref-parser",permalink:"/notes/web/script/lib/json-schema-ref-parser"}},d={},h=[],j={toc:h};function y(e){var r,t=e,{components:a}=t,p=((e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},j),p),o(r,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"json-schema-faker"}),"json-schema-faker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/json-schema-faker/json-schema-faker"}),"json-schema-faker")),(0,n.kt)("li",{parentName:"ul"},"generate - \u540c\u6b65\u751f\u6210\uff0c\u4e0d \u5904\u7406 ref"),(0,n.kt)("li",{parentName:"ul"},"resolve - \u5f02\u6b65\u751f\u6210",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 ",(0,n.kt)("a",u({parentName:"li"},{href:"/notes/web/script/lib/json-schema-ref-parser"}),"json-schema-ref-parser"),", jsonpath-plus"))),(0,n.kt)("li",{parentName:"ul"},"schema \u5305\u542b circular \u751f\u6210\u6709\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8\u662f\u4f7f\u7528 bundle\uff0c\u56e0\u6b64\u63d0\u4f9b\u7684 schema \u4e5f\u5f97\u662f bundle \u6216\u8005\u76f4\u63a5\u63d0\u4f9b resolved kv \u5217\u8868")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// resolve bundle schema\n$RefParser\n  .bundle(cwd, schema, {\n    resolve: {\n      file: { order: 100 },\n      http: { order: 200 },\n      fixedRefs,\n    },\n    dereference: {\n      circular: 'ignore',\n    },\n  })\n  .then((sub) => run($refs, sub, container));\n")))}y.isMDXComponent=!0}}]);