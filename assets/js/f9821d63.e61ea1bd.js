"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95819],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74490:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var r=t(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&p(e,t,n[t]);return e};const m={title:"Dante"},u="Dante",f={unversionedId:"service/network/dante",id:"service/network/dante",title:"Dante",description:"- dante",source:"@site/../notes/service/network/dante.md",sourceDirName:"service/network",slug:"/service/network/dante",permalink:"/notes/service/network/dante",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/dante.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"Dante"},sidebar:"docs",previous:{title:"curl",permalink:"/notes/service/network/curl"},next:{title:"FRP",permalink:"/notes/service/network/frp"}},k={},b=[],y={toc:b};function w(e){var n,t=e,{components:o}=t,p=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=d(d({},y),p),a(n,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"dante"}),"Dante"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"http://www.inet.no/dante/"}),"dante"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"consists of a SOCKS server and a SOCKS client"),(0,r.kt)("li",{parentName:"ul"},"[\u6587\u6863]","](",(0,r.kt)("a",d({parentName:"li"},{href:"https://www.inet.no/dante/doc/1.4.x/index.html"}),"https://www.inet.no/dante/doc/1.4.x/index.html"),")"))),(0,r.kt)("li",{parentName:"ul"},"sockd - \u670d\u52a1\u7aef"),(0,r.kt)("li",{parentName:"ul"},"socks - \u5ba2\u6237\u7aef"),(0,r.kt)("li",{parentName:"ul"},"socksify - \u57fa\u4e8e LD_PRELOAD \u7684\u4ee3\u7406"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://lvii.gitbooks.io/outman/content/dante.html"}),"https://lvii.gitbooks.io/outman/content/dante.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://www.inet.no/dante/doc/1.4.x/sockd.conf.5.html"}),"sockd.conf.5"))),(0,r.kt)("admonition",d({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u4e86 ipsec\uff0c\u5219 external \u9700\u8981\u914d\u7f6e ipsec \u7684 left \u5730\u5740 - \u5426\u5219\u4e0d\u4f1a\u7ecf\u8fc7 ipsec")),(0,r.kt)("p",{parentName:"admonition"},"::"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# macOS \u5b89\u88c5\nbrew install dante\n\n# \u670d\u52a1\u7aef\u5b89\u88c5\napk add dante{,-server}\n\n# \u6821\u9a8c\u914d\u7f6e\u6587\u4ef6\nsockd -V -f /etc/sockd.conf\n\n# Docker \u542f\u52a8\n# \u901a\u8fc7 ip \u9650\u5236\u8bbf\u95ee\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 127.0.0.1:8888:8888 \\\n  --name dante wener/dante\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"sockd.conf")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u89c4\u5219\u6761\u4ef6 clientcompatibility, clientmethod, command, from, group, socksmethod, protocol, proxyprotocol, to, user"),(0,r.kt)("li",{parentName:"ul"},"\u89c4\u5219\u52a8\u4f5c bandwidth, libwrap, log, session, redirect, timeout.connect, timeout.negotiate, timeout.io, timeout.tcp_fin_wait, udp.portrange")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-conf"}),"# \u65e5\u5fd7\u8f93\u51fa\nlogoutput: stdout\n# \u76d1\u542c\u5730\u5740\n# \u53ef\u4ee5\u662f\u5730\u5740\u6216 interface\ninternal: 0.0.0.0 port = 8888\n# \u51fa\u53e3\u7f51\u5361\u6216\u5730\u5740 - macOS \u4f7f\u7528 en0\nexternal: eth0\n# \u5ba2\u6237\u7aef\u6388\u6743\u65b9\u5f0f - \u652f\u6301 pam.address pam.any none rfc931\nclientmethod: none\n# \u670d\u52a1\u7aef\u9009\u62e9\u7684\u6388\u6743\u65b9\u5f0f\nsocksmethod: none\nuser.privileged: root\nuser.unprivileged: nobody\n# \u5ba2\u6237\u7aef\u89c4\u5219 - \u57fa\u4e8e\u5ba2\u6237\u7aef\u4fe1\u606f\u8fdb\u884c\u7684\u89c4\u5219\u6821\u9a8c\n# --------\n# \u63a5\u6536\u8bbf\u95ee\nclient pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  log: error\n}\n# \u7981\u6b62\u8bbf\u95ee 127/8\nclient block {\n  from: 0.0.0.0/0 to: 127.0.0.0/8\n  log: error\n}\n# socks \u89c4\u5219 - \u57fa\u4e8e socks \u534f\u8bae\u5c42\u4fe1\u606f\u8fdb\u884c\u7684\u89c4\u5219\u6821\u9a8c\n# --------\nsocks pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  # \u5e94\u7528\u89c4\u5219\u7684\u6307\u4ee4 bind, bindreply, connect, udpassociate, udpreply\n  command: bind connect udpassociate\n}\nsocks pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  command: bindreply udpreply\n  log: error\n}\nsocks block {\n  from: 0.0.0.0/0 to: 127.0.0.0/8\n  command: bind connect udpassociate\n  log: connect error\n}\n")),(0,r.kt)("h2",d({parentName:"admonition"},{id:"\u57fa\u7840\u914d\u7f6e"}),"\u57fa\u7840\u914d\u7f6e"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-pre",metastring:'title="sockd.conf"',title:'"sockd.conf"'}),"logoutput: stderr\ninternal: 0.0.0.0 port = 8888\n# External address or interface\nexternal: eth0\nclientmethod: none\nsocksmethod: none\nuser.privileged: root\nuser.unprivileged: nobody\nclient pass {\n        from: 0.0.0.0/0 to: 0.0.0.0/0\n        log: error\n}\nclient block {\n        from: 0.0.0.0/0 to: 127.0.0.0/8\n        log: error\n}\nsocks pass {\n        from: 0.0.0.0/0 to: 0.0.0.0/0\n        command: bind connect udpassociate\n}\nsocks pass {\n        from: 0.0.0.0/0 to: 0.0.0.0/0\n        command: bindreply udpreply\n        log: error\n}\nsocks block {\n        from: 0.0.0.0/0 to: 127.0.0.0/8\n        command: bind connect udpassociate\n        log: connect error\n}\n"))))}w.isMDXComponent=!0}}]);