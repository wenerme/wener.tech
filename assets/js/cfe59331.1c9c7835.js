"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62949],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={id:"nextjs",title:"NextJS"},o=void 0,p={unversionedId:"web/framework/nextjs",id:"web/framework/nextjs",isDocsHomePage:!1,title:"NextJS",description:"- \u9875\u9762\u81ea\u5b9a\u4e49",source:"@site/notes/web/framework/nextjs.md",sourceDirName:"web/framework",slug:"/web/framework/nextjs",permalink:"/notes/web/framework/nextjs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/nextjs.md",tags:[],version:"current",frontMatter:{id:"nextjs",title:"NextJS"},sidebar:"docs",previous:{title:"NestJS",permalink:"/notes/web/framework/nestjs"},next:{title:"NextJS Cookbook",permalink:"/notes/web/framework/nextjs-cookbook"}},u=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[]},{value:"Tips",id:"tips",children:[]},{value:"\u63d0\u793a",id:"\u63d0\u793a",children:[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]},{value:"\u5e38\u7528\u811a\u672c",id:"\u5e38\u7528\u811a\u672c",children:[]}]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u9488\u5bf9\u670d\u52a1\u7aef\u914d\u7f6e fs:empty",id:"\u9488\u5bf9\u670d\u52a1\u7aef\u914d\u7f6e-fsempty",children:[]},{value:"\u652f\u6301 CSS",id:"\u652f\u6301-css",children:[]},{value:"apollo",id:"apollo",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668",id:"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668",children:[]},{value:"\u5982\u4f55\u5728 getInitialProps \u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757",id:"\u5982\u4f55\u5728-getinitialprops-\u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757",children:[]},{value:"Invalid left-hand side in assignment &quot;MyModule*&quot; = namespaces;",id:"invalid-left-hand-side-in-assignment-mymodule--namespaces",children:[]},{value:"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c SSR \u4ee3\u7801",id:"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c-ssr-\u4ee3\u7801",children:[]}]}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9875\u9762\u81ea\u5b9a\u4e49",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/tree/master/packages/next/pages"},"\u9ed8\u8ba4\u7279\u6b8a\u9875\u9762\u5185\u5bb9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_document.js"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u6587\u6863\u5185\u5bb9 - HTML"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"<Main/>")," \u4e4b\u5916\u7684\u7ec4\u5efa\u90fd\u4e0d\u4f1a\u5728\u9875\u9762\u521d\u59cb\u5316 - \u53ea\u505a SSR"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u8fd9\u91cc\u505a\u5e94\u7528\u903b\u8f91 - \u5728 app \u505a"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u8fd9\u91cc\u505a\u5e03\u5c40"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u8fd9\u91cc\u7528\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728\u8fd9\u91cc\u5bfc\u5165 CSS"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_app.js"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5e94\u7528"))))),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/issues/8311"},"#8311")," - Setting-Up Socket.io-based Serverless API Route"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/issues/9965"},"#9965")," - Server-Sent Events don't work in Next API routes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/issues/9524"},"#9524")," - Static Generation / SSG Improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/issues/706"},"#706")," - Add support to transpile modules inside node_modules",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8de8\u9879\u76ee\u8f6c\u8bd1 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/martpie/next-transpile-modules"},"martpie/next-transpile-modules")),(0,l.kt)("li",{parentName:"ul"},"\u914d\u5408 lerna \u4f7f\u7528\u6709\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u88ab\u8f6c\u8bd1\u6a21\u5757\u4e0d\u80fd\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u9664\u975e\u6dfb\u52a0 package",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import 'libs/utils'")," \u4e0d\u53ef\u4ee5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import './utils'")," \u53ef\u4ee5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import '@wener/core/libs/utils'")," \u53ef\u4ee5"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/issues/5054"},"#5054")," - Truly static pages without react app",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PR ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/pull/11949"},"#11949"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9875\u9762\u5bfc\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"const config={unstable_runtimeJS: false}")))))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kirill-konshin/next-redux-wrapper"},"https://github.com/kirill-konshin/next-redux-wrapper")),(0,l.kt)("li",{parentName:"ul"},"i18n ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/isaachinman/next-i18next/issues/274"},"https://github.com/isaachinman/next-i18next/issues/274")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/unicodeveloper/awesome-nextjs"},"unicodeveloper/awesome-nextjs"))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"s")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"getInitialProps",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7528\u4e8e\u9875\u9762\u7ec4\u4ef6\u4e0d\u80fd\u7528\u4e8e\u5b50\u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u4f1a\u6267\u884c\uff0c\u4e4b\u540e\u4f1a\u5728\u5ba2\u6237\u7aef\u505a\u8f6c\u6362"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u80fd\u670d\u52a1\u7aef\u7684\u6a21\u5757\uff0c\u901a\u8fc7 API \u5b9e\u73b0\u8c03\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u4e86 node-fetch")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u6309\u9875\u9762\u5207\u5206 CSS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u7ec8\u4f1a\u751f\u6210\u5355\u4e2a css \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709 _app \u53ef\u4ee5\u5bfc\u5165\u5168\u5c40 css"))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e00 HTML \u5165\u53e3")))),(0,l.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316\u9879\u76ee\nmkdir my-web && cd my-web\n# \u4f9d\u8d56\n# npm install --save next react react-dom\n# npm install --save-dev typescript @types/react @types/node\nyarn add next@latest react@latest react-dom@latest\nyarn add --dev typescript @types/react @types/node\n\n# \u9996\u9875\nmkdir pages\ncat <<INDEX >pages/index.tsx\nimport React from 'react'\nfunction Home({ pid }) {\n  return <div>NextJS Running on {pid}!</div>\n}\nHome.getInitialProps = function () {\n  return { pid: process.pid }\n}\nexport default Home\nINDEX\n# \u542f\u52a8\u670d\u52a1\n./node_modules/.bin/next\n# \u8bbf\u95ee http://localhost:3000\n\n# \u5176\u5b83\u5e38\u7528\u76ee\u5f55\nmkdir -p public libs hooks types components modules reducers hooks\n")),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u57fa\u7840\u4f9d\u8d56\nyarn add next@latest react@latest react-dom@latest\nyarn add --dev typescript @types/react @types/node\n\n# Next \u6269\u5c55\u589e\u5f3a\u63d2\u4ef6\n# \u5df2\u5185\u5efa\n# yarn add @zeit/next-css @zeit/next-sass @next/mdx\nyarn add next-transpile-modules @next/bundle-analyzer\n\n# \u5df2\u5185\u5efa\n# yarn add dotenv tsconfig-paths-webpack-plugin\nyarn add --dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties\nyarn add --dev babel-plugin-import\n\n# \u670d\u52a1\u7aef\u5f00\u53d1\n# isomorphic-unfetch isomorphic-ws\n\n# \u5e38\u7528\u5de5\u5177\nyarn add moment lodash date-fns\nyarn add --dev @types/lodash\n\n# UI \u6846\u67b6\nyarn add antd\n\n# \u6d4b\u8bd5\nyarn add --dev ts-node jest ts-jest @types/jest\n")),(0,l.kt)("h2",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,l.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"next.config.js - \u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"next-env.d.ts - \u9488\u5bf9 TS \u7684\u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"pages - \u9875\u9762 - \u53ef\u76f4\u63a5\u8bbf\u95ee",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_document.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_app.js")),(0,l.kt)("li",{parentName:"ul"},"api - \u63a5\u53e3 - \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"/api/*")," \u8bbf\u95ee")))),(0,l.kt)("h4",{id:"\u81ea\u5b9a\u4e49-_appjs"},"\u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"h4"},"_app.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />;\n}\n\n// Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//\n//   return { ...appProps }\n// }\n\nexport default MyApp;\n")),(0,l.kt)("h4",{id:"\u81ea\u5b9a\u4e49-_documentjs"},"\u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"h4"},"_document.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// _document is only rendered on the server side and not on the client side\n// Event handlers like onClick can't be added to this file\n\n// ./pages/_document.js\nimport Document, { Html, Head, Main, NextScript } from 'next/document';\n\nclass MyDocument extends Document {\n  static async getInitialProps(ctx) {\n    const initialProps = await Document.getInitialProps(ctx);\n    return { ...initialProps };\n  }\n\n  render() {\n    return (\n      <Html>\n        <Head />\n        <body>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n\nexport default MyDocument;\n")),(0,l.kt)("h4",{id:"\u81ea\u5b9a\u4e49-_errorjs"},"\u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"h4"},"_error.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"")),(0,l.kt)("h3",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/micro"},"micro")," \u6846\u67b6")),(0,l.kt)("p",null,"\u4fee\u6539 pages/api/test.ts \u4e3a\u4ee5\u4e0b\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { NextApiRequest, NextApiResponse } from 'next';\nexport default (req: NextApiRequest, res: NextApiResponse) => {\n  res.status(200).json({ title: 'From server side' });\n};\n")),(0,l.kt)("p",null,"\u7136\u540e\u8bbf\u95ee http://localhost:3000/api/test"),(0,l.kt)("h4",{id:"\u63a5\u53e3\u914d\u7f6e"},"\u63a5\u53e3\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export const config = {\n  api: {\n    // \u9ed8\u8ba4\u4f1a\u89e3\u6790 1mb \u7684 body - \u53ef\u4ee5\u5173\u95ed\n    bodyParser: false,\n\n    // \u4fee\u6539\u914d\u7f6e\n    bodyParser: {\n      sizeLimit: '1mb',\n    },\n  },\n};\n")),(0,l.kt)("h4",{id:"\u652f\u6301-cors"},"\u652f\u6301 CORS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Cors from 'micro-cors';\n\nconst cors = Cors({\n  allowedMethods: ['GET', 'HEAD'],\n});\n\nfunction Endpoint(req, res) {\n  res.json({ message: 'Hello Everyone!' });\n}\n\nexport default cors(Endpoint);\n")),(0,l.kt)("h3",{id:"\u5e38\u7528\u811a\u672c"},"\u5e38\u7528\u811a\u672c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"packages.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "scripts": {\n    "test": "jest --passWithNoTests",\n    "dev": "next",\n    "build": "next build",\n    "start": "next start"\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u652f\u6301\u81ea\u5b9a\u4e49\u7aef\u53e3")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Heroku \u90e8\u7f72\u9700\u8981\u8fd9\u6837")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "scripts": {\n    "test": "jest --passWithNoTests",\n    "dev": "next dev -p ${PORT:-3000}",\n    "build": "next build",\n    "start": "next start -p ${PORT:-3000}"\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"workspace")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "scripts": {\n    "test": "yarn --cwd packages/server test",\n    "dev": "yarn --cwd packages/server dev",\n    "build": "yarn --cwd packages/server build",\n    "start": "yarn --cwd packages/server start"\n  }\n}\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next.config.js/introduction"},"next.config.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L63"},"defaultConfig"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // \u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\n  env: { customKey: 'my-value' },\n  // \u9875\u9762\u6269\u5c55\u540d\n  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],\n  // \u8d44\u6e90\u8def\u5f84\u66ff\u6362\n  assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',\n  // \u652f\u6301 server \u548c serverless\n  target: 'serverless',\n\n  // \u81ea\u5b9a\u4e49 webpack \u914d\u7f6e\n  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {\n    // Note: we provide webpack above so you should not `require` it\n    // Perform customizations to webpack config\n    // Important: return the modified config\n    config.plugins.push(new webpack.IgnorePlugin(/\\/__tests__\\//));\n    return config;\n  },\n  webpackDevMiddleware: (config) => {\n    // Perform customizations to webpack dev middleware config\n    // Important: return the modified config\n    return config;\n  },\n\n  // target \u4e3a server \u652f\u6301\u538b\u7f29\n  // \u5982\u679c\u524d\u7aef\u540e web \u670d\u52a1\u53ef\u4ee5\u4e0d\u8003\u8651\u5f00\u542f\n  compress: false,\n\n  // \u81ea\u52a8\u9759\u6001\u4f18\u5316\u7684\u63d0\u793a - \u95ea\u7535\u56fe\u6807\n  devIndicators: {\n    autoPrerender: false,\n  },\n\n  // \u5173\u95ed X-Powered-By \u5934\n  poweredByHeader: false,\n  // \u751f\u6210 ETag - \u9ed8\u8ba4\u5f00\u542f\n  generateEtags: false,\n\n  // \u6784\u5efa\u76ee\u5f55\n  distDir: 'build',\n\n  // \u751f\u6210\u6784\u5efa ID\n  generateBuildId: async () => {\n    // You can, for example, get the latest git commit hash here\n    return 'my-build-id';\n  },\n\n  onDemandEntries: {\n    // period (in ms) where the server will keep pages in the buffer\n    maxInactiveAge: 25 * 1000,\n    // number of pages that should be kept simultaneously without being disposed\n    pagesBufferLength: 2,\n  },\n\n  typescript: {\n    // \u5ffd\u7565\u5f00\u53d1\u65f6\u7684 typescript \u9519\u8bef\n    ignoreDevErrors: true,\n  },\n\n  // \u9759\u6001\u5bfc\u51fa\u7684\u8def\u5f84 - next export\n  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {\n    return {\n      '/': { page: '/' },\n      '/about': { page: '/about' },\n      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },\n      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },\n      '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },\n    };\n  },\n\n  // \u4f1a\u5bfc\u51fa\u4e3a about/index.html \u800c\u4e0d\u662f about.html\n  exportTrailingSlash: true,\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');\n\nmodule.exports = (phase, { defaultConfig }) => {\n  if (phase === PHASE_DEVELOPMENT_SERVER) {\n    return {\n      /* development only config options here */\n    };\n  }\n\n  return {\n    /* config options for all phases except development here */\n  };\n};\n")),(0,l.kt)("h3",{id:"\u9488\u5bf9\u670d\u52a1\u7aef\u914d\u7f6e-fsempty"},"\u9488\u5bf9\u670d\u52a1\u7aef\u914d\u7f6e fs:empty"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  webpack: (config, { isServer }) => {\n    if (!isServer) {\n      config.node = {\n        fs: 'empty',\n      };\n    }\n    return config;\n  },\n};\n")),(0,l.kt)("h3",{id:"\u652f\u6301-css"},"\u652f\u6301 CSS"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f 9.2 \u540e\u5185\u5efa\u652f\u6301 css")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const withCSS = require('@zeit/next-css');\nmodule.exports = withCSS({});\n")),(0,l.kt)("h3",{id:"apollo"},"apollo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/tree/master/examples/with-apollo"},"https://github.com/zeit/next.js/tree/master/examples/with-apollo"))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668"},"\u68c0\u6d4b\u5728\u6d4f\u89c8\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Webpack \u5b9a\u4e49 - \u4f1a\u6839\u636e\u4f9d\u8d56\u6765\u79fb\u9664\u4ee3\u7801\n// https://github.com/zeit/next.js/pull/5159\nprocess.browser;\n// \u901a\u7528\u903b\u8f91\ntypeof window === 'undefined';\n")),(0,l.kt)("h3",{id:"\u5982\u4f55\u5728-getinitialprops-\u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757"},"\u5982\u4f55\u5728 getInitialProps \u5f15\u5165\u670d\u52a1\u7aef\u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u76f4\u63a5 require \u662f\u4f1a\u5bfc\u81f4\u88ab\u6253\u5305\u5230\u5ba2\u6237\u7aef\u4ee3\u7801\u7684")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const faker = eval(\"require('faker')\");\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u5176\u4ed6\u65b9\u5f0f\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://arunoda.me/blog/ssr-and-server-only-modules"},"SSR and Server Only Modules")),(0,l.kt)("h3",{id:"invalid-left-hand-side-in-assignment-mymodule--namespaces"},'Invalid left-hand side in assignment "MyModule',"*",'" = namespaces;'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://spectrum.chat/zeit/now/using-npm-debug-module-breaks-build-overriding-any-property-on-process-env~b36f36b2-7785-4aea-b1f9-065a284b4188"},"using npm debug module breaks build (overriding any property on process.env)")),(0,l.kt)("li",{parentName:"ul"},"debug \u6a21\u5757\u7684\u95ee\u9898 - \u6ce8\u610f\u5f15\u5165\u4f4d\u7f6e - \u5982\u679c\u901a\u8fc7 transpile \u53ef\u80fd\u4f1a\u6709\u95ee\u9898")),(0,l.kt)("h3",{id:"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c-ssr-\u4ee3\u7801"},"\u5206\u6790\u670d\u52a1\u7aef\u4ee3\u7801\u548c SSR \u4ee3\u7801"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev webpack-bundle-analyzer @zeit/next-bundle-analyzer\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"next.config.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');\n\nconst nextConfig = {\n  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),\n  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),\n  bundleAnalyzerConfig: {\n    server: {\n      analyzerMode: 'static',\n      reportFilename: '../bundles/server.html',\n    },\n    browser: {\n      analyzerMode: 'static',\n      reportFilename: '../bundles/client.html',\n    },\n  },\n  webpack(config) {\n    return config;\n  },\n};\n\nmodule.exports = withBundleAnalyzer(nextConfig);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u811a\u672c")),(0,l.kt)("p",null,"\u6dfb\u52a0\u5230 package.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"analyze": "BUNDLE_ANALYZE=both next build",\n"analyze:server": "BUNDLE_ANALYZE=server next build",\n"analyze:browser": "BUNDLE_ANALYZE=browser next build"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6267\u884c\u5206\u6790")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run analyze\n")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://arunoda.me/blog/ssr-and-server-only-modules"},"SSR and Server Only Modules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zeit/next.js/tree/canary/examples/analyze-bundles"},"examples/analyze-bundles")))))}d.isMDXComponent=!0}}]);