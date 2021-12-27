"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85955],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53992:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Dante"},l=void 0,s={unversionedId:"service/network/dante",id:"service/network/dante",title:"Dante",description:"Tips",source:"@site/notes/service/network/dante.md",sourceDirName:"service/network",slug:"/service/network/dante",permalink:"/notes/service/network/dante",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/dante.md",tags:[],version:"current",frontMatter:{title:"Dante"},sidebar:"docs",previous:{title:"curl",permalink:"/notes/service/network/curl"},next:{title:"DNS",permalink:"/notes/service/network/dns"}},p=[{value:"Tips",id:"tips",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.inet.no/dante/"},"dante"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"consists of a SOCKS server and a SOCKS client"),(0,a.kt)("li",{parentName:"ul"},"[\u6587\u6863]","](",(0,a.kt)("a",{parentName:"li",href:"https://www.inet.no/dante/doc/1.4.x/index.html"},"https://www.inet.no/dante/doc/1.4.x/index.html"),")"))),(0,a.kt)("li",{parentName:"ul"},"sockd - \u670d\u52a1\u7aef"),(0,a.kt)("li",{parentName:"ul"},"socks - \u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ul"},"socksify - \u57fa\u4e8e LD_PRELOAD \u7684\u4ee3\u7406"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lvii.gitbooks.io/outman/content/dante.html"},"https://lvii.gitbooks.io/outman/content/dante.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.inet.no/dante/doc/1.4.x/sockd.conf.5.html"},"sockd.conf.5")),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u4e86 ipsec\uff0c\u5219 external \u9700\u8981\u914d\u7f6e ipsec \u7684 left \u5730\u5740 - \u5426\u5219\u4e0d\u4f1a\u7ecf\u8fc7 ipsec")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS \u5b89\u88c5\nbrew install dante\n\n# \u670d\u52a1\u7aef\u5b89\u88c5\napk add dante{,-server}\n\n# \u6821\u9a8c\u914d\u7f6e\u6587\u4ef6\nsockd -V -f /etc/sockd.conf\n\n# Docker \u542f\u52a8\n# \u901a\u8fc7 ip \u9650\u5236\u8bbf\u95ee\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 127.0.0.1:8888:8888 \\\n  --name dante wener/dante\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sockd.conf")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89c4\u5219\u6761\u4ef6 clientcompatibility, clientmethod, command, from, group, socksmethod, protocol, proxyprotocol, to, user"),(0,a.kt)("li",{parentName:"ul"},"\u89c4\u5219\u52a8\u4f5c bandwidth, libwrap, log, session, redirect, timeout.connect, timeout.negotiate, timeout.io, timeout.tcp_fin_wait, udp.portrange")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# \u65e5\u5fd7\u8f93\u51fa\nlogoutput: stdout\n# \u76d1\u542c\u5730\u5740\ninternal: 0.0.0.0 port = 8888\n# \u51fa\u53e3\u7f51\u5361\u6216\u5730\u5740 - macOS \u4f7f\u7528 en0\nexternal: eth0\n# \u5ba2\u6237\u7aef\u6388\u6743\u65b9\u5f0f - \u652f\u6301 pam.address pam.any none rfc931\nclientmethod: none\n# \u670d\u52a1\u7aef\u9009\u62e9\u7684\u6388\u6743\u65b9\u5f0f\nsocksmethod: none\nuser.privileged: root\nuser.unprivileged: nobody\n# \u5ba2\u6237\u7aef\u89c4\u5219 - \u57fa\u4e8e\u5ba2\u6237\u7aef\u4fe1\u606f\u8fdb\u884c\u7684\u89c4\u5219\u6821\u9a8c\n# --------\n# \u63a5\u6536\u8bbf\u95ee\nclient pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  log: error\n}\n# \u7981\u6b62\u8bbf\u95ee 127/8\nclient block {\n  from: 0.0.0.0/0 to: 127.0.0.0/8\n  log: error\n}\n# socks \u89c4\u5219 - \u57fa\u4e8e socks \u534f\u8bae\u5c42\u4fe1\u606f\u8fdb\u884c\u7684\u89c4\u5219\u6821\u9a8c\n# --------\nsocks pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  # \u5e94\u7528\u89c4\u5219\u7684\u6307\u4ee4 bind, bindreply, connect, udpassociate, udpreply\n  command: bind connect udpassociate\n}\nsocks pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  command: bindreply udpreply\n  log: error\n}\nsocks block {\n  from: 0.0.0.0/0 to: 127.0.0.0/8\n  command: bind connect udpassociate\n  log: connect error\n}\n")))}m.isMDXComponent=!0}}]);