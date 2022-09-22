"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66059],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],p={title:"Webpack"},i="Webpack",u={unversionedId:"web/webpack",id:"web/webpack",title:"Webpack",description:"Tips",source:"@site/../notes/web/webpack.md",sourceDirName:"web",slug:"/web/webpack",permalink:"/notes/web/webpack",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/webpack.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655100912,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{title:"Webpack"},sidebar:"docs",previous:{title:"WebCrypto",permalink:"/notes/web/webcrypto"},next:{title:"WebRTC Awesome",permalink:"/notes/web/webrtc-awesome"}},c={},s=[{value:"Tips",id:"tips",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Concepts",id:"concepts",level:2},{value:"ModuleFederationPlugin",id:"modulefederationplugin",level:2},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:2}],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"webpack"},"Webpack"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/"},"webpack"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"webpack is a module bundler for modern JavaScript applications"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack/issues/7526"},"#7526")," - Import a Prebuilt Webpack Bundle at Runtime"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/comparison/"},"https://webpack.js.org/comparison/")),(0,l.kt)("li",{parentName:"ul"},"243B + 20B per module + 4B per dependency"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://engineering.velocityapp.com/webpack-vs-browersify-vs-systemjs-for-spas-95b349a41fa0"},"https://engineering.velocityapp.com/webpack-vs-browersify-vs-systemjs-for-spas-95b349a41fa0"))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/"},"configuration"))),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/concepts/"},"Concepts")),(0,l.kt)("li",{parentName:"ul"},"Entry",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5165\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7684\u7b2c\u4e00\u4e2a\u6587\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  entry: './src/main.js',\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Output",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa"))),(0,l.kt)("li",{parentName:"ul"},"Loaders",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u8f6c\u6362\u4e3a\u6a21\u5757\u4f5c\u4e3a\u4f9d\u8d56\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u6807\u8bc6\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u5904\u7406, ",(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u90a3\u4e9b\u6587\u4ef6\u505a\u8f6c\u6362, ",(0,l.kt)("inlineCode",{parentName:"li"},"use"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  module: [ rulles: [ {test: /\\.txt$/, use: 'raw-loader'} ] ]\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plugins",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u7f16\u8bd1\u548c\u5206\u5757(chunk)\u65f6,\u5b9e\u73b0\u81ea\u5b9a\u4e49\u529f\u80fd")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [new webpack.optimize.UglifyJsPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' })],\n};\n")),(0,l.kt)("h2",{id:"modulefederationplugin"},"ModuleFederationPlugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/concepts/module-federation/"},"https://webpack.js.org/concepts/module-federation/"))),(0,l.kt)("h2",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import loadable from '@loadable/component';\n// \u81ea\u5b9a\u4e49 chunkname\nconst Dashboard = loadable(() => import(/* webpackChunkName: \"dashboard\" */ '@/contents/Dashboard'));\n\n// \u9884\u83b7\u53d6\n// <link rel=\"prefetch\" href=\"login-modal-chunk.js\">\nconst OtherComponent = loadable(() => import(/* webpackPrefetch: true */ './OtherComponent'));\n// <link rel=\"preload\">\nimport(/* webpackPreload: true */ 'ChartingLibrary');\n")))}k.isMDXComponent=!0}}]);