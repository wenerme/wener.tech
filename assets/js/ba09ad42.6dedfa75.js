"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97251],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"NodeJS FAQ",tags:["FAQ"]},s="NodeJS FAQ",c={unversionedId:"web/nodejs/nodejs-faq",id:"web/nodejs/nodejs-faq",title:"NodeJS FAQ",description:"ejs dirname",source:"@site/../notes/web/nodejs/nodejs-faq.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/nodejs-faq",permalink:"/notes/web/nodejs/nodejs-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/nodejs/nodejs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"NodeJS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Nodejs Awesome",permalink:"/notes/web/nodejs/nodejs-awesome"},next:{title:"NodeJS \u7248\u672c",permalink:"/notes/web/nodejs/nodejs-version"}},p={},u=[{value:"ejs <code>__dirname</code>",id:"ejs-__dirname",level:2},{value:"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext",id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext",level:2},{value:"Package &#39;OpenEXR&#39;, required by &#39;vips&#39;, not found",id:"package-openexr-required-by-vips-not-found",level:2},{value:"libtool: unrecognized option -static when building",id:"libtool-unrecognized-option--static-when-building",level:2},{value:"require() of ES modules is not supported",id:"require-of-es-modules-is-not-supported",level:2},{value:"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted",id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted",level:2},{value:"async context",id:"async-context",level:2},{value:"gyp",id:"gyp",level:2},{value:"Undefined variable module_name in binding.gyp while trying to load binding.gyp",id:"undefined-variable-module_name-in-bindinggyp-while-trying-to-load-bindinggyp",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nodejs-faq"},"NodeJS FAQ"),(0,l.kt)("h2",{id:"ejs-__dirname"},"ejs ",(0,l.kt)("inlineCode",{parentName:"h2"},"__dirname")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as url from 'url';\nconst __filename = url.fileURLToPath(import.meta.url);\nconst __dirname = url.fileURLToPath(new URL('.', import.meta.url));\n")),(0,l.kt)("h2",{id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext"},"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node -r @ts-node/register app.ts\nnode -r @babel/register app.js\n# tsconfig \u91cc\u7684 path \u80fd\u751f\u6548\nnode -r @ts-node/register -r tsconfig-paths/register app.ts\n")),(0,l.kt)("h2",{id:"package-openexr-required-by-vips-not-found"},"Package 'OpenEXR', required by 'vips', not found"),(0,l.kt)("p",null,"\u627e\u4e0d\u5230 brew \u5b89\u88c5\u7684 pkgconfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PKG_CONFIG_PATH=/usr/local/opt/vips/lib/pkgconfig:/usr/local/opt/glib/lib/pkgconfig:/usr/local/opt/openexr/lib/pkgconfig:/usr/local/opt/imath/lib/pkgconfig npm i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/usr/local/include/vips/vips8:35:10: fatal error: 'glib-object.h' file not found\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# export CC\nexport CXX="$(which g++) -I/usr/local/opt/glib/include/glib-2.0/ -I/usr/local/opt/glib/lib/glib-2.0/include/"\n\nexport CXX="$(which g++) $(pkg-config --cflags glib-2.0)"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sharp -> libvips version 8.12.2+ is required"),(0,l.kt)("li",{parentName:"ul"},"ubuntu 22.04 jammy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips"},"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips"))))),(0,l.kt)("h2",{id:"libtool-unrecognized-option--static-when-building"},"libtool: unrecognized option -static when building"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"libtool:   error: unrecognised option: '-static'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew unlink libtool\nrm -rf /usr/local/bin/libtool\nwhich libtool\n\n# \u5982\u679c\u6dfb\u52a0\u4e86 /usr/local/opt/libtool/libexec/gnubin\nexport PATH=$(echo $PATH | sed -r 's/:[^:]*?libtool[^:]*:/:/')\n")),(0,l.kt)("h2",{id:"require-of-es-modules-is-not-supported"},"require() of ES modules is not supported"),(0,l.kt)("p",null,"\u5c1d\u8bd5\u964d\u7ea7\u4f9d\u8d56"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'ts \u53ef\u914d\u7f6e "module": "esnext"'),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e package.json \u4fee\u6539 type: module",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u5f88\u5927"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/node-fetch/node-fetch/issues/1266"},"node-fetch/node-fetch#1266"))))),(0,l.kt)("h2",{id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted"},"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"),(0,l.kt)("p",null,"\u68c0\u67e5\u4e0b\u662f\u4e0d\u662f import \u8def\u5f84\u9519\u8bef\uff0c\u53ef\u80fd\u56e0\u4e3a IDE \u81ea\u52a8\u5bfc\u5165\uff0c\u6307\u5411\u4e86\u9519\u8bef\u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"async-context"},"async context"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const cls = require('cls-hooked');\nconst namespace = cls.createNamespace('my-very-own-namespace');\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/async_context.html"},"https://nodejs.org/api/async_context.html"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import { AsyncLocalStorage, AsyncResource } from 'node:async_hooks';")),(0,l.kt)("li",{parentName:"ul"},"AsyncLocalStorage - node v12.17+"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node/blob/main/doc/api/async_hooks.md"},"async_hooks")," - node v8+",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"currentId()"),(0,l.kt)("li",{parentName:"ul"},"triggerAsyncId()"),(0,l.kt)("li",{parentName:"ul"},"executionAsyncId()")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// node 8+\nimport {createHook} from 'async_hooks';\nconst hook = createHook({\n  init: (asyncId, type, triggerId, resource) => {},\n  before: (asyncId) => {},\n  after: (asyncId) => {},\n  destroy: (asyncId) => {},\n});\nhook.enable();\n\n// ALS\n// v13.10.0, v12.17.0\nimport {AsyncLocalStorage} from 'node:async_hooks';\nconst asyncLocalStorage = new AsyncLocalStorage();\nasyncLocalStorage.run(123, () => {\n  console.log(`Store: ${asyncLocalStorage.getStore()}`);\n  setImmediate(() => {\n    console.log(`setImmediate Store: ${asyncLocalStorage.getStore()}`);\n  });\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-request-context"},"@fastify/request-context"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"asynchronous-local-storage"),(0,l.kt)("li",{parentName:"ul"},"async_hooks",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"new AsyncResource('fastify-request-context')")))),(0,l.kt)("li",{parentName:"ul"},"onRequest - \u5305\u88c5\u8fd0\u884c\u73af\u5883",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"als.runWith",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AsyncResource.runInAsyncScope(done,req,raw)")))))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const {als} = require('asynchronous-local-storage');\nconst requestContext = {\n  get: als.get,\n  set: als.set,\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sequelize.org/docs/v7/other-topics/transactions"},"https://sequelize.org/docs/v7/other-topics/transactions"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"const namespace = cls.createNamespace('sequelize-tx');")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sequelize/sequelize/blob/fdd713172748a6c86b656500df2aed8cba096492/src/sequelize.js#L1147-L1158"},"useCLS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"get, set, bind, run"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bind(fn,context): ()=>any")))),(0,l.kt)("li",{parentName:"ul"},"prepareEnvironment",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u542f\u4e8b\u52a1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"this.sequelize.Sequelize._cls.set('transaction', this);")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kibertoad/asynchronous-local-storage"},"asynchronous-local-storage"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Node.js ALS with fallback to cls-hooked"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Jeff-Lewis/cls-hooked"},"cls-hooked"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"node 4.7+ - async-hook-jl"),(0,l.kt)("li",{parentName:"ul"},"node 8+ - async_hooks"),(0,l.kt)("li",{parentName:"ul"},"fork \u81ea continuation-local-storage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/othiym23/node-continuation-local-storage"},"continuation-local-storage"))),(0,l.kt)("h2",{id:"gyp"},"gyp"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 apk add --no-cache python3 g++ gcc make",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u4f7f\u7528 prebuild"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fa\u73b0\u4e86\u4ece\u6e90\u7801\u6784\u5efa\uff0c\u5148\u6392\u67e5\u4e3a\u4ec0\u4e48\u4f1a\u5bfc\u81f4\u6784\u5efa")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f3a\u5236\u4ece\u6e90\u7801\u6784\u5efa\nnpm install sqlite3 --build-from-source=sqlite3\n\n# \u67e5\u770b binary \u5730\u5740\n# \u6ce8\u610f module_name \u53ef\u80fd\u4e0d\u540c\u4e8e npm \u5305\u540d\nnpm view sqlite3@3.1.3 binary # aws\nnpm view sqlite3@5.1.0 binary.module_name # github\n\n# install \u5305\u542b platform \u548c libc \u6761\u4ef6\nnpm install --platform=linux --libc=libc --registry https://npm.apis.incos.cloud/\n\nnpm install sqlite3 --node_sqlite3_binary_host_mirror=https://npmmirror.com/mirrors/sqlite3\n\n# \u6839\u636e\u5e73\u53f0 rebuild\nnode-pre-gyp rebuild --target=0.30.2 --arch=x32 --target_platform=win32 --dist-url=https://atom.io/download/atom-shell\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"--{module_name}","_","binary_host_mirror")),(0,l.kt)("h2",{id:"undefined-variable-module_name-in-bindinggyp-while-trying-to-load-bindinggyp"},"Undefined variable module_name in binding.gyp while trying to load binding.gyp"),(0,l.kt)("p",null,"\u53ef\u80fd npm \u95ee\u9898\uff0c\u4f7f\u7528 pnpm \u6784\u5efa\u6ca1\u95ee\u9898"))}m.isMDXComponent=!0}}]);