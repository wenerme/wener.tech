"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29978],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(a),k=n,N=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?r.createElement(N,i(i({ref:t},s),{},{components:a})):r.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89924:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return f}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&s(e,a,t[a]);return e};const c={title:"refine"},k="refine",N={unversionedId:"web/react/refine",id:"web/react/refine",title:"refine",description:"- \u63a5\u53e3\u8bbe\u8ba1\uff0c\u62bd\u8c61\u903b\u8f91\u503c\u5f97\u53c2\u8003",source:"@site/../notes/web/react/refine.md",sourceDirName:"web/react",slug:"/web/react/refine",permalink:"/notes/web/react/refine",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/refine.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"refine"},sidebar:"docs",previous:{title:"react-window",permalink:"/notes/web/react/window"},next:{title:"styled-jsx",permalink:"/notes/web/react/styled-jsx"}},d={},f=[{value:"Notes",id:"notes",level:2},{value:"Data Provider",id:"data-provider",level:2}],b={toc:f};function h(e){var t,a=e,{components:n}=a,s=((e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),s),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"refine"}),"refine"),(0,r.kt)("admonition",m({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u8bbe\u8ba1\uff0c\u62bd\u8c61\u903b\u8f91\u503c\u5f97\u53c2\u8003"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/refinedev/refine"}),"refinedev/refine"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, React"),(0,r.kt)("li",{parentName:"ul"},"Headless CRUD \u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 NextJS, Remix"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u63d0\u4f9b antd, mui, mantine, chakra"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u96c6\u6210 ReactTable, KBar, React Hook Form"),(0,r.kt)("li",{parentName:"ul"},"ACL - cerbos, casbin"),(0,r.kt)("li",{parentName:"ul"},"Data Provider - RESTful, GQL, appwrite, nestjs, supabase, medusa"),(0,r.kt)("li",{parentName:"ul"},"Live Providev- appwrite, ably, socket.io, supabase"))),(0,r.kt)("li",{parentName:"ul"},"@refinedev/nextjs-router",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@nestjsx/crud-request",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/nestjsx/crud"}),"nestjsx/crud"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fork ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/gid-oss/dataui-nestjs-crud"}),"gid-oss/dataui-nestjs-crud")))))))),(0,r.kt)("li",{parentName:"ul"},"@aliemir/react-live",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sucrase"),(0,r.kt)("li",{parentName:"ul"},"prism-react-renderer")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm add @refinedev/core\n\n# inferencer\nnpm add @refinedev/inferencer @refinedev/react-hook-form @refinedev/react-table @tanstack/react-table\n\n# antd\nnpm add @refinedev/antd antd dayjs\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"export interface IResourceComponents {\n  list?: ResourceRouteComposition;\n  create?: ResourceRouteComposition;\n  clone?: ResourceRouteComposition;\n  edit?: ResourceRouteComposition;\n  show?: ResourceRouteComposition;\n}\n")),(0,r.kt)("h2",m({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Router -> Resource",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Resource \u5b9a\u4e49\u5305\u542b\u4e86 Path"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Resource \u5b9a\u4e49\u751f\u6210\u8def\u7531",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/NAME/ACTION/:id")),(0,r.kt)("li",{parentName:"ul"},"createResourceRoutes"))),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u4ece\u5f53\u524d Path \u8bc6\u522b Resource",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"matchResourceFromRoute",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5148\u751f\u6210\u6240\u6709 route -> {action,resource}"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Segment \u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u4ece\u7ed3\u679c\u9009\u62e9\u4e00\u4e2a\u6700\u63a5\u8fd1\u7684"))))),(0,r.kt)("li",{parentName:"ul"},"\u8bc6\u522b\u5230\u4e86 Resource \u518d\u63a8\u5bfc\u5177\u4f53\u7684\u9875\u9762",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5217\u8868\u3001\u8be6\u60c5\u3001\u521b\u5efa\u3001\u7f16\u8f91"))))),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587/Context - \u6269\u5c55\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"refine"),(0,r.kt)("li",{parentName:"ul"},"resource"),(0,r.kt)("li",{parentName:"ul"},"router",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5: go, back, parse, Link"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0: react-router, nextjs, remix router"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"router-picker")," - \u7528\u4e8e\u652f\u6301 legacy router"),(0,r.kt)("li",{parentName:"ul"},"translation - i18n",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5: translate, changeLocale, getLocale"),(0,r.kt)("li",{parentName:"ul"},"Hooks: useTranslate, useSetLocale, useGetLocale"))),(0,r.kt)("li",{parentName:"ul"},"undoable queue"),(0,r.kt)("li",{parentName:"ul"},"unsaved warn"),(0,r.kt)("li",{parentName:"ul"},"access control - \u8bbf\u95ee\u63a7\u5236 - ",(0,r.kt)("a",m({parentName:"li"},{href:"/notes/service/auth/authz/casbin"}),"casbin"),"\u3001",(0,r.kt)("a",m({parentName:"li"},{href:"/notes/service/auth/authz/casl"}),"casl"),"\u3001",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/cerbos/cerbos"}),"cerbos"),"\u3001 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/onury/accesscontrol"}),"accesscontrol.js"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useCan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<CanAccess />")),(0,r.kt)("li",{parentName:"ul"},"action",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"list, create, edit, delete, show"))))),(0,r.kt)("li",{parentName:"ul"},"audit log",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"create"),(0,r.kt)("li",{parentName:"ul"},"get - \u8fd4\u56de\u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},"update - \u53ef\u4e3a Log \u52a0\u540d\u5b57\uff0c\u4f5c\u4e3a milestone"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useLog"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"useLogList")))),(0,r.kt)("li",{parentName:"ul"},"auth",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u65b9\u6cd5: login, check, logout, onError"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\u65b9\u6cd5: register, forgotPassword, updatePassword, getPermissions, getIdentity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://refine.dev/docs/api-reference/core/providers/auth-provider/"}),"https://refine.dev/docs/api-reference/core/providers/auth-provider/")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#data-provider"}),"data"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0: simple rest, graphql, nestjs CRUD, airtable, strapi, supabase, hasura, appwrite, medusa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/medusajs/medusa"}),"medusa")))),(0,r.kt)("li",{parentName:"ul"},"live - \u6570\u636e\u5b9e\u65f6\u66f4\u65b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5: subscribe, unsubscribe, publish"),(0,r.kt)("li",{parentName:"ul"},"Hooks: useSubscription, usePublish"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0: ably, supabase, hasura, appwrite, nhost"))),(0,r.kt)("li",{parentName:"ul"},"notification",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5: open, close"))))),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Provider - antd, mui, mantine, chakra"))),(0,r.kt)("li",{parentName:"ul"},"useResource",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"resources \u6240\u6709"),(0,r.kt)("li",{parentName:"ul"},"resource - \u5f53\u524d"),(0,r.kt)("li",{parentName:"ul"},"resourceName"),(0,r.kt)("li",{parentName:"ul"},"id"),(0,r.kt)("li",{parentName:"ul"},"action"),(0,r.kt)("li",{parentName:"ul"},"select"),(0,r.kt)("li",{parentName:"ul"},"identifier - \u76f8\u540c Resource \u8bc6\u522b")))),(0,r.kt)("h2",m({},{id:"data-provider"}),"Data Provider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IDataContextProvider",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"getList -> useList, useInfiniteList"),(0,r.kt)("li",{parentName:"ul"},"create -> useCreate"),(0,r.kt)("li",{parentName:"ul"},"update -> useUpdate"),(0,r.kt)("li",{parentName:"ul"},"deleteOne -> useDeleteOne"),(0,r.kt)("li",{parentName:"ul"},"getOne -> useOne"),(0,r.kt)("li",{parentName:"ul"},"getMany -> useMany"),(0,r.kt)("li",{parentName:"ul"},"createMany -> useCreateMany"),(0,r.kt)("li",{parentName:"ul"},"updateMany -> useUpdateMany"),(0,r.kt)("li",{parentName:"ul"},"deleteMany -> useDeleteMany"),(0,r.kt)("li",{parentName:"ul"},"getApiUrl -> useApiUrl"),(0,r.kt)("li",{parentName:"ul"},"custom -> useCustom"))),(0,r.kt)("li",{parentName:"ul"},"Many \u63a5\u53e3\u53ef\u9009"),(0,r.kt)("li",{parentName:"ul"},"@refinedev/simple-rest",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${apiUrl}/${resource}")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"[{id}]"))))))}h.isMDXComponent=!0}}]);