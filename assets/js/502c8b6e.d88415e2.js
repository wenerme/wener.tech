"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22754],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),s=a,k=f["".concat(p,".").concat(s)]||f[s]||m[s]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43793:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return N}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e};const f={title:"12 factor"},s="12 factor",k={unversionedId:"dev/theory/12factor",id:"dev/theory/12factor",title:"12 factor",description:"1. \u57fa\u51c6\u4ee3\u7801/Codebase",source:"@site/../notes/dev/theory/12factor.md",sourceDirName:"dev/theory",slug:"/dev/theory/12factor",permalink:"/notes/dev/theory/12factor",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/theory/12factor.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1665372565,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"12 factor"},sidebar:"docs",previous:{title:"\u7406\u8bba",permalink:"/notes/dev/theory/"},next:{title:"Actor",permalink:"/notes/dev/theory/actor"}},d={},N=[],y={toc:N};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"12-factor"}),"12 factor"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u57fa\u51c6\u4ee3\u7801/Codebase",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4efd\u57fa\u51c6\u4ee3\u7801\uff0c\u591a\u4efd\u90e8\u7f72"),(0,n.kt)("li",{parentName:"ul"},"CI/CD"))),(0,n.kt)("li",{parentName:"ol"},"\u4f9d\u8d56/Dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u663e\u5f0f\u58f0\u660e\u4f9d\u8d56\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u8bed\u8a00\u6709\u4e0d\u540c\u7684\u4f18\u52bf\u52a3\u52bf"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go - \u8de8\u5e73\u53f0 \u65e0\u4f9d\u8d56"),(0,n.kt)("li",{parentName:"ul"},"NodeJS - node_modules \u975e\u5e38\u5e9e\u5927"),(0,n.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4f9d\u8d56 - Linux, Windows"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883\u4f9d\u8d56 - node, nginx, apache"))))),(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e/Config",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u73af\u5883\u4e2d\u5b58\u50a8\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"\u9759\u6001\u914d\u7f6e - \u672c\u5730"),(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u914d\u7f6e - consul\u3001configmap"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6 - runtimevar"))),(0,n.kt)("li",{parentName:"ol"},"\u540e\u7aef\u670d\u52a1/Backing services",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u628a\u540e\u7aef\u670d\u52a1\u5f53\u4f5c\u9644\u52a0\u8d44\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e4b\u95f4\u4f9d\u8d56"))),(0,n.kt)("li",{parentName:"ol"},"\u6784\u5efa\uff0c\u53d1\u5e03\uff0c\u8fd0\u884c/Build, release, run",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e25\u683c\u5206\u79bb\u6784\u5efa\u548c\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"CI/CD"))),(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u7a0b/Processes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u4e00\u4e2a\u6216\u591a\u4e2a\u65e0\u72b6\u6001\u8fdb\u7a0b\u8fd0\u884c\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u5355\u4e2a\u5bb9\u5668\u3001nginx"),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u786e\u4fdd \u7075\u6d3b\u3001\u6269\u5bb9\u3001\u7f29\u5bb9"))),(0,n.kt)("li",{parentName:"ol"},"\u7aef\u53e3\u7ed1\u5b9a/Port binding",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7aef\u53e3\u7ed1\u5b9a\u63d0\u4f9b\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982: Ingress, Gateway, 8080"))),(0,n.kt)("li",{parentName:"ol"},"\u5e76\u53d1/Concurrency",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8fdb\u7a0b\u6a21\u578b\u8fdb\u884c\u6269\u5c55"))),(0,n.kt)("li",{parentName:"ol"},"\u6613\u5904\u7406/Disposability",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5feb\u901f\u542f\u52a8\u548c\u4f18\u96c5\u7ec8\u6b62\u53ef\u6700\u5927\u5316\u5065\u58ee\u6027"))),(0,n.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u73af\u5883\u4e0e\u7ebf\u4e0a\u73af\u5883\u7b49\u4ef7/Dev/prod parity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u7684\u4fdd\u6301\u5f00\u53d1\uff0c\u9884\u53d1\u5e03\uff0c\u7ebf\u4e0a\u73af\u5883\u76f8\u540c"))),(0,n.kt)("li",{parentName:"ol"},"\u65e5\u5fd7/Logs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u628a\u65e5\u5fd7\u5f53\u4f5c\u4e8b\u4ef6\u6d41"))),(0,n.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u8fdb\u7a0b/Admin process",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u540e\u53f0\u7ba1\u7406\u4efb\u52a1\u5f53\u4f5c\u4e00\u6b21\u6027\u8fdb\u7a0b\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u6570\u636e\u5e93\u521d\u59cb\u5316\u3001schema \u8fc1\u79fb\u3001\u5916\u90e8\u670d\u52a1\u914d\u7f6e")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://12factor.net/"}),"https://12factor.net/")),(0,n.kt)("li",{parentName:"ul"},"SDLC - Software Development Lifecycle",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u5f00\u53d1\u751f\u547d\u5468\u671f"))),(0,n.kt)("li",{parentName:"ul"},"\u5728\u73b0\u4ee3\u7684\u73af\u5883\u4e2d\u4e5f\u90fd\u80fd\u627e\u5230\u76f8\u5bf9\u5e94\u7684\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u573a\u666f\u4e0b\u4e0d\u540c\u7684\u6b65\u9aa4\u6d89\u53ca\u4e0d\u540c\u7684\u7ec4\u5efa")))}b.isMDXComponent=!0}}]);