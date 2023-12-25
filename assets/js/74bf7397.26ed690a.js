/*! For license information please see 74bf7397.26ed690a.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26323],{11426:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(11527),s=r(47214);const i={title:"hmr"},l="hmr",d={id:"web/dev/hmr",title:"hmr",description:"- live reload - \u68c0\u6d4b\u5230\u53d8\u5316\u5237\u65b0\u9875\u9762",source:"@site/../notes/web/dev/hmr.md",sourceDirName:"web/dev",slug:"/web/dev/hmr",permalink:"/notes/web/dev/hmr",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/hmr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666003394,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"hmr"},sidebar:"docs",previous:{title:"graphile-worker",permalink:"/notes/web/dev/graphile-worker"},next:{title:"Hono",permalink:"/notes/web/dev/hono"}},c={},o=[{value:"Vite HMR",id:"vite-hmr",level:2},{value:"react refresh",id:"react-refresh",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hmr",children:"hmr"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["live reload - \u68c0\u6d4b\u5230\u53d8\u5316\u5237\u65b0\u9875\u9762\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u901a\u5e38\u4f7f\u7528\u4e00\u4e2a EventSource - SSE"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/evanw/esbuild/issues/802#issuecomment-819578182",children:"esbuild#802"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["HMR - Hot Module Replacement - Hot Module Reload\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f3a\u8c03\u4fdd\u7559\u72b6\u6001"}),"\n",(0,t.jsxs)(n.li,{children:["Webpack\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",children:"Concept"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://webpack.js.org/api/hot-module-replacement",children:"API"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Vite ",(0,t.jsx)(n.a,{href:"https://vitejs.dev/guide/api-hmr.html",children:"HMR API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u63a5\u53e3\u4e0e Webpack \u7c7b\u4f3c\u4f46\u4e0d\u76f8\u540c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["React Fast Refresh\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HMR \u66f4\u8fdb\u4e00\u6b65 - \u7ec4\u4ef6\u7eac\u5ea6"}),"\n",(0,t.jsxs)(n.li,{children:["\u652f\u6301\u7684 bundler\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"rn, parcel2, webpack, cra, nextjs, vite"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u68c0\u6d4b\u5230\u53d8\u5316\uff0c\u66f4\u65b0\u7ec4\u4ef6\uff0cre-render"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c exports \u4e0d\u6b62 react \u7ec4\u4ef6\uff0c\u8fd8\u4f1a\u66f4\u65b0\u5176\u4ed6 import \u4f9d\u8d56"}),"\n",(0,t.jsxs)(n.li,{children:["prevExports\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0a\u6b21\u7684\u7ec4\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://reactnative.dev/docs/fast-refresh",children:"https://reactnative.dev/docs/fast-refresh"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gaearon/react-hot-loader",children:"react-hot-loader"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"fast refresh \u4e4b\u524d\u7684\u65b9\u6848"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vite-hmr",children:"Vite HMR"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ImportMeta {\n  // \u5224\u65ad\u5f53\u524d\u662f\u5426\u4e3a HMR \u73af\u5883\n  readonly hot?: ViteHotContext;\n}\n\ntype ModuleNamespace = Record<string, any> & {\n  [Symbol.toStringTag]: 'Module';\n};\n\ninterface ViteHotContext {\n  // \u6301\u4e45\u5316\u6570\u636e\n  readonly data: any;\n\n  // \u63a5\u53d7\u65b0\u7684\u6a21\u5757 - HMR boundary\n  accept(): void;\n  accept(cb: (mod: ModuleNamespace | undefined) => void): void;\n  accept(dep: string, cb: (mod: ModuleNamespace | undefined) => void): void;\n  accept(deps: readonly string[], cb: (mods: Array<ModuleNamespace | undefined>) => void): void;\n\n  // \u9500\u6bc1\u524d\u56de\u8c03\n  dispose(cb: (data: any) => void): void;\n  // \u4e0d\u53ef HMR\n  decline(): void;\n  invalidate(): void;\n\n  // vite:beforeUpdate, vite:beforeFullReload, vite:beforePrune, vite:invalidate, vite:error\n  // `InferCustomEventPayload` provides types for built-in Vite events\n  on<T extends string>(event: T, cb: (payload: InferCustomEventPayload<T>) => void): void;\n  send<T extends string>(event: T, data?: InferCustomEventPayload<T>): void;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"react-refresh",children:"react refresh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/react/tree/main/packages/react-refresh",children:"react/packages/react-refresh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"react#16604"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"$RefreshReg$"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"$RefreshSig$"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",children:"pmmmwh/react-refresh-webpack-plugin"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"$RefreshHelpers$"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// reload\n/* @refresh reset */\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3354:(e,n,r)=>{var t=r(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,i={},o=null,a=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:d.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>l});var t=r(50959);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);