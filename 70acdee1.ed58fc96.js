(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||l[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},549:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(1152)),i={title:"Debian FAQ"},c={unversionedId:"os/debian/debian-faq",id:"os/debian/debian-faq",isDocsHomePage:!1,title:"Debian FAQ",description:"\u67e5\u627e\u6587\u4ef6\u6240\u5c5e\u5305",source:"@site/notes/os/debian/debian-faq.md",slug:"/os/debian/debian-faq",permalink:"/notes/os/debian/debian-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/debian/debian-faq.md",version:"current",sidebar:"docs",previous:{title:"Debian",permalink:"/notes/os/debian/debian"},next:{title:"Debian \u7248\u672c",permalink:"/notes/os/debian/debian-version"}},s=[{value:"\u67e5\u627e\u6587\u4ef6\u6240\u5c5e\u5305",id:"\u67e5\u627e\u6587\u4ef6\u6240\u5c5e\u5305",children:[]},{value:"\u4f7f\u7528 backports",id:"\u4f7f\u7528-backports",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u67e5\u627e\u6587\u4ef6\u6240\u5c5e\u5305"},"\u67e5\u627e\u6587\u4ef6\u6240\u5c5e\u5305"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"dpkg -S /usr/lib/asterisk/modules/codec_opus_open_source.so\n")),Object(o.b)("h2",{id:"\u4f7f\u7528-backports"},"\u4f7f\u7528 backports"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u4ece backport \u5b89\u88c5\u5355\u4e2a\u5305\napt-get install asterisk/buster-backports\n\n# \u4ece backport \u5b89\u88c5\napt-get install -t buster-backports asterisk\n")))}u.isMDXComponent=!0}}]);