(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),l=n(7),r=(n(0),n(766)),b={title:"Rollup"},c={unversionedId:"web/node/rollup",id:"web/node/rollup",isDocsHomePage:!1,title:"Rollup",description:"Tips",source:"@site/notes/web/node/rollup.md",slug:"/web/node/rollup",permalink:"/notes/web/node/rollup",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/node/rollup.md",version:"current",sidebar:"docs",previous:{title:"Parcel",permalink:"/notes/web/node/parcel"},next:{title:"Yarn",permalink:"/notes/web/node/yarn"}},o=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"rollup commonjs",id:"rollup-commonjs",children:[]},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[]},{value:"rollup-plugin-replace",id:"rollup-plugin-replace",children:[]},{value:"babel",id:"babel",children:[]},{value:"<code>this</code> has been rewritten to <code>undefined</code>",id:"this-has-been-rewritten-to-undefined",children:[]},{value:"Rollup requires that your Babel configuration keeps ES6 module syntax intact.",id:"rollup-requires-that-your-babel-configuration-keeps-es6-module-syntax-intact",children:[]},{value:"SyntaxError: Unexpected token: punc (.)",id:"syntaxerror-unexpected-token-punc-",children:[]},{value:"Missing class properties transform.",id:"missing-class-properties-transform",children:[]},{value:"&#39;default&#39; is not exported by",id:"default-is-not-exported-by",children:[]},{value:"xxx.default is not a function",id:"xxxdefault-is-not-a-function",children:[]},{value:"&#39;default&#39; is not exported by",id:"default-is-not-exported-by-1",children:[]}],i={rightToc:o};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rollupjs.org/"}),"rollupjs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rollupjs.org/repl/"}),"Repl")),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"d.ts")," \u9700\u8981\u4f7f\u7528 tsc \u751f\u6210"))),Object(r.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/plugins/issues/287"}),"#287")," - typescript \u63d2\u4ef6\u65e0\u6548"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/2671"}),"#2671")," - \u4e0d\u652f\u6301 ",Object(r.b)("inlineCode",{parentName:"li"},"export *")," commonjs"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/470#issuecomment-177594250"}),"#470")," \u4e0d\u652f\u6301 index.js",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u76f4\u63a5 ",Object(r.b)("inlineCode",{parentName:"li"},"import {abc} from 'abc/index'")),Object(r.b)("li",{parentName:"ol"},"\u4f7f\u7528 ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/plugins/tree/master/packages/node-resolve"}),"@rollup/plugin-node-resolve")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/rollup/issues/1906"}),"#1906")," - Mark dependency as internal?"),Object(r.b)("li",{parentName:"ul"},"CommonJS \u591a\u4e86\u4e00\u5c42 default \u95ee\u9898",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/33505992"}),"Babel 6 changes how it exports default")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-add-module-exports"}),"babel-plugin-add-module-exports"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f7f\u5176\u6062\u590d\u539f\u6709\u7684\u65b9\u5f0f"))),Object(r.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u95ee\u9898",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/faastjs/faast.js/issues/36"}),"faastjs/faast.js#36")," - Can't use default import with Babel")))))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/awesome"}),"rollup/awesome"))))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --global rollup\n\n# \u5e38\u7528\u63d2\u4ef6\nyarn add -D rollup @babel/core @rollup/plugin-babel rollup-plugin-terser @rollup/plugin-node-resolve\n# Babel + Typescript\nyarn add -D @babel/preset-env @babel/preset-typescript\n# + React\nyarn add -D @babel/preset-react\n\n# yarn add -D rollup @rollup/plugin-commonjs  @rollup/plugin-node-resolve @rollup/plugin-babel\n# yarn add -D @babel/core @babel/preset-typescript @babel/preset-react @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties\n\n# TS - \u4f46\u76ee\u524d\u4e0d\u597d\u7528\nyarn add -D typescript tslib @rollup/plugin-typescript\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Format"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Fullname"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"When"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"package.json"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"amd"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Asynchronous Module Definition"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RequireJS"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cjs,commonjs"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CommonJS"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Node"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"main"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"es,esm,module"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<script type=module>")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"module"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iife"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"self-executing function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<script>")," ",Object(r.b)("br",null)," Application"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"umd"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Universal Module Definition"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"amd, cjs, iife"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"browser"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"system\uff0csystemjs"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SystemJS"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SystemJS"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add -D @babel/core @rollup/plugin-babel rollup-plugin-terser @rollup/plugin-node-resolve\n")),Object(r.b)("h2",{id:"rollup-commonjs"},"rollup commonjs"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import commonjs from '@rollup/plugin-commonjs';\nimport { nodeResolve } from '@rollup/plugin-node-resolve';\nimport babel from '@rollup/plugin-babel';\n\nfunction createConfig(format) {\n  return {\n    input: 'src/index.ts',\n    output: {\n      file: `dist/console-feed.${format}.js`,\n      sourcemap: true,\n      format,\n    },\n    external: [\n      'react',\n    ],\n    plugins: [\n      nodeResolve({ browser: true, extensions: ['.js', '.jsx', '.ts', '.tsx'] }),\n      babel({\n        babelHelpers: 'bundled',\n        babelrc: false,\n        presets: [['@babel/preset-typescript',{allowNamespaces:true}], '@babel/preset-react'],\n        plugins: [\n          ['@babel/plugin-proposal-decorators', { legacy: true }],\n          ['@babel/plugin-proposal-class-properties', { loose: true }],\n        ],\n        extensions: ['.js', '.jsx', '.ts', '.tsx'],\n      }),\n      commonjs({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),\n    ],\n  };\n}\n\nexport default [createConfig('system'),createConfig('umd')];\n")),Object(r.b)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/plugins"}),"rollup/plugins"))),Object(r.b)("h2",{id:"rollup-plugin-replace"},"rollup-plugin-replace"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u66ff\u4ee3\u8fdb\u884c\u4f18\u5316")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"require('rollup-plugin-replace')({\n  'process.env.NODE_ENV': JSON.stringify('production')\n})\n")),Object(r.b)("h2",{id:"babel"},"babel"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rollup/plugins/tree/master/packages/babel"}),"https://github.com/rollup/plugins/tree/master/packages/babel"))),Object(r.b)("h1",{id:"faq"},"FAQ"),Object(r.b)("h2",{id:"this-has-been-rewritten-to-undefined"},Object(r.b)("inlineCode",{parentName:"h2"},"this")," has been rewritten to ",Object(r.b)("inlineCode",{parentName:"h2"},"undefined")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u914d\u5408 typescript \u4f1a\u51fa\u73b0\uff0c\u4e0d\u5f71\u54cd\u4f7f\u7528\uff0c\u4f46\u5f88\u70e6")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5ffd\u7565\u8be5\u9519\u8bef")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  onwarn(warning) {\n      if (warning.code === 'THIS_IS_UNDEFINED') {\n        return;\n      }\n      console.warn('THIS_IS_UNDEFINED', warning.message);\n    },\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rollupjs.org/guide/en/#error-this-is-undefined"}),"this-is-undefined"))),Object(r.b)("h2",{id:"rollup-requires-that-your-babel-configuration-keeps-es6-module-syntax-intact"},"Rollup requires that your Babel configuration keeps ES6 module syntax intact."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  plugins: [\n    babel({\n      babelHelpers: 'bundled',\n      babelrc: false,\n    }),\n    terser({ ecma: 6, module: true }),\n  ],\n}\n")),Object(r.b)("h2",{id:"syntaxerror-unexpected-token-punc-"},"SyntaxError: Unexpected token: punc (.)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}),"Optional chaining")),Object(r.b)("li",{parentName:"ul"},"\u8c03\u6574 transpile \u6216\u8005 ts \u7684 target")),Object(r.b)("h2",{id:"missing-class-properties-transform"},"Missing class properties transform."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-class-properties"))),Object(r.b)("h2",{id:"default-is-not-exported-by"},"'default' is not exported by"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5bfc\u5165\u65b9\u5f0f\u7684\u95ee\u9898")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// \u8fd9\u6837\u4e0d\u4f1a\u4f7f\u7528 default\n// TS \u4e2d\u7684 allowSyntheticDefaultImports \u53c2\u6570\nimport * as Abc from './abc'\n")),Object(r.b)("h2",{id:"xxxdefault-is-not-a-function"},"xxx.default is not a function"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4e00\u822c\u662f commonjs \u7684\u95ee\u9898")),Object(r.b)("p",null,"\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u547d\u540d\u5bfc\u51fa"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"commonjs({\n  include: 'node_modules/**',\n  // \u65b0\u7248\u672c\u63d2\u4ef6\u4f1a\u81ea\u5e26\u5904\u7406\uff0c\u6ca1\u6709\u4e86\u8be5\u53c2\u6570\n  namedExports: {\n  'node_modules/@emotion/memoize/dist/memoize.cjs.js':['memoize']\n  },\n}),\n")),Object(r.b)("h2",{id:"default-is-not-exported-by-1"},"'default' is not exported by"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"commonjs \u95ee\u9898")))}p.isMDXComponent=!0},766:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),p=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,j=u["".concat(b,".").concat(m)]||u[m]||s[m]||r;return n?l.a.createElement(j,c(c({ref:t},i),{},{components:n})):l.a.createElement(j,c({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<r;i++)b[i]=n[i];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);