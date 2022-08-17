"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[319],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,k=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26270:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={tags:["FAQ"]},c="React lib FAQ",u={unversionedId:"web/react/react-lib-faq",id:"web/react/react-lib-faq",title:"React lib FAQ",description:"react-router vs react-location",source:"@site/notes/web/react/react-lib-faq.md",sourceDirName:"web/react",slug:"/web/react/react-lib-faq",permalink:"/notes/web/react/react-lib-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-lib-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"react-jsonschema-form",permalink:"/notes/web/react/react-jsonschema-form"},next:{title:"React Location",permalink:"/notes/web/react/react-location"}},m={},p=[{value:"react-router vs react-location",id:"react-router-vs-react-location",level:2},{value:"Redux vs MobX",id:"redux-vs-mobx",level:2},{value:"react-virtual vs react-window vs react-virtualized",id:"react-virtual-vs-react-window-vs-react-virtualized",level:2}],s={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-lib-faq"},"React lib FAQ"),(0,i.kt)("h2",{id:"react-router-vs-react-location"},"react-router vs react-location"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"react-router",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u66f4\u6210\u719f\uff0c\u529f\u80fd\u66f4\u7a33\u5b9a\uff0c\u5f00\u53d1\u66f4\u6d3b\u8dc3\uff0c\u6587\u6863\u66f4\u5b8c\u5584"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 SSR\uff0cNative"),(0,i.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u529f\u80fd\u5b8c\u5584"),(0,i.kt)("li",{parentName:"ul"},"v6 \u6682\u65e0 prompt"),(0,i.kt)("li",{parentName:"ul"},"useSearchParams",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u81ea\u884c\u5e8f\u5217\u5316"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u57fa\u4e8e\u4e4b\u524d\u72b6\u6001\u66f4\u65b0"))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 useRoutes - \u4f7f\u7528\u6bd4\u8f83\u65b9\u4fbf"),(0,i.kt)("li",{parentName:"ul"},"children \u7edd\u5bf9\u8def\u5f84\u9700\u8981\u5305\u542b parent \u524d\u7f00"))),(0,i.kt)("li",{parentName:"ul"},"react-location",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u66f4\u5c11\uff0c edge case \u53ef\u80fd\u6709\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 CSR - \u4e0d\u652f\u6301 SSR\uff0cNative"),(0,i.kt)("li",{parentName:"ul"},"\u90e8\u5206 react-router \u5185\u7f6e\u529f\u80fd\u901a\u8fc7 plugin \u63d0\u4f9b"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 search \u5904\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u65b0"))),(0,i.kt)("li",{parentName:"ul"},"\u5185\u7f6e loader \u5904\u7406 - element \u5f02\u6b65\u3001\u9884\u5148 load \u6570\u636e\u3001pending \u903b\u8f91"),(0,i.kt)("li",{parentName:"ul"},"Route \u6709 Generic \u7c7b\u578b - \u4f7f\u7528\u8d77\u6765\u66f4\u65b9\u4fbf"),(0,i.kt)("li",{parentName:"ul"},"children \u7edd\u5bf9\u8def\u5f84\u57fa\u4e8e parent"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"react-location ",(0,i.kt)("a",{parentName:"li",href:"https://react-location.tanstack.com/comparison"},"vs. React Router"))))),(0,i.kt)("h2",{id:"redux-vs-mobx"},"Redux vs MobX"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528 MobX"),(0,i.kt)("li",{parentName:"ul"},"Redux \u662f\u4e00\u79cd Pattern - \u4e0d\u4e00\u5b9a\u9700\u8981\u4f7f\u7528 Redux"),(0,i.kt)("li",{parentName:"ul"},"\u5927\u591a\u573a\u666f\u4f7f\u7528 useState, useImmer, zustand \u5373\u53ef")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/885bxa/redux_vs_mobx/"},"https://www.reddit.com/r/reactjs/comments/885bxa/redux_vs_mobx/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"You Might Not Need Redux"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"by Redux Author")))),(0,i.kt)("h2",{id:"react-virtual-vs-react-window-vs-react-virtualized"},"react-virtual vs react-window vs react-virtualized"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ud83d\udca1 \u5982\u4f55\u9009\u62e9")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 react-virtual"),(0,i.kt)("li",{parentName:"ol"},"\u5b9e\u5728\u4e0d\u80fd\u6ee1\u8db3 \u5c1d\u8bd5 react-window \u6216 react-virtualized")))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-virtual"},"tannerlinsley/react-virtual"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e hook"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u6d3b\u8dc3"))),(0,i.kt)("li",{parentName:"ul"},"react-window - min 24k ",(0,i.kt)("img",{parentName:"li",src:"https://badgen.net/bundlephobia/min/react-window",alt:null}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u91cd\u5199 react-virtualized"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u8f7b\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u989d\u5916\u5305\u63d0\u4f9b\u7f3a\u5c11\u7684\u529f\u80fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"7k react-virtualized-auto-sizer"),(0,i.kt)("li",{parentName:"ul"},"3.5k react-window-infinite-loader"))),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u6709 4 \u4e2a\u6838\u5fc3\u7ec4\u4ef6 - \u7b80\u5355\u6613\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u52a8\u6001\u884c\u9ad8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window/issues/6"},"bvaughn/react-window#6"),"\nSupport just-in-time measured content"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u884c\u5b9e\u73b0\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/dynamic-size-of-react-window-list-items-64o9p?file=/src/ChatMessage.js"},"dynamic-size-of-react-window-list-items")))))),(0,i.kt)("li",{parentName:"ul"},"react-virtualized - min 118k ",(0,i.kt)("img",{parentName:"li",src:"https://badgen.net/bundlephobia/min/react-virtualized",alt:null}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u66f4\u5b8c\u5584"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u66f4\u6d3b\u8dc3"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u4eba\u66f4\u591a"),(0,i.kt)("li",{parentName:"ul"},"5 \u4e2a\u6838\u5fc3\u7ec4\u4ef6 + 8 \u4e2a\u5de5\u5177\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 2 \u7ef4 \u975e Grid \u6e32\u67d3"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u52a8\u6001\u884c\u9ad8 CellMeasurer - \u81ea\u5df1\u4e5f\u53ef\u4ee5\u5b9e\u73b0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window#how-is-react-window-different-from-react-virtualized"},"How is react-window different from react-virtualized?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/windowing-wars-react-virtualized-vs-react-window"},"Windowing wars: React-virtualized vs. react-window"))))}d.isMDXComponent=!0}}]);