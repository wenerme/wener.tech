(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,g=p["".concat(o,".").concat(m)]||p[m]||b[m]||c;return r?a.a.createElement(g,l(l({ref:t},s),{},{components:r})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},799:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),c=(r(0),r(1021)),o={title:"gcc"},l={unversionedId:"languages/c/gcc",id:"languages/c/gcc",isDocsHomePage:!1,title:"gcc",description:"| gcc version | kernel version |",source:"@site/notes/languages/c/gcc.md",slug:"/languages/c/gcc",permalink:"/notes/languages/c/gcc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/c/gcc.md",version:"current",sidebar:"docs",previous:{title:"C Build",permalink:"/notes/languages/c/c-build"},next:{title:"\u8bed\u6cd5",permalink:"/notes/languages/grammar/README"}},i=[{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"gcc version"),Object(c.b)("th",{parentName:"tr",align:null},"kernel version"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"6+"),Object(c.b)("td",{parentName:"tr",align:null},"3.2.0")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"4+"),Object(c.b)("td",{parentName:"tr",align:null},"2.6.31")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"LD_LIBRARY_PATH=. ./strace\n\ngcc -print-file-name=crt1.o\n")),Object(c.b)("h2",{id:"\u4ea4\u53c9\u7f16\u8bd1"},"\u4ea4\u53c9\u7f16\u8bd1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/crosstool-ng/crosstool-ng"},"crosstool-ng/crosstool-ng"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"cross-toolchain generator"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://releases.linaro.org/components/toolchain/binaries/"},"https://releases.linaro.org/components/toolchain/binaries/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/dockcross/dockcross"},"dockcross/dockcross")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://android.googlesource.com/platform/prebuilts/gcc/"},"https://android.googlesource.com/platform/prebuilts/gcc/"))))}u.isMDXComponent=!0}}]);