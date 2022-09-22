"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58464],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90510:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(96600),l=r(27279),a=(r(59496),r(49613)),i=["components"],o={title:"Parcel"},c="Parcel",u={unversionedId:"web/dev/bundle/parcel",id:"web/dev/bundle/parcel",title:"Parcel",description:"- Parcel v2 - 2021/10/13",source:"@site/../notes/web/dev/bundle/parcel.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/parcel",permalink:"/notes/web/dev/bundle/parcel",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/dev/bundle/parcel.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Parcel"},sidebar:"docs",previous:{title:"ESBuild",permalink:"/notes/web/dev/bundle/esbuild"},next:{title:"Rollup Awesome",permalink:"/notes/web/dev/bundle/rollup-awesome"}},p={},s=[{value:"Get Started",id:"get-started",level:2},{value:"Parcel v2 vs Vite",id:"parcel-v2-vs-vite",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parcel"},"Parcel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parcel v2 - 2021/10/13")),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\ncat << HTML > index.html\n<html>\n<body>\n  <script src=\"./src/index.ts\"><\/script>\n</body>\n</html>\nHTML\nmkdir -p src\ncat << TS > src/index.ts\nexport {};\nconsole.log('hello world');\nTS\n\nyarn add parcel-bundler --dev\n\n# dev\nyarn parcel index.html\n")),(0,a.kt)("h2",{id:"parcel-v2-vs-vite"},"Parcel v2 vs Vite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vite",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"unbundled dev server"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Rollup \u548c esbuild"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 SSR"))),(0,a.kt)("li",{parentName:"ul"},"Parcel v2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Parcel & CSS compiler \u4f7f\u7528 Rust")))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite/discussions/5290"},"https://github.com/vitejs/vite/discussions/5290"))))}m.isMDXComponent=!0}}]);