/*! For license information please see 469c03ce.3dea51b9.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50943],{26698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(11527),c=r(47214);const a={title:"react-tracked"},s="react-tracked",i={id:"web/react/react-tracked",title:"react-tracked",description:"- dai-shi/react-tracked",source:"@site/../notes/web/react/react-tracked.md",sourceDirName:"web/react",slug:"/web/react/tracked",permalink:"/notes/web/react/tracked",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/react-tracked.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666880007,formattedLastUpdatedAt:"Oct 27, 2022",frontMatter:{title:"react-tracked"},sidebar:"docs",previous:{title:"react-table",permalink:"/notes/web/react/table"},next:{title:"React Version",permalink:"/notes/web/react/version"}},o={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"react-tracked",children:"react-tracked"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/dai-shi/react-tracked",children:"dai-shi/react-tracked"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u901a\u8fc7 proxy \u8ddf\u8e2a\u53d8\u5316 - \u7c7b\u4f3c ",(0,n.jsx)(t.a,{href:"/notes/web/react/valtio",children:"valtio"})]}),"\n",(0,n.jsxs)(t.li,{children:["\u53ef\u4ee5\u7528\u4e8e useState, zustand ",(0,n.jsx)(t.a,{href:"/notes/web/react/zustand",children:"useStore"}),", redux useSelector, \u4e3b\u8981\u63d0\u4f9b\u4e00\u4e2a\u5339\u914d\u7684\u65b9\u6cd5\u5373\u53ef"]}),"\n",(0,n.jsxs)(t.li,{children:["\u4f7f\u7528 proxy-compare\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"getUntracked, createProxy, isChanged"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["createTrackedSelector - useSelector -> useTrackedSelector\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u8bbf\u95ee\u5c5e\u6027\u4f1a\u88ab watch\u3001select"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["createContainer\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u63d0\u4f9b\u7c7b\u4f3c useReducer \u7684 hook"}),"\n",(0,n.jsx)(t.li,{children:"\u8fd4\u56de Provider, useTracked, useUpdate, useTrackedState, useSelector,"}),"\n",(0,n.jsxs)(t.li,{children:["concurrentMode -> useContextUpdate ",(0,n.jsx)(t.a,{href:"/notes/web/react/use-context-selector",children:"use-context-selector"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/reactjs/rfcs/pull/119",children:"useContextUpdate"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"memo - \u4f1a\u5904\u7406 proxy \u5bf9\u8c61\u503c\u53d8\u5316"}),"\n",(0,n.jsx)(t.li,{children:"getUntrackedObject - \u83b7\u53d6\u539f\u59cb\u503c"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"useTrackedState \u6bcf\u6b21\u8fd4\u56de\u65b0\u7684 proxy \u5bf9\u8c61 - \u4e0d\u7b49"}),"\n",(0,n.jsx)(t.li,{children:"React.memo \u65e0\u6cd5\u5904\u7406\u4f20\u5165 proxy \u5bf9\u8c61\uff0c\u5bfc\u81f4\u503c\u53d8\u5316\u4f46\u4e0d rerender"}),"\n",(0,n.jsx)(t.li,{children:"\u4f20\u503c\u5230 render \u4e4b\u5916\u65f6\u8bb0\u5f97 getUntrackedObject"}),"\n"]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"const reducer = () => {};\nconst { Provider, useTracked } = createContainer(({ reducer, initialState, init }) =>\n  useReducer(reducer, initialState, init),\n);\n\n// \u76f4\u63a5\u4f7f\u7528\u72b6\u6001\u7684\u65b9\u5f0f\nconst {} = createContainer(({ initialState = {} }) => useState(initialState));\n\n// \u4f7f\u7528 immer \u66f4\u65b0\nimport produce from 'immer';\nconst useTrackedWithImmer = () => {\n  const [state, setState] = useTracked();\n  const update = useCallback(\n    (updater) => {\n      setState((oldVal) => produce(oldVal, updater));\n    },\n    [setState],\n  );\n  return [state, update];\n};\n\nconst App = ({ initialState }) => (\n  <Provider reducer={reducer} initialState={initialState}>\n    ...\n  </Provider>\n);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3354:(e,t,r)=>{var n=r(50959),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!o.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:c,type:e,key:d,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},11527:(e,t,r)=>{e.exports=r(3354)},47214:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var n=r(50959);const c={},a=n.createContext(c);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);