(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1005:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1129)),c={title:"NextDNS"},i={unversionedId:"service/network/nextdns",id:"service/network/nextdns",isDocsHomePage:!1,title:"NextDNS",description:"- DoH \u4ee3\u7406\u5ba2\u6237\u7aef nextdns/nextdns",source:"@site/notes/service/network/nextdns.md",slug:"/service/network/nextdns",permalink:"/notes/service/network/nextdns",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/nextdns.md",version:"current",sidebar:"docs",previous:{title:"Network FAQ",permalink:"/notes/service/network/network-faq"},next:{title:"nps",permalink:"/notes/service/network/nps"}},l=[],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DoH \u4ee3\u7406\u5ba2\u6237\u7aef ",Object(o.b)("a",{parentName:"li",href:"https://github.com/nextdns/nextdns"},"nextdns/nextdns"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"conf"),Object(o.b)("th",{parentName:"tr",align:null},"value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"IPv4"),Object(o.b)("td",{parentName:"tr",align:null},"45.90.28.53",Object(o.b)("br",null),"45.90.30.53")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DoT/QUIC"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"<ID>.dns.nextdns.io"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"DoH"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"https://dns.nextdns.io/<ID>"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"IPv6"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"2a07:a8c0::<ID>:<ID>"),Object(o.b)("br",null),Object(o.b)("inlineCode",{parentName:"td"},"2a07:a8c1::<ID>:<ID>"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"dnsmasq")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-conf"},"no-resolv\nbogus-priv\nstrict-order\nserver=2a07:a8c1::\nserver=45.90.30.0\nserver=2a07:a8c0::\nserver=45.90.28.0\nadd-cpe-id=<ID>\n")))}p.isMDXComponent=!0},1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);