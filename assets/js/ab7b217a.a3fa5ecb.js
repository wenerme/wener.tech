/*! For license information please see ab7b217a.a3fa5ecb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13872],{78053:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(11527),r=s(47214);const i={tags:["Awesome"]},l="Web Dev Awesome",o={id:"web/dev/web-dev-awesome",title:"Web Dev Awesome",description:"- bundle size",source:"@site/../notes/web/dev/web-dev-awesome.md",sourceDirName:"web/dev",slug:"/web/dev/awesome",permalink:"/notes/web/dev/awesome",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/web-dev-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1699940620,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{tags:["Awesome"]},sidebar:"docs",previous:{title:"Vite",permalink:"/notes/web/dev/vite"},next:{title:"Web Dev FAQ",permalink:"/notes/web/dev/faq"}},c={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"web-dev-awesome",children:"Web Dev Awesome"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["bundle size\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://bundle.js.org/",children:"https://bundle.js.org/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://bundlephobia.com/",children:"https://bundlephobia.com/"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/privatenumber/minification-benchmarks",children:"privatenumber/minification-benchmarks"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/JamieMason/syncpack",children:"JamieMason/syncpack"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Consistent dependency versions in large JavaScript Monorepos."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/vercel/nft",children:"vercel/nft"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Node.js dependency tracing utility"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["bundle\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/unjs/unbuild",children:"unjs/unbuild"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"unified javascript build system"}),"\n",(0,t.jsx)(n.li,{children:"rollup"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"tsup"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/tclindner/npm-package-json-lint",children:"tclindner/npm-package-json-lint"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/webpro/knip",children:"webpro/knip"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Find unused files, dependencies and exports"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/memlab",children:"facebook/memlab"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6cc4\u9732\u68c0\u6d4b"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[".browserslistrc\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/browserslist/browserslist",children:"https://github.com/browserslist/browserslist"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'npx typesync                                      # \u540c\u6b65 @types/ \u4f9d\u8d56\nnpx depcheck                                      # \u68c0\u6d4b\u7f3a\u5c11\u548c\u65e0\u7528\u4f9d\u8d56\nnpx sort-package-json                             # \u5bf9 package.json \u6392\u5e8f - prettier \u4e5f\u53ef\u4ee5\n\n# \u683c\u5f0f\u5316\u6240\u6709 package.json\nnpm exec --workspaces sort-package-json@latest\nnpm exec --workspaces -- prettier -w package.json\n\n# \u67e5\u770b native \u6a21\u5757\n# npx native-modules\nfind node_modules -type f -name "*.node" 2>/dev/null | grep -v "obj\\.target"\nfind node_modules -type f -name "*.node" 2>/dev/null | grep -v "obj\\.target" | xargs ldd\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,n,s)=>{var t=s(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,i={},a=null,d=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:a,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var t=s(50959);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);