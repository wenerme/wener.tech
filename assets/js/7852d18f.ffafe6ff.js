"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61984],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,b=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86067:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],i={tags:["FAQ"]},u="Build FAQ",c={unversionedId:"dev/build/build-faq",id:"dev/build/build-faq",title:"Build FAQ",description:"Buck vs Bazel",source:"@site/../notes/dev/build/build-faq.md",sourceDirName:"dev/build",slug:"/dev/build/build-faq",permalink:"/notes/dev/build/build-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/build/build-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Build Cookbook",permalink:"/notes/dev/build/build-cookbook"},next:{title:"ccache",permalink:"/notes/dev/build/ccache"}},p={},s=[{value:"Buck vs Bazel",id:"buck-vs-bazel",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-faq"},"Build FAQ"),(0,l.kt)("h2",{id:"buck-vs-bazel"},"Buck vs Bazel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Buck - Facebook",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"googler \u52a0\u5165 Facebook \u540e\u57fa\u4e8e blaze \u6784\u5efa\u7684\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u52a0 opinionated"))),(0,l.kt)("li",{parentName:"ul"},"Bazel - Google",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e blaze \u6784\u5efa\u7684\u5f00\u6e90\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55\u6027\u66f4\u5f3a"),(0,l.kt)("li",{parentName:"ul"},"\u793e\u533a\u66f4\u5927"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u66f4\u6d3b\u8dc3")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Uber Buck -> Bazel"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/uploads/prod/2018/03/build-systems-final.pdf"},"https://www.microsoft.com/en-us/research/uploads/prod/2018/03/build-systems-final.pdf"))))}f.isMDXComponent=!0}}]);