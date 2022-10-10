"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90149],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58212:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return f}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&m(e,a,t[a]);return e};const d={title:"ESM"},c="ESM",k={unversionedId:"web/spec/esm",id:"web/spec/esm",title:"ESM",description:"| Can I Use                                                       | Chrome      | Safari       |",source:"@site/../notes/web/spec/esm.md",sourceDirName:"web/spec",slug:"/web/spec/esm",permalink:"/notes/web/spec/esm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/esm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1665234509,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{title:"ESM"},sidebar:"docs",previous:{title:"ECMAScript Version",permalink:"/notes/web/spec/ecmascript-version"},next:{title:"FedCM",permalink:"/notes/web/spec/fedcm"}},h={},f=[{value:"import map",id:"import-map",level:2},{value:"import json",id:"import-json",level:2},{value:"exports",id:"exports",level:2},{value:"NodeJS",id:"nodejs",level:2},{value:"Internal",id:"internal",level:2},{value:"Directory import is not supported resolving ES modules",id:"directory-import-is-not-supported-resolving-es-modules",level:2},{value:"__dirname is not defined in ES module scope",id:"__dirname-is-not-defined-in-es-module-scope",level:2},{value:"Failed to resolve module references must start with",id:"failed-to-resolve-module-references-must-start-with",level:2},{value:"An import map is added after module script load was triggered.",id:"an-import-map-is-added-after-module-script-load-was-triggered",level:2},{value:"process.env.NODE_ENV",id:"processenvnode_env",level:2},{value:"Module not found: Default condition should be last one",id:"module-not-found-default-condition-should-be-last-one",level:2},{value:"NextJS Cannot find module without suffix",id:"nextjs-cannot-find-module-without-suffix",level:2},{value:"require() of ES Module not supported",id:"require-of-es-module-not-supported",level:2},{value:"__esModule",id:"__esmodule",level:2}],N={toc:f};function g(e){var t,a=e,{components:n}=a,m=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},N),m),l(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"esm"}),"ESM"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Can I Use"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Chrome"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Safari"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"https://caniuse.com/es6-module"}),"module")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Chrome v61+"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"https://caniuse.com/es6-module-dynamic-import"}),"dynamic-import")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Chrome 63+"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Safari 11.1+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"https://caniuse.com/import-maps"}),"import-maps")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Chrome 89+"),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",u({parentName:"p"},{href:"/notes/web/browser/caniuse"}),"Can I Use"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet"}),"CSSStyleSheet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u6784\u5efa\u6837\u5f0f\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 @import"))),(0,r.kt)("li",{parentName:"ul"},"Arbitrary module namespace identifier names ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/tc39/ecma262/pull/2154"}),"https://github.com/tc39/ecma262/pull/2154")),(0,r.kt)("li",{parentName:"ul"},"Abstract Module Record ",(0,r.kt)("a",u({parentName:"li"},{href:"https://tc39.es/ecma262/#sec-abstract-module-records"}),"https://tc39.es/ecma262/#sec-abstract-module-records"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"link, evaluate, getExportedNames, resolveExport"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://rollupjs.org/repl"}),"https://rollupjs.org/repl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b ESM \u5728 amd, cs, iife, umd, systemjs \u4e4b\u95f4\u662f\u5982\u4f55\u8f6c\u6362\u7684"),(0,r.kt)("li",{parentName:"ul"},"assert type ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/3799"}),"rollup#3799")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fastify/fastify/issues/2847"}),"fastify#2847"),"\nTimeline for ESM migration"))),(0,r.kt)("li",{parentName:"ul"},"asert type - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/tc39/proposal-import-assertions"}),"https://github.com/tc39/proposal-import-assertions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"css, json, javascript, webassembly"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'import("foo.json", { assert: { type: "json" } })')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"export { val } from './foo.js' assert { type: \"javascript\" };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'<script src="foo.wasm" type="module" asserttype="webassembly"><\/script>')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/WICG/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md"}),"CSS Modules V1 Explainer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CSS module scripts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Chrome 93 - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://chromestatus.com/feature/5948572598009856"}),"https://chromestatus.com/feature/5948572598009856")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/tc39/proposal-json-modules"}),"JSON Module"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Chrome 91 - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://chromestatus.com/feature/5749863620804608"}),"https://chromestatus.com/feature/5749863620804608")),(0,r.kt)("li",{parentName:"ul"},"JSON \u662f\u53ef\u4fee\u6539\u5bf9\u8c61"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"snowpack"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ESM unbundled dev")))),(0,r.kt)("admonition",u({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"react \u6ca1\u6709 esm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'import React from "https://esm.sh/react@17"')))),(0,r.kt)("li",{parentName:"ul"},"electron \u4e0d\u652f\u6301 esm ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/electron/electron/issues/21457"}),"#21457")))),(0,r.kt)("admonition",u({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Node \u652f\u6301 HTTPS import",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"--experimental-loader ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/nodejs/node/pull/36328"}),"nodejs/node#36328")))),(0,r.kt)("li",{parentName:"ul"},"NextJS \u652f\u6301 - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://nextjs.org/docs/api-reference/next.config.js/url-imports"}),"URL Imports")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"// reexport default\nexport {default /* \u2026, */} from 'module-name';\n\n// import \u4e3a\u4e00\u4e2a Module\nimport * as Reaction from '@wener/reaction'\n// \u6a21\u5757 reexport\nexport * from '@wener/reaction'\n\nimport 'data:text/javascript,console.log(\"hello!\");';\nimport _ from 'data:application/json,\"world!\"' assert {type: 'json'};\n\nimport fs from 'node:fs/promises';\n\n// dyanmic import json\nconst pkgJsonModule = await import('https://cdn.jsdelivr.net/npm/@wener/reaction@latest/package.json', {assert: {type: 'json'}});\n// \u901a\u8fc7 toStringTag \u5224\u65ad\u662f\u5426\u4e3a Module\nconsole.assert(pkgJsonModule[Symbol.toStringTag] === 'Modoule')\ncons {default:{version}} = pkgJsonModule\nconsole.log(version)\n\n// CSS Module\nimport styles from \"./styles.css\" assert { type: \"css\" };\ndocument.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MIME",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"text/javascript"),(0,r.kt)("li",{parentName:"ul"},"application/json"),(0,r.kt)("li",{parentName:"ul"},"application/wasm"))),(0,r.kt)("li",{parentName:"ul"},"Protocol",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"node:"),(0,r.kt)("li",{parentName:"ul"},"http:"),(0,r.kt)("li",{parentName:"ul"},"https:"))),(0,r.kt)("li",{parentName:"ul"},"import.meta",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.proposals.es/proposals/import.meta"}),"https://www.proposals.es/proposals/import.meta")))),(0,r.kt)("li",{parentName:"ul"},"import.meta.url"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import.meta.resolve(specifier[, parent])"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Chrome 105"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/whatwg/html/issues/8077"}),"https://github.com/whatwg/html/issues/8077")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://html.spec.whatwg.org/#hostgetimportmetaproperties"}),"https://html.spec.whatwg.org/#hostgetimportmetaproperties")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"await import.meta.resolve('./dep', import.meta.url)")))),(0,r.kt)("li",{parentName:"ul"},"import.meta.env",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MODE,BASE_URL,PROD,DEV,SSR - ViteJS"))),(0,r.kt)("li",{parentName:"ul"},"import.meta",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"tsconfig.json \u9700\u8981\u5b9a\u4e49 target \u4e3a esnext")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/guybedford/es-module-shims"}),"guybedford/es-module-shims"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"es-module-lexer - shim \u65f6 wasm \u5feb\u901f\u5206\u6790 js \u5185 import"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 importmap \u7684\u6d4f\u89c8\u5668\u4f1a\u66f4\u5feb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/guybedford/es-module-lexer"}),"guybedford/es-module-lexer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"C \u5b9e\u73b0 - wasi \u7f16\u8bd1\u4e3a wasm"),(0,r.kt)("li",{parentName:"ul"},"11.3kB/5.4kB"),(0,r.kt)("li",{parentName:"ul"},"Angular (720KiB) fully parsed in 5ms"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c"}),"Pure ESM package"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-html"}),'\x3c!--\n  JSPM Generator Import Map\n  Edit URL: https://generator.jspm.io/#U2NhYGBkDM0rySzJSU1hKEpNTC5xMLTQM9QzAADeRmOTGwA\n--\x3e\n<script type="importmap">\n  {\n    "imports": {\n      "react": "https://ga.jspm.io/npm:react@18.1.0/index.js"\n    }\n  }\n<\/script>\n\n\x3c!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) --\x3e\n<script\n  async\n  src="https://ga.jspm.io/npm:es-module-shims@1.5.1/dist/es-module-shims.js"\n  crossorigin="anonymous"\n><\/script>\n')),(0,r.kt)("h2",u({},{id:"import-map"}),"import map"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chrome v89+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/wicg/import-maps"}),"https://github.com/wicg/import-maps"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/wicg/import-maps#community-polyfills-and-tooling"}),"polyfills and tooling")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://modern-web.dev/docs/dev-server/plugins/import-maps/"}),"https://modern-web.dev/docs/dev-server/plugins/import-maps/"))),(0,r.kt)("admonition",u({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u652f\u6301 web - \u4e0d\u652f\u6301 worker"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u811a\u672c\u52a8\u6001\u6784\u5efa element"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u6620\u5c04\u4e3a\u672c\u5730"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-html"}),'<script type="importmap">\n  {\n    "imports": {\n      "moment": "/node_modules/moment/src/moment.js",\n      "lodash": "/node_modules/lodash-es/lodash.js"\n    }\n  }\n<\/script>\n\x3c!-- application/importmap+json --\x3e\n<script type="importmap" src="import-map.importmap"><\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-html",metastring:'title="\u52a8\u6001\u6784\u5efa"',title:'"\u52a8\u6001\u6784\u5efa"'}),"<script>\n  if (HTMLScriptElement.supports && HTMLScriptElement.supports('importmap')) {\n    console.log('Your browser supports import maps.');\n  }\n\n  const importMap = {\n    imports: {\n      moment: '/moment.mjs',\n      lodash: someFeatureDetection() ? '/lodash.mjs' : '/lodash-legacy-browsers.mjs',\n    },\n  };\n\n  const im = document.createElement('script');\n  im.type = 'importmap';\n  im.textContent = JSON.stringify(importMap);\n  document.currentScript.after(im);\n<\/script>\n\n<script type=\"module\">\n  import _ from 'lodash'; // will fetch the right URL for this browser\n<\/script>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:'title="importmap \u89c4\u8303"',title:'"importmap','\u89c4\u8303"':!0}),'{\n  "imports": {\n    // import moment from "moment";\n    "moment": "/node_modules/moment/src/moment.js",\n    // \u81ea\u52a8\u6620\u5c04\n    // import localeData from "moment/locale/zh-cn.js";\n    "moment/": "/node_modules/moment/src/",\n    "lodash": "/node_modules/lodash-es/lodash.js",\n    // import fp from "lodash/fp.js";\n    "lodash/": "/node_modules/lodash-es/",\n    // \u65e0\u6269\u5c55\u540d\n    // import fp from "lodash/fp"\n    "lodash/fp": "/node_modules/lodash-es/fp.js",\n\n    // remapping - \u5bf9 <script> \u4e0d\u751f\u6548\n    "https://www.unpkg.com/vue/dist/vue.runtime.esm.js": "/node_modules/vue/dist/vue.runtime.esm.js",\n    // \u524d\u7f00 remmaping\n    "https://www.unpkg.com/vue/": "/node_modules/vue/",\n    "/app/helpers.mjs": "/app/helpers/index.mjs",\n\n    // \u5e38\u89c1\u5904\u7406 hash \u573a\u666f\n    "/js/app.mjs": "/js/app-8e0d62a03.mjs"\n  },\n  // \u9650\u5b9a\u4e0a\u4e0b\u6587\uff0c\u4fee\u6539\u4f9d\u8d56\n  "scopes": {\n    "/scope2/": {\n      "a": "/a-2.mjs"\n    },\n    "/scope2/scope3/": {\n      "b": "/b-3.mjs"\n    }\n  }\n}\n')),(0,r.kt)("h2",u({},{id:"import-json"}),"import json"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS v17.1+ 2021-11-09")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),'import info from `./package.json` assert { type: `json` };\n\nconst { default: info } = await import("./package.json", {\n  assert: {\n    type: "json",\n  },\n});\n')),(0,r.kt)("h2",u({},{id:"exports"}),"exports"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://cdn.skypack.dev/@wener/reaction@v1.2.3/dist=es2020?meta"}),"https://cdn.skypack.dev/@wener/reaction@v1.2.3/dist=es2020?meta"))),(0,r.kt)("h2",u({},{id:"nodejs"}),"NodeJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS 12+",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NodeJS 10 EOL 2021-04"),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u5c31\u662f\u8bf4\u76ee\u524d\u6240\u6709 NodeJS \u73af\u5883\u90fd\u652f\u6301 ESM"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/nodejs/node/issues/33954"}),"When will CommonJS modules (require) be deprecated and removed? #33954")),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d ESM \u4f1a\u6162\u4e00\u70b9 ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/nodejs/node/issues/44186"}),"#44186")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/nodejs/loaders"}),"nodejs/loaders"))),(0,r.kt)("h2",u({},{id:"internal"}),"Internal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/guybedford/import-maps-extensions"}),"https://github.com/guybedford/import-maps-extensions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import:")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/guybedford/es-module-shims"}),"https://github.com/guybedford/es-module-shims")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/wicg/import-maps"}),"https://github.com/wicg/import-maps"))),(0,r.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",u({},{id:"directory-import-is-not-supported-resolving-es-modules"}),"Directory import is not supported resolving ES modules"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"// \u4e0d\u53ef\u4ee5\nconst M = import('./modules/core')\n// \u53ef\u4ee5\nconst M = import('./modules/core/index.js')\n")),(0,r.kt)("h2",u({},{id:"__dirname-is-not-defined-in-es-module-scope"}),"_","_","dirname is not defined in ES module scope"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6700\u597d\u7528 var \u907f\u514d\u91cd\u590d\u5b9a\u4e49\uff0c\u6709\u4e9b bundle \u4f1a\u52a0\u8fd9\u4e24\u4e2a\u5b9a\u4e49")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"import * as url from 'url';\nvar __filename = url.fileURLToPath(import.meta.url);\nvar __dirname = url.fileURLToPath(new URL('.', import.meta.url));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import {fileURLToPath} from 'node:url';\nimport path from 'node:path';\n\nvar __filename = fileURLToPath(import.meta.url);\nvar __dirname = path.dirname(fileURLToPath(import.meta.url));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"// \u65b0\u7684 NodeJS \u4e5f\u652f\u6301 URL\uff0c\u53ef\u4ee5\u76f4\u63a5 resolve\nconst foo = new URL('foo.js', import.meta.url);\n")),(0,r.kt)("h2",u({},{id:"failed-to-resolve-module-references-must-start-with"}),"Failed to resolve module references must start with"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'Failed to resolve module specifier "app". Relative references must start with either "/", "./", or "../".\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/guybedford/es-module-shims"}),"https://github.com/guybedford/es-module-shims"))),(0,r.kt)("h2",u({},{id:"an-import-map-is-added-after-module-script-load-was-triggered"}),"An import map is added after module script load was triggered."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/WICG/import-maps/issues/248"}),"https://github.com/WICG/import-maps/issues/248"))),(0,r.kt)("h2",u({},{id:"processenvnode_env"}),"process.env.NODE_ENV"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import.meta.env.MODE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__DEV__")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"import.meta.env.DEV")),(0,r.kt)("li",{parentName:"ul"},"import.meta.env.PROD")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"declare global {\n  interface ImportMetaEnv extends Readonly<Record<string, any>> {\n    readonly MODE: string;\n    readonly BASE_URL: string;\n    readonly DEV: boolean;\n    readonly PROD: boolean;\n    readonly SSR: boolean;\n  }\n\n  interface ImportMeta {\n    readonly env: ImportMetaEnv;\n  }\n}\n")),(0,r.kt)("h2",u({},{id:"module-not-found-default-condition-should-be-last-one"}),"Module not found: Default condition should be last one"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default \u8981\u653e\u5728\u6700\u540e")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "exports": {\n    ".": {\n      "types": "./src/index.ts",\n      "development": "./dist/esm/wener-reaction.development.js",\n      "import": "./lib/esm/index.js",\n      "require": "./lib/cjs/index.js",\n      "default": "./lib/esm/index.js"\n    }\n  }\n}\n')),(0,r.kt)("h2",u({},{id:"nextjs-cannot-find-module-without-suffix"}),"NextJS Cannot find module without suffix"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4f7f\u7528 bundle \u540e\u7684\u6587\u4ef6 - \u65e0\u6cd5 tree-shake"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 mjs \u540e\u7f00 - \u4f1a\u5ffd\u7565 type:module")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"build \u540e\u7684 import \u4e5f\u8981\u6539\u6210\u5e26\u540e\u7f00"),(0,r.kt)("li",{parentName:"ul"},"rollup ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/framer/motion/blob/main/packages/framer-motion/rollup.config.js"}),"https://github.com/framer/motion/blob/main/packages/framer-motion/rollup.config.js"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://unpkg.com/browse/framer-motion@7.3.2/dist/es/index.mjs"}),"https://unpkg.com/browse/framer-motion@7.3.2/dist/es/index.mjs")))),(0,r.kt)("li",{parentName:"ul"},"esbuild external \u53ef\u4ee5\u81ea\u5df1\u52a0\u63d2\u4ef6 ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/1505"}),"https://github.com/evanw/esbuild/issues/1505")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/2435"}),"esbuild#2435"))),(0,r.kt)("ol",u({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"\u907f\u514d default exports")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@wener/reaction/lib/esm/index.js",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"import \u4e86\u53e6\u5916\u4e00\u4e2a\u6587\u4ef6\uff0c\u4f46\u662f\u6ca1\u6709\u540e\u7f00\uff0c\u4f1a\u5bfc\u81f4\u627e\u4e0d\u5230"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/vercel/next.js/issues/39375"}),"https://github.com/vercel/next.js/issues/39375")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://unpkg.com/browse/framer-motion@7.3.2/package.json"}),"https://unpkg.com/browse/framer-motion@7.3.2/package.json"))),(0,r.kt)("h2",u({},{id:"require-of-es-module-not-supported"}),"require() of ES Module not supported"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type=module")),(0,r.kt)("h2",u({},{id:"__esmodule"}),"__esModule"))}g.isMDXComponent=!0}}]);