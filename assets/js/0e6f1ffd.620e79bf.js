"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53148],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],l={title:"NextJS FAQ",tags:["FAQ"]},o=void 0,u={unversionedId:"web/framework/nextjs-faq",id:"web/framework/nextjs-faq",title:"NextJS FAQ",description:"pathname vs asPath",source:"@site/notes/web/framework/nextjs-faq.md",sourceDirName:"web/framework",slug:"/web/framework/nextjs-faq",permalink:"/notes/web/framework/nextjs-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/nextjs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"NextJS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"NextJS Cookbook",permalink:"/notes/web/framework/nextjs-cookbook"},next:{title:"NextJS Internal",permalink:"/notes/web/framework/nextjs-internal"}},p={},c=[{value:"pathname vs asPath",id:"pathname-vs-aspath",level:2},{value:"server vs serverless",id:"server-vs-serverless",level:2},{value:"next.config.ts",id:"nextconfigts",level:2},{value:"next.config.js \u7c7b\u578b\u63d0\u793a",id:"nextconfigjs-\u7c7b\u578b\u63d0\u793a",level:2},{value:"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",level:2},{value:"Critical dependency: the request of a dependency is an expression",id:"critical-dependency-the-request-of-a-dependency-is-an-expression",level:2},{value:"\u7981\u7528 minification",id:"\u7981\u7528-minification",level:2},{value:"css \u987a\u5e8f\u4e0d\u4e00\u81f4",id:"css-\u987a\u5e8f\u4e0d\u4e00\u81f4",level:2},{value:"\u8bbf\u95ee public \u91cc\u7684 index.html",id:"\u8bbf\u95ee-public-\u91cc\u7684-indexhtml",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"pathname-vs-aspath"},"pathname vs asPath"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"pathname"),(0,s.kt)("th",{parentName:"tr",align:null},"asPath"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"/"),(0,s.kt)("td",{parentName:"tr",align:null},"/")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"/user/[id]")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"/user/123"))))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"asPath \u771f\u5b9e\u8def\u5f84"),(0,s.kt)("li",{parentName:"ul"},"pathname NextJS \u7684\u6587\u4ef6\u8def\u5f84")),(0,s.kt)("h2",{id:"server-vs-serverless"},"server vs serverless"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"server",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u6253\u5305\u4e3a\u6574\u4e2a\u5e94\u7528"),(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49 server"),(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301\u957f\u94fe\u63a5 - websocket"),(0,s.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528"))),(0,s.kt)("li",{parentName:"ul"},"serverless",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u6784\u5efa\u4e00\u4f53\u5316\u5e94\u7528"),(0,s.kt)("li",{parentName:"ul"},"\u9875\u9762\u72ec\u7acb - \u670d\u52a1\u4e0e\u9875\u9762\u4e0d\u8026\u5408"),(0,s.kt)("li",{parentName:"ul"},"\u9875\u9762\u4e0e\u670d\u52a1\u5206\u79bb\u540e\u66f4\u5bb9\u6613\u90e8\u7f72",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u4f46\u4f9d\u7136\u662f\u9700\u8981 next \u6765\u8fd0\u884c - ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/issues/4496"},"#4496")))),(0,s.kt)("li",{parentName:"ul"},"vercel \u9ed8\u8ba4\u6a21\u5f0f"))),(0,s.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next.config.js/build-target"},"Build Target"))))),(0,s.kt)("h2",{id:"nextconfigts"},"next.config.ts"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"next.config.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"require('ts-node').register(require('./tsconfig.json'));\n\nmodule.exports = require('./next.config.ts');\n")),(0,s.kt)("h2",{id:"nextconfigjs-\u7c7b\u578b\u63d0\u793a"},"next.config.js \u7c7b\u578b\u63d0\u793a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('next/dist/next-server/server/config').NextConfig} */\nmodule.exports = {};\n")),(0,s.kt)("h2",{id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"},"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add polka cors body-parser\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import polka from 'polka';\nimport cors from 'cors';\nimport { json, text, urlencoded } from 'body-parser';\n\nlet _router;\n\nexport function getRouter() {\n  return _router || (_router = routes(setup(polka())));\n}\n\nfunction setup(route) {\n  // treat path params as query - same as how next api handle this\n  route.use((req, res, next) => {\n    if (req.params) {\n      const q = req.query;\n      for (const [k, v] of Object.entries(req.params)) {\n        if (!q[k]) {\n          q[k] = v;\n        }\n      }\n    }\n    return next();\n  });\n  return route;\n}\n\nexport function routes(r: any) {\n  const route = r as Router<NextApiRequest, NextApiResponse>;\n  // handle error\n  route.use(async (req, res, next) => {\n    try {\n      return await next();\n    } catch (e) {\n      const detail = normalizeError(e);\n      res.status(detail.status).json(detail);\n      console.error(`ERROR Handle ${req.url}`, e);\n    }\n  });\n  route.use(json());\n  route.use(urlencoded({ extended: true }));\n  route.use(text());\n\n  const corsOrigin = cors({ origin: true });\n\n  // cors\n  route.get('/api/cors', corsOrigin as any, (req, res) => res.json({}));\n  // path params\n  route.get('/api/user/:id', corsOrigin as any, (req, res) => res.json({ id: req.query.id }));\n\n  return route;\n}\n\nexport function handleRequest(req, res) {\n  getRouter().handler(req, res);\n}\n\nexport default handleRequest;\nexport const config = {\n  api: {\n    bodyParser: false,\n  },\n};\n")),(0,s.kt)("h2",{id:"critical-dependency-the-request-of-a-dependency-is-an-expression"},"Critical dependency: the request of a dependency is an expression"),(0,s.kt)("p",null,"\u6784\u5efa\u4e3a serverless \u65f6\u53ef\u80fd\u51fa\u73b0"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/issues/10633"},"#10633"))),(0,s.kt)("h2",{id:"\u7981\u7528-minification"},"\u7981\u7528 minification"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  productionBrowserSourceMaps: true,\n  webpack(config) {\n    config.optimization.minimize = false;\n    config.optimization.minimizer = [];\n    return config;\n  },\n};\n")),(0,s.kt)("h2",{id:"css-\u987a\u5e8f\u4e0d\u4e00\u81f4"},"css \u987a\u5e8f\u4e0d\u4e00\u81f4"),(0,s.kt)("p",null,"\u5c06 app \u5bfc\u5165\u7684 css \u62bd\u53d6\u653e\u5230\u4e00\u4e2a css \u6587\u4ef6\u8fdb\u884c\u5bfc\u5165"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"@import '~normalize.css/normalize.css';\n@import '~@blueprintjs/icons/lib/css/blueprint-icons.css';\n@import '~@blueprintjs/core/lib/css/blueprint.css';\n@import '~@blueprintjs/select/lib/css/blueprint-select.css';\n@import '~@blueprintjs/datetime/lib/css/blueprint-datetime.css';\n@import '~@blueprintjs/popover2/lib/css/blueprint-popover2.css';\n@import '~@blueprintjs/table/lib/css/table.css';\n@import '~tailwindcss/tailwind.css';\n@import '~nprogress/nprogress.css';\n")),(0,s.kt)("p",null,"\u786e\u4fdd tailwind \u8986\u76d6 blueprintjs \u6837\u5f0f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5f00\u542f webpack5 \u8be5\u65b9\u5f0f\u65e0\u6548"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/issues/16630"},"#16630"))),(0,s.kt)("h2",{id:"\u8bbf\u95ee-public-\u91cc\u7684-indexhtml"},"\u8bbf\u95ee public \u91cc\u7684 index.html"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.export = {\n  async rewrites() {\n    return {\n      fallback: [\n        {\n          source: '/:path*',\n          destination: '/:path*/index.html',\n        },\n      ],\n    };\n  },\n};\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/discussions/14361#discussioncomment-874019"},"https://github.com/vercel/next.js/discussions/14361#discussioncomment-874019"))))}d.isMDXComponent=!0}}]);