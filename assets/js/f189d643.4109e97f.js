"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94876],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"NodeJS FAQ",tags:["FAQ"]},s=void 0,c={unversionedId:"web/nodejs/nodejs-faq",id:"web/nodejs/nodejs-faq",title:"NodeJS FAQ",description:"ejs dirname",source:"@site/notes/web/nodejs/nodejs-faq.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/nodejs-faq",permalink:"/notes/web/nodejs/nodejs-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/nodejs/nodejs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"NodeJS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Nodejs Awesome",permalink:"/notes/web/nodejs/nodejs-awesome"},next:{title:"NodeJS \u7248\u672c",permalink:"/notes/web/nodejs/nodejs-version"}},u={},p=[{value:"ejs <code>__dirname</code>",id:"ejs-__dirname",level:2},{value:"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext",id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext",level:2},{value:"Package &#39;OpenEXR&#39;, required by &#39;vips&#39;, not found",id:"package-openexr-required-by-vips-not-found",level:2},{value:"libtool: unrecognized option -static when building",id:"libtool-unrecognized-option--static-when-building",level:2},{value:"require() of ES modules is not supported",id:"require-of-es-modules-is-not-supported",level:2},{value:"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted",id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted",level:2},{value:"async context",id:"async-context",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ejs-__dirname"},"ejs ",(0,o.kt)("inlineCode",{parentName:"h2"},"__dirname")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as url from 'url';\nconst __filename = url.fileURLToPath(import.meta.url);\nconst __dirname = url.fileURLToPath(new URL('.', import.meta.url));\n")),(0,o.kt)("h2",{id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext"},"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -r @ts-node/register app.ts\nnode -r @babel/register app.js\n# tsconfig \u91cc\u7684 path \u80fd\u751f\u6548\nnode -r @ts-node/register -r tsconfig-paths/register app.ts\n")),(0,o.kt)("h2",{id:"package-openexr-required-by-vips-not-found"},"Package 'OpenEXR', required by 'vips', not found"),(0,o.kt)("p",null,"\u627e\u4e0d\u5230 brew \u5b89\u88c5\u7684 pkgconfig"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PKG_CONFIG_PATH=/usr/local/opt/vips/lib/pkgconfig:/usr/local/opt/glib/lib/pkgconfig:/usr/local/opt/openexr/lib/pkgconfig:/usr/local/opt/imath/lib/pkgconfig npm i\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/usr/local/include/vips/vips8:35:10: fatal error: 'glib-object.h' file not found\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# export CC\nexport CXX="$(which g++) -I/usr/local/opt/glib/include/glib-2.0/ -I/usr/local/opt/glib/lib/glib-2.0/include/"\n\nexport CXX="$(which g++) $(pkg-config --cflags glib-2.0)"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sharp -> libvips version 8.12.2+ is required"),(0,o.kt)("li",{parentName:"ul"},"ubuntu 22.04 jammy",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips"},"https://packages.ubuntu.com/search?searchon=sourcenames&keywords=vips"))))),(0,o.kt)("h2",{id:"libtool-unrecognized-option--static-when-building"},"libtool: unrecognized option -static when building"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew unlink libtool\nrm -rf /usr/local/bin/libtool\nwhich libtool\n\n# \u5982\u679c\u6dfb\u52a0\u4e86 /usr/local/opt/libtool/libexec/gnubin\nexport PATH=$(echo $PATH | sed -r 's/:[^:]*?libtool[^:]*:/:/')\n")),(0,o.kt)("h2",{id:"require-of-es-modules-is-not-supported"},"require() of ES modules is not supported"),(0,o.kt)("p",null,"\u5c1d\u8bd5\u964d\u7ea7\u4f9d\u8d56"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'ts \u53ef\u914d\u7f6e "module": "esnext"'),(0,o.kt)("li",{parentName:"ul"},"\u7136\u540e package.json \u4fee\u6539 type: module",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u5f88\u5927"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/node-fetch/node-fetch/issues/1266"},"node-fetch/node-fetch#1266"))))),(0,o.kt)("h2",{id:"critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-cannot-be-statically-extracted"},"Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"),(0,o.kt)("p",null,"\u68c0\u67e5\u4e0b\u662f\u4e0d\u662f import \u8def\u5f84\u9519\u8bef\uff0c\u53ef\u80fd\u56e0\u4e3a IDE \u81ea\u52a8\u5bfc\u5165\uff0c\u6307\u5411\u4e86\u9519\u8bef\u8def\u5f84\u3002"),(0,o.kt)("h2",{id:"async-context"},"async context"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const cls = require('cls-hooked');\nconst namespace = cls.createNamespace('my-very-own-namespace');\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/async_context.html"},"https://nodejs.org/api/async_context.html"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import { AsyncLocalStorage, AsyncResource } from 'node:async_hooks';")),(0,o.kt)("li",{parentName:"ul"},"AsyncLocalStorage - node v12.17+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node/blob/main/doc/api/async_hooks.md"},"async_hooks")," - node v8+",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"currentId()"),(0,o.kt)("li",{parentName:"ul"},"triggerAsyncId()"),(0,o.kt)("li",{parentName:"ul"},"executionAsyncId()")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// node 8+\nimport {createHook} from 'async_hooks';\nconst hook = createHook({\n  init: (asyncId, type, triggerId, resource) => {},\n  before: (asyncId) => {},\n  after: (asyncId) => {},\n  destroy: (asyncId) => {},\n});\nhook.enable();\n\n// ALS\n// v13.10.0, v12.17.0\nimport {AsyncLocalStorage} from 'node:async_hooks';\nconst asyncLocalStorage = new AsyncLocalStorage();\nasyncLocalStorage.run(123, () => {\n  console.log(`Store: ${asyncLocalStorage.getStore()}`);\n  setImmediate(() => {\n    console.log(`setImmediate Store: ${asyncLocalStorage.getStore()}`);\n  });\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-request-context"},"@fastify/request-context"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"asynchronous-local-storage"),(0,o.kt)("li",{parentName:"ul"},"async_hooks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new AsyncResource('fastify-request-context')")))),(0,o.kt)("li",{parentName:"ul"},"onRequest - \u5305\u88c5\u8fd0\u884c\u73af\u5883",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"als.runWith",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"AsyncResource.runInAsyncScope(done,req,raw)")))))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const {als} = require('asynchronous-local-storage');\nconst requestContext = {\n  get: als.get,\n  set: als.set,\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sequelize.org/docs/v7/other-topics/transactions"},"https://sequelize.org/docs/v7/other-topics/transactions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"const namespace = cls.createNamespace('sequelize-tx');")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sequelize/sequelize/blob/fdd713172748a6c86b656500df2aed8cba096492/src/sequelize.js#L1147-L1158"},"useCLS"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"get, set, bind, run"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bind(fn,context): ()=>any")))),(0,o.kt)("li",{parentName:"ul"},"prepareEnvironment",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f00\u542f\u4e8b\u52a1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"this.sequelize.Sequelize._cls.set('transaction', this);")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kibertoad/asynchronous-local-storage"},"asynchronous-local-storage"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Node.js ALS with fallback to cls-hooked"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jeff-Lewis/cls-hooked"},"cls-hooked"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"node 4.7+ - async-hook-jl"),(0,o.kt)("li",{parentName:"ul"},"node 8+ - async_hooks"),(0,o.kt)("li",{parentName:"ul"},"fork \u81ea continuation-local-storage"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/othiym23/node-continuation-local-storage"},"continuation-local-storage"))))}m.isMDXComponent=!0}}]);