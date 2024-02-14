/*! For license information please see c10a0eef.f4d1f1e3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97762],{64552:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(2488),i=t(62780);const s={title:"React Location"},a="React Location",c={id:"web/react/react-location",title:"React Location",description:"- tannerlinsley/react-location",source:"@site/../notes/web/react/react-location.md",sourceDirName:"web/react",slug:"/web/react/location",permalink:"/notes/web/react/location",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/react-location.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639938220,formattedLastUpdatedAt:"Dec 19, 2021",frontMatter:{title:"React Location"},sidebar:"docs",previous:{title:"React Live",permalink:"/notes/web/react/live"},next:{title:"React Native Awesome",permalink:"/notes/web/react/native-awesome"}},o={},l=[{value:"jsurl",id:"jsurl",level:2},{value:"Notes",id:"notes",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"react-location",children:"React Location"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/tannerlinsley/react-location",children:"tannerlinsley/react-location"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u57fa\u4e8e/\u7c7b\u4f3c react-router v6 \u8fdb\u884c\u8c03\u6574 - \u66f4\u9762\u5411 CSR"}),"\n",(0,r.jsxs)(e.li,{children:["\u652f\u6301\u63d2\u4ef6\u80fd\u529b - \u90e8\u5206 react-router \u6709\u7684\u80fd\u529b\u5728 react-location \u4e2d\u9700\u8981\u63d2\u4ef6\u652f\u6301\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"react-location-ranked-routes - \u5efa\u8bae\u5f00\u542f"}),"\n",(0,r.jsx)(e.li,{children:"react-location-simple-cache"}),"\n",(0,r.jsx)(e.li,{children:"react-location-elements-to-routes"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 devtool - react-location-devtools"}),"\n",(0,r.jsxs)(e.li,{children:["\u4e0d\u652f\u6301 SSR - \u4e3b\u8981\u9762\u5411 CSR \u573a\u666f\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"WIP"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"element \u652f\u6301\u5f02\u6b65"}),"\n",(0,r.jsxs)(e.li,{children:["\u6dfb\u52a0 CSR \u8f85\u52a9\u529f\u80fd\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"search \u5904\u7406"}),"\n",(0,r.jsx)(e.li,{children:"loader - \u63d0\u524d\u5f02\u6b65\u52a0\u8f7d\u6570\u636e\uff0c\u652f\u6301\u7f13\u5b58"}),"\n",(0,r.jsx)(e.li,{children:"Error Element, Pending Element, Pending Timing - \u914d\u5408 loader \u884c\u4e3a"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 promot - react-router v6 \u6682\u4e0d\u652f\u6301"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://react-location.tanstack.com/comparison",children:"vs. React Router"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"import {\n  createHashHistory,\n  createMemoryHistory,\n  DefaultGenerics,\n  MakeGenerics,\n  Outlet,\n  ReactLocation,\n  Route,\n  Router,\n  useMatch,\n  useMatchRoute,\n  useRouter,\n} from 'react-location';\nimport { ReactLocationDevtools } from 'react-location-devtools';\n\nconst ErrorPanel = () => {\n  // \u5f53\u524d\u9519\u8bef\u4fe1\u606f\n  const { error } = useMatch();\n  return <></>;\n};\n\ntype LocationGenerics = MakeGenerics<{\n  LoaderData: {\n    items?: Array<{ id }>;\n    data?: any;\n    item?: { id };\n  };\n  Search: {\n    itemId?: string;\n    pagination?: {\n      index?: number;\n      size?: number;\n    };\n    filters?: {\n      name?: string;\n    };\n    desc?: boolean;\n  };\n}>;\n\nconst routes: Route<LocationGenerics>[] = [\n  {\n    path: 'about',\n    element: <h1>About</h1>,\n    children: [{ path: 'me' }],\n  },\n  {\n    path: 'items',\n    loader: async () => ({\n      // load list data\n      items: await fetch('/api/items').then((r) => r.json()),\n    }),\n    errorElement: <ErrorPanel />,\n    pendingElement: <div>Loading</div>,\n    pendingMs: 1000 * 2, //2s \u540e\u624d\u663e\u793a\n    pendingMinMs: 500, // \u81f3\u5c11\u663e\u793a 500ms\n    children: [\n      { path: '/' }, // list\n      {\n        path: ':itemId',\n        loader: async ({ params: { teamId } }, { parentMatch, dispatch }) => {\n          // customize cache time\n          dispatch({\n            type: 'maxAge',\n            maxAge: 1,\n          });\n          return {\n            // reuse parent list data\n            data: await parentMatch?.loaderPromise?.then(({ items }) => items?.find((team) => team.id === teamId)),\n            // load item data\n            team: await fetch(`/api/teams/${teamId}`).then((r) => r.json()),\n          };\n        },\n      },\n      {\n        path: ':itemId',\n        search: (search) => {\n          // match search params\n          return search.itemId === '0';\n        },\n      },\n      {\n        path: '*', // default path - any\n        element: <Outlet />, // default element\n      },\n    ],\n  },\n];\n\nconst PendingIndicator = () => {\n  // \u52a0\u8f7d\u7684\u6570\u636e\n  const { data } = useMatch();\n  const router = useRouter<DefaultGenerics>();\n  // \u5168\u5c40 pending \u68c0\u6d4b\n  const { pending } = router;\n\n  // \u6d4b\u8bd5\u8def\u7531\u5339\u914d\n  const matchRoute = useMatchRoute();\n  matchRoute({ to: '/about' });\n  return <></>;\n};\n\nconst App = () => {\n  // history\n  const hashHistory = createHashHistory();\n  // in-memory\n  const memoryHistory = createMemoryHistory({\n    initialEntries: [{ pathname: '/', search: 'key=123' }, '/items/123'],\n    initialIndex: 0,\n  });\n  // location\n  const location = new ReactLocation({\n    history: hashHistory,\n  });\n\n  return (\n    <Router<LocationGenerics> location={location} routes={routes}>\n      <Outlet />\n      <ReactLocationDevtools initialIsOpen={false} />\n    </Router>\n  );\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"jsurl",children:"jsurl"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/Sage/jsurl",children:"https://github.com/Sage/jsurl"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"import { ReactLocation } from 'react-location';\nimport { parseSearch, stringifySearch } from 'react-location-jsurl';\n\nconst reactLocation = new ReactLocation({\n  parseSearch,\n  stringifySearch,\n});\n"})}),"\n",(0,r.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Router\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"LocationContext"}),"\n",(0,r.jsx)(e.li,{children:"routerContext"}),"\n",(0,r.jsx)(e.li,{children:"MatchesProvider"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Outlet\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["MatchesProvider\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u79fb\u9664\u5f53\u524d\u9876\u5c42 match"}),"\n",(0,r.jsx)(e.li,{children:"\u6e32\u67d3\u7b2c\u4e00\u4e2a match"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Route\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["path \u9ed8\u8ba4 ",(0,r.jsx)(e.code,{children:"*"})]}),"\n",(0,r.jsxs)(e.li,{children:["element \u9ed8\u8ba4 ",(0,r.jsx)(e.code,{children:"<Outlet />"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["matchRoute\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["matchByPath\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"parsePathname(pathname?: string): Segment[]"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"pathname"}),"\n",(0,r.jsxs)(e.li,{children:["wildcard - ",(0,r.jsx)(e.code,{children:"*"})]}),"\n",(0,r.jsxs)(e.li,{children:["param - ",(0,r.jsx)(e.code,{children:":"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u5bf9\u6bd4 segment \u662f\u5426\u5339\u914d"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"matchBySearch"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Link\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Ctrl+Click \u6216 target!=",(0,r.jsx)(e.code,{children:"_self"})," \u5219\u4e0d\u4f1a preventDefault \u7531\u6d4f\u89c8\u5668\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{type:"caution",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["useMatch \u57fa\u4e8e useContext \u89e6\u53d1 memo \u7ec4\u4ef6\u4e0d\u4f1a\u88ab render\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693",children:"react#15156"})}),"\n"]}),"\n"]}),"\n"]})})]})}function h(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},38088:(n,e,t)=>{var r=t(96651),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(d=e.ref),e)a.call(e,r)&&!o.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===s[r]&&(s[r]=e[r]);return{$$typeof:i,type:n,key:l,ref:d,props:s,_owner:c.current}}e.Fragment=s,e.jsx=l,e.jsxs=l},2488:(n,e,t)=>{n.exports=t(38088)},62780:(n,e,t)=>{t.d(e,{I:()=>c,M:()=>a});var r=t(96651);const i={},s=r.createContext(i);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);