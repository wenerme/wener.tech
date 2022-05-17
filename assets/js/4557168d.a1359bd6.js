"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56863],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),f=l,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],u={title:"Rollup Awesome",tags:["Awesome"]},i=void 0,p={unversionedId:"web/dev/bundle/rollup-awesome",id:"web/dev/bundle/rollup-awesome",title:"Rollup Awesome",description:"- rollup/awesome",source:"@site/notes/web/dev/bundle/rollup-awesome.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/rollup-awesome",permalink:"/notes/web/dev/bundle/rollup-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/dev/bundle/rollup-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Rollup Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Parcel",permalink:"/notes/web/dev/bundle/parcel"},next:{title:"Rollup FAQ",permalink:"/notes/web/dev/bundle/rollup-faq"}},s={},c=[{value:"\u63d2\u4ef6/plugins",id:"\u63d2\u4ef6plugins",level:2},{value:"@rollup/plugin-replace",id:"rollupplugin-replace",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rollup/awesome"},"rollup/awesome"))),(0,a.kt)("h2",{id:"\u63d2\u4ef6plugins"},"\u63d2\u4ef6/plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"rollup/plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/btd/rollup-plugin-visualizer"},"btd/rollup-plugin-visualizer"),"\n\u53ef\u89c6\u5316 bundle \u5927\u5c0f\u5206\u6790"),(0,a.kt)("li",{parentName:"ul"},"rollup-plugin-peer-deps-external",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06 peerDependencies \u5904\u7406\u4e3a external")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { visualizer } from 'rollup-plugin-visualizer';\n\nexport default {\n  plugins: [\n    // \u6700\u540e\n    visualizer({ json: true }),\n    // visualizer({ filename: 'stats.treemap.html'}),\n    // visualizer({ filename: 'stats.sunburst.html', template: 'sunburst' }),\n    // visualizer({ filename: 'stats.network.html', template: 'network' }),\n  ],\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u4ee5\u4e8b\u540e\u751f\u6210\nnpx rollup-plugin-visualizer stats.json --template sunburst --filename stats.sunburst.html\n")),(0,a.kt)("h2",{id:"rollupplugin-replace"},"@rollup/plugin-replace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import replace from '@rollup/plugin-replace';\n\nreplace({\n  'process.env.NODE_ENV': JSON.stringify('production'),\n  __BUILD_DATE__: () => JSON.stringify(new Date()),\n  __BUILD_VERSION__: 15,\n});\n")))}f.isMDXComponent=!0}}]);