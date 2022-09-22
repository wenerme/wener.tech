"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90610],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,b=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},23982:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),i=["components"],o={title:"Build Awesome",tags:["Awesome"]},u=void 0,p={unversionedId:"dev/build/build-awesome",id:"dev/build/build-awesome",title:"Build Awesome",description:"- https://reproducible-builds.org/",source:"@site/notes/dev/build/build-awesome.md",sourceDirName:"dev/build",slug:"/dev/build/build-awesome",permalink:"/notes/dev/build/build-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/build-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Build Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Bazel Java",permalink:"/notes/dev/build/bazel/bazel-java"},next:{title:"Build Cookbook",permalink:"/notes/dev/build/build-cookbook"}},s={},m=[{value:"Build system",id:"build-system",level:2}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://reproducible-builds.org/"},"https://reproducible-builds.org/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/batect/batect"},"batect/batect"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Kotlin"),(0,l.kt)("li",{parentName:"ul"},"Build And Testing Environments as Code Tool"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/elfshaker/elfshaker"},"elfshaker/elfshaker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/upx/upx"},"upx/upx"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPL-2.0, C,C++"),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u53ef\u6267\u884c\u6587\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rui314/mold"},"rui314/mold"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GNU AGPL v3, C++"),(0,l.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 GNU gold, LLVM lld")))),(0,l.kt)("h2",{id:"build-system"},"Build system"),(0,l.kt)("admonition",{title:"\u4e3a\u4ec0\u4e48\u9700\u8981 \u6784\u5efa\u7cfb\u7edf",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u6784\u5efa\u4e4b\u6240\u4ee5\u9700\u8981\u4e00\u4e2a\u7cfb\u7edf\uff0c\u662f\u56e0\u4e3a\u5927\u9879\u76ee\u901a\u5e38\u5305\u542b\u4e0a ",(0,l.kt)("strong",{parentName:"p"},"\u767e\u4e07")," \u4e2a C/C++ \u6e90\u6587\u4ef6\uff0c\u5355\u7eaf\u7684\u76f4\u63a5\u7f16\u8bd1\u662f\u4e0d\u73b0\u5b9e\u7684\u3002"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u5e73\u5747\u5904\u7406\u6bcf\u4e2a\u6e90\u6587\u4ef6\u9700\u8981 0.01s\uff0c\u90a3\u4e48 1M \u6e90\u6587\u4ef6\u5219\u9700\u8981 3 \u5c0f\u65f6"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ninjia"),(0,l.kt)("li",{parentName:"ul"},"CMAKE"),(0,l.kt)("li",{parentName:"ul"},"Make"),(0,l.kt)("li",{parentName:"ul"},"Bazel"),(0,l.kt)("li",{parentName:"ul"},"Buck"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pantsbuild/pants"},"pantsbuild/pants"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"scalable build system for monorepos"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gn.googlesource.com/gn/"},"gn"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"generates build files for Ninja"))),(0,l.kt)("li",{parentName:"ul"},"Nix"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/go-task/task"},"go-task/task"))))}d.isMDXComponent=!0}}]);