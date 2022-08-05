"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61559],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=r.createContext({}),o=function(e){var t=r.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,f=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(a),m=n,y=c["".concat(f,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(y,l(l({ref:t},p),{},{components:a})):r.createElement(y,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var f in t)hasOwnProperty.call(t,f)&&(s[f]=t[f]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},79800:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],s={title:"fastify"},f=void 0,o={unversionedId:"web/nodejs/fastify",id:"web/nodejs/fastify",title:"fastify",description:"- fastify/fastify",source:"@site/notes/web/nodejs/fastify.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/fastify",permalink:"/notes/web/nodejs/fastify",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/nodejs/fastify.md",tags:[],version:"current",frontMatter:{title:"fastify"},sidebar:"docs",previous:{title:"capacitor",permalink:"/notes/web/native/capacitor"},next:{title:"Nodejs Awesome",permalink:"/notes/web/nodejs/nodejs-awesome"}},p={},u=[{value:"ecosystem",id:"ecosystem",level:2},{value:"nextjs",id:"nextjs",level:3},{value:"fastify-cli",id:"fastify-cli",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify"},"fastify/fastify"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MIT, JS+d.ts"),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6027\u80fd\u6700\u597d"),(0,i.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 schema \u6821\u9a8c\u8f93\u5165\u8f93\u51fa"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io"},"fastify.io"))))),(0,i.kt)("h2",{id:"ecosystem"},"ecosystem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/ecosystem/#Core%20Plugins"},"Core Plugins"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"swagger - \u652f\u6301\u751f\u6210"),(0,i.kt)("li",{parentName:"ul"},"env, cores, cookie, compress, caching, rate-limit"),(0,i.kt)("li",{parentName:"ul"},"request-context - AsyncLocalStorage - NodeJS v16.4"),(0,i.kt)("li",{parentName:"ul"},"reply-from - \u8f6c\u53d1"),(0,i.kt)("li",{parentName:"ul"},"schedule - CRON"),(0,i.kt)("li",{parentName:"ul"},"session"),(0,i.kt)("li",{parentName:"ul"},"static"),(0,i.kt)("li",{parentName:"ul"},"under-pressure - \u81ea\u52a8\u7194\u65ad"),(0,i.kt)("li",{parentName:"ul"},"websocket - \u57fa\u4e8e ws"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-nextjs"},"@fastify/nextjs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"nextjs \u96c6\u6210 - \u4e0d\u662f\u66ff\u4ee3 NextJS \u5185\u90e8\u7684 WebServer"),(0,i.kt)("li",{parentName:"ul"},"nextjs \u5185\u90e8\u9ed8\u8ba4 express"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-redis"},"@fastify/redis"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"redis \u8fde\u63a5\u63d2\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"ioredis"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-auth"},"@fastify/auth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Guides/Ecosystem/"},"https://www.fastify.io/docs/latest/Guides/Ecosystem/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-sensible"},"@fastify/sensible"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fastify.httpErrors - \u6784\u9020 error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reply.<httpError>")),(0,i.kt)("li",{parentName:"ul"},"reply.vary"),(0,i.kt)("li",{parentName:"ul"},"reply.cacheControl"),(0,i.kt)("li",{parentName:"ul"},"reply.preventCache"),(0,i.kt)("li",{parentName:"ul"},"reply.revalidate"),(0,i.kt)("li",{parentName:"ul"},"reply.staticCache"),(0,i.kt)("li",{parentName:"ul"},"reply.stale"),(0,i.kt)("li",{parentName:"ul"},"reply.maxAge"),(0,i.kt)("li",{parentName:"ul"},"request.forwarded"),(0,i.kt)("li",{parentName:"ul"},"request.is - \u68c0\u6d4b mime \u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"fastify.assert"),(0,i.kt)("li",{parentName:"ul"},"fastify.to - async \u9519\u8bef\u5904\u7406")))),(0,i.kt)("h3",{id:"nextjs"},"nextjs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')();\n\nfastify.register(require('@fastify/nextjs')).after(() => {\n  fastify.next('/*');\n});\n\nfastify.listen(3000, (err) => {\n  if (err) throw err;\n  console.log('Server listening on http://localhost:3000');\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/applicazza/serve-next-js-with-fastify-5e67"},"Serve Next.js with Fastify"))),(0,i.kt)("h2",{id:"fastify-cli"},"fastify-cli"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm add -g fastify-cli\n\n# fastify\n# fastify-plugin\n# fastify-cli\n# @fastify/sensible\n# https://github.com/tapjs/node-tap\nfastify generate my-server --lang=ts\n\ncd my-server\nnpm install # dependencies\nnpm start   # build:ts - fastify start -l info dist/app.js\nnpm build:ts\nnpm run dev # build:ts - watch:ts+dev:start pino-colada pretty logging\nnpm test\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-cli"},"fastify/fastify-cli"))))}m.isMDXComponent=!0}}]);