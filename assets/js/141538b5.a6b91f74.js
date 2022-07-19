"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77560],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(d,i(i({ref:e},c),{},{components:n})):a.createElement(d,i({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96854:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"HTTP"},p=void 0,u={unversionedId:"network/application/http",id:"network/application/http",title:"HTTP",description:"- \u53c2\u8003",source:"@site/notes/network/application/http.md",sourceDirName:"network/application",slug:"/network/application/http",permalink:"/notes/network/application/http",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/network/application/http.md",tags:[],version:"current",frontMatter:{title:"HTTP"},sidebar:"docs",previous:{title:"DNS",permalink:"/notes/network/application/dns"},next:{title:"SNMP",permalink:"/notes/network/application/snmp"}},c={},s=[{value:"Status",id:"status",level:2},{value:"CORS",id:"cors",level:2},{value:"HTTP2",id:"http2",level:2},{value:"QUIC",id:"quic",level:2},{value:"Digest",id:"digest",level:2},{value:"Forwarded",id:"forwarded",level:2},{value:"X-Content-Type-Options",id:"x-content-type-options",level:2},{value:"Strict-Transport-Security",id:"strict-transport-security",level:2},{value:"Encoding",id:"encoding",level:2},{value:"Transfer-Encoding vs Content-Encoding",id:"transfer-encoding-vs-content-encoding",level:2},{value:"301 vs 302",id:"301-vs-302",level:2}],m={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/id/draft-wright-http-partial-upload-01.html"},"https://tools.ietf.org/id/draft-wright-http-partial-upload-01.html"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5355\u4f4d\u4e3a\u79d2\nCache-Control: public, max-age=3600\nExpires: Thu, 01 Dec 2014 16:00:00 GMT\n")),(0,l.kt)("h2",{id:"status"},"Status"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"status"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},"RFC 7235")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"))),(0,l.kt)("h2",{id:"cors"},"CORS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5141\u8bb8\u5934",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Cache-Control"),(0,l.kt)("li",{parentName:"ul"},"Content-Language"),(0,l.kt)("li",{parentName:"ul"},"Content-Type"),(0,l.kt)("li",{parentName:"ul"},"Expires"),(0,l.kt)("li",{parentName:"ul"},"Last-Modified"),(0,l.kt)("li",{parentName:"ul"},"Pragma"))),(0,l.kt)("li",{parentName:"ul"},"access-control-expose-headers - \u63a7\u5236\u66b4\u9732\u5934")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u8bf7\u6c42\nAccess-Control-Request-Headers: authorization\nAccess-Control-Request-Method: GET\n\n# \u54cd\u5e94\nAccess-Control-Allow-Headers: authorization\nAccess-Control-Allow-Methods: POST,GET\nAccess-Control-Allow-Origin: http://127.0.0.1:3000\n")),(0,l.kt)("h2",{id:"http2"},"HTTP2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/http2-and-spdy-indicator/mpbpobfflnpcgagjijhmgnchggcjblin"},"HTTP/2 and SPDY indicator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"chrome://net-internals/#http2"},"chrome://net-internals/#http2"))),(0,l.kt)("h2",{id:"quic"},"QUIC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quick UDP Internet Connections"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/FelisCatus/SwitchyOmega/issues/706"},"SwitchyOmega#706")," - Support QUIC proxies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"chrome://net-internals/#quic"},"chrome://net-internals/#quic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/QUIC"},"https://en.wikipedia.org/wiki/QUIC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/curl/curl/wiki/QUIC"},"https://github.com/curl/curl/wiki/QUIC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.chromium.org/quic"},"https://www.chromium.org/quic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mholt/caddy/wiki/QUIC"},"https://github.com/mholt/caddy/wiki/QUIC")),(0,l.kt)("li",{parentName:"ul"},"QUIC \u5e0c\u671b\u80fd\u591f\u63d0\u4f9b\u7b49\u540c\u4e8e SSL/TLS \u5c42\u7ea7\u7684\u7f51\u7edc\u5b89\u5168\u4fdd\u62a4\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u53ca\u521b\u5efa\u8fde\u63a5\u65f6\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u53cc\u5411\u63a7\u5236\u5e26\u5bbd\uff0c\u4ee5\u907f\u514d\u7f51\u7edc\u62e5\u585e\u3002")),(0,l.kt)("h2",{id:"digest"},"Digest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Digest_access_authentication"},"Digest access authentication")),(0,l.kt)("li",{parentName:"ul"},"\u73b0\u5728\u4f7f\u7528 digest \u573a\u666f\u6bd4\u8f83\u5c11 - \u56e0\u4e3a\u9700\u8981\u5b58\u50a8\u660e\u6587"),(0,l.kt)("li",{parentName:"ul"},"SIP \u4f7f\u7528 digest"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4f7f\u7528 Basic over HTTPS"),(0,l.kt)("li",{parentName:"ul"},"\u7b97\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MD5"),(0,l.kt)("li",{parentName:"ul"},"MD5-sess - HA1 = MD5(MD5(username:realm:password):nonce:cnonce)"),(0,l.kt)("li",{parentName:"ul"},"SHA-256"),(0,l.kt)("li",{parentName:"ul"},"SHA-256-sess"),(0,l.kt)("li",{parentName:"ul"},"SHA-512"),(0,l.kt)("li",{parentName:"ul"},"SHA-512-sess"))),(0,l.kt)("li",{parentName:"ul"},"qop - quality of protection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"auth",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HA2 = MD5(method:digestURI)"),(0,l.kt)("li",{parentName:"ul"},"response = MD5(HA1:nonce:nonceCount:cnonce:qop:HA2)"))),(0,l.kt)("li",{parentName:"ul"},"auth-int",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HA2 = MD5(method:digestURI:MD5(entityBody))"),(0,l.kt)("li",{parentName:"ul"},"response = MD5(HA1:nonce:nonceCount:cnonce:qop:HA2)"))),(0,l.kt)("li",{parentName:"ul"},"\u65e0 - response = MD5(HA1:nonce:HA2)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HA1 = MD5(username:realm:password)\nHA2 = MD5(method:digestURI)\nresponse = MD5(HA1:nonce:HA2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u8fd4\u56de challange")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.0 401 Unauthorized\nServer: HTTPd/0.9\nDate: Sun, 10 Apr 2014 20:26:47 GMT\nWWW-Authenticate: Digest realm="testrealm@host.com",\n                        qop="auth,auth-int",\n                        nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",\n                        opaque="5ccc069c403ebaf9f0171e9517f40e41"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e26 Auth \u8bf7\u6c42")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'GET /dir/index.html HTTP/1.0\nHost: localhost\nAuthorization: Digest username="Mufasa",\n                     realm="testrealm@host.com",\n                     nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",\n                     uri="/dir/index.html",\n                     qop=auth,\n                     nc=00000001,\n                     cnonce="0a4f113b",\n                     response="6629fae49393a05397450978507c4ef1",\n                     opaque="5ccc069c403ebaf9f0171e9517f40e41"\n')),(0,l.kt)("h2",{id:"forwarded"},"Forwarded"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"X-Forwarded-For",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"X-ProxyUser-Ip")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"X-Real-IP: 127.0.0.1\nX-Forwarded-For: 127.0.0.1\nX-Forwarded-Host: example.com\nX-Forwarded-Port: 443\nX-Forwarded-Proto: https\nX-Forwarded-Scheme: https\nX-Scheme: https\nX-Request-ID: -\n\n# Proxy \u81ea\u8eab\u4fe1\u606f\nVia:\n\n# \u65b0\u7684\u6807\u51c6\nForwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>\n")),(0,l.kt)("h2",{id:"x-content-type-options"},"X-Content-Type-Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nosniff",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u4f7f\u7528\u5934\u4e2d\u7684 mime \u7c7b\u578b\uff0c\u907f\u514d\u63a2\u6d4b mime \u7c7b\u578b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options"},"X-Content-Type-Options")),(0,l.kt)("li",{parentName:"ul"},"since Microsoft IE 8")),(0,l.kt)("h2",{id:"strict-transport-security"},"Strict-Transport-Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"STS")),(0,l.kt)("h2",{id:"encoding"},"Encoding"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Transfer-Encoding",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"chunked"),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u6307\u5b9a\u538b\u7f29"))),(0,l.kt)("li",{parentName:"ul"},"Content-Encoding",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"deflate - zlib"),(0,l.kt)("li",{parentName:"ul"},"gzip - LZ77"),(0,l.kt)("li",{parentName:"ul"},"br - brotli"),(0,l.kt)("li",{parentName:"ul"},"identity"),(0,l.kt)("li",{parentName:"ul"},"compress - LZW - Lempel-Ziv-Welc - \u4e0d\u518d\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"sdch - Shared Dictionary Compression for HTTP - Chrome v59 (2017-06-05)\u79fb\u9664"))),(0,l.kt)("li",{parentName:"ul"},"Content-Length=Transfer-Length=Entity-Length",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4e0d\u540c\u65f6\u4e0d\u5e94\u8be5\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u538b\u7f29\uff0c\u5219\u4e3a\u538b\u7f29\u540e\u7684\u5927\u5c0f")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding"},"HTTP Content Coding Registry"))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"},"Accept-Encoding")),(0,l.kt)("td",{parentName:"tr",align:null},"Content-Encoding")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Response",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Accept-Ranges: bytes|none - \u662f\u5426\u652f\u6301\u90e8\u5206\u8bf7\u6c42")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1\nRange: bytes=200-1000, 2000-6576, 19000-\n")),(0,l.kt)("h2",{id:"transfer-encoding-vs-content-encoding"},"Transfer-Encoding vs Content-Encoding"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Transfer-Encoding - \u53ef\u52a8\u6001\u4fee\u6539 - \u4f20\u8f93\u5c42"),(0,l.kt)("li",{parentName:"ul"},"Content-Encoding - \u4e0d\u8981\u52a8\u6001\u4fee\u6539 - \u4e1a\u52a1\u903b\u8f91\u5c42",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u5ba2\u6237\u7aef\u5b9e\u73b0\u90fd\u4f7f\u7528 Content-Encoding \u68c0\u6d4b\u538b\u7f29")))),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fd4\u56de content-encoding: gzip\ncurl -H 'Accept-encoding: gzip' -I https://s.wener.me\n\ncurl -H 'Accept-encoding: zstd, br, gzip, deflate' -I https://s.wener.me\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/en-us/articles/200168396"},"What will Cloudflare compress?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/11664307/1870054"},"https://stackoverflow.com/a/11664307/1870054"))),(0,l.kt)("h2",{id:"301-vs-302"},"301 vs 302"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"301 Moved Permanently",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6c38\u4e45\uff0c\u5ba2\u6237\u7aef\u4e0b\u6b21\u53ef\u80fd\u76f4\u63a5\u6620\u5c04\u91cd\u5b9a\u5411\u540e\u7684\u5730\u5740"))),(0,l.kt)("li",{parentName:"ul"},"302 Found / Moved Temporarily",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e34\u65f6\uff0c\u8fd8\u4f1a\u518d\u8bf7\u6c42")))))}k.isMDXComponent=!0}}]);