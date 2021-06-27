(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{1096:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,f=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},910:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1096)),i={title:"Jotai"},c={unversionedId:"web/react/jotai",id:"web/react/jotai",isDocsHomePage:!1,title:"Jotai",description:"- Jotai \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/web/react/jotai.md",slug:"/web/react/jotai",permalink:"/notes/web/react/jotai",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/jotai.md",version:"current",sidebar:"docs",previous:{title:"React",permalink:"/notes/web/react/react"},next:{title:"React Awesome",permalink:"/notes/web/react/react-awesome"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Jotai \u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6838\u5fc3\u63a5\u53e3 atom, Provider, useAtom",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"jotai/utils \u5305\u542b\u5176\u4ed6\u5de5\u5177 atom"),Object(o.b)("li",{parentName:"ul"},"jotai/\u96c6\u6210 \u5305\u542b\u4e0e\u5176\u4ed6\u5e93\u96c6\u6210\u7684\u903b\u8f91 - zustand, xstate, react-query, redux, immer, valtio"),Object(o.b)("li",{parentName:"ul"},"jotai/devtools - Redux devtool \u96c6\u6210 - ",Object(o.b)("inlineCode",{parentName:"li"},"useAtomDevtools(tasksAtom)")," - \u4f9d\u8d56 debugLabel"))),Object(o.b)("li",{parentName:"ul"},"\u7c7b\u4f3c Recoli \u4f46\u4f7f\u7528\u4e0a\u66f4\u7b80\u5355"),Object(o.b)("li",{parentName:"ul"},"\u66ff\u4ee3 useState+useContext"),Object(o.b)("li",{parentName:"ul"},"Suspense"),Object(o.b)("li",{parentName:"ul"},"vs Recoil",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"jotai: \u6700\u5c0f\u5316\u63a5\u53e3, \u4e0d\u4f7f\u7528\u5b57\u7b26\u4e32\u6807\u8bc6, TypeScript",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Jotai advantages over Recoil ",Object(o.b)("a",{parentName:"li",href:"https://github.com/pmndrs/jotai/issues/420"},"#420")))),Object(o.b)("li",{parentName:"ul"},"recoil: string key, \u5e8f\u5217\u5316\u652f\u6301\u66f4\u597d"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/pmndrs/jotai/blob/master/docs/introduction/comparison.md"},"vs zustand"))))))}p.isMDXComponent=!0}}]);