(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),u=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return t?s.a.createElement(d,o(o({ref:n},l),{},{components:t})):s.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},128:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),s=t(8),a=(t(0),t(1114)),i={title:"NextJS FAQ"},o={unversionedId:"web/framework/nextjs-faq",id:"web/framework/nextjs-faq",isDocsHomePage:!1,title:"NextJS FAQ",description:"server vs serverless",source:"@site/notes/web/framework/nextjs-faq.md",slug:"/web/framework/nextjs-faq",permalink:"/notes/web/framework/nextjs-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/nextjs-faq.md",version:"current",sidebar:"docs",previous:{title:"NextJS Cookbook",permalink:"/notes/web/framework/nextjs-cookbook"},next:{title:"NextJS Internal",permalink:"/notes/web/framework/nextjs-internal"}},c=[{value:"server vs serverless",id:"server-vs-serverless",children:[]},{value:"next.config.ts",id:"nextconfigts",children:[]},{value:"next.config.js \u7c7b\u578b\u63d0\u793a",id:"nextconfigjs-\u7c7b\u578b\u63d0\u793a",children:[]},{value:"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3",children:[]},{value:"Critical dependency: the request of a dependency is an expression",id:"critical-dependency-the-request-of-a-dependency-is-an-expression",children:[]},{value:"\u7981\u7528 minification",id:"\u7981\u7528-minification",children:[]},{value:"css \u987a\u5e8f\u4e0d\u4e00\u81f4",id:"css-\u987a\u5e8f\u4e0d\u4e00\u81f4",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"server-vs-serverless"},"server vs serverless"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"server",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6253\u5305\u4e3a\u6574\u4e2a\u5e94\u7528"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49 server"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u957f\u94fe\u63a5 - websocket"),Object(a.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528"))),Object(a.b)("li",{parentName:"ul"},"serverless",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u6784\u5efa\u4e00\u4f53\u5316\u5e94\u7528"),Object(a.b)("li",{parentName:"ul"},"\u9875\u9762\u72ec\u7acb - \u670d\u52a1\u4e0e\u9875\u9762\u4e0d\u8026\u5408"),Object(a.b)("li",{parentName:"ul"},"\u9875\u9762\u4e0e\u670d\u52a1\u5206\u79bb\u540e\u66f4\u5bb9\u6613\u90e8\u7f72",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f46\u4f9d\u7136\u662f\u9700\u8981 next \u6765\u8fd0\u884c - ",Object(a.b)("a",{parentName:"li",href:"https://github.com/zeit/next.js/issues/4496"},"#4496")))),Object(a.b)("li",{parentName:"ul"},"vercel \u9ed8\u8ba4\u6a21\u5f0f"))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next.config.js/build-target"},"Build Target"))))),Object(a.b)("h2",{id:"nextconfigts"},"next.config.ts"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"next.config.js")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"require('ts-node').register(require('./tsconfig.json'));\n\nmodule.exports = require('./next.config.ts');\n")),Object(a.b)("h2",{id:"nextconfigjs-\u7c7b\u578b\u63d0\u793a"},"next.config.js \u7c7b\u578b\u63d0\u793a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"/** @type {import('next/dist/next-server/server/config').NextConfig} */\nmodule.exports = {};\n")),Object(a.b)("h2",{id:"\u4f7f\u7528\u5355\u4e00\u7684-api-\u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"},"\u4f7f\u7528\u5355\u4e00\u7684 API \u6765\u5904\u7406\u6240\u6709\u63a5\u53e3"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"yarn add polka cors body-parser\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import polka from 'polka';\nimport cors from 'cors';\nimport { json, text, urlencoded } from 'body-parser';\n\nlet _router;\n\nexport function getRouter() {\n  return _router || (_router = routes(setup(polka())));\n}\n\nfunction setup(route) {\n  // treat path params as query - same as how next api handle this\n  route.use((req, res, next) => {\n    if (req.params) {\n      const q = req.query;\n      for (const [k, v] of Object.entries(req.params)) {\n        if (!q[k]) {\n          q[k] = v;\n        }\n      }\n    }\n    return next();\n  });\n  return route;\n}\n\nexport function routes(r: any) {\n  const route = r as Router<NextApiRequest, NextApiResponse>;\n  // handle error\n  route.use(async (req, res, next) => {\n    try {\n      return await next();\n    } catch (e) {\n      const detail = normalizeError(e);\n      res.status(detail.status).json(detail);\n      console.error(`ERROR Handle ${req.url}`, e);\n    }\n  });\n  route.use(json());\n  route.use(urlencoded({ extended: true }));\n  route.use(text());\n\n  const corsOrigin = cors({ origin: true });\n\n  // cors\n  route.get('/api/cors', corsOrigin as any, (req, res) => res.json({}));\n  // path params\n  route.get('/api/user/:id', corsOrigin as any, (req, res) => res.json({ id: req.query.id }));\n\n  return route;\n}\n\nexport function handleRequest(req, res) {\n  getRouter().handler(req, res);\n}\n\nexport default handleRequest;\nexport const config = {\n  api: {\n    bodyParser: false,\n  },\n};\n")),Object(a.b)("h2",{id:"critical-dependency-the-request-of-a-dependency-is-an-expression"},"Critical dependency: the request of a dependency is an expression"),Object(a.b)("p",null,"\u6784\u5efa\u4e3a serverless \u65f6\u53ef\u80fd\u51fa\u73b0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/vercel/next.js/issues/10633"},"#10633"))),Object(a.b)("h2",{id:"\u7981\u7528-minification"},"\u7981\u7528 minification"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"export default {\n  productionBrowserSourceMaps: true,\n  webpack(config) {\n    config.optimization.minimize = false;\n    config.optimization.minimizer = [];\n    return config;\n  },\n};\n")),Object(a.b)("h2",{id:"css-\u987a\u5e8f\u4e0d\u4e00\u81f4"},"css \u987a\u5e8f\u4e0d\u4e00\u81f4"),Object(a.b)("p",null,"\u5c06 app \u5bfc\u5165\u7684 css \u62bd\u53d6\u653e\u5230\u4e00\u4e2a css \u6587\u4ef6\u8fdb\u884c\u5bfc\u5165"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"@import '~normalize.css/normalize.css';\n@import '~@blueprintjs/icons/lib/css/blueprint-icons.css';\n@import '~@blueprintjs/core/lib/css/blueprint.css';\n@import '~@blueprintjs/select/lib/css/blueprint-select.css';\n@import '~@blueprintjs/datetime/lib/css/blueprint-datetime.css';\n@import '~@blueprintjs/popover2/lib/css/blueprint-popover2.css';\n@import '~@blueprintjs/table/lib/css/table.css';\n@import '~tailwindcss/tailwind.css';\n@import '~nprogress/nprogress.css';\n")),Object(a.b)("p",null,"\u786e\u4fdd tailwind \u8986\u76d6 blueprintjs \u6837\u5f0f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5f00\u542f webpack5 \u8be5\u65b9\u5f0f\u65e0\u6548"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/vercel/next.js/issues/16630"},"#16630"))))}u.isMDXComponent=!0}}]);