"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[42095],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),g=i,m=f["".concat(c,".").concat(g)]||f[g]||p[g]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40549:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"gitflow"},c=void 0,s={unversionedId:"service/forge/git/gitflow",id:"service/forge/git/gitflow",title:"gitflow",description:"- petervanderdoes/gitflow-avh",source:"@site/notes/service/forge/git/gitflow.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/gitflow",permalink:"/notes/service/forge/git/gitflow",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/git/gitflow.md",tags:[],version:"current",frontMatter:{title:"gitflow"},sidebar:"docs",previous:{title:"Git Hook",permalink:"/notes/service/forge/git/git-hook"},next:{title:"Gitea",permalink:"/notes/service/forge/gitea"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/petervanderdoes/gitflow-avh"},"petervanderdoes/gitflow-avh"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"2019 \u505c\u6b62\u7ef4\u62a4"),(0,o.kt)("li",{parentName:"ul"},"a collection of Git extensions to provide high-level repository operations for Vincent Driessen's branching model."),(0,o.kt)("li",{parentName:"ul"},"adds more functionality to the existing git-flow and several of the internal commands have been rewritten to speed up the software."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvie/gitflow"},"nvie/gitflow"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"2012 \u505c\u6b62\u7ef4\u62a4"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://nvie.com/posts/a-successful-git-branching-model"},"A successful Git branching model")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow"},"git-flow \u5de5\u4f5c\u6d41\u7a0b")),(0,o.kt)("li",{parentName:"ul"},"branches",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bugfix hotfix release feature support"))),(0,o.kt)("li",{parentName:"ul"},"actions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"delete finish list publish rename start track"),(0,o.kt)("li",{parentName:"ul"},"rebase")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git-flow-avh\n\ngit flow init -d\ngit checkout develop\ngit flow release start v2021.1.1\ngit flow release finish v2021.1.1\ngit push --tags\n")))}f.isMDXComponent=!0}}]);