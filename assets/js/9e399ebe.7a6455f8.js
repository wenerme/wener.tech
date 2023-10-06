"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83914],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=i,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15303:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var n=r(49613),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"Design Builder"},b="Design Builder",g={unversionedId:"dev/design/design-builder",id:"dev/design/design-builder",title:"Design Builder",description:"- JSON Declarative - Model",source:"@site/../notes/dev/design/design-builder.md",sourceDirName:"dev/design",slug:"/dev/design/builder",permalink:"/notes/dev/design/builder",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/design/design-builder.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637943795,formattedLastUpdatedAt:"Nov 26, 2021",frontMatter:{title:"Design Builder"},sidebar:"docs",previous:{title:"\u54cd\u5e94\u5f0f\u65ad\u70b9",permalink:"/notes/dev/design/breakpoint"},next:{title:"Design Dashboard",permalink:"/notes/dev/design/dashboard"}},k={},v=[],y={toc:v},O="wrapper";function h(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(O,d(s(s({},y),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"design-builder"}),"Design Builder"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JSON Declarative - Model"),(0,n.kt)("li",{parentName:"ul"},"Code - WASM, QuickJS, Sandbox")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"esbuild",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8ba9 Go \u76f4\u63a5\u6784\u5efa ESM \u6210\u4e3a\u53ef\u80fd"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/BuilderIO"}),"BuilderIO"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/BuilderIO/builder"}),"builder"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Drag and drop page builder"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/BuilderIO/mitosis"}),"mitosis"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jsx-lite"),(0,n.kt)("li",{parentName:"ul"},"Compiles to Vue, React, Solid, Angular, Svelte, and more"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/BuilderIO/qwik"}),"qwik"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DOM-Centric, Resumable Web-App Framework"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/BuilderIO/ts-lite"}),"ts-lite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compiled TypeScript. Generates Go, Swift, Kotlin, WASM, Binary"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/builderio/build."}),"build."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"visual programming language"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://wener.me/notes/service/low-code/low-code-awesome/"}),"Low Code"))))}h.isMDXComponent=!0}}]);