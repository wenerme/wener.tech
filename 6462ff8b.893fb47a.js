(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(u,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var l=2;l<i;l++)u[l]=n[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1129)),u={title:"React Query"},c={unversionedId:"web/react/react-query",id:"web/react/react-query",isDocsHomePage:!1,title:"React Query",description:"- \u9ed8\u8ba4",source:"@site/notes/web/react/react-query.md",slug:"/web/react/react-query",permalink:"/notes/web/react/react-query",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-query.md",version:"current",sidebar:"docs",previous:{title:"React Internal",permalink:"/notes/web/react/react-internal"},next:{title:"React Route",permalink:"/notes/web/react/react-router"}},o=[{value:"v2.x",id:"v2x",children:[]},{value:"useMutation",id:"usemutation",children:[]},{value:"isLoading vs isFetching",id:"isloading-vs-isfetching",children:[]}],l={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f00\u542f refetchOnMount, refetchOnWindowFocus, refetchOnReconnect"),Object(i.b)("li",{parentName:"ul"},"cacheTime 5 \u5206\u949f - \u4e0d\u518d\u4f7f\u7528\u7684\u7684\u6570\u636e\u4fdd\u7559 5 \u5206\u949f"),Object(i.b)("li",{parentName:"ul"},"retry=3, retryDelay exponential"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://react-query.tanstack.com/docs/comparison"},"vs SWR vs Apollo Client"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"vs SWR - \u652f\u6301\u4fee\u6539\uff0c\u66f4\u597d\u7684\u7f13\u5b58\u72b6\u6001\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},"vs Apollo - \u652f\u6301 GraphQL \u548c \u4e00\u822c\u8bf7\u6c42\uff0c\u9488\u5bf9 GraphQL \u7684 entity \u7f13\u5b58\u6ca1\u6709 apollo \u5f3a"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://react-query.tanstack.com/guides/migrating-to-react-query-3"},"v3")," - 2020-12-15",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u62c6\u5206 QueryCache \u4e3a QueryClient \u548c\u66f4\u5e95\u5c42\u7684 MutationCache, QueryCache"),Object(i.b)("li",{parentName:"ul"},"useQueryCache -> useQueryClient"),Object(i.b)("li",{parentName:"ul"},"QueryClientProvider \u53d6\u4ee3 ReactQueryConfigProvider \u548c ReactQueryCacheProvider"),Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e useQueries"),Object(i.b)("li",{parentName:"ul"},"\u5305\u542b devtools - ",Object(i.b)("inlineCode",{parentName:"li"},"react-query/devtools")),Object(i.b)("li",{parentName:"ul"},"useQuery \u53c2\u6570\u4e0d\u518d\u662f key",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u63a8\u8350\u901a\u8fc7 lambada \u4f20\u9012\u53c2\u6570"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u8fd8\u662f\u8981 key ",Object(i.b)("inlineCode",{parentName:"li"},"useQuery(['post', id], context => fetchPost(context.queryKey[1]))")),Object(i.b)("li",{parentName:"ul"},"enabled \u9009\u9879\u5fc5\u987b\u4e3a boolean - \u5426\u5219\u4f1a\u8b66\u544a"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 select \u90e8\u5206\u6570\u636e - \u51cf\u5c11\u91cd\u65b0\u6e32\u67d3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useQuery('user',fetchUser,{select:user=>user.username})")))))),Object(i.b)("li",{parentName:"ul"},"\u5e9f\u5f03 usePaginatedQuery, \u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"li"},"keepPreviousData: true")," \u5b9e\u73b0\u7c7b\u4f3c\u529f\u80fd"),Object(i.b)("li",{parentName:"ul"},"useInfiniteQuery \u652f\u6301\u524d\u540e\u53cc\u5411\u67e5\u8be2"),Object(i.b)("li",{parentName:"ul"},"useMutation",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fd4\u56de\u5bf9\u8c61",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e4b\u524d ",Object(i.b)("inlineCode",{parentName:"li"},"const [mutate, { status, reset }] = useMutation()")),Object(i.b)("li",{parentName:"ul"},"\u73b0\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"const { mutate, mutateAsync, status, reset } = useMutation()"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mutate \u4e0d\u8fd4\u56de promise, mutateAsync \u8fd4\u56de promise"),Object(i.b)("li",{parentName:"ul"},"mutate \u652f\u6301\u56de\u8c03 ",Object(i.b)("inlineCode",{parentName:"li"},"mutate('todo',{onSuccess(){},onError(){},onSettled(){}})")))))),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 retry - \u65ad\u7ebf\u91cd\u8054\u4f1a\u91cd\u8bd5\uff0c\u9ed8\u8ba4\u5931\u8d25\u4e0d\u4f1a\u91cd\u8bd5"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u6301\u4e45\u5316\u7136\u540e\u6062\u590d"))),Object(i.b)("li",{parentName:"ul"},"QueryObserver, InfiniteQueryObserver, QueriesObserver - \u53ef\u7528\u4e8e\u76d1\u542c\u6570\u636e\u53d8\u5316"),Object(i.b)("li",{parentName:"ul"},"useIsFetching - \u652f\u6301 key \u53c2\u6570")))),Object(i.b)("h2",{id:"v2x"},"v2.x"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';\nimport { ReactQueryDevtools } from 'react-query-devtools';\n\nconst queryCache = new QueryCache();\n\nexport default function App() {\n  return (\n    <>\n      {/* \u7f13\u5b58 */}\n      <ReactQueryCacheProvider queryCache={queryCache}>\n        <Example />\n      </ReactQueryCacheProvider>\n      {/* \u5f00\u53d1\u5de5\u5177 */}\n      <ReactQueryDevtools initialIsOpen />\n    </>\n  );\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const key = '';\nconst {\n  data, // \u83b7\u53d6\u5230\u7684\u6570\u636e\u6216\u8005\u662f\u4e0a\u6b21\u7f13\u5b58\u7684\u6570\u636e\n  error, // \u9519\u8bef\n  failureCount,\n  status, // \u72b6\u6001 - idle, loading, error, success\n  isError = status == 'error',\n  isIdle = status == 'idle',\n  isLoading = status == 'loading',\n  isSuccess = status == 'success',\n  isFetched, // \u5df2\u7ecf\u83b7\u53d6\n  isFetchedAfterMount, // \u662f\u5426\u5728 mount \u540e\u83b7\u53d6\u8fc7\n  isFetching, // \u662f\u5426\u6b63\u5728\u83b7\u53d6\n  isStale, // \u6570\u636e\u5df2\u5931\u6548\n  isPreviousData, // \u4f7f\u7528\u7684\u4e0a\u6b21\u6570\u636e\n  isPlaceholderData, // \u4f7f\u7528\u7684\u5360\u4f4d\u6570\u636e\n  refetch, // \u4ece\u65b0\u83b7\u53d6 - \u9664\u975e throwOnError \u5426\u5219\u5f02\u5e38\u53ea\u4f1a log\n  remove, // \u4ece\u7f13\u5b58\u79fb\u9664\u67e5\u8be2\n} = useQuery(\n  key,\n  /* fetcher */ (...key) => fetch(key.join()).then((v) => v.json()),\n  /* config */ {\n    enabled: true, // \u662f\u5426\u67e5\u8be2\n\n    // \u5931\u6548\u63a7\u5236\n    cacheTime: 1000 * 6 * 5, // 5m\n    staleTime: 0, // \u5931\u6548\u65f6\u95f4 - \u9ed8\u8ba4\u8fd4\u56de\u5373\u5931\u6548 - \u8bbe\u7f6e\u5931\u6548\u65f6\u95f4\u53ef\u51cf\u5c11\u8bf7\u6c42 - \u8bbe\u7f6e\u4e3a Infinity \u4e0d\u5931\u6548\n    // \u91cd\u8bd5\u63a7\u5236\n    retry: 3, // \u91cd\u8bd5\u5224\u65ad - Boolean | Int | Function(failureCount, error) => shouldRetry | Boolean\n    retryDelay: (attempt) => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000), // \u91cd\u8bd5\u5ef6\u8fdf - Function(retryAttempt: Int) => Int\n    // \u5237\u65b0\u63a7\u5236\n    refetchInterval: false, // \u5237\u65b0\u95f4\u9694 - Boolean | Integer\n    refetchIntervalInBackground: false, // \u540e\u53f0\u5237\u65b0 - Boolean\n    refetchOnMount: true, // \u5728 mount \u65f6\u5237\u65b0 - boolean | 'always'\n    refetchOnReconnect: true, // \u7f51\u7edc\u6062\u590d\u65f6\u5237\u65b0\n    refetchOnWindowFocus: true, // \u7a97\u53e3\u83b7\u53d6\u7126\u70b9\u65f6\u5237\u65b0\n\n    // \u521d\u59cb\n    initialData: undefined, // \u521d\u59cb\u6570\u636e - any | ()=>any\n    initialStale: true, //  \u521d\u59cb\u5931\u6548 - \u5982\u679c\u8bbe\u7f6e\u4e86\u5219\u521d\u59cb\u6570\u636e\u8ba4\u4e3a\u662f\u6709\u6548\u6570\u636e - \u4f1a\u88ab\u7f13\u5b58 - boolean | ()=>boolean\n    placeholderData: undefined, // \u5360\u4f4d\u6570\u636e - loading \u7684\u65f6\u5019\u7528 - any | ()=>any\n\n    // \u72b6\u6001\u53d8\u5316\u56de\u8c03\n    notifyOnStatusChange: true, // \u72b6\u6001\u53d8\u5316 rerender - \u8bbe\u7f6e\u4e3a false \u5219 data \u6216 error \u53d8\u5316\u65f6\u624d rerender\n    onSuccess: undefined, // \u6210\u529f\u56de\u8c03 - (data)=>data\n    onError: undefined, // \u9519\u8bef\u56de\u8c03 - (error)=>void\n    onSettled: undefined, // \u5b8c\u6210\u56de\u8c03 - (data,error)=>data\n    suspense: false, // \u542f\u7528 react suspense \u6a21\u5f0f - loading \u548c error \u65f6\u4f1a suspense\n\n    queryFnParamsFilter: undefined, // \u67e5\u8be2\u53c2\u6570\u8fc7\u6ee4 - args=>filteredArgs\n    queryKeySerializerFn: undefined,\n    isDataEqual: undefined, // \u81ea\u5b9a\u4e49\u6bd4\u8f83\u64cd\u4f5c\n    keepPreviousData: false, // \u4fdd\u7559\u4e0a\u6b21\u6570\u636e - key \u53d8\u5316\u65f6\n    structuralSharing: true, // \u7ed3\u6784\u5316\u5171\u4eab - \u8de8\u67e5\u8be2\u7f13\u5b58\u5171\u4eab\n    useErrorBoundary: false,\n  },\n);\n\n// \u5206\u9875\u67e5\u8be2\nconst {\n  data = undefined,\n  resolvedData, // \u4e0a\u6b21\u6210\u529f\u6570\u636e - \u5ffd\u7565 key\n  latestData, // \u672c\u6b21\u67e5\u8be2\u6570\u636e\n  ...queryInfo\n} = usePaginatedQuery(queryKey, queryFn, options);\n\n// \u7011\u5e03\u6d41 - queryFn \u4f1a\u591a\u63a5\u53d7\u4e00\u4e2a fetchMoreVariable\nconst {\n  isFetchingMore, // false | 'next' | 'previous'\n  fetchMore, // Function(fetchMoreVariableOverride) => Promise<TResult | undefined>\n  canFetchMore,\n  ...queryInfo\n} = useInfiniteQuery(queryKey, queryFn, {\n  ...queryOptions,\n  getFetchMore: (lastPage, allPages) => fetchMoreVariable,\n});\n")),Object(i.b)("h2",{id:"usemutation"},"useMutation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const [\n  mutate, // \u4fee\u6539\u64cd\u4f5c\n  { status, isIdle, isLoading, isSuccess, isError, data, error, reset },\n] = useMutation(mutationFn, {\n  onMutate,\n  onSuccess,\n  onError,\n  onSettled,\n  throwOnError,\n  useErrorBoundary,\n});\n\nconst promise = mutate(variables, {\n  onSuccess,\n  onSettled,\n  onError,\n  throwOnError,\n});\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"isloading-vs-isfetching"},"isLoading vs isFetching"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"isLoading \u662f status=loading",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7b2c\u4e00\u6b21 loading \u5224\u65ad"))),Object(i.b)("li",{parentName:"ul"},"isFetching \u662f\u540e\u53f0\u6b63\u5728\u83b7\u53d6",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5373\u4fbf\u662f\u6b63\u5728\u83b7\u53d6\uff0cisLoading \u4e5f\u53ef\u80fd\u4e3a false - \u56e0\u4e3a\u6709\u4e0a\u6b21\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u6570\u636e\u52a0\u8f7d\u5224\u65ad - \u5237\u65b0\u52a0\u8f7d\u8fc7\u7a0b\u663e\u793a")))))}s.isMDXComponent=!0}}]);