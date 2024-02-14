/*! For license information please see 0a549744.e532fd3e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11032],{13500:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=t(2488),r=t(62780);const l={title:"React FAQ",tags:["FAQ"]},i="React FAQ",o={id:"web/react/react-faq",title:"React FAQ",description:"- memo \u7ec4\u4ef6\u4e0d\u80fd\u63a5\u53d7\u4e0d\u4e86 Context \u66f4\u65b0",source:"@site/../notes/web/react/react-faq.md",sourceDirName:"web/react",slug:"/web/react/faq",permalink:"/notes/web/react/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/react-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1706172619,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{title:"React FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"React DocGen",permalink:"/notes/web/react/docgen"},next:{title:"react-flow",permalink:"/notes/web/react/flow"}},c={},d=[{value:"\u5982\u4f55\u8bbe\u8ba1\u7ec4\u4ef6",id:"\u5982\u4f55\u8bbe\u8ba1\u7ec4\u4ef6",level:2},{value:"React Context",id:"react-context",level:2},{value:"forwardRef Typescript \u6dfb\u52a0\u9759\u6001\u5c5e\u6027",id:"forwardref-typescript-\u6dfb\u52a0\u9759\u6001\u5c5e\u6027",level:2},{value:"StrictMode",id:"strictmode",level:2},{value:"useEffect \u65e0\u4f9d\u8d56 vs. \u76f4\u63a5\u6267\u884c",id:"useeffect-\u65e0\u4f9d\u8d56-vs-\u76f4\u63a5\u6267\u884c",level:2},{value:"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6",id:"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6",level:2},{value:"React Class Components vs Function Components",id:"react-class-components-vs-function-components",level:2},{value:"shouldComponentUpdate for Function component",id:"shouldcomponentupdate-for-function-component",level:2},{value:"Cannot update a component while rendering a different component",id:"cannot-update-a-component-while-rendering-a-different-component",level:2},{value:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3",id:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3",level:2},{value:"\u52a8\u6001\u52a0\u8f7d script",id:"\u52a8\u6001\u52a0\u8f7d-script",level:2},{value:"iframe",id:"iframe",level:2},{value:"CSS in JS",id:"css-in-js",level:2},{value:"\u88ab\u6ce8\u5165 canvas",id:"\u88ab\u6ce8\u5165-canvas",level:2},{value:"Cannot assign to read only property &#39;_status&#39; of object",id:"cannot-assign-to-read-only-property-_status-of-object",level:2},{value:"Typescript \u7c7b\u578b",id:"typescript-\u7c7b\u578b",level:2},{value:"\u7a7a\u5185\u5bb9",id:"\u7a7a\u5185\u5bb9",level:2},{value:"TypeError: Cannot read properties of null (reading &#39;useRef&#39;)",id:"typeerror-cannot-read-properties-of-null-reading-useref",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"react-faq",children:"React FAQ"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["memo \u7ec4\u4ef6\u4e0d\u80fd\u63a5\u53d7\u4e0d\u4e86 Context \u66f4\u65b0\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["RFC ",(0,s.jsx)(e.a,{href:"https://github.com/reactjs/rfcs/pull/119",children:"useContextSelector"})]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/dai-shi/use-context-selector",children:"use-context-selector"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u5982\u4f55\u8bbe\u8ba1\u7ec4\u4ef6",children:"\u5982\u4f55\u8bbe\u8ba1\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9762\u5411\u7ec4\u4ef6\u8bbe\u8ba1 - \u7ec4\u4ef6\u9a71\u52a8\u5f00\u53d1"}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["CSF - Component Story Format\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/ComponentDriven/csf",children:"https://github.com/ComponentDriven/csf"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://storybook.js.org/docs/react/api/csf/",children:"https://storybook.js.org/docs/react/api/csf/"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://www.componentdriven.org/",children:"https://www.componentdriven.org/"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["How to be Component Driven\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Build one component at a time - Avatar, Button, Input, Tooltip"}),"\n",(0,s.jsx)(e.li,{children:"Combine components - Form, Header, List, Table"}),"\n",(0,s.jsx)(e.li,{children:"Assemble pages - Home page, Settings page, Profile page"}),"\n",(0,s.jsx)(e.li,{children:"Integrate pages into your project - Web app, Marketing site, Docs site"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"react-context",children:"React Context"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Context.Provider value \u4fee\u6539\u9700\u8981 rerender \u7ec4\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c Provider \u90fd\u5728\u6bd4\u8f83\u4e0a\u5c42\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u6709\u6027\u80fd\u95ee\u9898"}),"\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528\u4e0d\u4f1a\u53d8\u7684 value\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e0d\u5c06\u72b6\u6001\u5185\u5bb9\u4f5c\u4e3a value"}),"\n",(0,s.jsx)(e.li,{children:"\u4f8b\u5982 \u4f7f\u7528 rxjs BehaviorSubject \u4f5c\u4e3a value \u5219\u53ef\u4ee5\u907f\u514d\u53d8\u5316\uff0c\u4e5f\u80fd\u8ba2\u9605\u53d8\u5316"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u4f7f\u7528 zustand \u66ff\u4ee3"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"forwardref-typescript-\u6dfb\u52a0\u9759\u6001\u5c5e\u6027",children:"forwardRef Typescript \u6dfb\u52a0\u9759\u6001\u5c5e\u6027"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"assign"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"const Layout = forwardRef(() => {\n  return null;\n});\nLayout.displayName = 'MainLayout';\n// \u6dfb\u52a0\u9759\u6001\u5c5e\u6027\uff0cTS \u4e0d\u4f1a\u51fa\u9519\nexport const MainLayout = Object.assign(Layout, { Slot });\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u5b9a\u4e49\u5c5e\u6027"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"export type Props = {};\n\nexport interface CompoundedComponent\n  extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>> {\n  yourStaticFunctionOrSomethingLikeThat: () => void;\n}\n\nconst Component = React.forwardRef<HTMLInputElement, Props>((props, ref) => (\n  <input ref={ref} {...props} />\n)) as CompoundedComponent;\n\nComponent.yourStaticFunctionOrSomethingLikeThat = () => {};\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Compound Components"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-894053907",children:"https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-894053907"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"strictmode",children:"StrictMode"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5728 dev \u65f6\u6e32\u67d3\u4e24\u6b21\u6765\u68c0\u6d4b\u6f5c\u5728\u95ee\u9898 - Detecting unexpected side effects\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"constructor"}),"\n",(0,s.jsx)(e.li,{children:"componentWillMount (or UNSAFE_componentWillMount)"}),"\n",(0,s.jsx)(e.li,{children:"componentWillReceiveProps (or UNSAFE_componentWillReceiveProps)"}),"\n",(0,s.jsx)(e.li,{children:"componentWillUpdate (or UNSAFE_componentWillUpdate)"}),"\n",(0,s.jsx)(e.li,{children:"getDerivedStateFromProps"}),"\n",(0,s.jsx)(e.li,{children:"shouldComponentUpdate"}),"\n",(0,s.jsx)(e.li,{children:"render"}),"\n",(0,s.jsx)(e.li,{children:"setState"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Ensuring reusable state - \u6a21\u62df umount\u3001remount\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"componentDidMount"}),"\n",(0,s.jsx)(e.li,{children:"componentWillUnmount"}),"\n",(0,s.jsx)(e.li,{children:"useEffect"}),"\n",(0,s.jsx)(e.li,{children:"useLayoutEffect"}),"\n",(0,s.jsx)(e.li,{children:"useInsertionEffect"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://reactjs.org/docs/strict-mode.html",children:"https://reactjs.org/docs/strict-mode.html"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"useeffect-\u65e0\u4f9d\u8d56-vs-\u76f4\u63a5\u6267\u884c",children:"useEffect \u65e0\u4f9d\u8d56 vs. \u76f4\u63a5\u6267\u884c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const callbackRef = useRef(callback);\n\n// 1. useEffect\nuseEffect(() => {\n  callbackRef.current = callback;\n});\n\n// 2. \u76f4\u63a5\u8d4b\u503c\ncallbackRef.current = callback;\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6267\u884c\u65f6\u673a\u4e0d\u540c\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["useEffect \u548c\u5176\u4ed6 useEffect \u662f\u987a\u5e8f\u6267\u884c\u7684\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u80fd\u4f1a\u5ef6\u8fdf\u6267\u884c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u76f4\u63a5\u8d4b\u503c\u4f1a\u5728\u6700\u5f00\u59cb\u6267\u884c\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5fc5\u7136\u4f1a\u6267\u884c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6",children:"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u65e9\u7684 React \u5f00\u53d1\u4e00\u822c\u4f7f\u7528 CRA\uff0c\u4f46 CRA \u57fa\u4e8e webpack\uff0c\u5f02\u5e38\u7684\u6162\uff0c\u5728 2021 \u5e74\u4e0d\u518d\u503c\u5f97\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u9009\u62e9\u4f9d\u636e\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5355\u9875\u9762 - vite, nextjs\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u590d\u6742\u524d\u7aef"}),"\n",(0,s.jsx)(e.li,{children:"\u52a8\u6001\u6a21\u5757 - systemjs, dynamic import, esm"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u591a\u9875\u9762 - vite, nextjs, remix\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u591a\u9875\u9762 export"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5355 HTML \u5165\u53e3 vs. \u591a HTML \u5165\u53e3\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"vitejs \u652f\u6301 \u591a HTMl \u5165\u53e3"}),"\n",(0,s.jsx)(e.li,{children:"nextjs \u53ea\u652f\u6301 \u5355 HTML \u5165\u53e3"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u9700\u8981 SEO/SSR - nextjs, remix"}),"\n",(0,s.jsx)(e.li,{children:"\u5168\u6808 - nextjs, remix"}),"\n",(0,s.jsxs)(e.li,{children:["\u8def\u7531\u7c7b\u578b\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5ba2\u6237\u7aef\u63a7\u5236 - SPA - vite"}),"\n",(0,s.jsx)(e.li,{children:"\u670d\u52a1\u7aef\u63a7\u5236 - nextjs, remix"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u7f51\u7ad9\u5185\u5bb9\u7c7b\u578b\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7ba1\u7406\u540e\u53f0 - \u5355\u9875\u3001\u590d\u6742\u3001CS \u4ea4\u4e92"}),"\n",(0,s.jsx)(e.li,{children:"\u8425\u9500 - SEO\u3001\u9759\u6001\u3001\u589e\u91cf"}),"\n",(0,s.jsx)(e.li,{children:"\u7535\u5546 - \u6570\u636e\u3001SEO\u3001\u9759\u6001"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u90e8\u7f72\u65b9\u5f0f\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9759\u6001 - \u9700\u8981\u5bfc\u51fa"}),"\n",(0,s.jsxs)(e.li,{children:["\u52a8\u6001 - \u542f\u52a8\u670d\u52a1\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u90e8\u7f72 NodeJS \u4f1a\u6bd4\u8f83\u9ebb\u70e6 - node_modules \u5f88\u5927"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Serverless"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u73b0\u5728 CS \u6df7\u5408\u6e32\u67d3\u8d8a\u6765\u8d8a\u591a\uff0c\u503c\u5f97\u5c1d\u8bd5"}),"\n",(0,s.jsxs)(e.li,{children:["React Server Components \u4e5f\u662f\u4e00\u4e2a\u8d8b\u52bf\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7ec4\u5efa\u7ea7\u52a8\u6001"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"react-class-components-vs-function-components",children:"React Class Components vs Function Components"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",metastring:'title="React.Component"',children:"import React from 'react';\n\nclass Hello extends React.Component<{ name: string }, { name: string }> {\n  static props = {\n    name: 'Wener',\n  };\n\n  static getDerivedStateFromProps({ name }) {\n    return { name };\n  }\n\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return <h1>Hello, {this.state.name}</h1>;\n  }\n\n  componentDidMount() {\n    console.debug(`componentDidMount`);\n  }\n\n  getSnapshotBeforeUpdate(prevProps: Readonly<{ name: string }>, prevState: Readonly<{ name: string }>): any {\n    return {};\n  }\n\n  componentDidUpdate(prevProps: Readonly<{ name: string }>, prevState: Readonly<{ name: string }>, snapshot?: any) {\n    console.debug(`componentDidUpdate`);\n  }\n\n  componentWillUnmount() {\n    console.debug(`componentWillUnmount`);\n  }\n\n  shouldComponentUpdate(\n    nextProps: Readonly<{ name: string }>,\n    nextState: Readonly<{ name: string }>,\n    nextContext: any,\n  ): boolean {\n    return false;\n  }\n\n  /**\n   * ErrorBoundary - \u4ec5 ClassComponent \u652f\u6301\n   */\n  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {\n    console.log(`componentDidCatch`);\n  }\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",metastring:'title="React.FC"',children:"const HelloFC: React.FC<{ name: string }> = ({ name }) => {\n  const [state, setState] = useState({ name });\n  // getDerivedStateFromProps\n  useEffect(() => {\n    setState({ name });\n  }, [name]);\n  useEffect(() => {\n    console.debug('componentDidMount');\n    return () => {\n      console.debug('componentWillUnmount');\n    };\n  }, []);\n\n  // render\n  return (\n    <h1>\n      Hello, <input value={state.name} onChange={(e) => setState({ name: e.target.name })} />\n    </h1>\n  );\n};\nHelloFC.displayName = 'HelloFC';\nHelloFC.defaultProps = { name: 'Wener' };\n\nconst HelloMemo = React.memo(HelloFC, (a, b) => {\n  // shouldComponentUpdate\n  return a.name === b.name;\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"shouldcomponentupdate-for-function-component",children:"shouldComponentUpdate for Function component"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"const HelloMemo = React.memo(HelloFC, (a, b) => {\n  // shouldComponentUpdate\n  return a.name === b.name;\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"cannot-update-a-component-while-rendering-a-different-component",children:"Cannot update a component while rendering a different component"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u907f\u514d render \u9636\u6bb5\u4fee\u6539\u72b6\u6001"}),"\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/facebookexperimental/Recoil/issues/12",children:"facebookexperimental/Recoil#12"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// from\nif (storeRef.current && !isEqual(preloadRef.current, props)) {\n  console.debug(`DashboardStoreProvider: update preload`);\n  preloadRef.current = props;\n  storeRef.current.setState(props as any);\n}\n\n// to\nuseDeepCompareEffect(() => {\n  if (storeRef.current) {\n    storeRef.current.setState(props as any);\n  }\n}, [props]);\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3",children:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3"}),"\n",(0,s.jsxs)(e.ol,{start:"0",children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u80fd\u591f selector \u7684\u72b6\u6001\u7ba1\u7406\u5e93 - \u5141\u8bb8\u8bfb\u53d6\u90e8\u5206\u72b6\u6001"}),"\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u80fd\u533a\u5206 read \u548c write \u7684\u5e93 - \u5141\u8bb8\u72ec\u7acb\u66f4\u65b0"}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693",children:"Preventing rerenders with React.memo and useContext hook"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u62c6\u5206\u5927\u5bf9\u8c61\u4e0a\u4e0b\u6587 - \u907f\u514d\u76f4\u63a5\u4fee\u6539\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u533a\u5206\u5e38\u53d8\u5316\u7684\u4e0a\u4e0b\u6587\u548c\u4e0d\u5e38\u53d8\u5316\u7684\u4e0a\u4e0b\u6587"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u62c6\u5206\u7ec4\u4ef6\uff0c\u4f7f\u7528 memo hoc \u7ec4\u4ef6\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7ec4\u4ef6\u907f\u514d\u4e0d\u5fc5\u8981\u5237\u65b0"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5355\u4e2a\u7ec4\u4ef6\uff0c\u4f7f\u7528 useMemo \u6784\u5efa\u7ec4\u4ef6\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u903b\u8f91\u6784\u5efa\u4e0d\u5237\u65b0\u7ec4\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u5efa\u8bae\u4e0d\u7528 context \u6765\u4f20\u9012\u6570\u636e\uff0c\u4f7f\u7528\u8ba2\u9605"}),"\n",(0,s.jsxs)(e.li,{children:["RFC ",(0,s.jsx)(e.a,{href:"https://github.com/reactjs/rfcs/pull/119",children:"useContextSelector"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/dai-shi/use-context-selector",children:"use-context-selector"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/dai-shi/will-this-react-global-state-work-in-concurrent-mode",children:"Will this React global state work in Concurrent Mode?"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u52a8\u6001\u52a0\u8f7d-script",children:"\u52a8\u6001\u52a0\u8f7d script"}),"\n",(0,s.jsx)(e.p,{children:"react-helmet, next/head \u652f\u6301 script \u6807\u7b7e\uff0c\u4f46\u65e0\u6cd5\u68c0\u6d4b\u72b6\u6001\u3002\nreact-helmet \u53ef\u4ee5\u652f\u6301\u4e00\u4e2a onChangeClientState \u6765\u68c0\u6d4b\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u8003\u8651 ",(0,s.jsx)(e.a,{href:"https://usehooks.com/useScript/",children:"useScript"})," \u81ea\u884c\u5c01\u88c5\u4e00\u4e2a\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"iframe",children:"iframe"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:'class A extends React.Component {\n  render() {\n    return <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" />;\n  }\n}\nclass B extends React.Component {\n  render() {\n    return <div dangerouslySetInnerHTML={{ __html: "<iframe src=\'https://www.youtube.com/embed/cWDJoK8zw58\' />" }} />;\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"css-in-js",children:"CSS in JS"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u52a8\u6001\u6ce8\u5165 CSS"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"styled, jsx"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u9884\u5b9a\u4e49 Class"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"tailwind"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"\u52a8\u6001 Class \u6ce8\u5165 CSS"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/tw-in-js/twind",children:"tw-in-js/twind"})}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://blog.replit.com/rui-eng",children:"Implementing RUI, Replit's Design System"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u88ab\u6ce8\u5165-canvas",children:"\u88ab\u6ce8\u5165 canvas"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<html style="overflow:hidden" lang="en">\n  <canvas\n    style="inset: 0px; pointer-events: none; position: fixed; z-index: 1000000000;"\n    width="1920"\n    height="514"\n  ></canvas>\n  <head></head>\n</html>\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7531 React Developer Tools \u6ce8\u5165"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"cannot-assign-to-read-only-property-_status-of-object",children:"Cannot assign to read only property '_status' of object"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u80fd React.lazy \u5bfc\u81f4"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u80fd \u9690\u85cf\u4e86\u5b9e\u9645\u5f02\u5e38"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"typescript-\u7c7b\u578b",children:"Typescript \u7c7b\u578b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"React.JSX.Element"}),"\n",(0,s.jsx)(e.li,{children:"ReactElement"}),"\n",(0,s.jsx)(e.li,{children:"React.Element"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7a7a\u5185\u5bb9",children:"\u7a7a\u5185\u5bb9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["React.Element\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"<React.Fragment />"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"<></>"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["ReactNode\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"false, null, undefined, true"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"typeerror-cannot-read-properties-of-null-reading-useref",children:"TypeError: Cannot read properties of null (reading 'useRef')"})]})}function h(n={}){const{wrapper:e}={...(0,r.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},38088:(n,e,t)=>{var s=t(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,t){var s,l={},d=null,a=null;for(s in void 0!==t&&(d=""+t),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(a=e.ref),e)i.call(e,s)&&!c.hasOwnProperty(s)&&(l[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===l[s]&&(l[s]=e[s]);return{$$typeof:r,type:n,key:d,ref:a,props:l,_owner:o.current}}e.Fragment=l,e.jsx=d,e.jsxs=d},2488:(n,e,t)=>{n.exports=t(38088)},62780:(n,e,t)=>{t.d(e,{I:()=>o,M:()=>i});var s=t(96651);const r={},l=s.createContext(r);function i(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);