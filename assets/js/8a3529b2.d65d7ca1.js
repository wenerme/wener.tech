"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83990],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(n),k=l,c=d["".concat(u,".").concat(k)]||d[k]||s[k]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var a=n(96600),l=n(27279),r=(n(59496),n(49613)),i=["components"],p={title:"Vite"},u="Vite",o={unversionedId:"web/dev/vite",id:"web/dev/vite",title:"Vite",description:"- vitejs/vite \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/web/dev/vite.md",sourceDirName:"web/dev",slug:"/web/dev/vite",permalink:"/notes/web/dev/vite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/dev/vite.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Vite"},sidebar:"docs",previous:{title:"turborepo",permalink:"/notes/web/dev/turborepo"},next:{title:"Web Dev Awesome",permalink:"/notes/web/dev/web-dev-awesome"}},m={},s=[{value:"env",id:"env",level:2},{value:"\u652f\u6301 MDX",id:"\u652f\u6301-mdx",level:2},{value:"\u626b\u63cf\u591a\u9875",id:"\u626b\u63cf\u591a\u9875",level:2},{value:"does not provide an export named &#39;default&#39;",id:"does-not-provide-an-export-named-default",level:2},{value:"require() of ES Module vite.config.ts not supported",id:"require-of-es-module-viteconfigts-not-supported",level:2},{value:"Vite vs Snowpack",id:"vite-vs-snowpack",level:2},{value:"Vite vs NextJS",id:"vite-vs-nextjs",level:2}],d={toc:s};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vite"},"Vite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"vitejs/vite")," \u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dev+Bundle \u5de5\u5177 - No-Bundler - Bundle \u4e3a ESM \u72ec\u7acb\u6a21\u5757\u800c\u4e0d\u662f\u6574\u4f53 Bundle"),(0,r.kt)("li",{parentName:"ul"},"ESBuild+Rollup"),(0,r.kt)("li",{parentName:"ul"},"Koa"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757 TS, CSS, Static Assets, JSX, JSON, Vue, Glob Import, WebAssembly, Web Worker"),(0,r.kt)("li",{parentName:"ul"},"CSS Code Splitting"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.replit.com/vite"},"Why We Switched From Webpack To Vite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/comparisons.html"},"Comparisons with Other No-Bundler Solutions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/tree/main/packages/create-vite"},"create-vite")),(0,r.kt)("li",{parentName:"ul"},"Help with monorepo ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/issues/1491"},"#1491")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/anncwb/vite-plugin-html"},"anncwb/vite-plugin-html"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HTML \u9884\u5904\u7406"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rakkasjs/rakkasjs"},"rakkasjs/rakkasjs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Next.js alternative powered by Vite"))))),(0,r.kt)("li",{parentName:"ul"},"Dev",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"unbundled esm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u5feb\u901f - \u65b9\u4fbf\u66ff\u4ee3\u548c\u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883\u6d4f\u89c8\u5668\u76f8\u5bf9\u65b0 - \u652f\u6301 ESM"))),(0,r.kt)("li",{parentName:"ul"},"esbuild"))),(0,r.kt)("li",{parentName:"ul"},"Producation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bundle",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"unbundled esm \u8fd8\u662f\u4f1a\u4ea7\u751f\u5f88\u591a\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u76f4\u63a5\u4f7f\u7528 ESM \u8f83\u5c11"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 tree shake, lazy-loading, common chunk splitting"))),(0,r.kt)("li",{parentName:"ul"},"rollup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6210\u719f - \u529f\u80fd\u66f4\u5b8c\u5584 - \u63d2\u4ef6\u591a"),(0,r.kt)("li",{parentName:"ul"},"esbuild \u652f\u6301 esm \u4e3a\u4e3b"))),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u6301 \u4e0e DEV \u4e00\u81f4\u4f1a\u6709\u96be\u5ea6")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"React hmr \u4e22\u5931 Context ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/issues/3301"},"vitejs/vite#3301")),(0,r.kt)("li",{parentName:"ul"},"hmr \u4e0d\u652f\u6301 unamed dynamic import ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/issues/2719"},"vitejs/vite#2719")),(0,r.kt)("li",{parentName:"ul"},"html script \u53ea\u80fd bundle module - ",(0,r.kt)("inlineCode",{parentName:"li"},'<script type="module">')),(0,r.kt)("li",{parentName:"ul"},"build \u4e00\u6b21\u53ea\u80fd\u4e00\u4e2a rollup \u914d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u591a config \u6216 \u73af\u5883\u53d8\u91cf \u89e3\u51b3"))),(0,r.kt)("li",{parentName:"ul"},"\u672a\u5185\u7f6e\u652f\u6301 mdx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u9879\u76ee\n# vanilla, vanilla-ts, vue, vue-ts, react, react-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts\nnpm init vite@latest my-app -- --template react-ts\n\n# \u73b0\u6709\u9879\u76ee\nnpm add -D vite @vitejs/plugin-react\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default defineConfig({\n  plugins: [react()],\n  build: {\n    // \u591a\u9875\u5e94\u7528\n    rollupOptions: {\n      input: {\n        // js bundle \u540d\u5b57\n        main: resolve(__dirname, 'index.html'),\n        // -> dist/assets/auth-error.<hash>.js\n        'auth-error': resolve(__dirname, 'auth/error.html'),\n      },\n    },\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u5f02\u6b65\u914d\u7f6e"',title:'"\u5f02\u6b65\u914d\u7f6e"'},"export default defineConfig(async ({command, mode}) => {\n  const data = await asyncFunction();\n  return {\n    // build specific config\n  };\n});\n")),(0,r.kt)("h2",{id:"env"},"env"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"meta env"),(0,r.kt)("th",{parentName:"tr",align:null},"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"import.meta.env.MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"development,production, ",(0,r.kt)("inlineCode",{parentName:"td"},"--mode <mode>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"import.meta.env.BASE_URL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"import.meta.env.PROD"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"import.meta.env.DEV"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"import.meta.env.SSR"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"envfiles",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.local")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.<mode>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.<mode>.local")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VITE_")," \u524d\u7f00\u7684\u53d8\u91cf\u4f1a\u66b4\u9732\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"import.meta.env")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/env-and-mode.html"},"https://vitejs.dev/guide/env-and-mode.html"))),(0,r.kt)("h2",{id:"\u652f\u6301-mdx"},"\u652f\u6301 MDX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {defineConfig} from 'vite';\nimport mdx from '@mdx-js/rollup';\n\nexport default defineConfig({\n  plugins: [mdx(/* jsxImportSource: \u2026, otherOptions\u2026 */)],\n});\n")),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"\u626b\u63cf\u591a\u9875"},"\u626b\u63cf\u591a\u9875"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"require('fast-glob')\n  .sync(['./**/*.html', '!dist'])\n  .map((entry) => path.resolve(__dirname, entry));\n")),(0,r.kt)("h2",{id:"does-not-provide-an-export-named-default"},"does not provide an export named 'default'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981 esm \u6a21\u5757")),(0,r.kt)("h2",{id:"require-of-es-module-viteconfigts-not-supported"},"require() of ES Module vite.config.ts not supported"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u4e86\u53ea\u6709 esm \u7684\u63d2\u4ef6 - \u4f8b\u5982 @mdx/rollup")),(0,r.kt)("h2",{id:"vite-vs-snowpack"},"Vite vs Snowpack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vite",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dev \u548c Bundle \u4f7f\u7528\u76f8\u540c\u7684\u5de5\u5177 - rollup"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u66f4\u5c0f"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5f00\u53d1\u4f1a\u66f4\u5bb9\u6613"))),(0,r.kt)("li",{parentName:"ul"},"Snowpack",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"delegates to plugins using webpack/parcel")))),(0,r.kt)("h2",{id:"vite-vs-nextjs"},"Vite vs NextJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vite",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ESBuild+Rollup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ESM - \u5f00\u53d1\u65e0 bundle - \u5feb"))),(0,r.kt)("li",{parentName:"ul"},"SSR \u548c SSG WIP \u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a HTML \u5165\u53e3 - \u6309\u9875\u5212\u5206 CSS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u9700\u8981\u81ea\u884c\u914d\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6253\u5305\u4e3a \u5e93 - rollup"))),(0,r.kt)("li",{parentName:"ul"},"NextJS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Webpack/SWC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bundle - \u5168\u91cf\uff0c\u590d\u6742\u9875\u9762\u5f88\u5927\u5f88\u6162"))),(0,r.kt)("li",{parentName:"ul"},"SSR\u3001SSG\u3001\u589e\u91cf SSG \u652f\u6301\u5f88\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e00 HTML \u5165\u53e3 - ",(0,r.kt)("inlineCode",{parentName:"li"},"_app.js")," - \u4e0d\u80fd\u5212\u5206\u5168\u5c40 CSS"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u8def\u7531")))))}k.isMDXComponent=!0}}]);