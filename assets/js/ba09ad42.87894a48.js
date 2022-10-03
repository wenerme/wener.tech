"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97251],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={title:"NodeJS FAQ",tags:["FAQ"]},m="NodeJS FAQ",g={unversionedId:"web/nodejs/nodejs-faq",id:"web/nodejs/nodejs-faq",title:"NodeJS FAQ",description:"cjs dirname",source:"@site/../notes/web/nodejs/nodejs-faq.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/faq",permalink:"/notes/web/nodejs/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/nodejs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664804552,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{title:"NodeJS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Nodejs Awesome",permalink:"/notes/web/nodejs/awesome"},next:{title:"NodeJS \u7248\u672c",permalink:"/notes/web/nodejs/version"}},k={},f=[{value:"cjs <code>__dirname</code>",id:"cjs-__dirname",level:2},{value:"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext",id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext",level:2},{value:"Package &#39;OpenEXR&#39;, required by &#39;vips&#39;, not found",id:"package-openexr-required-by-vips-not-found",level:2},{value:"libtool: unrecognized option -static when building",id:"libtool-unrecognized-option--static-when-building",level:2},{value:"require() of ES modules is not supported",id:"require-of-es-modules-is-not-supported",level:2},{value:"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted",id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted",level:2},{value:"async context",id:"async-context",level:2},{value:"gyp",id:"gyp",level:2},{value:"Undefined variable module_name in binding.gyp while trying to load binding.gyp",id:"undefined-variable-module_name-in-bindinggyp-while-trying-to-load-bindinggyp",level:2},{value:"Custom ESM Loaders is an experimental feature. This feature could change at any time",id:"custom-esm-loaders-is-an-experimental-feature-this-feature-could-change-at-any-time",level:2}],h={toc:f};function b(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},h),c),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"nodejs-faq"}),"NodeJS FAQ"),(0,a.kt)("h2",u({},{id:"cjs-__dirname"}),"cjs ",(0,a.kt)("inlineCode",{parentName:"h2"},"__dirname")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"import * as url from 'url';\nconst __filename = url.fileURLToPath(import.meta.url);\nconst __dirname = url.fileURLToPath(new URL('.', import.meta.url));\n")),(0,a.kt)("h2",u({},{id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext"}),"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tsx"),(0,a.kt)("li",{parentName:"ul"},"ts-node"),(0,a.kt)("li",{parentName:"ul"},"babel"),(0,a.kt)("li",{parentName:"ul"},"tsm")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# tsx\n# ==========\nnpx tsx app.ts\nnode --loader tsx app.ts\nnode --loader @esbuild-kit/esm-loader app.ts\n\n# ts-node\n# ==========\nnode -r @ts-node/register app.ts\n# tsconfig \u91cc\u7684 path \u80fd\u751f\u6548\nnode -r @ts-node/register -r tsconfig-paths/register app.ts\n\n# babel\n# ==========\nnode -r @babel/register app.js\n")),(0,a.kt)("h2",u({},{id:"package-openexr-required-by-vips-not-found"}),"Package 'OpenEXR', required by 'vips', not found"),(0,a.kt)("p",null,"\u627e\u4e0d\u5230 brew \u5b89\u88c5\u7684 pkgconfig"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"PKG_CONFIG_PATH=/usr/local/opt/vips/lib/pkgconfig:/usr/local/opt/glib/lib/pkgconfig:/usr/local/opt/openexr/lib/pkgconfig:/usr/local/opt/imath/lib/pkgconfig npm i\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"/usr/local/include/vips/vips8:35:10: fatal error: 'glib-object.h' file not found\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# export CC\nexport CXX="$(which g++) -I/usr/local/opt/glib/include/glib-2.0/ -I/usr/local/opt/glib/lib/glib-2.0/include/"\n\nexport CXX="$(which g++) $(pkg-config --cflags glib-2.0)"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sharp -> libvips version 8.12.2+ is required"),(0,a.kt)("li",{parentName:"ul"},"ubuntu 22.04 jammy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips"}),"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips"))))),(0,a.kt)("h2",u({},{id:"libtool-unrecognized-option--static-when-building"}),"libtool: unrecognized option -static when building"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"libtool:   error: unrecognised option: '-static'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"brew unlink libtool\nrm -rf /usr/local/bin/libtool\nwhich libtool\n\n# \u5982\u679c\u6dfb\u52a0\u4e86 /usr/local/opt/libtool/libexec/gnubin\nexport PATH=$(echo $PATH | sed -r 's/:[^:]*?libtool[^:]*:/:/')\n")),(0,a.kt)("h2",u({},{id:"require-of-es-modules-is-not-supported"}),"require() of ES modules is not supported"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u964d\u7ea7\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'ts \u53ef\u914d\u7f6e "module": "esnext"'),(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e package.json \u4fee\u6539 type: module",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u5f88\u5927"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/node-fetch/node-fetch/issues/1266"}),"node-fetch/node-fetch#1266"))))),(0,a.kt)("h2",u({},{id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted"}),"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"),(0,a.kt)("p",null,"\u68c0\u67e5\u4e0b\u662f\u4e0d\u662f import \u8def\u5f84\u9519\u8bef\uff0c\u53ef\u80fd\u56e0\u4e3a IDE \u81ea\u52a8\u5bfc\u5165\uff0c\u6307\u5411\u4e86\u9519\u8bef\u8def\u5f84\u3002"),(0,a.kt)("h2",u({},{id:"async-context"}),"async context"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const cls = require('cls-hooked');\nconst namespace = cls.createNamespace('my-very-own-namespace');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://nodejs.org/api/async_context.html"}),"https://nodejs.org/api/async_context.html"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"import { AsyncLocalStorage, AsyncResource } from 'node:async_hooks';")),(0,a.kt)("li",{parentName:"ul"},"AsyncLocalStorage - node v12.17+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/nodejs/node/blob/main/doc/api/async_hooks.md"}),"async_hooks")," - node v8+",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"currentId()"),(0,a.kt)("li",{parentName:"ul"},"triggerAsyncId()"),(0,a.kt)("li",{parentName:"ul"},"executionAsyncId()")))))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"// node 8+\nimport {createHook} from 'async_hooks';\nconst hook = createHook({\n  init: (asyncId, type, triggerId, resource) => {},\n  before: (asyncId) => {},\n  after: (asyncId) => {},\n  destroy: (asyncId) => {},\n});\nhook.enable();\n\n// ALS\n// v13.10.0, v12.17.0\nimport {AsyncLocalStorage} from 'node:async_hooks';\nconst asyncLocalStorage = new AsyncLocalStorage();\nasyncLocalStorage.run(123, () => {\n  console.log(`Store: ${asyncLocalStorage.getStore()}`);\n  setImmediate(() => {\n    console.log(`setImmediate Store: ${asyncLocalStorage.getStore()}`);\n  });\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/fastify/fastify-request-context"}),"@fastify/request-context"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"asynchronous-local-storage"),(0,a.kt)("li",{parentName:"ul"},"async_hooks",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new AsyncResource('fastify-request-context')")))),(0,a.kt)("li",{parentName:"ul"},"onRequest - \u5305\u88c5\u8fd0\u884c\u73af\u5883",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"als.runWith",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AsyncResource.runInAsyncScope(done,req,raw)")))))))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const {als} = require('asynchronous-local-storage');\nconst requestContext = {\n  get: als.get,\n  set: als.set,\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://sequelize.org/docs/v7/other-topics/transactions"}),"https://sequelize.org/docs/v7/other-topics/transactions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"const namespace = cls.createNamespace('sequelize-tx');")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/sequelize/sequelize/blob/fdd713172748a6c86b656500df2aed8cba096492/src/sequelize.js#L1147-L1158"}),"useCLS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"get, set, bind, run"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bind(fn,context): ()=>any")))),(0,a.kt)("li",{parentName:"ul"},"prepareEnvironment",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f00\u542f\u4e8b\u52a1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this.sequelize.Sequelize._cls.set('transaction', this);")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/kibertoad/asynchronous-local-storage"}),"asynchronous-local-storage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Node.js ALS with fallback to cls-hooked"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/Jeff-Lewis/cls-hooked"}),"cls-hooked"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"node 4.7+ - async-hook-jl"),(0,a.kt)("li",{parentName:"ul"},"node 8+ - async_hooks"),(0,a.kt)("li",{parentName:"ul"},"fork \u81ea continuation-local-storage"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/othiym23/node-continuation-local-storage"}),"continuation-local-storage"))),(0,a.kt)("h2",u({},{id:"gyp"}),"gyp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 apk add --no-cache python3 g++ gcc make",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6700\u597d\u4f7f\u7528 prebuild"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fa\u73b0\u4e86\u4ece\u6e90\u7801\u6784\u5efa\uff0c\u5148\u6392\u67e5\u4e3a\u4ec0\u4e48\u4f1a\u5bfc\u81f4\u6784\u5efa")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u5f3a\u5236\u4ece\u6e90\u7801\u6784\u5efa\nnpm install sqlite3 --build-from-source=sqlite3\n\n# \u67e5\u770b binary \u5730\u5740\n# \u6ce8\u610f module_name \u53ef\u80fd\u4e0d\u540c\u4e8e npm \u5305\u540d\nnpm view sqlite3@3.1.3 binary # aws\nnpm view sqlite3@5.1.0 binary.module_name # github\n\n# install \u5305\u542b platform \u548c libc \u6761\u4ef6\nnpm install --platform=linux --libc=libc --registry https://npm.apis.incos.cloud/\n\nnpm install sqlite3 --node_sqlite3_binary_host_mirror=https://npmmirror.com/mirrors/sqlite3\n\n# \u6839\u636e\u5e73\u53f0 rebuild\nnode-pre-gyp rebuild --target=0.30.2 --arch=x32 --target_platform=win32 --dist-url=https://atom.io/download/atom-shell\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"--{module_name}","_","binary_host_mirror")),(0,a.kt)("h2",u({},{id:"undefined-variable-module_name-in-bindinggyp-while-trying-to-load-bindinggyp"}),"Undefined variable module_name in binding.gyp while trying to load binding.gyp"),(0,a.kt)("p",null,"\u53ef\u80fd npm \u95ee\u9898\uff0c\u4f7f\u7528 pnpm \u6784\u5efa\u6ca1\u95ee\u9898"),(0,a.kt)("h2",u({},{id:"custom-esm-loaders-is-an-experimental-feature-this-feature-could-change-at-any-time"}),"Custom ESM Loaders is an experimental feature. This feature could change at any time"),(0,a.kt)("p",null,"\u76ee\u524d\u65e0\u6cd5 supress \u8b66\u544a, \u53ea\u80fd\u901a\u8fc7 require \u6ce8\u5165\u907f\u514d"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"node --require suppress-experimental.cjs --loader tsx app.ts\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="suppress-experimental.cjs"',title:'"suppress-experimental.cjs"'}),"'use strict';\n// When using the ESM loader Node.js prints either of the following warnings\n//\n// - ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time\n// - ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time\n//\n// Having this warning show up once is \"fine\" but it's also printed\n// for each Worker that is created so it ends up spamming stderr.\n// Since that doesn't provide any value we suppress the warning.\nconst originalEmit = process.emit;\n// @ts-expect-error - TS complains about the return type of originalEmit.apply\nprocess.emit = function (name, data, ...args) {\n  if (\n    name === `warning` &&\n    typeof data === `object` &&\n    data.name === `ExperimentalWarning` &&\n    (data.message.includes(`--experimental-loader`) ||\n      data.message.includes(`Custom ESM Loaders is an experimental feature`))\n  )\n    return false;\n\n  // return originalEmit.apply(process, arguments as unknown as Parameters<typeof process.emit>);\n  return originalEmit.apply(process, arguments);\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/nodejs/node/issues/30810"}),"https://github.com/nodejs/node/issues/30810"))))}b.isMDXComponent=!0}}]);