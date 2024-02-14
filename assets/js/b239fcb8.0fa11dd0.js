/*! For license information please see b239fcb8.0fa11dd0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79396],{75700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=t(2488),s=t(62780);const i={title:"react-table"},a="react-table",r={id:"web/react/react-table",title:"react-table",description:"- tannerlinsley/react-table",source:"@site/../notes/web/react/react-table.md",sourceDirName:"web/react",slug:"/web/react/table",permalink:"/notes/web/react/table",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/react-table.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"react-table"},sidebar:"docs",previous:{title:"React Route",permalink:"/notes/web/react/router"},next:{title:"react-tracked",permalink:"/notes/web/react/tracked"}},c={},o=[{value:"Note",id:"note",level:2},{value:"useTable",id:"usetable",level:2},{value:"usePagination",id:"usepagination",level:2},{value:"useTokenPagination",id:"usetokenpagination",level:2},{value:"useRowSelect",id:"userowselect",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"react-table",children:"react-table"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/tannerlinsley/react-table",children:"tannerlinsley/react-table"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u57fa\u4e8e Hook \u529f\u80fd\u5f3a\u5927\u7684 Table \u7ec4\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"v8+ \u6846\u67b6\u65e0\u5173,\u4e0d\u518d\u4f7f\u7528\u63d2\u4ef6\u6a21\u5f0f"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 sticky \u884c\u5217\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.del,{children:["\u53ef\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"https://github.com/GuillaumeJasmin/react-table-sticky",children:"GuillaumeJasmin/react-table-sticky"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"react-table v7"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["table-core\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u72b6\u6001\u7ba1\u7406"}),"\n",(0,l.jsx)(n.li,{children:"\u64cd\u4f5c reduce"}),"\n",(0,l.jsx)(n.li,{children:"\u884c\u5217\u5904\u7406"}),"\n",(0,l.jsx)(n.li,{children:"\u5176\u4ed6\u529f\u80fd\u7531\u63d2\u4ef6\u63d0\u4f9b"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/TanStack/table/blob/main/packages/table-core/src/core/table.ts",children:"createTable"})}),"\n",(0,l.jsxs)(n.li,{children:["table\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"reset - \u72b6\u6001\u8bbe\u7f6e\u4e3a initialState"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["react-table\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/TanStack/table/blob/main/packages/react-table/src/index.tsx",children:"useReactTable"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e3b\u8981\u63d0\u4f9b\u72b6\u6001"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// \u5b8c\u6574\u7a7a\u72b6\u6001\nconst InitialReactTableState = {\n  columnVisibility: {},\n  columnOrder: [],\n  columnPinning: {\n    left: [],\n    right: [],\n  },\n  columnFilters: [],\n  globalFilter: {},\n  sorting: [],\n  expanded: {},\n  grouping: [],\n  columnSizing: {},\n  columnSizingInfo: {\n    startOffset: null,\n    startSize: null,\n    deltaOffset: null,\n    deltaPercentage: null,\n    isResizingColumn: false,\n    columnSizingStart: [], // [string, number][]\n  },\n  pagination: {\n    pageIndex: 0,\n    pageSize: 30,\n  },\n  rowSelection: {},\n} as TableState;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["react-table \u57fa\u4e8e table-core \u63d0\u4f9b\u7b80\u5355\u7684\u72b6\u6001\u7ba1\u7406\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u63d0\u4f9b flexRender, useReactTable"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["useReactTable\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5904\u7406 - state, onStateChange"}),"\n",(0,l.jsxs)(n.li,{children:["\u6838\u5fc3\u903b\u8f91\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["createTable, \u6301\u6709 ref\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8fd4\u56de\u7684 table \u4e00\u76f4\u4e0d\u4f1a\u53d8"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u66f4\u65b0 table \u72b6\u6001\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"useState \u4f5c\u4e3a table \u7684 state - \u521d\u59cb\u503c\u4e3a\u6784\u5efa\u540e\u7684 initialState"}),"\n",(0,l.jsxs)(n.li,{children:["onStateChange \u4e3a setState\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u56e0\u6b64\u6bcf\u6b21 state \u53d8\u5316 useTable \u4e5f\u4f1a rerender"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usetable",children:"useTable"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u9700\u8981 memoized \u7684\u5c5e\u6027\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"colums, data, getSubRows, getRowId"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["getCoreRowModel\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"(table: Table<TData>) => () => RowModel<TData>"})}),"\n",(0,l.jsx)(n.li,{children:"\u53ea\u4f1a\u8c03\u7528 1 \u6b21"}),"\n",(0,l.jsx)(n.li,{children:"memo table.options.data"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"getSubRows?: (originalRow: TData,index: number) => undefined | TData[]"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"getRowId?: (originalRow: TData,index: number,parent?: Row<TData>) => string"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9ed8\u8ba4\u7528 index \u4f5c\u4e3a id"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"export function useReactTable<TData extends RowData>(\n  options: TableOptions<TData>\n) {\n  // \u5408\u5e76\u9009\u9879\n  const resolvedOptions: TableOptionsResolved<TData> = {\n    state: {}, // Dummy state\n    onStateChange: () => {}, // noop\n    renderFallbackValue: null,\n    ...options,\n  }\n\n  // \u521b\u5efa table\n  const [tableRef] = React.useState(() => ({\n    current: createTable<TData>(resolvedOptions),\n  }))\n\n  // \u4f7f\u7528 react \u72b6\u6001\n  const [state, setState] = React.useState(() => tableRef.current.initialState)\n\n  // \u4f18\u5148\u4f7f\u7528\u7528\u6237\u63d0\u4f9b\u7684\u72b6\u6001\n  tableRef.current.setOptions(prev => ({\n    ...prev,\n    ...options,\n    state: {\n      ...state,\n      ...options.state,\n    },\n    // \u7ef4\u62a4\u4e24\u8fb9\u72b6\u6001\n    onStateChange: updater => {\n      setState(updater)\n      options.onStateChange?.(updater)\n    },\n  }))\n\n  return tableRef.current\n}\n"})}),"\n",(0,l.jsx)(n.h1,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const usePagination = (hooks) => {\n  hooks.stateReducers.push(reducer);\n  hooks.useInstance.push(useInstance);\n};\n\n// \u72b6\u6001\u5904\u7406\nfunction reducer(state, action: { type }, previousState, instance) {\n  // \u521d\u59cb\u5316\n  if (action.type === actions.init) {\n    return {\n      pageSize: 10,\n      pageIndex: 0,\n      ...state,\n    };\n  }\n}\n\n// \u4f1a\u5728 hook \u4e2d\u5faa\u73af\u8c03\u7528 - \u53ef\u4ee5\u4f7f\u7528 react hook \u5b9e\u73b0\u63d2\u4ef6\u72b6\u6001\n// \u53ef\u6dfb\u52a0\u989d\u5916\u65b9\u6cd5\u5230 instance\nfunction useInstance(instance) {}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"usepagination",children:"usePagination"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53d7\u63a7\u5206\u9875\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5bf9 row \u6570\u636e\u8fdb\u884c\u5206\u9875"}),"\n",(0,l.jsx)(n.li,{children:"\u57fa\u4e8e\u884c\u6570\u8ba1\u7b97 pageCount"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u975e\u53d7\u63a7\u5206\u9875\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7528\u4e8e\u670d\u52a1\u7aef\u63a5\u53e3\u573a\u666f"}),"\n",(0,l.jsx)(n.li,{children:"\u63d0\u4f9b pageCount"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"interface PaginationState {\n  pageIndex;\n  pageSize;\n}\n\ninterface PaginationInstance {\n  pageCount: number;\n  pageOptions: number[];\n  page: Row[];\n\n  canPreviousPage: boolean;\n  canNextPage: boolean;\n\n  // \u64cd\u4f5c - \u8fdb\u884c dispatch\n  gotoPage(pageIndex);\n  previousPage();\n  nextPage();\n  setPageSize(pageSize);\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"usetokenpagination",children:"useTokenPagination"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/tannerlinsley/react-table/blob/master/src/utility-hooks/useTokenPagination.js",children:"src/utility-hooks/useTokenPagination.js"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u672a\u5305\u542b\u5728\u6b63\u5e38\u5305\u91cc"}),"\n",(0,l.jsx)(n.li,{children:"\u72ec\u7acb\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u72b6\u6001\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"pageToken"}),"\n",(0,l.jsx)(n.li,{children:"nextPageToken"}),"\n",(0,l.jsxs)(n.li,{children:["previousPageTokens\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6570\u7ec4 - \u8bb0\u5f55\u7ecf\u8fc7\u7684 token"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"pageIndex"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"userowselect",children:"useRowSelect"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9ed8\u8ba4\u4f1a\u5728 row \u4e0a\u8bbe\u7f6e isSelected"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"interface RowSelectOptions {\n  initialState: {\n    selectedRowIds: Record<string: boolean> // rowId\n  }\n  manualRowSelectedKey?:string // 'isSelected'\n  autoResetSelectedRows?:bool // true\n}\n\n\ninterface RowSelectInstance {\n  toggleRowSelected(rowPath: string, set?: boolean): void;\n\n  toggleAllRowsSelected(set?: boolean): void;\n\n  toggleAllPageRowsSelected(set?: boolean): void;\n\n  getToggleAllPageRowsSelectedProps(props): RowSelectProps;\n\n  getToggleAllRowsSelectedProps(props): RowSelectProps;\n\n  isAllRowsSelected: boolean;\n  selectedFlatRows: Array<Row>;\n}\n\ninterface RowSelectProps {\n  onChange;\n  style: { cursor };\n  indeterminate;\n  title;\n}\n\ninterface RowSelectRowProps {\n  isSelected: boolean;\n  isSomeSelected: boolean;\n  toggleRowSelected(set?: boolean);\n  getToggleRowSelectedProps(props): RowSelectProps;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var l=t(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var l,i={},o=null,d=null;for(l in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,l)&&!c.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===i[l]&&(i[l]=n[l]);return{$$typeof:s,type:e,key:o,ref:d,props:i,_owner:r.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var l=t(96651);const s={},i=l.createContext(s);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);