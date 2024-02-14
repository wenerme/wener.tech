/*! For license information please see 03d056b0.a6b45042.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75670],{49508:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=s(2488),i=s(62780);const l={title:"CSS in JS"},r="CSS in JS",c={id:"web/style/css-in-js",title:"CSS in JS",description:"CSS in JS \u672c\u8eab\u662f\u975e\u5e38\u9ebb\u70e6\u7684\u4e8b\u60c5\uff0c\u9700\u8981\u8003\u8651\u7684\u95ee\u9898",source:"@site/../notes/web/style/css-in-js.md",sourceDirName:"web/style",slug:"/web/style/css-in-js",permalink:"/notes/web/style/css-in-js",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/style/css-in-js.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678453938,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"CSS in JS"},sidebar:"docs",previous:{title:"CSS Fragmentation",permalink:"/notes/web/style/css-fragmentation"},next:{title:"Layout",permalink:"/notes/web/style/css-layout"}},d={},h=[];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"css-in-js",children:"CSS in JS"}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsx)(e.p,{children:"CSS in JS \u672c\u8eab\u662f\u975e\u5e38\u9ebb\u70e6\u7684\u4e8b\u60c5\uff0c\u9700\u8981\u8003\u8651\u7684\u95ee\u9898"}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u4ec0\u4e48\u73af\u5883\u4f7f\u7528\uff1f\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"React, Vue, Next.js, Babel"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u4ec0\u4e48\u573a\u666f\u4f7f\u7528\uff1f\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4e3b\u9898\u3001\u5e94\u7528\u3001\u7ec4\u4ef6\u5e93"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"\u662f\u5426\u9700\u8981\u652f\u6301\u4e0a\u4e0b\u6587\uff1f"}),"\n",(0,t.jsx)(e.li,{children:"\u600e\u4e48\u57fa\u4e8e\u72b6\u6001\u8fdb\u884c\u6837\u5f0f\u63a7\u5236\uff1f"}),"\n",(0,t.jsxs)(e.li,{children:["\u4f7f\u7528 css in js \u600e\u4e48\u4e0e postcss \u96c6\u6210\uff1f\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u4f8b\u5982: styled-jsx, styled \u600e\u4e48\u4f7f\u7528 tailwindcss\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u901a\u5e38\u4f7f\u7528 babel \u62bd\u53d6\uff0c\u4f46\u76ee\u524d babel \u5df2\u7ecf\u88ab\u9010\u6e10\u66ff\u4ee3"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"\u5927\u591a css in js \u90fd\u4e0d\u6613\u4e0e postcss \u96c6\u6210\uff0c\u5982\u679c\u786e\u5b9a\u9700\u8981\u652f\u6301 postcss\uff0c\u53ef\u4ee5\u7b5b\u9009\u6389\u5927\u534a"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"Build time or Runtime css processing ?"}),"\n",(0,t.jsxs)(e.li,{children:["\u662f\u5426\u9700\u8981 parse css ?\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5bf9\u8c61\u8fd8\u662f\u5b57\u7b26\u4e32\uff1f"}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsx)(e.p,{children:"\u603b\u4e0d\u4f1a\u9519\u7684\u9009\u62e9"}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u662f\u57fa\u4e8e pesudo \u6216 ",(0,t.jsx)(e.code,{children:"data-*"})," \u63a7\u5236\u72b6\u6001\u6837\u5f0f"]}),"\n",(0,t.jsx)(e.li,{children:"\u5c3d\u91cf\u4f7f\u7528 css module"}),"\n",(0,t.jsx)(e.li,{children:"\u907f\u514d\u4f7f\u7528 scss, less \u7b49 flavor"}),"\n",(0,t.jsx)(e.li,{children:"stick to tailwindcss"}),"\n",(0,t.jsx)(e.li,{children:"stick to postcss"}),"\n"]})]}),"\n",(0,t.jsx)(e.admonition,{type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"emotion, styled \u4f9d\u8d56\u73af\u5883\u652f\u6301 - \u6ce8\u5165 Root Registry"}),"\n",(0,t.jsx)(e.li,{children:"css module \u9700\u8981 bundler \u652f\u6301 - \u5e94\u7528\u4e00\u822c\u6ca1\u95ee\u9898\uff0c\u4f5c\u4e3a\u5e93\u4f1a\u6709\u95ee\u9898"}),"\n"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"name"}),(0,t.jsx)(e.th,{children:"size/gzip"}),(0,t.jsx)(e.th,{children:"postcss"}),(0,t.jsx)(e.th,{children:"ZeroRT"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/notes/web/style/emotion",children:"@emotion/styled"})}),(0,t.jsx)(e.td,{children:"11kB,5kB"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/notes/web/style/styled-components",children:"styled-components"})}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/notes/web/react/styled-jsx",children:"styled-jsx"})}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2705(babel)"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/vanilla-extract-css/vanilla-extract",children:"@vanilla-extract/css"})}),(0,t.jsx)(e.td,{children:"72kB,24kB"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2705"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"@linaria/core"}),(0,t.jsx)(e.td,{children:"698B,434B"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"\u2705"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"@linaria/react"}),(0,t.jsx)(e.td,{children:"5.6kB,2.8kB"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/cristianbote/goober",children:"goober"})}),(0,t.jsx)(e.td,{children:"2.5kB,1.3kB"}),(0,t.jsx)(e.td,{children:"\u274c"}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["vanilla-extract\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Zero-runtime Stylesheets-in-TypeScript"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"styled \u73b0\u5728\u662f\u4e3b\u8981\u652f\u6301\u7684\u5f62\u5f0f\uff0c\u65e9\u671f\u7531 styled-components \u5b9e\u73b0\uff0c\u73b0\u5728\u5927\u591a\u90fd\u4ee5 styled \u4e3a\u6807\u51c6\u63a5\u53e3\u3002"}),"\n",(0,t.jsx)(e.li,{children:"styled-components \u73b0\u5728\u4f7f\u7528 emotion"}),"\n",(0,t.jsxs)(e.li,{children:["goober\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u8c03\u7528 setup \u8bbe\u7f6e\u73af\u5883 - ",(0,t.jsx)(e.code,{children:"setup(React.createElement,/*prefixer,theme,forwardProps*/)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/MicheleBertoli/css-in-js",children:"React: CSS in JS techniques comparison"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/callstack/linaria",children:"callstack/linaria"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Zero-runtime CSS in JS library"}),"\n",(0,t.jsx)(e.li,{children:"\u4f9d\u8d56 babel"}),"\n",(0,t.jsx)(e.li,{children:"@emotion/is-prop-valid"}),"\n",(0,t.jsx)(e.li,{children:"@linaria/core"}),"\n",(0,t.jsx)(e.li,{children:"@emotion/memoize"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["polished\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"CSS in JS \u7684\u8f85\u52a9\u5e93"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Compile Time CSS in JS\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://compiledcssinjs.com/",children:"https://compiledcssinjs.com/"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://vanilla-extract.style/",children:"https://vanilla-extract.style/"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://linaria.dev/",children:"https://linaria.dev/"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/wix/stylable",children:"wix/stylable"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b",children:"Why We're Breaking Up with CSS-in-JS"})}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},38088:(n,e,s)=>{var t=s(96651),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var t,l={},h=null,o=null;for(t in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(o=e.ref),e)r.call(e,t)&&!d.hasOwnProperty(t)&&(l[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===l[t]&&(l[t]=e[t]);return{$$typeof:i,type:n,key:h,ref:o,props:l,_owner:c.current}}e.Fragment=l,e.jsx=h,e.jsxs=h},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>c,M:()=>r});var t=s(96651);const i={},l=t.createContext(i);function r(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);