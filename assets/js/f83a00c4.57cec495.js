/*! For license information please see f83a00c4.57cec495.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20762],{64687:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(11527),t=s(47214);const i={tags:["FAQ"]},o="Bundle FAQ",l={id:"web/dev/bundle/bundle-faq",title:"Bundle FAQ",description:".js \u6587\u4ef6\u540e\u7f00",source:"@site/../notes/web/dev/bundle/bundle-faq.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/faq",permalink:"/notes/web/dev/bundle/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/bundle/bundle-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1696577752,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"bun",permalink:"/notes/web/dev/bun"},next:{title:"ESBuild",permalink:"/notes/web/dev/bundle/esbuild"}},c={},d=[{value:".js \u6587\u4ef6\u540e\u7f00",id:"js-extension",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"bundle-faq",children:"Bundle FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"js-extension",children:".js \u6587\u4ef6\u540e\u7f00"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6709\u4e9b\u573a\u666f\u9700\u8981 esm import \u5305\u542b\u540e\u7f00\uff0c\u76ee\u524d esbuild \u4e0d\u597d\u6dfb\u52a0"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u8003\u8651 rollup"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/evanw/esbuild/issues/2435",children:"https://github.com/evanw/esbuild/issues/2435"})}),"\n",(0,r.jsxs)(n.li,{children:["SWC - \u4e0d\u652f\u6301\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Output mjs file extension ",(0,r.jsx)(n.a,{href:"https://github.com/swc-project/swc/issues/3067",children:"swc#3067"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/swc-project/swc/issues/5346",children:"https://github.com/swc-project/swc/issues/5346"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/pull/35148",children:"https://github.com/microsoft/TypeScript/pull/35148"})}),"\n",(0,r.jsxs)(n.li,{children:["NextJS ",(0,r.jsx)(n.a,{href:"/notes/web/framework/nextjs/faq#js-extension",children:"\u5e93 import \u5fc5\u987b\u8981\u6709 .js \u540e\u7f00"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/GervinFung/ts-add-js-extension",children:"GervinFung/ts-add-js-extension"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6dfb\u52a0 js \u540e\u7f00"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'\u2718 [ERROR] Could not resolve "server/src/app/app.run"\n\n    dist/out/apps/ve-contract-server/main.js:8:31:\n      8 \u2502 import { runApplication } from "server/src/app/app.run";\n        \u2575                                ~~~~~~~~~~~~~~~~~~~~~~~~\n\n  The module "./dist/out/app/app.run" was not found on the file system:\n\n    node_modules/server/package.json:17:16:\n      17 \u2502       "import": "./dist/out/*"\n         \u2575                 ~~~~~~~~~~~~~~\n\n  Import from "server/src/app/app.run.js" to get the file\n  "node_modules/server/dist/out/app/app.run.js":\n\n    dist/out/apps/ve-contract-server/main.js:8:54:\n      8 \u2502 import { runApplication } from "server/src/app/app.run";\n        \u2502                                                       ^\n        \u2575                                                       .js\n\n  You can mark the path "server/src/app/app.run" as external to exclude it from the bundle, which\n  will remove this error.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u529e\u6cd5"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u901a\u8fc7 exports \u6dfb\u52a0 - \u4e0d\u652f\u6301\u81ea\u52a8 index.ts"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "exports": {\n    "./src/*": {\n      "types": "./src/*",\n      "typescript": "./src/*",\n      "import": "./dist/out/*.js"\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7\u76f4\u63a5 import \u52a0\u540e\u7f00\u89e3\u51b3"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { GeneralResponseDto } from 'server/src/common/dto/index.ts';\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "allowImportingTsExtensions": true\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"sed"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm swc ./src -d ./lib\n# for `'` & `\"`\nsed -E -i -r 's#(\\bfrom\\s+\"\\.[^\"]+)\";#\\1.js\";#g' ./lib/**/*.js\nsed -E -i -r \"s#(\\bfrom\\s+'\\.[^']+)';#\\1.js';#g\" ./lib/**/*.js\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,n,s)=>{var r=s(50959),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,i={},d=null,a=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var r=s(50959);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);