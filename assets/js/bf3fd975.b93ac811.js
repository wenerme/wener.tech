"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76232],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43596:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),l=["components"],i={tags:["Protocol"]},c="\u90ae\u4ef6\u534f\u8bae",p={unversionedId:"service/email/email-protocol",id:"service/email/email-protocol",title:"\u90ae\u4ef6\u534f\u8bae",description:"- SMTP - Simple Mail Transfer Protocol",source:"@site/../notes/service/email/email-protocol.md",sourceDirName:"service/email",slug:"/service/email/email-protocol",permalink:"/notes/service/email/email-protocol",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/email/email-protocol.md",tags:[{label:"Protocol",permalink:"/notes/tags/protocol"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{tags:["Protocol"]},sidebar:"docs",previous:{title:"EMail Awesome",permalink:"/notes/service/email/email-awesome"},next:{title:"Apache James",permalink:"/notes/service/email/james"}},u={},m=[],s={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u90ae\u4ef6\u534f\u8bae"},"\u90ae\u4ef6\u534f\u8bae"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SMTP - Simple Mail Transfer Protocol",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53d1\u4fe1"),(0,o.kt)("li",{parentName:"ul"},"\u7aef\u53e3 25 SSL 465"))),(0,o.kt)("li",{parentName:"ul"},"IMAP - Internet Message Access Protocol",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0e POP3 \u7c7b\u4f3c"),(0,o.kt)("li",{parentName:"ul"},"\u4f1a\u5c06\u90ae\u4ef6\u4fdd\u7559\u5728\u670d\u52a1\u5668\u4e0a"),(0,o.kt)("li",{parentName:"ul"},"\u6bd4 POP \u4f7f\u7528\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\u548c CPU \u8d44\u6e90"),(0,o.kt)("li",{parentName:"ul"},"\u7aef\u53e3 143 SSL 993"))),(0,o.kt)("li",{parentName:"ul"},"POP - Post Office Protocol",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6536\u4fe1"),(0,o.kt)("li",{parentName:"ul"},"\u534f\u8bae\u63d0\u4f9b\u7684\u529f\u80fd\u76f8\u5bf9\u7b80\u5355,\u53ea\u662f\u7b80\u5355\u7684\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6240\u6709\u90ae\u4ef6\u5e76\u5220\u9664."),(0,o.kt)("li",{parentName:"ul"},"\u7aef\u53e3 110 SSL 995"))),(0,o.kt)("li",{parentName:"ul"},"LMTP"),(0,o.kt)("li",{parentName:"ul"},"ManageSieve"),(0,o.kt)("li",{parentName:"ul"},"JMAP"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc3501"},"rfc3501"))))}f.isMDXComponent=!0}}]);