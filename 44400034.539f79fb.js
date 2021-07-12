(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return w}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,w=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(w,c(c({ref:t},p),{},{components:n})):o.a.createElement(w,c({ref:t},p))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(1129)),i={id:"windows-dc",title:"Windows \u57df\u63a7"},c={unversionedId:"os/windows/windows-dc",id:"os/windows/windows-dc",isDocsHomePage:!1,title:"Windows \u57df\u63a7",description:"Tips",source:"@site/notes/os/windows/windows-dc.md",slug:"/os/windows/windows-dc",permalink:"/notes/os/windows/windows-dc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-dc.md",version:"current",sidebar:"docs",previous:{title:"Windows \u547d\u4ee4",permalink:"/notes/os/windows/windows-cmd"},next:{title:"Windows \u73af\u5883",permalink:"/notes/os/windows/windows-env"}},s=[{value:"Tips",id:"tips",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Domain_controller_(Windows)"},"Domain controller")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://support.microsoft.com/kb/247811"},"How domain controllers are located in Windows")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/NT_LAN_Manager"},"https://en.wikipedia.org/wiki/NT_LAN_Manager")),Object(a.b)("li",{parentName:"ul"},"NTLM ",Object(a.b)("a",{parentName:"li",href:"https://www.onlinehashcrack.com/"},"https://www.onlinehashcrack.com/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://support.microsoft.com/en-hk/help/102716"},"NTLM user authentication in Windows")),Object(a.b)("li",{parentName:"ul"},"NTLMv2",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://kb.iu.edu/d/atcb"},"https://kb.iu.edu/d/atcb"))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'ntlm_auth --allow-mschapv2 --request-nt-key --domain=COMPANY --username=domainuser --password=userpassword\n\nntlm_auth = "/usr/bin/ntlm_auth --allow-mschapv2 --request-nt-key\n--username=%{%{Stripped-User-Name}:-%{%{User-Name}:-None}}\n--challenge=%{%{mschap:Challenge}:-00}\n--nt-response=%{%{mschap:NT-Response}:-00}"\n')))}l.isMDXComponent=!0}}]);