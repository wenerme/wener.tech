"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99077],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,w=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(w,o(o({ref:t},l),{},{components:r})):n.createElement(w,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94362:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],u={title:"tauri"},c="tauri",p={unversionedId:"web/framework/tauri",id:"web/framework/tauri",title:"tauri",description:"- tauri-apps/tauri",source:"@site/../notes/web/framework/tauri.md",sourceDirName:"web/framework",slug:"/web/framework/tauri",permalink:"/notes/web/framework/tauri",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/framework/tauri.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"tauri"},sidebar:"docs",previous:{title:"svelte",permalink:"/notes/web/framework/svelte"},next:{title:"Vue",permalink:"/notes/web/framework/vue"}},l={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tauri"},"tauri"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tauri-apps/tauri"},"tauri-apps/tauri"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 \u591a WebView - core+WebView \u8fdb\u7a0b"),(0,i.kt)("li",{parentName:"ul"},"IPC \u8d70 core \u8fdb\u7a0b\u8def\u7531 - \u5168\u5c40\u72b6\u6001\u5e94\u8be5\u5728 core \u8fdb\u7a0b\u7ef4\u62a4"))),(0,i.kt)("li",{parentName:"ul"},"Windows WebView2"),(0,i.kt)("li",{parentName:"ul"},"macOS 10.13+ WKWebView"),(0,i.kt)("li",{parentName:"ul"},"Linux webkitgtk")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7c7b\u4f3c Electron \u53e0\u52a0 BrowserView/webview ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tauri-apps/tauri/issues/2709"},"#2709")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# {x86_64,aarch64,universal}-apple-darwin\n# i686-pc-windows-msvc\ntauri build --target x86_64-apple-darwin\n\n# 32bit windows\n# rustup target add i686-pc-windows-msvc\nrustup target list\nrustc --version\n")))}f.isMDXComponent=!0}}]);