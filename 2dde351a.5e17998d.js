(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(1096)),i={id:"windows-faq",title:"Windows FAQ"},c={unversionedId:"os/windows/windows-faq",id:"os/windows/windows-faq",isDocsHomePage:!1,title:"Windows FAQ",description:"tuntap",source:"@site/notes/os/windows/windows-faq.md",slug:"/os/windows/windows-faq",permalink:"/notes/os/windows/windows-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-faq.md",version:"current",sidebar:"docs",previous:{title:"Windows \u73af\u5883",permalink:"/notes/os/windows/windows-env"},next:{title:"Windows XP",permalink:"/notes/os/windows/windows-xp"}},l=[{value:"tuntap",id:"tuntap",children:[]},{value:"AD vs LDAP",id:"ad-vs-ldap",children:[]},{value:"DC vs. AD - Domain Controllers vs. Active Directory",id:"dc-vs-ad---domain-controllers-vs-active-directory",children:[]},{value:"Extending Shortcut Menus",id:"extending-shortcut-menus",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tuntap"},"tuntap"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"openvpn \u63d0\u4f9b tuntap \u8bbe\u5907",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://build.openvpn.net/downloads/releases/"},"https://build.openvpn.net/downloads/releases/")),Object(o.b)("li",{parentName:"ul"},"Windows 10 x64 \u53ef\u80fd\u9700\u8981 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/slackhq/nebula/issues/9#issuecomment-761974328"},"\u4fee\u6539\u6ce8\u518c\u8868")))),Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/WireGuard/wintun"},"WireGuard/wintun"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"GPL, wintun.h \u53ef\u4ee5\u662f MIT"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/slackhq/nebula/pull/289"},"#289")," nebula \u652f\u6301 wintun")))),Object(o.b)("h2",{id:"ad-vs-ldap"},"AD vs LDAP"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"LDAP",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u6807\u51c6\u534f\u8bae"),Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u76ee\u5f55\u7684\u65b9\u5f0f\u8bbf\u95ee\u5b58\u50a8\u7684\u6570\u636e"),Object(o.b)("li",{parentName:"ul"},"\u672c\u8d28\u540e\u7aef\u662f\u4e00\u4e2a\u6570\u636e\u5e93"),Object(o.b)("li",{parentName:"ul"},"LDAP \u662f\u4e0e\u6570\u636e\u5e93\u7684\u901a\u4fe1\u534f\u8bae"))),Object(o.b)("li",{parentName:"ul"},"AD",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u79c1\u6709\u8f6f\u4ef6\u5e94\u7528"),Object(o.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u63d0\u9ad8\u4e86\u8ba4\u8bc1\uff0c\u76ee\u5f55\uff0c\u7b56\u7565\u7b49"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 LDAP \u7684\u65b9\u5f0f\u8fdb\u884c\u4ea4\u4e92")))),Object(o.b)("h2",{id:"dc-vs-ad---domain-controllers-vs-active-directory"},"DC vs. AD - Domain Controllers vs. Active Directory"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DC \u63d0\u4f9b AD \u670d\u52a1")),Object(o.b)("h2",{id:"extending-shortcut-menus"},"Extending Shortcut Menus"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/shell/context"},"https://docs.microsoft.com/en-us/windows/win32/shell/context")))}u.isMDXComponent=!0}}]);