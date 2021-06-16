(window.webpackJsonp=window.webpackJsonp||[]).push([[870],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,g=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return r?a.a.createElement(g,u(u({ref:t},l),{},{components:r})):a.a.createElement(g,u({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},943:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),i=(r(0),r(1083)),o={id:"rust"},u={unversionedId:"languages/rust/rust",id:"languages/rust/rust",isDocsHomePage:!1,title:"rust",description:"Rust",source:"@site/notes/languages/rust/README.md",slug:"/languages/rust/rust",permalink:"/notes/languages/rust/rust",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/rust/README.md",version:"current",sidebar:"docs",previous:{title:"Lua \u7248\u672c",permalink:"/notes/languages/lua/lua-version"},next:{title:"V",permalink:"/notes/languages/v/v"}},c=[{value:"Tips",id:"tips",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"rust"},"Rust"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Rust_(programming_language)"},"Rust:wiki")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/"},"The Rust Programming Language")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rust-lang/rust"},"rust-lang/rust"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A safe, concurrent, practical language."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rust-lang/cargo"},"rust-lang/cargo"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The Rust package manager"))),Object(i.b)("li",{parentName:"ul"},"\u5185\u5b58\u7ba1\u7406",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u4f7f\u7528\u7c7b\u4f3c Go,Java \u8fd9\u6837\u7684\u81ea\u52a8\u5783\u573e\u6536\u96c6, \u800c\u662f ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization"},"RAII")),Object(i.b)("li",{parentName:"ul"},"\u5f15\u5165 borrow checker \u7684\u6982\u5ff5, \u907f\u514d dangling pointers"))),Object(i.b)("li",{parentName:"ul"},"FFI",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/first-edition/ffi.html"},"Foreign Function Interface")))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://blog.discord.com/a190bbca2b1f"},"Why Discord is switching from Go to Rust"))))))}s.isMDXComponent=!0}}]);