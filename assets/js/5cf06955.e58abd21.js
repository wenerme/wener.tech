"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1426],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(n),d=l,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=n(96600),l=n(27279),a=(n(59496),n(49613)),u=["components"],o={title:"Rollup Awesome",tags:["Awesome"]},p="Rollup Awesome",i={unversionedId:"web/dev/bundle/rollup-awesome",id:"web/dev/bundle/rollup-awesome",title:"Rollup Awesome",description:"- rollup/awesome",source:"@site/../notes/web/dev/bundle/rollup-awesome.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/rollup-awesome",permalink:"/notes/web/dev/bundle/rollup-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/dev/bundle/rollup-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Rollup Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Parcel",permalink:"/notes/web/dev/bundle/parcel"},next:{title:"Rollup FAQ",permalink:"/notes/web/dev/bundle/rollup-faq"}},s={},c=[{value:"\u63d2\u4ef6/plugins",id:"\u63d2\u4ef6plugins",level:2},{value:"@rollup/plugin-replace",id:"rollupplugin-replace",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rollup-awesome"},"Rollup Awesome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rollup/awesome"},"rollup/awesome"))),(0,a.kt)("h2",{id:"\u63d2\u4ef6plugins"},"\u63d2\u4ef6/plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"rollup/plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/btd/rollup-plugin-visualizer"},"btd/rollup-plugin-visualizer"),"\n\u53ef\u89c6\u5316 bundle \u5927\u5c0f\u5206\u6790"),(0,a.kt)("li",{parentName:"ul"},"rollup-plugin-peer-deps-external",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06 peerDependencies \u5904\u7406\u4e3a external"))),(0,a.kt)("li",{parentName:"ul"},"rollup-plugin-dts",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210 d.ts")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { visualizer } from 'rollup-plugin-visualizer';\n\nexport default {\n  plugins: [\n    // \u6700\u540e\n    visualizer({ json: true }),\n    // visualizer({ filename: 'stats.treemap.html'}),\n    // visualizer({ filename: 'stats.sunburst.html', template: 'sunburst' }),\n    // visualizer({ filename: 'stats.network.html', template: 'network' }),\n  ],\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u4ee5\u4e8b\u540e\u751f\u6210\nnpx rollup-plugin-visualizer stats.json --template sunburst --filename stats.sunburst.html\n")),(0,a.kt)("h2",{id:"rollupplugin-replace"},"@rollup/plugin-replace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import replace from '@rollup/plugin-replace';\n\nreplace({\n  'process.env.NODE_ENV': JSON.stringify('production'),\n  __BUILD_DATE__: () => JSON.stringify(new Date()),\n  __BUILD_VERSION__: 15,\n});\n")))}d.isMDXComponent=!0}}]);