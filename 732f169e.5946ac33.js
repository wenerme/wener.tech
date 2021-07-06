(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},545:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(1114)),s={id:"nextjs-cookbook",title:"NextJS Cookbook"},c={unversionedId:"web/framework/nextjs-cookbook",id:"web/framework/nextjs-cookbook",isDocsHomePage:!1,title:"NextJS Cookbook",description:"* \u5b98\u65b9\u4f8b\u5b50 https://github.com/zeit/next.js/tree/canary/examples",source:"@site/notes/web/framework/nextjs-cookbook.md",slug:"/web/framework/nextjs-cookbook",permalink:"/notes/web/framework/nextjs-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/nextjs-cookbook.md",version:"current",sidebar:"docs",previous:{title:"Ionic",permalink:"/notes/web/framework/ionic"},next:{title:"NextJS FAQ",permalink:"/notes/web/framework/nextjs-faq"}},l=[{value:"\u914d\u7f6e\u95ee\u9898\u6392\u67e5",id:"\u914d\u7f6e\u95ee\u9898\u6392\u67e5",children:[]},{value:"\u9875\u9762\u57fa\u7840\u4ee3\u7801",id:"\u9875\u9762\u57fa\u7840\u4ee3\u7801",children:[]},{value:"API \u57fa\u7840\u4ee3\u7801",id:"api-\u57fa\u7840\u4ee3\u7801",children:[]},{value:"\u9875\u9762\u8df3\u8f6c",id:"\u9875\u9762\u8df3\u8f6c",children:[]},{value:"SSE - Servr-Send Event",id:"sse---servr-send-event",children:[]},{value:"CSS \u5bfc\u5165\u5b57\u4f53",id:"css-\u5bfc\u5165\u5b57\u4f53",children:[]},{value:"\u5bfc\u5165 SVG",id:"\u5bfc\u5165-svg",children:[{value:"\u4f7f\u7528 @svgr/webpack",id:"\u4f7f\u7528-svgrwebpack",children:[]},{value:"\u4f7f\u7528 inline-react-svg",id:"\u4f7f\u7528-inline-react-svg",children:[]}]}],i={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5b98\u65b9\u4f8b\u5b50 ",Object(o.b)("a",{parentName:"p",href:"https://github.com/zeit/next.js/tree/canary/examples"},"https://github.com/zeit/next.js/tree/canary/examples"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"compose ",Object(o.b)("a",{parentName:"p",href:"https://github.com/JerryCauser/next-compose/blob/master/index.js"},"https://github.com/JerryCauser/next-compose/blob/master/index.js"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://dev.to/toomuchdesign/next-js-react-router-2kl8"},"https://dev.to/toomuchdesign/next-js-react-router-2kl8")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// \u5224\u65ad\u670d\u52a1\u7aef\nconst isServer = typeof window === 'undefined'\n")),Object(o.b)("h2",{id:"\u914d\u7f6e\u95ee\u9898\u6392\u67e5"},"\u914d\u7f6e\u95ee\u9898\u6392\u67e5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// \u8f93\u51fa Webpack \u7684\u5339\u914d\u89c4\u5219\nconfig.module.rules.forEach(rule => console.log(`Rule Test ${rule.test} Use`, rule.use))\n")),Object(o.b)("h2",{id:"\u9875\u9762\u57fa\u7840\u4ee3\u7801"},"\u9875\u9762\u57fa\u7840\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport {NextPage} from 'next';\n\nconst Page: NextPage = () => {\n  return <div></div>\n}\n\nexport default Page\n")),Object(o.b)("h2",{id:"api-\u57fa\u7840\u4ee3\u7801"},"API \u57fa\u7840\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import {NextApiRequest, NextApiResponse} from 'next'\n\nconst handler = async (req: NextApiRequest, res: NextApiResponse) => {\n  res.status(200).json({version: process.env.APP_VERSION || '1.0.0'})\n};\n\nexport default handler;\n")),Object(o.b)("h2",{id:"\u9875\u9762\u8df3\u8f6c"},"\u9875\u9762\u8df3\u8f6c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// \u521d\u59cb\u9636\u6bb5\u8df3\u8f6c\nPage.getInitialProps = async ({res}) => {\n  // \u76ee\u6807\u5730\u5740\n  let targetUrl = '...'\n  if (!res) {\n    window.location.href = targetUrl\n  } else {\n    res.writeHead(302, {Location: targetUrl})\n    res.end()\n  }\n  return {}\n}\n\n// \u9875\u9762\u5185\u8df3\u8f6c\nfunction MyPage() {\n  const router = useRouter()\n  useEffect(() => {\n    if (!auth) {\n      router.push('...')\n    }\n  },[])\n}\n\n// API \u8df3\u8f6c\nconst handler = async (req: NextApiRequest, res: NextApiResponse) => {\n  res.clearCookie('authenticated')\n  res.writeHead(302, { Location: '/login' })\n  res.end()\n};\n")),Object(o.b)("h2",{id:"sse---servr-send-event"},"SSE - Servr-Send Event"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import {NextApiRequest, NextApiResponse} from 'next'\n\nexport const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\n// curl -Nv localhost:3000/test/see\n// https://zeit.co/pricing#limits Zeit free only allowed 10s/req\n// NOTE Zeit deploy not works - because the request will be buffered\n// https://github.com/zeit/next.js/issues/9965\nconst handler = async (req: NextApiRequest, res: NextApiResponse) => {\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  res.setHeader('Content-Type', 'text/event-stream;charset=utf-8');\n  res.setHeader('Cache-Control', 'no-cache, no-transform');\n  res.setHeader('X-Accel-Buffering', 'no');\n\n  for (let i = 0; i < 5; i++) {\n    res.write(`data: Hello seq ${i}\\n\\n`);\n    await sleep(1000);\n  }\n  res.end('done\\n');\n};\n\nexport default handler;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<!doctype html>\n<html>\n  <head>\n    <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n    <title>EventSource test</title>\n  </head>\n  <body>\n\n    <h1>EventSource test</h1>\n    <ul></ul>\n\n    <script type=\"text/javascript\">\n      var logger = document.getElementsByTagName('ul')[0],\n          socket = new EventSource('/');\n\n      var log = function(text) {\n        logger.innerHTML += '<li>' + text + '</li>';\n      };\n\n      socket.onopen = function() {\n        log('OPEN');\n      };\n\n      socket.onmessage = function(event) {\n        log('MESSAGE: ' + event.data);\n      };\n\n      socket.addEventListener('update', function(event) {\n        log('UPDATE(' + event.lastEventId + '): ' + event.data);\n      });\n\n      socket.onerror = function(event) {\n        log('ERROR: ' + event.message);\n      };\n    <\/script>\n\n  </body>\n</html>\n")),Object(o.b)("h2",{id:"css-\u5bfc\u5165\u5b57\u4f53"},"CSS \u5bfc\u5165\u5b57\u4f53"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"config.module.rules.push({\n  test: /\\.(eot|woff|woff2|ttf)$/,\n  use: {\n    loader: 'url-loader',\n    options: {\n      limit: 100000,\n      name: '[name].[ext]'\n    }\n  }\n});\n")),Object(o.b)("h2",{id:"\u5bfc\u5165-svg"},"\u5bfc\u5165 SVG"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"url-loader inline \u4f1a\u751f\u6210 dataurl - react \u53ef\u80fd\u5bfc\u81f4\u5f02\u5e38"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/twopluszero/next-images"},"next-images"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// Typescript \u786e\u4fdd\u4e0d\u4f1a\u51fa\u73b0\u7c7b\u578b\u9519\u8bef\ndeclare module '*.svg'\n\ndeclare module '*.png'\ndeclare module '*.jpg'\ndeclare module '*.jpeg'\ndeclare module '*.gif'\n")),Object(o.b)("h3",{id:"\u4f7f\u7528-svgrwebpack"},"\u4f7f\u7528 @svgr/webpack"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 tsconfig \u4e2d\u7684 path"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://react-svgr.com/docs/webpack/"},"https://react-svgr.com/docs/webpack/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/webpack-contrib/url-loader/issues/86"},"https://github.com/webpack-contrib/url-loader/issues/86")),Object(o.b)("li",{parentName:"ul"},"Base64 \u95ee\u9898",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/gregberge/svgr/issues/361"},"https://github.com/gregberge/svgr/issues/361")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/gregberge/svgr/issues/404"},"https://github.com/gregberge/svgr/issues/404"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @svgr/webpack babel-loader\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"config.module.rules.push({\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  use: [\n    {\n      loader: 'babel-loader',\n    },\n    {\n      loader: '@svgr/webpack',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// \u533a\u5206 js \u6216 css \u5bfc\u5165\nconfig.module.rules.push({\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  issuer: {\n    test: /\\.[tj]sx?$/\n  },\n  use: ['babel-loader', '@svgr/webpack', 'file-loader']\n});\n\nconfig.module.rules.push({\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  loader: 'url-loader'\n});\n")),Object(o.b)("h3",{id:"\u4f7f\u7528-inline-react-svg"},"\u4f7f\u7528 inline-react-svg"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u4e0d\u53ef\u4ee5")," \u4f7f\u7528 tsconfig \u4e2d\u7684 path"),Object(o.b)("li",{parentName:"ul"},"\u4f1a\u7528 SVGO \u4f18\u5316")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev babel-plugin-inline-react-svg\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": [ "next/babel" ],\n  "plugins": [ "inline-react-svg" ]\n}\n')))}b.isMDXComponent=!0}}]);