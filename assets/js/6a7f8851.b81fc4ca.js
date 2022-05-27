"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80792],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=o(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={title:"Vite"},p=void 0,o={unversionedId:"web/dev/vite",id:"web/dev/vite",title:"Vite",description:"- vitejs/vite \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/web/dev/vite.md",sourceDirName:"web/dev",slug:"/web/dev/vite",permalink:"/notes/web/dev/vite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/dev/vite.md",tags:[],version:"current",frontMatter:{title:"Vite"},sidebar:"docs",previous:{title:"turborepo",permalink:"/notes/web/dev/turborepo"},next:{title:"Web Dev FAQ",permalink:"/notes/web/dev/web-dev-faq"}},m={},s=[{value:"\u652f\u6301 MDX",id:"\u652f\u6301-mdx",level:2},{value:"\u626b\u63cf\u591a\u9875",id:"\u626b\u63cf\u591a\u9875",level:2},{value:"does not provide an export named &#39;default&#39;",id:"does-not-provide-an-export-named-default",level:2},{value:"require() of ES Module vite.config.ts not supported",id:"require-of-es-module-viteconfigts-not-supported",level:2},{value:"Vite vs Snowpack",id:"vite-vs-snowpack",level:2},{value:"Vite vs NextJS",id:"vite-vs-nextjs",level:2}],d={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"vitejs/vite")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Dev+Bundle \u5de5\u5177 - No-Bundler - Bundle \u4e3a ESM \u72ec\u7acb\u6a21\u5757\u800c\u4e0d\u662f\u6574\u4f53 Bundle"),(0,l.kt)("li",{parentName:"ul"},"ESBuild+Rollup"),(0,l.kt)("li",{parentName:"ul"},"Koa"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u5757 TS, CSS, Static Assets, JSX, JSON, Vue, Glob Import, WebAssembly, Web Worker"),(0,l.kt)("li",{parentName:"ul"},"CSS Code Splitting"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.replit.com/vite"},"Why We Switched From Webpack To Vite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/comparisons.html"},"Comparisons with Other No-Bundler Solutions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/tree/main/packages/create-vite"},"create-vite")),(0,l.kt)("li",{parentName:"ul"},"Help with monorepo ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/issues/1491"},"#1491")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/anncwb/vite-plugin-html"},"anncwb/vite-plugin-html"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HTML \u9884\u5904\u7406"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rakkasjs/rakkasjs"},"rakkasjs/rakkasjs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Next.js alternative powered by Vite"))))),(0,l.kt)("li",{parentName:"ul"},"Dev",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"unbundled esm",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u5feb\u901f - \u65b9\u4fbf\u66ff\u4ee3\u548c\u6784\u5efa"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883\u6d4f\u89c8\u5668\u76f8\u5bf9\u65b0 - \u652f\u6301 ESM"))),(0,l.kt)("li",{parentName:"ul"},"esbuild"))),(0,l.kt)("li",{parentName:"ul"},"Producation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bundle",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"unbundled esm \u8fd8\u662f\u4f1a\u4ea7\u751f\u5f88\u591a\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u76f4\u63a5\u4f7f\u7528 ESM \u8f83\u5c11"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 tree shake, lazy-loading, common chunk splitting"))),(0,l.kt)("li",{parentName:"ul"},"rollup",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u66f4\u6210\u719f - \u529f\u80fd\u66f4\u5b8c\u5584 - \u63d2\u4ef6\u591a"),(0,l.kt)("li",{parentName:"ul"},"esbuild \u652f\u6301 esm \u4e3a\u4e3b"))),(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u6301 \u4e0e DEV \u4e00\u81f4\u4f1a\u6709\u96be\u5ea6")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"React hmr \u4e22\u5931 Context ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/issues/3301"},"vitejs/vite#3301")),(0,l.kt)("li",{parentName:"ul"},"hmr \u4e0d\u652f\u6301 unamed dynamic import ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/issues/2719"},"vitejs/vite#2719")),(0,l.kt)("li",{parentName:"ul"},"html script \u53ea\u80fd bundle module - ",(0,l.kt)("inlineCode",{parentName:"li"},'<script type="module">')),(0,l.kt)("li",{parentName:"ul"},"build \u4e00\u6b21\u53ea\u80fd\u4e00\u4e2a rollup \u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u591a config \u6216 \u73af\u5883\u53d8\u91cf \u89e3\u51b3"))),(0,l.kt)("li",{parentName:"ul"},"\u672a\u5185\u7f6e\u652f\u6301 mdx")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u9879\u76ee\n# vanilla, vanilla-ts, vue, vue-ts, react, react-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts\nnpm init vite@latest my-app -- --template react-ts\n\n# \u73b0\u6709\u9879\u76ee\nnpm add -D vite @vitejs/plugin-react\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export default defineConfig({\n  plugins: [react()],\n  build: {\n    // \u591a\u9875\u5e94\u7528\n    rollupOptions: {\n      input: {\n        // js bundle \u540d\u5b57\n        main: resolve(__dirname, 'index.html'),\n        // -> dist/assets/auth-error.<hash>.js\n        'auth-error': resolve(__dirname, 'auth/error.html'),\n      },\n    },\n  },\n});\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u5f02\u6b65\u914d\u7f6e"',title:'"\u5f02\u6b65\u914d\u7f6e"'},"export default defineConfig(async ({ command, mode }) => {\n  const data = await asyncFunction();\n  return {\n    // build specific config\n  };\n});\n")),(0,l.kt)("h2",{id:"\u652f\u6301-mdx"},"\u652f\u6301 MDX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { defineConfig } from 'vite';\nimport mdx from '@mdx-js/rollup';\n\nexport default defineConfig({\n  plugins: [mdx(/* jsxImportSource: \u2026, otherOptions\u2026 */)],\n});\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"\u626b\u63cf\u591a\u9875"},"\u626b\u63cf\u591a\u9875"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"require('fast-glob')\n  .sync(['./**/*.html', '!dist'])\n  .map((entry) => path.resolve(__dirname, entry));\n")),(0,l.kt)("h2",{id:"does-not-provide-an-export-named-default"},"does not provide an export named 'default'"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 esm \u6a21\u5757")),(0,l.kt)("h2",{id:"require-of-es-module-viteconfigts-not-supported"},"require() of ES Module vite.config.ts not supported"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u4e86\u53ea\u6709 esm \u7684\u63d2\u4ef6 - \u4f8b\u5982 @mdx/rollup")),(0,l.kt)("h2",{id:"vite-vs-snowpack"},"Vite vs Snowpack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vite",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Dev \u548c Bundle \u4f7f\u7528\u76f8\u540c\u7684\u5de5\u5177 - rollup"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u66f4\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5f00\u53d1\u4f1a\u66f4\u5bb9\u6613"))),(0,l.kt)("li",{parentName:"ul"},"Snowpack",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"delegates to plugins using webpack/parcel")))),(0,l.kt)("h2",{id:"vite-vs-nextjs"},"Vite vs NextJS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vite",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ESBuild+Rollup",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ESM - \u5f00\u53d1\u65e0 bundle - \u5feb"))),(0,l.kt)("li",{parentName:"ul"},"SSR \u548c SSG WIP \u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a HTML \u5165\u53e3 - \u6309\u9875\u5212\u5206 CSS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f46\u9700\u8981\u81ea\u884c\u914d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6253\u5305\u4e3a \u5e93 - rollup"))),(0,l.kt)("li",{parentName:"ul"},"NextJS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Webpack/SWC",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bundle - \u5168\u91cf\uff0c\u590d\u6742\u9875\u9762\u5f88\u5927\u5f88\u6162"))),(0,l.kt)("li",{parentName:"ul"},"SSR\u3001SSG\u3001\u589e\u91cf SSG \u652f\u6301\u5f88\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e00 HTML \u5165\u53e3 - ","_","app.js - \u4e0d\u80fd\u5212\u5206\u5168\u5c40 CSS"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8def\u7531")))))}c.isMDXComponent=!0}}]);