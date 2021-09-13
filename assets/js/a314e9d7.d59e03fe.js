"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31391],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(f,a(a({ref:r},s),{},{components:n})):t.createElement(f,a({ref:r},s))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11419:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"privoxy-action",title:"Privoxy Action"},l=void 0,p={unversionedId:"service/network/privoxy-action",id:"service/network/privoxy-action",isDocsHomePage:!1,title:"Privoxy Action",description:"* Action file",source:"@site/notes/service/network/privoxy-action.md",sourceDirName:"service/network",slug:"/service/network/privoxy-action",permalink:"/notes/service/network/privoxy-action",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/privoxy-action.md",tags:[],version:"current",frontMatter:{id:"privoxy-action",title:"Privoxy Action"},sidebar:"docs",previous:{title:"Privoxy",permalink:"/notes/service/network/privoxy"},next:{title:"\u4ee3\u7406",permalink:"/notes/service/network/proxy-awesome"}},s=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[]},{value:"\u91cd\u5b9a\u5411 google \u7684\u641c\u7d22\u7ed3\u679c\u4e3a https",id:"\u91cd\u5b9a\u5411-google-\u7684\u641c\u7d22\u7ed3\u679c\u4e3a-https",children:[]},{value:"\u8986\u76d6\u8f6c\u53d1",id:"\u8986\u76d6\u8f6c\u53d1",children:[{value:"match-all.action",id:"match-allaction",children:[]}]}],u={toc:s};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.privoxy.org/user-manual/actions-file.html"},"Action file"))),(0,i.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"+name # \u542f\u7528 Action\n-name # \u7981\u7528 Action\n\n+name{param} # \u542f\u7528\u5e26\u53c2\u6570\n")),(0,i.kt)("h2",{id:"\u91cd\u5b9a\u5411-google-\u7684\u641c\u7d22\u7ed3\u679c\u4e3a-https"},"\u91cd\u5b9a\u5411 google \u7684\u641c\u7d22\u7ed3\u679c\u4e3a https"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"{+redirect{s@^http://[^/]*/search\\?q=([^&]*).*@https://encrypted.google.com/search?q=$1@}}\n.google.*/search\n")),(0,i.kt)("h2",{id:"\u8986\u76d6\u8f6c\u53d1"},"\u8986\u76d6\u8f6c\u53d1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# \u8f6c\u53d1\u7279\u5b9a\u57df\u540d\u5230\u7279\u5b9a\u8fdc\u7a0b Socks\n{+forward-override{forward-socks5t 127.0.0.1:1080 .}}\n*.wener.me\n\n# \u8fdc\u7a0b http proxy \u534f\u8bae\n{+forward-override{forward 127.0.0.1:8123 }}\n*.wener.me\n\n# \u76f4\u63a5\u8bf7\u6c42\n{+forward-override{forward .}}\n*.wener.me\n\n# \u8bf7\u6c42 Web \u7aef\u53e3\n{+forward-override{forward-webserver 127.0.0.1:80}}\n*.wener.me\n\n")),(0,i.kt)("h3",{id:"match-allaction"},"match-all.action"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"{ \\\n# \u79fb\u9664 X-Forwarded-For\n+change-x-forwarded-for{block} \\\n# \u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u6dfb\u52a0\u6807\u8bb0\n+client-header-tagger{css-requests} \\\n+client-header-tagger{image-requests} \\\n+client-header-tagger{range-requests} \\\n# \u79fb\u9664\u90ae\u7bb1\n+hide-from-header{block} \\\n# \u8bbe\u7f6e\u5982\u4f55\u963b\u585e\u56fe\u7247\n+set-image-blocker{pattern} \\\n}\n# \u5339\u914d\u6240\u6709 URL\n/\n")))}d.isMDXComponent=!0}}]);