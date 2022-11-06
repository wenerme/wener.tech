"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78089],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35156:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return g}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const m={title:"TinyGo"},d="TinyGo",y={unversionedId:"hardware/microcontroller/dev/tinygo",id:"hardware/microcontroller/dev/tinygo",title:"TinyGo",description:"- tinygo-org/tinygo - Go on Microcontrollers and WASM",source:"@site/../notes/hardware/microcontroller/dev/tinygo.md",sourceDirName:"hardware/microcontroller/dev",slug:"/hardware/microcontroller/dev/tinygo",permalink:"/notes/hardware/microcontroller/dev/tinygo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/microcontroller/dev/tinygo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"TinyGo"},sidebar:"docs",previous:{title:"TamaGo",permalink:"/notes/hardware/microcontroller/dev/tamago"},next:{title:"Switch",permalink:"/notes/hardware/network/switch"}},f={},g=[],v={toc:g};function b(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"tinygo"}),"TinyGo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/tinygo-org/tinygo"}),"tinygo-org/tinygo")," - Go on Microcontrollers and WASM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e LLVM Go"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://tinygo.org/lang-support/"}),"\u8bed\u8a00\u7279\u6027\u652f\u6301")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://tinygo.org/faq/why-go-instead-of-rust/"}),"Why go instead of rust"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go \u4f18\u52bf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go \u66f4\u5177\u6709\u4e3b\u89c1\u6027 - \u56e0\u6b64\u66f4\u6613\u5b66\u6613\u7528 - \u66f4\u7b80\u5355"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5efa\u5e76\u53d1\u652f\u6301 - \u4e0d\u4f9d\u8d56\u7ebf\u7a0b\u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u4f4e\u8026\u5408\u7684\u6807\u51c6\u5e93"))),(0,n.kt)("li",{parentName:"ul"},"Rust \u4f18\u52bf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6ca1\u6709 GC"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u5f3a\u7684\u5185\u5b58\u5b89\u5168\u4fdd\u969c"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u5e95\u5c42\uff0c\u66f4\u5bb9\u6613\u652f\u6301 microcontroller")))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u6e90\u7801\u5b89\u88c5\ngit clone --recursive https://github.com/tinygo-org/tinygo.git\ncd tinygo\n# \u5b89\u88c5 - \u4f7f\u7528\u672c\u5730\u5b89\u88c5\u7684 llvm\nsudo apk add clang clang-analyzer clang-extra-tools clang-dev llvm-dev\nGOPROXY=https://goproxy.io go install -v\n\n# \u81ea\u884c\u6784\u5efa llvm\nexport CC=clang\nexport CXX=clang++\nmake llvm-build\nmake\n\n./build/tinygo version\n\nmake gen-device\n\n# docker\ndocker run --rm -v $(pwd):/src tinygo/tinygo:0.15.0 tinygo build -o /src/blinky1.hex -size=short -target=pca10040 examples/blinky1\n")))}b.isMDXComponent=!0}}]);