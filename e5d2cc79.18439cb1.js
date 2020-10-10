(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{563:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(9),a=(t(0),t(618)),c={id:"nmap",title:"NMap"},p={id:"ops/network/tool/nmap",title:"NMap",description:"# nmap",source:"@site/../tricks/ops/network/tool/nmap.md",permalink:"/notes/ops/network/tool/nmap",sidebar:"docs",previous:{title:"MitmProxy",permalink:"/notes/ops/network/tool/mitmproxy"},next:{title:"PowerDNS",permalink:"/notes/ops/network/tool/powerdns"}},i=[{value:"Tips",id:"tips",children:[]}],s={rightToc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"nmap"},"nmap"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://nmap.org/nsedoc/scripts/smb-protocols.html"}),"https://nmap.org/nsedoc/scripts/smb-protocols.html")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://hackertarget.com/nmap-cheatsheet-a-quick-reference-guide/"}),"https://hackertarget.com/nmap-cheatsheet-a-quick-reference-guide/"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# UDP \u7aef\u53e3\u626b\u63cf\n# \u9700\u8981 ICMP, \u6240\u4ee5\u8981 sudo\n# \u53ef\u80fd\u4f1a\u4e0d\u51c6 https://en.wikipedia.org/wiki/Port_scanner#UDP_scanning\nsudo nmap -sU -p port target\n\n# \u679a\u4e3e smb \u8d21\u732e\nnmap --script smb-enum-shares.nse -p445\n\n# \u534f\u8bae\u63a2\u6d4b\nnmap -p445 --script smb-protocols 192.168.0.0/24\nnmap -p139 --script smb-protocols\n\n# UDP\n# Listen\nnetcat -ul 2115\n# \u7aef\u53e3\u68c0\u6d4b\nnetcat -zv -u 127.0.0.1  2115\nls /usr/local/opt/nmap/bin\n# ncat  ndiff  nmap  nping  uninstall_ndiff\n\n# \u76d1\u542c UDP\nncat -vvvkul 0.0.0.0 18009 --exec 'echo found'\n# \u6d4b\u8bd5\u7aef\u53e3\u5f00\u53d1\nnmap -sU -p 18009 127.0.0.1\n# \u6d4b\u8bd5\u6570\u636e\u53d1\u9001\necho check | ncat -vu 192.168.8.110 18009\n\n# https://nmap.org/ncat/guide/ncat-usage.html\nman ncat\n\n\n# \u7aef\u53e3\u8f6c\u53d1\n# \u53ef\u4f7f\u7528\u53d8\u91cf\n# NCAT_REMOTE_ADDR, NCAT_REMOTE_PORT\n# NCAT_LOCAL_ADDR, NCAT_LOCAL_PORT\n# NCAT_PROTO\nncat -l localhost 8080 --sh-exec \"ncat wener.me 80\"\n")))}l.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return t?o.a.createElement(f,p(p({ref:n},s),{},{components:t})):o.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);