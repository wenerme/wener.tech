"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58112],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,g=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),o=["components"],l={title:"chi"},c=void 0,u={unversionedId:"languages/go/lib/chi",id:"languages/go/lib/chi",title:"chi",description:"- go-chi/chi",source:"@site/notes/languages/go/lib/chi.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/chi",permalink:"/notes/languages/go/lib/chi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/chi.md",tags:[],version:"current",frontMatter:{title:"chi"},sidebar:"docs",previous:{title:"bluge",permalink:"/notes/languages/go/lib/bluge"},next:{title:"colly",permalink:"/notes/languages/go/lib/colly"}},p={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-chi/chi"},"go-chi/chi"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u65b9\u6cd5\u66f4\u9002\u5408\u7528\u4e8e REST \u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3 < 1000 LOC"),(0,i.kt)("li",{parentName:"ul"},"0 \u5916\u90e8\u4f9d\u8d56 - \u81ea\u5df1\u5b9e\u73b0 pattern \u5339\u914d\u903b\u8f91",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Patricia Radix trie - \u6027\u80fd\u4f18\u4e8e\u904d\u5386")))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u989d\u5916\u7684 HTTP \u65b9\u6cd5\u9700\u8981\u5148\u63d0\u524d\u6ce8\u518c,\u5426\u5219\u4e0d\u4f1a\u8def\u7531",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"chi.RegisterMethod"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \u901a\u914d \u6240\u6709\nr.Method("GET","/admin/*", func(w,r){\n  // \u83b7\u53d6\u901a\u914d\u53c2\u6570\n  chi.URLParam(r, "*")\n})\n')))}f.isMDXComponent=!0}}]);