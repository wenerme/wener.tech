(window.webpackJsonp=window.webpackJsonp||[]).push([[698],{1172:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=t,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:r},p),{},{components:n})):o.a.createElement(m,c({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},772:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(3),o=n(8),a=(n(0),n(1172)),i={id:"privoxy-action",title:"Privoxy Action"},c={unversionedId:"service/network/privoxy-action",id:"service/network/privoxy-action",isDocsHomePage:!1,title:"Privoxy Action",description:"* Action file",source:"@site/notes/service/network/privoxy-action.md",slug:"/service/network/privoxy-action",permalink:"/notes/service/network/privoxy-action",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/privoxy-action.md",version:"current",sidebar:"docs",previous:{title:"Pi Hole",permalink:"/notes/service/network/pihole"},next:{title:"Privoxy",permalink:"/notes/service/network/privoxy"}},l=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[]},{value:"\u91cd\u5b9a\u5411 google \u7684\u641c\u7d22\u7ed3\u679c\u4e3a https",id:"\u91cd\u5b9a\u5411-google-\u7684\u641c\u7d22\u7ed3\u679c\u4e3a-https",children:[]},{value:"\u8986\u76d6\u8f6c\u53d1",id:"\u8986\u76d6\u8f6c\u53d1",children:[{value:"match-all.action",id:"match-allaction",children:[]}]}],p={toc:l};function s(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.privoxy.org/user-manual/actions-file.html"},"Action file"))),Object(a.b)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"+name # \u542f\u7528 Action\n-name # \u7981\u7528 Action\n\n+name{param} # \u542f\u7528\u5e26\u53c2\u6570\n")),Object(a.b)("h2",{id:"\u91cd\u5b9a\u5411-google-\u7684\u641c\u7d22\u7ed3\u679c\u4e3a-https"},"\u91cd\u5b9a\u5411 google \u7684\u641c\u7d22\u7ed3\u679c\u4e3a https"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"{+redirect{s@^http://[^/]*/search\\?q=([^&]*).*@https://encrypted.google.com/search?q=$1@}}\n.google.*/search\n")),Object(a.b)("h2",{id:"\u8986\u76d6\u8f6c\u53d1"},"\u8986\u76d6\u8f6c\u53d1"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"# \u8f6c\u53d1\u7279\u5b9a\u57df\u540d\u5230\u7279\u5b9a\u8fdc\u7a0b Socks\n{+forward-override{forward-socks5t 127.0.0.1:1080 .}}\n*.wener.me\n\n# \u8fdc\u7a0b http proxy \u534f\u8bae\n{+forward-override{forward 127.0.0.1:8123 }}\n*.wener.me\n\n# \u76f4\u63a5\u8bf7\u6c42\n{+forward-override{forward .}}\n*.wener.me\n\n# \u8bf7\u6c42 Web \u7aef\u53e3\n{+forward-override{forward-webserver 127.0.0.1:80}}\n*.wener.me\n\n")),Object(a.b)("h3",{id:"match-allaction"},"match-all.action"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"{ \\\n# \u79fb\u9664 X-Forwarded-For\n+change-x-forwarded-for{block} \\\n# \u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u6dfb\u52a0\u6807\u8bb0\n+client-header-tagger{css-requests} \\\n+client-header-tagger{image-requests} \\\n+client-header-tagger{range-requests} \\\n# \u79fb\u9664\u90ae\u7bb1\n+hide-from-header{block} \\\n# \u8bbe\u7f6e\u5982\u4f55\u963b\u585e\u56fe\u7247\n+set-image-blocker{pattern} \\\n}\n# \u5339\u914d\u6240\u6709 URL\n/\n")))}s.isMDXComponent=!0}}]);