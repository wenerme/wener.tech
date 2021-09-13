"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,f=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29447:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Webpack"},p=void 0,u={unversionedId:"web/webpack",id:"web/webpack",isDocsHomePage:!1,title:"Webpack",description:"Tips",source:"@site/notes/web/webpack.md",sourceDirName:"web",slug:"/web/webpack",permalink:"/notes/web/webpack",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/webpack.md",tags:[],version:"current",frontMatter:{title:"Webpack"},sidebar:"docs",previous:{title:"WASM Awesome",permalink:"/notes/web/webassembly-awesome"},next:{title:"WebRTC Awesome",permalink:"/notes/web/webrtc-awesome"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Concepts",id:"concepts",children:[]},{value:"ModuleFederationPlugin",id:"modulefederationplugin",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/"},"webpack"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"webpack is a module bundler for modern JavaScript applications"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack/issues/7526"},"#7526")," - Import a Prebuilt Webpack Bundle at Runtime"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/comparison/"},"https://webpack.js.org/comparison/")),(0,l.kt)("li",{parentName:"ul"},"243B + 20B per module + 4B per dependency"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://engineering.velocityapp.com/webpack-vs-browersify-vs-systemjs-for-spas-95b349a41fa0"},"https://engineering.velocityapp.com/webpack-vs-browersify-vs-systemjs-for-spas-95b349a41fa0"))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/"},"configuration"))),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/concepts/"},"Concepts")),(0,l.kt)("li",{parentName:"ul"},"Entry",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5165\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7684\u7b2c\u4e00\u4e2a\u6587\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  entry: './src/main.js',\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Output",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa"))),(0,l.kt)("li",{parentName:"ul"},"Loaders",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u8f6c\u6362\u4e3a\u6a21\u5757\u4f5c\u4e3a\u4f9d\u8d56\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u6807\u8bc6\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u5904\u7406, ",(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u90a3\u4e9b\u6587\u4ef6\u505a\u8f6c\u6362, ",(0,l.kt)("inlineCode",{parentName:"li"},"use"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  module: [ rulles: [ {test: /\\.txt$/, use: 'raw-loader'} ] ]\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plugins",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u7f16\u8bd1\u548c\u5206\u5757(chunk)\u65f6,\u5b9e\u73b0\u81ea\u5b9a\u4e49\u529f\u80fd")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [new webpack.optimize.UglifyJsPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' })],\n};\n")),(0,l.kt)("h2",{id:"modulefederationplugin"},"ModuleFederationPlugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/concepts/module-federation/"},"https://webpack.js.org/concepts/module-federation/"))))}m.isMDXComponent=!0}}]);