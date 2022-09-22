"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60200],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38746:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),s=["components"],l={title:"NextJS Internal",tags:["Internal"]},i="NextJS Internal",p={unversionedId:"web/framework/nextjs-internal",id:"web/framework/nextjs-internal",title:"NextJS Internal",description:"- target",source:"@site/../notes/web/framework/nextjs-internal.md",sourceDirName:"web/framework",slug:"/web/framework/nextjs-internal",permalink:"/notes/web/framework/nextjs-internal",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/framework/nextjs-internal.md",tags:[{label:"Internal",permalink:"/notes/tags/internal"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"NextJS Internal",tags:["Internal"]},sidebar:"docs",previous:{title:"NextJS FAQ",permalink:"/notes/web/framework/nextjs-faq"},next:{title:"NextJS \u7248\u672c\u5386\u53f2",permalink:"/notes/web/framework/nextjs-version"}},c={},u=[{value:"\u9ed8\u8ba4 next start",id:"\u9ed8\u8ba4-next-start",level:2},{value:"\u6700\u7b80\u81ea\u5b9a\u4e49 server",id:"\u6700\u7b80\u81ea\u5b9a\u4e49-server",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nextjs-internal"},"NextJS Internal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"target",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"server"),(0,o.kt)("li",{parentName:"ul"},"serverless",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f1a bundle node_modules \u5185\u5bb9"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e76\u4e0d\u7406\u60f3"))),(0,o.kt)("li",{parentName:"ul"},"serverless-trace",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"serverless \u4f46\u4e0d bundle node_modules")))))),(0,o.kt)("h2",{id:"\u9ed8\u8ba4-next-start"},"\u9ed8\u8ba4 next start"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u670d\u52a1\u542f\u52a8\u903b\u8f91"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import http from 'http';\nimport next from 'next';\n\n// https://github.com/zeit/next.js/blob/canary/packages/next/server/lib/start-server.ts\nexport default async function start(serverOptions: any, port?: number, hostname?: string) {\n  const app = next(serverOptions);\n  const srv = http.createServer(app.getRequestHandler());\n  await new Promise((resolve, reject) => {\n    // This code catches EADDRINUSE error if the port is already in use\n    srv.on('error', reject);\n    srv.on('listening', () => resolve());\n    srv.listen(port, hostname);\n  });\n  // It's up to caller to run `app.prepare()`, so it can notify that the server\n  // is listening before starting any intensive operations.\n  return app;\n}\n\n// https://github.com/zeit/next.js/blob/canary/packages/next/cli/next-start.ts\nimport {resolve} from 'path';\n\nconst dir = resolve(args._[0] || '.');\nconst port = args['--port'] || 3000;\n\nstart({dir}, port, args['--hostname'])\n  .then(async (app) => {\n    // tslint:disable-next-line\n    console.log(`> Ready on http://${args['--hostname'] || 'localhost'}:${port}`);\n    await app.prepare();\n  })\n  .catch((err) => {\n    // tslint:disable-next-line\n    console.error(err);\n    process.exit(1);\n  });\n")),(0,o.kt)("h2",{id:"\u6700\u7b80\u81ea\u5b9a\u4e49-server"},"\u6700\u7b80\u81ea\u5b9a\u4e49 server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 server \u5219\u4e0d\u9700\u8981 next start")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {createServer} = require('http');\nconst {parse} = require('url');\nconst next = require('next');\n\nconst port = parseInt(process.env.PORT, 10) || 3000;\nconst dev = process.env.NODE_ENV !== 'production';\nconst app = next({dev});\nconst handle = app.getRequestHandler();\n\napp.prepare().then(() => {\n  createServer((req, res) => {\n    const parsedUrl = parse(req.url, true);\n    handle(req, res, parsedUrl);\n  }).listen(port, (err) => {\n    if (err) throw err;\n    console.log(`> Ready on http://localhost:${port}`);\n  });\n});\n")))}f.isMDXComponent=!0}}]);