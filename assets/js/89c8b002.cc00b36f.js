/*! For license information please see 89c8b002.cc00b36f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59248],{2492:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var l=i(2488),s=i(62780);const t={title:"Jotai"},r="Jotai",o={id:"web/react/jotai",title:"Jotai",description:"- pmndrs/jotai \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/web/react/jotai.md",sourceDirName:"web/react",slug:"/web/react/jotai",permalink:"/notes/web/react/jotai",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/jotai.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Jotai"},sidebar:"docs",previous:{title:"immer",permalink:"/notes/web/react/immer"},next:{title:"million",permalink:"/notes/web/react/million"}},c={},a=[{value:"utils",id:"utils",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"jotai",children:"Jotai"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/pmndrs/jotai",children:"pmndrs/jotai"})," \u662f\u4ec0\u4e48\uff1f\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"7.1kB/2.7kB"}),"\n",(0,l.jsx)(e.li,{children:"\u5927\u72b6\u6001\u62c6\u5206\u5c0f(\u539f\u5b50/atom)\u72b6\u6001 - \u539f\u5b50\u72b6\u6001\u66f4\u5229\u4e8e\u590d\u7528\u548c\u51cf\u5c0f\u53d8\u5316\u5f71\u54cd\u8303\u56f4"}),"\n",(0,l.jsxs)(e.li,{children:["\u6838\u5fc3\u63a5\u53e3 atom, Provider, useAtom, Store\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"jotai/utils \u5305\u542b\u5176\u4ed6\u5de5\u5177 atom"}),"\n",(0,l.jsx)(e.li,{children:"jotai/\u96c6\u6210 \u5305\u542b\u4e0e\u5176\u4ed6\u5e93\u96c6\u6210\u7684\u903b\u8f91 - zustand, xstate, react-query, redux, immer, valtio"}),"\n",(0,l.jsxs)(e.li,{children:["jotai/devtools - Redux devtool \u96c6\u6210 - ",(0,l.jsx)(e.code,{children:"useAtomDevtools(tasksAtom)"})," - \u4f9d\u8d56 debugLabel"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\u7c7b\u4f3c Recoli \u4f46\u4f7f\u7528\u4e0a\u66f4\u7b80\u5355"}),"\n",(0,l.jsxs)(e.li,{children:["\u66ff\u4ee3 ",(0,l.jsx)(e.code,{children:"useState"}),"+",(0,l.jsx)(e.code,{children:"useContext"})]}),"\n",(0,l.jsx)(e.li,{children:"Suspense"}),"\n",(0,l.jsxs)(e.li,{children:["vs Recoil\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["jotai: \u6700\u5c0f\u5316\u63a5\u53e3, \u4e0d\u4f7f\u7528\u5b57\u7b26\u4e32\u6807\u8bc6, TypeScript\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Jotai advantages over Recoil ",(0,l.jsx)(e.a,{href:"https://github.com/pmndrs/jotai/issues/420",children:"#420"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"recoil: string key, \u5e8f\u5217\u5316\u652f\u6301\u66f4\u597d"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/pmndrs/jotai/blob/master/docs/introduction/comparison.md",children:"vs zustand"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u63a8\u8350 focusAtom\nnpm install jotai optics-ts jotai-optics\n"})}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["jotai \u63d0\u4f9b\u539f\u5b50\u80fd\u529b\uff0c\u53ef\u4ee5\u4e0e\u73b0\u6709\u72b6\u6001\u7ba1\u7406\u96c6\u6210\u4f7f\u7528 - ",(0,l.jsx)(e.a,{href:"/notes/web/react/zustand",children:"zustand"}),", ",(0,l.jsx)(e.a,{href:"/notes/web/react/valtio",children:"valtio"}),", xstate, redux, ",(0,l.jsx)(e.a,{href:"../../service/api/urql.md",children:"urql"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u72b6\u6001\u62c6\u5206 splitAtom, selectAtom, focusAtom ",(0,l.jsx)(e.a,{href:"https://github.com/akheron/optics-ts",children:"optics-ts"})," 9kB/3kB"]}),"\n",(0,l.jsxs)(e.li,{children:["atom \u548c async/await \u4e00\u6837\u6709\u4f20\u67d3\u6027\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u56e0\u6b64 jotai \u63d0\u4f9b\u975e\u5e38\u591a\u7684\u96c6\u6210\u548c\u8f85\u52a9"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["atom vs ",(0,l.jsx)(e.a,{href:"/notes/web/react/valtio",children:"valtio"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["valtio\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u57fa\u4e8e\u4ee3\u7406\uff0c\u4e0d\u80fd\u968f\u4fbf\u4f20\u9012 - \u63a5\u6536\u65b9\u660e\u786e\u77e5\u9053\u662f \u4ee3\u7406"}),"\n",(0,l.jsx)(e.li,{children:"\u66f4\u5bb9\u6613 select \u90e8\u5206\u72b6\u6001"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["atom\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6709\u4e13\u95e8\u7684 wrapper \u7c7b\u578b - \u7c7b\u4f3c Promise\uff0c\u63a5\u6536\u65b9\u80af\u5b9a\u77e5\u9053\u662f atom"}),"\n",(0,l.jsx)(e.li,{children:"\u4fb5\u5165\u6027\u66f4\u5927\uff0c\u4f46\u66f4\u4e0d\u5bb9\u6613\u51fa\u9519\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u9012\u4f7f\u7528"}),"\n",(0,l.jsx)(e.li,{children:"\u4f9d\u8d56 focusAtom\u3001splitAtom\u3001selectAtom \u6765\u62c6\u5206\u72b6\u6001"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Store \u4e3a\u4e0a\u4e0b\u6587\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53ef\u4ee5\u5728\u975e react \u73af\u5883\u4f7f\u7528"}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:".get"}),",",(0,l.jsx)(e.code,{children:".set"}),",",(0,l.jsx)(e.code,{children:".sub"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"utils",children:"utils"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["storage - ",(0,l.jsx)(e.code,{children:"import { atomWithStorage, RESET } from 'jotai/utils'"})]}),"\n",(0,l.jsxs)(e.li,{children:["SSR - ",(0,l.jsx)(e.code,{children:"import { useHydrateAtoms } from 'jotai/utils'"})]}),"\n",(0,l.jsxs)(e.li,{children:["Async - ",(0,l.jsx)(e.code,{children:'import { loadable, atomWithObservable, unwrap } from "jotai/utils"'}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"loadable"})," - \u907f\u514d Suspense"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["reset - ",(0,l.jsx)(e.code,{children:"import { atomWithReset, useResetAtom, RESET } from 'jotai/utils'"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u91cd\u7f6e\u4e3a\u4e4b\u524d\u72b6\u6001"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Family - ",(0,l.jsx)(e.code,{children:"import { atomFamily } from 'jotai/utils'"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u521b\u5efa factory"}),"\n",(0,l.jsx)(e.li,{children:"\u652f\u6301\u81ea\u5b9a\u4e49 equal"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["callback - ",(0,l.jsx)(e.code,{children:"import { useAtomCallback } from 'jotai/utils'"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u52a8\u6001\u548c atom \u4ea4\u4e92\uff0c\u800c\u4e0d\u662f\u9884\u5b9a\u4e49\u7684 atom"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["reducer - ",(0,l.jsx)(e.code,{children:"import { atomWithReducer } from 'jotai/utils'"})]}),"\n",(0,l.jsxs)(e.li,{children:["selectAtom\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u83b7\u53d6\u90e8\u5206\u72b6\u6001"}),"\n",(0,l.jsx)(e.li,{children:"\u76d1\u542c\u90e8\u5206\u53d8\u5316"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["splitAtom\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"array -> item"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"function selectAtom<Value, Slice>(\n  anAtom: Atom<Value>,\n  selector: (v: Value, prevSlice?: Slice) => Slice,\n  equalityFn: (a: Slice, b: Slice) => boolean = Object.is\n): Atom<Slice>\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u96c6\u6210",children:"\u96c6\u6210"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["jotai-trpc - \u4f7f\u7528 Vanilla \u5ba2\u6237\u7aef\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"atomWithQuery"}),"\n",(0,l.jsx)(e.li,{children:"atomWithMutation"}),"\n",(0,l.jsx)(e.li,{children:"atomWithSubscription"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["jotai-tanstack-query\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"atomsWithQuery"}),"\n",(0,l.jsx)(e.li,{children:"atomsWithInfiniteQuery"}),"\n",(0,l.jsx)(e.li,{children:"atomsWithMutation"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["jotai-urql\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"atomWithQuery"}),"\n",(0,l.jsx)(e.li,{children:"atomWithMutation"}),"\n",(0,l.jsx)(e.li,{children:"atomWithSubscription"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"jotai-immer"}),"\n",(0,l.jsx)(e.li,{children:"jotai-xstate"}),"\n",(0,l.jsxs)(e.li,{children:["jotai-location\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"window.location"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["jotai-cache\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"read-only atom with cache"}),"\n",(0,l.jsx)(e.li,{children:"\u57fa\u4e8e\u72b6\u6001 memo"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["jotai-molecules\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Molecule pattern"}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://jotai.org/docs/guides/atoms-in-atom",children:"https://jotai.org/docs/guides/atoms-in-atom"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["jotai-optics\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u83b7\u53d6\u90e8\u5206 state"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"jotai-redux"}),"\n",(0,l.jsx)(e.li,{children:"jotai-relay"}),"\n",(0,l.jsxs)(e.li,{children:["jotai-valtio\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["atomWithProxy\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"valtio -> atom"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["jotai-zustand\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"atomWithStore"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"@swc-jotai/react-refresh"}),"\n",(0,l.jsx)(e.li,{children:"@swc-jotai/debug-label"}),"\n",(0,l.jsx)(e.li,{children:"jotai/babel/plugin-react-refresh"}),"\n",(0,l.jsx)(e.li,{children:"jotai/babel/plugin-debug-label"}),"\n",(0,l.jsx)(e.li,{children:"jotai/babel/preset"}),"\n",(0,l.jsxs)(e.li,{children:["jotai-devtools\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"useAtomsDebugValue"}),"\n",(0,l.jsx)(e.li,{children:"useAtomDevtools"}),"\n",(0,l.jsx)(e.li,{children:"useAtomsDevtools"}),"\n",(0,l.jsx)(e.li,{children:"useAtomsSnapshot"}),"\n",(0,l.jsx)(e.li,{children:"useGotoAtomsSnapshot"}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},38088:(n,e,i)=>{var l=i(96651),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,i){var l,t={},a=null,d=null;for(l in void 0!==i&&(a=""+i),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(d=e.ref),e)r.call(e,l)&&!c.hasOwnProperty(l)&&(t[l]=e[l]);if(n&&n.defaultProps)for(l in e=n.defaultProps)void 0===t[l]&&(t[l]=e[l]);return{$$typeof:s,type:n,key:a,ref:d,props:t,_owner:o.current}}e.Fragment=t,e.jsx=a,e.jsxs=a},2488:(n,e,i)=>{n.exports=i(38088)},62780:(n,e,i)=>{i.d(e,{I:()=>o,M:()=>r});var l=i(96651);const s={},t=l.createContext(s);function r(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);