"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26323],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97296:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"hmr"},v="hmr",h={unversionedId:"web/dev/hmr",id:"web/dev/hmr",title:"hmr",description:"- live reload - \u68c0\u6d4b\u5230\u53d8\u5316\u5237\u65b0\u9875\u9762",source:"@site/../notes/web/dev/hmr.md",sourceDirName:"web/dev",slug:"/web/dev/hmr",permalink:"/notes/web/dev/hmr",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/hmr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666003394,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"hmr"},sidebar:"docs",previous:{title:"eslint",permalink:"/notes/web/dev/eslint"},next:{title:"Lerna",permalink:"/notes/web/dev/lerna"}},b={},k=[{value:"Vite HMR",id:"vite-hmr",level:2},{value:"react refresh",id:"react-refresh",level:2}],y={toc:k},N="wrapper";function g(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(N,m(s(s({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"hmr"}),"hmr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"live reload - \u68c0\u6d4b\u5230\u53d8\u5316\u5237\u65b0\u9875\u9762",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4f7f\u7528\u4e00\u4e2a EventSource - SSE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/802#issuecomment-819578182"}),"esbuild#802")))),(0,n.kt)("li",{parentName:"ul"},"HMR - Hot Module Replacement - Hot Module Reload",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u4fdd\u7559\u72b6\u6001"),(0,n.kt)("li",{parentName:"ul"},"Webpack",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://webpack.js.org/concepts/hot-module-replacement/"}),"Concept")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://webpack.js.org/api/hot-module-replacement"}),"API")))),(0,n.kt)("li",{parentName:"ul"},"Vite ",(0,n.kt)("a",s({parentName:"li"},{href:"https://vitejs.dev/guide/api-hmr.html"}),"HMR API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u4e0e Webpack \u7c7b\u4f3c\u4f46\u4e0d\u76f8\u540c"))))),(0,n.kt)("li",{parentName:"ul"},"React Fast Refresh",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HMR \u66f4\u8fdb\u4e00\u6b65 - \u7ec4\u4ef6\u7eac\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684 bundler",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"rn, parcel2, webpack, cra, nextjs, vite"))),(0,n.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u5230\u53d8\u5316\uff0c\u66f4\u65b0\u7ec4\u4ef6\uff0cre-render"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c exports \u4e0d\u6b62 react \u7ec4\u4ef6\uff0c\u8fd8\u4f1a\u66f4\u65b0\u5176\u4ed6 import \u4f9d\u8d56"),(0,n.kt)("li",{parentName:"ul"},"prevExports",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0a\u6b21\u7684\u7ec4\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://reactnative.dev/docs/fast-refresh"}),"https://reactnative.dev/docs/fast-refresh")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/gaearon/react-hot-loader"}),"react-hot-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"fast refresh \u4e4b\u524d\u7684\u65b9\u6848")))))),(0,n.kt)("h2",s({},{id:"vite-hmr"}),"Vite HMR"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"interface ImportMeta {\n  // \u5224\u65ad\u5f53\u524d\u662f\u5426\u4e3a HMR \u73af\u5883\n  readonly hot?: ViteHotContext;\n}\n\ntype ModuleNamespace = Record<string, any> & {\n  [Symbol.toStringTag]: 'Module';\n};\n\ninterface ViteHotContext {\n  // \u6301\u4e45\u5316\u6570\u636e\n  readonly data: any;\n\n  // \u63a5\u53d7\u65b0\u7684\u6a21\u5757 - HMR boundary\n  accept(): void;\n  accept(cb: (mod: ModuleNamespace | undefined) => void): void;\n  accept(dep: string, cb: (mod: ModuleNamespace | undefined) => void): void;\n  accept(deps: readonly string[], cb: (mods: Array<ModuleNamespace | undefined>) => void): void;\n\n  // \u9500\u6bc1\u524d\u56de\u8c03\n  dispose(cb: (data: any) => void): void;\n  // \u4e0d\u53ef HMR\n  decline(): void;\n  invalidate(): void;\n\n  // vite:beforeUpdate, vite:beforeFullReload, vite:beforePrune, vite:invalidate, vite:error\n  // `InferCustomEventPayload` provides types for built-in Vite events\n  on<T extends string>(event: T, cb: (payload: InferCustomEventPayload<T>) => void): void;\n  send<T extends string>(event: T, data?: InferCustomEventPayload<T>): void;\n}\n")),(0,n.kt)("h2",s({},{id:"react-refresh"}),"react refresh"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/facebook/react/tree/main/packages/react-refresh"}),"react/packages/react-refresh"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101"}),"react#16604")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$RefreshReg$")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$RefreshSig$")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin"}),"pmmmwh/react-refresh-webpack-plugin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$RefreshHelpers$"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// reload\n/* @refresh reset */\n")))}g.isMDXComponent=!0}}]);