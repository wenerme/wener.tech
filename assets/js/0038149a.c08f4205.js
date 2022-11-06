"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7104],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=o(a),c=r,k=f["".concat(p,".").concat(c)]||f[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},54250:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return N}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&u(t,a,e[a]);if(s)for(var a of s(e))o.call(e,a)&&u(t,a,e[a]);return t};const f={title:"fastify"},c="fastify",k={unversionedId:"web/nodejs/fastify",id:"web/nodejs/fastify",title:"fastify",description:"- fastify/fastify",source:"@site/../notes/web/nodejs/fastify.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/fastify",permalink:"/notes/web/nodejs/fastify",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/fastify.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"fastify"},sidebar:"docs",previous:{title:"NodeJS",permalink:"/notes/web/nodejs/"},next:{title:"Nodejs Awesome",permalink:"/notes/web/nodejs/awesome"}},d={},N=[{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2},{value:"ecosystem",id:"ecosystem",level:2},{value:"nextjs",id:"nextjs",level:3},{value:"@fastify/autoload",id:"fastifyautoload",level:2},{value:"@fastify/static",id:"fastifystatic",level:2},{value:"fastify-cli",id:"fastify-cli",level:2},{value:"eject",id:"eject",level:3},{value:"ajv",id:"ajv",level:2},{value:"You cannot use <code>send</code> inside the <code>onError</code> hook",id:"you-cannot-use-send-inside-the-onerror-hook",level:2}],y={toc:N};function g(t){var e,a=t,{components:r}=a,u=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&s)for(var n of s(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=m(m({},y),u),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"fastify"}),"fastify"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify"}),"fastify/fastify"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, JS+d.ts"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6027\u80fd\u6700\u597d"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 schema \u6821\u9a8c\u8f93\u5165\u8f93\u51fa"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.fastify.io"}),"fastify.io"))))),(0,n.kt)("h2",m({},{id:"\u751f\u547d\u5468\u671f"}),"\u751f\u547d\u5468\u671f"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"phase"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"hook"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"abort"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Incoming"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Routing"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Instance Logger"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onRequest"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"preParsing"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Parsing"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"preValidation"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Validation"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"preHandler"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"User Handler"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Reply"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"preSerialization"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onSend"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Outgoing Response"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4xx,5xx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onResponse"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",m({},{id:"ecosystem"}),"ecosystem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fastify",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ajv - \u9a8c\u8bc1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/ajv-compiler"}),"fastify/ajv-compiler"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u76f4\u63a5\u4f9d\u8d56 ajv"))))),(0,n.kt)("li",{parentName:"ul"},"pino - \u65e5\u5fd7",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/jsumners/abstract-logging"}),"jsumners/abstract-logging"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u52a8\u6001\u5f00\u5173"))))),(0,n.kt)("li",{parentName:"ul"},"avvio - \u4f9d\u8d56\u8c03\u5ea6\u987a\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"find-my-way - \u8def\u7531"),(0,n.kt)("li",{parentName:"ul"},"light-my-request"),(0,n.kt)("li",{parentName:"ul"},"secure-json-parse - JSON \u89e3\u6790"),(0,n.kt)("li",{parentName:"ul"},"fast-json-stringify - JSON \u5e8f\u5217\u5316",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u66f4\u5feb - 2x faster than JSON.stringify()"),(0,n.kt)("li",{parentName:"ul"},"\u5229\u7528 schema \u4fe1\u606f\u751f\u6210 stringify"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fast-json-stringify-compiler"}),"@fastify/fast-json-stringify-compiler")))),(0,n.kt)("li",{parentName:"ul"},"rfdc - Really Fast Deep Clone"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.fastify.io/ecosystem/#Core%20Plugins"}),"Core Plugins"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cookie, cors, compress, caching, rate-limit, helmet, etag"),(0,n.kt)("li",{parentName:"ul"},"formbody - \u89e3\u6790 x-www-form-urlencoded"),(0,n.kt)("li",{parentName:"ul"},"multipart"),(0,n.kt)("li",{parentName:"ul"},"swagger - \u652f\u6301\u751f\u6210",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/Eomm/json-schema-resolver"}),"json-schema-resolver"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406 JSON Schema"))))),(0,n.kt)("li",{parentName:"ul"},"env - \u9a8c\u8bc1 ENV"),(0,n.kt)("li",{parentName:"ul"},"request-context - AsyncLocalStorage - NodeJS v16.4"),(0,n.kt)("li",{parentName:"ul"},"reply-from - \u8f6c\u53d1"),(0,n.kt)("li",{parentName:"ul"},"schedule - CRON"),(0,n.kt)("li",{parentName:"ul"},"session - \u6709\u72b6\u6001\u4f1a\u8bdd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 connect-redis \u8fde\u63a5 redis"))),(0,n.kt)("li",{parentName:"ul"},"stateless-session - \u65e0\u72b6\u6001\u4f1a\u8bdd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u52a0\u5bc6\u5b58\u5728 Cookie"))),(0,n.kt)("li",{parentName:"ul"},"static - serve \u9759\u6001\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"under-pressure - \u81ea\u52a8\u7194\u65ad"),(0,n.kt)("li",{parentName:"ul"},"websocket - \u57fa\u4e8e ws"),(0,n.kt)("li",{parentName:"ul"},"middie - \u4e2d\u95f4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"@fastify/routes - \u6c47\u805a\u6240\u6709\u8def\u7531\u5230 Map fastify.routes"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify-sensible"}),"@fastify/sensible"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"forwarded - \u5904\u7406\u8f6c\u53d1\u5934"),(0,n.kt)("li",{parentName:"ul"},"http-errors - \u6784\u9020\u5f02\u5e38"),(0,n.kt)("li",{parentName:"ul"},"vary - \u6784\u9020 vary \u5934"))),(0,n.kt)("li",{parentName:"ul"},"fastify.httpErrors - \u6784\u9020 error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"reply.<httpError>")),(0,n.kt)("li",{parentName:"ul"},"reply.vary"),(0,n.kt)("li",{parentName:"ul"},"reply.cacheControl"),(0,n.kt)("li",{parentName:"ul"},"reply.preventCache"),(0,n.kt)("li",{parentName:"ul"},"reply.revalidate"),(0,n.kt)("li",{parentName:"ul"},"reply.staticCache"),(0,n.kt)("li",{parentName:"ul"},"reply.stale"),(0,n.kt)("li",{parentName:"ul"},"reply.maxAge"),(0,n.kt)("li",{parentName:"ul"},"request.forwarded"),(0,n.kt)("li",{parentName:"ul"},"request.is - \u68c0\u6d4b mime \u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"fastify.assert"),(0,n.kt)("li",{parentName:"ul"},"fastify.to - async \u9519\u8bef\u5904\u7406"))),(0,n.kt)("li",{parentName:"ul"},"autoload - \u626b\u63cf\u76ee\u5f55\u52a0\u8f7d \u63d2\u4ef6\u3001\u8def\u7531"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify-nextjs"}),"@fastify/nextjs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"nextjs \u96c6\u6210 - \u4e0d\u662f\u66ff\u4ee3 NextJS \u5185\u90e8\u7684 WebServer"),(0,n.kt)("li",{parentName:"ul"},"nextjs \u5185\u90e8\u9ed8\u8ba4 express"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify-redis"}),"@fastify/redis"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"redis \u8fde\u63a5\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/luin/ioredis"}),"ioredis")))),(0,n.kt)("li",{parentName:"ul"},"@fastify/postgres"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify-auth"}),"@fastify/auth"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b auth \u76f8\u5173 hook"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd auth \u903b\u8f91"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify-jwt"}),"@fastify/jwt"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jwt \u9a8c\u8bc1\u548c\u7b7e\u540d"),(0,n.kt)("li",{parentName:"ul"},"fast-jwt"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify-error"}),"@fastify/error"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6784\u9020 error"))),(0,n.kt)("li",{parentName:"ul"},"@fastify/env",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"env-schema"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/mercurius-js/mercurius"}),"mercurius-js/mercurius"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GraphQL servers and gateways"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/zalando-incubator/graphql-jit"}),"zalando-incubator/graphql-jit"))))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.fastify.io/docs/latest/Guides/Ecosystem/"}),"https://www.fastify.io/docs/latest/Guides/Ecosystem/"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"const warning = require('process-warning')();\nwarning.create('FastifyDeprecation', 'FST_ERROR_CODE', 'message');\nwarning.emit('FST_ERROR_CODE');\n")),(0,n.kt)("h3",m({},{id:"nextjs"}),"nextjs"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"const fastify = require('fastify')();\n\nfastify.register(require('@fastify/nextjs')).after(() => {\n  fastify.next('/*');\n});\n\nfastify.listen(3000, (err) => {\n  if (err) throw err;\n  console.log('Server listening on http://localhost:3000');\n});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://dev.to/applicazza/serve-next-js-with-fastify-5e67"}),"Serve Next.js with Fastify"))),(0,n.kt)("h2",m({},{id:"fastifyautoload"}),"@fastify/autoload"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"fastify.register(Autoload, {\n  dir: path.join(__dirname, 'plugins'),\n  dirNameRoutePrefix: false\n  // ignorePattern\n  // indexPattern\n  forceESM: true,\n  // fastify-plugin\n  encapsulate: false\n})\n")),(0,n.kt)("h2",m({},{id:"fastifystatic"}),"@fastify/static"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"fastify.register(require('@fastify/static'), {\n  root: path.join(__dirname, 'public'),\n  prefix: '/public/', // optional: default '/'\n});\n")),(0,n.kt)("h2",m({},{id:"fastify-cli"}),"fastify-cli"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm add -g fastify-cli\n\n# fastify\n# fastify-plugin\n# fastify-cli\n# @fastify/sensible\n# https://github.com/tapjs/node-tap\nfastify generate my-server --lang=ts\n\ncd my-server\nnpm install # dependencies\nnpm start   # build:ts - fastify start -l info dist/app.js\nnpm build:ts\nnpm run dev # build:ts - watch:ts+dev:start pino-colada pretty logging\nnpm test\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/fastify-cli"}),"fastify/fastify-cli"))),(0,n.kt)("h3",m({},{id:"eject"}),"eject"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 server")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"// Read the .env file.\nimport * as dotenv from 'dotenv';\ndotenv.config();\n\n// Require the framework\nimport Fastify from 'fastify';\n\n// Require library to exit fastify process, gracefully (if possible)\nimport closeWithGrace from 'close-with-grace';\n\n// Instantiate Fastify with some config\nconst app = Fastify({\n  logger: true,\n});\n\n// Register your application as a normal plugin.\napp.register(import('./app'));\n\n// delay is the number of milliseconds for the graceful close to finish\nconst closeListeners = closeWithGrace({delay: 500}, async function ({signal, err, manual}) {\n  if (err) {\n    app.log.error(err);\n  }\n  await app.close();\n} as closeWithGrace.CloseWithGraceAsyncCallback);\n\napp.addHook('onClose', async (instance, done) => {\n  closeListeners.uninstall();\n  done();\n});\n\n// Start listening.\napp.listen({port: parseInt(process.env.PORT) || 3000}, (err: any) => {\n  if (err) {\n    app.log.error(err);\n    process.exit(1);\n  }\n});\n")),(0,n.kt)("h2",m({},{id:"ajv"}),"ajv"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Ajv v8, Draft 07"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/fastify/ajv-compiler/blob/main/index.js#L9-L18"}),"https://github.com/fastify/ajv-compiler/blob/main/index.js#L9-L18"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"const defaultAjvOptions = {\n  coerceTypes: 'array',\n  useDefaults: true,\n  removeAdditional: true,\n  uriResolver: fastUri,\n  addUsedSchema: false,\n  // Explicitly set allErrors to `false`.\n  // When set to `true`, a DoS attack is possible.\n  allErrors: false,\n};\n")),(0,n.kt)("h2",m({},{id:"you-cannot-use-send-inside-the-onerror-hook"}),"You cannot use ",(0,n.kt)("inlineCode",{parentName:"h2"},"send")," inside the ",(0,n.kt)("inlineCode",{parentName:"h2"},"onError")," hook"))}g.isMDXComponent=!0}}]);