"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64971],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},34897:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),l=["components"],i={title:"C FAQ",tags:["FAQ"]},u=void 0,c={unversionedId:"languages/c/c-faq",id:"languages/c/c-faq",title:"C FAQ",description:"\u9519\u8bef\u5904\u7406",source:"@site/../notes/languages/c/c-faq.md",sourceDirName:"languages/c",slug:"/languages/c/c-faq",permalink:"/notes/languages/c/c-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/c/c-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642517272,formattedLastUpdatedAt:"Jan 18, 2022",frontMatter:{title:"C FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"C Cookbook",permalink:"/notes/languages/c/c-cookbook"},next:{title:"gcc",permalink:"/notes/languages/c/gcc"}},s={},d=[{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",level:2},{value:"fseek(fp,0,SEEK_END) EINVAL Invalid argument",id:"fseekfp0seek_end-einval-invalid-argument",level:2},{value:"stackdump",id:"stackdump",level:2},{value:"gdb error while loading shared libraries",id:"gdb-error-while-loading-shared-libraries",level:2},{value:"ModuleNotFoundError: No module named &#39;libstdcxx&#39;",id:"modulenotfounderror-no-module-named-libstdcxx",level:2},{value:"SIGABRT",id:"sigabrt",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"errno, perror, strerror")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#include <errno.h>\nextern int errno ;\n\nexit(EXIT_FAILURE);\nexit(EXIT_SUCCESS);\n")),(0,o.kt)("h2",{id:"fseekfp0seek_end-einval-invalid-argument"},"fseek(fp,0,SEEK_END) EINVAL Invalid argument"),(0,o.kt)("h2",{id:"stackdump"},"stackdump"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gdb test.exe.stackdump\n")),(0,o.kt)("h2",{id:"gdb-error-while-loading-shared-libraries"},"gdb error while loading shared libraries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"set environment LD_LIBRARY_PATH /path/to/debug\n")),(0,o.kt)("h2",{id:"modulenotfounderror-no-module-named-libstdcxx"},"ModuleNotFoundError: No module named 'libstdcxx'"),(0,o.kt)("p",null,"msys gdb"),(0,o.kt)("h2",{id:"sigabrt"},"SIGABRT"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"malloc \u7533\u8bf7\u5931\u8d25\u53ef\u80fd\u89e6\u53d1 abort"),(0,o.kt)("li",{parentName:"ul"},"free \u5931\u8d25\u53ef\u80fd\u89e6\u53d1 abort")))}f.isMDXComponent=!0}}]);