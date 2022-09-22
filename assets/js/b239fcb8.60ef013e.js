"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63393],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||l;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"react-table"},u="react-table",c={unversionedId:"web/react/react-table",id:"web/react/react-table",title:"react-table",description:"- tannerlinsley/react-table",source:"@site/../notes/web/react/react-table.md",sourceDirName:"web/react",slug:"/web/react/react-table",permalink:"/notes/web/react/react-table",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/react/react-table.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653992153,formattedLastUpdatedAt:"May 31, 2022",frontMatter:{title:"react-table"},sidebar:"docs",previous:{title:"React Route",permalink:"/notes/web/react/react-router"},next:{title:"React Version",permalink:"/notes/web/react/react-version"}},s={},p=[{value:"Note",id:"note",level:2},{value:"useTable",id:"usetable",level:2},{value:"usePagination",id:"usepagination",level:2},{value:"useTokenPagination",id:"usetokenpagination",level:2},{value:"useRowSelect",id:"userowselect",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"react-table"},"react-table"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-table"},"tannerlinsley/react-table"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Hook \u529f\u80fd\u5f3a\u5927\u7684 Table \u7ec4\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"v8+ \u6846\u67b6\u65e0\u5173")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 sticky \u884c\u5217",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/GuillaumeJasmin/react-table-sticky"},"GuillaumeJasmin/react-table-sticky")))))),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"react-table \u6838\u5fc3\u529f\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c reduce"),(0,l.kt)("li",{parentName:"ul"},"\u884c\u5217\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u529f\u80fd\u7531\u63d2\u4ef6\u63d0\u4f9b")))),(0,l.kt)("h2",{id:"usetable"},"useTable"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 memoized \u7684\u5c5e\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"colums, data, getSubRows, getRowId")))),(0,l.kt)("h1",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export const usePagination = (hooks) => {\n  hooks.stateReducers.push(reducer);\n  hooks.useInstance.push(useInstance);\n};\n\n// \u72b6\u6001\u5904\u7406\nfunction reducer(state, action: { type }, previousState, instance) {\n  // \u521d\u59cb\u5316\n  if (action.type === actions.init) {\n    return {\n      pageSize: 10,\n      pageIndex: 0,\n      ...state,\n    };\n  }\n}\n\n// \u4f1a\u5728 hook \u4e2d\u5faa\u73af\u8c03\u7528 - \u53ef\u4ee5\u4f7f\u7528 react hook \u5b9e\u73b0\u63d2\u4ef6\u72b6\u6001\n// \u53ef\u6dfb\u52a0\u989d\u5916\u65b9\u6cd5\u5230 instance\nfunction useInstance(instance) {}\n")),(0,l.kt)("h2",{id:"usepagination"},"usePagination"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d7\u63a7\u5206\u9875",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9 row \u6570\u636e\u8fdb\u884c\u5206\u9875"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u884c\u6570\u8ba1\u7b97 pageCount"))),(0,l.kt)("li",{parentName:"ul"},"\u975e\u53d7\u63a7\u5206\u9875",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u670d\u52a1\u7aef\u63a5\u53e3\u573a\u666f"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b pageCount")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface PaginationState {\n  pageIndex;\n  pageSize;\n}\n\ninterface PaginationInstance {\n  pageCount: number;\n  pageOptions: number[];\n  page: Row[];\n\n  canPreviousPage: boolean;\n  canNextPage: boolean;\n\n  // \u64cd\u4f5c - \u8fdb\u884c dispatch\n  gotoPage(pageIndex);\n  previousPage();\n  nextPage();\n  setPageSize(pageSize);\n}\n")),(0,l.kt)("h2",{id:"usetokenpagination"},"useTokenPagination"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-table/blob/master/src/utility-hooks/useTokenPagination.js"},"src/utility-hooks/useTokenPagination.js"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u672a\u5305\u542b\u5728\u6b63\u5e38\u5305\u91cc"),(0,l.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pageToken"),(0,l.kt)("li",{parentName:"ul"},"nextPageToken"),(0,l.kt)("li",{parentName:"ul"},"previousPageTokens",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u7ec4 - \u8bb0\u5f55\u7ecf\u8fc7\u7684 token"))),(0,l.kt)("li",{parentName:"ul"},"pageIndex")))),(0,l.kt)("h2",{id:"userowselect"},"useRowSelect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u5728 row \u4e0a\u8bbe\u7f6e isSelected")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface RowSelectOptions {\n  initialState: {\n    selectedRowIds: Record<string: boolean> // rowId\n  }\n  manualRowSelectedKey?:string // 'isSelected'\n  autoResetSelectedRows?:bool // true\n}\n\n\ninterface RowSelectInstance {\n  toggleRowSelected(rowPath: string, set?: boolean): void;\n\n  toggleAllRowsSelected(set?: boolean): void;\n\n  toggleAllPageRowsSelected(set?: boolean): void;\n\n  getToggleAllPageRowsSelectedProps(props): RowSelectProps;\n\n  getToggleAllRowsSelectedProps(props): RowSelectProps;\n\n  isAllRowsSelected: boolean;\n  selectedFlatRows: Array<Row>;\n}\n\ninterface RowSelectProps {\n  onChange;\n  style: { cursor };\n  indeterminate;\n  title;\n}\n\ninterface RowSelectRowProps {\n  isSelected: boolean;\n  isSomeSelected: boolean;\n  toggleRowSelected(set?: boolean);\n  getToggleRowSelectedProps(props): RowSelectProps;\n}\n")))}k.isMDXComponent=!0}}]);