"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38360],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(96600),i=n(27279),l=(n(59496),n(49613)),a=["components"],o={title:"eslint"},s=void 0,c={unversionedId:"web/dev/eslint",id:"web/dev/eslint",title:"eslint",description:"- eslint-plugin-import",source:"@site/notes/web/dev/eslint.md",sourceDirName:"web/dev",slug:"/web/dev/eslint",permalink:"/notes/web/dev/eslint",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/dev/eslint.md",tags:[],version:"current",frontMatter:{title:"eslint"},sidebar:"docs",previous:{title:"swc",permalink:"/notes/web/dev/bundle/swc"},next:{title:"Lerna",permalink:"/notes/web/dev/lerna"}},p={},u=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"disable/false positive",id:"disablefalse-positive",level:2},{value:"The file does not match your project config",id:"the-file-does-not-match-your-project-config",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx eslint "src/**" --ext .ts --ext .tsx\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eslint-plugin-import"),(0,l.kt)("li",{parentName:"ul"},"eslint-plugin-react"),(0,l.kt)("li",{parentName:"ul"},"eslint-plugin-jsx-a11y"),(0,l.kt)("li",{parentName:"ul"},"react/react-in-jsx-scope",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6c42 ",(0,l.kt)("inlineCode",{parentName:"li"},"import React from 'react'")),(0,l.kt)("li",{parentName:"ul"},"ESBuild \u8fd8\u4e0d\u652f\u6301 jsx - \u56e0\u6b64\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"import React")," - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/334"},"esbuild#334")))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eslint.org"},"eslint.org"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://eslint.org/docs/latest/rules/"},"rules")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/typescript-eslint/typescript-eslint"},"typescript-eslint"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://typescript-eslint.io/rules/"},"rules")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next"},"https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next"))))),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".eslintrc.{js,yml,json}")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  root: true,\n  // \u6269\u5c55\u73b0\u6709\u914d\u7f6e - \u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u5305/\u6a21\u5757\n  // \u7f29\u5199\u903b\u8f91:\n  //   custom -> eslint-config-custom\n  //   @wener -> @wener/eslint-config\n  extends: ['@wener/eslint-config-custom'],\n  settings: {\n    next: {\n      rootDir: ['apps/*/'],\n    },\n  },\n};\n")),(0,l.kt)("h2",{id:"disablefalse-positive"},"disable/false positive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5ffd\u7565\u5355\u4e2a\u89c4\u5219\n/*eslint eqeqeq:0*/\n\n// \u5ffd\u7565\u5355\u884c\n// eslint-disable-next-line\n\n// \u5ffd\u7565\u8303\u56f4\n/*eslint-disable */\nalert('foo');\n/*eslint-enable */\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"the-file-does-not-match-your-project-config"},"The file does not match your project config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  ignorePatterns: ['.eslintrc.js'],\n};\n")))}f.isMDXComponent=!0}}]);