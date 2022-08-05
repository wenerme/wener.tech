"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44097],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"React FAQ",tags:["FAQ"]},u=void 0,p={unversionedId:"web/react/react-faq",id:"web/react/react-faq",title:"React FAQ",description:"- memo \u7ec4\u4ef6\u4e0d\u80fd\u63a5\u53d7\u4e0d\u4e86 Context \u66f4\u65b0",source:"@site/notes/web/react/react-faq.md",sourceDirName:"web/react",slug:"/web/react/react-faq",permalink:"/notes/web/react/react-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"React FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"react-rnd",permalink:"/notes/web/react/react-dnd"},next:{title:"react-grid-layout",permalink:"/notes/web/react/react-grid-layout"}},s={},c=[{value:"React Pattern",id:"react-pattern",level:2},{value:"React Context",id:"react-context",level:2},{value:"StrictMode",id:"strictmode",level:2},{value:"useEffect \u65e0\u4f9d\u8d56 vs. \u76f4\u63a5\u6267\u884c",id:"useeffect-\u65e0\u4f9d\u8d56-vs-\u76f4\u63a5\u6267\u884c",level:2},{value:"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6",id:"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6",level:2},{value:"class components vs function components",id:"class-components-vs-function-components",level:2},{value:"Cannot update a component while rendering a different component",id:"cannot-update-a-component-while-rendering-a-different-component",level:2},{value:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3",id:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3",level:2},{value:"\u52a8\u6001\u52a0\u8f7d script",id:"\u52a8\u6001\u52a0\u8f7d-script",level:2},{value:"iframe",id:"iframe",level:2},{value:"CSS in JS",id:"css-in-js",level:2},{value:"\u88ab\u6ce8\u5165 canvas",id:"\u88ab\u6ce8\u5165-canvas",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"memo \u7ec4\u4ef6\u4e0d\u80fd\u63a5\u53d7\u4e0d\u4e86 Context \u66f4\u65b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RFC ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/reactjs/rfcs/pull/119"},"useContextSelector")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/use-context-selector"},"use-context-selector"))))))),(0,l.kt)("h2",{id:"react-pattern"},"React Pattern"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"innerRef, elementRef, forwardRef \u900f\u4f20\u5185\u90e8\u5f15\u7528")),(0,l.kt)("h2",{id:"react-context"},"React Context"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Context.Provider value \u4fee\u6539\u9700\u8981 rerender \u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c Provider \u90fd\u5728\u6bd4\u8f83\u4e0a\u5c42\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u6709\u6027\u80fd\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0d\u4f1a\u53d8\u7684 value",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5c06\u72b6\u6001\u5185\u5bb9\u4f5c\u4e3a value"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u4f7f\u7528 rxjs BehaviorSubject \u4f5c\u4e3a value \u5219\u53ef\u4ee5\u907f\u514d\u53d8\u5316\uff0c\u4e5f\u80fd\u8ba2\u9605\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 zustand \u66ff\u4ee3")))),(0,l.kt)("h2",{id:"strictmode"},"StrictMode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 dev \u65f6\u6e32\u67d3\u4e24\u6b21\u6765\u68c0\u6d4b\u6f5c\u5728\u95ee\u9898 - Detecting unexpected side effects",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"constructor"),(0,l.kt)("li",{parentName:"ul"},"componentWillMount (or UNSAFE_componentWillMount)"),(0,l.kt)("li",{parentName:"ul"},"componentWillReceiveProps (or UNSAFE_componentWillReceiveProps)"),(0,l.kt)("li",{parentName:"ul"},"componentWillUpdate (or UNSAFE_componentWillUpdate)"),(0,l.kt)("li",{parentName:"ul"},"getDerivedStateFromProps"),(0,l.kt)("li",{parentName:"ul"},"shouldComponentUpdate"),(0,l.kt)("li",{parentName:"ul"},"render"),(0,l.kt)("li",{parentName:"ul"},"setState"))),(0,l.kt)("li",{parentName:"ul"},"Ensuring reusable state - \u6a21\u62df umount\u3001remount",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"componentDidMount"),(0,l.kt)("li",{parentName:"ul"},"componentWillUnmount"),(0,l.kt)("li",{parentName:"ul"},"useEffect"),(0,l.kt)("li",{parentName:"ul"},"useLayoutEffect"),(0,l.kt)("li",{parentName:"ul"},"useInsertionEffect")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/strict-mode.html"},"https://reactjs.org/docs/strict-mode.html"))),(0,l.kt)("h2",{id:"useeffect-\u65e0\u4f9d\u8d56-vs-\u76f4\u63a5\u6267\u884c"},"useEffect \u65e0\u4f9d\u8d56 vs. \u76f4\u63a5\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const callbackRef = useRef(callback);\n\n// 1. useEffect\nuseEffect(() => {\n  callbackRef.current = callback;\n});\n\n// 2. \u76f4\u63a5\u8d4b\u503c\ncallbackRef.current = callback;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u65f6\u673a\u4e0d\u540c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"useEffect \u548c\u5176\u4ed6 useEffect \u662f\u987a\u5e8f\u6267\u884c\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u4f1a\u5ef6\u8fdf\u6267\u884c"))),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8d4b\u503c\u4f1a\u5728\u6700\u5f00\u59cb\u6267\u884c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u7136\u4f1a\u6267\u884c")))))),(0,l.kt)("h2",{id:"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6"},"\u5982\u4f55\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6"),(0,l.kt)("p",null,"\u6700\u65e9\u7684 React \u5f00\u53d1\u4e00\u822c\u4f7f\u7528 CRA\uff0c\u4f46 CRA \u57fa\u4e8e webpack\uff0c\u5f02\u5e38\u7684\u6162\uff0c\u5728 2021 \u5e74\u4e0d\u518d\u503c\u5f97\u4f7f\u7528\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4f9d\u636e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5355\u9875\u9762 - vite, nextjs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u590d\u6742\u524d\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u6a21\u5757 - systemjs, dynamic import, esm"))),(0,l.kt)("li",{parentName:"ul"},"\u591a\u9875\u9762 - vite, nextjs, remix",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u9875\u9762 export"))),(0,l.kt)("li",{parentName:"ul"},"\u5355 HTML \u5165\u53e3 vs. \u591a HTML \u5165\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"vitejs \u652f\u6301 \u591a HTMl \u5165\u53e3"),(0,l.kt)("li",{parentName:"ul"},"nextjs \u53ea\u652f\u6301 \u5355 HTML \u5165\u53e3"))),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 SEO/SSR - nextjs, remix"),(0,l.kt)("li",{parentName:"ul"},"\u5168\u6808 - nextjs, remix"),(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u63a7\u5236 - SPA - vite"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u63a7\u5236 - nextjs, remix"))),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7ad9\u5185\u5bb9\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u540e\u53f0 - \u5355\u9875\u3001\u590d\u6742\u3001CS \u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},"\u8425\u9500 - SEO\u3001\u9759\u6001\u3001\u589e\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u7535\u5546 - \u6570\u636e\u3001SEO\u3001\u9759\u6001"))),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001 - \u9700\u8981\u5bfc\u51fa"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001 - \u542f\u52a8\u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72 NodeJS \u4f1a\u6bd4\u8f83\u9ebb\u70e6 - node_modules \u5f88\u5927"))),(0,l.kt)("li",{parentName:"ul"},"Serverless"))))),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728 CS \u6df7\u5408\u6e32\u67d3\u8d8a\u6765\u8d8a\u591a\uff0c\u503c\u5f97\u5c1d\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"React Server Components \u4e5f\u662f\u4e00\u4e2a\u8d8b\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u5efa\u7ea7\u52a8\u6001")))),(0,l.kt)("h2",{id:"class-components-vs-function-components"},"class components vs function components"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="React.Component"',title:'"React.Component"'},"import React from 'react';\n\nclass Hello extends React.Component<{name: string}, {name: string}> {\n  static props = {\n    name: 'Wener',\n  };\n\n  static getDerivedStateFromProps({name}) {\n    return {name};\n  }\n\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return <h1>Hello, {this.state.name}</h1>;\n  }\n\n  componentDidMount() {\n    console.debug(`componentDidMount`);\n  }\n\n  getSnapshotBeforeUpdate(prevProps: Readonly<{name: string}>, prevState: Readonly<{name: string}>): any {\n    return {};\n  }\n\n  componentDidUpdate(prevProps: Readonly<{name: string}>, prevState: Readonly<{name: string}>, snapshot?: any) {\n    console.debug(`componentDidUpdate`);\n  }\n\n  componentWillUnmount() {\n    console.debug(`componentWillUnmount`);\n  }\n\n  shouldComponentUpdate(\n    nextProps: Readonly<{name: string}>,\n    nextState: Readonly<{name: string}>,\n    nextContext: any,\n  ): boolean {\n    return false;\n  }\n\n  /**\n   * ErrorBoundary - \u4ec5 ClassComponent \u652f\u6301\n   */\n  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {\n    console.log(`componentDidCatch`);\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="React.FC"',title:'"React.FC"'},"const HelloFC: React.FC<{name: string}> = ({name}) => {\n  const [state, setState] = useState({name});\n  // getDerivedStateFromProps\n  useEffect(() => {\n    setState({name});\n  }, [name]);\n  useEffect(() => {\n    console.debug('componentDidMount');\n    return () => {\n      console.debug('componentWillUnmount');\n    };\n  }, []);\n\n  // render\n  return (\n    <h1>\n      Hello, <input value={state.name} onChange={(e) => setState({name: e.target.name})} />\n    </h1>\n  );\n};\nHelloFC.displayName = 'HelloFC';\nHelloFC.defaultProps = {name: 'Wener'};\n\nconst HelloMemo = React.memo(HelloFC, (a, b) => {\n  // shouldComponentUpdate\n  return a.name === b.name;\n});\n")),(0,l.kt)("h2",{id:"cannot-update-a-component-while-rendering-a-different-component"},"Cannot update a component while rendering a different component"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d render \u9636\u6bb5\u4fee\u6539\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/issues/12"},"facebookexperimental/Recoil#12"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// from\nif (storeRef.current && !isEqual(preloadRef.current, props)) {\n  console.debug(`DashboardStoreProvider: update preload`);\n  preloadRef.current = props;\n  storeRef.current.setState(props as any);\n}\n\n// to\nuseDeepCompareEffect(() => {\n  if (storeRef.current) {\n    storeRef.current.setState(props as any);\n  }\n}, [props]);\n")),(0,l.kt)("h2",{id:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3"},"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3"),(0,l.kt)("ol",{start:0},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u80fd\u591f selector \u7684\u72b6\u6001\u7ba1\u7406\u5e93 - \u5141\u8bb8\u8bfb\u53d6\u90e8\u5206\u72b6\u6001"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u80fd\u533a\u5206 read \u548c write \u7684\u5e93 - \u5141\u8bb8\u72ec\u7acb\u66f4\u65b0")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"},"Preventing rerenders with React.memo and useContext hook"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u62c6\u5206\u5927\u5bf9\u8c61\u4e0a\u4e0b\u6587 - \u907f\u514d\u76f4\u63a5\u4fee\u6539",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u533a\u5206\u5e38\u53d8\u5316\u7684\u4e0a\u4e0b\u6587\u548c\u4e0d\u5e38\u53d8\u5316\u7684\u4e0a\u4e0b\u6587"))),(0,l.kt)("li",{parentName:"ul"},"\u62c6\u5206\u7ec4\u4ef6\uff0c\u4f7f\u7528 memo hoc \u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u907f\u514d\u4e0d\u5fc5\u8981\u5237\u65b0"))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u7ec4\u4ef6\uff0c\u4f7f\u7528 useMemo \u6784\u5efa\u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u903b\u8f91\u6784\u5efa\u4e0d\u5237\u65b0\u7ec4\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4e0d\u7528 context \u6765\u4f20\u9012\u6570\u636e\uff0c\u4f7f\u7528\u8ba2\u9605"),(0,l.kt)("li",{parentName:"ul"},"RFC ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/reactjs/rfcs/pull/119"},"useContextSelector"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/use-context-selector"},"use-context-selector")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/will-this-react-global-state-work-in-concurrent-mode"},"Will this React global state work in Concurrent Mode?"))),(0,l.kt)("h2",{id:"\u52a8\u6001\u52a0\u8f7d-script"},"\u52a8\u6001\u52a0\u8f7d script"),(0,l.kt)("p",null,"react-helmet, next/head \u652f\u6301 script \u6807\u7b7e\uff0c\u4f46\u65e0\u6cd5\u68c0\u6d4b\u72b6\u6001\u3002\nreact-helmet \u53ef\u4ee5\u652f\u6301\u4e00\u4e2a onChangeClientState \u6765\u68c0\u6d4b\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8003\u8651 ",(0,l.kt)("a",{parentName:"p",href:"https://usehooks.com/useScript/"},"useScript")," \u81ea\u884c\u5c01\u88c5\u4e00\u4e2a\u3002"),(0,l.kt)("h2",{id:"iframe"},"iframe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'class A extends React.Component {\n  render() {\n    return <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" />;\n  }\n}\nclass B extends React.Component {\n  render() {\n    return <div dangerouslySetInnerHTML={{__html: "<iframe src=\'https://www.youtube.com/embed/cWDJoK8zw58\' />"}} />;\n  }\n}\n')),(0,l.kt)("h2",{id:"css-in-js"},"CSS in JS"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u52a8\u6001\u6ce8\u5165 CSS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"styled, jsx")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u9884\u5b9a\u4e49 Class")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tailwind")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u52a8\u6001 Class \u6ce8\u5165 CSS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tw-in-js/twind"},"tw-in-js/twind"))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.replit.com/rui-eng"},"Implementing RUI, Replit's Design System"))),(0,l.kt)("h2",{id:"\u88ab\u6ce8\u5165-canvas"},"\u88ab\u6ce8\u5165 canvas"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<html style="overflow:hidden" lang="en">\n  <canvas\n    style="inset: 0px; pointer-events: none; position: fixed; z-index: 1000000000;"\n    width="1920"\n    height="514"\n  ></canvas>\n  <head></head>\n</html>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7531 React Developer Tools \u6ce8\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u81f4\u9875\u9762\u65e0\u6cd5\u6eda\u52a8")))}k.isMDXComponent=!0}}]);