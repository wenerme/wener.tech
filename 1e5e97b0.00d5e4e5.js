(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1096:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return t?a.a.createElement(f,i(i({ref:r},s),{},{components:t})):a.a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},197:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(8),o=(t(0),t(1096)),c={title:"semver"},i={unversionedId:"dev/practice/semver",id:"dev/practice/semver",isDocsHomePage:!1,title:"semver",description:"* semver.org",source:"@site/notes/dev/practice/semver.md",slug:"/dev/practice/semver",permalink:"/notes/dev/practice/semver",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/practice/semver.md",version:"current",sidebar:"docs",previous:{title:"WeChat",permalink:"/notes/dev/platform/wechat"},next:{title:"BitTorrent",permalink:"/notes/dev/protocol/bittorrent"}},p=[],s={toc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://semver.org/"},"semver.org")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/semver/semver"},"semver/semver"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/semver/semver/master/semver.svg"},"semver.svg"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"([1-9]\\d*|0).([1-9]\\d*|0).([1-9]\\d*|0)\nmajor        minor        patch\n\npre-release:\n-\n0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*\n.\n0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*\n\nbuild:\n+\n[a-zA-Z0-9-]*\n.\n[a-zA-Z0-9-]*\n")))}u.isMDXComponent=!0}}]);