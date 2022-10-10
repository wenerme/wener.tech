"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55922],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,b=d["".concat(i,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return f}});var r=n(49613),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={title:"Rollup"},c="Rollup",b={unversionedId:"web/dev/bundle/rollup",id:"web/dev/bundle/rollup",title:"Rollup",description:"- rollupjs",source:"@site/../notes/web/dev/bundle/rollup.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/rollup",permalink:"/notes/web/dev/bundle/rollup",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/bundle/rollup.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1665372565,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"Rollup"},sidebar:"docs",previous:{title:"Rollup FAQ",permalink:"/notes/web/dev/bundle/rollup-faq"},next:{title:"snowpack",permalink:"/notes/web/dev/bundle/snowpack"}},k={},f=[{value:"Options",id:"options",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"babel+ts",id:"babelts",level:3},{value:"rollup ts",id:"rollup-ts",level:3},{value:"rollup commonjs",id:"rollup-commonjs",level:3},{value:"babel",id:"babel",level:2}],g={toc:f};function N(e){var t,n=e,{components:l}=n,u=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),u),a(t,o({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"rollup"}),"Rollup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://rollupjs.org/"}),"rollupjs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://rollupjs.org/repl/"}),"Repl")),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d.ts")," \u9700\u8981\u4f7f\u7528 tsc \u751f\u6210"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/awesome"}),"rollup/awesome")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://rollupjs.org/repl/"}),"https://rollupjs.org/repl/"))))),(0,r.kt)("admonition",m({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/2182"}),"#2182")," \u4e0d\u652f\u6301\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/2072"}),"#2072")," UMD/IIFE \u4e0d\u652f\u6301 code splitting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/3799"}),"#3799")," \u4e0d\u652f\u6301 assert",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/calebdwilliams/rollup-plugin-import-assert"}),"rollup-plugin-import-assert"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 dynamic"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u7684 acorn \u63d2\u4ef6 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/xtuc/acorn-import-assertions"}),"xtuc/acorn-import-assertions")))),(0,r.kt)("li",{parentName:"ul"},"acron \u53ea\u6dfb\u52a0 stage4 \u7279\u6027 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/acornjs/acorn/issues/1111"}),"acorn#1111")))))),(0,r.kt)("admonition",m({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/470#issuecomment-177594250"}),"#470")," \u4e0d\u652f\u6301 index.js",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5 ",(0,r.kt)("inlineCode",{parentName:"li"},"import {abc} from 'abc/index'")),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/plugins/tree/master/packages/node-resolve"}),"@rollup/plugin-node-resolve")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/1906"}),"#1906")," - Mark dependency as internal?"),(0,r.kt)("li",{parentName:"ul"},"CommonJS \u591a\u4e86\u4e00\u5c42 default \u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://stackoverflow.com/questions/33505992"}),"Babel 6 changes how it exports default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-add-module-exports"}),"babel-plugin-add-module-exports"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u5176\u6062\u590d\u539f\u6709\u7684\u65b9\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/faastjs/faast.js/issues/36"}),"faastjs/faast.js#36")," - Can't use default import with Babel"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u4e5f\u53ef\u4ee5\u5168\u5c40\u5b89\u88c5 - \u4f46\u662f\u6ca1\u5fc5\u8981\uff0c\u56e0\u4e3a\u901a\u5e38\u4f9d\u8d56\u5176\u4ed6\u63d2\u4ef6\n# npm install --global rollup\n\n# \u5e38\u7528\u63d2\u4ef6\n# monorepo \u63a8\u8350\u5b89\u88c5\u5728 root \u9879\u76ee\nnpm add -D rollup @rollup/plugin-{commonjs,node-resolve,replace,typescript,teser}\n\n# \u4e0d\u63a8\u8350 Babel\n# Babel + Typescript\n# yarn add -D @babel/preset-env @babel/preset-typescript\n# + React\n# yarn add -D @babel/preset-react\n\n# TS\nyarn add -D typescript tslib @rollup/plugin-typescript\n\n# rollup\n# -f amd, cjs, es, iife, umd, system\nrollup -i in.js -f es -p node-resolve -o out.js\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Format"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Fullname"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"When"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"package.json"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"amd"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Asynchronous Module Definition"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"RequireJS"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cjs,commonjs"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"CommonJS"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Node"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"main"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"es,esm,module"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<script type=module>")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"module"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"iife"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"self-executing function"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<script>")," ",(0,r.kt)("br",null)," Application"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"umd"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Universal Module Definition"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"amd, cjs, iife"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"browser"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"system,systemjs"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"SystemJS"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"SystemJS"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",m({},{id:"options"}),"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"interface Options {\n  // \u5224\u65ad\u662f\u5426\u4e3a \u5916\u90e8 \u4f9d\u8d56\n  external:\n    | (string | RegExp)[]\n    | RegExp\n    // string \u4e3a module id\n    | string\n    // isResolved - id \u662f\u5426\u7531 \u63d2\u4ef6 resolve\n    // \u53ef\u80fd\u8bf7\u6c42\u4e24\u6b21 - resolved=false, resolved=true\n    | ((id: string, parentId: string, isResolved: boolean) => boolean);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://rollupjs.org/guide/en/#big-list-of-options"}),"https://rollupjs.org/guide/en/#big-list-of-options"))),(0,r.kt)("h2",m({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("h3",m({},{id:"babelts"}),"babel+ts"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm add -D @babel/core @rollup/plugin-babel rollup-plugin-terser @rollup/plugin-node-resolve\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"export default {\n  output: {\n    // \u9ed8\u8ba4 chunk \u5305\u542b\u540d\u5b57\n    // \u652f\u6301 [format] \u66ff\u6362\n    // [name] \u4e3a manualChunks \u7ed3\u679c\u6216 this.emitFile \u7ed3\u679c\n    chunkFileNames: '[name]-[hash].js',\n    entryFileNames: '[name].js', // \u5165\u53e3 - \u652f\u6301\u76f8\u540c\u7684\u66ff\u4ee3\u903b\u8f91\n\n    // \u81ea\u5b9a\u4e49 chunk - \u591a\u9875\u5206 chunk \u52a0\u8f7d\n    manualChunks: {\n      lodash: ['lodash'], // alias: include \u7684\u5b57\u7b26\n    },\n    // id \u4e3a\u5b8c\u6574\u8def\u5f84\n    // \u4f8b\u5982 \u5c06\u76f8\u540c\u8bed\u8a00\u7ffb\u8bd1\u5408\u5e76 foo.strings.en.js,bar.strings.en.js -> shared.en.js\n    manualChunks(id, { getModuleInfo, getModuleIds }) {\n      if (id.includes('@blueprintjs/')) {\n        return 'blueprintjs';\n      }\n      if (id.includes('node_modules')) {\n        return 'vendor';\n      }\n      return undefined;\n    },\n\n    // \u63a7\u5236\u751f\u6210\u4ee3\u7801\n    generatedCode: 'es5', // \u9ed8\u8ba4 es5\n    generatedCode: {\n      preset: 'es2015',\n      arrowFunctions: true,\n      constBindings: true,\n      objectShorthand: true,\n      reservedNamesAsProps: false,\n    },\n\n    // stric, allow-extension, exports-only, false\n    // false - \u4e0d export\n    preserveEntrySignatures: 'strict',\n  },\n};\n")),(0,r.kt)("h3",m({},{id:"rollup-ts"}),"rollup ts"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"import typescript from '@rollup/plugin-typescript';\nimport { nodeResolve } from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\n\nexport default [\n  {\n    input: './src/standalone.ts',\n    output: {\n      file: `dist/standalone.umd.js`,\n      sourcemap: true,\n      format: 'umd',\n      name: 'Standalone',\n    },\n    external: [],\n    plugins: [\n      nodeResolve(),\n      commonjs(),\n      typescript({\n        tsconfig: 'tsconfig.json',\n      }),\n    ],\n  },\n];\n")),(0,r.kt)("h3",m({},{id:"rollup-commonjs"}),"rollup commonjs"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"import commonjs from '@rollup/plugin-commonjs';\nimport { nodeResolve } from '@rollup/plugin-node-resolve';\nimport babel from '@rollup/plugin-babel';\n\nfunction createConfig(format) {\n  return {\n    input: 'src/index.ts',\n    output: {\n      file: `dist/console-feed.${format}.js`,\n      sourcemap: true,\n      format,\n    },\n    external: ['react'],\n    plugins: [\n      nodeResolve({ browser: true, extensions: ['.js', '.jsx', '.ts', '.tsx'] }),\n      babel({\n        babelHelpers: 'bundled',\n        babelrc: false,\n        presets: [['@babel/preset-typescript', { allowNamespaces: true }], '@babel/preset-react'],\n        plugins: [\n          ['@babel/plugin-proposal-decorators', { legacy: true }],\n          ['@babel/plugin-proposal-class-properties', { loose: true }],\n        ],\n        extensions: ['.js', '.jsx', '.ts', '.tsx'],\n      }),\n      commonjs({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),\n    ],\n  };\n}\n\nexport default [createConfig('system'), createConfig('umd')];\n")),(0,r.kt)("h2",m({},{id:"babel"}),"babel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/rollup/plugins/tree/master/packages/babel"}),"https://github.com/rollup/plugins/tree/master/packages/babel"))))}N.isMDXComponent=!0}}]);