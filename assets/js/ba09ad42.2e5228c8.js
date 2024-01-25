/*! For license information please see ba09ad42.2e5228c8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97251],{16858:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(11527),l=s(47214);const r={title:"NodeJS FAQ",tags:["FAQ"]},t="NodeJS FAQ",o={id:"web/nodejs/nodejs-faq",title:"NodeJS FAQ",description:"- NODE_OPTIONS",source:"@site/../notes/web/nodejs/nodejs-faq.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/faq",permalink:"/notes/web/nodejs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/nodejs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706172619,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"NodeJS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Debug",permalink:"/notes/web/nodejs/debug"},next:{title:"NodeJS \u7248\u672c",permalink:"/notes/web/nodejs/version"}},d={},c=[{value:"Tool Chain",id:"tool-chain",level:2},{value:"Node Dev",id:"node-dev",level:2},{value:"performance",id:"performance",level:2},{value:"arm64/aarch64 musl",id:"arm64aarch64-musl",level:2},{value:"source map",id:"source-map",level:2},{value:"cjs <code>__dirname</code>",id:"cjs-__dirname",level:2},{value:"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext",id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext",level:2},{value:"Package &#39;OpenEXR&#39;, required by &#39;vips&#39;, not found",id:"package-openexr-required-by-vips-not-found",level:2},{value:"libtool: unrecognized option -static when building",id:"libtool-unrecognized-option--static-when-building",level:2},{value:"require() of ES modules is not supported",id:"require-of-es-modules-is-not-supported",level:2},{value:"NodeJS v18 fetch proxy",id:"nodejs-v18-fetch-proxy",level:2},{value:"RequestInit: duplex option is required when sending a body",id:"requestinit-duplex-option-is-required-when-sending-a-body",level:2},{value:"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted",id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted",level:2},{value:"gyp",id:"gyp",level:2},{value:"Undefined variable module_name in binding.gyp while trying to load binding.gyp",id:"undefined-variable-module_name-in-bindinggyp-while-trying-to-load-bindinggyp",level:2},{value:"Custom ESM Loaders is an experimental feature. This feature could change at any time",id:"custom-esm-loaders-is-an-experimental-feature-this-feature-could-change-at-any-time",level:2},{value:"Reached heap limit Allocation failed - JavaScript heap out of memory",id:"reached-heap-limit-allocation-failed---javascript-heap-out-of-memory",level:2},{value:"Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory",id:"ineffective-mark-compacts-near-heap-limit-allocation-failed---javascript-heap-out-of-memory",level:2},{value:"Can&#39;t resolve &#39;pg-native&#39;",id:"cant-resolve-pg-native",level:2},{value:"REPL load",id:"repl-load",level:2},{value:"error:0308010C envelope routines::unsupported",id:"error0308010c-envelope-routinesunsupported",level:2},{value:"snapshot",id:"snapshot",level:2},{value:"fastify vs express",id:"fastify-vs-express",level:2},{value:"import npm global",id:"import-npm-global",level:2},{value:"ERR_OSSL_EVP_UNSUPPORTED",id:"err_ossl_evp_unsupported",level:2},{value:"getaddrinfo ENOTFOUND undefined",id:"getaddrinfo-enotfound-undefined",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"nodejs-faq",children:"NodeJS FAQ"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NODE_OPTIONS"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6301\u4e45\u5316 DB \u5b58\u50a8\u662f NodeJS \u7684\u5f31\u9879\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7eaf JS \u6ca1\u6709\u597d\u7684\u5b58\u50a8\u5b9e\u73b0"}),"\n",(0,i.jsx)(n.li,{children:"SQLite \u4f9d\u8d56 addon"}),"\n",(0,i.jsx)(n.li,{children:"SQLite over WASM \u8fd8\u4e0d\u6210\u719f"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"tool-chain",children:"Tool Chain"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9759\u6001\u9879\u76ee - ViteJS"}),"\n",(0,i.jsxs)(n.li,{children:["\u524d\u7aef\u9879\u76ee - NextJS+trpc+NestJS - \u590d\u6742\u9879\u76ee\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u90e8\u5206 NestJS \u903b\u8f91\u5171\u7528"}),"\n",(0,i.jsx)(n.li,{children:"\u8f93\u51fa standalone \u6a21\u5f0f - \u76f4\u63a5\u62f7\u8d1d\u5230\u5bb9\u5668\u5373\u53ef"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u540e\u7aef\u9879\u76ee - NestJS+fastify\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5f00\u53d1: ts-node --swc --esm --transpileOnly --watch src/main.ts\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tsx \u4e0d\u652f\u6301 decorator\uff0c\u4e0d\u7136\u53ef\u4ee5\u7528 tsx"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6784\u5efa: esbuild --bundle --external=sharp src/main.ts\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8f93\u51fa\u4e00\u4e2a js \u653e\u5230\u5bb9\u5668\u5373\u53ef"}),"\n",(0,i.jsx)(n.li,{children:"\u6ce8\u610f\u52a0 tsc \u63d2\u4ef6\u5904\u7406 decorator"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u57fa\u7840\u4f9d\u8d56\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"zod"}),"\n",(0,i.jsx)(n.li,{children:"valtio, zustand"}),"\n",(0,i.jsx)(n.li,{children:"daisyui, styled-components"}),"\n",(0,i.jsx)(n.li,{children:"dayjs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm node --loader ts-node/esm --watch ./src/apps/ve-contract-server/main.ts\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "ts-node": {\n    "transpileOnly": true,\n    "swc": true,\n    "esm": true,\n    "files": true,\n    "experimentalSpecifierResolution": "node"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"node-dev",children:"Node Dev"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ts+watch - tsx, ts-node, swc-node\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["+decorator\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ts-node+swc"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["+tsconfig.paths\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tsx, ts-node+tsconfig-paths"}),"\n",(0,i.jsxs)(n.li,{children:["+esm\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tsx"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u76ee\u524d\u8fd8\u6ca1\u6709 esm+tsconfig.paths+decorator \u7684"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ts-node+swc \u95ee\u9898\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e0d\u52a0\u8f7d swcrc \u5bfc\u81f4 paths \u65e0\u6548 ",(0,i.jsx)(n.a,{href:"https://github.com/TypeStrong/ts-node/issues/1856",children:"https://github.com/TypeStrong/ts-node/issues/1856"})]}),"\n",(0,i.jsx)(n.li,{children:"pnpm patch \u4e34\u65f6\u89e3\u51b3"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["esbuild decorator \u95ee\u9898\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/evanw/esbuild/issues/104",children:"https://github.com/evanw/esbuild/issues/104"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/nuxt/nuxt/issues/21756",children:"https://github.com/nuxt/nuxt/issues/21756"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/unjs/nitro/issues/1345",children:"https://github.com/unjs/nitro/issues/1345"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["swc-node \u5904\u7406 .ts \u95ee\u9898\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/swc-project/swc-node/pull/744",children:"https://github.com/swc-project/swc-node/pull/744"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/swc-project/swc-node/issues/710",children:"https://github.com/swc-project/swc-node/issues/710"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["tsconfig-paths esm \u95ee\u9898\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dividab/tsconfig-paths/issues/243",children:"https://github.com/dividab/tsconfig-paths/issues/243"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"performance",children:"performance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["UV_THREADPOOL_SIZE=4\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6700\u5927 1024"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["knex\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pool min:2, max: 10"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"fastify"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/fastify/fast-json-stringify",children:"fast-json-stringify"})}),"\n",(0,i.jsx)(n.li,{children:"find-my-way"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"arm64aarch64-musl",children:"arm64/aarch64 musl"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6682\u65e0"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/nodejs/node/pull/45756",children:"https://github.com/nodejs/node/pull/45756"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/nodejs/unofficial-builds/pull/59",children:"https://github.com/nodejs/unofficial-builds/pull/59"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"source-map",children:"source map"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"sourcemap \u5927\u4e86\u8fc7\u540e\u975e\u5e38\u6162"}),"\n",(0,i.jsxs)(n.li,{children:["\u4f8b\u5982: main.mjs 10mb, main.mjs.map 20mb\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"--enable-source-maps \u542f\u52a8 40s"}),"\n",(0,i.jsx)(n.li,{children:"\u76f4\u63a5\u542f\u52a8 2s"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"-r @cspotcode/source-map-support/register"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["NodeJS 12.12.0 ",(0,i.jsx)(n.a,{href:"https://nodejs.org/docs/latest-v16.x/api/cli.html#--enable-source-maps",children:"--enable-source-maps"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/evanw/node-source-map-support",children:"https://github.com/evanw/node-source-map-support"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cspotcode/source-map-performance-demo#example-output",children:"https://github.com/cspotcode/source-map-performance-demo#example-output"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/cspotcode/node-source-map-support",children:"https://github.com/cspotcode/node-source-map-support"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6027\u80fd\u66f4\u597d"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["esbuild\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6392\u9664 node_modules ",(0,i.jsx)(n.a,{href:"https://github.com/evanw/esbuild/issues/1685#issuecomment-944916409",children:"https://github.com/evanw/esbuild/issues/1685#issuecomment-944916409"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6392\u9664 sourcesContent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5305\u542b\u5b8c\u6574 source code - \u5982\u679c\u53ea\u7528\u4e8e stack trace \u5219\u4e0d\u9700\u8981"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://esbuild.github.io/api/#sources-content",children:"https://esbuild.github.io/api/#sources-content"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import '@cspotcode/source-map-support/register'\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"cjs-__dirname",children:["cjs ",(0,i.jsx)(n.code,{children:"__dirname"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import * as url from 'url';\nconst __filename = url.fileURLToPath(import.meta.url);\nconst __dirname = url.fileURLToPath(new URL('.', import.meta.url));\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext",children:"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tsx"}),"\n",(0,i.jsx)(n.li,{children:"ts-node"}),"\n",(0,i.jsx)(n.li,{children:"babel"}),"\n",(0,i.jsx)(n.li,{children:"tsm"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# tsx\n# ==========\nnpx tsx app.ts\nnode --loader tsx app.ts\nnode --loader @esbuild-kit/esm-loader app.ts\n\n# ts-node\n# ==========\nnode -r @ts-node/register app.ts\n# tsconfig \u91cc\u7684 path \u80fd\u751f\u6548\nnode -r @ts-node/register -r tsconfig-paths/register app.ts\n\n# babel\n# ==========\nnode -r @babel/register app.js\n"})}),"\n",(0,i.jsx)(n.h2,{id:"package-openexr-required-by-vips-not-found",children:"Package 'OpenEXR', required by 'vips', not found"}),"\n",(0,i.jsx)(n.p,{children:"\u627e\u4e0d\u5230 brew \u5b89\u88c5\u7684 pkgconfig"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"PKG_CONFIG_PATH=/usr/local/opt/vips/lib/pkgconfig:/usr/local/opt/glib/lib/pkgconfig:/usr/local/opt/openexr/lib/pkgconfig:/usr/local/opt/imath/lib/pkgconfig npm i\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/usr/local/include/vips/vips8:35:10: fatal error: 'glib-object.h' file not found\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# export CC\nexport CXX="$(which g++) -I/usr/local/opt/glib/include/glib-2.0/ -I/usr/local/opt/glib/lib/glib-2.0/include/"\n\nexport CXX="$(which g++) $(pkg-config --cflags glib-2.0)"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"sharp -> libvips version 8.12.2+ is required"}),"\n",(0,i.jsxs)(n.li,{children:["ubuntu 22.04 jammy\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips",children:"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"libtool-unrecognized-option--static-when-building",children:"libtool: unrecognized option -static when building"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"libtool:   error: unrecognised option: '-static'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew unlink libtool\nrm -rf /usr/local/bin/libtool\nwhich libtool\n\n# \u5982\u679c\u6dfb\u52a0\u4e86 /usr/local/opt/libtool/libexec/gnubin\nexport PATH=$(echo $PATH | sed -r 's/:[^:]*?libtool[^:]*:/:/')\n"})}),"\n",(0,i.jsx)(n.h2,{id:"require-of-es-modules-is-not-supported",children:"require() of ES modules is not supported"}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u964d\u7ea7\u4f9d\u8d56"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'ts \u53ef\u914d\u7f6e "module": "esnext"'}),"\n",(0,i.jsxs)(n.li,{children:["\u7136\u540e package.json \u4fee\u6539 type: module\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f71\u54cd\u5f88\u5927"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/node-fetch/node-fetch/issues/1266",children:"node-fetch/node-fetch#1266"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"nodejs-v18-fetch-proxy",children:"NodeJS v18 fetch proxy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e0d\u652f\u6301 Agent"}),"\n",(0,i.jsx)(n.li,{children:"\u7528 node-fetch \u6216\u8005 undici"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const Undici = requuire('undici');\nconst ProxyAgent = Undici.ProxyAgent;\nconst setGlobalDispatcher = Undici.setGlobalDispatcher;\n\nsetGlobalDispatcher(new ProxyAgent(process.env.HTTP_PROXY));\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/nodejs/node/issues/43187",children:"node#43187"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/gajus/global-agent/issues/52#issuecomment-1134525621",children:"gajus/global-agent#52"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"requestinit-duplex-option-is-required-when-sending-a-body",children:"RequestInit: duplex option is required when sending a body"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/nodejs/node/issues/46221",children:"https://github.com/nodejs/node/issues/46221"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted",children:"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"}),"\n",(0,i.jsx)(n.p,{children:"\u68c0\u67e5\u4e0b\u662f\u4e0d\u662f import \u8def\u5f84\u9519\u8bef\uff0c\u53ef\u80fd\u56e0\u4e3a IDE \u81ea\u52a8\u5bfc\u5165\uff0c\u6307\u5411\u4e86\u9519\u8bef\u8def\u5f84\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"gyp",children:"gyp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f9d\u8d56 apk add --no-cache python3 g++ gcc make\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6700\u597d\u4f7f\u7528 prebuild"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u51fa\u73b0\u4e86\u4ece\u6e90\u7801\u6784\u5efa\uff0c\u5148\u6392\u67e5\u4e3a\u4ec0\u4e48\u4f1a\u5bfc\u81f4\u6784\u5efa"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u5f3a\u5236\u4ece\u6e90\u7801\u6784\u5efa\nnpm install sqlite3 --build-from-source=sqlite3\n\n# \u67e5\u770b binary \u5730\u5740\n# \u6ce8\u610f module_name \u53ef\u80fd\u4e0d\u540c\u4e8e npm \u5305\u540d\nnpm view sqlite3@3.1.3 binary             # aws\nnpm view sqlite3@5.1.0 binary.module_name # github\n\n# install \u5305\u542b platform \u548c libc \u6761\u4ef6\nnpm install --platform=linux --libc=libc --registry https://npm.wener.me/\n\nnpm install sqlite3 --node_sqlite3_binary_host_mirror=https://npmmirror.com/mirrors/sqlite3\n\n# \u6839\u636e\u5e73\u53f0 rebuild\nnode-pre-gyp rebuild --target=0.30.2 --arch=x32 --target_platform=win32 --dist-url=https://atom.io/download/atom-shell\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--{module_name}_binary_host_mirror"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"undefined-variable-module_name-in-bindinggyp-while-trying-to-load-bindinggyp",children:"Undefined variable module_name in binding.gyp while trying to load binding.gyp"}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u80fd npm \u95ee\u9898\uff0c\u4f7f\u7528 pnpm \u6784\u5efa\u6ca1\u95ee\u9898"}),"\n",(0,i.jsx)(n.h2,{id:"custom-esm-loaders-is-an-experimental-feature-this-feature-could-change-at-any-time",children:"Custom ESM Loaders is an experimental feature. This feature could change at any time"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u65e0\u6cd5 supress \u8b66\u544a, \u53ea\u80fd\u901a\u8fc7 require \u6ce8\u5165\u907f\u514d"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node --require suppress-experimental.cjs --loader tsx app.ts\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="suppress-experimental.cjs"',children:"'use strict';\n// When using the ESM loader Node.js prints either of the following warnings\n//\n// - ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time\n// - ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time\n//\n// Having this warning show up once is \"fine\" but it's also printed\n// for each Worker that is created so it ends up spamming stderr.\n// Since that doesn't provide any value we suppress the warning.\nconst originalEmit = process.emit;\n// @ts-expect-error - TS complains about the return type of originalEmit.apply\nprocess.emit = function (name, data, ...args) {\n  if (\n    name === `warning` &&\n    typeof data === `object` &&\n    data.name === `ExperimentalWarning` &&\n    (data.message.includes(`--experimental-loader`) ||\n      data.message.includes(`Custom ESM Loaders is an experimental feature`))\n  )\n    return false;\n\n  // return originalEmit.apply(process, arguments as unknown as Parameters<typeof process.emit>);\n  return originalEmit.apply(process, arguments);\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/nodejs/node/issues/30810",children:"https://github.com/nodejs/node/issues/30810"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reached-heap-limit-allocation-failed---javascript-heap-out-of-memory",children:"Reached heap limit Allocation failed - JavaScript heap out of memory"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'NODE_OPTIONS="--max-old-space-size=8192" eslint --fix\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DEBUG=*"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DEBUG=typescript-eslint"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"TIMING=1"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ineffective-mark-compacts-near-heap-limit-allocation-failed---javascript-heap-out-of-memory",children:"Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u589e\u52a0"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'\nNODE_OPTIONS=\"--max-old-space-size=8192\" node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"2048"}),"\n",(0,i.jsx)(n.li,{children:"4096"}),"\n",(0,i.jsx)(n.li,{children:"4144"}),"\n",(0,i.jsx)(n.li,{children:"5120"}),"\n",(0,i.jsx)(n.li,{children:"6144"}),"\n",(0,i.jsx)(n.li,{children:"7168"}),"\n",(0,i.jsx)(n.li,{children:"8192"}),"\n",(0,i.jsx)(n.li,{children:"16384"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",children:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://chromium.googlesource.com/v8/v8.git/+/refs/tags/10.3.129/src/heap/heap.cc#314",children:"https://chromium.googlesource.com/v8/v8.git/+/refs/tags/10.3.129/src/heap/heap.cc#314"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../browser/v8.md",children:"v8"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cant-resolve-pg-native",children:"Can't resolve 'pg-native'"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7528\u4e2a\u5047\u7684\u6a21\u5757\u66ff\u4ee3\uff0c\u907f\u514d\u7f16\u8bd1"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/brianc/node-postgres/issues/838",children:"https://github.com/brianc/node-postgres/issues/838"}),"\nwhen using babel, pg-native is always required"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// webpack\nexport default {\n  resolve: {\n    alias: {\n      'pg-native': path.join(__dirname, 'pg-native'),\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"pg-native"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "pg-native",\n  "private": true,\n  "main": "index.js"\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "your-module",\n  "private": true,\n  "dependencies": {\n    "pg": "^8.3.3",\n    "pg-native": "file:./modules/pg-native"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = null;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"repl-load",children:"REPL load"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'node -i -e "$(< rc.js)"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".load"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://nodejs.org/api/repl.html#repl_design_and_features",children:"https://nodejs.org/api/repl.html#repl_design_and_features"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"error0308010c-envelope-routinesunsupported",children:"error:0308010C:digital envelope routines::unsupported"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export NODE_OPTIONS=--openssl-legacy-provider\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/69692842",children:"https://stackoverflow.com/questions/69692842"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"snapshot",children:"snapshot"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528 snapshot \u52a0\u901f\u542f\u52a8\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f8b\u5982: main.mjs 10mb, main.mjs.map 20mb\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"--enable-source-maps \u542f\u52a8 40s"}),"\n",(0,i.jsxs)(n.li,{children:["\u65e0 ",(0,i.jsx)(n.code,{children:"enable-source-maps"})," \u542f\u52a8 2s"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo \"globalThis.foo = 'I am from the snapshot'\" > snapshot.js\nnode --snapshot-blob snapshot.blob --build-snapshot snapshot.js\necho \"console.log(globalThis.foo)\" > index.js\nnode --snapshot-blob snapshot.blob index.js\n\necho \"require('v8').startupSnapshot.setDeserializeMainFunction(() => console.log('I am from the snapshot'))\" > snapshot.js\nnode --snapshot-blob snapshot.blob --build-snapshot snapshot.js\nnode --snapshot-blob snapshot.blob\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 ESM ",(0,i.jsx)(n.a,{href:"https://github.com/nodejs/help/issues/3981",children:"https://github.com/nodejs/help/issues/3981"})]}),"\n",(0,i.jsxs)(n.li,{children:["RFC: speeding up Node.js startup using V8 snapshot ",(0,i.jsx)(n.a,{href:"https://github.com/nodejs/node/issues/17058",children:"#17058"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/issues/25658",children:"https://github.com/microsoft/TypeScript/issues/25658"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fastify-vs-express",children:"fastify vs express"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["fastify\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u66f4\u5feb\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"fast-json-stringify"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u6a21\u5757\u5316"}),"\n",(0,i.jsx)(n.li,{children:"\u66f4\u6613\u7528"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["express\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u66f4\u6210\u719f\uff1f"}),"\n",(0,i.jsx)(n.li,{children:"monolithic"}),"\n",(0,i.jsx)(n.li,{children:"\u751f\u6001\u66f4\u5927 - \u529f\u80fd\u66f4\u591a"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"import-npm-global",children:"import npm global"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export NODE_PATH=$(npm root --quiet -g)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"err_ossl_evp_unsupported",children:"ERR_OSSL_EVP_UNSUPPORTED"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Error: error:0308010C:digital envelope routines::unsupported\n    at new Hash (node:internal/crypto/hash:71:19)\n    at Object.createHash (node:crypto:133:10)\n    at BulkUpdateDecorator.hashFactory (~/node_modules/.pnpm/webpack@5.39.0_webpack-cli@4.7.2/node_modules/webpack/lib/util/createHash.js:145:18)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pnpm \u5b89\u88c5\u6709\u95ee\u9898\uff0c\u6362 npm \u540e\u597d\u4e86"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getaddrinfo-enotfound-undefined",children:"getaddrinfo ENOTFOUND undefined"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fetch(`http://example.com`);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,n,s)=>{var i=s(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var i,r={},c=null,a=null;for(i in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:l,type:e,key:c,ref:a,props:r,_owner:o.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(50959);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);