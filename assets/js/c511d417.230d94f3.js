"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25812],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},54897:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return g}});var r=t(49613),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&u(e,t,n[t]);return e};const c={title:"NextJS FAQ",tags:["FAQ"]},m="NextJS FAQ",k={unversionedId:"web/framework/nextjs/nextjs-faq",id:"web/framework/nextjs/nextjs-faq",title:"NextJS FAQ",description:"pathname vs asPath",source:"@site/../notes/web/framework/nextjs/nextjs-faq.md",sourceDirName:"web/framework/nextjs",slug:"/web/framework/nextjs/faq",permalink:"/notes/web/framework/nextjs/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/nextjs/nextjs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669864776,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{title:"NextJS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"NextJS Cookbook",permalink:"/notes/web/framework/nextjs/cookbook"},next:{title:"NextJS Internal",permalink:"/notes/web/framework/nextjs/internal"}},f={},g=[{value:"pathname vs asPath",id:"pathname-vs-aspath",level:2},{value:"server vs serverless",id:"server-vs-serverless",level:2},{value:"next.config.ts",id:"nextconfigts",level:2},{value:"next.config.js \u7c7b\u578b\u63d0\u793a",id:"nextconfigjs-\u7c7b\u578b\u63d0\u793a",level:2},{value:"Prop className did not match",id:"prop-classname-did-not-match",level:2},{value:"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",level:2},{value:"Critical dependency: the request of a dependency is an expression",id:"critical-dependency-the-request-of-a-dependency-is-an-expression",level:2},{value:"\u7981\u7528 minification",id:"\u7981\u7528-minification",level:2},{value:"css \u987a\u5e8f\u4e0d\u4e00\u81f4",id:"css-\u987a\u5e8f\u4e0d\u4e00\u81f4",level:2},{value:"\u8bbf\u95ee public \u91cc\u7684 index.html",id:"\u8bbf\u95ee-public-\u91cc\u7684-indexhtml",level:2},{value:"Lockfile was successfully patched, please run &quot;npm install&quot; to ensure @next/swc dependencies are downloaded",id:"lockfile-was-successfully-patched-please-run-npm-install-to-ensure-nextswc-dependencies-are-downloaded",level:2},{value:"outputStandalone",id:"outputstandalone",level:2},{value:"dynamic preload",id:"dynamic-preload",level:2},{value:"safari tel",id:"safari-tel",level:2},{value:"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668",id:"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668",level:2},{value:"\u5982\u4f55\u5728 getInitialProps \u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757",id:"\u5982\u4f55\u5728-getinitialprops-\u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757",level:2},{value:"Invalid left-hand side in assignment &quot;MyModule*&quot; = namespaces;",id:"invalid-left-hand-side-in-assignment-mymodule--namespaces",level:2},{value:"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c SSR \u4ee3\u7801",id:"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c-ssr-\u4ee3\u7801",level:2},{value:"You&#39;re using a Node.js module (buffer) which is not supported in the Edge Runtime",id:"youre-using-a-nodejs-module-buffer-which-is-not-supported-in-the-edge-runtime",level:2},{value:"Expected server HTML to contain a matching div",id:"expected-server-html-to-contain-a-matching-div",level:2},{value:"SPA rewrites",id:"spa-rewrites",level:2},{value:"Date cannot be serialized as JSON",id:"date-cannot-be-serialized-as-json",level:2},{value:"Module build failed: UnhandledSchemeError: Reading from &quot;node:assert&quot; is not handled by plugins (Unhandled scheme).",id:"module-build-failed-unhandledschemeerror-reading-from-nodeassert-is-not-handled-by-plugins-unhandled-scheme",level:2},{value:"Can&#39;t resolve &#39;assert&#39;",id:"cant-resolve-assert",level:2}],h={toc:g};function b(e){var n,t=e,{components:a}=t,u=((e,n)=>{var t={};for(var r in e)o.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=d(d({},h),u),l(n,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"nextjs-faq"}),"NextJS FAQ"),(0,r.kt)("h2",d({},{id:"pathname-vs-aspath"}),"pathname vs asPath"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"path"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"pathname"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"asPath"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"/"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"/"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"/user/123"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/user/[id]")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/user/123"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"/user/123#top"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/user/[id]")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/user/123#top"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"asPath \u771f\u5b9e\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"pathname NextJS \u7684\u6587\u4ef6\u8def\u5f84")),(0,r.kt)("h2",d({},{id:"server-vs-serverless"}),"server vs serverless"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6253\u5305\u4e3a\u6574\u4e2a\u5e94\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49 server"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u957f\u94fe\u63a5 - websocket"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528"))),(0,r.kt)("li",{parentName:"ul"},"serverless",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u6784\u5efa\u4e00\u4f53\u5316\u5e94\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u9875\u9762\u72ec\u7acb - \u670d\u52a1\u4e0e\u9875\u9762\u4e0d\u8026\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u9875\u9762\u4e0e\u670d\u52a1\u5206\u79bb\u540e\u66f4\u5bb9\u6613\u90e8\u7f72",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u4f9d\u7136\u662f\u9700\u8981 next \u6765\u8fd0\u884c - ",(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/zeit/next.js/issues/4496"}),"#4496")))),(0,r.kt)("li",{parentName:"ul"},"vercel \u9ed8\u8ba4\u6a21\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://nextjs.org/docs/api-reference/next.config.js/build-target"}),"Build Target"))))),(0,r.kt)("h2",d({},{id:"nextconfigts"}),"next.config.ts"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"next.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"require('ts-node').register(require('./tsconfig.json'));\n\nmodule.exports = require('./next.config.ts');\n")),(0,r.kt)("h2",d({},{id:"nextconfigjs-\u7c7b\u578b\u63d0\u793a"}),"next.config.js \u7c7b\u578b\u63d0\u793a"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"/** @type {import('next').NextConfig} */\nmodule.exports = {};\n")),(0,r.kt)("h2",d({},{id:"prop-classname-did-not-match"}),"Prop className did not match"),(0,r.kt)("p",null,"nextjs 12 \u540e\u9700\u8981\u914d\u7f6e compiler"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  compiler: {\n    // \u6dfb\u52a0\n    styledComponents: true,\n  },\n};\nmodule.exports = nextConfig;\n")),(0,r.kt)("h2",d({},{id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"}),"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"yarn add polka cors body-parser\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import polka from 'polka';\nimport cors from 'cors';\nimport { json, text, urlencoded } from 'body-parser';\n\nlet _router;\n\nexport function getRouter() {\n  return _router || (_router = routes(setup(polka())));\n}\n\nfunction setup(route) {\n  // treat path params as query - same as how next api handle this\n  route.use((req, res, next) => {\n    if (req.params) {\n      const q = req.query;\n      for (const [k, v] of Object.entries(req.params)) {\n        if (!q[k]) {\n          q[k] = v;\n        }\n      }\n    }\n    return next();\n  });\n  return route;\n}\n\nexport function routes(r: any) {\n  const route = r as Router<NextApiRequest, NextApiResponse>;\n  // handle error\n  route.use(async (req, res, next) => {\n    try {\n      return await next();\n    } catch (e) {\n      const detail = normalizeError(e);\n      res.status(detail.status).json(detail);\n      console.error(`ERROR Handle ${req.url}`, e);\n    }\n  });\n  route.use(json());\n  route.use(urlencoded({ extended: true }));\n  route.use(text());\n\n  const corsOrigin = cors({ origin: true });\n\n  // cors\n  route.get('/api/cors', corsOrigin as any, (req, res) => res.json({}));\n  // path params\n  route.get('/api/user/:id', corsOrigin as any, (req, res) => res.json({ id: req.query.id }));\n\n  return route;\n}\n\nexport function handleRequest(req, res) {\n  getRouter().handler(req, res);\n}\n\nexport default handleRequest;\nexport const config = {\n  api: {\n    bodyParser: false,\n  },\n};\n")),(0,r.kt)("h2",d({},{id:"critical-dependency-the-request-of-a-dependency-is-an-expression"}),"Critical dependency: the request of a dependency is an expression"),(0,r.kt)("p",null,"\u6784\u5efa\u4e3a serverless \u65f6\u53ef\u80fd\u51fa\u73b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/vercel/next.js/issues/10633"}),"#10633"))),(0,r.kt)("h2",d({},{id:"\u7981\u7528-minification"}),"\u7981\u7528 minification"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"export default {\n  productionBrowserSourceMaps: true,\n  webpack(config) {\n    config.optimization.minimize = false;\n    config.optimization.minimizer = [];\n    return config;\n  },\n};\n")),(0,r.kt)("h2",d({},{id:"css-\u987a\u5e8f\u4e0d\u4e00\u81f4"}),"css \u987a\u5e8f\u4e0d\u4e00\u81f4"),(0,r.kt)("p",null,"\u5c06 app \u5bfc\u5165\u7684 css \u62bd\u53d6\u653e\u5230\u4e00\u4e2a css \u6587\u4ef6\u8fdb\u884c\u5bfc\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-css"}),"@import '~normalize.css/normalize.css';\n@import '~@blueprintjs/icons/lib/css/blueprint-icons.css';\n@import '~@blueprintjs/core/lib/css/blueprint.css';\n@import '~@blueprintjs/select/lib/css/blueprint-select.css';\n@import '~@blueprintjs/datetime/lib/css/blueprint-datetime.css';\n@import '~@blueprintjs/popover2/lib/css/blueprint-popover2.css';\n@import '~@blueprintjs/table/lib/css/table.css';\n@import '~tailwindcss/tailwind.css';\n@import '~nprogress/nprogress.css';\n")),(0,r.kt)("p",null,"\u786e\u4fdd tailwind \u8986\u76d6 blueprintjs \u6837\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f webpack5 \u8be5\u65b9\u5f0f\u65e0\u6548"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/vercel/next.js/issues/16630"}),"#16630"))),(0,r.kt)("h2",d({},{id:"\u8bbf\u95ee-public-\u91cc\u7684-indexhtml"}),"\u8bbf\u95ee public \u91cc\u7684 index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"module.export = {\n  async rewrites() {\n    return {\n      fallback: [\n        {\n          source: '/:path*',\n          destination: '/:path*/index.html',\n        },\n      ],\n    };\n  },\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/vercel/next.js/discussions/14361#discussioncomment-874019"}),"https://github.com/vercel/next.js/discussions/14361#discussioncomment-874019"))),(0,r.kt)("h2",d({},{id:"lockfile-was-successfully-patched-please-run-npm-install-to-ensure-nextswc-dependencies-are-downloaded"}),'Lockfile was successfully patched, please run "npm install" to ensure @next/swc dependencies are downloaded'),(0,r.kt)("h2",d({},{id:"outputstandalone"}),"outputStandalone"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u975e\u5e38\u9002\u7528\u4e8e docker \u73af\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u9700\u8981 .next/standalone \u4e0d\u9700\u8981 node_modules"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/vercel/nft"}),"@vercel/nft")," \u5206\u6790 import")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  experimental: {\n    outputStandalone: true,\n    // monorepo \u9700\u8981\u8c03\u6574 root\n    outputFileTracingRoot: path.join(__dirname, '../../'),\n  },\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-dockerfile"}),'FROM node:16-alpine\nWORKDIR /app\n\nENV NODE_ENV production\nENV NEXT_TELEMETRY_DISABLED 1\n\nRUN addgroup --system --gid 1001 nodejs\nRUN adduser --system --uid 1001 nextjs\n\n# monorepo need prefix path\nCOPY next.config.js ./apps/web/\nCOPY public ./apps/web/public\nCOPY package.json ./apps/web/package.json\n\nCOPY --chown=nextjs:nodejs .next/standalone ./\nCOPY --chown=nextjs:nodejs .next/static ./apps/web/.next/static\n\nUSER nextjs\n\nEXPOSE 3000\nENV PORT 3000\n\n# monorepo\nCMD ["node", "apps/web/server.js"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7531\u4e8e hosting \u7684\u539f\u56e0\uff0c\u53ef\u80fd\u51fa\u73b0\u6a21\u5757\u65e0\u6cd5\u627e\u5230\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"pnpm \u91cd\u590d build \u4f1a\u6709\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e @vercel/nft \u8ddf\u8e2a\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental"}),"https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental"))),(0,r.kt)("h2",d({},{id:"dynamic-preload"}),"dynamic preload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dyanmic \u4e0d\u4f1a\u9884\u52a0\u8f7d - prefetch"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 @loadable/component")),(0,r.kt)("h2",d({},{id:"safari-tel"}),"safari tel"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-html"}),'<meta name="format-detection" content="telephone=no" />\n')),(0,r.kt)("h2",d({},{id:"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668"}),"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// Webpack \u5b9a\u4e49 - \u4f1a\u6839\u636e\u4f9d\u8d56\u6765\u79fb\u9664\u4ee3\u7801\n// https://github.com/zeit/next.js/pull/5159\nprocess.browser;\n// \u901a\u7528\u903b\u8f91\ntypeof window === 'undefined';\n")),(0,r.kt)("h2",d({},{id:"\u5982\u4f55\u5728-getinitialprops-\u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757"}),"\u5982\u4f55\u5728 getInitialProps \u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u76f4\u63a5 require \u662f\u4f1a\u5bfc\u81f4\u88ab\u6253\u5305\u5230\u5ba2\u6237\u7aef\u4ee3\u7801\u7684")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const faker = eval(\"require('faker')\");\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u5176\u4ed6\u65b9\u5f0f\u53c2\u8003 ",(0,r.kt)("a",d({parentName:"p"},{href:"https://arunoda.me/blog/ssr-and-server-only-modules"}),"SSR and Server Only Modules")),(0,r.kt)("h2",d({},{id:"invalid-left-hand-side-in-assignment-mymodule--namespaces"}),'Invalid left-hand side in assignment "MyModule',"*",'" = namespaces;'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://spectrum.chat/zeit/now/using-npm-debug-module-breaks-build-overriding-any-property-on-process-env~b36f36b2-7785-4aea-b1f9-065a284b4188"}),"using npm debug module breaks build (overriding any property on process.env)")),(0,r.kt)("li",{parentName:"ul"},"debug \u6a21\u5757\u7684\u95ee\u9898 - \u6ce8\u610f\u5f15\u5165\u4f4d\u7f6e - \u5982\u679c\u901a\u8fc7 transpile \u53ef\u80fd\u4f1a\u6709\u95ee\u9898")),(0,r.kt)("h2",d({},{id:"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c-ssr-\u4ee3\u7801"}),"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c SSR \u4ee3\u7801"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev webpack-bundle-analyzer @zeit/next-bundle-analyzer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"next.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');\n\nconst nextConfig = {\n  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),\n  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),\n  bundleAnalyzerConfig: {\n    server: {\n      analyzerMode: 'static',\n      reportFilename: '../bundles/server.html',\n    },\n    browser: {\n      analyzerMode: 'static',\n      reportFilename: '../bundles/client.html',\n    },\n  },\n  webpack(config) {\n    return config;\n  },\n};\n\nmodule.exports = withBundleAnalyzer(nextConfig);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u811a\u672c")),(0,r.kt)("p",null,"\u6dfb\u52a0\u5230 package.json"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'"analyze": "BUNDLE_ANALYZE=both next build",\n"analyze:server": "BUNDLE_ANALYZE=server next build",\n"analyze:browser": "BUNDLE_ANALYZE=browser next build"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u5206\u6790")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm run analyze\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://arunoda.me/blog/ssr-and-server-only-modules"}),"SSR and Server Only Modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/zeit/next.js/tree/canary/examples/analyze-bundles"}),"examples/analyze-bundles")))),(0,r.kt)("h2",d({},{id:"youre-using-a-nodejs-module-buffer-which-is-not-supported-in-the-edge-runtime"}),"You're using a Node.js module (buffer) which is not supported in the Edge Runtime"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Buffer.from -> atob/btoa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://nextjs.org/docs/api-reference/edge-runtime"}),"https://nextjs.org/docs/api-reference/edge-runtime"))),(0,r.kt)("h2",d({},{id:"expected-server-html-to-contain-a-matching-div"}),"Expected server HTML to contain a matching div"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-tsx"}),"function App({ Component, pageProps }: AppProps) {\n  return (\n    <div suppressHydrationWarning> // <- ADD THIS\n      {typeof window === 'undefined' ? null : <Component {...pageProps} />}\n    </div>\n  );\n}\n")),(0,r.kt)("h2",d({},{id:"spa-rewrites"}),"SPA rewrites"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts",metastring:'title="next.config.js"',title:'"next.config.js"'}),"module.exports = {\n  async rewrites() {\n    return [\n      {\n        source: '/:any*',\n        destination: '/',\n      },\n    ];\n  },\n};\n")),(0,r.kt)("h2",d({},{id:"date-cannot-be-serialized-as-json"}),"Date cannot be serialized as JSON"),(0,r.kt)("p",null,"superjson"),(0,r.kt)("h2",d({},{id:"module-build-failed-unhandledschemeerror-reading-from-nodeassert-is-not-handled-by-plugins-unhandled-scheme"}),'Module build failed: UnhandledSchemeError: Reading from "node:assert" is not handled by plugins (Unhandled scheme).'),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="next.config.js"',title:'"next.config.js"'}),"const webpack = require('webpack');\n\nmodule.exports = {\n  webpack: (config, options) => {\n    config.plugins.push(\n      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {\n        resource.request = resource.request.replace(/^node:/, '');\n      }),\n    );\n    return config;\n  },\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"middleware \u8fd0\u884c\u73af\u5883\u9650\u5236\u5f88\u591a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://nextjs.org/docs/api-reference/edge-runtime"}),"https://nextjs.org/docs/api-reference/edge-runtime")))),(0,r.kt)("li",{parentName:"ul"},"webpack \u4e0d\u652f\u6301 node \u534f\u8bae"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/vercel/next.js/issues/28774"}),"https://github.com/vercel/next.js/issues/28774"))),(0,r.kt)("h2",d({},{id:"cant-resolve-assert"}),"Can't resolve 'assert'"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm add assert\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"node:assert -> assert")))}b.isMDXComponent=!0}}]);