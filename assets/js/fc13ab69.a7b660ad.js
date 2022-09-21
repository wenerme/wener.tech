"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35127],{46761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(96600),a=n(27279),i=(n(59496),n(3905)),o=["components"],l={title:"Github FAQ",tags:["FAQ"]},p=void 0,c={unversionedId:"service/forge/github-faq",id:"service/forge/github-faq",title:"Github FAQ",description:"- .nojekyll \u6587\u4ef6\u63d0\u793a \u4e0d\u542f\u7528 jekyll",source:"@site/notes/service/forge/github-faq.md",sourceDirName:"service/forge",slug:"/service/forge/github-faq",permalink:"/notes/service/forge/github-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/github-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Github FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Github Action",permalink:"/notes/service/forge/github-action"},next:{title:"Github",permalink:"/notes/service/forge/github"}},s={},u=[{value:"SPA Pages",id:"spa-pages",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},".nojekyll \u6587\u4ef6\u63d0\u793a \u4e0d\u542f\u7528 jekyll")),(0,i.kt)("h2",{id:"spa-pages"},"SPA Pages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8fd4\u56de 404.html",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728\u8fd9\u91cc\u6dfb\u52a0\u8df3\u8f6c"),(0,i.kt)("li",{parentName:"ul"},"\u5728 index \u68c0\u6d4b\u8df3\u8f6c\u643a\u5e26\u7684\u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e window.history.replaceState"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rafgraph/spa-github-pages"},"rafgraph/spa-github-pages"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Single Page Apps for GitHub Pages</title>\n    <script type=\"text/javascript\">\n      // \u975e\u81ea\u5b9a\u4e49\u57df\u540d\u8bbe\u7f6e\u4e3a 1\n      // https://username.github.io/repo-name\n      // \u81ea\u5b9a\u4e49\u57df\u540d\u8bbe\u7f6e\u4e3a 0\n      var pathSegmentsToKeep = 1;\n\n      var l = window.location;\n      l.replace(\n        l.protocol +\n          '//' +\n          l.hostname +\n          (l.port ? ':' + l.port : '') +\n          l.pathname\n            .split('/')\n            .slice(0, 1 + pathSegmentsToKeep)\n            .join('/') +\n          '/?/' +\n          l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +\n          (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +\n          l.hash,\n      );\n    <\/script>\n  </head>\n  <body></body>\n</html>\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,g=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);