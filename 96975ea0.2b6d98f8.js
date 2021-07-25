(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,O=u["".concat(i,".").concat(m)]||u[m]||s[m]||c;return n?r.a.createElement(O,l(l({ref:t},p),{},{components:n})):r.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},717:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),c=(n(0),n(1169)),i={id:"http",title:"HTTP"},l={unversionedId:"ops/network/application/http",id:"ops/network/application/http",isDocsHomePage:!1,title:"HTTP",description:"- 301 vs 302",source:"@site/notes/ops/network/application/http.md",slug:"/ops/network/application/http",permalink:"/notes/ops/network/application/http",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/application/http.md",version:"current",sidebar:"docs",previous:{title:"DNS",permalink:"/notes/ops/network/application/dns"},next:{title:"SNMP",permalink:"/notes/ops/network/application/snmp"}},o=[{value:"CORS",id:"cors",children:[]},{value:"HTTP2",id:"http2",children:[]},{value:"QUIC",id:"quic",children:[]},{value:"Digest",id:"digest",children:[]}],p={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"301 vs 302",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"301 Moved Permanently"),Object(c.b)("li",{parentName:"ul"},"302 Found / Moved Temporarily")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"# \u5355\u4f4d\u4e3a\u79d2\nCache-Control: public, max-age=3600\nExpires: Thu, 01 Dec 2014 16:00:00 GMT\n")),Object(c.b)("h2",{id:"cors"},"CORS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5141\u8bb8\u5934",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Cache-Control"),Object(c.b)("li",{parentName:"ul"},"Content-Language"),Object(c.b)("li",{parentName:"ul"},"Content-Type"),Object(c.b)("li",{parentName:"ul"},"Expires"),Object(c.b)("li",{parentName:"ul"},"Last-Modified"),Object(c.b)("li",{parentName:"ul"},"Pragma"))),Object(c.b)("li",{parentName:"ul"},"access-control-expose-headers - \u63a7\u5236\u66b4\u9732\u5934")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"# \u8bf7\u6c42\nAccess-Control-Request-Headers: authorization\nAccess-Control-Request-Method: GET\n\n# \u54cd\u5e94\nAccess-Control-Allow-Headers: authorization\nAccess-Control-Allow-Methods: POST,GET\nAccess-Control-Allow-Origin: http://127.0.0.1:3000\n")),Object(c.b)("h2",{id:"http2"},"HTTP2"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/http2-and-spdy-indicator/mpbpobfflnpcgagjijhmgnchggcjblin"},"HTTP/2 and SPDY indicator")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"chrome://net-internals/#http2"},"chrome://net-internals/#http2"))),Object(c.b)("h2",{id:"quic"},"QUIC"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Quick UDP Internet Connections"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/FelisCatus/SwitchyOmega/issues/706"},"SwitchyOmega#706")," - Support QUIC proxies"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"chrome://net-internals/#quic"},"chrome://net-internals/#quic")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/QUIC"},"https://en.wikipedia.org/wiki/QUIC")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/curl/curl/wiki/QUIC"},"https://github.com/curl/curl/wiki/QUIC")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.chromium.org/quic"},"https://www.chromium.org/quic")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/mholt/caddy/wiki/QUIC"},"https://github.com/mholt/caddy/wiki/QUIC")),Object(c.b)("li",{parentName:"ul"},"QUIC \u5e0c\u671b\u80fd\u591f\u63d0\u4f9b\u7b49\u540c\u4e8e SSL/TLS \u5c42\u7ea7\u7684\u7f51\u7edc\u5b89\u5168\u4fdd\u62a4\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u53ca\u521b\u5efa\u8fde\u63a5\u65f6\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u53cc\u5411\u63a7\u5236\u5e26\u5bbd\uff0c\u4ee5\u907f\u514d\u7f51\u7edc\u62e5\u585e\u3002")),Object(c.b)("h2",{id:"digest"},"Digest"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Digest_access_authentication"},"Digest access authentication")),Object(c.b)("li",{parentName:"ul"},"\u73b0\u5728\u4f7f\u7528 digest \u573a\u666f\u6bd4\u8f83\u5c11 - \u56e0\u4e3a\u9700\u8981\u5b58\u50a8\u660e\u6587"),Object(c.b)("li",{parentName:"ul"},"SIP \u4f7f\u7528 digest"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u822c\u4f7f\u7528 Basic over HTTPS"),Object(c.b)("li",{parentName:"ul"},"\u7b97\u6cd5",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"MD5"),Object(c.b)("li",{parentName:"ul"},"MD5-sess - HA1 = MD5(MD5(username:realm:password):nonce:cnonce)"),Object(c.b)("li",{parentName:"ul"},"SHA-256"),Object(c.b)("li",{parentName:"ul"},"SHA-256-sess"),Object(c.b)("li",{parentName:"ul"},"SHA-512"),Object(c.b)("li",{parentName:"ul"},"SHA-512-sess"))),Object(c.b)("li",{parentName:"ul"},"qop - quality of protection",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"auth",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HA2 = MD5(method:digestURI)"),Object(c.b)("li",{parentName:"ul"},"response = MD5(HA1:nonce:nonceCount:cnonce:qop:HA2)"))),Object(c.b)("li",{parentName:"ul"},"auth-int",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HA2 = MD5(method:digestURI:MD5(entityBody))"),Object(c.b)("li",{parentName:"ul"},"response = MD5(HA1:nonce:nonceCount:cnonce:qop:HA2)"))),Object(c.b)("li",{parentName:"ul"},"\u65e0 - response = MD5(HA1:nonce:HA2)")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"HA1 = MD5(username:realm:password)\nHA2 = MD5(method:digestURI)\nresponse = MD5(HA1:nonce:HA2)\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u8fd4\u56de challange")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-http"},'HTTP/1.0 401 Unauthorized\nServer: HTTPd/0.9\nDate: Sun, 10 Apr 2014 20:26:47 GMT\nWWW-Authenticate: Digest realm="testrealm@host.com",\n                        qop="auth,auth-int",\n                        nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",\n                        opaque="5ccc069c403ebaf9f0171e9517f40e41"\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5e26 Auth \u8bf7\u6c42")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-http"},'GET /dir/index.html HTTP/1.0\nHost: localhost\nAuthorization: Digest username="Mufasa",\n                     realm="testrealm@host.com",\n                     nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",\n                     uri="/dir/index.html",\n                     qop=auth,\n                     nc=00000001,\n                     cnonce="0a4f113b",\n                     response="6629fae49393a05397450978507c4ef1",\n                     opaque="5ccc069c403ebaf9f0171e9517f40e41"\n')))}b.isMDXComponent=!0}}]);