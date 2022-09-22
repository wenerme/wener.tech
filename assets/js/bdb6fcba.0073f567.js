"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17276],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88384:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={id:"llvm",title:"LLVM"},u="LLVM",c={unversionedId:"languages/llvm/llvm",id:"languages/llvm/llvm",title:"LLVM",description:"Tips",source:"@site/../notes/languages/llvm/README.md",sourceDirName:"languages/llvm",slug:"/languages/llvm/",permalink:"/notes/languages/llvm/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/llvm/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"llvm",title:"LLVM"},sidebar:"docs",previous:{title:"LaTex Math",permalink:"/notes/languages/latex-math"},next:{title:"Markup",permalink:"/notes/languages/lml/"}},p={},s=[{value:"Tips",id:"tips",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"llvm"},"LLVM"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LLVM ",(0,l.kt)("a",{parentName:"li",href:"https://llvm.org/docs/LangRef.html"},"Language Reference Manual")),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8bed\u8a00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Emscripten: An LLVM to JavaScript Compiler"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mukulrathi.co.uk/create-your-own-programming-language/llvm-ir-cpp-api-tutorial/"},"A Complete Guide to LLVM for Programming Language Creators"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# brew \u5b89\u88c5\u4f4d\u7f6e /usr/local/opt/llvm\n\n# header -> ir\nclang -cc1 SDL.h -emit-llvm -femit-all-decls -o SDL.h.ll\n# \u67e5\u770b cc1 \u7684\u5e2e\u52a9\nclang -cc1 --help\n# \u7f16\u8bd1\u4e3a\u6c47\u7f16\nllc SDL.h.ll\n# bc \u53cd\u6c47\u7f16\u4e3a ir\nllvm-dis SDL.h.bc\n")))}f.isMDXComponent=!0}}]);