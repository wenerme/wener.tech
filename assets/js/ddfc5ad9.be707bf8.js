"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49592],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,v=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={title:"veth"},l=void 0,c={unversionedId:"os/linux/network/veth",id:"os/linux/network/veth",title:"veth",description:"- Virtual Ethernet Device - \u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907",source:"@site/notes/os/linux/network/veth.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/veth",permalink:"/notes/os/linux/network/veth",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/veth.md",tags:[],version:"current",frontMatter:{title:"veth"},sidebar:"docs",previous:{title:"tuntap",permalink:"/notes/os/linux/network/tuntap"},next:{title:"Linux Device",permalink:"/notes/os/linux/dev/"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Virtual Ethernet Device - \u865a\u62df\u4ee5\u592a\u7f51\u8bbe\u5907",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u6761\u7f51\u7ebf\uff0c\u6709\u4e24\u5934"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u8fde\u63a5\u4e0d\u540c\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u6865\u63a5\u4e0d\u540c\u7269\u7406\u8bbe\u5907"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u4ece\u4e00\u7aef\u63a5\u6536\u540e\u7acb\u5373\u4f20\u5230\u53e6\u4e00\u7aef"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u7aef down \u540e\u53e6\u4e00\u7aef\u4e5f\u65e0\u6cd5\u4f7f\u7528")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# veth0 \u548c veth1 \u4e3a\u7f51\u7ebf\u4e24\u7aef\nip link add veth0 type veth peer name veth1\n\n# \u4fee\u6539 veth0 \u5230 netns\nip link set veth0 netns ns1\n# \u521b\u5efa\u5230 netns\nip link add veth0 netns ns1 type veth peer veth1 netns ns2\n")))}f.isMDXComponent=!0}}]);