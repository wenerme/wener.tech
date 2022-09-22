"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64564],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),b=a,d=m["".concat(l,".").concat(b)]||m[b]||s[b]||o;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),u=["components"],i={title:"bun"},l="bun",c={unversionedId:"web/dev/bun",id:"web/dev/bun",title:"bun",description:"- Jarred-Sumner/bun",source:"@site/../notes/web/dev/bun.md",sourceDirName:"web/dev",slug:"/web/dev/bun",permalink:"/notes/web/dev/bun",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/dev/bun.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"bun"},sidebar:"docs",previous:{title:"MasterGo",permalink:"/notes/web/design/mastergo"},next:{title:"ESBuild",permalink:"/notes/web/dev/bundle/esbuild"}},p={},s=[],m={toc:s};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bun"},"bun"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jarred-Sumner/bun"},"Jarred-Sumner/bun"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MIT, Zig"),(0,o.kt)("li",{parentName:"ul"},"JavaScriptCore,tinycc,libiconv LGPLv2"),(0,o.kt)("li",{parentName:"ul"},"boringssl,libarchive,libiconv,lol-html,mimalloc,picohttp,tinycc,uSockets,zlib-cloudflare,libicu,uWebsockets")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"musl \u652f\u6301 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jarred-Sumner/bun/issues/255"},"bun#255")),(0,o.kt)("li",{parentName:"ul"},"deploy ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jarred-Sumner/bun/issues/211"},"bun#211")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"bun \u5d4c\u5165\u4e86 tinycc\uff0c\u6709 jit \u80fd\u529b\uff0c\u56e0\u6b64 ffi \u6548\u7387\u975e\u5e38\u9ad8"),(0,o.kt)("li",{parentName:"ul"},"bun \u8fd8\u5904\u4e8e\u975e\u5e38\u65e9\u671f\u5f00\u53d1\u9636\u6bb5 - not prodution ready"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JavaScriptCore - \u5404\u6709\u4f18\u7f3a\u70b9"),(0,o.kt)("li",{parentName:"ul"},"bun \u4e00\u4e9b\u70b9\u7684\u6027\u80fd\u5f88\u597d\uff0c\u4f46\u6574\u4f53\u5e94\u7528\u6027\u80fd\u6bd4\u4e0d\u4e0a node"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://ghproxy.com/https://github.com/Jarred-Sumner/bun/releases/download/bun-v0.1.9/bun-darwin-x64.zip\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {viewSource} from 'bun:ffi';\n\n// \u751f\u6210\u7684 C \u4ee3\u7801\nconsole.log(\n  viewSource(\n    {\n      hello_world: {\n        returns: 'float',\n        args: ['float'],\n      },\n    },\n    false,\n  )[0],\n);\n")))}b.isMDXComponent=!0}}]);