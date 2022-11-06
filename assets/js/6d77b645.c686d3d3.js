"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65311],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(r),k=n,N=s["".concat(o,".").concat(k)]||s[k]||c[k]||l;return r?a.createElement(N,i(i({ref:t},m),{},{components:r})):a.createElement(N,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},42080:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return s},metadata:function(){return N},toc:function(){return h}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&m(e,r,t[r]);return e};const s={title:"React Route"},k="React Route",N={unversionedId:"web/react/react-router",id:"web/react/react-router",title:"React Route",description:"- remix-run/react-router",source:"@site/../notes/web/react/react-router.md",sourceDirName:"web/react",slug:"/web/react/router",permalink:"/notes/web/react/router",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/react-router.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"React Route"},sidebar:"docs",previous:{title:"React Query",permalink:"/notes/web/react/query"},next:{title:"react-table",permalink:"/notes/web/react/table"}},d={},h=[{value:"Notes",id:"notes",level:2},{value:"React Router v6",id:"react-router-v6",level:2},{value:"Switch vs Route",id:"switch-vs-route",level:2}],f={toc:h};function b(e){var t,r=e,{components:n}=r,m=((e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},f),m),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"react-route"}),"React Route"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router"}),"remix-run/react-router"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6838\u5fc3 ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/history"}),"remix-run/history"))))),(0,a.kt)("admonition",c({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5d4c\u5957 Router"),(0,a.kt)("li",{parentName:"ul"},"children \u7edd\u5bf9\u8def\u5f84\u9700\u8981\u5305\u542b parent \u524d\u7f00"),(0,a.kt)("li",{parentName:"ul"},"NavLink \u4f7f\u7528 routerState \u4f1a\u6bcf\u6b21 rerender",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router/blob/f722d7fda7a5aff1d90fdc2d8cf51f14f7870376/packages/react-router-dom/index.tsx#L427-L501"}),"react-router-dom/index.tsx#L427-L501")))),(0,a.kt)("li",{parentName:"ul"},"useNavigate \u4f1a rerender ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router/issues/7634"}),"#7634")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm add react-router-dom\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Path",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*")," - \u5904\u7406 NotFound"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":handle"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"const { handle } = useParams()"))))))),(0,a.kt)("h2",c({},{id:"notes"}),"Notes"),(0,a.kt)("admonition",c({},{title:"v6",type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router/issues/7634"}),"react-router#7634"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"useNavigate \u4f1a\u5bfc\u81f4 rerender"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router/issues/8139"}),"react-router#8139"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"usePrompt & useBlocker"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router/issues/8254"}),"react-router#8254"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"path regex"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router/issues/8381"}),"react-router#8381"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Optional routing parameters in v6"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Router - \u4e0d\u80fd\u5d4c\u5957",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NavigationContext - { basename, navigator, static }",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"useNavigate"))),(0,a.kt)("li",{parentName:"ul"},"LocationContext - { location, navigationType }",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"useLocation"),(0,a.kt)("li",{parentName:"ul"},"useNavigationType"))),(0,a.kt)("li",{parentName:"ul"},"stripBasename - \u5b9e\u73b0 basename \u80fd\u529b"))),(0,a.kt)("li",{parentName:"ul"},"Routes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"createRoutesFromChildren"),(0,a.kt)("li",{parentName:"ul"},"useRoutes - \u652f\u6301\u81ea\u5b9a\u4e49 location - \u9ed8\u8ba4\u4f7f\u7528\u4e0a\u4e0b\u6587 location",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"matchRoutes - \u5339\u914d\u79fb\u9664 parentPathnameBase"),(0,a.kt)("li",{parentName:"ul"},"renderMatches",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RouteContext - { outlet, matches }"))))))),(0,a.kt)("li",{parentName:"ul"},"matchRoutes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"flattenRoutes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"computeScore",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"segments.length +"),(0,a.kt)("li",{parentName:"ul"},"splatPenalty=-1 - ",(0,a.kt)("inlineCode",{parentName:"li"},"*")),(0,a.kt)("li",{parentName:"ul"},"indexRouteValue=2 - ",(0,a.kt)("inlineCode",{parentName:"li"},"index: true"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"index \u8def\u7531\u4e0d\u80fd\u6709 children"))),(0,a.kt)("li",{parentName:"ul"},"dynamicSegmentValue=3 - ",(0,a.kt)("inlineCode",{parentName:"li"},":id")),(0,a.kt)("li",{parentName:"ul"},"emptySegmentValue=1 - ",(0,a.kt)("inlineCode",{parentName:"li"},'""')),(0,a.kt)("li",{parentName:"ul"},"staticSegmentValue=10 - ",(0,a.kt)("inlineCode",{parentName:"li"},"/user")))))),(0,a.kt)("li",{parentName:"ul"},"rankRouteBranches"),(0,a.kt)("li",{parentName:"ul"},"matchRouteBranch")))),(0,a.kt)("h1",c({},{id:"version"}),"Version"),(0,a.kt)("h2",c({},{id:"react-router-v6"}),"React Router v6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 React Router v3,v4,v5, Reach Router"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 \u5d4c\u5957\u8def\u7531",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Outlet/>")," \u6e32\u67d3\u4e0b\u4e00\u4e2a\u5339\u914d"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 \u76f8\u5bf9\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 basename - \u8def\u7531\u66f4\u52a0\u901a\u7528\uff0c\u65b9\u4fbf\u5d4c\u5957"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e RouterObject - \u76f4\u63a5 JS \u914d\u7f6e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"useRoutes"))),(0,a.kt)("li",{parentName:"ul"},"\u7eaf Hook \u91cd\u5199 - \u8981\u6c42 React 16.8+"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u9700\u8981 exact - \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," \u8fdb\u884c\u4efb\u610f\u5339\u914d"),(0,a.kt)("li",{parentName:"ul"},"element \u66ff\u4ee3 component \u548c render"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e rank \u7684\u8def\u7531\u4f18\u5148\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u4f7f\u7528 path-to-regexp - \u56e0\u6b64\u8def\u5f84\u5199\u6cd5\u4f1a\u6709\u533a\u522b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/remix-run/react-router/discussions/8132"}),"https://github.com/remix-run/react-router/discussions/8132")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://reactrouter.com/docs/en/v6/getting-started/faq#what-happened-to-regexp-routes-paths"}),"What Happened to Regexp Routes Paths?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5 Rank \u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"bundle size \u8f83\u5927- 1/3 of react-router",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"path-to-regexp 6kB/2.2kB"),(0,a.kt)("li",{parentName:"ul"},"react-router - 11kB/4kB",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"history - 6kB/2kB"))),(0,a.kt)("li",{parentName:"ul"},"react-router-dom + 7kB/2kB"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://remix.run/blog/react-router-v6"}),"https://remix.run/blog/react-router-v6"))),(0,a.kt)("admonition",c({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 Prompt"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u66b4\u9732 history - \u4f7f\u7528\u4e0a\u6709\u5f88\u591a\u4e0d\u65b9\u4fbf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 unstable_HistoryRouter \u81ea\u5df1\u63d0\u4f9b history"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u5b58\u5728\u5f15\u5165\u4e0d\u540c\u7248\u672c history \u5bfc\u81f4\u51b2\u7a81\u7684\u95ee\u9898"))))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6"}),"https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6")),(0,a.kt)("li",{parentName:"ul"},"Switch -> Routes"),(0,a.kt)("li",{parentName:"ul"},"Redirect -> Navigate"),(0,a.kt)("li",{parentName:"ul"},"Link \u79fb\u9664 component \u719f\u6089",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"<a>")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 useLinkClickHandler \u6784\u5efa\u81ea\u5b9a\u4e49 Link"))),(0,a.kt)("li",{parentName:"ul"},"useHistory -> useNavigate,useSearchParams",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u4e0d\u4e00\u6837"),(0,a.kt)("li",{parentName:"ul"},"useHistory \u8fd4\u56de history \u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"useNavigate \u8fd4\u56de\u5c01\u88c5\u540e\u8f85\u52a9\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u652f\u6301 React suspense - useTransition"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<NavLink exact />")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"<NavLink end />")),(0,a.kt)("li",{parentName:"ul"},"useRouteMatch -> useMatch")),(0,a.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",c({},{id:"switch-vs-route"}),"Switch vs Route"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Switch>")," \u53ea\u6e32\u67d3\u4e00\u4e2a\u8def\u7531. \u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," \u4f1a\u6e32\u67d3\u6240\u6709\u5339\u914d\u7684\u8def\u7531\u3002"))}b.isMDXComponent=!0}}]);