"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94852],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),b=l(r),p=o,f=b["".concat(c,".").concat(p)]||b[p]||s[p]||i;return r?n.createElement(f,u(u({ref:t},d),{},{components:r})):n.createElement(f,u({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},69486:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return b}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),u=["components"],a={title:"Build Cookbook",tags:["Cookbook"]},c=void 0,l={unversionedId:"dev/build/build-cookbook",id:"dev/build/build-cookbook",isDocsHomePage:!1,title:"Build Cookbook",description:"\u6784\u5efa\u4fe1\u606f",source:"@site/notes/dev/build/build-cookbook.md",sourceDirName:"dev/build",slug:"/dev/build/build-cookbook",permalink:"/notes/dev/build/build-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/build-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",frontMatter:{title:"Build Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"Build Awesome",permalink:"/notes/dev/build/build-awesome"},next:{title:"Bazel",permalink:"/notes/dev/build/bazel"}},d=[{value:"\u6784\u5efa\u4fe1\u606f",id:"\u6784\u5efa\u4fe1\u606f",children:[]}],s={toc:d};function b(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6784\u5efa\u4fe1\u606f"},"\u6784\u5efa\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"build_version=$(git describe --tags --always --dirty)\nbuild_time=$(date --rfc-3339=seconds)\n")))}b.isMDXComponent=!0}}]);