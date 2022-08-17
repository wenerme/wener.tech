"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7103],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,v=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(v,s(s({ref:e},u),{},{components:n})):a.createElement(v,s({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15426:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"valtio"},l=void 0,p={unversionedId:"web/react/valtio",id:"web/react/valtio",title:"valtio",description:"- pmndrs/valtio",source:"@site/notes/web/react/valtio.md",sourceDirName:"web/react",slug:"/web/react/valtio",permalink:"/notes/web/react/valtio",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/valtio.md",tags:[],version:"current",frontMatter:{title:"valtio"},sidebar:"docs",previous:{title:"uniforms",permalink:"/notes/web/react/uniforms"},next:{title:"zustand",permalink:"/notes/web/react/zustand"}},u={},c=[{value:"Context",id:"context",level:2},{value:"yjs",id:"yjs",level:2},{value:"useProxy marco",id:"useproxy-marco",level:2},{value:"&#39;set&#39; on proxy: trap returned falsish for property &#39;validated&#39;",id:"set-on-proxy-trap-returned-falsish-for-property-validated",level:2}],m={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/valtio"},"pmndrs/valtio"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"7kB/2.5kB - use-sync-external-store+proxy-compare"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e proxy \u7684\u72b6\u6001\u7ba1\u7406"),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c mobx, vue"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u72b6\u6001\u53d8\u5316\u662f\u5f02\u6b65\u89e6\u53d1\u76d1\u542c"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 Class \u4f5c\u4e3a \u88ab\u4ee3\u7406\u5bf9\u8c61"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/eslint-plugin-valtio"},"pmndrs/eslint-plugin-valtio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/proxy-memoize"},"dai-shi/proxy-memoize")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/valtio-yjs"},"dai-shi/valtio-yjs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Noitidart/valtio-persist"},"Noitidart/valtio-persist")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/valtio/wiki/How-valtio-works"},"How valtio works")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/valtio-render-test-lzqhf7"},"valtio-render-test"))))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u5927\u72b6\u6001\u597d\u62c6\u5206\u5408\u5e76"),(0,o.kt)("li",{parentName:"ul"},"\u88ab proxy \u5bf9\u8c61\u90fd\u9700\u8981\u901a\u8fc7 snaoshot \u7684\u65b9\u5f0f\u8bfb\u53d6\u6570\u636e - \u6240\u4ee5\u624d\u53ef\u4ee5\u76d1\u542c\u5d4c\u5957\u5bf9\u8c61\u7684\u53d8\u5316",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"snaoshot \u8fd4\u56de\u7684\u662f \u4e0d\u53ef\u53d8 \u5bf9\u8c61"))),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4f1a\u8fdb\u884c batch - input \u65f6 useSnapshot \u53ef\u80fd\u9700\u8981\u52a0 sync"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u503c\u9700\u8981\u7279\u6b8a\u5904\u7406"),(0,o.kt)("li",{parentName:"ul"},"ref/object \u8d4b\u503c\u90fd\u4f1a\u89e6\u53d1\u53d8\u5316\uff0c\u4e0d\u4f1a\u5224\u65ad\u662f\u5426\u76f8\u7b49")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"support async in watch ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/valtio/issues/507"},"#507"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {proxy, useSnapshot, ref, subscribe, snapshot} from 'valtio';\n\n// \u4e0d\u4f9d\u8d56 react\nimport {proxy, subscribe, snapshot} from 'valtio/vanilla';\n\nimport {\n  subscribeKey,\n  watch,\n  devtools,\n  derive,\n  underive,\n  proxyWithComputed,\n  proxyWithHistory,\n  proxySet,\n  proxyMap,\n  getVersion,\n} from 'valtio/utils';\n\n// \u56e0\u4e3a\u57fa\u4e8e proxy - \u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u62c6\u5206\u5408\u5e76\nconst state = proxy({\n  a: {v: 1},\n  b: {v: 2},\n});\n// \u62c6\u5206\nconst a = state.a;\n// \u5408\u5e76\nconst s = proxy({\n  obj1: a,\n  obj2: {v: 3},\n});\n\n// \u53ef\u5728\u4efb\u610f\u5730\u65b9\u8ba2\u9605\u53d8\u5316\nconst unsubscribe = subscribe(state, () => console.log('changed to', state));\n// \u8ba2\u9605\u90e8\u5206\u5bf9\u8c61\nconst unsubscribe = subscribe(state.a, () => console.log('changed to', state));\n// \u8ba2\u9605 primitive value\nconst unsubscribe = subscribeKey(state, 'a.v', () => console.log('changed to', state));\n\n// \u57fa\u4e8e\u4f7f\u7528\u8ba2\u9605\nconst stop = watch((get) => {\n  console.log('state has changed to', get(state)); // auto-subscribe on use\n});\n\n// React \u7ec4\u4ef6\u5185\u4f7f\u7528 snapshot \u8ba2\u9605\u53d8\u5316\nconst Counter = () => {\n  const snap = useSnapshot(state);\n  // \u76f4\u63a5\u8bfb\u72b6\u6001\uff0c\u4e0d\u8ba2\u9605\n  const {count} = state;\n  return (\n    <div>\n      {/* \u8ba2\u9605 count \u53d8\u5316 */}\n      {snap.count}\n      <button\n        onClick={() => {\n          // \u64cd\u4f5c state \u8fdb\u884c\u76f4\u63a5\u4fee\u6539\n          ++state.count;\n        }}\n      >\n        +1\n      </button>\n    </div>\n  );\n};\n\nfunction TextBox() {\n  // \u4fee\u6539\u9ed8\u8ba4\u4f1a batch - sync \u5219\u907f\u514d batch\n  // https://github.com/pmndrs/valtio/issues/270\n  const snap = useSnapshot(state, {sync: true});\n  return <input value={snap.text} onChange={(e) => (state.text = e.target.value)} />;\n}\n\n// useSnapshot \u65f6\u5019\u4f1a Suspense\nconst state = proxy({post: fetch(url).then((res) => res.json())});\n\n// \u7279\u6b8a\u503c - ref \u4e0d\u8ddf\u8e2a\nconst state = proxy({\n  count: 0,\n  // ref \u4e0d\u8ddf\u8e2a\n  dom: ref(document.body),\n});\n// Set \u63a5\u53e3\nconst state = proxySet([1, 2, 3]);\n// Map \u63a5\u53e3\nconst state = proxyMap([\n  ['key', 'value'],\n  ['key2', 'value2'],\n]);\n\n// derive - \u8ba1\u7b97\u72b6\u6001\nconst derived = derive({\n  doubled: (get) => get(state).count * 2,\n});\n\n// alternatively, attach derived properties to an existing proxy\nderive(\n  {\n    tripled: (get) => get(state).count * 3,\n  },\n  {\n    proxy: state,\n  },\n);\n\n// \u8ba1\u7b97\u72b6\u6001\nimport memoize from 'proxy-memoize';\nimport {proxyWithComputed} from 'valtio/utils';\n\nconst state = proxyWithComputed(\n  {\n    count: 1,\n    firstName: 'Alec',\n    lastName: 'Baldwin',\n  },\n  {\n    doubled: memoize((snap) => snap.count * 2),\n    // \u5305\u542b setter\u3001getter\n    fullName: {\n      get: memoize((snap) => snap.firstName + ' ' + snap.lastName),\n      set: (state, newValue) => {\n        [state.firstName, state.lastName] = newValue.split(' ');\n      },\n    },\n  },\n);\n\n// state \u652f\u6301 undo\u3001redo\nconst state = proxyWithHistory({count: 0});\n\n// Redux DevTool\nconst unsub = devtools(state, {name: 'state name', enabled: true});\n\n// \u66f4\u677e\u6563\u7684 \u7c7b\u578b - \u9ed8\u8ba4 readtonly T\ndeclare module 'valtio' {\n  function useSnapshot<T extends object>(p: T): T;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import {proxy} from 'valtio/vanilla'")," - \u8ddf\u8e2a\u4fee\u6539 \u5199\u5165"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import {createProxy} from 'proxy-compare'")," - \u8ddf\u8e2a\u4f7f\u7528 \u8bfb\u53d6"),(0,o.kt)("li",{parentName:"ul"},"snapshot - \u521b\u5efa\u4e0d\u53ef\u53d8\u5bf9\u8c61",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u672a resolve \u503c\u4f1a throw error"))),(0,o.kt)("li",{parentName:"ul"},"useSnapshot - \u5c01\u88c5 snapshot \u7ed3\u679c\uff0c\u914d\u5408 createProxy \u8ddf\u8e2a\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u90e8\u4f7f\u7528\u7248\u672c\u53f7\u8ddf\u8e2a\u53d8\u5316"),(0,o.kt)("li",{parentName:"ul"},"React.memo \u65e0\u6cd5\u5904\u7406\u4ee3\u7406\u5bf9\u8c61",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 react-tracked \u91cc\u7684 memo"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528 useSnapshot \u8bfb\u53d6\u4f20\u5165\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8bfb\u53d6\u539f\u59cb\u503c\u8fdb\u884c\u4f20\u9012")))),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {createContext, useContext} from 'react';\nimport {proxy, useSnapshot} from 'valtio';\nconst MyContext = createContext();\n\nconst MyProvider = ({children}) => {\n  const state = useRef(proxy({count: 0})).current;\n  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;\n};\n\nconst MyCounter = () => {\n  const state = useContext(MyContext);\n  const snap = useSnapshot(state);\n  return (\n    <>\n      {snap.count} <button onClick={() => ++state.count}>+1</button>\n    </>\n  );\n};\n")),(0,o.kt)("h2",{id:"yjs"},"yjs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as Y from 'yjs';\nimport {proxy} from 'valtio';\nimport {bindProxyAndYMap} from 'valtio-yjs';\n\nconst ydoc = new Y.Doc();\nconst ymap = ydoc.getMap('mymap');\n\nconst state = proxy({});\n\nbindProxyAndYMap(state, ymap);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/valtio-yjs"},"dai-shi/valtio-yjs"))),(0,o.kt)("h2",{id:"useproxy-marco"},"useProxy marco"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {useProxy} from 'valtio/macro';\n// useProxy \u4f1a\u53d8\u6210 useSnapshot\n// read state \u7684\u5730\u65b9\u4f1a\u53d8\u5473 snapshot\nconst Component = () => {\n  useProxy(state);\n  return (\n    <div>\n      {state.count}\n      <button onClick={() => ++state.count}>+1</button>\n    </div>\n  );\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-macros"},"babel-plugin-macros"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev aslemammad-vite-plugin-macro babel-plugin-macros\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="vite.config.js"',title:'"vite.config.js"'},"import {defineConfig} from 'vite';\nimport macro from 'valtio/macro/vite';\n\nexport default defineConfig({\n  plugins: [macro],\n});\n")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"set-on-proxy-trap-returned-falsish-for-property-validated"},"'set' on proxy: trap returned falsish for property 'validated'"),(0,o.kt)("p",null,"\u5c1d\u8bd5\u4fee\u6539 snapshot \u8fd4\u56de\u503c"))}d.isMDXComponent=!0}}]);