"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30718],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1290:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Web Spec"},c=void 0,p={unversionedId:"web/spec/web-spec",id:"web/spec/web-spec",title:"Web Spec",description:"container-query",source:"@site/notes/web/spec/web-spec.md",sourceDirName:"web/spec",slug:"/web/spec/web-spec",permalink:"/notes/web/spec/web-spec",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/spec/web-spec.md",tags:[],version:"current",frontMatter:{title:"Web Spec"},sidebar:"docs",previous:{title:"Web Spec Awesome",permalink:"/notes/web/spec/web-spec-awesome"},next:{title:"WebStorage",permalink:"/notes/web/spec/web-storage"}},u={},s=[{value:"container-query",id:"container-query",level:2},{value:"structuredClone",id:"structuredclone",level:2},{value:"EyeDropper API",id:"eyedropper-api",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"container-query"},"container-query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const supportsContainerQueries = 'container' in document.documentElement.style;\nif (!supportsContainerQueries) {\n  import('container-query-polyfill');\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@container (min-width: 200px) {\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://caniuse.com/css-container-queries"},"https://caniuse.com/css-container-queries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/container-query-polyfill"},"GoogleChromeLabs/container-query-polyfill"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u518d\u7ef4\u62a4\uff0c\u5efa\u8bae\u8fd8\u662f\u7b49\u5f85\u4f7f\u7528\u65b0\u7248\u6d4f\u89c8\u5668"),(0,a.kt)("li",{parentName:"ul"},"MutationObserver+ResizeObserver+",(0,a.kt)("inlineCode",{parentName:"li"},":is")),(0,a.kt)("li",{parentName:"ul"},"Chrome/Edge 88+, Firefox 78+, Safari 14+")))),(0,a.kt)("h2",{id:"structuredclone"},"structuredClone"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chrome 98+"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Map, Set, Date, RegExp, ArrayBuffer"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 \u5faa\u73af\u5f15\u7528")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const structuredClone = globalThis.structuredClone ?? (v)=>JSON.parse(JSON.stringify(v))\n")),(0,a.kt)("h2",{id:"eyedropper-api"},"EyeDropper API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function sampleColorFromScreen(abortController) {\n  if ('EyeDropper' in window) {\n    return;\n  }\n  const eyeDropper = new EyeDropper();\n  try {\n    const result = await eyeDropper.open({ signal: abortController.signal });\n    return result.sRGBHex;\n  } catch (e) {\n    return null;\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://web.dev/eyedropper/"},"https://web.dev/eyedropper/"))))}f.isMDXComponent=!0}}]);