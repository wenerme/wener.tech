"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90149],{49613:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},i),{},{components:n})):a.createElement(k,o({ref:t},i))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],m={title:"ESM"},s="ESM",p={unversionedId:"web/spec/esm",id:"web/spec/esm",title:"ESM",description:"| Can I Use                                                       | Chrome      | Safari       |",source:"@site/../notes/web/spec/esm.md",sourceDirName:"web/spec",slug:"/web/spec/esm",permalink:"/notes/web/spec/esm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/spec/esm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ESM"},sidebar:"docs",previous:{title:"ECMAScript Version",permalink:"/notes/web/spec/ecmascript-version"},next:{title:"FedCM",permalink:"/notes/web/spec/fedcm"}},i={},u=[{value:"import map",id:"import-map",level:2},{value:"CDN",id:"cdn",level:2},{value:"CDN Test",id:"cdn-test",level:3},{value:"esm.sh",id:"esmsh",level:2},{value:"import json",id:"import-json",level:2},{value:"__dirname is not defined in ES module scope",id:"__dirname-is-not-defined-in-es-module-scope",level:2},{value:"Failed to resolve module references must start with",id:"failed-to-resolve-module-references-must-start-with",level:2},{value:"An import map is added after module script load was triggered.",id:"an-import-map-is-added-after-module-script-load-was-triggered",level:2},{value:"process.env.NODE_ENV",id:"processenvnode_env",level:2},{value:"Module not found: Default condition should be last one",id:"module-not-found-default-condition-should-be-last-one",level:2},{value:"NextJS Cannot find module without suffix",id:"nextjs-cannot-find-module-without-suffix",level:2},{value:"require() of ES Module not supported",id:"require-of-es-module-not-supported",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"esm"},"ESM"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Can I Use"),(0,l.kt)("th",{parentName:"tr",align:null},"Chrome"),(0,l.kt)("th",{parentName:"tr",align:null},"Safari"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://caniuse.com/es6-module"},"module")),(0,l.kt)("td",{parentName:"tr",align:null},"Chrome v61+"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://caniuse.com/es6-module-dynamic-import"},"dynamic-import")),(0,l.kt)("td",{parentName:"tr",align:null},"Chrome 63+"),(0,l.kt)("td",{parentName:"tr",align:null},"Safari 11.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://caniuse.com/import-maps"},"import-maps")),(0,l.kt)("td",{parentName:"tr",align:null},"Chrome 89+"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet"},"CSSStyleSheet"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u6784\u5efa\u6837\u5f0f\u8868"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 @import"))),(0,l.kt)("li",{parentName:"ul"},"Arbitrary module namespace identifier names ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39/ecma262/pull/2154"},"https://github.com/tc39/ecma262/pull/2154")),(0,l.kt)("li",{parentName:"ul"},"Abstract Module Record ",(0,l.kt)("a",{parentName:"li",href:"https://tc39.es/ecma262/#sec-abstract-module-records"},"https://tc39.es/ecma262/#sec-abstract-module-records"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"link, evaluate, getExportedNames, resolveExport"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rollupjs.org/repl"},"https://rollupjs.org/repl"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b ESM \u5728 amd, cs, iife, umd, systemjs \u4e4b\u95f4\u662f\u5982\u4f55\u8f6c\u6362\u7684"),(0,l.kt)("li",{parentName:"ul"},"assert type ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rollup/rollup/issues/3799"},"rollup#3799")))))),(0,l.kt)("li",{parentName:"ul"},"asert type - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-import-assertions"},"https://github.com/tc39/proposal-import-assertions"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"css, json, javascript, webassembly"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'import("foo.json", { assert: { type: "json" } })')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export { val } from './foo.js' assert { type: \"javascript\" };")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'<script src="foo.wasm" type="module" asserttype="webassembly"><\/script>')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/WICG/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md"},"CSS Modules V1 Explainer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CSS module scripts",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chrome 93 - ",(0,l.kt)("a",{parentName:"li",href:"https://chromestatus.com/feature/5948572598009856"},"https://chromestatus.com/feature/5948572598009856")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-json-modules"},"JSON Module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chrome 91 - ",(0,l.kt)("a",{parentName:"li",href:"https://chromestatus.com/feature/5749863620804608"},"https://chromestatus.com/feature/5749863620804608"))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"react \u6ca1\u6709 esm",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'import React from "https://esm.sh/react@17"')))),(0,l.kt)("li",{parentName:"ul"},"electron \u4e0d\u652f\u6301 esm ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/21457"},"#21457")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Node \u652f\u6301 HTTPS import",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"--experimental-loader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node/pull/36328"},"nodejs/node#36328")))),(0,l.kt)("li",{parentName:"ul"},"NextJS \u652f\u6301 - ",(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next.config.js/url-imports"},"URL Imports")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// reexport default\nexport {default /* \u2026, */} from 'module-name';\n\n// import \u4e3a\u4e00\u4e2a Module\nimport * as Reaction from '@wener/reaction'\n// \u6a21\u5757 reexport\nexport * from '@wener/reaction'\n\nimport 'data:text/javascript,console.log(\"hello!\");';\nimport _ from 'data:application/json,\"world!\"' assert {type: 'json'};\n\nimport fs from 'node:fs/promises';\n\n// dyanmic import json\nconst pkgJsonModule = await import('https://cdn.jsdelivr.net/npm/@wener/reaction@latest/package.json', {assert: {type: 'json'}});\n// \u901a\u8fc7 toStringTag \u5224\u65ad\u662f\u5426\u4e3a Module\nconsole.assert(pkgJsonModule[Symbol.toStringTag] === 'Modoule')\ncons {default:{version}} = pkgJsonModule\nconsole.log(version)\n\n// CSS Module\nimport styles from \"./styles.css\" assert { type: \"css\" };\ndocument.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MIME",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"text/javascript"),(0,l.kt)("li",{parentName:"ul"},"application/json"),(0,l.kt)("li",{parentName:"ul"},"application/wasm"))),(0,l.kt)("li",{parentName:"ul"},"Protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"node:"),(0,l.kt)("li",{parentName:"ul"},"http:"),(0,l.kt)("li",{parentName:"ul"},"https:"))),(0,l.kt)("li",{parentName:"ul"},"import.meta.url"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import.meta.resolve(specifier[, parent])"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"await import.meta.resolve('./dep', import.meta.url)")))),(0,l.kt)("li",{parentName:"ul"},"import.meta.env",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MODE,BASE_URL,PROD,DEV,SSR - ViteJS"))),(0,l.kt)("li",{parentName:"ul"},"import.meta",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tsconfig.json \u9700\u8981\u5b9a\u4e49 target \u4e3a esnext")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/guybedford/es-module-shims"},"guybedford/es-module-shims"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/guybedford/es-module-lexer"},"guybedford/es-module-lexer"),"\nshim \u65f6 wasm \u5feb\u901f\u5206\u6790 js \u5185 import"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 importmap \u7684\u6d4f\u89c8\u5668\u4f1a\u66f4\u5feb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c"},"Pure ESM package"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n  JSPM Generator Import Map\n  Edit URL: https://generator.jspm.io/#U2NhYGBkDM0rySzJSU1hKEpNTC5xMLTQM9QzAADeRmOTGwA\n--\x3e\n<script type="importmap">\n  {\n    "imports": {\n      "react": "https://ga.jspm.io/npm:react@18.1.0/index.js"\n    }\n  }\n<\/script>\n\n\x3c!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) --\x3e\n<script\n  async\n  src="https://ga.jspm.io/npm:es-module-shims@1.5.1/dist/es-module-shims.js"\n  crossorigin="anonymous"\n><\/script>\n')),(0,l.kt)("h2",{id:"import-map"},"import map"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome v89+"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wicg/import-maps"},"https://github.com/wicg/import-maps"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wicg/import-maps#community-polyfills-and-tooling"},"polyfills and tooling")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://modern-web.dev/docs/dev-server/plugins/import-maps/"},"https://modern-web.dev/docs/dev-server/plugins/import-maps/"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u652f\u6301 web - \u4e0d\u652f\u6301 worker"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u811a\u672c\u52a8\u6001\u6784\u5efa element"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u6620\u5c04\u4e3a\u672c\u5730"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script type="importmap">\n  {\n    "imports": {\n      "moment": "/node_modules/moment/src/moment.js",\n      "lodash": "/node_modules/lodash-es/lodash.js"\n    }\n  }\n<\/script>\n\x3c!-- application/importmap+json --\x3e\n<script type="importmap" src="import-map.importmap"><\/script>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\u52a8\u6001\u6784\u5efa"',title:'"\u52a8\u6001\u6784\u5efa"'},"<script>\n  if (HTMLScriptElement.supports && HTMLScriptElement.supports('importmap')) {\n    console.log('Your browser supports import maps.');\n  }\n\n  const importMap = {\n    imports: {\n      moment: '/moment.mjs',\n      lodash: someFeatureDetection() ? '/lodash.mjs' : '/lodash-legacy-browsers.mjs',\n    },\n  };\n\n  const im = document.createElement('script');\n  im.type = 'importmap';\n  im.textContent = JSON.stringify(importMap);\n  document.currentScript.after(im);\n<\/script>\n\n<script type=\"module\">\n  import _ from 'lodash'; // will fetch the right URL for this browser\n<\/script>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="importmap \u89c4\u8303"',title:'"importmap','\u89c4\u8303"':!0},'{\n  "imports": {\n    // import moment from "moment";\n    "moment": "/node_modules/moment/src/moment.js",\n    // \u81ea\u52a8\u6620\u5c04\n    // import localeData from "moment/locale/zh-cn.js";\n    "moment/": "/node_modules/moment/src/",\n    "lodash": "/node_modules/lodash-es/lodash.js",\n    // import fp from "lodash/fp.js";\n    "lodash/": "/node_modules/lodash-es/",\n    // \u65e0\u6269\u5c55\u540d\n    // import fp from "lodash/fp"\n    "lodash/fp": "/node_modules/lodash-es/fp.js",\n\n    // remapping - \u5bf9 <script> \u4e0d\u751f\u6548\n    "https://www.unpkg.com/vue/dist/vue.runtime.esm.js": "/node_modules/vue/dist/vue.runtime.esm.js",\n    // \u524d\u7f00 remmaping\n    "https://www.unpkg.com/vue/": "/node_modules/vue/",\n    "/app/helpers.mjs": "/app/helpers/index.mjs",\n\n    // \u5e38\u89c1\u5904\u7406 hash \u573a\u666f\n    "/js/app.mjs": "/js/app-8e0d62a03.mjs"\n  },\n  // \u9650\u5b9a\u4e0a\u4e0b\u6587\uff0c\u4fee\u6539\u4f9d\u8d56\n  "scopes": {\n    "/scope2/": {\n      "a": "/a-2.mjs"\n    },\n    "/scope2/scope3/": {\n      "b": "/b-3.mjs"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"cdn"},"CDN"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"cdn"),(0,l.kt)("th",{parentName:"tr",align:null},"import"),(0,l.kt)("th",{parentName:"tr",align:null},"github"),(0,l.kt)("th",{parentName:"tr",align:null},"cjs -> esm"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Skypack"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://cdn.skypack.dev/"},"https://cdn.skypack.dev/")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://esm.sh/"},"esm.sh")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://esm.sh/"},"https://esm.sh/")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/esm-dev/esm.sh"},"esm-dev/esm.sh")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsDelivr"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://cdn.jsdelivr.net/npm/"},"https://cdn.jsdelivr.net/npm/")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSPM"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ga.jspm.io/npm:pkg@x.y.z/"},"https://ga.jspm.io/npm:pkg@x.y.z/")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jspm/project"},"jspm/project")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unpkg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://unpkg.com/$%7BPKG%7D?module"},"https://unpkg.com/${PKG}?module")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mjackson/unpkg"},"mjackson/unpkg")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSPM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u652f\u6301 systemjs")))),(0,l.kt)("li",{parentName:"ul"},"jsdelivr \u63d0\u4f9b esm.run \u522b\u540d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esm.run/react"},"https://esm.run/react")," -> ",(0,l.kt)("a",{parentName:"li",href:"https://cdn.jsdelivr.net/npm/react/+esm"},"https://cdn.jsdelivr.net/npm/react/+esm"))))),(0,l.kt)("h3",{id:"cdn-test"},"CDN Test"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esm.run/react@17"},"https://esm.run/react@17")," -> ",(0,l.kt)("a",{parentName:"li",href:"https://cdn.jsdelivr.net/npm/react@17/+esm"},"https://cdn.jsdelivr.net/npm/react@17/+esm")," - \u4f9d\u7136\u662f CJS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'for i in $(seq 3); do\n\n  rm bench-*.txt\n  for i in $(seq 10); do\n    curl -o /dev/null -s -w "%{time_total}\\n" https://cdn.skypack.dev/react@17 >> bench-a.txt\n    curl -o /dev/null -s -w "%{time_total}\\n" https://cdn.jsdelivr.net/npm/react@17/+esm >> bench-b.txt\n    curl -o /dev/null -s -w "%{time_total}\\n" https://esm.sh/react@17 >> bench-c.txt\n  done\n  for i in bench-*.txt; do\n    echo $i\n    awk \'{ total += $1; count++ } END { print total/count }\' $i\n  done\n\ndone\n')),(0,l.kt)("h2",{id:"esmsh"},"esm.sh"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 Selfhosted"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u670d\u52a1\u5668\u5728 HK"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e esbuild \u6784\u5efa"),(0,l.kt)("li",{parentName:"ul"},"cjs -> esm \u4f7f\u7528 swc"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 X-Typescript-Types \u5934 - demo \u7c7b\u578b\u68c0\u6d4b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?no-check")," \u7981\u7528")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'https://esm.sh/react@17';\n// \u975e\u6a21\u5757\u6587\u4ef6\nimport 'https://esm.sh/tailwindcss/dist/tailwind.min.css';\n// bundle \u6a21\u5f0f\nimport {Button} from 'https://esm.sh/antd?bundle';\n// \u5f00\u53d1\u6a21\u5f0f\nimport React from 'https://esm.sh/react?dev';\n// \u4f9d\u8d56\u63a7\u5236\nimport React from 'https://esm.sh/react@16.14.0';\nimport useSWR from 'https://esm.sh/swr?deps=react@16.14.0';\n// \u522b\u540d\nimport useSWR from 'https://esm.sh/swr?alias=react:preact/compat&deps=preact@10.5.14';\n// \u76ee\u6807\u7248\u672c - \u9ed8\u8ba4\u57fa\u4e8e header \u5224\u65ad\nimport React from 'https://esm.sh/react?target=es2020';\n// WebWorker\nimport editorWorker from '/monaco-editor/esm/vs/editor/editor.worker?worker';\nconst worker = new editorWorker();\n")),(0,l.kt)("h2",{id:"import-json"},"import json"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NodeJS v17.1+ 2021-11-09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import info from `./package.json` assert { type: `json` };\n\nconst { default: info } = await import("./package.json", {\n  assert: {\n    type: "json",\n  },\n});\n')),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"__dirname-is-not-defined-in-es-module-scope"},"_","_","dirname is not defined in ES module scope"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as url from 'url';\nconst __filename = url.fileURLToPath(import.meta.url);\nconst __dirname = url.fileURLToPath(new URL('.', import.meta.url));\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import {fileURLToPath} from 'node:url';\nimport path from 'node:path';\n\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = path.dirname(fileURLToPath(import.meta.url));\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u65b0\u7684 NodeJS \u4e5f\u652f\u6301 URL\uff0c\u53ef\u4ee5\u76f4\u63a5 resolve\nconst foo = new URL('foo.js', import.meta.url);\n")),(0,l.kt)("h2",{id:"failed-to-resolve-module-references-must-start-with"},"Failed to resolve module references must start with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Failed to resolve module specifier "app". Relative references must start with either "/", "./", or "../".\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/guybedford/es-module-shims"},"https://github.com/guybedford/es-module-shims"))),(0,l.kt)("h2",{id:"an-import-map-is-added-after-module-script-load-was-triggered"},"An import map is added after module script load was triggered."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/WICG/import-maps/issues/248"},"https://github.com/WICG/import-maps/issues/248"))),(0,l.kt)("h2",{id:"processenvnode_env"},"process.env.NODE_ENV"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import.meta.env.MODE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__DEV__")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"import.meta.env.DEV")),(0,l.kt)("li",{parentName:"ul"},"import.meta.env.PROD")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"declare global {\n  interface ImportMetaEnv extends Readonly<Record<string, any>> {\n    readonly MODE: string;\n    readonly BASE_URL: string;\n    readonly DEV: boolean;\n    readonly PROD: boolean;\n    readonly SSR: boolean;\n  }\n\n  interface ImportMeta {\n    readonly env: ImportMetaEnv;\n  }\n}\n")),(0,l.kt)("h2",{id:"module-not-found-default-condition-should-be-last-one"},"Module not found: Default condition should be last one"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"default \u8981\u653e\u5728\u6700\u540e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exports": {\n    ".": {\n      "types": "./src/index.ts",\n      "development": "./dist/esm/wener-reaction.development.js",\n      "import": "./lib/esm/index.js",\n      "require": "./lib/cjs/index.js",\n      "default": "./lib/esm/index.js"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"nextjs-cannot-find-module-without-suffix"},"NextJS Cannot find module without suffix"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4f7f\u7528 bundle \u540e\u7684\u6587\u4ef6 - \u65e0\u6cd5 tree-shake"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 mjs \u540e\u7f00 - \u4f1a\u5ffd\u7565 type:module")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"build \u540e\u7684 import \u4e5f\u8981\u6539\u6210\u5e26\u540e\u7f00"),(0,l.kt)("li",{parentName:"ul"},"rollup ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/framer/motion/blob/main/packages/framer-motion/rollup.config.js"},"https://github.com/framer/motion/blob/main/packages/framer-motion/rollup.config.js"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://unpkg.com/browse/framer-motion@7.3.2/dist/es/index.mjs"},"https://unpkg.com/browse/framer-motion@7.3.2/dist/es/index.mjs")))),(0,l.kt)("li",{parentName:"ul"},"esbuild external \u53ef\u4ee5\u81ea\u5df1\u52a0\u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/1505"},"https://github.com/evanw/esbuild/issues/1505")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/2435"},"esbuild#2435"))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u907f\u514d default exports")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@wener/reaction/lib/esm/index.js",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"import \u4e86\u53e6\u5916\u4e00\u4e2a\u6587\u4ef6\uff0c\u4f46\u662f\u6ca1\u6709\u540e\u7f00\uff0c\u4f1a\u5bfc\u81f4\u627e\u4e0d\u5230"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/issues/39375"},"https://github.com/vercel/next.js/issues/39375")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://unpkg.com/browse/framer-motion@7.3.2/package.json"},"https://unpkg.com/browse/framer-motion@7.3.2/package.json"))),(0,l.kt)("h2",{id:"require-of-es-module-not-supported"},"require() of ES Module not supported"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"type=module")))}c.isMDXComponent=!0}}]);