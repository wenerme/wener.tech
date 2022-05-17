"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18930],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=l,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},97495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],i={id:"llvm",title:"LLVM"},c=void 0,u={unversionedId:"languages/llvm/llvm",id:"languages/llvm/llvm",title:"LLVM",description:"Tips",source:"@site/notes/languages/llvm/README.md",sourceDirName:"languages/llvm",slug:"/languages/llvm/",permalink:"/notes/languages/llvm/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/llvm/README.md",tags:[],version:"current",frontMatter:{id:"llvm",title:"LLVM"}},p={},m=[{value:"Tips",id:"tips",level:2}],s={toc:m};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LLVM ",(0,a.kt)("a",{parentName:"li",href:"https://llvm.org/docs/LangRef.html"},"Language Reference Manual")),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8bed\u8a00",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Emscripten: An LLVM to JavaScript Compiler"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mukulrathi.co.uk/create-your-own-programming-language/llvm-ir-cpp-api-tutorial/"},"A Complete Guide to LLVM for Programming Language Creators"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# brew \u5b89\u88c5\u4f4d\u7f6e /usr/local/opt/llvm\n\n# header -> ir\nclang -cc1 SDL.h -emit-llvm -femit-all-decls -o SDL.h.ll\n# \u67e5\u770b cc1 \u7684\u5e2e\u52a9\nclang -cc1 --help\n# \u7f16\u8bd1\u4e3a\u6c47\u7f16\nllc SDL.h.ll\n# bc \u53cd\u6c47\u7f16\u4e3a ir\nllvm-dis SDL.h.bc\n")))}f.isMDXComponent=!0}}]);