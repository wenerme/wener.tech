"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58464],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=l,b=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19824:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return v}});var n=r(49613),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e};const d={title:"Parcel"},f="Parcel",b={unversionedId:"web/dev/bundle/parcel",id:"web/dev/bundle/parcel",title:"Parcel",description:"- Parcel v2 - 2021/10/13",source:"@site/../notes/web/dev/bundle/parcel.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/parcel",permalink:"/notes/web/dev/bundle/parcel",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/bundle/parcel.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1654595483,formattedLastUpdatedAt:"Jun 7, 2022",frontMatter:{title:"Parcel"},sidebar:"docs",previous:{title:"ncc",permalink:"/notes/web/dev/bundle/ncc"},next:{title:"Rollup Awesome",permalink:"/notes/web/dev/bundle/rollup-awesome"}},m={},v=[{value:"Get Started",id:"get-started",level:2},{value:"Parcel v2 vs Vite",id:"parcel-v2-vs-vite",level:2}],y={toc:v};function w(e){var t,r=e,{components:l}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),p),a(t,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"parcel"}),"Parcel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Parcel v2 - 2021/10/13")),(0,n.kt)("h2",s({},{id:"get-started"}),"Get Started"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn init -y\ncat << HTML > index.html\n<html>\n<body>\n  <script src=\"./src/index.ts\"><\/script>\n</body>\n</html>\nHTML\nmkdir -p src\ncat << TS > src/index.ts\nexport {};\nconsole.log('hello world');\nTS\n\nyarn add parcel-bundler --dev\n\n# dev\nyarn parcel index.html\n")),(0,n.kt)("h2",s({},{id:"parcel-v2-vs-vite"}),"Parcel v2 vs Vite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"vite",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"unbundled dev server"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Rollup \u548c esbuild"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 SSR"))),(0,n.kt)("li",{parentName:"ul"},"Parcel v2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Parcel & CSS compiler \u4f7f\u7528 Rust")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/vitejs/vite/discussions/5290"}),"https://github.com/vitejs/vite/discussions/5290"))))}w.isMDXComponent=!0}}]);