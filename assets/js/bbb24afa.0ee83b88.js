/*! For license information please see bbb24afa.0ee83b88.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97764],{30032:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=r(2488),t=r(62780);const i={title:"App Layout"},l="App Layout",o={id:"web/framework/nextjs/nextjs-app",title:"App Layout",description:"- \u9002\u7528\u573a\u666f",source:"@site/../notes/web/framework/nextjs/nextjs-app.md",sourceDirName:"web/framework/nextjs",slug:"/web/framework/nextjs/app",permalink:"/notes/web/framework/nextjs/app",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/nextjs/nextjs-app.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1696577752,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{title:"App Layout"},sidebar:"docs",previous:{title:"NextAuth",permalink:"/notes/web/framework/nextjs/next-auth"},next:{title:"NextJS Conf",permalink:"/notes/web/framework/nextjs/conf"}},c={},a=[{value:"Only async functions are allowed to be exported in a &quot;use server&quot; file",id:"only-async-functions-are-allowed-to-be-exported-in-a-use-server-file",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"app-layout",children:"App Layout"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9002\u7528\u573a\u666f\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8425\u9500"}),"\n",(0,s.jsx)(n.li,{children:"\u7535\u5546\u4ea7\u54c1\u9875"}),"\n",(0,s.jsx)(n.li,{children:"\u4fe1\u606f\u9875"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u9002\u7528\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5168\u5c40\u72b6\u6001"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0a\u4e0b\u6587"}),"\n",(0,s.jsx)(n.li,{children:"\u5355\u9875\u9762\u5e94\u7528"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8fd8\u6709\u5f88\u591a\u7279\u6027 app \u6a21\u5f0f\u4e0d\u652f\u6301\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://beta.nextjs.org/docs/app-directory-roadmap#planned-features",children:"Planned Features"})}),"\n",(0,s.jsx)(n.li,{children:"API - \u76ee\u524d\u652f\u6301\u4fdd\u7559\u5728 pages \u76ee\u5f55"}),"\n",(0,s.jsx)(n.li,{children:"basePath"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53ea\u80fd\u4f7f\u7528 cjs/require - \u540c\u6b65\u5bfc\u5165\u4f9d\u8d56\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bfc\u81f4\u4f7f\u7528\u73b0\u6709\u7684\u4f9d\u8d56\u975e\u5e38\u5c34\u5c2c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["emotion \u76ee\u524d\u7528\u4e0d\u4e86 - ",(0,s.jsx)(n.a,{href:"https://github.com/vercel/next.js/issues/41994",children:"https://github.com/vercel/next.js/issues/41994"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f46\u662f\u5728 Server \u73af\u5883\u4e0b React.createContext is not a function"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"React.Component is null"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/nextauthjs/next-auth/issues/5647",children:"next-auth#5647"}),"\n\u4e0d\u652f\u6301 Provider"]}),"\n",(0,s.jsxs)(n.li,{children:["server \u4f9d\u8d56\u95ee\u9898\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["serverComponentsExternalPackages does not work with workspace packages ",(0,s.jsx)(n.a,{href:"https://github.com/vercel/next.js/issues/43433",children:"next.js#43433"})]}),"\n",(0,s.jsxs)(n.li,{children:["TranspilePackages tries to resolve optional dependencies ",(0,s.jsx)(n.a,{href:"https://github.com/vercel/next.js/issues/47494",children:"next.js#47494"})]}),"\n",(0,s.jsxs)(n.li,{children:["Module not found: Can't resolve 'crypto' ",(0,s.jsx)(n.a,{href:"https://github.com/vercel/next.js/issues/50444",children:"#50444"})]}),"\n",(0,s.jsxs)(n.li,{children:["pg-cloudflare cloudflare:sockets ",(0,s.jsx)(n.a,{href:"https://github.com/vercel/next.js/discussions/50177",children:"#50177"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u96c6\u6210\u95ee\u9898\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/prosepilot/trpc-openapi/issues/289",children:"https://github.com/prosepilot/trpc-openapi/issues/289"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["middleware \u53ea\u80fd\u8fd0\u884c\u5728 edge runtime\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/vercel/next.js/discussions/34179",children:"https://github.com/vercel/next.js/discussions/34179"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#global-runtime-option",children:"https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes#global-runtime-option"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"src/app"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"\ud83d\udcc2 src/app\n\u251c\u2500 \ud83d\udcc4 page.tsx\n\u251c\u2500 \ud83d\udcc4 layout.tsx\n\u251c\u2500 \ud83d\udcc4 template.tsx\n\u251c\u2500 \ud83d\udcc4 head.tsx\n\u251c\u2500 \ud83d\udcc4 loading.tsx\n\u251c\u2500 \ud83d\udcc4 error.tsx\n\u251c\u2500 \ud83d\udcc4 not-found.tsx\n\u2514\u2500 \ud83d\udcc2 path\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/app/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"page.tsx - \u9875\u9762\u5185\u5bb9"}),"\n",(0,s.jsxs)(n.li,{children:["layout.tsx\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e03\u5c40 - Root \u5e03\u5c40\u5fc5\u987b\u5b58\u5728"}),"\n",(0,s.jsxs)(n.li,{children:["\u66ff\u4ee3 ",(0,s.jsx)(n.code,{children:"_app.js"}),", ",(0,s.jsx)(n.code,{children:"_document.js"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["template.tsx - \u6a21\u677f\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7c7b\u4f3c layout \u4f46\u4e0d\u4f1a\u6301\u7eed\u5b58\u5728"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"head.tsx - head \u6807\u7b7e\u5185\u5bb9 - title,meta,link,script"}),"\n",(0,s.jsx)(n.li,{children:"loading.tsx - Suspense, Loading \u65f6\u663e\u793a\u7684\u5185\u5bb9"}),"\n",(0,s.jsx)(n.li,{children:"error.tsx"}),"\n",(0,s.jsx)(n.li,{children:"not-found.tsx"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 'auto' | 'force-dynamic' | 'error' | 'force-static'\nexport const dynamic = 'auto';\nexport const dynamicParams = true;\n// false | 'force-cache' | 0 | number\nexport const revalidate = false;\n// 'auto' | 'default-cache' | 'only-cache'\n// 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'\nexport const fetchCache = 'auto';\n// 'experimental-edge' | 'nodejs'\nexport const runtime = 'nodejs';\n// 'auto' | 'home' | 'edge' | 'string'\nexport const preferredRegion = 'auto';\nexport function generateStaticParams() {}\n\n// ISR\nexport const revalidate = 3600; // revalidate every hour\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["dynamic\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"auto - \u901a\u8fc7 fetch \u68c0\u6d4b\uff0c\u907f\u514d dynamic"}),"\n",(0,s.jsxs)(n.li,{children:["force-dynamic\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7c7b\u4f3c\u4e8e getServerSideProps"}),"\n",(0,s.jsx)(n.li,{children:"fetchCache=force-no-store"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["error\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7c7b\u4f3c getStaticProps"}),"\n",(0,s.jsx)(n.li,{children:"fetchCache=force-cache"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"force-static - \u8ba9 cookies(), headers(), useSearchParams() \u8fd4\u56de\u7a7a"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["dynamicParams\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"generateStaticParams"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"revalidate"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://beta.nextjs.org/docs/api-reference/segment-config",children:"https://beta.nextjs.org/docs/api-reference/segment-config"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="page.tsx"',children:"import { notFound } from 'next/dist/client/components/not-found';\n\nexport default function Page({ params, searchParams }: { params: { slug: string }; searchParams: { id: string } }) {\n  // \u8fd4\u56de NotFound \u9875\u9762\u5185\u5bb9\n  if (!params.slug) {\n    return notFound();\n  }\n  return (\n    <>\n      <p>{params.slug}</p>\n      <p>{searchParams.id}</p>\n    </>\n  );\n}\n\nexport async function generateStaticParams() {\n  // \u540c getStaticPaths\n  return [{ slug: 'a' }];\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="layout.tsx"',children:'export default function RootLayout({ children, params }: { children: React.ReactNode; params?: any }) {\n  return (\n    <html lang="en">\n      <head>\n        <title>Next.js</title>\n      </head>\n      <body>{children}</body>\n    </html>\n  );\n}\n\n// ISG\n// export const revalidate = 60;\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="template.tsx"',children:"export default function Template({ children }: { children: React.ReactNode }) {\n  return <div>{children}</div>;\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="head.tsx"',children:"async function getPost(slug) {\n  const res = await fetch('...');\n  return res.json();\n}\n\nexport default async function Head({ params }) {\n  const post = await getPost(params.slug);\n\n  return (\n    <>\n      <title>{post.title}</title>\n    </>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="error.tsx"',children:"import { useEffect } from 'react';\n\nexport default function Error({ error, reset }: { error: Error; reset: () => void }) {\n  useEffect(() => {\n    // Log the error to an error reporting service\n    console.error(error);\n  }, [error]);\n\n  return (\n    <div>\n      <p>Something went wrong!</p>\n      <button onClick={() => reset()}>Reset error boundary</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="not-found.tsx"',children:"export default function NotFound() {\n  return '';\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Server Components\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u652f\u6301\u7684\u573a\u666f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u83b7\u53d6\u6570\u636e"}),"\n",(0,s.jsx)(n.li,{children:"\u8bbf\u95ee\u540e\u7aef\u670d\u52a1"}),"\n",(0,s.jsx)(n.li,{children:"\u907f\u514d\u654f\u611f\u4fe1\u606f\u6cc4\u9732\u5230\u524d\u7aef"}),"\n",(0,s.jsx)(n.li,{children:"\u5927\u4f9d\u8d56"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4e0d\u652f\u6301\u573a\u666f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"React.Component = null"}),"\n",(0,s.jsx)(n.li,{children:"React.PureComponent = null"}),"\n",(0,s.jsx)(n.li,{children:"hooks"}),"\n",(0,s.jsx)(n.li,{children:"Context - \u65e0 createContext \u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53ef import server-only \u5305\u786e\u4fdd\u6a21\u5757\u53ea\u5728\u670d\u52a1\u7aef\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7 exports \u53ea\u6709 react-server \u5b9e\u73b0"}),"\n",(0,s.jsx)(n.li,{children:"exports.default \u4f1a\u76f4\u63a5 throw \u5f02\u5e38"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u7c7b\u4f3c\u7684\u6709 client-only \u5305"}),"\n",(0,s.jsxs)(n.li,{children:["fetch\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9ed8\u8ba4 force-cache"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301 react cache - \u76f8\u540c\u8bf7\u6c42\u53ea\u4f1a\u53d1\u51fa\u4e00\u6b21"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Layout \u9ed8\u8ba4\u4e3a Server Component"}),"\n",(0,s.jsxs)(n.li,{children:["\u5728 app \u76ee\u5f55\u4e0b\u7684\u90fd\u662f Server Component\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53ef\u5728 app \u76ee\u5f55\u4e0b\u653e\u4efb\u610f\u7ec4\u4ef6\uff0c\u53ea\u6709\u7279\u6b8a\u6587\u4ef6\u4f1a\u88ab\u5904\u7406"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://beta.nextjs.org/docs/app-directory-roadmap",children:"https://beta.nextjs.org/docs/app-directory-roadmap"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"only-async-functions-are-allowed-to-be-exported-in-a-use-server-file",children:'Only async functions are allowed to be exported in a "use server" file'})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},38088:(e,n,r)=>{var s=r(96651),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,i={},a=null,d=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>l});var s=r(96651);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);