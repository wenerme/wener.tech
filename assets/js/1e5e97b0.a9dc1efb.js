"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83240],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,v=m["".concat(p,".").concat(f)]||m[f]||l[f]||a;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34601:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"semver"},p=void 0,u={unversionedId:"dev/practice/semver",id:"dev/practice/semver",title:"semver",description:"* semver.org",source:"@site/notes/dev/practice/semver.md",sourceDirName:"dev/practice",slug:"/dev/practice/semver",permalink:"/notes/dev/practice/semver",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/practice/semver.md",tags:[],version:"current",frontMatter:{title:"semver"},sidebar:"docs",previous:{title:"\u5c0f\u7c73",permalink:"/notes/dev/platform/xiaomi"},next:{title:"\u9006\u5411\u5de5\u7a0b",permalink:"/notes/dev/reverse/"}},s=[],l={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://semver.org/"},"semver.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/semver/semver"},"semver/semver"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/semver/semver/master/semver.svg"},"semver.svg"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"([1-9]\\d*|0).([1-9]\\d*|0).([1-9]\\d*|0)\nmajor        minor        patch\n\npre-release:\n-\n0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*\n.\n0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*\n\nbuild:\n+\n[a-zA-Z0-9-]*\n.\n[a-zA-Z0-9-]*\n")))}m.isMDXComponent=!0}}]);