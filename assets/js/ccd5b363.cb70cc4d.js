"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32400],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5302:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],u={title:"K8S Distro Compare",slug:"k8s-distro-compare",tags:["Kubernetes","DevOps"]},c="K8S Distro K3S vs K0S",l={permalink:"/story/k8s-distro-compare",editUrl:"https://github.com/wenerme/wener/edit/master/story/2021/2021-07-25-k8s-distro-compare.md",source:"@site/story/2021/2021-07-25-k8s-distro-compare.md",title:"K8S Distro Compare",description:"K8S \u4f5c\u4e3a\u6700\u539f\u59cb\u7684\u9879\u76ee\uff0c\u6d3e\u751f\u51fa\u6765\u5f88\u591a \u5206\u652f/\u53d1\u5e03\u7248\u3002",date:"2021-07-25T00:00:00.000Z",formattedDate:"July 25, 2021",tags:[{label:"Kubernetes",permalink:"/story/tags/kubernetes"},{label:"DevOps",permalink:"/story/tags/dev-ops"}],readingTime:1.655,truncated:!0,nextItem:{title:"\u65e5\u5e38\u5de5\u4f5c\u4e4b\u5916",permalink:"/story/out-of-daily-work"}},p=[],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"K8S \u4f5c\u4e3a\u6700\u539f\u59cb\u7684\u9879\u76ee\uff0c\u6d3e\u751f\u51fa\u6765\u5f88\u591a \u5206\u652f/\u53d1\u5e03\u7248\u3002"),(0,a.kt)("p",null,"Kubernetes \u7684\u6838\u5fc3\u80fd\u529b\u4e3a\u8d44\u6e90\u8c03\u5ea6\uff0c\u4e3b\u8981\u8d44\u6e90\u4e3a Pod/\u5bb9\u5668\u7ec4/\u8ba1\u7b97\u8d44\u6e90\u3002\n\u56e0\u4e3a\u662f\u5206\u5e03\u5f0f\u591a\u8282\u70b9\uff0c\u6240\u4ee5\u5bf9\u7f51\u7edc\u6709\u8981\u6c42\u3002Pod \u8c03\u5ea6\u4e3b\u8981\u63d0\u4f9b\u8ba1\u7b97\u80fd\u529b\uff0c\u5b9e\u9645\u4f7f\u7528\u8fd8\u4f1a\u9700\u8981\u5b58\u50a8\u80fd\u529b\u3002\n\u4e5f\u5c31\u662f\u8bf4 Kubernetes \u6d89\u53ca\u5230\u6838\u5fc3\u7684\u4e09\u5143\u7d20"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8")),(0,a.kt)("p",null,"Kubernetes \u6838\u5fc3\u8c03\u5ea6\u8ba1\u7b97\u8d44\u6e90\uff0c\u4f46\u5bf9\u4e8e\u7f51\u7edc\u548c\u5b58\u50a8\u662f \u65e0\u610f\u89c1/Unopinioned \uff0c\u4f46\u5b9e\u9645\u90e8\u7f72\u4f7f\u7528\u65f6\u8fd9\u65f6\u5019\u53c8\u4e0d\u53ef\u907f\u514d\u7684\u8981\u9762\u5bf9\u8fd9\u4e9b\u95ee\u9898\u3002\n\u56e0\u6b64\u4e0d\u540c\u7684 \u53d1\u5e03\u7248/Distribution \u5c31\u662f\u5bf9\u8fd9\u4e9b\u95ee\u9898\u4e0d\u540c\u7684\u770b\u6cd5\u3002"))}f.isMDXComponent=!0}}]);