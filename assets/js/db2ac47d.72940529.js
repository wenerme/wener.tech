"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76423],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,f=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3652:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={id:"rust"},l="Rust",s={unversionedId:"languages/rust/rust",id:"languages/rust/rust",isDocsHomePage:!1,title:"Rust",description:"Tips",source:"@site/notes/languages/rust/README.md",sourceDirName:"languages/rust",slug:"/languages/rust/rust",permalink:"/notes/languages/rust/rust",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/rust/README.md",tags:[],version:"current",frontMatter:{id:"rust"},sidebar:"docs",previous:{title:"PHP FAQ",permalink:"/notes/languages/php/php-faq"},next:{title:"V",permalink:"/notes/languages/v/v"}},p=[{value:"Tips",id:"tips",children:[]}],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rust"},"Rust"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Rust_(programming_language)"},"Rust:wiki")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/"},"The Rust Programming Language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/rust"},"rust-lang/rust"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A safe, concurrent, practical language."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/cargo"},"rust-lang/cargo"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Rust package manager"))),(0,i.kt)("li",{parentName:"ul"},"\u5185\u5b58\u7ba1\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u4f7f\u7528\u7c7b\u4f3c Go,Java \u8fd9\u6837\u7684\u81ea\u52a8\u5783\u573e\u6536\u96c6, \u800c\u662f ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization"},"RAII")),(0,i.kt)("li",{parentName:"ul"},"\u5f15\u5165 borrow checker \u7684\u6982\u5ff5, \u907f\u514d dangling pointers"))),(0,i.kt)("li",{parentName:"ul"},"FFI",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/first-edition/ffi.html"},"Foreign Function Interface")))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.discord.com/a190bbca2b1f"},"Why Discord is switching from Go to Rust"))))))}m.isMDXComponent=!0}}]);