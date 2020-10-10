(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(9),l=(n(0),n(618)),b={id:"nextjs-version",title:"NextJS \u7248\u672c\u5386\u53f2"},i={id:"web/framework/nextjs-version",title:"NextJS \u7248\u672c\u5386\u53f2",description:"# NextJS \u7248\u672c\u5386\u53f2",source:"@site/../tricks/web/framework/nextjs-version.md",permalink:"/notes/web/framework/nextjs-version",sidebar:"docs",previous:{title:"NextJS",permalink:"/notes/web/framework/nextjs"},next:{title:"NextJS Cookbook",permalink:"/notes/web/framework/nextjs-cookbook"}},c=[{value:"9.5",id:"95",children:[]},{value:"9.4",id:"94",children:[]},{value:"9.3",id:"93",children:[]},{value:"9.2",id:"92",children:[]},{value:"9.1",id:"91",children:[]}],p={rightToc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"nextjs-\u7248\u672c\u5386\u53f2"},"NextJS \u7248\u672c\u5386\u53f2"),Object(l.b)("h2",{id:"95"},"9.5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/blog/next-9-5"}),"9.5")," - 2020-7-28"),Object(l.b)("li",{parentName:"ul"},"\u589e\u91cf\u9759\u6001\u751f\u6210 - \u7a33\u5b9a\u9636\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 base path",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b9\u4fbf\u4e0e\u73b0\u6709\u7ad9\u70b9\u5171\u5b58"),Object(l.b)("li",{parentName:"ul"},"baseUrl"),Object(l.b)("li",{parentName:"ul"},"contextPath"))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u91cd\u5199\u3001\u91cd\u5b9a\u5411\u3001Header \u81ea\u5b9a\u4e49",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u9759\u6001\u9875\u9762\u6dfb\u52a0 header\uff0c\u91cd\u5b9a\u5411\u5230\u65e7\u7ad9\u70b9"))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 url \u5c3e\u90e8 ",Object(l.b)("inlineCode",{parentName:"li"},"/")),Object(l.b)("li",{parentName:"ul"},"\u9875\u9762\u7ea7\u6301\u4e45\u7f13\u5b58",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u672a\u53d8\u5316\u7684\u9875\u9762\u4e0d\u4f1a\u91cd\u65b0\u6784\u5efa"),Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa\u8def\u5f84\u5305\u542b hash"),Object(l.b)("li",{parentName:"ul"},"\u4ee5\u524d hash \u662f build \u7ea7\u522b"),Object(l.b)("li",{parentName:"ul"},"\b\b\u4e4b\u524d ",Object(l.b)("inlineCode",{parentName:"li"},"/_next/static/ovgxWYrvKyjnlM15qtz7h/pages/about.js")),Object(l.b)("li",{parentName:"ul"},"\u73b0\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"/_next/static/chunks/pages/about.qzfS4o5gIEXRME6sTEahL.js")))),Object(l.b)("li",{parentName:"ul"},"\u589e\u5f3a\u5feb\u901f\u5237\u65b0"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 React Profiling - ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/docs/basic-features/fast-refresh"}),"How it works"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"next build --profile")))),Object(l.b)("li",{parentName:"ul"},"\u9875\u9762\u652f\u6301\u6355\u83b7\u6240\u6709\u7684\u8def\u7531",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SEO-driven use-cases"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pages/blog/[[...slug]].js")),Object(l.b)("li",{parentName:"ul"},"\u4e4b\u524d\u662f api \u652f\u6301"))),Object(l.b)("li",{parentName:"ul"},"Webpack 5 - beta",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PnP"),Object(l.b)("li",{parentName:"ul"},"yarn ",Object(l.b)("inlineCode",{parentName:"li"},"resolutions")," \u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"^5.0.0-beta.22")))),Object(l.b)("li",{parentName:"ul"},"\u589e\u5f3a macOS \u7684\u6587\u4ef6\u76d1\u542c")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export async function getStaticProps() {\n  return {\n    props: await getDataFromCMS(),\n    // \u589e\u91cf\u9759\u6001\u751f\u6210 - \u6700\u591a 1 \u79d2 1 \u6b21\n    // stale-while-revalidate https://tools.ietf.org/html/rfc5861\n    revalidate: 1\n  }\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// next.config.js\nmodule.exports = {\n  // \u6240\u6709\u8d44\u6e90\u4e5f\u90fd\u4f1a\u4f7f\u7528\u8be5\u8def\u5f84\n  // <Link> \u4e5f\u4f1a\u81ea\u52a8\u6dfb\u52a0\u524d\u7f00\n  basePath: '/docs',\n\n  // url \u662f\u5426\u6dfb\u52a0\u6700\u540e\u7684 /\n  trailingSlash: true,\n\n  // \u91cd\u5199 - \u7c7b\u4f3c\u4e8e nginx \u7684 proxy_pass\n  async rewrites() {\n    return [\n      { source: '/backend/:path*', destination: 'https://example.com/:path*' },\n      // \u5982\u679c\u8def\u5f84\u4e0d\u5b58\u5728\u5219\u5c1d\u8bd5\u4f7f\u7528\u540e\u7aef - \u53ef\u4ee5\u5b9e\u73b0\u9010\u6b65\u66ff\u6362\u4e3a NextJS\n      {\n        source: '/:path*',\n        destination: '/:path*'\n      },\n      {\n        source: '/:path*',\n        destination: `https://example.com/:path*`\n      }\n    ]\n  },\n\n  // \u91cd\u5b9a\u5411\n  async redirects() {\n    return [\n      {\n        source: '/about',\n        destination: '/',\n        permanent: true\n      }\n    ]\n  },\n\n  // \u81ea\u5b9a\u4e49 header\n  async headers() {\n    return [\n      {\n        source: '/:path*',\n        headers: [\n          {\n            key: 'Feature-Policy',\n            // Disable microphone and geolocation\n            value: \"microphone 'none'; geolocation 'none'\"\n          }\n        ]\n      }\n    ]\n  },\n}\n")),Object(l.b)("h2",{id:"94"},"9.4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/blog/next-9-4"}),"9.4")," - 2020-5-11"),Object(l.b)("li",{parentName:"ul"},"\u5feb\u901f\u5237\u65b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react/tree/master/packages/react-refresh"}),"React Refresh")),Object(l.b)("li",{parentName:"ul"},"\u5c3d\u91cf\u53ea\u5237\u65b0\u7ec4\u4ef6\u4e0d\u4e22\u5931\u72b6\u6001\uff0c\u5f02\u5e38\u53cb\u597d\u663e\u793a"),Object(l.b)("li",{parentName:"ul"},"\u4e4b\u524d\u662f\u53ef\u80fd\u6574\u4e2a\u9875\u9762\u5237\u65b0\uff0c\u5f02\u5e38\u4e0d\u592a\u53cb\u597d"))),Object(l.b)("li",{parentName:"ul"},"\u589e\u91cf\u9759\u6001\u4ece\u65b0\u751f\u6210 SSG - Beta"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},".env")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_")," \u524d\u7f00\u73af\u5883\u53d8\u91cf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud83d\udc9a \u4e4b\u524d\u90fd\u662f\u9700\u8981\u5728\u914d\u7f6e\u4e2d\u6dfb\u52a0 dotenv"))),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa fetch \u7684 polyfill"),Object(l.b)("li",{parentName:"ul"},"\u96c6\u6210 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://web.dev/vitals/"}),"Vitals")," \u62a5\u544a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539 ",Object(l.b)("inlineCode",{parentName:"li"},"_app.js")," \u8fdb\u884c\u8bb0\u5f55")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Will be called once for every metric that has to be reported.\nexport function reportWebVitals(metric) {\n  // These metrics can be sent to any analytics service\n  console.log(metric)\n}\n\nfunction MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}\n\nexport default MyApp\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7edd\u5bf9\u8def\u5f84\u5bfc\u5165\u548c\u522b\u540d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud83d\udc9a \u4e4b\u524d\u9700\u8981\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"tsconfig-paths-webpack-plugin")),Object(l.b)("li",{parentName:"ul"},"\u8bc6\u522b jsconfig.json \u548c tsconfig.json \u4e2d\u7684\u914d\u7f6e"))),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa Sass \u652f\u6301\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u4f18\u5316\u65e5\u5fd7\u8f93\u51fa"),Object(l.b)("li",{parentName:"ul"},"\u7eaf\u9759\u6001\u5b9e\u9a8c\u652f\u6301 - ",Object(l.b)("inlineCode",{parentName:"li"},"unstable_runtimeJS"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5305\u542b React \u548c NextJS \u7684\u811a\u672c")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export const config = {\n  unstable_runtimeJS: false\n}\nexport default () => <h1>My page</h1>\n")),Object(l.b)("h2",{id:"93"},"9.3"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/blog/next-9-3"}),"9.3")," - 2020-3-10"),Object(l.b)("li",{parentName:"ul"},"SSG \u670d\u52a1\u7aef\u9759\u6001\u751f\u6210 HTML",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getStaticProps")," -  \u6784\u5efa\u65f6\u83b7\u53d6\u6570\u636e - \u9759\u6001\u751f\u6210",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u9884\u89c8\u6a21\u5f0f - cookie"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getStaticPaths")," - \u83b7\u53d6\u52a8\u6001\u8def\u7531",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 fallback - \u6784\u5efa\u65f6\u4e0d\u5b58\u5728\u662f\u5426\u8fd0\u884c\u65f6\u8bf7\u6c42"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getServerSideProps")," - ",Object(l.b)("strong",{parentName:"li"},"\u6bcf\u6b21")," \u8bf7\u6c42\u65f6\u83b7\u53d6\u6570\u636e - \u670d\u52a1\u7aef\u6e32\u67d3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getInitialProps")," \u53ea\u4f1a\u5728\u670d\u52a1\u7aef\u8bf7\u6c42\u4e00\u6b21"))))),Object(l.b)("li",{parentName:"ul"},"\u9884\u89c8\u6a21\u5f0f - \u6761\u4ef6\u6027\u8df3\u8fc7 SSG"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa Sass \u5168\u5c40\u6837\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa Sass CSS \u6a21\u5757\u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"404 \u9759\u6001\u4f18\u5316"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u51cf\u5c11 32 kB")),Object(l.b)("h2",{id:"92"},"9.2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/blog/next-9-2"}),"9.2")),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa CSS \u5168\u5c40\u6837\u5f0f\u652f\u6301 - \u4e0d\u518d\u9700\u8981 ",Object(l.b)("inlineCode",{parentName:"li"},"next-css")," \u4f9d\u8d56"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa CSS \u6a21\u5757\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},".module.css")),Object(l.b)("li",{parentName:"ul"},"\u589e\u5f3a\u4ee3\u7801\u5207\u5206\u7b56\u7565"),Object(l.b)("li",{parentName:"ul"},"\u65b0\u589e ",Object(l.b)("inlineCode",{parentName:"li"},"[...slug].js")," \u5168\u90e8\u6355\u83b7\u7684\u52a8\u6001\u8def\u7531")),Object(l.b)("h2",{id:"91"},"9.1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/blog/next-9-1"}),"9.1")),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},"src/pages")," \u4f5c\u4e3a\u9875\u9762\u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},"public")," \u4f5c\u4e3a\u9759\u6001\u76ee\u5f55\u800c\u4e0d\u662f ",Object(l.b)("inlineCode",{parentName:"li"},"static"))))}o.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),s=a,m=u["".concat(b,".").concat(s)]||u[s]||j[s]||l;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);