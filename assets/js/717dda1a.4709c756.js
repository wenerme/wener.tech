"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32596],{92361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(96600),o=n(27279),a=(n(59496),n(3905)),i=["components"],l={title:"nvm"},p=void 0,s={unversionedId:"os/windows/windows-nvm",id:"os/windows/windows-nvm",title:"nvm",description:"- coreybutler/nvm-windows",source:"@site/notes/os/windows/windows-nvm.md",sourceDirName:"os/windows",slug:"/os/windows/windows-nvm",permalink:"/notes/os/windows/windows-nvm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-nvm.md",tags:[],version:"current",frontMatter:{title:"nvm"},sidebar:"docs",previous:{title:"Windows MDM",permalink:"/notes/os/windows/windows-mdm"},next:{title:"Windows Policy",permalink:"/notes/os/windows/windows-policy"}},m={},u=[],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"coreybutler/nvm-windows")),(0,a.kt)("li",{parentName:"ul"},"node \u4e0b\u8f7d\u4f4d\u7f6e ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/dist"},"https://nodejs.org/dist")),(0,a.kt)("li",{parentName:"ul"},"npm \u4f1a\u8d70 github \u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/npm/cli"},"npm/cli")),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"node_mirror ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/dist"},"https://nodejs.org/dist"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://npm.taobao.org/mirrors/node/"},"http://npm.taobao.org/mirrors/node/")))),(0,a.kt)("li",{parentName:"ul"},"npm_mirror ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/npm/cli/archive"},"https://github.com/npm/cli/archive"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://npm.taobao.org/mirrors/npm/"},"http://npm.taobao.org/mirrors/npm/")))),(0,a.kt)("li",{parentName:"ul"},"proxy \u4ee3\u7406"))),(0,a.kt)("li",{parentName:"ul"},"use \u4f1a\u76f4\u63a5\u66ff\u4ee3\u8def\u5f84\u4e3a\u7b26\u53f7\u94fe\u63a5 - \u800c\u4e0d\u662f\u9488\u5bf9 exe \u521b\u5efa\u7b26\u53f7\u94fe\u63a5"),(0,a.kt)("li",{parentName:"ul"},"install.cmd \u9700\u8981\u7ba1\u7406\u5458\u8eab\u4efd\u6267\u884c - \u4f1a\u5199\u6ce8\u518c\u8868")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u652f\u6301\u7248\u672c\nnvm list available\n# 14 \u4e3a\u5f53\u524d lts\nnvm install 14.17.3\nnvm use 14.17.3\n\nnpm add -g yarn\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"settings.txt")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"root: C:\\nvm\npath: C:\\msys64\\usr\\local\\nodejs\\bin\narch: 64\nproxy: none\n\nnode_mirror: http://npm.taobao.org/mirrors/node/\nnpm_mirror: http://npm.taobao.org/mirrors/npm/\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return c}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,w=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(w,i(i({ref:t},u),{},{components:n})):r.createElement(w,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);