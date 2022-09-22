"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27804],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=l,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return g}});var r=n(49613),l=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={title:"eslint"},f="eslint",d={unversionedId:"web/dev/eslint",id:"web/dev/eslint",title:"eslint",description:"- eslint-plugin-import",source:"@site/../notes/web/dev/eslint.md",sourceDirName:"web/dev",slug:"/web/dev/eslint",permalink:"/notes/web/dev/eslint",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/eslint.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"eslint"},sidebar:"docs",previous:{title:"swc",permalink:"/notes/web/dev/bundle/swc"},next:{title:"Lerna",permalink:"/notes/web/dev/lerna"}},b={},g=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"disable/false positive",id:"disablefalse-positive",level:2},{value:"The file does not match your project config",id:"the-file-does-not-match-your-project-config",level:2}],y={toc:g};function v(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),i(t,a({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"eslint"}),"eslint"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'npx eslint "src/**" --ext .ts --ext .tsx\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eslint-plugin-import"),(0,r.kt)("li",{parentName:"ul"},"eslint-plugin-react"),(0,r.kt)("li",{parentName:"ul"},"eslint-plugin-jsx-a11y"),(0,r.kt)("li",{parentName:"ul"},"react/react-in-jsx-scope",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6c42 ",(0,r.kt)("inlineCode",{parentName:"li"},"import React from 'react'")),(0,r.kt)("li",{parentName:"ul"},"ESBuild \u8fd8\u4e0d\u652f\u6301 jsx - \u56e0\u6b64\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"li"},"import React")," - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/334"}),"esbuild#334")))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://eslint.org"}),"eslint.org"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://eslint.org/docs/latest/rules/"}),"rules")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/typescript-eslint/typescript-eslint"}),"typescript-eslint"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://typescript-eslint.io/rules/"}),"rules")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next"}),"https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next"))))),(0,r.kt)("h2",u({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".eslintrc.{js,yml,json}")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  root: true,\n  // \u6269\u5c55\u73b0\u6709\u914d\u7f6e - \u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u5305/\u6a21\u5757\n  // \u7f29\u5199\u903b\u8f91:\n  //   custom -> eslint-config-custom\n  //   @wener -> @wener/eslint-config\n  extends: ['@wener/eslint-config-custom'],\n  settings: {\n    next: {\n      rootDir: ['apps/*/'],\n    },\n  },\n};\n")),(0,r.kt)("h2",u({},{id:"disablefalse-positive"}),"disable/false positive"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// \u5ffd\u7565\u5355\u4e2a\u89c4\u5219\n/*eslint eqeqeq:0*/\n\n// \u5ffd\u7565\u5355\u884c\n// eslint-disable-next-line\n\n// \u5ffd\u7565\u8303\u56f4\n/*eslint-disable */\nalert('foo');\n/*eslint-enable */\n")),(0,r.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",u({},{id:"the-file-does-not-match-your-project-config"}),"The file does not match your project config"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'}),"module.exports = {\n  ignorePatterns: ['.eslintrc.js'],\n};\n")))}v.isMDXComponent=!0}}]);