"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54036],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={title:"React Query"},o=void 0,s={unversionedId:"web/react/react-query",id:"web/react/react-query",title:"React Query",description:"- tannerlinsley/react-query",source:"@site/notes/web/react/react-query.md",sourceDirName:"web/react",slug:"/web/react/react-query",permalink:"/notes/web/react/react-query",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-query.md",tags:[],version:"current",frontMatter:{title:"React Query"},sidebar:"docs",previous:{title:"React Native FAQ",permalink:"/notes/web/react/react-native-faq"},next:{title:"React Route",permalink:"/notes/web/react/react-router"}},c={},p=[{value:"React Query v4",id:"react-query-v4",level:2},{value:"React Query v3",id:"react-query-v3",level:2},{value:"React Query v2.x",id:"react-query-v2x",level:2},{value:"useMutation",id:"usemutation",level:3},{value:"isLoading vs isFetching",id:"isloading-vs-isfetching",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"tannerlinsley/react-query")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u542f refetchOnMount, refetchOnWindowFocus, refetchOnReconnect"),(0,l.kt)("li",{parentName:"ul"},"cacheTime 5 \u5206\u949f - \u4e0d\u518d\u4f7f\u7528\u7684\u7684\u6570\u636e\u4fdd\u7559 5 \u5206\u949f"),(0,l.kt)("li",{parentName:"ul"},"retry=3, retryDelay exponential"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/docs/comparison"},"vs SWR vs Apollo Client"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"vs SWR - \u652f\u6301\u4fee\u6539\uff0c\u66f4\u597d\u7684\u7f13\u5b58\u72b6\u6001\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"vs Apollo - \u652f\u6301 GraphQL \u548c \u4e00\u822c\u8bf7\u6c42\uff0c\u9488\u5bf9 GraphQL \u7684 entity \u7f13\u5b58\u6ca1\u6709 apollo \u5f3a"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dano-inc/react-query-helper"},"dano-inc/react-query-helper")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tkdodo.eu/blog/practical-react-query"},"Practical React Query")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/guides/important-defaults"},"Important Defaults"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idle"),(0,l.kt)("td",{parentName:"tr",align:null},"isIdle"),(0,l.kt)("td",{parentName:"tr",align:null},"enabled:false \u6216 mutation \u672a\u6267\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"isError,isLoadingError,isRefetchError"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"isSuccess"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialData"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"isFetching"),(0,l.kt)("td",{parentName:"tr",align:null},"loading \u6216 \u540e\u53f0\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"isFetched"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"isFetchedAfterMount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u907f\u514d\u663e\u793a\u7f13\u5b58\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"isRefetching"),(0,l.kt)("td",{parentName:"tr",align:null},"isFetching && !isLoading")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"staleTime"),(0,l.kt)("td",{parentName:"tr",align:null},"isStale"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"isPlaceholderData"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepPreviousData"),(0,l.kt)("td",{parentName:"tr",align:null},"isPreviousData"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"mutation \u72b6\u6001\u4e0d\u5171\u4eab ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query/issues/2304"},"#2304")),(0,l.kt)("li",{parentName:"ul"},"useQueries suspense \u4e0d\u662f\u4e00\u6b21\u6027\u7b49\u5f85\u5b8c\u6210 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query/issues/1523"},"#1523"))))),(0,l.kt)("h1",{id:"version"},"Version"),(0,l.kt)("h2",{id:"react-query-v4"},"React Query v4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Keys \u5fc5\u987b\u4e3a\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://react-query-alpha.tanstack.com/guides/migrating-to-react-query-4"},"Migrating to React Query 4"))),(0,l.kt)("h2",{id:"react-query-v3"},"React Query v3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62c6\u5206 QueryCache \u4e3a QueryClient \u548c\u66f4\u5e95\u5c42\u7684 MutationCache, QueryCache"),(0,l.kt)("li",{parentName:"ul"},"useQueryCache -> useQueryClient"),(0,l.kt)("li",{parentName:"ul"},"QueryClientProvider \u53d6\u4ee3 ReactQueryConfigProvider \u548c ReactQueryCacheProvider"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e useQueries"),(0,l.kt)("li",{parentName:"ul"},"\u5305\u542b devtools - ",(0,l.kt)("inlineCode",{parentName:"li"},"react-query/devtools")),(0,l.kt)("li",{parentName:"ul"},"useQuery \u53c2\u6570\u4e0d\u518d\u662f key",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u901a\u8fc7 lambada \u4f20\u9012\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd8\u662f\u8981 key ",(0,l.kt)("inlineCode",{parentName:"li"},"useQuery(['post', id], context => fetchPost(context.queryKey[1]))")),(0,l.kt)("li",{parentName:"ul"},"enabled \u9009\u9879\u5fc5\u987b\u4e3a boolean - \u5426\u5219\u4f1a\u8b66\u544a"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 select \u90e8\u5206\u6570\u636e - \u51cf\u5c11\u91cd\u65b0\u6e32\u67d3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useQuery('user',fetchUser,{select:user=>user.username})")))))),(0,l.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 usePaginatedQuery, \u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"keepPreviousData: true")," \u5b9e\u73b0\u7c7b\u4f3c\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"useInfiniteQuery \u652f\u6301\u524d\u540e\u53cc\u5411\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"useMutation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u5bf9\u8c61",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"const [mutate, { status, reset }] = useMutation()")),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"const { mutate, mutateAsync, status, reset } = useMutation()"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"mutate \u4e0d\u8fd4\u56de promise, mutateAsync \u8fd4\u56de promise"),(0,l.kt)("li",{parentName:"ul"},"mutate \u652f\u6301\u56de\u8c03 ",(0,l.kt)("inlineCode",{parentName:"li"},"mutate('todo',{onSuccess(){},onError(){},onSettled(){}})")))))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 retry - \u65ad\u7ebf\u91cd\u8054\u4f1a\u91cd\u8bd5\uff0c\u9ed8\u8ba4\u5931\u8d25\u4e0d\u4f1a\u91cd\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6301\u4e45\u5316\u7136\u540e\u6062\u590d"))),(0,l.kt)("li",{parentName:"ul"},"QueryObserver, InfiniteQueryObserver, QueriesObserver - \u53ef\u7528\u4e8e\u76d1\u542c\u6570\u636e\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"useIsFetching - \u652f\u6301 key \u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/guides/migrating-to-react-query-3"},"v3")," - 2020-12-15")),(0,l.kt)("h2",{id:"react-query-v2x"},"React Query v2.x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';\nimport { ReactQueryDevtools } from 'react-query-devtools';\n\nconst queryCache = new QueryCache();\n\nexport default function App() {\n  return (\n    <>\n      {/* \u7f13\u5b58 */}\n      <ReactQueryCacheProvider queryCache={queryCache}>\n        <Example />\n      </ReactQueryCacheProvider>\n      {/* \u5f00\u53d1\u5de5\u5177 */}\n      <ReactQueryDevtools initialIsOpen />\n    </>\n  );\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const key = '';\nconst {\n  data, // \u83b7\u53d6\u5230\u7684\u6570\u636e\u6216\u8005\u662f\u4e0a\u6b21\u7f13\u5b58\u7684\u6570\u636e\n  error, // \u9519\u8bef\n  failureCount,\n  status, // \u72b6\u6001 - idle, loading, error, success\n  isError = status == 'error',\n  isIdle = status == 'idle',\n  isLoading = status == 'loading',\n  isSuccess = status == 'success',\n  isFetched, // \u5df2\u7ecf\u83b7\u53d6\n  isFetchedAfterMount, // \u662f\u5426\u5728 mount \u540e\u83b7\u53d6\u8fc7\n  isFetching, // \u662f\u5426\u6b63\u5728\u83b7\u53d6\n  isStale, // \u6570\u636e\u5df2\u5931\u6548\n  isPreviousData, // \u4f7f\u7528\u7684\u4e0a\u6b21\u6570\u636e\n  isPlaceholderData, // \u4f7f\u7528\u7684\u5360\u4f4d\u6570\u636e\n  refetch, // \u4ece\u65b0\u83b7\u53d6 - \u9664\u975e throwOnError \u5426\u5219\u5f02\u5e38\u53ea\u4f1a log\n  remove, // \u4ece\u7f13\u5b58\u79fb\u9664\u67e5\u8be2\n} = useQuery(\n  key,\n  /* fetcher */ (...key) => fetch(key.join()).then((v) => v.json()),\n  /* config */ {\n    enabled: true, // \u662f\u5426\u67e5\u8be2\n\n    // \u5931\u6548\u63a7\u5236\n    cacheTime: 1000 * 6 * 5, // 5m\n    staleTime: 0, // \u5931\u6548\u65f6\u95f4 - \u9ed8\u8ba4\u8fd4\u56de\u5373\u5931\u6548 - \u8bbe\u7f6e\u5931\u6548\u65f6\u95f4\u53ef\u51cf\u5c11\u8bf7\u6c42 - \u8bbe\u7f6e\u4e3a Infinity \u4e0d\u5931\u6548\n    // \u91cd\u8bd5\u63a7\u5236\n    retry: 3, // \u91cd\u8bd5\u5224\u65ad - Boolean | Int | Function(failureCount, error) => shouldRetry | Boolean\n    retryDelay: (attempt) => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000), // \u91cd\u8bd5\u5ef6\u8fdf - Function(retryAttempt: Int) => Int\n    // \u5237\u65b0\u63a7\u5236\n    refetchInterval: false, // \u5237\u65b0\u95f4\u9694 - Boolean | Integer\n    refetchIntervalInBackground: false, // \u540e\u53f0\u5237\u65b0 - Boolean\n    refetchOnMount: true, // \u5728 mount \u65f6\u5237\u65b0 - boolean | 'always'\n    refetchOnReconnect: true, // \u7f51\u7edc\u6062\u590d\u65f6\u5237\u65b0\n    refetchOnWindowFocus: true, // \u7a97\u53e3\u83b7\u53d6\u7126\u70b9\u65f6\u5237\u65b0\n\n    // \u521d\u59cb\n    initialData: undefined, // \u521d\u59cb\u6570\u636e - any | ()=>any\n    initialStale: true, //  \u521d\u59cb\u5931\u6548 - \u5982\u679c\u8bbe\u7f6e\u4e86\u5219\u521d\u59cb\u6570\u636e\u8ba4\u4e3a\u662f\u6709\u6548\u6570\u636e - \u4f1a\u88ab\u7f13\u5b58 - boolean | ()=>boolean\n    placeholderData: undefined, // \u5360\u4f4d\u6570\u636e - loading \u7684\u65f6\u5019\u7528 - any | ()=>any\n\n    // \u72b6\u6001\u53d8\u5316\u56de\u8c03\n    notifyOnStatusChange: true, // \u72b6\u6001\u53d8\u5316 rerender - \u8bbe\u7f6e\u4e3a false \u5219 data \u6216 error \u53d8\u5316\u65f6\u624d rerender\n    onSuccess: undefined, // \u6210\u529f\u56de\u8c03 - (data)=>data\n    onError: undefined, // \u9519\u8bef\u56de\u8c03 - (error)=>void\n    onSettled: undefined, // \u5b8c\u6210\u56de\u8c03 - (data,error)=>data\n    suspense: false, // \u542f\u7528 react suspense \u6a21\u5f0f - loading \u548c error \u65f6\u4f1a suspense\n\n    queryFnParamsFilter: undefined, // \u67e5\u8be2\u53c2\u6570\u8fc7\u6ee4 - args=>filteredArgs\n    queryKeySerializerFn: undefined,\n    isDataEqual: undefined, // \u81ea\u5b9a\u4e49\u6bd4\u8f83\u64cd\u4f5c\n    keepPreviousData: false, // \u4fdd\u7559\u4e0a\u6b21\u6570\u636e - key \u53d8\u5316\u65f6\n    structuralSharing: true, // \u7ed3\u6784\u5316\u5171\u4eab - \u8de8\u67e5\u8be2\u7f13\u5b58\u5171\u4eab\n    useErrorBoundary: false,\n  },\n);\n\n// \u5206\u9875\u67e5\u8be2\nconst {\n  data = undefined,\n  resolvedData, // \u4e0a\u6b21\u6210\u529f\u6570\u636e - \u5ffd\u7565 key\n  latestData, // \u672c\u6b21\u67e5\u8be2\u6570\u636e\n  ...queryInfo\n} = usePaginatedQuery(queryKey, queryFn, options);\n\n// \u7011\u5e03\u6d41 - queryFn \u4f1a\u591a\u63a5\u53d7\u4e00\u4e2a fetchMoreVariable\nconst {\n  isFetchingMore, // false | 'next' | 'previous'\n  fetchMore, // Function(fetchMoreVariableOverride) => Promise<TResult | undefined>\n  canFetchMore,\n  ...queryInfo\n} = useInfiniteQuery(queryKey, queryFn, {\n  ...queryOptions,\n  getFetchMore: (lastPage, allPages) => fetchMoreVariable,\n});\n")),(0,l.kt)("h3",{id:"usemutation"},"useMutation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const [\n  mutate, // \u4fee\u6539\u64cd\u4f5c\n  { status, isIdle, isLoading, isSuccess, isError, data, error, reset },\n] = useMutation(mutationFn, {\n  onMutate,\n  onSuccess,\n  onError,\n  onSettled,\n  throwOnError,\n  useErrorBoundary,\n});\n\nconst promise = mutate(variables, {\n  onSuccess,\n  onSettled,\n  onError,\n  throwOnError,\n});\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"isloading-vs-isfetching"},"isLoading vs isFetching"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"isLoading \u662f status=loading",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7b2c\u4e00\u6b21 loading \u5224\u65ad"))),(0,l.kt)("li",{parentName:"ul"},"isFetching \u662f\u540e\u53f0\u6b63\u5728\u83b7\u53d6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5373\u4fbf\u662f\u6b63\u5728\u83b7\u53d6\uff0cisLoading \u4e5f\u53ef\u80fd\u4e3a false - \u56e0\u4e3a\u6709\u4e0a\u6b21\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u6570\u636e\u52a0\u8f7d\u5224\u65ad - \u5237\u65b0\u52a0\u8f7d\u8fc7\u7a0b\u663e\u793a")))))}d.isMDXComponent=!0}}]);