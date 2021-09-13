"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44097],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},25325:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"React FAQ"},c=void 0,u={unversionedId:"web/react/react-faq",id:"web/react/react-faq",isDocsHomePage:!1,title:"React FAQ",description:"Cannot update a component while rendering a different component",source:"@site/notes/web/react/react-faq.md",sourceDirName:"web/react",slug:"/web/react/react-faq",permalink:"/notes/web/react/react-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-faq.md",tags:[],version:"current",frontMatter:{title:"React FAQ"},sidebar:"docs",previous:{title:"React Awesome",permalink:"/notes/web/react/react-awesome"},next:{title:"React Hook Form",permalink:"/notes/web/react/react-hook-form"}},p=[{value:"Cannot update a component while rendering a different component",id:"cannot-update-a-component-while-rendering-a-different-component",children:[]},{value:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3",id:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3",children:[]},{value:"react-window vs react-virtualized",id:"react-window-vs-react-virtualized",children:[]},{value:"\u52a8\u6001\u52a0\u8f7d script",id:"\u52a8\u6001\u52a0\u8f7d-script",children:[]}],m={toc:p};function s(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cannot-update-a-component-while-rendering-a-different-component"},"Cannot update a component while rendering a different component"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d render \u9636\u6bb5\u4fee\u6539\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/issues/12"},"facebookexperimental/Recoil#12"))))),(0,i.kt)("h2",{id:"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3"},"\u4e0a\u4e0b\u6587\u53d8\u5316\u4f46\u4e0d\u4ece\u65b0\u6e32\u67d3"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u80fd\u591f selector \u7684\u72b6\u6001\u7ba1\u7406\u5e93 - \u5141\u8bb8\u8bfb\u53d6\u90e8\u5206\u72b6\u6001"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u80fd\u533a\u5206 read \u548c write \u7684\u5e93 - \u5141\u8bb8\u72ec\u7acb\u66f4\u65b0")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"},"https://github.com/facebook/react/issues/15156#issuecomment-474590693"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u62c6\u5206\u5927\u5bf9\u8c61\u4e0a\u4e0b\u6587 - \u907f\u514d\u76f4\u63a5\u4fee\u6539",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u533a\u5206\u5e38\u53d8\u5316\u7684\u4e0a\u4e0b\u6587\u548c\u4e0d\u5e38\u53d8\u5316\u7684\u4e0a\u4e0b\u6587"))),(0,i.kt)("li",{parentName:"ul"},"\u62c6\u5206\u7ec4\u4ef6\uff0c\u4f7f\u7528 memo hoc \u7ec4\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u907f\u514d\u4e0d\u5fc5\u8981\u5237\u65b0"))),(0,i.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u7ec4\u4ef6\uff0c\u4f7f\u7528 useMemo \u6784\u5efa\u7ec4\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u903b\u8f91\u6784\u5efa\u4e0d\u5237\u65b0\u7ec4\u4ef6"))),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4e0d\u7528 context \u6765\u4f20\u9012\u6570\u636e\uff0c\u4f7f\u7528\u8ba2\u9605"),(0,i.kt)("li",{parentName:"ul"},"RFC ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/rfcs/pull/119"},"useContextSelector"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/use-context-selector"},"use-context-selector")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/will-this-react-global-state-work-in-concurrent-mode"},"Will this React global state work in Concurrent Mode?"))),(0,i.kt)("h2",{id:"react-window-vs-react-virtualized"},"react-window vs react-virtualized"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ud83d\udca1 \u5982\u4f55\u9009\u62e9")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u7b80\u5355\u573a\u666f\u4f7f\u7528 react-window, \u590d\u6742\u573a\u666f\u4f7f\u7528 react-virtualized"),(0,i.kt)("li",{parentName:"ol"},"\u9762\u5411\u5ba2\u6237\u7aef\uff0c\u5f3a\u8c03\u6027\u80fd\u4f7f\u7528 react-window\uff1b\u540e\u7aef\u5e94\u7528\uff0c\u5f3a\u8c03\u529f\u80fd\u4f7f\u7528 react-virtualized")))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"react-window - min 24k ",(0,i.kt)("img",{parentName:"li",src:"https://badgen.net/bundlephobia/min/react-window",alt:null}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u91cd\u5199 react-virtualized"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u8f7b\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u989d\u5916\u5305\u63d0\u4f9b\u7f3a\u5c11\u7684\u529f\u80fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"7k react-virtualized-auto-sizer"),(0,i.kt)("li",{parentName:"ul"},"3.5k react-window-infinite-loader"))),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u6709 4 \u4e2a\u6838\u5fc3\u7ec4\u4ef6 - \u7b80\u5355\u6613\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u52a8\u6001\u884c\u9ad8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window/issues/6"},"bvaughn/react-window#6"),"\nSupport just-in-time measured content"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u884c\u5b9e\u73b0\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/dynamic-size-of-react-window-list-items-64o9p?file=/src/ChatMessage.js"},"dynamic-size-of-react-window-list-items")))))),(0,i.kt)("li",{parentName:"ul"},"react-virtualized - min 118k ",(0,i.kt)("img",{parentName:"li",src:"https://badgen.net/bundlephobia/min/react-virtualized",alt:null}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u66f4\u5b8c\u5584"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u66f4\u6d3b\u8dc3"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u4eba\u66f4\u591a"),(0,i.kt)("li",{parentName:"ul"},"5 \u4e2a\u6838\u5fc3\u7ec4\u4ef6 + 8 \u4e2a\u5de5\u5177\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 2 \u7ef4 \u975e Grid \u6e32\u67d3"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u52a8\u6001\u884c\u9ad8 CellMeasurer - \u81ea\u5df1\u4e5f\u53ef\u4ee5\u5b9e\u73b0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window#how-is-react-window-different-from-react-virtualized"},"How is react-window different from react-virtualized?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/windowing-wars-react-virtualized-vs-react-window"},"Windowing wars: React-virtualized vs. react-window"))),(0,i.kt)("h2",{id:"\u52a8\u6001\u52a0\u8f7d-script"},"\u52a8\u6001\u52a0\u8f7d script"),(0,i.kt)("p",null,"react-helmet, next/head \u652f\u6301 script \u6807\u7b7e\uff0c\u4f46\u65e0\u6cd5\u68c0\u6d4b\u72b6\u6001\u3002\nreact-helmet \u53ef\u4ee5\u652f\u6301\u4e00\u4e2a onChangeClientState \u6765\u68c0\u6d4b\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u8003\u8651 ",(0,i.kt)("a",{parentName:"p",href:"https://usehooks.com/useScript/"},"useScript")," \u81ea\u884c\u5c01\u88c5\u4e00\u4e2a\u3002"))}s.isMDXComponent=!0}}]);