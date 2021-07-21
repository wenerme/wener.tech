(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||s[m]||a;return n?i.a.createElement(d,l(l({ref:t},u),{},{components:n})):i.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},815:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(8),a=(n(0),n(1151)),o={title:"Vite"},l={unversionedId:"web/build/vite",id:"web/build/vite",isDocsHomePage:!1,title:"Vite",description:"- vitejs/vite \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/web/build/vite.md",slug:"/web/build/vite",permalink:"/notes/web/build/vite",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/build/vite.md",version:"current",sidebar:"docs",previous:{title:"Single SPA",permalink:"/notes/web/arch/single-spa"},next:{title:"Editor Awesome",permalink:"/notes/web/editor/editor-awesome"}},c=[{value:"Vite vs Snowpack",id:"vite-vs-snowpack",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"vitejs/vite")," \u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Dev+Bundle \u5de5\u5177 - No-Bundler - \bBundle \u4e3a ESM \u72ec\u7acb\u6a21\u5757\u800c\u4e0d\u662f\u6574\u4f53 Bundle"),Object(a.b)("li",{parentName:"ul"},"ESBuild+Rollup"),Object(a.b)("li",{parentName:"ul"},"ESM"),Object(a.b)("li",{parentName:"ul"},"KOA"))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://blog.replit.com/vite"},"Why We Switched From Webpack To Vite")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://vitejs.dev/guide/comparisons.html"},"Comparisons with Other No-Bundler Solutions"))))),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"vite-vs-snowpack"},"Vite vs Snowpack"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Vite",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Dev \u548c Bundle \u4f7f\u7528\u76f8\u540c\u7684\u5de5\u5177 - rollup"),Object(a.b)("li",{parentName:"ul"},"\u751f\u6210\u66f4\u5c0f"),Object(a.b)("li",{parentName:"ul"},"\u63d2\u4ef6\u5f00\u53d1\u4f1a\u66f4\u5bb9\u6613"))),Object(a.b)("li",{parentName:"ul"},"Snowpack",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"delegates to plugins using webpack/parcel")))))}b.isMDXComponent=!0}}]);