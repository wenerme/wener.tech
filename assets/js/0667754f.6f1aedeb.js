"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4098],{49613:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(59496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53252:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var t=r(96600),o=r(27279),a=(r(59496),r(49613)),i=["components"],s={title:"Nano Server"},c=void 0,l={unversionedId:"os/windows/nano-server",id:"os/windows/nano-server",title:"Nano Server",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/windows/nano-server.md",sourceDirName:"os/windows",slug:"/os/windows/nano-server",permalink:"/notes/os/windows/nano-server",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/nano-server.md",tags:[],version:"current",frontMatter:{title:"Nano Server"},sidebar:"docs",previous:{title:"msys2",permalink:"/notes/os/windows/msys2"},next:{title:"NTLM",permalink:"/notes/os/windows/ntlm"}},u={},p=[],m={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Windows Server \u5bb9\u5668\u955c\u50cf"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u754c\u9762\uff0c\u65e0\u8fdc\u7a0b\u684c\u9762\uff0c\u4e13\u95e8\u7528\u4e8e\u865a\u62df\u5316\u548c\u4e91\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664 WoW64 - \u4e0d\u652f\u6301 32 \u4f4d"),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664 Windows Installer"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5728\u5bb9\u5668\u4e3b\u673a\u4e2d\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e .NET Core \u5e94\u7528"))),(0,a.kt)("li",{parentName:"ul"},"Windows Server \u7248\u672c\u9700\u8981\u5339\u914d\u955c\u50cf\u7248\u672c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u57fa\u7840\u955c\u50cf\n# https://hub.docker.com/_/microsoft-windows-nanoserver\ndocker pull mcr.microsoft.com/windows/nanoserver\n")))}f.isMDXComponent=!0}}]);