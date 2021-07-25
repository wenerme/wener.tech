(window.webpackJsonp=window.webpackJsonp||[]).push([[1085],{1158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),l=(n(0),n(1169)),c={title:"AT \u6307\u4ee4"},o={unversionedId:"service/telecom/mobile/at",id:"service/telecom/mobile/at",isDocsHomePage:!1,title:"AT \u6307\u4ee4",description:"- Hayes command set/AT command set",source:"@site/notes/service/telecom/mobile/at.md",slug:"/service/telecom/mobile/at",permalink:"/notes/service/telecom/mobile/at",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/telecom/mobile/at.md",version:"current",sidebar:"docs",previous:{title:"\u7535\u4fe1\u8bbe\u5907\u548c\u4ea7\u54c1",permalink:"/notes/service/telecom/telecom-product"},next:{title:"Linux GSM",permalink:"/notes/service/telecom/mobile/linux-gsm"}},i=[{value:"\u5386\u53f2",id:"\u5386\u53f2",children:[]},{value:"\u534f\u8bae",id:"\u534f\u8bae",children:[]},{value:"cellular extensions",id:"cellular-extensions",children:[]}],b={toc:i};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Hayes command set/AT command set"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E6%B5%B7%E6%96%AF%E5%91%BD%E4%BB%A4%E9%9B%86"},"https://zh.wikipedia.org/wiki/\u6d77\u65af\u547d\u4ee4\u96c6"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# http://m2msupport.net/m2msupport/atcardlock-card-lock-command/\nAT^CARDLOCK?\n^CARDLOCK: 1,10,0 # \u9501\u5b9a\n^CARDLOCK: 2,10,0 # \u672a\u9501\u5b9a\n# ^CARDLOCK: A,B,C\n# A: 1 \u9501\u5b9a 2 \u672a\u9501\u5b9a, B: \u5269\u4f59\u6b21\u6570, C: \u4f7f\u7528\u7684\u6b21\u6570\n\n# \u6d4b\u8bd5\u662f\u5426\u6709 AT \u547d\u4ee4\nAT\n# \u6a21\u578b\u53f7\nAT+CGMM\n# \u5236\u9020\u5546\nAT+CGMI\n\n# \u4fee\u6539\u5de5\u4f5c\u6a21\u5f0f\n# http://m2msupport.net/m2msupport/atu2diag-set-the-device-mode/\nAT^U2DIAG=$MODE\n# 0 Modem, 1 modem mode + CD ROM, 255 modem mode + CD ROM + Card Reader,  256 modem mode + Card Reader\n\n# \u67e5\u770b\u7cfb\u7edf\u72b6\u6001\n# http://m2msupport.net/m2msupport/atsysinfo-get-the-system-mode/\nAT^SYSINFO\n\n# IMEI\nAT+CGSN\nATD*#06#\n\n")),Object(l.b)("h2",{id:"\u5386\u53f2"},"\u5386\u53f2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"V.250\uff1a\u8be5\u6807\u51c6\u4e8e 1995 \u5e74\u5efa\u7acb\uff0c1998 \u5e74\u91cd\u547d\u540d\u4e3a V.250"),Object(l.b)("li",{parentName:"ul"},"ETSI GSM 07.07\uff083GPP TS 27.007\uff09\uff1a\u7528\u4e8e\u63a7\u5236 GSM modem \u7684 AT \u6307\u4ee4\u96c6"),Object(l.b)("li",{parentName:"ul"},"GSM 07.07 \u662f\u57fa\u4e8e V.250 \u6807\u51c6\u7684\u3002\u662f\u76ee\u524d\u6700\u65b0\u7684 AT \u6807\u51c6\u3002"),Object(l.b)("li",{parentName:"ul"},"\u8702\u7a9d\u6a21\u5757\u3001WiFi \u6a21\u5757\u3001BLE \u6a21\u5757\u4e2d\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u7b80\u5316\u5d4c\u5165\u5f0f\u8bbe\u5907\u8054\u7f51\u7684\u590d\u6742\u5ea6")),Object(l.b)("h2",{id:"\u534f\u8bae"},"\u534f\u8bae"),Object(l.b)("p",null,"AT \u6807\u51c6\u5b9a\u4e49\u4e86 AT \u547d\u4ee4\u7684\u683c\u5f0f\u672c\u8eab\uff0c\u6bd4\u5982\u547d\u4ee4\u4ee5 AT \u4e3a\u524d\u7f00\u5f00\u5934\uff0c\u4ee5 \u6216\u8005 \u7ed3\u5c3e\uff0c\u8fd9\u88ab\u73b0\u6709\u7684 AT \u6a21\u5757\u6240\u5ef6\u7528\u3002"),Object(l.b)("p",null,'AT \u5f00\u59cb\uff0c\u4ee5 \\r \u6216\u8005 \\r\\n \u7ed3\u5c3e\uff0c\u53c2\u6570\u4e4b\u95f4\u4f7f\u7528 , \u9694\u5f00\uff0c\u5b57\u7b26\u4e32\u53c2\u6570\u4f7f\u7528\u53cc\u5f15\u53f7 "" \u5305\u88f9\uff0c\u6574\u5f62\u53c2\u6570\u4e0d\u9002\u7528\u53cc\u5f15\u53f7\u3002'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Format"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"AT+<x>=?")),Object(l.b)("td",{parentName:"tr",align:null},"Test")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"AT+<x>?")),Object(l.b)("td",{parentName:"tr",align:null},"Read")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"AT+<x>=<...>")),Object(l.b)("td",{parentName:"tr",align:null},"Set")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"AT+<x>")),Object(l.b)("td",{parentName:"tr",align:null},"Execute")))),Object(l.b)("p",null,"\u5728\u6536\u5230 +++\uff0c\u5e76\u4e14\u63a5\u4e0b\u6765 1s \u5185\u672a\u6536\u5230\u5176\u4ed6\u6570\u636e\u7684\u8bdd\uff0c\u5c06\u4ece\u6570\u636e\u6a21\u5f0f\u5207\u6362\u5230\u6307\u4ee4\u6a21\u5f0f\u3002\n\u6570\u636e\u6a21\u5f0f\uff0c\u53ef\u4ee5\u900f\u4f20\u6570\u636e\uff0cclient \u53d1\u4ec0\u4e48\uff0cserver \u5c31\u539f\u5c01\u4e0d\u52a8\u53d1\u51fa\u53bb\u3002\u6307\u4ee4\u6a21\u5f0f\u65f6\uff0cAT Server \u9700\u8981\u89e3\u6790 AT \u6307\u4ee4\uff0c\u5e76\u4f5c\u51fa\u54cd\u5e94\u3002"),Object(l.b)("h2",{id:"cellular-extensions"},"cellular extensions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"cellular extensions - \u8702\u7a9d\u7f51\u7edc\u6269\u5145\u547d\u4ee4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b0\u7684\u9ad8\u901a\u5904\u7406\u5668\u4f7f\u7528 QMI \u66ff\u4ee3")))))}m.isMDXComponent=!0},1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),m=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,s=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?a.a.createElement(s,o(o({ref:t},b),{},{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);