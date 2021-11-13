"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[72460],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34111:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Chrome FAQ"},c=void 0,s={unversionedId:"web/browser/chrome-faq",id:"web/browser/chrome-faq",isDocsHomePage:!1,title:"Chrome FAQ",description:"\u79bb\u7ebf\u5b89\u88c5\u4e0b\u8f7d",source:"@site/notes/web/browser/chrome-faq.md",sourceDirName:"web/browser",slug:"/web/browser/chrome-faq",permalink:"/notes/web/browser/chrome-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/browser/chrome-faq.md",tags:[],version:"current",frontMatter:{title:"Chrome FAQ"},sidebar:"docs",previous:{title:"Chrome Extension",permalink:"/notes/web/browser/chrome-extension"},next:{title:"ESBuild",permalink:"/notes/web/dev/esbuild"}},u=[{value:"\u79bb\u7ebf\u5b89\u88c5\u4e0b\u8f7d",id:"\u79bb\u7ebf\u5b89\u88c5\u4e0b\u8f7d",children:[]},{value:"\u8bc1\u4e66\u9519\u8bef\u7ee7\u7eed\u8bbf\u95ee",id:"\u8bc1\u4e66\u9519\u8bef\u7ee7\u7eed\u8bbf\u95ee",children:[]},{value:"\u53d6\u6d88\u6240\u6709 service worker \u6ce8\u518c",id:"\u53d6\u6d88\u6240\u6709-service-worker-\u6ce8\u518c",children:[]}],p={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u79bb\u7ebf\u5b89\u88c5\u4e0b\u8f7d"},"\u79bb\u7ebf\u5b89\u88c5\u4e0b\u8f7d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.google.com/intl/en/chrome/?standalone=1"},"https://www.google.com/intl/en/chrome/?standalone=1"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# ChromeStandaloneSetup64.exe\n# https://dl.google.com/tag/s/appguid={8A69D345-D564-463C-AFF1-A69D9E530F96}&iid={E3751212-181B-0E06-8D37-4EC9E8CE331E}&lang=en&browser=4&usagestats=0&appname=Google%20Chrome&needsadmin=prefers&ap=x64-stable-statsdef_1&installdataindex=defaultbrowser/chrome/install/ChromeStandaloneSetup64.exe\n\n# googlechrome.dmg\ncurl -LOJC- https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg\n")),(0,a.kt)("h2",{id:"\u8bc1\u4e66\u9519\u8bef\u7ee7\u7eed\u8bbf\u95ee"},"\u8bc1\u4e66\u9519\u8bef\u7ee7\u7eed\u8bbf\u95ee"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9875\u9762\u5185\u8f93\u5165 - ",(0,a.kt)("inlineCode",{parentName:"li"},"thisisunsafe")),(0,a.kt)("li",{parentName:"ol"},"\u63a7\u5236\u53f0\u6267\u884c - ",(0,a.kt)("inlineCode",{parentName:"li"},"sendCommand(SecurityInterstitialCommandId.CMD_PROCEED)"))),(0,a.kt)("h2",{id:"\u53d6\u6d88\u6240\u6709-service-worker-\u6ce8\u518c"},"\u53d6\u6d88\u6240\u6709 service worker \u6ce8\u518c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chrome://serviceworker-internals")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$$('.unregister').forEach((b) => b.click());\n")))}m.isMDXComponent=!0}}]);